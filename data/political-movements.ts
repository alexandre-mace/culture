export interface PoliticalMovementItem {
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

export const politicalMovements: PoliticalMovementItem[] = [
  {
    id: "republique-romaine",
    name: "République romaine",
    birthYear: -509,
    deathYear: -27,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Republica_romana_animada.GIF/330px-Republica_romana_animada.GIF?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Romain",
    movement: "Antiquité",
    family: "Ordres anciens",
    summary:
      "Première grande république de l'histoire, Rome développe des institutions (Sénat, consuls, tribuns) qui influenceront durablement la pensée politique occidentale. Modèle de gouvernement mixte.",
    mainWorks: [
      "Sénat et magistratures électives",
      "Séparation des pouvoirs (potestas)",
      "Tribuns de la plèbe - représentation populaire",
      "Droit romain et citoyenneté",
    ],
  },
  {
    id: "protestantisme",
    name: "Réforme protestante",
    birthYear: 1517,
    deathYear: 1648,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/95Thesen_facsimile_colour.png/330px-95Thesen_facsimile_colour.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Européen",
    movement: "Renaissance",
    family: "Ordres anciens",
    summary:
      "Mouvement religieux initié par Luther qui bouleverse l'ordre politique européen. En remettant en cause l'autorité papale, il ouvre la voie à la liberté de conscience et aux guerres de religion.",
    mainWorks: [
      "95 thèses de Luther (1517)",
      "Calvinisme et prédestination",
      "Guerres de religion en Europe",
      "Paix de Westphalie (1648)",
    ],
  },
  {
    id: "absolutisme",
    name: "Absolutisme",
    birthYear: 1589,
    deathYear: 1789,
    nationality: "Européen",
    movement: "Ancien Régime",
    family: "Ordres anciens",
    summary:
      "Doctrine politique où le monarque détient tous les pouvoirs de droit divin. Louis XIV en est l'incarnation : 'L'État, c'est moi'. Système dominant en Europe jusqu'aux révolutions.",
    mainWorks: [
      "Monarchie de droit divin",
      "Centralisation administrative",
      "Louis XIV - modèle du roi absolu",
      "Versailles - symbole du pouvoir royal",
    ],
  },
  {
    id: "lumieres",
    name: "Lumières",
    birthYear: 1715,
    deathYear: 1789,
    nationality: "Européen",
    movement: "XVIIIe siècle",
    family: "Ère des révolutions",
    influences: ["liberalisme"],
    summary:
      "Mouvement intellectuel qui promeut la raison, la liberté et le progrès contre l'obscurantisme. Voltaire, Rousseau, Montesquieu posent les bases philosophiques des révolutions à venir.",
    mainWorks: [
      "Encyclopédie de Diderot et d'Alembert",
      "Séparation des pouvoirs (Montesquieu)",
      "Contrat social (Rousseau)",
      "Tolérance et liberté d'expression (Voltaire)",
    ],
  },
  {
    id: "liberalisme",
    name: "Libéralisme",
    birthYear: 1689,
    deathYear: 1900,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg/330px-La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Anglo-saxon",
    movement: "Modernité",
    family: "Ère des révolutions",
    summary:
      "Philosophie politique fondée sur la liberté individuelle, les droits naturels et le gouvernement limité. De Locke à Mill, il inspire les révolutions américaine et française.",
    mainWorks: [
      "Droits naturels et consentement (Locke)",
      "Liberté économique (Adam Smith)",
      "Déclaration des droits de l'homme",
      "De la liberté (John Stuart Mill)",
    ],
  },
  {
    id: "revolution-americaine",
    name: "Révolution américaine",
    birthYear: 1765,
    deathYear: 1791,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg/330px-Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Révolutions",
    family: "Ère des révolutions",
    influences: ["lumieres", "liberalisme"],
    summary:
      "Première révolution moderne, les colonies américaines s'émancipent de la Grande-Bretagne. La Déclaration d'indépendance et la Constitution établissent une république fédérale démocratique.",
    mainWorks: [
      "Déclaration d'indépendance (1776)",
      "Constitution fédérale (1787)",
      "Bill of Rights (1791)",
      "République fédérale et séparation des pouvoirs",
    ],
  },
  {
    id: "revolution-francaise",
    name: "Révolution française",
    birthYear: 1789,
    deathYear: 1799,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Prise_de_la_Bastille.jpg/330px-Prise_de_la_Bastille.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Révolutions",
    family: "Ère des révolutions",
    influences: ["lumieres", "revolution-americaine"],
    summary:
      "Bouleversement radical qui abolit la monarchie absolue et les privilèges. Déclaration des droits de l'homme, Terreur, Directoire : elle transforme définitivement la politique moderne.",
    mainWorks: [
      "Prise de la Bastille (14 juillet 1789)",
      "Déclaration des droits de l'homme et du citoyen",
      "Abolition de la monarchie (1792)",
      "Terreur et thermidor",
    ],
  },
  {
    id: "nationalisme",
    name: "Nationalisme",
    birthYear: 1789,
    deathYear: 1945,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_Map_of_World_%282025%29.png/330px-Flag_Map_of_World_%282025%29.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Européen",
    movement: "XIXe siècle",
    family: "Idéologies du XIXe",
    influences: ["lumieres"],
    summary:
      "Idéologie qui fait de la nation le cadre légitime du pouvoir politique. Moteur des unifications italienne et allemande, il dégénérera en nationalismes agressifs au XXe siècle.",
    mainWorks: [
      "Printemps des peuples (1848)",
      "Unification italienne (Risorgimento)",
      "Unification allemande (Bismarck)",
      "Nationalismes et guerres mondiales",
    ],
  },
  {
    id: "socialisme",
    name: "Socialisme",
    birthYear: 1825,
    deathYear: 1991,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Madrid_may_day375.jpg/330px-Madrid_may_day375.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Européen",
    movement: "XIXe-XXe siècles",
    family: "Idéologies du XIXe",
    influences: ["revolution-francaise"],
    summary:
      "Mouvement né de la question ouvrière, il critique le capitalisme et prône la propriété collective. Du socialisme utopique à Marx, il inspire syndicats et partis ouvriers.",
    mainWorks: [
      "Socialistes utopiques (Owen, Fourier, Saint-Simon)",
      "Manifeste du Parti communiste (Marx, 1848)",
      "Internationale ouvrière",
      "Social-démocratie et État-providence",
    ],
  },
  {
    id: "marxisme",
    name: "Marxisme",
    birthYear: 1848,
    deathYear: 1991,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Marx_and_Engels.jpg/330px-Marx_and_Engels.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "XIXe-XXe siècles",
    family: "Idéologies du XIXe",
    influences: ["socialisme"],
    summary:
      "Théorie de Marx et Engels analysant l'histoire comme lutte des classes. Le capitalisme doit être renversé par la révolution prolétarienne. Base du communisme au XXe siècle.",
    mainWorks: [
      "Matérialisme historique",
      "Le Capital (1867)",
      "Dictature du prolétariat",
      "Révolution bolchevique (1917)",
    ],
  },
  {
    id: "anarchisme",
    name: "Anarchisme",
    birthYear: 1840,
    deathYear: 1939,
    nationality: "Européen",
    movement: "XIXe siècle",
    family: "Idéologies du XIXe",
    influences: ["socialisme"],
    summary:
      "Philosophie politique rejetant toute forme d'autorité coercitive, notamment l'État. De Proudhon à Bakounine, il prône l'auto-organisation et influencera le syndicalisme révolutionnaire.",
    mainWorks: [
      "Qu'est-ce que la propriété? (Proudhon, 1840)",
      "Anarcho-collectivisme (Bakounine)",
      "Anarcho-communisme (Kropotkine)",
      "CNT et guerre d'Espagne",
    ],
  },
  {
    id: "imperialisme",
    name: "Impérialisme colonial",
    birthYear: 1880,
    deathYear: 1960,
    nationality: "Européen",
    movement: "XIXe-XXe siècles",
    family: "Idéologies du XIXe",
    influences: ["nationalisme"],
    summary:
      "Expansion des puissances européennes sur le monde, justifiée par la 'mission civilisatrice'. Partage de l'Afrique, domination de l'Asie, exploitation des ressources et des peuples.",
    mainWorks: [
      "Conférence de Berlin - partage de l'Afrique (1884)",
      "Empires coloniaux britannique, français, belge",
      "Mission civilisatrice et racisme",
      "Décolonisation après 1945",
    ],
  },
  {
    id: "fascisme",
    name: "Fascisme",
    birthYear: 1919,
    deathYear: 1945,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Mussolini_and_Hitler_1940_%28retouched%29.jpg/330px-Mussolini_and_Hitler_1940_%28retouched%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Italien/Allemand",
    movement: "XXe siècle",
    family: "XXe siècle",
    influences: ["nationalisme", "communisme-sovietique"],
    summary:
      "Idéologie totalitaire, ultranationaliste et antidémocratique. Mussolini en Italie, Hitler en Allemagne établissent des régimes de terreur qui mèneront à la Seconde Guerre mondiale et à la Shoah.",
    mainWorks: [
      "Marche sur Rome (1922)",
      "Nazisme et idéologie raciale",
      "Totalitarisme et culte du chef",
      "Shoah et crimes contre l'humanité",
    ],
  },
  {
    id: "communisme-sovietique",
    name: "Communisme soviétique",
    birthYear: 1917,
    deathYear: 1991,
    nationality: "Soviétique",
    movement: "XXe siècle",
    family: "XXe siècle",
    influences: ["marxisme"],
    summary:
      "Application du marxisme-léninisme en URSS. Parti unique, économie planifiée, terreur stalinienne. Modèle exporté dans le monde entier pendant la Guerre froide, jusqu'à l'effondrement de 1991.",
    mainWorks: [
      "Révolution d'Octobre (1917)",
      "Stalinisme et Goulag",
      "Économie planifiée et collectivisation",
      "Chute du mur de Berlin et dissolution de l'URSS",
    ],
  },
  {
    id: "anticolonialisme",
    name: "Anticolonialisme",
    birthYear: 1945,
    deathYear: 1975,
    nationality: "Global",
    movement: "XXe siècle",
    family: "XXe siècle",
    influences: ["nationalisme", "marxisme"],
    summary:
      "Mouvements de libération des peuples colonisés après 1945. De l'Inde à l'Algérie, du Vietnam au Congo, les empires coloniaux s'effondrent. Émergence du tiers-monde et du non-alignement.",
    mainWorks: [
      "Indépendance de l'Inde (1947)",
      "Guerre d'Algérie (1954-1962)",
      "Conférence de Bandung (1955)",
      "Décolonisation de l'Afrique",
    ],
  },
  {
    id: "neoliberalisme",
    name: "Néolibéralisme",
    birthYear: 1979,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/The_World_Bank_Group_building.JPG/330px-The_World_Bank_Group_building.JPG?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Anglo-saxon",
    movement: "Fin XXe siècle",
    family: "Époque contemporaine",
    influences: ["liberalisme"],
    summary:
      "Doctrine économique et politique prônant la dérégulation, les privatisations et le libre marché. Thatcher et Reagan l'imposent, il devient dominant après la chute du communisme.",
    mainWorks: [
      "Révolution conservatrice (Thatcher, Reagan)",
      "Consensus de Washington",
      "Mondialisation et libre-échange",
      "Privatisations et dérégulation",
    ],
  },
  {
    id: "ecologisme",
    name: "Écologisme politique",
    birthYear: 1970,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/CleanEnergyMarch-4-1470259_%2827925280684%29.jpg/330px-CleanEnergyMarch-4-1470259_%2827925280684%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Global",
    movement: "XXe-XXIe siècles",
    family: "Époque contemporaine",
    summary:
      "Mouvement politique né de la prise de conscience environnementale. Des Verts allemands aux accords de Paris, l'écologie politique devient un enjeu majeur face au changement climatique.",
    mainWorks: [
      "Jour de la Terre (1970)",
      "Rapport Meadows - limites de la croissance (1972)",
      "Partis Verts en Europe",
      "Accords de Paris sur le climat (2015)",
    ],
  },
  {
    id: "populisme",
    name: "Populisme contemporain",
    birthYear: 2008,
    nationality: "Global",
    movement: "XXIe siècle",
    family: "Époque contemporaine",
    influences: ["nationalisme"],
    summary:
      "Résurgence de mouvements opposant le 'peuple' aux 'élites'. De droite ou de gauche, ils contestent la mondialisation et les institutions. Brexit, Trump, montée des extrêmes en Europe.",
    mainWorks: [
      "Crise financière de 2008",
      "Brexit (2016)",
      "Élection de Trump (2016)",
      "Montée des partis populistes en Europe",
    ],
  },
];
