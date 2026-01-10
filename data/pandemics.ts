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
}

export const pandemics: PandemicItem[] = [
  {
    id: "peste-athenes",
    name: "Peste d'Athenes",
    birthYear: -430,
    deathYear: -426,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Michiel_Sweerts_-_Plague_in_an_Ancient_City_-_Google_Art_Project.jpg/220px-Plague_in_an_Ancient_City.jpg",
    nationality: "Grec",
    movement: "Antiquite",
    summary:
      "Epidemie devastatrice pendant la guerre du Peloponnese. Tue un quart de la population athenienne, dont Pericles. Nature exacte inconnue (typhus, variole?). Decrite par Thucydide.",
    mainWorks: [
      "25-30% de la population athenienne meurt",
      "Mort de Pericles",
      "Description par Thucydide",
      "Affaiblit Athenes face a Sparte",
    ],
  },
  {
    id: "peste-antonine",
    name: "Peste antonine",
    birthYear: 165,
    deathYear: 180,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Marcus_Aurelius_Glyptothek_Munich.jpg/220px-Marcus_Aurelius_Glyptothek_Munich.jpg",
    nationality: "Romain",
    movement: "Antiquite",
    summary:
      "Probablement variole, rapportee par les legions de Perse. Tue 5-10 millions de personnes dans l'Empire romain, dont peut-etre Marc Aurele. Debut du declin de Rome.",
    mainWorks: [
      "5-10 millions de morts",
      "Propagee par les legions",
      "Probablement variole",
      "Affaiblit l'Empire romain",
    ],
  },
  {
    id: "peste-justinien",
    name: "Peste de Justinien",
    birthYear: 541,
    deathYear: 549,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Meister_von_San_Vitale_in_Ravenna_003.jpg/220px-Meister_von_San_Vitale_in_Ravenna_003.jpg",
    nationality: "Byzantin",
    movement: "Antiquite tardive",
    summary:
      "Premiere pandemie de peste bubonique documentee. Tue 25-50 millions de personnes. Empeche Justinien de reconstituer l'Empire romain. Revient par vagues pendant 200 ans.",
    mainWorks: [
      "Premiere pandemie de peste bubonique",
      "25-50 millions de morts",
      "Echec de la reconquete de Justinien",
      "Vagues recurrentes pendant 200 ans",
    ],
  },
  {
    id: "peste-noire",
    name: "Peste noire",
    birthYear: 1347,
    deathYear: 1353,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/The_plague_of_Florence_in_1348%2C_as_described_in_Boccaccio%27s_Wellcome_V0010619.jpg/220px-The_plague_of_Florence_in_1348.jpg",
    nationality: "Eurasien",
    movement: "Moyen Age",
    summary:
      "La plus meurtriere pandemie de l'histoire. Peste bubonique qui tue 30-60% de la population europeenne (75-200 millions). Arrive de Crimee via Genes. Bouleversements sociaux majeurs.",
    mainWorks: [
      "30-60% de la population europeenne meurt",
      "75-200 millions de morts en Eurasie",
      "Venue de Crimee par les navires genois",
      "Fin du servage, persecution des Juifs",
    ],
  },
  {
    id: "choc-microbien",
    name: "Choc microbien des Ameriques",
    birthYear: 1492,
    deathYear: 1600,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Florentine_Codex_BK12_F54_smallpox.jpg/220px-Florentine_Codex_BK12_F54_smallpox.jpg",
    nationality: "Americain",
    movement: "Renaissance",
    summary:
      "Les maladies europeennes (variole, rougeole, grippe, typhus) decimant les populations amerindiennes non immunisees. 90% de la population disparait. Facilite la colonisation.",
    mainWorks: [
      "90% des Amerindiens meurent",
      "Variole, rougeole, grippe, typhus",
      "Effondrement des empires azteque et inca",
      "Facilite la colonisation europeenne",
    ],
  },
  {
    id: "variole",
    name: "Variole",
    birthYear: -10000,
    deathYear: 1980,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Edward_Jenner._Oil_painting._Wellcome_V0023503.jpg/220px-Edward_Jenner._Oil_painting.jpg",
    nationality: "Mondial",
    movement: "Histoire longue",
    summary:
      "Maladie millenaire tuant 30% des infectes. 300-500 millions de morts au XXe siecle seul. Premiere maladie eradiquee grace a la vaccination (Jenner, 1796). Dernier cas naturel en 1977.",
    mainWorks: [
      "300-500 millions de morts au XXe siecle",
      "Vaccination par Jenner (1796)",
      "Campagne mondiale d'eradication (OMS)",
      "Eradiquee en 1980",
    ],
  },
  {
    id: "cholera",
    name: "Pandemies de cholera",
    birthYear: 1817,
    deathYear: 1923,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/John_Snow_memorial_and_pub.jpg/220px-John_Snow_memorial_and_pub.jpg",
    nationality: "Mondial",
    movement: "XIXe siecle",
    summary:
      "Sept pandemies depuis 1817, parties du delta du Gange. John Snow identifie la transmission par l'eau a Londres (1854). Impulsion pour l'hygiene publique et les reseaux d'eau potable.",
    mainWorks: [
      "Sept pandemies depuis 1817",
      "John Snow et la pompe de Broad Street (1854)",
      "Robert Koch isole le vibrion (1883)",
      "Hygiene publique et eau potable",
    ],
  },
  {
    id: "grippe-espagnole",
    name: "Grippe espagnole",
    birthYear: 1918,
    deathYear: 1920,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/1918_flu_in_Oakland.jpg/220px-1918_flu_in_Oakland.jpg",
    nationality: "Mondial",
    movement: "XXe siecle",
    summary:
      "Pandemie de grippe H1N1 a la fin de la Premiere Guerre mondiale. 50-100 millions de morts (plus que la guerre). Touche particulierement les jeunes adultes. Nommee 'espagnole' par hasard de la censure.",
    mainWorks: [
      "50-100 millions de morts",
      "Plus meurtriere que la Grande Guerre",
      "Virus H1N1",
      "Nom du a la censure de guerre",
    ],
  },
  {
    id: "grippe-asiatique",
    name: "Grippe asiatique",
    birthYear: 1957,
    deathYear: 1958,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Asian_Flu_in_Sweden_1957.jpg/220px-Asian_Flu_in_Sweden_1957.jpg",
    nationality: "Mondial",
    movement: "XXe siecle",
    summary:
      "Pandemie de grippe H2N2 partie de Chine. 1-2 millions de morts. Premier vaccin developpe rapidement. Moins meurtriere que la grippe espagnole grace aux progres medicaux.",
    mainWorks: [
      "1-2 millions de morts",
      "Virus H2N2",
      "Partie de Chine",
      "Vaccin developpe rapidement",
    ],
  },
  {
    id: "vih-sida",
    name: "VIH/SIDA",
    birthYear: 1981,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/HIV-budding-Color.jpg/220px-HIV-budding-Color.jpg",
    nationality: "Mondial",
    movement: "XXe-XXIe siecle",
    summary:
      "Pandemie toujours active. 40 millions de morts depuis 1981. Origines en Afrique centrale (transmission du singe). Tritherapie (1996) transforme le pronostic. 38 millions de personnes vivent avec le VIH.",
    mainWorks: [
      "40 millions de morts depuis 1981",
      "Identification du virus (1983-1984)",
      "Tritherapie (1996) - maladie chronique",
      "38 millions de personnes infectees",
    ],
  },
  {
    id: "sras",
    name: "SRAS",
    birthYear: 2002,
    deathYear: 2003,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/SARS_virion.gif/220px-SARS_virion.gif",
    nationality: "Mondial",
    movement: "XXIe siecle",
    summary:
      "Premier coronavirus pandemique. Parti de Chine (Guangdong), 8000 cas, 774 morts. Taux de letalite eleve (10%) mais contenu rapidement. Alerte sur les risques de pandemie.",
    mainWorks: [
      "Premier coronavirus pandemique",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/H1N1_influenza_virus.jpg/220px-H1N1_influenza_virus.jpg",
    nationality: "Mondial",
    movement: "XXIe siecle",
    summary:
      "Pandemie de grippe porcine partie du Mexique. 150 000-575 000 morts. Moins severe que craint. Vaccination massive mais controverse sur la gestion de la crise.",
    mainWorks: [
      "Grippe porcine H1N1",
      "150 000-575 000 morts",
      "Partie du Mexique",
      "Controverse sur la vaccination massive",
    ],
  },
  {
    id: "ebola",
    name: "Epidemie d'Ebola",
    birthYear: 2014,
    deathYear: 2016,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ebola_virus_virion.jpg/220px-Ebola_virus_virion.jpg",
    nationality: "Africain",
    movement: "XXIe siecle",
    summary:
      "Plus grande epidemie d'Ebola, en Afrique de l'Ouest. 11 000 morts. Taux de letalite de 50%. Mobilisation internationale tardive. Vaccin developpe ensuite.",
    mainWorks: [
      "11 000 morts en Afrique de l'Ouest",
      "Taux de letalite 50%",
      "Guinee, Sierra Leone, Liberia",
      "Vaccin developpe apres l'epidemie",
    ],
  },
  {
    id: "covid-19",
    name: "COVID-19",
    birthYear: 2019,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/220px-SARS-CoV-2_without_background.png",
    nationality: "Mondial",
    movement: "XXIe siecle",
    summary:
      "Pandemie de coronavirus SARS-CoV-2. Plus de 7 millions de morts officiels (20+ millions estimes). Confinements mondiaux, vaccination acceleree (ARNm). Transformation du travail et de la societe.",
    mainWorks: [
      "7+ millions de morts officiels",
      "Confinements mondiaux",
      "Vaccins ARNm developpes en un an",
      "Transformation du travail (teletravail)",
    ],
  },
];
