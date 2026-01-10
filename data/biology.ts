export interface BiologyItem {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  image?: string;
  nationality: string;
  movement: string;
  summary: string;
  mainWorks: string[];
}

export const biology: BiologyItem[] = [
  {
    id: "aristote-bio",
    name: "Aristote",
    birthYear: -384,
    deathYear: -322,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/220px-Aristotle_Altemps_Inv8575.jpg",
    nationality: "Grec",
    movement: "Histoire naturelle antique",
    summary:
      "Premier naturaliste systematique, il classe et decrit plus de 500 especes animales. Ses observations sur la reproduction et l'anatomie restent remarquables. Pere de la zoologie.",
    mainWorks: [
      "Histoire des animaux - classification zoologique",
      "Generation des animaux - embryologie",
      "Parties des animaux - anatomie comparee",
      "Echelle des etres (scala naturae)",
    ],
  },
  {
    id: "pline",
    name: "Pline l'Ancien",
    birthYear: 23,
    deathYear: 79,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Pliny_the_Elder.png/220px-Pliny_the_Elder.png",
    nationality: "Romain",
    movement: "Histoire naturelle antique",
    summary:
      "Son Histoire naturelle en 37 volumes est une encyclopedie monumentale des connaissances antiques sur la nature. Melange de science et de legendes, elle influence le Moyen Age.",
    mainWorks: [
      "Histoire naturelle - 37 volumes",
      "Compilation des savoirs naturalistes",
      "Descriptions de plantes et animaux",
      "Mort lors de l'eruption du Vesuve (79)",
    ],
  },
  {
    id: "linne",
    name: "Carl von Linne",
    birthYear: 1707,
    deathYear: 1778,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Carl_von_Linn%C3%A9.jpg/220px-Carl_von_Linn%C3%A9.jpg",
    nationality: "Suedois",
    movement: "Classification",
    summary:
      "Fondateur de la taxonomie moderne avec sa nomenclature binomiale (genre + espece). Son Systema Naturae classe tout le vivant. Chaque espece porte encore un nom latinise a la Linne.",
    mainWorks: [
      "Systema Naturae (1735)",
      "Nomenclature binomiale",
      "Classification hierarchique (regne, classe, ordre...)",
      "Description de milliers d'especes",
    ],
  },
  {
    id: "buffon",
    name: "Buffon",
    birthYear: 1707,
    deathYear: 1788,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Buffon_1707-1788.jpg/220px-Buffon_1707-1788.jpg",
    nationality: "Francais",
    movement: "Histoire naturelle",
    summary:
      "Son Histoire naturelle en 36 volumes est un best-seller des Lumieres. Intendant du Jardin du Roi, il propose une vision dynamique de la nature et suggere l'anciennete de la Terre.",
    mainWorks: [
      "Histoire naturelle (36 volumes, 1749-1788)",
      "Epoques de la nature - age de la Terre",
      "Direction du Jardin du Roi",
      "Style litteraire influent",
    ],
  },
  {
    id: "lamarck",
    name: "Jean-Baptiste Lamarck",
    birthYear: 1744,
    deathYear: 1829,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Jean-Baptiste_de_Lamarck.jpg/220px-Jean-Baptiste_de_Lamarck.jpg",
    nationality: "Francais",
    movement: "Transformisme",
    summary:
      "Premier a proposer une theorie coherente de l'evolution : les especes se transforment par l'usage et le desusage des organes. Fonde le terme 'biologie'. Precurseur meconnu de Darwin.",
    mainWorks: [
      "Philosophie zoologique (1809)",
      "Theorie du transformisme",
      "Heritage des caracteres acquis",
      "Invention du terme 'biologie'",
    ],
  },
  {
    id: "cuvier",
    name: "Georges Cuvier",
    birthYear: 1769,
    deathYear: 1832,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Georges_Cuvier_large.jpg/220px-Georges_Cuvier_large.jpg",
    nationality: "Francais",
    movement: "Anatomie comparee",
    summary:
      "Fondateur de la paleontologie et de l'anatomie comparee. Demontre l'extinction des especes grace aux fossiles. S'oppose au transformisme avec sa theorie des catastrophes.",
    mainWorks: [
      "Recherches sur les ossements fossiles",
      "Anatomie comparee",
      "Theorie des catastrophes",
      "Reconstruction d'animaux disparus",
    ],
  },
  {
    id: "humboldt-bio",
    name: "Alexander von Humboldt",
    birthYear: 1769,
    deathYear: 1859,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Alexander_von_Humboldt-selfportrait.jpg/220px-Alexander_von_Humboldt-selfportrait.jpg",
    nationality: "Allemand",
    movement: "Biogeographie",
    summary:
      "Pere de l'ecologie et de la biogeographie. Ses voyages en Amerique latine revelent les liens entre climat, altitude et vegetation. Vision holistique de la nature comme systeme interconnecte.",
    mainWorks: [
      "Voyage aux regions equinoxiales",
      "Cosmos - synthese des sciences naturelles",
      "Geographie des plantes",
      "Concept d'isotherme",
    ],
  },
  {
    id: "darwin",
    name: "Charles Darwin",
    birthYear: 1809,
    deathYear: 1882,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/220px-Charles_Darwin_seated_crop.jpg",
    nationality: "Anglais",
    movement: "Theorie de l'evolution",
    summary:
      "Revolutionne la biologie avec la theorie de l'evolution par selection naturelle. Le voyage du Beagle et l'Origine des especes (1859) changent notre comprehension du vivant et de notre place dans la nature.",
    mainWorks: [
      "L'Origine des especes (1859)",
      "Selection naturelle et adaptation",
      "La Filiation de l'homme (1871)",
      "Voyage du Beagle",
    ],
  },
  {
    id: "wallace",
    name: "Alfred Russel Wallace",
    birthYear: 1823,
    deathYear: 1913,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Alfred-Russel-Wallace-c1895.jpg/220px-Alfred-Russel-Wallace-c1895.jpg",
    nationality: "Anglais",
    movement: "Theorie de l'evolution",
    summary:
      "Co-decouvreur de la selection naturelle, independamment de Darwin. Naturaliste et biogeographe, il definit la ligne Wallace separant les faunes asiatique et australienne.",
    mainWorks: [
      "Theorie de la selection naturelle (1858)",
      "Distribution geographique des animaux",
      "Ligne Wallace (biogeographie)",
      "The Malay Archipelago",
    ],
  },
  {
    id: "mendel",
    name: "Gregor Mendel",
    birthYear: 1822,
    deathYear: 1884,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Gregor_Mendel_2.jpg/220px-Gregor_Mendel_2.jpg",
    nationality: "Autrichien",
    movement: "Genetique",
    summary:
      "Pere de la genetique, il decouvre les lois de l'heredite en croisant des pois. Ignore de son vivant, ses travaux sont redecouverts en 1900 et fondent la genetique moderne.",
    mainWorks: [
      "Lois de Mendel (heredite)",
      "Experiences sur les hybrides de pois",
      "Facteurs hereditaires (genes)",
      "Dominance et recessivite",
    ],
  },
  {
    id: "pasteur-bio",
    name: "Louis Pasteur",
    birthYear: 1822,
    deathYear: 1895,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Louis_Pasteur.jpg/220px-Louis_Pasteur.jpg",
    nationality: "Francais",
    movement: "Microbiologie",
    summary:
      "Fondateur de la microbiologie, il demontre que les micro-organismes causent fermentation et maladies. Refute la generation spontanee, invente la pasteurisation et les vaccins.",
    mainWorks: [
      "Theorie des germes",
      "Refutation de la generation spontanee",
      "Pasteurisation",
      "Vaccins (rage, charbon)",
    ],
  },
  {
    id: "haeckel",
    name: "Ernst Haeckel",
    birthYear: 1834,
    deathYear: 1919,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Ernst_Haeckel.jpg/220px-Ernst_Haeckel.jpg",
    nationality: "Allemand",
    movement: "Darwinisme",
    summary:
      "Principal promoteur du darwinisme en Allemagne. Invente le terme 'ecologie' et dessine de magnifiques planches de formes naturelles. Propose des arbres phylogenetiques.",
    mainWorks: [
      "Formes artistiques de la nature",
      "Invention du terme 'ecologie'",
      "Arbres phylogenetiques",
      "Loi biogenetique (recapitulation)",
    ],
  },
  {
    id: "morgan",
    name: "Thomas Hunt Morgan",
    birthYear: 1866,
    deathYear: 1945,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Thomas_Hunt_Morgan.jpg/220px-Thomas_Hunt_Morgan.jpg",
    nationality: "Americain",
    movement: "Genetique",
    summary:
      "Avec ses etudes sur la mouche drosophile, il localise les genes sur les chromosomes et decouvre la liaison genetique. Fonde la genetique experimentale moderne.",
    mainWorks: [
      "Genes sur les chromosomes",
      "Liaison genetique",
      "Mouche drosophile comme modele",
      "Prix Nobel de medecine (1933)",
    ],
  },
  {
    id: "crick-watson-bio",
    name: "Watson et Crick",
    birthYear: 1953,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/DNA_Model_Crick-Watson.jpg/220px-DNA_Model_Crick-Watson.jpg",
    nationality: "Americain / Anglais",
    movement: "Biologie moleculaire",
    summary:
      "Decouvrent la structure en double helice de l'ADN en 1953, avec les donnees de Rosalind Franklin. Cette decouverte fonde la biologie moleculaire et ouvre l'ere de la genetique moderne.",
    mainWorks: [
      "Structure de l'ADN en double helice",
      "Mecanisme de replication",
      "Prix Nobel de medecine (1962)",
      "Dogme central de la biologie moleculaire",
    ],
  },
  {
    id: "lorenz",
    name: "Konrad Lorenz",
    birthYear: 1903,
    deathYear: 1989,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Konrad_Lorenz.JPG/220px-Konrad_Lorenz.JPG",
    nationality: "Autrichien",
    movement: "Ethologie",
    summary:
      "Fondateur de l'ethologie moderne avec Tinbergen. Etudie les comportements innes, notamment l'empreinte chez les oiseaux. Ses oies cendrees le suivent comme leur mere.",
    mainWorks: [
      "Theorie de l'empreinte",
      "Comportements innes",
      "Il parlait avec les mammiferes, les oiseaux et les poissons",
      "Prix Nobel de medecine (1973)",
    ],
  },
  {
    id: "goodall",
    name: "Jane Goodall",
    birthYear: 1934,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Jane_Goodall_2015.jpg/220px-Jane_Goodall_2015.jpg",
    nationality: "Anglaise",
    movement: "Primatologie",
    summary:
      "Pionniere de l'etude des chimpanzes, elle revolutionne notre vision des grands singes. Decouvre leur usage d'outils et leur vie sociale complexe. Militante pour la conservation.",
    mainWorks: [
      "Etude des chimpanzes de Gombe (60+ ans)",
      "Usage d'outils chez les chimpanzes",
      "Personnalites et emotions animales",
      "Militantisme pour la conservation",
    ],
  },
  {
    id: "doudna",
    name: "Jennifer Doudna",
    birthYear: 1964,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Jennifer_Doudna_in_2019.jpg/220px-Jennifer_Doudna_in_2019.jpg",
    nationality: "Americaine",
    movement: "Biologie moleculaire",
    summary:
      "Co-decouvreuse de CRISPR-Cas9 avec Emmanuelle Charpentier. Cette technique d'edition genetique revolutionne la biologie et ouvre des perspectives therapeutiques et ethiques majeures.",
    mainWorks: [
      "CRISPR-Cas9 - ciseaux moleculaires",
      "Edition du genome",
      "Prix Nobel de chimie (2020)",
      "Debats ethiques sur la modification genetique",
    ],
  },
];
