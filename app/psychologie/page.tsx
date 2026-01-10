import { Timeline } from "@/components/timeline";
import { psychology } from "@/data/psychology";

export default function PsychologiePage() {
  return <Timeline items={psychology} title="Psychologie" />;
}
