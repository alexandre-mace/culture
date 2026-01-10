import { Timeline } from "@/components/timeline";
import { wars } from "@/data/wars";

export default function GuerresPage() {
  return <Timeline items={wars} title="Guerres majeures" />;
}
