import { Timeline } from "@/components/timeline";
import { religions } from "@/data/religions";

export default function ReligionsPage() {
  return <Timeline items={religions} title="Religions" />;
}
