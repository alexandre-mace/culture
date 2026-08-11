import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Philosophie — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "🏛️",
    title: "Philosophie",
    description: "De Socrate à Sartre",
    count: subjectCounts["/philosophie"],
  });
}
