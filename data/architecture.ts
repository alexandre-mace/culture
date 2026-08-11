export interface ArchitecturalStyle {
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

export const architecturalStyles: ArchitecturalStyle[] = [
  {
    id: "egyptien",
    name: "Architecture égyptienne",
    birthYear: -2700,
    deathYear: -30,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/330px-All_Gizah_Pyramids.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Égyptien",
    movement: "Antiquité",
    family: "Antiquité",
    summary: `L'architecture égyptienne antique se développe sur près de trois millénaires, des premières dynasties à la conquête romaine. Elle est indissociable de la religion et du pouvoir pharaonique, construisant pour l'éternité plutôt que pour le présent.

Les pyramides de Gizeh, construites vers 2500 av. J.-C., restent les monuments les plus emblématiques. La Grande Pyramide de Khéops, haute de 146 mètres, demeure la plus grande structure en pierre jamais construite. Ces tombeaux royaux témoignent d'une maîtrise technique stupéfiante.

Les temples, comme celui de Karnak ou d'Abou Simbel, suivent un plan axial strict : pylônes, cours, salles hypostyles aux colonnes massives, sanctuaire. Les murs sont couverts de hiéroglyphes et de reliefs peints célébrant les dieux et les pharaons.

L'architecture égyptienne influence toutes les civilisations méditerranéennes et connaît des revivals au XIXe siècle (égyptomanie) puis au XXe siècle (Art Déco). Ses formes monumentales et son sens de l'éternité continuent de fasciner.`,
    mainWorks: ["Pyramides de Gizeh", "Temple de Karnak", "Abou Simbel", "Temple de Louxor", "Vallée des Rois"],
    keyIdeas: ["Monumentalité", "Éternité", "Axialité", "Pierre de taille"],
  },
  {
    id: "grec",
    name: "Architecture grecque",
    birthYear: -700,
    deathYear: -31,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Parthenon_in_Athens.jpg?width=220",
    nationality: "Grec",
    movement: "Antiquité",
    family: "Antiquité",
    summary: `L'architecture grecque antique pose les fondements de toute l'architecture occidentale. Elle développe un système d'ordres - dorique, ionique, corinthien - qui codifie les proportions et les ornements des colonnes et entablements.

Le temple grec, demeure du dieu, atteint sa perfection avec le Parthénon d'Athènes (447-432 av. J.-C.). Ses architectes Ictinos et Callicratès, et le sculpteur Phidias, créent un modèle d'harmonie et de proportion que l'Occident ne cessera d'imiter.

Les Grecs inventent aussi le théâtre en plein air, l'agora comme espace public, le stade et le gymnase. L'urbanisme hippodamien organise les villes en damier régulier. L'architecture devient un art au service de la cité démocratique.

L'influence grecque s'étend avec les conquêtes d'Alexandre, créant une architecture hellénistique monumentale. Rome reprendra cet héritage, le classicisme et le néoclassicisme le perpétueront jusqu'à nos jours.`,
    mainWorks: ["Parthénon", "Érechthéion", "Temple de Zeus à Olympie", "Théâtre d'Épidaure", "Mausolée d'Halicarnasse"],
    keyIdeas: ["Ordres", "Proportions", "Harmonie", "Temple"],
  },
  {
    id: "romain",
    name: "Architecture romaine",
    birthYear: -509,
    deathYear: 476,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Colosseum_in_Rome-April_2007-1-_copie_2B.jpg?width=220",
    nationality: "Romain",
    movement: "Antiquité",
    family: "Antiquité",
    summary: `L'architecture romaine hérite des Grecs mais développe des innovations majeures : l'arc, la voûte, le dôme, le béton. Ces techniques permettent de couvrir des espaces immenses et de construire des infrastructures à l'échelle d'un empire.

Le Colisée (80 ap. J.-C.) peut accueillir 50 000 spectateurs. Le Panthéon (125 ap. J.-C.) possède un dôme de 43 mètres de diamètre, record inégalé pendant 1300 ans. Les aqueducs, comme le Pont du Gard, amènent l'eau sur des dizaines de kilomètres.

Les Romains inventent aussi les thermes, les basiliques, les arcs de triomphe, les forums. Leur urbanisme quadrille l'empire de villes planifiées. Les routes, les ponts, les ports témoignent d'une maîtrise de l'ingénierie sans précédent.

L'architecture romaine influence directement l'art roman, la Renaissance, le néoclassicisme. Le vocabulaire architectural romain - arc, voûte, colonne, fronton - reste le fondement du langage architectural occidental.`,
    mainWorks: ["Colisée", "Panthéon", "Pont du Gard", "Forum romain", "Thermes de Caracalla"],
    keyIdeas: ["Arc et voûte", "Béton", "Ingénierie", "Urbanisme"],
  },
  {
    id: "byzantin",
    name: "Architecture byzantine",
    birthYear: 330,
    deathYear: 1453,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hagia_Sophia_Mars_2013.jpg?width=220",
    nationality: "Byzantin",
    movement: "Moyen Âge",
    family: "Moyen Âge",
    summary: `L'architecture byzantine naît avec la fondation de Constantinople en 330 et s'épanouit pendant plus d'un millénaire. Elle fusionne les traditions romaines et orientales pour créer un style original, centré sur le dôme et la décoration intérieure.

Sainte-Sophie de Constantinople (537), chef-d'œuvre de l'empereur Justinien, reste le monument emblématique. Son dôme de 31 mètres de diamètre semble flotter sur un anneau de fenêtres, créant une impression de lumière divine.

L'architecture byzantine privilégie l'espace intérieur sur l'extérieur. Les mosaïques à fond d'or, les marbres polychromes, les icônes créent un univers céleste. Le plan en croix grecque inscrite dans un carré devient canonique.

L'influence byzantine s'étend à la Russie (Saint-Basile de Moscou), aux Balkans, à Venise (Saint-Marc). La conquête ottomane transforme les églises en mosquées mais conserve le modèle architectural, que Sinan portera à sa perfection.`,
    mainWorks: ["Sainte-Sophie", "Saint-Vital de Ravenne", "Saint-Marc de Venise", "Monastères du Mont Athos", "Églises de Mistra"],
    keyIdeas: ["Dôme sur pendentifs", "Mosaïques", "Lumière", "Croix grecque"],
  },
  {
    id: "roman",
    name: "Architecture romane",
    birthYear: 950,
    deathYear: 1200,
    nationality: "Européen",
    movement: "Moyen Âge",
    family: "Moyen Âge",
    summary: `L'architecture romane se développe en Europe occidentale à partir du Xe siècle, première expression artistique commune de la chrétienté latine. Elle reprend les techniques romaines de la voûte en berceau et du pilier massif.

Les églises romanes, souvent abbatiales, suivent un plan basilical avec nef, bas-côtés, transept et chevet à absidioles. Les murs épais, percés de petites fenêtres, créent une atmosphère de recueillement. La sculpture se déploie aux portails et chapiteaux.

Les grandes abbayes - Cluny, Vézelay, Saint-Sernin de Toulouse - sont les foyers de ce renouveau. Le chemin de Saint-Jacques-de-Compostelle diffuse le style roman à travers l'Europe. Chaque région développe ses variantes.

L'art roman invente le tympan sculpté, le cloître, le déambulatoire. Sa robustesse et sa spiritualité inspirent un renouveau au XIXe siècle (néo-roman) et continuent d'émouvoir par leur force primitive.`,
    mainWorks: ["Abbaye de Cluny", "Basilique de Vézelay", "Saint-Sernin de Toulouse", "Cathédrale de Pise", "Durham Cathedral"],
    keyIdeas: ["Voûte en berceau", "Murs épais", "Sculpture", "Abbaye"],
  },
  {
    id: "gothique",
    name: "Architecture gothique",
    birthYear: 1140,
    deathYear: 1500,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cath%C3%A9drale_Notre-Dame_de_Paris_-_12.jpg?width=220",
    nationality: "Français / Européen",
    movement: "Moyen Âge",
    family: "Moyen Âge",
    summary: `L'architecture gothique naît en Île-de-France au XIIe siècle avec la basilique de Saint-Denis (1140). L'abbé Suger veut créer une architecture de lumière, image de la Jérusalem céleste. L'arc brisé, la voûte d'ogives et l'arc-boutant permettent de percer les murs d'immenses vitraux.

Les cathédrales gothiques atteignent des hauteurs vertigineuses : 37 mètres sous voûte à Notre-Dame de Paris, 42 mètres à Amiens, 48 mètres à Beauvais qui s'effondre. C'est une course vers le ciel, une prouesse technique et spirituelle.

Le gothique rayonnant (XIIIe siècle) puis flamboyant (XVe siècle) portent l'ornementation à son paroxysme. Les façades se couvrent de sculptures, les vitraux de la Sainte-Chapelle transforment l'espace en lanterne. L'architecture civile adopte aussi le style.

Le gothique se répand dans toute l'Europe, s'adaptant aux traditions locales. Méprisé à la Renaissance qui lui donne son nom (art des Goths, barbares), il est réhabilité au XIXe siècle par Viollet-le-Duc et les romantiques.`,
    mainWorks: ["Notre-Dame de Paris", "Cathédrale de Chartres", "Sainte-Chapelle", "Cathédrale de Cologne", "Cathédrale de Milan"],
    keyIdeas: ["Arc brisé", "Voûte d'ogives", "Lumière", "Vitraux"],
  },
  {
    id: "renaissance",
    name: "Architecture Renaissance",
    birthYear: 1420,
    deathYear: 1600,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Santa_Maria_del_Fiore.jpg?width=220",
    nationality: "Italien",
    movement: "Renaissance",
    family: "Renaissance & classicisme",
    summary: `L'architecture de la Renaissance naît à Florence au XVe siècle, avec le dôme de Brunelleschi pour la cathédrale (1436). Elle redécouvre l'Antiquité romaine, étudiée dans les ruines et le traité de Vitruve, pour créer un langage nouveau.

Brunelleschi, Alberti, Bramante définissent les principes : proportions harmoniques, ordres classiques, perspective, plan centralisé. Le palais florentin, la villa, l'église à coupole deviennent des types nouveaux. L'architecte émerge comme artiste et intellectuel.

La Renaissance se répand en Europe au XVIe siècle. En France, les châteaux de la Loire mêlent tradition gothique et motifs italiens. Michel-Ange, au dôme de Saint-Pierre de Rome, pousse le classicisme vers une expressivité qui annonce le baroque.

La Renaissance fixe le vocabulaire architectural classique pour trois siècles : colonnes, pilastres, frontons, coupoles. Son idéal d'harmonie et de proportion reste une référence absolue de l'architecture occidentale.`,
    mainWorks: ["Dôme de Florence", "Saint-Pierre de Rome", "Villa Rotonda", "Château de Chambord", "Escorial"],
    keyIdeas: ["Antique", "Proportions", "Coupole", "Perspective"],
  },
  {
    id: "baroque",
    name: "Architecture baroque",
    birthYear: 1600,
    deathYear: 1750,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Trevi_Fountain,_Rome,_Italy_2_-_May_2007.jpg?width=220",
    nationality: "Italien / Européen",
    movement: "Baroque",
    family: "Renaissance & classicisme",
    summary: `L'architecture baroque naît à Rome après le Concile de Trente, instrument de la Contre-Réforme catholique. Elle cherche à émouvoir, à impressionner, à exprimer la puissance de l'Église et des monarchies absolues.

Bernin, Borromini, Pierre de Cortone transforment Rome. Les façades ondulent, les espaces se dilatent, la lumière devient matière dramatique. Saint-Pierre de Rome, avec sa colonnade, incarne la magnificence baroque.

Le baroque se répand en Europe avec des variantes nationales : churrigueresque en Espagne, rococo en Allemagne et Autriche, classicisme en France où Louis XIV impose une version disciplinée à Versailles. L'Amérique latine développe un baroque exubérant.

Le baroque invente l'urbanisme monumental : places royales, perspectives, fontaines. Il intègre architecture, sculpture, peinture dans un art total (Gesamtkunstwerk). Sa théâtralité sera rejetée par le néoclassicisme mais réhabilitée au XXe siècle.`,
    mainWorks: ["Place Saint-Pierre", "Château de Versailles", "Église Saint-Charles de Vienne", "Palais de Nymphenburg", "Églises de Prague"],
    keyIdeas: ["Mouvement", "Théâtralité", "Lumière", "Art total"],
  },
  {
    id: "neoclassique",
    name: "Architecture néoclassique",
    birthYear: 1750,
    deathYear: 1850,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Le_Panth%C3%A9on.jpg?width=220",
    nationality: "Européen / Américain",
    movement: "Néoclassicisme",
    family: "Renaissance & classicisme",
    summary: `L'architecture néoclassique réagit contre les excès du baroque et du rococo pour revenir à la pureté antique. Les découvertes de Pompéi et Herculanum, les écrits de Winckelmann nourrissent un retour aux sources grecques et romaines.

Le Panthéon de Paris (Soufflot, 1790), la Porte de Brandebourg à Berlin, le Capitole de Washington incarnent l'idéal néoclassique : colonnes, frontons, coupoles, formes géométriques pures. C'est l'architecture des Lumières, rationnelle et civique.

La Révolution française et Napoléon adoptent le néoclassicisme comme style officiel. L'Arc de Triomphe, la Madeleine à Paris témoignent de cette ambition impériale. Les États-Unis naissants choisissent ce style pour leurs institutions démocratiques.

Le néoclassicisme s'impose pour les bâtiments publics jusqu'au XXe siècle. Le style Beaux-Arts en prolonge l'esprit. Les régimes totalitaires du XXe siècle le détournent pour exprimer leur puissance.`,
    mainWorks: ["Panthéon de Paris", "Porte de Brandebourg", "British Museum", "Capitole de Washington", "Altes Museum Berlin"],
    keyIdeas: ["Retour à l'antique", "Raison", "Géométrie", "Civisme"],
  },
  {
    id: "art-nouveau-archi",
    name: "Art Nouveau",
    birthYear: 1890,
    deathYear: 1914,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Casa_Batllo_Overview_Barcelona_Spain_cut.jpg?width=220",
    nationality: "Européen",
    movement: "Belle Époque",
    family: "Modernité",
    summary: `L'Art Nouveau architectural rompt radicalement avec l'historicisme du XIXe siècle pour créer un style original, inspiré par les formes organiques de la nature. Courbes, arabesques, motifs végétaux et animaux envahissent façades et intérieurs.

Victor Horta à Bruxelles crée les premiers intérieurs Art Nouveau (Hôtel Tassel, 1893). Il utilise le fer apparent, courbe les structures, unifie architecture et décoration. Hector Guimard à Paris (entrées du métro), Antoni Gaudí à Barcelone poussent l'expressionnisme organique à l'extrême.

La Casa Batlló et la Sagrada Família de Gaudí défient toute catégorisation : os, écailles, grottes, forêts de pierre. À Vienne, Otto Wagner et la Sécession développent une version plus géométrique qui annonce le modernisme.

L'Art Nouveau décroît rapidement après 1910, jugé excessif et coûteux. Mais son ambition d'un art total et son refus de l'imitation historique préparent l'architecture moderne. Gaudí est aujourd'hui vénéré comme un génie visionnaire.`,
    mainWorks: ["Sagrada Família", "Casa Batlló", "Hôtel Tassel", "Métro de Paris (Guimard)", "Sécession de Vienne"],
    keyIdeas: ["Organique", "Courbes", "Art total", "Anti-historicisme"],
  },
  {
    id: "modernisme",
    name: "Architecture moderne",
    birthYear: 1920,
    deathYear: 1970,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Exterieur_overzicht_-_Utrecht_-_20323960_-_RCE.jpg/330px-Exterieur_overzicht_-_Utrecht_-_20323960_-_RCE.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "International",
    movement: "Modernisme",
    family: "Modernité",
    summary: `L'architecture moderne naît après la Première Guerre mondiale, portée par l'utopie d'un monde nouveau. Le Bauhaus en Allemagne, Le Corbusier en France, Mies van der Rohe, Frank Lloyd Wright définissent ses principes : fonctionnalisme, matériaux industriels, rejet de l'ornement.

Le Corbusier formule les "cinq points" : pilotis, toit-terrasse, plan libre, façade libre, fenêtre en bandeau. La Villa Savoye (1931) en est le manifeste. Mies van der Rohe pousse le minimalisme à l'extrême : "Less is more". Le verre et l'acier dominent.

Le Style International se répand après 1945. Les gratte-ciel de verre (Seagram Building) conquièrent les villes. L'urbanisme moderne (Chandigarh, Brasilia) prétend réorganiser la société. Le béton brut du brutalisme s'impose pour les équipements publics.

Critiquée dès les années 1960 pour son inhumanité et son uniformité, l'architecture moderne reste néanmoins le fondement de la pratique contemporaine. Ses icônes sont aujourd'hui classées au patrimoine mondial.`,
    mainWorks: ["Villa Savoye", "Seagram Building", "Fallingwater", "Cité Radieuse", "Brasilia"],
    keyIdeas: ["Fonctionnalisme", "Verre et acier", "Plan libre", "Less is more"],
  },
  {
    id: "brutalisme",
    name: "Brutalisme",
    birthYear: 1950,
    deathYear: 1980,
    nationality: "International",
    movement: "Modernisme tardif",
    family: "Modernité",
    summary: `Le brutalisme tire son nom du "béton brut" laissé apparent, sans revêtement. Né en Grande-Bretagne dans les années 1950 (Alison et Peter Smithson), il se répand pour les équipements publics : écoles, universités, logements sociaux, centres culturels.

Le Corbusier avec la Cité Radieuse de Marseille (1952) inspire le mouvement. Le béton coffré conserve les traces du coffrage en bois. Les formes sont massives, sculpturales, expressives. Le brutalisme refuse la séduction pour affirmer une honnêteté des matériaux.

Les grandes universités américaines (Yale, Boston), le Barbican à Londres, l'Habitat 67 à Montréal témoignent de l'ambition brutaliste. L'architecture soviétique et yougoslave adopte ce langage monumental. Au Japon, Kenzo Tange développe un métabolisme brutaliste.

Longtemps décrié comme inhumain et laid, le brutalisme connaît une réhabilitation depuis les années 2000. Ses bâtiments menacés sont défendus, photographiés, célébrés pour leur force sculpturale et leur utopie sociale.`,
    mainWorks: ["Cité Radieuse", "Barbican Centre", "Habitat 67", "Centre Georges Pompidou", "National Theatre Londres"],
    keyIdeas: ["Béton brut", "Monumentalité", "Honnêteté", "Social"],
  },
  {
    id: "postmoderne",
    name: "Architecture postmoderne",
    birthYear: 1970,
    deathYear: 2000,
    nationality: "International",
    movement: "Postmodernisme",
    family: "Contemporain",
    summary: `L'architecture postmoderne réagit contre le modernisme jugé froid et dogmatique. Robert Venturi proclame "Less is a bore" et réhabilite l'ornement, la couleur, les références historiques. "Learning from Las Vegas" (1972) célèbre l'architecture populaire et commerciale.

Le AT&T Building de Philip Johnson à New York (1984), gratte-ciel surmonté d'un fronton Chippendale, devient l'icône du mouvement. Michael Graves, Charles Moore, Ricardo Bofill mélangent les styles historiques avec ironie et exubérance.

Le postmodernisme retrouve la façade comme surface décorative, le contexte urbain, la mémoire des lieux. Les Espaces d'Abraxas de Bofill à Marne-la-Vallée revisitent le classicisme pour le logement social. Les villes nouvelles s'ornent de colonnes et de frontons.

Critiqué pour sa superficialité et son historicisme de pacotille, le postmodernisme décline dans les années 1990. Mais son attention au contexte, à l'usager, à la signification influence durablement l'architecture contemporaine.`,
    mainWorks: ["AT&T Building", "Piazza d'Italia", "Espaces d'Abraxas", "Portland Building", "Neue Staatsgalerie Stuttgart"],
    keyIdeas: ["Citation historique", "Ironie", "Ornement", "Contexte"],
  },
  {
    id: "deconstructivisme",
    name: "Déconstructivisme",
    birthYear: 1988,
    deathYear: 2010,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Guggenheim-bilbao-jan05.jpg?width=220",
    nationality: "International",
    movement: "Contemporain",
    family: "Contemporain",
    summary: `Le déconstructivisme émerge avec l'exposition du MoMA en 1988, regroupant Gehry, Libeskind, Hadid, Coop Himmelb(l)au, Eisenman, Koolhaas, Tschumi. Ces architectes fragmentent les formes, disloquent les volumes, défient les conventions structurelles.

Le musée Guggenheim de Bilbao (Frank Gehry, 1997) devient l'icône du mouvement et un phénomène urbanistique : "l'effet Bilbao". Ses formes titanesques couvertes de titane, impossibles sans logiciels de conception 3D, font du musée une sculpture habitable.

Zaha Hadid développe des formes fluides et dynamiques (Centre Heydar-Aliyev). Daniel Libeskind crée des espaces anguleux et traumatiques (Musée juif de Berlin). Rem Koolhaas théorise et construit un urbanisme de la congestion (CCTV Beijing).

Le déconstructivisme, coûteux et spectaculaire, est critiqué pour son formalisme déconnecté des usages. Mais il a libéré l'architecture des contraintes orthogonales et ouvert la voie au paramétricisme numérique contemporain.`,
    mainWorks: ["Guggenheim Bilbao", "Musée juif de Berlin", "Centre Heydar-Aliyev", "Maison dansante Prague", "CCTV Beijing"],
    keyIdeas: ["Fragmentation", "Numérique", "Spectacle", "Transgression"],
  },
  {
    id: "durable",
    name: "Architecture durable",
    birthYear: 2000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/765px-Maisonpassive_section_fr.jpg/330px-765px-Maisonpassive_section_fr.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "International",
    movement: "Contemporain",
    family: "Contemporain",
    summary: `L'architecture durable répond à l'urgence climatique en repensant la conception, les matériaux, l'énergie. Elle vise la neutralité carbone, l'efficacité énergétique, le bien-être des usagers, l'intégration dans les écosystèmes.

Les bâtiments à énergie positive produisent plus d'énergie qu'ils n'en consomment. Les matériaux biosourcés (bois, paille, terre) remplacent le béton. La ventilation naturelle, les toitures végétalisées, la récupération des eaux redéfinissent le confort.

Le Bosco Verticale de Milan (Stefano Boeri, 2014), tours couvertes de forêts, incarne cette ambition. L'agence danoise BIG, l'Autrichien Baumschlager Eberle, le Japonais Shigeru Ban (carton, bambou) explorent des voies diverses vers la durabilité.

L'architecture durable n'est plus une niche mais devient la norme. Les réglementations imposent des standards croissants. Le défi est de concilier ambition environnementale, qualité architecturale et accessibilité économique.`,
    mainWorks: ["Bosco Verticale", "Centre Pompidou Metz", "Bullitt Center Seattle", "Edge Amsterdam", "Maisons passives"],
    keyIdeas: ["Neutralité carbone", "Matériaux biosourcés", "Énergie positive", "Biodiversité"],
  },
];
