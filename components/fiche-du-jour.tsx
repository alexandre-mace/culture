"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, Flame } from "lucide-react";

interface IndexEntry {
  name: string;
  href: string;
  image: string;
  emoji: string;
  category: string;
  birthYear: number;
  deathYear: number | null;
  teaser: string;
  quote: string | null;
}

interface DefiState {
  played: boolean;
  score?: number;
  streak: number;
  number: number;
}

const DEFI_EPOCH = "2026-08-12";

function formatYear(year: number): string {
  const abs = Math.abs(year);
  return year < 0 ? `${abs} av. J.-C.` : `${year}`;
}

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// "Fiche du jour" + daily challenge status, at the top of the home page
export function FicheDuJour() {
  const [entry, setEntry] = useState<IndexEntry | null>(null);
  const [defi, setDefi] = useState<DefiState | null>(null);

  useEffect(() => {
    const key = todayKey();

    fetch("/fiche-index")
      .then((res) => (res.ok ? res.json() : []))
      .then((entries: IndexEntry[]) => {
        if (entries.length === 0) return;
        // deterministic daily rotation, same for everyone
        const seed = Number(key.replace(/-/g, ""));
        setEntry(entries[seed % entries.length]);
      })
      .catch(() => {});

    try {
      const history = JSON.parse(localStorage.getItem("culture:defi") ?? "{}");
      let streak = 0;
      const day = new Date(key);
      while (
        history[
          `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, "0")}-${String(day.getDate()).padStart(2, "0")}`
        ]
      ) {
        streak++;
        day.setDate(day.getDate() - 1);
      }
      const number = Math.max(
        1,
        Math.round((new Date(key).getTime() - new Date(DEFI_EPOCH).getTime()) / 86400000) + 1
      );
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDefi({ played: Boolean(history[key]), score: history[key]?.score, streak, number });
    } catch {
      // ignore malformed storage
    }
  }, []);

  if (!entry) return null;

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[2fr_1fr]">
      {/* Fiche du jour */}
      <Link
        href={entry.href}
        className="group flex items-center gap-4 rounded-lg border p-4 hover:border-primary/50 hover:bg-muted/50 transition-all"
      >
        <Avatar className="h-14 w-14 border-2 border-primary/20 shrink-0">
          <AvatarImage src={entry.image} alt={entry.name} />
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
            {entry.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground mb-0.5">
            Fiche du jour · {entry.emoji} {entry.category}
          </p>
          <h3 className="font-semibold group-hover:text-primary transition-colors truncate">
            {entry.name}
            <span className="ml-2 font-normal text-sm text-muted-foreground">
              {formatYear(entry.birthYear)}
              {entry.deathYear ? ` - ${formatYear(entry.deathYear)}` : ""}
            </span>
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {entry.quote ? `« ${entry.quote} »` : entry.teaser}
          </p>
        </div>
      </Link>

      {/* Défi du jour */}
      {defi && (
        <Link
          href="/defi"
          className="group flex items-center gap-3 rounded-lg border p-4 hover:border-primary/50 hover:bg-muted/50 transition-all"
        >
          <CalendarDays className="h-8 w-8 text-primary shrink-0" />
          <div className="min-w-0">
            <h3 className="font-semibold group-hover:text-primary transition-colors">
              Défi #{defi.number}
            </h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              {defi.played ? `Joué · ${defi.score}/5` : "5 questions du jour"}
              {defi.streak > 1 && (
                <span className="inline-flex items-center gap-0.5">
                  · <Flame className="h-3.5 w-3.5 text-orange-500" />
                  {defi.streak}
                </span>
              )}
            </p>
          </div>
        </Link>
      )}
    </div>
  );
}
