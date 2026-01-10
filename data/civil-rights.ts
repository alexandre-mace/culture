export interface CivilRightsItem {
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

export const civilRights: CivilRightsItem[] = [
  {
    id: "abolition-uk",
    name: "Abolition de la traite (UK)",
    birthYear: 1807,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/William_wilberforce.jpg/220px-William_wilberforce.jpg",
    nationality: "Britannique",
    movement: "Abolition",
    summary:
      "Apres 20 ans de campagne menee par Wilberforce et les abolitionnistes, la Grande-Bretagne abolit la traite des esclaves. La Royal Navy patrouille pour intercepter les negriers.",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Victor_Schoelcher.jpg/220px-Victor_Schoelcher.jpg",
    nationality: "Francais",
    movement: "Abolition",
    summary:
      "Victor Schoelcher obtient l'abolition definitive de l'esclavage dans les colonies francaises lors de la revolution de 1848. 250 000 esclaves sont liberes.",
    mainWorks: [
      "Decret d'abolition (27 avril 1848)",
      "Victor Schoelcher - artisan de l'abolition",
      "250 000 esclaves liberes",
      "Indemnisation des proprietaires",
    ],
  },
  {
    id: "suffragettes",
    name: "Mouvement des suffragettes",
    birthYear: 1848,
    deathYear: 1920,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Emmeline_Pankhurst_addressed_crowd.jpg/220px-Emmeline_Pankhurst_addressed_crowd.jpg",
    nationality: "International",
    movement: "Droits des femmes",
    summary:
      "Lutte pour le droit de vote des femmes. De la convention de Seneca Falls (1848) au 19e amendement americain (1920). Emmeline Pankhurst au Royaume-Uni, actions militantes et emprisonnements.",
    mainWorks: [
      "Convention de Seneca Falls (1848)",
      "Emmeline Pankhurst (UK)",
      "Actions militantes et greves de la faim",
      "Droit de vote obtenu (UK 1918, USA 1920, France 1944)",
    ],
  },
  {
    id: "gandhi",
    name: "Non-violence de Gandhi",
    birthYear: 1915,
    deathYear: 1948,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/220px-Mahatma-Gandhi%2C_studio%2C_1931.jpg",
    nationality: "Indien",
    movement: "Independance",
    summary:
      "Gandhi developpe la non-violence (ahimsa) et la desobeissance civile comme armes contre le colonialisme britannique. Marche du sel, jeunes. L'Inde obtient l'independance en 1947.",
    mainWorks: [
      "Satyagraha - force de la verite",
      "Marche du sel (1930)",
      "Mouvement Quit India (1942)",
      "Independance de l'Inde (1947)",
    ],
  },
  {
    id: "declaration-universelle",
    name: "Declaration universelle des droits de l'homme",
    birthYear: 1948,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Eleanor_Roosevelt_and_Human_Rights_Declaration.jpg/220px-Eleanor_Roosevelt_and_Human_Rights_Declaration.jpg",
    nationality: "International",
    movement: "Droits humains",
    summary:
      "Adoptee par l'ONU le 10 decembre 1948. Eleanor Roosevelt preside le comite de redaction. 30 articles definissant les droits fondamentaux. Base du droit international des droits humains.",
    mainWorks: [
      "Adoption par l'ONU (1948)",
      "Eleanor Roosevelt - presidente du comite",
      "30 articles fondamentaux",
      "Base du droit international",
    ],
  },
  {
    id: "brown-v-board",
    name: "Brown v. Board of Education",
    birthYear: 1954,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Nettie_Hunt_and_daughter_on_Supreme_Court_steps.jpg/220px-Nettie_Hunt_and_daughter_on_Supreme_Court_steps.jpg",
    nationality: "Americain",
    movement: "Droits civiques USA",
    summary:
      "La Cour supreme declare inconstitutionnelle la segregation scolaire. 'Separes mais egaux' est renverse. Debut de la desegregation, mais resistance violente dans le Sud.",
    mainWorks: [
      "Arret de la Cour supreme (1954)",
      "Fin de 'separes mais egaux'",
      "Desegregation des ecoles",
      "Resistance dans le Sud (Little Rock)",
    ],
  },
  {
    id: "rosa-parks",
    name: "Rosa Parks et le boycott de Montgomery",
    birthYear: 1955,
    deathYear: 1956,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Rosa_Parks_%28fingerprint%29.jpg/220px-Rosa_Parks_%28fingerprint%29.jpg",
    nationality: "Americain",
    movement: "Droits civiques USA",
    summary:
      "Rosa Parks refuse de ceder sa place dans un bus a Montgomery, Alabama. Boycott des bus pendant 381 jours. Victoire legale, emergence de Martin Luther King Jr.",
    mainWorks: [
      "Refus de Rosa Parks (1er decembre 1955)",
      "Boycott des bus de Montgomery",
      "381 jours de boycott",
      "Emergence de Martin Luther King Jr.",
    ],
  },
  {
    id: "mlk",
    name: "Martin Luther King Jr.",
    birthYear: 1955,
    deathYear: 1968,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Martin_Luther_King%2C_Jr..jpg/220px-Martin_Luther_King%2C_Jr..jpg",
    nationality: "Americain",
    movement: "Droits civiques USA",
    summary:
      "Leader du mouvement des droits civiques, il prone la non-violence. Marche sur Washington, 'I Have a Dream'. Prix Nobel de la paix 1964. Assassine en 1968.",
    mainWorks: [
      "Marche sur Washington (1963)",
      "Discours 'I Have a Dream'",
      "Prix Nobel de la paix (1964)",
      "Assassine a Memphis (1968)",
    ],
  },
  {
    id: "civil-rights-act",
    name: "Civil Rights Act",
    birthYear: 1964,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Lyndon_Johnson_signing_Civil_Rights_Act%2C_July_2%2C_1964.jpg/220px-Lyndon_Johnson_signing_Civil_Rights_Act%2C_July_2%2C_1964.jpg",
    nationality: "Americain",
    movement: "Droits civiques USA",
    summary:
      "Loi fondamentale interdisant la discrimination basee sur la race, la couleur, la religion, le sexe ou l'origine nationale. Fin legale de la segregation. Vote grace a LBJ apres l'assassinat de JFK.",
    mainWorks: [
      "Interdiction de la discrimination",
      "Fin de la segregation legale",
      "President Johnson signe la loi",
      "Voting Rights Act suit (1965)",
    ],
  },
  {
    id: "malcolm-x",
    name: "Malcolm X et le Black Power",
    birthYear: 1960,
    deathYear: 1970,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Malcolm_X_NYWTS_2a.jpg/220px-Malcolm_X_NYWTS_2a.jpg",
    nationality: "Americain",
    movement: "Droits civiques USA",
    summary:
      "Malcolm X prone l'autodetermination et la fierte noire, en alternative a l'integration. Nation of Islam puis evolution. Black Panthers, Black Power. Assassine en 1965.",
    mainWorks: [
      "Nation of Islam puis independance",
      "Black Power - fierte noire",
      "Black Panthers (1966)",
      "Assassine en 1965",
    ],
  },
  {
    id: "apartheid",
    name: "Lutte contre l'apartheid",
    birthYear: 1948,
    deathYear: 1994,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/220px-Nelson_Mandela_1994.jpg",
    nationality: "Sud-Africain",
    movement: "Droits civiques",
    summary:
      "46 ans de lutte contre la segregation raciale en Afrique du Sud. Mandela emprisonne 27 ans. Pression internationale, sanctions. Fin de l'apartheid et election de Mandela president (1994).",
    mainWorks: [
      "ANC et lutte armee puis non-violente",
      "Mandela - 27 ans de prison",
      "Sanctions internationales",
      "Fin de l'apartheid et elections (1994)",
    ],
  },
  {
    id: "feminisme-deuxieme-vague",
    name: "Feminisme deuxieme vague",
    birthYear: 1963,
    deathYear: 1980,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Betty_Friedan_1960.jpg/220px-Betty_Friedan_1960.jpg",
    nationality: "International",
    movement: "Droits des femmes",
    summary:
      "Au-dela du droit de vote, lutte pour l'egalite complete : travail, famille, corps. Betty Friedan, Simone de Beauvoir. Contraception, avortement, discrimination au travail.",
    mainWorks: [
      "Betty Friedan - La Feminine Mystique (1963)",
      "Simone de Beauvoir - Le Deuxieme Sexe",
      "Legalisation de la contraception et de l'avortement",
      "NOW (National Organization for Women)",
    ],
  },
  {
    id: "droits-lgbt",
    name: "Mouvement LGBT+",
    birthYear: 1969,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/220px-Gay_Pride_Flag.svg.png",
    nationality: "International",
    movement: "Droits LGBT+",
    summary:
      "Les emeutes de Stonewall (1969) lancent le mouvement de liberation gay. Marches des fiertes, lutte contre le SIDA, mariage pour tous. Progres rapides mais inegaux selon les pays.",
    mainWorks: [
      "Emeutes de Stonewall (1969)",
      "Marches des fiertes",
      "Activisme contre le SIDA (Act Up)",
      "Mariage pour tous (Pays-Bas 2001, France 2013...)",
    ],
  },
  {
    id: "droits-handicap",
    name: "Droits des personnes handicapees",
    birthYear: 1973,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Disability_symbols.svg/220px-Disability_symbols.svg.png",
    nationality: "International",
    movement: "Droits des personnes handicapees",
    summary:
      "Lutte pour l'accessibilite et contre la discrimination. Section 504 (USA, 1973), ADA (1990), Convention ONU (2006). Du modele medical au modele social du handicap.",
    mainWorks: [
      "Section 504 (USA, 1973)",
      "Americans with Disabilities Act (1990)",
      "Convention ONU relative aux droits des personnes handicapees (2006)",
      "Accessibilite et inclusion",
    ],
  },
  {
    id: "black-lives-matter",
    name: "Black Lives Matter",
    birthYear: 2013,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Black_Lives_Matter_logo.svg/220px-Black_Lives_Matter_logo.svg.png",
    nationality: "Americain",
    movement: "Droits civiques contemporains",
    summary:
      "Mouvement ne apres l'acquittement du meurtrier de Trayvon Martin. Proteste contre les violences policieres. George Floyd (2020) declenche des manifestations mondiales.",
    mainWorks: [
      "Fondation apres l'affaire Trayvon Martin (2013)",
      "Mobilisation contre les violences policieres",
      "George Floyd et manifestations mondiales (2020)",
      "Debat sur le racisme systemique",
    ],
  },
  {
    id: "metoo",
    name: "#MeToo",
    birthYear: 2017,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Metoo.jpg/220px-Metoo.jpg",
    nationality: "International",
    movement: "Droits des femmes",
    summary:
      "Mouvement contre le harcelement et les agressions sexuelles, lance apres les revelations sur Harvey Weinstein. Temoignages massifs sur les reseaux sociaux. Liberation de la parole.",
    mainWorks: [
      "Revelations sur Harvey Weinstein",
      "Hashtag viral #MeToo",
      "Liberation de la parole",
      "Consequences judiciaires et culturelles",
    ],
  },
];
