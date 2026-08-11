// Static JSON index used by the "Fiche du jour" card (fetched client-side,
// cached by the service worker). Prerendered at build time.
import { categoryRegistry } from "@/lib/all-items";

export const dynamic = "force-static";

export function GET() {
  const entries = categoryRegistry.flatMap((cat) =>
    cat.data
      .filter((item) => item.image && item.summary.length > 150 && item.birthYear > -10000)
      .map((item) => {
        const teaser = item.summary.split("\n")[0].split(". ")[0];
        return {
          name: item.name,
          href: `${cat.href}?id=${item.id}`,
          image: item.image,
          emoji: cat.emoji,
          category: cat.name,
          birthYear: item.birthYear,
          deathYear: item.deathYear ?? null,
          teaser: teaser.length > 180 ? teaser.slice(0, 180) + "…" : teaser + ".",
          quote: item.quotes?.[0] ?? null,
        };
      })
  );
  return Response.json(entries);
}
