# Hope Traders — Website

A React (Vite) business website for Hope Traders — scrap buying, selling and
doorstep collection services.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Before going live — replace these placeholders

All client-specific details live in **`src/config/business.js`**. Nothing
elsewhere in the codebase hardcodes contact info — edit this one file:

- `phoneDisplay` / `phoneLink` — real phone number (used for the `Call Now`
  buttons and the mobile sticky bar)
- `whatsappDisplay` / `whatsappNumber` — real WhatsApp number, digits only
  with country code, no `+` or spaces (used for every WhatsApp button and the
  enquiry form)
- `email`
- `address`
- `hours`
- `siteUrl` — the real production domain (used for canonical URLs, Open
  Graph tags and JSON-LD)
- `socialImage` — path to a real 1200×630 social-sharing image
- `serviceAreas` — left empty on purpose; only add real cities Hope Traders
  serves, then extend the local-SEO copy in `Services.jsx` / `Home.jsx`
  accordingly
- `mapEmbedSrc` — a real Google Maps embed URL once the business location is
  confirmed (the Contact page shows a placeholder until this is set)

Also update:

- `public/robots.txt` and `public/sitemap.xml` — replace `example.com` with
  the real domain
- `public/favicon.svg` — swap for the real logo mark if the client has one
- `public/og-image.jpg` — add the real social-sharing image referenced by
  `business.socialImage`

## Structure

```
src/
├── components/   Header, Footer, Hero, ServiceCard, MaterialCard, CTA,
│                 ContactForm, StickyMobileBar, FloatingWhatsApp, Icons
├── pages/        Home, About, Services, ScrapMaterials, Contact
├── data/         services.js, materials.js
├── seo/          SEO.jsx (title/description/canonical/OG/JSON-LD)
├── utils/        whatsapp.js (single source of truth for all wa.me links)
├── config/       business.js (all client placeholders, in one place)
```

## Notes

- The contact form does **not** email submissions — by design, it opens a
  pre-filled WhatsApp message instead (see the brief). It validates Name,
  Phone, Scrap Type and Location before opening WhatsApp.
- Every WhatsApp button routes through `src/utils/whatsapp.js` so the number
  only needs to be correct in one place.
- Local SEO ([City] scrap buyer, etc.) has intentionally **not** been added
  anywhere — add it once the client confirms the real service location(s),
  per the project brief.
