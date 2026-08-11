import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { decorativeStyles } from "@/data/decorative-arts";

export default function ArtsDecoratifsPage() {
  return <Timeline items={decorativeStyles} title="Arts décoratifs" itemType="topic" contemporaries={getContemporaries(decorativeStyles, "/arts-decoratifs")} />;
}
