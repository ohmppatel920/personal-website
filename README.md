# Ohm Patel — Personal Site

A dark, immersive personal site framing Ohm's positioning at the **healthcare × software** intersection. Built with Next.js 16, React 19, TypeScript, Tailwind v4, Framer Motion, and Lenis smooth-scroll. Design cues: Active Theory (immersive dark, motion) + editorial typography (Fraunces / Inter / JetBrains Mono). Signature element: an animated ECG "pulse" divider.

## Run it locally

```bash
cd site
npm install     # first time only
npm run dev     # → http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

## Edit your content — one file

**Everything** (experience, projects, skills, leadership, clinical, links, copy) lives in **`src/data/content.ts`**. Change text there and the sections update automatically. Types are in `src/data/types.ts`.

### Add a new project (frictionless)

Append one object to the `projects` array in `src/data/content.ts`:

```ts
{
  title: "My New Project",
  blurb: "One-sentence hook describing what it does.",
  bullets: ["Detail shown on hover.", "Another detail."],
  tags: ["Next.js", "Postgres"],
  year: "2026",
  links: [{ label: "Live demo", href: "https://…" }], // optional
  image: "/projects/my-project.jpg",                   // optional (drop file in public/projects/)
}
```

The showcase grid renders any number of projects — no component changes needed.

## Swap photos

Files live in `public/`:

- `headshot.jpg` — About portrait
- `clouds.jpg` — atmospheric parallax band
- `Ohm-Patel_Resume.pdf` — the résumé the site links to

Replace any of these files (keep the same names) to update the site. Source images were HEIC/JPEG converted with macOS `sips`.

## Design tokens

Colors, fonts, and spacing are CSS variables at the top of `src/app/globals.css` (`--ink`, `--teal`, `--peri`, `--brown`, etc.). Change them there to retune the palette globally.

## Notes

- **Brown University** is referenced by name and by its seal-brown accent color only — no trademarked logos, seal, or athletic marks are used.
- Motion fully respects `prefers-reduced-motion` (glow, smooth-scroll, and reveals all collapse).
- The custom cursor and magnetic buttons activate only on fine-pointer devices.

## Deploy to Vercel

1. Push `site/` to a GitHub repo (a git repo is already initialized in this folder).
2. Import it at [vercel.com/new](https://vercel.com/new) — no configuration needed; Next.js is detected automatically.
3. Ship. Add a custom domain in the Vercel dashboard when ready.
