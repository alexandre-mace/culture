import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Explorations — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "🧭",
    title: "Explorations",
    description: "De Colomb à Armstrong",
    count: subjectCounts["/explorations"],
  });
}
