// "Pendant ce temps…" — for each item of a subject, find who/what existed at the
// same time in the OTHER subjects. Computed server-side at build, passed to the
// Timeline as a small map so client bundles never carry the whole dataset.
import { categoryRegistry, type RegistryItem } from "@/lib/all-items";

export interface ContemporaryRef {
  name: string;
  href: string; // full link, e.g. /peinture?id=monet
  emoji: string;
  category: string;
}

const MAX_RESULTS = 6;
// Geological/prehistoric spans make "contemporaries" meaningless
const OLDEST_MEANINGFUL_YEAR = -10000;

function span(item: RegistryItem): [number, number] {
  // topics usually have an end date; people without one get a plausible lifespan
  return [item.birthYear, item.deathYear ?? item.birthYear + 80];
}

export function getContemporaries(
  items: RegistryItem[],
  selfHref: string
): Record<string, ContemporaryRef[]> {
  const candidates = categoryRegistry
    .filter((cat) => cat.href !== selfHref)
    .flatMap((cat) =>
      cat.data
        .filter((item) => item.birthYear >= OLDEST_MEANINGFUL_YEAR)
        .map((item) => ({
          item,
          ref: {
            name: item.name,
            href: `${cat.href}?id=${item.id}`,
            emoji: cat.emoji,
            category: cat.name,
          },
        }))
    );

  const result: Record<string, ContemporaryRef[]> = {};
  for (const item of items) {
    if (item.birthYear < OLDEST_MEANINGFUL_YEAR) continue;
    const [start, end] = span(item);

    const overlapping = candidates
      .filter(({ item: other }) => {
        // same figure can exist in several subjects (e.g. Descartes in maths & philosophy)
        if (other.name === item.name) return false;
        const [oStart, oEnd] = span(other);
        return oStart <= end && oEnd >= start;
      })
      .sort(
        (a, b) =>
          Math.abs(a.item.birthYear - item.birthYear) -
          Math.abs(b.item.birthYear - item.birthYear)
      );

    // at most one per category, closest birth years first
    const picked: ContemporaryRef[] = [];
    const usedCategories = new Set<string>();
    for (const { ref } of overlapping) {
      if (usedCategories.has(ref.category)) continue;
      usedCategories.add(ref.category);
      picked.push(ref);
      if (picked.length >= MAX_RESULTS) break;
    }
    if (picked.length > 0) result[item.id] = picked;
  }
  return result;
}
