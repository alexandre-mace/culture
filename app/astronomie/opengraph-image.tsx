import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Astronomie — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "🔭",
    title: "Astronomie",
    description: "De Babylone au télescope James Webb",
    count: subjectCounts["/astronomie"],
  });
}
