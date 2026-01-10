import { Timeline } from "@/components/timeline";
import { medicine } from "@/data/medicine";

export default function MedecinePage() {
  return <Timeline items={medicine} title="Medecine" />;
}
