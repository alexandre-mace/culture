import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Inventions — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "💡",
    title: "Inventions",
    description: "De la roue à CRISPR",
    count: subjectCounts["/inventions"],
  });
}
