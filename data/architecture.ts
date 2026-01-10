export interface ArchitecturalStyle {
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

export const architecturalStyles: ArchitecturalStyle[] = [
  {
    id: "egyptien",
    name: "Architecture egyptienne",
    birthYear: -2700,
    deathYear: -30,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Giza_pyramid_complex_(edited).jpg?width=220",
    nationality: "Egyptien",
    movement: "Antiquite",
    summary: `L'architecture egyptienne antique se developpe sur pres de trois millenaires, des premieres dynasties a la conquete romaine. Elle est indissociable de la religion et du pouvoir pharaonique, construisant pour l'eternite plutot que pour le present.

Les pyramides de Gizeh, construites vers 2500 av. J.-C., restent les monuments les plus emblematiques. La Grande Pyramide de Kheops, haute de 146 metres, demeure la plus grande structure en pierre jamais construite. Ces tombeaux royaux temoignent d'une maitrise technique stupefiente.

Les temples, comme celui de Karnak ou d'Abou Simbel, suivent un plan axial strict : pylones, cours, salles hypostyles aux colonnes massives, sanctuaire. Les murs sont couverts de hieroglyphes et de reliefs peints celebrant les dieux et les pharaons.

L'architecture egyptienne influence toutes les civilisations mediterraneennes et connait des revivals au XIXe siecle (egyptomanie) puis au XXe siecle (Art Deco). Ses formes monumentales et son sens de l'eternite continuent de fasciner.`,
    mainWorks: ["Pyramides de Gizeh", "Temple de Karnak", "Abou Simbel", "Temple de Louxor", "Vallee des Rois"],
    keyIdeas: ["Monumentalite", "Eternite", "Axialite", "Pierre de taille"],
  },
  {
    id: "grec",
    name: "Architecture grecque",
    birthYear: -700,
    deathYear: -31,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Parthenon_in_Athens.jpg?width=220",
    nationality: "Grec",
    movement: "Antiquite",
    summary: `L'architecture grecque antique pose les fondements de toute l'architecture occidentale. Elle developpe un systeme d'ordres - dorique, ionique, corinthien - qui codifie les proportions et les ornements des colonnes et entablements.

Le temple grec, demeure du dieu, atteint sa perfection avec le Parthenon d'Athenes (447-432 av. J.-C.). Ses architectes Ictinos et Callicrates, et le sculpteur Phidias, creent un modele d'harmonie et de proportion que l'Occident ne cessera d'imiter.

Les Grecs inventent aussi le theatre en plein air, l'agora comme espace public, le stade et le gymnase. L'urbanisme hippodamien organise les villes en damier regulier. L'architecture devient un art au service de la cite democratique.

L'influence grecque s'etend avec les conquetes d'Alexandre, creant une architecture hellenistique monumentale. Rome reprendra cet heritage, le classicisme et le neoclassicisme le perpetueront jusqu'a nos jours.`,
    mainWorks: ["Parthenon", "Erechtheion", "Temple de Zeus a Olympie", "Theatre d'Epidaure", "Mausolee d'Halicarnasse"],
    keyIdeas: ["Ordres", "Proportions", "Harmonie", "Temple"],
  },
  {
    id: "romain",
    name: "Architecture romaine",
    birthYear: -509,
    deathYear: 476,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Colosseum_in_Rome-April_2007-1-_copie_2B.jpg?width=220",
    nationality: "Romain",
    movement: "Antiquite",
    summary: `L'architecture romaine herite des Grecs mais developpe des innovations majeures : l'arc, la voute, le dome, le beton. Ces techniques permettent de couvrir des espaces immenses et de construire des infrastructures a l'echelle d'un empire.

Le Colisee (80 ap. J.-C.) peut accueillir 50 000 spectateurs. Le Pantheon (125 ap. J.-C.) possede un dome de 43 metres de diametre, record inegale pendant 1300 ans. Les aqueducs, comme le Pont du Gard, amenent l'eau sur des dizaines de kilometres.

Les Romains inventent aussi les thermes, les basiliques, les arcs de triomphe, les forums. Leur urbanisme quadrille l'empire de villes planifiees. Les routes, les ponts, les ports temoignent d'une maitrise de l'ingenierie sans precedent.

L'architecture romaine influence directement l'art roman, la Renaissance, le neoclassicisme. Le vocabulaire architectural romain - arc, voute, colonne, fronton - reste le fondement du langage architectural occidental.`,
    mainWorks: ["Colisee", "Pantheon", "Pont du Gard", "Forum romain", "Thermes de Caracalla"],
    keyIdeas: ["Arc et voute", "Beton", "Ingenierie", "Urbanisme"],
  },
  {
    id: "byzantin",
    name: "Architecture byzantine",
    birthYear: 330,
    deathYear: 1453,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hagia_Sophia_Mars_2013.jpg?width=220",
    nationality: "Byzantin",
    movement: "Moyen Age",
    summary: `L'architecture byzantine nait avec la fondation de Constantinople en 330 et s'epanouit pendant plus d'un millenaire. Elle fusionne les traditions romaines et orientales pour creer un style original, centre sur le dome et la decoration interieure.

Sainte-Sophie de Constantinople (537), chef-d'oeuvre de l'empereur Justinien, reste le monument emblematique. Son dome de 31 metres de diametre semble flotter sur un anneau de fenetres, creant une impression de lumiere divine.

L'architecture byzantine privilegie l'espace interieur sur l'exterieur. Les mosaiques a fond d'or, les marbres polychromes, les icones creent un univers celeste. Le plan en croix grecque inscrite dans un carre devient canonique.

L'influence byzantine s'etend a la Russie (Saint-Basile de Moscou), aux Balkans, a Venise (Saint-Marc). La conquete ottomane transforme les eglises en mosquees mais conserve le modele architectural, que Sinan portera a sa perfection.`,
    mainWorks: ["Sainte-Sophie", "Saint-Vital de Ravenne", "Saint-Marc de Venise", "Monasteres du Mont Athos", "Eglises de Mistra"],
    keyIdeas: ["Dome sur pendentifs", "Mosaiques", "Lumiere", "Croix grecque"],
  },
  {
    id: "roman",
    name: "Architecture romane",
    birthYear: 950,
    deathYear: 1200,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/V%C3%A9zelay_Narthex_Tympan_central.jpg?width=220",
    nationality: "Europeen",
    movement: "Moyen Age",
    summary: `L'architecture romane se developpe en Europe occidentale a partir du Xe siecle, premiere expression artistique commune de la chretiente latine. Elle reprend les techniques romaines de la voute en berceau et du pilier massif.

Les eglises romanes, souvent abbatiales, suivent un plan basilical avec nef, bas-cotes, transept et chevet a absidioles. Les murs epais, perces de petites fenetres, creent une atmosphere de recueillement. La sculpture se deploie aux portails et chapiteaux.

Les grandes abbayes - Cluny, Vezelay, Saint-Sernin de Toulouse - sont les foyers de ce renouveau. Le chemin de Saint-Jacques-de-Compostelle diffuse le style roman a travers l'Europe. Chaque region developpe ses variantes.

L'art roman invente le tympan sculpte, le cloitre, le deambulatoire. Sa robustesse et sa spiritualite inspirent un renouveau au XIXe siecle (neo-roman) et continuent d'emouvoir par leur force primitive.`,
    mainWorks: ["Abbaye de Cluny", "Basilique de Vezelay", "Saint-Sernin de Toulouse", "Cathedrale de Pise", "Durham Cathedral"],
    keyIdeas: ["Voute en berceau", "Murs epais", "Sculpture", "Abbaye"],
  },
  {
    id: "gothique",
    name: "Architecture gothique",
    birthYear: 1140,
    deathYear: 1500,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cath%C3%A9drale_Notre-Dame_de_Paris_-_12.jpg?width=220",
    nationality: "Francais / Europeen",
    movement: "Moyen Age",
    summary: `L'architecture gothique nait en Ile-de-France au XIIe siecle avec la basilique de Saint-Denis (1140). L'abbe Suger veut creer une architecture de lumiere, image de la Jerusalem celeste. L'arc brise, la voute d'ogives et l'arc-boutant permettent de percer les murs d'immenses vitraux.

Les cathedrales gothiques atteignent des hauteurs vertigineuses : 37 metres sous voute a Notre-Dame de Paris, 42 metres a Amiens, 48 metres a Beauvais qui s'effondre. C'est une course vers le ciel, une prouesse technique et spirituelle.

Le gothique rayonnant (XIIIe siecle) puis flamboyant (XVe siecle) portent l'ornementation a son paroxysme. Les facades se couvrent de sculptures, les vitraux de la Sainte-Chapelle transforment l'espace en lanterne. L'architecture civile adopte aussi le style.

Le gothique se repand dans toute l'Europe, s'adaptant aux traditions locales. Meprise a la Renaissance qui lui donne son nom (art des Goths, barbares), il est rehabilite au XIXe siecle par Viollet-le-Duc et les romantiques.`,
    mainWorks: ["Notre-Dame de Paris", "Cathedrale de Chartres", "Sainte-Chapelle", "Cathedrale de Cologne", "Cathedrale de Milan"],
    keyIdeas: ["Arc brise", "Voute d'ogives", "Lumiere", "Vitraux"],
  },
  {
    id: "renaissance",
    name: "Architecture Renaissance",
    birthYear: 1420,
    deathYear: 1600,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Santa_Maria_del_Fiore.jpg?width=220",
    nationality: "Italien",
    movement: "Renaissance",
    summary: `L'architecture de la Renaissance nait a Florence au XVe siecle, avec le dome de Brunelleschi pour la cathedrale (1436). Elle redecouvre l'Antiquite romaine, etudiee dans les ruines et le traite de Vitruve, pour creer un langage nouveau.

Brunelleschi, Alberti, Bramante definissent les principes : proportions harmoniques, ordres classiques, perspective, plan centralise. Le palais florentin, la villa, l'eglise a coupole deviennent des types nouveaux. L'architecte emerge comme artiste et intellectuel.

La Renaissance se repand en Europe au XVIe siecle. En France, les chateaux de la Loire melent tradition gothique et motifs italiens. Michel-Ange, au dome de Saint-Pierre de Rome, pousse le classicisme vers une expressivite qui annonce le baroque.

La Renaissance fixe le vocabulaire architectural classique pour trois siecles : colonnes, pilastres, frontons, coupoles. Son ideal d'harmonie et de proportion reste une reference absolue de l'architecture occidentale.`,
    mainWorks: ["Dome de Florence", "Saint-Pierre de Rome", "Villa Rotonda", "Chateau de Chambord", "Escorial"],
    keyIdeas: ["Antique", "Proportions", "Coupole", "Perspective"],
  },
  {
    id: "baroque",
    name: "Architecture baroque",
    birthYear: 1600,
    deathYear: 1750,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Trevi_Fountain,_Rome,_Italy_2_-_May_2007.jpg?width=220",
    nationality: "Italien / Europeen",
    movement: "Baroque",
    summary: `L'architecture baroque nait a Rome apres le Concile de Trente, instrument de la Contre-Reforme catholique. Elle cherche a emouvoir, a impressionner, a exprimer la puissance de l'Eglise et des monarchies absolues.

Bernin, Borromini, Pierre de Cortone transforment Rome. Les facades ondulent, les espaces se dilatent, la lumiere devient matiere dramatique. Saint-Pierre de Rome, avec sa colonnade, incarne la magnificence baroque.

Le baroque se repand en Europe avec des variantes nationales : churrigueresque en Espagne, rococo en Allemagne et Autriche, classicisme en France ou Louis XIV impose une version disciplinee a Versailles. L'Amerique latine developpe un baroque exuberant.

Le baroque invente l'urbanisme monumental : places royales, perspectives, fontaines. Il integre architecture, sculpture, peinture dans un art total (Gesamtkunstwerk). Sa theatralite sera rejetee par le neoclassicisme mais rehabilitee au XXe siecle.`,
    mainWorks: ["Place Saint-Pierre", "Chateau de Versailles", "Eglise Saint-Charles de Vienne", "Palais de Nymphenburg", "Eglises de Prague"],
    keyIdeas: ["Mouvement", "Theatralite", "Lumiere", "Art total"],
  },
  {
    id: "neoclassique",
    name: "Architecture neoclassique",
    birthYear: 1750,
    deathYear: 1850,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Le_Panth%C3%A9on.jpg?width=220",
    nationality: "Europeen / Americain",
    movement: "Neoclassicisme",
    summary: `L'architecture neoclassique reagit contre les exces du baroque et du rococo pour revenir a la purete antique. Les decouvertes de Pompei et Herculanum, les ecrits de Winckelmann nourrissent un retour aux sources grecques et romaines.

Le Pantheon de Paris (Soufflot, 1790), la Porte de Brandebourg a Berlin, le Capitole de Washington incarnent l'ideal neoclassique : colonnes, frontons, coupoles, formes geometriques pures. C'est l'architecture des Lumieres, rationnelle et civique.

La Revolution francaise et Napoleon adoptent le neoclassicisme comme style officiel. L'Arc de Triomphe, la Madeleine a Paris temoignent de cette ambition imperiale. Les Etats-Unis naissants choisissent ce style pour leurs institutions democratiques.

Le neoclassicisme s'impose pour les batiments publics jusqu'au XXe siecle. Le style Beaux-Arts en prolonge l'esprit. Les regimes totalitaires du XXe siecle le detournent pour exprimer leur puissance.`,
    mainWorks: ["Pantheon de Paris", "Porte de Brandebourg", "British Museum", "Capitole de Washington", "Altes Museum Berlin"],
    keyIdeas: ["Retour a l'antique", "Raison", "Geometrie", "Civisme"],
  },
  {
    id: "art-nouveau-archi",
    name: "Art Nouveau",
    birthYear: 1890,
    deathYear: 1914,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Casa_Batllo_Overview_Barcelona_Spain_cut.jpg?width=220",
    nationality: "Europeen",
    movement: "Belle Epoque",
    summary: `L'Art Nouveau architectural rompt radicalement avec l'historicisme du XIXe siecle pour creer un style original, inspire par les formes organiques de la nature. Courbes, arabesques, motifs vegetaux et animaux envahissent facades et interieurs.

Victor Horta a Bruxelles cree les premiers intérieurs Art Nouveau (Hotel Tassel, 1893). Il utilise le fer apparent, courbe les structures, unifie architecture et decoration. Hector Guimard a Paris (entrees du metro), Antoni Gaudi a Barcelone poussent l'expressionnisme organique a l'extreme.

La Casa Batllo et la Sagrada Familia de Gaudi defient toute categorisation : os, ecailles, grottes, forets de pierre. A Vienne, Otto Wagner et la Secession developpent une version plus geometrique qui annonce le modernisme.

L'Art Nouveau decroit rapidement apres 1910, juge excessif et couteux. Mais son ambition d'un art total et son refus de l'imitation historique preparent l'architecture moderne. Gaudi est aujourd'hui venere comme un genie visionnaire.`,
    mainWorks: ["Sagrada Familia", "Casa Batllo", "Hotel Tassel", "Metro de Paris (Guimard)", "Secession de Vienne"],
    keyIdeas: ["Organique", "Courbes", "Art total", "Anti-historicisme"],
  },
  {
    id: "modernisme",
    name: "Architecture moderne",
    birthYear: 1920,
    deathYear: 1970,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/VillaSavoye.jpg?width=220",
    nationality: "International",
    movement: "Modernisme",
    summary: `L'architecture moderne nait apres la Premiere Guerre mondiale, portee par l'utopie d'un monde nouveau. Le Bauhaus en Allemagne, Le Corbusier en France, Mies van der Rohe, Frank Lloyd Wright definissent ses principes : fonctionnalisme, materiaux industriels, rejet de l'ornement.

Le Corbusier formule les "cinq points" : pilotis, toit-terrasse, plan libre, facade libre, fenetre en bandeau. La Villa Savoye (1931) en est le manifeste. Mies van der Rohe pousse le minimalisme a l'extreme : "Less is more". Le verre et l'acier dominent.

Le Style International se repand apres 1945. Les gratte-ciel de verre (Seagram Building) conquierent les villes. L'urbanisme moderne (Chandigarh, Brasilia) pretend reorganiser la societe. Le beton brut du brutalisme s'impose pour les equipements publics.

Critique des les annees 1960 pour son inhumanite et son uniformite, l'architecture moderne reste neanmoins le fondement de la pratique contemporaine. Ses icones sont aujourd'hui classees au patrimoine mondial.`,
    mainWorks: ["Villa Savoye", "Seagram Building", "Fallingwater", "Cite Radieuse", "Brasilia"],
    keyIdeas: ["Fonctionnalisme", "Verre et acier", "Plan libre", "Less is more"],
  },
  {
    id: "brutalisme",
    name: "Brutalisme",
    birthYear: 1950,
    deathYear: 1980,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Unitehab.jpg?width=220",
    nationality: "International",
    movement: "Modernisme tardif",
    summary: `Le brutalisme tire son nom du "beton brut" laisse apparent, sans revetement. Ne en Grande-Bretagne dans les annees 1950 (Alison et Peter Smithson), il se repand pour les equipements publics : ecoles, universites, logements sociaux, centres culturels.

Le Corbusier avec la Cite Radieuse de Marseille (1952) inspire le mouvement. Le beton coffre conserve les traces du coffrage en bois. Les formes sont massives, sculpturales, expressives. Le brutalisme refuse la seduction pour affirmer une honnetete des materiaux.

Les grandes universites americaines (Yale, Boston), le Barbican a Londres, l'habitat 67 a Montreal temoignent de l'ambition brutaliste. L'architecture sovietique et yougoslave adopte ce langage monumental. Au Japon, Kenzo Tange developpe un metabolisme brutaliste.

Longtemps decrie comme inhumain et laid, le brutalisme connait une rehabilitation depuis les annees 2000. Ses batiments menaces sont defendus, photographies, celebres pour leur force sculpturale et leur utopie sociale.`,
    mainWorks: ["Cite Radieuse", "Barbican Centre", "Habitat 67", "Centre Georges Pompidou", "National Theatre Londres"],
    keyIdeas: ["Beton brut", "Monumentalite", "Honnetete", "Social"],
  },
  {
    id: "postmoderne",
    name: "Architecture postmoderne",
    birthYear: 1970,
    deathYear: 2000,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/AT%26T_Building_%28Sony_Building%29.jpg?width=220",
    nationality: "International",
    movement: "Postmodernisme",
    summary: `L'architecture postmoderne reagit contre le modernisme juge froid et dogmatique. Robert Venturi proclame "Less is a bore" et rehabilite l'ornement, la couleur, les references historiques. "Learning from Las Vegas" (1972) celebre l'architecture populaire et commerciale.

Le AT&T Building de Philip Johnson a New York (1984), gratte-ciel surmonte d'un fronton Chippendale, devient l'icone du mouvement. Michael Graves, Charles Moore, Ricardo Bofill melangent les styles historiques avec ironie et exuberance.

Le postmodernisme retrouve la facade comme surface decorative, le contexte urbain, la memoire des lieux. Les Espaces d'Abraxas de Bofill a Marne-la-Vallee revisitent le classicisme pour le logement social. Les villes nouvelles s'ornent de colonnes et de frontons.

Critique pour son superficialite et son historicisme de pacotille, le postmodernisme decline dans les annees 1990. Mais son attention au contexte, a l'usager, a la signification influence durablement l'architecture contemporaine.`,
    mainWorks: ["AT&T Building", "Piazza d'Italia", "Espaces d'Abraxas", "Portland Building", "Neue Staatsgalerie Stuttgart"],
    keyIdeas: ["Citation historique", "Ironie", "Ornement", "Contexte"],
  },
  {
    id: "deconstructivisme",
    name: "Deconstructivisme",
    birthYear: 1988,
    deathYear: 2010,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Guggenheim-bilbao-jan05.jpg?width=220",
    nationality: "International",
    movement: "Contemporain",
    summary: `Le deconstructivisme emerge avec l'exposition du MoMA en 1988, regroupant Gehry, Libeskind, Hadid, Coop Himmelb(l)au, Eisenman, Koolhaas, Tschumi. Ces architectes fragmentent les formes, disloquent les volumes, defient les conventions structurelles.

Le musee Guggenheim de Bilbao (Frank Gehry, 1997) devient l'icone du mouvement et un phenomene urbanistique : "l'effet Bilbao". Ses formes titanesques couvertes de titane, impossibles sans logiciels de conception 3D, font du musee une sculpture habitable.

Zaha Hadid developpe des formes fluides et dynamiques (Centre Heydar-Aliyev). Daniel Libeskind cree des espaces anguleux et traumatiques (Musee juif de Berlin). Rem Koolhaas theorise et construit un urbanisme de la congestion (CCTV Beijing).

Le deconstructivisme, couteux et spectaculaire, est critique pour son formalisme deconnecte des usages. Mais il a libere l'architecture des contraintes orthogonales et ouvert la voie au parametricisme numerique contemporain.`,
    mainWorks: ["Guggenheim Bilbao", "Musee juif de Berlin", "Centre Heydar-Aliyev", "Maison dansante Prague", "CCTV Beijing"],
    keyIdeas: ["Fragmentation", "Numerique", "Spectacle", "Transgression"],
  },
  {
    id: "durable",
    name: "Architecture durable",
    birthYear: 2000,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bosco_Verticale_view.jpg?width=220",
    nationality: "International",
    movement: "Contemporain",
    summary: `L'architecture durable repond a l'urgence climatique en repensant la conception, les materiaux, l'energie. Elle vise la neutralite carbone, l'efficacite energetique, le bien-etre des usagers, l'integration dans les ecosystemes.

Les batiments a energie positive produisent plus d'energie qu'ils n'en consomment. Les materiaux biosources (bois, paille, terre) remplacent le beton. La ventilation naturelle, les toitures vegetalisees, la recuperation des eaux redefinissent le confort.

Le Bosco Verticale de Milan (Stefano Boeri, 2014), tours couvertes de forets, incarne cette ambition. L'agence danoise BIG, l'Autrichien Baumschlager Eberle, le Japonais Shigeru Ban (carton, bambou) explorent des voies diverses vers la durabilite.

L'architecture durable n'est plus une niche mais devient la norme. Les reglementations imposent des standards croissants. Le defi est de concilier ambition environnementale, qualite architecturale et accessibilite economique.`,
    mainWorks: ["Bosco Verticale", "Centre Pompidou Metz", "Bullitt Center Seattle", "Edge Amsterdam", "Maisons passives"],
    keyIdeas: ["Neutralite carbone", "Materiaux biosources", "Energie positive", "Biodiversite"],
  },
];
