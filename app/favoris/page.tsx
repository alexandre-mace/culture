"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { getFavorites, toggleFavorite, type FavoriteEntry } from "@/lib/user-data";

export default function FavorisPage() {
  const [favorites, setFavorites] = useState<FavoriteEntry[]>([]);

  useEffect(() => {
    // load-once from localStorage after hydration (SSR renders the empty state)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFavorites(getFavorites());
  }, []);

  const remove = (entry: FavoriteEntry) => {
    toggleFavorite(entry);
    setFavorites(getFavorites());
  };

  // Group by category, keeping insertion order
  const groups = favorites.reduce<Map<string, FavoriteEntry[]>>((map, fav) => {
    const list = map.get(fav.category) ?? [];
    list.push(fav);
    map.set(fav.category, list);
    return map;
  }, new Map());

  return (
    <div className="container max-w-2xl py-8 px-4 pb-24 md:pb-8">
      <h1 className="text-2xl font-bold mb-1 flex items-center gap-2">
        <Star className="h-6 w-6 fill-yellow-500 text-yellow-500" />
        Mes favoris
      </h1>
      <p className="text-sm text-muted-foreground mb-8">
        {favorites.length === 0
          ? "Aucun favori pour le moment."
          : `${favorites.length} fiche${favorites.length > 1 ? "s" : ""} enregistrée${favorites.length > 1 ? "s" : ""}.`}
      </p>

      {favorites.length === 0 ? (
        <div className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
          Ouvrez une fiche et touchez l’étoile pour la retrouver ici.
        </div>
      ) : (
        <div className="space-y-8">
          {[...groups.entries()].map(([category, entries]) => (
            <div key={category}>
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span className="text-base">{entries[0].emoji}</span>
                {category}
              </h2>
              <ul className="space-y-1">
                {entries.map((fav) => (
                  <li key={`${fav.href}:${fav.id}`} className="flex items-center gap-2">
                    <Link
                      href={`${fav.href}?id=${fav.id}`}
                      className="flex-1 rounded-lg border px-3 py-2.5 text-sm font-medium hover:border-primary/50 hover:bg-muted/50 transition-all"
                    >
                      {fav.name}
                    </Link>
                    <button
                      onClick={() => remove(fav)}
                      className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                      aria-label={`Retirer ${fav.name} des favoris`}
                    >
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
