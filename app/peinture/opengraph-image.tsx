import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Peinture — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "🎨",
    title: "Peinture",
    description: "De Giotto à Bacon",
    count: subjectCounts["/peinture"],
  });
}
