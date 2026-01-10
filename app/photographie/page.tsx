import { Timeline } from "@/components/timeline";
import { cameras } from "@/data/cameras";

export default function PhotographiePage() {
  return <Timeline items={cameras} title="Photographie" />;
}
