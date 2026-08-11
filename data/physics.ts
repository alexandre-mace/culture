export interface PhysicsItem {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  image?: string;
  nationality: string;
  movement: string;
  family?: string;
  summary: string;
  mainWorks: string[];
  itemType?: "person" | "topic";
}

export const physics: PhysicsItem[] = [
  {
    id: "aristote-physique",
    name: "Aristote",
    birthYear: -384,
    deathYear: -322,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Aristoteles_Louvre.jpg/330px-Aristoteles_Louvre.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Grec",
    movement: "Physique antique",
    family: "Antiquité & fondations",
    summary:
      "Sa physique, fondée sur l'observation et la logique, domine la pensée occidentale pendant 2000 ans. Théorie des quatre éléments, distinction monde sublunaire/céleste, horreur du vide.",
    mainWorks: [
      "Physique - étude du mouvement et du changement",
      "Théorie des quatre éléments",
      "Distinction monde terrestre/céleste",
      "Cosmos géocentrique et fini",
    ],
  },
  {
    id: "archimede-physique",
    name: "Archimède",
    birthYear: -287,
    deathYear: -212,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Retrato_de_un_erudito_%28%C2%BFArqu%C3%ADmedes%3F%29%2C_por_Domenico_Fetti.jpg/330px-Retrato_de_un_erudito_%28%C2%BFArqu%C3%ADmedes%3F%29%2C_por_Domenico_Fetti.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Grec (Syracuse)",
    movement: "Physique antique",
    family: "Antiquité & fondations",
    summary:
      "Fondateur de la statique et de l'hydrostatique. La poussée d'Archimède et le principe du levier sont ses contributions majeures. 'Donnez-moi un point d'appui et je soulèverai le monde.'",
    mainWorks: [
      "Principe d'Archimède (poussée)",
      "Loi du levier",
      "Vis d'Archimède",
      "Machines de guerre",
    ],
  },
  {
    id: "galilee-physique",
    name: "Galilée",
    birthYear: 1564,
    deathYear: 1642,
    nationality: "Italien",
    movement: "Révolution scientifique",
    family: "Révolution scientifique",
    summary:
      "Père de la physique moderne, il introduit la méthode expérimentale et mathématise la nature. Découvre les lois de la chute des corps et défend l'héliocentrisme face à l'Inquisition.",
    mainWorks: [
      "Lois de la chute des corps",
      "Principe d'inertie",
      "Observations astronomiques (lunette)",
      "Dialogue sur les deux systèmes du monde",
    ],
  },
  {
    id: "newton-physique",
    name: "Isaac Newton",
    birthYear: 1643,
    deathYear: 1727,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/330px-GodfreyKneller-IsaacNewton-1689.jpg",
    nationality: "Anglais",
    movement: "Révolution scientifique",
    family: "Révolution scientifique",
    summary:
      "Unifie la mécanique terrestre et céleste avec la gravitation universelle. Ses trois lois du mouvement fondent la mécanique classique. Aussi inventeur du calcul infinitésimal.",
    mainWorks: [
      "Principia Mathematica (1687)",
      "Trois lois du mouvement",
      "Loi de la gravitation universelle",
      "Optique et décomposition de la lumière",
    ],
  },
  {
    id: "coulomb",
    name: "Charles-Augustin de Coulomb",
    birthYear: 1736,
    deathYear: 1806,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Charles_de_coulomb.jpg/330px-Charles_de_coulomb.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Électromagnétisme",
    family: "Physique classique",
    summary:
      "Établit la loi fondamentale de l'électrostatique qui porte son nom. La force entre charges électriques varie comme l'inverse du carré de la distance, comme la gravitation.",
    mainWorks: [
      "Loi de Coulomb (force électrostatique)",
      "Balance de torsion pour mesurer les forces",
      "Études sur le frottement",
      "Unité de charge électrique (coulomb)",
    ],
  },
  {
    id: "faraday",
    name: "Michael Faraday",
    birthYear: 1791,
    deathYear: 1867,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Michael_Faraday_sitting_crop.jpg/330px-Michael_Faraday_sitting_crop.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Anglais",
    movement: "Électromagnétisme",
    family: "Physique classique",
    summary:
      "Autodidacte de génie, il découvre l'induction électromagnétique et invente le moteur électrique. Introduit les concepts de champ et de lignes de force.",
    mainWorks: [
      "Induction électromagnétique",
      "Lois de l'électrolyse",
      "Concept de champ électromagnétique",
      "Cage de Faraday",
    ],
  },
  {
    id: "maxwell",
    name: "James Clerk Maxwell",
    birthYear: 1831,
    deathYear: 1879,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/James-Clerk-Maxwell-1831-1879.jpg/330px-James-Clerk-Maxwell-1831-1879.jpg",
    nationality: "Écossais",
    movement: "Électromagnétisme",
    family: "Physique classique",
    summary:
      "Unifie électricité, magnétisme et optique dans les équations de Maxwell. Prédit l'existence des ondes électromagnétiques, confirmée par Hertz. Deuxième grande unification après Newton.",
    mainWorks: [
      "Équations de Maxwell",
      "Théorie électromagnétique de la lumière",
      "Prédiction des ondes radio",
      "Distribution de Maxwell (thermodynamique)",
    ],
  },
  {
    id: "boltzmann",
    name: "Ludwig Boltzmann",
    birthYear: 1844,
    deathYear: 1906,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Boltzmann-Ludwig.jpg/330px-Boltzmann-Ludwig.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Autrichien",
    movement: "Thermodynamique",
    family: "Physique classique",
    summary:
      "Fonde la mécanique statistique, expliquant la thermodynamique par le comportement des atomes. Sa formule S = k log W relie entropie et probabilité. Combat pour l'existence des atomes.",
    mainWorks: [
      "Mécanique statistique",
      "Formule de l'entropie (S = k log W)",
      "Interprétation probabiliste de la thermodynamique",
      "Constante de Boltzmann",
    ],
  },
  {
    id: "roentgen-physique",
    name: "Wilhelm Röntgen",
    birthYear: 1845,
    deathYear: 1923,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wilhelm_Conrad_R%C3%B6ntgen_%281888-1900%29%2C_88374_p.jpg/330px-Wilhelm_Conrad_R%C3%B6ntgen_%281888-1900%29%2C_88374_p.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Physique moderne",
    family: "Radioactivité & atome",
    summary:
      "Découvre les rayons X en 1895, révolutionnant la médecine et ouvrant l'exploration de la matière. Premier Prix Nobel de physique en 1901.",
    mainWorks: [
      "Découverte des rayons X (1895)",
      "Première radiographie",
      "Premier Prix Nobel de physique (1901)",
      "Applications médicales immédiates",
    ],
  },
  {
    id: "becquerel",
    name: "Henri Becquerel",
    birthYear: 1852,
    deathYear: 1908,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Paul_Nadar_-_Henri_Becquerel.jpg/330px-Paul_Nadar_-_Henri_Becquerel.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Radioactivité",
    family: "Radioactivité & atome",
    summary:
      "Découvre la radioactivité en 1896 en étudiant la fluorescence de l'uranium. Ouvre la voie à la physique nucléaire et aux travaux des Curie.",
    mainWorks: [
      "Découverte de la radioactivité (1896)",
      "Rayonnement de l'uranium",
      "Prix Nobel de physique (1903)",
      "Unité de radioactivité (becquerel)",
    ],
  },
  {
    id: "curie",
    name: "Marie Curie",
    birthYear: 1867,
    deathYear: 1934,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/330px-Marie_Curie_c1920.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Polonaise/Française",
    movement: "Radioactivité",
    family: "Radioactivité & atome",
    summary:
      "Pionnière de la radioactivité, elle découvre le polonium et le radium avec Pierre Curie. Première femme Prix Nobel, seule personne à recevoir deux Nobel dans deux sciences différentes.",
    mainWorks: [
      "Découverte du polonium et du radium",
      "Terme 'radioactivité'",
      "Prix Nobel de physique (1903) et chimie (1911)",
      "Applications médicales (radiologie)",
    ],
  },
  {
    id: "planck",
    name: "Max Planck",
    birthYear: 1858,
    deathYear: 1947,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bundesarchiv_Bild_183-R0116-504%2C_Max_Planck.jpg/330px-Bundesarchiv_Bild_183-R0116-504%2C_Max_Planck.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Mécanique quantique",
    family: "Relativité & quanta",
    summary:
      "Père de la théorie quantique, il introduit en 1900 l'idée que l'énergie est échangée par quanta discrets. Cette révolution conceptuelle fonde la physique moderne.",
    mainWorks: [
      "Hypothèse des quanta (1900)",
      "Constante de Planck (h)",
      "Loi du rayonnement du corps noir",
      "Prix Nobel de physique (1918)",
    ],
  },
  {
    id: "einstein",
    name: "Albert Einstein",
    birthYear: 1879,
    deathYear: 1955,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Albert_Einstein_Head_cleaned.jpg/330px-Albert_Einstein_Head_cleaned.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand/Américain",
    movement: "Relativité",
    family: "Relativité & quanta",
    summary:
      "Révolutionne la physique avec la relativité restreinte (1905) et générale (1915). L'espace et le temps sont relatifs, la masse courbe l'espace-temps, E=mc². Icône de la science moderne.",
    mainWorks: [
      "Relativité restreinte (1905)",
      "Équation E=mc²",
      "Relativité générale (1915)",
      "Effet photoélectrique (Prix Nobel 1921)",
    ],
  },
  {
    id: "bohr",
    name: "Niels Bohr",
    birthYear: 1885,
    deathYear: 1962,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Niels_Bohr.jpg/330px-Niels_Bohr.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Danois",
    movement: "Mécanique quantique",
    family: "Relativité & quanta",
    summary:
      "Son modèle de l'atome (1913) explique les spectres atomiques par la quantification des orbites électroniques. Leader de l'interprétation de Copenhague de la mécanique quantique.",
    mainWorks: [
      "Modèle atomique de Bohr (1913)",
      "Quantification des orbites électroniques",
      "Interprétation de Copenhague",
      "Prix Nobel de physique (1922)",
    ],
  },
  {
    id: "heisenberg",
    name: "Werner Heisenberg",
    birthYear: 1901,
    deathYear: 1976,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Bundesarchiv_Bild183-R57262%2C_Werner_Heisenberg.jpg/330px-Bundesarchiv_Bild183-R57262%2C_Werner_Heisenberg.jpg",
    nationality: "Allemand",
    movement: "Mécanique quantique",
    family: "Relativité & quanta",
    summary:
      "Formule la mécanique quantique matricielle et le principe d'incertitude : on ne peut connaître simultanément position et vitesse d'une particule. Bouleverse notre conception de la réalité.",
    mainWorks: [
      "Mécanique matricielle (1925)",
      "Principe d'incertitude (1927)",
      "Prix Nobel de physique (1932)",
      "Rôle controversé dans le projet atomique nazi",
    ],
  },
  {
    id: "schrodinger",
    name: "Erwin Schrödinger",
    birthYear: 1887,
    deathYear: 1961,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Erwin_Schr%C3%B6dinger_%281933%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "Autrichien",
    movement: "Mécanique quantique",
    family: "Relativité & quanta",
    summary:
      "Son équation d'onde (1926) décrit l'évolution des systèmes quantiques. Le paradoxe du chat de Schrödinger illustre l'étrangeté de la superposition quantique.",
    mainWorks: [
      "Équation de Schrödinger (1926)",
      "Mécanique ondulatoire",
      "Chat de Schrödinger (paradoxe)",
      "Prix Nobel de physique (1933)",
    ],
  },
  {
    id: "dirac",
    name: "Paul Dirac",
    birthYear: 1902,
    deathYear: 1984,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Paul_Dirac%2C_1933.jpg/330px-Paul_Dirac%2C_1933.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Anglais",
    movement: "Mécanique quantique",
    family: "Relativité & quanta",
    summary:
      "Son équation relativiste de l'électron prédit l'existence de l'antimatière. Unifie mécanique quantique et relativité restreinte. Style mathématique d'une élégance légendaire.",
    mainWorks: [
      "Équation de Dirac (1928)",
      "Prédiction de l'antimatière",
      "Formalisme de la mécanique quantique",
      "Prix Nobel de physique (1933)",
    ],
  },
  {
    id: "fermi",
    name: "Enrico Fermi",
    birthYear: 1901,
    deathYear: 1954,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Enrico_Fermi_ID_badge.png/330px-Enrico_Fermi_ID_badge.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Italien/Américain",
    movement: "Physique nucléaire",
    family: "Physique contemporaine",
    summary:
      "Théoricien et expérimentateur exceptionnel, il crée la première réaction en chaîne nucléaire contrôlée (1942). Travaux fondamentaux sur la radioactivité bêta et les neutrinos.",
    mainWorks: [
      "Première pile atomique (Chicago, 1942)",
      "Théorie de la désintégration bêta",
      "Statistique de Fermi-Dirac",
      "Projet Manhattan",
    ],
  },
  {
    id: "feynman",
    name: "Richard Feynman",
    birthYear: 1918,
    deathYear: 1988,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/RichardFeynman-PaineMansionWoods1984_copyrightTamikoThiel_bw.jpg/330px-RichardFeynman-PaineMansionWoods1984_copyrightTamikoThiel_bw.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Physique des particules",
    family: "Physique contemporaine",
    summary:
      "Reformule l'électrodynamique quantique avec ses célèbres diagrammes. Pédagogue exceptionnel, personnalité flamboyante. Élucide la cause de l'accident de Challenger.",
    mainWorks: [
      "Diagrammes de Feynman",
      "Électrodynamique quantique (QED)",
      "Intégrales de chemin",
      "Cours de physique de Feynman",
    ],
  },
  {
    id: "higgs",
    name: "Peter Higgs",
    birthYear: 1929,
    deathYear: 2024,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Nobel_Prize_24_2013_%28cropped%29.jpg/330px-Nobel_Prize_24_2013_%28cropped%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Anglais",
    movement: "Modèle standard",
    family: "Physique contemporaine",
    summary:
      "Propose en 1964 le mécanisme donnant leur masse aux particules. Le boson de Higgs, découvert au CERN en 2012, confirme sa théorie. Prix Nobel 2013.",
    mainWorks: [
      "Mécanisme de Higgs (1964)",
      "Brisure spontanée de symétrie",
      "Boson de Higgs (découvert en 2012)",
      "Prix Nobel de physique (2013)",
    ],
  },
  {
    id: "hawking",
    name: "Stephen Hawking",
    birthYear: 1942,
    deathYear: 2018,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "Anglais",
    movement: "Cosmologie",
    family: "Physique contemporaine",
    summary:
      "Malgré la maladie de Charcot, révolutionne notre compréhension des trous noirs. Le rayonnement de Hawking montre qu'ils peuvent s'évaporer. Vulgarisateur célèbre.",
    mainWorks: [
      "Rayonnement de Hawking (1974)",
      "Singularités et Big Bang (avec Penrose)",
      "Une brève histoire du temps",
      "Thermodynamique des trous noirs",
    ],
  },
];
