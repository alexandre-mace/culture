import { Timeline } from "@/components/timeline";

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

// Categories with prefixes to ensure unique IDs
const categories = [
  { data: philosophers, prefix: "philo" },
  { data: writers, prefix: "lit" },
  { data: painters, prefix: "paint" },
  { data: filmmakers, prefix: "film" },
  { data: architecturalStyles, prefix: "archi" },
  { data: composers, prefix: "music" },
  { data: inventions, prefix: "inv" },
  { data: astronomyItems, prefix: "astro" },
  { data: medicine, prefix: "med" },
  { data: explorations, prefix: "explo" },
  { data: politicalMovements, prefix: "pol" },
  { data: mathematics, prefix: "math" },
  { data: physics, prefix: "phys" },
  { data: biology, prefix: "bio" },
  { data: jazz, prefix: "jazz" },
  { data: economics, prefix: "eco" },
  { data: empires, prefix: "emp" },
  { data: slavery, prefix: "slav" },
  { data: psychology, prefix: "psy" },
  { data: wars, prefix: "war" },
  { data: moneyBanking, prefix: "money" },
  { data: religions, prefix: "rel" },
  { data: industrialRevolutions, prefix: "indus" },
  // epochs excluded - geological timescales break the timeline
  { data: pandemics, prefix: "pand" },
  { data: civilRights, prefix: "civil" },
  { data: democracy, prefix: "demo" },
  { data: mythologies, prefix: "myth" },
  { data: cameras, prefix: "photo" },
  { data: decorativeStyles, prefix: "deco" },
];

// Combine all items with prefixed IDs to avoid duplicates
const allItems = categories.flatMap((cat) =>
  cat.data.map((item) => ({
    ...item,
    id: `${cat.prefix}-${item.id}`,
  }))
);

export default function ToutPage() {
  return <Timeline items={allItems} title="Toutes les catégories" randomOrder />;
}
