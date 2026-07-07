// =========================================================
// QAMAR FABRICS — shared components
// Injected on every page so header/footer/cart-count stay in
// sync without a build step or server-side includes.
// =========================================================
import { COLOR_HEX } from "./products-data.js";

export function formatPKR(n) {
  return "Rs " + Number(n).toLocaleString("en-PK");
}

export function getCart() {
  try { return JSON.parse(localStorage.getItem("qf_cart") || "[]"); }
  catch (e) { return []; }
}
export function saveCart(cart) {
  localStorage.setItem("qf_cart", JSON.stringify(cart));
  updateCartBadge();
}
export function cartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}
export function updateCartBadge() {
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = cartCount();
  });
}

export function toast(message) {
  let el = document.getElementById("qf-toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "qf-toast";
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), 2400);
}

/** Deterministic "fabric swatch" placeholder — a diagonal
 * bolt-weave pattern tinted to the product's colorSeed. Swap
 * out for a real <img> once product photography exists;
 * anywhere this is used, just replace the returned markup
 * with `<img src="..." alt="...">`. */
export function swatchSVG(colorSeed, label) {
  const hex = COLOR_HEX[colorSeed] || "#3A5079";
  const id = "p" + Math.random().toString(36).slice(2, 8);
  return `
  <svg class="swatch-pattern" width="100%" height="100%" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label ? label.replace(/"/g,'&quot;') : 'Fabric swatch'}">
    <defs>
      <linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${hex}"/>
        <stop offset="1" stop-color="${hex}" stop-opacity="0.72"/>
      </linearGradient>
      <pattern id="${id}p" width="26" height="26" patternTransform="rotate(24)" patternUnits="userSpaceOnUse">
        <rect width="26" height="26" fill="transparent"/>
        <line x1="0" y1="0" x2="0" y2="26" stroke="#FBF6EA" stroke-opacity="0.10" stroke-width="8"/>
      </pattern>
    </defs>
    <rect width="300" height="400" fill="url(#${id}g)"/>
    <rect width="300" height="400" fill="url(#${id}p)"/>
  </svg>`;
}

const HEADER_HTML = `
<a class="skip-link" href="#main">Skip to content</a>
<div class="announce">Free delivery across Pakistan on orders over Rs 3,000 &nbsp;•&nbsp; Cash on delivery available</div>
<header class="site-header">
  <div class="container header-row">
    <a href="index.html" class="logo"><span class="logo-mark">Q</span>amar Fabrics</a>
    <nav class="main-nav" aria-label="Primary">
      <a href="shop.html?category=men">Men</a>
      <a href="shop.html?category=women">Women</a>
      <a href="shop.html?category=kids">Kids</a>
      <a href="shop.html">Brand Lines</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>
    <div class="header-actions">
      <a href="account.html" class="icon-btn" aria-label="Account">Account</a>
      <a href="cart.html" class="icon-btn" aria-label="Cart">
        Cart <span class="cart-count" data-cart-count>0</span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">&#9776;</button>
    </div>
  </div>
  <nav class="main-nav" id="mobileNav" style="display:none;flex-direction:column;gap:0;padding:0 24px 16px;" aria-label="Mobile">
    <a href="shop.html?category=men" style="padding:10px 0;">Men</a>
    <a href="shop.html?category=women" style="padding:10px 0;">Women</a>
    <a href="shop.html?category=kids" style="padding:10px 0;">Kids</a>
    <a href="shop.html" style="padding:10px 0;">Brand Lines</a>
    <a href="about.html" style="padding:10px 0;">About</a>
    <a href="contact.html" style="padding:10px 0;">Contact</a>
  </nav>
</header>
`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="logo" style="margin-bottom:12px;"><span class="logo-mark">Q</span>amar Fabrics</div>
        <p style="max-width:32ch;">Unstitched fabric for men, women and kids — lawn, khaddar, karandi, linen and silk, cut and sold by the metre across Pakistan.</p>
      </div>
      <div>
        <h4>Shop</h4>
        <ul>
          <li><a href="shop.html?category=men">Men</a></li>
          <li><a href="shop.html?category=women">Women</a></li>
          <li><a href="shop.html?category=kids">Kids</a></li>
          <li><a href="shop.html">All Brand Lines</a></li>
        </ul>
      </div>
      <div>
        <h4>Help</h4>
        <ul>
          <li><a href="contact.html">Contact us</a></li>
          <li><a href="account.html">Track an order</a></li>
          <li><a href="about.html">Size &amp; fabric guide</a></li>
          <li><a href="contact.html">Returns &amp; exchanges</a></li>
        </ul>
      </div>
      <div>
        <h4>Stay in the loop</h4>
        <p>New drops and sale prices, no spam.</p>
        <form class="newsletter-row" id="newsletterForm">
          <label class="visually-hidden" for="nlEmail">Email address</label>
          <input id="nlEmail" type="email" required placeholder="you@example.com">
          <button class="btn btn-gold" type="submit">Join</button>
        </form>
      </div>
    </div>
    <div class="selvage on-dark"></div>
    <div class="footer-bottom">
      <span>&copy; <span id="qfYear"></span> Qamar Fabrics. All rights reserved.</span>
      <span>Lahore, Pakistan · Ships nationwide</span>
    </div>
  </div>
</footer>
`;

export function injectLayout() {
  const header = document.getElementById("qf-header");
  const footer = document.getElementById("qf-footer");
  if (header) header.innerHTML = HEADER_HTML;
  if (footer) footer.innerHTML = FOOTER_HTML;

  const yearEl = document.getElementById("qfYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const open = mobileNav.style.display === "flex";
      mobileNav.style.display = open ? "none" : "flex";
      toggle.setAttribute("aria-expanded", String(!open));
    });
  }

  const nlForm = document.getElementById("newsletterForm");
  if (nlForm) {
    nlForm.addEventListener("submit", (e) => {
      e.preventDefault();
      toast("Thanks — you're on the list.");
      nlForm.reset();
    });
  }

  // highlight active nav link
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(a => {
    if (a.getAttribute("href").startsWith(here.replace(".html",""))) a.classList.add("active");
  });

  updateCartBadge();
}
