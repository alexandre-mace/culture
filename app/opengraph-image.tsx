import { subjectOgImage, ogSize } from "@/lib/og";

export const alt = "Culture — Frises chronologiques interactives";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return subjectOgImage({
    emoji: "\ud83d\udcda",
    title: "Culture",
    description: "L'histoire des idées, des arts et des techniques",
  });
}
