import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { philosophers } from "@/data/philosophers";

export default function PhilosophiePage() {
  return <Timeline items={philosophers} title="Philosophie" contemporaries={getContemporaries(philosophers, "/philosophie")} />;
}
