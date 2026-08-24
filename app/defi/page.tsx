"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button, LinkButton } from "@/components/ui/button";
import { CalendarDays, Check, X, Share2, Flame, Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import { mulberry32, makeQuestion, type Question } from "@/lib/quiz-engine";

const QUESTIONS = 5;
const EPOCH = "2026-08-12"; // Culture #1

interface DefiRecord {
  score: number;
  marks: boolean[];
}

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function dayNumber(key: string): number {
  return Math.max(1, Math.round((new Date(key).getTime() - new Date(EPOCH).getTime()) / 86400000) + 1);
}

function loadHistory(): Record<string, DefiRecord> {
  try {
    return JSON.parse(localStorage.getItem("culture:defi") ?? "{}");
  } catch {
    return {};
  }
}

function computeStreak(history: Record<string, DefiRecord>, today: string): number {
  let streak = 0;
  const day = new Date(today);
  while (history[`${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, "0")}-${String(day.getDate()).padStart(2, "0")}`]) {
    streak++;
    day.setDate(day.getDate() - 1);
  }
  return streak;
}

function formatYear(year: number): string {
  const abs = Math.abs(year);
  return year < 0 ? `${abs} av. J.-C.` : `${year}`;
}

export default function DefiPage() {
  const [today, setToday] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [done, setDone] = useState<DefiRecord | null>(null);
  const [streak, setStreak] = useState(0);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [marks, setMarks] = useState<boolean[]>([]);
  const [chronoPicks, setChronoPicks] = useState<string[]>([]);
  const [choicePick, setChoicePick] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  // Generate today's shared grid after hydration (date is client-side)
  useEffect(() => {
    const key = todayKey();
    const seed = Number(key.replace(/-/g, ""));
    const rng = mulberry32(seed);
    const qs = Array.from({ length: QUESTIONS }, () => makeQuestion("mixte", rng));
    const history = loadHistory();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(key);
    setQuestions(qs);
    setDone(history[key] ?? null);
    setStreak(computeStreak(history, key));
  }, []);

  if (!today) return null;

  const number = dayNumber(today);
  const question = questions[questionIndex];

  const record = (correct: boolean) => {
    const nextMarks = [...marks, correct];
    setMarks(nextMarks);
    setRevealed(true);
    if (nextMarks.length === QUESTIONS) {
      const result: DefiRecord = {
        score: nextMarks.filter(Boolean).length,
        marks: nextMarks,
      };
      const history = loadHistory();
      history[today] = result;
      localStorage.setItem("culture:defi", JSON.stringify(history));
      setStreak(computeStreak(history, today));
    }
  };

  const advance = () => {
    if (marks.length === QUESTIONS) {
      setDone(loadHistory()[today]);
      return;
    }
    setQuestionIndex((i) => i + 1);
    setChronoPicks([]);
    setChoicePick(null);
    setRevealed(false);
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
      record(picks.every((id, i) => id === correctOrder[i]));
    }
  };

  const pickChoice = (id: string) => {
    if (revealed || !question || question.type === "chrono") return;
    setChoicePick(id);
    record(id === question.answer.id);
  };

  const share = async (result: DefiRecord) => {
    const emojis = result.marks.map((m) => (m ? "🟩" : "🟥")).join("");
    const text = `Culture #${number} — ${result.score}/${QUESTIONS}\n${emojis}\n${window.location.origin}/defi`;
    try {
      if (navigator.share) {
        await navigator.share({ text });
      } else {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // user cancelled the share sheet
    }
  };

  // ---- Result screen (already played or just finished) ----
  if (done) {
    return (
      <div className="container max-w-xl py-10 px-4 pb-24 md:pb-10 text-center">
        <CalendarDays className="h-12 w-12 mx-auto mb-4 text-primary" />
        <h1 className="text-2xl font-bold mb-1">Culture #{number}</h1>
        <p className="text-4xl font-bold my-4 tabular-nums">
          {done.score} / {QUESTIONS}
        </p>
        <p className="text-3xl mb-2 tracking-widest">
          {done.marks.map((m) => (m ? "🟩" : "🟥")).join("")}
        </p>
        {streak > 1 && (
          <p className="text-sm text-muted-foreground mb-6 flex items-center justify-center gap-1">
            <Flame className="h-4 w-4 text-orange-500" />
            {streak} jours d'affilée
          </p>
        )}
        <div className="grid grid-cols-1 gap-3 max-w-sm mx-auto mt-6">
          <Button size="lg" onClick={() => share(done)} className="gap-2">
            <Share2 className="h-4 w-4" />
            {copied ? "Copié !" : "Partager mon score"}
          </Button>
          <LinkButton size="lg" variant="outline" href="/quiz" className="gap-2">
            <Brain className="h-4 w-4" />
            Continuer en quiz libre
          </LinkButton>
        </div>
        <p className="text-xs text-muted-foreground mt-8">
          Nouvelle grille demain — la même pour tout le monde.
        </p>
      </div>
    );
  }

  if (!question) return null;

  // ---- Play screen ----
  return (
    <div className="container max-w-xl py-6 px-4 pb-24 md:pb-10">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-bold flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-primary" />
          Culture #{number}
        </h1>
        <span className="text-sm text-muted-foreground tabular-nums">
          {questionIndex + 1} / {QUESTIONS}
        </span>
      </div>
      <p className="text-lg tracking-widest mb-6">
        {Array.from({ length: QUESTIONS }, (_, i) =>
          i < marks.length ? (marks[i] ? "🟩" : "🟥") : "⬛"
        ).join("")}
      </p>

      {question.type === "chrono" ? (
        <>
          <h2 className="font-semibold mb-1">Remettez dans l’ordre chronologique</h2>
          <p className="text-sm text-muted-foreground mb-4">De la plus ancienne à la plus récente.</p>
          <div className="grid grid-cols-1 gap-2">
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
          <h2 className="font-semibold mb-1">
            {question.type === "citation" ? "Qui a dit ça ?" : "Qui suis-je ?"}
          </h2>
          <blockquote className="text-sm text-muted-foreground border-l-2 pl-3 my-4 leading-relaxed">
            {question.type === "citation" ? `« ${question.quote} »` : question.excerpt}
          </blockquote>
          <div className="grid grid-cols-1 gap-2">
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
        <div className="mt-6 flex justify-end">
          <Button onClick={advance}>
            {marks.length === QUESTIONS ? "Voir le résultat" : "Question suivante"}
          </Button>
        </div>
      )}
    </div>
  );
}
