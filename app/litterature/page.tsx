import { Timeline } from "@/components/timeline";
import { writers } from "@/data/writers";

export default function LitteraturePage() {
  return <Timeline items={writers} title="Litterature" />;
}
