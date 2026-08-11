import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { writers } from "@/data/writers";

export default function LitteraturePage() {
  return <Timeline items={writers} title="Littérature" contemporaries={getContemporaries(writers, "/litterature")} />;
}
