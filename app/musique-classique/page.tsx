import { Timeline } from "@/components/timeline";
import { composers } from "@/data/classical-music";

export default function MusiqueClassiquePage() {
  return <Timeline items={composers} title="Musique classique" />;
}
