export interface BiologyItem {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  image?: string;
  nationality: string;
  movement: string;
  family?: string;
  summary: string;
  mainWorks: string[];
  itemType?: "person" | "topic";
}

export const biology: BiologyItem[] = [
  {
    id: "aristote-bio",
    name: "Aristote",
    birthYear: -384,
    deathYear: -322,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Aristoteles_Louvre.jpg/330px-Aristoteles_Louvre.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Grec",
    movement: "Histoire naturelle antique",
    family: "Histoire naturelle",
    summary:
      "Premier naturaliste systématique, il classe et décrit plus de 500 espèces animales. Ses observations sur la reproduction et l'anatomie restent remarquables. Père de la zoologie.",
    mainWorks: [
      "Histoire des animaux - classification zoologique",
      "Génération des animaux - embryologie",
      "Parties des animaux - anatomie comparée",
      "Échelle des êtres (scala naturae)",
    ],
  },
  {
    id: "pline",
    name: "Pline l'Ancien",
    birthYear: 23,
    deathYear: 79,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Grande_Illustrazione_del_Lombardo_Veneto_Vol_3_Plinio_Secondo_300dpi.jpg/330px-Grande_Illustrazione_del_Lombardo_Veneto_Vol_3_Plinio_Secondo_300dpi.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Romain",
    movement: "Histoire naturelle antique",
    family: "Histoire naturelle",
    summary:
      "Son Histoire naturelle en 37 volumes est une encyclopédie monumentale des connaissances antiques sur la nature. Mélange de science et de légendes, elle influence le Moyen Âge.",
    mainWorks: [
      "Histoire naturelle - 37 volumes",
      "Compilation des savoirs naturalistes",
      "Descriptions de plantes et animaux",
      "Mort lors de l'éruption du Vésuve (79)",
    ],
  },
  {
    id: "linne",
    name: "Carl von Linné",
    birthYear: 1707,
    deathYear: 1778,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Carl_von_Linn%C3%A9.jpg/330px-Carl_von_Linn%C3%A9.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Suédois",
    movement: "Classification",
    family: "Histoire naturelle",
    summary:
      "Fondateur de la taxonomie moderne avec sa nomenclature binomiale (genre + espèce). Son Systema Naturae classe tout le vivant. Chaque espèce porte encore un nom latinisé à la Linné.",
    mainWorks: [
      "Systema Naturae (1735)",
      "Nomenclature binomiale",
      "Classification hiérarchique (règne, classe, ordre...)",
      "Description de milliers d'espèces",
    ],
  },
  {
    id: "buffon",
    name: "Buffon",
    birthYear: 1707,
    deathYear: 1788,
    nationality: "Français",
    movement: "Histoire naturelle",
    family: "Histoire naturelle",
    summary:
      "Son Histoire naturelle en 36 volumes est un best-seller des Lumières. Intendant du Jardin du Roi, il propose une vision dynamique de la nature et suggère l'ancienneté de la Terre.",
    mainWorks: [
      "Histoire naturelle (36 volumes, 1749-1788)",
      "Époques de la nature - âge de la Terre",
      "Direction du Jardin du Roi",
      "Style littéraire influent",
    ],
  },
  {
    id: "lamarck",
    name: "Jean-Baptiste Lamarck",
    birthYear: 1744,
    deathYear: 1829,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Jean-Baptiste_de_Lamarck.jpg/330px-Jean-Baptiste_de_Lamarck.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Transformisme",
    family: "Naturalistes du XIXe",
    summary:
      "Premier à proposer une théorie cohérente de l'évolution : les espèces se transforment par l'usage et le désusage des organes. Fonde le terme 'biologie'. Précurseur méconnu de Darwin.",
    mainWorks: [
      "Philosophie zoologique (1809)",
      "Théorie du transformisme",
      "Héritage des caractères acquis",
      "Invention du terme 'biologie'",
    ],
  },
  {
    id: "cuvier",
    name: "Georges Cuvier",
    birthYear: 1769,
    deathYear: 1832,
    nationality: "Français",
    movement: "Anatomie comparée",
    family: "Naturalistes du XIXe",
    summary:
      "Fondateur de la paléontologie et de l'anatomie comparée. Démontre l'extinction des espèces grâce aux fossiles. S'oppose au transformisme avec sa théorie des catastrophes.",
    mainWorks: [
      "Recherches sur les ossements fossiles",
      "Anatomie comparée",
      "Théorie des catastrophes",
      "Reconstruction d'animaux disparus",
    ],
  },
  {
    id: "humboldt-bio",
    name: "Alexander von Humboldt",
    birthYear: 1769,
    deathYear: 1859,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/AvHumboldt.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "Allemand",
    movement: "Biogéographie",
    family: "Naturalistes du XIXe",
    summary:
      "Père de l'écologie et de la biogéographie. Ses voyages en Amérique latine révèlent les liens entre climat, altitude et végétation. Vision holistique de la nature comme système interconnecté.",
    mainWorks: [
      "Voyage aux régions équinoxiales",
      "Cosmos - synthèse des sciences naturelles",
      "Géographie des plantes",
      "Concept d'isotherme",
    ],
  },
  {
    id: "darwin",
    name: "Charles Darwin",
    birthYear: 1809,
    deathYear: 1882,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Charles_Darwin_portrait.jpg/330px-Charles_Darwin_portrait.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Anglais",
    movement: "Théorie de l'évolution",
    family: "Révolution darwinienne",
    summary:
      "Révolutionne la biologie avec la théorie de l'évolution par sélection naturelle. Le voyage du Beagle et l'Origine des espèces (1859) changent notre compréhension du vivant et de notre place dans la nature.",
    mainWorks: [
      "L'Origine des espèces (1859)",
      "Sélection naturelle et adaptation",
      "La Filiation de l'homme (1871)",
      "Voyage du Beagle",
    ],
  },
  {
    id: "wallace",
    name: "Alfred Russel Wallace",
    birthYear: 1823,
    deathYear: 1913,
    nationality: "Anglais",
    movement: "Théorie de l'évolution",
    family: "Révolution darwinienne",
    summary:
      "Co-découvreur de la sélection naturelle, indépendamment de Darwin. Naturaliste et biogéographe, il définit la ligne Wallace séparant les faunes asiatique et australienne.",
    mainWorks: [
      "Théorie de la sélection naturelle (1858)",
      "Distribution géographique des animaux",
      "Ligne Wallace (biogéographie)",
      "The Malay Archipelago",
    ],
  },
  {
    id: "mendel",
    name: "Gregor Mendel",
    birthYear: 1822,
    deathYear: 1884,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Gregor_Mendel_2.jpg/330px-Gregor_Mendel_2.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Autrichien",
    movement: "Génétique",
    family: "Génétique & microbiologie",
    summary:
      "Père de la génétique, il découvre les lois de l'hérédité en croisant des pois. Ignoré de son vivant, ses travaux sont redécouverts en 1900 et fondent la génétique moderne.",
    mainWorks: [
      "Lois de Mendel (hérédité)",
      "Expériences sur les hybrides de pois",
      "Facteurs héréditaires (gènes)",
      "Dominance et récessivité",
    ],
  },
  {
    id: "pasteur-bio",
    name: "Louis Pasteur",
    birthYear: 1822,
    deathYear: 1895,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Louis_Pasteur_%281822_-_1895%29%2C_microbiologist_and_chemist_Wellcome_V0026980.jpg/330px-Louis_Pasteur_%281822_-_1895%29%2C_microbiologist_and_chemist_Wellcome_V0026980.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Microbiologie",
    family: "Génétique & microbiologie",
    summary:
      "Fondateur de la microbiologie, il démontre que les micro-organismes causent fermentation et maladies. Réfute la génération spontanée, invente la pasteurisation et les vaccins.",
    mainWorks: [
      "Théorie des germes",
      "Réfutation de la génération spontanée",
      "Pasteurisation",
      "Vaccins (rage, charbon)",
    ],
  },
  {
    id: "haeckel",
    name: "Ernst Haeckel",
    birthYear: 1834,
    deathYear: 1919,
    nationality: "Allemand",
    movement: "Darwinisme",
    family: "Révolution darwinienne",
    summary:
      "Principal promoteur du darwinisme en Allemagne. Invente le terme 'écologie' et dessine de magnifiques planches de formes naturelles. Propose des arbres phylogénétiques.",
    mainWorks: [
      "Formes artistiques de la nature",
      "Invention du terme 'écologie'",
      "Arbres phylogénétiques",
      "Loi biogénétique (récapitulation)",
    ],
  },
  {
    id: "morgan",
    name: "Thomas Hunt Morgan",
    birthYear: 1866,
    deathYear: 1945,
    nationality: "Américain",
    movement: "Génétique",
    family: "Génétique & microbiologie",
    summary:
      "Avec ses études sur la mouche drosophile, il localise les gènes sur les chromosomes et découvre la liaison génétique. Fonde la génétique expérimentale moderne.",
    mainWorks: [
      "Gènes sur les chromosomes",
      "Liaison génétique",
      "Mouche drosophile comme modèle",
      "Prix Nobel de médecine (1933)",
    ],
  },
  {
    id: "crick-watson-bio",
    name: "Watson et Crick",
    birthYear: 1953,
    nationality: "Américain / Anglais",
    movement: "Biologie moléculaire",
    family: "Biologie contemporaine",
    summary:
      "Découvrent la structure en double hélice de l'ADN en 1953, avec les données de Rosalind Franklin. Cette découverte fonde la biologie moléculaire et ouvre l'ère de la génétique moderne.",
    mainWorks: [
      "Structure de l'ADN en double hélice",
      "Mécanisme de réplication",
      "Prix Nobel de médecine (1962)",
      "Dogme central de la biologie moléculaire",
    ],
  },
  {
    id: "lorenz",
    name: "Konrad Lorenz",
    birthYear: 1903,
    deathYear: 1989,
    nationality: "Autrichien",
    movement: "Éthologie",
    family: "Biologie contemporaine",
    summary:
      "Fondateur de l'éthologie moderne avec Tinbergen. Étudie les comportements innés, notamment l'empreinte chez les oiseaux. Ses oies cendrées le suivent comme leur mère.",
    mainWorks: [
      "Théorie de l'empreinte",
      "Comportements innés",
      "Il parlait avec les mammifères, les oiseaux et les poissons",
      "Prix Nobel de médecine (1973)",
    ],
  },
  {
    id: "goodall",
    name: "Jane Goodall",
    birthYear: 1934,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Deputy_Secretary_Higginbottom_Poses_for_a_Photo_With_Dr._Jane_Goodall_and_the_State_Department%27s_Global_Health_Diplomacy_Director_Jordan_in_Washington_%2822365513310%29_%282%29_%28cropped_2%29.jpg/330px-thumbnail.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Anglaise",
    movement: "Primatologie",
    family: "Biologie contemporaine",
    summary:
      "Pionnière de l'étude des chimpanzés, elle révolutionne notre vision des grands singes. Découvre leur usage d'outils et leur vie sociale complexe. Militante pour la conservation.",
    mainWorks: [
      "Étude des chimpanzés de Gombe (60+ ans)",
      "Usage d'outils chez les chimpanzés",
      "Personnalités et émotions animales",
      "Militantisme pour la conservation",
    ],
  },
  {
    id: "doudna",
    name: "Jennifer Doudna",
    birthYear: 1964,
    nationality: "Américaine",
    movement: "Biologie moléculaire",
    family: "Biologie contemporaine",
    summary:
      "Co-découvreuse de CRISPR-Cas9 avec Emmanuelle Charpentier. Cette technique d'édition génétique révolutionne la biologie et ouvre des perspectives thérapeutiques et éthiques majeures.",
    mainWorks: [
      "CRISPR-Cas9 - ciseaux moléculaires",
      "Édition du génome",
      "Prix Nobel de chimie (2020)",
      "Débats éthiques sur la modification génétique",
    ],
  },
];
