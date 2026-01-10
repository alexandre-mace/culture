import { Timeline } from "@/components/timeline";
import { architecturalStyles } from "@/data/architecture";

export default function ArchitecturePage() {
  return <Timeline items={architecturalStyles} title="Architecture" />;
}
