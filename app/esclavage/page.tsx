import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { slavery } from "@/data/slavery";

export default function EsclavagePage() {
  return <Timeline items={slavery} title="Esclavage" itemType="topic" contemporaries={getContemporaries(slavery, "/esclavage")} />;
}
