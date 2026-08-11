import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { architecturalStyles } from "@/data/architecture";

export default function ArchitecturePage() {
  return <Timeline items={architecturalStyles} title="Architecture" itemType="topic" contemporaries={getContemporaries(architecturalStyles, "/architecture")} />;
}
