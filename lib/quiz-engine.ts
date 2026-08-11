// Question generators shared by /quiz (random) and /defi (seeded, same for everyone).
import { allItems } from "@/lib/all-items";

export type Rng = () => number;

// Deterministic PRNG for the daily challenge
export function mulberry32(seed: number): Rng {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface QuizItem {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  summary: string;
  quotes?: string[];
  category?: string;
  categoryEmoji?: string;
}

export interface ChronoQuestion {
  type: "chrono";
  items: QuizItem[]; // shuffled, to be ordered by birthYear
}

export interface WhoQuestion {
  type: "quisuisje";
  answer: QuizItem;
  choices: QuizItem[]; // 4, shuffled, contains answer
  excerpt: string;
}

export interface QuoteQuestion {
  type: "citation";
  answer: QuizItem;
  choices: QuizItem[];
  quote: string;
}

export type Question = ChronoQuestion | WhoQuestion | QuoteQuestion;

export function shuffleWith<T>(array: T[], rng: Rng): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Candidates: historical range only, with a real summary
export const quizPool: QuizItem[] = allItems.filter(
  (item) => item.birthYear > -10000 && item.summary.length > 120
);

const quotePool: QuizItem[] = quizPool.filter((item) => (item.quotes ?? []).length > 0);

export function makeChronoQuestion(rng: Rng): ChronoQuestion {
  // draw items with birth years at least 15 years apart to avoid ambiguity
  for (let attempt = 0; attempt < 50; attempt++) {
    const drawn = shuffleWith(quizPool, rng).slice(0, 12);
    const picked: QuizItem[] = [];
    for (const item of drawn) {
      if (picked.every((p) => Math.abs(p.birthYear - item.birthYear) >= 15)) {
        picked.push(item);
        if (picked.length === 4) break;
      }
    }
    if (picked.length === 4) return { type: "chrono", items: shuffleWith(picked, rng) };
  }
  return { type: "chrono", items: shuffleWith(quizPool, rng).slice(0, 4) };
}

function maskName(text: string, name: string): string {
  let masked = text;
  for (const part of name.split(/[\s-]+/)) {
    if (part.length < 3) continue;
    masked = masked.replace(
      new RegExp(part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"),
      "▮▮▮"
    );
  }
  return masked;
}

function pickDistractors(answer: QuizItem, rng: Rng): QuizItem[] {
  const sameCategory = quizPool.filter(
    (item) => item.category === answer.category && item.id !== answer.id
  );
  const others = quizPool.filter(
    (item) => item.category !== answer.category && item.id !== answer.id
  );
  const distractors = shuffleWith(sameCategory, rng).slice(0, 3);
  if (distractors.length < 3) {
    distractors.push(...shuffleWith(others, rng).slice(0, 3 - distractors.length));
  }
  return distractors;
}

export function makeWhoQuestion(rng: Rng): WhoQuestion {
  const answer = quizPool[Math.floor(rng() * quizPool.length)];
  const sentences = answer.summary.split("\n")[0].split(". ");
  const excerpt = maskName(sentences.slice(0, 2).join(". "), answer.name);
  return {
    type: "quisuisje",
    answer,
    choices: shuffleWith([answer, ...pickDistractors(answer, rng)], rng),
    excerpt: excerpt.length > 340 ? excerpt.slice(0, 340) + "…" : excerpt,
  };
}

export function makeQuoteQuestion(rng: Rng): QuoteQuestion | null {
  if (quotePool.length < 8) return null;
  const answer = quotePool[Math.floor(rng() * quotePool.length)];
  const quotes = answer.quotes ?? [];
  return {
    type: "citation",
    answer,
    choices: shuffleWith([answer, ...pickDistractors(answer, rng)], rng),
    quote: quotes[Math.floor(rng() * quotes.length)],
  };
}

export function makeQuestion(mode: "mixte" | "chrono" | "quisuisje" | "citation", rng: Rng): Question {
  if (mode === "chrono") return makeChronoQuestion(rng);
  if (mode === "quisuisje") return makeWhoQuestion(rng);
  if (mode === "citation") return makeQuoteQuestion(rng) ?? makeWhoQuestion(rng);
  const roll = rng();
  if (roll < 0.4) return makeChronoQuestion(rng);
  if (roll < 0.75) return makeWhoQuestion(rng);
  return makeQuoteQuestion(rng) ?? makeWhoQuestion(rng);
}
