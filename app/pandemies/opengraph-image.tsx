import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Pandémies — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "🦠",
    title: "Pandémies",
    description: "De la peste noire au COVID",
    count: subjectCounts["/pandemies"],
  });
}
