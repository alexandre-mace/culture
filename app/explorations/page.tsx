import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { explorations } from "@/data/explorations";

export default function ExplorationsPage() {
  return <Timeline items={explorations} title="Grandes explorations" itemType="topic" contemporaries={getContemporaries(explorations, "/explorations")} />;
}
