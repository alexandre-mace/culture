import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { physics } from "@/data/physics";

export default function PhysiquePage() {
  return <Timeline items={physics} title="Physique" contemporaries={getContemporaries(physics, "/physique")} />;
}
