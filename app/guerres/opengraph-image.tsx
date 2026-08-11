import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Guerres — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "⚔️",
    title: "Guerres",
    description: "Des guerres médiques à l'Ukraine",
    count: subjectCounts["/guerres"],
  });
}
