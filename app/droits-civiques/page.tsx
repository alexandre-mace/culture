import { Timeline } from "@/components/timeline";
import { civilRights } from "@/data/civil-rights";

export default function DroitsCiviquesPage() {
  return <Timeline items={civilRights} title="Droits civiques" />;
}
