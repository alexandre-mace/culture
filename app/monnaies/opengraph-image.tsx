import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Monnaies & Banques — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "💰",
    title: "Monnaies & Banques",
    description: "Du florin au Bitcoin",
    count: subjectCounts["/monnaies"],
  });
}
