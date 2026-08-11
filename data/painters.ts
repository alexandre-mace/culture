export interface Painter {
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

export const painters: Painter[] = [
  {
    id: "giotto",
    name: "Giotto di Bondone",
    birthYear: 1267,
    deathYear: 1337,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Uffizi_Giotto.jpg/330px-Uffizi_Giotto.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Italien",
    movement: "Proto-Renaissance",
    family: "Renaissance",
    summary: `Giotto di Bondone naît dans la campagne florentine, peut-être à Vespignano. Selon la légende, Cimabue l'aurait découvert enfant, dessinant ses moutons sur une pierre. Il devient l'élève puis le rival de ce maître byzantin, rompant avec les conventions médiévales.

Ses fresques de la chapelle des Scrovegni à Padoue (1303-1306) révolutionnent la peinture occidentale. Pour la première fois, les personnages occupent un espace tridimensionnel crédible, expriment des émotions humaines reconnaissables, s'inscrivent dans des paysages naturels.

Giotto introduit le volume par le modelé des draperies, la perspective intuitive, l'expression dramatique des visages. Ses compositions narratives influencent toute la peinture italienne ultérieure. Dante le célèbre dans la Divine Comédie comme ayant éclipsé Cimabue.

Architecte de la cathédrale de Florence, il dessine le célèbre campanile qui porte son nom. Giotto meurt à Florence, reconnu de son vivant comme le plus grand peintre de son temps. Vasari voit en lui le père de la Renaissance, celui qui a ramené la peinture à la vérité naturelle.`,
    mainWorks: ["Fresques de la chapelle des Scrovegni", "Fresques d'Assise", "Maestà d'Ognissanti", "Campanile de Florence"],
    keyIdeas: ["Rupture avec le byzantinisme", "Espace tridimensionnel", "Expression des émotions", "Naturalisme"],
  },
  {
    id: "van-eyck",
    name: "Jan van Eyck",
    birthYear: 1390,
    deathYear: 1441,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_a_Man_by_Jan_van_Eyck-small.jpg?width=220",
    nationality: "Flamand",
    movement: "Primitifs flamands",
    family: "Renaissance",
    summary: `Jan van Eyck naît probablement à Maaseik dans le Limbourg. On sait peu de chose sur sa formation. Il travaille d'abord pour Jean de Bavière à La Haye, puis entre au service de Philippe le Bon, duc de Bourgogne, qui l'emploie comme peintre et diplomate.

Van Eyck perfectionne la technique de la peinture à l'huile au point qu'on lui en a longtemps attribué l'invention. Cette maîtrise lui permet des effets de transparence, de brillance et de précision du détail inégalés. Ses portraits et scènes religieuses fascinent par leur réalisme minutieux.

Le Retable de l'Agneau mystique, achevé en 1432 pour la cathédrale de Gand, est son chef-d'œuvre. Les Époux Arnolfini, portrait d'un marchand italien et de son épouse, reste l'une des images les plus énigmatiques de l'histoire de l'art, avec son miroir convexe reflétant toute la scène.

Van Eyck meurt à Bruges, au sommet de sa réputation. Sa devise "Als ik kan" (comme je peux) témoigne d'une humilité feinte devant son propre génie. Son influence sur la peinture européenne est immense, des primitifs flamands aux peintres vénitiens qui adopteront sa technique.`,
    mainWorks: ["Retable de l'Agneau mystique", "Les Époux Arnolfini", "La Vierge du chancelier Rolin", "L'Homme au turban rouge"],
    keyIdeas: ["Peinture à l'huile", "Réalisme minutieux", "Symbolisme caché", "Lumière et texture"],
  },
  {
    id: "botticelli",
    name: "Sandro Botticelli",
    birthYear: 1445,
    deathYear: 1510,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sandro_Botticelli_083.jpg?width=220",
    nationality: "Italien",
    movement: "Renaissance florentine",
    family: "Renaissance",
    summary: `Alessandro di Mariano di Vanni Filipepi, dit Botticelli, naît à Florence dans une famille d'artisans. Formé dans l'atelier de Fra Filippo Lippi, il développe un style d'une élégance linéaire incomparable. Proche des Médicis, il baigne dans l'atmosphère néoplatonicienne de leur cour.

La Naissance de Vénus et Le Printemps, peints pour la villa Médicis, incarnent l'idéal de beauté de la Renaissance florentine. Ces allégories mythologiques, d'une grâce mélancolique, célèbrent l'amour et la beauté selon la philosophie de Marsile Ficin.

Vers 1490, Botticelli subit l'influence du prédicateur Savonarole et sa peinture s'assombrit. Il aurait brûlé certaines de ses œuvres profanes. Ses dernières compositions religieuses témoignent d'une spiritualité tourmentée, loin de la sérénité de sa jeunesse.

Oublié après sa mort, Botticelli est redécouvert par les Préraphaélites au XIXe siècle. Son dessin ondoyant, ses figures éthérées, sa palette délicate en font aujourd'hui l'un des peintres les plus aimés du grand public. La Vénus reste une icône universelle de la beauté féminine.`,
    mainWorks: ["La Naissance de Vénus", "Le Printemps", "L'Adoration des Mages", "La Calomnie d'Apelles", "Illustrations de la Divine Comédie"],
    keyIdeas: ["Grâce linéaire", "Néoplatonisme", "Beauté idéale", "Mythologie"],
  },
  {
    id: "leonard-de-vinci",
    name: "Léonard de Vinci",
    birthYear: 1452,
    deathYear: 1519,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Francesco_Melzi_-_Portrait_of_Leonardo.png?width=220",
    nationality: "Italien",
    movement: "Haute Renaissance",
    family: "Renaissance",
    summary: `Leonardo di ser Piero da Vinci naît à Vinci, en Toscane, fils illégitime d'un notaire. Formé dans l'atelier de Verrocchio à Florence, il manifeste très tôt des dons exceptionnels. Son insatiable curiosité l'amène à étudier l'anatomie, la botanique, la géologie, l'hydraulique, l'optique.

Peintre, Léonard produit peu mais chaque œuvre est une révolution. La Cène (1495-1498) réinvente la composition narrative. La Joconde, portrait de Lisa Gherardini, devient l'image la plus célèbre du monde grâce au sfumato, cette technique de fondu atmosphérique qu'il invente.

Ses carnets, écrits en miroir, contiennent des milliers de dessins et notes : projets de machines volantes, études anatomiques, observations scientifiques. Léonard incarne l'idéal de l'homme universel de la Renaissance, artiste et savant, ingénieur et philosophe.

Invité par François Ier, il s'installe au Clos Lucé près d'Amboise où il meurt. La légende veut que le roi ait recueilli son dernier souffle. Son influence sur l'art est incommensurable : il élève la peinture au rang de science et l'artiste au rang de génie.`,
    mainWorks: ["La Joconde", "La Cène", "La Vierge aux rochers", "L'Homme de Vitruve", "La Dame à l'hermine"],
    keyIdeas: ["Sfumato", "Homme universel", "Science et art", "Observation de la nature"],
  },
  {
    id: "michel-ange",
    name: "Michel-Ange",
    birthYear: 1475,
    deathYear: 1564,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg?width=220",
    nationality: "Italien",
    movement: "Haute Renaissance / Maniérisme",
    family: "Renaissance",
    summary: `Michelangelo di Lodovico Buonarroti Simoni naît à Caprese, près d'Arezzo. Élevé au jardin des Médicis, il étudie l'antique et l'anatomie avec une passion obsessionnelle. À vingt-trois ans, sa Pietà de Saint-Pierre révèle un génie sculptural inégalé.

Le David (1501-1504), colosse de marbre de plus de quatre mètres, incarne l'idéal héroïque de la Renaissance florentine. Mais c'est en peinture que Michel-Ange accomplit son œuvre la plus monumentale : le plafond de la chapelle Sixtine (1508-1512), commande du pape Jules II.

Couché sur un échafaudage pendant quatre ans, il peint seul 343 figures illustrant la Genèse, dont la célèbre Création d'Adam. Vingt-cinq ans plus tard, il ajoute le Jugement dernier sur le mur d'autel, vision terrifiante du salut et de la damnation.

Architecte de la coupole de Saint-Pierre, poète à ses heures, Michel-Ange vit jusqu'à quatre-vingt-huit ans, travaillant jusqu'à sa mort. Son art titanesque, sa "terribilità", influence tout le maniérisme et le baroque. Il est le premier artiste dont Vasari écrit la biographie de son vivant.`,
    mainWorks: ["Plafond de la chapelle Sixtine", "Le Jugement dernier", "David", "La Pietà", "Coupole de Saint-Pierre"],
    keyIdeas: ["Terribilità", "Corps héroïque", "Néoplatonisme", "Génie tourmenté"],
  },
  {
    id: "raphael",
    name: "Raphaël",
    birthYear: 1483,
    deathYear: 1520,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Raffaello_Sanzio.jpg?width=220",
    nationality: "Italien",
    movement: "Haute Renaissance",
    family: "Renaissance",
    summary: `Raffaello Sanzio naît à Urbino, fils d'un peintre de cour. Orphelin à onze ans, il se forme dans l'atelier du Pérugin avant de s'installer à Florence puis à Rome. Son caractère aimable lui vaut l'amitié de tous, à l'opposé du solitaire Michel-Ange.

Appelé à Rome par Jules II, Raphaël décore les Chambres du Vatican. L'École d'Athènes (1509-1511) rassemble les philosophes de l'Antiquité dans une architecture idéale, incarnant l'harmonie entre savoir antique et foi chrétienne propre à la Haute Renaissance.

Ses Madones atteignent une perfection sereine qui en fait des modèles de dévotion. Portraitiste subtil, architecte de Saint-Pierre après Bramante, directeur des antiquités romaines, Raphaël incarne la grâce et l'équilibre classiques face à la puissance tourmentée de Michel-Ange.

Raphaël meurt à trente-sept ans, peut-être d'épuisement ou de fièvre. Rome entière pleure le "prince des peintres". Son influence sur l'académisme est décisive : pendant trois siècles, il représente le modèle absolu de la perfection picturale, avant que les modernes ne le contestent.`,
    mainWorks: ["L'École d'Athènes", "La Madone Sixtine", "La Transfiguration", "Portrait de Baldassare Castiglione", "Les Chambres du Vatican"],
    keyIdeas: ["Harmonie classique", "Grâce", "Idéalisation", "Équilibre"],
  },
  {
    id: "durer",
    name: "Albrecht Dürer",
    birthYear: 1471,
    deathYear: 1528,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Albrecht_D%C3%BCrer_-_1500_self-portrait_%28High_resolution_and_detail%29.jpg?width=220",
    nationality: "Allemand",
    movement: "Renaissance nordique",
    family: "Renaissance",
    summary: `Albrecht Dürer naît à Nuremberg, fils d'un orfèvre hongrois. Après un apprentissage dans l'atelier paternel puis chez le peintre Wolgemut, il voyage en Italie où il découvre la Renaissance. Il devient le passeur entre l'art italien et le monde germanique.

Dürer élève la gravure au rang d'art majeur. Ses séries de l'Apocalypse, de la Grande Passion et de la Vie de la Vierge, ses gravures sur cuivre comme Melencolia I ou Le Chevalier, la Mort et le Diable atteignent une virtuosité technique et une profondeur symbolique inégalées.

Ses autoportraits jalonnent sa carrière, du dessin d'enfant à l'icône christique de 1500. Cette attention à soi-même, sans précédent dans l'art nordique, témoigne d'une conscience nouvelle du statut de l'artiste. Théoricien, il publie des traités sur les proportions et la perspective.

Ami des humanistes et d'Érasme, proche de Luther, Dürer incarne la Renaissance allemande. Il meurt à Nuremberg, artiste reconnu et riche. Son influence sur l'art graphique européen est immense, de Rembrandt aux graveurs japonais qui découvrent ses œuvres au XIXe siècle.`,
    mainWorks: ["Melencolia I", "Le Chevalier, la Mort et le Diable", "Autoportrait à la fourrure", "L'Apocalypse", "Le Lièvre"],
    keyIdeas: ["Gravure", "Renaissance nordique", "Théorie de l'art", "Autoportrait"],
  },
  {
    id: "le-caravage",
    name: "Le Caravage",
    birthYear: 1571,
    deathYear: 1610,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bild-Ottavio_Leoni%2C_Caravaggio.jpg?width=220",
    nationality: "Italien",
    movement: "Baroque",
    family: "Baroque",
    summary: `Michelangelo Merisi, dit le Caravage, naît à Milan. Orphelin à onze ans, il est formé dans l'atelier de Simone Peterzano. Installé à Rome vers 1592, il vit dans la misère avant d'être découvert par le cardinal del Monte qui devient son protecteur.

Le Caravage révolutionne la peinture par son réalisme brutal et son usage dramatique du clair-obscur. Ses modèles sont des gens du peuple, ses saints ont les pieds sales, ses scènes religieuses se déroulent dans des tavernes. Cette vérité crue scandalise autant qu'elle fascine.

Sa Vocation de saint Matthieu (1599-1600) inaugure une série de chefs-d'œuvre pour les églises romaines. Mais son caractère violent le mène au meurtre en 1606. Il fuit Rome, errant entre Naples, Malte et la Sicile, peignant des œuvres de plus en plus sombres et tourmentées.

Le Caravage meurt à trente-huit ans sur une plage de Porto Ercole, dans des circonstances mystérieuses. Son influence sur la peinture européenne est immédiate et profonde : Rembrandt, Velázquez, La Tour, Ribera sont ses héritiers. Le "caravagisme" devient un mouvement européen.`,
    mainWorks: ["La Vocation de saint Matthieu", "Judith décapitant Holopherne", "La Mort de la Vierge", "David avec la tête de Goliath", "Le Souper à Emmaüs"],
    keyIdeas: ["Clair-obscur", "Réalisme brutal", "Ténébrisme", "Drame sacré"],
  },
  {
    id: "rubens",
    name: "Pierre Paul Rubens",
    birthYear: 1577,
    deathYear: 1640,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rubens_Self-portrait_1623.jpg?width=220",
    nationality: "Flamand",
    movement: "Baroque",
    family: "Baroque",
    summary: `Pierre Paul Rubens naît à Siegen, en Westphalie, où sa famille s'est réfugiée. De retour à Anvers après la mort de son père, il reçoit une éducation humaniste avant de se former à la peinture. Un séjour de huit ans en Italie (1600-1608) le marque profondément.

De retour à Anvers, Rubens devient le peintre le plus demandé d'Europe. Son atelier, véritable entreprise, emploie des dizaines d'assistants dont Van Dyck. Il produit une œuvre immense : scènes religieuses, mythologies, portraits, paysages, cycles décoratifs.

Son style célèbre la chair opulente, le mouvement dramatique, les couleurs chaudes et sensuelles. Le cycle de Marie de Médicis au Louvre, les plafonds de Whitehall à Londres témoignent de son génie décoratif. Diplomate, il négocie la paix entre l'Espagne et l'Angleterre.

Rubens meurt à Anvers, riche et honoré. Sa seconde femme, Hélène Fourment, inspire ses dernières œuvres les plus sensuelles. Son influence sur la peinture européenne est considérable, de Watteau à Delacroix et Renoir qui admirent sa célébration de la vie et de la beauté féminine.`,
    mainWorks: ["Le Cycle de Marie de Médicis", "La Descente de Croix", "Les Trois Grâces", "Le Jardin de l'amour", "Le Jugement de Paris"],
    keyIdeas: ["Sensualité baroque", "Mouvement", "Couleur", "Atelier"],
  },
  {
    id: "velazquez",
    name: "Diego Velázquez",
    birthYear: 1599,
    deathYear: 1660,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Diego_Vel%C3%A1zquez_Autorretrato_45_x_38_cm_-_Colecci%C3%B3n_Real_Academia_de_Bellas_Artes_de_San_Carlos_-_Museo_de_Bellas_Artes_de_Valencia.jpg/330px-Diego_Vel%C3%A1zquez_Autorretrato_45_x_38_cm_-_Colecci%C3%B3n_Real_Academia_de_Bellas_Artes_de_San_Carlos_-_Museo_de_Bellas_Artes_de_Valencia.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Espagnol",
    movement: "Baroque / Siècle d'or espagnol",
    family: "Baroque",
    summary: `Diego Rodríguez de Silva y Velázquez naît à Séville dans une famille de petite noblesse portugaise. Formé dans l'atelier de Francisco Pacheco dont il épouse la fille, il s'installe à Madrid en 1623 comme peintre de Philippe IV, fonction qu'il occupera toute sa vie.

Velázquez voyage deux fois en Italie où il étudie les Vénitiens et rencontre les maîtres contemporains. Son style évolue vers une touche de plus en plus libre, une palette argentée, une attention à l'atmosphère qui anticipe l'impressionnisme de deux siècles.

Les Ménines (1656), son chef-d'œuvre, représente l'infante Marguerite entourée de ses demoiselles d'honneur, tandis que Velázquez lui-même se peint devant sa toile. Ce jeu de miroirs et de regards interroge la nature même de la représentation.

Anobli par le roi peu avant sa mort, Velázquez reste méconnu hors d'Espagne jusqu'au XIXe siècle. Manet le découvre à Madrid et le proclame "peintre des peintres". Son influence sur la peinture moderne, de l'impressionnisme à Bacon, est immense.`,
    mainWorks: ["Les Ménines", "Les Lances", "Le Portrait d'Innocent X", "Les Fileuses", "Vénus à son miroir"],
    keyIdeas: ["Vérité optique", "Touche libre", "Jeux de miroirs", "Atmosphère"],
  },
  {
    id: "rembrandt",
    name: "Rembrandt",
    birthYear: 1606,
    deathYear: 1669,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg?width=220",
    nationality: "Néerlandais",
    movement: "Baroque / Âge d'or néerlandais",
    family: "Baroque",
    summary: `Rembrandt Harmenszoon van Rijn naît à Leyde, fils d'un meunier aisé. Formé à Amsterdam, il s'y installe définitivement et connaît rapidement le succès. Son mariage avec Saskia van Uylenburgh lui ouvre les portes de la haute société. La Ronde de nuit (1642) couronne cette période faste.

Mais la mort de Saskia, puis des difficultés financières le mènent à la faillite en 1656. Ses dernières années, vécues dans la pauvreté avec Hendrickje Stoffels et son fils Titus, produisent paradoxalement ses œuvres les plus profondes, d'une liberté et d'une intériorité bouleversantes.

Rembrandt excelle dans tous les genres mais c'est le portrait, et surtout l'autoportrait, qui révèle son génie. Plus de quatre-vingts autoportraits jalonnent sa carrière, chronique impitoyable du vieillissement et méditation sur la condition humaine.

Maître du clair-obscur, Rembrandt va au-delà du Caravage : sa lumière n'est pas seulement dramatique, elle est spirituelle. Sa touche, de plus en plus épaisse et libre, influence toute la peinture ultérieure. Trop audacieux pour son temps, il est redécouvert par les romantiques.`,
    mainWorks: ["La Ronde de nuit", "Les Syndics des drapiers", "Le Retour du fils prodigue", "La Fiancée juive", "Autoportraits"],
    keyIdeas: ["Clair-obscur spirituel", "Autoportrait", "Empâtement", "Intériorité"],
  },
  {
    id: "vermeer",
    name: "Johannes Vermeer",
    birthYear: 1632,
    deathYear: 1675,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jan_Vermeer_van_Delft_002.jpg?width=220",
    nationality: "Néerlandais",
    movement: "Âge d'or néerlandais",
    family: "Baroque",
    summary: `Johannes Vermeer naît à Delft où il passe toute sa vie. On sait peu de chose sur sa formation. Maître de la guilde de Saint-Luc à vingt-et-un ans, il travaille lentement, produisant peut-être seulement deux ou trois tableaux par an. Il en reste trente-cinq aujourd'hui.

Ses scènes d'intérieur montrent des femmes absorbées dans leurs activités quotidiennes : lire une lettre, verser du lait, jouer de la musique. La lumière du nord, filtrée par une fenêtre, baigne ces instants suspendus d'une clarté nacrée incomparable.

La Jeune Fille à la perle et La Laitière comptent parmi les images les plus aimées de l'histoire de l'art. Vermeer utilise probablement une camera obscura pour obtenir ces effets optiques : flous, reflets, pointillés de lumière qui anticipent la photographie.

Vermeer meurt à quarante-trois ans, laissant onze enfants et des dettes. Oublié pendant deux siècles, il est redécouvert par le critique Thoré-Bürger en 1866. Sa réputation ne cesse depuis de grandir, et ses rares tableaux atteignent des prix astronomiques.`,
    mainWorks: ["La Jeune Fille à la perle", "La Laitière", "La Dentellière", "L'Art de la peinture", "Vue de Delft"],
    keyIdeas: ["Lumière du Nord", "Intimité", "Silence", "Camera obscura"],
  },
  {
    id: "goya",
    name: "Francisco de Goya",
    birthYear: 1746,
    deathYear: 1828,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vicente_L%C3%B3pez_Porta%C3%B1a_-_el_pintor_Francisco_de_Goya.jpg?width=220",
    nationality: "Espagnol",
    movement: "Romantisme",
    family: "Romantisme & réalisme",
    summary: `Francisco José de Goya y Lucientes naît à Fuendetodos, en Aragon. Formé à Saragosse puis à Madrid, il voyage en Italie avant de revenir travailler pour la manufacture royale de tapisseries. Ses cartons joyeux montrent une Espagne populaire et festive.

Peintre de la cour de Charles IV, Goya est frappé de surdité vers 1793. Cette épreuve transforme son art. Les Caprices, série de gravures, dénoncent avec une ironie féroce les superstitions et l'injustice sociale. "Le sommeil de la raison engendre des monstres."

L'invasion napoléonienne inspire ses œuvres les plus violentes : Le Trois Mai 1808 et les Désastres de la guerre témoignent de l'horreur avec une brutalité sans précédent. Les Peintures noires, réalisées sur les murs de sa maison, révèlent un univers cauchemardesque.

Exilé à Bordeaux après le retour de l'absolutisme, Goya y meurt à quatre-vingt-deux ans. Premier artiste moderne par sa liberté et sa vision critique, il influence tout le XIXe siècle, de Delacroix à Manet, et préfigure l'expressionnisme du XXe.`,
    mainWorks: ["Le Trois Mai 1808", "Les Caprices", "Les Peintures noires", "La Maja nue", "La Famille de Charles IV"],
    keyIdeas: ["Critique sociale", "Cauchemar", "Liberté de l'artiste", "Violence"],
  },
  {
    id: "turner",
    name: "William Turner",
    birthYear: 1775,
    deathYear: 1851,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Joseph_Mallord_William_Turner_auto-retrato.jpg?width=220",
    nationality: "Anglais",
    movement: "Romantisme",
    family: "Romantisme & réalisme",
    summary: `Joseph Mallord William Turner naît à Londres, fils d'un barbier. Enfant prodige, il entre à la Royal Academy à quatorze ans. Ses aquarelles topographiques lui valent un succès précoce qui ne se démentira jamais. Il voyage inlassablement en Angleterre et sur le continent.

Turner évolue progressivement vers une dissolution de la forme dans la lumière. Ses marines, ses tempêtes, ses couchers de soleil atteignent une abstraction qui déconcerte ses contemporains. "Peintures de rien et très ressemblantes", ironise Hazlitt.

Pluie, Vapeur et Vitesse (1844), Le Téméraire et Lumière et couleur sont des explosions de lumière où les formes se dissolvent. Turner anticipe l'impressionnisme de trente ans. Monet, voyant ses toiles à Londres, en reste stupéfait.

Turner meurt à Chelsea, riche et célèbre mais solitaire. Il lègue son œuvre à la nation britannique : 300 peintures et 20 000 dessins et aquarelles. La Tate Britain conserve ce trésor. Longtemps considéré comme un précurseur, il est aujourd'hui reconnu comme un maître absolu.`,
    mainWorks: ["Pluie, Vapeur et Vitesse", "Le Téméraire", "Tempête de neige", "Le Dernier Voyage du Téméraire", "Lumière et couleur"],
    keyIdeas: ["Lumière", "Sublime", "Abstraction", "Forces naturelles"],
  },
  {
    id: "delacroix",
    name: "Eugène Delacroix",
    birthYear: 1798,
    deathYear: 1863,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/F%C3%A9lix_Nadar_1820-1910_portraits_Eug%C3%A8ne_Delacroix.jpg?width=220",
    nationality: "Français",
    movement: "Romantisme",
    family: "Romantisme & réalisme",
    summary: `Eugène Delacroix naît à Charenton-Saint-Maurice, officiellement fils d'un préfet, peut-être en réalité de Talleyrand. Orphelin à seize ans, il entre dans l'atelier de Guérin et se lie avec Géricault dont le Radeau de la Méduse l'impressionne profondément.

Les Massacres de Scio (1824) et La Mort de Sardanapale (1827) scandalisent l'Académie par leur violence colorée. La Liberté guidant le peuple (1830) devient l'icône de la révolution de Juillet. Delacroix incarne le romantisme en peinture face au classicisme d'Ingres.

Un voyage au Maroc en 1832 transforme sa palette. Les Femmes d'Alger et les scènes orientales qui suivent révèlent une sensualité et une luminosité nouvelles. Delacroix théorise la loi des complémentaires et l'influence de la couleur sur l'émotion.

Décorateur du Palais-Bourbon et de Saint-Sulpice, portraitiste, Delacroix tient un Journal qui reste un document majeur sur l'art et la vie artistique. Il meurt à Paris, salué par Baudelaire comme "le plus grand artiste du XIXe siècle". Il ouvre la voie à l'impressionnisme et au fauvisme.`,
    mainWorks: ["La Liberté guidant le peuple", "Les Massacres de Scio", "La Mort de Sardanapale", "Femmes d'Alger", "Jacob luttant avec l'ange"],
    keyIdeas: ["Couleur", "Romantisme", "Orientalisme", "Expression"],
  },
  {
    id: "courbet",
    name: "Gustave Courbet",
    birthYear: 1819,
    deathYear: 1877,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Gustave_Courbet_by_Nadar_1860s.png/330px-Gustave_Courbet_by_Nadar_1860s.png",
    nationality: "Français",
    movement: "Réalisme",
    family: "Romantisme & réalisme",
    summary: `Gustave Courbet naît à Ornans, dans le Doubs, dans une famille de propriétaires terriens. Monté à Paris, il se forme en copiant les maîtres au Louvre plutôt qu'en suivant l'enseignement académique. Son tempérament provocateur le destine au scandale.

Un enterrement à Ornans (1850) et L'Atelier du peintre (1855) rompent avec les conventions : Courbet peint des gens ordinaires à l'échelle des tableaux d'histoire, affirmant la dignité du quotidien. Rejeté par le Salon, il organise sa propre exposition, le "Pavillon du Réalisme".

L'Origine du monde (1866), commandé par un diplomate ottoman, montre un sexe féminin avec une franchise inouïe. Caché pendant un siècle, le tableau est aujourd'hui au musée d'Orsay. Courbet revendique un art "vivant", ancré dans le matériel et le social.

Engagé dans la Commune de Paris, Courbet est emprisonné puis condamné à payer la reconstruction de la colonne Vendôme. Il s'exile en Suisse où il meurt alcoolique. Son réalisme influence Manet et les impressionnistes, et son attitude de défi préfigure les avant-gardes.`,
    mainWorks: ["Un enterrement à Ornans", "L'Atelier du peintre", "L'Origine du monde", "Les Casseurs de pierres", "La Vague"],
    keyIdeas: ["Réalisme", "Engagement social", "Anticonformisme", "Matérialisme"],
  },
  {
    id: "manet",
    name: "Édouard Manet",
    birthYear: 1832,
    deathYear: 1883,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%89douard_Manet%2C_en_buste%2C_de_face_-_Nadar.jpg?width=220",
    nationality: "Français",
    movement: "Impressionnisme / Réalisme",
    family: "Impressionnisme & post-impressionnisme",
    summary: `Édouard Manet naît à Paris dans une famille de la haute bourgeoisie. Après un échec au concours de l'École navale, il entre dans l'atelier de Couture. Ses voyages en Hollande, en Allemagne et en Espagne nourrissent son admiration pour Velázquez et Goya.

Le Déjeuner sur l'herbe (1863) et Olympia (1865) provoquent des scandales retentissants. Ce n'est pas tant le nu qui choque que son traitement : aplats de couleur, suppression des demi-teintes, regard direct de la modèle qui défie le spectateur. La modernité en peinture est née.

Manet refuse pourtant d'exposer avec les impressionnistes, cherchant la reconnaissance officielle. Sa touche libre, sa palette claire, son attention à la vie parisienne en font néanmoins le maître incontesté du groupe. Le Bar aux Folies Bergère résume son art.

Atteint de syphilis, Manet meurt à cinquante et un ans après l'amputation d'une jambe. Zola, Mallarmé et les impressionnistes saluent celui qui, sans jamais se proclamer révolutionnaire, a bouleversé la peinture et ouvert la voie à l'art moderne.`,
    mainWorks: ["Le Déjeuner sur l'herbe", "Olympia", "Le Bar aux Folies Bergère", "Le Fifre", "Un bar aux Folies-Bergère"],
    keyIdeas: ["Modernité", "Aplats", "Scandale", "Vie parisienne"],
  },
  {
    id: "monet",
    name: "Claude Monet",
    birthYear: 1840,
    deathYear: 1926,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Claude_Monet_1899_Nadar_crop.jpg?width=220",
    nationality: "Français",
    movement: "Impressionnisme",
    family: "Impressionnisme & post-impressionnisme",
    summary: `Claude Monet naît à Paris mais grandit au Havre où il rencontre Boudin qui l'initie à la peinture en plein air. À Paris, il se lie avec Renoir, Sisley et Bazille. Impression, soleil levant (1872), exposé en 1874, donne involontairement son nom au mouvement impressionniste.

Monet poursuit toute sa vie la même quête : saisir les variations de la lumière sur les choses. Ses séries - les Meules, les Cathédrales de Rouen, les Peupliers - montrent le même motif à différentes heures et saisons, explorant la perception pure.

Installé à Giverny en 1883, il crée le jardin d'eau aux nymphéas qui devient son sujet exclusif. Les grandes Décorations des Nymphéas, données à l'État, sont installées à l'Orangerie des Tuileries : immersion dans un espace de couleur et de lumière, aux limites de l'abstraction.

Presque aveugle dans ses dernières années, Monet continue de peindre. Il meurt à Giverny à quatre-vingt-six ans. L'impressionnisme, longtemps méprisé, triomphe : Monet est aujourd'hui l'un des peintres les plus populaires au monde. Giverny est un lieu de pèlerinage.`,
    mainWorks: ["Impression, soleil levant", "Les Nymphéas", "La Cathédrale de Rouen", "Les Meules", "Femmes au jardin"],
    keyIdeas: ["Impression", "Lumière", "Série", "Plein air"],
  },
  {
    id: "renoir",
    name: "Auguste Renoir",
    birthYear: 1841,
    deathYear: 1919,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Pierre_Auguste_Renoir%2C_uncropped_image.jpg/330px-Pierre_Auguste_Renoir%2C_uncropped_image.jpg",
    nationality: "Français",
    movement: "Impressionnisme",
    family: "Impressionnisme & post-impressionnisme",
    summary: `Pierre-Auguste Renoir naît à Limoges dans une famille modeste. Apprenti peintre sur porcelaine, il monte à Paris et entre à l'École des Beaux-Arts. Aux côtés de Monet, Sisley et Bazille, il participe à l'aventure impressionniste des années 1870.

Le Moulin de la Galette (1876) et Le Déjeuner des canotiers (1881) célèbrent les plaisirs de la vie parisienne avec une joie sensuelle. La touche de Renoir, fluide et chaude, caresse les corps féminins et les paysages ensoleillés d'une même tendresse.

Vers 1883, Renoir traverse une "crise ingresque", cherchant plus de rigueur dans le dessin. Puis il revient à une manière plus libre, aux tons roses et nacrés, peignant des baigneuses opulentes qui rappellent Rubens. L'arthrite déforme ses mains mais il continue de peindre.

Installé à Cagnes-sur-Mer, Renoir meurt à soixante-dix-huit ans. Sa célébration de la beauté féminine et du bonheur de vivre en fait l'un des peintres les plus aimés. Certains lui reprochent une vision trop heureuse ; d'autres admirent cette affirmation de la joie comme valeur suprême.`,
    mainWorks: ["Le Moulin de la Galette", "Le Déjeuner des canotiers", "Les Grandes Baigneuses", "La Balançoire", "Les Parapluies"],
    keyIdeas: ["Joie de vivre", "Femme", "Lumière", "Sensualité"],
  },
  {
    id: "cezanne",
    name: "Paul Cézanne",
    birthYear: 1839,
    deathYear: 1906,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Paul_C%C3%A9zanne_O.I..jpg/330px-Paul_C%C3%A9zanne_O.I..jpg",
    nationality: "Français",
    movement: "Post-impressionnisme",
    family: "Impressionnisme & post-impressionnisme",
    summary: `Paul Cézanne naît à Aix-en-Provence, fils d'un banquier. Ami d'enfance de Zola, il monte à Paris et fréquente les impressionnistes sans jamais se sentir des leurs. Timide, irascible, doutant constamment de son talent, il travaille dans une solitude obstinée.

Cézanne veut "traiter la nature par le cylindre, la sphère, le cône", retrouver une structure sous les apparences. Ses natures mortes, ses portraits, ses paysages de Provence construisent l'espace par la couleur, par des "modulations" plutôt que par le modelé traditionnel.

La Montagne Sainte-Victoire, peinte des dizaines de fois, devient son motif obsessionnel. Les Grandes Baigneuses, aboutissement de trente ans de recherches, réunissent figures et paysage dans une architecture monumentale. Cézanne renonce au fini au profit de la vérité.

Incompris de son vivant, Cézanne est découvert par la jeune génération au Salon d'Automne de 1907. Picasso, Braque, Matisse reconnaissent en lui le "père de nous tous". Le cubisme et l'abstraction naissent de sa leçon. Il meurt à Aix d'une pneumonie après avoir peint sous l'orage.`,
    mainWorks: ["Les Joueurs de cartes", "La Montagne Sainte-Victoire", "Les Grandes Baigneuses", "Pommes et oranges", "Les Baigneurs"],
    keyIdeas: ["Structure", "Modulation", "Nature morte", "Père de l'art moderne"],
  },
  {
    id: "van-gogh",
    name: "Vincent van Gogh",
    birthYear: 1853,
    deathYear: 1890,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg?width=220",
    nationality: "Néerlandais",
    movement: "Post-impressionnisme",
    family: "Impressionnisme & post-impressionnisme",
    summary: `Vincent Willem van Gogh naît à Groot-Zundert, aux Pays-Bas, fils d'un pasteur. Après des échecs comme marchand d'art et prédicateur, il se tourne vers la peinture à vingt-sept ans. Ses premières œuvres, sombres et terreuses, montrent les paysans et mineurs du Borinage.

À Paris (1886-1888), il découvre l'impressionnisme et les estampes japonaises. Sa palette s'éclaircit, sa touche s'accélère. À Arles, il rêve d'une communauté d'artistes. L'arrivée de Gauguin tourne au drame : crise de folie, oreille coupée, internement.

À l'asile de Saint-Rémy puis à Auvers-sur-Oise, Van Gogh peint frénétiquement : cyprès tourmentés, nuits étoilées, champs de blé sous un ciel menaçant. Sa touche en spirales exprime une tension intérieure insoutenable. En deux ans, il produit 900 tableaux.

Van Gogh se tire une balle dans la poitrine et meurt deux jours plus tard à trente-sept ans. N'ayant vendu qu'un seul tableau de son vivant, il devient au XXe siècle l'un des peintres les plus chers et les plus populaires au monde. Sa correspondance avec Théo est un monument littéraire.`,
    mainWorks: ["La Nuit étoilée", "Les Tournesols", "Chambre à Arles", "Les Mangeurs de pommes de terre", "Autoportraits"],
    keyIdeas: ["Expression", "Couleur pure", "Tourment", "Correspondance"],
  },
  {
    id: "gauguin",
    name: "Paul Gauguin",
    birthYear: 1848,
    deathYear: 1903,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Paul_Gauguin_1891.png?width=220",
    nationality: "Français",
    movement: "Post-impressionnisme / Synthétisme",
    family: "Impressionnisme & post-impressionnisme",
    summary: `Paul Gauguin naît à Paris mais passe son enfance au Pérou. Agent de change prospère, il peint en amateur avant de tout quitter pour l'art à trente-cinq ans. Cette rupture radicale ruine sa vie familiale et le condamne à la misère.

En Bretagne, à Pont-Aven, Gauguin développe le synthétisme : formes cernées, couleurs aplaties, abandon de la perspective. La Vision après le sermon (1888) marque la rupture avec l'impressionnisme. La forme doit exprimer l'idée, non imiter la nature.

Fuyant la civilisation, Gauguin s'installe à Tahiti en 1891 puis aux Marquises. D'où venons-nous ? Que sommes-nous ? Où allons-nous ? (1897) résume sa quête spirituelle. Ses Vahinés aux couleurs éclatantes inventent un éden primitif, fantasme plus que réalité.

Malade, misérable, en conflit avec les autorités coloniales, Gauguin meurt à Atuona. Son influence sur les Nabis, le fauvisme et l'expressionnisme est décisive. Il incarne le mythe de l'artiste maudit, sacrifiant tout à sa vision.`,
    mainWorks: ["D'où venons-nous ? Que sommes-nous ? Où allons-nous ?", "La Vision après le sermon", "Manao Tupapau", "Arearea", "Autoportrait au Christ jaune"],
    keyIdeas: ["Primitivisme", "Synthétisme", "Exotisme", "Fuite de la civilisation"],
  },
  {
    id: "toulouse-lautrec",
    name: "Henri de Toulouse-Lautrec",
    birthYear: 1864,
    deathYear: 1901,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Henri_de_Toulouse-Lautrec.png/330px-Henri_de_Toulouse-Lautrec.png",
    nationality: "Français",
    movement: "Post-impressionnisme",
    family: "Impressionnisme & post-impressionnisme",
    summary: `Henri de Toulouse-Lautrec naît à Albi dans l'une des plus anciennes familles nobles de France. Deux chutes dans l'enfance brisent ses jambes qui cessent de grandir. Ce handicap le marginalise et le pousse vers le monde de la nuit parisienne.

Installé à Montmartre, Lautrec devient le chroniqueur du Moulin Rouge, des cafés-concerts, des maisons closes. La Goulue, Yvette Guilbert, Jane Avril revivent sous son pinceau acéré. Ses affiches révolutionnent l'art graphique : aplats, cadrages audacieux, lignes expressives.

Lautrec dessine sans relâche, avec une virtuosité cruelle. Ses personnages, danseurs, prostituées, clients, ne sont jamais idéalisés. Son regard est tendre mais lucide, complice mais implacable. L'influence de Degas et des estampes japonaises nourrit son style.

L'alcool mine sa santé. Interné puis libéré, il meurt à trente-six ans dans le château familial. Son œuvre, produite en moins de vingt ans, reste l'une des plus vivantes de la fin du XIXe siècle. Ses affiches ont transformé la publicité en art.`,
    mainWorks: ["Au Moulin Rouge", "La Goulue arrivant au Moulin Rouge", "Affiches du Moulin Rouge", "Au salon de la rue des Moulins", "Yvette Guilbert"],
    keyIdeas: ["Montmartre", "Affiche", "Caricature", "Vie nocturne"],
  },
  {
    id: "klimt",
    name: "Gustav Klimt",
    birthYear: 1862,
    deathYear: 1918,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Klimt.jpg?width=220",
    nationality: "Autrichien",
    movement: "Art nouveau / Sécession viennoise",
    family: "Avant-gardes",
    summary: `Gustav Klimt naît à Baumgarten près de Vienne, fils d'un orfèvre. Formé à l'École des arts décoratifs, il connaît un succès précoce comme décorateur officiel. Mais en 1897, il fonde la Sécession viennoise, rompant avec l'académisme pour promouvoir un art total.

Les peintures allégoriques pour l'Université de Vienne provoquent un scandale : leur érotisme et leur pessimisme choquent. Klimt renonce aux commandes officielles et développe son style caractéristique : figures réalistes sur fonds ornementaux abstraits, or et motifs décoratifs.

Le Baiser (1907-1908) et le Portrait d'Adèle Bloch-Bauer incarnent sa "période dorée". L'influence de l'art byzantin, des mosaïques de Ravenne et de l'art japonais se fond dans une esthétique unique. Ses femmes, sensuelles et hiératiques, sont devenues des icônes.

Klimt meurt de la grippe espagnole, laissant des œuvres inachevées. Longtemps réduit au décoratif, il est aujourd'hui reconnu comme un maître, pont entre symbolisme et modernité. Le Baiser est l'une des images les plus reproduites au monde.`,
    mainWorks: ["Le Baiser", "Portrait d'Adèle Bloch-Bauer I", "L'Arbre de vie", "Judith et Holopherne", "Danaé"],
    keyIdeas: ["Or", "Sécession", "Éros et Thanatos", "Ornementation"],
  },
  {
    id: "matisse",
    name: "Henri Matisse",
    birthYear: 1869,
    deathYear: 1954,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_Henri_Matisse_1933_May_20.jpg?width=220",
    nationality: "Français",
    movement: "Fauvisme",
    family: "Avant-gardes",
    summary: `Henri Matisse naît au Cateau-Cambrésis, dans le Nord. Clerc de notaire, il découvre la peinture pendant une convalescence et y trouve sa vocation. Formé chez Gustave Moreau, il évolue rapidement vers une liberté chromatique radicale.

Au Salon d'Automne de 1905, ses toiles aux couleurs pures et violentes provoquent le scandale : un critique parle de "cage aux fauves". La Femme au chapeau et La Joie de vivre affirment une couleur autonome, libérée de la représentation. Le fauvisme est né.

Après cette explosion, Matisse cherche l'équilibre et l'harmonie. Odalisques, natures mortes, intérieurs au Maroc témoignent d'une quête de "luxe, calme et volupté". La couleur reste son moyen d'expression privilégié, mais la composition s'apaise.

Dans ses dernières années, immobilisé, Matisse invente les gouaches découpées : formes de papier peint et assemblé, aboutissement de sa recherche. La chapelle de Vence, qu'il décore entièrement, résume sa vie. Il meurt à Nice, reconnu comme l'un des plus grands coloristes de l'histoire.`,
    mainWorks: ["La Danse", "La Joie de vivre", "L'Atelier rouge", "Nu bleu", "La Chapelle de Vence"],
    keyIdeas: ["Couleur pure", "Fauvisme", "Harmonie", "Découpage"],
  },
  {
    id: "picasso",
    name: "Pablo Picasso",
    birthYear: 1881,
    deathYear: 1973,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_de_Picasso%2C_1908.jpg?width=220",
    nationality: "Espagnol",
    movement: "Cubisme / Surréalisme",
    family: "Avant-gardes",
    summary: `Pablo Ruiz Picasso naît à Málaga, fils d'un professeur de dessin. Enfant prodige, il maîtrise tous les styles académiques avant vingt ans. À Paris, ses périodes bleue et rose explorent la mélancolie et la tendresse avec une maîtrise classique.

Les Demoiselles d'Avignon (1907) rompt avec cinq siècles de représentation occidentale. Avec Braque, Picasso invente le cubisme : l'objet est décomposé, montré sous plusieurs angles simultanément. Collages, papiers collés poussent l'expérimentation plus loin.

Picasso traverse tous les styles du XXe siècle, les inventant ou les réinventant : néoclassicisme, surréalisme, expressionnisme. Guernica (1937), réponse au bombardement de la ville basque, reste le chef-d'œuvre de l'art engagé. Son énergie créatrice semble inépuisable.

Picasso meurt à Mougins à quatre-vingt-onze ans, laissant une œuvre immense : 50 000 pièces. Figure du génie moderne, séducteur légendaire, communiste affiché, il domine l'art du XXe siècle. Son influence sur la peinture, la sculpture, la céramique reste incommensurable.`,
    mainWorks: ["Les Demoiselles d'Avignon", "Guernica", "Les Ménines (variations)", "Le Vieux Guitariste aveugle", "La Femme qui pleure"],
    keyIdeas: ["Cubisme", "Réinvention permanente", "Génie protéiforme", "Engagement"],
  },
  {
    id: "kandinsky",
    name: "Wassily Kandinsky",
    birthYear: 1866,
    deathYear: 1944,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Wassily_kandinsky.jpg/330px-Wassily_kandinsky.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Russe",
    movement: "Abstraction",
    family: "Avant-gardes",
    summary: `Vassily Kandinsky naît à Moscou dans une famille aisée. Juriste et économiste, il abandonne une carrière universitaire à trente ans pour étudier la peinture à Munich. Une révélation devant une meule de Monet et l'écoute de Wagner déclenchent sa vocation.

En 1910, Kandinsky peint ce qui est considéré comme la première aquarelle abstraite. Du Spirituel dans l'art (1911) théorise cette révolution : l'art doit exprimer la "nécessité intérieure", non imiter la nature. Formes et couleurs ont une valeur en soi, comme les notes musicales.

Fondateur du Blaue Reiter à Munich, professeur au Bauhaus, Kandinsky développe un vocabulaire abstrait de plus en plus géométrique. Cercles, triangles, lignes s'organisent selon des lois propres, sans référence au monde visible.

Exilé à Paris après la fermeture du Bauhaus par les nazis, Kandinsky meurt à Neuilly. Avec Mondrian et Malevitch, il est l'un des fondateurs de l'art abstrait. Son influence sur l'expressionnisme abstrait américain et l'art contemporain est fondamentale.`,
    mainWorks: ["Composition VIII", "Jaune-rouge-bleu", "Première aquarelle abstraite", "Quelques cercles", "Du Spirituel dans l'art"],
    keyIdeas: ["Abstraction", "Nécessité intérieure", "Synesthésie", "Spiritualité"],
  },
  {
    id: "mondrian",
    name: "Piet Mondrian",
    birthYear: 1872,
    deathYear: 1944,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Piet_Mondriaan.jpg?width=220",
    nationality: "Néerlandais",
    movement: "De Stijl / Néo-plasticisme",
    family: "Avant-gardes",
    summary: `Piet Mondrian naît à Amersfoort, aux Pays-Bas, dans une famille calviniste stricte. Formé à l'Académie d'Amsterdam, il évolue du naturalisme vers une abstraction progressive. Ses séries d'arbres montrent ce cheminement vers l'essentiel.

À Paris avant la guerre, Mondrian découvre le cubisme qui accélère son évolution. De retour aux Pays-Bas, il fonde avec Theo van Doesburg le mouvement De Stijl et élabore le néo-plasticisme : seules les lignes droites et les couleurs primaires peuvent exprimer l'universel.

Ses compositions en grilles noires et rectangles de rouge, jaune et bleu atteignent une rigueur absolue. Mondrian y voit l'expression de l'harmonie universelle, l'équilibre entre les contraires. Son ascétisme n'exclut pas une sensibilité vibrante.

Exilé à Londres puis à New York, Mondrian découvre le jazz et peint ses derniers chefs-d'œuvre : Broadway Boogie-Woogie pulse d'une énergie nouvelle. Il meurt à New York, influence majeure sur l'architecture, le design et l'art minimaliste.`,
    mainWorks: ["Composition avec rouge, jaune et bleu", "Broadway Boogie-Woogie", "Victory Boogie-Woogie", "L'Arbre gris", "Composition en rouge, bleu et jaune"],
    keyIdeas: ["Néo-plasticisme", "Grille", "Couleurs primaires", "Harmonie universelle"],
  },
  {
    id: "dali",
    name: "Salvador Dalí",
    birthYear: 1904,
    deathYear: 1989,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Salvador_Dal%C3%AD_1939.jpg?width=220",
    nationality: "Espagnol",
    movement: "Surréalisme",
    family: "Art moderne & contemporain",
    summary: `Salvador Domingo Felipe Jacinto Dalí i Domènech naît à Figueras, en Catalogne. Enfant prodige narcissique, il étudie à l'Académie de Madrid où il se lie avec Lorca et Buñuel. Ses premières œuvres oscillent entre cubisme, réalisme et métaphysique.

En 1929, Dalí rejoint le groupe surréaliste et développe sa "méthode paranoïaque-critique" : hallucinations et délires systématisés produisent des images doubles, des formes molles, des paysages oniriques. La Persistance de la mémoire et ses montres molles deviennent iconiques.

Expulsé du groupe par Breton, Dalí cultive sa légende : moustaches extravagantes, déclarations provocantes, sens aigu de la publicité. Son talent technique, hérité des maîtres anciens, sert une imagination débridée. Peinture, cinéma, mode, design : Dalí est partout.

Installé à Port Lligat avec Gala, sa muse et manager, Dalí crée un musée-théâtre à Figueras où il est enterré. Figure la plus célèbre du surréalisme, artiste le plus médiatique de son temps, il reste controversé : génie ou charlatan ? Son œuvre fascine toujours.`,
    mainWorks: ["La Persistance de la mémoire", "Métamorphose de Narcisse", "Christ de saint Jean de la Croix", "Le Grand Masturbateur", "Les Éléphants"],
    keyIdeas: ["Paranoïaque-critique", "Onirique", "Mou et dur", "Auto-mythification"],
  },
  {
    id: "frida-kahlo",
    name: "Frida Kahlo",
    birthYear: 1907,
    deathYear: 1954,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg?width=220",
    nationality: "Mexicaine",
    movement: "Surréalisme / Art mexicain",
    family: "Art moderne & contemporain",
    summary: `Magdalena Carmen Frida Kahlo Calderón naît à Coyoacán, près de Mexico. À six ans, la poliomyélite atrophie sa jambe droite. À dix-huit ans, un terrible accident de bus la laisse brisée, condamnée à des dizaines d'opérations et à une souffrance chronique.

Immobilisée, Frida commence à peindre, surtout des autoportraits : "Je me peins moi-même parce que je suis si souvent seule." Ses tableaux, petits et intenses, mêlent réalisme mexicain, symbolisme précolombien et imagerie populaire. La douleur physique et émotionnelle y est omniprésente.

Son mariage avec Diego Rivera, deux fois célébré et deux fois rompu, est une passion tumultueuse. Communiste engagée, elle accueille Trotski. André Breton voit en elle une surréaliste, mais Frida refuse l'étiquette : "Je peins ma propre réalité."

Frida meurt à quarante-sept ans, épuisée par la maladie. Longtemps éclipsée par Rivera, elle est redécouverte par le féminisme et la culture mexicaine. Ses autoportraits aux sourcils joints sont devenus des icônes, symboles de la souffrance transcendée par l'art.`,
    mainWorks: ["Les Deux Fridas", "La Colonne brisée", "Autoportrait aux singes", "Henry Ford Hospital", "Diego et moi"],
    keyIdeas: ["Autoportrait", "Souffrance", "Mexicanité", "Féminisme"],
  },
  {
    id: "pollock",
    name: "Jackson Pollock",
    birthYear: 1912,
    deathYear: 1956,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jackson_Pollock_by_Hans_Namuth.jpg/330px-Jackson_Pollock_by_Hans_Namuth.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Expressionnisme abstrait",
    family: "Art moderne & contemporain",
    summary: `Jackson Pollock naît à Cody, dans le Wyoming. Élève de Thomas Hart Benton à New York, il est marqué par les muralistes mexicains et l'art des Indiens Navajos. L'analyse jungienne l'aide à surmonter son alcoolisme tout en nourrissant son imaginaire.

En 1947, Pollock invente le "dripping" : la toile posée au sol, il projette, goutte, fait couler la peinture avec des bâtons, des truelles. Ce geste libéré de tout contrôle conscient produit des entrelacs rythmiques d'une énergie primitive. L'action painting est née.

Number 1A, Autumn Rhythm, Blue Poles témoignent de cette méthode. Pollock élimine le chevalet, le pinceau, la figuration. La peinture devient trace d'une danse, enregistrement d'un corps en mouvement. New York remplace Paris comme capitale de l'art.

Pollock meurt à quarante-quatre ans dans un accident de voiture, ivre, tuant une passagère. Sa vie courte et tragique, son art radical font de lui le héros de l'avant-garde américaine. Son influence sur l'art contemporain, du happening au street art, reste immense.`,
    mainWorks: ["Number 1A", "Autumn Rhythm", "Blue Poles", "Mural", "Lavender Mist"],
    keyIdeas: ["Dripping", "Action painting", "All-over", "Automatisme"],
  },
  {
    id: "warhol",
    name: "Andy Warhol",
    birthYear: 1928,
    deathYear: 1987,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Andy_Warhol_1975.jpg?width=220",
    nationality: "Américain",
    movement: "Pop Art",
    family: "Art moderne & contemporain",
    summary: `Andrew Warhola naît à Pittsburgh dans une famille d'immigrés slovaques. Illustrateur publicitaire à succès à New York, il se tourne vers l'art en reproduisant des images de la culture de masse : boîtes de soupe Campbell, bouteilles de Coca-Cola, billets de banque.

La Factory, son atelier, devient le lieu de toutes les expérimentations : sérigraphies reproduites mécaniquement, films d'avant-garde, musique avec le Velvet Underground. Warhol cultive l'ambiguïté entre art et commerce, original et reproduction, surface et profondeur.

Ses portraits de Marilyn, Elvis, Mao utilisent la répétition et les couleurs criardes pour vider l'image de son aura tout en créant une nouvelle icône. "Je voudrais être une machine", déclare-t-il, brouillant la frontière entre artiste et entrepreneur.

En 1968, Valerie Solanas lui tire dessus ; il survit de justesse. Ce trauma assombrit ses dernières années mais n'arrête pas sa production. Warhol meurt à cinquante-huit ans de complications postopératoires. Son influence sur l'art, la mode, les médias reste omniprésente.`,
    mainWorks: ["Marilyn Diptych", "Campbell's Soup Cans", "Shot Marilyns", "Brillo Boxes", "Electric Chair"],
    keyIdeas: ["Pop Art", "Reproduction mécanique", "Célébrité", "Surface"],
  },
  {
    id: "bacon",
    name: "Francis Bacon",
    birthYear: 1909,
    deathYear: 1992,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Francis_Bacon.jpg?width=220",
    nationality: "Irlandais",
    movement: "Expressionnisme / Art figuratif",
    family: "Art moderne & contemporain",
    summary: `Francis Bacon naît à Dublin de parents anglais. Chassé de chez lui à seize ans pour son homosexualité, il vit entre Londres, Berlin et Paris, travaillant comme décorateur. Autodidacte en peinture, il détruit la plupart de ses œuvres de jeunesse.

Trois études de figures au pied d'une Crucifixion (1944) révèle une vision cauchemardesque qui choque le Londres d'après-guerre. Bacon peint des corps déformés, des visages dissous, des figures hurlantes dans des espaces clos, cage de verre ou arène circulaire.

S'inspirant de la photographie, des radiographies, des films, Bacon déforme le réel pour atteindre une vérité plus profonde. Ses portraits de papes d'après Velázquez, ses autoportraits, ses hommages à Van Gogh témoignent d'un dialogue constant avec l'histoire de l'art.

Joueur, buveur, amant de George Dyer dont le suicide le marque profondément, Bacon mène une vie aussi intense que son œuvre. Il meurt à Madrid à quatre-vingt-deux ans. Dernier grand peintre figuratif du XXe siècle, il prouve que la figure humaine reste un sujet inépuisable.`,
    mainWorks: ["Trois études de figures au pied d'une Crucifixion", "Étude d'après le portrait du pape Innocent X", "Triptyque inspiré par l'Orestie d'Eschyle", "Trois études de Lucian Freud"],
    keyIdeas: ["Déformation", "Violence", "Figure", "Cri"],
  },
];
