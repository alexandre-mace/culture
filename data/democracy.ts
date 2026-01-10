export interface DemocracyItem {
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

export const democracy: DemocracyItem[] = [
  {
    id: "athenes",
    name: "Democratie athenienne",
    birthYear: -508,
    deathYear: -322,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Discurso_funebre_pericles.PNG/220px-Discurso_funebre_pericles.PNG",
    nationality: "Grec",
    movement: "Antiquite",
    summary:
      "Premiere democratie de l'histoire, instauree par Clisthene. Les citoyens (hommes, libres, atheniens) votent directement les lois et tirent au sort les magistrats. Modele pour la posterite.",
    mainWorks: [
      "Reformes de Clisthene (-508)",
      "Ecclesia - assemblee des citoyens",
      "Tirage au sort des magistrats",
      "Pericles - apogee de la democratie",
    ],
  },
  {
    id: "republique-romaine",
    name: "Republique romaine",
    birthYear: -509,
    deathYear: -27,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maccari-Cicero.jpg/220px-Maccari-Cicero.jpg",
    nationality: "Romain",
    movement: "Antiquite",
    summary:
      "Systeme mixte : consuls, Senat, assemblees du peuple. Les tribuns de la plebe defendent le peuple. Equilibre des pouvoirs, mais oligarchie de fait. Inspire les republiques modernes.",
    mainWorks: [
      "Senat et magistratures",
      "Tribuns de la plebe",
      "SPQR - le peuple et le Senat",
      "Equilibre des pouvoirs",
    ],
  },
  {
    id: "magna-carta",
    name: "Magna Carta",
    birthYear: 1215,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Magna_Carta_%28British_Library_Cotton_MS_Augustus_II.106%29.jpg/220px-Magna_Carta.jpg",
    nationality: "Anglais",
    movement: "Moyen Age",
    summary:
      "Charte imposee au roi Jean sans Terre par les barons. Limite le pouvoir royal, protege certains droits. Base du constitutionnalisme anglais et de l'habeas corpus.",
    mainWorks: [
      "Limite du pouvoir royal",
      "Droits des barons",
      "Base de l'habeas corpus",
      "Modele constitutionnel",
    ],
  },
  {
    id: "parlement-anglais",
    name: "Parlement anglais",
    birthYear: 1265,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/220px-Palace_of_Westminster.jpg",
    nationality: "Anglais",
    movement: "Moyen Age",
    summary:
      "Simon de Montfort convoque le premier Parlement avec des representants des communes. Evolution vers le bicameralisme (Lords et Communes). Modele du parlementarisme mondial.",
    mainWorks: [
      "Premier Parlement (1265)",
      "Chambre des Lords et des Communes",
      "Consentement a l'impot",
      "Modele du parlementarisme",
    ],
  },
  {
    id: "revolution-anglaise",
    name: "Revolutions anglaises",
    birthYear: 1642,
    deathYear: 1689,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Oliver_Cromwell_by_Samuel_Cooper.jpg/220px-Oliver_Cromwell_by_Samuel_Cooper.jpg",
    nationality: "Anglais",
    movement: "Moderne",
    summary:
      "Guerre civile, execution de Charles Ier, dictature de Cromwell, puis Glorieuse Revolution (1688). Bill of Rights limite le pouvoir royal. Naissance de la monarchie parlementaire.",
    mainWorks: [
      "Guerre civile (1642-1651)",
      "Execution de Charles Ier (1649)",
      "Glorieuse Revolution (1688)",
      "Bill of Rights (1689)",
    ],
  },
  {
    id: "revolution-americaine-demo",
    name: "Revolution americaine",
    birthYear: 1776,
    deathYear: 1791,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg/220px-Declaration_of_Independence.jpg",
    nationality: "Americain",
    movement: "Revolutions",
    summary:
      "Declaration d'independance, Constitution, Bill of Rights. Premiere republique moderne a grande echelle. Separation des pouvoirs, federalisme, droits fondamentaux.",
    mainWorks: [
      "Declaration d'independance (1776)",
      "Constitution (1787)",
      "Bill of Rights (1791)",
      "Federalisme et separation des pouvoirs",
    ],
  },
  {
    id: "revolution-francaise-demo",
    name: "Revolution francaise",
    birthYear: 1789,
    deathYear: 1799,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Prise_de_la_Bastille.jpg/220px-Prise_de_la_Bastille.jpg",
    nationality: "Francais",
    movement: "Revolutions",
    summary:
      "Abolition de l'Ancien Regime, Declaration des droits de l'homme. Souverainete nationale, egalite, citoyennete. Mais aussi Terreur et instabilite. Influence mondiale.",
    mainWorks: [
      "Prise de la Bastille (14 juillet 1789)",
      "Declaration des droits de l'homme et du citoyen",
      "Souverainete nationale",
      "Abolition des privileges",
    ],
  },
  {
    id: "suffrage-universel",
    name: "Suffrage universel masculin",
    birthYear: 1848,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Le_Vote.jpg/220px-Le_Vote.jpg",
    nationality: "Europeen",
    movement: "XIXe siecle",
    summary:
      "La France instaure le suffrage universel masculin en 1848. Extension progressive dans les autres pays. Fin du suffrage censitaire, mais les femmes restent exclues.",
    mainWorks: [
      "France (1848)",
      "Allemagne (1871)",
      "Fin du suffrage censitaire",
      "Femmes toujours exclues",
    ],
  },
  {
    id: "abolition-esclavage-demo",
    name: "Abolitions et citoyennete",
    birthYear: 1865,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Abraham_Lincoln_head_on_shoulders_photo_portrait.jpg/220px-Abraham_Lincoln.jpg",
    nationality: "International",
    movement: "XIXe siecle",
    summary:
      "L'abolition de l'esclavage (USA 1865, Bresil 1888) elargit theoriquement la citoyennete. Mais discrimination et segregation persistent longtemps.",
    mainWorks: [
      "13e amendement USA (1865)",
      "Abolition au Bresil (1888)",
      "Citoyennete theorique",
      "Discrimination persistante",
    ],
  },
  {
    id: "vote-femmes",
    name: "Droit de vote des femmes",
    birthYear: 1893,
    deathYear: 1971,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Suffragettes%2C_bain_news_service.jpg/220px-Suffragettes%2C_bain_news_service.jpg",
    nationality: "International",
    movement: "XXe siecle",
    summary:
      "La Nouvelle-Zelande premiere (1893), puis lente progression. France 1944, Suisse 1971. Completion du suffrage universel. Mais sous-representation persistante.",
    mainWorks: [
      "Nouvelle-Zelande (1893)",
      "Royaume-Uni (1918/1928)",
      "France (1944)",
      "Suisse (1971)",
    ],
  },
  {
    id: "decolonisation-demo",
    name: "Decolonisation et democratisation",
    birthYear: 1945,
    deathYear: 1975,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Jawaharlal_Nehru_1946.jpg/220px-Jawaharlal_Nehru_1946.jpg",
    nationality: "Global",
    movement: "XXe siecle",
    summary:
      "Les colonies accedent a l'independance et adoptent des constitutions democratiques. Mais beaucoup derivent vers l'autoritarisme. Democratie fragile dans les nouveaux Etats.",
    mainWorks: [
      "Independances asiatiques (1940s-50s)",
      "Independances africaines (1960s)",
      "Constitutions democratiques",
      "Derives autoritaires frequentes",
    ],
  },
  {
    id: "chute-mur",
    name: "Chute du communisme",
    birthYear: 1989,
    deathYear: 1991,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Berlin_Wall_Graffiti.jpg/220px-Berlin_Wall_Graffiti.jpg",
    nationality: "Europeen",
    movement: "Contemporain",
    summary:
      "Chute du mur de Berlin (1989), effondrement de l'URSS (1991). Democratisation de l'Europe de l'Est. 'Fin de l'histoire' selon Fukuyama. Mais regression democratique ensuite.",
    mainWorks: [
      "Chute du mur de Berlin (1989)",
      "Revolutions de velours",
      "Dissolution de l'URSS (1991)",
      "Elargissement de l'UE",
    ],
  },
  {
    id: "printemps-arabe",
    name: "Printemps arabe",
    birthYear: 2010,
    deathYear: 2012,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Tahrir_Square_on_February11.png/220px-Tahrir_Square_on_February11.png",
    nationality: "Arabe",
    movement: "Contemporain",
    summary:
      "Soulevements populaires en Tunisie, Egypte, Libye, Syrie... Espoirs de democratisation, mais resultats mitiges : seule la Tunisie reussit sa transition (jusqu'en 2021).",
    mainWorks: [
      "Revolution tunisienne (2010-2011)",
      "Chute de Moubarak en Egypte",
      "Guerres civiles (Libye, Syrie)",
      "Echec sauf en Tunisie (temporaire)",
    ],
  },
  {
    id: "recul-democratique",
    name: "Recul democratique mondial",
    birthYear: 2006,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Freedom_House_world_map_2022.svg/220px-Freedom_House_world_map_2022.svg.png",
    nationality: "Global",
    movement: "Contemporain",
    summary:
      "Depuis 2006, recul de la democratie dans le monde (Freedom House). Erosion des institutions, populisme, autoritarisme. Russie, Turquie, Hongrie, Bresil... Remise en cause de la 'fin de l'histoire'.",
    mainWorks: [
      "Erosion des normes democratiques",
      "Montee des populismes",
      "Autocratisation (Russie, Turquie, Hongrie)",
      "Desinformation et reseaux sociaux",
    ],
  },
  {
    id: "democratie-participative",
    name: "Democratie participative",
    birthYear: 1989,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Convention_citoyenne_pour_le_climat.jpg/220px-Convention_citoyenne_pour_le_climat.jpg",
    nationality: "Global",
    movement: "Contemporain",
    summary:
      "Face a la crise de la representation, experimentation de nouvelles formes : budget participatif (Porto Alegre), conventions citoyennes, tirage au sort. Renouveau democratique ?",
    mainWorks: [
      "Budget participatif (Porto Alegre, 1989)",
      "Conventions citoyennes",
      "Tirage au sort (comme a Athenes)",
      "Democratie deliberative",
    ],
  },
];
