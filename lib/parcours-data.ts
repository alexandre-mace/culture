export interface ParcoursStep {
  href: string; // route du sujet, ex. "/physique"
  id: string; // id EXACT de l'entrée dans le fichier data correspondant
  note: string; // 1-2 phrases narratives qui situent l'étape dans le récit
}

export interface Parcours {
  slug: string; // kebab-case, ex. "revolution-scientifique"
  title: string;
  emoji: string;
  description: string; // 1-2 phrases d'accroche
  steps: ParcoursStep[];
}

export const parcoursList: Parcours[] = [
  {
    slug: "revolution-scientifique",
    title: "La Révolution scientifique",
    emoji: "🔭",
    description:
      "De Copernic à Newton, un siècle et demi qui déloge la Terre du centre de l'univers et invente la science moderne, entre télescopes, ellipses et calcul infinitésimal.",
    steps: [
      {
        href: "/astronomie",
        id: "copernic",
        note: "Tout commence en 1543 : dans son De revolutionibus, publié l'année de sa mort, Copernic ose placer le Soleil au centre du monde. L'héliocentrisme n'est encore qu'une hypothèse mathématique, mais la brèche est ouverte.",
      },
      {
        href: "/astronomie",
        id: "brahe",
        note: "Avant de trancher entre les systèmes du monde, il faut des données. Depuis son observatoire d'Uraniborg, Tycho Brahe accumule les mesures astronomiques les plus précises jamais réalisées à l'œil nu.",
      },
      {
        href: "/astronomie",
        id: "kepler",
        note: "Héritier des tables de Brahe, Kepler en tire trois lois révolutionnaires : les planètes décrivent des ellipses, pas des cercles parfaits. Le cosmos cesse d'obéir à l'esthétique pour obéir aux mathématiques.",
      },
      {
        href: "/inventions",
        id: "telescope",
        note: "En 1608, des opticiens hollandais assemblent les premières lunettes d'approche. Un simple tube et deux lentilles vont transformer l'astronomie : il suffit de le pointer vers le ciel.",
      },
      {
        href: "/astronomie",
        id: "galilee",
        note: "C'est exactement ce que fait Galilée dès 1609 : montagnes de la Lune, satellites de Jupiter, phases de Vénus. Le ciel observé donne raison à Copernic — au prix d'un procès retentissant devant l'Inquisition.",
      },
      {
        href: "/philosophie",
        id: "descartes",
        note: "La nouvelle science réclame une nouvelle méthode. Avec son doute radical et sa physique mécaniste, Descartes fournit le cadre philosophique : le monde est une machine que la raison peut déchiffrer.",
      },
      {
        href: "/mathematiques",
        id: "fermat",
        note: "Pendant ce temps, les mathématiques s'aiguisent. Magistrat à Toulouse, Fermat pose avec Pascal les bases du calcul des probabilités et prépare, par ses méthodes des tangentes, le calcul infinitésimal à venir.",
      },
      {
        href: "/inventions",
        id: "microscope",
        note: "La révolution ne regarde pas que vers le haut : le microscope ouvre l'infiniment petit. Leeuwenhoek y découvre bactéries et spermatozoïdes — un monde invisible que personne n'avait soupçonné.",
      },
      {
        href: "/physique",
        id: "newton-physique",
        note: "En 1687, les Principia de Newton couronnent l'édifice : la gravitation universelle unifie la chute des corps et le mouvement des planètes. Kepler et Galilée trouvent enfin leur explication commune.",
      },
      {
        href: "/mathematiques",
        id: "leibniz",
        note: "Indépendamment de Newton, Leibniz invente le calcul différentiel et intégral, avec les notations que nous utilisons encore. La science moderne dispose désormais de son langage : l'aventure peut continuer.",
      },
    ],
  },
  {
    slug: "siecle-des-lumieres",
    title: "Le siècle des Lumières",
    emoji: "💡",
    description:
      "De la Glorieuse Révolution anglaise à la Révolution française, un siècle où philosophes et économistes osent penser librement — et finissent par renverser les trônes.",
    steps: [
      {
        href: "/democratie",
        id: "revolution-anglaise",
        note: "Le point de départ est anglais : en 1688, la Glorieuse Révolution soumet le roi au Parlement et proclame le Bill of Rights. Une monarchie limitée est possible — l'Europe entière l'observe.",
      },
      {
        href: "/philosophie",
        id: "locke",
        note: "John Locke en devient le théoricien : le pouvoir repose sur un contrat, et le peuple a le droit de résister à la tyrannie. Ses idées sur la tolérance et les droits naturels nourriront tout le siècle.",
      },
      {
        href: "/litterature",
        id: "voltaire",
        note: "Exilé en Angleterre, Voltaire en rapporte l'admiration des libertés anglaises. Par ses contes, ses lettres et ses combats — l'affaire Calas en tête —, il fait de l'écrivain une puissance publique.",
      },
      {
        href: "/philosophie",
        id: "hume",
        note: "En Écosse, Hume pousse l'audace jusqu'au scepticisme : ni la causalité ni le moi ne résistent à l'examen de l'expérience. Kant dira que c'est lui qui l'a réveillé de son « sommeil dogmatique ».",
      },
      {
        href: "/philosophie",
        id: "rousseau",
        note: "Rousseau prend les Lumières à rebrousse-poil : le progrès corrompt, et la souveraineté appartient au peuple tout entier. Le Contrat social (1762) deviendra le livre de chevet des révolutionnaires.",
      },
      {
        href: "/economie",
        id: "physiocrates",
        note: "La raison s'applique aussi à la richesse des nations : autour de Quesnay, les physiocrates cherchent les lois naturelles de l'économie et inventent le fameux « laissez faire, laissez passer ».",
      },
      {
        href: "/economie",
        id: "adam-smith",
        note: "Adam Smith systématise l'intuition : en 1776, La Richesse des nations montre comment la division du travail et la « main invisible » du marché coordonnent les intérêts particuliers. L'économie politique est née.",
      },
      {
        href: "/democratie",
        id: "revolution-americaine-demo",
        note: "La même année 1776, les idées passent aux actes : les colonies américaines déclarent leur indépendance au nom des droits naturels de Locke. Une république moderne surgit outre-Atlantique.",
      },
      {
        href: "/democratie",
        id: "revolution-francaise-demo",
        note: "En 1789, la France embrase l'Europe à son tour : Déclaration des droits de l'homme, souveraineté nationale, abolition des privilèges. Le programme des philosophes devient loi.",
      },
      {
        href: "/philosophie",
        id: "kant",
        note: "Depuis Königsberg, Kant offre au siècle son bilan et sa devise : Sapere aude, « ose penser par toi-même ». Les Lumières, écrit-il, sont la sortie de l'humanité hors de sa minorité.",
      },
    ],
  },
  {
    slug: "explosion-moderne",
    title: "1900-1930 : l'explosion moderne",
    emoji: "💥",
    description:
      "En trois décennies, l'inconscient, les quanta, le cubisme, l'atonalité et le cinéma pulvérisent toutes les certitudes héritées du XIXe siècle.",
    steps: [
      {
        href: "/psychologie",
        id: "freud",
        note: "Le siècle s'ouvre sur une plongée dans les profondeurs : avec L'Interprétation des rêves (1900), Freud révèle que le moi n'est pas maître dans sa propre maison. L'inconscient entre en scène.",
      },
      {
        href: "/physique",
        id: "planck",
        note: "La même année, Planck fissure la physique classique : l'énergie s'échange par paquets discrets, les quanta. Il n'y croit qu'à moitié, mais il vient d'ouvrir la boîte de Pandore.",
      },
      {
        href: "/cinema",
        id: "melies",
        note: "Pendant que les savants doutent, un illusionniste invente le rêve mécanique : avec son Voyage dans la Lune (1902), Méliès transforme le cinématographe des Lumière en machine à fictions.",
      },
      {
        href: "/physique",
        id: "einstein",
        note: "1905, l'année miraculeuse : un employé du bureau des brevets de Berne publie la relativité restreinte et explique l'effet photoélectrique. L'espace et le temps ne seront plus jamais absolus.",
      },
      {
        href: "/peinture",
        id: "picasso",
        note: "La peinture fait exploser la perspective héritée de la Renaissance : en 1907, Les Demoiselles d'Avignon inaugurent le cubisme. Comme la physique, l'art multiplie les points de vue simultanés.",
      },
      {
        href: "/peinture",
        id: "kandinsky",
        note: "Kandinsky franchit le pas suivant vers 1910 : une peinture qui ne représente plus rien, pure composition de formes et de couleurs. L'abstraction est née, comme une musique pour les yeux.",
      },
      {
        href: "/musique-classique",
        id: "schoenberg",
        note: "La musique, justement, abandonne elle aussi son centre de gravité : Schönberg dissout la tonalité, avant d'inventer le dodécaphonisme. Ami de Kandinsky, il mène la même révolution avec des sons.",
      },
      {
        href: "/musique-classique",
        id: "stravinsky",
        note: "Le 29 mai 1913, la création du Sacre du printemps déclenche un scandale mémorable au Théâtre des Champs-Élysées. Rythmes barbares, dissonances : la modernité musicale fait littéralement émeute.",
      },
      {
        href: "/litterature",
        id: "proust",
        note: "La même année paraît Du côté de chez Swann, à compte d'auteur. Proust engage la Recherche : le roman ne raconte plus le monde, il explore la mémoire et le temps intérieur.",
      },
      {
        href: "/litterature",
        id: "joyce",
        note: "En 1922, Ulysse pousse l'expérience à son comble : une seule journée à Dublin, racontée dans le flux de conscience de ses personnages. Le roman moderne a trouvé son sommet — et son scandale.",
      },
      {
        href: "/cinema",
        id: "eisenstein",
        note: "Le cinéma devient un art à part entière et une arme : avec Le Cuirassé Potemkine (1925), Eisenstein théorise le montage comme choc d'images. L'escalier d'Odessa entre dans l'histoire.",
      },
      {
        href: "/physique",
        id: "heisenberg",
        note: "En 1927, Heisenberg referme la boucle ouverte par Planck : son principe d'incertitude interdit de connaître à la fois position et vitesse d'une particule. Même la nature, désormais, échappe aux certitudes.",
      },
    ],
  },
  {
    slug: "miracle-grec",
    title: "Le miracle grec",
    emoji: "🏛️",
    description:
      "D'Homère à Archimède, cinq siècles pendant lesquels un chapelet de cités méditerranéennes invente la philosophie, la démonstration mathématique, le théâtre et la démocratie.",
    steps: [
      {
        href: "/litterature",
        id: "homere",
        note: "Au commencement sont deux poèmes : l'Iliade et l'Odyssée, mis en forme vers le VIIIe siècle av. J.-C. Homère donne aux Grecs leurs dieux, leurs héros et leur langue commune.",
      },
      {
        href: "/mathematiques",
        id: "thales",
        note: "À Milet, Thalès ose une idée neuve : expliquer le monde sans les dieux, et prouver des vérités géométriques au lieu de simplement les constater. La rationalité grecque prend son envol.",
      },
      {
        href: "/mathematiques",
        id: "pythagore",
        note: "Pythagore et son école font des nombres la clé de l'univers : harmonie musicale, théorème célèbre et découverte troublante des grandeurs incommensurables. « Tout est nombre. »",
      },
      {
        href: "/democratie",
        id: "athenes",
        note: "En 508 av. J.-C., les réformes de Clisthène fondent la démocratie athénienne : les citoyens votent les lois à l'assemblée et tirent au sort leurs magistrats. Une invention politique sans précédent.",
      },
      {
        href: "/guerres",
        id: "guerres-mediques",
        note: "La jeune démocratie affronte aussitôt l'épreuve du feu : à Marathon puis à Salamine, les cités grecques repoussent l'immense empire perse. De cette victoire naît le siècle d'or d'Athènes.",
      },
      {
        href: "/litterature",
        id: "sophocle",
        note: "Dans l'Athènes de Périclès, la tragédie atteint sa perfection : Antigone, Œdipe roi. Sophocle met en scène l'homme face au destin, sous les yeux de milliers de citoyens réunis au théâtre.",
      },
      {
        href: "/philosophie",
        id: "socrates",
        note: "Sur l'agora, un homme sans livre ni école interroge ses concitoyens : que sais-tu vraiment ? Condamné à boire la ciguë en 399 av. J.-C., Socrate devient le martyr fondateur de la philosophie.",
      },
      {
        href: "/guerres",
        id: "guerre-peloponnese",
        note: "Mais le miracle a son revers : pendant vingt-sept ans, Athènes et Sparte s'entre-déchirent. La guerre du Péloponnèse épuise les cités et brise l'hégémonie athénienne.",
      },
      {
        href: "/philosophie",
        id: "platon",
        note: "Disciple de Socrate, marqué par sa mort et par la défaite d'Athènes, Platon fonde l'Académie et rêve d'une cité gouvernée par les philosophes. Ses dialogues dominent encore la pensée occidentale.",
      },
      {
        href: "/philosophie",
        id: "aristote",
        note: "Élève de Platon et précepteur d'Alexandre, Aristote embrasse tout le savoir : logique, physique, biologie, politique, poétique. Il restera « le Philosophe » pendant près de deux mille ans.",
      },
      {
        href: "/mathematiques",
        id: "euclide",
        note: "À Alexandrie, héritière de l'empire d'Alexandre, Euclide rassemble la géométrie grecque dans ses Éléments : axiomes, théorèmes, démonstrations. Le modèle même de la rigueur, jusqu'à nos jours.",
      },
      {
        href: "/mathematiques",
        id: "archimede",
        note: "Le miracle grec culmine avec Archimède de Syracuse : poussée des corps flottants, leviers, calculs d'aires qui préfigurent l'analyse. Tué par un soldat romain en 212 av. J.-C., il passe le flambeau à un autre monde.",
      },
    ],
  },
  {
    slug: "vapeur-au-numerique",
    title: "De la vapeur au numérique",
    emoji: "⚙️",
    description:
      "Trois révolutions industrielles en trois siècles : la vapeur, l'électricité, puis l'informatique transforment le travail, l'économie et la vie quotidienne.",
    steps: [
      {
        href: "/revolutions-industrielles",
        id: "revolution-agricole",
        note: "Avant les usines, les champs : rotations de cultures et nouveaux outils augmentent les rendements en Angleterre. Des bras se libèrent pour l'industrie — la grande transformation peut commencer.",
      },
      {
        href: "/inventions",
        id: "machine-vapeur",
        note: "La machine de Newcomen puis celle de Watt convertissent le charbon en mouvement. Pour la première fois de l'histoire, l'humanité dispose d'une force motrice qui ne dépend ni des muscles, ni du vent, ni de l'eau.",
      },
      {
        href: "/revolutions-industrielles",
        id: "premiere-ri",
        note: "Autour du textile, du charbon et du fer, l'Angleterre bascule dans l'ère industrielle. Les usines remplacent les ateliers, les villes gonflent, un monde nouveau naît dans la fumée.",
      },
      {
        href: "/revolutions-industrielles",
        id: "chemin-fer",
        note: "La vapeur se met à rouler : à partir des années 1830, le chemin de fer rétrécit les distances, unifie les marchés et devient le grand chantier du siècle.",
      },
      {
        href: "/economie",
        id: "marx-eco",
        note: "Cette société nouvelle trouve son critique le plus radical : dans Le Capital (1867), Marx analyse l'exploitation du travail et prédit les crises du capitalisme. L'économie devient un champ de bataille.",
      },
      {
        href: "/revolutions-industrielles",
        id: "electricite",
        note: "Une deuxième vague déferle à la fin du XIXe siècle : l'électricité. Dynamos, réseaux et moteurs électriques offrent une énergie propre, divisible et transportable — la fée du siècle nouveau.",
      },
      {
        href: "/inventions",
        id: "ampoule",
        note: "Son symbole le plus éclatant : l'ampoule à incandescence d'Edison (1879), et avec elle les premières centrales. La nuit recule, les villes s'illuminent.",
      },
      {
        href: "/revolutions-industrielles",
        id: "taylorisme",
        note: "L'usine elle-même devient objet de science : Taylor chronomètre les gestes, Ford installe la chaîne. La production de masse abaisse les prix et fait naître la consommation de masse.",
      },
      {
        href: "/economie",
        id: "schumpeter",
        note: "Schumpeter donne sa théorie à ce tourbillon : le capitalisme avance par « destruction créatrice », chaque grappe d'innovations balayant la précédente. La vapeur hier, l'électricité aujourd'hui — et demain ?",
      },
      {
        href: "/mathematiques",
        id: "turing",
        note: "Demain se prépare sur le papier : en 1936, Turing imagine une machine universelle capable d'exécuter n'importe quel calcul. Le concept d'ordinateur existe avant l'ordinateur lui-même.",
      },
      {
        href: "/inventions",
        id: "transistor",
        note: "En 1947, le transistor des laboratoires Bell miniaturise l'électronique. Des milliards de ces interrupteurs microscopiques peupleront bientôt chaque puce : c'est la brique élémentaire du numérique.",
      },
      {
        href: "/revolutions-industrielles",
        id: "informatique",
        note: "Ordinateurs personnels, logiciels, puis réseaux : la troisième révolution industrielle automatise l'information comme la vapeur avait automatisé la force. Du charbon au silicium, la boucle est bouclée.",
      },
    ],
  },
  {
    slug: "age-des-decouvertes",
    title: "L'âge des découvertes",
    emoji: "🧭",
    description:
      "Aux XVe et XVIe siècles, caravelles portugaises et galions espagnols relient les continents : premières mondialisations, premiers empires coloniaux — et traite atlantique.",
    steps: [
      {
        href: "/explorations",
        id: "zheng-he",
        note: "L'histoire aurait pu être chinoise : dès 1405, les gigantesques jonques de Zheng He sillonnent l'océan Indien jusqu'en Afrique. Mais la Chine des Ming rappelle ses flottes, laissant l'océan aux Européens.",
      },
      {
        href: "/inventions",
        id: "boussole",
        note: "Les navigateurs européens disposent d'un précieux héritage venu justement de Chine : la boussole. Avec l'astrolabe et la caravelle, elle rend possible la navigation hauturière, loin de toute côte.",
      },
      {
        href: "/explorations",
        id: "diaz",
        note: "Le Portugal ouvre la voie en descendant les côtes africaines : en 1488, Bartolomeu Dias double le cap de Bonne-Espérance. La route maritime vers l'Asie est à portée de voile.",
      },
      {
        href: "/explorations",
        id: "colomb",
        note: "Colomb tente le pari inverse : atteindre l'Asie par l'ouest. Le 12 octobre 1492, il touche les Antilles sans le savoir. Deux mondes qui s'ignoraient viennent d'entrer en collision.",
      },
      {
        href: "/explorations",
        id: "vasco-de-gama",
        note: "Six ans plus tard, Vasco de Gama réussit là où Colomb s'est trompé : il atteint les Indes par le cap de Bonne-Espérance. Lisbonne s'empare du commerce des épices.",
      },
      {
        href: "/explorations",
        id: "magellan",
        note: "L'expédition de Magellan achève de prendre la mesure du globe : partie en 1519 avec cinq navires, elle revient en 1522 avec un seul, ayant bouclé le premier tour du monde. La Terre est ronde, et désormais cartographiée.",
      },
      {
        href: "/empires",
        id: "espagnol",
        note: "Sur les ruines des empires aztèque et inca, l'Espagne bâtit le premier empire « sur lequel le soleil ne se couche jamais ». L'argent du Potosí inonde l'Europe et jusqu'à la Chine.",
      },
      {
        href: "/esclavage",
        id: "traite-atlantique",
        note: "La face sombre de cette mondialisation : pour exploiter plantations et mines, les puissances européennes déportent plus de douze millions d'Africains à travers l'Atlantique. Un crime aux séquelles toujours vives.",
      },
      {
        href: "/monnaies",
        id: "banque-amsterdam",
        note: "Le commerce mondial exige une finance nouvelle : en 1609, la banque d'Amsterdam sécurise paiements et changes, tandis que la VOC invente la société par actions. Le capitalisme moderne prend forme sur les quais hollandais.",
      },
      {
        href: "/explorations",
        id: "cook",
        note: "L'âge des découvertes s'achève en âge des sciences : entre 1768 et 1779, les voyages de Cook cartographient le Pacifique avec astronomes et naturalistes à bord. Il ne reste bientôt plus de terre inconnue — seulement des mondes à comprendre.",
      },
    ],
  },
];
