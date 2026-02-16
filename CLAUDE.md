# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A portfolio website built with Next.js 16, TypeScript, and Tailwind CSS 4. Uses Bun as the package manager and Biome for linting/formatting.

## Development Commands

```bash
# Install dependencies
bun install

# Development server (http://localhost:3000)
bun run dev

# Linting (Biome checks code quality)
bun run lint

# Formatting (Biome auto-formats code)
bun run format

# Production build (runs format + lint before building)
bun run build

# Production server
bun run start
```

## Internationalization (i18n)

The app uses `next-intl` for internationalization with locale-based routing:

- **Supported locales**: `en` (English), `th` (Thai)
- **Default locale**: `en`
- **Configuration**: `src/i18n/routing.ts` defines locales and creates navigation wrappers
- **Request config**: `src/i18n/request.ts` loads translations from `messages/{locale}.json`
- **Middleware**: `src/proxy.ts` handles locale routing (matches all paths except API routes, _next, and static files)
- **Routing structure**: All pages live under `src/app/[locale]/` for dynamic locale segments

When adding new UI text:
1. Add translation keys to both `messages/en.json` and `messages/th.json`
2. Use the `useTranslations()` hook from `next-intl` in components
3. Keep the JSON structure organized by component name

## Architecture

### App Router Structure

- `src/app/[locale]/layout.tsx` - Root layout with font loading, SEO metadata, and NextIntlClientProvider
- `src/app/[locale]/page.tsx` - Homepage that composes all sections
- Layout validates locale and returns 404 for invalid locales
- Uses `Promise.all()` to parallelize param/message loading and avoid waterfalls

### Component Organization

All components are in `src/components/` with a barrel export in `index.ts`:
- `Header.tsx` - Navigation with language switcher
- `Hero.tsx` - Hero section
- `About.tsx` - About section with stats
- `Skills.tsx` - Technical skills showcase
- `Projects.tsx` - Portfolio projects
- `Contact.tsx` - Contact form (conditionally rendered based on `NEXT_PUBLIC_AVAILABLE_FOR_HIRE`)
- `Footer.tsx` - Footer
- `LanguageSwitcher.tsx` - Locale toggle component

Components are React.memo wrapped for performance where appropriate.

### Performance Optimizations

- **Dynamic imports**: Contact component is loaded dynamically since it's conditionally rendered
- **CSS optimization**: `experimental.optimizeCss` enabled in next.config.ts
- **Package imports**: Barrel file optimization for `@/components`
- **Font loading**: Geist Sans/Mono with `display: "swap"` to prevent layout shifts
- **Image optimization**: AVIF/WebP formats with responsive device sizes configured

### Path Aliases

- `@/*` maps to `src/*` (configured in tsconfig.json)

## Code Quality

### Biome Configuration

- **Formatter**: 2-space indentation
- **Linter**: Recommended rules + Next.js/React domain rules
- **Auto-organize imports**: Enabled (except where explicitly disabled with biome-ignore)
- **Accessibility**: Warning level for anchor content/validation, SVG title checks disabled
- Notable rule adjustments:
  - `noUnknownAtRules`: off (for Tailwind CSS)
  - `noImportantStyles`: off (for utility-first CSS)

### Pre-build Hooks

The `prebuild` script runs `biome check --write .` before builds to automatically format code and check for linting issues.

## Environment Variables

- `NEXT_PUBLIC_AVAILABLE_FOR_HIRE` - Controls Contact section visibility (set to "true" to show)

## Next.js Configuration Notes

- Compression enabled for all responses
- `X-Powered-By` header removed
- Image formats: AVIF, WebP with optimized device sizes
- The `withNextIntl()` wrapper is required for i18n functionality
