# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing Site — Animated marketing landing page with hero section, testimonials, and pricing tiers.

Built with Astro, TypeScript, and Tailwind CSS.

## Commands

```bash
npm install              # Install dependencies
npm run dev              # Start dev server (http://localhost:4321)
npm run build            # Production build
npm run preview          # Preview production build
npm run type-check       # TypeScript type check (tsc --noEmit)
npm run lint             # ESLint (src/**/*.ts, *.astro)

# Unit tests (Vitest, node environment)
npm test                 # Run all unit tests once
npm run test:watch       # Watch mode
npm run test:coverage    # Run with v8 coverage report

# E2E tests (Playwright, requires dev server or it starts one automatically)
npm run e2e              # Run all Playwright tests (headless)
npm run e2e:ui           # Open Playwright interactive UI
npx playwright install   # Install browsers (first time only)
```

## Architecture

- `src/pages/` — File-based routing (`.astro` files)
- `src/components/` — Reusable Astro components (Hero, Testimonials, Pricing)
- `src/layouts/` — Page layouts
- `src/content/` — Content collections (Markdown/MDX)
- `public/` — Static assets (copied as-is)
- `tests/` — Vitest unit tests (node env, source-file assertions)
- `e2e/` — Playwright E2E specs (baseURL: http://localhost:4321)

## Testing Conventions

- Unit tests live in `tests/*.test.ts` and run in the `node` environment (no DOM needed for Astro static components — tests read and assert on `.astro` source files directly)
- E2E tests live in `e2e/*.spec.ts` and target a running dev server via `playwright.config.ts`
- `vitest.config.ts` — node environment, `globals: true`, covers `tests/**/*.test.ts`
- `playwright.config.ts` — `baseURL: http://localhost:4321`, auto-starts dev server via `webServer`

## Environment Variables

Copy `.env.example` to `.env` before running locally:

```bash
cp .env.example .env
```

`PUBLIC_*` variables are exposed to the client via `import.meta.env.PUBLIC_*` in Astro.

## Rules

- Use `.astro` components for static content, React/Svelte for interactive islands
- Tailwind utility classes for styling — no custom CSS files
- Content collections for structured data (blog posts, docs)
- Minimize client-side JavaScript — Astro is server-first
- All new pages must have a `<title>` and `lang` attribute on `<html>`
- Interactive elements need accessible labels (ARIA or visible text)
