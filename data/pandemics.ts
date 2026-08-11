export interface PandemicItem {
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

export const pandemics: PandemicItem[] = [
  {
    id: "peste-athenes",
    name: "Peste d'Athènes",
    birthYear: -430,
    deathYear: -426,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Alonzo_Chappel_%281828%E2%80%931887%29_-_Death_of_Pericles.jpg/330px-Alonzo_Chappel_%281828%E2%80%931887%29_-_Death_of_Pericles.jpg",
    nationality: "Grec",
    movement: "Antiquité",
    summary:
      "Épidémie dévastatrice pendant la guerre du Péloponnèse. Tue un quart de la population athénienne, dont Périclès. Nature exacte inconnue (typhus, variole?). Décrite par Thucydide.",
    mainWorks: [
      "25-30% de la population athénienne meurt",
      "Mort de Périclès",
      "Description par Thucydide",
      "Affaiblit Athènes face à Sparte",
    ],
  },
  {
    id: "peste-antonine",
    name: "Peste antonine",
    birthYear: 165,
    deathYear: 180,
    nationality: "Romain",
    movement: "Antiquité",
    summary:
      "Probablement variole, rapportée par les légions de Perse. Tue 5-10 millions de personnes dans l'Empire romain, dont peut-être Marc Aurèle. Début du déclin de Rome.",
    mainWorks: [
      "5-10 millions de morts",
      "Propagée par les légions",
      "Probablement variole",
      "Affaiblit l'Empire romain",
    ],
  },
  {
    id: "peste-justinien",
    name: "Peste de Justinien",
    birthYear: 541,
    deathYear: 549,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Josse_Lieferinxe_-_Saint_Sebastian_Interceding_for_the_Plague_Stricken_-_Walters_371995.jpg/330px-Josse_Lieferinxe_-_Saint_Sebastian_Interceding_for_the_Plague_Stricken_-_Walters_371995.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Byzantin",
    movement: "Antiquité tardive",
    summary:
      "Première pandémie de peste bubonique documentée. Tue 25-50 millions de personnes. Empêche Justinien de reconstituer l'Empire romain. Revient par vagues pendant 200 ans.",
    mainWorks: [
      "Première pandémie de peste bubonique",
      "25-50 millions de morts",
      "Échec de la reconquête de Justinien",
      "Vagues récurrentes pendant 200 ans",
    ],
  },
  {
    id: "peste-noire",
    name: "Peste noire",
    birthYear: 1347,
    deathYear: 1353,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Doutielt3.jpg/330px-Doutielt3.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Eurasien",
    movement: "Moyen Âge",
    summary:
      "La plus meurtrière pandémie de l'histoire. Peste bubonique qui tue 30-60% de la population européenne (75-200 millions). Arrive de Crimée via Gênes. Bouleversements sociaux majeurs.",
    mainWorks: [
      "30-60% de la population européenne meurt",
      "75-200 millions de morts en Eurasie",
      "Venue de Crimée par les navires génois",
      "Fin du servage, persécution des Juifs",
    ],
  },
  {
    id: "choc-microbien",
    name: "Choc microbien des Amériques",
    birthYear: 1492,
    deathYear: 1600,
    nationality: "Américain",
    movement: "Renaissance",
    summary:
      "Les maladies européennes (variole, rougeole, grippe, typhus) déciment les populations amérindiennes non immunisées. 90% de la population disparaît. Facilite la colonisation.",
    mainWorks: [
      "90% des Amérindiens meurent",
      "Variole, rougeole, grippe, typhus",
      "Effondrement des empires aztèque et inca",
      "Facilite la colonisation européenne",
    ],
  },
  {
    id: "variole",
    name: "Variole",
    birthYear: -10000,
    deathYear: 1980,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Smallpox.jpg/330px-Smallpox.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Mondial",
    movement: "Histoire longue",
    summary:
      "Maladie millénaire tuant 30% des infectés. 300-500 millions de morts au XXe siècle seul. Première maladie éradiquée grâce à la vaccination (Jenner, 1796). Dernier cas naturel en 1977.",
    mainWorks: [
      "300-500 millions de morts au XXe siècle",
      "Vaccination par Jenner (1796)",
      "Campagne mondiale d'éradication (OMS)",
      "Éradiquée en 1980",
    ],
  },
  {
    id: "cholera",
    name: "Pandémies de choléra",
    birthYear: 1817,
    deathYear: 1923,
    nationality: "Mondial",
    movement: "XIXe siècle",
    summary:
      "Sept pandémies depuis 1817, parties du delta du Gange. John Snow identifie la transmission par l'eau à Londres (1854). Impulsion pour l'hygiène publique et les réseaux d'eau potable.",
    mainWorks: [
      "Sept pandémies depuis 1817",
      "John Snow et la pompe de Broad Street (1854)",
      "Robert Koch isole le vibrion (1883)",
      "Hygiène publique et eau potable",
    ],
  },
  {
    id: "grippe-espagnole",
    name: "Grippe espagnole",
    birthYear: 1918,
    deathYear: 1920,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/USCampHospital45InfluenzaWard.jpg/330px-USCampHospital45InfluenzaWard.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Mondial",
    movement: "XXe siècle",
    summary:
      "Pandémie de grippe H1N1 à la fin de la Première Guerre mondiale. 50-100 millions de morts (plus que la guerre). Touche particulièrement les jeunes adultes. Nommée 'espagnole' par hasard de la censure.",
    mainWorks: [
      "50-100 millions de morts",
      "Plus meurtrière que la Grande Guerre",
      "Virus H1N1",
      "Nom dû à la censure de guerre",
    ],
  },
  {
    id: "grippe-asiatique",
    name: "Grippe asiatique",
    birthYear: 1957,
    deathYear: 1958,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Asian_flu_in_Sweden_1957_%282%29.jpg/330px-Asian_flu_in_Sweden_1957_%282%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Mondial",
    movement: "XXe siècle",
    summary:
      "Pandémie de grippe H2N2 partie de Chine. 1-2 millions de morts. Premier vaccin développé rapidement. Moins meurtrière que la grippe espagnole grâce aux progrès médicaux.",
    mainWorks: [
      "1-2 millions de morts",
      "Virus H2N2",
      "Partie de Chine",
      "Vaccin développé rapidement",
    ],
  },
  {
    id: "vih-sida",
    name: "VIH/SIDA",
    birthYear: 1981,
    nationality: "Mondial",
    movement: "XXe-XXIe siècle",
    summary:
      "Pandémie toujours active. 40 millions de morts depuis 1981. Origines en Afrique centrale (transmission du singe). Trithérapie (1996) transforme le pronostic. 38 millions de personnes vivent avec le VIH.",
    mainWorks: [
      "40 millions de morts depuis 1981",
      "Identification du virus (1983-1984)",
      "Trithérapie (1996) - maladie chronique",
      "38 millions de personnes infectées",
    ],
  },
  {
    id: "sras",
    name: "SRAS",
    birthYear: 2002,
    deathYear: 2003,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SRAS_system.jpg/330px-SRAS_system.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Mondial",
    movement: "XXIe siècle",
    summary:
      "Premier coronavirus pandémique. Parti de Chine (Guangdong), 8000 cas, 774 morts. Taux de létalité élevé (10%) mais contenu rapidement. Alerte sur les risques de pandémie.",
    mainWorks: [
      "Premier coronavirus pandémique",
      "8000 cas, 774 morts",
      "Parti de Chine",
      "Contenu par quarantaines strictes",
    ],
  },
  {
    id: "grippe-h1n1-2009",
    name: "Grippe H1N1 (2009)",
    birthYear: 2009,
    deathYear: 2010,
    nationality: "Mondial",
    movement: "XXIe siècle",
    summary:
      "Pandémie de grippe porcine partie du Mexique. 150 000-575 000 morts. Moins sévère que craint. Vaccination massive mais controverse sur la gestion de la crise.",
    mainWorks: [
      "Grippe porcine H1N1",
      "150 000-575 000 morts",
      "Partie du Mexique",
      "Controverse sur la vaccination massive",
    ],
  },
  {
    id: "ebola",
    name: "Épidémie d'Ebola",
    birthYear: 2014,
    deathYear: 2016,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Ebola_virus_%282%29.jpg/330px-Ebola_virus_%282%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Africain",
    movement: "XXIe siècle",
    summary:
      "Plus grande épidémie d'Ebola, en Afrique de l'Ouest. 11 000 morts. Taux de létalité de 50%. Mobilisation internationale tardive. Vaccin développé ensuite.",
    mainWorks: [
      "11 000 morts en Afrique de l'Ouest",
      "Taux de létalité 50%",
      "Guinée, Sierra Leone, Liberia",
      "Vaccin développé après l'épidémie",
    ],
  },
  {
    id: "covid-19",
    name: "COVID-19",
    birthYear: 2019,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Fphar-11-00937-g001.jpg/330px-Fphar-11-00937-g001.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Mondial",
    movement: "XXIe siècle",
    summary:
      "Pandémie de coronavirus SARS-CoV-2. Plus de 7 millions de morts officiels (20+ millions estimés). Confinements mondiaux, vaccination accélérée (ARNm). Transformation du travail et de la société.",
    mainWorks: [
      "7+ millions de morts officiels",
      "Confinements mondiaux",
      "Vaccins ARNm développés en un an",
      "Transformation du travail (télétravail)",
    ],
  },
];
