import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Physique — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "⚛️",
    title: "Physique",
    description: "De Galilée à Hawking, les lois de l'univers",
    count: subjectCounts["/physique"],
  });
}
