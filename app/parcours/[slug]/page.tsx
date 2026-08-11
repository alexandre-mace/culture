import { notFound } from "next/navigation";
import { ParcoursViewer } from "@/components/parcours-viewer";
import { getParcours, getParcoursSlugs } from "@/lib/parcours";

export function generateStaticParams() {
  return getParcoursSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const parcours = getParcours(slug);
  return {
    title: parcours ? `${parcours.title} — Parcours Culture` : "Parcours — Culture",
    description: parcours?.description,
  };
}

export default async function ParcoursSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const parcours = getParcours(slug);
  if (!parcours || parcours.steps.length === 0) notFound();
  return <ParcoursViewer parcours={parcours} />;
}
