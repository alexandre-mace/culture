// Centralized search data for global search functionality
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

// Navigation categories with their routes
export const navigationCategories = [
  {
    name: "Sciences",
    items: [
      { name: "Astronomie", href: "/astronomie" },
      { name: "Physique", href: "/physique" },
      { name: "Mathematiques", href: "/mathematiques" },
      { name: "Biologie", href: "/biologie" },
      { name: "Medecine", href: "/medecine" },
      { name: "Inventions", href: "/inventions" },
    ],
  },
  {
    name: "Histoire",
    items: [
      { name: "Epoques", href: "/epoques" },
      { name: "Explorations", href: "/explorations" },
      { name: "Empires", href: "/empires" },
      { name: "Guerres", href: "/guerres" },
      { name: "Esclavage", href: "/esclavage" },
      { name: "Pandemies", href: "/pandemies" },
    ],
  },
  {
    name: "Arts",
    items: [
      { name: "Philosophie", href: "/philosophie" },
      { name: "Litterature", href: "/litterature" },
      { name: "Peinture", href: "/peinture" },
      { name: "Architecture", href: "/architecture" },
      { name: "Musique classique", href: "/musique-classique" },
      { name: "Jazz", href: "/jazz" },
      { name: "Photographie", href: "/photographie" },
      { name: "Cinema", href: "/cinema" },
      { name: "Arts decoratifs", href: "/arts-decoratifs" },
    ],
  },
  {
    name: "Societe",
    items: [
      { name: "Mouvements politiques", href: "/mouvements-politiques" },
      { name: "Democratie", href: "/democratie" },
      { name: "Droits civiques", href: "/droits-civiques" },
      { name: "Revolutions industrielles", href: "/revolutions-industrielles" },
      { name: "Economie", href: "/economie" },
      { name: "Monnaies & Banques", href: "/monnaies" },
      { name: "Psychologie", href: "/psychologie" },
    ],
  },
  {
    name: "Croyances",
    items: [
      { name: "Religions", href: "/religions" },
      { name: "Mythologies", href: "/mythologies" },
    ],
  },
];

// Data categories with their data and routes
const dataCategories = [
  { data: philosophers, href: "/philosophie", name: "Philosophie" },
  { data: writers, href: "/litterature", name: "Litterature" },
  { data: painters, href: "/peinture", name: "Peinture" },
  { data: filmmakers, href: "/cinema", name: "Cinema" },
  { data: architecturalStyles, href: "/architecture", name: "Architecture" },
  { data: composers, href: "/musique-classique", name: "Musique classique" },
  { data: inventions, href: "/inventions", name: "Inventions" },
  { data: astronomyItems, href: "/astronomie", name: "Astronomie" },
  { data: medicine, href: "/medecine", name: "Medecine" },
  { data: explorations, href: "/explorations", name: "Explorations" },
  { data: politicalMovements, href: "/mouvements-politiques", name: "Mouvements politiques" },
  { data: mathematics, href: "/mathematiques", name: "Mathematiques" },
  { data: physics, href: "/physique", name: "Physique" },
  { data: biology, href: "/biologie", name: "Biologie" },
  { data: jazz, href: "/jazz", name: "Jazz" },
  { data: economics, href: "/economie", name: "Economie" },
  { data: empires, href: "/empires", name: "Empires" },
  { data: slavery, href: "/esclavage", name: "Esclavage" },
  { data: psychology, href: "/psychologie", name: "Psychologie" },
  { data: wars, href: "/guerres", name: "Guerres" },
  { data: moneyBanking, href: "/monnaies", name: "Monnaies" },
  { data: religions, href: "/religions", name: "Religions" },
  { data: industrialRevolutions, href: "/revolutions-industrielles", name: "Revolutions industrielles" },
  { data: epochs, href: "/epoques", name: "Epoques" },
  { data: pandemics, href: "/pandemies", name: "Pandemies" },
  { data: civilRights, href: "/droits-civiques", name: "Droits civiques" },
  { data: democracy, href: "/democratie", name: "Democratie" },
  { data: mythologies, href: "/mythologies", name: "Mythologies" },
  { data: cameras, href: "/photographie", name: "Photographie" },
  { data: decorativeStyles, href: "/arts-decoratifs", name: "Arts decoratifs" },
];

// Category name to route mapping
export const categoryRoutes: Record<string, string> = Object.fromEntries(
  dataCategories.map((cat) => [cat.name, cat.href])
);

// All searchable items with their routes
export interface SearchItem {
  id: string;
  name: string;
  category: string;
  href: string;
}

export const searchItems: SearchItem[] = dataCategories.flatMap((cat) =>
  cat.data.map((item) => ({
    id: item.id,
    name: item.name,
    category: cat.name,
    href: `${cat.href}?id=${item.id}`,
  }))
);
