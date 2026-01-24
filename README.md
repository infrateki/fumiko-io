# Fumiko.io - ITT Travel Website Builder

A personal content management dashboard for Fumiko, owner of International Travel Team (ITT). Built with Next.js 14 and Sanity CMS.

## Features

- **Dashboard** - Overview of all content with stats and quick actions
- **Landing Page Ideas** - Store and organize website concepts and mockups
- **Content Manager** - Manage reusable text blocks with copy/paste functionality
- **Media Library** - Organize images, videos, audio, and documents
- **Social Media Hub** - Manage all social media profile links
- **Strategy Hub** - Marketing plans, campaigns, and strategic documents
- **Client Personas** - Define ideal customer profiles for ITT Travel
- **Settings** - Business profile, branding, and contact information

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **CMS**: Sanity v3
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings), Inter (body)

## Design System

Inspired by luxury travel aesthetics (Viajes Rosario):

- **Primary**: Burgundy (#8B2942)
- **Accent**: Gold (#C9A227)
- **Background**: Warm White (#FDFBF7)
- **Text**: Charcoal (#2D2D2D)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Sanity

Create a Sanity project at [sanity.io/manage](https://www.sanity.io/manage) and get your project ID.

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your-read-token
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### 4. Access Sanity Studio

Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to manage content.

## Project Structure

```
fumiko-io/
├── app/
│   ├── (dashboard)/          # Dashboard route group
│   │   ├── dashboard/        # Main dashboard
│   │   ├── ideas/            # Landing page ideas
│   │   ├── content/          # Content manager
│   │   ├── media/            # Media library
│   │   ├── social/           # Social media hub
│   │   ├── strategy/         # Strategy documents
│   │   ├── personas/         # Client personas
│   │   ├── settings/         # Settings
│   │   └── layout.tsx        # Dashboard layout
│   ├── studio/               # Sanity Studio
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Landing page
├── components/
│   ├── dashboard/            # Dashboard components
│   ├── shared/               # Shared components
│   └── ui/                   # shadcn/ui components
├── sanity/
│   ├── schemaTypes/          # Sanity document schemas
│   └── lib/                  # Sanity client & utilities
├── lib/                      # Utility functions
└── public/                   # Static assets
```

## Sanity Schemas

- `landingIdea` - Website concept ideas with images and status
- `contentBlock` - Reusable text content blocks
- `mediaAsset` - Images, videos, audio files
- `socialLink` - Social media profile links
- `strategyDoc` - Marketing strategy documents
- `clientPersona` - Ideal customer profiles
- `businessProfile` - ITT business information

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Deploy Sanity Studio

The Sanity Studio is embedded in the Next.js app and deploys automatically.

## Built For

**International Travel Team (ITT)**
- ITT Mayorista - Travel solutions for agencies
- ITT Corp - Corporate travel services

---

Built with love for Fumiko ✈️
