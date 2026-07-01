# Ashraful Alam Omi — Portfolio

A premium, minimal personal portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber. Fully static — no database, no CMS, no backend.

## Tech stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** for styling with a custom design-token system (light + dark mode)
- **Framer Motion** for scroll reveals, page transitions, and micro-interactions
- **React Three Fiber / Three.js** for the hero's interactive wireframe scene
- **Lucide** icons

## 1. Install & run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## 2. Editing content (the important part)

**Everything on the site — your name, bio, skills, projects, experience, competitions, achievements, socials — lives in one file:**

```
data/portfolio.ts
```

You never need to touch component code to update content. Just edit the exported objects/arrays in that file:

| What you want to change        | Edit this export in `data/portfolio.ts` |
|---------------------------------|------------------------------------------|
| Name, tagline, roles, socials   | `personal`                                |
| About text                      | `about`                                   |
| Education                       | `education`                               |
| Skills & proficiency bars       | `skillCategories`                         |
| Experience / leadership timeline| `experience`                              |
| Projects                        | `projects`                                |
| Competitions                    | `competitions`                            |
| Certifications                  | `certifications`                          |
| Achievements                    | `achievements`                            |
| Content creation blurb          | `contentCreation`                         |
| Navbar links                    | `nav`                                     |

### Adding a new project

Open `data/portfolio.ts`, find the `projects` array, and add a new object following the existing `Project` shape:

```ts
{
  slug: "my-new-project",
  title: "My New Project",
  category: "Web App",
  description: "One or two sentence summary.",
  features: ["Feature one", "Feature two"],
  challenges: "The hardest part of building this.",
  learned: "What you took away from it.",
  tech: ["Next.js", "Postgres"],
  github: "https://github.com/you/repo",   // optional
  live: "https://your-live-demo.com",      // optional
  featured: true,                          // optional
}
```

It will automatically appear in the Projects grid — clicking a card opens the full detail modal.

### Updating skills

Each category in `skillCategories` has a `title`, a Lucide `icon` name (must match a key already imported in `sections/skills.tsx` — `Code2`, `BrainCircuit`, `Globe`, `Workflow`, `Cloud`, `Wrench`), and a `skills` array of `{ name, level }` (level is 0–100, drives the animated bar).

### Updating competitions

Add an entry to the `competitions` array with `{ year, title, detail }`. The list renders in the order you provide — keep newest first.

### Resume & favicon

- Drop your résumé PDF at `public/resume.pdf` (the Download Resume buttons link here — currently a placeholder file is **not** included, add your own).
- The favicon lives at `public/favicon.svg` — replace with your own mark if you'd like.

## 3. Folder structure

```
app/            Next.js App Router entry (layout, page, SEO routes)
components/     Reusable UI building blocks (navbar, footer, theme provider, etc.)
sections/       One file per page section (hero, about, skills, projects, ...)
data/           portfolio.ts — all editable content lives here
hooks/          Reserved for custom hooks
lib/            Reserved for utilities
config/         Reserved for site-level config
public/         Static assets (favicon, resume.pdf)
```

## 4. Deploying to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

> Tip: if you're uploading via the GitHub web UI instead of git, avoid folder/file names with brackets or special characters and make sure `data/`, `app/`, `components/`, and `sections/` all upload completely — drag-and-drop can silently skip nested files, so a `git push` from a terminal is the more reliable path.

## 5. Deploying to Vercel

1. Go to https://vercel.com/new and import your GitHub repository.
2. Framework preset: **Next.js** (auto-detected).
3. Build command: `next build` (default). Output directory: default. No environment variables are required.
4. Click **Deploy**.

Every subsequent push to `main` redeploys automatically.

## 6. Dark mode

Dark mode is a hand-tuned palette (not a simple color inversion), toggled from the navbar, and persisted via `localStorage`. It also respects the visitor's OS-level preference on first visit.

## 7. Notes on fonts

The site is set up to load **Space Grotesk** (display), **Inter** (body), and **JetBrains Mono** (labels/mono accents) from Google Fonts at runtime via a `<link>` tag in `app/layout.tsx`. If you'd prefer to self-host fonts (recommended for the best Lighthouse score), swap that `<link>` for `next/font/google` imports once you have network access in your build environment — the CSS variables (`--font-display`, `--font-body`, `--font-mono`) are already wired up in `app/globals.css`, so no other change is needed.

## 8. Accessibility & performance

- Semantic landmarks (`header`, `main`, `footer`, `nav`)
- Visible focus states on all interactive elements
- `prefers-reduced-motion` respected globally
- Lazy-loaded Three.js scene (client-only, code-split via `next/dynamic`)
- Metadata, Open Graph, Twitter cards, `robots.txt`, `sitemap.xml`, and a web manifest are all generated in `app/`
