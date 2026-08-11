import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Biologie — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "🧬",
    title: "Biologie",
    description: "De Linné à CRISPR, la science du vivant",
    count: subjectCounts["/biologie"],
  });
}
