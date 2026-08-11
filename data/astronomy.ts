export interface AstronomyItem {
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
    movement: "Antiquité",
    family: "Antiquité",
    itemType: "topic",
    summary: `L'astronomie babylonienne est la plus ancienne tradition astronomique systématique. Dès le IIe millénaire av. J.-C., les prêtres-astronomes observent méthodiquement le ciel et consignent leurs observations sur des tablettes d'argile.

Les Babyloniens identifient les planètes visibles (Mercure, Vénus, Mars, Jupiter, Saturne), établissent le zodiaque en 12 constellations, divisent le cercle en 360 degrés. Leurs observations d'éclipses s'étendent sur des siècles.

Ils développent des méthodes arithmétiques pour prédire les positions planétaires et les éclipses. Ces techniques, transmises aux Grecs, forment le fondement de l'astronomie mathématique.

L'astrologie naît aussi en Mésopotamie : l'idée que les astres influencent le destin des rois puis des individus. Astronomie et astrologie restent longtemps indissociables.`,
    mainWorks: ["Tablettes astronomiques", "MUL.APIN", "Éphémérides", "Zodiaque"],
    keyIdeas: ["Observation systématique", "Prédiction", "Zodiaque", "Astrologie"],
  },
  {
    id: "aristarque",
    name: "Aristarque de Samos",
    birthYear: -310,
    deathYear: -230,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Aristarchus_of_Samos.jpg?width=220",
    nationality: "Grec",
    movement: "Antiquité",
    family: "Antiquité",
    summary: `Aristarque de Samos est le premier à proposer un modèle héliocentrique de l'univers : la Terre tourne autour du Soleil, et non l'inverse. Cette idée révolutionnaire, dix-huit siècles avant Copernic, est rejetée par ses contemporains.

Son raisonnement est géométrique : il mesure les tailles relatives du Soleil et de la Lune, et leurs distances à la Terre. Bien que ses valeurs soient imprécises, sa méthode est rigoureuse.

L'héliocentrisme d'Aristarque est critiqué par Aristote et abandonné au profit du géocentrisme. L'absence de parallaxe stellaire observable (les étoiles sont trop lointaines) semble contredire le mouvement de la Terre.

Aristarque est redécouvert à la Renaissance. Copernic le cite comme précurseur. Il incarne le génie scientifique en avance sur son temps, dont les idées doivent attendre des siècles pour être acceptées.`,
    mainWorks: ["Des dimensions et des distances du Soleil et de la Lune", "Modèle héliocentrique"],
    keyIdeas: ["Héliocentrisme", "Géométrie", "Mesures", "Précurseur"],
  },
  {
    id: "ptolemee",
    name: "Ptolémée",
    birthYear: 100,
    deathYear: 170,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ptolemy_16century.jpg?width=220",
    nationality: "Gréco-égyptien",
    movement: "Antiquité",
    family: "Antiquité",
    summary: `Claude Ptolémée, astronome et mathématicien d'Alexandrie, synthétise tout le savoir astronomique antique dans l'Almageste, référence absolue pendant quatorze siècles. Son système géocentrique place la Terre immobile au centre de l'univers.

Pour expliquer les mouvements apparemment irréguliers des planètes, Ptolémée élabore un système complexe d'épicycles (cercles sur cercles) et d'équants. Ce modèle permet des prédictions assez précises.

La Géographie de Ptolémée systématise aussi les connaissances géographiques. Ses erreurs (sous-estimation de la Terre) encourageront Colomb à tenter la traversée de l'Atlantique.

Le système de Ptolémée, adopté par l'Église, devient dogme. Sa contestation par Copernic, Galilée et Kepler est une révolution scientifique et culturelle majeure.`,
    mainWorks: ["Almageste", "Géographie", "Tetrabiblos", "Tables manuelles"],
    keyIdeas: ["Géocentrisme", "Épicycles", "Synthèse antique", "Autorité"],
  },
  {
    id: "copernic",
    name: "Nicolas Copernic",
    birthYear: 1473,
    deathYear: 1543,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nikolaus_Kopernikus.jpg?width=220",
    nationality: "Polonais",
    movement: "Renaissance",
    family: "Révolution copernicienne",
    summary: `Nicolas Copernic, chanoine et astronome polonais, bouleverse la cosmologie en plaçant le Soleil au centre de l'univers. Son De revolutionibus orbium coelestium (1543), publié l'année de sa mort, inaugure la révolution scientifique.

Copernic reprend l'héliocentrisme d'Aristarque pour simplifier le système ptoléméique. La Terre devient une planète comme les autres, tournant sur elle-même (jour) et autour du Soleil (année). L'ordre des planètes s'en déduit logiquement.

Le système copernicien reste imparfait : Copernic conserve les orbites circulaires et doit encore recourir à des épicycles. Mais le changement de perspective est radical. L'homme n'est plus au centre de la Création.

L'Église catholique condamne l'héliocentrisme en 1616. Mais la révolution copernicienne est lancée. Kepler, Galilée, Newton l'achèveront. La science moderne naît de cette rupture.`,
    mainWorks: ["De revolutionibus orbium coelestium", "Commentariolus"],
    keyIdeas: ["Héliocentrisme", "Révolution copernicienne", "Terre mobile", "Rupture"],
  },
  {
    id: "brahe",
    name: "Tycho Brahe",
    birthYear: 1546,
    deathYear: 1601,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tycho_Brahe.JPG?width=220",
    nationality: "Danois",
    movement: "Renaissance",
    family: "Révolution copernicienne",
    summary: `Tycho Brahe est le plus grand astronome observateur avant l'invention du télescope. Depuis son observatoire d'Uraniborg, il accumule des mesures d'une précision inégalée, dix fois supérieure à ses prédécesseurs.

Tycho observe la supernova de 1572 et la comète de 1577, prouvant que le ciel n'est pas immuable comme le croyait Aristote. Ces phénomènes se produisent au-delà de la Lune, dans le monde supposé parfait des étoiles.

Il propose un système hybride : les planètes tournent autour du Soleil, mais le Soleil tourne autour de la Terre. Ce compromis évite les objections physiques et théologiques à l'héliocentrisme.

Ses observations, transmises à son assistant Kepler, permettront à celui-ci de découvrir les lois du mouvement planétaire. Tycho fournit les données, Kepler la théorie.`,
    mainWorks: ["Observations d'Uraniborg", "De nova stella", "Système tychonien"],
    keyIdeas: ["Observation précise", "Supernova", "Comètes", "Données"],
  },
  {
    id: "kepler",
    name: "Johannes Kepler",
    birthYear: 1571,
    deathYear: 1630,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/JKepler.jpg/330px-JKepler.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Révolution scientifique",
    family: "Révolution copernicienne",
    summary: `Johannes Kepler, mathématicien et astronome allemand, découvre les trois lois du mouvement planétaire. Utilisant les observations de Tycho Brahe, il rompt avec deux millénaires de cercles parfaits : les planètes décrivent des ellipses.

Première loi : les orbites sont des ellipses dont le Soleil occupe un foyer. Deuxième loi : le rayon Soleil-planète balaie des aires égales en temps égaux. Troisième loi : le carré de la période est proportionnel au cube du demi-grand axe.

Kepler est aussi un mystique néoplatonicien, cherchant l'harmonie mathématique du cosmos. Son Mysterium Cosmographicum tente d'expliquer les distances planétaires par les solides de Platon.

Les lois de Kepler, purement descriptives, seront expliquées par Newton grâce à la gravitation universelle. Elles restent le fondement de la mécanique céleste et de l'astronautique.`,
    mainWorks: ["Astronomia nova", "Harmonices Mundi", "Epitome astronomiae Copernicanae", "Tables rudolphines"],
    keyIdeas: ["Ellipses", "Lois du mouvement", "Harmonie", "Mathématiques"],
  },
  {
    id: "galilee",
    name: "Galilée",
    birthYear: 1564,
    deathYear: 1642,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg?width=220",
    nationality: "Italien",
    movement: "Révolution scientifique",
    family: "Révolution copernicienne",
    summary: `Galileo Galilei, savant florentin, est le père de la physique moderne et de la méthode expérimentale. En 1609, il tourne vers le ciel une lunette améliorée et fait des découvertes qui bouleversent la cosmologie.

Il observe les montagnes de la Lune (le ciel n'est pas parfait), les satellites de Jupiter (la Terre n'est pas le centre unique), les phases de Vénus (elle tourne autour du Soleil), les taches solaires. Le Sidereus Nuncius (1610) rend ces découvertes célèbres.

Galilée défend l'héliocentrisme avec passion, s'attirant les foudres de l'Église. Condamné par l'Inquisition en 1633, il est assigné à résidence. "Et pourtant elle tourne" : la légende résume son obstination.

Galilée fonde aussi la cinématique (chute des corps, mouvement parabolique). Sa méthode - observation, expérimentation, mathématisation - devient le modèle de la science moderne.`,
    mainWorks: ["Sidereus Nuncius", "Dialogue sur les deux grands systèmes du monde", "Discours sur deux sciences nouvelles"],
    keyIdeas: ["Lunette astronomique", "Héliocentrisme", "Méthode expérimentale", "Procès"],
  },
  {
    id: "newton",
    name: "Isaac Newton",
    birthYear: 1642,
    deathYear: 1727,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/GodfreyKneller-IsaacNewton-1689.jpg?width=220",
    nationality: "Anglais",
    movement: "Révolution scientifique",
    family: "Révolution copernicienne",
    summary: `Isaac Newton achève la révolution scientifique en unifiant la mécanique terrestre et céleste. Les Principia Mathematica (1687) établissent les lois du mouvement et la gravitation universelle : la même force fait tomber la pomme et orbiter la Lune.

La loi de la gravitation (attraction proportionnelle aux masses, inversement proportionnelle au carré de la distance) explique les lois de Kepler, les marées, la forme de la Terre, les trajectoires des comètes. L'univers devient une horloge mécanique.

Newton invente aussi le calcul infinitésimal (indépendamment de Leibniz), décompose la lumière blanche en spectre coloré, construit le premier télescope à miroir. Son génie est universel.

La mécanique newtonienne règne sans partage pendant deux siècles, jusqu'à Einstein. Newton reste le symbole du génie scientifique, celui qui a "vu plus loin en montant sur les épaules de géants".`,
    mainWorks: ["Principia Mathematica", "Optique", "Télescope newtonien"],
    keyIdeas: ["Gravitation universelle", "Lois du mouvement", "Mécanique céleste", "Calcul"],
  },
  {
    id: "herschel",
    name: "William Herschel",
    birthYear: 1738,
    deathYear: 1822,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/William_Herschel01.jpg?width=220",
    nationality: "Germano-britannique",
    movement: "Siècle des Lumières",
    family: "Cosmologie moderne",
    summary: `William Herschel, musicien devenu astronome, découvre Uranus en 1781, première planète trouvée depuis l'Antiquité. Cette découverte double la taille connue du système solaire et lui vaut une renommée mondiale.

Herschel construit les plus grands télescopes de son époque (miroirs jusqu'à 1,2 m) et entreprend un relevé systématique du ciel. Il découvre des milliers de nébuleuses et d'amas, deux satellites d'Uranus, deux de Saturne.

Il comprend que le Soleil se déplace dans l'espace et tente de cartographier la forme de la Voie lactée. Sa sœur Caroline, elle-même astronome, découvre plusieurs comètes.

Herschel découvre aussi le rayonnement infrarouge en 1800, ouvrant l'astronomie aux longueurs d'onde invisibles. Sa dynastie d'astronomes (son fils John poursuit ses travaux) marque le XIXe siècle.`,
    mainWorks: ["Découverte d'Uranus", "Catalogues de nébuleuses", "Télescopes géants", "Infrarouge"],
    keyIdeas: ["Uranus", "Télescopes", "Voie lactée", "Infrarouge"],
  },
  {
    id: "hubble",
    name: "Edwin Hubble",
    birthYear: 1889,
    deathYear: 1953,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Studio_portrait_photograph_of_Edwin_Powell_Hubble.JPG?width=220",
    nationality: "Américain",
    movement: "Cosmologie moderne",
    family: "Cosmologie moderne",
    summary: `Edwin Hubble révolutionne notre vision de l'univers. En 1924, il prouve que la nébuleuse d'Andromède est une galaxie extérieure à la Voie lactée. L'univers s'avère immensément plus grand que prévu, peuplé de milliards de galaxies.

En 1929, Hubble découvre que les galaxies s'éloignent de nous à une vitesse proportionnelle à leur distance (loi de Hubble). L'univers est en expansion. Cette observation fonde la cosmologie du Big Bang.

Hubble établit aussi une classification des galaxies (elliptiques, spirales, irrégulières) toujours utilisée. Depuis le télescope du Mont Wilson (2,5 m), il transforme l'astronomie en science des grandes structures.

Le télescope spatial Hubble, lancé en 1990, porte son nom. Ses images spectaculaires ont popularisé l'astronomie et affiné la mesure de l'expansion de l'univers.`,
    mainWorks: ["Découverte des galaxies extérieures", "Loi de Hubble", "Classification des galaxies", "Constante de Hubble"],
    keyIdeas: ["Galaxies", "Expansion de l'univers", "Big Bang", "Cosmologie"],
  },
  {
    id: "einstein-relativite",
    name: "Relativité générale",
    birthYear: 1915,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Einstein_1921_by_F_Schmutzer_-_restoration.jpg?width=220",
    nationality: "Allemand / Suisse",
    movement: "Physique moderne",
    family: "Cosmologie moderne",
    itemType: "topic",
    summary: `Albert Einstein publie la relativité générale en 1915, révolutionnant notre compréhension de la gravitation. L'espace et le temps forment un tissu courbé par la présence de masse. Les planètes suivent les géodésiques de cet espace-temps.

La relativité générale prédit des phénomènes extraordinaires : déflexion de la lumière par le Soleil (confirmée en 1919), ondes gravitationnelles (détectées en 2015), trous noirs, expansion de l'univers.

Elle dépasse Newton pour les champs gravitationnels intenses et les vitesses proches de la lumière. GPS et cosmologie moderne reposent sur ses équations. C'est le cadre théorique de l'univers à grande échelle.

Einstein cherche ensuite une théorie unifiée des forces, sans succès. La réconciliation de la relativité générale avec la mécanique quantique reste le grand défi de la physique théorique.`,
    mainWorks: ["Relativité générale (1915)", "Équations de champ d'Einstein", "Cosmologie relativiste"],
    keyIdeas: ["Espace-temps courbe", "Gravitation", "Trous noirs", "Cosmologie"],
  },
  {
    id: "big-bang",
    name: "Théorie du Big Bang",
    birthYear: 1927,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lemaitre.jpg?width=220",
    nationality: "Belge / Américain",
    movement: "Cosmologie moderne",
    family: "Cosmologie moderne",
    itemType: "topic",
    summary: `Georges Lemaître, prêtre et physicien belge, propose en 1927 que l'univers a commencé par l'explosion d'un "atome primitif". Cette hypothèse, combinée à l'expansion observée par Hubble, fonde la théorie du Big Bang.

Le terme "Big Bang" est ironiquement inventé par Fred Hoyle, défenseur d'un univers stationnaire. Mais les observations confirment Lemaître : le fond diffus cosmologique (1965), l'abondance des éléments légers, l'évolution des galaxies.

Le modèle standard du Big Bang décrit un univers âgé de 13,8 milliards d'années, né d'un état extrêmement chaud et dense. L'inflation cosmique, phase d'expansion fulgurante, explique l'homogénéité observée.

Le Big Bang n'est pas une explosion dans l'espace mais l'expansion de l'espace lui-même. Ce qui l'a causé, ce qui existait "avant", restent des questions ouvertes à la frontière de la physique.`,
    mainWorks: ["Hypothèse de l'atome primitif", "Fond diffus cosmologique", "Nucléosynthèse primordiale", "Modèle Lambda-CDM"],
    keyIdeas: ["Origine de l'univers", "Expansion", "13,8 milliards d'années", "Fond cosmologique"],
  },
  {
    id: "radioastronomie",
    name: "Radioastronomie",
    birthYear: 1932,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/USA.NM.VeryLargeArray.02.jpg?width=220",
    nationality: "Américain",
    movement: "Astronomie moderne",
    family: "Ère spatiale & astrophysique",
    itemType: "topic",
    summary: `Karl Jansky découvre en 1932 que le centre de la Voie lactée émet des ondes radio. Cette découverte fortuite ouvre une nouvelle fenêtre sur l'univers : la radioastronomie, qui révèle des objets invisibles en lumière visible.

Après la guerre, les radars militaires sont reconvertis en radiotélescopes. Jodrell Bank, Arecibo, le VLA deviennent des instruments majeurs. On découvre les quasars, les pulsars, le fond diffus cosmologique.

La radioastronomie permet d'observer les régions froides et poussiéreuses où naissent les étoiles, les jets de trous noirs, les galaxies lointaines. La radiointerférométrie atteint des résolutions inégalées.

En 2019, l'Event Horizon Telescope (réseau mondial) obtient la première image d'un trou noir. La radioastronomie reste à la pointe de la découverte, complétant les observations optiques, X et gamma.`,
    mainWorks: ["Découverte de Jansky", "Pulsars", "Fond diffus cosmologique", "Image du trou noir M87*"],
    keyIdeas: ["Ondes radio", "Pulsars", "Quasars", "Interférométrie"],
  },
  {
    id: "spoutnik",
    name: "Spoutnik et l'ère spatiale",
    birthYear: 1957,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sputnik_asm.jpg?width=220",
    nationality: "Soviétique",
    movement: "Conquête spatiale",
    family: "Ère spatiale & astrophysique",
    itemType: "topic",
    summary: `Le 4 octobre 1957, l'URSS lance Spoutnik 1, premier satellite artificiel. Son "bip-bip" radio, capté dans le monde entier, inaugure l'ère spatiale et choque les États-Unis, déclenchant la course à l'espace.

Spoutnik 2 emporte la chienne Laïka un mois plus tard. Youri Gagarine devient le premier homme dans l'espace (1961). La compétition soviéto-américaine culmine avec Apollo 11 (1969) : Neil Armstrong marche sur la Lune.

Les sondes explorent le système solaire : Mariner, Voyager, Viking, Cassini révèlent les planètes, leurs lunes, les confins du système solaire. Voyager 1 est aujourd'hui l'objet humain le plus lointain.

L'astronomie spatiale s'affranchit de l'atmosphère : Hubble, Chandra, James Webb observent l'univers dans toutes les longueurs d'onde, des origines aux confins.`,
    mainWorks: ["Spoutnik 1", "Gagarine", "Apollo 11", "Voyager", "Télescope Hubble"],
    keyIdeas: ["Satellite", "Course à l'espace", "Exploration", "Homme sur la Lune"],
  },
  {
    id: "pulsars",
    name: "Pulsars et étoiles à neutrons",
    birthYear: 1967,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Crab_Nebula.jpg?width=220",
    nationality: "Britannique",
    movement: "Astrophysique",
    family: "Ère spatiale & astrophysique",
    itemType: "topic",
    summary: `Jocelyn Bell découvre les pulsars en 1967 : des signaux radio extrêmement réguliers, surnommés d'abord "LGM" (Little Green Men). Ce sont en fait des étoiles à neutrons en rotation rapide, résidus d'explosions de supernovae.

Une étoile à neutrons concentre la masse du Soleil dans une sphère de 20 km. La densité y atteint celle du noyau atomique. Le pulsar de la nébuleuse du Crabe tourne 30 fois par seconde.

Les pulsars sont des horloges cosmiques d'une précision extrême. Les pulsars binaires confirment la relativité générale et l'existence des ondes gravitationnelles. Le prix Nobel 1974 récompense cette découverte (mais pas Bell, simple doctorante).

En 2017, la fusion de deux étoiles à neutrons est observée en ondes gravitationnelles et en lumière : naissance de l'astronomie multi-messagers.`,
    mainWorks: ["Découverte de Bell", "Pulsar du Crabe", "Pulsars millisecondes", "Fusion d'étoiles à neutrons"],
    keyIdeas: ["Étoile à neutrons", "Rotation rapide", "Horloges cosmiques", "Relativité"],
  },
  {
    id: "trous-noirs",
    name: "Trous noirs",
    birthYear: 1971,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Black_hole_-_Messier_87_crop_max_res.jpg?width=220",
    nationality: "International",
    movement: "Astrophysique",
    family: "Ère spatiale & astrophysique",
    itemType: "topic",
    summary: `Les trous noirs, prédits par la relativité générale, sont des régions de l'espace d'où rien ne peut s'échapper, pas même la lumière. Leur existence est longtemps débattue jusqu'aux premières détections indirectes dans les années 1970.

Cygnus X-1, identifié en 1971, est le premier candidat trou noir : une source X intense associée à une étoile orbitant un objet invisible très massif. On découvre ensuite des trous noirs supermassifs au centre des galaxies.

Stephen Hawking prédit en 1974 que les trous noirs émettent un rayonnement et peuvent s'évaporer. La thermodynamique des trous noirs relie gravitation, mécanique quantique et information.

En 2019, l'Event Horizon Telescope photographie le trou noir de M87 : une ombre de 6,5 milliards de masses solaires. En 2022, celui de notre Galaxie, Sagittarius A*, est à son tour imagé.`,
    mainWorks: ["Cygnus X-1", "Rayonnement de Hawking", "Trous noirs supermassifs", "Image de M87*"],
    keyIdeas: ["Singularité", "Horizon des événements", "Information", "Relativité"],
  },
  {
    id: "exoplanetes",
    name: "Exoplanètes",
    birthYear: 1995,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/2M1207b_-_First_image_of_an_exoplanet.jpg/330px-2M1207b_-_First_image_of_an_exoplanet.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Suisse",
    movement: "Astronomie contemporaine",
    family: "Astronomie contemporaine",
    itemType: "topic",
    summary: `Michel Mayor et Didier Queloz découvrent en 1995 la première exoplanète autour d'une étoile semblable au Soleil : 51 Pegasi b, une "Jupiter chaude" orbitant en 4 jours. Cette découverte, couronnée par le Nobel 2019, ouvre un nouveau champ de l'astronomie.

Les méthodes de détection se multiplient : vitesses radiales, transits (Kepler, TESS), imagerie directe. On connaît aujourd'hui plus de 5 000 exoplanètes confirmées, avec une immense diversité de tailles, masses, orbites.

La quête se concentre sur les planètes rocheuses dans la "zone habitable", où l'eau liquide peut exister. Kepler-452b, TRAPPIST-1, Proxima b sont des candidates prometteuses. La vie ailleurs devient une question scientifique.

Le télescope James Webb, lancé en 2021, analyse les atmosphères d'exoplanètes, cherchant des biosignatures. La réponse à "Sommes-nous seuls ?" est peut-être pour bientôt.`,
    mainWorks: ["51 Pegasi b", "Mission Kepler", "TRAPPIST-1", "Télescope James Webb"],
    keyIdeas: ["Planètes extrasolaires", "Zone habitable", "Vie ailleurs", "Détection"],
  },
  {
    id: "ondes-gravitationnelles",
    name: "Ondes gravitationnelles",
    birthYear: 2015,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/LIGO_measurement_of_gravitational_waves.svg?width=220",
    nationality: "Américain",
    movement: "Physique contemporaine",
    family: "Astronomie contemporaine",
    itemType: "topic",
    summary: `Le 14 septembre 2015, les détecteurs LIGO captent pour la première fois des ondes gravitationnelles, prédites par Einstein un siècle plus tôt. Elles proviennent de la fusion de deux trous noirs à 1,3 milliard d'années-lumière.

Les ondes gravitationnelles sont des ondulations de l'espace-temps, produites par l'accélération de masses. Les détecteurs LIGO et Virgo mesurent des déformations infimes : un millième de la taille d'un proton sur 4 km.

Cette détection ouvre une nouvelle astronomie : on "entend" les trous noirs fusionner, les étoiles à neutrons spiraler. En 2017, une fusion d'étoiles à neutrons est observée simultanément en ondes gravitationnelles et en lumière.

Le prix Nobel 2017 récompense cette découverte. Des détecteurs plus sensibles, puis un observatoire spatial (LISA), permettront d'observer les trous noirs supermassifs et les échos du Big Bang.`,
    mainWorks: ["Détection LIGO 2015", "Fusion d'étoiles à neutrons 2017", "Détecteurs Virgo, KAGRA", "Projet LISA"],
    keyIdeas: ["Espace-temps", "Trous noirs", "Multi-messagers", "Einstein confirmé"],
  },
  {
    id: "james-webb",
    name: "Télescope James Webb",
    birthYear: 2021,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/James_Webb_Space_Telescope_Mirror37.jpg?width=220",
    nationality: "International",
    movement: "Astronomie contemporaine",
    family: "Astronomie contemporaine",
    itemType: "topic",
    summary: `Le télescope spatial James Webb, lancé le 25 décembre 2021, est le plus puissant jamais construit. Son miroir de 6,5 m et ses instruments infrarouges observent les premières galaxies, les atmosphères d'exoplanètes, la formation des étoiles.

Placé à 1,5 million de km de la Terre, au point de Lagrange L2, il est protégé du Soleil par un pare-soleil grand comme un court de tennis. Sa température descend à -233°C pour capter l'infrarouge.

Ses premières images (juillet 2022) révèlent des galaxies formées quelques centaines de millions d'années après le Big Bang, plus tôt que prévu. La chimie des atmosphères exoplanétaires livre ses premiers secrets.

Le JWST transforme notre vision de l'univers. Successeur de Hubble, il repoussera les frontières de la connaissance pendant au moins 20 ans.`,
    mainWorks: ["Premières images 2022", "Galaxies lointaines", "Atmosphères d'exoplanètes", "Piliers de la création"],
    keyIdeas: ["Infrarouge", "Premières galaxies", "Exoplanètes", "Successeur de Hubble"],
  },
];
