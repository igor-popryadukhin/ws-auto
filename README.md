# Only-Vag Nuxt Application

This Nuxt 4 project implements the redesigned Only-Vag automotive service network website following the specification in [`docs/only-vag-technical-specification.md`](../../docs/only-vag-technical-specification.md).

## Getting started

Install dependencies and start the development server with SSR enabled:

```bash
npm install
npm run dev
```

To validate the production build locally run:

```bash
npm run build
npm run preview
```

## Project structure

- `app/` – application shell (`app.vue`) and global Tailwind CSS entry point.
- `components/` – layout elements (header/footer), reusable form components, and page sections.
- `composables/` – typed data access helpers that wrap `$fetch` for mock API endpoints.
- `pages/` – route implementations for the home page, brand detail pages, promotions, price list, reviews, guarantees, complaints, vacancies, blog, privacy policy, and contacts.
- `public/` – static assets (favicons, placeholder imagery, robots.txt).
- `server/api/` – Nitro API routes backed by `server/data/mockData.ts` for SSR-friendly mock content and form handlers with Zod validation.
- `types/` – shared TypeScript interfaces for entities and form definitions.
- `tailwind.config.ts` – Tailwind theme with brand colors, typography, and animation utilities.

## Mock data and forms

All dynamic sections (brands, promotions, price tables, FAQ, reviews, vacancies, articles, gallery) are served from `server/data/mockData.ts`. Forms submit to Nitro endpoints that validate payloads and log submissions, mimicking future integrations with a headless CMS or CRM.

## Linting and type checking

The build step runs `vue-tsc` and Vite during `npm run build`, ensuring both the Vue components and the Nitro server pass type checking before deployment.
