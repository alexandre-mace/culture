"use client";

import { useState } from "react";
import { Timeline } from "@/components/timeline";
import { ShuffleView } from "@/components/shuffle-view";
import { Button } from "@/components/ui/button";
import { ListOrdered, Shuffle } from "lucide-react";

// Import all data
import { philosophers } from "@/data/philosophers";
import { writers } from "@/data/writers";
import { painters } from "@/data/painters";
import { filmmakers } from "@/data/filmmakers";
import { architecturalStyles } from "@/data/architecture";
import { composers } from "@/data/classical-music";
import { inventions } from "@/data/inventions";
import { astronomyItems } from "@/data/astronomy";
import { medicine } from "@/data/medicine";
import { explorations } from "@/data/explorations";
import { politicalMovements } from "@/data/political-movements";
import { mathematics } from "@/data/mathematics";
import { physics } from "@/data/physics";
import { biology } from "@/data/biology";
import { jazz } from "@/data/jazz";
import { economics } from "@/data/economics";
import { empires } from "@/data/empires";
import { slavery } from "@/data/slavery";
import { psychology } from "@/data/psychology";
import { wars } from "@/data/wars";
import { moneyBanking } from "@/data/money-banking";
import { religions } from "@/data/religions";
import { industrialRevolutions } from "@/data/industrial-revolutions";
// epochs excluded - geological timescales (-5Ga) break the timeline scale
import { pandemics } from "@/data/pandemics";
import { civilRights } from "@/data/civil-rights";
import { democracy } from "@/data/democracy";
import { mythologies } from "@/data/mythologies";
import { cameras } from "@/data/cameras";
import { decorativeStyles } from "@/data/decorative-arts";

// Categories with metadata
const categories = [
  { data: philosophers, prefix: "philo", name: "Philosophie", emoji: "🏛️" },
  { data: writers, prefix: "lit", name: "Littérature", emoji: "✍️" },
  { data: painters, prefix: "paint", name: "Peinture", emoji: "🎨" },
  { data: filmmakers, prefix: "film", name: "Cinéma", emoji: "🎬" },
  { data: architecturalStyles, prefix: "archi", name: "Architecture", emoji: "🏗️" },
  { data: composers, prefix: "music", name: "Musique classique", emoji: "🎼" },
  { data: inventions, prefix: "inv", name: "Inventions", emoji: "💡" },
  { data: astronomyItems, prefix: "astro", name: "Astronomie", emoji: "🔭" },
  { data: medicine, prefix: "med", name: "Médecine", emoji: "⚕️" },
  { data: explorations, prefix: "explo", name: "Explorations", emoji: "🧭" },
  { data: politicalMovements, prefix: "pol", name: "Mouvements politiques", emoji: "⚖️" },
  { data: mathematics, prefix: "math", name: "Mathématiques", emoji: "🔢" },
  { data: physics, prefix: "phys", name: "Physique", emoji: "⚛️" },
  { data: biology, prefix: "bio", name: "Biologie", emoji: "🧬" },
  { data: jazz, prefix: "jazz", name: "Jazz", emoji: "🎺" },
  { data: economics, prefix: "eco", name: "Économie", emoji: "📈" },
  { data: empires, prefix: "emp", name: "Empires", emoji: "👑" },
  { data: slavery, prefix: "slav", name: "Esclavage", emoji: "⛓️" },
  { data: psychology, prefix: "psy", name: "Psychologie", emoji: "🧠" },
  { data: wars, prefix: "war", name: "Guerres", emoji: "⚔️" },
  { data: moneyBanking, prefix: "money", name: "Monnaies", emoji: "💰" },
  { data: religions, prefix: "rel", name: "Religions", emoji: "🕊️" },
  { data: industrialRevolutions, prefix: "indus", name: "Révolutions industrielles", emoji: "🏭" },
  { data: pandemics, prefix: "pand", name: "Pandémies", emoji: "🦠" },
  { data: civilRights, prefix: "civil", name: "Droits civiques", emoji: "✊" },
  { data: democracy, prefix: "demo", name: "Démocratie", emoji: "🗳️" },
  { data: mythologies, prefix: "myth", name: "Mythologies", emoji: "🐉" },
  { data: cameras, prefix: "photo", name: "Photographie", emoji: "📷" },
  { data: decorativeStyles, prefix: "deco", name: "Arts décoratifs", emoji: "🪑" },
];

// Combine all items with prefixed IDs and category info
const allItems = categories.flatMap((cat) =>
  cat.data.map((item) => ({
    ...item,
    id: `${cat.prefix}-${item.id}`,
    category: cat.name,
    categoryEmoji: cat.emoji,
  }))
);

export default function ToutPage() {
  const [mode, setMode] = useState<"timeline" | "shuffle">("timeline");

  return (
    <div className="relative">
      {/* Mode toggle - fixed position */}
      <div className="fixed top-12 md:top-14 right-4 z-40 flex bg-background/95 backdrop-blur border rounded-lg p-1 shadow-sm">
        <Button
          variant={mode === "timeline" ? "secondary" : "ghost"}
          size="sm"
          onClick={() => setMode("timeline")}
          className="gap-1.5 h-8"
        >
          <ListOrdered className="h-4 w-4" />
          <span className="hidden sm:inline">Chrono</span>
        </Button>
        <Button
          variant={mode === "shuffle" ? "secondary" : "ghost"}
          size="sm"
          onClick={() => setMode("shuffle")}
          className="gap-1.5 h-8"
        >
          <Shuffle className="h-4 w-4" />
          <span className="hidden sm:inline">Shuffle</span>
        </Button>
      </div>

      {/* Content based on mode */}
      {mode === "timeline" ? (
        <Timeline items={allItems} title="Toutes les catégories" showCategory />
      ) : (
        <ShuffleView items={allItems} />
      )}
    </div>
  );
}
