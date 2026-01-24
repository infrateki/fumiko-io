# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fumiko.io is a personal content management dashboard for ITT (International Travel Team), a Peruvian travel company. Built with Next.js 14 (App Router) and Sanity CMS, it allows the owner to manage website content, landing page ideas, media assets, and marketing strategy documents.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

Sanity Studio is embedded at `/studio` route (http://localhost:3000/studio).

## Architecture

### Route Structure
- `app/(dashboard)/` - Dashboard route group with shared layout (sidebar + header)
  - `dashboard/` - Main overview with stats
  - `ideas/` - Landing page ideas/mockups
  - `content/` - Reusable text blocks
  - `media/` - Media library (images, videos, documents)
  - `social/` - Social media links
  - `strategy/` - Marketing plans and campaigns
  - `personas/` - Client persona profiles
  - `settings/` - Business profile configuration
- `app/studio/[[...tool]]/` - Embedded Sanity Studio (catch-all route)

### Sanity Integration
- **Config**: `sanity.config.ts` - Main Sanity configuration
- **Client**: `sanity/lib/client.ts` - next-sanity client setup
- **Queries**: `sanity/lib/queries.ts` - GROQ queries for all document types
- **Schemas**: `sanity/schemaTypes/documents/` - Document type definitions

### Sanity Document Types
- `landingIdea` - Website concept ideas with images and status tracking
- `contentBlock` - Reusable text content with categories and tags
- `mediaAsset` - Images, videos, audio, and documents
- `socialLink` - Social media profile links
- `strategyDoc` - Marketing strategy documents
- `clientPersona` - Ideal customer profiles
- `businessProfile` - Singleton for company info and branding

### Component Organization
- `components/ui/` - shadcn/ui components (Button, Card, Dialog, etc.)
- `components/dashboard/` - Dashboard-specific components (Sidebar, Header, StatsCard, etc.)

## Design System

Luxury travel theme (inspired by Viajes Rosario):
- **Primary (Burgundy)**: `#8B2942` - Main brand color
- **Accent (Gold)**: `#C9A227` - Highlight color
- **Background**: `#FDFBF7` - Warm white
- **Foreground**: `#2D2D2D` - Charcoal text

Custom utility classes available: `.text-burgundy`, `.text-gold`, `.bg-burgundy`, `.bg-gold`, `.border-burgundy`, `.border-gold`

Typography:
- Headings: Playfair Display (`.font-playfair`)
- Body: Inter (`.font-inter`)

## Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your-read-token
```

## Key Patterns

- GROQ queries use `next-sanity`'s `groq` template tag
- Images use `@sanity/image-url` via `sanity/lib/image.ts`
- Dashboard pages fetch data from Sanity and render with shadcn/ui components
- Path aliases: `@/` maps to project root
