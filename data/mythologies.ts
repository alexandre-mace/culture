export interface MythologyItem {
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

export const mythologies: MythologyItem[] = [
  {
    id: "mythologie-sumerienne",
    name: "Mythologie sumerienne",
    birthYear: -3500,
    deathYear: -2000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Hero_lion_Dur-Sharrukin_Louvre_AO19862.jpg/400px-Hero_lion_Dur-Sharrukin_Louvre_AO19862.jpg",
    nationality: "Mesopotamien",
    movement: "Antiquite",
    summary:
      "Plus ancienne mythologie ecrite. Dieux du ciel (An), de l'air (Enlil), de l'eau (Enki). Epopee de Gilgamesh, premier grand texte litteraire. Deluge, descente aux enfers.",
    mainWorks: [
      "Epopee de Gilgamesh",
      "Enuma Elish (creation)",
      "Descente d'Inanna aux enfers",
      "Recit du Deluge (inspire la Bible)",
    ],
  },
  {
    id: "mythologie-egyptienne",
    name: "Mythologie egyptienne",
    birthYear: -3000,
    deathYear: -30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/BD_Hunefer.jpg/500px-BD_Hunefer.jpg",
    nationality: "Egyptien",
    movement: "Antiquite",
    summary:
      "Ra, Osiris, Isis, Horus : un pantheon complexe lie au Nil et au cycle solaire. Culte des morts elabore, momification, voyage dans l'au-dela. Livre des Morts.",
    mainWorks: [
      "Mythe d'Osiris (mort et resurrection)",
      "Ra - dieu soleil createur",
      "Livre des Morts",
      "Jugement des ames par Osiris",
    ],
  },
  {
    id: "mythologie-grecque",
    name: "Mythologie grecque",
    birthYear: -1200,
    deathYear: -300,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Jupiter_Smyrna_Louvre_Ma13.jpg/400px-Jupiter_Smyrna_Louvre_Ma13.jpg",
    nationality: "Grec",
    movement: "Antiquite",
    summary:
      "Zeus, Athena, Apollon : dieux de l'Olympe aux passions humaines. Mythes de creation, heros (Hercule, Achille, Ulysse), tragedies. Influence immense sur l'art et la litterature occidentale.",
    mainWorks: [
      "Theogonie d'Hesiode",
      "Iliade et Odyssee d'Homere",
      "Douze travaux d'Hercule",
      "Tragedies grecques (Oedipe, Antigone)",
    ],
  },
  {
    id: "mythologie-romaine",
    name: "Mythologie romaine",
    birthYear: -753,
    deathYear: 476,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/She-wolf_suckles_Romulus_and_Remus.jpg/500px-She-wolf_suckles_Romulus_and_Remus.jpg",
    nationality: "Romain",
    movement: "Antiquite",
    summary:
      "Adaptee de la Grece (Jupiter/Zeus, Mars/Ares), elle ajoute des mythes fondateurs : Romulus et Remus, Enee. Religion civique, culte imperial, vestales.",
    mainWorks: [
      "Eneide de Virgile",
      "Metamorphoses d'Ovide",
      "Romulus et Remus - fondation de Rome",
      "Culte imperial",
    ],
  },
  {
    id: "mythologie-nordique",
    name: "Mythologie nordique",
    birthYear: -500,
    deathYear: 1100,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Georg_von_Rosen_-_Oden_som_vandringsman%2C_1886_%28Odin%2C_the_Wanderer%29.jpg/400px-Georg_von_Rosen_-_Oden_som_vandringsman%2C_1886_%28Odin%2C_the_Wanderer%29.jpg",
    nationality: "Scandinave",
    movement: "Moyen Age",
    summary:
      "Odin, Thor, Loki, Freya : dieux guerriers des Vikings. Yggdrasil (arbre-monde), Ragnarok (fin du monde). Redecouvert au XIXe siecle, inspire fantasy et pop culture.",
    mainWorks: [
      "Edda poetique et Edda en prose",
      "Odin - dieu supreme, sacrifice",
      "Thor - dieu du tonnerre",
      "Ragnarok - fin et renouveau du monde",
    ],
  },
  {
    id: "mythologie-celtique",
    name: "Mythologie celtique",
    birthYear: -500,
    deathYear: 500,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Cernunnos_on_the_Gundestrup_Cauldron.jpg/500px-Cernunnos_on_the_Gundestrup_Cauldron.jpg",
    nationality: "Celte",
    movement: "Antiquite / Moyen Age",
    summary:
      "Mythes des Celtes de Gaule, Bretagne, Irlande. Druides, monde des fees (Sidh), cycle arthurien. Transmis oralement, transcrit au Moyen Age. Merlin, Graal, chevaliers.",
    mainWorks: [
      "Cycle d'Ulster (Cuchulainn)",
      "Cycle arthurien (roi Arthur, Graal)",
      "Tuatha De Danann - dieux irlandais",
      "Merlin et les fees",
    ],
  },
  {
    id: "mythologie-hindoue",
    name: "Mythologie hindoue",
    birthYear: -1500,
    nationality: "Indien",
    movement: "Religions orientales",
    summary:
      "Brahma, Vishnou, Shiva (Trimurti) et leurs avatars (Krishna, Rama). Epopees grandioses (Mahabharata, Ramayana), cycles cosmiques infinis. Toujours vivante aujourd'hui.",
    mainWorks: [
      "Mahabharata (Bhagavad-Gita)",
      "Ramayana",
      "Avatars de Vishnou (Krishna, Rama)",
      "Shiva - destruction et creation",
    ],
  },
  {
    id: "mythologie-chinoise",
    name: "Mythologie chinoise",
    birthYear: -2000,
    nationality: "Chinois",
    movement: "Religions orientales",
    summary:
      "Pangu cree le monde, Nuwa cree les humains. Empereur de Jade, dragons, phoenixes. Taoisme, bouddhisme et confucianisme s'y melent. Voyage vers l'Ouest.",
    mainWorks: [
      "Pangu et la creation",
      "Nuwa cree l'humanite",
      "Dragon chinois - symbole imperial",
      "Voyage vers l'Ouest (Roi Singe)",
    ],
  },
  {
    id: "mythologie-japonaise",
    name: "Mythologie japonaise",
    birthYear: -700,
    nationality: "Japonais",
    movement: "Religions orientales",
    summary:
      "Amaterasu (deesse du soleil), Susanoo, Tsukuyomi. Le Kojiki raconte la creation du Japon. Shinto : les kami habitent la nature. Syncretisme avec le bouddhisme.",
    mainWorks: [
      "Kojiki et Nihon Shoki",
      "Amaterasu - deesse du soleil",
      "Creation des iles du Japon",
      "Kami - esprits de la nature",
    ],
  },
  {
    id: "mythologie-maya",
    name: "Mythologie maya",
    birthYear: -2000,
    deathYear: 1500,
    nationality: "Mesoamericain",
    movement: "Ameriques",
    summary:
      "Popol Vuh : jumeaux heros, descente a Xibalba (enfers). Dieux du mais, de la pluie, jaguars. Calendrier sacre, sacrifices. Civilisation sophistiquee.",
    mainWorks: [
      "Popol Vuh - livre sacre",
      "Jumeaux heros (Hunahpu et Xbalanque)",
      "Xibalba - monde souterrain",
      "Calendrier sacre",
    ],
  },
  {
    id: "mythologie-azteque",
    name: "Mythologie azteque",
    birthYear: 1300,
    deathYear: 1521,
    nationality: "Mesoamericain",
    movement: "Ameriques",
    summary:
      "Huitzilopochtli (dieu de la guerre et du soleil), Quetzalcoatl (serpent a plumes). Cinq soleils (eres du monde), sacrifices humains pour nourrir le soleil.",
    mainWorks: [
      "Quetzalcoatl - serpent a plumes",
      "Huitzilopochtli - dieu du soleil et de la guerre",
      "Mythe des cinq soleils",
      "Sacrifices humains",
    ],
  },
  {
    id: "mythologie-africaine",
    name: "Mythologies africaines",
    birthYear: -3000,
    nationality: "Africain",
    movement: "Traditions orales",
    summary:
      "Grande diversite : Orishas yorubas, Anansi l'araignee, Mwari des Shonas. Transmises oralement. Influence les religions afro-americaines (vaudou, candomble, santeria).",
    mainWorks: [
      "Orishas yorubas (Nigeria)",
      "Anansi l'araignee (Afrique de l'Ouest)",
      "Mythes de creation varies",
      "Influence sur le vaudou et la santeria",
    ],
  },
  {
    id: "mythologie-polynesienne",
    name: "Mythologie polynesienne",
    birthYear: -1000,
    nationality: "Polynesien",
    movement: "Oceanie",
    summary:
      "Maui le demi-dieu, Pele deesse des volcans. Mana (force spirituelle), tapu (interdit sacre). Navigation et peuplement du Pacifique, mythes hawaiiens, maoris.",
    mainWorks: [
      "Maui - demi-dieu trickster",
      "Pele - deesse des volcans (Hawaii)",
      "Tangaroa - dieu de la mer",
      "Mana et tapu",
    ],
  },
  {
    id: "mythologie-aborigene",
    name: "Mythologie aborigene",
    birthYear: -50000,
    nationality: "Australien",
    movement: "Traditions anciennes",
    summary:
      "Le Temps du Reve (Dreamtime) : les ancetres creent le monde en le parcourant. Serpent Arc-en-ciel, peintures rupestres. Plus ancienne tradition spirituelle continue.",
    mainWorks: [
      "Temps du Reve (Dreamtime)",
      "Serpent Arc-en-ciel",
      "Chants et peintures sacrees",
      "Connexion a la terre (pays)",
    ],
  },
  {
    id: "mythologie-comparee",
    name: "Mythologie comparee",
    birthYear: 1850,
    nationality: "International",
    movement: "Etude moderne",
    summary:
      "Etude scientifique des mythes. Max Muller, James Frazer, Joseph Campbell identifient des motifs universels : heros aux mille visages, monomythe, archetypes.",
    mainWorks: [
      "Le Rameau d'or (Frazer, 1890)",
      "Le Heros aux mille visages (Campbell, 1949)",
      "Archetypes (Jung)",
      "Structuralisme (Levi-Strauss)",
    ],
  },
];
