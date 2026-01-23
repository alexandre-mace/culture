"use client";

import { useState, useEffect, useRef, Suspense, useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Share2, Check, X } from "lucide-react";
import { useSearchParams, usePathname } from "next/navigation";

interface TimelineItem {
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
}

interface TimelineProps {
  items: TimelineItem[];
  title: string;
  randomOrder?: boolean;
}

interface PositionedItem extends TimelineItem {
  displayPosition: number;
  isLeft: boolean;
  sortIndex: number;
}

function formatYear(year: number): string {
  const absYear = Math.abs(year);

  // Geological timescales
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

  // Historical timescales
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

function getYearMarkers(items: TimelineItem[]): number[] {
  const minYear = Math.min(...items.map((i) => i.birthYear));
  const maxYear = Math.max(...items.map((i) => i.deathYear || i.birthYear));

  const markers: number[] = [];
  const range = maxYear - minYear;

  // Calculate a "nice" interval that gives us roughly 10-25 markers
  const targetMarkers = 15;
  const rawInterval = range / targetMarkers;

  // Round to a "nice" number (1, 2, 5 × power of 10)
  const magnitude = Math.pow(10, Math.floor(Math.log10(rawInterval)));
  const normalized = rawInterval / magnitude;

  let niceMultiplier: number;
  if (normalized <= 1) niceMultiplier = 1;
  else if (normalized <= 2) niceMultiplier = 2;
  else if (normalized <= 5) niceMultiplier = 5;
  else niceMultiplier = 10;

  const interval = Math.max(1, niceMultiplier * magnitude);

  const start = Math.floor(minYear / interval) * interval;

  for (let year = start; year <= maxYear + interval; year += interval) {
    markers.push(year);
  }

  return markers;
}

// Calculate positions with collision avoidance
// Uses single-column calculation to prevent overlaps on mobile
// (on desktop, cards alternate left/right visually but use same vertical spacing)
function calculatePositions(
  items: TimelineItem[],
  minYear: number,
  yearRange: number,
  totalHeight: number
): PositionedItem[] {
  const sortedItems = [...items].sort((a, b) => a.birthYear - b.birthYear);
  const cardHeight = 56; // Matches mobile card height (p-2 + avatar h-10 + gap)
  const minGap = 8;

  const result: PositionedItem[] = [];
  const positions: number[] = []; // Single column for collision detection

  sortedItems.forEach((item, index) => {
    const isLeft = index % 2 === 0;

    const basePosition = ((item.birthYear - minYear) / yearRange) * totalHeight;

    let finalPosition = basePosition;
    for (const prevPos of positions) {
      if (finalPosition < prevPos + cardHeight + minGap) {
        finalPosition = prevPos + cardHeight + minGap;
      }
    }

    positions.push(finalPosition);

    result.push({
      ...item,
      displayPosition: finalPosition,
      isLeft,
      sortIndex: index,
    });
  });

  return result;
}

// Fisher-Yates shuffle with seed for consistent shuffle per session
function shuffleArray<T>(array: T[], seed: number): T[] {
  const result = [...array];
  let currentIndex = result.length;

  // Simple seeded random
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

function TimelineContent({ items, title, randomOrder }: TimelineProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  // Start with fixed seed for SSR, randomize on client
  const [shuffleSeed, setShuffleSeed] = useState(42);
  const [isClient, setIsClient] = useState(false);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Randomize seed on client mount to avoid hydration mismatch
  useEffect(() => {
    if (randomOrder) {
      setShuffleSeed(Math.floor(Math.random() * 10000));
    }
    setIsClient(true);
  }, []);

  // Sort or shuffle items for navigation
  const sortedItems = useMemo(() => {
    const chronological = [...items].sort((a, b) => a.birthYear - b.birthYear);
    if (randomOrder && isClient) {
      return shuffleArray(chronological, shuffleSeed);
    }
    return chronological;
  }, [items, randomOrder, shuffleSeed, isClient]);

  // Reshuffle function
  const reshuffle = useCallback(() => {
    setShuffleSeed(Math.floor(Math.random() * 10000));
    setSelectedIndex(0);
  }, []);

  // Read item id from URL on initial mount only
  const initialLoadDone = useRef(false);
  useEffect(() => {
    if (initialLoadDone.current) return;
    initialLoadDone.current = true;

    const itemId = searchParams.get("id");
    if (itemId) {
      const index = sortedItems.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        setSelectedIndex(index);
        // Only open drawer on mobile (desktop has always-visible panel)
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
          setDrawerOpen(true);
        }
      }
    }
  }, [searchParams, sortedItems]);

  // Update URL when selection changes
  const updateUrlWithItem = (item: TimelineItem) => {
    const newUrl = `${pathname}?id=${item.id}`;
    window.history.replaceState({}, "", newUrl);
  };

  // Share function
  const shareItem = async () => {
    const item = sortedItems[selectedIndex];
    const url = `${window.location.origin}${pathname}?id=${item.id}`;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for browsers without clipboard API
      prompt("Copier ce lien:", url);
    }
  };

  const yearMarkers = getYearMarkers(items);
  const minYear = yearMarkers[0];
  const maxYear = yearMarkers[yearMarkers.length - 1];
  const yearRange = maxYear - minYear;

  const baseHeight = Math.max(yearRange * 1.2, 3000);

  const positionedItems = calculatePositions(items, minYear, yearRange, baseHeight);

  const maxPosition = Math.max(...positionedItems.map((i) => i.displayPosition));
  const totalHeight = Math.max(baseHeight, maxPosition + 100);

  const getMarkerPosition = (year: number): number => {
    return ((year - minYear) / yearRange) * baseHeight;
  };

  const selectedItem = sortedItems[selectedIndex];

  const goToPrevious = () => {
    const newIndex = selectedIndex > 0 ? selectedIndex - 1 : sortedItems.length - 1;
    setSelectedIndex(newIndex);
    updateUrlWithItem(sortedItems[newIndex]);
  };

  const goToNext = () => {
    const newIndex = selectedIndex < sortedItems.length - 1 ? selectedIndex + 1 : 0;
    setSelectedIndex(newIndex);
    updateUrlWithItem(sortedItems[newIndex]);
  };

  // Scroll-snap container ref for fullscreen drawer
  const drawerScrollRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  // Scroll to item in drawer and update state
  const scrollToItemInDrawer = useCallback((index: number, updateState = true) => {
    if (drawerScrollRef.current) {
      const container = drawerScrollRef.current;
      const slideWidth = container.clientWidth;
      isScrollingRef.current = true;
      container.scrollTo({ left: index * slideWidth, behavior: "smooth" });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 300);
    }
    if (updateState && index !== selectedIndex) {
      setSelectedIndex(index);
      updateUrlWithItem(sortedItems[index]);
    }
  }, [selectedIndex, sortedItems, updateUrlWithItem]);

  // Handle scroll-snap end to sync selectedIndex
  const handleDrawerScroll = useCallback(() => {
    if (isScrollingRef.current || !drawerScrollRef.current) return;
    const container = drawerScrollRef.current;
    const slideWidth = container.clientWidth;
    const newIndex = Math.round(container.scrollLeft / slideWidth);
    if (newIndex !== selectedIndex && newIndex >= 0 && newIndex < sortedItems.length) {
      setSelectedIndex(newIndex);
      updateUrlWithItem(sortedItems[newIndex]);
    }
  }, [selectedIndex, sortedItems, updateUrlWithItem]);

  // Scroll drawer to selected item when drawer opens
  useEffect(() => {
    if (drawerOpen && drawerScrollRef.current) {
      // Use instant scroll when opening, don't update state (already set)
      const container = drawerScrollRef.current;
      const slideWidth = container.clientWidth;
      container.scrollTo({ left: selectedIndex * slideWidth, behavior: "instant" });
    }
  }, [drawerOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Scroll to selected item when it changes
  useEffect(() => {
    if (selectedItem && timelineContainerRef.current) {
      const cardElement = cardRefs.current.get(selectedItem.id);
      if (cardElement) {
        const container = timelineContainerRef.current;
        const cardRect = cardElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Calculate the scroll position to center the card
        const cardTop = cardElement.offsetTop;
        const containerHeight = container.clientHeight;
        const scrollTo = cardTop - containerHeight / 2 + cardRect.height / 2;

        container.scrollTo({
          top: scrollTo,
          behavior: "smooth",
        });
      }
    }
  }, [selectedIndex, selectedItem]);

  // Mobile: no header, but tab bar (56px = 3.5rem)
  // Desktop: header (48px = 3rem)
  return (
    <div className="relative w-full h-[calc(100vh-3.5rem)] md:h-[calc(100vh-3rem)] flex">
      {/* Left side - Timeline */}
      <div ref={timelineContainerRef} className="w-full md:w-1/2 overflow-y-auto relative">
        <h1 className="text-xl font-semibold text-center py-4">{title}</h1>

        <div className="relative mx-auto max-w-4xl pb-8 px-4 md:px-0">
          {/* Timeline container */}
          <div className="relative" style={{ height: `${totalHeight}px` }}>
            {/* Timeline line - left on mobile, center on desktop */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {/* Year markers */}
            {yearMarkers.map((year) => (
              <div
                key={year}
                className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex items-center z-10"
                style={{ top: `${getMarkerPosition(year)}px` }}
              >
                {/* Year label - above dot on mobile, left of dot on desktop */}
                <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 md:bottom-auto md:mb-0 md:left-auto md:translate-x-0 md:right-full md:mr-4 text-[10px] md:text-sm text-muted-foreground whitespace-nowrap font-medium bg-background px-1.5 md:px-2 py-0.5 rounded">
                  {formatYear(year)}
                </div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-primary border-2 border-background shadow-sm" />
              </div>
            ))}

            {/* Timeline items */}
            {positionedItems.map((item) => (
              <div
                key={item.id}
                ref={(el) => {
                  if (el) cardRefs.current.set(item.id, el);
                }}
                className={cn(
                  "absolute flex items-center cursor-pointer group",
                  // Mobile: all items on the right of the line
                  "left-6 pl-10",
                  // Desktop: alternate left/right
                  item.isLeft
                    ? "md:left-auto md:right-1/2 md:pl-0 md:pr-20 md:flex-row-reverse"
                    : "md:left-1/2 md:pl-20"
                )}
                style={{ top: `${item.displayPosition}px` }}
                onClick={() => {
                  setSelectedIndex(item.sortIndex);
                  updateUrlWithItem(sortedItems[item.sortIndex]);
                  // Only open drawer on mobile (desktop has always-visible panel)
                  if (window.innerWidth < 768) {
                    setDrawerOpen(true);
                  }
                }}
              >
                {/* Connector line */}
                <div
                  className={cn(
                    "absolute top-1/2 h-0.5 transition-colors",
                    // Mobile: short connector from left line
                    "left-0 w-10",
                    // Desktop: longer connector, positioned based on side
                    item.isLeft ? "md:left-auto md:right-0 md:w-20" : "md:left-0 md:w-20",
                    selectedItem?.id === item.id ? "bg-primary" : "bg-border group-hover:bg-primary"
                  )}
                  style={{ transform: "translateY(-50%)" }}
                />

                {/* Card */}
                <div
                  className={cn(
                    "flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg border bg-card shadow-sm transition-all",
                    // Desktop: reverse direction for left items
                    item.isLeft ? "md:flex-row-reverse" : "flex-row",
                    selectedItem?.id === item.id
                      ? "border-primary shadow-md ring-2 ring-primary/20"
                      : "hover:shadow-md hover:border-primary/50"
                  )}
                >
                  <Avatar className="h-10 w-10 md:h-12 md:w-12 border-2 border-background shadow shrink-0">
                    {item.image && <AvatarImage src={item.image} alt={item.name} />}
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xs md:text-sm">
                      {getInitials(item.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className={cn("flex flex-col min-w-0", item.isLeft ? "md:items-end" : "items-start")}>
                    <span className="font-semibold text-xs md:text-sm truncate max-w-[140px] md:max-w-none">{item.name}</span>
                    <span className="text-[10px] md:text-xs text-muted-foreground">
                      {formatYear(item.birthYear)}
                      {item.deathYear && ` - ${formatYear(item.deathYear)}`}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Right side - Detail panel (always visible) */}
      <div className="hidden md:block md:w-1/2 border-l bg-background overflow-y-auto relative">
        {/* Navigation arrows */}
        <div className="sticky top-4 float-right mr-4 flex flex-col gap-2 z-30">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full bg-background border shadow-md hover:bg-accent transition-colors"
            aria-label="Element precedent"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-background border shadow-md hover:bg-accent transition-colors"
            aria-label="Element suivant"
          >
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        {selectedItem && (
          <div className="p-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-primary/20">
                  {selectedItem.image && <AvatarImage src={selectedItem.image} alt={selectedItem.name} />}
                  <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">
                    {getInitials(selectedItem.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-semibold">{selectedItem.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {formatYear(selectedItem.birthYear)}
                    {selectedItem.deathYear && ` - ${formatYear(selectedItem.deathYear)}`}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap items-center">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {selectedItem.nationality}
                </span>
                <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                  {selectedItem.movement}
                </span>
                <button
                  onClick={shareItem}
                  className="ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copied ? <Check className="h-3 w-3" /> : <Share2 className="h-3 w-3" />}
                  {copied ? "Copié!" : "Partager"}
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Biographie</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                  {selectedItem.summary}
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Oeuvres principales</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {selectedItem.mainWorks.map((work, i) => (
                    <li key={i}>{work}</li>
                  ))}
                </ul>
              </div>

              {selectedItem.keyIdeas && selectedItem.keyIdeas.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Idees cles</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.keyIdeas.map((idea, i) => (
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

            {/* Navigation indicator */}
            <div className="mt-8 pt-4 border-t">
              <span className="text-sm text-muted-foreground">
                {selectedIndex + 1} / {sortedItems.length}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Fullscreen Overlay with Scroll-Snap */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-4 h-14 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <span className="text-sm font-medium text-muted-foreground">
              {selectedIndex + 1} / {sortedItems.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={shareItem}
                className="p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Partager"
              >
                {copied ? <Check className="h-5 w-5" /> : <Share2 className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Scroll-snap container */}
          <div
            ref={drawerScrollRef}
            onScroll={handleDrawerScroll}
            className="flex overflow-x-auto snap-x snap-mandatory h-[calc(100dvh-3.5rem-3.5rem)] scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {sortedItems.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-full snap-center overflow-y-auto px-4 py-4"
              >
                {/* Item header */}
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16 border-2 border-primary/20">
                    {item.image && <AvatarImage src={item.image} alt={item.name} />}
                    <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">
                      {getInitials(item.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      {formatYear(item.birthYear)}
                      {item.deathYear && ` - ${formatYear(item.deathYear)}`}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {item.nationality}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                    {item.movement}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-5">
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
          <div className="fixed bottom-14 left-0 right-0 h-14 flex items-center justify-center gap-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
            <button
              onClick={() => scrollToItemInDrawer(selectedIndex > 0 ? selectedIndex - 1 : sortedItems.length - 1)}
              className="p-3 rounded-full bg-background border shadow-sm hover:bg-accent transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-xs text-muted-foreground">Swipez pour naviguer</span>
            <button
              onClick={() => scrollToItemInDrawer(selectedIndex < sortedItems.length - 1 ? selectedIndex + 1 : 0)}
              className="p-3 rounded-full bg-background border shadow-sm hover:bg-accent transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Wrapper with Suspense for useSearchParams
export function Timeline(props: TimelineProps) {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center">Chargement...</div>}>
      <TimelineContent {...props} />
    </Suspense>
  );
}
