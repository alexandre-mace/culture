import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { politicalMovements } from "@/data/political-movements";

export default function MouvementsPolitiquesPage() {
  return <Timeline items={politicalMovements} title="Mouvements politiques" itemType="topic" contemporaries={getContemporaries(politicalMovements, "/mouvements-politiques")} />;
}
