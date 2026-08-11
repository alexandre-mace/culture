import Link from "next/link";
import { Route } from "lucide-react";
import { getParcoursSummaries } from "@/lib/parcours";

export const metadata = {
  title: "Parcours guidés — Culture",
  description: "Des visites guidées à travers les frises : suivez le fil de l'histoire.",
};

export default function ParcoursPage() {
  const summaries = getParcoursSummaries();

  return (
    <div className="container max-w-3xl py-8 px-4 pb-24 md:pb-8">
      <h1 className="text-2xl font-bold mb-1 flex items-center gap-2">
        <Route className="h-6 w-6 text-primary" />
        Parcours guidés
      </h1>
      <p className="text-sm text-muted-foreground mb-8">
        Des visites racontées à travers les frises — suivez le fil, une fiche à la fois.
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {summaries.map((parcours) => (
          <Link
            key={parcours.slug}
            href={`/parcours/${parcours.slug}`}
            className="group rounded-lg border p-4 hover:border-primary/50 hover:bg-muted/50 transition-all"
          >
            <div className="text-3xl mb-2">{parcours.emoji}</div>
            <h2 className="font-semibold group-hover:text-primary transition-colors">
              {parcours.title}
            </h2>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {parcours.description}
            </p>
            <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
              <span>{parcours.subjectEmojis.join(" ")}</span>
              <span className="tabular-nums">{parcours.stepCount} étapes</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
