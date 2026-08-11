import { Timeline } from "@/components/timeline";
import { epochs } from "@/data/epochs";

export default function EpoquesPage() {
  return <Timeline items={epochs} title="Époques & Préhistoire" itemType="topic" />;
}
