"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Flag, Route } from "lucide-react";
import { markRead } from "@/lib/user-data";
import type { ResolvedParcours } from "@/lib/parcours";

function formatYear(year: number): string {
  const abs = Math.abs(year);
  if (abs >= 10_000) return year < 0 ? `-${Math.round(abs / 1000)} ka` : `${Math.round(abs / 1000)} ka`;
  return year < 0 ? `${abs} av. J.-C.` : `${year}`;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function ParcoursViewer({ parcours }: { parcours: ResolvedParcours }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const step = parcours.steps[stepIndex];

  // steps count as read in the exploration progress
  useEffect(() => {
    if (step) markRead(step.href, step.itemId);
  }, [step]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") previous();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const previous = () => {
    if (finished) setFinished(false);
    else setStepIndex((i) => Math.max(0, i - 1));
  };
  const next = () => {
    if (stepIndex + 1 >= parcours.steps.length) setFinished(true);
    else setStepIndex((i) => i + 1);
  };

  if (finished) {
    return (
      <div className="container max-w-xl py-12 px-4 pb-24 md:pb-12 text-center">
        <Flag className="h-12 w-12 mx-auto mb-4 text-primary" />
        <h1 className="text-2xl font-bold mb-2">Parcours terminé !</h1>
        <p className="text-muted-foreground mb-8">
          Vous avez suivi « {parcours.title} » — {parcours.steps.length} étapes à travers{" "}
          l'histoire.
        </p>
        <div className="grid grid-cols-1 gap-3 max-w-sm mx-auto">
          <Button asChild size="lg" className="gap-2">
            <Link href="/parcours">
              <Route className="h-4 w-4" />
              Autres parcours
            </Link>
          </Button>
          <Button variant="outline" size="lg" onClick={() => { setFinished(false); setStepIndex(0); }}>
            Recommencer
          </Button>
        </div>
      </div>
    );
  }

  if (!step) return null;

  return (
    <div className="container max-w-2xl py-6 px-4 pb-24 md:pb-12">
      {/* Header */}
      <div className="mb-6">
        <Link
          href="/parcours"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Tous les parcours
        </Link>
        <h1 className="text-xl font-bold mt-1">
          {parcours.emoji} {parcours.title}
        </h1>
        {/* Progress */}
        <div className="mt-3 flex items-center gap-3">
          <div className="h-1.5 flex-1 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all"
              style={{ width: `${((stepIndex + 1) / parcours.steps.length) * 100}%` }}
            />
          </div>
          <span className="text-xs text-muted-foreground tabular-nums shrink-0">
            {stepIndex + 1} / {parcours.steps.length}
          </span>
        </div>
      </div>

      {/* Narrative note */}
      <div className="rounded-lg bg-primary/5 border border-primary/20 px-4 py-3 mb-6 text-sm leading-relaxed">
        {step.note}
      </div>

      {/* Item */}
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-16 w-16 border-2 border-primary/20">
          {step.image && <AvatarImage src={step.image} alt={step.name} />}
          <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">
            {getInitials(step.name)}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <h2 className="text-xl font-semibold truncate">{step.name}</h2>
          <p className="text-sm text-muted-foreground">
            {formatYear(step.birthYear)}
            {step.deathYear ? ` - ${formatYear(step.deathYear)}` : ""}
          </p>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap mb-4">
        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          <span>{step.emoji}</span>
          {step.category}
        </span>
        <Link
          href={step.itemHref}
          className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground hover:bg-accent transition-colors"
        >
          <ExternalLink className="h-3 w-3" />
          Voir dans la frise
        </Link>
      </div>

      <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed mb-5">
        {step.summary}
      </p>

      {step.mainWorks.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold mb-2 text-sm">
            {step.itemType === "person" ? "Œuvres principales" : "Points clés"}
          </h3>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {step.mainWorks.map((work, i) => (
              <li key={i}>{work}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between border-t pt-4">
        <Button variant="outline" onClick={previous} disabled={stepIndex === 0} className="gap-1.5">
          <ChevronLeft className="h-4 w-4" />
          Précédent
        </Button>
        <Button onClick={next} className="gap-1.5">
          {stepIndex + 1 >= parcours.steps.length ? "Terminer" : "Suivant"}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
