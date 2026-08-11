export interface EpochItem {
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

export const epochs: EpochItem[] = [
  {
    id: "formation-terre",
    name: "Formation de la Terre",
    birthYear: -4540000000,
    deathYear: -4000000000,
    nationality: "Global",
    movement: "Hadéen",
    family: "Précambrien",
    summary:
      "La Terre se forme par accrétion de poussières et de gaz il y a 4,54 milliards d'années. Bombardement d'astéroïdes intense, formation de la Lune, surface en fusion. Premiers océans vers -4,4 Ga.",
    mainWorks: [
      "Accrétion de la proto-Terre",
      "Impact géant formant la Lune",
      "Refroidissement et formation de la croûte",
      "Premiers océans (-4,4 Ga)",
    ],
  },
  {
    id: "archeen",
    name: "Archéen",
    birthYear: -4000000000,
    deathYear: -2500000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Archean.png/330px-Archean.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Global",
    movement: "Précambrien",
    family: "Précambrien",
    summary:
      "Premiers continents, premiers organismes vivants (bactéries). Les cyanobactéries commencent à produire de l'oxygène par photosynthèse. Atmosphère primitive, pas d'ozone.",
    mainWorks: [
      "Premiers micro-organismes (-3,8 Ga)",
      "Stromatolites - structures bactériennes",
      "Début de la photosynthèse",
      "Formation des premiers continents",
    ],
  },
  {
    id: "grande-oxydation",
    name: "Grande Oxydation",
    birthYear: -2400000000,
    deathYear: -2000000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Oxyg%C3%A9nation_de_l%27atmosph%C3%A8re.svg/langfr-330px-Oxyg%C3%A9nation_de_l%27atmosph%C3%A8re.svg.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Global",
    movement: "Protérozoïque",
    family: "Précambrien",
    summary:
      "L'oxygène produit par les cyanobactéries s'accumule dans l'atmosphère. Extinction massive des organismes anaérobies. Première grande transformation de l'atmosphère terrestre.",
    mainWorks: [
      "Accumulation d'oxygène atmosphérique",
      "Extinction des anaérobies",
      "Formation de la couche d'ozone",
      "Rouille des minerais de fer (BIF)",
    ],
  },
  {
    id: "terre-boule-neige",
    name: "Terre boule de neige",
    birthYear: -720000000,
    deathYear: -635000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/SIM_neoproto.ogv/330px--SIM_neoproto.ogv.jpg",
    nationality: "Global",
    movement: "Protérozoïque",
    family: "Précambrien",
    summary:
      "Glaciations extrêmes recouvrent presque toute la Terre de glace. Plusieurs épisodes de 'Terre boule de neige'. La vie survit dans des refuges. Précède l'explosion cambrienne.",
    mainWorks: [
      "Glaciations globales",
      "Glace jusqu'à l'équateur",
      "Survie de la vie dans des refuges",
      "Cycles glaciation-déglaciation",
    ],
  },
  {
    id: "explosion-cambrienne",
    name: "Explosion cambrienne",
    birthYear: -541000000,
    deathYear: -485000000,
    nationality: "Global",
    movement: "Paléozoïque",
    family: "Paléozoïque",
    summary:
      "En quelques millions d'années, apparition de la plupart des grands groupes animaux actuels. Premiers fossiles à coquilles, premiers prédateurs. Révolution de la vie complexe.",
    mainWorks: [
      "Apparition rapide de la vie animale complexe",
      "Premiers animaux à coquilles",
      "Diversification des plans d'organisation",
      "Faune de Burgess (Canada)",
    ],
  },
  {
    id: "ordovicien-silurien",
    name: "Extinction Ordovicien-Silurien",
    birthYear: -445000000,
    deathYear: -443000000,
    nationality: "Global",
    movement: "Paléozoïque",
    family: "Paléozoïque",
    summary:
      "Deuxième plus grande extinction de masse. Glaciation massive, baisse du niveau des mers. 85% des espèces marines disparaissent. La vie est encore exclusivement aquatique.",
    mainWorks: [
      "Glaciation du Gondwana",
      "85% des espèces marines disparaissent",
      "Deuxième grande extinction",
      "Vie encore marine uniquement",
    ],
  },
  {
    id: "devonien",
    name: "Dévonien - Conquête des terres",
    birthYear: -419000000,
    deathYear: -359000000,
    nationality: "Global",
    movement: "Paléozoïque",
    family: "Paléozoïque",
    summary:
      "Âge des poissons, mais surtout conquête des terres émergées. Premiers tétrapodes (Tiktaalik), premières forêts. Extinction de masse à la fin du Dévonien.",
    mainWorks: [
      "Âge des poissons",
      "Premiers tétrapodes (Tiktaalik)",
      "Premières forêts",
      "Extinction de la fin du Dévonien",
    ],
  },
  {
    id: "carbonifere",
    name: "Carbonifère",
    birthYear: -359000000,
    deathYear: -299000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Plants_of_the_Carboniferous_age_MKL_Bd._15_1890_%28128660878%29.jpg/330px-Plants_of_the_Carboniferous_age_MKL_Bd._15_1890_%28128660878%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Global",
    movement: "Paléozoïque",
    family: "Paléozoïque",
    summary:
      "Forêts géantes de fougères et lycopodes dans les marécages tropicaux. Formation du charbon. Insectes géants (libellules de 70 cm). Premiers reptiles.",
    mainWorks: [
      "Forêts de fougères géantes",
      "Formation des gisements de charbon",
      "Insectes géants (forte teneur en O2)",
      "Premiers reptiles",
    ],
  },
  {
    id: "extinction-permien",
    name: "Extinction du Permien",
    birthYear: -252000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Extinction_intensity.svg/langfr-330px-Extinction_intensity.svg.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Global",
    movement: "Paléozoïque / Mésozoïque",
    family: "Paléozoïque",
    summary:
      "La plus grande extinction de masse : 96% des espèces marines, 70% des terrestres disparaissent. Volcans de Sibérie, réchauffement, acidification. La vie met 10 millions d'années à se rétablir.",
    mainWorks: [
      "96% des espèces marines disparaissent",
      "Trapps de Sibérie - volcanisme massif",
      "Réchauffement et acidification des océans",
      "Fin de l'ère Paléozoïque",
    ],
  },
  {
    id: "trias-jurassique",
    name: "Trias et Jurassique",
    birthYear: -252000000,
    deathYear: -145000000,
    nationality: "Global",
    movement: "Mésozoïque",
    family: "Mésozoïque & Cénozoïque",
    summary:
      "Âge des dinosaures. Les reptiles dominent terre, mer et air. Premiers dinosaures au Trias, apogée au Jurassique. Premiers mammifères et premiers oiseaux.",
    mainWorks: [
      "Premiers dinosaures (-230 Ma)",
      "Pangée puis fragmentation",
      "Apogée des dinosaures au Jurassique",
      "Premiers mammifères et oiseaux",
    ],
  },
  {
    id: "cretace",
    name: "Crétacé et extinction K-Pg",
    birthYear: -145000000,
    deathYear: -66000000,
    nationality: "Global",
    movement: "Mésozoïque",
    family: "Mésozoïque & Cénozoïque",
    summary:
      "Apogée des dinosaures, apparition des plantes à fleurs. Se termine par l'impact d'astéroïde de Chicxulub : 75% des espèces disparaissent, dont tous les dinosaures non-aviens.",
    mainWorks: [
      "T-Rex, Triceratops, dinosaures iconiques",
      "Apparition des plantes à fleurs",
      "Impact de Chicxulub (-66 Ma)",
      "Extinction des dinosaures non-aviens",
    ],
  },
  {
    id: "paleogene",
    name: "Paléogène - Âge des mammifères",
    birthYear: -66000000,
    deathYear: -23000000,
    nationality: "Global",
    movement: "Cénozoïque",
    family: "Mésozoïque & Cénozoïque",
    summary:
      "Après l'extinction, les mammifères rayonnent et occupent toutes les niches écologiques. Premiers primates, premiers cétacés. Climat chaud puis refroidissement progressif.",
    mainWorks: [
      "Radiation des mammifères",
      "Premiers primates",
      "Évolution des cétacés",
      "Climat chaud au début",
    ],
  },
  {
    id: "neogene",
    name: "Néogène",
    birthYear: -23000000,
    deathYear: -2600000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Dinotherium.jpg/330px-Dinotherium.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Global",
    movement: "Cénozoïque",
    family: "Mésozoïque & Cénozoïque",
    summary:
      "Refroidissement climatique, formation des calottes glaciaires. Faunes modernes se mettent en place. Évolution des hominidés en Afrique. Formation de l'isthme de Panama.",
    mainWorks: [
      "Refroidissement et glaciations",
      "Faunes modernes",
      "Évolution des hominidés",
      "Isthme de Panama fermé",
    ],
  },
  {
    id: "paleolithique",
    name: "Paléolithique",
    birthYear: -3300000,
    deathYear: -10000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Bifaz_eliptico.jpg/330px-Bifaz_eliptico.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Global",
    movement: "Préhistoire",
    family: "Temps des humains",
    summary:
      "Âge de la pierre taillée. Premiers outils, maîtrise du feu, premiers Homo sapiens. Chasseurs-cueilleurs nomades. Art pariétal (Lascaux, Chauvet). Peuplement de tous les continents.",
    mainWorks: [
      "Premiers outils de pierre (-3,3 Ma)",
      "Maîtrise du feu (-400 000 ans)",
      "Homo sapiens (-300 000 ans)",
      "Art pariétal (Lascaux, Chauvet)",
    ],
  },
  {
    id: "neolithique",
    name: "Révolution néolithique",
    birthYear: -10000,
    deathYear: -3000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Knapp_of_Howar_2.jpg/330px-Knapp_of_Howar_2.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Global",
    movement: "Préhistoire",
    family: "Temps des humains",
    summary:
      "Révolution agricole : domestication des plantes et des animaux. Sédentarisation, premiers villages puis villes. Poterie, tissage. Explosion démographique et hiérarchies sociales.",
    mainWorks: [
      "Domestication des céréales (Croissant fertile)",
      "Élevage (mouton, chèvre, bovin)",
      "Premiers villages permanents",
      "Poterie et mégalithes (Stonehenge)",
    ],
  },
  {
    id: "age-bronze",
    name: "Âge du Bronze",
    birthYear: -3300,
    deathYear: -1200,
    nationality: "Global",
    movement: "Protohistoire",
    family: "Temps des humains",
    summary:
      "Métallurgie du bronze (cuivre + étain). Premières civilisations : Sumer, Égypte, Chine, Indus. Écriture, États, commerce longue distance. Effondrement vers -1200.",
    mainWorks: [
      "Métallurgie du bronze",
      "Premières écritures (Sumer, Égypte)",
      "Premières grandes civilisations",
      "Effondrement de l'Âge du Bronze (-1200)",
    ],
  },
  {
    id: "age-fer",
    name: "Âge du Fer",
    birthYear: -1200,
    deathYear: -500,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Celtic-roundhouse-1994.jpg/330px-Celtic-roundhouse-1994.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Global",
    movement: "Protohistoire",
    family: "Temps des humains",
    summary:
      "Après l'effondrement, le fer remplace le bronze. Nouvelles civilisations : Grecs, Phéniciens, Perses, Celtes. Alphabet, monnaie, philosophie. Transition vers l'histoire.",
    mainWorks: [
      "Métallurgie du fer",
      "Alphabet phénicien puis grec",
      "Expansion des Grecs et Phéniciens",
      "Empires perse et assyrien",
    ],
  },
  {
    id: "anthropocene",
    name: "Anthropocène",
    birthYear: 1950,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Earth%27s_City_Lights_by_DMSP%2C_1994-1995_%28large%29.jpg/330px-Earth%27s_City_Lights_by_DMSP%2C_1994-1995_%28large%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Global",
    movement: "Contemporain",
    family: "Temps des humains",
    summary:
      "Époque géologique proposée où l'humanité devient une force géologique majeure. Changement climatique, sixième extinction, plastiques dans les sédiments. Débat scientifique en cours.",
    mainWorks: [
      "Impact humain sur le système Terre",
      "Changement climatique",
      "Sixième extinction de masse",
      "Marqueurs géologiques (plastiques, radioactivité)",
    ],
  },
];
