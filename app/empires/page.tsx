import { Timeline } from "@/components/timeline";
import { empires } from "@/data/empires";

export default function EmpiresPage() {
  return <Timeline items={empires} title="Empires" />;
}
