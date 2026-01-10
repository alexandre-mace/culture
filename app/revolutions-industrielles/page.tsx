import { Timeline } from "@/components/timeline";
import { industrialRevolutions } from "@/data/industrial-revolutions";

export default function RevolutionsIndustriellesPage() {
  return <Timeline items={industrialRevolutions} title="Revolutions industrielles" />;
}
