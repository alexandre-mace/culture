"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDiscover } from "@/components/discover-context";

interface DiscoverItem {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  image?: string;
  nationality: string;
  movement: string;
  summary: string;
  mainWorks: string[];
  keyIdeas?: string[];
  category: string;
  categoryEmoji: string;
}

interface DiscoverSwipeProps {
  items: DiscoverItem[];
}

function formatYear(year: number): string {
  const absYear = Math.abs(year);

  if (absYear >= 1_000_000_000) {
    const ga = absYear / 1_000_000_000;
    const formatted = ga >= 10 ? Math.round(ga) : ga.toFixed(1);
    return year < 0 ? `-${formatted} Ga` : `${formatted} Ga`;
  }
  if (absYear >= 1_000_000) {
    const ma = absYear / 1_000_000;
    const formatted = ma >= 10 ? Math.round(ma) : ma.toFixed(1);
    return year < 0 ? `-${formatted} Ma` : `${formatted} Ma`;
  }
  if (absYear >= 10_000) {
    const ka = absYear / 1_000;
    const formatted = Math.round(ka);
    return year < 0 ? `-${formatted} ka` : `${formatted} ka`;
  }

  if (year < 0) {
    return `${absYear} av. J.-C.`;
  }
  return `${year}`;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function DiscoverSwipe({ items }: DiscoverSwipeProps) {
  const { selectedCategory, setCategories, shuffleKey } = useDiscover();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledItems, setShuffledItems] = useState<DiscoverItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Extract and register categories on mount
  useEffect(() => {
    const uniqueCategories = new Map<string, { name: string; emoji: string }>();
    items.forEach((item) => {
      if (!uniqueCategories.has(item.category)) {
        uniqueCategories.set(item.category, {
          name: item.category,
          emoji: item.categoryEmoji,
        });
      }
    });
    const sorted = Array.from(uniqueCategories.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setCategories(sorted);
  }, [items, setCategories]);

  // Filter items by category
  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") return items;
    return items.filter((item) => item.category === selectedCategory);
  }, [items, selectedCategory]);

  // Shuffle items when filter or shuffleKey changes
  useEffect(() => {
    const shuffled = [...filteredItems].sort(() => Math.random() - 0.5);
    setShuffledItems(shuffled);
    setCurrentIndex(0);
  }, [filteredItems, shuffleKey]);

  const currentItem = shuffledItems[currentIndex];

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < shuffledItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, shuffledItems.length]);

  // Handle horizontal touch swipe
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  if (!currentItem) {
    return (
      <div className="h-[calc(100vh-6.5rem)] md:h-[calc(100vh-3rem)] flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Chargement...</div>
      </div>
    );
  }

  // Mobile: header (44px) + tab bar (56px) = 100px = 6.25rem
  // Desktop: header (48px) = 3rem
  return (
    <div
      ref={containerRef}
      className="h-[calc(100vh-6.5rem)] md:h-[calc(100vh-3rem)] overflow-y-auto relative bg-background"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Card content */}
      <div className="px-4 py-6 space-y-6 pb-28 max-w-2xl mx-auto">
        {/* Avatar and name */}
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-primary/20 shadow-lg">
            {currentItem.image && (
              <AvatarImage src={currentItem.image} alt={currentItem.name} />
            )}
            <AvatarFallback className="bg-primary/10 text-primary text-2xl md:text-3xl font-semibold">
              {getInitials(currentItem.name)}
            </AvatarFallback>
          </Avatar>
          <h1 className="mt-4 text-2xl md:text-3xl font-bold">{currentItem.name}</h1>
          <p className="text-muted-foreground">
            {formatYear(currentItem.birthYear)}
            {currentItem.deathYear && ` - ${formatYear(currentItem.deathYear)}`}
          </p>
          <div className="flex gap-2 flex-wrap justify-center mt-3">
            {selectedCategory === "all" && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-medium">
                <span>{currentItem.categoryEmoji}</span>
                {currentItem.category}
              </span>
            )}
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {currentItem.nationality}
            </span>
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              {currentItem.movement}
            </span>
          </div>
        </div>

        {/* Summary */}
        <div>
          <h2 className="font-semibold mb-2">Biographie</h2>
          <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
            {currentItem.summary}
          </p>
        </div>

        {/* Main works */}
        <div>
          <h2 className="font-semibold mb-2">Oeuvres principales</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {currentItem.mainWorks.map((work, i) => (
              <li key={i}>{work}</li>
            ))}
          </ul>
        </div>

        {/* Key ideas */}
        {currentItem.keyIdeas && currentItem.keyIdeas.length > 0 && (
          <div>
            <h2 className="font-semibold mb-2">Idees cles</h2>
            <div className="flex flex-wrap gap-2">
              {currentItem.keyIdeas.map((idea, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                >
                  {idea}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation buttons - above tab bar on mobile */}
      <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="p-3 rounded-full bg-background border shadow-lg hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Precedent"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full min-w-[60px] text-center">
          {currentIndex + 1} / {shuffledItems.length}
        </span>
        <button
          onClick={goToNext}
          disabled={currentIndex === shuffledItems.length - 1}
          className="p-3 rounded-full bg-background border shadow-lg hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Suivant"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Swipe hint (only on first item) */}
      {currentIndex === 0 && (
        <div className="fixed bottom-36 md:bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-muted-foreground animate-pulse">
          <ChevronLeft className="h-4 w-4" />
          <span>Swipe</span>
          <ChevronRight className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}
