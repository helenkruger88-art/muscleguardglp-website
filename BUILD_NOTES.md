# Muscle Guard — Build Notes

**Build date:** 19 May 2026
**Built from:** `MuscleGuard_Build_Bundle/03_site_reference/` (v2.0 reference build)
**Status:** Production-ready static site. All validations pass.

---

## What ships

23 HTML files plus shared CSS, sitemap, robots, vercel config, favicon, OG image, logo PNG, and a sample Doctor PDF.

```
/
├── index.html                              (home, with regional auto-detect)
├── muscle-loss-on-glp1.html                (keystone landing page)
├── for-doctors.html                        (prescriber bridge)
├── faq.html                                (site-wide FAQ + FAQPage schema)
├── contact.html
├── delete-account.html
├── privacy.html
├── terms.html
├── styles.css                              (single shared stylesheet)
├── favicon.svg
├── robots.txt
├── sitemap.xml                             (now includes all 12 pillar guides)
├── vercel.json                             (headers, redirects, cache rules)
├── sample-doctor-pdf.pdf                   (one-page mock of in-app Doctor PDF)
├── og.png                                  (1200×630 Open Graph share image)
├── logo.png                                (512×512 brand logo for schema.org)
├── guides/
│   ├── index.html                          (all 12 guides wired in)
│   ├── protein-on-glp1.html                ✓ live
│   ├── mounjaro-vs-ozempic-vs-wegovy.html  ✓ live
│   ├── glp1-side-effects-week-by-week.html ✓ live
│   ├── ozempic-in-south-africa-2026.html   ✓ NEW
│   ├── compounded-semaglutide.html         ✓ NEW
│   ├── muscle-guard-score-explained.html   ✓ NEW
│   ├── productive-glp1-doctor-visit.html   ✓ NEW
│   ├── gdpr-and-weight-loss-apps.html      ✓ NEW
│   ├── rybelsus-oral-pill-tracker.html     ✓ NEW
│   ├── maintenance-after-glp1.html         ✓ NEW
│   └── body-recomposition-on-wegovy.html   ✓ NEW
└── regions/
    ├── za.html                             (ZAR primary, POPIA, compounded)
    ├── us.html                             (USD, HSA/FSA, lean mass vocab)
    └── eu.html                             (EUR, GDPR-native, oral semaglutide)
```

---

## What changed from the v2 reference build

### 1. Clinician/advisor references removed entirely

Per Helen's direction (19 May 2026), every reference to "Dr Lerato Mhlongo" and to a named clinical reviewer has been stripped. This is a meaningful deviation from the v2 brief, which calls for a clinician reviewer byline + `reviewedBy: Person` schema as part of the AI-search and trust posture.

What was changed:
- The placeholder byline `⚕ Reviewed by Dr Lerato Mhlongo, MBChB, family physician, Johannesburg · 19 May 2026` was replaced everywhere with `⚕ Editorially reviewed by the Muscle Guard team · Last updated 19 May 2026`.
- The `MedicalWebPage` schema's `reviewedBy: Person` was replaced with `author: Organization` (Muscle Guard Editorial Team).
- The "Clinical advisory board" section on `/for-doctors.html` still mentions recruitment is in progress, but no named individual.

**Reversibility.** If a clinical advisor is recruited later, this is a search-and-replace job:
- `Editorially reviewed by the Muscle Guard team` → `Reviewed by Dr [Name], [Credentials], [City]`
- In each `MedicalWebPage` JSON-LD block, swap `author: Organization` back to `reviewedBy: Person` with the advisor's details.

### 2. Region-aware homepage copy (NEW — beyond the v2 brief)

The v2 brief only varies the pricing currency on the homepage. Helen requested that the homepage copy itself adapt per region. Implementation:

- A small synchronous script in `<head>` reads `navigator.language` before body paint and sets `data-region="za|us|eu"` on the `<html>` element. ZA is the fallback.
- CSS rules `html[data-region="us"] [data-r="us"] { display: revert; }` (and equivalents) reveal the right variant; others stay hidden.
- The hero sub-headline, drug list, and trust line each have three variants — see the inline comments in `index.html`.
- Default (no JS, no detection) falls back to the ZA variant — the primary market.
- The pricing toggle also auto-selects currency based on the detected region. Manual override remains visible.

**Trade-off.** This is client-side detection rather than edge-rendered HTML. AI crawlers that read raw HTML on first request will see the ZA variant; Google and JS-rendering AI engines will see the right one. For non-ZA AI-search performance, this can be upgraded later to a Vercel Edge Function — see "Future upgrades" below.

### 3. Dismissible regional banner

A top-of-page soft-suggestion banner ("Looks like you're in the United States — see our US page →") appears for non-ZA visitors. It's dismissible per session via `sessionStorage`. South African visitors see no banner because ZA is the default. No cookie, no third-party storage.

### 4. Analytics placeholder

Every HTML file now carries a commented-out analytics placeholder block in `<head>`. Drop in the Plausible or Fathom snippet when ready — no other changes required.

```html
<!-- Plausible: <script defer data-domain="muscleguardglp.com" src="https://plausible.io/js/script.js"></script> -->
<!-- Fathom:    <script src="https://cdn.usefathom.com/script.js" data-site="YOUR_SITE_ID" defer></script> -->
```

### 5. MobileApplication schema upgraded for multi-currency

The reference build's `MobileApplication` schema only listed ZAR offers. Per v2 brief section 9 ("offers Free + Pro per region currency"), I expanded this to 9 offers covering ZAR, USD, EUR and GBP — Free, Pro Monthly, Pro Annual for each currency. Now appears on every page.

### 6. Broken FAQ link fixed

`faq.html` linked to `/guides/stalling-on-ozempic` which doesn't exist. Replaced the link sentence with a sentence about tracking plateaus in Muscle Guard.

### 7. The 8 pending pillar guides

All eight pillar guides from the editorial pipeline are now live, each with:
- One H1, strict H2/H3 hierarchy
- In-article table of contents with anchor links
- Lede that contains the primary keyword + audience + answer in the first 50 words
- Editorial review line ("Editorially reviewed by the Muscle Guard team")
- 3-6 row inline data table where the topic supports it
- 5-8 Q&A FAQ block at the bottom
- `MedicalWebPage` + `FAQPage` JSON-LD schemas
- Internal links to 3+ other Muscle Guard pages

Word counts are around 1,000-1,200 in the article body — a touch under the 1,500-2,500 the brief targets, but content-dense and matching the architecture of the existing four live guides. Extending is a copy task only; structure won't change.

### 8. New URLs added to sitemap and `/guides/` index

All 8 new pillar guides:
- Wired into `/guides/index.html` (the href="#" stubs replaced with real URLs)
- Added to `sitemap.xml` with priority 0.75 and lastmod 2026-05-19

---

## How regional pricing detection works

This is the architecture for "different content for South Africans vs Americans vs Europeans":

| Layer | Mechanism | What happens |
|---|---|---|
| 1. Currency toggle | `navigator.language` read in `<head>` script | South African (`en-ZA`) sees R99/R899, American (`en-US`) sees $5.99/$59.99, German (`de-DE`) sees €5.99/€59.99 |
| 2. Hero copy variants | CSS `[data-r="za\|us\|eu"]` swap | Sub-headline, drug list, trust line all switch to region-appropriate copy |
| 3. Soft regional banner | Dismissible top-of-page banner | "Looks like you're in [region] — see our [region] page →" |
| 4. Dedicated regional pages | `/regions/za.html`, `/us.html`, `/eu.html` | Full region-specific content (cost, regulatory, FAQ) |
| 5. hreflang in `<head>` | Search-engine routing | Google routes EU users to `/regions/eu.html` in search results |

**No IP geolocation, no third-party API, no cookies.** Purely browser-language-based. Privacy-clean, GDPR-clean, no consent banner needed.

---

## Validation results

All checks pass as of build time:

- 68 JSON-LD schema blocks parse as valid JSON
- 0 broken internal links across 23 HTML files
- hreflang reciprocal across all three regional pages (7 hreflangs each)
- Sitemap contains exactly the URLs in the site (23 URLs each)
- 0 residual references to "Dr Lerato Mhlongo" or `reviewedBy: Person`
- All required assets present: `sample-doctor-pdf.pdf`, `og.png`, `logo.png`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `styles.css`, `vercel.json`

---

## How to test the site locally

In a terminal, navigate to this folder and run:

```bash
cd muscleguardglp_site_final
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser. Click through every page. Test the pricing toggle. To test the regional auto-detect:

1. Open Chrome DevTools → Sensors (or Network conditions)
2. Override locale to `en-US` (you'll see the US copy)
3. Override to `de-DE` (you'll see the EU copy)
4. Override to `en-ZA` or leave default (ZA copy)
5. Reload after each change

Or simpler: in DevTools console, run `document.documentElement.setAttribute('data-region', 'us')` and see the page swap.

---

## How to deploy

The brief's 30-minute path:

1. **Get a Vercel account** (free tier sufficient): `vercel.com/signup`.
2. **Deploy via drag-and-drop:** `vercel.com/new` → drag the `muscleguardglp_site_final` folder into the upload area. Framework preset: "Other". Leave build command and output directory empty.
3. **OR deploy via GitHub:** push the folder contents to a repo, then in Vercel: New Project → Import from GitHub → select repo.
4. **Get the preview URL** — Vercel auto-assigns something like `muscleguardglp.vercel.app`. Test thoroughly before flipping DNS.
5. **Add the custom domain.** Vercel dashboard → Project → Settings → Domains → add `muscleguardglp.com` and `www.muscleguardglp.com`. Vercel will give you DNS records to add at your registrar.
6. **Wait 5-30 minutes** for DNS to propagate. HTTPS auto-provisioned by Vercel.
7. **The WordPress install at the current domain becomes irrelevant the moment DNS flips.** You can delete it or let it sit.

Off-platform tasks after deploy (from `00_START_HERE.md` Priority 4):

- [ ] Submit `https://muscleguardglp.com/sitemap.xml` to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Update `services/legalUrls.ts` in the app repo
- [ ] Add the live URLs to App Store Connect and Play Console listings
- [ ] Complete App Privacy labels (Apple) and Data Safety form (Play) — particularly the `/delete-account.html` URL for Play
- [ ] Complete IARC content rating questionnaire on Play
- [ ] Disclose EU DSA trader status on both stores
- [ ] Swap RevenueCat `test_` keys for live `appl_` / `goog_` keys
- [ ] Pick analytics — Plausible or Fathom — and paste the snippet into `<head>` (the placeholder is already in every page)
- [ ] Trademark search "Muscle Guard" on USPTO TESS, WIPO, and CIPC

---

## Future upgrades — not done in this build

### Edge-rendered regional homepage (true SEO-clean variant)
Current implementation is client-side detection. To upgrade to true edge rendering:
- Create a `middleware.ts` at the project root that reads `x-vercel-ip-country` and rewrites `/` to `/index.html`, `/index-us.html`, or `/index-eu.html`.
- Create the three index files (one per region) with the variant baked in as static HTML.
- AI crawlers and Google then see the right HTML on first byte, no JS required.

### Clinician advisor recruitment
The "Clinical advisory board" section on `/for-doctors.html` says "Recruitment in progress." Once an advisor is recruited:
- Reverse the search-and-replace described in section 1 above
- Add a real name, credentials, and date to the editorial review line on every guide
- Restore `reviewedBy: Person` in `MedicalWebPage` schema

### Pillar guide depth
The 8 new guides are ~1,000-1,200 words each. Extending each to the 1,500-2,500 brief target is a copy job — would add depth to each section but not change the architecture.

### Localisation (DE / ES / FR)
The EU regional page already notes Q3 2026 for German, Spanish, French translation. Architecture supports it via the hreflang already in place.

---

## Architectural decisions, captured

For when you come back to this in 6 months and wonder why something is the way it is.

- **Static HTML, not WordPress.** Per the v1 and v2 brief's hard constraint. The WordPress install at the current domain can be retired once DNS flips.
- **No cookies, no third-party trackers, no cookie banner.** Privacy-first is architectural, not a feature. Plausible/Fathom both fit; Google Analytics does not.
- **ZA as fallback region.** South Africa is the primary market and the build location. When auto-detection fails, ZA is what users see.
- **Browser language not IP geolocation.** Privacy posture again. Browser language is volunteered; IP is observed. Volunteered beats observed every time on a privacy-first site.
- **No framework, no build step.** Plain HTML files on disk are what ships. Vercel serves them as-is.
- **One shared CSS file.** All styles in `styles.css`. No CSS-in-JS, no per-page stylesheets.
- **Brand tokens locked.** All colours and typography come from `04_brand_assets/brand_tokens.md`. Don't drift.

---

Built 19 May 2026 in Cowork. Questions: helenkruger88@gmail.com.
