export interface AstronomyItem {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  image?: string;
  nationality: string;
  movement: string;
  summary: string;
  mainWorks: string[];
  keyIdeas: string[];
}

export const astronomyItems: AstronomyItem[] = [
  {
    id: "astronomie-babylonienne",
    name: "Astronomie babylonienne",
    birthYear: -1800,
    deathYear: -100,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Babylonian_tablet_recording_Halley%27s_comet.jpg?width=220",
    nationality: "Babylonien",
    movement: "Antiquite",
    summary: `L'astronomie babylonienne est la plus ancienne tradition astronomique systematique. Des le IIe millenaire av. J.-C., les pretres-astronomes observent methodiquement le ciel et consignent leurs observations sur des tablettes d'argile.

Les Babyloniens identifient les planetes visibles (Mercure, Venus, Mars, Jupiter, Saturne), etablissent le zodiaque en 12 constellations, divisent le cercle en 360 degres. Leurs observations d'eclipses s'etendent sur des siecles.

Ils developpent des methodes arithmetiques pour predire les positions planetaires et les eclipses. Ces techniques, transmises aux Grecs, forment le fondement de l'astronomie mathematique.

L'astrologie nait aussi en Mesopotamie : l'idee que les astres influencent le destin des rois puis des individus. Astronomie et astrologie restent longtemps indissociables.`,
    mainWorks: ["Tablettes astronomiques", "MUL.APIN", "Ephemerides", "Zodiaque"],
    keyIdeas: ["Observation systematique", "Prediction", "Zodiaque", "Astrologie"],
  },
  {
    id: "aristarque",
    name: "Aristarque de Samos",
    birthYear: -310,
    deathYear: -230,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Aristarchus_of_Samos.jpg?width=220",
    nationality: "Grec",
    movement: "Antiquite",
    summary: `Aristarque de Samos est le premier a proposer un modele heliocentriquede l'univers : la Terre tourne autour du Soleil, et non l'inverse. Cette idee revolutionnaire, dix-huit siecles avant Copernic, est rejetee par ses contemporains.

Son raisonnement est geometrique : il mesure les tailles relatives du Soleil et de la Lune, et leurs distances a la Terre. Bien que ses valeurs soient imprecises, sa methode est rigoureuse.

L'heliocentrisme d'Aristarque est critique par Aristote et abandonne au profit du geocentrisme. L'absence de parallaxe stellaire observable (les etoiles sont trop lointaines) semble contredire le mouvement de la Terre.

Aristarque est redecouvert a la Renaissance. Copernic le cite comme precurseur. Il incarne le genie scientifique en avance sur son temps, dont les idees doivent attendre des siecles pour etre acceptees.`,
    mainWorks: ["Des dimensions et des distances du Soleil et de la Lune", "Modele heliocentrique"],
    keyIdeas: ["Heliocentrisme", "Geometrie", "Mesures", "Precurseur"],
  },
  {
    id: "ptolemee",
    name: "Ptolemee",
    birthYear: 100,
    deathYear: 170,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ptolemy_16century.jpg?width=220",
    nationality: "Greco-egyptien",
    movement: "Antiquite",
    summary: `Claude Ptolemee, astronome et mathematicien d'Alexandrie, synthetise tout le savoir astronomique antique dans l'Almageste, reference absolue pendant quatorze siecles. Son systeme geocentriqueplace la Terre immobile au centre de l'univers.

Pour expliquer les mouvements apparemment irreguliers des planetes, Ptolemee elabore un systeme complexe d'epicycles (cercles sur cercles) et d'equants. Ce modele permet des predictions assez precises.

La Geographie de Ptolemee systematise aussi les connaissances geographiques. Ses erreurs (sous-estimation de la Terre) encourageront Colomb a tenter la traversee de l'Atlantique.

Le systeme de Ptolemee, adopte par l'Eglise, devient dogme. Sa contestation par Copernic, Galilee et Kepler est une revolution scientifique et culturelle majeure.`,
    mainWorks: ["Almageste", "Geographie", "Tetrabiblos", "Tables manuelles"],
    keyIdeas: ["Geocentrisme", "Epicycles", "Synthese antique", "Autorite"],
  },
  {
    id: "copernic",
    name: "Nicolas Copernic",
    birthYear: 1473,
    deathYear: 1543,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nikolaus_Kopernikus.jpg?width=220",
    nationality: "Polonais",
    movement: "Renaissance",
    summary: `Nicolas Copernic, chanoine et astronome polonais, bouleverse la cosmologie en placant le Soleil au centre de l'univers. Son De revolutionibus orbium coelestium (1543), publie l'annee de sa mort, inaugure la revolution scientifique.

Copernic reprend l'heliocentrisme d'Aristarque pour simplifier le systeme ptolemeique. La Terre devient une planete comme les autres, tournant sur elle-meme (jour) et autour du Soleil (annee). L'ordre des planetes s'en deduit logiquement.

Le systeme copernicien reste imparfait : Copernic conserve les orbites circulaires et doit encore recourir a des epicycles. Mais le changement de perspective est radical. L'homme n'est plus au centre de la Creation.

L'Eglise catholique condamne l'heliocentrisme en 1616. Mais la revolution copernicienne est lancee. Kepler, Galilee, Newton l'acheveront. La science moderne nait de cette rupture.`,
    mainWorks: ["De revolutionibus orbium coelestium", "Commentariolus"],
    keyIdeas: ["Heliocentrisme", "Revolution copernicienne", "Terre mobile", "Rupture"],
  },
  {
    id: "brahe",
    name: "Tycho Brahe",
    birthYear: 1546,
    deathYear: 1601,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tycho_Brahe.JPG?width=220",
    nationality: "Danois",
    movement: "Renaissance",
    summary: `Tycho Brahe est le plus grand astronome observateur avant l'invention du telescope. Depuis son observatoire d'Uraniborg, il accumule des mesures d'une precision inegalee, dix fois superieure a ses predecesseurs.

Tycho observe la supernova de 1572 et la comete de 1577, prouvant que le ciel n'est pas immuable comme le croyait Aristote. Ces phenomenes se produisent au-dela de la Lune, dans le monde suppose parfait des etoiles.

Il propose un systeme hybride : les planetes tournent autour du Soleil, mais le Soleil tourne autour de la Terre. Ce compromis evite les objections physiques et theologiques a l'heliocentrisme.

Ses observations, transmises a son assistant Kepler, permettront a celui-ci de decouvrir les lois du mouvement planetaire. Tycho fournit les donnees, Kepler la theorie.`,
    mainWorks: ["Observations d'Uraniborg", "De nova stella", "Systeme tychonien"],
    keyIdeas: ["Observation precise", "Supernova", "Cometes", "Donnees"],
  },
  {
    id: "kepler",
    name: "Johannes Kepler",
    birthYear: 1571,
    deathYear: 1630,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Johannes_Kepler_1610.jpg?width=220",
    nationality: "Allemand",
    movement: "Revolution scientifique",
    summary: `Johannes Kepler, mathematicien et astronome allemand, decouvre les trois lois du mouvement planetaire. Utilisant les observations de Tycho Brahe, il rompt avec deux millenaires de cercles parfaits : les planetes decrivent des ellipses.

Premiere loi : les orbites sont des ellipses dont le Soleil occupe un foyer. Deuxieme loi : le rayon Soleil-planete balaie des aires egales en temps egaux. Troisieme loi : le carre de la periode est proportionnel au cube du demi-grand axe.

Kepler est aussi un mystique neoplatonicien, cherchant l'harmonie mathematique du cosmos. Son Mysterium Cosmographicum tente d'expliquer les distances planetaires par les solides de Platon.

Les lois de Kepler, purement descriptives, seront expliquees par Newton grace a la gravitation universelle. Elles restent le fondement de la mecanique celeste et de l'astronautique.`,
    mainWorks: ["Astronomia nova", "Harmonices Mundi", "Epitome astronomiae Copernicanae", "Tables rudolphines"],
    keyIdeas: ["Ellipses", "Lois du mouvement", "Harmonie", "Mathematiques"],
  },
  {
    id: "galilee",
    name: "Galilee",
    birthYear: 1564,
    deathYear: 1642,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg?width=220",
    nationality: "Italien",
    movement: "Revolution scientifique",
    summary: `Galileo Galilei, savant florentin, est le pere de la physique moderne et de la methode experimentale. En 1609, il tourne vers le ciel une lunette amelioree et fait des decouvertes qui bouleversent la cosmologie.

Il observe les montagnes de la Lune (le ciel n'est pas parfait), les satellites de Jupiter (la Terre n'est pas le centre unique), les phases de Venus (elle tourne autour du Soleil), les taches solaires. Le Sidereus Nuncius (1610) rend ces decouvertes celebres.

Galilee defend l'heliocentrisme avec passion, s'attirant les foudres de l'Eglise. Condamne par l'Inquisition en 1633, il est assigne a residence. "Et pourtant elle tourne" : la legende resume son obstination.

Galilee fonde aussi la cinematique (chute des corps, mouvement parabolique). Sa methode - observation, experimentation, mathematisation - devient le modele de la science moderne.`,
    mainWorks: ["Sidereus Nuncius", "Dialogue sur les deux grands systemes du monde", "Discours sur deux sciences nouvelles"],
    keyIdeas: ["Lunette astronomique", "Heliocentrisme", "Methode experimentale", "Proces"],
  },
  {
    id: "newton",
    name: "Isaac Newton",
    birthYear: 1642,
    deathYear: 1727,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/GodfreyKneller-IsaacNewton-1689.jpg?width=220",
    nationality: "Anglais",
    movement: "Revolution scientifique",
    summary: `Isaac Newton acheve la revolution scientifique en unifiant la mecanique terrestre et celeste. Les Principia Mathematica (1687) etablissent les lois du mouvement et la gravitation universelle : la meme force fait tomber la pomme et orbiter la Lune.

La loi de la gravitation (attraction proportionnelle aux masses, inversement proportionnelle au carre de la distance) explique les lois de Kepler, les marees, la forme de la Terre, les trajectoires des cometes. L'univers devient une horloge mecanique.

Newton invente aussi le calcul infinitesimal (independamment de Leibniz), decompose la lumiere blanche en spectre colore, construit le premier telescope a miroir. Son genie est universel.

La mecanique newtonienne regne sans partage pendant deux siecles, jusqu'a Einstein. Newton reste le symbole du genie scientifique, celui qui a "vu plus loin en montant sur les epaules de geants".`,
    mainWorks: ["Principia Mathematica", "Optique", "Telescope newtonien"],
    keyIdeas: ["Gravitation universelle", "Lois du mouvement", "Mecanique celeste", "Calcul"],
  },
  {
    id: "herschel",
    name: "William Herschel",
    birthYear: 1738,
    deathYear: 1822,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/William_Herschel01.jpg?width=220",
    nationality: "Germano-britannique",
    movement: "Siecle des Lumieres",
    summary: `William Herschel, musicien devenu astronome, decouvre Uranus en 1781, premiere planete trouvee depuis l'Antiquite. Cette decouverte double la taille connue du systeme solaire et lui vaut une renommee mondiale.

Herschel construit les plus grands telescopes de son epoque (miroirs jusqu'a 1,2 m) et entreprend un releve systematique du ciel. Il decouvre des milliers de nebuleuses et d'amas, deux satellites d'Uranus, deux de Saturne.

Il comprend que le Soleil se deplace dans l'espace et tente de cartographier la forme de la Voie lactee. Sa soeur Caroline, elle-meme astronome, decouvre plusieurs cometes.

Herschel decouvre aussi le rayonnement infrarouge en 1800, ouvrant l'astronomie aux longueurs d'onde invisibles. Sa dynastie d'astronomes (son fils John poursuit ses travaux) marque le XIXe siecle.`,
    mainWorks: ["Decouverte d'Uranus", "Catalogues de nebuleuses", "Telescopes geants", "Infrarouge"],
    keyIdeas: ["Uranus", "Telescopes", "Voie lactee", "Infrarouge"],
  },
  {
    id: "hubble",
    name: "Edwin Hubble",
    birthYear: 1889,
    deathYear: 1953,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Studio_portrait_photograph_of_Edwin_Powell_Hubble.JPG?width=220",
    nationality: "Americain",
    movement: "Cosmologie moderne",
    summary: `Edwin Hubble revolutionne notre vision de l'univers. En 1924, il prouve que la nebuleuse d'Andromede est une galaxie exterieure a la Voie lactee. L'univers s'avere immensement plus grand que prevu, peuple de milliards de galaxies.

En 1929, Hubble decouvre que les galaxies s'eloignent de nous a une vitesse proportionnelle a leur distance (loi de Hubble). L'univers est en expansion. Cette observation fonde la cosmologie du Big Bang.

Hubble etablit aussi une classification des galaxies (elliptiques, spirales, irregulieres) toujours utilisee. Depuis le telescope du Mont Wilson (2,5 m), il transforme l'astronomie en science des grandes structures.

Le telescope spatial Hubble, lance en 1990, porte son nom. Ses images spectaculaires ont popularise l'astronomie et affine la mesure de l'expansion de l'univers.`,
    mainWorks: ["Decouverte des galaxies exterieures", "Loi de Hubble", "Classification des galaxies", "Constante de Hubble"],
    keyIdeas: ["Galaxies", "Expansion de l'univers", "Big Bang", "Cosmologie"],
  },
  {
    id: "einstein-relativite",
    name: "Relativite generale",
    birthYear: 1915,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Einstein_1921_by_F_Schmutzer_-_restoration.jpg?width=220",
    nationality: "Allemand / Suisse",
    movement: "Physique moderne",
    summary: `Albert Einstein publie la relativite generale en 1915, revolutionnant notre comprehension de la gravitation. L'espace et le temps forment un tissu courbe par la presence de masse. Les planetes suivent les geodesiques de cet espace-temps.

La relativite generale predit des phenomenes extraordinaires : deflexion de la lumiere par le Soleil (confirmee en 1919), ondes gravitationnelles (detectees en 2015), trous noirs, expansion de l'univers.

Elle depasse Newton pour les champs gravitationnels intenses et les vitesses proches de la lumiere. GPS et cosmologie moderne reposent sur ses equations. C'est le cadre theorique de l'univers a grande echelle.

Einstein cherche ensuite une theorie unifiee des forces, sans succes. La reconciliation de la relativite generale avec la mecanique quantique reste le grand defi de la physique theorique.`,
    mainWorks: ["Relativite generale (1915)", "Equations de champ d'Einstein", "Cosmologie relativiste"],
    keyIdeas: ["Espace-temps courbe", "Gravitation", "Trous noirs", "Cosmologie"],
  },
  {
    id: "big-bang",
    name: "Theorie du Big Bang",
    birthYear: 1927,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lemaitre.jpg?width=220",
    nationality: "Belge / Americain",
    movement: "Cosmologie moderne",
    summary: `Georges Lemaitre, pretre et physicien belge, propose en 1927 que l'univers a commence par l'explosion d'un "atome primitif". Cette hypothese, combinee a l'expansion observee par Hubble, fonde la theorie du Big Bang.

Le terme "Big Bang" est ironiquement invente par Fred Hoyle, defenseur d'un univers stationnaire. Mais les observations confirment Lemaitre : le fond diffus cosmologique (1965), l'abondance des elements legers, l'evolution des galaxies.

Le modele standard du Big Bang decrit un univers age de 13,8 milliards d'annees, ne d'un etat extremement chaud et dense. L'inflation cosmique, phase d'expansion fulgurante, explique l'homogeneite observee.

Le Big Bang n'est pas une explosion dans l'espace mais l'expansion de l'espace lui-meme. Ce qui l'a cause, ce qui existait "avant", restent des questions ouvertes a la frontiere de la physique.`,
    mainWorks: ["Hypothese de l'atome primitif", "Fond diffus cosmologique", "Nucleosynthese primordiale", "Modele Lambda-CDM"],
    keyIdeas: ["Origine de l'univers", "Expansion", "13,8 milliards d'annees", "Fond cosmologique"],
  },
  {
    id: "radioastronomie",
    name: "Radioastronomie",
    birthYear: 1932,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/USA.NM.VeryLargeArray.02.jpg?width=220",
    nationality: "Americain",
    movement: "Astronomie moderne",
    summary: `Karl Jansky decouvre en 1932 que le centre de la Voie lactee emet des ondes radio. Cette decouverte fortuite ouvre une nouvelle fenetre sur l'univers : la radioastronomie, qui revele des objets invisibles en lumiere visible.

Apres la guerre, les radars militaires sont reconvertis en radiotelescopes. Jodrell Bank, Arecibo, le VLA deviennent des instruments majeurs. On decouvre les quasars, les pulsars, le fond diffus cosmologique.

La radioastronomie permet d'observer les regions froides et poussiereuses ou naissent les etoiles, les jets de trous noirs, les galaxies lointaines. La radiointerferometrie atteint des resolutions inegalees.

En 2019, l'Event Horizon Telescope (reseau mondial) obtient la premiere image d'un trou noir. La radioastronomie reste a la pointe de la decouverte, completant les observations optiques, X et gamma.`,
    mainWorks: ["Decouverte de Jansky", "Pulsars", "Fond diffus cosmologique", "Image du trou noir M87*"],
    keyIdeas: ["Ondes radio", "Pulsars", "Quasars", "Interferometrie"],
  },
  {
    id: "spoutnik",
    name: "Spoutnik et l'ere spatiale",
    birthYear: 1957,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sputnik_asm.jpg?width=220",
    nationality: "Sovietique",
    movement: "Conquete spatiale",
    summary: `Le 4 octobre 1957, l'URSS lance Spoutnik 1, premier satellite artificiel. Son "bip-bip" radio, capte dans le monde entier, inaugure l'ere spatiale et choque les Etats-Unis, declenchant la course a l'espace.

Spoutnik 2 emporte la chienne Laika un mois plus tard. Youri Gagarine devient le premier homme dans l'espace (1961). La competition sovietico-americaine culmine avec Apollo 11 (1969) : Neil Armstrong marche sur la Lune.

Les sondes explorent le systeme solaire : Mariner, Voyager, Viking, Cassini revelent les planetes, leurs lunes, les confins du systeme solaire. Voyager 1 est aujourd'hui l'objet humain le plus lointain.

L'astronomie spatiale s'affranchit de l'atmosphere : Hubble, Chandra, James Webb observent l'univers dans toutes les longueurs d'onde, des origines aux confins.`,
    mainWorks: ["Spoutnik 1", "Gagarine", "Apollo 11", "Voyager", "Telescope Hubble"],
    keyIdeas: ["Satellite", "Course a l'espace", "Exploration", "Homme sur la Lune"],
  },
  {
    id: "pulsars",
    name: "Pulsars et etoiles a neutrons",
    birthYear: 1967,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Crab_Nebula.jpg?width=220",
    nationality: "Britannique",
    movement: "Astrophysique",
    summary: `Jocelyn Bell decouvre les pulsars en 1967 : des signaux radio extremement reguliers, surnommes d'abord "LGM" (Little Green Men). Ce sont en fait des etoiles a neutrons en rotation rapide, residus d'explosions de supernovae.

Une etoile a neutrons concentre la masse du Soleil dans une sphere de 20 km. La densite y atteint celle du noyau atomique. Le pulsar de la nebuleuse du Crabe tourne 30 fois par seconde.

Les pulsars sont des horloges cosmiques d'une precision extreme. Les pulsars binaires confirment la relativite generale et l'existence des ondes gravitationnelles. Le prix Nobel 1974 recompense cette decouverte (mais pas Bell, simple doctorante).

En 2017, la fusion de deux etoiles a neutrons est observee en ondes gravitationnelles et en lumiere : naissance de l'astronomie multi-messagers.`,
    mainWorks: ["Decouverte de Bell", "Pulsar du Crabe", "Pulsars millisecondes", "Fusion d'etoiles a neutrons"],
    keyIdeas: ["Etoile a neutrons", "Rotation rapide", "Horloges cosmiques", "Relativite"],
  },
  {
    id: "trous-noirs",
    name: "Trous noirs",
    birthYear: 1971,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Black_hole_-_Messier_87_crop_max_res.jpg?width=220",
    nationality: "International",
    movement: "Astrophysique",
    summary: `Les trous noirs, predits par la relativite generale, sont des regions de l'espace d'ou rien ne peut s'echapper, pas meme la lumiere. Leur existence est longtemps debattue jusqu'aux premieres detections indirectes dans les annees 1970.

Cygnus X-1, identifie en 1971, est le premier candidat trou noir : une source X intense associee a une etoile orbitant un objet invisible tres massif. On decouvre ensuite des trous noirs supermassifs au centre des galaxies.

Stephen Hawking predit en 1974 que les trous noirs emettent un rayonnement et peuvent s'evaporer. La thermodynamique des trous noirs relie gravitation, mecanique quantique et information.

En 2019, l'Event Horizon Telescope photographie le trou noir de M87 : une ombre de 6,5 milliards de masses solaires. En 2022, celui de notre Galaxie, Sagittarius A*, est a son tour image.`,
    mainWorks: ["Cygnus X-1", "Rayonnement de Hawking", "Trous noirs supermassifs", "Image de M87*"],
    keyIdeas: ["Singularite", "Horizon des evenements", "Information", "Relativite"],
  },
  {
    id: "exoplanetes",
    name: "Exoplanetes",
    birthYear: 1995,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Exoplanet_Comparison_Kepler-22_b.png?width=220",
    nationality: "Suisse",
    movement: "Astronomie contemporaine",
    summary: `Michel Mayor et Didier Queloz decouvrent en 1995 la premiere exoplanete autour d'une etoile semblable au Soleil : 51 Pegasi b, une "Jupiter chaude" orbitant en 4 jours. Cette decouverte, couronnee par le Nobel 2019, ouvre un nouveau champ de l'astronomie.

Les methodes de detection se multiplient : vitesses radiales, transits (Kepler, TESS), imagerie directe. On connait aujourd'hui plus de 5 000 exoplanetes confirmees, avec une immense diversite de tailles, masses, orbites.

La quete se concentre sur les planetes rocheuses dans la "zone habitable", ou l'eau liquide peut exister. Kepler-452b, TRAPPIST-1, Proxima b sont des candidates prometteuses. La vie ailleurs devient une question scientifique.

Le telescope James Webb, lance en 2021, analyse les atmospheres d'exoplanetes, cherchant des biosignatures. La reponse a "Sommes-nous seuls ?" est peut-etre pour bientot.`,
    mainWorks: ["51 Pegasi b", "Mission Kepler", "TRAPPIST-1", "Telescope James Webb"],
    keyIdeas: ["Planetes extrasolaires", "Zone habitable", "Vie ailleurs", "Detection"],
  },
  {
    id: "ondes-gravitationnelles",
    name: "Ondes gravitationnelles",
    birthYear: 2015,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/LIGO_measurement_of_gravitational_waves.svg?width=220",
    nationality: "Americain",
    movement: "Physique contemporaine",
    summary: `Le 14 septembre 2015, les detecteurs LIGO captent pour la premiere fois des ondes gravitationnelles, predites par Einstein un siecle plus tot. Elles proviennent de la fusion de deux trous noirs a 1,3 milliard d'annees-lumiere.

Les ondes gravitationnelles sont des ondulations de l'espace-temps, produites par l'acceleration de masses. Les detecteurs LIGO et Virgo mesurent des deformations infimes : un millieme de la taille d'un proton sur 4 km.

Cette detection ouvre une nouvelle astronomie : on "entend" les trous noirs fusionner, les etoiles a neutrons spiraler. En 2017, une fusion d'etoiles a neutrons est observee simultanement en ondes gravitationnelles et en lumiere.

Le prix Nobel 2017 recompense cette decouverte. Des detecteurs plus sensibles, puis un observatoire spatial (LISA), permettront d'observer les trous noirs supermassifs et les echos du Big Bang.`,
    mainWorks: ["Detection LIGO 2015", "Fusion d'etoiles a neutrons 2017", "Detecteurs Virgo, KAGRA", "Projet LISA"],
    keyIdeas: ["Espace-temps", "Trous noirs", "Multi-messagers", "Einstein confirme"],
  },
  {
    id: "james-webb",
    name: "Telescope James Webb",
    birthYear: 2021,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/James_Webb_Space_Telescope_Mirror37.jpg?width=220",
    nationality: "International",
    movement: "Astronomie contemporaine",
    summary: `Le telescope spatial James Webb, lance le 25 decembre 2021, est le plus puissant jamais construit. Son miroir de 6,5 m et ses instruments infrarouges observent les premieres galaxies, les atmospheres d'exoplanetes, la formation des etoiles.

Place a 1,5 million de km de la Terre, au point de Lagrange L2, il est protege du Soleil par un pare-soleil grand comme un court de tennis. Sa temperature descend a -233°C pour capter l'infrarouge.

Ses premieres images (juillet 2022) revelent des galaxies formees quelques centaines de millions d'annees apres le Big Bang, plus tot que prevu. La chimie des atmospheres exoplanetaires livre ses premiers secrets.

Le JWST transforme notre vision de l'univers. Successeur de Hubble, il repoussera les frontieres de la connaissance pendant au moins 20 ans.`,
    mainWorks: ["Premieres images 2022", "Galaxies lointaines", "Atmospheres d'exoplanetes", "Piliers de la creation"],
    keyIdeas: ["Infrarouge", "Premieres galaxies", "Exoplanetes", "Successeur de Hubble"],
  },
];
