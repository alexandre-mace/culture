import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Droits civiques — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "✊",
    title: "Droits civiques",
    description: "De l'abolition à #MeToo",
    count: subjectCounts["/droits-civiques"],
  });
}
