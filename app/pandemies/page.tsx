import { Timeline } from "@/components/timeline";
import { pandemics } from "@/data/pandemics";

export default function PandemiesPage() {
  return <Timeline items={pandemics} title="Pandemies" />;
}
