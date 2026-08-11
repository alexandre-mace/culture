import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { painters } from "@/data/painters";

export default function PeinturePage() {
  return <Timeline items={painters} title="Peinture" contemporaries={getContemporaries(painters, "/peinture")} />;
}
