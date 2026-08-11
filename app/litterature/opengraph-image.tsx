import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Littérature — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "✍️",
    title: "Littérature",
    description: "D'Homère à García Márquez",
    count: subjectCounts["/litterature"],
  });
}
