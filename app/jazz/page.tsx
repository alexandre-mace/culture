import { Timeline } from "@/components/timeline";
import { jazz } from "@/data/jazz";

export default function JazzPage() {
  return <Timeline items={jazz} title="Jazz" />;
}
