import { Timeline } from "@/components/timeline";
import { philosophers } from "@/data/philosophers";

export default function PhilosophiePage() {
  return <Timeline items={philosophers} title="Philosophie" />;
}
