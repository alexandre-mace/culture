export interface MathematicsItem {
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

export const mathematics: MathematicsItem[] = [
  {
    id: "thales",
    name: "Thalès de Milet",
    birthYear: -625,
    deathYear: -547,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Illustrerad_Verldshistoria_band_I_Ill_107.jpg/330px-Illustrerad_Verldshistoria_band_I_Ill_107.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Grec",
    movement: "Mathématiques grecques",
    family: "Antiquité & Moyen Âge",
    summary:
      "Premier mathématicien connu, il introduit la démonstration en géométrie. Le théorème de Thalès sur les triangles semblables porte son nom. Aussi philosophe et astronome.",
    mainWorks: [
      "Théorème de Thalès sur les proportions",
      "Démonstration que le diamètre divise le cercle en deux",
      "Calcul de la hauteur des pyramides par leur ombre",
      "Prédiction d'une éclipse solaire",
    ],
  },
  {
    id: "pythagore",
    name: "Pythagore",
    birthYear: -570,
    deathYear: -495,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Kapitolinischer_Pythagoras_adjusted.jpg/330px-Kapitolinischer_Pythagoras_adjusted.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Grec",
    movement: "Mathématiques grecques",
    family: "Antiquité & Moyen Âge",
    summary:
      "Fondateur d'une école mystique vouée aux mathématiques. Son théorème sur le triangle rectangle est fondamental. Découvre aussi les rapports numériques dans la musique.",
    mainWorks: [
      "Théorème de Pythagore (a² + b² = c²)",
      "Découverte des nombres irrationnels",
      "Rapports mathématiques de l'harmonie musicale",
      "École pythagoricienne",
    ],
  },
  {
    id: "euclide",
    name: "Euclide",
    birthYear: -325,
    deathYear: -265,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Euklid-von-Alexandria_1.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "Grec (Alexandrie)",
    movement: "Mathématiques grecques",
    family: "Antiquité & Moyen Âge",
    summary:
      "Père de la géométrie, ses Éléments sont le manuel de mathématiques le plus influent de l'histoire. Méthode axiomatique qui restera la référence pendant 2000 ans.",
    mainWorks: [
      "Les Éléments - 13 livres de géométrie",
      "Méthode axiomatique et déductive",
      "Théorème sur l'infinité des nombres premiers",
      "Algorithme d'Euclide (PGCD)",
    ],
  },
  {
    id: "archimede",
    name: "Archimède",
    birthYear: -287,
    deathYear: -212,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Retrato_de_un_erudito_%28%C2%BFArqu%C3%ADmedes%3F%29%2C_por_Domenico_Fetti.jpg/330px-Retrato_de_un_erudito_%28%C2%BFArqu%C3%ADmedes%3F%29%2C_por_Domenico_Fetti.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Grec (Syracuse)",
    movement: "Mathématiques grecques",
    family: "Antiquité & Moyen Âge",
    summary:
      "Plus grand mathématicien de l'Antiquité, il calcule pi avec précision, détermine les volumes et surfaces de solides, et invente le calcul intégral sous forme primitive.",
    mainWorks: [
      "Calcul de pi (entre 3,1408 et 3,1429)",
      "Quadrature de la parabole",
      "Volume et surface de la sphère",
      "Méthode d'exhaustion (proto-calcul intégral)",
    ],
  },
  {
    id: "al-khwarizmi",
    name: "Al-Khwarizmi",
    birthYear: 780,
    deathYear: 850,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/1983_CPA_5426.jpg/330px-1983_CPA_5426.jpg",
    nationality: "Persan",
    movement: "Mathématiques islamiques",
    family: "Antiquité & Moyen Âge",
    summary:
      "Père de l'algèbre, son nom a donné le mot 'algorithme'. Son traité sur le calcul algébrique introduit les méthodes systématiques de résolution des équations.",
    mainWorks: [
      "Al-jabr - traité fondateur de l'algèbre",
      "Introduction des chiffres indiens en Occident",
      "Tables astronomiques",
      "Méthodes de résolution des équations",
    ],
  },
  {
    id: "fibonacci",
    name: "Fibonacci",
    birthYear: 1170,
    deathYear: 1250,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Leonardo_Fibonacci.JPG/330px-Leonardo_Fibonacci.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Italien",
    movement: "Mathématiques médiévales",
    family: "Antiquité & Moyen Âge",
    summary:
      "Introduit les chiffres arabes et le zéro en Europe avec son Liber Abaci. La suite de Fibonacci, qu'il découvre en étudiant la reproduction des lapins, apparaît partout dans la nature.",
    mainWorks: [
      "Liber Abaci - introduction des chiffres arabes",
      "Suite de Fibonacci (1, 1, 2, 3, 5, 8...)",
      "Nombre d'or et ses propriétés",
      "Diffusion du système décimal en Europe",
    ],
  },
  {
    id: "descartes-math",
    name: "René Descartes",
    birthYear: 1596,
    deathYear: 1650,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/330px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Révolution scientifique",
    family: "Révolution scientifique",
    summary:
      "Inventeur de la géométrie analytique, il unifie algèbre et géométrie. Les coordonnées cartésiennes permettent de représenter les équations par des courbes.",
    mainWorks: [
      "La Géométrie (1637)",
      "Coordonnées cartésiennes",
      "Notation algébrique moderne (x, y, z)",
      "Union de l'algèbre et de la géométrie",
    ],
  },
  {
    id: "fermat",
    name: "Pierre de Fermat",
    birthYear: 1607,
    deathYear: 1665,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Pierre_de_Fermat3.jpg/330px-Pierre_de_Fermat3.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Révolution scientifique",
    family: "Révolution scientifique",
    summary:
      "Mathématicien amateur de génie, co-fondateur de la théorie des probabilités avec Pascal. Son 'dernier théorème' restera non démontré pendant 358 ans.",
    mainWorks: [
      "Fondation de la théorie des nombres",
      "Grand théorème de Fermat (démontré en 1995)",
      "Théorie des probabilités (avec Pascal)",
      "Principe de Fermat en optique",
    ],
  },
  {
    id: "pascal",
    name: "Blaise Pascal",
    birthYear: 1623,
    deathYear: 1662,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Blaise_Pascal_Versailles.JPG/330px-Blaise_Pascal_Versailles.JPG?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Révolution scientifique",
    family: "Révolution scientifique",
    summary:
      "Génie précoce, il invente une machine à calculer à 19 ans. Co-fondateur des probabilités, il découvre le triangle de Pascal et pose les bases du calcul infinitésimal.",
    mainWorks: [
      "Triangle de Pascal",
      "Théorie des probabilités (avec Fermat)",
      "Pascaline - machine à calculer",
      "Traité du vide",
    ],
  },
  {
    id: "newton-math",
    name: "Isaac Newton",
    birthYear: 1643,
    deathYear: 1727,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/330px-GodfreyKneller-IsaacNewton-1689.jpg",
    nationality: "Anglais",
    movement: "Révolution scientifique",
    family: "Révolution scientifique",
    summary:
      "Co-inventeur du calcul infinitésimal (avec Leibniz), outil mathématique le plus puissant de l'histoire. Ses séries et son binôme généralisent l'algèbre.",
    mainWorks: [
      "Calcul différentiel et intégral",
      "Méthode des fluxions",
      "Binôme de Newton",
      "Séries de Newton",
    ],
  },
  {
    id: "leibniz",
    name: "Gottfried Leibniz",
    birthYear: 1646,
    deathYear: 1716,
    nationality: "Allemand",
    movement: "Révolution scientifique",
    family: "Révolution scientifique",
    summary:
      "Co-inventeur du calcul infinitésimal, sa notation (dy/dx, ∫) est celle utilisée aujourd'hui. Pionnier de la logique formelle et inventeur d'une machine à calculer.",
    mainWorks: [
      "Notation du calcul infinitésimal",
      "Machine à calculer mécanique",
      "Logique symbolique",
      "Système binaire",
    ],
  },
  {
    id: "euler",
    name: "Leonhard Euler",
    birthYear: 1707,
    deathYear: 1783,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Leonhard_Euler_2.jpg/330px-Leonhard_Euler_2.jpg",
    nationality: "Suisse",
    movement: "Mathématiques des Lumières",
    family: "Analyse moderne",
    summary:
      "Mathématicien le plus prolifique de l'histoire (plus de 800 articles). Unifie l'analyse, introduit de nombreuses notations (e, π, i, f(x), Σ) et fonde la théorie des graphes.",
    mainWorks: [
      "Identité d'Euler (e^iπ + 1 = 0)",
      "Fonction exponentielle et logarithmes",
      "Théorie des graphes (ponts de Königsberg)",
      "Notations mathématiques modernes",
    ],
  },
  {
    id: "gauss",
    name: "Carl Friedrich Gauss",
    birthYear: 1777,
    deathYear: 1855,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Carl_Friedrich_Gauss.jpg/330px-Carl_Friedrich_Gauss.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Mathématiques du XIXe",
    family: "Analyse moderne",
    summary:
      "Prince des mathématiques, il contribue à presque tous les domaines : théorie des nombres, statistiques, géométrie non euclidienne, électromagnétisme. Enfant prodige.",
    mainWorks: [
      "Disquisitiones Arithmeticae - théorie des nombres",
      "Courbe de Gauss (distribution normale)",
      "Géométrie non euclidienne",
      "Méthode des moindres carrés",
    ],
  },
  {
    id: "riemann",
    name: "Bernhard Riemann",
    birthYear: 1826,
    deathYear: 1866,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Georg_Friedrich_Bernhard_Riemann.jpeg/330px-Georg_Friedrich_Bernhard_Riemann.jpeg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Mathématiques du XIXe",
    family: "Analyse moderne",
    summary:
      "Révolutionne la géométrie avec les espaces courbes qui serviront à Einstein. L'hypothèse de Riemann sur les nombres premiers reste le problème ouvert le plus célèbre.",
    mainWorks: [
      "Géométrie riemannienne (espaces courbes)",
      "Hypothèse de Riemann (non résolue)",
      "Intégrale de Riemann",
      "Fondements de la relativité générale",
    ],
  },
  {
    id: "cantor",
    name: "Georg Cantor",
    birthYear: 1845,
    deathYear: 1918,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Georg_Cantor2.jpg/330px-Georg_Cantor2.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Fondements des mathématiques",
    family: "Fondements & logique",
    summary:
      "Créateur de la théorie des ensembles, il démontre qu'il existe différentes tailles d'infini. Ses idées révolutionnaires provoquent une crise des fondements des mathématiques.",
    mainWorks: [
      "Théorie des ensembles",
      "Différents ordres d'infini",
      "Nombres transfinis",
      "Diagonale de Cantor",
    ],
  },
  {
    id: "poincare",
    name: "Henri Poincaré",
    birthYear: 1854,
    deathYear: 1912,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Henri_Poincar%C3%A9-2.jpg/330px-Henri_Poincar%C3%A9-2.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Mathématiques du XXe",
    family: "Fondements & logique",
    summary:
      "Dernier mathématicien universel, il excelle dans tous les domaines. Fondateur de la topologie et précurseur de la théorie du chaos. La conjecture de Poincaré a été résolue en 2003.",
    mainWorks: [
      "Fondation de la topologie algébrique",
      "Conjecture de Poincaré (démontrée en 2003)",
      "Théorie du chaos (problème des trois corps)",
      "Relativité restreinte (avec Einstein et Lorentz)",
    ],
  },
  {
    id: "hilbert",
    name: "David Hilbert",
    birthYear: 1862,
    deathYear: 1943,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hilbert.jpg/330px-Hilbert.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Mathématiques du XXe",
    family: "Fondements & logique",
    summary:
      "Leader des mathématiques au début du XXe siècle. Ses 23 problèmes (1900) guident la recherche pendant un siècle. Formaliste, il tente de fonder les mathématiques sur la logique.",
    mainWorks: [
      "23 problèmes de Hilbert (1900)",
      "Axiomatisation de la géométrie",
      "Espaces de Hilbert (mécanique quantique)",
      "Programme formaliste",
    ],
  },
  {
    id: "godel",
    name: "Kurt Gödel",
    birthYear: 1906,
    deathYear: 1978,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Young_Kurt_G%C3%B6del_as_a_student_in_1925.jpg/330px-Young_Kurt_G%C3%B6del_as_a_student_in_1925.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Autrichien/Américain",
    movement: "Logique mathématique",
    family: "Fondements & logique",
    summary:
      "Ses théorèmes d'incomplétude (1931) démontrent qu'aucun système mathématique cohérent ne peut démontrer toutes les vérités. Bouleverse les fondements des mathématiques.",
    mainWorks: [
      "Théorèmes d'incomplétude (1931)",
      "Limites des systèmes formels",
      "Réfutation du programme de Hilbert",
      "Logique mathématique",
    ],
  },
  {
    id: "turing",
    name: "Alan Turing",
    birthYear: 1912,
    deathYear: 1954,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Alan_turing_header.jpg/330px-Alan_turing_header.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Anglais",
    movement: "Informatique théorique",
    family: "Ère contemporaine",
    summary:
      "Père de l'informatique théorique, il définit la notion d'algorithme avec la machine de Turing. Déchiffre Enigma pendant la guerre. Pionnier de l'intelligence artificielle.",
    mainWorks: [
      "Machine de Turing - modèle de calcul",
      "Problème de l'arrêt (indécidabilité)",
      "Déchiffrement d'Enigma",
      "Test de Turing pour l'IA",
    ],
  },
  {
    id: "grothendieck",
    name: "Alexander Grothendieck",
    birthYear: 1928,
    deathYear: 2014,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Alexander_Grothendieck.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "Apatride/Français",
    movement: "Mathématiques contemporaines",
    family: "Ère contemporaine",
    summary:
      "Refonde la géométrie algébrique avec une vision unificatrice radicale. Ses schémas et topos révolutionnent les mathématiques. Se retire du monde en 1991.",
    mainWorks: [
      "Schémas en géométrie algébrique",
      "Théorie des topos",
      "Refondation de la géométrie algébrique",
      "Récoltes et semailles (autobiographie)",
    ],
  },
];
