export interface PsychologyItem {
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

export const psychology: PsychologyItem[] = [
  {
    id: "wundt",
    name: "Wilhelm Wundt",
    birthYear: 1832,
    deathYear: 1920,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Wilhelm_Wundt.jpg/220px-Wilhelm_Wundt.jpg",
    nationality: "Allemand",
    movement: "Psychologie experimentale",
    summary:
      "Pere de la psychologie scientifique, il fonde le premier laboratoire de psychologie experimentale a Leipzig en 1879. Separe la psychologie de la philosophie.",
    mainWorks: [
      "Premier laboratoire de psychologie (1879)",
      "Principes de psychologie physiologique",
      "Methode d'introspection controlee",
      "Formation de la premiere generation de psychologues",
    ],
  },
  {
    id: "james",
    name: "William James",
    birthYear: 1842,
    deathYear: 1910,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/William_James_b1842c.jpg/220px-William_James_b1842c.jpg",
    nationality: "Americain",
    movement: "Fonctionnalisme",
    summary:
      "Pere de la psychologie americaine, il s'interesse aux fonctions de la conscience plutot qu'a sa structure. Pragmatiste, il lie psychologie et philosophie. Etudie les experiences religieuses.",
    mainWorks: [
      "Principes de psychologie (1890)",
      "Theorie des emotions James-Lange",
      "Varietes de l'experience religieuse",
      "Courant de conscience (stream of consciousness)",
    ],
  },
  {
    id: "freud",
    name: "Sigmund Freud",
    birthYear: 1856,
    deathYear: 1939,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/220px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg",
    nationality: "Autrichien",
    movement: "Psychanalyse",
    summary:
      "Fondateur de la psychanalyse, il explore l'inconscient et ses mecanismes : refoulement, complexe d'Oedipe, pulsions. Revolutionne la comprehension de la psyche. Influence culturelle immense.",
    mainWorks: [
      "L'interpretation des reves (1900)",
      "Inconscient, ca, moi, surmoi",
      "Complexe d'Oedipe",
      "Methode de la cure par la parole",
    ],
  },
  {
    id: "jung",
    name: "Carl Gustav Jung",
    birthYear: 1875,
    deathYear: 1961,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/CGJung.jpg/220px-CGJung.jpg",
    nationality: "Suisse",
    movement: "Psychologie analytique",
    summary:
      "Disciple puis rival de Freud, il fonde la psychologie analytique. Introduit les notions d'inconscient collectif, d'archetypes, et de types psychologiques (introversion/extraversion).",
    mainWorks: [
      "Inconscient collectif et archetypes",
      "Types psychologiques (introversion/extraversion)",
      "Processus d'individuation",
      "Livre rouge",
    ],
  },
  {
    id: "adler",
    name: "Alfred Adler",
    birthYear: 1870,
    deathYear: 1937,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Alfred_Adler.jpg/220px-Alfred_Adler.jpg",
    nationality: "Autrichien",
    movement: "Psychologie individuelle",
    summary:
      "Autre dissident de Freud, il met l'accent sur le complexe d'inferiorite et la volonte de puissance. Sa psychologie individuelle influence la psychotherapie et l'education.",
    mainWorks: [
      "Complexe d'inferiorite",
      "Volonte de puissance et compensation",
      "Psychologie individuelle",
      "Le sens de la vie",
    ],
  },
  {
    id: "watson",
    name: "John B. Watson",
    birthYear: 1878,
    deathYear: 1958,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/John_Broadus_Watson.jpg/220px-John_Broadus_Watson.jpg",
    nationality: "Americain",
    movement: "Behaviorisme",
    summary:
      "Fondateur du behaviorisme, il rejette l'introspection et l'inconscient pour ne s'interesser qu'au comportement observable. L'experience du petit Albert montre le conditionnement de la peur.",
    mainWorks: [
      "Manifeste behavioriste (1913)",
      "Psychologie comme science du comportement",
      "Experience du petit Albert",
      "Conditionnement des emotions",
    ],
  },
  {
    id: "pavlov",
    name: "Ivan Pavlov",
    birthYear: 1849,
    deathYear: 1936,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Ivan_Pavlov_%28Nobel%29.png/220px-Ivan_Pavlov_%28Nobel%29.png",
    nationality: "Russe",
    movement: "Reflexologie",
    summary:
      "Physiologiste decouvreur du conditionnement classique. Ses experiences sur les chiens (reflexe de salivation) fondent la psychologie de l'apprentissage. Prix Nobel de medecine 1904.",
    mainWorks: [
      "Conditionnement classique",
      "Reflexe conditionne (chiens de Pavlov)",
      "Prix Nobel de medecine (1904)",
      "Physiologie de la digestion",
    ],
  },
  {
    id: "skinner",
    name: "B.F. Skinner",
    birthYear: 1904,
    deathYear: 1990,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/B.F._Skinner_at_Harvard_circa_1950.jpg/220px-B.F._Skinner_at_Harvard_circa_1950.jpg",
    nationality: "Americain",
    movement: "Behaviorisme radical",
    summary:
      "Principal representant du behaviorisme, il developpe le conditionnement operant. La boite de Skinner permet d'etudier le renforcement. Applique ses idees a l'education et a la societe.",
    mainWorks: [
      "Conditionnement operant",
      "Boite de Skinner",
      "Renforcement positif et negatif",
      "Walden Two - utopie behavioriste",
    ],
  },
  {
    id: "piaget",
    name: "Jean Piaget",
    birthYear: 1896,
    deathYear: 1980,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Jean_Piaget_in_Ann_Arbor.png/220px-Jean_Piaget_in_Ann_Arbor.png",
    nationality: "Suisse",
    movement: "Psychologie du developpement",
    summary:
      "Fondateur de l'epistemologie genetique, il revolutionne la comprehension du developpement cognitif de l'enfant. Stades du developpement (sensori-moteur, preoperatoire, operatoire).",
    mainWorks: [
      "Stades du developpement cognitif",
      "Epistemologie genetique",
      "Construction de l'intelligence",
      "Assimilation et accommodation",
    ],
  },
  {
    id: "vygotsky",
    name: "Lev Vygotsky",
    birthYear: 1896,
    deathYear: 1934,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Lev_Vygotsky.jpg/220px-Lev_Vygotsky.jpg",
    nationality: "Sovietique",
    movement: "Psychologie socio-culturelle",
    summary:
      "Psychologue sovietique mort jeune, il insiste sur le role de la culture et du langage dans le developpement cognitif. Concept de zone proximale de developpement. Redecouvert dans les annees 60.",
    mainWorks: [
      "Zone proximale de developpement",
      "Role du langage dans la pensee",
      "Pensee et langage (1934)",
      "Psychologie socio-culturelle",
    ],
  },
  {
    id: "maslow",
    name: "Abraham Maslow",
    birthYear: 1908,
    deathYear: 1970,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Abraham_Maslow.jpg/220px-Abraham_Maslow.jpg",
    nationality: "Americain",
    movement: "Psychologie humaniste",
    summary:
      "Pere de la psychologie humaniste, il propose la pyramide des besoins, de la survie a l'accomplissement de soi. S'interesse aux 'experiences paroxystiques' et au potentiel humain.",
    mainWorks: [
      "Pyramide des besoins",
      "Accomplissement de soi (self-actualization)",
      "Psychologie humaniste",
      "Experiences paroxystiques (peak experiences)",
    ],
  },
  {
    id: "rogers",
    name: "Carl Rogers",
    birthYear: 1902,
    deathYear: 1987,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Carl_Rogers_2.jpg/220px-Carl_Rogers_2.jpg",
    nationality: "Americain",
    movement: "Psychologie humaniste",
    summary:
      "Fondateur de la therapie centree sur la personne, il met l'accent sur l'empathie, l'authenticite et l'acceptation inconditionnelle. Influence majeure sur la psychotherapie moderne.",
    mainWorks: [
      "Therapie centree sur la personne",
      "Empathie et ecoute active",
      "Acceptation inconditionnelle positive",
      "Developpement du potentiel humain",
    ],
  },
  {
    id: "bowlby",
    name: "John Bowlby",
    birthYear: 1907,
    deathYear: 1990,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/John_Bowlby.jpg/220px-John_Bowlby.jpg",
    nationality: "Anglais",
    movement: "Theorie de l'attachement",
    summary:
      "Fondateur de la theorie de l'attachement, il montre l'importance du lien mere-enfant pour le developpement. Les styles d'attachement (securise, anxieux, evitant) influencent la vie adulte.",
    mainWorks: [
      "Theorie de l'attachement",
      "Importance du lien mere-enfant",
      "Separation et perte",
      "Trilogie Attachement et perte",
    ],
  },
  {
    id: "milgram",
    name: "Stanley Milgram",
    birthYear: 1933,
    deathYear: 1984,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Stanley_Milgram.jpg/220px-Stanley_Milgram.jpg",
    nationality: "Americain",
    movement: "Psychologie sociale",
    summary:
      "Ses experiences sur l'obeissance a l'autorite montrent comment des gens ordinaires peuvent commettre des actes cruels sur ordre. Revele le poids de l'autorite sur le comportement.",
    mainWorks: [
      "Experience de Milgram sur l'obeissance",
      "Soumission a l'autorite (1974)",
      "Experience du petit monde (six degres de separation)",
      "Psychologie sociale experimentale",
    ],
  },
  {
    id: "bandura",
    name: "Albert Bandura",
    birthYear: 1925,
    deathYear: 2021,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Albert_Bandura_Psychologist.jpg/220px-Albert_Bandura_Psychologist.jpg",
    nationality: "Canadien/Americain",
    movement: "Apprentissage social",
    summary:
      "Theoricien de l'apprentissage social, il montre qu'on apprend par observation (experience de la poupee Bobo). Concept d'auto-efficacite : croire en ses capacites influence la reussite.",
    mainWorks: [
      "Theorie de l'apprentissage social",
      "Experience de la poupee Bobo",
      "Auto-efficacite (self-efficacy)",
      "Modelage et imitation",
    ],
  },
  {
    id: "beck",
    name: "Aaron Beck",
    birthYear: 1921,
    deathYear: 2021,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Aaron_T._Beck.jpg/220px-Aaron_T._Beck.jpg",
    nationality: "Americain",
    movement: "Therapie cognitive",
    summary:
      "Pere de la therapie cognitive, il montre que la depression vient de pensees negatives automatiques. Les TCC (therapies cognitives et comportementales) deviennent le traitement de reference.",
    mainWorks: [
      "Therapie cognitive de la depression",
      "Pensees automatiques negatives",
      "Triade cognitive de la depression",
      "Fondation des TCC",
    ],
  },
  {
    id: "seligman",
    name: "Martin Seligman",
    birthYear: 1942,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Martin_Seligman.jpg/220px-Martin_Seligman.jpg",
    nationality: "Americain",
    movement: "Psychologie positive",
    summary:
      "Fondateur de la psychologie positive, il etudie le bonheur et l'epanouissement plutot que les pathologies. Concept de 'resignation apprise' puis de 'flourishing' (epanouissement).",
    mainWorks: [
      "Impuissance apprise (learned helplessness)",
      "Psychologie positive",
      "PERMA - modele du bien-etre",
      "Flourishing (epanouissement)",
    ],
  },
  {
    id: "kahneman",
    name: "Daniel Kahneman",
    birthYear: 1934,
    deathYear: 2024,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Daniel_Kahneman_%282012%29.jpg/220px-Daniel_Kahneman_%282012%29.jpg",
    nationality: "Israelien/Americain",
    movement: "Economie comportementale",
    summary:
      "Psychologue Prix Nobel d'economie, il revele les biais cognitifs qui faussent nos decisions. Systeme 1 (rapide, intuitif) vs Systeme 2 (lent, analytique). Revolutionne l'economie.",
    mainWorks: [
      "Theorie des perspectives (avec Tversky)",
      "Biais cognitifs et heuristiques",
      "Systeme 1 / Systeme 2",
      "Prix Nobel d'economie (2002)",
    ],
  },
];
