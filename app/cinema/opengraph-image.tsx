import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Cinéma — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "🎬",
    title: "Cinéma",
    description: "De Méliès à Bong Joon-ho",
    count: subjectCounts["/cinema"],
  });
}
