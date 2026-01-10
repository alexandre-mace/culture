import { Timeline } from "@/components/timeline";
import { moneyBanking } from "@/data/money-banking";

export default function MonnaiesPage() {
  return <Timeline items={moneyBanking} title="Monnaies & Banques" />;
}
