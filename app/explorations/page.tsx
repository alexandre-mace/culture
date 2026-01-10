import { Timeline } from "@/components/timeline";
import { explorations } from "@/data/explorations";

export default function ExplorationsPage() {
  return <Timeline items={explorations} title="Grandes explorations" />;
}
