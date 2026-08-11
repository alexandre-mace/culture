import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Photographie — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "📷",
    title: "Photographie",
    description: "Du daguerréotype au smartphone",
    count: subjectCounts["/photographie"],
  });
}
