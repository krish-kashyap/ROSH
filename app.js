/* ========================================================================= */
/* ROSH LUXURY MULTI-PAGE PLATFORM STATE ENGINE                              */
/* ========================================================================= */

// 1. PRODUCT SEEDS DATABASE (36 Ultra-Premium Garments Curated for ROSH)
const INITIAL_PRODUCTS = [
  {
    id: "w-01",
    name: "Ribbed Knit Silhouette Dress",
    category: "women",
    subcategory: "Dresses",
    price: 189.00,
    originalPrice: 240.00,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Matte Black", hex: "#1C1C1C" },
      { name: "Desert Beige", hex: "#E3D5C5" },
      { name: "Warm Ivory", hex: "#F5F2EB" }
    ],
    description: "Expertly sculpted from a luxury merino-blend ribbed knit, this silhouette dress contours gracefully. Featuring an elegant button-down front with custom horn buttons, a structured collar, and a delicate tie belt that refines the natural waistline.",
    fabric: "70% Extra Fine Merino Wool, 30% EcoVero Silk-Viscose blend.",
    care: "Dry clean only. Cool iron on reverse side.",
    sustainability: "Spun in Italy using certified non-mulesed wool and closed-loop wood pulp viscose.",
    rating: 4.8,
    reviewsCount: 14,
    inStock: true,
    stockCount: 14,
    isNew: true,
    isTrending: true,
    isSale: true,
    fit: "Body-skimming fit with a gentle flare.",
    modelInfo: "Model is 5'10\" / 178cm and wearing a size Small (S)."
  },
  {
    id: "w-02",
    name: "Minimalist Linen Tailored Blazer",
    category: "women",
    subcategory: "Outerwear",
    price: 260.00,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548624149-f7b31668831a?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Desert Beige", hex: "#E3D5C5" },
      { name: "Warm Ivory", hex: "#F5F2EB" }
    ],
    description: "An unstructured double-breasted blazer constructed from premium European flax linen. Lined in organic cotton, it balances structural precision with breezy elegance.",
    fabric: "100% European Flax Linen; Lining: 100% Organic Cotton.",
    care: "Dry clean or hand wash cold. Reshape and dry flat in shade.",
    sustainability: "Linen naturally requires zero irrigation. Woven in carbon-neutral mill.",
    rating: 4.9,
    reviewsCount: 8,
    inStock: true,
    stockCount: 8,
    isNew: true,
    isTrending: false,
    isSale: false,
    fit: "Slightly oversized, relaxed modern cut.",
    modelInfo: "Model is 5'9\" / 175cm and wearing a size Medium (M)."
  },
  {
    id: "w-03",
    name: "Classic Silk Lounge Pant",
    category: "women",
    subcategory: "Bottoms",
    price: 195.00,
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Warm Ivory", hex: "#F5F2EB" },
      { name: "Matte Black", hex: "#1C1C1C" }
    ],
    description: "Crafted from heavy 22momme sandwashed mulberry silk, these lounge pants drape effortlessly. Featuring a premium elasticated waistband and deep side pockets.",
    fabric: "100% Sandwashed Mulberry Silk.",
    care: "Hand wash cold. Line dry in shade.",
    sustainability: "Produced without toxic dyes in an Oeko-Tex certified facility.",
    rating: 4.7,
    reviewsCount: 12,
    inStock: true,
    stockCount: 12,
    isNew: false,
    isTrending: true,
    isSale: false,
    fit: "Wide-leg silhouette, high-waisted relax drape.",
    modelInfo: "Model is 5'9\" / 175cm and wearing a size Small (S)."
  },
  {
    id: "w-04",
    name: "Belted Cashmere Overcoat",
    category: "women",
    subcategory: "Outerwear",
    price: 480.00,
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Desert Beige", hex: "#E3D5C5" },
      { name: "Matte Black", hex: "#1C1C1C" }
    ],
    description: "A luxurious robe-style overcoat made from pure Mongolian double-faced cashmere. Features dropped shoulders, a wrap belt, and structural slit pockets.",
    fabric: "100% Mongolian Cashmere.",
    care: "Dry clean only. Store folded.",
    sustainability: "Sourced from certified ethical cashmere farms.",
    rating: 5.0,
    reviewsCount: 5,
    inStock: true,
    stockCount: 6,
    isNew: true,
    isTrending: true,
    isSale: false,
    fit: "Relaxed fluid wrap silhouette.",
    modelInfo: "Model is 5'10\" and wears size S."
  },
  {
    id: "w-05",
    name: "Off-Shoulder Pleated Top",
    category: "women",
    subcategory: "Tops",
    price: 120.00,
    images: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Warm Ivory", hex: "#F5F2EB" },
      { name: "Matte Black", hex: "#1C1C1C" }
    ],
    description: "An elegant asymmetrical off-shoulder top detailed with fine micro-pleating and draped organic cotton silk weave.",
    fabric: "70% Organic Cotton, 30% Mulberry Silk.",
    care: "Dry clean or delicate hand wash cold.",
    sustainability: "Dyes are certified metal-free botanical colors.",
    rating: 4.6,
    reviewsCount: 10,
    inStock: true,
    stockCount: 15,
    isNew: true,
    isTrending: false,
    isSale: false,
    fit: "Fitted, high-stretch gathered structure.",
    modelInfo: "Model is 5'9\" and wears size S."
  },
  {
    id: "w-06",
    name: "Silk Crêpe Pleated Maxi Skirt",
    category: "women",
    subcategory: "Skirts",
    price: 180.00,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Warm Ivory", hex: "#F5F2EB" },
      { name: "Desert Beige", hex: "#E3D5C5" }
    ],
    description: "An elegant, flowing maxi skirt woven from heavy crêpe mulberry silk. Styled with beautiful hand-pressed micro-pleats that generate premium movement.",
    fabric: "100% Mulberry Silk Crêpe.",
    care: "Dry clean only. Hang on padded hanger.",
    sustainability: "Spun in zero-emission silk workshops in Como, Italy.",
    rating: 4.7,
    reviewsCount: 6,
    inStock: true,
    stockCount: 10,
    isNew: true,
    isTrending: true,
    isSale: false,
    fit: "High waist, flowy flare to ankle.",
    modelInfo: "Model is 5'9\" and wears size S."
  },
  {
    id: "w-07",
    name: "Double-Breasted Cashmere Trench",
    category: "women",
    subcategory: "Outerwear",
    price: 520.00,
    images: [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Desert Beige", hex: "#E3D5C5" },
      { name: "Matte Black", hex: "#1C1C1C" }
    ],
    description: "An iconic structured winter trench coat. Crafted from virgin wool and Mongolian cashmere with tailored notch lapels and matching buckle waist belts.",
    fabric: "80% Virgin Wool, 20% Mongolian Cashmere.",
    care: "Dry clean only. Steam wrinkles gently.",
    sustainability: "Cashmere wool sourced ethically from regenerative pastures.",
    rating: 4.9,
    reviewsCount: 9,
    inStock: true,
    stockCount: 7,
    isNew: true,
    isTrending: true,
    isSale: false,
    fit: "Structured classic silhouette.",
    modelInfo: "Model is 5'10\" and wears size S."
  },
  {
    id: "w-08",
    name: "Classic Tailored Silk Blouse",
    category: "women",
    subcategory: "Tops",
    price: 165.00,
    images: [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Warm Ivory", hex: "#F5F2EB" }
    ],
    description: "An absolute wardrobe essential. Woven from 19momme heavy sandwashed organic mulberry silk, styled with classic point collars and tailored French cuffs.",
    fabric: "100% Organic Mulberry Silk.",
    care: "Hand wash cold with silk detergent. Iron cool on reverse.",
    sustainability: "Standard 100 Oeko-Tex certified organic threads.",
    rating: 4.8,
    reviewsCount: 11,
    inStock: true,
    stockCount: 12,
    isNew: false,
    isTrending: false,
    isSale: false,
    fit: "True-to-size classic structured fit.",
    modelInfo: "Model is 5'9\" and wears size S."
  },
  {
    id: "w-09",
    name: "Sculpted Wool Trousers",
    category: "women",
    subcategory: "Bottoms",
    price: 195.00,
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Matte Black", hex: "#1C1C1C" },
      { name: "Desert Beige", hex: "#E3D5C5" }
    ],
    description: "Structured high-waisted wool trousers styled with sharp forward creases, deep side slips, and hidden closures for a clean architectural silhouette.",
    fabric: "95% Virgin Wool, 5% Lycra-Elastane.",
    care: "Dry clean only. Cool iron on reverse.",
    sustainability: "Virgin wool certified zero-waste local spinning loops.",
    rating: 4.6,
    reviewsCount: 15,
    inStock: true,
    stockCount: 14,
    isNew: false,
    isTrending: true,
    isSale: false,
    fit: "High waisted, straight leg contours.",
    modelInfo: "Model is 5'9\" and wears size S."
  },
  {
    id: "w-10",
    name: "Velvet Evening Drape Slip",
    category: "women",
    subcategory: "Dresses",
    price: 310.00,
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Matte Black", hex: "#1C1C1C" }
    ],
    description: "An exquisite floor-length evening dress constructed from deep matte silk-velvet, detailed with an elegant cowl neckline and open cross-back silk cords.",
    fabric: "70% Rayon-Silk Blend, 30% Velvet.",
    care: "Dry clean only. Do not iron velvet directly — steam only.",
    sustainability: "Eco-certified silk weaves, metal-free dark dyes.",
    rating: 5.0,
    reviewsCount: 8,
    inStock: true,
    stockCount: 5,
    isNew: true,
    isTrending: true,
    isSale: false,
    fit: "Draped flowy evening contours.",
    modelInfo: "Model is 5'10\" and wears size S."
  },
  {
    id: "m-01",
    name: "Oversized Merino Bouclé Crewneck",
    category: "men",
    subcategory: "Knitwear",
    price: 195.00,
    images: [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Desert Beige", hex: "#E3D5C5" },
      { name: "Matte Black", hex: "#1C1C1C" }
    ],
    description: "Spun from high-loop bouclé textured merino wool, this heavyweight crewneck features drop-shoulders and dense ribbing. Clean minimal luxury.",
    fabric: "80% Organic Merino Wool, 20% Fine Recycled Polyamide.",
    care: "Hand wash cold. Dry flat. Never hang knitwear.",
    sustainability: "Standard 100 yarn sourced from cruelty-free animal farms.",
    rating: 4.9,
    reviewsCount: 9,
    inStock: true,
    stockCount: 9,
    isNew: true,
    isTrending: true,
    isSale: false,
    fit: "Oversized, relaxed boxy drape.",
    modelInfo: "Model is 6'2\" / 188cm and wearing a size Medium (M)."
  },
  {
    id: "m-02",
    name: "Tailored Wool Overcoat",
    category: "men",
    subcategory: "Outerwear",
    price: 420.00,
    originalPrice: 495.00,
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["M", "L", "XL"],
    colors: [
      { name: "Matte Black", hex: "#1C1C1C" },
      { name: "Desert Beige", hex: "#E3D5C5" }
    ],
    description: "An elegant single-breasted classic silhouette crafted from a dense Italian double-faced wool-cashmere blend. Sleek notch lapels and structured shoulders.",
    fabric: "90% Virgin Wool, 10% Cashmere.",
    care: "Dry clean only. Brush wool after wear.",
    sustainability: "Cashmere components sourced from sustainable recycled luxury threads.",
    rating: 5.0,
    reviewsCount: 3,
    inStock: true,
    stockCount: 3,
    isNew: false,
    isTrending: true,
    isSale: true,
    fit: "Classic tailored fit, Structures standard shoulders.",
    modelInfo: "Model is 6'1\" / 185cm and wearing a size Medium (M)."
  },
  {
    id: "m-03",
    name: "Textured Linen Casual Shirt",
    category: "men",
    subcategory: "Shirts",
    price: 135.00,
    images: [
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Warm Ivory", hex: "#F5F2EB" },
      { name: "Desert Beige", hex: "#E3D5C5" }
    ],
    description: "A summer staple woven from certified organic flax linen. Designed with a soft band collar and relaxed cuffs for a premium, unstructured drape.",
    fabric: "100% Organic Flax Linen.",
    care: "Machine wash cold on delicate or dry clean.",
    sustainability: "Water-conserving cultivation, 100% biodegradable.",
    rating: 4.8,
    reviewsCount: 7,
    inStock: true,
    stockCount: 11,
    isNew: true,
    isTrending: false,
    isSale: false,
    fit: "Relaxed regular fit.",
    modelInfo: "Model is 6'0\" and wears size M."
  },
  {
    id: "m-04",
    name: "Double-Breasted Atelier Blazer",
    category: "men",
    subcategory: "Outerwear",
    price: 310.00,
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["M", "L", "XL"],
    colors: [
      { name: "Matte Black", hex: "#1C1C1C" }
    ],
    description: "A visual masterpiece tailored from robust wool-gabardine. Designed with peaked lapels, structured shoulders, and signature gold-plated horn buttons.",
    fabric: "100% Wool Gabardine.",
    care: "Dry clean only. Steam iron only.",
    sustainability: "Produced locally in small batches under zero-waste guidelines.",
    rating: 4.9,
    reviewsCount: 6,
    inStock: true,
    stockCount: 4,
    isNew: true,
    isTrending: true,
    isSale: false,
    fit: "Sharp tailored silhouette.",
    modelInfo: "Model is 6'2\" and wears size M."
  },
  {
    id: "m-05",
    name: "Classic Tapered Wool Trousers",
    category: "men",
    subcategory: "Bottoms",
    price: 190.00,
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Matte Black", hex: "#1C1C1C" },
      { name: "Desert Beige", hex: "#E3D5C5" }
    ],
    description: "Elegant wool-blend suit trousers. Styled with modern forward pleats, deep side slips, and clean cuffs. Perfect for architectural evening pairings.",
    fabric: "90% Virgin Wool, 10% silk weave.",
    care: "Dry clean only. Cool iron on reverse.",
    sustainability: "Virgin wool certified zero-waste local spinning loops.",
    rating: 4.8,
    reviewsCount: 8,
    inStock: true,
    stockCount: 12,
    isNew: false,
    isTrending: true,
    isSale: false,
    fit: "Tapered regular fit.",
    modelInfo: "Model is 6'1\" and wears size M."
  },
  {
    id: "m-06",
    name: "Calfskin Leather Chelsea Boots",
    category: "men",
    subcategory: "Shoes",
    price: 340.00,
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["M", "L"],
    colors: [
      { name: "Matte Black", hex: "#1C1C1C" }
    ],
    description: "Bespoke leather Chelsea boots. Handcrafted in Milan from full-grain calfskin leather, detailed with robust elastic goring and matching stack leather heels.",
    fabric: "100% Italian Calfskin Leather; lining: 100% Suede.",
    care: "Polish with dedicated leather conditioner. Store in dustbags.",
    sustainability: "LWG gold-rated organic vegetable tanning tannery.",
    rating: 4.9,
    reviewsCount: 5,
    inStock: true,
    stockCount: 6,
    isNew: true,
    isTrending: true,
    isSale: false,
    fit: "True-to-size classic boot sizing.",
    modelInfo: "Select standard boot sizes."
  },
  {
    id: "m-07",
    name: "Silk-Cotton Knit Polo",
    category: "men",
    subcategory: "Shirts",
    price: 145.00,
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Warm Ivory", hex: "#F5F2EB" },
      { name: "Desert Beige", hex: "#E3D5C5" }
    ],
    description: "A minimal classic. Knitted from ultra-soft mulberry silk and long-staple organic cotton threads, styled with modern open-collars and ribbed hems.",
    fabric: "55% Mulberry Silk, 45% Organic Cotton.",
    care: "Delicate hand wash cold. Dry flat in shade.",
    sustainability: "Standard 100 yarn certified hypoallergenic.",
    rating: 4.7,
    reviewsCount: 14,
    inStock: true,
    stockCount: 18,
    isNew: true,
    isTrending: false,
    isSale: false,
    fit: "Body contoured tailored regular fit.",
    modelInfo: "Model is 6'2\" and wears size M."
  },
  {
    id: "m-08",
    name: "Classic Belted Trench Coat",
    category: "men",
    subcategory: "Outerwear",
    price: 450.00,
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["M", "L", "XL"],
    colors: [
      { name: "Desert Beige", hex: "#E3D5C5" }
    ],
    description: "Double-breasted weather-repellent trench coat. Styled with solid dark horn buttons, shoulder epaulets, and structured double-buckle belts.",
    fabric: "100% Organic Gabardine Cotton; lining: 100% Silk.",
    care: "Dry clean only. Steam iron reverse.",
    sustainability: "Rainproof coat utilizing PFC-free ecological shields.",
    rating: 4.9,
    reviewsCount: 10,
    inStock: true,
    stockCount: 8,
    isNew: false,
    isTrending: true,
    isSale: false,
    fit: "Regular structure drape.",
    modelInfo: "Model is 6'1\" and wears size M."
  },
  {
    id: "m-09",
    name: "Heavy Cashmere Roll-Neck Sweater",
    category: "men",
    subcategory: "Knitwear",
    price: 260.00,
    images: [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Matte Black", hex: "#1C1C1C" },
      { name: "Warm Ivory", hex: "#F5F2EB" }
    ],
    description: "Heavyweight winter sweater knitted from ethical double-ply cashmere threads. Styled with thick snug roll-necks and structured dense ribbing.",
    fabric: "100% Pure cashmere wool.",
    care: "Dry clean or delicate hand wash cold. Dry flat.",
    sustainability: "Cruelty-free animal pastures standard cashmere yarn.",
    rating: 5.0,
    reviewsCount: 12,
    inStock: true,
    stockCount: 10,
    isNew: true,
    isTrending: true,
    isSale: false,
    fit: "Cosy comfort relaxed fit.",
    modelInfo: "Model is 6'2\" and wears size M."
  },
  {
    id: "k-01",
    name: "Boy's Double-Faced Tailored Coat",
    category: "kids",
    subcategory: "Boys",
    price: 175.00,
    images: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    colors: [
      { name: "Desert Beige", hex: "#E3D5C5" },
      { name: "Matte Black", hex: "#1C1C1C" }
    ],
    description: "A scaled-down masterpiece constructed with the same details as our adult line. Woven from soft organic wool-cashmere blend that is exceptionally gentle on young skin.",
    fabric: "85% Wool, 15% Cashmere.",
    care: "Dry clean or delicate spot clean.",
    sustainability: "Standard 100 Oeko-Tex certified hypoallergenic wool threads.",
    rating: 5.0,
    reviewsCount: 4,
    inStock: true,
    stockCount: 8,
    isNew: true,
    isTrending: true,
    isSale: false,
    fit: "Relaxed smart tailored structure.",
    modelInfo: "Model is 8 years old, wearing size 8Y."
  },
  {
    id: "k-02",
    name: "Boy's Textured Linen Shirt",
    category: "kids",
    subcategory: "Boys",
    price: 85.00,
    images: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    colors: [
      { name: "Warm Ivory", hex: "#F5F2EB" }
    ],
    description: "Breezy and elegant flax linen shirt for boys, detailed with real mother-of-pearl buttons and breathable open collars.",
    fabric: "100% Organic Linen.",
    care: "Machine wash delicate cold. Iron on reverse.",
    sustainability: "Cultivated without toxic crop-shields or excessive water usage.",
    rating: 4.7,
    reviewsCount: 11,
    inStock: true,
    stockCount: 12,
    isNew: false,
    isTrending: false,
    isSale: false,
    fit: "Regular airy kid's drape.",
    modelInfo: "Model is 6 years old, wearing size 6Y."
  },
  {
    id: "k-03",
    name: "Girl's Pleated Silhouette Dress",
    category: "kids",
    subcategory: "Girls",
    price: 130.00,
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    colors: [
      { name: "Warm Ivory", hex: "#F5F2EB" },
      { name: "Desert Beige", hex: "#E3D5C5" }
    ],
    description: "A gorgeous girls' dress with a high empire waist and delicate accordion pleats that sway gracefully. Features an invisible back zipper.",
    fabric: "60% Cotton, 40% Fine Mulberry Silk.",
    care: "Delicate hand wash cold or professional dry clean.",
    sustainability: "Spun in certified zero-emission weaving mills.",
    rating: 4.9,
    reviewsCount: 15,
    inStock: true,
    stockCount: 6,
    isNew: true,
    isTrending: true,
    isSale: false,
    fit: "empire chest, pleated down flare.",
    modelInfo: "Model is 7 years old, wearing size 6Y."
  },
  {
    id: "k-04",
    name: "Girl's Knit Wool Cardigan",
    category: "kids",
    subcategory: "Girls",
    price: 110.00,
    images: [
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    colors: [
      { name: "Desert Beige", hex: "#E3D5C5" },
      { name: "Warm Ivory", hex: "#F5F2EB" }
    ],
    description: "A dense cable knit buttoned sweater featuring real horn buttons and double-ribbed edges. Keeps kids warmly snug with pure thermal comfort.",
    fabric: "100% Superfine Organic Merino Wool.",
    care: "Hand wash cold only. Dry flat in shade.",
    sustainability: "Hypoallergenic wool certified standard for sensitive kid skins.",
    rating: 4.8,
    reviewsCount: 9,
    inStock: true,
    stockCount: 14,
    isNew: true,
    isTrending: false,
    isSale: false,
    fit: "Comfy regular layer fit.",
    modelInfo: "Model is 9 years old, wearing size 8Y."
  },
  {
    id: "k-05",
    name: "Boy's Cable Knit Merino Jumper",
    category: "kids",
    subcategory: "Boys",
    price: 95.00,
    images: [
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    colors: [
      { name: "Warm Ivory", hex: "#F5F2EB" },
      { name: "Desert Beige", hex: "#E3D5C5" }
    ],
    description: "A dense and cozy kids jumper woven from organic superfine merino wool. Beautiful detailed cable knits lock in natural warmth.",
    fabric: "100% Superfine Organic Merino Wool.",
    care: "Hand wash cold only. Dry flat in shade.",
    sustainability: "Oeko-Tex Standard 100 certified hypoallergenic wool threads.",
    rating: 4.9,
    reviewsCount: 8,
    inStock: true,
    stockCount: 12,
    isNew: true,
    isTrending: false,
    isSale: false,
    fit: "Cozy layering sweater fit.",
    modelInfo: "Model is 7 years old, wearing size 6Y."
  },
  {
    id: "k-06",
    name: "Boy's Structured Tweed Blazer",
    category: "kids",
    subcategory: "Boys",
    price: 140.00,
    images: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["6Y", "8Y", "10Y"],
    colors: [
      { name: "Desert Beige", hex: "#E3D5C5" }
    ],
    description: "A gorgeous scaled-down formal blazer tailored in a premium structured wool tweed. Finished with customized horn button accents.",
    fabric: "80% Organic Wool, 20% Tweed Silk.",
    care: "Dry clean only. Steam wrinkles gently.",
    sustainability: "Produced under certified carbon-neutral weaving mills.",
    rating: 4.8,
    reviewsCount: 5,
    inStock: true,
    stockCount: 6,
    isNew: true,
    isTrending: true,
    isSale: false,
    fit: "Smart structured kid blazer contours.",
    modelInfo: "Model is 8 years old, wearing size 8Y."
  },
  {
    id: "k-07",
    name: "Boy's Linen Drawstring Shorts",
    category: "kids",
    subcategory: "Boys",
    price: 60.00,
    images: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    colors: [
      { name: "Warm Ivory", hex: "#F5F2EB" },
      { name: "Desert Beige", hex: "#E3D5C5" }
    ],
    description: "Breezy utility linen shorts for active boys, featuring elastic drawstrings waistlines and deep utility side pockets.",
    fabric: "100% Organic European Flax Linen.",
    care: "Machine wash cold on delicate. Tumble dry low.",
    sustainability: "Naturally grown flax linen using low-irrigation loops.",
    rating: 4.7,
    reviewsCount: 14,
    inStock: true,
    stockCount: 16,
    isNew: false,
    isTrending: false,
    isSale: false,
    fit: "Airy relaxed drawstring fit.",
    modelInfo: "Model is 6 years old, wearing size 6Y."
  },
  {
    id: "k-08",
    name: "Girl's Silk Ruffle Blouse",
    category: "kids",
    subcategory: "Girls",
    price: 80.00,
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    colors: [
      { name: "Warm Ivory", hex: "#F5F2EB" }
    ],
    description: "An elegant silk ruffle top styled with a delicate collar ruffle frame and elastic cuffs. Lightweight and breathable.",
    fabric: "70% Organic Cotton, 30% Pure Mulberry Silk.",
    care: "Delicate hand wash cold or professional dry clean.",
    sustainability: "Dyes utilize biological zero-chemical vegetable tones.",
    rating: 4.9,
    reviewsCount: 7,
    inStock: true,
    stockCount: 10,
    isNew: true,
    isTrending: false,
    isSale: false,
    fit: "True to size airy children contour.",
    modelInfo: "Model is 6 years old, wearing size 6Y."
  },
  {
    id: "k-09",
    name: "Girl's Cashmere Scallop Cardigan",
    category: "kids",
    subcategory: "Girls",
    price: 115.00,
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    colors: [
      { name: "Desert Beige", hex: "#E3D5C5" },
      { name: "Warm Ivory", hex: "#F5F2EB" }
    ],
    description: "A beautiful girls cardigan knit from premium double-faced organic cashmere. Accentuated with lovely scalloped trim frames.",
    fabric: "100% Sustainable Cashmere Wool.",
    care: "Hand wash cold only. Dry flat in shade.",
    sustainability: "Cashmere yarn sourced ethically from green certified farms.",
    rating: 5.0,
    reviewsCount: 11,
    inStock: true,
    stockCount: 8,
    isNew: true,
    isTrending: true,
    isSale: false,
    fit: "Standard snug kids cardigan fits.",
    modelInfo: "Model is 7 years old, wearing size 6Y."
  },
  {
    id: "k-10",
    name: "Girl's Wool Tailored Pinafore",
    category: "kids",
    subcategory: "Girls",
    price: 125.00,
    images: [
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["6Y", "8Y", "10Y"],
    colors: [
      { name: "Desert Beige", hex: "#E3D5C5" },
      { name: "Matte Black", hex: "#1C1C1C" }
    ],
    description: "An elegant woolen pinafore dress featuring custom horn button front tabs and smart double slits. Designed to pair beautifully with blouses.",
    fabric: "90% Virgin Wool, 10% silk weave.",
    care: "Dry clean only. Steam wrinkles gently.",
    sustainability: "Produced locally under zero-waste carbon guidelines.",
    rating: 4.8,
    reviewsCount: 6,
    inStock: true,
    stockCount: 9,
    isNew: false,
    isTrending: true,
    isSale: false,
    fit: "Smart tailored overlay fit.",
    modelInfo: "Model is 8 years old, wearing size 8Y."
  },
  {
    id: "a-01",
    name: "ROSH Signature Leather Tote",
    category: "accessories",
    subcategory: "Bags",
    price: 490.00,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Matte Black", hex: "#1C1C1C" },
      { name: "Desert Beige", hex: "#E3D5C5" }
    ],
    description: "An architectural tote designed with clean minimal lines. Hand-carved from ultra-supple Italian leather with raw structural edges and detachable inner suede pouch.",
    fabric: "100% Full-Grain Italian Leather; Suede inner.",
    care: "Store in protective dustbag. Clean with leather conditioner.",
    sustainability: "Sourced from an ethical LWG certified Italian tannery.",
    rating: 4.9,
    reviewsCount: 6,
    inStock: true,
    stockCount: 6,
    isNew: true,
    isTrending: true,
    isSale: false,
    fit: "Spacious interior, solid dual shoulder strap.",
    modelInfo: "Dimensions: Height 38cm, Width 32cm, Depth 15cm."
  },
  {
    id: "a-02",
    name: "Classic Cashmere Ribbed Scarf",
    category: "accessories",
    subcategory: "Scarves",
    price: 115.00,
    images: [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Desert Beige", hex: "#E3D5C5" },
      { name: "Warm Ivory", hex: "#F5F2EB" },
      { name: "Matte Black", hex: "#1C1C1C" }
    ],
    description: "A wide structural scarf knit from superfine long-fiber cashmere yarn. Dense fisherman ribbing blocks out wind, granting unmatched softness.",
    fabric: "100% Sustainable Cashmere.",
    care: "Dry clean or delicate hand wash cold. Dry flat.",
    sustainability: "Spun in small artisan collectives using low-carbon weaving loops.",
    rating: 4.8,
    reviewsCount: 16,
    inStock: true,
    stockCount: 20,
    isNew: true,
    isTrending: true,
    isSale: false,
    fit: "Length 200cm, Width 35cm.",
    modelInfo: "Unisex layout fits all contours cleanly."
  },
  {
    id: "a-03",
    name: "Minimal Calfskin Leather Belt",
    category: "accessories",
    subcategory: "Belts",
    price: 95.00,
    images: [
      "https://images.unsplash.com/photo-1624222247566-7f8240268462?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Matte Black", hex: "#1C1C1C" }
    ],
    description: "A clean architectural waist belt constructed from vegetable-tanned full grain calfskin leather. Accented with a sleek matte black brushed buckle.",
    fabric: "100% Vegetable-Tanned Calfskin Leather.",
    care: "Wipe clean with a dry linen cloth. Avoid wet storage.",
    sustainability: "Calfskin organically tanned with zero heavy metals.",
    rating: 4.9,
    reviewsCount: 5,
    inStock: true,
    stockCount: 12,
    isNew: false,
    isTrending: false,
    isSale: false,
    fit: "Width 3cm. Fits standard waist contours.",
    modelInfo: "Atelier tailored buckle mechanisms."
  },
  {
    id: "a-04",
    name: "Minimalist Calfskin Zip Wallet",
    category: "accessories",
    subcategory: "Wallets",
    price: 120.00,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Matte Black", hex: "#1C1C1C" },
      { name: "Desert Beige", hex: "#E3D5C5" }
    ],
    description: "An elegant compact accordion zip wallet designed with clean minimal lines. Hand-carved from ultra-supple full grain calfskin leather.",
    fabric: "100% Italian Calfskin Leather.",
    care: "Store in protective dustbag. Clean with leather conditioner.",
    sustainability: "Sourced from an ethical LWG certified Italian tannery.",
    rating: 4.9,
    reviewsCount: 6,
    inStock: true,
    stockCount: 8,
    isNew: true,
    isTrending: false,
    isSale: false,
    fit: "Slim pocket outline.",
    modelInfo: "Dimensions: Height 9cm, Width 11cm."
  },
  {
    id: "a-05",
    name: "Structured Wool Atelier Fedora",
    category: "accessories",
    subcategory: "Hats",
    price: 135.00,
    images: [
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Desert Beige", hex: "#E3D5C5" },
      { name: "Matte Black", hex: "#1C1C1C" }
    ],
    description: "Premium wool felt fedora featuring raw structured wide brims and custom grosgrain bands. Architectural design lines.",
    fabric: "100% Fine Felt Wool.",
    care: "Brush gently with felt brush. Keep dry.",
    sustainability: "Standard Oeko-Tex certified felt processing.",
    rating: 4.8,
    reviewsCount: 4,
    inStock: true,
    stockCount: 10,
    isNew: true,
    isTrending: true,
    isSale: false,
    fit: "Standard comfortable hat contours.",
    modelInfo: "Select standard hats sizing."
  },
  {
    id: "a-06",
    name: "Hexagonal Acetate Sunglasses",
    category: "accessories",
    subcategory: "Eyewear",
    price: 160.00,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Matte Black", hex: "#1C1C1C" }
    ],
    description: "Architectural hexagonal sunglasses hand-sculpted in organic bio-acetate. Accented with dark anti-glare category 3 UV protection lenses.",
    fabric: "100% Biodegradable Bio-Acetate frames.",
    care: "Wipe with microfiber cloth. Store in leather pouch.",
    sustainability: "Eco-acetate breaks down organically without microplastics.",
    rating: 5.0,
    reviewsCount: 12,
    inStock: true,
    stockCount: 15,
    isNew: true,
    isTrending: true,
    isSale: false,
    fit: "Unisex structured sunglasses.",
    modelInfo: "Dimensions: Frame Width 145mm."
  }
];

// 2. SYSTEM STATE CLASS ENGINE
class AppState {
  constructor() {
    this.products = this.loadLocal('rosh_products', INITIAL_PRODUCTS);
    this.cart = this.loadLocal('rosh_cart', []);
    this.wishlist = this.loadLocal('rosh_wishlist', []);
    this.theme = localStorage.getItem('rosh_theme') || 'light';
    this.currentUser = this.loadLocal('rosh_user', null); // Gated sign-up default unlogged
    this.orders = this.loadLocal('rosh_orders', []);
  }

  loadLocal(key, fallback) {
    const val = localStorage.getItem(key);
    if (!val) return fallback;
    try { return JSON.parse(val); } catch (e) { return fallback; }
  }

  saveLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // CART MUTATIONS
  addToCart(product, size, color, qty = 1) {
    const existingIndex = this.cart.findIndex(item => 
      item.product.id === product.id && 
      item.selectedSize === size && 
      item.selectedColor.name === color.name
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += qty;
    } else {
      this.cart.push({ product, selectedSize: size, selectedColor: color, quantity: qty });
    }

    this.saveLocal('rosh_cart', this.cart);
    this.updateCartBadges();
  }

  removeFromCart(prodId, size, colorName) {
    this.cart = this.cart.filter(item => 
      !(item.product.id === prodId && 
        item.selectedSize === size && 
        item.selectedColor.name === colorName)
    );
    this.saveLocal('rosh_cart', this.cart);
    this.updateCartBadges();
  }

  updateQuantity(prodId, size, colorName, qty) {
    if (qty <= 0) {
      this.removeFromCart(prodId, size, colorName);
      return;
    }
    const idx = this.cart.findIndex(item => 
      item.product.id === prodId && 
      item.selectedSize === size && 
      item.selectedColor.name === colorName
    );
    if (idx > -1) {
      this.cart[idx].quantity = qty;
      this.saveLocal('rosh_cart', this.cart);
      this.updateCartBadges();
    }
  }

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }

  updateCartBadges() {
    const count = this.getCartCount();
    document.querySelectorAll('.cart-badge-count').forEach(el => {
      el.textContent = count;
      el.classList.toggle('hidden', count === 0);
    });
  }

  // WISHLIST MUTATIONS
  toggleWishlist(product) {
    const idx = this.wishlist.findIndex(p => p.id === product.id);
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
    } else {
      this.wishlist.push(product);
    }
    this.saveLocal('rosh_wishlist', this.wishlist);
    this.updateWishlistBadges();
  }

  isInWishlist(prodId) {
    return this.wishlist.some(p => p.id === prodId);
  }

  updateWishlistBadges() {
    const count = this.wishlist.length;
    document.querySelectorAll('.wishlist-badge-count').forEach(el => {
      el.textContent = count;
      el.classList.toggle('hidden', count === 0);
    });
  }

  // LOGIN & AUTH
  login(email, password = '') {
    // Simulated developer logins
    this.currentUser = {
      name: email.split('@')[0].split('.').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      email,
      phone: "+1 (212) 555-0189",
      address: "742 Fifth Avenue, Apt 14B",
      city: "New York",
      zip: "10019",
      country: "United States",
      isAdmin: email.includes('admin')
    };
    this.saveLocal('rosh_user', this.currentUser);
    this.updateAuthDisplays();
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('rosh_user');
    this.updateAuthDisplays();
  }

  updateAuthDisplays() {
    const accountTrigger = document.getElementById('navbar-account-info');
    if (!accountTrigger) return;
    
    if (this.currentUser) {
      accountTrigger.innerHTML = `
        <div class="px-4 py-2 border-b border-border-lux/60 mb-1">
          <p class="text-[10px] text-foreground/50 tracking-wide font-medium">Logged in as</p>
          <p class="text-xs font-semibold truncate text-foreground">${this.currentUser.name}</p>
          <span class="text-[9px] inline-block px-1.5 py-0.5 rounded bg-panel text-accent-lux font-bold uppercase mt-1">
            ${this.currentUser.isAdmin ? "Admin Member" : "Luxury Customer"}
          </span>
        </div>
        <a href="dashboard.html" class="px-4 py-2 hover:bg-panel flex items-center gap-2.5 text-[10px] text-foreground font-semibold uppercase tracking-wider transition-colors">
          Client Dashboard
        </a>
        <button onclick="state.logout(); window.location.reload();" class="w-full text-left px-4 py-2 hover:bg-panel flex items-center gap-2.5 text-[10px] text-red-500 font-semibold uppercase tracking-wider transition-colors">
          Logout
        </button>
      `;
    } else {
      accountTrigger.innerHTML = `
        <div class="px-4 py-2 border-b border-border-lux/60 mb-1 text-center">
          <p class="text-[10px] text-foreground/60 font-semibold">Simulate developer entry</p>
          <div class="grid grid-cols-2 gap-1.5 mt-2">
            <button onclick="state.login('client@rosh.lux'); window.location.reload();" class="text-[9px] py-1 bg-foreground text-background font-bold uppercase rounded tracking-wider">
              Client
            </button>
            <button onclick="state.login('admin@rosh.lux'); window.location.reload();" class="text-[9px] py-1 bg-accent-lux text-white font-bold uppercase rounded tracking-wider">
              Admin
            </button>
          </div>
        </div>
        <a href="signup.html" class="px-4 py-2 hover:bg-panel flex items-center gap-2.5 text-[10px] text-foreground font-semibold uppercase tracking-wider transition-colors">
          Access / Register
        </a>
      `;
    }
  }

  // ORDER MUTATIONS
  placeOrder(shipping) {
    if (this.cart.length === 0) return null;

    const newOrder = {
      id: `ROSH-${Math.floor(100000 + Math.random() * 900000)}`,
      items: [...this.cart],
      subtotal: this.getCartSubtotal(),
      shippingAddress: shipping,
      billingAddress: shipping,
      paymentMethod: "Secured Portals",
      status: "Processing",
      trackingCode: `TRK-${Math.random().toString(36).substring(2, 11).toUpperCase()}`,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    };

    this.orders.unshift(newOrder);
    this.saveLocal('rosh_orders', this.orders);

    // Decrement seed stocks
    this.products = this.products.map(prod => {
      const itemsInCart = this.cart.filter(item => item.product.id === prod.id);
      if (itemsInCart.length > 0) {
        const purchased = itemsInCart.reduce((sum, item) => sum + item.quantity, 0);
        return {
          ...prod,
          stockCount: Math.max(0, prod.stockCount - purchased),
          inStock: prod.stockCount - purchased > 0
        };
      }
      return prod;
    });
    this.saveLocal('rosh_products', this.products);
    this.cart = [];
    this.saveLocal('rosh_cart', []);
    this.updateCartBadges();

    return newOrder;
  }
}

// 3. INITIALIZE STATE WINDOW OBJECT
const state = new AppState();
window.state = state; // Make globally accessible

// 4. SHARED PAGE LOAD BOOTSTRAPER
window.addEventListener('DOMContentLoaded', () => {
  state.updateCartBadges();
  state.updateWishlistBadges();
  state.updateAuthDisplays();
  
  // Theme check
  if (state.theme === 'dark') {
    document.documentElement.classList.add('dark');
  }

  initCustomCursor();
  initLenisScroll();

  // Route specific initializers
  const path = window.location.pathname.toLowerCase();
  
  if (path.endsWith('index.html') || path === '/' || path.endsWith('rosh/') || path.endsWith('rosh')) {
    initHomeView();
  } else if (path.endsWith('men.html')) {
    initCatalogPage('men');
  } else if (path.endsWith('women.html')) {
    initCatalogPage('women');
  } else if (path.endsWith('kids-boy.html')) {
    initCatalogPage('kids', 'Boys');
  } else if (path.endsWith('kids-girl.html')) {
    initCatalogPage('kids', 'Girls');
  } else if (path.endsWith('collection.html') || path.endsWith('collections.html')) {
    initCatalogPage('all');
  } else if (path.endsWith('pdp.html')) {
    const params = new URLSearchParams(window.location.search);
    const prodId = params.get('id');
    if (prodId) {
      initProductDetailPage(prodId);
    } else {
      window.location.href = 'collection.html';
    }
  } else if (path.endsWith('cart.html')) {
    initCartView();
  } else if (path.endsWith('checkout.html')) {
    initCheckoutView();
  } else if (path.endsWith('signup.html')) {
    initSignupPage();
  } else if (path.endsWith('dashboard.html')) {
    initDashboardView();
  } else if (path.endsWith('faq.html')) {
    renderFAQList();
  } else if (path.endsWith('size-guide.html')) {
    initSizeGuideView();
  }
});

// =========================================================================
// INTERACTIVE ENGINE VIEWS LOGIC
// =========================================================================

// A. HOME VIEW MATCHING TESTAMENT CAROUSELS & IMAGES
let homeTimer;
function initHomeView() {
  // Clear any existing countdown loops
  if (homeTimer) clearInterval(homeTimer);

  const daysVal = document.getElementById('home-countdown-days');
  const hoursVal = document.getElementById('home-countdown-hours');
  const minsVal = document.getElementById('home-countdown-mins');
  const secsVal = document.getElementById('home-countdown-secs');

  if (daysVal) {
    let time = { d: 29, h: 22, m: 33, s: 40 };

    homeTimer = setInterval(() => {
      if (time.s > 0) {
        time.s--;
      } else if (time.m > 0) {
        time.m--;
        time.s = 59;
      } else if (time.h > 0) {
        time.h--;
        time.m = 59;
        time.s = 59;
      } else if (time.d > 0) {
        time.d--;
        time.h = 23;
        time.m = 59;
        time.s = 59;
      }

      daysVal.textContent = String(time.d).padStart(2, '0');
      hoursVal.textContent = String(time.h).padStart(2, '0');
      minsVal.textContent = String(time.m).padStart(2, '0');
      secsVal.textContent = String(time.s).padStart(2, '0');
    }, 1000);
  }

  // Render trending catalog slider (first 4 items in DB)
  const trendingGrid = document.getElementById('home-trending-grid');
  if (trendingGrid) {
    const trendList = state.products.slice(0, 4);
    trendingGrid.innerHTML = trendList.map(p => renderProductCardHTML(p)).join('');
  }
}

// B. SEPARATE PHYSICAL CATALOG PAGE LOADER (Men, Women, Kids Boy/Girl, All)
let shopFilters = {
  category: 'all',
  subcategory: 'all',
  sizes: [],
  colors: [],
  price: 500,
  search: ''
};

function initCatalogPage(cat, subcat = 'all') {
  shopFilters.category = cat;
  shopFilters.subcategory = subcat;

  // Render initial page
  renderCatalogProducts();
}

function handleShopFilterChange() {
  // Sizes checklist
  const sizes = [];
  document.querySelectorAll('.size-filter-btn.active').forEach(btn => {
    sizes.push(btn.textContent.trim());
  });
  shopFilters.sizes = sizes;

  // Colors checklist
  const colors = [];
  document.querySelectorAll('.color-filter-btn.active').forEach(btn => {
    colors.push(btn.getAttribute('data-color'));
  });
  shopFilters.colors = colors;

  // Price range
  const slider = document.getElementById('shop-price-slider');
  if (slider) {
    shopFilters.price = Number(slider.value);
    document.getElementById('shop-price-max-display').textContent = `$${slider.value}`;
  }

  // Search input
  const searchInput = document.getElementById('shop-search-input');
  if (searchInput) {
    shopFilters.search = searchInput.value.trim().toLowerCase();
  }

  renderCatalogProducts();
}

function toggleSizeFilter(btn) {
  btn.classList.toggle('active');
  btn.classList.toggle('bg-foreground');
  btn.classList.toggle('text-background');
  btn.classList.toggle('border-foreground');
  handleShopFilterChange();
}

function toggleColorFilter(btn) {
  btn.classList.toggle('active');
  const span = btn.querySelector('.checkmark-span');
  if (span) span.classList.toggle('hidden');
  handleShopFilterChange();
}

function clearAllFilters() {
  shopFilters.sizes = [];
  shopFilters.colors = [];
  shopFilters.price = 500;
  shopFilters.search = '';
  
  document.querySelectorAll('.size-filter-btn').forEach(btn => {
    btn.classList.remove('active', 'bg-foreground', 'text-background', 'border-foreground');
  });

  document.querySelectorAll('.color-filter-btn').forEach(btn => {
    btn.classList.remove('active');
    const span = btn.querySelector('.checkmark-span');
    if (span) span.classList.add('hidden');
  });

  const slider = document.getElementById('shop-price-slider');
  if (slider) {
    slider.value = 500;
    document.getElementById('shop-price-max-display').textContent = '$500';
  }

  const searchInput = document.getElementById('shop-search-input');
  if (searchInput) searchInput.value = '';

  renderCatalogProducts();
}

function changeGridColumns(cols) {
  const container = document.getElementById('shop-products-grid');
  if (!container) return;

  container.className = "grid gap-x-6 gap-y-12 transition-all duration-500";
  if (cols === 2) container.classList.add('grid-cols-2');
  else if (cols === 4) container.classList.add('grid-cols-2', 'md:grid-cols-4');
  else container.classList.add('grid-cols-2', 'md:grid-cols-3');
}

function renderCatalogProducts() {
  const grid = document.getElementById('shop-products-grid');
  if (!grid) return;

  let result = [...state.products];

  // Category
  if (shopFilters.category !== 'all') {
    result = result.filter(p => p.category === shopFilters.category);
  }

  // Subcategory
  if (shopFilters.subcategory !== 'all') {
    result = result.filter(p => p.subcategory === shopFilters.subcategory);
  }

  // Sizes
  if (shopFilters.sizes.length > 0) {
    result = result.filter(p => p.sizes.some(s => shopFilters.sizes.includes(s)));
  }

  // Colors
  if (shopFilters.colors.length > 0) {
    result = result.filter(p => p.colors.some(c => shopFilters.colors.includes(c.name)));
  }

  // Price
  result = result.filter(p => p.price <= shopFilters.price);

  // Search
  if (shopFilters.search) {
    result = result.filter(p => 
      p.name.toLowerCase().includes(shopFilters.search) || 
      p.description.toLowerCase().includes(shopFilters.search)
    );
  }

  if (result.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-24 text-center space-y-4">
        <p class="font-serif-lux text-2xl italic text-foreground/75">No luxury pieces match your queries.</p>
        <button onclick="clearAllFilters()" class="px-6 py-2.5 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest hover:bg-accent-lux">
          Reset Filter Selections
        </button>
      </div>
    `;
  } else {
    grid.innerHTML = result.map(p => renderProductCardHTML(p)).join('');
  }

  const countDisplay = document.getElementById('shop-filtered-count-display');
  if (countDisplay) {
    countDisplay.textContent = `${result.length} Pieces`;
  }
}

function renderProductCardHTML(p) {
  const isWish = state.isInWishlist(p.id);
  return `
    <div class="group flex flex-col space-y-4 relative" onmouseenter="setProductCardHover('${p.id}', true)" onmouseleave="setProductCardHover('${p.id}', false)">
      <div class="relative aspect-[3/4] w-full overflow-hidden bg-panel border border-border-lux/30 shadow-2xs">
        
        <!-- Sale/New badges -->
        ${p.isSale ? `
          <span class="absolute top-3 left-3 bg-red-600 text-white text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 z-10 rounded-xs">Sale</span>
        ` : ''}

        <!-- Wishlist Button -->
        <button onclick="state.toggleWishlist(${JSON.stringify(p).replace(/"/g, '&quot;')}); window.location.reload();" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 hover:bg-background border border-border-lux/40 flex items-center justify-center text-foreground hover:text-red-500 shadow-sm z-10 transition-colors">
          <svg class="w-3.5 h-3.5 ${isWish ? 'fill-red-500 text-red-500' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        <!-- Product Image Link to PDP with parameter -->
        <a href="pdp.html?id=${p.id}" class="absolute inset-0 block cursor-none group">
          <img id="card-img-0-${p.id}" src="${p.images[0]}" alt="${p.name}" class="w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-700 opacity-100" />
          ${p.images[1] ? `
            <img id="card-img-1-${p.id}" src="${p.images[1]}" alt="${p.name}" class="w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-700 opacity-0" />
          ` : ''}
        </a>

        <!-- Quick Add drawer sheet -->
        <div class="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 p-3 bg-background/90 backdrop-blur-xs border-t border-border-lux/50">
          <button onclick="openQuickAddDialog('${p.id}')" class="w-full py-2 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest hover:bg-accent-lux hover:text-white transition-colors">
            Quick Add
          </button>
        </div>

      </div>

      <!-- Detail tags -->
      <div class="flex flex-col items-center text-center space-y-1">
        <h3 class="text-xs font-semibold tracking-widest uppercase text-foreground leading-tight px-2 hover:text-accent-lux transition-colors">
          <a href="pdp.html?id=${p.id}">${p.name}</a>
        </h3>
        <div class="flex items-center gap-2">
          ${p.originalPrice ? `
            <span class="text-[11px] text-foreground/45 line-through font-semibold">$${p.originalPrice.toFixed(2)}</span>
            <span class="text-xs font-bold text-red-600">$${p.price.toFixed(2)}</span>
          ` : `
            <span class="text-xs font-semibold text-foreground/75">$${p.price.toFixed(2)}</span>
          `}
        </div>
      </div>
    </div>
  `;
}

function setProductCardHover(id, isHover) {
  const img1 = document.getElementById(`card-img-1-${id}`);
  if (img1) {
    img1.classList.toggle('opacity-100', isHover);
    img1.classList.toggle('opacity-0', !isHover);
  }
}

// C. PRODUCT DETAIL PAGE (PDP)
let pdpActiveProduct = null;
let pdpSelectedSize = '';
let pdpSelectedColor = null;
let pdpQuantity = 1;

function initProductDetailPage(id) {
  const product = state.products.find(p => p.id === id);
  if (!product) return;

  pdpActiveProduct = product;
  pdpSelectedSize = product.sizes[0];
  pdpSelectedColor = product.colors[0];
  pdpQuantity = 1;

  // Render Title metadata
  document.getElementById('pdp-subcat-badge').textContent = `${product.subcategory} Line`;
  document.getElementById('pdp-product-title').textContent = product.name;
  document.getElementById('pdp-reviews-count-text').textContent = `${product.reviewsCount || 10} Editorial Reviews`;
  
  // Pricing
  const priceContainer = document.getElementById('pdp-price-container');
  if (product.originalPrice) {
    priceContainer.innerHTML = `
      <span class="text-base text-foreground/40 line-through font-semibold">$${product.originalPrice.toFixed(2)}</span>
      <span class="text-2xl font-serif-lux italic font-bold text-red-600">$${product.price.toFixed(2)}</span>
    `;
  } else {
    priceContainer.innerHTML = `<span class="text-2xl font-serif-lux font-semibold">$${product.price.toFixed(2)}</span>`;
  }

  // Main Image Stack
  const thumbList = document.getElementById('pdp-thumbs-list');
  thumbList.innerHTML = product.images.map((img, i) => `
    <button onclick="pdpSetMainImage('${img}', ${i})" class="aspect-[3/4] w-full overflow-hidden bg-panel border border-border-lux/40 hover:border-accent-lux">
      <img src="${img}" class="w-full h-full object-cover" />
    </button>
  `).join('');

  pdpSetMainImage(product.images[0], 0);

  // Specifications
  document.getElementById('pdp-description-text').textContent = product.description;
  document.getElementById('pdp-fabric-accordion-text').innerHTML = `
    <p class="mb-2">${product.fabric}</p>
    <p class="text-accent-lux font-bold">Sustainability: ${product.sustainability}</p>
  `;
  document.getElementById('pdp-care-accordion-text').textContent = product.care;

  // Fit Note
  document.getElementById('pdp-fit-note-display').textContent = `${product.fit} — ${product.modelInfo}`;

  // Sizes selection grids
  const sizeGrid = document.getElementById('pdp-sizes-grid');
  sizeGrid.innerHTML = product.sizes.map(size => `
    <button onclick="pdpSelectSize(this)" class="pdp-size-select-btn px-5 py-3 border text-xs font-semibold tracking-wider transition-colors ${
      size === pdpSelectedSize ? 'bg-foreground text-background border-foreground' : 'border-border-lux hover:bg-panel'
    }">
      ${size}
    </button>
  `).join('');

  // Colors selectors
  const colorsBox = document.getElementById('pdp-colors-box');
  colorsBox.innerHTML = product.colors.map(col => `
    <button onclick="pdpSelectColor(this, ${JSON.stringify(col).replace(/"/g, '&quot;')})" class="pdp-color-select-btn w-8 h-8 rounded-full border border-border-lux flex items-center justify-center transition-transform hover:scale-105 ${
      col.name === pdpSelectedColor.name ? 'ring-2 ring-accent-lux/30 border-foreground' : ''
    }">
      <span class="w-6 h-6 rounded-full border border-border-lux" style="background-color: ${col.hex}"></span>
    </button>
  `).join('');

  document.getElementById('pdp-selected-color-name').textContent = pdpSelectedColor.name;

  // Complete the look recommendations
  const lookGrid = document.getElementById('pdp-complete-look-grid');
  const recommendations = state.products.filter(p => p.id !== product.id).slice(0, 3);
  lookGrid.innerHTML = recommendations.map(p => `
    <div class="group flex flex-col space-y-4">
      <div class="relative aspect-[3/4] w-full overflow-hidden bg-panel border border-border-lux/30 shadow-2xs">
        <a href="pdp.html?id=${p.id}">
          <img src="${p.images[0]}" alt="${p.name}" class="w-full h-full object-cover" />
        </a>
      </div>
      <div class="text-center space-y-0.5">
        <h3 class="text-xs font-semibold tracking-widest uppercase"><a href="pdp.html?id=${p.id}">${p.name}</a></h3>
        <span class="text-xs text-foreground/50">$${p.price.toFixed(2)}</span>
      </div>
    </div>
  `).join('');
}

function pdpSetMainImage(img, idx) {
  const main = document.getElementById('pdp-main-image-display');
  if (main) main.src = img;
  
  // Also update standard active frame indexes for 360 preview
  const previewImg = document.getElementById('modal-360-viewport-img');
  if (previewImg) previewImg.src = img;
}

function pdpSelectSize(btn) {
  document.querySelectorAll('.pdp-size-select-btn').forEach(el => {
    el.className = "pdp-size-select-btn px-5 py-3 border text-xs font-semibold tracking-wider border-border-lux hover:bg-panel transition-colors";
  });
  btn.className = "pdp-size-select-btn px-5 py-3 border text-xs font-semibold tracking-wider bg-foreground text-background border-foreground transition-colors";
  pdpSelectedSize = btn.textContent.trim();
}

function pdpSelectColor(btn, colorObj) {
  document.querySelectorAll('.pdp-color-select-btn').forEach(el => {
    el.className = "pdp-color-select-btn w-8 h-8 rounded-full border border-border-lux flex items-center justify-center transition-transform hover:scale-105";
  });
  btn.className = "pdp-color-select-btn w-8 h-8 rounded-full border border-foreground flex items-center justify-center transition-transform hover:scale-105 ring-2 ring-accent-lux/30";
  pdpSelectedColor = colorObj;
  document.getElementById('pdp-selected-color-name').textContent = colorObj.name;
}

function pdpChangeQuantity(diff) {
  pdpQuantity = Math.max(1, pdpQuantity + diff);
  document.getElementById('pdp-quantity-display').textContent = pdpQuantity;
}

function pdpAddActiveToCart() {
  if (pdpActiveProduct && pdpSelectedColor) {
    state.addToCart(pdpActiveProduct, pdpSelectedSize, pdpSelectedColor, pdpQuantity);
    const feedback = document.getElementById('pdp-add-btn-feedback');
    feedback.textContent = "Successfully Added.";
    feedback.classList.remove('hidden');
    setTimeout(() => {
      feedback.classList.add('hidden');
    }, 2000);
  }
}

function pdpToggleWishlist() {
  if (pdpActiveProduct) {
    state.toggleWishlist(pdpActiveProduct);
    initProductDetailPage(pdpActiveProduct.id);
  }
}

// PDP Accordions
function togglePDPAccordion(id) {
  const panel = document.getElementById(`pdp-${id}-accordion-panel`);
  const arrow = document.getElementById(`pdp-${id}-accordion-arrow`);
  
  if (!panel) return;
  
  const isHidden = panel.classList.contains('hidden');
  panel.classList.toggle('hidden', !isHidden);
  arrow.innerHTML = isHidden ? '✕' : '▼';
}

// 360 Degree View Interactive Rotator
let active360FrameIdx = 0;
const preview360Frames = [
  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop"
];

function toggle360Modal(isOpen) {
  const modal = document.getElementById('modal-360-preview');
  if (modal) modal.classList.toggle('hidden', !isOpen);
}

function handle360RotationSlider(val) {
  active360FrameIdx = Number(val);
  const img = document.getElementById('modal-360-viewport-img');
  img.src = pdpActiveProduct ? pdpActiveProduct.images[active360FrameIdx % pdpActiveProduct.images.length] : preview360Frames[active360FrameIdx];
}

// Runway Video modal
function toggleVideoModal(isOpen) {
  const modal = document.getElementById('modal-runway-video');
  if (modal) modal.classList.toggle('hidden', !isOpen);
}

// D. SHOPPING CART VIEW
let cartDiscountPercent = 0;

function initCartView() {
  const container = document.getElementById('cart-items-ledger-box');
  const summaryBox = document.getElementById('cart-summary-box');

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-20 space-y-6">
        <p class="font-serif-lux text-2xl italic text-foreground/60">Your luxury cart is empty.</p>
        <a href="collection.html" class="inline-block px-8 py-4 bg-foreground text-background text-xs uppercase tracking-widest font-semibold hover:bg-accent-lux">Explore Collection</a>
      </div>
    `;
    if (summaryBox) summaryBox.classList.add('hidden');
    return;
  }

  if (summaryBox) summaryBox.classList.remove('hidden');

  // Render items list
  container.innerHTML = state.cart.map(item => `
    <div class="flex gap-4 border-b border-border-lux/40 pb-6 last:border-0 last:pb-0">
      <div class="relative w-16 h-20 bg-panel overflow-hidden border border-border-lux/30 flex-shrink-0">
        <img src="${item.product.images[0]}" alt="${item.product.name}" class="w-full h-full object-cover" />
      </div>
      <div class="flex-1 flex flex-col justify-between">
        <div class="space-y-1 text-xs">
          <div class="flex justify-between items-start">
            <h3 class="font-semibold uppercase tracking-wider text-foreground">${item.product.name}</h3>
            <button onclick="state.removeFromCart('${item.product.id}', '${item.selectedSize}', '${item.selectedColor.name}'); initCartView();" class="text-foreground/45 hover:text-foreground">
              ✕
            </button>
          </div>
          <p class="text-[10px] text-foreground/50 tracking-wider flex items-center gap-1.5 font-semibold">
            Size: ${item.selectedSize}
            <span class="w-1.5 h-1.5 bg-border-lux rounded-full"></span>
            Color: ${item.selectedColor.name}
          </p>
        </div>
        
        <div class="flex justify-between items-center mt-2">
          <div class="flex items-center border border-border-lux rounded bg-background">
            <button onclick="state.updateQuantity('${item.product.id}', '${item.selectedSize}', '${item.selectedColor.name}', ${item.quantity - 1}); initCartView();" class="px-2.5 py-1 text-foreground/60 hover:text-foreground hover:bg-panel transition-all">-</button>
            <span class="px-2.5 text-xs font-semibold">${item.quantity}</span>
            <button onclick="state.updateQuantity('${item.product.id}', '${item.selectedSize}', '${item.selectedColor.name}', ${item.quantity + 1}); initCartView();" class="px-2.5 py-1 text-foreground/60 hover:text-foreground hover:bg-panel transition-all">+</button>
          </div>
          <span class="text-xs font-semibold">$${(item.product.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  `).join('');

  calculateCheckoutTotals();
}

function calculateCheckoutTotals() {
  const subtotal = state.getCartSubtotal();
  const discAmount = subtotal * (cartDiscountPercent / 100);
  const total = subtotal - discAmount;

  const subtotalDisplay = document.getElementById('checkout-subtotal-display');
  if (subtotalDisplay) subtotalDisplay.textContent = `$${subtotal.toFixed(2)}`;

  const totalDisplay = document.getElementById('checkout-total-display');
  if (totalDisplay) totalDisplay.textContent = `$${total.toFixed(2)}`;
  
  const discountRow = document.getElementById('checkout-discount-row');
  const discountVal = document.getElementById('checkout-discount-val');
  if (cartDiscountPercent > 0 && discountRow && discountVal) {
    discountRow.classList.remove('hidden');
    discountVal.textContent = `-$${discAmount.toFixed(2)}`;
  } else if (discountRow) {
    discountRow.classList.add('hidden');
  }
}

function applyCheckoutCoupon(e) {
  e.preventDefault();
  const input = document.getElementById('checkout-coupon-input');
  const code = input.value.trim().toUpperCase();
  const feedback = document.getElementById('checkout-coupon-feedback');

  if (code === 'ROSH10') {
    cartDiscountPercent = 10;
    feedback.textContent = "Coupon Code ROSH10 (10% Off) applied.";
    feedback.className = "text-[10px] text-accent-lux font-semibold tracking-wider mt-1";
    calculateCheckoutTotals();
  } else {
    feedback.textContent = "Invalid code.";
    feedback.className = "text-[10px] text-red-500 font-semibold tracking-wider mt-1";
  }
}

// CHECKOUT GATE CONTROLLER (Must be signed up to access)
function handleCheckoutCartTrigger() {
  if (!state.currentUser) {
    // Redirect to validated signup page
    window.location.href = 'signup.html?redirect=checkout.html';
  } else {
    window.location.href = 'checkout.html';
  }
}

// E. SECURE CHECKOUT VIEW PAGE
let checkoutPaymentMethod = 'stripe';
function initCheckoutView() {
  // Validate sign-up gate check
  if (!state.currentUser) {
    window.location.href = 'signup.html?redirect=checkout.html';
    return;
  }

  // Pre-fill ship address fields from validated session user details
  document.getElementById('checkout-ship-name').value = state.currentUser.name;
  document.getElementById('checkout-ship-email').value = state.currentUser.email;
  document.getElementById('checkout-ship-phone').value = state.currentUser.phone || '';
  document.getElementById('checkout-ship-address').value = state.currentUser.address || '';
  document.getElementById('checkout-ship-city').value = state.currentUser.city || '';
  document.getElementById('checkout-ship-zip').value = state.currentUser.zip || '';
  document.getElementById('checkout-ship-country').value = state.currentUser.country || 'United States';

  // Render items short list
  const list = document.getElementById('checkout-items-list-short');
  if (list) {
    list.innerHTML = state.cart.map(item => `
      <div class="flex justify-between items-center text-xs font-medium text-foreground/75">
        <span>${item.product.name} (x${item.quantity})</span>
        <span>$${(item.product.price * item.quantity).toFixed(2)}</span>
      </div>
    `).join('');
  }

  const subtotal = state.getCartSubtotal();
  document.getElementById('checkout-subtotal-display').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('checkout-total-display').textContent = `$${subtotal.toFixed(2)}`;
}

function changeCheckoutPaymentGateway(gate) {
  checkoutPaymentMethod = gate;
  document.querySelectorAll('.checkout-payment-btn').forEach(btn => {
    const g = btn.getAttribute('data-gateway');
    btn.classList.toggle('border-foreground', g === gate);
    btn.classList.toggle('bg-panel', g === gate);
  });

  // Display sub-fields
  document.getElementById('checkout-stripe-fields').classList.toggle('hidden', gate !== 'stripe');
  document.getElementById('checkout-paypal-fields').classList.toggle('hidden', gate !== 'paypal');
  document.getElementById('checkout-razorpay-fields').classList.toggle('hidden', gate !== 'razorpay');
}

function handlePlaceOrderConfirm() {
  const placeBtn = document.getElementById('checkout-place-order-btn');
  placeBtn.disabled = true;
  placeBtn.innerHTML = `
    <span class="w-4 h-4 rounded-full border border-background border-t-transparent animate-spin mr-2"></span>
    Securing Gateway Transaction...
  `;

  setTimeout(() => {
    // Generate order
    const shipDetails = {
      name: document.getElementById('checkout-ship-name').value,
      email: document.getElementById('checkout-ship-email').value,
      address: document.getElementById('checkout-ship-address').value,
      city: document.getElementById('checkout-ship-city').value,
      zip: document.getElementById('checkout-ship-zip').value,
      phone: document.getElementById('checkout-ship-phone').value,
      country: document.getElementById('checkout-ship-country').value,
    };

    const newOrder = state.placeOrder(shipDetails);
    
    if (newOrder) {
      // Trigger canvas-confetti fireworks
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#1C1C1C', '#E6DFD5']
      });

      // Render Order success panel
      const checkoutWrapper = document.getElementById('cart-checkout-funnel-wrapper');
      checkoutWrapper.innerHTML = `
        <div class="max-w-xl w-full bg-panel/30 border border-border-lux p-8 md:p-12 text-center space-y-8 rounded-lg shadow-sm mx-auto">
          <div class="w-20 h-20 rounded-full border border-border-lux flex items-center justify-center text-accent-lux bg-background mx-auto animate-float">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="space-y-3">
            <span class="text-[10px] uppercase font-bold tracking-[0.25em] text-accent-lux">Order Placed</span>
            <h1 class="font-serif-lux text-3xl font-light uppercase tracking-wide text-foreground">Purchase Confirmed</h1>
            <p class="text-xs text-foreground/65 max-w-sm mx-auto leading-relaxed">
              We have received your request. An editorial packing summary will arrive in your mailbox shortly.
            </p>
          </div>
          <div class="border border-border-lux bg-background p-4 rounded text-left space-y-2.5 text-xs font-medium">
            <div class="flex justify-between items-center text-[10.5px] uppercase font-bold tracking-widest text-foreground/50">
              <span>Receipt Code</span>
              <span class="text-foreground">${newOrder.id}</span>
            </div>
            <div class="flex justify-between items-center text-[10.5px] uppercase font-bold tracking-widest text-foreground/50">
              <span>Tracking Code</span>
              <span class="text-foreground font-semibold">${newOrder.trackingCode}</span>
            </div>
            <div class="flex justify-between items-center text-[10.5px] uppercase font-bold tracking-widest text-foreground/50">
              <span>Expected Delivery</span>
              <span class="text-foreground">3–5 Business Days</span>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="dashboard.html" class="flex-1 py-4 bg-foreground text-background text-xs uppercase tracking-widest font-bold text-center hover:bg-accent-lux hover:text-white transition-colors">
              Track In Dashboard
            </a>
            <a href="collection.html" class="flex-1 py-4 bg-transparent text-foreground border border-border-lux text-xs uppercase tracking-widest font-bold text-center hover:bg-panel transition-colors">
              Continue Shopping
            </a>
          </div>
        </div>
      `;
    }
  }, 2000);
}

// F. CLIENT ACCOUNT SIGNUP FORM DATA VALIDATIONS
function initSignupPage() {
  const form = document.getElementById('signup-form');
  if (!form) return;

  const urlParams = new URLSearchParams(window.location.search);
  const redirect = urlParams.get('redirect');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.validation-error-msg').forEach(el => {
      el.classList.add('hidden');
      el.textContent = '';
    });

    let isValid = true;

    // 1. Name Check
    const name = document.getElementById('signup-name').value.trim();
    if (name.length < 2) {
      showError('signup-name-err', "Registered name must contain at least 2 characters.");
      isValid = false;
    }

    // 2. Email Check
    const email = document.getElementById('signup-email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError('signup-email-err', "Provide a valid, active email address.");
      isValid = false;
    }

    // 3. Phone Check
    const phone = document.getElementById('signup-phone').value.trim();
    const phoneRegex = /^\+?[\d\s-]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      showError('signup-phone-err', "Phone number must be digits and contain at least 10 numbers.");
      isValid = false;
    }

    // 4. Password Check (Strong rules: min 8 length, 1 upper, 1 lower, 1 number)
    const password = document.getElementById('signup-password').value;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    if (password.length < 8 || !hasUpper || !hasLower || !hasDigit) {
      showError('signup-password-err', "Password must contain at least 8 characters, with 1 uppercase letter and 1 number.");
      isValid = false;
    }

    // 5. Confirm Password Check
    const confirmPass = document.getElementById('signup-confirm-password').value;
    if (confirmPass !== password) {
      showError('signup-confirm-err', "Confirm password credentials do not match.");
      isValid = false;
    }

    if (isValid) {
      // Save secure user details
      const newUser = {
        name,
        email,
        phone,
        address: document.getElementById('signup-address').value.trim(),
        city: document.getElementById('signup-city').value.trim(),
        zip: document.getElementById('signup-zip').value.trim(),
        country: document.getElementById('signup-country').value,
        isAdmin: false
      };

      state.saveLocal('rosh_user', newUser);
      state.currentUser = newUser;
      
      // Visual feedback
      const feedback = document.getElementById('signup-success-feedback');
      if (feedback) {
        feedback.classList.remove('hidden');
        setTimeout(() => {
          if (redirect) {
            window.location.href = redirect;
          } else {
            window.location.href = 'dashboard.html';
          }
        }, 1500);
      }
    }
  });
}

function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = msg;
    el.classList.remove('hidden');
  }
}

// G. CLIENT DASHBOARD VIEW
let activeDashboardTab = 'orders';
function initDashboardView() {
  // Validate sign-up gate check
  if (!state.currentUser) {
    window.location.href = 'signup.html?redirect=dashboard.html';
    return;
  }

  const container = document.getElementById('dashboard-main-content-panel');
  if (!container) return;

  // Toggle active left nav tabs
  document.querySelectorAll('.dashboard-nav-btn').forEach(btn => {
    const t = btn.getAttribute('data-tab');
    btn.classList.toggle('bg-panel', t === activeDashboardTab);
    btn.classList.toggle('text-accent-lux', t === activeDashboardTab);
  });

  if (activeDashboardTab === 'orders') {
    renderDashboardOrders(container);
  } else if (activeDashboardTab === 'wishlist') {
    renderDashboardWishlist(container);
  } else if (activeDashboardTab === 'addresses') {
    renderDashboardAddresses(container);
  } else {
    renderDashboardProfile(container);
  }
}

function selectDashboardTab(tab) {
  activeDashboardTab = tab;
  initDashboardView();
}

function renderDashboardOrders(el) {
  if (state.orders.length === 0) {
    el.innerHTML = `
      <div class="text-center py-16 space-y-4">
        <svg class="w-10 h-10 text-accent-lux opacity-45 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <p class="font-serif-lux text-lg italic text-foreground/75">You have placed no luxury orders.</p>
        <a href="collection.html" class="inline-block px-6 py-3 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest hover:bg-accent-lux">Browse Catalog</a>
      </div>
    `;
    return;
  }

  el.innerHTML = `
    <div class="space-y-8">
      <h2 class="text-xs uppercase font-bold tracking-widest text-foreground border-b border-border-lux/60 pb-3">Your Order Chronology</h2>
      ${state.orders.map(order => `
        <div class="border border-border-lux bg-background p-6 rounded space-y-6 shadow-2xs">
          
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border-b border-border-lux/40 pb-4 text-xs font-semibold uppercase tracking-wider text-foreground/60">
            <div class="space-y-1">
              <span class="text-[10px] text-foreground/45 block">Receipt Code</span>
              <span class="text-foreground font-bold">${order.id}</span>
            </div>
            <div class="space-y-1">
              <span class="text-[10px] text-foreground/45 block">Placement Date</span>
              <span class="text-foreground">${order.date}</span>
            </div>
            <div class="space-y-1">
              <span class="text-[10px] text-foreground/45 block">Total Debited</span>
              <span class="text-accent-lux font-serif-lux text-sm font-semibold">$${order.subtotal.toFixed(2)}</span>
            </div>
          </div>

          <!-- Tracker Pipeline -->
          <div class="space-y-3 pt-2">
            <span class="text-[9px] uppercase font-bold tracking-widest text-foreground/45 block">Delivery Pipeline</span>
            <div class="flex items-center w-full justify-between max-w-xl mx-auto text-center font-bold text-[9px] uppercase tracking-wider">
              <div class="flex flex-col items-center gap-1.5 flex-1 relative">
                <div class="w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center shadow-sm">✓</div>
                <span>Processing</span>
                <div class="absolute top-3.5 left-[55%] w-[90%] h-[2px] ${order.status !== 'Processing' ? 'bg-foreground' : 'bg-border-lux'}"></div>
              </div>
              <div class="flex flex-col items-center gap-1.5 flex-1 relative">
                <div class="w-7 h-7 rounded-full flex items-center justify-center shadow-sm ${order.status !== 'Processing' ? 'bg-foreground text-background' : 'bg-panel text-foreground/40 border'}">
                  ${order.status === 'Delivered' ? '✓' : '•'}
                </div>
                <span class="${order.status !== 'Processing' ? 'text-foreground' : 'text-foreground/40'}">Shipped</span>
                <div class="absolute top-3.5 left-[55%] w-[90%] h-[2px] ${order.status === 'Delivered' ? 'bg-foreground' : 'bg-border-lux'}"></div>
              </div>
              <div class="flex flex-col items-center gap-1.5 flex-1">
                <div class="w-7 h-7 rounded-full flex items-center justify-center shadow-sm ${order.status === 'Delivered' ? 'bg-foreground text-background' : 'bg-panel text-foreground/40 border'}">
                  ${order.status === 'Delivered' ? '✓' : '•'}
                </div>
                <span class="${order.status === 'Delivered' ? 'text-foreground' : 'text-foreground/40'}">Delivered</span>
              </div>
            </div>
          </div>

          <!-- Items contents -->
          <div class="space-y-3 pt-2">
            <span class="text-[9px] uppercase font-bold tracking-widest text-foreground/45 block">Package Contents</span>
            <div class="space-y-3 divide-y divide-border-lux/30">
              ${order.items.map(item => `
                <div class="flex gap-4 pt-3 first:pt-0 items-center justify-between">
                  <div class="flex gap-3 items-center">
                    <img src="${item.product.images[0]}" class="w-10 h-12 object-cover bg-panel border" />
                    <div class="text-xs">
                      <p class="font-semibold uppercase tracking-wider text-foreground">${item.product.name}</p>
                      <p class="text-[10px] text-foreground/50">Size ${item.selectedSize} (x${item.quantity})</p>
                    </div>
                  </div>
                  <span class="text-xs font-semibold">$${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      `).join('')}
    </div>
  `;
}

function renderDashboardWishlist(el) {
  if (state.wishlist.length === 0) {
    el.innerHTML = `
      <div class="text-center py-16 space-y-4">
        <p class="font-serif-lux text-lg italic text-foreground/75">Your wishlist is empty.</p>
        <a href="collection.html" class="inline-block px-6 py-3 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest hover:bg-accent-lux">Explore Catalog</a>
      </div>
    `;
    return;
  }

  el.innerHTML = `
    <div class="space-y-8">
      <h2 class="text-xs uppercase font-bold tracking-widest text-foreground border-b border-border-lux/60 pb-3">Your Wishlist Collections</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        ${state.wishlist.map(p => `
          <div class="group border border-border-lux p-4 bg-background rounded relative text-center space-y-3">
            <div class="relative aspect-[3/4] overflow-hidden bg-panel border mb-2">
              <img src="${p.images[0]}" class="w-full h-full object-cover" />
            </div>
            <h3 class="text-xs font-semibold uppercase tracking-wider text-foreground leading-tight truncate hover:text-accent-lux">
              <a href="pdp.html?id=${p.id}">${p.name}</a>
            </h3>
            <span class="text-xs text-foreground/60 font-semibold block">$${p.price.toFixed(2)}</span>
            <div class="flex gap-1.5 pt-2">
              <a href="pdp.html?id=${p.id}" class="flex-1 py-1.5 bg-foreground text-background text-[9px] font-bold uppercase tracking-widest hover:bg-accent-lux text-center">Options</a>
              <button onclick="state.toggleWishlist(${JSON.stringify(p).replace(/"/g, '&quot;')}); selectDashboardTab('wishlist');" class="px-2 py-1.5 bg-panel text-red-500 text-[9px] font-bold uppercase tracking-widest border border-border-lux">✕</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderDashboardAddresses(el) {
  el.innerHTML = `
    <div class="space-y-8">
      <h2 class="text-xs uppercase font-bold tracking-widest text-foreground border-b border-border-lux/60 pb-3">Default Shipping Address</h2>
      <div class="border border-border-lux p-6 rounded bg-background space-y-4 max-w-md text-xs font-semibold uppercase tracking-wider text-foreground/75">
        <div class="space-y-1">
          <span class="text-[10px] text-foreground/45 block">Consignee Name</span>
          <span class="text-foreground font-bold">${state.currentUser.name}</span>
        </div>
        <div class="space-y-1">
          <span class="text-[10px] text-foreground/45 block">Street Address</span>
          <span class="text-foreground font-bold">${state.currentUser.address || "No address saved."}</span>
        </div>
        <div class="space-y-1">
          <span class="text-[10px] text-foreground/45 block">City / Postal Zip Code</span>
          <span class="text-foreground font-bold">${state.currentUser.city || "New York"} ${state.currentUser.zip || "10019"}</span>
        </div>
        <div class="space-y-1">
          <span class="text-[10px] text-foreground/45 block">Recipient Country</span>
          <span class="text-foreground font-bold">${state.currentUser.country || "United States"}</span>
        </div>
      </div>
    </div>
  `;
}

function renderDashboardProfile(el) {
  el.innerHTML = `
    <div class="space-y-8">
      <h2 class="text-xs uppercase font-bold tracking-widest text-foreground border-b border-border-lux/60 pb-3">Aesthetic Account Profile</h2>
      <div class="border border-border-lux p-6 rounded bg-background space-y-4 max-w-md text-xs font-semibold uppercase tracking-wider text-foreground/75">
        <div class="space-y-1">
          <span class="text-[10px] text-foreground/45 block">Registered Name</span>
          <span class="text-foreground font-bold">${state.currentUser.name}</span>
        </div>
        <div class="space-y-1">
          <span class="text-[10px] text-foreground/45 block">Verified Email</span>
          <span class="text-foreground font-bold">${state.currentUser.email}</span>
        </div>
        <div class="space-y-1">
          <span class="text-[10px] text-foreground/45 block">Access Tier</span>
          <span class="text-accent-lux font-bold">ROSH Private Client Club</span>
        </div>
      </div>
    </div>
  `;
}

// H. FAQ Search and Accordions
const FAQ_DATA = [
  { cat: "Shipping", q: "Which countries do you ship to, and what are delivery fees?", a: "We offer complimentary standard carbon-neutral shipping on all global orders. ROSH ships to over 50 countries, including the United States, Canada, EU, and UK." },
  { cat: "Returns", q: "What is your complimentary return & exchange timeline?", a: "We offer free home returns collection on all unopened garments within 30 days of purchase. Coordination is done in your Customer Dashboard." },
  { cat: "Fabric", q: "How should I clean and store my extra fine merino wool garments?", a: "Wool pieces should be hand washed cold using dedicated wool detergent or professionally dry cleaned. Never hang fine knitwear — fold flat in a dry space." }
];

function renderFAQList() {
  const container = document.getElementById('faq-items-list-container');
  const searchInput = document.getElementById('faq-search-box-input');
  if (!container) return;

  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

  const filtered = FAQ_DATA.filter(item => 
    item.q.toLowerCase().includes(query) || 
    item.a.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    container.innerHTML = `<p class="text-center text-xs text-foreground/50 py-10">No matching queries found in our records.</p>`;
    return;
  }

  container.innerHTML = filtered.map((item, idx) => `
    <div class="border-b border-border-lux/85 pb-4">
      <button onclick="toggleFAQAccordion(${idx})" class="w-full flex justify-between items-center text-xs font-semibold uppercase tracking-widest text-left py-2">
        <span>${item.q}</span>
        <span id="faq-arrow-${idx}" class="text-foreground/50">▼</span>
      </button>
      <div id="faq-panel-${idx}" class="hidden overflow-hidden mt-3 text-[11px] leading-relaxed text-foreground/80 font-medium transition-all">
        <p>${item.a}</p>
      </div>
    </div>
  `).join('');
}

function toggleFAQAccordion(idx) {
  const panel = document.getElementById(`faq-panel-${idx}`);
  const arrow = document.getElementById(`faq-arrow-${idx}`);
  if (!panel) return;

  const isHidden = panel.classList.contains('hidden');
  panel.classList.toggle('hidden', !isHidden);
  arrow.innerHTML = isHidden ? '✕' : '▼';
}

// I. SIZE GUIDE FIT FINDER
function initSizeGuideView() {
  const result = document.getElementById('size-fit-finder-result');
  if (result) result.classList.add('hidden');
}

function handleSizeGuideFitCalculator() {
  const height = Number(document.getElementById('fit-height-input').value);
  const weight = Number(document.getElementById('fit-weight-input').value);

  if (!height || !weight) return;

  let rec = '';
  if (height < 165) {
    if (weight < 55) rec = 'Extra Small (XS)';
    else if (weight < 65) rec = 'Small (S)';
    else rec = 'Medium (M)';
  } else if (height < 180) {
    if (weight < 65) rec = 'Small (S)';
    else if (weight < 78) rec = 'Medium (M)';
    else rec = 'Large (L)';
  } else {
    if (weight < 75) rec = 'Medium (M)';
    else if (weight < 88) rec = 'Large (L)';
    else rec = 'Extra Large (XL)';
  }

  const result = document.getElementById('size-fit-finder-result');
  result.querySelector('.recommended-fit-span').textContent = rec;
  result.classList.remove('hidden');
}

// J. CONTACT FORM & LIVE AI CONCIERGE CHAT
function handleContactFormSubmit(e) {
  e.preventDefault();
  document.getElementById('contact-form-elements').classList.add('hidden');
  document.getElementById('contact-success-elements').classList.remove('hidden');
}

function toggleLiveChatWindow(isOpen) {
  const chat = document.getElementById('concierge-live-chat-panel');
  if (chat) chat.classList.toggle('hidden', !isOpen);
}

function handleLiveChatSendMessage(e) {
  e.preventDefault();
  const input = document.getElementById('concierge-chat-input-box');
  const query = input.value.trim();
  if (!query) return;

  const messages = document.getElementById('concierge-messages-list');
  
  // Render user message
  messages.innerHTML += `
    <div class="flex justify-end animate-fade-in">
      <div class="max-w-[80%] rounded px-3 py-2 text-xs font-semibold bg-foreground text-background">${query}</div>
    </div>
  `;
  
  input.value = '';
  messages.scrollTop = messages.scrollHeight;

  // Render Concierge automated reply
  setTimeout(() => {
    let reply = "Of course. I will relay this coordinates directly to our master tailors. Would you like to schedule an atelier visit?";
    const q = query.toLowerCase();
    
    if (q.includes('size') || q.includes('fit')) {
      reply = "For structural precision, I highly recommend using our interactive Fit Finder under our Size Guide page. All silhouettes are tailored true-to-size.";
    } else if (q.includes('shipping') || q.includes('delivery')) {
      reply = "All global orders enjoy complimentary carbon-neutral shipping wrapped in our signature embossed boxes. Delivery generally takes 3–5 business days.";
    }

    messages.innerHTML += `
      <div class="flex justify-start animate-fade-in">
        <div class="max-w-[80%] rounded px-3 py-2 text-xs font-medium bg-background text-foreground border border-border-lux/60 leading-relaxed shadow-sm">${reply}</div>
      </div>
    `;
    
    messages.scrollTop = messages.scrollHeight;
  }, 1000);
}

// =========================================================================
// SYSTEM-WIDE UI UTILITIES
// =========================================================================

// Custom cursor dots follower
function initCustomCursor() {
  if (window.innerWidth < 1024) return;

  const dot = document.getElementById('custom-cursor-dot');
  const ring = document.getElementById('custom-cursor-ring');

  if (!dot || !ring) return;

  document.documentElement.classList.add('custom-cursor-active');

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  // Smooth trail spring follow
  function follow() {
    const dx = mouseX - ringX;
    const dy = mouseY - ringY;
    
    ringX += dx * 0.15;
    ringY += dy * 0.15;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(follow);
  }
  
  requestAnimationFrame(follow);

  // Hover triggers
  document.addEventListener('mouseover', e => {
    const target = e.target;
    if (!target) return;

    const interactive = target.closest('a, button, input, select, textarea, [role="button"], .quick-cat-btn');
    if (interactive) {
      document.body.classList.add('custom-cursor-hover');
    } else {
      document.body.classList.remove('custom-cursor-hover');
    }
  });
}

// Smooth scrolling (Lenis CDN check / fallback)
function initLenisScroll() {
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}

// Animated day/night mode switcher
function toggleThemeMode() {
  const isDark = document.documentElement.classList.contains('dark');
  if (isDark) {
    document.documentElement.classList.remove('dark');
    state.theme = 'light';
    localStorage.setItem('rosh_theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    state.theme = 'dark';
    localStorage.setItem('rosh_theme', 'dark');
  }
}

// MiniCart slide-out Drawer Panel control
function toggleMiniCartDrawer(isOpen) {
  const drawer = document.getElementById('mini-cart-drawer');
  const overlay = document.getElementById('mini-cart-overlay');
  if (!drawer) return;

  if (isOpen) {
    renderMiniCartItems();
    drawer.classList.remove('translate-x-full');
    if (overlay) overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.add('translate-x-full');
    if (overlay) overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function renderMiniCartItems() {
  const container = document.getElementById('mini-cart-items-box');
  const footer = document.getElementById('mini-cart-footer-summary');
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
        <svg class="w-12 h-12 text-accent-lux opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <p class="font-serif-lux text-xl italic text-foreground/75">Your luxury cart is empty.</p>
        <button onclick="toggleMiniCartDrawer(false)" class="px-6 py-3 bg-foreground text-background text-xs uppercase tracking-widest font-semibold hover:bg-accent-lux hover:text-white">Explore Catalog</button>
      </div>
    `;
    if (footer) footer.classList.add('hidden');
    return;
  }

  if (footer) footer.classList.remove('hidden');
  const subtotalDisplay = document.getElementById('mini-cart-subtotal-display');
  if (subtotalDisplay) subtotalDisplay.textContent = `$${state.getCartSubtotal().toFixed(2)}`;

  container.innerHTML = state.cart.map(item => `
    <div class="flex gap-4 border-b border-border-lux/40 pb-6 last:border-0 last:pb-0">
      <div class="relative w-20 h-24 bg-panel flex-shrink-0 overflow-hidden border">
        <img src="${item.product.images[0]}" alt="${item.product.name}" class="w-full h-full object-cover" />
      </div>
      <div class="flex-1 flex flex-col justify-between">
        <div class="space-y-1">
          <div class="flex justify-between items-start">
            <h3 class="text-xs font-semibold uppercase tracking-wider text-foreground leading-tight truncate max-w-[160px]">
              <a href="pdp.html?id=${item.product.id}" onclick="toggleMiniCartDrawer(false)">${item.product.name}</a>
            </h3>
            <button onclick="state.removeFromCart('${item.product.id}', '${item.selectedSize}', '${item.selectedColor.name}'); renderMiniCartItems();" class="text-[10px] text-foreground/45 hover:text-foreground">✕</button>
          </div>
          <p class="text-[10px] text-foreground/50 tracking-wider">Size: ${item.selectedSize} | Color: ${item.selectedColor.name}</p>
        </div>
        <div class="flex justify-between items-center mt-2">
          <div class="flex items-center border border-border-lux rounded">
            <button onclick="state.updateQuantity('${item.product.id}', '${item.selectedSize}', '${item.selectedColor.name}', ${item.quantity - 1}); renderMiniCartItems();" class="w-7 h-7 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-panel">-</button>
            <span class="w-8 text-center text-xs font-semibold">${item.quantity}</span>
            <button onclick="state.updateQuantity('${item.product.id}', '${item.selectedSize}', '${item.selectedColor.name}', ${item.quantity + 1}); renderMiniCartItems();" class="w-7 h-7 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-panel">+</button>
          </div>
          <span class="text-xs font-semibold">$${(item.product.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Mobile side menu control
function toggleMobileMenu(isOpen) {
  const drawer = document.getElementById('mobile-menu-drawer');
  const overlay = document.getElementById('mobile-menu-overlay');
  if (!drawer) return;

  if (isOpen) {
    drawer.classList.remove('-translate-x-full');
    if (overlay) overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.add('-translate-x-full');
    if (overlay) overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Quick Add size overlay for shop cards
let quickAddActiveProduct = null;
let quickAddSelectedSize = '';
let quickAddSelectedColor = null;

function openQuickAddDialog(id) {
  const product = state.products.find(p => p.id === id);
  if (!product) return;

  quickAddActiveProduct = product;
  quickAddSelectedSize = product.sizes[0];
  quickAddSelectedColor = product.colors[0];

  document.getElementById('quick-add-title').textContent = product.name;
  document.getElementById('quick-add-price').textContent = `$${product.price.toFixed(2)}`;
  
  // Sizes
  const sizeBox = document.getElementById('quick-add-sizes-box');
  sizeBox.innerHTML = product.sizes.map(size => `
    <button onclick="quickAddSelectSize(this)" class="quick-add-size-btn px-4 py-2 border text-xs font-semibold tracking-wider transition-colors ${
      size === quickAddSelectedSize ? 'bg-foreground text-background border-foreground' : 'border-border-lux hover:bg-panel'
    }">
      ${size}
    </button>
  `).join('');

  // Colors
  const colorBox = document.getElementById('quick-add-colors-box');
  colorBox.innerHTML = product.colors.map(col => `
    <button onclick="quickAddSelectColor(this, ${JSON.stringify(col).replace(/"/g, '&quot;')})" class="quick-add-color-btn flex items-center gap-2 px-3 py-1.5 border text-xs font-medium tracking-wide transition-colors ${
      col.name === quickAddSelectedColor.name ? 'border-foreground bg-panel' : 'border-border-lux/60 hover:bg-panel'
    }">
      <span class="w-3.5 h-3.5 rounded-full border border-border-lux" style="background-color: ${col.hex}"></span>
      <span>${col.name}</span>
    </button>
  `).join('');

  document.getElementById('quick-add-sheet-feedback').classList.add('hidden');
  document.getElementById('quick-add-interactive-selectors').classList.remove('hidden');

  const sheet = document.getElementById('quick-add-bottom-sheet');
  const overlay = document.getElementById('quick-add-overlay');
  sheet.classList.remove('translate-y-full');
  overlay.classList.remove('hidden');
}

function closeQuickAddDialog() {
  const sheet = document.getElementById('quick-add-bottom-sheet');
  const overlay = document.getElementById('quick-add-overlay');
  if (sheet) sheet.classList.add('translate-y-full');
  if (overlay) overlay.classList.add('hidden');
  quickAddActiveProduct = null;
}

function quickAddSelectSize(btn) {
  document.querySelectorAll('.quick-add-size-btn').forEach(el => {
    el.className = "quick-add-size-btn px-4 py-2 border text-xs font-semibold tracking-wider border-border-lux hover:bg-panel transition-colors";
  });
  btn.className = "quick-add-size-btn px-4 py-2 border text-xs font-semibold tracking-wider bg-foreground text-background border-foreground transition-colors";
  quickAddSelectedSize = btn.textContent.trim();
}

function quickAddSelectColor(btn, colorObj) {
  document.querySelectorAll('.quick-add-color-btn').forEach(el => {
    el.className = "quick-add-color-btn flex items-center gap-2 px-3 py-1.5 border text-xs font-medium tracking-wide border-border-lux/60 hover:bg-panel transition-colors";
  });
  btn.className = "quick-add-color-btn flex items-center gap-2 px-3 py-1.5 border text-xs font-medium tracking-wide border-foreground bg-panel transition-colors";
  quickAddSelectedColor = colorObj;
}

function confirmQuickAddSubmit() {
  if (quickAddActiveProduct && quickAddSelectedColor) {
    state.addToCart(quickAddActiveProduct, quickAddSelectedSize, quickAddSelectedColor, 1);
    
    document.getElementById('quick-add-interactive-selectors').classList.add('hidden');
    const feedback = document.getElementById('quick-add-sheet-feedback');
    feedback.textContent = "Added to luxury bag.";
    feedback.classList.remove('hidden');

    setTimeout(() => {
      closeQuickAddDialog();
      window.location.reload();
    }, 1200);
  }
}
