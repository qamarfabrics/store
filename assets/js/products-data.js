// =========================================================
// QAMAR FABRICS — sample catalog
// This file serves two purposes:
//   1. Fallback data so the site looks fully populated even
//      before you've connected Firestore.
//   2. The payload that /seed.html pushes into your
//      Firestore "products" collection (one-time, admin use).
// Replace/extend freely — add real photos by changing
// "images" to real URLs (or Firebase Storage paths) once you
// have product photography.
// =========================================================

export const PRODUCTS = [
  {
    id: "qf-men-001",
    slug: "qamar-signature-cotton-karandi-2pc-charcoal",
    name: "Qamar Signature Cotton Karandi — 2 Piece, Charcoal",
    category: "men",
    brandLine: "Qamar Signature",
    fabric: "Cotton Karandi",
    price: 4290,
    salePrice: null,
    meters: "2.5m shirt + 2.5m shalwar, unstitched",
    sku: "QF-MEN-2PC-001",
    colorSeed: "charcoal",
    rating: 4.7,
    reviews: 128,
    stock: 34,
    tags: ["men", "unstitched", "karandi", "winter", "charcoal", "2 piece"],
    description:
      "Heavyweight cotton karandi cut for men who want a shalwar kameez that holds its shape through a full winter of wear. Brushed for softness, woven dense enough to block the chill, and dyed a deep charcoal that goes from the office to Friday prayers without a change of clothes.",
    seoTitle: "Cotton Karandi Unstitched 2 Piece for Men — Charcoal | Qamar Fabrics",
    seoDescription:
      "Shop men's unstitched cotton karandi fabric, 2 piece charcoal. Heavyweight winter karandi, tailor-ready, nationwide delivery across Pakistan."
  },
  {
    id: "qf-men-002",
    slug: "bunyaan-basics-wash-and-wear-3pc-navy",
    name: "Bunyaan Basics Wash & Wear — 3 Piece, Navy",
    category: "men",
    brandLine: "Bunyaan Basics",
    fabric: "Wash & Wear",
    price: 3190,
    salePrice: 2690,
    meters: "4.25m shirt+shalwar + 2.5m waistcoat, unstitched",
    sku: "QF-MEN-3PC-002",
    colorSeed: "navy",
    rating: 4.5,
    reviews: 96,
    stock: 51,
    tags: ["men", "unstitched", "wash and wear", "navy", "3 piece", "sale"],
    description:
      "The fabric Qamar customers reorder without thinking twice. Wash & wear that needs no ironing, a navy dark enough to hide a long day's dust, and a matching waistcoat length cut into the same bolt so the shade never mismatches between pieces.",
    seoTitle: "Wash & Wear Unstitched 3 Piece for Men — Navy | Qamar Fabrics",
    seoDescription:
      "Men's wash and wear unstitched 3 piece suit fabric with waistcoat, navy. No-iron finish, on sale now at Qamar Fabrics."
  },
  {
    id: "qf-men-003",
    slug: "qamar-signature-linen-2pc-olive",
    name: "Qamar Signature Linen — 2 Piece, Olive",
    category: "men",
    brandLine: "Qamar Signature",
    fabric: "Linen",
    price: 3890,
    salePrice: null,
    meters: "2.5m shirt + 2.5m shalwar, unstitched",
    sku: "QF-MEN-2PC-003",
    colorSeed: "olive",
    rating: 4.6,
    reviews: 61,
    stock: 22,
    tags: ["men", "unstitched", "linen", "summer", "olive", "2 piece"],
    description:
      "Pure linen with the loose, breathable weave the fabric is known for — cut generously so the drape falls the way linen should. Olive reads quietly formal in daylight and dresses down easily for evening.",
    seoTitle: "Linen Unstitched 2 Piece for Men — Olive | Qamar Fabrics",
    seoDescription:
      "Buy men's pure linen unstitched 2 piece, olive. Breathable summer fabric for shalwar kameez, direct from Qamar Fabrics."
  },
  {
    id: "qf-women-001",
    slug: "malmal-edit-lawn-3pc-embroidered-blush",
    name: "Malmal Edit Embroidered Lawn — 3 Piece, Blush",
    category: "women",
    brandLine: "Malmal Edit",
    fabric: "Lawn",
    price: 5490,
    salePrice: 4290,
    meters: "3m shirt (embroidered front) + 2.5m trouser + 2.5m chiffon dupatta",
    sku: "QF-WMN-3PC-001",
    colorSeed: "blush",
    rating: 4.8,
    reviews: 214,
    stock: 18,
    tags: ["women", "unstitched", "lawn", "embroidered", "blush", "3 piece", "sale"],
    description:
      "Fine-count lawn with a hand-guided embroidery run across the front panel, paired with a chiffon dupatta finished on all four edges. Blush was our best-selling shade last season and it's back for a limited run.",
    seoTitle: "Embroidered Lawn Unstitched 3 Piece for Women — Blush | Qamar Fabrics",
    seoDescription:
      "Shop women's embroidered lawn unstitched 3 piece with chiffon dupatta, blush. Limited run, ships nationwide from Qamar Fabrics."
  },
  {
    id: "qf-women-002",
    slug: "ajrak-line-khaddar-3pc-indigo",
    name: "Ajrak Line Block-Print Khaddar — 3 Piece, Indigo",
    category: "women",
    brandLine: "Ajrak Line",
    fabric: "Khaddar",
    price: 4790,
    salePrice: null,
    meters: "3m shirt + 2.5m trouser + 2.5m khaddar dupatta",
    sku: "QF-WMN-3PC-002",
    colorSeed: "indigo",
    rating: 4.9,
    reviews: 173,
    stock: 27,
    tags: ["women", "unstitched", "khaddar", "block print", "ajrak", "indigo", "winter"],
    description:
      "Traditional ajrak block printing on heavyweight khaddar, dyed the deep indigo the technique is named for. Each length is hand-stamped, so no two prints fall in exactly the same place — treat that as a feature, not a flaw.",
    seoTitle: "Ajrak Block Print Khaddar Unstitched 3 Piece — Indigo | Qamar Fabrics",
    seoDescription:
      "Buy women's ajrak block-print khaddar unstitched 3 piece, indigo. Authentic hand block printing, winter weight, from Qamar Fabrics."
  },
  {
    id: "qf-women-003",
    slug: "noor-festive-chiffon-silk-3pc-emerald",
    name: "Noor Festive Chiffon & Silk — 3 Piece, Emerald",
    category: "women",
    brandLine: "Noor Festive",
    fabric: "Chiffon & Raw Silk",
    price: 9490,
    salePrice: null,
    meters: "2.5m silk shirt + 2.5m silk trouser + 2.5m chiffon dupatta",
    sku: "QF-WMN-3PC-003",
    colorSeed: "emerald",
    rating: 4.7,
    reviews: 88,
    stock: 12,
    tags: ["women", "unstitched", "silk", "chiffon", "festive", "emerald", "3 piece"],
    description:
      "Raw silk with real weight in the hand, cut alongside a soft chiffon dupatta for evenings that call for something more than lawn. Emerald was pulled straight from this season's festive palette.",
    seoTitle: "Silk & Chiffon Festive Unstitched 3 Piece for Women — Emerald | Qamar Fabrics",
    seoDescription:
      "Shop women's raw silk and chiffon unstitched 3 piece, emerald. Festive wear fabric, nationwide delivery from Qamar Fabrics."
  },
  {
    id: "qf-women-004",
    slug: "malmal-edit-cambric-unstitched-2pc-mustard",
    name: "Malmal Edit Printed Cambric — 2 Piece, Mustard",
    category: "women",
    brandLine: "Malmal Edit",
    fabric: "Cambric",
    price: 2790,
    salePrice: 2190,
    meters: "3m shirt + 2.5m trouser, unstitched",
    sku: "QF-WMN-2PC-004",
    colorSeed: "mustard",
    rating: 4.4,
    reviews: 142,
    stock: 40,
    tags: ["women", "unstitched", "cambric", "printed", "mustard", "2 piece", "sale"],
    description:
      "An everyday cambric print in a mustard that photographs as well in daylight as it wears through a full day of errands. No dupatta in this cut — pair with something plain from your own wardrobe.",
    seoTitle: "Printed Cambric Unstitched 2 Piece for Women — Mustard | Qamar Fabrics",
    seoDescription:
      "Buy women's printed cambric unstitched 2 piece, mustard, on sale at Qamar Fabrics. Everyday wear fabric, tailor-ready."
  },
  {
    id: "qf-kids-001",
    slug: "qamar-signature-kids-boys-lawn-2pc-sky",
    name: "Qamar Signature Kids Boys Lawn — 2 Piece, Sky Blue",
    category: "kids",
    brandLine: "Qamar Signature Kids",
    fabric: "Lawn",
    price: 1990,
    salePrice: null,
    meters: "1.75m shirt + 1.75m shalwar, unstitched — sizes 2–12 yrs",
    sku: "QF-KID-B-001",
    colorSeed: "skyblue",
    rating: 4.6,
    reviews: 54,
    stock: 60,
    tags: ["kids", "boys", "unstitched", "lawn", "sky blue", "2 piece"],
    description:
      "Soft lawn scaled down for boys, cut generously enough for a tailor to leave growing room. Sky blue works equally for a school Eid function or a Friday outing.",
    seoTitle: "Boys Unstitched Lawn 2 Piece — Sky Blue | Qamar Fabrics",
    seoDescription:
      "Shop boys' unstitched lawn 2 piece fabric, sky blue, sizes 2–12 years. Tailor-ready kids' fabric from Qamar Fabrics."
  },
  {
    id: "qf-kids-002",
    slug: "noor-festive-kids-girls-3pc-embroidered-rani",
    name: "Noor Festive Kids Girls Embroidered — 3 Piece, Rani Pink",
    category: "kids",
    brandLine: "Noor Festive Kids",
    fabric: "Lawn & Chiffon",
    price: 2890,
    salePrice: 2390,
    meters: "1.75m shirt (embroidered) + 1.75m trouser + 1.5m dupatta — sizes 2–12 yrs",
    sku: "QF-KID-G-002",
    colorSeed: "ranipink",
    rating: 4.8,
    reviews: 77,
    stock: 33,
    tags: ["kids", "girls", "unstitched", "embroidered", "rani pink", "3 piece", "sale"],
    description:
      "A scaled-down version of our women's festive embroidery, cut for girls who want to match an older sister or mother without wearing a miniature adult outfit. Rani pink, dupatta included.",
    seoTitle: "Girls Unstitched Embroidered 3 Piece — Rani Pink | Qamar Fabrics",
    seoDescription:
      "Buy girls' embroidered unstitched 3 piece with dupatta, rani pink, sizes 2–12 years, on sale at Qamar Fabrics."
  },
  {
    id: "qf-kids-003",
    slug: "bunyaan-basics-kids-boys-khaddar-2pc-grey",
    name: "Bunyaan Basics Kids Boys Khaddar — 2 Piece, Grey",
    category: "kids",
    brandLine: "Bunyaan Basics Kids",
    fabric: "Khaddar",
    price: 1690,
    salePrice: null,
    meters: "1.75m shirt + 1.75m shalwar, unstitched — sizes 2–12 yrs",
    sku: "QF-KID-B-003",
    colorSeed: "grey",
    rating: 4.5,
    reviews: 39,
    stock: 45,
    tags: ["kids", "boys", "unstitched", "khaddar", "grey", "winter", "2 piece"],
    description:
      "Warm khaddar in a grey that hides the everyday mess of a school playground, sized for boys 2 to 12 years and priced to buy in more than one size.",
    seoTitle: "Boys Unstitched Khaddar 2 Piece — Grey | Qamar Fabrics",
    seoDescription:
      "Shop boys' winter khaddar unstitched 2 piece, grey, sizes 2–12 years. Affordable kids' fabric from Qamar Fabrics."
  },
  {
    id: "qf-brand-001",
    slug: "qamar-signature-luxury-pret-lawn-3pc-maroon",
    name: "Qamar Signature Luxury Lawn — 3 Piece, Maroon",
    category: "women",
    brandLine: "Qamar Signature",
    fabric: "Lawn",
    price: 7290,
    salePrice: null,
    meters: "3m embroidered shirt + 2.5m trouser + 2.5m organza dupatta",
    sku: "QF-WMN-3PC-005",
    colorSeed: "maroon",
    rating: 4.9,
    reviews: 65,
    stock: 15,
    tags: ["women", "unstitched", "lawn", "luxury", "maroon", "3 piece", "brand"],
    description:
      "Our top-tier lawn line: multi-panel embroidery, an organza dupatta with a finished border, and a maroon deep enough to carry into a mehndi function.",
    seoTitle: "Luxury Embroidered Lawn Unstitched 3 Piece — Maroon | Qamar Fabrics",
    seoDescription:
      "Shop Qamar Signature luxury lawn unstitched 3 piece with organza dupatta, maroon. Premium women's fabric, nationwide delivery."
  },
  {
    id: "qf-men-004",
    slug: "ajrak-line-men-khaddar-2pc-brown",
    name: "Ajrak Line Men's Block-Print Khaddar — 2 Piece, Brown",
    category: "men",
    brandLine: "Ajrak Line",
    fabric: "Khaddar",
    price: 3990,
    salePrice: null,
    meters: "2.5m shirt + 2.5m shalwar, unstitched",
    sku: "QF-MEN-2PC-004",
    colorSeed: "brown",
    rating: 4.6,
    reviews: 41,
    stock: 19,
    tags: ["men", "unstitched", "khaddar", "block print", "brown", "2 piece"],
    description:
      "Hand block-printed khaddar in an earthy brown, the men's counterpart to our Ajrak Line women's prints. Same dye pots, same stamps, cut for a man's shalwar kameez.",
    seoTitle: "Ajrak Block Print Khaddar Unstitched 2 Piece for Men — Brown | Qamar Fabrics",
    seoDescription:
      "Buy men's ajrak block print khaddar unstitched 2 piece, brown. Traditional hand printing, winter weight, from Qamar Fabrics."
  }
];

// Deterministic hex colors used by the swatch generator in
// components.js so each product gets a consistent-looking
// placeholder "fabric swatch" until real photography is added.
export const COLOR_HEX = {
  charcoal: "#3a3d42", navy: "#1c2a4a", olive: "#5c6b3f", blush: "#e8b9b6",
  indigo: "#233a63", emerald: "#1f5a45", mustard: "#d3a13a", skyblue: "#6fa8cf",
  ranipink: "#b23a63", grey: "#8a8d92", maroon: "#6e1f2b", brown: "#6b4a30"
};
