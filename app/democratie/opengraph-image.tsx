import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Démocratie — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "🗳️",
    title: "Démocratie",
    description: "D'Athènes au recul démocratique",
    count: subjectCounts["/democratie"],
  });
}
