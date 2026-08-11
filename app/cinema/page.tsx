import { Timeline } from "@/components/timeline";
import { getContemporaries } from "@/lib/contemporaries";
import { filmmakers } from "@/data/filmmakers";

export default function CinemaPage() {
  return <Timeline items={filmmakers} title="Cinéma" contemporaries={getContemporaries(filmmakers, "/cinema")} />;
}
