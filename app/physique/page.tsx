import { Timeline } from "@/components/timeline";
import { physics } from "@/data/physics";

export default function PhysiquePage() {
  return <Timeline items={physics} title="Physique" />;
}
