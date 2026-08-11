import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { pandemics } from "@/data/pandemics";

export default function PandemiesPage() {
  return <Timeline items={pandemics} title="Pandémies" itemType="topic" contemporaries={getContemporaries(pandemics, "/pandemies")} />;
}
