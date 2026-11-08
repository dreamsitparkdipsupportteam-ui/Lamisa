# Lamisa: Digital Marketing Portfolio

A premium single-page portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Architecture

```
src/
  app/
    layout.tsx            Fonts, global metadata, Open Graph, JSON-LD
    page.tsx              Assembles all sections
    globals.css           Tailwind + base styles
    sitemap.ts            /sitemap.xml
    robots.ts             /robots.txt
    opengraph-image.tsx   Generated social sharing image (placeholder)
    icon.svg              Favicon
    api/contact/route.ts  Contact form endpoint (Resend)
  components/             One file per section + small shared pieces
  content/
    site.ts               Name, email, social links, photos, stats, process, testimonials
    services.ts           The 7 services
    projects.ts           Portfolio case studies
```

All editable content lives in `src/content/`. You should rarely need to touch components.

## Install and run

Requires Node.js 18.18+ (20+ recommended).

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # TypeScript check
npm run build      # production build
npm run start      # serve the production build
```

## Edit content

Open `src/content/site.ts`:

- `email`: your real address. Until set, a labelled placeholder is shown.
- `socials`: paste full profile URLs for LinkedIn, Instagram, X and Facebook. Empty ones are hidden everywhere, so there are no broken links.
- `images.hero` / `images.about`: put photos in `public/images/` and use paths like `/images/lamisa-hero.jpg`. Portrait photos around 1200x1500 work best.
- `stats`: set real values and `verified: true` only for figures you can back up.
- `testimonials`: replace placeholders with real, approved quotes and set `placeholder: false`.

Services are in `src/content/services.ts`; the process steps are in `site.ts`.

## Add a portfolio project

In `src/content/projects.ts`, copy an entry and set:

```ts
{
  slug: "my-project",           // unique
  title: "Project title",
  category: "Artists & Musicians",
  description: "One or two sentences.",
  services: ["Content Strategy"],
  challenge: "...",
  strategy: "...",
  results: "Verified results only.",
  image: "/images/my-project.jpg", // file in public/images, or "" for a gradient
  sample: false,                   // removes the "Sample placeholder" badge
  gradient: "from-brand-purple to-brand-blue",
}
```

Delete the three sample entries once you have real projects.

## Contact form

The form validates in the browser and on the server. Delivery uses [Resend](https://resend.com) (free tier available):

1. Create a Resend account and an API key.
2. Set `RESEND_API_KEY` and `CONTACT_TO_EMAIL` (see `.env.example`).
3. Until a sending domain is verified, Resend's default sender only delivers to the email that owns the Resend account. Verify a domain and set `CONTACT_FROM_EMAIL` for general use.

If these variables are missing, visitors see a clear message that the form is not connected and nothing is reported as sent.

## Deploy on Vercel (free)

1. Push this folder to a new GitHub repository.
2. Go to vercel.com, sign in with GitHub, choose **Add New > Project** and import the repository.
3. Framework is detected automatically (Next.js). Leave build settings as they are.
4. Under **Environment Variables** add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` (and optionally `NEXT_PUBLIC_SITE_URL`).
5. Click **Deploy**. You get a free `*.vercel.app` URL in about a minute.
6. Optional custom domain: Project > Settings > Domains.

Alternative without GitHub: install the CLI (`npm i -g vercel`) and run `vercel` then `vercel --prod` in this folder.

## SEO setup

- Titles, description, keywords, Open Graph and Twitter metadata are in `src/app/layout.tsx`.
- Sitemap and robots are generated automatically from the site URL. On Vercel the production domain is detected; with a custom domain set `NEXT_PUBLIC_SITE_URL`.
- Replace the generated share image by deleting `src/app/opengraph-image.tsx` and adding `src/app/opengraph-image.png` (1200x630).
- After deploying, add the site to [Google Search Console](https://search.google.com/search-console), verify ownership, and submit `/sitemap.xml`.
- Structured data (schema.org Person) is added automatically and includes your social links once set.
- Add descriptive `alt` text when you add photos and keep one `h1` per page (already the case).
