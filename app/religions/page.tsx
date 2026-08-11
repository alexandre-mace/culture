import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { religions } from "@/data/religions";

export default function ReligionsPage() {
  return <Timeline items={religions} title="Religions" itemType="topic" contemporaries={getContemporaries(religions, "/religions")} />;
}
