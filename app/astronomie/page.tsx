import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { astronomyItems } from "@/data/astronomy";

export default function AstronomiePage() {
  return <Timeline items={astronomyItems} title="Astronomie" contemporaries={getContemporaries(astronomyItems, "/astronomie")} />;
}
