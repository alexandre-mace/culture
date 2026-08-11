import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { medicine } from "@/data/medicine";

export default function MedecinePage() {
  return <Timeline items={medicine} title="Médecine" contemporaries={getContemporaries(medicine, "/medecine")} />;
}
