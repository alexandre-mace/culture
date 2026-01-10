import { Timeline } from "@/components/timeline";
import { inventions } from "@/data/inventions";

export default function InventionsPage() {
  return <Timeline items={inventions} title="Inventions" />;
}
