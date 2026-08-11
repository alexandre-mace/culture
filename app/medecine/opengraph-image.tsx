import { subjectOgImage, ogSize } from "@/lib/og";
import { subjectCounts } from "@/lib/search-data";

export const alt = "Médecine — Culture";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "⚕️",
    title: "Médecine",
    description: "D'Hippocrate aux vaccins à ARN",
    count: subjectCounts["/medecine"],
  });
}
