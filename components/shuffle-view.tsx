"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Share2, Check, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShuffleItem {
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
  category?: string;
  categoryEmoji?: string;
}

interface ShuffleViewProps {
  items: ShuffleItem[];
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

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[], seed: number): T[] {
  const result = [...array];
  let currentIndex = result.length;

  const random = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  while (currentIndex > 0) {
    const randomIndex = Math.floor(random() * currentIndex);
    currentIndex--;
    [result[currentIndex], result[randomIndex]] = [result[randomIndex], result[currentIndex]];
  }

  return result;
}

export function ShuffleView({ items }: ShuffleViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffleSeed, setShuffleSeed] = useState(() =>
    typeof window !== "undefined" ? Math.floor(Math.random() * 10000) : 42
  );
  const [copied, setCopied] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  // Shuffle items
  const shuffledItems = useMemo(() => {
    return shuffleArray(items, shuffleSeed);
  }, [items, shuffleSeed]);

  const currentItem = shuffledItems[currentIndex];

  // Reshuffle
  const reshuffle = useCallback(() => {
    setShuffleSeed(Math.floor(Math.random() * 10000));
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "instant" });
    }
  }, []);

  // Share
  const shareItem = async () => {
    if (!currentItem) return;
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback silently
    }
  };

  // Scroll to index
  const scrollToIndex = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const slideWidth = container.clientWidth;
      isScrollingRef.current = true;
      container.scrollTo({ left: index * slideWidth, behavior: "smooth" });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 300);
    }
    setCurrentIndex(index);
  }, []);

  // Handle scroll snap
  const handleScroll = useCallback(() => {
    if (isScrollingRef.current || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const slideWidth = container.clientWidth;
    const newIndex = Math.round(container.scrollLeft / slideWidth);
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < shuffledItems.length) {
      setCurrentIndex(newIndex);
    }
  }, [currentIndex, shuffledItems.length]);

  // Navigation
  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : shuffledItems.length - 1;
    scrollToIndex(newIndex);
  }, [currentIndex, shuffledItems.length, scrollToIndex]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex < shuffledItems.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  }, [currentIndex, shuffledItems.length, scrollToIndex]);

  // Keyboard navigation
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
  }, [goToNext, goToPrevious]);

  return (
    <div className="h-[calc(100vh-3.5rem)] md:h-[calc(100vh-3rem)] flex flex-col bg-background">
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-14 border-b bg-background/95 backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            {currentIndex + 1} / {shuffledItems.length}
          </span>
          {currentItem?.category && (
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-xs font-medium text-primary">
              <span>{currentItem.categoryEmoji}</span>
              <span>{currentItem.category}</span>
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={reshuffle} className="h-9 w-9">
            <Shuffle className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={shareItem} className="h-9 w-9">
            {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Scroll-snap container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {shuffledItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-full snap-center overflow-y-auto px-4 py-6"
          >
            {/* Item header */}
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-20 w-20 md:h-24 md:w-24 border-2 border-primary/20">
                {item.image && <AvatarImage src={item.image} alt={item.name} />}
                <AvatarFallback className="bg-primary/10 text-primary text-2xl font-semibold">
                  {getInitials(item.name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">{item.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {formatYear(item.birthYear)}
                  {item.deathYear && ` - ${formatYear(item.deathYear)}`}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap mb-4">
              {item.category && (
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  <span>{item.categoryEmoji}</span>
                  {item.category}
                </span>
              )}
              <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                {item.nationality}
              </span>
              <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                {item.movement}
              </span>
            </div>

            {/* Content */}
            <div className="space-y-5 max-w-2xl">
              <div>
                <h3 className="font-semibold mb-2">Biographie</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Œuvres principales</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {item.mainWorks.map((work, i) => (
                    <li key={i}>{work}</li>
                  ))}
                </ul>
              </div>

              {item.keyIdeas && item.keyIdeas.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Idées clés</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.keyIdeas.map((idea, i) => (
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
          </div>
        ))}
      </div>

      {/* Bottom navigation */}
      <div className="flex items-center justify-center gap-6 h-16 border-t bg-background/95 backdrop-blur">
        <button
          onClick={goToPrevious}
          className="p-3 rounded-full bg-background border shadow-sm hover:bg-accent transition-colors"
          aria-label="Précédent"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="text-xs text-muted-foreground">Swipez ou utilisez ← →</span>
        <button
          onClick={goToNext}
          className="p-3 rounded-full bg-background border shadow-sm hover:bg-accent transition-colors"
          aria-label="Suivant"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
