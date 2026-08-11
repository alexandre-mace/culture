import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { economics } from "@/data/economics";

export default function EconomiePage() {
  return <Timeline items={economics} title="Économie" contemporaries={getContemporaries(economics, "/economie")} />;
}
