// =========================================================
// QAMAR FABRICS — core app logic
// Tries Firestore first; if Firebase isn't configured yet (or
// the "products" collection is empty), falls back to the
// local sample catalog so the site never looks broken.
// =========================================================
import { db, collection, getDocs, doc, getDoc, addDoc, serverTimestamp } from "./firebase-config.js";
import { PRODUCTS } from "./products-data.js";
import { formatPKR, swatchSVG, getCart, saveCart, toast } from "./components.js";

let _cache = null;

export async function fetchAllProducts() {
  if (_cache) return _cache;
  try {
    const snap = await getDocs(collection(db, "products"));
    if (!snap.empty) {
      _cache = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      return _cache;
    }
  } catch (err) {
    console.warn("Firestore not reachable yet, using local sample catalog:", err.message);
  }
  _cache = PRODUCTS;
  return _cache;
}

export async function fetchProductBySlug(slug) {
  const all = await fetchAllProducts();
  return all.find(p => p.slug === slug) || null;
}

export function filterProducts(all, { category, fabric, brandLine, sale, sort, q } = {}) {
  let list = all.slice();
  if (category) list = list.filter(p => p.category === category);
  if (fabric) list = list.filter(p => p.fabric === fabric);
  if (brandLine) list = list.filter(p => p.brandLine === brandLine);
  if (sale) list = list.filter(p => p.salePrice);
  if (q) {
    const needle = q.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(needle) ||
      (p.tags || []).some(t => t.toLowerCase().includes(needle)) ||
      (p.brandLine || "").toLowerCase().includes(needle)
    );
  }
  switch (sort) {
    case "price-asc": list.sort((a,b) => (a.salePrice||a.price) - (b.salePrice||b.price)); break;
    case "price-desc": list.sort((a,b) => (b.salePrice||b.price) - (a.salePrice||a.price)); break;
    case "rating": list.sort((a,b) => (b.rating||0) - (a.rating||0)); break;
    default: break; // "featured" — keep catalog order
  }
  return list;
}

export function productCardHTML(p) {
  const price = p.salePrice || p.price;
  return `
  <a class="product-card" href="product.html?slug=${encodeURIComponent(p.slug)}">
    <div class="product-thumb">
      ${p.salePrice ? `<span class="product-badge">Sale</span>` : ""}
      ${swatchSVG(p.colorSeed, p.name)}
    </div>
    <div class="product-info">
      <span class="brand">${p.brandLine || ""}</span>
      <h3>${p.name}</h3>
      <div class="meta-row">${p.fabric}</div>
      <div class="price-row">
        ${p.salePrice ? `<span class="old">${formatPKR(p.price)}</span>` : ""}
        <span class="now">${formatPKR(price)}</span>
      </div>
    </div>
  </a>`;
}

export function addToCart(product, qty = 1) {
  const cart = getCart();
  const existing = cart.find(i => i.id === product.id);
  if (existing) existing.qty += qty;
  else cart.push({
    id: product.id, slug: product.slug, name: product.name,
    price: product.salePrice || product.price, colorSeed: product.colorSeed,
    brandLine: product.brandLine, qty
  });
  saveCart(cart);
  toast(`Added to cart — ${product.name}`);
}

export function cartTotal(cart) {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

export async function placeOrder({ items, total, customer }) {
  const order = {
    items, total, customer,
    status: "pending",
    createdAt: serverTimestamp()
  };
  const ref = await addDoc(collection(db, "orders"), order);
  return ref.id;
}

export { formatPKR, swatchSVG, getCart, saveCart, toast };
