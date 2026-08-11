import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { composers } from "@/data/classical-music";

export default function MusiqueClassiquePage() {
  return <Timeline items={composers} title="Musique classique" contemporaries={getContemporaries(composers, "/musique-classique")} />;
}
