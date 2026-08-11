import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Mouvements politiques — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "⚖️",
    title: "Mouvements politiques",
    description: "De la République romaine au populisme",
    count: subjectCounts["/mouvements-politiques"],
  });
}
