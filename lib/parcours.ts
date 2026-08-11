// Server-side resolution of guided tours: turns (href, id) steps into
// full item payloads for the client viewer.
import { categoryRegistry } from "@/lib/all-items";
import { parcoursList, type Parcours } from "@/lib/parcours-data";

export interface ResolvedStep {
  note: string;
  href: string; // subject route
  itemHref: string; // deep link, e.g. /physique?id=newton
  itemId: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  image?: string;
  summary: string;
  mainWorks: string[];
  itemType: "person" | "topic";
  category: string;
  emoji: string;
}

export interface ResolvedParcours {
  slug: string;
  title: string;
  emoji: string;
  description: string;
  steps: ResolvedStep[];
}

export function getParcoursSlugs(): string[] {
  return parcoursList.map((p) => p.slug);
}

export interface ParcoursSummary {
  slug: string;
  title: string;
  emoji: string;
  description: string;
  stepCount: number;
  subjectEmojis: string[];
}

export function getParcoursSummaries(): ParcoursSummary[] {
  return parcoursList.map((p) => ({
    slug: p.slug,
    title: p.title,
    emoji: p.emoji,
    description: p.description,
    stepCount: p.steps.length,
    subjectEmojis: [
      ...new Set(
        p.steps
          .map((s) => categoryRegistry.find((cat) => cat.href === s.href)?.emoji)
          .filter((e): e is string => Boolean(e))
      ),
    ],
  }));
}

export function getParcours(slug: string): ResolvedParcours | null {
  const parcours: Parcours | undefined = parcoursList.find((p) => p.slug === slug);
  if (!parcours) return null;

  const steps: ResolvedStep[] = [];
  for (const step of parcours.steps) {
    const cat = categoryRegistry.find((c) => c.href === step.href);
    const item = cat?.data.find((i) => i.id === step.id);
    if (!cat || !item) continue; // skip silently: a broken ref must not break the tour
    steps.push({
      note: step.note,
      href: step.href,
      itemHref: `${step.href}?id=${step.id}`,
      itemId: step.id,
      name: item.name,
      birthYear: item.birthYear,
      deathYear: item.deathYear,
      image: item.image,
      summary: item.summary,
      mainWorks: item.mainWorks,
      itemType: item.itemType ?? cat.type,
      category: cat.name,
      emoji: cat.emoji,
    });
  }
  return { slug: parcours.slug, title: parcours.title, emoji: parcours.emoji, description: parcours.description, steps };
}
