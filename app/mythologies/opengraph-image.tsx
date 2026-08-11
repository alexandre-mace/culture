import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Mythologies — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "🐉",
    title: "Mythologies",
    description: "Des dieux grecs aux rêves aborigènes",
    count: subjectCounts["/mythologies"],
  });
}
