import Link from "next/link";
import { Shuffle } from "lucide-react";
import { subjectCounts } from "@/lib/search-data";
import { SubjectProgress } from "@/components/subject-progress";
import { FavoritesLink } from "@/components/favorites-link";
import { PinnedSubjects } from "@/components/pinned-subjects";

const categories = [
  {
    name: "Sciences",
    emoji: "🔬",
    subjects: [
      {
        name: "Astronomie",
        href: "/astronomie",
        description: "De Babylone au télescope James Webb",
        emoji: "🔭",
      },
      {
        name: "Physique",
        href: "/physique",
        description: "De Galilée à Hawking, les lois de l'univers",
        emoji: "⚛️",
      },
      {
        name: "Mathématiques",
        href: "/mathematiques",
        description: "D'Euclide à Grothendieck",
        emoji: "🔢",
      },
      {
        name: "Biologie",
        href: "/biologie",
        description: "De Linné à CRISPR, la science du vivant",
        emoji: "🧬",
      },
      {
        name: "Médecine",
        href: "/medecine",
        description: "D'Hippocrate aux vaccins à ARN",
        emoji: "⚕️",
      },
      {
        name: "Inventions",
        href: "/inventions",
        description: "De la roue à CRISPR",
        emoji: "💡",
      },
    ],
  },
  {
    name: "Histoire",
    emoji: "📜",
    subjects: [
      {
        name: "Époques",
        href: "/epoques",
        description: "De la formation de la Terre à l'Anthropocène",
        emoji: "🦕",
      },
      {
        name: "Explorations",
        href: "/explorations",
        description: "De Colomb à Armstrong",
        emoji: "🧭",
      },
      {
        name: "Empires",
        href: "/empires",
        description: "De Rome aux États-Unis",
        emoji: "👑",
      },
      {
        name: "Guerres",
        href: "/guerres",
        description: "Des guerres médiques à l'Ukraine",
        emoji: "⚔️",
      },
      {
        name: "Esclavage",
        href: "/esclavage",
        description: "De l'Antiquité à l'abolition",
        emoji: "⛓️",
      },
      {
        name: "Pandémies",
        href: "/pandemies",
        description: "De la peste noire au COVID",
        emoji: "🦠",
      },
    ],
  },
  {
    name: "Arts",
    emoji: "🎨",
    subjects: [
      {
        name: "Philosophie",
        href: "/philosophie",
        description: "De Socrate à Sartre",
        emoji: "🏛️",
      },
      {
        name: "Littérature",
        href: "/litterature",
        description: "D'Homère à García Márquez",
        emoji: "✍️",
      },
      {
        name: "Peinture",
        href: "/peinture",
        description: "De Giotto à Bacon",
        emoji: "🎨",
      },
      {
        name: "Architecture",
        href: "/architecture",
        description: "De l'Égypte antique au durable",
        emoji: "🏗️",
      },
      {
        name: "Musique classique",
        href: "/musique-classique",
        description: "De Monteverdi à Glass",
        emoji: "🎼",
      },
      {
        name: "Jazz",
        href: "/jazz",
        description: "De Louis Armstrong à Esperanza Spalding",
        emoji: "🎺",
      },
      {
        name: "Photographie",
        href: "/photographie",
        description: "Du daguerréotype au smartphone",
        emoji: "📷",
      },
      {
        name: "Cinéma",
        href: "/cinema",
        description: "De Méliès à Bong Joon-ho",
        emoji: "🎬",
      },
      {
        name: "Arts décoratifs",
        href: "/arts-decoratifs",
        description: "Du Gothique au design contemporain",
        emoji: "🪑",
      },
    ],
  },
  {
    name: "Société",
    emoji: "🏛️",
    subjects: [
      {
        name: "Mouvements politiques",
        href: "/mouvements-politiques",
        description: "De la République romaine au populisme",
        emoji: "⚖️",
      },
      {
        name: "Démocratie",
        href: "/democratie",
        description: "D'Athènes au recul démocratique",
        emoji: "🗳️",
      },
      {
        name: "Droits civiques",
        href: "/droits-civiques",
        description: "De l'abolition à #MeToo",
        emoji: "✊",
      },
      {
        name: "Révolutions industrielles",
        href: "/revolutions-industrielles",
        description: "De la vapeur à l'IA",
        emoji: "🏭",
      },
      {
        name: "Économie",
        href: "/economie",
        description: "D'Adam Smith à Piketty",
        emoji: "📈",
      },
      {
        name: "Monnaies & Banques",
        href: "/monnaies",
        description: "Du florin au Bitcoin",
        emoji: "💰",
      },
      {
        name: "Psychologie",
        href: "/psychologie",
        description: "De Freud à Kahneman",
        emoji: "🧠",
      },
    ],
  },
  {
    name: "Croyances",
    emoji: "✨",
    subjects: [
      {
        name: "Religions",
        href: "/religions",
        description: "De l'animisme à l'œcuménisme",
        emoji: "🕊️",
      },
      {
        name: "Mythologies",
        href: "/mythologies",
        description: "Des dieux grecs aux rêves aborigènes",
        emoji: "🐉",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      {/* Hero compact */}
      <section className="flex flex-col items-center justify-center px-4 py-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          <span className="text-5xl sm:text-6xl block mb-3">📚</span>
          Culture
        </h1>
        <p className="mt-3 max-w-xl text-muted-foreground sm:text-lg">
          Explorez l’histoire des idées, des arts et des techniques à travers des frises chronologiques interactives.
        </p>
        <Link
          href="/tout"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
        >
          <Shuffle className="h-4 w-4" />
          Explorer toutes les catégories
        </Link>
        <FavoritesLink />
      </section>

      {/* Categories */}
      <section className="container pb-16 space-y-10">
        <PinnedSubjects />
        {categories.map((category) => (
          <div key={category.name}>
            <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
              <span>{category.emoji}</span>
              {category.name}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {category.subjects.map((subject) => (
                <Link
                  key={subject.href}
                  href={subject.href}
                  className="group flex items-center gap-3 rounded-lg border p-4 hover:border-primary/50 hover:bg-muted/50 transition-all"
                >
                  <span className="text-2xl">{subject.emoji}</span>
                  <div className="min-w-0">
                    <h3 className="font-medium group-hover:text-primary transition-colors truncate">
                      {subject.name}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {subject.description}
                    </p>
                  </div>
                  {subjectCounts[subject.href] && (
                    <span className="ml-auto shrink-0">
                      <SubjectProgress href={subject.href} total={subjectCounts[subject.href]} />
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
