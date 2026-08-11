import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Psychologie — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "🧠",
    title: "Psychologie",
    description: "De Freud à Kahneman",
    count: subjectCounts["/psychologie"],
  });
}
