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
  itemType?: "person" | "topic";
}

export const psychology: PsychologyItem[] = [
  {
    id: "wundt",
    name: "Wilhelm Wundt",
    birthYear: 1832,
    deathYear: 1920,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Wilhelm_Wundt.jpg/330px-Wilhelm_Wundt.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Psychologie expérimentale",
    summary:
      "Père de la psychologie scientifique, il fonde le premier laboratoire de psychologie expérimentale à Leipzig en 1879. Sépare la psychologie de la philosophie.",
    mainWorks: [
      "Premier laboratoire de psychologie (1879)",
      "Principes de psychologie physiologique",
      "Méthode d'introspection contrôlée",
      "Formation de la première génération de psychologues",
    ],
  },
  {
    id: "james",
    name: "William James",
    birthYear: 1842,
    deathYear: 1910,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/William_James_by_Alice_M._Boughton%2C_c._1907%2C_platinum_print%2C_from_the_National_Portrait_Gallery_-_NPG-NPG_87_37James-000001_%28cropped%29.jpg/330px-William_James_by_Alice_M._Boughton%2C_c._1907%2C_platinum_print%2C_from_the_National_Portrait_Gallery_-_NPG-NPG_87_37James-000001_%28cropped%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Fonctionnalisme",
    summary:
      "Père de la psychologie américaine, il s'intéresse aux fonctions de la conscience plutôt qu'à sa structure. Pragmatiste, il lie psychologie et philosophie. Étudie les expériences religieuses.",
    mainWorks: [
      "Principes de psychologie (1890)",
      "Théorie des émotions James-Lange",
      "Variétés de l'expérience religieuse",
      "Courant de conscience (stream of consciousness)",
    ],
  },
  {
    id: "freud",
    name: "Sigmund Freud",
    birthYear: 1856,
    deathYear: 1939,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/330px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Autrichien",
    movement: "Psychanalyse",
    summary:
      "Fondateur de la psychanalyse, il explore l'inconscient et ses mécanismes : refoulement, complexe d'Œdipe, pulsions. Révolutionne la compréhension de la psyché. Influence culturelle immense.",
    mainWorks: [
      "L'interprétation des rêves (1900)",
      "Inconscient, ça, moi, surmoi",
      "Complexe d'Œdipe",
      "Méthode de la cure par la parole",
    ],
  },
  {
    id: "jung",
    name: "Carl Gustav Jung",
    birthYear: 1875,
    deathYear: 1961,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/ETH-BIB-Jung%2C_Carl_Gustav_%281875-1961%29-Portrait-Portr_14163_%28cropped%29.tif/lossy-page1-330px-ETH-BIB-Jung%2C_Carl_Gustav_%281875-1961%29-Portrait-Portr_14163_%28cropped%29.tif.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Suisse",
    movement: "Psychologie analytique",
    summary:
      "Disciple puis rival de Freud, il fonde la psychologie analytique. Introduit les notions d'inconscient collectif, d'archétypes, et de types psychologiques (introversion/extraversion).",
    mainWorks: [
      "Inconscient collectif et archétypes",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/AlfredAdler.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "Autrichien",
    movement: "Psychologie individuelle",
    summary:
      "Autre dissident de Freud, il met l'accent sur le complexe d'infériorité et la volonté de puissance. Sa psychologie individuelle influence la psychothérapie et l'éducation.",
    mainWorks: [
      "Complexe d'infériorité",
      "Volonté de puissance et compensation",
      "Psychologie individuelle",
      "Le sens de la vie",
    ],
  },
  {
    id: "watson",
    name: "John B. Watson",
    birthYear: 1878,
    deathYear: 1958,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/John_Broadus_Watson.JPG?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "Américain",
    movement: "Behaviorisme",
    summary:
      "Fondateur du behaviorisme, il rejette l'introspection et l'inconscient pour ne s'intéresser qu'au comportement observable. L'expérience du petit Albert montre le conditionnement de la peur.",
    mainWorks: [
      "Manifeste behavioriste (1913)",
      "Psychologie comme science du comportement",
      "Expérience du petit Albert",
      "Conditionnement des émotions",
    ],
  },
  {
    id: "pavlov",
    name: "Ivan Pavlov",
    birthYear: 1849,
    deathYear: 1936,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ivan_Pavlov_NLM3.jpg/330px-Ivan_Pavlov_NLM3.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Russe",
    movement: "Réflexologie",
    summary:
      "Physiologiste découvreur du conditionnement classique. Ses expériences sur les chiens (réflexe de salivation) fondent la psychologie de l'apprentissage. Prix Nobel de médecine 1904.",
    mainWorks: [
      "Conditionnement classique",
      "Réflexe conditionné (chiens de Pavlov)",
      "Prix Nobel de médecine (1904)",
      "Physiologie de la digestion",
    ],
  },
  {
    id: "skinner",
    name: "B.F. Skinner",
    birthYear: 1904,
    deathYear: 1990,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/B.F._Skinner_at_Harvard_circa_1950_%28cropped%29.jpg/330px-B.F._Skinner_at_Harvard_circa_1950_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Behaviorisme radical",
    summary:
      "Principal représentant du behaviorisme, il développe le conditionnement opérant. La boîte de Skinner permet d'étudier le renforcement. Applique ses idées à l'éducation et à la société.",
    mainWorks: [
      "Conditionnement opérant",
      "Boîte de Skinner",
      "Renforcement positif et négatif",
      "Walden Two - utopie behavioriste",
    ],
  },
  {
    id: "piaget",
    name: "Jean Piaget",
    birthYear: 1896,
    deathYear: 1980,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Jean_Piaget_in_Ann_Arbor.png/330px-Jean_Piaget_in_Ann_Arbor.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Suisse",
    movement: "Psychologie du développement",
    summary:
      "Fondateur de l'épistémologie génétique, il révolutionne la compréhension du développement cognitif de l'enfant. Stades du développement (sensori-moteur, préopératoire, opératoire).",
    mainWorks: [
      "Stades du développement cognitif",
      "Épistémologie génétique",
      "Construction de l'intelligence",
      "Assimilation et accommodation",
    ],
  },
  {
    id: "vygotsky",
    name: "Lev Vygotsky",
    birthYear: 1896,
    deathYear: 1934,
    image: "https://upload.wikimedia.org/wikipedia/en/7/7e/Lev_Vygotsky.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "Soviétique",
    movement: "Psychologie socio-culturelle",
    summary:
      "Psychologue soviétique mort jeune, il insiste sur le rôle de la culture et du langage dans le développement cognitif. Concept de zone proximale de développement. Redécouvert dans les années 60.",
    mainWorks: [
      "Zone proximale de développement",
      "Rôle du langage dans la pensée",
      "Pensée et langage (1934)",
      "Psychologie socio-culturelle",
    ],
  },
  {
    id: "maslow",
    name: "Abraham Maslow",
    birthYear: 1908,
    deathYear: 1970,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Photo_of_Abraham_Harold_Maslow_by_William_Carter_%28cropped%29.jpg/330px-Photo_of_Abraham_Harold_Maslow_by_William_Carter_%28cropped%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Psychologie humaniste",
    summary:
      "Père de la psychologie humaniste, il propose la pyramide des besoins, de la survie à l'accomplissement de soi. S'intéresse aux 'expériences paroxystiques' et au potentiel humain.",
    mainWorks: [
      "Pyramide des besoins",
      "Accomplissement de soi (self-actualization)",
      "Psychologie humaniste",
      "Expériences paroxystiques (peak experiences)",
    ],
  },
  {
    id: "rogers",
    name: "Carl Rogers",
    birthYear: 1902,
    deathYear: 1987,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Carl_Ransom_Rogers.jpg/330px-Carl_Ransom_Rogers.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Psychologie humaniste",
    summary:
      "Fondateur de la thérapie centrée sur la personne, il met l'accent sur l'empathie, l'authenticité et l'acceptation inconditionnelle. Influence majeure sur la psychothérapie moderne.",
    mainWorks: [
      "Thérapie centrée sur la personne",
      "Empathie et écoute active",
      "Acceptation inconditionnelle positive",
      "Développement du potentiel humain",
    ],
  },
  {
    id: "bowlby",
    name: "John Bowlby",
    birthYear: 1907,
    deathYear: 1990,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/The_Bowlby-Ainsworth_Award.jpg/330px-The_Bowlby-Ainsworth_Award.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Anglais",
    movement: "Théorie de l'attachement",
    summary:
      "Fondateur de la théorie de l'attachement, il montre l'importance du lien mère-enfant pour le développement. Les styles d'attachement (sécurisé, anxieux, évitant) influencent la vie adulte.",
    mainWorks: [
      "Théorie de l'attachement",
      "Importance du lien mère-enfant",
      "Séparation et perte",
      "Trilogie Attachement et perte",
    ],
  },
  {
    id: "milgram",
    name: "Stanley Milgram",
    birthYear: 1933,
    deathYear: 1984,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Stanley_Milgram_1954.jpg/330px-Stanley_Milgram_1954.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Psychologie sociale",
    summary:
      "Ses expériences sur l'obéissance à l'autorité montrent comment des gens ordinaires peuvent commettre des actes cruels sur ordre. Révèle le poids de l'autorité sur le comportement.",
    mainWorks: [
      "Expérience de Milgram sur l'obéissance",
      "Soumission à l'autorité (1974)",
      "Expérience du petit monde (six degrés de séparation)",
      "Psychologie sociale expérimentale",
    ],
  },
  {
    id: "bandura",
    name: "Albert Bandura",
    birthYear: 1925,
    deathYear: 2021,
    nationality: "Canadien/Américain",
    movement: "Apprentissage social",
    summary:
      "Théoricien de l'apprentissage social, il montre qu'on apprend par observation (expérience de la poupée Bobo). Concept d'auto-efficacité : croire en ses capacités influence la réussite.",
    mainWorks: [
      "Théorie de l'apprentissage social",
      "Expérience de la poupée Bobo",
      "Auto-efficacité (self-efficacy)",
      "Modelage et imitation",
    ],
  },
  {
    id: "beck",
    name: "Aaron Beck",
    birthYear: 1921,
    deathYear: 2021,
    nationality: "Américain",
    movement: "Thérapie cognitive",
    summary:
      "Père de la thérapie cognitive, il montre que la dépression vient de pensées négatives automatiques. Les TCC (thérapies cognitives et comportementales) deviennent le traitement de référence.",
    mainWorks: [
      "Thérapie cognitive de la dépression",
      "Pensées automatiques négatives",
      "Triade cognitive de la dépression",
      "Fondation des TCC",
    ],
  },
  {
    id: "seligman",
    name: "Martin Seligman",
    birthYear: 1942,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flickr_-_The_U.S._Army_-_Comprehensive_Soldiers_Fitness_%281%29.jpg/330px-Flickr_-_The_U.S._Army_-_Comprehensive_Soldiers_Fitness_%281%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Psychologie positive",
    summary:
      "Fondateur de la psychologie positive, il étudie le bonheur et l'épanouissement plutôt que les pathologies. Concept de 'résignation apprise' puis de 'flourishing' (épanouissement).",
    mainWorks: [
      "Impuissance apprise (learned helplessness)",
      "Psychologie positive",
      "PERMA - modèle du bien-être",
      "Flourishing (épanouissement)",
    ],
  },
  {
    id: "kahneman",
    name: "Daniel Kahneman",
    birthYear: 1934,
    deathYear: 2024,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Daniel_Kahneman_%283283955327%29_%28cropped%29.jpg/330px-Daniel_Kahneman_%283283955327%29_%28cropped%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Israélien/Américain",
    movement: "Économie comportementale",
    summary:
      "Psychologue Prix Nobel d'économie, il révèle les biais cognitifs qui faussent nos décisions. Système 1 (rapide, intuitif) vs Système 2 (lent, analytique). Révolutionne l'économie.",
    mainWorks: [
      "Théorie des perspectives (avec Tversky)",
      "Biais cognitifs et heuristiques",
      "Système 1 / Système 2",
      "Prix Nobel d'économie (2002)",
    ],
  },
];
