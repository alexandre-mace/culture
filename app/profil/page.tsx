"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  User,
  Star,
  Route,
  BookOpenCheck,
  Flame,
  Moon,
  Sun,
  Share2,
  Check,
  ChevronRight,
} from "lucide-react";
import { getFavorites } from "@/lib/user-data";

interface Stats {
  read: number;
  favorites: number;
  streak: number;
  lastScore: number | null;
}

function todayKey(offset = 0): string {
  const d = new Date();
  d.setDate(d.getDate() - offset);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default function ProfilPage() {
  const { resolvedTheme, setTheme } = useTheme();
  const [stats, setStats] = useState<Stats | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const read = Object.values(
        JSON.parse(localStorage.getItem("culture:read") ?? "{}") as Record<string, string[]>
      ).reduce((sum, ids) => sum + ids.length, 0);
      const defi = JSON.parse(localStorage.getItem("culture:defi") ?? "{}");
      let streak = 0;
      while (defi[todayKey(streak)]) streak++;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStats({
        read,
        favorites: getFavorites().length,
        streak,
        lastScore: defi[todayKey()]?.score ?? null,
      });
    } catch {
      setStats({ read: 0, favorites: 0, streak: 0, lastScore: null });
    }
  }, []);

  const shareApp = async () => {
    const url = window.location.origin;
    const text = "Culture — l'histoire des idées, des arts et des sciences en frises interactives 📚";
    try {
      if (navigator.share) {
        await navigator.share({ title: "Culture", text, url });
      } else {
        await navigator.clipboard.writeText(`${text}\n${url}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // user cancelled the share sheet
    }
  };

  return (
    <div className="container max-w-xl py-8 px-4 pb-24 md:pb-8">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <User className="h-6 w-6 text-primary" />
        Profil
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="rounded-lg border p-3 text-center">
          <BookOpenCheck className="h-5 w-5 mx-auto mb-1 text-primary" />
          <p className="text-xl font-bold tabular-nums">{stats?.read ?? "–"}</p>
          <p className="text-xs text-muted-foreground">fiches lues</p>
        </div>
        <div className="rounded-lg border p-3 text-center">
          <Star className="h-5 w-5 mx-auto mb-1 fill-yellow-500 text-yellow-500" />
          <p className="text-xl font-bold tabular-nums">{stats?.favorites ?? "–"}</p>
          <p className="text-xs text-muted-foreground">favoris</p>
        </div>
        <div className="rounded-lg border p-3 text-center">
          <Flame className="h-5 w-5 mx-auto mb-1 text-orange-500" />
          <p className="text-xl font-bold tabular-nums">{stats?.streak ?? "–"}</p>
          <p className="text-xs text-muted-foreground">
            {stats && stats.streak > 1 ? "jours de défi" : "jour de défi"}
          </p>
        </div>
      </div>

      {/* Shortcuts */}
      <div className="space-y-1 mb-8">
        <Link
          href="/favoris"
          className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-accent transition-colors"
        >
          <Star className="h-5 w-5 text-muted-foreground" />
          <span className="flex-1 font-medium">Mes favoris</span>
          {stats && stats.favorites > 0 && (
            <span className="text-sm text-muted-foreground tabular-nums">{stats.favorites}</span>
          )}
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
        <Link
          href="/parcours"
          className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-accent transition-colors"
        >
          <Route className="h-5 w-5 text-muted-foreground" />
          <span className="flex-1 font-medium">Parcours guidés</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
        <Link
          href="/defi"
          className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-accent transition-colors"
        >
          <Flame className="h-5 w-5 text-muted-foreground" />
          <span className="flex-1 font-medium">Défi du jour</span>
          {stats?.lastScore != null && (
            <span className="text-sm text-muted-foreground tabular-nums">{stats.lastScore}/5</span>
          )}
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
      </div>

      {/* Settings */}
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-1">
        Préférences
      </p>
      <div className="space-y-1">
        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="w-full flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-accent transition-colors text-left"
        >
          {resolvedTheme === "dark" ? (
            <Sun className="h-5 w-5 text-muted-foreground" />
          ) : (
            <Moon className="h-5 w-5 text-muted-foreground" />
          )}
          <span className="flex-1 font-medium">
            {resolvedTheme === "dark" ? "Thème clair" : "Thème sombre"}
          </span>
        </button>
        <button
          onClick={shareApp}
          className="w-full flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-accent transition-colors text-left"
        >
          {copied ? (
            <Check className="h-5 w-5 text-green-500" />
          ) : (
            <Share2 className="h-5 w-5 text-muted-foreground" />
          )}
          <span className="flex-1 font-medium">{copied ? "Lien copié !" : "Partager l'app"}</span>
        </button>
      </div>
    </div>
  );
}
