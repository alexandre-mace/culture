import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Architecture — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "🏗️",
    title: "Architecture",
    description: "De l'Égypte antique au durable",
    count: subjectCounts["/architecture"],
  });
}
