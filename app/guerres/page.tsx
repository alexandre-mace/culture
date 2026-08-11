import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { wars } from "@/data/wars";

export default function GuerresPage() {
  return <Timeline items={wars} title="Guerres majeures" itemType="topic" contemporaries={getContemporaries(wars, "/guerres")} />;
}
