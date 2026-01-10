export interface MathematicsItem {
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

export const mathematics: MathematicsItem[] = [
  {
    id: "thales",
    name: "Thales de Milet",
    birthYear: -625,
    deathYear: -547,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Illustrerad_Verldshistoria_band_I_Ill_107.jpg/220px-Illustrerad_Verldshistoria_band_I_Ill_107.jpg",
    nationality: "Grec",
    movement: "Mathematiques grecques",
    summary:
      "Premier mathematicien connu, il introduit la demonstration en geometrie. Le theoreme de Thales sur les triangles semblables porte son nom. Aussi philosophe et astronome.",
    mainWorks: [
      "Theoreme de Thales sur les proportions",
      "Demonstration que le diametre divise le cercle en deux",
      "Calcul de la hauteur des pyramides par leur ombre",
      "Prediction d'une eclipse solaire",
    ],
  },
  {
    id: "pythagore",
    name: "Pythagore",
    birthYear: -570,
    deathYear: -495,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Kapitolinischer_Pythagoras_adjusted.jpg/220px-Kapitolinischer_Pythagoras_adjusted.jpg",
    nationality: "Grec",
    movement: "Mathematiques grecques",
    summary:
      "Fondateur d'une ecole mystique vouee aux mathematiques. Son theoreme sur le triangle rectangle est fondamental. Decouvre aussi les rapports numeriques dans la musique.",
    mainWorks: [
      "Theoreme de Pythagore (a² + b² = c²)",
      "Decouverte des nombres irrationnels",
      "Rapports mathematiques de l'harmonie musicale",
      "Ecole pythagoricienne",
    ],
  },
  {
    id: "euclide",
    name: "Euclide",
    birthYear: -325,
    deathYear: -265,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Euklid-von-Alexandria_1.jpg/220px-Euklid-von-Alexandria_1.jpg",
    nationality: "Grec (Alexandrie)",
    movement: "Mathematiques grecques",
    summary:
      "Pere de la geometrie, ses Elements sont le manuel de mathematiques le plus influent de l'histoire. Methode axiomatique qui restera la reference pendant 2000 ans.",
    mainWorks: [
      "Les Elements - 13 livres de geometrie",
      "Methode axiomatique et deductive",
      "Theoreme sur l'infinite des nombres premiers",
      "Algorithme d'Euclide (PGCD)",
    ],
  },
  {
    id: "archimede",
    name: "Archimede",
    birthYear: -287,
    deathYear: -212,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Domenico-Fetti_Archimedes_1620.jpg/220px-Domenico-Fetti_Archimedes_1620.jpg",
    nationality: "Grec (Syracuse)",
    movement: "Mathematiques grecques",
    summary:
      "Plus grand mathematicien de l'Antiquite, il calcule pi avec precision, determine les volumes et surfaces de solides, et invente le calcul integral sous forme primitive.",
    mainWorks: [
      "Calcul de pi (entre 3,1408 et 3,1429)",
      "Quadrature de la parabole",
      "Volume et surface de la sphere",
      "Methode d'exhaustion (proto-calcul integral)",
    ],
  },
  {
    id: "al-khwarizmi",
    name: "Al-Khwarizmi",
    birthYear: 780,
    deathYear: 850,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Al-Khwarizmi_portrait.jpg/220px-Al-Khwarizmi_portrait.jpg",
    nationality: "Persan",
    movement: "Mathematiques islamiques",
    summary:
      "Pere de l'algebre, son nom a donne le mot 'algorithme'. Son traite sur le calcul algebrique introduit les methodes systematiques de resolution des equations.",
    mainWorks: [
      "Al-jabr - traite fondateur de l'algebre",
      "Introduction des chiffres indiens en Occident",
      "Tables astronomiques",
      "Methodes de resolution des equations",
    ],
  },
  {
    id: "fibonacci",
    name: "Fibonacci",
    birthYear: 1170,
    deathYear: 1250,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fibonacci2.jpg/220px-Fibonacci2.jpg",
    nationality: "Italien",
    movement: "Mathematiques medievales",
    summary:
      "Introduit les chiffres arabes et le zero en Europe avec son Liber Abaci. La suite de Fibonacci, qu'il decouvre en etudiant la reproduction des lapins, apparait partout dans la nature.",
    mainWorks: [
      "Liber Abaci - introduction des chiffres arabes",
      "Suite de Fibonacci (1, 1, 2, 3, 5, 8...)",
      "Nombre d'or et ses proprietes",
      "Diffusion du systeme decimal en Europe",
    ],
  },
  {
    id: "descartes-math",
    name: "Rene Descartes",
    birthYear: 1596,
    deathYear: 1650,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/220px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
    nationality: "Francais",
    movement: "Revolution scientifique",
    summary:
      "Inventeur de la geometrie analytique, il unifie algebre et geometrie. Les coordonnees cartesiennes permettent de representer les equations par des courbes.",
    mainWorks: [
      "La Geometrie (1637)",
      "Coordonnees cartesiennes",
      "Notation algebrique moderne (x, y, z)",
      "Union de l'algebre et de la geometrie",
    ],
  },
  {
    id: "fermat",
    name: "Pierre de Fermat",
    birthYear: 1607,
    deathYear: 1665,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Pierre_de_Fermat.jpg/220px-Pierre_de_Fermat.jpg",
    nationality: "Francais",
    movement: "Revolution scientifique",
    summary:
      "Mathematicien amateur de genie, co-fondateur de la theorie des probabilites avec Pascal. Son 'dernier theoreme' restera non demontre pendant 358 ans.",
    mainWorks: [
      "Fondation de la theorie des nombres",
      "Grand theoreme de Fermat (demontre en 1995)",
      "Theorie des probabilites (avec Pascal)",
      "Principe de Fermat en optique",
    ],
  },
  {
    id: "pascal",
    name: "Blaise Pascal",
    birthYear: 1623,
    deathYear: 1662,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Blaise_Pascal_Versailles.JPG/220px-Blaise_Pascal_Versailles.JPG",
    nationality: "Francais",
    movement: "Revolution scientifique",
    summary:
      "Genie precoce, il invente une machine a calculer a 19 ans. Co-fondateur des probabilites, il decouvre le triangle de Pascal et pose les bases du calcul infinitesimal.",
    mainWorks: [
      "Triangle de Pascal",
      "Theorie des probabilites (avec Fermat)",
      "Pascaline - machine a calculer",
      "Traite du vide",
    ],
  },
  {
    id: "newton-math",
    name: "Isaac Newton",
    birthYear: 1643,
    deathYear: 1727,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg/220px-Portrait_of_Sir_Isaac_Newton%2C_1689.jpg",
    nationality: "Anglais",
    movement: "Revolution scientifique",
    summary:
      "Co-inventeur du calcul infinitesimal (avec Leibniz), outil mathematique le plus puissant de l'histoire. Ses series et son binome generalisent l'algebre.",
    mainWorks: [
      "Calcul differentiel et integral",
      "Methode des fluxions",
      "Binome de Newton",
      "Series de Newton",
    ],
  },
  {
    id: "leibniz",
    name: "Gottfried Leibniz",
    birthYear: 1646,
    deathYear: 1716,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Gottfried_Wilhelm_von_Leibniz.jpg/220px-Gottfried_Wilhelm_von_Leibniz.jpg",
    nationality: "Allemand",
    movement: "Revolution scientifique",
    summary:
      "Co-inventeur du calcul infinitesimal, sa notation (dy/dx, ∫) est celle utilisee aujourd'hui. Pionnier de la logique formelle et inventeur d'une machine a calculer.",
    mainWorks: [
      "Notation du calcul infinitesimal",
      "Machine a calculer mecanique",
      "Logique symbolique",
      "Systeme binaire",
    ],
  },
  {
    id: "euler",
    name: "Leonhard Euler",
    birthYear: 1707,
    deathYear: 1783,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Leonhard_Euler_2.jpg/220px-Leonhard_Euler_2.jpg",
    nationality: "Suisse",
    movement: "Mathematiques des Lumieres",
    summary:
      "Mathematicien le plus prolifique de l'histoire (plus de 800 articles). Unifie l'analyse, introduit de nombreuses notations (e, π, i, f(x), Σ) et fonde la theorie des graphes.",
    mainWorks: [
      "Identite d'Euler (e^iπ + 1 = 0)",
      "Fonction exponentielle et logarithmes",
      "Theorie des graphes (ponts de Konigsberg)",
      "Notations mathematiques modernes",
    ],
  },
  {
    id: "gauss",
    name: "Carl Friedrich Gauss",
    birthYear: 1777,
    deathYear: 1855,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Carl_Friedrich_Gauss.jpg/220px-Carl_Friedrich_Gauss.jpg",
    nationality: "Allemand",
    movement: "Mathematiques du XIXe",
    summary:
      "Prince des mathematiques, il contribue a presque tous les domaines : theorie des nombres, statistiques, geometrie non euclidienne, electromagnetisme. Enfant prodige.",
    mainWorks: [
      "Disquisitiones Arithmeticae - theorie des nombres",
      "Courbe de Gauss (distribution normale)",
      "Geometrie non euclidienne",
      "Methode des moindres carres",
    ],
  },
  {
    id: "riemann",
    name: "Bernhard Riemann",
    birthYear: 1826,
    deathYear: 1866,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Georg_Friedrich_Bernhard_Riemann.jpeg/220px-Georg_Friedrich_Bernhard_Riemann.jpeg",
    nationality: "Allemand",
    movement: "Mathematiques du XIXe",
    summary:
      "Revolutionne la geometrie avec les espaces courbes qui serviront a Einstein. L'hypothese de Riemann sur les nombres premiers reste le probleme ouvert le plus celebre.",
    mainWorks: [
      "Geometrie riemannienne (espaces courbes)",
      "Hypothese de Riemann (non resolue)",
      "Integrale de Riemann",
      "Fondements de la relativite generale",
    ],
  },
  {
    id: "cantor",
    name: "Georg Cantor",
    birthYear: 1845,
    deathYear: 1918,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Georg_Cantor2.jpg/220px-Georg_Cantor2.jpg",
    nationality: "Allemand",
    movement: "Fondements des mathematiques",
    summary:
      "Createur de la theorie des ensembles, il demontre qu'il existe differentes tailles d'infini. Ses idees revolutionnaires provoquent une crise des fondements des mathematiques.",
    mainWorks: [
      "Theorie des ensembles",
      "Differents ordres d'infini",
      "Nombres transfinis",
      "Diagonale de Cantor",
    ],
  },
  {
    id: "poincare",
    name: "Henri Poincare",
    birthYear: 1854,
    deathYear: 1912,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Henri_Poincar%C3%A9-2.jpg/220px-Henri_Poincar%C3%A9-2.jpg",
    nationality: "Francais",
    movement: "Mathematiques du XXe",
    summary:
      "Dernier mathematicien universel, il excelle dans tous les domaines. Fondateur de la topologie et precurseur de la theorie du chaos. La conjecture de Poincare a ete resolue en 2003.",
    mainWorks: [
      "Fondation de la topologie algebrique",
      "Conjecture de Poincare (demontree en 2003)",
      "Theorie du chaos (probleme des trois corps)",
      "Relativite restreinte (avec Einstein et Lorentz)",
    ],
  },
  {
    id: "hilbert",
    name: "David Hilbert",
    birthYear: 1862,
    deathYear: 1943,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hilbert.jpg/220px-Hilbert.jpg",
    nationality: "Allemand",
    movement: "Mathematiques du XXe",
    summary:
      "Leader des mathematiques au debut du XXe siecle. Ses 23 problemes (1900) guident la recherche pendant un siecle. Formaliste, il tente de fonder les mathematiques sur la logique.",
    mainWorks: [
      "23 problemes de Hilbert (1900)",
      "Axiomatisation de la geometrie",
      "Espaces de Hilbert (mecanique quantique)",
      "Programme formaliste",
    ],
  },
  {
    id: "godel",
    name: "Kurt Godel",
    birthYear: 1906,
    deathYear: 1978,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Kurt_g%C3%B6del.jpg/220px-Kurt_g%C3%B6del.jpg",
    nationality: "Autrichien/Americain",
    movement: "Logique mathematique",
    summary:
      "Ses theoremes d'incompletude (1931) demontrent qu'aucun systeme mathematique coherent ne peut demontrer toutes les verites. Bouleverse les fondements des mathematiques.",
    mainWorks: [
      "Theoremes d'incompletude (1931)",
      "Limites des systemes formels",
      "Refutation du programme de Hilbert",
      "Logique mathematique",
    ],
  },
  {
    id: "turing",
    name: "Alan Turing",
    birthYear: 1912,
    deathYear: 1954,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/220px-Alan_Turing_Aged_16.jpg",
    nationality: "Anglais",
    movement: "Informatique theorique",
    summary:
      "Pere de l'informatique theorique, il definit la notion d'algorithme avec la machine de Turing. Dechiffre Enigma pendant la guerre. Pionnier de l'intelligence artificielle.",
    mainWorks: [
      "Machine de Turing - modele de calcul",
      "Probleme de l'arret (indecidabilite)",
      "Dechiffrement d'Enigma",
      "Test de Turing pour l'IA",
    ],
  },
  {
    id: "grothendieck",
    name: "Alexander Grothendieck",
    birthYear: 1928,
    deathYear: 2014,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Alexander_Grothendieck.jpg/220px-Alexander_Grothendieck.jpg",
    nationality: "Apatride/Francais",
    movement: "Mathematiques contemporaines",
    summary:
      "Refonde la geometrie algebrique avec une vision unificatrice radicale. Ses schemas et topos revolutionnent les mathematiques. Se retire du monde en 1991.",
    mainWorks: [
      "Schemas en geometrie algebrique",
      "Theorie des topos",
      "Refondation de la geometrie algebrique",
      "Recoltes et semailles (autobiographie)",
    ],
  },
];
