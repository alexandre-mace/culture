import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { jazz } from "@/data/jazz";

export default function JazzPage() {
  return <Timeline items={jazz} title="Jazz" contemporaries={getContemporaries(jazz, "/jazz")} />;
}
