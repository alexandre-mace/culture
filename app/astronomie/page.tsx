import { Timeline } from "@/components/timeline";
import { astronomyItems } from "@/data/astronomy";

export default function AstronomiePage() {
  return <Timeline items={astronomyItems} title="Astronomie" />;
}
