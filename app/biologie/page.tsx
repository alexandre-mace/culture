import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { biology } from "@/data/biology";

export default function BiologiePage() {
  return <Timeline items={biology} title="Biologie & Naturalisme" contemporaries={getContemporaries(biology, "/biologie")} />;
}
