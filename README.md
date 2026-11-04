# Developer Portfolio

<p align="center">
  <img src="public/logo.svg" alt="RUZZ — full-stack developer" width="420" />
</p>

A modern, responsive portfolio built with **React 19**, **Vite**, and **Tailwind CSS v4**. Warm editorial dark theme, expressive type, and purposeful motion — designed to put projects and experience first.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Customize your content

Almost all content lives in a single file: **`src/data/portfolio.js`**.

| Export | What it controls |
| --- | --- |
| `profile` | Name, role, email, location, résumé URL, availability, socials |
| `navLinks` | Navbar + mobile menu links |
| `stats` | Hero stat strip |
| `techMarquee` | Scrolling technologies band |
| `skillGroups` | Stack cards |
| `additionalSkills` | Small chips below the stack |
| `projects` | Project cards (title, description, tags, links, visual variant, accent color, wide/featured layout) |
| `experience` | Timeline entries |
| `principles` | “How I work” rows in About |
| `quickFacts` | Quick facts card in About |

### Project visuals

Each project picks a hand-built mockup via the `visual` field:

- `dashboard` — analytics UI
- `terminal` — API / logs UI
- `snippets` — search-driven code UI
- `design` — design system UI

Swap `visual` on any project to change its artwork — no screenshots required.

### Résumé

Replace **`public/resume.pdf`** with your real résumé (same filename), or change `profile.resumeUrl`. The current file is a placeholder generated from sample content.

### Logo & brand assets

The custom **RUZZ** wordmark and **R** monogram live in **`src/components/Logo.jsx`**. They are vector paths, so they stay crisp at any size and match the oversized outlined wordmark in the footer.

Standalone assets in **`public/`**:

- `logo.svg` — full lockup on a dark card
- `logo-mark.svg` — R monogram tile
- `logo-wordmark.svg` — wordmark only, for dark backgrounds
- `favicon.svg` — browser icon

Swap the path constants in `Logo.jsx` and the SVGs in `public/` if you rebrand.

### Site metadata

Update the title, description, and Open Graph tags in **`index.html`**. The favicon is **`public/favicon.svg`**.

### Colors & type

Design tokens live in **`src/index.css`** under `@theme`:

```css
--color-surface: #0a0908;  /* warm near-black */
--color-cream: #f5efe6;    /* primary text */
--color-muted: #a69e93;    /* secondary text */
--color-accent: #ff6b35;   /* ember orange */
--color-butter: #ffd166;
--color-lilac: #b9a7ff;
--color-mint: #7ce7c4;

--font-display: 'Bricolage Grotesque', ...;
--font-sans: 'Geist', ...;
--font-serif: 'Instrument Serif', ...;
--font-mono: 'Geist Mono', ...;
```

Most components use the semantic tokens (`bg-accent`, `text-cream`, `text-muted`, `border-cream/10`), so changing the `--color-*` values rebrands the whole site. Project cards and experience entries have their own per-item `accent` values in `src/data/portfolio.js`. Fonts are loaded from Google Fonts in `index.html`.

### Motion & effects

Custom keyframes and utility classes live in `src/index.css`: scroll reveals (`.reveal`), aurora drift, marquee bands, spotlight cards, gradient text, rotating stamps, cursor glow, and grain. All non-essential animation is disabled under `prefers-reduced-motion`.

## Project structure

```
public/
  favicon.svg
  resume.pdf
src/
  components/
    About.jsx          # bio + quick facts + principles
    BigMarquee.jsx     # orange availability marquee band
    Contact.jsx        # email CTA with copy-to-clipboard
    CountUp.jsx        # animated hero stats
    CursorGlow.jsx     # pointer-following ambient glow
    Experience.jsx     # work timeline + résumé CTA
    Footer.jsx
    Hero.jsx           # headline, CTAs, tilting code card, stats
    LocalTime.jsx      # live local clock
    Logo.jsx           # custom RUZZ wordmark + R monogram
    Navbar.jsx         # sticky nav, active-section tracking, mobile menu
    ProjectVisual.jsx  # CSS-built project mockups
    Projects.jsx       # featured wide card + project grid
    Reveal.jsx         # IntersectionObserver scroll reveals
    RotatingStamp.jsx  # circular rotating text badge
    ScrollProgress.jsx
    SectionHeading.jsx
    Skills.jsx
    TechIcon.jsx       # brand-colored technology icons
    TechMarquee.jsx
    icons.jsx          # social SVG icons
  data/
    portfolio.js       # ← all site content
  utils/
    spotlight.js       # cursor-follow card glow
  App.jsx
  index.css            # Tailwind theme + custom effects
  main.jsx
```

## Deploy

### Vercel / Netlify

Import the repo, use the default Vite settings:

- Build command: `npm run build`
- Output directory: `dist`

### GitHub Pages

If the site is served from `https://<user>.github.io/<repo>/`, add the base path in `vite.config.js`:

```js
export default defineConfig({
  base: '/<repo>/',
  plugins: [react(), tailwindcss()],
})
```

## Accessibility & performance notes

- Semantic landmarks, a skip link, focus-visible rings, and labeled icon buttons.
- Scroll reveals, marquee, and pulse animations respect `prefers-reduced-motion`.
- No image assets for project art → tiny payload and crisp visuals at any resolution.
- Fonts are the only external request; everything else ships in the bundle.
