# Qamar Fabrics — Store Website

A complete, ready-to-deploy e-commerce site for unstitched Pakistani fabric
(men's, women's, kids' — lawn, khaddar, karandi, linen, silk). Plain HTML/CSS/
JS (no build step, no framework, no npm install needed) so it runs directly
on **GitHub Pages** (free hosting + free `yourusername.github.io/repo-name`
subdomain), with **Firebase** (Firestore + Authentication) as the backend.

---

## 1. Put it on GitHub Pages

1. Create a new **public** repo on GitHub, e.g. `qamar-fabrics`.
2. Upload every file in this folder to the repo root (keep the folder
   structure — `assets/css`, `assets/js`, etc. must stay where they are).
3. Repo → **Settings → Pages** → under "Build and deployment", set
   **Source: Deploy from a branch**, branch **main**, folder **/ (root)** →
   Save.
4. Wait 1–2 minutes, then your site is live at:
   `https://YOUR-USERNAME.github.io/qamar-fabrics/`
5. Open every HTML file and replace `YOUR-USERNAME` in the `<link
   rel="canonical">`, Open Graph, and JSON-LD tags with your actual GitHub
   username, and in `robots.txt` / `sitemap.xml` too — a quick find-and-replace
   across the project does this in one pass.

Want a real domain instead of the `.github.io` subdomain later? Buy any
domain, add a `CNAME` file at the repo root containing just that domain, and
point its DNS to GitHub Pages (GitHub's docs: *Managing a custom domain for
your GitHub Pages site*). Not required to launch — the free subdomain works
immediately.

---

## 2. Connect Firebase (the backend)

1. Go to [console.firebase.google.com](https://console.firebase.google.com) →
   **Add project** (free "Spark" plan is enough to start).
2. In the project, click the **</> (Web)** icon → register an app (no need to
   check "Firebase Hosting" — you're using GitHub Pages for hosting) → copy
   the `firebaseConfig` object it gives you.
3. Paste those values into `assets/js/firebase-config.js`, replacing every
   `"REPLACE_ME"`.
4. **Build → Firestore Database** → Create database → production mode → pick
   a region close to Pakistan (e.g. `asia-south1`).
5. **Firestore → Rules** tab → paste the contents of `firestore.rules` from
   this project → Publish.
6. **Build → Authentication** → Sign-in method → enable **Email/Password**
   and **Google**.
7. Push your changes to GitHub (or just re-upload `firebase-config.js`) and
   open `https://YOUR-USERNAME.github.io/qamar-fabrics/seed.html` once → click
   **Seed Products Now**. This loads the 12 sample products from
   `assets/js/products-data.js` into your live Firestore `products`
   collection. Edit that file first if you want your own real products/
   prices/photos, or add more products later straight from the Firebase
   Console (Firestore → `products` → Add document, matching the same fields).
8. Delete or ignore `seed.html` afterwards — it's already blocked from search
   engines via `robots.txt` and safe to leave in the repo.

The site works even *before* you finish this step — every page falls back to
the local sample catalog automatically, so you can preview the whole store
immediately after step 1.

### Data model
- `products/{id}` — name, slug, category (men/women/kids), brandLine, fabric,
  price, salePrice, meters, sku, colorSeed, stock, tags[], description,
  seoTitle, seoDescription, rating, reviews.
- `orders/{id}` — items[], total, customer{name,phone,address,city,email,...},
  status, createdAt. Created by `checkout.html`.
- `messages/{id}` — name, email, message, createdAt. Created by
  `contact.html`.

## 3. Add real product photos

Every product currently shows a generated color/pattern "swatch" placeholder
(see `swatchSVG()` in `assets/js/components.js`) instead of a photo, so the
store looks complete with zero setup. To use real photos:
1. Upload images anywhere public (Firebase Storage, GitHub repo `assets/images/`,
   or any CDN).
2. Add an `images: ["https://...jpg"]` field to a product in Firestore.
3. In `product.html` and `assets/js/app.js` (`productCardHTML`), swap the
   `swatchSVG(...)` call for `<img src="${p.images[0]}" alt="${p.name}">` —
   one line each.

## 4. SEO checklist (already done + what's left)

Already in place:
- Unique `<title>`, meta description, canonical URL and Open Graph tags on
  every page.
- `Organization` + `WebSite` (with sitelinks search box) JSON-LD on the
  homepage, `Product` JSON-LD generated per product page.
- `robots.txt` + `sitemap.xml`.
- Semantic HTML (`<header>`, `<main>`, `<nav>`, breadcrumbs), descriptive
  link text, alt text on every generated image/SVG.
- Fast, dependency-light pages (no framework, system fonts fallback, single
  CSS file) for good Core Web Vitals.
- Product copy written for humans first (so it also reads well to an AI
  answer engine or LLM-powered search) rather than keyword-stuffed text.

Do these after launch:
- Replace every `YOUR-USERNAME` placeholder (see step 1.5).
- Submit `sitemap.xml` in [Google Search Console](https://search.google.com/search-console)
  and [Bing Webmaster Tools](https://www.bing.com/webmasters) — this is what
  actually gets you indexed and, increasingly, cited by AI answer engines
  (Google AI Overviews, Bing Copilot, ChatGPT search) that crawl the same way.
  Genuinely add both — Bing's index also feeds ChatGPT's search results.
- Once you add real product photos, add `image` fields to the Product JSON-LD
  and an `<img>`-based sitemap entry for each — image search is a real
  traffic source for fashion/fabric queries.
- Add each real product URL (`product.html?slug=...`) to `sitemap.xml`; a
  small Node script that reads `products-data.js` and regenerates the file
  is a natural next step once your catalog is final.
- Get a few real backlinks (local business directories, Instagram bio link,
  WhatsApp Business catalog link) — domain trust still matters even for
  AI-driven discovery.

## 5. What's included

```
qamar-fabrics/
├── index.html          Homepage
├── shop.html           Category / filter / search listing
├── product.html        Product detail (?slug=...)
├── cart.html           Cart (localStorage-backed)
├── checkout.html       Checkout → writes an order to Firestore
├── login.html           Firebase Auth: email/password + Google
├── account.html         Signed-in order history
├── about.html            Brand story + fabric guide (SEO content)
├── contact.html          Contact form → Firestore "messages"
├── seed.html             One-time admin: push sample catalog to Firestore
├── 404.html              Custom not-found page
├── robots.txt / sitemap.xml
├── firestore.rules       Security rules to paste into Firebase Console
├── .nojekyll             Tells GitHub Pages not to run Jekyll processing
└── assets/
    ├── css/style.css              Full design system
    └── js/
        ├── firebase-config.js     Firebase init — put your keys here
        ├── products-data.js       Sample catalog + fallback data
        ├── components.js          Shared header/footer/cart-badge/toast
        ├── app.js                 Product fetching, filtering, cart, orders
        └── auth.js                Login/register/logout helpers
```

## 6. Design notes

Palette and type were chosen to fit the subject rather than generic
"AI template" defaults: deep ajrak-dye indigo, turmeric gold, and rani-pink
accents, paired with a serif display face (Fraunces) for headlines, Work Sans
for body/UI text, and JetBrains Mono for prices, SKUs and metadata (nodding to
fabric sold by exact measurement). The recurring divider between sections —
a row of small ticks — is a nod to a tailor's measuring tape and the selvage
edge of unstitched cloth.
