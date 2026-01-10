export interface ExplorationItem {
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

export const explorations: ExplorationItem[] = [
  {
    id: "pheniciens",
    name: "Navigateurs pheniciens",
    birthYear: -1200,
    deathYear: -800,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Phoenician_ship.jpg/220px-Phoenician_ship.jpg",
    nationality: "Phenicien",
    movement: "Antiquite",
    summary:
      "Premiers grands navigateurs de l'histoire, les Pheniciens explorent toute la Mediterranee et fondent des comptoirs commerciaux. Ils auraient meme circumnavigue l'Afrique pour le pharaon Nechao II.",
    mainWorks: [
      "Fondation de Carthage (-814)",
      "Exploration de la Mediterranee occidentale",
      "Circumnavigation de l'Afrique (vers -600)",
      "Commerce de la pourpre et du cedre",
    ],
  },
  {
    id: "pytheas",
    name: "Pytheas",
    birthYear: -380,
    deathYear: -310,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Pytheas_of_Massalia.jpg/220px-Pytheas_of_Massalia.jpg",
    nationality: "Grec (Massalia)",
    movement: "Antiquite",
    summary:
      "Explorateur et astronome grec de Marseille, il navigue jusqu'aux iles Britanniques et probablement jusqu'en Islande (Thule). Premier a decrire les marees oceaniques et le soleil de minuit.",
    mainWorks: [
      "Voyage vers Thule (Islande ou Norvege)",
      "Exploration des iles Britanniques",
      "Description du soleil de minuit",
      "Calcul de la latitude de Marseille",
    ],
  },
  {
    id: "zheng-he",
    name: "Zheng He",
    birthYear: 1371,
    deathYear: 1433,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Zheng_He.jpg/220px-Zheng_He.jpg",
    nationality: "Chinois",
    movement: "Explorations chinoises",
    summary:
      "Amiral de la flotte imperiale Ming, il mene sept expeditions monumentales avec des centaines de navires geants. Explore l'Asie du Sud-Est, l'Inde, l'Arabie et l'Afrique de l'Est.",
    mainWorks: [
      "Sept expeditions maritimes (1405-1433)",
      "Flottes de 200-300 navires et 27 000 hommes",
      "Exploration jusqu'en Afrique de l'Est",
      "Diplomatie et commerce sur les routes maritimes",
    ],
  },
  {
    id: "diaz",
    name: "Bartolomeu Dias",
    birthYear: 1450,
    deathYear: 1500,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Bartolomeu_Dias%2C_South_Africa_House_%28cut%29.jpg/220px-Bartolomeu_Dias%2C_South_Africa_House_%28cut%29.jpg",
    nationality: "Portugais",
    movement: "Grandes decouvertes",
    summary:
      "Premier Europeen a franchir le cap de Bonne-Esperance en 1488, ouvrant la route maritime vers l'Inde. Sa decouverte permet les expeditions de Vasco de Gama.",
    mainWorks: [
      "Passage du cap de Bonne-Esperance (1488)",
      "Ouverture de la route vers l'Ocean Indien",
      "Cartographie de la cote africaine australe",
      "Mort lors de l'expedition de Cabral (1500)",
    ],
  },
  {
    id: "colomb",
    name: "Christophe Colomb",
    birthYear: 1451,
    deathYear: 1506,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg/220px-Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg",
    nationality: "Genois",
    movement: "Grandes decouvertes",
    summary:
      "Convaincu de pouvoir atteindre l'Asie par l'ouest, il decouvre l'Amerique en 1492 pour le compte de l'Espagne. Quatre voyages qui changent l'histoire mondiale, meme s'il meurt persuade d'avoir atteint l'Asie.",
    mainWorks: [
      "Decouverte de l'Amerique (12 octobre 1492)",
      "Quatre voyages transatlantiques (1492-1504)",
      "Colonisation d'Hispaniola (Haiti/Republique dominicaine)",
      "Debut de l'echange colombien entre continents",
    ],
  },
  {
    id: "vasco-de-gama",
    name: "Vasco de Gama",
    birthYear: 1469,
    deathYear: 1524,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Vasco_da_Gama_%28Livro_de_Lisuarte_de_Abreu%29.jpg/220px-Vasco_da_Gama_%28Livro_de_Lisuarte_de_Abreu%29.jpg",
    nationality: "Portugais",
    movement: "Grandes decouvertes",
    summary:
      "Premier Europeen a atteindre l'Inde par la mer en 1498, contournant l'Afrique. Ouvre la route des epices et etablit l'empire commercial portugais en Asie.",
    mainWorks: [
      "Premier voyage en Inde (1497-1499)",
      "Route maritime Europe-Inde etablie",
      "Comptoirs portugais en Inde (Calicut, Goa)",
      "Vice-roi des Indes portugaises (1524)",
    ],
  },
  {
    id: "cabot",
    name: "Jean Cabot",
    birthYear: 1450,
    deathYear: 1499,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/John_Cabot.jpg/220px-John_Cabot.jpg",
    nationality: "Venitien/Anglais",
    movement: "Grandes decouvertes",
    summary:
      "Navigateur venitien au service de l'Angleterre, il explore la cote de l'Amerique du Nord en 1497, revendiquant Terre-Neuve pour la couronne anglaise. Base des futures revendications britanniques en Amerique.",
    mainWorks: [
      "Decouverte de Terre-Neuve (1497)",
      "Exploration de la cote nord-americaine",
      "Revendication pour l'Angleterre",
      "Decouverte des bancs de morue",
    ],
  },
  {
    id: "magellan",
    name: "Fernand de Magellan",
    birthYear: 1480,
    deathYear: 1521,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Retrato_de_Fernando_de_Magallanes.jpg/220px-Retrato_de_Fernando_de_Magallanes.jpg",
    nationality: "Portugais/Espagnol",
    movement: "Grandes decouvertes",
    summary:
      "Organise la premiere circumnavigation du globe (1519-1522), prouvant definitivement la rotondite de la Terre. Meurt aux Philippines mais son expedition, menee a terme par Elcano, revolutionne la geographie.",
    mainWorks: [
      "Premiere circumnavigation (1519-1522)",
      "Passage du detroit de Magellan",
      "Traversee de l'ocean Pacifique",
      "Mort aux Philippines (1521)",
    ],
  },
  {
    id: "cartier",
    name: "Jacques Cartier",
    birthYear: 1491,
    deathYear: 1557,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jacques_Cartier_1851-1852.png/220px-Jacques_Cartier_1851-1852.png",
    nationality: "Francais",
    movement: "Exploration de l'Amerique du Nord",
    summary:
      "Explorateur francais qui decouvre le fleuve Saint-Laurent et revendique le Canada pour la France. Trois voyages (1534-1542) qui fondent la presence francaise en Amerique du Nord.",
    mainWorks: [
      "Decouverte du golfe du Saint-Laurent (1534)",
      "Exploration du fleuve Saint-Laurent",
      "Contact avec les peuples iroquoiens",
      "Fondation de la Nouvelle-France",
    ],
  },
  {
    id: "drake",
    name: "Francis Drake",
    birthYear: 1540,
    deathYear: 1596,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Francis_Drake%2C_1540-1596.jpg/220px-Francis_Drake%2C_1540-1596.jpg",
    nationality: "Anglais",
    movement: "Explorations elisabethaines",
    summary:
      "Corsaire et navigateur anglais, second a realiser la circumnavigation (1577-1580). Heros national anglais, il joue un role decisif contre l'Invincible Armada espagnole.",
    mainWorks: [
      "Circumnavigation (1577-1580)",
      "Raids contre les colonies espagnoles",
      "Victoire contre l'Invincible Armada (1588)",
      "Exploration de la cote californienne",
    ],
  },
  {
    id: "hudson",
    name: "Henry Hudson",
    birthYear: 1565,
    deathYear: 1611,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Henry_Hudson.jpg/220px-Henry_Hudson.jpg",
    nationality: "Anglais",
    movement: "Exploration arctique",
    summary:
      "Explorateur anglais cherchant le passage du Nord-Ouest. Decouvre le fleuve Hudson et la baie d'Hudson. Abandonne par son equipage mutine dans la baie qui porte son nom.",
    mainWorks: [
      "Exploration du fleuve Hudson (1609)",
      "Decouverte de la baie d'Hudson (1610)",
      "Recherche du passage du Nord-Ouest",
      "Abandonne par son equipage (1611)",
    ],
  },
  {
    id: "tasman",
    name: "Abel Tasman",
    birthYear: 1603,
    deathYear: 1659,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/AbelTasman.jpg/220px-AbelTasman.jpg",
    nationality: "Neerlandais",
    movement: "Exploration du Pacifique",
    summary:
      "Navigateur neerlandais qui decouvre la Tasmanie, la Nouvelle-Zelande et les iles Fidji. Premier Europeen a atteindre ces terres, ouvrant l'exploration de l'Oceanie.",
    mainWorks: [
      "Decouverte de la Tasmanie (1642)",
      "Decouverte de la Nouvelle-Zelande (1642)",
      "Exploration des iles Fidji et Tonga",
      "Cartographie de l'Australie (cotes nord et ouest)",
    ],
  },
  {
    id: "cook",
    name: "James Cook",
    birthYear: 1728,
    deathYear: 1779,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Captainjamescookportrait.jpg/220px-Captainjamescookportrait.jpg",
    nationality: "Anglais",
    movement: "Exploration scientifique",
    summary:
      "Plus grand explorateur du XVIIIe siecle, il cartographie le Pacifique lors de trois voyages. Decouvre la cote est de l'Australie, explore l'Antarctique et Hawaii ou il trouve la mort.",
    mainWorks: [
      "Trois voyages d'exploration (1768-1779)",
      "Cartographie de la Nouvelle-Zelande et de l'Australie",
      "Exploration de l'Antarctique",
      "Decouverte des iles Hawaii",
    ],
  },
  {
    id: "la-perouse",
    name: "Jean-Francois de La Perouse",
    birthYear: 1741,
    deathYear: 1788,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Jean-Fran%C3%A7ois_de_La_P%C3%A9rouse.jpg/220px-Jean-Fran%C3%A7ois_de_La_P%C3%A9rouse.jpg",
    nationality: "Francais",
    movement: "Exploration scientifique",
    summary:
      "Navigateur francais charge par Louis XVI d'une expedition scientifique dans le Pacifique. Disparait mysterieusement a Vanikoro apres avoir explore l'Alaska, l'Asie et l'Oceanie.",
    mainWorks: [
      "Expedition scientifique (1785-1788)",
      "Exploration de l'Alaska et de la Siberie",
      "Cartographie du Pacifique Nord",
      "Disparition a Vanikoro (1788)",
    ],
  },
  {
    id: "lewis-clark",
    name: "Lewis et Clark",
    birthYear: 1804,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Lewis_and_clark-expedition.jpg/220px-Lewis_and_clark-expedition.jpg",
    nationality: "Americain",
    movement: "Exploration de l'Amerique",
    summary:
      "Expedition commanditee par Jefferson pour explorer l'Ouest americain jusqu'au Pacifique (1804-1806). Traversent les Rocheuses avec l'aide de Sacagawea, ouvrant la voie a l'expansion americaine.",
    mainWorks: [
      "Expedition vers le Pacifique (1804-1806)",
      "Traversee des montagnes Rocheuses",
      "Cartographie du Missouri et de la Columbia",
      "Documentation de la faune et des peuples autochtones",
    ],
  },
  {
    id: "humboldt",
    name: "Alexander von Humboldt",
    birthYear: 1769,
    deathYear: 1859,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Alexander_von_Humboldt-selfportrait.jpg/220px-Alexander_von_Humboldt-selfportrait.jpg",
    nationality: "Allemand",
    movement: "Exploration scientifique",
    summary:
      "Naturaliste et explorateur, il parcourt l'Amerique latine pendant cinq ans (1799-1804). Fonde la geographie moderne et l'ecologie, documentant climat, vegetation et geologie.",
    mainWorks: [
      "Expedition en Amerique latine (1799-1804)",
      "Ascension du Chimborazo",
      "Cosmos - synthese des sciences naturelles",
      "Fondation de la biogeographie",
    ],
  },
  {
    id: "livingstone",
    name: "David Livingstone",
    birthYear: 1813,
    deathYear: 1873,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/David_Livingstone_by_Thomas_Annan.jpg/220px-David_Livingstone_by_Thomas_Annan.jpg",
    nationality: "Ecossais",
    movement: "Exploration de l'Afrique",
    summary:
      "Missionnaire et explorateur, il parcourt l'Afrique centrale pendant 30 ans. Decouvre les chutes Victoria et cherche les sources du Nil. Retrouve par Stanley en 1871.",
    mainWorks: [
      "Traversee de l'Afrique d'est en ouest",
      "Decouverte des chutes Victoria (1855)",
      "Exploration du Zambeze et du lac Tanganyika",
      "Lutte contre la traite des esclaves",
    ],
  },
  {
    id: "stanley",
    name: "Henry Morton Stanley",
    birthYear: 1841,
    deathYear: 1904,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Henry_Morton_Stanley_1872.jpg/220px-Henry_Morton_Stanley_1872.jpg",
    nationality: "Gallois/Americain",
    movement: "Exploration de l'Afrique",
    summary:
      "Journaliste devenu explorateur, celebre pour avoir retrouve Livingstone. Explore le fleuve Congo et contribue (controversement) a la colonisation du Congo pour le roi Leopold II.",
    mainWorks: [
      "Retrouvailles avec Livingstone (1871)",
      "Traversee de l'Afrique (1874-1877)",
      "Exploration du fleuve Congo",
      "Role dans la colonisation du Congo",
    ],
  },
  {
    id: "amundsen",
    name: "Roald Amundsen",
    birthYear: 1872,
    deathYear: 1928,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Amundsen_in_fur_skins.jpg/220px-Amundsen_in_fur_skins.jpg",
    nationality: "Norvegien",
    movement: "Exploration polaire",
    summary:
      "Plus grand explorateur polaire, premier a franchir le passage du Nord-Ouest (1906), premier au pole Sud (1911) et premier a survoler le pole Nord (1926). Disparait en Arctique lors d'une mission de sauvetage.",
    mainWorks: [
      "Passage du Nord-Ouest (1903-1906)",
      "Premier au pole Sud (14 decembre 1911)",
      "Survol du pole Nord en dirigeable (1926)",
      "Disparition en Arctique (1928)",
    ],
  },
  {
    id: "scott",
    name: "Robert Falcon Scott",
    birthYear: 1868,
    deathYear: 1912,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Scott_of_the_Antarctic_crop.jpg/220px-Scott_of_the_Antarctic_crop.jpg",
    nationality: "Anglais",
    movement: "Exploration polaire",
    summary:
      "Explorateur britannique dont l'expedition au pole Sud se termine en tragedie. Arrive au pole un mois apres Amundsen, il meurt avec ses compagnons sur le chemin du retour.",
    mainWorks: [
      "Expedition Discovery (1901-1904)",
      "Expedition Terra Nova (1910-1913)",
      "Arrivee au pole Sud (17 janvier 1912)",
      "Mort tragique au retour",
    ],
  },
  {
    id: "shackleton",
    name: "Ernest Shackleton",
    birthYear: 1874,
    deathYear: 1922,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Ernest_Shackleton_before_1909.jpg/220px-Ernest_Shackleton_before_1909.jpg",
    nationality: "Irlandais/Anglais",
    movement: "Exploration polaire",
    summary:
      "Explorateur legendaire de l'Antarctique. Son expedition Endurance (1914-1916) devient un exploit de survie : apres la perte du navire, il sauve tout son equipage apres 22 mois sur la glace.",
    mainWorks: [
      "Expedition Nimrod - record du Sud (1909)",
      "Expedition Endurance (1914-1916)",
      "Sauvetage de l'equipage apres naufrage",
      "Traversee de la Georgie du Sud",
    ],
  },
  {
    id: "hillary-tenzing",
    name: "Hillary et Tenzing",
    birthYear: 1953,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Edmund_Hillary_and_Tenzing_Norgay.jpg/220px-Edmund_Hillary_and_Tenzing_Norgay.jpg",
    nationality: "Neo-Zelandais / Nepalais",
    movement: "Exploration moderne",
    summary:
      "Edmund Hillary et Tenzing Norgay sont les premiers a atteindre le sommet de l'Everest le 29 mai 1953. Exploit qui couronne des decennies de tentatives et symbolise la conquete des derniers espaces terrestres.",
    mainWorks: [
      "Premier sommet de l'Everest (29 mai 1953)",
      "Expedition britannique de John Hunt",
      "Hillary : explorations en Antarctique",
      "Tenzing : legende de l'alpinisme himalayen",
    ],
  },
  {
    id: "piccard",
    name: "Auguste et Jacques Piccard",
    birthYear: 1884,
    deathYear: 1962,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Auguste_Piccard.jpg/220px-Auguste_Piccard.jpg",
    nationality: "Suisse",
    movement: "Exploration des profondeurs",
    summary:
      "Auguste Piccard explore la stratosphere en ballon (1931). Son fils Jacques atteint le fond de la fosse des Mariannes en 1960 (-10 916 m), le point le plus profond des oceans.",
    mainWorks: [
      "Vol stratospherique d'Auguste (1931)",
      "Invention du bathyscaphe",
      "Descente dans la fosse des Mariannes (1960)",
      "Record de profondeur : -10 916 m",
    ],
  },
  {
    id: "gagarine",
    name: "Youri Gagarine",
    birthYear: 1934,
    deathYear: 1968,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Yuri_Gagarin_%281961%29_-_Restoration.jpg/220px-Yuri_Gagarin_%281961%29_-_Restoration.jpg",
    nationality: "Sovietique",
    movement: "Exploration spatiale",
    summary:
      "Premier homme dans l'espace le 12 avril 1961. Son vol orbital de 108 minutes a bord de Vostok 1 ouvre l'ere de l'exploration spatiale habitee et fait de lui un heros mondial.",
    mainWorks: [
      "Premier vol spatial humain (12 avril 1961)",
      "Une orbite terrestre en 108 minutes",
      "Mission Vostok 1",
      "Symbole de la conquete spatiale",
    ],
  },
  {
    id: "armstrong",
    name: "Neil Armstrong",
    birthYear: 1930,
    deathYear: 2012,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Neil_Armstrong_pose.jpg/220px-Neil_Armstrong_pose.jpg",
    nationality: "Americain",
    movement: "Exploration spatiale",
    summary:
      "Premier homme a marcher sur la Lune le 20 juillet 1969. Commandant d'Apollo 11, ses premiers pas lunaires sont regardes par 600 millions de personnes et marquent l'apogee de la course a l'espace.",
    mainWorks: [
      "Premier pas sur la Lune (20 juillet 1969)",
      "Mission Apollo 11 avec Aldrin et Collins",
      "\"Un petit pas pour l'homme...\"",
      "Collecte d'echantillons lunaires",
    ],
  },
];
