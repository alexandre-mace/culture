import { Timeline } from "@/components/timeline";
import { mythologies } from "@/data/mythologies";

export default function MythologiesPage() {
  return <Timeline items={mythologies} title="Mythologies" />;
}
