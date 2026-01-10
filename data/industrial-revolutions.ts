export interface IndustrialItem {
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

export const industrialRevolutions: IndustrialItem[] = [
  {
    id: "revolution-agricole",
    name: "Revolution agricole",
    birthYear: 1700,
    deathYear: 1850,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Jethro_Tull_seed_drill_%281762%29.png/220px-Jethro_Tull_seed_drill_%281762%29.png",
    nationality: "Britannique",
    movement: "Pre-industrialisation",
    summary:
      "Ameliorations agricoles (rotation des cultures, enclosures, selection animale) augmentent les rendements. Liberation de main-d'oeuvre pour l'industrie, croissance demographique.",
    mainWorks: [
      "Enclosures - privatisation des terres communes",
      "Rotation quadriennale des cultures",
      "Selection animale (Bakewell)",
      "Surplus agricole et croissance demographique",
    ],
  },
  {
    id: "premiere-ri",
    name: "Premiere revolution industrielle",
    birthYear: 1760,
    deathYear: 1840,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Cottonopolis1702.jpg/220px-Cottonopolis1702.jpg",
    nationality: "Britannique",
    movement: "Premiere RI",
    summary:
      "Naissance de l'industrie moderne en Grande-Bretagne. Machine a vapeur, textile, charbon, fer. Usines, urbanisation, naissance du proletariat. Transformation radicale de la societe.",
    mainWorks: [
      "Machine a vapeur de Watt (1769)",
      "Industrie textile mecanisee",
      "Charbon et siderurgie",
      "Canaux et premieres voies ferrees",
    ],
  },
  {
    id: "machine-vapeur",
    name: "Machine a vapeur",
    birthYear: 1712,
    deathYear: 1850,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Watt_steam_engine.jpg/220px-Watt_steam_engine.jpg",
    nationality: "Britannique",
    movement: "Premiere RI",
    summary:
      "Newcomen invente la machine a vapeur (1712), Watt l'ameliore considerablement (1769). Force motrice universelle qui transforme l'industrie, les transports, l'agriculture.",
    mainWorks: [
      "Machine de Newcomen (1712)",
      "Perfectionnements de Watt (1769)",
      "Application aux usines, mines, transports",
      "Symbolise la revolution industrielle",
    ],
  },
  {
    id: "chemin-fer",
    name: "Age du chemin de fer",
    birthYear: 1825,
    deathYear: 1914,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Locomotion_No._1.jpg/220px-Locomotion_No._1.jpg",
    nationality: "International",
    movement: "Premiere RI",
    summary:
      "Stephenson inaugure la premiere ligne publique (1825). Le rail transforme les transports, unifie les marches nationaux. Investissements massifs, speculation, crises.",
    mainWorks: [
      "Premiere ligne publique (1825, Stockton-Darlington)",
      "Liverpool-Manchester (1830)",
      "Chemins de fer transcontinentaux",
      "Unification des marches nationaux",
    ],
  },
  {
    id: "deuxieme-ri",
    name: "Deuxieme revolution industrielle",
    birthYear: 1870,
    deathYear: 1914,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/PSM_V18_D500_Corliss_engine_at_the_centennial_exposition.jpg/220px-PSM_V18_D500_Corliss_engine.jpg",
    nationality: "International",
    movement: "Deuxieme RI",
    summary:
      "Electricite, acier, chimie, petrole transforment l'economie. Grandes entreprises, taylorisme, production de masse. Allemagne et USA rattrapent la Grande-Bretagne.",
    mainWorks: [
      "Electricite et eclairage (Edison, 1879)",
      "Acier Bessemer et chimie",
      "Moteur a explosion et petrole",
      "Taylorisme et production de masse",
    ],
  },
  {
    id: "electricite",
    name: "Revolution electrique",
    birthYear: 1879,
    deathYear: 1920,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/220px-Thomas_Edison2.jpg",
    nationality: "International",
    movement: "Deuxieme RI",
    summary:
      "Edison invente l'ampoule (1879) et developpe le reseau electrique. Tesla et Westinghouse imposent le courant alternatif. L'electricite transforme l'industrie et la vie quotidienne.",
    mainWorks: [
      "Ampoule incandescente (Edison, 1879)",
      "Centrales et reseaux electriques",
      "Courant alternatif (Tesla, Westinghouse)",
      "Moteur electrique industriel",
    ],
  },
  {
    id: "automobile",
    name: "Naissance de l'automobile",
    birthYear: 1886,
    deathYear: 1930,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/1885Benz.jpg/220px-1885Benz.jpg",
    nationality: "International",
    movement: "Deuxieme RI",
    summary:
      "Benz et Daimler inventent l'automobile a essence (1886). Ford democratise la voiture avec la Model T et la chaine de montage. Revolution des transports individuels.",
    mainWorks: [
      "Premiere automobile Benz (1886)",
      "Ford Model T (1908)",
      "Chaine de montage (1913)",
      "Democratisation de l'automobile",
    ],
  },
  {
    id: "taylorisme",
    name: "Taylorisme et fordisme",
    birthYear: 1911,
    deathYear: 1970,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ford_assembly_line_-_1913.jpg/220px-Ford_assembly_line_-_1913.jpg",
    nationality: "Americain",
    movement: "Deuxieme RI",
    summary:
      "Taylor invente l'organisation scientifique du travail. Ford applique ces principes avec la chaine de montage et les hauts salaires. Production de masse et consommation de masse.",
    mainWorks: [
      "Organisation scientifique du travail (Taylor, 1911)",
      "Chaine de montage Ford (1913)",
      "Five dollars a day - hauts salaires",
      "Production et consommation de masse",
    ],
  },
  {
    id: "aviation",
    name: "Naissance de l'aviation",
    birthYear: 1903,
    deathYear: 1950,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/First_flight2.jpg/220px-First_flight2.jpg",
    nationality: "International",
    movement: "XXe siecle",
    summary:
      "Les freres Wright realisent le premier vol motorise (1903). L'aviation se developpe pendant les guerres mondiales puis se democratise avec l'aviation commerciale.",
    mainWorks: [
      "Vol des freres Wright (1903)",
      "Aviation militaire (WWI, WWII)",
      "Lindbergh traverse l'Atlantique (1927)",
      "Aviation commerciale de masse",
    ],
  },
  {
    id: "petrochimie",
    name: "Age du petrole",
    birthYear: 1859,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Oil_well.jpg/220px-Oil_well.jpg",
    nationality: "International",
    movement: "XXe siecle",
    summary:
      "Le premier puits de petrole (1859) inaugure l'ere petroliere. Carburant, plastiques, engrais : le petrole transforme l'economie mondiale. Enjeu geopolitique majeur.",
    mainWorks: [
      "Premier puits de petrole (1859, Pennsylvanie)",
      "Standard Oil de Rockefeller",
      "Petrochimie et plastiques",
      "OPEP et geopolitique du petrole",
    ],
  },
  {
    id: "troisieme-ri",
    name: "Troisieme revolution industrielle",
    birthYear: 1970,
    deathYear: 2010,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/KL_Intel_C4004.jpg/220px-KL_Intel_C4004.jpg",
    nationality: "International",
    movement: "Troisieme RI",
    summary:
      "Electronique, informatique, telecommunications transforment l'economie. Ordinateurs personnels, Internet, mondialisation. Desindustrialisation des pays developpes.",
    mainWorks: [
      "Microprocesseur Intel (1971)",
      "Ordinateur personnel (1977-1984)",
      "Internet (1990s)",
      "Mondialisation et desindustrialisation",
    ],
  },
  {
    id: "informatique",
    name: "Revolution informatique",
    birthYear: 1945,
    deathYear: 2000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/ENIAC_Penn1.jpg/220px-ENIAC_Penn1.jpg",
    nationality: "International",
    movement: "Troisieme RI",
    summary:
      "Des premiers ordinateurs geants (ENIAC) au PC et a Internet. Transistor, circuit integre, microprocesseur. L'informatique transforme tous les secteurs de l'economie.",
    mainWorks: [
      "ENIAC - premier ordinateur (1945)",
      "Transistor (1947) et circuit integre (1958)",
      "Microprocesseur Intel 4004 (1971)",
      "IBM PC (1981) et Macintosh (1984)",
    ],
  },
  {
    id: "internet",
    name: "Revolution Internet",
    birthYear: 1990,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Internet_map_1024.jpg/220px-Internet_map_1024.jpg",
    nationality: "International",
    movement: "Troisieme RI",
    summary:
      "Le World Wide Web (1991) democratise Internet. E-commerce, reseaux sociaux, economie numerique. Transformation de la communication, du travail, de la culture.",
    mainWorks: [
      "World Wide Web (Tim Berners-Lee, 1991)",
      "Navigateurs et moteurs de recherche",
      "E-commerce (Amazon, 1994)",
      "Reseaux sociaux (Facebook, 2004)",
    ],
  },
  {
    id: "quatrieme-ri",
    name: "Quatrieme revolution industrielle",
    birthYear: 2010,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/KUKA_robot_for_flat_glas_handling.jpg/220px-KUKA_robot_for_flat_glas_handling.jpg",
    nationality: "International",
    movement: "Quatrieme RI",
    summary:
      "Fusion des technologies numeriques, biologiques et physiques. Intelligence artificielle, robotique, IoT, impression 3D. Transformation du travail et de la societe.",
    mainWorks: [
      "Intelligence artificielle et machine learning",
      "Internet des objets (IoT)",
      "Robotique avancee",
      "Impression 3D et fabrication additive",
    ],
  },
  {
    id: "ia",
    name: "Revolution de l'IA",
    birthYear: 2012,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GTC_2012_-_Jen-Hsun_Huang.jpg/220px-GTC_2012_-_Jen-Hsun_Huang.jpg",
    nationality: "International",
    movement: "Quatrieme RI",
    summary:
      "Le deep learning revolutionne l'IA a partir de 2012. Reconnaissance d'images, traduction, generation de texte et d'images. ChatGPT (2022) popularise l'IA generative.",
    mainWorks: [
      "Deep learning et reseaux neuronaux",
      "AlphaGo bat le champion de Go (2016)",
      "GPT et IA generative",
      "ChatGPT (2022) - democratisation",
    ],
  },
  {
    id: "transition-energetique",
    name: "Transition energetique",
    birthYear: 2000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg/220px-Photovoltaik_Dachanlage_Hannover.jpg",
    nationality: "International",
    movement: "XXIe siecle",
    summary:
      "Face au changement climatique, transition des energies fossiles vers les renouvelables. Solaire, eolien, vehicules electriques. Defis technologiques, economiques et politiques.",
    mainWorks: [
      "Developpement du solaire et de l'eolien",
      "Vehicules electriques (Tesla)",
      "Accord de Paris (2015)",
      "Objectif zero carbone",
    ],
  },
];
