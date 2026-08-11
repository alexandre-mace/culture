import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { mathematics } from "@/data/mathematics";

export default function MathematiquesPage() {
  return <Timeline items={mathematics} title="Mathématiques" contemporaries={getContemporaries(mathematics, "/mathematiques")} />;
}
