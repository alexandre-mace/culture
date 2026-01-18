# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Culture is a Next.js 16 interactive timeline explorer for cultural, scientific, and historical topics. It displays 30+ subject categories (philosophy, literature, art, science, history, etc.) as navigable visual timelines in French.

## Commands

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm run lint     # Run ESLint
```

## Architecture

### Core Components

- **`components/timeline.tsx`** - The main interactive component. Handles:
  - Dynamic year marker generation with "nice" intervals (1, 2, 5 × power of 10)
  - Collision avoidance algorithm for card positioning (alternates left/right)
  - Geological timescale formatting (Ga, Ma, ka) and historical dates (av. J.-C.)
  - Keyboard navigation (Arrow Up/Down) and auto-scroll to selection
  - Split-view layout: timeline left, detail panel right on desktop

- **`components/header.tsx`** - Navigation with multi-category dropdown menu and Cmd+K search

### Data Layer

All timeline data lives in `data/*.ts` files (30 files). Each exports an array following the `TimelineItem` interface:

```typescript
interface TimelineItem {
  id: string;
  name: string;
  birthYear: number;        // Supports negative (BC) and large numbers (geological)
  deathYear?: number;
  image?: string;           // Wikimedia URLs
  nationality: string;
  movement: string;         // Category/period
  summary: string;
  mainWorks: string[];
  keyIdeas?: string[];
}
```

### Routing

- `app/page.tsx` - Home page with subject grid
- `app/[subject]/page.tsx` - Dynamic timeline pages (e.g., `/philosophie`, `/musique-classique`)

### UI Stack

- **shadcn/ui** (New York style) with Radix UI primitives
- **Tailwind CSS v4** with OKLCH color system
- **Lucide** icons
