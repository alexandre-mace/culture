export interface EpochItem {
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

export const epochs: EpochItem[] = [
  {
    id: "formation-terre",
    name: "Formation de la Terre",
    birthYear: -4540000000,
    deathYear: -4000000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/220px-The_Earth_seen_from_Apollo_17.jpg",
    nationality: "Global",
    movement: "Hadeen",
    summary:
      "La Terre se forme par accretion de poussieres et de gaz il y a 4,54 milliards d'annees. Bombardement d'asteroides intense, formation de la Lune, surface en fusion. Premiers oceans vers -4,4 Ga.",
    mainWorks: [
      "Accretion de la proto-Terre",
      "Impact geant formant la Lune",
      "Refroidissement et formation de la croute",
      "Premiers oceans (-4,4 Ga)",
    ],
  },
  {
    id: "archeen",
    name: "Archeen",
    birthYear: -4000000000,
    deathYear: -2500000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Stromatolites_in_Sharkbay.jpg/220px-Stromatolites_in_Sharkbay.jpg",
    nationality: "Global",
    movement: "Precambrien",
    summary:
      "Premiers continents, premiers organismes vivants (bacteries). Les cyanobacteries commencent a produire de l'oxygene par photosynthese. Atmosphere primitive, pas d'ozone.",
    mainWorks: [
      "Premiers micro-organismes (-3,8 Ga)",
      "Stromatolites - structures bacteriennes",
      "Debut de la photosynthese",
      "Formation des premiers continents",
    ],
  },
  {
    id: "grande-oxydation",
    name: "Grande Oxydation",
    birthYear: -2400000000,
    deathYear: -2000000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Oxygenation-atm-2.svg/220px-Oxygenation-atm-2.svg.png",
    nationality: "Global",
    movement: "Proterozoique",
    summary:
      "L'oxygene produit par les cyanobacteries s'accumule dans l'atmosphere. Extinction massive des organismes anaerobies. Premiere grande transformation de l'atmosphere terrestre.",
    mainWorks: [
      "Accumulation d'oxygene atmospherique",
      "Extinction des anaerobies",
      "Formation de la couche d'ozone",
      "Rouille des minerais de fer (BIF)",
    ],
  },
  {
    id: "terre-boule-neige",
    name: "Terre boule de neige",
    birthYear: -720000000,
    deathYear: -635000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Snowball_Earth.jpg/220px-Snowball_Earth.jpg",
    nationality: "Global",
    movement: "Proterozoique",
    summary:
      "Glaciations extremes recouvrent presque toute la Terre de glace. Plusieurs episodes de 'Terre boule de neige'. La vie survit dans des refuges. Precede l'explosion cambrienne.",
    mainWorks: [
      "Glaciations globales",
      "Glace jusqu'a l'equateur",
      "Survie de la vie dans des refuges",
      "Cycles glaciation-deglaciation",
    ],
  },
  {
    id: "explosion-cambrienne",
    name: "Explosion cambrienne",
    birthYear: -541000000,
    deathYear: -485000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Burgess_community.png/220px-Burgess_community.png",
    nationality: "Global",
    movement: "Paleozoique",
    summary:
      "En quelques millions d'annees, apparition de la plupart des grands groupes animaux actuels. Premiers fossiles a coquilles, premiers predateurs. Revolution de la vie complexe.",
    mainWorks: [
      "Apparition rapide de la vie animale complexe",
      "Premiers animaux a coquilles",
      "Diversification des plans d'organisation",
      "Faune de Burgess (Canada)",
    ],
  },
  {
    id: "ordovicien-silurien",
    name: "Extinction Ordovicien-Silurien",
    birthYear: -445000000,
    deathYear: -443000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Trilobite_Heinrich_Harder.jpg/220px-Trilobite.jpg",
    nationality: "Global",
    movement: "Paleozoique",
    summary:
      "Deuxieme plus grande extinction de masse. Glaciation massive, baisse du niveau des mers. 85% des especes marines disparaissent. La vie est encore exclusivement aquatique.",
    mainWorks: [
      "Glaciation du Gondwana",
      "85% des especes marines disparaissent",
      "Deuxieme grande extinction",
      "Vie encore marine uniquement",
    ],
  },
  {
    id: "devonien",
    name: "Devonien - Conquete des terres",
    birthYear: -419000000,
    deathYear: -359000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Tiktaalik_roseae_life_restor.jpg/220px-Tiktaalik.jpg",
    nationality: "Global",
    movement: "Paleozoique",
    summary:
      "Age des poissons, mais surtout conquete des terres emergees. Premiers tetrapodes (Tiktaalik), premieres forets. Extinction de masse a la fin du Devonien.",
    mainWorks: [
      "Age des poissons",
      "Premiers tetrapodes (Tiktaalik)",
      "Premieres forets",
      "Extinction de la fin du Devonien",
    ],
  },
  {
    id: "carbonifere",
    name: "Carbonifere",
    birthYear: -359000000,
    deathYear: -299000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Meganeura.jpg/220px-Meganeura.jpg",
    nationality: "Global",
    movement: "Paleozoique",
    summary:
      "Forets geantes de fougeres et lycopodes dans les marecages tropicaux. Formation du charbon. Insectes geants (libellules de 70 cm). Premiers reptiles.",
    mainWorks: [
      "Forets de fougeres geantes",
      "Formation des gisements de charbon",
      "Insectes geants (forte teneur en O2)",
      "Premiers reptiles",
    ],
  },
  {
    id: "extinction-permien",
    name: "Extinction du Permien",
    birthYear: -252000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Extinction_intensity.svg/220px-Extinction_intensity.svg.png",
    nationality: "Global",
    movement: "Paleozoique / Mesozoique",
    summary:
      "La plus grande extinction de masse : 96% des especes marines, 70% des terrestres disparaissent. Volcans de Siberie, rechauffement, acidification. La vie met 10 millions d'annees a se retablir.",
    mainWorks: [
      "96% des especes marines disparaissent",
      "Trapps de Siberie - volcanisme massif",
      "Rechauffement et acidification des oceans",
      "Fin de l'ere Paleozoique",
    ],
  },
  {
    id: "trias-jurassique",
    name: "Trias et Jurassique",
    birthYear: -252000000,
    deathYear: -145000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Brontosaurus_by_Tom_Parker.png/220px-Brontosaurus.png",
    nationality: "Global",
    movement: "Mesozoique",
    summary:
      "Age des dinosaures. Les reptiles dominent terre, mer et air. Premiers dinosaures au Trias, apogee au Jurassique. Premiers mammiferes et premiers oiseaux.",
    mainWorks: [
      "Premiers dinosaures (-230 Ma)",
      "Pangee puis fragmentation",
      "Apogee des dinosaures au Jurassique",
      "Premiers mammiferes et oiseaux",
    ],
  },
  {
    id: "cretace",
    name: "Cretace et extinction K-Pg",
    birthYear: -145000000,
    deathYear: -66000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Chicxulub_impact_-_artist_impression.jpg/220px-Chicxulub_impact.jpg",
    nationality: "Global",
    movement: "Mesozoique",
    summary:
      "Apogee des dinosaures, apparition des plantes a fleurs. Se termine par l'impact d'asteroide de Chicxulub : 75% des especes disparaissent, dont tous les dinosaures non-aviens.",
    mainWorks: [
      "T-Rex, Triceratops, dinosaures iconiques",
      "Apparition des plantes a fleurs",
      "Impact de Chicxulub (-66 Ma)",
      "Extinction des dinosaures non-aviens",
    ],
  },
  {
    id: "paleogene",
    name: "Paleogene - Age des mammiferes",
    birthYear: -66000000,
    deathYear: -23000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Woolly_Mammoth-RBC.jpg/220px-Woolly_Mammoth.jpg",
    nationality: "Global",
    movement: "Cenozoique",
    summary:
      "Apres l'extinction, les mammiferes rayonnent et occupent toutes les niches ecologiques. Premiers primates, premiers cetaces. Climat chaud puis refroidissement progressif.",
    mainWorks: [
      "Radiation des mammiferes",
      "Premiers primates",
      "Evolution des cetaces",
      "Climat chaud au debut",
    ],
  },
  {
    id: "neogene",
    name: "Neogene",
    birthYear: -23000000,
    deathYear: -2600000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Australopithecus_afarensis.png/220px-Australopithecus_afarensis.png",
    nationality: "Global",
    movement: "Cenozoique",
    summary:
      "Refroidissement climatique, formation des calottes glaciaires. Faunes modernes se mettent en place. Evolution des hominides en Afrique. Formation de l'isthme de Panama.",
    mainWorks: [
      "Refroidissement et glaciations",
      "Faunes modernes",
      "Evolution des hominides",
      "Isthme de Panama ferme",
    ],
  },
  {
    id: "paleolithique",
    name: "Paleolithique",
    birthYear: -3300000,
    deathYear: -10000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Lascaux_painting.jpg/220px-Lascaux_painting.jpg",
    nationality: "Global",
    movement: "Prehistoire",
    summary:
      "Age de la pierre taillee. Premiers outils, maitrise du feu, premiers Homo sapiens. Chasseurs-cueilleurs nomades. Art parietal (Lascaux, Chauvet). Peuplement de tous les continents.",
    mainWorks: [
      "Premiers outils de pierre (-3,3 Ma)",
      "Maitrise du feu (-400 000 ans)",
      "Homo sapiens (-300 000 ans)",
      "Art parietal (Lascaux, Chauvet)",
    ],
  },
  {
    id: "neolithique",
    name: "Revolution neolithique",
    birthYear: -10000,
    deathYear: -3000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Stonehenge2007_07_30.jpg/220px-Stonehenge.jpg",
    nationality: "Global",
    movement: "Prehistoire",
    summary:
      "Revolution agricole : domestication des plantes et des animaux. Sedentarisation, premiers villages puis villes. Poterie, tissage. Explosion demographique et hierarchies sociales.",
    mainWorks: [
      "Domestication des cereales (Croissant fertile)",
      "Elevage (mouton, chevre, bovin)",
      "Premiers villages permanents",
      "Poterie et megalithes (Stonehenge)",
    ],
  },
  {
    id: "age-bronze",
    name: "Age du Bronze",
    birthYear: -3300,
    deathYear: -1200,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Nebra_Scheibe.jpg/220px-Nebra_Scheibe.jpg",
    nationality: "Global",
    movement: "Protohistoire",
    summary:
      "Metallurgie du bronze (cuivre + etain). Premieres civilisations : Sumer, Egypte, Chine, Indus. Ecriture, Etats, commerce longue distance. Effondrement vers -1200.",
    mainWorks: [
      "Metallurgie du bronze",
      "Premieres ecritures (Sumer, Egypte)",
      "Premieres grandes civilisations",
      "Effondrement de l'Age du Bronze (-1200)",
    ],
  },
  {
    id: "age-fer",
    name: "Age du Fer",
    birthYear: -1200,
    deathYear: -500,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Celtic_gold_torque_from_Erstfeld.jpg/220px-Celtic_gold_torque.jpg",
    nationality: "Global",
    movement: "Protohistoire",
    summary:
      "Apres l'effondrement, le fer remplace le bronze. Nouvelles civilisations : Grecs, Pheniciens, Perses, Celtes. Alphabet, monnaie, philosophie. Transition vers l'histoire.",
    mainWorks: [
      "Metallurgie du fer",
      "Alphabet phenicien puis grec",
      "Expansion des Grecs et Pheniciens",
      "Empires perse et assyrien",
    ],
  },
  {
    id: "anthropocene",
    name: "Anthropocene",
    birthYear: 1950,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Factory_in_China.jpg/220px-Factory_in_China.jpg",
    nationality: "Global",
    movement: "Contemporain",
    summary:
      "Epoque geologique proposee ou l'humanite devient une force geologique majeure. Changement climatique, sixieme extinction, plastiques dans les sediments. Debat scientifique en cours.",
    mainWorks: [
      "Impact humain sur le systeme Terre",
      "Changement climatique",
      "Sixieme extinction de masse",
      "Marqueurs geologiques (plastiques, radioactivite)",
    ],
  },
];
