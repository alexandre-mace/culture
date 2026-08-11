export interface EmpireItem {
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

export const empires: EmpireItem[] = [
  {
    id: "akkad",
    name: "Empire akkadien",
    birthYear: -2334,
    deathYear: -2154,
    nationality: "Mésopotamien",
    movement: "Antiquité",
    summary:
      "Premier empire de l'histoire, fondé par Sargon d'Akkad. Unifie la Mésopotamie de la Méditerranée au golfe Persique. Modèle pour tous les empires ultérieurs.",
    mainWorks: [
      "Premier empire universel",
      "Sargon d'Akkad - premier empereur",
      "Unification de la Mésopotamie",
      "Administration centralisée",
    ],
  },
  {
    id: "egypte",
    name: "Égypte pharaonique",
    birthYear: -3100,
    deathYear: -30,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Egypt.Giza.Sphinx.02.jpg/330px-Egypt.Giza.Sphinx.02.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Égyptien",
    movement: "Antiquité",
    summary:
      "Plus longue civilisation de l'histoire (3000 ans). Les pharaons bâtissent pyramides et temples, développent l'écriture hiéroglyphique et une religion élaborée. S'achève avec Cléopâtre.",
    mainWorks: [
      "Pyramides de Gizeh",
      "Empire du Nouvel Empire (Thoutmosis, Ramsès)",
      "Hiéroglyphes et Livre des Morts",
      "Conquête par Rome (-30)",
    ],
  },
  {
    id: "assyrie",
    name: "Empire assyrien",
    birthYear: -2500,
    deathYear: -609,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Assyrie_general.PNG/330px-Assyrie_general.PNG?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Mésopotamien",
    movement: "Antiquité",
    summary:
      "Empire militaire redoutable, il domine le Moyen-Orient ancien. Armée professionnelle, déportations massives, et bibliothèque d'Assurbanipal préservant les savoirs mésopotamiens.",
    mainWorks: [
      "Première armée professionnelle",
      "Conquête de l'Égypte",
      "Bibliothèque d'Assurbanipal à Ninive",
      "Destruction par Babylone et les Mèdes (-609)",
    ],
  },
  {
    id: "perse-achemenide",
    name: "Empire perse achéménide",
    birthYear: -550,
    deathYear: -330,
    nationality: "Perse",
    movement: "Antiquité",
    summary:
      "Plus grand empire du monde antique, de l'Égypte à l'Inde. Cyrus le Grand fonde un modèle de tolérance. Route royale, satrapies, et guerres médiques contre les Grecs. Conquis par Alexandre.",
    mainWorks: [
      "Cyrus le Grand - tolérance religieuse",
      "Darius Ier - organisation administrative",
      "Route royale et poste impériale",
      "Persépolis - capitale cérémonielle",
    ],
  },
  {
    id: "alexandre",
    name: "Empire d'Alexandre",
    birthYear: -336,
    deathYear: -323,
    nationality: "Macédonien",
    movement: "Antiquité",
    summary:
      "En 13 ans, Alexandre conquiert l'empire perse jusqu'à l'Inde. Son empire éphémère diffuse la culture grecque (hellénisation) de l'Égypte à l'Asie centrale. Divisé entre ses généraux.",
    mainWorks: [
      "Conquête de l'empire perse",
      "Fondation d'Alexandrie",
      "Hellénisation de l'Orient",
      "Royaumes des Diadoques",
    ],
  },
  {
    id: "rome",
    name: "Empire romain",
    birthYear: -27,
    deathYear: 476,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Roman_Empire_Trajan_117AD.png/330px-Roman_Empire_Trajan_117AD.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Romain",
    movement: "Antiquité",
    summary:
      "De la Bretagne à la Mésopotamie, Rome unifie le monde méditerranéen. Droit romain, routes, aqueducs, et Pax Romana. Christianisé au IVe siècle, divisé puis chute en 476 (Occident).",
    mainWorks: [
      "Pax Romana - paix et prospérité",
      "Droit romain et citoyenneté",
      "Infrastructure (routes, aqueducs)",
      "Christianisation et chute (476)",
    ],
  },
  {
    id: "han",
    name: "Empire Han",
    birthYear: -206,
    deathYear: 220,
    nationality: "Chinois",
    movement: "Antiquité",
    summary:
      "Âge d'or de la Chine antique, contemporain de Rome. Route de la soie, papier, confucianisme d'État. Les Chinois s'appellent encore 'peuple Han'.",
    mainWorks: [
      "Route de la soie",
      "Invention du papier",
      "Confucianisme d'État",
      "Expansion vers l'Asie centrale",
    ],
  },
  {
    id: "byzance",
    name: "Empire byzantin",
    birthYear: 330,
    deathYear: 1453,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Justinian555AD.png/330px-Justinian555AD.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Byzantin",
    movement: "Moyen Âge",
    summary:
      "Continuation de l'Empire romain d'Orient pendant mille ans. Constantinople, la plus grande ville d'Europe. Préserve la culture grecque, orthodoxie chrétienne. Tombe face aux Ottomans.",
    mainWorks: [
      "Constantinople - capitale millénaire",
      "Sainte-Sophie",
      "Code Justinien",
      "Chute face aux Ottomans (1453)",
    ],
  },
  {
    id: "califat-omeyyade",
    name: "Califat omeyyade",
    birthYear: 661,
    deathYear: 750,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Umayyad_Caliphate_720_AD_%28orthographic_projection%29.svg/langfr-330px-Umayyad_Caliphate_720_AD_%28orthographic_projection%29.svg.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Arabe",
    movement: "Moyen Âge",
    summary:
      "Premier grand empire islamique, de l'Espagne à l'Inde. Damas comme capitale, arabisation de l'administration. Renversé par les Abbassides, survit en Espagne (Al-Andalus).",
    mainWorks: [
      "Expansion de l'Espagne à l'Indus",
      "Dôme du Rocher à Jérusalem",
      "Arabisation de l'administration",
      "Al-Andalus - califat de Cordoue",
    ],
  },
  {
    id: "carolingien",
    name: "Empire carolingien",
    birthYear: 768,
    deathYear: 843,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Francia_814.svg/langfr-330px-Francia_814.svg.png",
    nationality: "Franc",
    movement: "Moyen Âge",
    summary:
      "Charlemagne reconstitue un empire en Occident, couronné empereur en 800. Renaissance carolingienne et unification de l'Europe occidentale. Divisé en 843 (traité de Verdun).",
    mainWorks: [
      "Sacre de Charlemagne (800)",
      "Renaissance carolingienne",
      "Écoles et scriptoria",
      "Traité de Verdun (843) - division",
    ],
  },
  {
    id: "mongol",
    name: "Empire mongol",
    birthYear: 1206,
    deathYear: 1368,
    nationality: "Mongol",
    movement: "Moyen Âge",
    summary:
      "Plus grand empire terrestre de l'histoire, de la Corée à la Pologne. Gengis Khan unifie les tribus mongoles et conquiert l'Asie. Pax Mongolica facilite les échanges sur la Route de la soie.",
    mainWorks: [
      "Gengis Khan - unification des Mongols",
      "Conquête de la Chine, Perse, Russie",
      "Pax Mongolica - commerce transcontinental",
      "Fragmentation en khanats",
    ],
  },
  {
    id: "ottoman",
    name: "Empire ottoman",
    birthYear: 1299,
    deathYear: 1922,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Ottoman_1590_%28orthographic_projection%29.png/330px-Ottoman_1590_%28orthographic_projection%29.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Ottoman",
    movement: "Moyen Âge / Moderne",
    summary:
      "Empire musulman de six siècles, des Balkans au Moyen-Orient. Prise de Constantinople (1453), apogée sous Soliman. Décline au XIXe siècle, aboli après la Première Guerre mondiale.",
    mainWorks: [
      "Prise de Constantinople (1453)",
      "Soliman le Magnifique",
      "Millet - autonomie des communautés religieuses",
      "Abolition et République turque (1922-1923)",
    ],
  },
  {
    id: "ming",
    name: "Empire Ming",
    birthYear: 1368,
    deathYear: 1644,
    nationality: "Chinois",
    movement: "Moyen Âge / Moderne",
    summary:
      "Dernière dynastie chinoise d'origine Han. Cité interdite, Grande Muraille reconstruite, expéditions de Zheng He. Repli sur soi et chute face aux Mandchous.",
    mainWorks: [
      "Cité interdite à Pékin",
      "Expéditions maritimes de Zheng He",
      "Reconstruction de la Grande Muraille",
      "Porcelaine bleue et blanche",
    ],
  },
  {
    id: "espagnol",
    name: "Empire espagnol",
    birthYear: 1492,
    deathYear: 1898,
    nationality: "Espagnol",
    movement: "Moderne",
    summary:
      "Premier empire sur lequel le soleil ne se couche jamais. Amériques, Philippines, Pays-Bas. Or et argent affluent mais déclinent au XVIIe siècle. Pertes des colonies au XIXe siècle.",
    mainWorks: [
      "Conquête des Amériques (Cortés, Pizarro)",
      "Empire colonial mondial",
      "Siglo de Oro culturel",
      "Indépendances américaines (XIXe)",
    ],
  },
  {
    id: "moghol",
    name: "Empire moghol",
    birthYear: 1526,
    deathYear: 1857,
    nationality: "Indien",
    movement: "Moderne",
    summary:
      "Empire musulman en Inde, descendant de Tamerlan. Akbar le Grand instaure la tolérance religieuse. Taj Mahal, miniatures, fusion indo-persane. Absorbé par l'Empire britannique.",
    mainWorks: [
      "Akbar le Grand - tolérance religieuse",
      "Taj Mahal",
      "Art de la miniature moghole",
      "Annexion britannique (1857)",
    ],
  },
  {
    id: "britannique",
    name: "Empire britannique",
    birthYear: 1583,
    deathYear: 1997,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/The_British_Empire.png/330px-The_British_Empire.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Britannique",
    movement: "Moderne / Contemporain",
    summary:
      "Plus grand empire de l'histoire, un quart de la population mondiale. Inde, Afrique, Canada, Australie. Langue anglaise, common law, cricket. Décolonisation après 1945.",
    mainWorks: [
      "Raj britannique en Inde",
      "Partage de l'Afrique",
      "Commonwealth des nations",
      "Rétrocession de Hong Kong (1997)",
    ],
  },
  {
    id: "russe",
    name: "Empire russe",
    birthYear: 1721,
    deathYear: 1917,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Russian_Empire_%28orthographic_projection%29.svg/langfr-330px-Russian_Empire_%28orthographic_projection%29.svg.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Russe",
    movement: "Moderne",
    summary:
      "De Pierre le Grand à Nicolas II, la Russie s'étend de la Pologne au Pacifique. Modernisation autoritaire, servage, autocratie. Révolution de 1917 et naissance de l'URSS.",
    mainWorks: [
      "Pierre le Grand - occidentalisation",
      "Expansion en Sibérie et Asie centrale",
      "Saint-Pétersbourg",
      "Révolution russe (1917)",
    ],
  },
  {
    id: "napoleonien",
    name: "Empire napoléonien",
    birthYear: 1804,
    deathYear: 1815,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/French_empire_sept_1812_occupation_and_sphere.png/330px-French_empire_sept_1812_occupation_and_sphere.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Moderne",
    summary:
      "Napoléon domine l'Europe de Madrid à Moscou. Code civil, réorganisation administrative, mais guerres incessantes. Waterloo met fin à l'aventure, mais l'héritage perdure.",
    mainWorks: [
      "Code civil napoléonien",
      "Réorganisation de l'Europe",
      "Campagnes militaires",
      "Waterloo et exil (1815)",
    ],
  },
  {
    id: "qing",
    name: "Empire Qing",
    birthYear: 1644,
    deathYear: 1912,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Qing_dynasty_in_1760.svg/langfr-330px-Qing_dynasty_in_1760.svg.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Chinois (Mandchou)",
    movement: "Moderne",
    summary:
      "Dernière dynastie impériale chinoise, fondée par les Mandchous. Apogée territorial (Tibet, Xinjiang, Mongolie). Guerres de l'opium, rébellions, chute et République.",
    mainWorks: [
      "Expansion maximale de la Chine",
      "Prospérité du XVIIIe siècle",
      "Guerres de l'opium - humiliation",
      "Chute et République (1912)",
    ],
  },
  {
    id: "colonial-francais",
    name: "Empire colonial français",
    birthYear: 1534,
    deathYear: 1962,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/EmpireFrench.png/330px-EmpireFrench.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Moderne / Contemporain",
    summary:
      "Deuxième empire colonial, d'Afrique du Nord à l'Indochine. Mission civilisatrice, assimilation. Décolonisation douloureuse : Indochine (1954), Algérie (1962).",
    mainWorks: [
      "Afrique du Nord et subsaharienne",
      "Indochine française",
      "Mission civilisatrice",
      "Décolonisation (1954-1962)",
    ],
  },
  {
    id: "sovietique",
    name: "Union soviétique",
    birthYear: 1922,
    deathYear: 1991,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Union_of_Soviet_Socialist_Republics_%28orthographic_projection%29.svg/langfr-330px-Union_of_Soviet_Socialist_Republics_%28orthographic_projection%29.svg.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Soviétique",
    movement: "Contemporain",
    summary:
      "Superpuissance communiste, de la Baltique au Pacifique. Industrialisation forcée, Goulag, Guerre froide, course à l'espace. Effondrement en 1991.",
    mainWorks: [
      "Révolution et guerre civile",
      "Stalinisme et industrialisation",
      "Guerre froide et course spatiale",
      "Effondrement (1991)",
    ],
  },
  {
    id: "americain",
    name: "Puissance américaine",
    birthYear: 1945,
    nationality: "Américain",
    movement: "Contemporain",
    summary:
      "Superpuissance depuis 1945, les États-Unis dominent économiquement, militairement et culturellement. Bases mondiales, dollar, Hollywood. Hégémonie contestée au XXIe siècle.",
    mainWorks: [
      "Plan Marshall et reconstruction",
      "OTAN et alliances mondiales",
      "Soft power culturel",
      "Unipolarité post-Guerre froide",
    ],
  },
];
