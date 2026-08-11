"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Brain,
  ListOrdered,
  UserRoundSearch,
  RotateCcw,
  Check,
  X,
  Quote,
  CalendarDays,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  makeQuestion,
  quizPool,
  type Question,
} from "@/lib/quiz-engine";

const QUESTIONS_PER_RUN = 10;

type GameMode = "mixte" | "chrono" | "quisuisje" | "citation";

function formatYear(year: number): string {
  const abs = Math.abs(year);
  if (abs >= 10_000) return year < 0 ? `-${Math.round(abs / 1000)} ka` : `${Math.round(abs / 1000)} ka`;
  return year < 0 ? `${abs} av. J.-C.` : `${year}`;
}

export default function QuizPage() {
  const [mode, setMode] = useState<GameMode | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [finished, setFinished] = useState(false);

  // per-question state
  const [chronoPicks, setChronoPicks] = useState<string[]>([]);
  const [choicePick, setChoicePick] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);

  const start = (m: GameMode) => {
    setMode(m);
    setScore(0);
    setQuestionIndex(0);
    setFinished(false);
    nextQuestion(m);
  };

  const nextQuestion = (m: GameMode) => {
    setQuestion(makeQuestion(m, Math.random));
    setChronoPicks([]);
    setChoicePick(null);
    setRevealed(false);
  };

  const advance = () => {
    if (questionIndex + 1 >= QUESTIONS_PER_RUN) {
      setFinished(true);
      return;
    }
    setQuestionIndex((i) => i + 1);
    if (mode) nextQuestion(mode);
  };

  const pickChrono = (id: string) => {
    if (revealed || !question || question.type !== "chrono") return;
    if (chronoPicks.includes(id)) {
      setChronoPicks((p) => p.filter((x) => x !== id));
      return;
    }
    const picks = [...chronoPicks, id];
    setChronoPicks(picks);
    if (picks.length === question.items.length) {
      const correctOrder = [...question.items]
        .sort((a, b) => a.birthYear - b.birthYear)
        .map((item) => item.id);
      const correct = picks.every((id, i) => id === correctOrder[i]);
      setLastCorrect(correct);
      if (correct) setScore((s) => s + 1);
      setRevealed(true);
    }
  };

  const pickChoice = (id: string) => {
    if (revealed || !question || question.type === "chrono") return;
    setChoicePick(id);
    const correct = id === question.answer.id;
    setLastCorrect(correct);
    if (correct) setScore((s) => s + 1);
    setRevealed(true);
  };

  // ---- Screens ----

  if (!mode || finished) {
    return (
      <div className="container max-w-xl py-10 px-4 pb-24 md:pb-10 text-center">
        <Brain className="h-12 w-12 mx-auto mb-4 text-primary" />
        {finished ? (
          <>
            <h1 className="text-3xl font-bold mb-2">
              {score} / {QUESTIONS_PER_RUN}
            </h1>
            <p className="text-muted-foreground mb-8">
              {score >= 8
                ? "Impressionnant ! La chronologie n’a plus de secret pour vous."
                : score >= 5
                  ? "Pas mal du tout — encore quelques frises à explorer."
                  : "Les frises sont là pour réviser, courage !"}
            </p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-2">Quiz</h1>
            <p className="text-muted-foreground mb-8">
              Testez votre culture sur {QUESTIONS_PER_RUN} questions tirées des{" "}
              {quizPool.length} fiches.
            </p>
          </>
        )}
        <div className="grid gap-3 max-w-sm mx-auto">
          <Button size="lg" onClick={() => start("mixte")} className="gap-2">
            {finished ? <RotateCcw className="h-4 w-4" /> : <Brain className="h-4 w-4" />}
            {finished ? "Rejouer en mixte" : "Mode mixte"}
          </Button>
          <Button size="lg" variant="outline" onClick={() => start("chrono")} className="gap-2">
            <ListOrdered className="h-4 w-4" />
            Chronologie
          </Button>
          <Button size="lg" variant="outline" onClick={() => start("quisuisje")} className="gap-2">
            <UserRoundSearch className="h-4 w-4" />
            Qui suis-je ?
          </Button>
          <Button size="lg" variant="outline" onClick={() => start("citation")} className="gap-2">
            <Quote className="h-4 w-4" />
            Qui a dit ça ?
          </Button>
          <Button size="lg" variant="ghost" asChild className="gap-2 text-primary">
            <Link href="/defi">
              <CalendarDays className="h-4 w-4" />
              Défi du jour
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  if (!question) return null;

  return (
    <div className="container max-w-xl py-6 px-4 pb-24 md:pb-10">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground">
        <span className="tabular-nums">
          Question {questionIndex + 1} / {QUESTIONS_PER_RUN}
        </span>
        <span className="tabular-nums">Score : {score}</span>
      </div>

      {question.type === "chrono" ? (
        <>
          <h2 className="font-semibold text-lg mb-1">Remettez dans l’ordre chronologique</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Touchez les fiches de la plus ancienne à la plus récente.
          </p>
          <div className="grid gap-2">
            {question.items.map((item) => {
              const pickIndex = chronoPicks.indexOf(item.id);
              const correctOrder = [...question.items]
                .sort((a, b) => a.birthYear - b.birthYear)
                .map((i) => i.id);
              const correctPos = correctOrder.indexOf(item.id);
              const wasCorrect = revealed && pickIndex === correctPos;
              return (
                <button
                  key={item.id}
                  onClick={() => pickChrono(item.id)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg border p-3 text-left transition-all",
                    !revealed && pickIndex >= 0 && "border-primary bg-primary/5",
                    !revealed && pickIndex < 0 && "hover:border-primary/50",
                    revealed && (wasCorrect ? "border-green-500 bg-green-500/10" : "border-red-500 bg-red-500/10")
                  )}
                >
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold tabular-nums",
                      pickIndex >= 0 ? "bg-primary text-primary-foreground border-primary" : "text-muted-foreground"
                    )}
                  >
                    {revealed ? correctPos + 1 : pickIndex >= 0 ? pickIndex + 1 : "·"}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium truncate">
                      {item.categoryEmoji} {item.name}
                    </span>
                    {revealed && (
                      <span className="block text-xs text-muted-foreground">
                        {formatYear(item.birthYear)}
                        {item.deathYear ? ` - ${formatYear(item.deathYear)}` : ""}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-semibold text-lg mb-1">
            {question.type === "citation" ? "Qui a dit ça ?" : "Qui suis-je ?"}
          </h2>
          <blockquote className="text-sm text-muted-foreground border-l-2 pl-3 my-4 leading-relaxed">
            {question.type === "citation" ? `« ${question.quote} »` : question.excerpt}
          </blockquote>
          <div className="grid gap-2">
            {question.choices.map((choice) => {
              const isAnswer = choice.id === question.answer.id;
              const isPick = choice.id === choicePick;
              return (
                <button
                  key={choice.id}
                  onClick={() => pickChoice(choice.id)}
                  className={cn(
                    "flex items-center gap-2 rounded-lg border p-3 text-left font-medium transition-all",
                    !revealed && "hover:border-primary/50",
                    revealed && isAnswer && "border-green-500 bg-green-500/10",
                    revealed && isPick && !isAnswer && "border-red-500 bg-red-500/10"
                  )}
                >
                  <span className="flex-1">
                    {choice.categoryEmoji} {choice.name}
                  </span>
                  {revealed && isAnswer && <Check className="h-4 w-4 text-green-500" />}
                  {revealed && isPick && !isAnswer && <X className="h-4 w-4 text-red-500" />}
                </button>
              );
            })}
          </div>
        </>
      )}

      {revealed && (
        <div className="mt-6 flex items-center justify-between">
          <span
            className={cn("text-sm font-medium", lastCorrect ? "text-green-500" : "text-red-500")}
          >
            {lastCorrect ? "Bien joué !" : "Raté…"}
          </span>
          <Button onClick={advance}>
            {questionIndex + 1 >= QUESTIONS_PER_RUN ? "Voir le score" : "Question suivante"}
          </Button>
        </div>
      )}
    </div>
  );
}
