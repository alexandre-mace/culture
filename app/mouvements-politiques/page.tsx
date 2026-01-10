import { Timeline } from "@/components/timeline";
import { politicalMovements } from "@/data/political-movements";

export default function MouvementsPolitiquesPage() {
  return <Timeline items={politicalMovements} title="Mouvements politiques" />;
}
