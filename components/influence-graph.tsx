"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface GraphItem {
  id: string;
  name: string;
  birthYear: number;
  image?: string;
  family?: string;
  influences?: string[];
}

interface InfluenceGraphProps {
  items: GraphItem[];
  title: string;
  onClose: () => void;
  onSelect: (id: string) => void;
}

const NODE_SPACING_X = 96;
const LANE_HEIGHT = 104;
const MARGIN_X = 70;
const MARGIN_Y = 64;
const RADIUS = 22;

// Fullscreen chronological influence graph for one subject:
// x = chronological rank, y = family lane, arrows = "a influencé"
export function InfluenceGraph({ items, title, onClose, onSelect }: InfluenceGraphProps) {
  const [hoverId, setHoverId] = useState<string | null>(null);

  const { nodes, edges, width, height, lanes } = useMemo(() => {
    // keep only items that participate in at least one influence link
    const referenced = new Set<string>();
    for (const item of items) {
      for (const id of item.influences ?? []) referenced.add(id);
    }
    const connected = items
      .filter((item) => (item.influences ?? []).length > 0 || referenced.has(item.id))
      .sort((a, b) => a.birthYear - b.birthYear);

    // family lanes, ordered by first appearance
    const lanes: string[] = [];
    for (const item of connected) {
      const lane = item.family ?? "Autres";
      if (!lanes.includes(lane)) lanes.push(lane);
    }

    const nodes = connected.map((item, index) => ({
      item,
      x: MARGIN_X + index * NODE_SPACING_X,
      y:
        MARGIN_Y +
        lanes.indexOf(item.family ?? "Autres") * LANE_HEIGHT +
        // small stagger to keep labels readable inside a lane
        (index % 2 === 0 ? 0 : 18),
    }));
    const byId = new Map(nodes.map((node) => [node.item.id, node]));

    const edges = connected.flatMap((item) =>
      (item.influences ?? [])
        .filter((id) => byId.has(id))
        .map((id) => ({ from: byId.get(id)!, to: byId.get(item.id)! }))
    );

    return {
      nodes,
      edges,
      lanes,
      width: MARGIN_X * 2 + Math.max(0, connected.length - 1) * NODE_SPACING_X,
      height: MARGIN_Y * 2 + lanes.length * LANE_HEIGHT,
    };
  }, [items]);

  const isDimmed = (a: string, b?: string) =>
    hoverId !== null && hoverId !== a && hoverId !== b;

  return (
    <div className="fixed inset-0 z-[60] bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-14 border-b shrink-0">
        <div>
          <h2 className="font-semibold">{title} — graphe d’influences</h2>
          <p className="text-xs text-muted-foreground">
            Flèches : « a influencé ». Touchez un nœud pour ouvrir sa fiche.
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-accent transition-colors"
          aria-label="Fermer le graphe"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Canvas */}
      <div className="flex-1 overflow-auto">
        <svg width={width} height={height} className="block">
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" className="fill-muted-foreground" />
            </marker>
            <marker
              id="arrow-active"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" className="fill-primary" />
            </marker>
          </defs>

          {/* Lane labels */}
          {lanes.map((lane, i) => (
            <text
              key={lane}
              x={12}
              y={MARGIN_Y + i * LANE_HEIGHT - 34}
              className="fill-muted-foreground text-[10px] font-semibold uppercase tracking-wider"
            >
              {lane}
            </text>
          ))}

          {/* Edges */}
          {edges.map(({ from, to }, i) => {
            const active = hoverId === from.item.id || hoverId === to.item.id;
            const dx = Math.max(40, (to.x - from.x) / 2);
            const path = `M ${from.x + RADIUS} ${from.y} C ${from.x + dx} ${from.y}, ${to.x - dx} ${to.y}, ${to.x - RADIUS - 6} ${to.y}`;
            return (
              <path
                key={i}
                d={path}
                fill="none"
                markerEnd={active ? "url(#arrow-active)" : "url(#arrow)"}
                className={cn(
                  "transition-opacity",
                  active ? "stroke-primary" : "stroke-muted-foreground",
                  isDimmed(from.item.id, to.item.id) ? "opacity-10" : active ? "opacity-90" : "opacity-35"
                )}
                strokeWidth={active ? 2 : 1.25}
              />
            );
          })}

          {/* Nodes */}
          {nodes.map(({ item, x, y }) => (
            <g
              key={item.id}
              transform={`translate(${x}, ${y})`}
              className={cn(
                "cursor-pointer transition-opacity",
                isDimmed(item.id) && "opacity-25"
              )}
              onMouseEnter={() => setHoverId(item.id)}
              onMouseLeave={() => setHoverId(null)}
              onClick={() => onSelect(item.id)}
            >
              <circle
                r={RADIUS}
                className={cn(
                  "fill-card stroke-2",
                  hoverId === item.id ? "stroke-primary" : "stroke-border"
                )}
              />
              {item.image ? (
                <>
                  <clipPath id={`clip-${item.id}`}>
                    <circle r={RADIUS - 2} />
                  </clipPath>
                  <image
                    href={item.image}
                    x={-RADIUS + 2}
                    y={-RADIUS + 2}
                    width={(RADIUS - 2) * 2}
                    height={(RADIUS - 2) * 2}
                    clipPath={`url(#clip-${item.id})`}
                    preserveAspectRatio="xMidYMid slice"
                  />
                </>
              ) : (
                <text textAnchor="middle" dy="0.35em" className="fill-primary text-xs font-semibold">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, 2)}
                </text>
              )}
              <text
                textAnchor="middle"
                y={RADIUS + 14}
                className="fill-foreground text-[10px] font-medium"
              >
                {item.name.length > 18 ? item.name.slice(0, 17) + "…" : item.name}
              </text>
              <text
                textAnchor="middle"
                y={RADIUS + 26}
                className="fill-muted-foreground text-[9px]"
              >
                {item.birthYear < 0 ? `${Math.abs(item.birthYear)} av. J.-C.` : item.birthYear}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
