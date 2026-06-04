# Raggio Atlas Agent Instructions

## Project Goal

Raggio Atlas is a frontend-first visual archive and searchable encyclopedia of notable people with the surname **Raggio**.

Application name: **Raggio Atlas**  
Tagline: **A visual archive of notable people with the surname Raggio.**

The initial application must be clean, elegant, fast, accessible, responsive, strongly typed, and easy to extend. It should feel like a blend of IMDb, Wikipedia, Apple, and Notion.

## Approved Architecture Summary

Use a layered React architecture:

- `src/app/` — top-level application composition and route definitions.
- `src/components/layout/` — app shell, header, footer, navigation, layout primitives.
- `src/components/shared/` — reusable generic UI/application components.
- `src/components/carousel/` — featured profile carousel components.
- `src/components/cards/` — profile cards and grid components.
- `src/components/filters/` — search, filtering, sorting, and mobile filter UI.
- `src/components/profile/` — profile detail page sections.
- `src/components/ui/` — shadcn/ui primitives owned by the app.
- `src/pages/` — route-level page components.
- `src/data/` — local TypeScript data source.
- `src/types/` — domain and UI state types.
- `src/hooks/` — UI-facing state composition hooks.
- `src/utils/` — pure filtering, sorting, search, and formatting utilities.
- `src/constants/` — labels, routes, and stable application constants.
- `src/assets/` — static source assets.
- `src/lib/` — small shared helpers such as class name composition.

## Engineering Principles

Prioritize, in order:

1. Simplicity
2. Maintainability
3. Scalability
4. Type safety
5. Accessibility
6. Readability
7. Reusability

Avoid:

- Unnecessary abstractions
- Premature optimization
- Over-engineering
- Duplicated logic
- Tightly coupled components
- Global state unless truly necessary
- Clickable non-interactive elements
- Try/catch blocks around imports

## Technical Stack

Use:

- React 19
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- Framer Motion
- Fuse.js
- npm exclusively

Do not use:

- Redux
- Zustand
- MobX

Use React Context only when there is a clear, justified need.

## Data Model Conventions

The entire application must use `src/data/raggio.data.ts` as the single source of truth once the data layer exists.

All cards, profile pages, filters, search results, featured profiles, and derived UI state must originate from that dataset. Do not duplicate profile data in components, pages, tests, or constants.

The core profile model is:

```ts
export type RaggioPerson = {
  id: string
  slug: string

  name: string
  fullName?: string
  aliases?: string[]

  birthYear?: number
  deathYear?: number

  status: "alive" | "deceased" | "unknown"

  country?: string
  region?: string
  city?: string

  category:
    | "sports"
    | "science"
    | "art"
    | "law"
    | "business"
    | "tech"
    | "education"
    | "music"
    | "politics"
    | "other"

  subcategory?: string

  notoriety: 1 | 2 | 3 | 4 | 5

  image?: string
  imageSource?: string

  summary: string
  bio: string

  highlights?: string[]

  tags: string[]

  verified: boolean

  sources?: string[]

  createdAt?: string
  updatedAt?: string
}
```

Use `satisfies RaggioPerson[]` for the dataset when it is introduced.

### Notoriety Scale

- `1` — niche profile
- `2` — regional recognition
- `3` — professional recognition
- `4` — nationally notable
- `5` — historically significant

### Data Entry Rules

- Use lowercase kebab-case slugs.
- Prefer stable IDs; initially `id` may match `slug`.
- Do not guess dates, locations, sources, or status.
- Use `verified: true` only when reliable sources exist.
- Missing images must never break layout.
- Keep data database-friendly for future Supabase/PostgreSQL migration.

## UI and Accessibility Standards

All UI must be:

- Mobile-first and responsive
- Keyboard navigable
- Screen-reader considerate
- Semantic HTML where practical
- Visible-focus friendly
- Safe with reduced-motion preferences

Use links for navigation and buttons for actions. Do not use clickable `div` elements.

Carousels must include accessible controls and must not require autoplay. Animations should be tasteful and should respect reduced motion.

## Routing Strategy

Initial routes:

- `/` — homepage
- `/person/:slug` — person detail page
- `*` — not found page

Use lazy route loading for route-level pages.

Use route constants/helpers instead of scattering route strings throughout components.

## Filtering, Search, and Sorting Strategy

When implemented, use pure utilities for filtering, sorting, and search:

- `src/utils/filtering.ts`
- `src/utils/sorting.ts`
- `src/utils/search.ts`

Search should use Fuse.js and query across name, aliases, tags, country, and category. Filtering options such as country must be derived from the dataset.

Recommended processing order:

1. Local dataset
2. Search results
3. Filters
4. Sorting
5. Rendering

## Future Scalability Goals

The architecture should support future migration to:

- Supabase
- PostgreSQL
- Authentication
- Admin panel
- Crowdsourced submissions
- Moderation workflows
- Family relationships
- Family trees
- Timeline view
- Map view

Do not hardcode assumptions that would block these features.

## Validation Expectations

Before marking implementation work complete, run relevant checks such as:

- TypeScript compilation
- ESLint
- Production build

If a check fails because of an environment limitation, document it clearly. If a check fails because of implementation, fix it before completion.
