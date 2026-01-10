import Link from "next/link";

const subjects = [
  {
    name: "Philosophie",
    href: "/philosophie",
    description: "De Socrate a Sartre, explorez 2500 ans de pensee",
    count: 30,
    emoji: "🏛️",
  },
  {
    name: "Litterature",
    href: "/litterature",
    description: "D'Homere a Garcia Marquez, les grands ecrivains",
    count: 30,
    emoji: "✍️",
  },
  {
    name: "Peinture",
    href: "/peinture",
    description: "De Giotto a Bacon, l'histoire de l'art pictural",
    count: 30,
    emoji: "🎨",
  },
  {
    name: "Architecture",
    href: "/architecture",
    description: "De l'Egypte antique au durable, les grands styles",
    count: 15,
    emoji: "🏗️",
  },
  {
    name: "Musique classique",
    href: "/musique-classique",
    description: "De Monteverdi a Glass, les grands compositeurs",
    count: 24,
    emoji: "🎼",
  },
  {
    name: "Inventions",
    href: "/inventions",
    description: "De la roue a CRISPR, les innovations qui ont change le monde",
    count: 24,
    emoji: "💡",
  },
  {
    name: "Astronomie",
    href: "/astronomie",
    description: "De Babylone au telescope James Webb, l'exploration du cosmos",
    count: 18,
    emoji: "🔭",
  },
  {
    name: "Medecine",
    href: "/medecine",
    description: "D'Hippocrate aux vaccins ARN, l'histoire de la guerison",
    count: 20,
    emoji: "⚕️",
  },
  {
    name: "Grandes explorations",
    href: "/explorations",
    description: "De Colomb a Armstrong, les explorateurs qui ont repousse les frontieres",
    count: 25,
    emoji: "🧭",
  },
  {
    name: "Mouvements politiques",
    href: "/mouvements-politiques",
    description: "De la Republique romaine au populisme, les ideologies qui ont faconne le monde",
    count: 18,
    emoji: "⚖️",
  },
  {
    name: "Mathematiques",
    href: "/mathematiques",
    description: "D'Euclide a Grothendieck, les grands mathematiciens",
    count: 20,
    emoji: "🔢",
  },
  {
    name: "Physique",
    href: "/physique",
    description: "De Galilee a Hawking, les lois de l'univers",
    count: 21,
    emoji: "⚛️",
  },
  {
    name: "Biologie & Naturalisme",
    href: "/biologie",
    description: "De Linne a CRISPR, la science du vivant",
    count: 17,
    emoji: "🧬",
  },
  {
    name: "Jazz",
    href: "/jazz",
    description: "De Louis Armstrong a Esperanza Spalding, l'histoire du jazz",
    count: 21,
    emoji: "🎺",
  },
  {
    name: "Economie",
    href: "/economie",
    description: "D'Adam Smith a Piketty, les penseurs de l'economie",
    count: 19,
    emoji: "📈",
  },
  {
    name: "Empires",
    href: "/empires",
    description: "De Rome aux Etats-Unis, les grandes puissances de l'histoire",
    count: 22,
    emoji: "👑",
  },
  {
    name: "Esclavage",
    href: "/esclavage",
    description: "De l'Antiquite a nos jours, l'histoire de l'esclavage et de son abolition",
    count: 17,
    emoji: "⛓️",
  },
  {
    name: "Psychologie",
    href: "/psychologie",
    description: "De Freud a Kahneman, l'exploration de l'esprit humain",
    count: 18,
    emoji: "🧠",
  },
  {
    name: "Guerres majeures",
    href: "/guerres",
    description: "Des guerres mediques a l'Ukraine, les conflits qui ont change le monde",
    count: 20,
    emoji: "⚔️",
  },
  {
    name: "Monnaies & Banques",
    href: "/monnaies",
    description: "Du florin au Bitcoin, l'histoire de l'argent et des banques",
    count: 18,
    emoji: "💰",
  },
  {
    name: "Religions",
    href: "/religions",
    description: "De l'animisme a l'oecumenisme, l'histoire des croyances",
    count: 19,
    emoji: "🕊️",
  },
  {
    name: "Revolutions industrielles",
    href: "/revolutions-industrielles",
    description: "De la vapeur a l'IA, les transformations economiques",
    count: 16,
    emoji: "🏭",
  },
  {
    name: "Epoques & Prehistoire",
    href: "/epoques",
    description: "De la formation de la Terre a l'Anthropocene",
    count: 18,
    emoji: "🦕",
  },
  {
    name: "Pandemies",
    href: "/pandemies",
    description: "De la peste noire au COVID, les grandes epidemies",
    count: 14,
    emoji: "🦠",
  },
  {
    name: "Droits civiques",
    href: "/droits-civiques",
    description: "De l'abolition a #MeToo, les luttes pour l'egalite",
    count: 16,
    emoji: "✊",
  },
  {
    name: "Democratie",
    href: "/democratie",
    description: "D'Athenes au recul democratique, l'histoire du pouvoir du peuple",
    count: 15,
    emoji: "🗳️",
  },
  {
    name: "Mythologies",
    href: "/mythologies",
    description: "Des dieux grecs aux reves aborigenes, les recits fondateurs",
    count: 15,
    emoji: "🐉",
  },
  {
    name: "Photographie",
    href: "/photographie",
    description: "Du daguerreotype au smartphone, l'evolution technique",
    count: 16,
    emoji: "📷",
  },
  {
    name: "Cinema",
    href: "/cinema",
    description: "De Melies a Bong Joon-ho, les grands realisateurs",
    count: 30,
    emoji: "🎬",
  },
  {
    name: "Arts decoratifs",
    href: "/arts-decoratifs",
    description: "Du Gothique au design contemporain, les styles",
    count: 17,
    emoji: "🪑",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          <span className="text-6xl sm:text-7xl md:text-8xl block mb-4">📚</span>
          Culture
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Explorez l'histoire des idees, des arts et des techniques a travers des frises chronologiques interactives.
        </p>
      </section>

      {/* Subject cards */}
      <section className="container pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <Link
              key={subject.href}
              href={subject.href}
              className="group relative rounded-lg border p-6 hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-3xl">{subject.emoji}</span>
                  <h2 className="mt-3 font-semibold text-lg group-hover:text-primary transition-colors">
                    {subject.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {subject.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                {subject.count} entrees
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
