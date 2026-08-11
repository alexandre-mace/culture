import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { civilRights } from "@/data/civil-rights";

export default function DroitsCiviquesPage() {
  return <Timeline items={civilRights} title="Droits civiques" itemType="topic" contemporaries={getContemporaries(civilRights, "/droits-civiques")} />;
}
