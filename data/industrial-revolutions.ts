export interface IndustrialItem {
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

export const industrialRevolutions: IndustrialItem[] = [
  {
    id: "revolution-agricole",
    name: "Révolution agricole",
    birthYear: 1700,
    deathYear: 1850,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Batteuse_1881.jpg/330px-Batteuse_1881.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Britannique",
    movement: "Pré-industrialisation",
    family: "Première révolution",
    summary:
      "Améliorations agricoles (rotation des cultures, enclosures, sélection animale) augmentent les rendements. Libération de main-d'œuvre pour l'industrie, croissance démographique.",
    mainWorks: [
      "Enclosures - privatisation des terres communes",
      "Rotation quadriennale des cultures",
      "Sélection animale (Bakewell)",
      "Surplus agricole et croissance démographique",
    ],
  },
  {
    id: "premiere-ri",
    name: "Première révolution industrielle",
    birthYear: 1760,
    deathYear: 1840,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Standard_Oil_Company_1889_CP04381_-_DPLA_-_032e381bb16b1a45abecfd1a6a86ae3a_%28cropped%29.jpg/330px-Standard_Oil_Company_1889_CP04381_-_DPLA_-_032e381bb16b1a45abecfd1a6a86ae3a_%28cropped%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Britannique",
    movement: "Première RI",
    family: "Première révolution",
    influences: ["revolution-agricole", "machine-vapeur"],
    summary:
      "Naissance de l'industrie moderne en Grande-Bretagne. Machine à vapeur, textile, charbon, fer. Usines, urbanisation, naissance du prolétariat. Transformation radicale de la société.",
    mainWorks: [
      "Machine à vapeur de Watt (1769)",
      "Industrie textile mécanisée",
      "Charbon et sidérurgie",
      "Canaux et premières voies ferrées",
    ],
  },
  {
    id: "machine-vapeur",
    name: "Machine à vapeur",
    birthYear: 1712,
    deathYear: 1850,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Mulhouse%2C_Electropolis.JPG/330px-Mulhouse%2C_Electropolis.JPG?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Britannique",
    movement: "Première RI",
    family: "Première révolution",
    summary:
      "Newcomen invente la machine à vapeur (1712), Watt l'améliore considérablement (1769). Force motrice universelle qui transforme l'industrie, les transports, l'agriculture.",
    mainWorks: [
      "Machine de Newcomen (1712)",
      "Perfectionnements de Watt (1769)",
      "Application aux usines, mines, transports",
      "Symbolise la révolution industrielle",
    ],
  },
  {
    id: "chemin-fer",
    name: "Âge du chemin de fer",
    birthYear: 1825,
    deathYear: 1914,
    nationality: "International",
    movement: "Première RI",
    family: "Première révolution",
    influences: ["machine-vapeur", "premiere-ri"],
    summary:
      "Stephenson inaugure la première ligne publique (1825). Le rail transforme les transports, unifie les marchés nationaux. Investissements massifs, spéculation, crises.",
    mainWorks: [
      "Première ligne publique (1825, Stockton-Darlington)",
      "Liverpool-Manchester (1830)",
      "Chemins de fer transcontinentaux",
      "Unification des marchés nationaux",
    ],
  },
  {
    id: "deuxieme-ri",
    name: "Deuxième révolution industrielle",
    birthYear: 1870,
    deathYear: 1914,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Standard_Oil_Company_1889_CP04381_-_DPLA_-_032e381bb16b1a45abecfd1a6a86ae3a_%28cropped%29.jpg/330px-Standard_Oil_Company_1889_CP04381_-_DPLA_-_032e381bb16b1a45abecfd1a6a86ae3a_%28cropped%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "International",
    movement: "Deuxième RI",
    family: "Deuxième révolution",
    influences: ["premiere-ri"],
    summary:
      "Électricité, acier, chimie, pétrole transforment l'économie. Grandes entreprises, taylorisme, production de masse. Allemagne et USA rattrapent la Grande-Bretagne.",
    mainWorks: [
      "Électricité et éclairage (Edison, 1879)",
      "Acier Bessemer et chimie",
      "Moteur à explosion et pétrole",
      "Taylorisme et production de masse",
    ],
  },
  {
    id: "electricite",
    name: "Révolution électrique",
    birthYear: 1879,
    deathYear: 1920,
    nationality: "International",
    movement: "Deuxième RI",
    family: "Deuxième révolution",
    influences: ["deuxieme-ri"],
    summary:
      "Edison invente l'ampoule (1879) et développe le réseau électrique. Tesla et Westinghouse imposent le courant alternatif. L'électricité transforme l'industrie et la vie quotidienne.",
    mainWorks: [
      "Ampoule incandescente (Edison, 1879)",
      "Centrales et réseaux électriques",
      "Courant alternatif (Tesla, Westinghouse)",
      "Moteur électrique industriel",
    ],
  },
  {
    id: "automobile",
    name: "Naissance de l'automobile",
    birthYear: 1886,
    deathYear: 1930,
    nationality: "International",
    movement: "Deuxième RI",
    family: "Deuxième révolution",
    influences: ["deuxieme-ri", "petrochimie"],
    summary:
      "Benz et Daimler inventent l'automobile à essence (1886). Ford démocratise la voiture avec la Model T et la chaîne de montage. Révolution des transports individuels.",
    mainWorks: [
      "Première automobile Benz (1886)",
      "Ford Model T (1908)",
      "Chaîne de montage (1913)",
      "Démocratisation de l'automobile",
    ],
  },
  {
    id: "taylorisme",
    name: "Taylorisme et fordisme",
    birthYear: 1911,
    deathYear: 1970,
    nationality: "Américain",
    movement: "Deuxième RI",
    family: "Deuxième révolution",
    influences: ["deuxieme-ri", "automobile"],
    summary:
      "Taylor invente l'organisation scientifique du travail. Ford applique ces principes avec la chaîne de montage et les hauts salaires. Production de masse et consommation de masse.",
    mainWorks: [
      "Organisation scientifique du travail (Taylor, 1911)",
      "Chaîne de montage Ford (1913)",
      "Five dollars a day - hauts salaires",
      "Production et consommation de masse",
    ],
  },
  {
    id: "aviation",
    name: "Naissance de l'aviation",
    birthYear: 1903,
    deathYear: 1950,
    nationality: "International",
    movement: "XXe siècle",
    family: "Deuxième révolution",
    influences: ["automobile"],
    summary:
      "Les frères Wright réalisent le premier vol motorisé (1903). L'aviation se développe pendant les guerres mondiales puis se démocratise avec l'aviation commerciale.",
    mainWorks: [
      "Vol des frères Wright (1903)",
      "Aviation militaire (WWI, WWII)",
      "Lindbergh traverse l'Atlantique (1927)",
      "Aviation commerciale de masse",
    ],
  },
  {
    id: "petrochimie",
    name: "Âge du pétrole",
    birthYear: 1859,
    nationality: "International",
    movement: "XXe siècle",
    family: "Deuxième révolution",
    summary:
      "Le premier puits de pétrole (1859) inaugure l'ère pétrolière. Carburant, plastiques, engrais : le pétrole transforme l'économie mondiale. Enjeu géopolitique majeur.",
    mainWorks: [
      "Premier puits de pétrole (1859, Pennsylvanie)",
      "Standard Oil de Rockefeller",
      "Pétrochimie et plastiques",
      "OPEP et géopolitique du pétrole",
    ],
  },
  {
    id: "troisieme-ri",
    name: "Troisième révolution industrielle",
    birthYear: 1970,
    deathYear: 2010,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/MacII.jpg/330px-MacII.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "International",
    movement: "Troisième RI",
    family: "Révolution numérique",
    influences: ["deuxieme-ri", "informatique"],
    summary:
      "Électronique, informatique, télécommunications transforment l'économie. Ordinateurs personnels, Internet, mondialisation. Désindustrialisation des pays développés.",
    mainWorks: [
      "Microprocesseur Intel (1971)",
      "Ordinateur personnel (1977-1984)",
      "Internet (1990s)",
      "Mondialisation et désindustrialisation",
    ],
  },
  {
    id: "informatique",
    name: "Révolution informatique",
    birthYear: 1945,
    deathYear: 2000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/MacII.jpg/330px-MacII.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "International",
    movement: "Troisième RI",
    family: "Révolution numérique",
    influences: ["electricite"],
    summary:
      "Des premiers ordinateurs géants (ENIAC) au PC et à Internet. Transistor, circuit intégré, microprocesseur. L'informatique transforme tous les secteurs de l'économie.",
    mainWorks: [
      "ENIAC - premier ordinateur (1945)",
      "Transistor (1947) et circuit intégré (1958)",
      "Microprocesseur Intel 4004 (1971)",
      "IBM PC (1981) et Macintosh (1984)",
    ],
  },
  {
    id: "internet",
    name: "Révolution Internet",
    birthYear: 1990,
    nationality: "International",
    movement: "Troisième RI",
    family: "Révolution numérique",
    influences: ["informatique", "troisieme-ri"],
    summary:
      "Le World Wide Web (1991) démocratise Internet. E-commerce, réseaux sociaux, économie numérique. Transformation de la communication, du travail, de la culture.",
    mainWorks: [
      "World Wide Web (Tim Berners-Lee, 1991)",
      "Navigateurs et moteurs de recherche",
      "E-commerce (Amazon, 1994)",
      "Réseaux sociaux (Facebook, 2004)",
    ],
  },
  {
    id: "quatrieme-ri",
    name: "Quatrième révolution industrielle",
    birthYear: 2010,
    nationality: "International",
    movement: "Quatrième RI",
    family: "Époque contemporaine",
    influences: ["troisieme-ri", "internet"],
    summary:
      "Fusion des technologies numériques, biologiques et physiques. Intelligence artificielle, robotique, IoT, impression 3D. Transformation du travail et de la société.",
    mainWorks: [
      "Intelligence artificielle et machine learning",
      "Internet des objets (IoT)",
      "Robotique avancée",
      "Impression 3D et fabrication additive",
    ],
  },
  {
    id: "ia",
    name: "Révolution de l'IA",
    birthYear: 2012,
    nationality: "International",
    movement: "Quatrième RI",
    family: "Époque contemporaine",
    influences: ["informatique", "quatrieme-ri"],
    summary:
      "Le deep learning révolutionne l'IA à partir de 2012. Reconnaissance d'images, traduction, génération de texte et d'images. ChatGPT (2022) popularise l'IA générative.",
    mainWorks: [
      "Deep learning et réseaux neuronaux",
      "AlphaGo bat le champion de Go (2016)",
      "GPT et IA générative",
      "ChatGPT (2022) - démocratisation",
    ],
  },
  {
    id: "transition-energetique",
    name: "Transition énergétique",
    birthYear: 2000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Schneebergerhof_01.jpg/330px-Schneebergerhof_01.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "International",
    movement: "XXIe siècle",
    family: "Époque contemporaine",
    influences: ["petrochimie"],
    summary:
      "Face au changement climatique, transition des énergies fossiles vers les renouvelables. Solaire, éolien, véhicules électriques. Défis technologiques, économiques et politiques.",
    mainWorks: [
      "Développement du solaire et de l'éolien",
      "Véhicules électriques (Tesla)",
      "Accord de Paris (2015)",
      "Objectif zéro carbone",
    ],
  },
];
