"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Pin } from "lucide-react";
import { getPinnedSubjects, togglePinnedSubject } from "@/lib/user-data";
import { subjectNames, subjectEmojis } from "@/lib/subject-meta";

// "Épinglés" section at the top of the home page (subjects pinned from their timeline)
export function PinnedSubjects() {
  const [pinned, setPinned] = useState<string[]>([]);

  useEffect(() => {
    // load-once from localStorage after hydration (SSR renders nothing)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPinned(getPinnedSubjects().filter((href) => subjectNames[href]));
  }, []);

  if (pinned.length === 0) return null;

  const unpin = (href: string) => {
    togglePinnedSubject(href);
    setPinned(getPinnedSubjects().filter((h) => subjectNames[h]));
  };

  return (
    <div>
      <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
        <Pin className="h-5 w-5 fill-primary text-primary" />
        Épinglés
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {pinned.map((href) => (
          <div
            key={href}
            className="group flex items-center gap-3 rounded-lg border p-4 hover:border-primary/50 hover:bg-muted/50 transition-all"
          >
            <Link href={href} className="flex items-center gap-3 flex-1 min-w-0">
              <span className="text-2xl">{subjectEmojis[href]}</span>
              <span className="font-medium group-hover:text-primary transition-colors truncate">
                {subjectNames[href]}
              </span>
            </Link>
            <button
              onClick={() => unpin(href)}
              className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label={`Désépingler ${subjectNames[href]}`}
            >
              <Pin className="h-4 w-4 fill-primary text-primary" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
