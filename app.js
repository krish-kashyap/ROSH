"use strict";

const app = document.querySelector("#app");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const modalRoot = document.querySelector("[data-modal-root]");
const toastRoot = document.querySelector("[data-toasts]");

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

const icons = {
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M6 8h12l-1 13H7L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="m20 6-11 11-5-5"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><rect width="16" height="11" x="4" y="11" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>',
  minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M5 12h14"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M10 17h4V5H2v12h3"/><path d="M14 17h1m5 0h2v-5l-3-4h-5"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M3 7h18v14H3z"/><path d="M16 12h5v4h-5z"/><path d="M3 7l13-4v4"/></svg>'
};

const icon = (name) => icons[name] || icons.arrowRight;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function slugify(value) {
  return String(value).toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function img(id, width = 1200) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
}

const heroImages = {
  home: img("photo-1496747611176-843222e1e57c", 1900),
  men: img("photo-1516257984-b1b4d707412e", 1700),
  women: img("photo-1509631179647-0177331693ae", 1700),
  children: img("photo-1503454537195-1dcabb73ffb9", 1700),
  atelier: img("photo-1515886657613-9f3515b0c78f", 1500),
  contact: img("photo-1483985988355-763728e1935b", 1500)
};

const imagePools = {
  men: [
    img("photo-1516257984-b1b4d707412e"),
    img("photo-1500648767791-00dcc994a43e"),
    img("photo-1516826957135-700dedea698c"),
    img("photo-1520975867597-0af37a22e31e"),
    img("photo-1521572163474-6864f9cf17ab"),
    img("photo-1552374196-1ab2a1c593e8"),
    img("photo-1515886657613-9f3515b0c78f"),
    img("photo-1506629905607-d9f018e7c91e")
  ],
  women: [
    img("photo-1529139574466-a303027c1d8b"),
    img("photo-1509631179647-0177331693ae"),
    img("photo-1496747611176-843222e1e57c"),
    img("photo-1483985988355-763728e1935b"),
    img("photo-1503342217505-b0a15ec3261c"),
    img("photo-1515886657613-9f3515b0c78f"),
    img("photo-1524504388940-b1c1722653e1"),
    img("photo-1487412720507-e7ab37603c6f")
  ],
  children: [
    img("photo-1503454537195-1dcabb73ffb9"),
    img("photo-1524503033411-c9566986fc8f"),
    img("photo-1546015720-b8b30df5aa27"),
    img("photo-1518831959646-742c3a14ebf7"),
    img("photo-1522771930-78848d9293e8"),
    img("photo-1519238263530-99bdd11df2ea"),
    img("photo-1503919545889-aef636e10ad4"),
    img("photo-1600369671236-e74521d4b6ad")
  ],
  shoes: [
    img("photo-1542291026-7eec264c27ff"),
    img("photo-1549298916-b41d501d3772"),
    img("photo-1511556532299-8f662fc26c06"),
    img("photo-1525966222134-fcfa99b8ae77"),
    img("photo-1600185365483-26d7a4cc7519"),
    img("photo-1491553895911-0055eca6402d")
  ],
  accessories: [
    img("photo-1511499767150-a48a237f0083"),
    img("photo-1523275335684-37898b6baf30"),
    img("photo-1548036328-c9fa89d128fa"),
    img("photo-1515562141207-7a88fb7ce338"),
    img("photo-1584917865442-de89df76afd3"),
    img("photo-1506629905607-d9f018e7c91e"),
    img("photo-1599643478518-a784e5dc4c8f"),
    img("photo-1606760227091-3dd870d97f1d")
  ]
};

const departments = {
  women: {
    label: "Women's Collection",
    nav: "Women",
    eyebrow: "Soft power, sculpted form",
    intro: "Fluid tailoring, luminous textures, evening pieces, and everyday icons selected for a refined modern wardrobe.",
    hero: heroImages.women,
    accent: "Atelier femininity"
  },
  men: {
    label: "Men's Collection",
    nav: "Men",
    eyebrow: "Discipline, texture, precision",
    intro: "A complete library of tailoring, quiet sportswear, polished shoes, and elevated essentials for day-to-night dressing.",
    hero: heroImages.men,
    accent: "Measured tailoring"
  },
  children: {
    label: "Children's Collection",
    nav: "Children",
    eyebrow: "Playful luxury, easy movement",
    intro: "Modern kidswear, school-ready layers, seasonal outfits, shoes, and keepsake accessories with the ROSH finish.",
    hero: heroImages.children,
    accent: "Mini couture"
  }
};

const baseCategories = [
  "T-Shirts",
  "Shirts",
  "Hoodies",
  "Jackets",
  "Blazers",
  "Pants",
  "Jeans",
  "Shorts",
  "Ethnic Wear",
  "Winter Wear",
  "Sneakers",
  "Formal Shoes",
  "Boots",
  "Sandals",
  "Caps",
  "Hats",
  "Sunglasses / Goggles",
  "Watches",
  "Bags",
  "Wallets",
  "Jewelry",
  "Belts",
  "Scarves",
  "Accessories",
  "Seasonal Fashion",
  "Premium Limited Editions"
];

const childExtras = ["School Fashion", "Play Sets", "Celebration Wear"];

const categoryNames = {
  "T-Shirts": ["Mercerized Cotton T-Shirt", "Minimal Logo Tee", "Silk Touch Crew"],
  "Shirts": ["Italian Poplin Shirt", "Relaxed Oxford Shirt", "Evening Collar Shirt"],
  Hoodies: ["Cashmere Blend Hoodie", "Sculpted Travel Hoodie", "Quiet Logo Hoodie"],
  Jackets: ["Cropped City Jacket", "Weatherproof Field Jacket", "Leather Trim Jacket"],
  Blazers: ["Double Breasted Blazer", "Unstructured Linen Blazer", "Evening Tux Blazer"],
  Pants: ["Tailored Pleat Trouser", "Relaxed Wool Pant", "Sateen Utility Pant"],
  Jeans: ["Selvedge Straight Jean", "Soft Washed Denim", "Tapered Archive Jean"],
  Shorts: ["Resort Tailored Short", "Cotton Twill Short", "Weekend Drawstring Short"],
  "Ethnic Wear": ["Embroidered Kurta Set", "Silk Occasion Ensemble", "Heritage Woven Set"],
  "Winter Wear": ["Alpaca Long Coat", "Quilted Down Layer", "Merino Rib Sweater"],
  Sneakers: ["Monochrome Leather Sneaker", "Reserve Runner", "Court Low Sneaker"],
  "Formal Shoes": ["Patent Evening Shoe", "Polished Derby", "Pointed Slingback"],
  Boots: ["Chelsea Leather Boot", "Weathered Riding Boot", "Lug Sole Ankle Boot"],
  Sandals: ["Minimal Strap Sandal", "Resort Leather Slide", "Soft Buckle Sandal"],
  Caps: ["Brushed Cotton Cap", "Monogram Sport Cap", "Travel Visor Cap"],
  Hats: ["Wool Felt Hat", "Resort Straw Hat", "Structured Bucket Hat"],
  "Sunglasses / Goggles": ["Aviator Sunglasses", "Sculpted Acetate Frames", "Shield Travel Goggles"],
  Watches: ["Slimline Steel Watch", "Ceramic Evening Watch", "Gold Mesh Timepiece"],
  Bags: ["Soft Trunk Bag", "Everyday Leather Tote", "Mini Saddle Bag"],
  Wallets: ["Calfskin Card Wallet", "Zip Continental Wallet", "Travel Passport Folio"],
  Jewelry: ["Pearl Collar Necklace", "Signet Ring Set", "Brushed Cuff Bracelet"],
  Belts: ["Reversible Leather Belt", "Sculpted Buckle Belt", "Braided Resort Belt"],
  Scarves: ["Silk Monogram Scarf", "Cashmere Travel Wrap", "Light Modal Stole"],
  Accessories: ["Leather Tech Pouch", "Travel Grooming Kit", "Evening Ornament Set"],
  "Seasonal Fashion": ["Holiday Capsule Look", "Monsoon Layer Set", "Summer Linen Edit"],
  "Premium Limited Editions": ["Numbered Atelier Piece", "Runway Reserve Look", "Private Client Edition"],
  "School Fashion": ["Prep Blazer Uniform", "Smart School Set", "Polished Backpack Look"],
  "Play Sets": ["Soft Jersey Play Set", "Weekend Utility Set", "Mini Resort Co-ord"],
  "Celebration Wear": ["Velvet Party Set", "Silk Ceremony Look", "Embroidered Festive Set"]
};

const colorNames = {
  black: "Black",
  ivory: "Ivory",
  sand: "Sand",
  cedar: "Cedar",
  sage: "Sage",
  navy: "Navy",
  blush: "Blush",
  gold: "Gold",
  graphite: "Graphite",
  denim: "Denim"
};

const colorSets = [
  ["black", "ivory", "sand"],
  ["cedar", "sage", "ivory"],
  ["navy", "graphite", "black"],
  ["blush", "ivory", "gold"],
  ["denim", "sand", "black"]
];

const badges = ["New", "Trending", "Limited Edition", "Sale"];

function categoryKind(category) {
  if (["Sneakers", "Formal Shoes", "Boots", "Sandals"].includes(category)) {
    return "shoes";
  }

  if (["Caps", "Hats", "Sunglasses / Goggles", "Watches", "Bags", "Wallets", "Jewelry", "Belts", "Scarves", "Accessories"].includes(category)) {
    return "accessories";
  }

  return "apparel";
}

function categoriesFor(department) {
  return department === "children" ? [...baseCategories, ...childExtras] : baseCategories;
}

function priceFor(category, department, index, variant) {
  const kind = categoryKind(category);
  const base = kind === "accessories" ? 68 : kind === "shoes" ? 140 : 118;
  const deptAdjustment = department === "children" ? -36 : department === "women" ? 8 : 16;
  const premium = category.includes("Premium") ? 260 : category.includes("Winter") || category.includes("Blazer") ? 130 : 0;
  return Math.max(38, base + deptAdjustment + premium + (index % 8) * 18 + variant * 26);
}

function createProducts() {
  const products = [];
  const prefixes = {
    women: ["Noir", "Lumi", "Serra", "Maison", "Celeste", "Aurel"],
    men: ["Noir", "Cedar", "Monarch", "Atlas", "Mercer", "Vale"],
    children: ["Mini", "Little", "Bright", "Junior", "Petit", "Play"]
  };

  Object.keys(departments).forEach((department) => {
    categoriesFor(department).forEach((category, categoryIndex) => {
      const names = categoryNames[category] || [`${category} Edit`, `${category} Piece`];
      const variants = category.includes("Premium") || category.includes("Seasonal") ? 3 : 2;

      for (let variant = 0; variant < variants; variant += 1) {
        const kind = categoryKind(category);
        const pool = kind === "apparel" ? imagePools[department] : imagePools[kind];
        const imageIndex = (categoryIndex * 2 + variant) % pool.length;
        const price = priceFor(category, department, categoryIndex, variant);
        const sale = (categoryIndex + variant) % 7 === 0;
        const badge = category.includes("Premium") ? "Limited Edition" : badges[(categoryIndex + variant + department.length) % badges.length];
        const name = `${prefixes[department][(categoryIndex + variant) % prefixes[department].length]} ${names[variant % names.length]}`;
        const id = `${department}-${slugify(category)}-${variant + 1}`;

        products.push({
          id,
          department,
          category,
          name,
          badge: sale ? "Sale" : badge,
          price: sale ? Math.round(price * 0.82) : price,
          oldPrice: sale ? price : null,
          rating: (4.5 + ((categoryIndex + variant) % 5) / 10).toFixed(1),
          stock: 8 + ((categoryIndex + variant) % 22),
          image: pool[imageIndex],
          hoverImage: pool[(imageIndex + 1) % pool.length],
          colors: colorSets[(categoryIndex + variant) % colorSets.length],
          sizes: department === "children" ? ["2Y", "4Y", "6Y", "8Y", "10Y", "12Y"] : kind === "accessories" ? ["One Size"] : ["XS", "S", "M", "L", "XL"],
          material: kind === "shoes" ? "Italian leather, cushioned insole, hand-finished sole" : kind === "accessories" ? "Calfskin, plated hardware, brushed textile lining" : "Premium natural fibers with a soft structured finish",
          care: "Professional clean recommended. Store in the ROSH garment bag between wears.",
          story: `${departments[department].accent} expressed through ${category.toLowerCase()} with a restrained silhouette and tactile finish.`,
          rank: categoryIndex * 10 + variant
        });
      }
    });
  });

  return products;
}

const products = createProducts();

const state = {
  cart: loadStore("rosh_cart", []),
  wishlist: loadStore("rosh_wishlist", []),
  lastOrder: loadStore("rosh_last_order", null),
  catalog: {
    women: { category: "All", search: "", sort: "featured", price: "all", badge: "all", visible: 24 },
    men: { category: "All", search: "", sort: "featured", price: "all", badge: "all", visible: 24 },
    children: { category: "All", search: "", sort: "featured", price: "all", badge: "all", visible: 24 }
  },
  dashboardTab: "overview"
};

function loadStore(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function byId(id) {
  return products.find((product) => product.id === id);
}

function renderIconPlaceholders(root = document) {
  root.querySelectorAll("[data-icon]").forEach((element) => {
    element.innerHTML = icon(element.dataset.icon);
  });
}

function updateCounters() {
  const cartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll("[data-cart-count]").forEach((element) => {
    element.textContent = cartCount;
  });
  document.querySelectorAll("[data-wishlist-count]").forEach((element) => {
    element.textContent = state.wishlist.length;
  });
}

function toast(message) {
  const element = document.createElement("div");
  element.className = "toast";
  element.textContent = message;
  toastRoot.append(element);
  window.setTimeout(() => element.remove(), 3600);
}

function animateCounter(selector) {
  const element = document.querySelector(selector);
  if (!element) return;
  element.classList.remove("animate-pop");
  void element.offsetWidth;
  element.classList.add("animate-pop");
}

function productCard(product) {
  const wished = state.wishlist.includes(product.id);
  const badgeClass = product.badge === "Sale" ? "badge badge--sale" : "badge";
  const price = product.oldPrice
    ? `<span>${currency.format(product.price)}</span><del>${currency.format(product.oldPrice)}</del>`
    : `<span>${currency.format(product.price)}</span>`;

  return `
    <article class="product-card reveal" data-product-card="${escapeHtml(product.id)}">
      <a class="product-media" href="#/product/${escapeHtml(product.id)}" aria-label="View ${escapeHtml(product.name)}">
        <span class="product-badges"><span class="${badgeClass}">${escapeHtml(product.badge)}</span></span>
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}">
        <img src="${escapeHtml(product.hoverImage)}" alt="">
      </a>
      <div class="product-actions" aria-label="Product actions">
        <button class="icon-button" type="button" data-quick-view="${escapeHtml(product.id)}" aria-label="Quick view ${escapeHtml(product.name)}">${icon("eye")}</button>
        <button class="icon-button ${wished ? "is-active" : ""}" type="button" data-wishlist="${escapeHtml(product.id)}" aria-label="Save ${escapeHtml(product.name)}">${icon("heart")}</button>
        <button class="icon-button" type="button" data-add-cart="${escapeHtml(product.id)}" aria-label="Add ${escapeHtml(product.name)} to cart">${icon("bag")}</button>
      </div>
      <div class="product-info">
        <div class="product-info__top">
          <span>${escapeHtml(product.category)}</span>
          <span class="rating">★ ${escapeHtml(product.rating)}</span>
        </div>
        <h3><a href="#/product/${escapeHtml(product.id)}">${escapeHtml(product.name)}</a></h3>
        <div class="price-row">${price}</div>
      </div>
    </article>
  `;
}

function heroSection() {
  return `
    <section class="hero">
      <div class="hero__image" aria-hidden="true">
        <img src="${heroImages.home}" alt="">
      </div>
      <div class="hero__content reveal">
        <p class="eyebrow">ROSH private season 2026</p>
        <h1>Quiet Luxury for Every Silhouette</h1>
        <p>A cinematic fashion house for women, men, and children, designed around refined essentials, limited edits, and modern heirloom dressing.</p>
        <div class="hero__actions">
          <a class="button button--dark" href="#/collection/women">Shop Women ${icon("arrowRight")}</a>
          <a class="button button--ghost" href="#/collection/men">Shop Men</a>
          <a class="button button--ghost" href="#/collection/children">Shop Children</a>
        </div>
      </div>
    </section>
  `;
}

function homePage() {
  const bestSellers = [
    ...products.filter((product) => product.badge === "Limited Edition").slice(0, 4),
    ...products.filter((product) => product.badge === "Trending").slice(6, 10)
  ].slice(0, 8);

  const accessories = products.filter((product) => categoryKind(product.category) === "accessories").slice(0, 8);

  return `
    ${heroSection()}
    <section class="brand-strip" aria-label="ROSH signatures">
      <span>Atelier</span>
      <span>Reserve</span>
      <span>Maison</span>
      <span>Studio</span>
      <span>Rosh</span>
    </section>

    <section class="section">
      <div class="section__head reveal">
        <div>
          <p class="eyebrow">Three worlds, one house</p>
          <h2>Collections with editorial clarity.</h2>
        </div>
        <a class="button button--soft" href="#/lookbook">View Lookbook ${icon("arrowRight")}</a>
      </div>
      <div class="editorial-grid">
        ${departmentEditorialCard("women", "Soft suiting, luminous knits, and occasion pieces with a precise feminine line.")}
        ${departmentEditorialCard("men", "Tailored layers, relaxed structure, and polished footwear for the modern wardrobe.")}
        ${departmentEditorialCard("children", "Playful luxury, school-ready styling, and keepsake details made to move.")}
      </div>
    </section>

    <section class="section section--tight">
      <div class="campaign">
        <div class="campaign__image reveal">
          <img src="${heroImages.atelier}" alt="ROSH seasonal tailoring campaign">
        </div>
        <div class="campaign__panel reveal">
          <p class="eyebrow">Deal of the week</p>
          <h2>Reserve pieces, private pricing.</h2>
          <p class="lead">A limited seasonal campaign across refined outerwear, premium footwear, and sculptural accessories.</p>
          <div class="countdown" aria-label="Campaign countdown">
            <div><strong>05</strong><span>Days</span></div>
            <div><strong>18</strong><span>Hours</span></div>
            <div><strong>34</strong><span>Mins</span></div>
            <div><strong>09</strong><span>Secs</span></div>
          </div>
          <a class="button button--dark" href="#/collection/women">Explore Campaign</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section__head reveal">
        <div>
          <p class="eyebrow">Best sellers</p>
          <h2>Pieces currently defining ROSH.</h2>
        </div>
        <a class="button button--ghost" href="#/collection/men">Shop All</a>
      </div>
      <div class="product-grid">
        ${bestSellers.map(productCard).join("")}
      </div>
    </section>

    <section class="section section--tight">
      <div class="feature-band reveal">
        <div class="feature-item">${icon("truck")}<div><strong>Fast Delivery</strong><span>Tracked dispatch on every order</span></div></div>
        <div class="feature-item">${icon("shield")}<div><strong>Protected Checkout</strong><span>Validated local payment flow</span></div></div>
        <div class="feature-item">${icon("heart")}<div><strong>Wishlist Sync</strong><span>Save collections for later</span></div></div>
        <div class="feature-item">${icon("wallet")}<div><strong>Private Portal</strong><span>Orders, invoices, and rewards</span></div></div>
      </div>
    </section>

    <section class="section">
      <div class="section__head reveal">
        <div>
          <p class="eyebrow">Accessories</p>
          <h2>The finishing language.</h2>
        </div>
        <a class="button button--soft" href="#/collection/women">Discover Accessories</a>
      </div>
      <div class="product-grid">
        ${accessories.map(productCard).join("")}
      </div>
    </section>

    ${lookbookPreview()}
  `;
}

function departmentEditorialCard(department, copy) {
  const data = departments[department];
  return `
    <a class="editorial-card reveal" href="#/collection/${department}">
      <img src="${data.hero}" alt="${data.label}">
      <div class="editorial-card__body">
        <p class="eyebrow">${escapeHtml(data.eyebrow)}</p>
        <h3>${escapeHtml(data.label)}</h3>
        <p>${escapeHtml(copy)}</p>
      </div>
    </a>
  `;
}

function lookbookPreview() {
  return `
    <section class="section">
      <div class="section__head reveal">
        <div>
          <p class="eyebrow">Lookbook & journal</p>
          <h2>Editorial notes from the house.</h2>
        </div>
        <a class="button button--ghost" href="#/lookbook">Read Journal</a>
      </div>
      <div class="blog-grid">
        ${blogCard("The New Minimal Suit", "Architectural tailoring softened by natural fiber and tonal styling.", imagePools.men[5])}
        ${blogCard("Women in Monochrome", "How ivory, graphite, and blush build a wardrobe that travels well.", imagePools.women[2])}
        ${blogCard("Small Ceremony Dressing", "Children's occasionwear with comfort, polish, and washable structure.", imagePools.children[3])}
      </div>
    </section>
  `;
}

function blogCard(title, copy, image) {
  return `
    <article class="blog-card reveal">
      <img src="${escapeHtml(image)}" alt="${escapeHtml(title)}">
      <div class="blog-card__body">
        <p class="eyebrow">Editorial</p>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(copy)}</p>
        <a class="button button--ghost" href="#/lookbook">Read More</a>
      </div>
    </article>
  `;
}

function pageHero(title, eyebrow, copy, image) {
  return `
    <section class="page-hero">
      <img src="${escapeHtml(image)}" alt="">
      <div class="page-hero__body reveal">
        <p class="eyebrow">${escapeHtml(eyebrow)}</p>
        <h1>${escapeHtml(title)}</h1>
        <p class="lead">${escapeHtml(copy)}</p>
      </div>
    </section>
  `;
}

function collectionPage(department) {
  const data = departments[department] || departments.women;
  const filters = state.catalog[department];

  return `
    ${pageHero(data.label, data.eyebrow, data.intro, data.hero)}
    <div class="collection-shell">
      <aside class="filters-panel reveal" aria-label="${escapeHtml(data.label)} filters">
        <h2>Refine Library</h2>
        <div class="filter-group">
          <label for="search-${department}">Search</label>
          <input id="search-${department}" data-filter="search" data-department="${department}" type="search" value="${escapeHtml(filters.search)}" placeholder="Search ${escapeHtml(data.nav)}">
        </div>
        <div class="filter-group">
          <label for="sort-${department}">Sort</label>
          <select id="sort-${department}" data-filter="sort" data-department="${department}">
            ${option("featured", "Featured", filters.sort)}
            ${option("newest", "Newest", filters.sort)}
            ${option("price-low", "Price Low to High", filters.sort)}
            ${option("price-high", "Price High to Low", filters.sort)}
            ${option("rating", "Highest Rated", filters.sort)}
          </select>
        </div>
        <div class="filter-group">
          <label for="price-${department}">Price</label>
          <select id="price-${department}" data-filter="price" data-department="${department}">
            ${option("all", "All Prices", filters.price)}
            ${option("under-100", "Under $100", filters.price)}
            ${option("100-250", "$100 - $250", filters.price)}
            ${option("250-plus", "$250+", filters.price)}
          </select>
        </div>
        <div class="filter-group">
          <label for="badge-${department}">Badge</label>
          <select id="badge-${department}" data-filter="badge" data-department="${department}">
            ${option("all", "All Badges", filters.badge)}
            ${option("New", "New", filters.badge)}
            ${option("Trending", "Trending", filters.badge)}
            ${option("Sale", "Sale", filters.badge)}
            ${option("Limited Edition", "Limited Edition", filters.badge)}
          </select>
        </div>
        <button class="button button--wide button--soft" type="button" data-reset-filters="${department}">Reset</button>
      </aside>
      <section data-catalog-main="${department}">
        ${collectionResults(department)}
      </section>
    </div>
  `;
}

function option(value, label, selected) {
  return `<option value="${escapeHtml(value)}" ${value === selected ? "selected" : ""}>${escapeHtml(label)}</option>`;
}

function collectionResults(department) {
  const filtered = filteredProducts(department);
  const filters = state.catalog[department];
  const visible = filtered.slice(0, filters.visible);
  const categoryButtons = ["All", ...categoriesFor(department)].map((category) => `
    <button class="tab-button ${filters.category === category ? "is-active" : ""}" type="button" data-category-tab="${escapeHtml(category)}" data-department="${department}">
      ${escapeHtml(category)}
    </button>
  `).join("");

  return `
    <div class="category-tabs reveal" aria-label="Category tabs">${categoryButtons}</div>
    <div class="collection-meta reveal">
      <span>${filtered.length} refined pieces</span>
      <span>${escapeHtml(filters.category)} · ${escapeHtml(departments[department].accent)}</span>
    </div>
    <div class="collection-editorial reveal">
      <div>
        <p class="eyebrow">Editorial insert</p>
        <h2>${escapeHtml(departments[department].accent)}</h2>
        <p>${escapeHtml(departments[department].intro)}</p>
      </div>
      <div>
        <p class="eyebrow">Browse by mood</p>
        <h3>Tailoring, seasonal layers, accessories, and limited pieces arranged as a complete fashion library.</h3>
      </div>
    </div>
    ${visible.length ? `<div class="product-grid">${visible.map(productCard).join("")}</div>` : emptyState("No pieces match this edit.", "Try a wider category or price range.")}
    ${filtered.length > visible.length ? `
      <div class="load-more reveal">
        <button class="button button--dark" type="button" data-load-more="${department}">Load More ${icon("plus")}</button>
      </div>
    ` : ""}
  `;
}

function filteredProducts(department) {
  const filters = state.catalog[department];
  const query = filters.search.trim().toLowerCase();

  const matches = products.filter((product) => {
    if (product.department !== department) return false;
    if (filters.category !== "All" && product.category !== filters.category) return false;
    if (filters.badge !== "all" && product.badge !== filters.badge) return false;
    if (query && !`${product.name} ${product.category} ${product.story}`.toLowerCase().includes(query)) return false;
    if (filters.price === "under-100" && product.price >= 100) return false;
    if (filters.price === "100-250" && (product.price < 100 || product.price > 250)) return false;
    if (filters.price === "250-plus" && product.price < 250) return false;
    return true;
  });

  const sorters = {
    featured: (a, b) => a.rank - b.rank,
    newest: (a, b) => b.rank - a.rank,
    "price-low": (a, b) => a.price - b.price,
    "price-high": (a, b) => b.price - a.price,
    rating: (a, b) => Number(b.rating) - Number(a.rating)
  };

  return matches.sort(sorters[filters.sort] || sorters.featured);
}

function emptyState(title, copy) {
  return `
    <div class="empty-state reveal">
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(copy)}</p>
      <a class="button button--dark" href="#/">Return Home</a>
    </div>
  `;
}

function refreshCatalog(department) {
  const main = document.querySelector(`[data-catalog-main="${department}"]`);
  if (!main) return;
  main.innerHTML = collectionResults(department);
  initReveal(main);
}

function productPage(productId) {
  const product = byId(productId);
  if (!product) {
    return emptyState("This piece has left the atelier.", "Explore the current season instead.");
  }

  const recommendations = products
    .filter((item) => item.department === product.department && item.id !== product.id)
    .slice(0, 4);

  return `
    <section class="pdp">
      <div class="pdp-gallery reveal">
        <div class="pdp-thumbs">
          ${[product.image, product.hoverImage, imagePools[product.department][2], imagePools[product.department][3]].map((image, index) => `
            <button class="pdp-thumb ${index === 0 ? "is-active" : ""}" type="button" data-gallery-image="${escapeHtml(image)}" aria-label="View image ${index + 1}">
              <img src="${escapeHtml(image)}" alt="">
            </button>
          `).join("")}
        </div>
        <button class="pdp-main" type="button" data-zoom-gallery aria-label="Zoom product image">
          <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" data-main-gallery>
        </button>
      </div>
      <div class="pdp-info reveal">
        <p class="eyebrow">${escapeHtml(product.category)} · ${escapeHtml(product.badge)}</p>
        <h1>${escapeHtml(product.name)}</h1>
        <div class="price-row">
          <span>${currency.format(product.price)}</span>
          ${product.oldPrice ? `<del>${currency.format(product.oldPrice)}</del>` : ""}
          <span class="rating">★ ${escapeHtml(product.rating)}</span>
        </div>
        <p>${escapeHtml(product.story)}</p>

        <h2 class="sr-only">Choose color and size</h2>
        <p class="eyebrow">Color</p>
        <div class="swatches" aria-label="Available colors">
          ${product.colors.map((color) => `<span class="swatch swatch--${escapeHtml(color)}" title="${escapeHtml(colorNames[color])}"></span>`).join("")}
        </div>
        <p class="eyebrow">Size</p>
        <div class="size-grid">
          ${product.sizes.map((size, index) => `<button class="size-option ${index === 0 ? "is-active" : ""}" type="button" data-size="${escapeHtml(size)}">${escapeHtml(size)}</button>`).join("")}
        </div>
        <div class="hero__actions">
          <button class="button button--dark" type="button" data-add-cart="${escapeHtml(product.id)}">Add to Cart ${icon("bag")}</button>
          <button class="button button--ghost" type="button" data-wishlist="${escapeHtml(product.id)}">Wishlist ${icon("heart")}</button>
        </div>

        <dl class="detail-list">
          <div><dt>Material</dt><dd>${escapeHtml(product.material)}</dd></div>
          <div><dt>Care</dt><dd>${escapeHtml(product.care)}</dd></div>
          <div><dt>Stock</dt><dd>${product.stock} pieces available online</dd></div>
          <div><dt>Delivery</dt><dd>Estimated delivery in 4-6 business days with tracked dispatch.</dd></div>
          <div><dt>Size Guide</dt><dd>Relaxed luxury fit. Choose your usual ROSH size or size up for layering.</dd></div>
        </dl>

        <div class="review-list">
          <article class="review-card">
            <strong>★★★★★ Beautiful finish</strong>
            <p>The fabric feels substantial without being heavy. Packaging was immaculate.</p>
          </article>
          <article class="review-card">
            <strong>★★★★☆ True luxury basic</strong>
            <p>Elegant cut, clean stitching, and easy to style across a travel wardrobe.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section__head reveal">
        <div>
          <p class="eyebrow">Recommended</p>
          <h2>Complete the silhouette.</h2>
        </div>
      </div>
      <div class="product-grid">${recommendations.map(productCard).join("")}</div>
    </section>
  `;
}

function aboutPage() {
  return `
    ${pageHero("About ROSH", "Luxury with restraint", "ROSH builds modern wardrobes through precise silhouettes, quiet materials, and a calm editorial point of view.", heroImages.atelier)}
    <section class="content-page">
      <div class="split-layout">
        <div class="reveal">
          <p class="eyebrow">The house</p>
          <h2>Designed for presence, not noise.</h2>
          <p class="lead">ROSH is a digital fashion house for clients who value shape, texture, and longevity. Each collection balances everyday usability with polished ceremony.</p>
          <p>Our catalog spans men's, women's, and children's fashion with a shared language: refined neutrals, exacting fits, thoughtful accessories, and an edited seasonal rhythm.</p>
        </div>
        <img class="reveal" src="${imagePools.women[4]}" alt="ROSH studio portrait">
      </div>
      <div class="dashboard-grid section--tight">
        ${statCard("156+", "Catalog pieces")}
        ${statCard("30 days", "Private returns")}
        ${statCard("4.8", "Average rating")}
      </div>
    </section>
  `;
}

function statCard(value, label) {
  return `<div class="dashboard-card reveal"><h3>${escapeHtml(value)}</h3><p>${escapeHtml(label)}</p></div>`;
}

function contactPage() {
  return `
    ${pageHero("Contact Us", "Client care", "Speak with ROSH stylists about orders, sizing, private appointments, returns, and collection advice.", heroImages.contact)}
    <section class="content-page">
      <div class="split-layout">
        <form class="panel form-grid reveal" data-contact-form>
          <label>Name<input name="name" autocomplete="name" required></label>
          <label>Email<input name="email" type="email" autocomplete="email" required></label>
          <label class="full">Topic<select name="topic"><option>Order Support</option><option>Styling Appointment</option><option>Returns</option><option>Private Client</option></select></label>
          <label class="full">Message<textarea name="message" required minlength="12"></textarea></label>
          <button class="button button--dark" type="submit">Send Message</button>
        </form>
        <div class="panel reveal">
          <p class="eyebrow">ROSH concierge</p>
          <h2>Personal styling, returns, and order support.</h2>
          <p>Email care@rosh.example</p>
          <p>Studio hours: 10:00 - 19:00, Monday to Saturday</p>
          <p>Flagship appointment lounge: New Delhi, India</p>
        </div>
      </div>
    </section>
  `;
}

function lookbookPage() {
  const stories = [
    ["The White Shirt Reconsidered", "Oversized cuffs, clean collars, and evening styling.", imagePools.women[0]],
    ["Tailoring After Dark", "Graphite suiting with polished accessories.", imagePools.men[0]],
    ["The Children's Resort Edit", "Soft sets, sandals, and sun hats for travel days.", imagePools.children[0]],
    ["Accessories as Architecture", "Frames, cuffs, bags, and belts with sculptural edges.", imagePools.accessories[0]],
    ["Winter in Quiet Layers", "Alpaca, merino, and matte outerwear in tonal neutrals.", imagePools.men[6]],
    ["Ceremony Dressing", "Silk occasion ensembles for intimate celebrations.", imagePools.women[5]]
  ];

  return `
    ${pageHero("Lookbook", "ROSH journal", "Editorial stories, seasonal campaigns, styling notes, and quiet luxury inspiration from the house.", imagePools.women[1])}
    <section class="content-page">
      <div class="blog-grid">
        ${stories.map(([title, copy, image]) => blogCard(title, copy, image)).join("")}
      </div>
    </section>
  `;
}

function wishlistPage() {
  const wished = state.wishlist.map(byId).filter(Boolean);

  return `
    ${pageHero("Wishlist", "Saved pieces", "Your private edit of ROSH items, ready to revisit when the season calls.", imagePools.accessories[2])}
    <section class="section">
      ${wished.length ? `<div class="product-grid">${wished.map(productCard).join("")}</div>` : emptyState("Your wishlist is empty.", "Save pieces from the catalog and build a private collection.")}
    </section>
  `;
}

function cartTotals() {
  const subtotal = state.cart.reduce((sum, item) => {
    const product = byId(item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 12;
  const tax = Math.round(subtotal * 0.08 * 100) / 100;
  const total = subtotal + shipping + tax;
  return { subtotal, shipping, tax, total };
}

function cartPage() {
  const totals = cartTotals();
  const lines = state.cart.map((item) => ({ item, product: byId(item.id) })).filter(({ product }) => product);

  return `
    ${pageHero("Shopping Cart", "Secure basket", "Review your ROSH edit before protected checkout.", imagePools.accessories[4])}
    <section class="content-page">
      ${lines.length ? `
      <div class="cart-layout">
        <div class="cart-lines">
          ${lines.map(({ item, product }) => cartLine(item, product)).join("")}
        </div>
        ${summaryPanel(totals, true)}
      </div>` : emptyState("Your cart is empty.", "Explore the current collection and add your first piece.")}
    </section>
  `;
}

function cartLine(item, product) {
  return `
    <article class="cart-line reveal">
      <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}">
      <div>
        <p class="eyebrow">${escapeHtml(product.category)} · ${escapeHtml(item.size)}</p>
        <h3><a href="#/product/${escapeHtml(product.id)}">${escapeHtml(product.name)}</a></h3>
        <p>${currency.format(product.price)}</p>
        <div class="quantity" aria-label="Quantity">
          <button type="button" data-cart-dec="${escapeHtml(product.id)}" data-size="${escapeHtml(item.size)}" aria-label="Decrease quantity">${icon("minus")}</button>
          <span>${item.quantity}</span>
          <button type="button" data-cart-inc="${escapeHtml(product.id)}" data-size="${escapeHtml(item.size)}" aria-label="Increase quantity">${icon("plus")}</button>
        </div>
      </div>
      <button class="button button--ghost" type="button" data-cart-remove="${escapeHtml(product.id)}" data-size="${escapeHtml(item.size)}">Remove</button>
    </article>
  `;
}

function summaryPanel(totals, includeCheckout) {
  return `
    <aside class="panel reveal">
      <p class="eyebrow">Order Summary</p>
      <div class="summary-row"><span>Subtotal</span><span>${currency.format(totals.subtotal)}</span></div>
      <div class="summary-row"><span>Shipping</span><span>${totals.shipping === 0 ? "Complimentary" : currency.format(totals.shipping)}</span></div>
      <div class="summary-row"><span>Estimated Tax</span><span>${currency.format(totals.tax)}</span></div>
      <div class="summary-row"><strong>Total</strong><strong>${currency.format(totals.total)}</strong></div>
      ${includeCheckout ? `<a class="button button--dark button--wide" href="#/checkout">Checkout ${icon("lock")}</a>` : ""}
    </aside>
  `;
}

function checkoutPage() {
  if (!state.cart.length) {
    return `
      ${pageHero("Checkout", "Protected flow", "Add pieces to your cart before starting checkout.", imagePools.accessories[4])}
      <section class="content-page">${emptyState("No checkout items.", "Your shopping cart is currently empty.")}</section>
    `;
  }

  const totals = cartTotals();
  return `
    ${pageHero("Checkout", "Protected flow", "Validated address, customer, and tokenized payment details for a safe local order simulation.", imagePools.accessories[1])}
    <section class="content-page">
      <div class="checkout-layout">
        <form class="panel form-grid reveal" data-checkout-form>
          <label>Name<input name="name" autocomplete="name" required></label>
          <label>Email<input name="email" type="email" autocomplete="email" required></label>
          <label class="full">Address<input name="line1" autocomplete="address-line1" required></label>
          <label>City<input name="city" autocomplete="address-level2" required></label>
          <label>Postal Code<input name="postal" autocomplete="postal-code" required></label>
          <label class="full">Payment Token<input name="paymentToken" value="tok_rosh_demo" autocomplete="off" required></label>
          <button class="button button--dark" type="submit">Confirm Order ${icon("lock")}</button>
        </form>
        ${summaryPanel(totals, false)}
      </div>
    </section>
  `;
}

function confirmationPage() {
  const order = state.lastOrder;
  return `
    ${pageHero("Order Confirmed", "ROSH private service", "Your order is being prepared with tracked dispatch and invoice access in your account portal.", imagePools.women[3])}
    <section class="content-page">
      ${order ? `
        <div class="panel reveal">
          <p class="eyebrow">Order ${escapeHtml(order.orderId)}</p>
          <h2>Thank you, ${escapeHtml(order.customer.name)}.</h2>
          <p>Delivery estimate: ${escapeHtml(order.deliveryEstimate)}. A digital invoice has been saved to your dashboard.</p>
          <div class="summary-row"><strong>Total</strong><strong>${currency.format(order.total)}</strong></div>
          <a class="button button--dark" href="#/account">View Dashboard</a>
        </div>
      ` : emptyState("No recent order found.", "Your next confirmed order will appear here.")}
    </section>
  `;
}

function dashboardPage() {
  return `
    ${pageHero("Account Portal", "Private customer dashboard", "Orders, shipments, saved addresses, returns, invoices, fashion collections, and loyalty rewards in one polished space.", imagePools.men[1])}
    <section class="content-page">
      <div class="dashboard-layout">
        <nav class="dashboard-nav reveal" aria-label="Account sections">
          ${dashboardButton("overview", "Overview")}
          ${dashboardButton("orders", "Orders")}
          ${dashboardButton("shipments", "Shipments")}
          ${dashboardButton("addresses", "Addresses")}
          ${dashboardButton("payments", "Payments")}
          ${dashboardButton("profile", "Profile")}
          ${dashboardButton("security", "Security")}
          ${dashboardButton("returns", "Returns")}
          ${dashboardButton("rewards", "Rewards")}
        </nav>
        <div data-dashboard-panel>${dashboardPanel()}</div>
      </div>
    </section>
  `;
}

function dashboardButton(tab, label) {
  return `<button class="pill-button ${state.dashboardTab === tab ? "is-active" : ""}" type="button" data-dashboard-tab="${tab}">${escapeHtml(label)}</button>`;
}

function dashboardPanel() {
  const order = state.lastOrder;
  const panels = {
    overview: `
      <div class="dashboard-grid">
        ${statCard(order ? "1 active" : "0 active", "Order history")}
        ${statCard("2,840", "Reward points")}
        ${statCard(String(state.wishlist.length), "Wishlist items")}
      </div>
      <div class="panel reveal">
        <p class="eyebrow">Saved fashion collections</p>
        <h2>Private edits</h2>
        <p>Evening neutrals, winter layers, children's ceremony looks, and accessories saved for upcoming releases.</p>
      </div>
    `,
    orders: `
      <div class="panel reveal">
        <p class="eyebrow">Order history</p>
        <h2>${order ? escapeHtml(order.orderId) : "No orders yet"}</h2>
        <p>${order ? `Confirmed total ${currency.format(order.total)} with ${escapeHtml(order.deliveryEstimate)} delivery.` : "Confirmed orders, receipts, and invoices will appear here."}</p>
        <a class="button button--ghost" href="#/confirmation">Open Confirmation</a>
      </div>
    `,
    shipments: `
      <div class="panel reveal">
        <p class="eyebrow">Live shipment tracking</p>
        <h2>Shipment timeline</h2>
        <ul class="timeline">
          <li><div><strong>Order received</strong><p>Private warehouse is reviewing the package.</p></div></li>
          <li><div><strong>Quality check</strong><p>Garments are inspected, steamed, and packed.</p></div></li>
          <li><div><strong>Dispatch</strong><p>Tracking activates after courier handoff.</p></div></li>
        </ul>
      </div>
    `,
    addresses: `
      <form class="panel form-grid reveal">
        <label>Name<input value="ROSH Client"></label>
        <label>Phone<input value="+91 90000 00000"></label>
        <label class="full">Address<input value="Private Residence, New Delhi"></label>
        <button class="button button--dark" type="button" data-soft-save>Save Address</button>
      </form>
    `,
    payments: `
      <div class="panel reveal">
        <p class="eyebrow">Payment methods</p>
        <h2>Saved methods</h2>
        <p>Visa ending 2046 · UPI verified · Store credit wallet active.</p>
        <button class="button button--ghost" type="button" data-soft-save>Manage Methods</button>
      </div>
    `,
    profile: `
      <form class="panel form-grid reveal">
        <label>First Name<input value="ROSH"></label>
        <label>Last Name<input value="Client"></label>
        <label class="full">Email<input type="email" value="client@rosh.example"></label>
        <button class="button button--dark" type="button" data-soft-save>Update Profile</button>
      </form>
    `,
    security: `
      <form class="panel form-grid reveal" data-login-form>
        <label class="full">Email<input name="email" type="email" value="client@rosh.example" required></label>
        <label class="full">Password<input name="password" type="password" minlength="8" value="roshdemo2026" required></label>
        <button class="button button--dark" type="submit">Refresh Secure Session</button>
      </form>
      <form class="panel form-grid reveal">
        <label>Current Password<input type="password"></label>
        <label>New Password<input type="password"></label>
        <button class="button button--ghost" type="button" data-soft-save>Change Password</button>
      </form>
    `,
    returns: `
      <div class="panel reveal">
        <p class="eyebrow">Returns and refunds</p>
        <h2>Manage requests</h2>
        <p>No active returns. Eligible orders support return labels, refund status, and exchange notes.</p>
        <button class="button button--ghost" type="button" data-soft-save>Start Return</button>
      </div>
    `,
    rewards: `
      <div class="panel reveal">
        <p class="eyebrow">Loyalty</p>
        <h2>2,840 points</h2>
        <p>Private access unlocks at 3,000 points. Rewards can be applied to tailoring, early releases, and styling appointments.</p>
        <div class="summary-row"><span>Invoices</span><span>3 available</span></div>
        <div class="summary-row"><span>Notifications</span><span>4 unread</span></div>
      </div>
    `
  };

  return panels[state.dashboardTab] || panels.overview;
}

function helpPage() {
  const faqs = [
    ["What is the ROSH return policy?", "Most full-price items can be returned within 30 days when unworn, unaltered, and returned with original packaging."],
    ["How do I choose a size?", "Each PDP includes a size guide and fit note. For layered winter pieces, choose one size up."],
    ["Can I track shipments?", "Tracking is available in the account dashboard as soon as the courier receives your parcel."],
    ["Are limited editions restocked?", "Limited editions are produced in numbered runs and rarely restocked after sell-out."]
  ];

  return `
    ${pageHero("Help & Returns", "Client support", "Answers for shipping, returns, refunds, sizing, exchanges, and account service.", imagePools.accessories[5])}
    <section class="content-page">
      <div class="faq-list">
        ${faqs.map(([q, a]) => `<details class="faq-item reveal"><summary>${escapeHtml(q)}</summary><p>${escapeHtml(a)}</p></details>`).join("")}
      </div>
    </section>
  `;
}

function policyPage(type) {
  const isPrivacy = type === "privacy";
  return `
    ${pageHero(isPrivacy ? "Privacy Policy" : "Terms & Conditions", isPrivacy ? "Data care" : "House terms", isPrivacy ? "How ROSH handles customer information in a secure, minimal, and transparent way." : "The commercial terms for browsing, ordering, returns, and account access.", imagePools.accessories[6])}
    <section class="content-page">
      <article class="panel reveal">
        <p class="eyebrow">${isPrivacy ? "Privacy" : "Terms"}</p>
        <h2>${isPrivacy ? "Minimal data, protected handling." : "Clear terms for premium service."}</h2>
        <p>${isPrivacy ? "ROSH collects only the information needed to process orders, provide support, maintain secure sessions, and improve the shopping experience. Secrets, payment keys, and passwords are never exposed in the frontend." : "Orders are subject to availability, address validation, and payment authorization. Product imagery, pricing, and promotional campaigns may change with seasonal availability."}</p>
        <p>${isPrivacy ? "Contact forms and checkout requests are validated and rate-limited by the local API server in this prototype." : "Returns must meet product condition requirements. Limited editions, altered pieces, and final-sale campaigns may have special conditions."}</p>
      </article>
    </section>
  `;
}

function addToCart(productId, requestedSize) {
  const product = byId(productId);
  if (!product) return;
  const selectedSize = requestedSize || document.querySelector("[data-size].is-active")?.dataset.size || product.sizes[0];
  const existing = state.cart.find((item) => item.id === productId && item.size === selectedSize);

  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ id: productId, size: selectedSize, quantity: 1 });
  }

  saveStore("rosh_cart", state.cart);
  updateCounters();
  animateCounter("[data-cart-count]");
  toast(`${product.name} added to cart.`);
}

function toggleWishlist(productId) {
  const product = byId(productId);
  if (!product) return;
  const exists = state.wishlist.includes(productId);
  state.wishlist = exists ? state.wishlist.filter((id) => id !== productId) : [...state.wishlist, productId];
  saveStore("rosh_wishlist", state.wishlist);
  updateCounters();
  animateCounter("[data-wishlist-count]");
  toast(exists ? "Removed from wishlist." : `${product.name} saved to wishlist.`);

  document.querySelectorAll(`[data-wishlist="${CSS.escape(productId)}"]`).forEach((button) => {
    button.classList.toggle("is-active", !exists);
  });

  if (getRoute() === "/wishlist") {
    renderRoute(false);
  }
}

function updateCartQuantity(productId, size, delta) {
  const item = state.cart.find((entry) => entry.id === productId && entry.size === size);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => !(entry.id === productId && entry.size === size));
  }
  saveStore("rosh_cart", state.cart);
  updateCounters();
  renderRoute(false);
}

function removeCartItem(productId, size) {
  state.cart = state.cart.filter((entry) => !(entry.id === productId && entry.size === size));
  saveStore("rosh_cart", state.cart);
  updateCounters();
  renderRoute(false);
}

function openQuickView(productId) {
  const product = byId(productId);
  if (!product) return;

  modalRoot.innerHTML = `
    <div class="modal-backdrop" data-close-modal></div>
    <article class="quick-modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(product.name)} quick view">
      <button class="icon-button modal-close" type="button" data-close-modal aria-label="Close quick view">${icon("close")}</button>
      <div class="quick-modal__image"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}"></div>
      <div class="quick-modal__body">
        <p class="eyebrow">${escapeHtml(product.category)} · ${escapeHtml(product.badge)}</p>
        <h2>${escapeHtml(product.name)}</h2>
        <div class="price-row"><span>${currency.format(product.price)}</span>${product.oldPrice ? `<del>${currency.format(product.oldPrice)}</del>` : ""}<span class="rating">★ ${escapeHtml(product.rating)}</span></div>
        <p>${escapeHtml(product.story)}</p>
        <dl class="detail-list">
          <div><dt>Material</dt><dd>${escapeHtml(product.material)}</dd></div>
          <div><dt>Stock</dt><dd>${product.stock} available</dd></div>
        </dl>
        <div class="hero__actions">
          <button class="button button--dark" type="button" data-add-cart="${escapeHtml(product.id)}">Add to Cart</button>
          <button class="button button--ghost" type="button" data-wishlist="${escapeHtml(product.id)}">Wishlist</button>
          <a class="button button--soft" href="#/product/${escapeHtml(product.id)}">Full Details</a>
        </div>
      </div>
    </article>
  `;
  modalRoot.classList.add("is-open");
  document.body.classList.add("is-locked");
}

function closeModal() {
  modalRoot.classList.remove("is-open");
  modalRoot.innerHTML = "";
  document.body.classList.remove("is-locked");
}

async function submitJson(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await response.json();
  if (!response.ok || !data.ok) {
    throw new Error(data.message || "Request failed");
  }
  return data;
}

function formValue(form, name) {
  return String(new FormData(form).get(name) || "").trim();
}

async function handleCheckout(form) {
  const payload = {
    customer: {
      name: formValue(form, "name"),
      email: formValue(form, "email")
    },
    address: {
      line1: formValue(form, "line1"),
      city: formValue(form, "city"),
      postal: formValue(form, "postal")
    },
    paymentToken: formValue(form, "paymentToken"),
    cart: state.cart
  };

  const totals = cartTotals();
  const result = await submitJson("/api/checkout", payload);
  state.lastOrder = {
    ...result,
    customer: payload.customer,
    items: state.cart,
    total: totals.total
  };
  state.cart = [];
  saveStore("rosh_last_order", state.lastOrder);
  saveStore("rosh_cart", state.cart);
  updateCounters();
  location.hash = "#/confirmation";
}

function initReveal(root = document) {
  const items = root.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  items.forEach((item) => observer.observe(item));
}

function getRoute() {
  return location.hash.replace(/^#/, "") || "/";
}

function updateActiveNav(route) {
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const href = link.getAttribute("href").replace(/^#/, "");
    link.classList.toggle("is-active", route === href || (href !== "/" && route.startsWith(href)));
  });
}

function renderRoute(scrollTop = true) {
  const route = getRoute();
  closeModal();

  if (scrollTop) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (route === "/" || route === "") {
    app.innerHTML = homePage();
  } else if (route.startsWith("/collection/")) {
    const department = route.split("/")[2];
    app.innerHTML = collectionPage(departments[department] ? department : "women");
  } else if (route.startsWith("/product/")) {
    app.innerHTML = productPage(route.split("/")[2]);
  } else if (route === "/about") {
    app.innerHTML = aboutPage();
  } else if (route === "/contact") {
    app.innerHTML = contactPage();
  } else if (route === "/lookbook") {
    app.innerHTML = lookbookPage();
  } else if (route === "/wishlist") {
    app.innerHTML = wishlistPage();
  } else if (route === "/cart") {
    app.innerHTML = cartPage();
  } else if (route === "/checkout") {
    app.innerHTML = checkoutPage();
  } else if (route === "/confirmation") {
    app.innerHTML = confirmationPage();
  } else if (route === "/account") {
    app.innerHTML = dashboardPage();
  } else if (route === "/help") {
    app.innerHTML = helpPage();
  } else if (route === "/privacy") {
    app.innerHTML = policyPage("privacy");
  } else if (route === "/terms") {
    app.innerHTML = policyPage("terms");
  } else {
    app.innerHTML = emptyState("Page not found.", "Return to the ROSH homepage.");
  }

  renderIconPlaceholders(app);
  updateActiveNav(route);
  initReveal(app);
}

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const toggle = target.closest("[data-nav-toggle]");
  const quickView = target.closest("[data-quick-view]");
  const wishlist = target.closest("[data-wishlist]");
  const addCart = target.closest("[data-add-cart]");
  const categoryTab = target.closest("[data-category-tab]");
  const loadMore = target.closest("[data-load-more]");
  const close = target.closest("[data-close-modal]");
  const size = target.closest("[data-size]");
  const gallery = target.closest("[data-gallery-image]");
  const zoom = target.closest("[data-zoom-gallery]");
  const inc = target.closest("[data-cart-inc]");
  const dec = target.closest("[data-cart-dec]");
  const remove = target.closest("[data-cart-remove]");
  const reset = target.closest("[data-reset-filters]");
  const dashboardTab = target.closest("[data-dashboard-tab]");
  const softSave = target.closest("[data-soft-save]");

  if (toggle) {
    const open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    return;
  }

  if (quickView) {
    openQuickView(quickView.dataset.quickView);
    return;
  }

  if (wishlist) {
    toggleWishlist(wishlist.dataset.wishlist);
    return;
  }

  if (addCart) {
    addToCart(addCart.dataset.addCart);
    return;
  }

  if (categoryTab) {
    const department = categoryTab.dataset.department;
    state.catalog[department].category = categoryTab.dataset.categoryTab;
    state.catalog[department].visible = 24;
    refreshCatalog(department);
    return;
  }

  if (loadMore) {
    const department = loadMore.dataset.loadMore;
    state.catalog[department].visible += 24;
    refreshCatalog(department);
    return;
  }

  if (close) {
    closeModal();
    return;
  }

  if (size) {
    size.parentElement.querySelectorAll("[data-size]").forEach((button) => button.classList.remove("is-active"));
    size.classList.add("is-active");
    return;
  }

  if (gallery) {
    const main = document.querySelector("[data-main-gallery]");
    if (main) {
      main.src = gallery.dataset.galleryImage;
      gallery.parentElement.querySelectorAll("[data-gallery-image]").forEach((button) => button.classList.remove("is-active"));
      gallery.classList.add("is-active");
    }
    return;
  }

  if (zoom) {
    zoom.classList.toggle("is-zoomed");
    return;
  }

  if (inc) {
    updateCartQuantity(inc.dataset.cartInc, inc.dataset.size, 1);
    return;
  }

  if (dec) {
    updateCartQuantity(dec.dataset.cartDec, dec.dataset.size, -1);
    return;
  }

  if (remove) {
    removeCartItem(remove.dataset.cartRemove, remove.dataset.size);
    return;
  }

  if (reset) {
    state.catalog[reset.dataset.resetFilters] = { category: "All", search: "", sort: "featured", price: "all", badge: "all", visible: 24 };
    renderRoute(false);
    return;
  }

  if (dashboardTab) {
    state.dashboardTab = dashboardTab.dataset.dashboardTab;
    document.querySelectorAll("[data-dashboard-tab]").forEach((button) => button.classList.toggle("is-active", button === dashboardTab));
    document.querySelector("[data-dashboard-panel]").innerHTML = dashboardPanel();
    initReveal(document.querySelector("[data-dashboard-panel]"));
    return;
  }

  if (softSave) {
    toast("Saved to your ROSH account.");
  }
});

function handleFilterEvent(event) {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const filter = target.closest("[data-filter]");
  if (!filter) return;
  const department = filter.dataset.department;
  state.catalog[department][filter.dataset.filter] = filter.value;
  state.catalog[department].visible = 24;
  refreshCatalog(department);
}

document.addEventListener("input", handleFilterEvent);
document.addEventListener("change", handleFilterEvent);

document.addEventListener("submit", async (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const newsletter = target.closest("[data-newsletter]");
  const contact = target.closest("[data-contact-form]");
  const checkout = target.closest("[data-checkout-form]");
  const login = target.closest("[data-login-form]");

  if (newsletter) {
    event.preventDefault();
    toast("You are on the ROSH private list.");
    newsletter.reset();
  }

  if (contact) {
    event.preventDefault();
    try {
      const data = await submitJson("/api/contact", {
        name: formValue(contact, "name"),
        email: formValue(contact, "email"),
        topic: formValue(contact, "topic"),
        message: formValue(contact, "message")
      });
      toast(`${data.message} Ticket ${data.ticket}.`);
      contact.reset();
    } catch (error) {
      toast(error.message);
    }
  }

  if (checkout) {
    event.preventDefault();
    try {
      await handleCheckout(checkout);
    } catch (error) {
      toast(error.message);
    }
  }

  if (login) {
    event.preventDefault();
    try {
      await submitJson("/api/auth/login", {
        email: formValue(login, "email"),
        password: formValue(login, "password")
      });
      toast("Secure session refreshed.");
    } catch (error) {
      toast(error.message);
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

window.addEventListener("hashchange", () => {
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  renderRoute(true);
});

renderIconPlaceholders();
updateCounters();
renderRoute(false);
