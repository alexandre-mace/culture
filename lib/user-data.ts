// Client-side reading history and favorites, stored in localStorage.
// Plain helpers (no React) — components read on mount and keep local state.

const READ_KEY = "culture:read";
const FAV_KEY = "culture:favorites";

export interface FavoriteEntry {
  href: string; // subject route, e.g. /philosophie
  id: string;
  name: string;
  category: string;
  emoji: string;
}

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

// ---- Reading history: { [href]: string[] of item ids } ----

export function getReadIds(href: string): Set<string> {
  if (typeof window === "undefined") return new Set();
  const all = safeParse<Record<string, string[]>>(localStorage.getItem(READ_KEY), {});
  return new Set(all[href] ?? []);
}

export function markRead(href: string, id: string): void {
  if (typeof window === "undefined") return;
  const all = safeParse<Record<string, string[]>>(localStorage.getItem(READ_KEY), {});
  const ids = new Set(all[href] ?? []);
  if (ids.has(id)) return;
  ids.add(id);
  all[href] = [...ids];
  localStorage.setItem(READ_KEY, JSON.stringify(all));
}

// ---- Favorites: FavoriteEntry[] ----

export function getFavorites(): FavoriteEntry[] {
  if (typeof window === "undefined") return [];
  return safeParse<FavoriteEntry[]>(localStorage.getItem(FAV_KEY), []);
}

export function isFavorite(href: string, id: string): boolean {
  return getFavorites().some((f) => f.href === href && f.id === id);
}

/** Returns the new favorite state */
export function toggleFavorite(entry: FavoriteEntry): boolean {
  const favorites = getFavorites();
  const index = favorites.findIndex((f) => f.href === entry.href && f.id === entry.id);
  if (index >= 0) {
    favorites.splice(index, 1);
    localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
    return false;
  }
  favorites.push(entry);
  localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
  return true;
}
