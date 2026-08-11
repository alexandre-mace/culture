# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Culture is a Next.js 16 interactive timeline explorer for cultural, scientific, and historical topics. It displays 30 subject categories (philosophy, literature, art, science, history, etc.) as navigable visual timelines in French. Fully static (no backend), installable as a PWA with offline support.

## Commands

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm run lint     # Run ESLint
```

## Architecture

### Core Components

- **`components/timeline.tsx`** - The main interactive component. Handles:
  - Piecewise-linear time scale shared by cards AND year markers: min 64px between
    consecutive items, empty stretches capped at 240px (geological ranges stay
    within browser height limits), markers interpolated on the same scale with
    adaptive "nice" sub-markers in dense stretches
  - Geological timescale formatting (Ga, Ma, ka) and historical dates (av. J.-C.)
  - Keyboard navigation (Arrow Up/Down), deep links (`?id=`), auto-scroll to selection
  - Split-view layout: timeline left, detail panel right on desktop; fullscreen
    swipe drawer on mobile
  - Per-item type labels ("Biographie/Œuvres" for persons, "Description/Points clés"
    for topics), "Pendant ce temps…" cross-subject links, favorites + read tracking

- **`components/header.tsx`** / **`components/tab-bar.tsx`** - Desktop nav (dropdowns,
  Cmd+K search) and mobile bottom bar. Search is accent-insensitive (`stripAccents`)
  and matches names, categories and movements.

- **`components/shuffle-view.tsx`** - Random-order card browsing (used by /tout)

### Data Layer

All timeline data lives in `data/*.ts` files (30 files). Each exports an array following the `TimelineItem` interface:

```typescript
interface TimelineItem {
  id: string;               // NEVER change: used in share URLs (?id=)
  name: string;
  birthYear: number;        // Supports negative (BC) and large numbers (geological)
  deathYear?: number;
  image?: string;           // Verified Wikipedia thumbnail URLs
  nationality: string;
  movement: string;         // Category/period
  summary: string;
  mainWorks: string[];
  keyIdeas?: string[];
  itemType?: "person" | "topic";  // Overrides the subject-level default
}
```

Shared libs:
- **`lib/all-items.ts`** - Registry of all 30 subjects (data + href + emoji + type),
  and `allItems` (prefixed ids, used by /tout and /quiz). Server-heavy: do NOT import
  from client components other than /tout and /quiz pages.
- **`lib/contemporaries.ts`** - Build-time computation of "Pendant ce temps…" links
  (called from subject pages, passed to Timeline as a small map)
- **`lib/search-data.ts`** - Search index + `subjectCounts`
- **`lib/subject-meta.ts`** - Tiny href→emoji map (client-safe)
- **`lib/user-data.ts`** - localStorage favorites + read history
- **`lib/og.tsx`** - Shared Open Graph image template (per-subject `opengraph-image.tsx`)

### Routing

- `app/page.tsx` - Home with subject grid, entry counts and exploration progress
- `app/<subject>/page.tsx` - One static page per subject (e.g. `/philosophie`);
  passes `itemType="topic"` for non-person subjects and `contemporaries={...}`
- `app/tout/page.tsx` - All categories combined, Chrono/Shuffle modes + category filters
- `app/quiz/page.tsx` - Free quiz (chronology, masked bio, quote guessing); shares
  generators with `app/defi/page.tsx` (daily challenge, seeded via `lib/quiz-engine`
  so everyone gets the same grid, Wordle-style emoji share, streak in localStorage)
- `app/favoris/page.tsx` - Starred items (localStorage)
- `app/profil/page.tsx` - Personal hub (stats, shortcuts, theme, share) — 5th mobile tab
- `app/fiche-index/route.ts` - Static JSON index for the home "Fiche du jour" card
- `components/influence-graph.tsx` - Fullscreen SVG influence graph per subject
  (chronological x-axis, family lanes), opened from the timeline title row

### PWA / Offline

- `public/manifest.json` + `public/sw.js` (hand-written service worker, registered
  by `components/sw-register.tsx` in production only): network-first pages with
  cache fallback, cache-first hashed assets, capped stale-while-revalidate for
  Wikimedia images. Bump `VERSION` in sw.js when changing caching behavior.

### UI gotchas

- Always give grids an explicit mobile column (`grid grid-cols-1 sm:grid-cols-2 …`):
  an implicit grid column is sized `auto` (max-content), so any `truncate`/nowrap
  content silently pushes cards wider than the viewport on mobile.

### UI Stack

- **shadcn/ui** (New York style) with Radix UI primitives
- **Tailwind CSS v4** with OKLCH color system
- **Lucide** icons
