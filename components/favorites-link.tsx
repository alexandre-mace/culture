"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { getFavorites } from "@/lib/user-data";

// Small entry point to /favoris, only shown once the user has favorites
export function FavoritesLink() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // load-once from localStorage after hydration (SSR renders nothing)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount(getFavorites().length);
  }, []);

  if (count === 0) return null;
  return (
    <Link
      href="/favoris"
      className="mt-3 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium hover:bg-muted/50 hover:border-primary/50 transition-all"
    >
      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
      Mes favoris
      <span className="text-xs text-muted-foreground tabular-nums">{count}</span>
    </Link>
  );
}
