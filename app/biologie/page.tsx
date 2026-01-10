import { Timeline } from "@/components/timeline";
import { biology } from "@/data/biology";

export default function BiologiePage() {
  return <Timeline items={biology} title="Biologie & Naturalisme" />;
}
