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
}

export const empires: EmpireItem[] = [
  {
    id: "akkad",
    name: "Empire akkadien",
    birthYear: -2334,
    deathYear: -2154,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Sargon_of_Akkad.jpg/220px-Sargon_of_Akkad.jpg",
    nationality: "Mesopotamien",
    movement: "Antiquite",
    summary:
      "Premier empire de l'histoire, fonde par Sargon d'Akkad. Unifie la Mesopotamie de la Mediterranee au golfe Persique. Modele pour tous les empires ulterieurs.",
    mainWorks: [
      "Premier empire universel",
      "Sargon d'Akkad - premier empereur",
      "Unification de la Mesopotamie",
      "Administration centralisee",
    ],
  },
  {
    id: "egypte",
    name: "Egypte pharaonique",
    birthYear: -3100,
    deathYear: -30,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/220px-Kheops-Pyramid.jpg",
    nationality: "Egyptien",
    movement: "Antiquite",
    summary:
      "Plus longue civilisation de l'histoire (3000 ans). Les pharaons batissent pyramides et temples, developpent l'ecriture hieroglyphique et une religion elaboree. S'acheve avec Cleopatre.",
    mainWorks: [
      "Pyramides de Gizeh",
      "Empire du Nouvel Empire (Thoutmosis, Ramses)",
      "Hieroglyphes et Livre des Morts",
      "Conquete par Rome (-30)",
    ],
  },
  {
    id: "assyrie",
    name: "Empire assyrien",
    birthYear: -2500,
    deathYear: -609,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Assyrian_Relief_Attack_on_Enemy_Town.jpg/220px-Assyrian_Relief_Attack_on_Enemy_Town.jpg",
    nationality: "Mesopotamien",
    movement: "Antiquite",
    summary:
      "Empire militaire redoutable, il domine le Moyen-Orient ancien. Armee professionnelle, deportations massives, et bibliotheque d'Assurbanipal preservant les savoirs mesopotamiens.",
    mainWorks: [
      "Premiere armee professionnelle",
      "Conquete de l'Egypte",
      "Bibliotheque d'Assurbanipal a Ninive",
      "Destruction par Babylone et les Medes (-609)",
    ],
  },
  {
    id: "perse-achemenide",
    name: "Empire perse achemenide",
    birthYear: -550,
    deathYear: -330,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Persepolis_The_Persian_Soldiers.jpg/220px-Persepolis_The_Persian_Soldiers.jpg",
    nationality: "Perse",
    movement: "Antiquite",
    summary:
      "Plus grand empire du monde antique, de l'Egypte a l'Inde. Cyrus le Grand fonde un modele de tolerance. Route royale, satrapies, et guerres mediques contre les Grecs. Conquis par Alexandre.",
    mainWorks: [
      "Cyrus le Grand - tolerance religieuse",
      "Darius Ier - organisation administrative",
      "Route royale et poste imperiale",
      "Persepolis - capitale ceremonielle",
    ],
  },
  {
    id: "alexandre",
    name: "Empire d'Alexandre",
    birthYear: -336,
    deathYear: -323,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Alexander_the_Great_mosaic.jpg/220px-Alexander_the_Great_mosaic.jpg",
    nationality: "Macedonien",
    movement: "Antiquite",
    summary:
      "En 13 ans, Alexandre conquiert l'empire perse jusqu'a l'Inde. Son empire ephemere diffuse la culture grecque (hellenisation) de l'Egypte a l'Asie centrale. Divise entre ses generaux.",
    mainWorks: [
      "Conquete de l'empire perse",
      "Fondation d'Alexandrie",
      "Hellenisation de l'Orient",
      "Royaumes des Diadoques",
    ],
  },
  {
    id: "rome",
    name: "Empire romain",
    birthYear: -27,
    deathYear: 476,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/220px-Colosseo_2020.jpg",
    nationality: "Romain",
    movement: "Antiquite",
    summary:
      "De la Bretagne a la Mesopotamie, Rome unifie le monde mediterraneen. Droit romain, routes, aqueducs, et Pax Romana. Christianise au IVe siecle, divise puis chute en 476 (Occident).",
    mainWorks: [
      "Pax Romana - paix et prosperite",
      "Droit romain et citoyennete",
      "Infrastructure (routes, aqueducs)",
      "Christianisation et chute (476)",
    ],
  },
  {
    id: "han",
    name: "Empire Han",
    birthYear: -206,
    deathYear: 220,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Terracotta_Army%2C_View_of_Pit_1.jpg/220px-Terracotta_Army%2C_View_of_Pit_1.jpg",
    nationality: "Chinois",
    movement: "Antiquite",
    summary:
      "Age d'or de la Chine antique, contemporain de Rome. Route de la soie, papier, confucianisme d'Etat. Les Chinois s'appellent encore 'peuple Han'.",
    mainWorks: [
      "Route de la soie",
      "Invention du papier",
      "Confucianisme d'Etat",
      "Expansion vers l'Asie centrale",
    ],
  },
  {
    id: "byzance",
    name: "Empire byzantin",
    birthYear: 330,
    deathYear: 1453,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Hagia_Sophia_Mars_2013.jpg/220px-Hagia_Sophia_Mars_2013.jpg",
    nationality: "Byzantin",
    movement: "Moyen Age",
    summary:
      "Continuation de l'Empire romain d'Orient pendant mille ans. Constantinople, la plus grande ville d'Europe. Preserve la culture grecque, orthodoxie chretienne. Tombe face aux Ottomans.",
    mainWorks: [
      "Constantinople - capitale millenaire",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Dome_of_Rock%2C_Temple_Mount%2C_Jerusalem.jpg/220px-Dome_of_Rock%2C_Temple_Mount%2C_Jerusalem.jpg",
    nationality: "Arabe",
    movement: "Moyen Age",
    summary:
      "Premier grand empire islamique, de l'Espagne a l'Inde. Damas comme capitale, arabisation de l'administration. Renverse par les Abbassides, survit en Espagne (Al-Andalus).",
    mainWorks: [
      "Expansion de l'Espagne a l'Indus",
      "Dome du Rocher a Jerusalem",
      "Arabisation de l'administration",
      "Al-Andalus - califat de Cordoue",
    ],
  },
  {
    id: "carolingien",
    name: "Empire carolingien",
    birthYear: 768,
    deathYear: 843,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Charlemagne_denier_Mayence_812_814.jpg/220px-Charlemagne_denier_Mayence_812_814.jpg",
    nationality: "Franc",
    movement: "Moyen Age",
    summary:
      "Charlemagne reconstitue un empire en Occident, couronne empereur en 800. Renaissance carolingienne et unification de l'Europe occidentale. Divise en 843 (traite de Verdun).",
    mainWorks: [
      "Sacre de Charlemagne (800)",
      "Renaissance carolingienne",
      "Ecoles et scriptoria",
      "Traite de Verdun (843) - division",
    ],
  },
  {
    id: "mongol",
    name: "Empire mongol",
    birthYear: 1206,
    deathYear: 1368,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/YuanEmperorAlbumGenghisPortrait.jpg/220px-YuanEmperorAlbumGenghisPortrait.jpg",
    nationality: "Mongol",
    movement: "Moyen Age",
    summary:
      "Plus grand empire terrestre de l'histoire, de la Coree a la Pologne. Gengis Khan unifie les tribus mongoles et conquiert l'Asie. Pax Mongolica facilite les echanges sur la Route de la soie.",
    mainWorks: [
      "Gengis Khan - unification des Mongols",
      "Conquete de la Chine, Perse, Russie",
      "Pax Mongolica - commerce transcontinental",
      "Fragmentation en khanats",
    ],
  },
  {
    id: "ottoman",
    name: "Empire ottoman",
    birthYear: 1299,
    deathYear: 1922,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/EmpesssrorSulewordasdiman.jpg/220px-EmperorSuleiman.jpg",
    nationality: "Ottoman",
    movement: "Moyen Age / Moderne",
    summary:
      "Empire musulman de six siecles, des Balkans au Moyen-Orient. Prise de Constantinople (1453), apogee sous Soliman. Decline au XIXe siecle, aboli apres la Premiere Guerre mondiale.",
    mainWorks: [
      "Prise de Constantinople (1453)",
      "Soliman le Magnifique",
      "Millet - autonomie des communautes religieuses",
      "Abolition et Republique turque (1922-1923)",
    ],
  },
  {
    id: "ming",
    name: "Empire Ming",
    birthYear: 1368,
    deathYear: 1644,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Forbidden_City_Beijing_Shenwumen_Gate.jpg/220px-Forbidden_City_Beijing_Shenwumen_Gate.jpg",
    nationality: "Chinois",
    movement: "Moyen Age / Moderne",
    summary:
      "Derniere dynastie chinoise d'origine Han. Cite interdite, Grande Muraille reconstruite, expeditions de Zheng He. Repli sur soi et chute face aux Mandchous.",
    mainWorks: [
      "Cite interdite a Pekin",
      "Expeditions maritimes de Zheng He",
      "Reconstruction de la Grande Muraille",
      "Porcelaine bleue et blanche",
    ],
  },
  {
    id: "espagnol",
    name: "Empire espagnol",
    birthYear: 1492,
    deathYear: 1898,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_New_Spain.svg/220px-Flag_of_New_Spain.svg.png",
    nationality: "Espagnol",
    movement: "Moderne",
    summary:
      "Premier empire sur lequel le soleil ne se couche jamais. Ameriques, Philippines, Pays-Bas. Or et argent affluent mais declinent au XVIIe siecle. Pertes des colonies au XIXe siecle.",
    mainWorks: [
      "Conquete des Ameriques (Cortes, Pizarro)",
      "Empire colonial mondial",
      "Siglo de Oro culturel",
      "Independances americaines (XIXe)",
    ],
  },
  {
    id: "moghol",
    name: "Empire moghol",
    birthYear: 1526,
    deathYear: 1857,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/220px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg",
    nationality: "Indien",
    movement: "Moderne",
    summary:
      "Empire musulman en Inde, descendant de Tamerlan. Akbar le Grand instaure la tolerance religieuse. Taj Mahal, miniatures, fusion indo-persane. Absorbe par l'Empire britannique.",
    mainWorks: [
      "Akbar le Grand - tolerance religieuse",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/British_Empire_1921.png/220px-British_Empire_1921.png",
    nationality: "Britannique",
    movement: "Moderne / Contemporain",
    summary:
      "Plus grand empire de l'histoire, un quart de la population mondiale. Inde, Afrique, Canada, Australie. Langue anglaise, common law, cricket. Decolonisation apres 1945.",
    mainWorks: [
      "Raj britannique en Inde",
      "Partage de l'Afrique",
      "Commonwealth des nations",
      "Retrocession de Hong Kong (1997)",
    ],
  },
  {
    id: "russe",
    name: "Empire russe",
    birthYear: 1721,
    deathYear: 1917,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Peter_der-Grosse_1838.jpg/220px-Peter_der-Grosse_1838.jpg",
    nationality: "Russe",
    movement: "Moderne",
    summary:
      "De Pierre le Grand a Nicolas II, la Russie s'etend de la Pologne au Pacifique. Modernisation autoritaire, servage, autocratie. Revolution de 1917 et naissance de l'URSS.",
    mainWorks: [
      "Pierre le Grand - occidentalisation",
      "Expansion en Siberie et Asie centrale",
      "Saint-Petersbourg",
      "Revolution russe (1917)",
    ],
  },
  {
    id: "napoleonien",
    name: "Empire napoleonien",
    birthYear: 1804,
    deathYear: 1815,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/220px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg",
    nationality: "Francais",
    movement: "Moderne",
    summary:
      "Napoleon domine l'Europe de Madrid a Moscou. Code civil, reorganisation administrative, mais guerres incessantes. Waterloo met fin a l'aventure, mais l'heritage perdure.",
    mainWorks: [
      "Code civil napoleonien",
      "Reorganisation de l'Europe",
      "Campagnes militaires",
      "Waterloo et exil (1815)",
    ],
  },
  {
    id: "qing",
    name: "Empire Qing",
    birthYear: 1644,
    deathYear: 1912,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Emperor_Qianlong_in_Old_Age.jpg/220px-Emperor_Qianlong_in_Old_Age.jpg",
    nationality: "Chinois (Mandchou)",
    movement: "Moderne",
    summary:
      "Derniere dynastie imperiale chinoise, fondee par les Mandchous. Apogee territorial (Tibet, Xinjiang, Mongolie). Guerres de l'opium, rebellions, chute et Republique.",
    mainWorks: [
      "Expansion maximale de la Chine",
      "Prosperite du XVIIIe siecle",
      "Guerres de l'opium - humiliation",
      "Chute et Republique (1912)",
    ],
  },
  {
    id: "colonial-francais",
    name: "Empire colonial francais",
    birthYear: 1534,
    deathYear: 1962,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/French_Empire_1919-1939.png/220px-French_Empire_1919-1939.png",
    nationality: "Francais",
    movement: "Moderne / Contemporain",
    summary:
      "Deuxieme empire colonial, d'Afrique du Nord a l'Indochine. Mission civilisatrice, assimilation. Decolonisation douloureuse : Indochine (1954), Algerie (1962).",
    mainWorks: [
      "Afrique du Nord et subsaharienne",
      "Indochine francaise",
      "Mission civilisatrice",
      "Decolonisation (1954-1962)",
    ],
  },
  {
    id: "sovietique",
    name: "Union sovietique",
    birthYear: 1922,
    deathYear: 1991,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/220px-Flag_of_the_Soviet_Union.svg.png",
    nationality: "Sovietique",
    movement: "Contemporain",
    summary:
      "Superpuissance communiste, de la Baltique au Pacifique. Industrialisation forcee, Goulag, Guerre froide, course a l'espace. Effondrement en 1991.",
    mainWorks: [
      "Revolution et guerre civile",
      "Stalinisme et industrialisation",
      "Guerre froide et course spatiale",
      "Effondrement (1991)",
    ],
  },
  {
    id: "americain",
    name: "Puissance americaine",
    birthYear: 1945,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/220px-Flag_of_the_United_States.svg.png",
    nationality: "Americain",
    movement: "Contemporain",
    summary:
      "Superpuissance depuis 1945, les Etats-Unis dominent economiquement, militairement et culturellement. Bases mondiales, dollar, Hollywood. Hegemonie contestee au XXIe siecle.",
    mainWorks: [
      "Plan Marshall et reconstruction",
      "OTAN et alliances mondiales",
      "Soft power culturel",
      "Unipolarite post-Guerre froide",
    ],
  },
];
