import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { mythologies } from "@/data/mythologies";

export default function MythologiesPage() {
  return <Timeline items={mythologies} title="Mythologies" itemType="topic" contemporaries={getContemporaries(mythologies, "/mythologies")} />;
}
