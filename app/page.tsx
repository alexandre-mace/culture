import Link from "next/link";
import { Sparkles } from "lucide-react";

const categories = [
  {
    name: "Sciences",
    emoji: "🔬",
    subjects: [
      {
        name: "Astronomie",
        href: "/astronomie",
        description: "De Babylone au telescope James Webb",
        emoji: "🔭",
      },
      {
        name: "Physique",
        href: "/physique",
        description: "De Galilee a Hawking, les lois de l'univers",
        emoji: "⚛️",
      },
      {
        name: "Mathematiques",
        href: "/mathematiques",
        description: "D'Euclide a Grothendieck",
        emoji: "🔢",
      },
      {
        name: "Biologie",
        href: "/biologie",
        description: "De Linne a CRISPR, la science du vivant",
        emoji: "🧬",
      },
      {
        name: "Medecine",
        href: "/medecine",
        description: "D'Hippocrate aux vaccins ARN",
        emoji: "⚕️",
      },
      {
        name: "Inventions",
        href: "/inventions",
        description: "De la roue a CRISPR",
        emoji: "💡",
      },
    ],
  },
  {
    name: "Histoire",
    emoji: "📜",
    subjects: [
      {
        name: "Epoques",
        href: "/epoques",
        description: "De la formation de la Terre a l'Anthropocene",
        emoji: "🦕",
      },
      {
        name: "Explorations",
        href: "/explorations",
        description: "De Colomb a Armstrong",
        emoji: "🧭",
      },
      {
        name: "Empires",
        href: "/empires",
        description: "De Rome aux Etats-Unis",
        emoji: "👑",
      },
      {
        name: "Guerres",
        href: "/guerres",
        description: "Des guerres mediques a l'Ukraine",
        emoji: "⚔️",
      },
      {
        name: "Esclavage",
        href: "/esclavage",
        description: "De l'Antiquite a l'abolition",
        emoji: "⛓️",
      },
      {
        name: "Pandemies",
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
        description: "De Socrate a Sartre",
        emoji: "🏛️",
      },
      {
        name: "Litterature",
        href: "/litterature",
        description: "D'Homere a Garcia Marquez",
        emoji: "✍️",
      },
      {
        name: "Peinture",
        href: "/peinture",
        description: "De Giotto a Bacon",
        emoji: "🎨",
      },
      {
        name: "Architecture",
        href: "/architecture",
        description: "De l'Egypte antique au durable",
        emoji: "🏗️",
      },
      {
        name: "Musique classique",
        href: "/musique-classique",
        description: "De Monteverdi a Glass",
        emoji: "🎼",
      },
      {
        name: "Jazz",
        href: "/jazz",
        description: "De Louis Armstrong a Esperanza Spalding",
        emoji: "🎺",
      },
      {
        name: "Photographie",
        href: "/photographie",
        description: "Du daguerreotype au smartphone",
        emoji: "📷",
      },
      {
        name: "Cinema",
        href: "/cinema",
        description: "De Melies a Bong Joon-ho",
        emoji: "🎬",
      },
      {
        name: "Arts decoratifs",
        href: "/arts-decoratifs",
        description: "Du Gothique au design contemporain",
        emoji: "🪑",
      },
    ],
  },
  {
    name: "Societe",
    emoji: "🏛️",
    subjects: [
      {
        name: "Mouvements politiques",
        href: "/mouvements-politiques",
        description: "De la Republique romaine au populisme",
        emoji: "⚖️",
      },
      {
        name: "Democratie",
        href: "/democratie",
        description: "D'Athenes au recul democratique",
        emoji: "🗳️",
      },
      {
        name: "Droits civiques",
        href: "/droits-civiques",
        description: "De l'abolition a #MeToo",
        emoji: "✊",
      },
      {
        name: "Revolutions industrielles",
        href: "/revolutions-industrielles",
        description: "De la vapeur a l'IA",
        emoji: "🏭",
      },
      {
        name: "Economie",
        href: "/economie",
        description: "D'Adam Smith a Piketty",
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
        description: "De Freud a Kahneman",
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
        description: "De l'animisme a l'oecumenisme",
        emoji: "🕊️",
      },
      {
        name: "Mythologies",
        href: "/mythologies",
        description: "Des dieux grecs aux reves aborigenes",
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
          Explorez l'histoire des idees, des arts et des techniques a travers des frises chronologiques interactives.
        </p>
        <Link
          href="/discover"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
        >
          <Sparkles className="h-4 w-4" />
          Decouvrir au hasard
        </Link>
      </section>

      {/* Categories */}
      <section className="container pb-16 space-y-10">
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
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
