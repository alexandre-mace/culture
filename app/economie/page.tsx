import { Timeline } from "@/components/timeline";
import { economics } from "@/data/economics";

export default function EconomiePage() {
  return <Timeline items={economics} title="Economie" />;
}
