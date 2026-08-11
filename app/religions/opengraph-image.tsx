import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Religions — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "🕊️",
    title: "Religions",
    description: "De l'animisme à l'œcuménisme",
    count: subjectCounts["/religions"],
  });
}
