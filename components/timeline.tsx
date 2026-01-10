"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronUp, ChevronDown } from "lucide-react";

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
function calculatePositions(
  items: TimelineItem[],
  minYear: number,
  yearRange: number,
  totalHeight: number
): PositionedItem[] {
  const sortedItems = [...items].sort((a, b) => a.birthYear - b.birthYear);
  const cardHeight = 70;
  const minGap = 10;

  const result: PositionedItem[] = [];
  const leftPositions: number[] = [];
  const rightPositions: number[] = [];

  sortedItems.forEach((item, index) => {
    const isLeft = index % 2 === 0;
    const positions = isLeft ? leftPositions : rightPositions;

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

export function Timeline({ items, title }: TimelineProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

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

  // Sort by birth year for navigation
  const sortedItems = [...items].sort((a, b) => a.birthYear - b.birthYear);
  const selectedItem = sortedItems[selectedIndex];

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : sortedItems.length - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev < sortedItems.length - 1 ? prev + 1 : 0));
  };

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

  return (
    <div className="relative w-full h-[calc(100vh-3.5rem)] flex">
      {/* Left side - Timeline */}
      <div ref={timelineContainerRef} className="w-full md:w-1/2 overflow-y-auto relative">
        <h1 className="text-xl font-semibold text-center py-4">{title}</h1>

        <div className="relative mx-auto max-w-4xl pb-8">
          {/* Timeline container */}
          <div className="relative" style={{ height: `${totalHeight}px` }}>
            {/* Central line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            {/* Year markers */}
            {yearMarkers.map((year) => (
              <div
                key={year}
                className="absolute left-1/2 -translate-x-1/2 flex items-center z-10"
                style={{ top: `${getMarkerPosition(year)}px` }}
              >
                <div className="absolute right-full mr-4 text-sm text-muted-foreground whitespace-nowrap font-medium bg-background px-2 py-0.5 rounded">
                  {formatYear(year)}
                </div>
                <div className="w-3 h-3 rounded-full bg-primary border-2 border-background shadow-sm" />
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
                  "absolute flex items-center gap-4 cursor-pointer group",
                  item.isLeft ? "right-1/2 pr-24 flex-row-reverse" : "left-1/2 pl-24"
                )}
                style={{ top: `${item.displayPosition}px` }}
                onClick={() => setSelectedIndex(item.sortIndex)}
              >
                {/* Connector line */}
                <div
                  className={cn(
                    "absolute top-1/2 h-0.5 transition-colors",
                    item.isLeft ? "right-0 w-24" : "left-0 w-24",
                    selectedItem?.id === item.id ? "bg-primary" : "bg-border group-hover:bg-primary"
                  )}
                  style={{ transform: "translateY(-50%)" }}
                />

                {/* Card */}
                <div
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg border bg-card shadow-sm transition-all",
                    item.isLeft ? "flex-row-reverse" : "flex-row",
                    selectedItem?.id === item.id
                      ? "border-primary shadow-md ring-2 ring-primary/20"
                      : "hover:shadow-md hover:border-primary/50"
                  )}
                >
                  <Avatar className="h-12 w-12 border-2 border-background shadow">
                    {item.image && <AvatarImage src={item.image} alt={item.name} />}
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {getInitials(item.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className={cn("flex flex-col", item.isLeft ? "items-end" : "items-start")}>
                    <span className="font-semibold text-sm">{item.name}</span>
                    <span className="text-xs text-muted-foreground">
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
              <div className="flex gap-2 flex-wrap">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {selectedItem.nationality}
                </span>
                <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                  {selectedItem.movement}
                </span>
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
            <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
              {selectedIndex + 1} / {sortedItems.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
