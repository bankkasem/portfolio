# Bankkasem - Portfolio

A portfolio website built with Next.js 16, TypeScript, and Tailwind CSS 4.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)
![Bun](https://img.shields.io/badge/Bun-Package_Manager-f9f1e1?style=flat-square&logo=bun)

## ✨ Features

- **Professional Design** - Navy blue theme with glassmorphism effects
- **Responsive** - Works on all devices
- **Smooth Animations** - Fade-in, hover effects, and transitions
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Accessible** - ARIA labels and keyboard navigation

## 🚀 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Package Manager | Bun |
| Linting | Biome |

## 📦 Getting Started

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/          # Dynamic locale routing
│   │   ├── layout.tsx     # Root layout + SEO
│   │   └── page.tsx       # Main page
│   ├── globals.css        # Design system & animations
│   └── favicon.ico
├── components/
│   ├── Header.tsx         # Navigation
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About + stats
│   ├── Skills.tsx         # Tech skills
│   ├── Projects.tsx       # Portfolio
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   ├── LanguageSwitcher.tsx  # i18n language toggle
│   └── index.ts           # Component exports
├── i18n/
│   ├── request.ts         # i18n request config
│   └── routing.ts         # Locale routing config
└── proxy.ts               # Proxy utilities
messages/
├── en.json                # English translations
└── th.json                # Thai translations
```

## 🤖 Built with AI

This project was developed in collaboration with **AI** (Antigravity by Google DeepMind), demonstrating the power of human-AI pair programming for rapid development of modern web applications.

---

Made with ❤️ by [@bankkasem](https://github.com/bankkasem)
