import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { empires } from "@/data/empires";

export default function EmpiresPage() {
  return <Timeline items={empires} title="Empires" itemType="topic" contemporaries={getContemporaries(empires, "/empires")} />;
}
