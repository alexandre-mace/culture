"use client";

import { useMemo, useState } from "react";
import { Timeline } from "@/components/timeline";
import { ShuffleView } from "@/components/shuffle-view";
import { Button } from "@/components/ui/button";
import { ListOrdered, Shuffle, Funnel } from "lucide-react";
import { allItems, categoryRegistry } from "@/lib/all-items";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

const categories = categoryRegistry.map((cat) => ({ name: cat.name, emoji: cat.emoji }));

export default function ToutPage() {
  const [mode, setMode] = useState<"timeline" | "shuffle">("timeline");
  const [filtersOpen, setFiltersOpen] = useState(false);
  // empty set = everything visible
  const [hidden, setHidden] = useState<Set<string>>(new Set());

  const filteredItems = useMemo(() => {
    if (hidden.size === 0 || hidden.size === categories.length) return allItems;
    return allItems.filter((item) => !item.category || !hidden.has(item.category));
  }, [hidden]);

  const activeCount = categories.length - hidden.size;
  const filterActive = hidden.size > 0 && hidden.size < categories.length;

  const toggleCategory = (name: string) => {
    setHidden((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  // Rendered inside each view's header row (Timeline title / ShuffleView header)
  const controls = (
    <div className="flex items-center gap-1.5">
      <Button
        variant={filterActive ? "secondary" : "ghost"}
        size="sm"
        onPress={() => setFiltersOpen(true)}
        className="gap-1.5 h-7 px-2"
        aria-label="Filtrer les catégories"
      >
        <Funnel className="h-4 w-4" />
        {filterActive && <span className="text-xs tabular-nums">{activeCount}</span>}
      </Button>
      <div className="flex bg-background/95 backdrop-blur border rounded-lg p-1 shadow-sm">
        <Button
          variant={mode === "timeline" ? "secondary" : "ghost"}
          size="sm"
          onPress={() => setMode("timeline")}
          className="gap-1.5 h-7"
        >
          <ListOrdered className="h-4 w-4" />
          <span className="hidden sm:inline">Chrono</span>
        </Button>
        <Button
          variant={mode === "shuffle" ? "secondary" : "ghost"}
          size="sm"
          onPress={() => setMode("shuffle")}
          className="gap-1.5 h-7"
        >
          <Shuffle className="h-4 w-4" />
          <span className="hidden sm:inline">Shuffle</span>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {mode === "timeline" ? (
        <Timeline
          items={filteredItems}
          title="Toutes les catégories"
          showCategory
          titleExtra={controls}
        />
      ) : (
        <ShuffleView items={filteredItems} headerExtra={controls} />
      )}

      {/* Category filters */}
      <Drawer open={filtersOpen} onOpenChange={setFiltersOpen}>
        <DrawerContent className="max-h-[85vh]">
          <DrawerHeader className="pb-2">
            <DrawerTitle className="flex items-center justify-between">
              <span>Filtrer les catégories</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 text-xs text-muted-foreground"
                onPress={() => setHidden(new Set())}
                isDisabled={hidden.size === 0}
              >
                Tout afficher
              </Button>
            </DrawerTitle>
          </DrawerHeader>
          <div className="px-4 pb-8 overflow-y-auto">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const active = !hidden.has(cat.name);
                return (
                  <button
                    key={cat.name}
                    onClick={() => toggleCategory(cat.name)}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors",
                      active
                        ? "bg-primary/10 border-primary/40 text-primary"
                        : "text-muted-foreground opacity-60 hover:opacity-100"
                    )}
                  >
                    <span>{cat.emoji}</span>
                    {cat.name}
                  </button>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              {filterActive
                ? `${activeCount} catégorie${activeCount > 1 ? "s" : ""} affichée${activeCount > 1 ? "s" : ""} · ${filteredItems.length} entrées`
                : `Toutes les catégories · ${allItems.length} entrées`}
            </p>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
