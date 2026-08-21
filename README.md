# Balakrishnan Srinivasan — Portfolio

A clean, animated, single-page developer portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Stack

- **React 19 + Vite** — app shell and dev/build tooling
- **Tailwind CSS v4** — styling (via `@tailwindcss/vite`, no config file needed)
- **Framer Motion** — scroll-reveal and hover animations
- **lucide-react** — icon set (GitHub/LinkedIn logos are custom inline SVGs in `src/components/icons.jsx`, since lucide dropped brand icons)

## Getting started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  data/portfolio.js    ← ALL your content lives here (name, summary, skills,
                          experience, projects, achievements, education, links).
                          Edit this file to update the site — no need to touch
                          component code for text changes.
  components/           ← one component per section (Hero, About, Skills,
                          Experience, Projects, Achievements, Contact, Navbar, Footer)
  hooks/useTheme.js      ← dark/light theme toggle (persists to localStorage)
public/
  Balakrishnan_Srinivasan_Resume.pdf   ← linked from the "Resume" button
```

## Customizing

- **Content**: edit `src/data/portfolio.js`.
- **Colors**: the accent gradient (cyan → violet) is defined as `--color-accent` /
  `--color-accent-2` in `src/index.css` under `@theme`. Change those two hex
  values to re-theme the whole site.
- **Fonts**: Space Grotesk (headings), Inter (body), JetBrains Mono (labels/tags) —
  loaded via Google Fonts in `index.html`.
- **Photo**: the hero currently shows a gradient initials avatar ("BS") instead of
  a photo, by design for now. To add a real photo later, drop an image into
  `public/` and swap the initials block in `src/components/Hero.jsx` for an
  `<img>` tag.
- **GitHub button**: points to `https://github.com/balki14101` (set in
  `src/data/portfolio.js` as `profile.github`). The DueMate project card links to
  its specific release page instead — update `projects[0].link` in the same file
  if you'd rather point it at the repo root.

## Deploying

Any static host works since this is a plain Vite build:

- **Vercel**: import the repo, framework preset "Vite" is auto-detected, no config needed.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: run `npm run build`, then deploy the `dist/` folder (e.g. with the `gh-pages` package), and set `base` in `vite.config.js` if the site won't live at the domain root.

## Notes

- Dark mode is the default (matches the "clean, slick" tech-portfolio feel); a
  toggle in the navbar switches to light mode and remembers the choice.
- All animations are scroll-triggered and run once per element (`viewport once: true`)
  to keep repeat scrolling smooth rather than replaying on every pass.
