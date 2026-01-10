import { Timeline } from "@/components/timeline";
import { slavery } from "@/data/slavery";

export default function EsclavagePage() {
  return <Timeline items={slavery} title="Esclavage" />;
}
