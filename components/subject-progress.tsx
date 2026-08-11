"use client";

import { useEffect, useState } from "react";
import { getReadIds } from "@/lib/user-data";

// Shows "read/total" once the user has explored a subject, plain total otherwise.
// Server renders the total; the read count only appears after hydration.
export function SubjectProgress({ href, total }: { href: string; total: number }) {
  const [read, setRead] = useState(0);

  useEffect(() => {
    // load-once from localStorage after hydration (SSR renders the plain total)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRead(Math.min(getReadIds(href).size, total));
  }, [href, total]);

  if (read === 0) {
    return <span className="text-xs text-muted-foreground tabular-nums">{total}</span>;
  }
  return (
    <span
      className="text-xs text-muted-foreground tabular-nums"
      title={`${read} fiche${read > 1 ? "s" : ""} explorée${read > 1 ? "s" : ""} sur ${total}`}
    >
      <span className={read === total ? "text-primary font-medium" : ""}>{read}</span>/{total}
    </span>
  );
}
