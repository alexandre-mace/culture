import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Arts décoratifs — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "🪑",
    title: "Arts décoratifs",
    description: "Du Gothique au design contemporain",
    count: subjectCounts["/arts-decoratifs"],
  });
}
