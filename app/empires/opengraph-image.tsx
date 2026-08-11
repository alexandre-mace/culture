import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Empires — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "👑",
    title: "Empires",
    description: "De Rome aux États-Unis",
    count: subjectCounts["/empires"],
  });
}
