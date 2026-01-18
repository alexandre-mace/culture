import { DiscoverSwipe } from "@/components/discover-swipe";

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
import { epochs } from "@/data/epochs";
import { pandemics } from "@/data/pandemics";
import { civilRights } from "@/data/civil-rights";
import { democracy } from "@/data/democracy";
import { mythologies } from "@/data/mythologies";
import { cameras } from "@/data/cameras";
import { decorativeStyles } from "@/data/decorative-arts";

// Category metadata
const categories = [
  { data: philosophers, name: "Philosophie", emoji: "🏛️" },
  { data: writers, name: "Litterature", emoji: "✍️" },
  { data: painters, name: "Peinture", emoji: "🎨" },
  { data: filmmakers, name: "Cinema", emoji: "🎬" },
  { data: architecturalStyles, name: "Architecture", emoji: "🏗️" },
  { data: composers, name: "Musique classique", emoji: "🎼" },
  { data: inventions, name: "Inventions", emoji: "💡" },
  { data: astronomyItems, name: "Astronomie", emoji: "🔭" },
  { data: medicine, name: "Medecine", emoji: "⚕️" },
  { data: explorations, name: "Explorations", emoji: "🧭" },
  { data: politicalMovements, name: "Mouvements politiques", emoji: "⚖️" },
  { data: mathematics, name: "Mathematiques", emoji: "🔢" },
  { data: physics, name: "Physique", emoji: "⚛️" },
  { data: biology, name: "Biologie", emoji: "🧬" },
  { data: jazz, name: "Jazz", emoji: "🎺" },
  { data: economics, name: "Economie", emoji: "📈" },
  { data: empires, name: "Empires", emoji: "👑" },
  { data: slavery, name: "Esclavage", emoji: "⛓️" },
  { data: psychology, name: "Psychologie", emoji: "🧠" },
  { data: wars, name: "Guerres", emoji: "⚔️" },
  { data: moneyBanking, name: "Monnaies", emoji: "💰" },
  { data: religions, name: "Religions", emoji: "🕊️" },
  { data: industrialRevolutions, name: "Revolutions industrielles", emoji: "🏭" },
  { data: epochs, name: "Epoques", emoji: "🦕" },
  { data: pandemics, name: "Pandemies", emoji: "🦠" },
  { data: civilRights, name: "Droits civiques", emoji: "✊" },
  { data: democracy, name: "Democratie", emoji: "🗳️" },
  { data: mythologies, name: "Mythologies", emoji: "🐉" },
  { data: cameras, name: "Photographie", emoji: "📷" },
  { data: decorativeStyles, name: "Arts decoratifs", emoji: "🪑" },
];

// Combine all items with category metadata
const allItems = categories.flatMap((cat) =>
  cat.data.map((item) => ({
    ...item,
    keyIdeas: "keyIdeas" in item ? (item.keyIdeas as string[]) : undefined,
    category: cat.name,
    categoryEmoji: cat.emoji,
  }))
);

export default function DiscoverPage() {
  return <DiscoverSwipe items={allItems} />;
}
