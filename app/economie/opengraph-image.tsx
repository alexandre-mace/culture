import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Économie — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "📈",
    title: "Économie",
    description: "D'Adam Smith à Piketty",
    count: subjectCounts["/economie"],
  });
}
