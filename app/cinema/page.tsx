import { Timeline } from "@/components/timeline";
import { filmmakers } from "@/data/filmmakers";

export default function CinemaPage() {
  return <Timeline items={filmmakers} title="Cinema" />;
}
