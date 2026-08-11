import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Mathématiques — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "🔢",
    title: "Mathématiques",
    description: "D'Euclide à Grothendieck",
    count: subjectCounts["/mathematiques"],
  });
}
