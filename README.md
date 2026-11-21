# Team Elevate — Website

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Lucide icons · Calendly embed.

## Quick start

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL and NEXT_PUBLIC_CALENDLY_URL
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Deploys as-is to Vercel (or any Node host). All pages are statically pre-rendered; only `/api/contact` runs on the server.

## Pages

`/` · `/about` · `/solutions` · `/business-opportunity` · `/advisers` · `/advisers/[slug]` · `/gallery` · `/testimonials` · `/contact` · `/book-appointment` · `/privacy-policy` · `/terms` · plus `sitemap.xml`, `robots.txt`, 404.

## Editing content (no component changes needed)

| What | Where |
|---|---|
| Contact details, social links, Calendly, regulatory disclosure | `content/site.ts` |
| Service categories & product lists | `content/services.ts` |
| Business-opportunity text, contract levels, compensation examples, disclosures | `content/opportunity.ts` |
| Advisers & testimonials | `content/people.ts` |
| Achievement posters | drop images into `public/images/posters/` (+ alt/captions in `captions.json`) |
| Gallery photos | drop images into `public/images/gallery/` (+ alt/captions in `captions.json`) |
| Hero / section photos | replace files in `public/images/site/` and `public/images/services/` (keep names) |

Files in the poster/gallery folders are picked up automatically at build time, sorted by filename (prefix `01-`, `02-`…). Use WebP/AVIF, ~1600–2000px on the long edge. Content is centralized so a headless CMS can replace these files later.

## Contact form

Client + server validation (`lib/validate.ts`), honeypot spam trap, required privacy consent, and an **optional, unticked** marketing-consent box for CASL. `app/api/contact/route.ts` currently accepts and validates submissions but does **not send them anywhere** — connect it to your email/CRM provider (Resend, Postmark, HubSpot…) and store the consent flag + timestamp.

## Calendly

Set `NEXT_PUBLIC_CALENDLY_URL`. The Calendly script loads only when the booking section nears the viewport. Until a URL is set, a clearly labelled "setup required" card is shown instead.

## Performance & accessibility

- Self-hosted variable fonts (no Google Fonts request), `next/image` with AVIF/WebP, only the hero image is preloaded, no animation library (CSS only), reduced-motion respected.
- Carousels: arrows, dots, keyboard, swipe, pause-on-hover/focus and a visible pause button (WCAG 2.2.2).
- Local Lighthouse (mobile emulation, sandboxed machine): Accessibility 100, Best Practices 100, SEO 100, Performance ~87–93. Re-measure on your production host — real numbers depend on hosting, CDN and final photos.

## ⚠️ Before launch — content & compliance checklist

Everything not supplied by the presentation is a **visibly labelled placeholder** (gold "Placeholder"/"Draft" tags, dashed notes). Search the codebase for `PLACEHOLDER` and `placeholder: true`.

- [ ] Replace all placeholder images (hero, about, services, posters, gallery, adviser photos) with approved photography.
- [ ] Add real adviser profiles — verified names, titles, licences, provinces. "Financial Advisor/Planner" are protected titles in some provinces (e.g. ON, SK).
- [ ] Add authentic testimonials only with written consent; set `placeholder: false`.
- [ ] Vision and Values wording on the About section is **draft** (not in the deck) — confirm or rewrite.
- [ ] Confirm which investment products representatives are registered to offer (life licence vs mutual-fund registration) and which "other services" are referral-based (disclose referral compensation).
- [ ] Compliance review of the Business Opportunity page: compensation figures come from the deck (Experior materials) and are labelled illustrative; insert your approved income disclosure. The deck's "1 → 1,024 agents in 10 years" doubling projection was **deliberately left out** because it implies recruitment-driven income.
- [ ] Verify Experior statements (founded 2014, markets, programs) are current.
- [ ] Finalize Privacy Policy and Terms (templates), Privacy Officer, governing province.
- [ ] Contact email, phone, address, social links in `content/site.ts`.
- [ ] Wire the contact form to a provider; implement unsubscribe handling for marketing emails.
