export interface PhysicsItem {
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

export const physics: PhysicsItem[] = [
  {
    id: "aristote-physique",
    name: "Aristote",
    birthYear: -384,
    deathYear: -322,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/220px-Aristotle_Altemps_Inv8575.jpg",
    nationality: "Grec",
    movement: "Physique antique",
    summary:
      "Sa physique, fondee sur l'observation et la logique, domine la pensee occidentale pendant 2000 ans. Theorie des quatre elements, distinction monde sublunaire/celeste, horreur du vide.",
    mainWorks: [
      "Physique - etude du mouvement et du changement",
      "Theorie des quatre elements",
      "Distinction monde terrestre/celeste",
      "Cosmos geocentrique et fini",
    ],
  },
  {
    id: "archimede-physique",
    name: "Archimede",
    birthYear: -287,
    deathYear: -212,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Domenico-Fetti_Archimedes_1620.jpg/220px-Domenico-Fetti_Archimedes_1620.jpg",
    nationality: "Grec (Syracuse)",
    movement: "Physique antique",
    summary:
      "Fondateur de la statique et de l'hydrostatique. La poussee d'Archimede et le principe du levier sont ses contributions majeures. 'Donnez-moi un point d'appui et je souleverai le monde.'",
    mainWorks: [
      "Principe d'Archimede (poussee)",
      "Loi du levier",
      "Vis d'Archimede",
      "Machines de guerre",
    ],
  },
  {
    id: "galilee-physique",
    name: "Galilee",
    birthYear: 1564,
    deathYear: 1642,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg/220px-Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg",
    nationality: "Italien",
    movement: "Revolution scientifique",
    summary:
      "Pere de la physique moderne, il introduit la methode experimentale et mathematise la nature. Decouvre les lois de la chute des corps et defend l'heliocentrisme face a l'Inquisition.",
    mainWorks: [
      "Lois de la chute des corps",
      "Principe d'inertie",
      "Observations astronomiques (lunette)",
      "Dialogue sur les deux systemes du monde",
    ],
  },
  {
    id: "newton-physique",
    name: "Isaac Newton",
    birthYear: 1643,
    deathYear: 1727,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg/220px-Portrait_of_Sir_Isaac_Newton%2C_1689.jpg",
    nationality: "Anglais",
    movement: "Revolution scientifique",
    summary:
      "Unifie la mecanique terrestre et celeste avec la gravitation universelle. Ses trois lois du mouvement fondent la mecanique classique. Aussi inventeur du calcul infinitesimal.",
    mainWorks: [
      "Principia Mathematica (1687)",
      "Trois lois du mouvement",
      "Loi de la gravitation universelle",
      "Optique et decomposition de la lumiere",
    ],
  },
  {
    id: "coulomb",
    name: "Charles-Augustin de Coulomb",
    birthYear: 1736,
    deathYear: 1806,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Charles_de_Coulomb.png/220px-Charles_de_Coulomb.png",
    nationality: "Francais",
    movement: "Electromagnetisme",
    summary:
      "Etablit la loi fondamentale de l'electrostatique qui porte son nom. La force entre charges electriques varie comme l'inverse du carre de la distance, comme la gravitation.",
    mainWorks: [
      "Loi de Coulomb (force electrostatique)",
      "Balance de torsion pour mesurer les forces",
      "Etudes sur le frottement",
      "Unite de charge electrique (coulomb)",
    ],
  },
  {
    id: "faraday",
    name: "Michael Faraday",
    birthYear: 1791,
    deathYear: 1867,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Faraday-Millikan-Gale-1913.jpg/220px-Faraday-Millikan-Gale-1913.jpg",
    nationality: "Anglais",
    movement: "Electromagnetisme",
    summary:
      "Autodidacte de genie, il decouvre l'induction electromagnetique et invente le moteur electrique. Introduit les concepts de champ et de lignes de force.",
    mainWorks: [
      "Induction electromagnetique",
      "Lois de l'electrolyse",
      "Concept de champ electromagnetique",
      "Cage de Faraday",
    ],
  },
  {
    id: "maxwell",
    name: "James Clerk Maxwell",
    birthYear: 1831,
    deathYear: 1879,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/James_Clerk_Maxwell.png/220px-James_Clerk_Maxwell.png",
    nationality: "Ecossais",
    movement: "Electromagnetisme",
    summary:
      "Unifie electricite, magnetisme et optique dans les equations de Maxwell. Predit l'existence des ondes electromagnetiques, confirmee par Hertz. Deuxieme grande unification apres Newton.",
    mainWorks: [
      "Equations de Maxwell",
      "Theorie electromagnetique de la lumiere",
      "Prediction des ondes radio",
      "Distribution de Maxwell (thermodynamique)",
    ],
  },
  {
    id: "boltzmann",
    name: "Ludwig Boltzmann",
    birthYear: 1844,
    deathYear: 1906,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Boltzmann2.jpg/220px-Boltzmann2.jpg",
    nationality: "Autrichien",
    movement: "Thermodynamique",
    summary:
      "Fonde la mecanique statistique, expliquant la thermodynamique par le comportement des atomes. Sa formule S = k log W relie entropie et probabilite. Combat pour l'existence des atomes.",
    mainWorks: [
      "Mecanique statistique",
      "Formule de l'entropie (S = k log W)",
      "Interpretation probabiliste de la thermodynamique",
      "Constante de Boltzmann",
    ],
  },
  {
    id: "roentgen-physique",
    name: "Wilhelm Rontgen",
    birthYear: 1845,
    deathYear: 1923,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Roentgen2.jpg/220px-Roentgen2.jpg",
    nationality: "Allemand",
    movement: "Physique moderne",
    summary:
      "Decouvre les rayons X en 1895, revolutionnant la medecine et ouvrant l'exploration de la matiere. Premier Prix Nobel de physique en 1901.",
    mainWorks: [
      "Decouverte des rayons X (1895)",
      "Premiere radiographie",
      "Premier Prix Nobel de physique (1901)",
      "Applications medicales immediates",
    ],
  },
  {
    id: "becquerel",
    name: "Henri Becquerel",
    birthYear: 1852,
    deathYear: 1908,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Henri_Becquerel.jpg/220px-Henri_Becquerel.jpg",
    nationality: "Francais",
    movement: "Radioactivite",
    summary:
      "Decouvre la radioactivite en 1896 en etudiant la fluorescence de l'uranium. Ouvre la voie a la physique nucleaire et aux travaux des Curie.",
    mainWorks: [
      "Decouverte de la radioactivite (1896)",
      "Rayonnement de l'uranium",
      "Prix Nobel de physique (1903)",
      "Unite de radioactivite (becquerel)",
    ],
  },
  {
    id: "curie",
    name: "Marie Curie",
    birthYear: 1867,
    deathYear: 1934,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/220px-Marie_Curie_c._1920s.jpg",
    nationality: "Polonaise/Francaise",
    movement: "Radioactivite",
    summary:
      "Pionniere de la radioactivite, elle decouvre le polonium et le radium avec Pierre Curie. Premiere femme Prix Nobel, seule personne a recevoir deux Nobel dans deux sciences differentes.",
    mainWorks: [
      "Decouverte du polonium et du radium",
      "Terme 'radioactivite'",
      "Prix Nobel de physique (1903) et chimie (1911)",
      "Applications medicales (radiologie)",
    ],
  },
  {
    id: "planck",
    name: "Max Planck",
    birthYear: 1858,
    deathYear: 1947,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Max_Planck_1933.jpg/220px-Max_Planck_1933.jpg",
    nationality: "Allemand",
    movement: "Mecanique quantique",
    summary:
      "Pere de la theorie quantique, il introduit en 1900 l'idee que l'energie est echangee par quanta discrets. Cette revolution conceptuelle fonde la physique moderne.",
    mainWorks: [
      "Hypothese des quanta (1900)",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
    nationality: "Allemand/Americain",
    movement: "Relativite",
    summary:
      "Revolutionne la physique avec la relativite restreinte (1905) et generale (1915). L'espace et le temps sont relatifs, la masse courbe l'espace-temps, E=mc². Icone de la science moderne.",
    mainWorks: [
      "Relativite restreinte (1905)",
      "Equation E=mc²",
      "Relativite generale (1915)",
      "Effet photoelectrique (Prix Nobel 1921)",
    ],
  },
  {
    id: "bohr",
    name: "Niels Bohr",
    birthYear: 1885,
    deathYear: 1962,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Niels_Bohr.jpg/220px-Niels_Bohr.jpg",
    nationality: "Danois",
    movement: "Mecanique quantique",
    summary:
      "Son modele de l'atome (1913) explique les spectres atomiques par la quantification des orbites electroniques. Leader de l'interpretation de Copenhague de la mecanique quantique.",
    mainWorks: [
      "Modele atomique de Bohr (1913)",
      "Quantification des orbites electroniques",
      "Interpretation de Copenhague",
      "Prix Nobel de physique (1922)",
    ],
  },
  {
    id: "heisenberg",
    name: "Werner Heisenberg",
    birthYear: 1901,
    deathYear: 1976,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Bundesarchiv_Bild_183-R57262%2C_Werner_Heisenberg.jpg/220px-Bundesarchiv_Bild_183-R57262%2C_Werner_Heisenberg.jpg",
    nationality: "Allemand",
    movement: "Mecanique quantique",
    summary:
      "Formule la mecanique quantique matricielle et le principe d'incertitude : on ne peut connaitre simultanement position et vitesse d'une particule. Bouleverse notre conception de la realite.",
    mainWorks: [
      "Mecanique matricielle (1925)",
      "Principe d'incertitude (1927)",
      "Prix Nobel de physique (1932)",
      "Role controverse dans le projet atomique nazi",
    ],
  },
  {
    id: "schrodinger",
    name: "Erwin Schrodinger",
    birthYear: 1887,
    deathYear: 1961,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Erwin_Schr%C3%B6dinger_%281933%29.jpg/220px-Erwin_Schr%C3%B6dinger_%281933%29.jpg",
    nationality: "Autrichien",
    movement: "Mecanique quantique",
    summary:
      "Son equation d'onde (1926) decrit l'evolution des systemes quantiques. Le paradoxe du chat de Schrodinger illustre l'etrangete de la superposition quantique.",
    mainWorks: [
      "Equation de Schrodinger (1926)",
      "Mecanique ondulatoire",
      "Chat de Schrodinger (paradoxe)",
      "Prix Nobel de physique (1933)",
    ],
  },
  {
    id: "dirac",
    name: "Paul Dirac",
    birthYear: 1902,
    deathYear: 1984,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Paul_Dirac%2C_1933.jpg/220px-Paul_Dirac%2C_1933.jpg",
    nationality: "Anglais",
    movement: "Mecanique quantique",
    summary:
      "Son equation relativiste de l'electron predit l'existence de l'antimatiere. Unifie mecanique quantique et relativite restreinte. Style mathematique d'une elegance legendaire.",
    mainWorks: [
      "Equation de Dirac (1928)",
      "Prediction de l'antimatiere",
      "Formalisme de la mecanique quantique",
      "Prix Nobel de physique (1933)",
    ],
  },
  {
    id: "fermi",
    name: "Enrico Fermi",
    birthYear: 1901,
    deathYear: 1954,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Enrico_Fermi_1943-49.jpg/220px-Enrico_Fermi_1943-49.jpg",
    nationality: "Italien/Americain",
    movement: "Physique nucleaire",
    summary:
      "Theoricien et experimentateur exceptionnel, il cree la premiere reaction en chaine nucleaire controlee (1942). Travaux fondamentaux sur la radioactivite beta et les neutrinos.",
    mainWorks: [
      "Premiere pile atomique (Chicago, 1942)",
      "Theorie de la desintegration beta",
      "Statistique de Fermi-Dirac",
      "Projet Manhattan",
    ],
  },
  {
    id: "feynman",
    name: "Richard Feynman",
    birthYear: 1918,
    deathYear: 1988,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Richard_Feynman_Nobel.jpg/220px-Richard_Feynman_Nobel.jpg",
    nationality: "Americain",
    movement: "Physique des particules",
    summary:
      "Reformule l'electrodynamique quantique avec ses celebres diagrammes. Pedagogue exceptionnel, personnalite flamboyante. Elucide la cause de l'accident de Challenger.",
    mainWorks: [
      "Diagrammes de Feynman",
      "Electrodynamique quantique (QED)",
      "Integrales de chemin",
      "Cours de physique de Feynman",
    ],
  },
  {
    id: "higgs",
    name: "Peter Higgs",
    birthYear: 1929,
    deathYear: 2024,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Peter_Higgs.jpg/220px-Peter_Higgs.jpg",
    nationality: "Anglais",
    movement: "Modele standard",
    summary:
      "Propose en 1964 le mecanisme donnant leur masse aux particules. Le boson de Higgs, decouvert au CERN en 2012, confirme sa theorie. Prix Nobel 2013.",
    mainWorks: [
      "Mecanisme de Higgs (1964)",
      "Brisure spontanee de symetrie",
      "Boson de Higgs (decouvert en 2012)",
      "Prix Nobel de physique (2013)",
    ],
  },
  {
    id: "hawking",
    name: "Stephen Hawking",
    birthYear: 1942,
    deathYear: 2018,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stephen_Hawking.StarChild.jpg/220px-Stephen_Hawking.StarChild.jpg",
    nationality: "Anglais",
    movement: "Cosmologie",
    summary:
      "Malgre la maladie de Charcot, revolutionne notre comprehension des trous noirs. Le rayonnement de Hawking montre qu'ils peuvent s'evaporer. Vulgarisateur celebre.",
    mainWorks: [
      "Rayonnement de Hawking (1974)",
      "Singularites et Big Bang (avec Penrose)",
      "Une breve histoire du temps",
      "Thermodynamique des trous noirs",
    ],
  },
];
