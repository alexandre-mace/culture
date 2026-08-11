import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { moneyBanking } from "@/data/money-banking";

export default function MonnaiesPage() {
  return <Timeline items={moneyBanking} title="Monnaies & Banques" itemType="topic" contemporaries={getContemporaries(moneyBanking, "/monnaies")} />;
}
