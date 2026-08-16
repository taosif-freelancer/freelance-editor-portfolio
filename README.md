# Freelance Editor Portfolio

A single-page, production-ready portfolio website for a freelance editor,
proofreader, formatter, and content-improvement specialist. Built with
React, Vite, Tailwind CSS, and Lucide icons.

## 1. Install & run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build is output to `dist/`.

## 2. Personalize the site (start here)

Almost everything you need to change lives in **`src/data/siteConfig.js`**:

- `name` — your name (used in the nav, footer, hero, and page title source)
- `title` / `tagline` — professional title used in SEO tags and footer
- `location` — shown in the About section
- `email` — used for the "mailto" contact link and form fallback
- `fiverrUrl` — every "Hire Me on Fiverr" / "View My Fiverr" button
- `domain` — your `.io` (or other) domain, referenced in the README/SEO notes
- `social` — leave any value blank (`''`) to hide that icon from the footer

Other editable content lives in:

- `src/data/services.js` — the 6 services, the 4-step process, the "what I
  focus on" list, and the "why work with me" points
- `src/data/portfolio.js` — the 6 portfolio sample projects (clearly marked
  as placeholders — replace with real projects once you have them, and only
  publish client work you have permission to show)
- `src/data/reviews.js` — 3 placeholder review cards. **Only replace these
  with genuine, verified Fiverr reviews.** Do not invent testimonials.

## 3. Also update by hand

- **`index.html`** — replace the bracketed SEO placeholders: canonical URL,
  Open Graph image URL, and social preview image URL.
- **`public/favicon.svg`** — a simple placeholder monogram (currently "YN").
  Swap in your own initials or a proper monogram design.
- **`public/robots.txt`** and **`public/sitemap.xml`** — replace
  `[YOUR DOMAIN]` with your live domain once you have one.

## 4. Deploying

This is a static site after `npm run build` — the `dist/` folder can be
deployed to any static host (Vercel, Netlify, Cloudflare Pages, GitHub
Pages, etc.). Point your `.io` domain's DNS at whichever host you choose,
following that host's instructions.

## 5. Project structure

```
src/
  components/   Navbar, Footer, PortfolioModal, EditMarks (proofreading-mark SVGs)
  sections/     Hero, About, Services, Process, Portfolio, BeforeAfter,
                WhyWorkWithMe, Reviews, FiverrCTA, Contact
  data/         siteConfig.js, services.js, portfolio.js, reviews.js
  hooks/        useScrollReveal.js (scroll-triggered fade-in, respects
                prefers-reduced-motion)
```

## 6. Notes on content honesty

The copy throughout the site sticks to only what was supplied: 1+ year of
experience, 6+ completed projects, and the specific services listed. There
are no invented clients, credentials, statistics, or testimonials anywhere
in the codebase — only clearly marked placeholders for you to fill in with
real information as it becomes available.
