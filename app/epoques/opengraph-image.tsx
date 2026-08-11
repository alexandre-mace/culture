import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Époques — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "🦕",
    title: "Époques",
    description: "De la formation de la Terre à l'Anthropocène",
    count: subjectCounts["/epoques"],
  });
}
