// Shared registry of every subject with its data, route and metadata.
// Used by /tout, the quiz and the "Pendant ce temps" cross-links.
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
import { epochs } from "@/data/epochs";
import { pandemics } from "@/data/pandemics";
import { civilRights } from "@/data/civil-rights";
import { democracy } from "@/data/democracy";
import { mythologies } from "@/data/mythologies";
import { cameras } from "@/data/cameras";
import { decorativeStyles } from "@/data/decorative-arts";

export interface RegistryItem {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  image?: string;
  nationality: string;
  movement: string;
  family?: string;
  influences?: string[];
  summary: string;
  mainWorks: string[];
  keyIdeas?: string[];
  itemType?: "person" | "topic";
}

export interface CategoryEntry {
  data: RegistryItem[];
  prefix: string;
  href: string;
  name: string;
  emoji: string;
  type: "person" | "topic";
}

export const categoryRegistry: CategoryEntry[] = [
  { data: philosophers, prefix: "philo", href: "/philosophie", name: "Philosophie", emoji: "🏛️", type: "person" },
  { data: writers, prefix: "lit", href: "/litterature", name: "Littérature", emoji: "✍️", type: "person" },
  { data: painters, prefix: "paint", href: "/peinture", name: "Peinture", emoji: "🎨", type: "person" },
  { data: filmmakers, prefix: "film", href: "/cinema", name: "Cinéma", emoji: "🎬", type: "person" },
  { data: architecturalStyles, prefix: "archi", href: "/architecture", name: "Architecture", emoji: "🏗️", type: "topic" },
  { data: composers, prefix: "music", href: "/musique-classique", name: "Musique classique", emoji: "🎼", type: "person" },
  { data: inventions, prefix: "inv", href: "/inventions", name: "Inventions", emoji: "💡", type: "topic" },
  { data: astronomyItems, prefix: "astro", href: "/astronomie", name: "Astronomie", emoji: "🔭", type: "person" },
  { data: medicine, prefix: "med", href: "/medecine", name: "Médecine", emoji: "⚕️", type: "person" },
  { data: explorations, prefix: "explo", href: "/explorations", name: "Explorations", emoji: "🧭", type: "topic" },
  { data: politicalMovements, prefix: "pol", href: "/mouvements-politiques", name: "Mouvements politiques", emoji: "⚖️", type: "topic" },
  { data: mathematics, prefix: "math", href: "/mathematiques", name: "Mathématiques", emoji: "🔢", type: "person" },
  { data: physics, prefix: "phys", href: "/physique", name: "Physique", emoji: "⚛️", type: "person" },
  { data: biology, prefix: "bio", href: "/biologie", name: "Biologie", emoji: "🧬", type: "person" },
  { data: jazz, prefix: "jazz", href: "/jazz", name: "Jazz", emoji: "🎺", type: "person" },
  { data: economics, prefix: "eco", href: "/economie", name: "Économie", emoji: "📈", type: "person" },
  { data: empires, prefix: "emp", href: "/empires", name: "Empires", emoji: "👑", type: "topic" },
  { data: slavery, prefix: "slav", href: "/esclavage", name: "Esclavage", emoji: "⛓️", type: "topic" },
  { data: psychology, prefix: "psy", href: "/psychologie", name: "Psychologie", emoji: "🧠", type: "person" },
  { data: wars, prefix: "war", href: "/guerres", name: "Guerres", emoji: "⚔️", type: "topic" },
  { data: moneyBanking, prefix: "money", href: "/monnaies", name: "Monnaies", emoji: "💰", type: "topic" },
  { data: religions, prefix: "rel", href: "/religions", name: "Religions", emoji: "🕊️", type: "topic" },
  { data: industrialRevolutions, prefix: "indus", href: "/revolutions-industrielles", name: "Révolutions industrielles", emoji: "🏭", type: "topic" },
  { data: pandemics, prefix: "pand", href: "/pandemies", name: "Pandémies", emoji: "🦠", type: "topic" },
  { data: epochs, prefix: "epoch", href: "/epoques", name: "Époques", emoji: "🦕", type: "topic" },
  { data: civilRights, prefix: "civil", href: "/droits-civiques", name: "Droits civiques", emoji: "✊", type: "topic" },
  { data: democracy, prefix: "demo", href: "/democratie", name: "Démocratie", emoji: "🗳️", type: "topic" },
  { data: mythologies, prefix: "myth", href: "/mythologies", name: "Mythologies", emoji: "🐉", type: "topic" },
  { data: cameras, prefix: "photo", href: "/photographie", name: "Photographie", emoji: "📷", type: "topic" },
  { data: decorativeStyles, prefix: "deco", href: "/arts-decoratifs", name: "Arts décoratifs", emoji: "🪑", type: "topic" },
];

// Every item with prefixed id and category metadata (as used by /tout)
export const allItems = categoryRegistry.flatMap((cat) =>
  cat.data.map((item) => ({
    ...item,
    id: `${cat.prefix}-${item.id}`,
    // influences reference ids of the same file: keep them consistent with the prefixed ids
    influences: item.influences?.map((id) => `${cat.prefix}-${id}`),
    category: cat.name,
    categoryEmoji: cat.emoji,
    itemType: item.itemType ?? cat.type,
  }))
);
