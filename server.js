import http from "node:http";
import { createReadStream } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const startPort = Number.parseInt(process.env.PORT || "4173", 10);
const maxBodyBytes = 32 * 1024;
const rateBuckets = new Map();

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".ico", "image/x-icon"]
]);

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  setSecurityHeaders(res);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body)
  });
  res.end(body);
}

function setSecurityHeaders(res) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=()");
  res.setHeader(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self'",
      "style-src 'self' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' https://images.unsplash.com data:",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'"
    ].join("; ")
  );
}

function cleanString(value, maxLength = 160) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .normalize("NFKC")
    .replace(/[\u0000-\u001f\u007f<>`]/g, "")
    .trim()
    .slice(0, maxLength);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);
}

function checkRateLimit(req, res, scope, limit = 40, windowMs = 60_000) {
  const ip = req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.socket.remoteAddress || "local";
  const key = `${scope}:${ip}`;
  const now = Date.now();
  const bucket = rateBuckets.get(key) || { count: 0, resetAt: now + windowMs };

  if (bucket.resetAt <= now) {
    bucket.count = 0;
    bucket.resetAt = now + windowMs;
  }

  bucket.count += 1;
  rateBuckets.set(key, bucket);

  if (bucket.count > limit) {
    sendJson(res, 429, { ok: false, message: "Too many requests. Please wait a moment and try again." });
    return false;
  }

  return true;
}

async function readJson(req) {
  const chunks = [];
  let size = 0;

  for await (const chunk of req) {
    size += chunk.length;
    if (size > maxBodyBytes) {
      throw new Error("Payload too large");
    }
    chunks.push(chunk);
  }

  if (!chunks.length) {
    return {};
  }

  return JSON.parse(Buffer.concat(chunks).toString("utf-8"));
}

async function handleApi(req, res, route) {
  if (req.method !== "POST") {
    sendJson(res, 405, { ok: false, message: "Method not allowed" });
    return;
  }

  if (!checkRateLimit(req, res, route, route.includes("checkout") ? 10 : 30)) {
    return;
  }

  let payload;
  try {
    payload = await readJson(req);
  } catch {
    sendJson(res, 400, { ok: false, message: "Invalid request body" });
    return;
  }

  if (route === "/api/contact") {
    const name = cleanString(payload.name, 80);
    const email = cleanString(payload.email, 120);
    const topic = cleanString(payload.topic, 80);
    const message = cleanString(payload.message, 1200);

    if (!name || !isEmail(email) || message.length < 12) {
      sendJson(res, 422, { ok: false, message: "Please enter a valid name, email, and message." });
      return;
    }

    sendJson(res, 200, { ok: true, message: "Your message was received.", ticket: `RSH-${Date.now().toString(36).toUpperCase()}` });
    return;
  }

  if (route === "/api/auth/login") {
    const email = cleanString(payload.email, 120);
    const password = cleanString(payload.password, 160);

    if (!isEmail(email) || password.length < 8) {
      sendJson(res, 401, { ok: false, message: "Invalid sign-in details." });
      return;
    }

    sendJson(res, 200, {
      ok: true,
      user: { name: "ROSH Client", email },
      sessionExpiresIn: 1800
    });
    return;
  }

  if (route === "/api/checkout") {
    const cart = Array.isArray(payload.cart) ? payload.cart : [];
    const customer = payload.customer || {};
    const address = payload.address || {};
    const paymentToken = cleanString(payload.paymentToken, 80);
    const email = cleanString(customer.email, 120);
    const name = cleanString(customer.name, 120);
    const line1 = cleanString(address.line1, 160);
    const city = cleanString(address.city, 80);
    const postal = cleanString(address.postal, 24);

    const totalQuantity = cart.reduce((sum, item) => sum + Math.max(0, Number.parseInt(item.quantity || 0, 10)), 0);

    if (!cart.length || totalQuantity < 1 || !name || !isEmail(email) || !line1 || !city || !postal || !paymentToken.startsWith("tok_")) {
      sendJson(res, 422, { ok: false, message: "Please review your checkout details." });
      return;
    }

    sendJson(res, 200, {
      ok: true,
      orderId: `ROSH-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
      status: "confirmed",
      deliveryEstimate: "4-6 business days"
    });
    return;
  }

  sendJson(res, 404, { ok: false, message: "API route not found" });
}

async function serveStatic(req, res, pathname) {
  const requested = pathname === "/" ? "/index.html" : pathname;
  const decoded = decodeURIComponent(requested);
  const safePath = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, safePath);

  if (!filePath.startsWith(root)) {
    sendJson(res, 403, { ok: false, message: "Forbidden" });
    return;
  }

  try {
    const stat = await fs.stat(filePath);
    if (!stat.isFile()) {
      throw new Error("Not a file");
    }

    const ext = path.extname(filePath).toLowerCase();
    setSecurityHeaders(res);
    res.writeHead(200, {
      "Content-Type": mimeTypes.get(ext) || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    createReadStream(filePath).pipe(res);
  } catch {
    const fallback = path.join(root, "index.html");
    setSecurityHeaders(res);
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
    createReadStream(fallback).pipe(res);
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);

  if (url.pathname.startsWith("/api/")) {
    await handleApi(req, res, url.pathname);
    return;
  }

  await serveStatic(req, res, url.pathname);
});

function listen(port) {
  server.once("error", (error) => {
    if (error.code === "EADDRINUSE" && port < startPort + 20) {
      listen(port + 1);
      return;
    }
    console.error(error);
    process.exit(1);
  });

  server.listen(port, () => {
    console.log(`ROSH running at http://localhost:${port}`);
  });
}

listen(startPort);
