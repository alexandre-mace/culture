import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Révolutions industrielles — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "🏭",
    title: "Révolutions industrielles",
    description: "De la vapeur à l'IA",
    count: subjectCounts["/revolutions-industrielles"],
  });
}
