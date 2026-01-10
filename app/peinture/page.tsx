import { Timeline } from "@/components/timeline";
import { painters } from "@/data/painters";

export default function PeinturePage() {
  return <Timeline items={painters} title="Peinture" />;
}
