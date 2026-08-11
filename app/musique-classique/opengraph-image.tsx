import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Musique classique — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "🎼",
    title: "Musique classique",
    description: "De Monteverdi à Glass",
    count: subjectCounts["/musique-classique"],
  });
}
