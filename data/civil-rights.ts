export interface CivilRightsItem {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  image?: string;
  nationality: string;
  movement: string;
  family?: string;
  influences?: string[];
  summary: string;
  mainWorks: string[];
  itemType?: "person" | "topic";
}

export const civilRights: CivilRightsItem[] = [
  {
    id: "abolition-uk",
    name: "Abolition de la traite (UK)",
    birthYear: 1807,
    nationality: "Britannique",
    movement: "Abolition",
    family: "Luttes fondatrices",
    summary:
      "Après 20 ans de campagne menée par Wilberforce et les abolitionnistes, la Grande-Bretagne abolit la traite des esclaves. La Royal Navy patrouille pour intercepter les négriers.",
    mainWorks: [
      "Abolition de la traite (1807)",
      "Campagne de Wilberforce et Clarkson",
      "Patrouilles de la Royal Navy",
      "Abolition de l'esclavage (1833)",
    ],
  },
  {
    id: "abolition-france",
    name: "Abolition en France",
    birthYear: 1848,
    nationality: "Français",
    movement: "Abolition",
    family: "Luttes fondatrices",
    influences: ["abolition-uk"],
    summary:
      "Victor Schoelcher obtient l'abolition définitive de l'esclavage dans les colonies françaises lors de la révolution de 1848. 250 000 esclaves sont libérés.",
    mainWorks: [
      "Décret d'abolition (27 avril 1848)",
      "Victor Schoelcher - artisan de l'abolition",
      "250 000 esclaves libérés",
      "Indemnisation des propriétaires",
    ],
  },
  {
    id: "suffragettes",
    name: "Mouvement des suffragettes",
    birthYear: 1848,
    deathYear: 1920,
    nationality: "International",
    movement: "Droits des femmes",
    family: "Luttes fondatrices",
    influences: ["abolition-uk"],
    summary:
      "Lutte pour le droit de vote des femmes. De la convention de Seneca Falls (1848) au 19e amendement américain (1920). Emmeline Pankhurst au Royaume-Uni, actions militantes et emprisonnements.",
    mainWorks: [
      "Convention de Seneca Falls (1848)",
      "Emmeline Pankhurst (UK)",
      "Actions militantes et grèves de la faim",
      "Droit de vote obtenu (UK 1918, USA 1920, France 1944)",
    ],
  },
  {
    id: "gandhi",
    name: "Non-violence de Gandhi",
    birthYear: 1915,
    deathYear: 1948,
    nationality: "Indien",
    movement: "Indépendance",
    family: "Luttes fondatrices",
    summary:
      "Gandhi développe la non-violence (ahimsa) et la désobéissance civile comme armes contre le colonialisme britannique. Marche du sel, jeûnes. L'Inde obtient l'indépendance en 1947.",
    mainWorks: [
      "Satyagraha - force de la vérité",
      "Marche du sel (1930)",
      "Mouvement Quit India (1942)",
      "Indépendance de l'Inde (1947)",
    ],
  },
  {
    id: "declaration-universelle",
    name: "Déclaration universelle des droits de l'homme",
    birthYear: 1948,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Eleanor_Roosevelt_UDHR.jpg/330px-Eleanor_Roosevelt_UDHR.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "International",
    movement: "Droits humains",
    family: "Luttes fondatrices",
    summary:
      "Adoptée par l'ONU le 10 décembre 1948. Eleanor Roosevelt préside le comité de rédaction. 30 articles définissant les droits fondamentaux. Base du droit international des droits humains.",
    mainWorks: [
      "Adoption par l'ONU (1948)",
      "Eleanor Roosevelt - présidente du comité",
      "30 articles fondamentaux",
      "Base du droit international",
    ],
  },
  {
    id: "brown-v-board",
    name: "Brown v. Board of Education",
    birthYear: 1954,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Seal_of_the_United_States_Supreme_Court.svg/langfr-330px-Seal_of_the_United_States_Supreme_Court.svg.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Droits civiques USA",
    family: "Droits civiques",
    summary:
      "La Cour suprême déclare inconstitutionnelle la ségrégation scolaire. 'Séparés mais égaux' est renversé. Début de la déségrégation, mais résistance violente dans le Sud.",
    mainWorks: [
      "Arrêt de la Cour suprême (1954)",
      "Fin de 'séparés mais égaux'",
      "Déségrégation des écoles",
      "Résistance dans le Sud (Little Rock)",
    ],
  },
  {
    id: "rosa-parks",
    name: "Rosa Parks et le boycott de Montgomery",
    birthYear: 1955,
    deathYear: 1956,
    nationality: "Américain",
    movement: "Droits civiques USA",
    family: "Droits civiques",
    influences: ["brown-v-board"],
    summary:
      "Rosa Parks refuse de céder sa place dans un bus à Montgomery, Alabama. Boycott des bus pendant 381 jours. Victoire légale, émergence de Martin Luther King Jr.",
    mainWorks: [
      "Refus de Rosa Parks (1er décembre 1955)",
      "Boycott des bus de Montgomery",
      "381 jours de boycott",
      "Émergence de Martin Luther King Jr.",
    ],
  },
  {
    id: "mlk",
    name: "Martin Luther King Jr.",
    birthYear: 1955,
    deathYear: 1968,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Martin_Luther_King%2C_Jr..jpg/330px-Martin_Luther_King%2C_Jr..jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Droits civiques USA",
    family: "Droits civiques",
    influences: ["gandhi"],
    itemType: "person",
    summary:
      "Leader du mouvement des droits civiques, il prône la non-violence. Marche sur Washington, 'I Have a Dream'. Prix Nobel de la paix 1964. Assassiné en 1968.",
    mainWorks: [
      "Marche sur Washington (1963)",
      "Discours 'I Have a Dream'",
      "Prix Nobel de la paix (1964)",
      "Assassiné à Memphis (1968)",
    ],
  },
  {
    id: "civil-rights-act",
    name: "Civil Rights Act",
    birthYear: 1964,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Great_Seal_of_the_United_States_%28obverse%29.svg/langfr-330px-Great_Seal_of_the_United_States_%28obverse%29.svg.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Droits civiques USA",
    family: "Droits civiques",
    influences: ["brown-v-board", "rosa-parks", "mlk"],
    summary:
      "Loi fondamentale interdisant la discrimination basée sur la race, la couleur, la religion, le sexe ou l'origine nationale. Fin légale de la ségrégation. Votée grâce à LBJ après l'assassinat de JFK.",
    mainWorks: [
      "Interdiction de la discrimination",
      "Fin de la ségrégation légale",
      "Président Johnson signe la loi",
      "Voting Rights Act suit (1965)",
    ],
  },
  {
    id: "malcolm-x",
    name: "Malcolm X et le Black Power",
    birthYear: 1960,
    deathYear: 1970,
    nationality: "Américain",
    movement: "Droits civiques USA",
    family: "Droits civiques",
    summary:
      "Malcolm X prône l'autodétermination et la fierté noire, en alternative à l'intégration. Nation of Islam puis évolution. Black Panthers, Black Power. Assassiné en 1965.",
    mainWorks: [
      "Nation of Islam puis indépendance",
      "Black Power - fierté noire",
      "Black Panthers (1966)",
      "Assassiné en 1965",
    ],
  },
  {
    id: "apartheid",
    name: "Lutte contre l'apartheid",
    birthYear: 1948,
    deathYear: 1994,
    nationality: "Sud-Africain",
    movement: "Droits civiques",
    family: "Droits civiques",
    influences: ["gandhi"],
    summary:
      "46 ans de lutte contre la ségrégation raciale en Afrique du Sud. Mandela emprisonné 27 ans. Pression internationale, sanctions. Fin de l'apartheid et élection de Mandela président (1994).",
    mainWorks: [
      "ANC et lutte armée puis non-violente",
      "Mandela - 27 ans de prison",
      "Sanctions internationales",
      "Fin de l'apartheid et élections (1994)",
    ],
  },
  {
    id: "feminisme-deuxieme-vague",
    name: "Féminisme deuxième vague",
    birthYear: 1963,
    deathYear: 1980,
    nationality: "International",
    movement: "Droits des femmes",
    family: "Nouvelles émancipations",
    influences: ["suffragettes"],
    summary:
      "Au-delà du droit de vote, lutte pour l'égalité complète : travail, famille, corps. Betty Friedan, Simone de Beauvoir. Contraception, avortement, discrimination au travail.",
    mainWorks: [
      "Betty Friedan - La Feminine Mystique (1963)",
      "Simone de Beauvoir - Le Deuxième Sexe",
      "Légalisation de la contraception et de l'avortement",
      "NOW (National Organization for Women)",
    ],
  },
  {
    id: "droits-lgbt",
    name: "Mouvement LGBT+",
    birthYear: 1969,
    nationality: "International",
    movement: "Droits LGBT+",
    family: "Nouvelles émancipations",
    influences: ["civil-rights-act", "feminisme-deuxieme-vague"],
    summary:
      "Les émeutes de Stonewall (1969) lancent le mouvement de libération gay. Marches des fiertés, lutte contre le SIDA, mariage pour tous. Progrès rapides mais inégaux selon les pays.",
    mainWorks: [
      "Émeutes de Stonewall (1969)",
      "Marches des fiertés",
      "Activisme contre le SIDA (Act Up)",
      "Mariage pour tous (Pays-Bas 2001, France 2013...)",
    ],
  },
  {
    id: "droits-handicap",
    name: "Droits des personnes handicapées",
    birthYear: 1973,
    nationality: "International",
    movement: "Droits des personnes handicapées",
    family: "Nouvelles émancipations",
    influences: ["civil-rights-act"],
    summary:
      "Lutte pour l'accessibilité et contre la discrimination. Section 504 (USA, 1973), ADA (1990), Convention ONU (2006). Du modèle médical au modèle social du handicap.",
    mainWorks: [
      "Section 504 (USA, 1973)",
      "Americans with Disabilities Act (1990)",
      "Convention ONU relative aux droits des personnes handicapées (2006)",
      "Accessibilité et inclusion",
    ],
  },
  {
    id: "black-lives-matter",
    name: "Black Lives Matter",
    birthYear: 2013,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Black_Lives_Matter_logo.svg/langfr-330px-Black_Lives_Matter_logo.svg.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Droits civiques contemporains",
    family: "Luttes contemporaines",
    influences: ["mlk", "malcolm-x"],
    summary:
      "Mouvement né après l'acquittement du meurtrier de Trayvon Martin. Proteste contre les violences policières. George Floyd (2020) déclenche des manifestations mondiales.",
    mainWorks: [
      "Fondation après l'affaire Trayvon Martin (2013)",
      "Mobilisation contre les violences policières",
      "George Floyd et manifestations mondiales (2020)",
      "Débat sur le racisme systémique",
    ],
  },
  {
    id: "metoo",
    name: "#MeToo",
    birthYear: 2017,
    nationality: "International",
    movement: "Droits des femmes",
    family: "Luttes contemporaines",
    influences: ["suffragettes", "feminisme-deuxieme-vague"],
    summary:
      "Mouvement contre le harcèlement et les agressions sexuelles, lancé après les révélations sur Harvey Weinstein. Témoignages massifs sur les réseaux sociaux. Libération de la parole.",
    mainWorks: [
      "Révélations sur Harvey Weinstein",
      "Hashtag viral #MeToo",
      "Libération de la parole",
      "Conséquences judiciaires et culturelles",
    ],
  },
];
