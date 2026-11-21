# Team Elevate — Website

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Lucide icons · Calendly embed.

## Quick start

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build                # static production files in out/
```

The build exports the React pages as static HTML, CSS and JavaScript. For local overrides, copy `.env.example` to `.env.local`.

## Deploy to GitHub Pages

1. In the GitHub repository, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
2. Push to `main` or run **Deploy to GitHub Pages** manually from the **Actions** tab on `main`. The [workflow](.github/workflows/deploy.yml) reads the URL and path from GitHub Pages and uploads `out/`. It uses GitHub's built-in deployment permissions and requires zero repository secrets.
3. Open the URL shown in the deploy job. The default project URL is [elevateacademycareers-bit.github.io/elevate-academy-website](https://elevateacademycareers-bit.github.io/elevate-academy-website/).

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

## Temporary stock photography

The website uses temporary photos under the [Pexels License](https://www.pexels.com/license/). The source links follow the local asset names.

- Site [hero](https://www.pexels.com/photo/32302738/), [about](https://www.pexels.com/photo/3184632/), [opportunity](https://www.pexels.com/photo/29253465/)
- Services [investments](https://www.pexels.com/photo/3184287/), [insurance](https://www.pexels.com/photo/6962993/), [banking](https://www.pexels.com/photo/7620565/)
- Advisers [office-stock](https://www.pexels.com/photo/7582013/)
- Gallery [01-networking](https://www.pexels.com/photo/2608517/), [02-office-meeting](https://www.pexels.com/photo/7793672/), [03-conference](https://www.pexels.com/photo/38786013/), [04-training](https://www.pexels.com/photo/8171200/), [05-applause](https://www.pexels.com/photo/16856130/), [06-workshop](https://www.pexels.com/photo/8424560/), [07-group-discussion](https://www.pexels.com/photo/3626622/), [08-conference-session](https://www.pexels.com/photo/8344905/)
- Posters [01-collaboration](https://www.pexels.com/photo/6150528/), [02-applause](https://www.pexels.com/photo/6950184/), [03-planning](https://www.pexels.com/photo/10815241/), [04-conference](https://www.pexels.com/photo/32315949/), [05-training-materials](https://www.pexels.com/photo/6446404/)

## Contact

Set `contact.email` and `contact.emailHref` in `content/site.ts` to the approved address and its `mailto:` link. Visitors can then open their email app from the contact page.

## Calendly

Set the optional `NEXT_PUBLIC_CALENDLY_URL` repository variable under **Settings → Secrets and variables → Actions → Variables**. For local development, set it in `.env.local`. The Calendly script loads when the booking section nears the viewport. A setup card appears until a URL is set.

## Performance & accessibility

- Self-hosted variable fonts, pre-optimized images served directly from the static export, CSS animations and reduced-motion support.
- Carousels: arrows, dots, keyboard, swipe, pause-on-hover/focus and a visible pause button (WCAG 2.2.2).
- Local Lighthouse (mobile emulation, sandboxed machine): Accessibility 100, Best Practices 100, SEO 100, Performance ~87–93. Re-measure on your production host — real numbers depend on hosting, CDN and final photos.

## ⚠️ Before launch — content & compliance checklist

Everything not supplied by the presentation is a **visibly labelled placeholder** (gold "Placeholder"/"Draft" tags, dashed notes). Search the codebase for `PLACEHOLDER` and `placeholder: true`.

- [ ] Replace temporary stock and sample images with approved photography, including real adviser portraits.
- [ ] Add real adviser profiles — verified names, titles, licences, provinces. "Financial Advisor/Planner" are protected titles in some provinces (e.g. ON, SK).
- [ ] Add authentic testimonials only with written consent; set `placeholder: false`.
- [ ] Vision and Values wording on the About section is **draft** (not in the deck) — confirm or rewrite.
- [ ] Confirm which investment products representatives are registered to offer (life licence vs mutual-fund registration) and which "other services" are referral-based (disclose referral compensation).
- [ ] Compliance review of the Business Opportunity page: compensation figures come from the deck (Experior materials) and are labelled illustrative; insert your approved income disclosure. The deck's "1 → 1,024 agents in 10 years" doubling projection was **deliberately left out** because it implies recruitment-driven income.
- [ ] Verify Experior statements (founded 2014, markets, programs) are current.
- [ ] Finalize Privacy Policy and Terms (templates), Privacy Officer, governing province.
- [ ] Contact email, phone, address, social links in `content/site.ts`.
