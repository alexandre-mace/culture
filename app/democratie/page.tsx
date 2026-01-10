import { Timeline } from "@/components/timeline";
import { democracy } from "@/data/democracy";

export default function DemocratiePage() {
  return <Timeline items={democracy} title="Democratie" />;
}
