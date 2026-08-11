import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { industrialRevolutions } from "@/data/industrial-revolutions";

export default function RevolutionsIndustriellesPage() {
  return <Timeline items={industrialRevolutions} title="Révolutions industrielles" itemType="topic" contemporaries={getContemporaries(industrialRevolutions, "/revolutions-industrielles")} />;
}
