# Agent Instructions

This is a Next.js 16 portfolio website with TypeScript, Tailwind CSS 4, and next-intl internationalization.

## Commands

```bash
# Development
bun run dev          # Start dev server on localhost:3000

# Build & Deploy
bun run build        # Production build
bun run start        # Start production server

# Code Quality
bun run lint         # Run Biome linter
bun run format       # Format with Biome
```

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS 4 with CSS variables
- **i18n:** next-intl (English + Thai)
- **Package Manager:** Bun
- **Linting:** Biome 2.2.0
- **Fonts:** Geist (sans) + Geist Mono via next/font

## Code Style

### Formatting (Biome)
- 2 spaces indentation
- Organize imports enabled (use `// biome-ignore assist/source/organizeImports: reason` to skip)
- 100 char line width (default)

### Imports
- Use path alias `@/*` for src imports
- Group: external libs → internal modules → styles
- Type imports: `import type { Metadata } from "next"`

### Naming
- Components: PascalCase (e.g., `Hero.tsx`)
- Files: PascalCase for components, camelCase for utilities
- CSS classes: kebab-case (e.g., `animate-fade-in-up`)

### Types
- Always use explicit types for props
- Prefer `interface` over `type` for object shapes
- Use `React.FC` sparingly; prefer regular functions

### Components
- Default exports for page components
- Named exports for reusable components (see `src/components/index.ts`)
- Use `useTranslations("Namespace")` from next-intl

### Styling
- Use Tailwind utility classes
- Custom CSS in `globals.css` with CSS variables
- Theme colors via `@theme inline` (Tailwind v4 syntax)
- Mobile-first responsive design
- Glassmorphism: `glass-card` utility class

### Error Handling
- Use Next.js `notFound()` for invalid routes
- Biome ignore comments: `// biome-ignore lint/suspicious/noExplicitAny: reason`

### Environment Variables
- Client-side: `NEXT_PUBLIC_*`
- Server-side: No prefix needed

### i18n Patterns
- Translations in `messages/en.json` and `messages/th.json`
- Routing config in `src/i18n/routing.ts`
- Dynamic route: `src/app/[locale]/`

## File Structure

```
src/
├── app/[locale]/          # Dynamic locale routing
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Main page
├── components/            # React components
│   └── index.ts           # Barrel exports
├── i18n/                  # i18n config
│   ├── request.ts
│   └── routing.ts
└── proxy.ts               # next-intl middleware
messages/                  # Translation JSON files
```

## Notes

- Uses Tailwind CSS v4 with new `@theme inline` syntax
- Images optimized with Sharp (avif/webp formats)
- CSS animations respect `prefers-reduced-motion`
- Mobile performance: blur effects disabled on small screens
