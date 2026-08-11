import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { cameras } from "@/data/cameras";

export default function PhotographiePage() {
  return <Timeline items={cameras} title="Photographie" itemType="topic" contemporaries={getContemporaries(cameras, "/photographie")} />;
}
