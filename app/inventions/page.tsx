import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { inventions } from "@/data/inventions";

export default function InventionsPage() {
  return <Timeline items={inventions} title="Inventions" itemType="topic" contemporaries={getContemporaries(inventions, "/inventions")} />;
}
