import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { democracy } from "@/data/democracy";

export default function DemocratiePage() {
  return <Timeline items={democracy} title="Démocratie" itemType="topic" contemporaries={getContemporaries(democracy, "/democratie")} />;
}
