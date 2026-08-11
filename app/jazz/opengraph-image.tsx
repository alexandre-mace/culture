import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Jazz — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "🎺",
    title: "Jazz",
    description: "De Louis Armstrong à Esperanza Spalding",
    count: subjectCounts["/jazz"],
  });
}
