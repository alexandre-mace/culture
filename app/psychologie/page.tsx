import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { psychology } from "@/data/psychology";

export default function PsychologiePage() {
  return <Timeline items={psychology} title="Psychologie" contemporaries={getContemporaries(psychology, "/psychologie")} />;
}
