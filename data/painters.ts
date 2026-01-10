export interface Painter {
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

export const painters: Painter[] = [
  {
    id: "giotto",
    name: "Giotto di Bondone",
    birthYear: 1267,
    deathYear: 1337,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Giotto_di_Bondone_-_No._27_Scenes_from_the_Life_of_Christ_-_11._Expulsion_of_the_Money-changers_from_the_Temple.jpg?width=220",
    nationality: "Italien",
    movement: "Proto-Renaissance",
    summary: `Giotto di Bondone nait dans la campagne florentine, peut-etre a Vespignano. Selon la legende, Cimabue l'aurait decouvert enfant, dessinant ses moutons sur une pierre. Il devient l'eleve puis le rival de ce maitre byzantin, rompant avec les conventions medievales.

Ses fresques de la chapelle des Scrovegni a Padoue (1303-1306) revolutionnent la peinture occidentale. Pour la premiere fois, les personnages occupent un espace tridimensionnel credible, expriment des emotions humaines reconnaissables, s'inscrivent dans des paysages naturels.

Giotto introduit le volume par le modele des draperies, la perspective intuitive, l'expression dramatique des visages. Ses compositions narratives influencent toute la peinture italienne ulterieure. Dante le celebre dans la Divine Comedie comme ayant eclipse Cimabue.

Architecte de la cathedrale de Florence, il dessine le celebre campanile qui porte son nom. Giotto meurt a Florence, reconnu de son vivant comme le plus grand peintre de son temps. Vasari voit en lui le pere de la Renaissance, celui qui a ramene la peinture a la verite naturelle.`,
    mainWorks: ["Fresques de la chapelle des Scrovegni", "Fresques d'Assise", "Maesta d'Ognissanti", "Campanile de Florence"],
    keyIdeas: ["Rupture avec le byzantinisme", "Espace tridimensionnel", "Expression des emotions", "Naturalisme"],
  },
  {
    id: "van-eyck",
    name: "Jan van Eyck",
    birthYear: 1390,
    deathYear: 1441,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_a_Man_by_Jan_van_Eyck-small.jpg?width=220",
    nationality: "Flamand",
    movement: "Primitifs flamands",
    summary: `Jan van Eyck nait probablement a Maaseik dans le Limbourg. On sait peu de chose sur sa formation. Il travaille d'abord pour Jean de Baviere a La Haye, puis entre au service de Philippe le Bon, duc de Bourgogne, qui l'emploie comme peintre et diplomate.

Van Eyck perfectionne la technique de la peinture a l'huile au point qu'on lui en a longtemps attribue l'invention. Cette maitrise lui permet des effets de transparence, de brillance et de precision du detail inegales. Ses portraits et scenes religieuses fascinent par leur realisme minutieux.

Le Retable de l'Agneau mystique, acheve en 1432 pour la cathedrale de Gand, est son chef-d'oeuvre. Les Epoux Arnolfini, portrait d'un marchand italien et de son epouse, reste l'une des images les plus enigmatiques de l'histoire de l'art, avec son miroir convexe refletant toute la scene.

Van Eyck meurt a Bruges, au sommet de sa reputation. Sa devise "Als ik kan" (comme je peux) temoigne d'une humilite feinte devant son propre genie. Son influence sur la peinture europeenne est immense, des primitifs flamands aux peintres venitiens qui adopteront sa technique.`,
    mainWorks: ["Retable de l'Agneau mystique", "Les Epoux Arnolfini", "La Vierge du chancelier Rolin", "L'Homme au turban rouge"],
    keyIdeas: ["Peinture a l'huile", "Realisme minutieux", "Symbolisme cache", "Lumiere et texture"],
  },
  {
    id: "botticelli",
    name: "Sandro Botticelli",
    birthYear: 1445,
    deathYear: 1510,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sandro_Botticelli_083.jpg?width=220",
    nationality: "Italien",
    movement: "Renaissance florentine",
    summary: `Alessandro di Mariano di Vanni Filipepi, dit Botticelli, nait a Florence dans une famille d'artisans. Forme dans l'atelier de Fra Filippo Lippi, il developpe un style d'une elegance lineaire incomparable. Proche des Medicis, il baigne dans l'atmosphere neoplatonicienne de leur cour.

La Naissance de Venus et Le Printemps, peints pour la villa Medicis, incarnent l'ideal de beaute de la Renaissance florentine. Ces allegories mythologiques, d'une grace melancolique, celebrent l'amour et la beaute selon la philosophie de Marsile Ficin.

Vers 1490, Botticelli subit l'influence du predicateur Savonarole et sa peinture s'assombrit. Il aurait brule certaines de ses oeuvres profanes. Ses dernieres compositions religieuses temoignent d'une spiritualite tourmentee, loin de la serenite de sa jeunesse.

Oublie apres sa mort, Botticelli est redecouvert par les Preraffaelites au XIXe siecle. Son dessin ondoyant, ses figures etherees, sa palette delicate en font aujourd'hui l'un des peintres les plus aimes du grand public. La Venus reste une icone universelle de la beaute feminine.`,
    mainWorks: ["La Naissance de Venus", "Le Printemps", "L'Adoration des Mages", "La Calomnie d'Apelles", "Illustrations de la Divine Comedie"],
    keyIdeas: ["Grace lineaire", "Neoplatonisme", "Beaute ideale", "Mythologie"],
  },
  {
    id: "leonard-de-vinci",
    name: "Leonard de Vinci",
    birthYear: 1452,
    deathYear: 1519,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Francesco_Melzi_-_Portrait_of_Leonardo.png?width=220",
    nationality: "Italien",
    movement: "Haute Renaissance",
    summary: `Leonardo di ser Piero da Vinci nait a Vinci, en Toscane, fils illegitime d'un notaire. Forme dans l'atelier de Verrocchio a Florence, il manifeste tres tot des dons exceptionnels. Son insatiable curiosite l'amene a etudier l'anatomie, la botanique, la geologie, l'hydraulique, l'optique.

Peintre, Leonard produit peu mais chaque oeuvre est une revolution. La Cene (1495-1498) reinvente la composition narrative. La Joconde, portrait de Lisa Gherardini, devient l'image la plus celebre du monde grace au sfumato, cette technique de fondu atmospherique qu'il invente.

Ses carnets, ecrits en miroir, contiennent des milliers de dessins et notes : projets de machines volantes, etudes anatomiques, observations scientifiques. Leonard incarne l'ideal de l'homme universel de la Renaissance, artiste et savant, ingenieur et philosophe.

Invite par Francois Ier, il s'installe au Clos Luce pres d'Amboise ou il meurt. La legende veut que le roi ait recueilli son dernier souffle. Son influence sur l'art est incommensurable : il eleve la peinture au rang de science et l'artiste au rang de genie.`,
    mainWorks: ["La Joconde", "La Cene", "La Vierge aux rochers", "L'Homme de Vitruve", "La Dame a l'hermine"],
    keyIdeas: ["Sfumato", "Homme universel", "Science et art", "Observation de la nature"],
  },
  {
    id: "michel-ange",
    name: "Michel-Ange",
    birthYear: 1475,
    deathYear: 1564,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg?width=220",
    nationality: "Italien",
    movement: "Haute Renaissance / Manierisme",
    summary: `Michelangelo di Lodovico Buonarroti Simoni nait a Caprese, pres d'Arezzo. Eleve au jardin des Medicis, il etudie l'antique et l'anatomie avec une passion obsessionnelle. A vingt-trois ans, sa Pieta de Saint-Pierre revele un genie sculptural inegale.

Le David (1501-1504), colosse de marbre de plus de quatre metres, incarne l'ideal heroique de la Renaissance florentine. Mais c'est en peinture que Michel-Ange accomplit son oeuvre la plus monumentale : le plafond de la chapelle Sixtine (1508-1512), commande du pape Jules II.

Couche sur un echafaudage pendant quatre ans, il peint seul 343 figures illustrant la Genese, dont la celebre Creation d'Adam. Vingt-cinq ans plus tard, il ajoute le Jugement dernier sur le mur d'autel, vision terrifiante du salut et de la damnation.

Architecte de la coupole de Saint-Pierre, poete a ses heures, Michel-Ange vit jusqu'a quatre-vingt-huit ans, travaillant jusqu'a sa mort. Son art titanesque, sa "terribilita", influence tout le manierisme et le baroque. Il est le premier artiste dont Vasari ecrit la biographie de son vivant.`,
    mainWorks: ["Plafond de la chapelle Sixtine", "Le Jugement dernier", "David", "La Pieta", "Coupole de Saint-Pierre"],
    keyIdeas: ["Terribilita", "Corps heroique", "Neoplatonisme", "Genie tourmente"],
  },
  {
    id: "raphael",
    name: "Raphael",
    birthYear: 1483,
    deathYear: 1520,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Raffaello_Sanzio.jpg?width=220",
    nationality: "Italien",
    movement: "Haute Renaissance",
    summary: `Raffaello Sanzio nait a Urbino, fils d'un peintre de cour. Orphelin a onze ans, il se forme dans l'atelier du Perugin avant de s'installer a Florence puis a Rome. Son caractere aimable lui vaut l'amitie de tous, a l'oppose du solitaire Michel-Ange.

Appele a Rome par Jules II, Raphael decore les Chambres du Vatican. L'Ecole d'Athenes (1509-1511) rassemble les philosophes de l'Antiquite dans une architecture ideale, incarnant l'harmonie entre savoir antique et foi chretienne propre a la Haute Renaissance.

Ses Madones atteignent une perfection sereine qui en fait des modeles de devotion. Portraitiste subtil, architecte de Saint-Pierre apres Bramante, directeur des antiquites romaines, Raphael incarne la grace et l'equilibre classiques face a la puissance tourmentee de Michel-Ange.

Raphael meurt a trente-sept ans, peut-etre d'epuisement ou de fievre. Rome entiere pleure le "prince des peintres". Son influence sur l'academisme est decisive : pendant trois siecles, il represente le modele absolu de la perfection picturale, avant que les modernes ne le contestent.`,
    mainWorks: ["L'Ecole d'Athenes", "La Madone Sixtine", "La Transfiguration", "Portrait de Baldassare Castiglione", "Les Chambres du Vatican"],
    keyIdeas: ["Harmonie classique", "Grace", "Idealisation", "Equilibre"],
  },
  {
    id: "durer",
    name: "Albrecht Durer",
    birthYear: 1471,
    deathYear: 1528,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Albrecht_D%C3%BCrer_-_1500_self-portrait_%28High_resolution_and_detail%29.jpg?width=220",
    nationality: "Allemand",
    movement: "Renaissance nordique",
    summary: `Albrecht Durer nait a Nuremberg, fils d'un orfevre hongrois. Apres un apprentissage dans l'atelier paternel puis chez le peintre Wolgemut, il voyage en Italie ou il decouvre la Renaissance. Il devient le passeur entre l'art italien et le monde germanique.

Durer eleve la gravure au rang d'art majeur. Ses series de l'Apocalypse, de la Grande Passion et de la Vie de la Vierge, ses gravures sur cuivre comme Melencolia I ou Le Chevalier, la Mort et le Diable atteignent une virtuosite technique et une profondeur symbolique inegalees.

Ses autoportraits jalonnent sa carriere, du dessin d'enfant a l'icone christique de 1500. Cette attention a soi-meme, sans precedent dans l'art nordique, temoigne d'une conscience nouvelle du statut de l'artiste. Theoricien, il publie des traites sur les proportions et la perspective.

Ami des humanistes et d'Erasme, proche de Luther, Durer incarne la Renaissance allemande. Il meurt a Nuremberg, artiste reconnu et riche. Son influence sur l'art graphique europeen est immense, de Rembrandt aux graveurs japonais qui decouvrent ses oeuvres au XIXe siecle.`,
    mainWorks: ["Melencolia I", "Le Chevalier, la Mort et le Diable", "Autoportrait a la fourrure", "L'Apocalypse", "Le Lievre"],
    keyIdeas: ["Gravure", "Renaissance nordique", "Theorie de l'art", "Autoportrait"],
  },
  {
    id: "le-caravage",
    name: "Le Caravage",
    birthYear: 1571,
    deathYear: 1610,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bild-Ottavio_Leoni%2C_Caravaggio.jpg?width=220",
    nationality: "Italien",
    movement: "Baroque",
    summary: `Michelangelo Merisi, dit le Caravage, nait a Milan. Orphelin a onze ans, il est forme dans l'atelier de Simone Peterzano. Installe a Rome vers 1592, il vit dans la misere avant d'etre decouvert par le cardinal del Monte qui devient son protecteur.

Le Caravage revolutionne la peinture par son realisme brutal et son usage dramatique du clair-obscur. Ses modeles sont des gens du peuple, ses saints ont les pieds sales, ses scenes religieuses se deroulent dans des tavernes. Cette verite crue scandalise autant qu'elle fascine.

Sa Vocation de saint Matthieu (1599-1600) inaugure une serie de chefs-d'oeuvre pour les eglises romaines. Mais son caractere violent le mene au meurtre en 1606. Il fuit Rome, errant entre Naples, Malte et la Sicile, peignant des oeuvres de plus en plus sombres et tourmentees.

Le Caravage meurt a trente-huit ans sur une plage de Porto Ercole, dans des circonstances mysterieuses. Son influence sur la peinture europeenne est immediate et profonde : Rembrandt, Velazquez, La Tour, Ribera sont ses heritiers. Le "caravagisme" devient un mouvement europeen.`,
    mainWorks: ["La Vocation de saint Matthieu", "Judith decapitant Holopherne", "La Mort de la Vierge", "David avec la tete de Goliath", "Le Souper a Emmaus"],
    keyIdeas: ["Clair-obscur", "Realisme brutal", "Tenebrisme", "Drame sacre"],
  },
  {
    id: "rubens",
    name: "Pierre Paul Rubens",
    birthYear: 1577,
    deathYear: 1640,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rubens_Self-portrait_1623.jpg?width=220",
    nationality: "Flamand",
    movement: "Baroque",
    summary: `Pierre Paul Rubens nait a Siegen, en Westphalie, ou sa famille s'est refugiee. De retour a Anvers apres la mort de son pere, il recoit une education humaniste avant de se former a la peinture. Un sejour de huit ans en Italie (1600-1608) le marque profondement.

De retour a Anvers, Rubens devient le peintre le plus demande d'Europe. Son atelier, veritable entreprise, emploie des dizaines d'assistants dont Van Dyck. Il produit une oeuvre immense : scenes religieuses, mythologies, portraits, paysages, cycles decoratifs.

Son style celebre la chair opulente, le mouvement dramatique, les couleurs chaudes et sensuelles. Le cycle de Marie de Medicis au Louvre, les plafonds de Whitehall a Londres temoignent de son genie decoratif. Diplomate, il negocie la paix entre l'Espagne et l'Angleterre.

Rubens meurt a Anvers, riche et honore. Sa seconde femme, Helene Fourment, inspire ses dernieres oeuvres les plus sensuelles. Son influence sur la peinture europeenne est considerable, de Watteau a Delacroix et Renoir qui admirent sa celebration de la vie et de la beaute feminine.`,
    mainWorks: ["Le Cycle de Marie de Medicis", "La Descente de Croix", "Les Trois Graces", "Le Jardin de l'amour", "Le Jugement de Paris"],
    keyIdeas: ["Sensualite baroque", "Mouvement", "Couleur", "Atelier"],
  },
  {
    id: "velazquez",
    name: "Diego Velazquez",
    birthYear: 1599,
    deathYear: 1660,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Diego_Vel%C3%A1zquez_Autorretrato_45_x_38_cm_-_Colecci%C3%B3n_Real_Academia_de_Bellas_Artes_de_San_Fernando.jpg?width=220",
    nationality: "Espagnol",
    movement: "Baroque / Siecle d'or espagnol",
    summary: `Diego Rodriguez de Silva y Velazquez nait a Seville dans une famille de petite noblesse portugaise. Forme dans l'atelier de Francisco Pacheco dont il epouse la fille, il s'installe a Madrid en 1623 comme peintre de Philippe IV, fonction qu'il occupera toute sa vie.

Velazquez voyage deux fois en Italie ou il etudie les Venitiens et rencontre les maitres contemporains. Son style evolue vers une touche de plus en plus libre, une palette argentee, une attention a l'atmosphere qui anticipe l'impressionnisme de deux siecles.

Les Menines (1656), son chef-d'oeuvre, represente l'infante Marguerite entouree de ses demoiselles d'honneur, tandis que Velazquez lui-meme se peint devant sa toile. Ce jeu de miroirs et de regards interroge la nature meme de la representation.

Anobli par le roi peu avant sa mort, Velazquez reste meconnu hors d'Espagne jusqu'au XIXe siecle. Manet le decouvre a Madrid et le proclame "peintre des peintres". Son influence sur la peinture moderne, de l'impressionnisme a Bacon, est immense.`,
    mainWorks: ["Les Menines", "Les Lances", "Le Portrait d'Innocent X", "Les Fileuses", "Venus a son miroir"],
    keyIdeas: ["Verite optique", "Touche libre", "Jeux de miroirs", "Atmosphere"],
  },
  {
    id: "rembrandt",
    name: "Rembrandt",
    birthYear: 1606,
    deathYear: 1669,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg?width=220",
    nationality: "Neerlandais",
    movement: "Baroque / Age d'or neerlandais",
    summary: `Rembrandt Harmenszoon van Rijn nait a Leyde, fils d'un meunier aise. Forme a Amsterdam, il s'y installe definitivement et connait rapidement le succes. Son mariage avec Saskia van Uylenburgh lui ouvre les portes de la haute societe. La Ronde de nuit (1642) couronne cette periode faste.

Mais la mort de Saskia, puis des difficultes financieres le menent a la faillite en 1656. Ses dernieres annees, vecues dans la pauvrete avec Hendrickje Stoffels et son fils Titus, produisent paradoxalement ses oeuvres les plus profondes, d'une liberte et d'une interiorite bouleversantes.

Rembrandt excelle dans tous les genres mais c'est le portrait, et surtout l'autoportrait, qui revele son genie. Plus de quatre-vingts autoportraits jalonnent sa carriere, chronique impitoyable du vieillissement et meditation sur la condition humaine.

Maitre du clair-obscur, Rembrandt va au-dela du Caravage : sa lumiere n'est pas seulement dramatique, elle est spirituelle. Sa touche, de plus en plus epaisse et libre, influence toute la peinture ulterieure. Trop audacieux pour son temps, il est redecouvert par les romantiques.`,
    mainWorks: ["La Ronde de nuit", "Les Syndics des drapiers", "Le Retour du fils prodigue", "La Fiancee juive", "Autoportraits"],
    keyIdeas: ["Clair-obscur spirituel", "Autoportrait", "Empate", "Interiorite"],
  },
  {
    id: "vermeer",
    name: "Johannes Vermeer",
    birthYear: 1632,
    deathYear: 1675,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jan_Vermeer_van_Delft_002.jpg?width=220",
    nationality: "Neerlandais",
    movement: "Age d'or neerlandais",
    summary: `Johannes Vermeer nait a Delft ou il passe toute sa vie. On sait peu de chose sur sa formation. Maitre de la guilde de Saint-Luc a vingt-et-un ans, il travaille lentement, produisant peut-etre seulement deux ou trois tableaux par an. Il en reste trente-cinq aujourd'hui.

Ses scenes d'interieur montrent des femmes absorbees dans leurs activites quotidiennes : lire une lettre, verser du lait, jouer de la musique. La lumiere du nord, filtree par une fenetre, baigne ces instants suspendus d'une clarte nacrée incomparable.

La Jeune Fille a la perle et La Laitiere comptent parmi les images les plus aimees de l'histoire de l'art. Vermeer utilise probablement une camera obscura pour obtenir ces effets optiques : flous, reflets, pointilles de lumiere qui anticipent la photographie.

Vermeer meurt a quarante-trois ans, laissant onze enfants et des dettes. Oublie pendant deux siecles, il est redecouvert par le critique Thore-Burger en 1866. Sa reputation ne cesse depuis de grandir, et ses rares tableaux atteignent des prix astronomiques.`,
    mainWorks: ["La Jeune Fille a la perle", "La Laitiere", "La Dentelliere", "L'Art de la peinture", "Vue de Delft"],
    keyIdeas: ["Lumiere du Nord", "Intimite", "Silence", "Camera obscura"],
  },
  {
    id: "goya",
    name: "Francisco de Goya",
    birthYear: 1746,
    deathYear: 1828,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vicente_L%C3%B3pez_Porta%C3%B1a_-_el_pintor_Francisco_de_Goya.jpg?width=220",
    nationality: "Espagnol",
    movement: "Romantisme",
    summary: `Francisco Jose de Goya y Lucientes nait a Fuendetodos, en Aragon. Forme a Saragosse puis a Madrid, il voyage en Italie avant de revenir travailler pour la manufacture royale de tapisseries. Ses cartons joyeux montrent une Espagne populaire et festive.

Peintre de la cour de Charles IV, Goya est frappe de surdite vers 1793. Cette epreuve transforme son art. Les Caprices, serie de gravures, denoncent avec une ironie feroce les superstitions et l'injustice sociale. "Le sommeil de la raison engendre des monstres."

L'invasion napoleonienne inspire ses oeuvres les plus violentes : Le Trois Mai 1808 et les Desastres de la guerre temoignent de l'horreur avec une brutalite sans precedent. Les Peintures noires, realisees sur les murs de sa maison, revelent un univers cauchemardesque.

Exile a Bordeaux apres le retour de l'absolutisme, Goya y meurt a quatre-vingt-deux ans. Premier artiste moderne par sa liberte et sa vision critique, il influence tout le XIXe siecle, de Delacroix a Manet, et prefigure l'expressionnisme du XXe.`,
    mainWorks: ["Le Trois Mai 1808", "Les Caprices", "Les Peintures noires", "La Maja nue", "La Famille de Charles IV"],
    keyIdeas: ["Critique sociale", "Cauchemar", "Liberte de l'artiste", "Violence"],
  },
  {
    id: "turner",
    name: "William Turner",
    birthYear: 1775,
    deathYear: 1851,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Joseph_Mallord_William_Turner_auto-retrato.jpg?width=220",
    nationality: "Anglais",
    movement: "Romantisme",
    summary: `Joseph Mallord William Turner nait a Londres, fils d'un barbier. Enfant prodige, il entre a la Royal Academy a quatorze ans. Ses aquarelles topographiques lui valent un succes precoce qui ne se dementira jamais. Il voyage inlassablement en Angleterre et sur le continent.

Turner evolue progressivement vers une dissolution de la forme dans la lumiere. Ses marines, ses tempetes, ses couchers de soleil atteignent une abstraction qui deconcerte ses contemporains. "Peintures de rien et tres ressemblantes", ironise Hazlitt.

Pluie, Vapeur et Vitesse (1844), Le Temeraire et Lumiere et couleur sont des explosions de lumiere ou les formes se dissolvent. Turner anticipe l'impressionnisme de trente ans. Monet, voyant ses toiles a Londres, en reste stupéfait.

Turner meurt a Chelsea, riche et celebre mais solitaire. Il lègue son oeuvre a la nation britannique : 300 peintures et 20 000 dessins et aquarelles. La Tate Britain conserve ce tresor. Longtemps considere comme un precurseur, il est aujourd'hui reconnu comme un maitre absolu.`,
    mainWorks: ["Pluie, Vapeur et Vitesse", "Le Temeraire", "Tempete de neige", "Le Dernier Voyage du Temeraire", "Lumiere et couleur"],
    keyIdeas: ["Lumiere", "Sublime", "Abstraction", "Forces naturelles"],
  },
  {
    id: "delacroix",
    name: "Eugene Delacroix",
    birthYear: 1798,
    deathYear: 1863,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/F%C3%A9lix_Nadar_1820-1910_portraits_Eug%C3%A8ne_Delacroix.jpg?width=220",
    nationality: "Francais",
    movement: "Romantisme",
    summary: `Eugene Delacroix nait a Charenton-Saint-Maurice, officiellement fils d'un prefet, peut-etre en realite de Talleyrand. Orphelin a seize ans, il entre dans l'atelier de Guerin et se lie avec Gericault dont le Radeau de la Meduse l'impressionne profondément.

Les Massacres de Scio (1824) et La Mort de Sardanapale (1827) scandalisent l'Academie par leur violence coloree. La Liberte guidant le peuple (1830) devient l'icone de la revolution de Juillet. Delacroix incarne le romantisme en peinture face au classicisme d'Ingres.

Un voyage au Maroc en 1832 transforme sa palette. Les Femmes d'Alger et les scenes orientales qui suivent revelent une sensualite et une luminosite nouvelles. Delacroix theorie la loi des complementaires et l'influence de la couleur sur l'emotion.

Decorateur du Palais-Bourbon et de Saint-Sulpice, portraitiste, Delacroix tient un Journal qui reste un document majeur sur l'art et la vie artistique. Il meurt a Paris, salue par Baudelaire comme "le plus grand artiste du XIXe siecle". Il ouvre la voie a l'impressionnisme et au fauvisme.`,
    mainWorks: ["La Liberte guidant le peuple", "Les Massacres de Scio", "La Mort de Sardanapale", "Femmes d'Alger", "Jacob luttant avec l'ange"],
    keyIdeas: ["Couleur", "Romantisme", "Orientalisme", "Expression"],
  },
  {
    id: "courbet",
    name: "Gustave Courbet",
    birthYear: 1819,
    deathYear: 1877,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gustave_Courbet_-_Le_D%C3%A9sesp%C3%A9r%C3%A9.jpg?width=220",
    nationality: "Francais",
    movement: "Realisme",
    summary: `Gustave Courbet nait a Ornans, dans le Doubs, dans une famille de proprietaires terriens. Monte a Paris, il se forme en copiant les maitres au Louvre plutot qu'en suivant l'enseignement academique. Son temperament provocateur le destine au scandale.

Un enterrement a Ornans (1850) et L'Atelier du peintre (1855) rompent avec les conventions : Courbet peint des gens ordinaires a l'echelle des tableaux d'histoire, affirmant la dignite du quotidien. Rejete par le Salon, il organise sa propre exposition, le "Pavillon du Realisme".

L'Origine du monde (1866), commande par un diplomate ottoman, montre un sexe feminin avec une franchise inouie. Cache pendant un siecle, le tableau est aujourd'hui au musee d'Orsay. Courbet revendique un art "vivant", ancre dans le materiel et le social.

Engage dans la Commune de Paris, Courbet est emprisonne puis condamne a payer la reconstruction de la colonne Vendome. Il s'exile en Suisse ou il meurt alcoolique. Son realisme influence Manet et les impressionnistes, et son attitude de defi prefigure les avant-gardes.`,
    mainWorks: ["Un enterrement a Ornans", "L'Atelier du peintre", "L'Origine du monde", "Les Casseurs de pierres", "La Vague"],
    keyIdeas: ["Realisme", "Engagement social", "Anticonformisme", "Materialisme"],
  },
  {
    id: "manet",
    name: "Edouard Manet",
    birthYear: 1832,
    deathYear: 1883,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%89douard_Manet%2C_en_buste%2C_de_face_-_Nadar.jpg?width=220",
    nationality: "Francais",
    movement: "Impressionnisme / Realisme",
    summary: `Edouard Manet nait a Paris dans une famille de la haute bourgeoisie. Apres un echec au concours de l'Ecole navale, il entre dans l'atelier de Couture. Ses voyages en Hollande, en Allemagne et en Espagne nourrissent son admiration pour Velazquez et Goya.

Le Dejeuner sur l'herbe (1863) et Olympia (1865) provoquent des scandales retentissants. Ce n'est pas tant le nu qui choque que son traitement : aplats de couleur, suppression des demi-teintes, regard direct de la modele qui defie le spectateur. La modernite en peinture est nee.

Manet refuse pourtant d'exposer avec les impressionnistes, cherchant la reconnaissance officielle. Sa touche libre, sa palette claire, son attention a la vie parisienne en font neanmoins le maitre inconteste du groupe. Le Bar aux Folies Bergere resume son art.

Atteint de syphilis, Manet meurt a cinquante et un ans apres l'amputation d'une jambe. Zola, Mallarme et les impressionnistes saluent celui qui, sans jamais se proclamer revolutionnaire, a bouleverse la peinture et ouvert la voie a l'art moderne.`,
    mainWorks: ["Le Dejeuner sur l'herbe", "Olympia", "Le Bar aux Folies Bergere", "Le Fifre", "Un bar aux Folies-Bergere"],
    keyIdeas: ["Modernite", "Aplats", "Scandale", "Vie parisienne"],
  },
  {
    id: "monet",
    name: "Claude Monet",
    birthYear: 1840,
    deathYear: 1926,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Claude_Monet_1899_Nadar_crop.jpg?width=220",
    nationality: "Francais",
    movement: "Impressionnisme",
    summary: `Claude Monet nait a Paris mais grandit au Havre ou il rencontre Boudin qui l'initie a la peinture en plein air. A Paris, il se lie avec Renoir, Sisley et Bazille. Impression, soleil levant (1872), expose en 1874, donne involontairement son nom au mouvement impressionniste.

Monet poursuit toute sa vie la meme quete : saisir les variations de la lumiere sur les choses. Ses series - les Meules, les Cathedrales de Rouen, les Peupliers - montrent le meme motif a differentes heures et saisons, explorant la perception pure.

Installe a Giverny en 1883, il cree le jardin d'eau aux nympheas qui devient son sujet exclusif. Les grandes Decorations des Nympheas, donnees a l'Etat, sont installees a l'Orangerie des Tuileries : immersion dans un espace de couleur et de lumiere, aux limites de l'abstraction.

Presque aveugle dans ses dernieres annees, Monet continue de peindre. Il meurt a Giverny a quatre-vingt-six ans. L'impressionnisme, longtemps meprise, triomphe : Monet est aujourd'hui l'un des peintres les plus populaires au monde. Giverny est un lieu de pelerinage.`,
    mainWorks: ["Impression, soleil levant", "Les Nympheas", "La Cathedrale de Rouen", "Les Meules", "Femmes au jardin"],
    keyIdeas: ["Impression", "Lumiere", "Serie", "Plein air"],
  },
  {
    id: "renoir",
    name: "Auguste Renoir",
    birthYear: 1841,
    deathYear: 1919,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pierre-Auguste_Renoir_Photo.jpg?width=220",
    nationality: "Francais",
    movement: "Impressionnisme",
    summary: `Pierre-Auguste Renoir nait a Limoges dans une famille modeste. Apprenti peintre sur porcelaine, il monte a Paris et entre a l'Ecole des Beaux-Arts. Aux cotes de Monet, Sisley et Bazille, il participe a l'aventure impressionniste des annees 1870.

Le Moulin de la Galette (1876) et Le Dejeuner des canotiers (1881) celebrent les plaisirs de la vie parisienne avec une joie sensuelle. La touche de Renoir, fluide et chaude, caresse les corps feminins et les paysages ensoleilles d'une meme tendresse.

Vers 1883, Renoir traverse une "crise ingresque", cherchant plus de rigueur dans le dessin. Puis il revient a une maniere plus libre, aux tons roses et nacrés, peignant des baigneuses opulentes qui rappellent Rubens. L'arthrite deforme ses mains mais il continue de peindre.

Installe a Cagnes-sur-Mer, Renoir meurt a soixante-dix-huit ans. Sa celebration de la beauté feminine et du bonheur de vivre en fait l'un des peintres les plus aimes. Certains lui reprochent une vision trop heureuse ; d'autres admirent cette affirmation de la joie comme valeur supreme.`,
    mainWorks: ["Le Moulin de la Galette", "Le Dejeuner des canotiers", "Les Grandes Baigneuses", "La Balancoire", "Les Parapluies"],
    keyIdeas: ["Joie de vivre", "Femme", "Lumiere", "Sensualite"],
  },
  {
    id: "cezanne",
    name: "Paul Cezanne",
    birthYear: 1839,
    deathYear: 1906,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Paul_C%C3%A9zanne_photographed_by_Pierre_Petit_in_1861.jpg?width=220",
    nationality: "Francais",
    movement: "Post-impressionnisme",
    summary: `Paul Cezanne nait a Aix-en-Provence, fils d'un banquier. Ami d'enfance de Zola, il monte a Paris et frequente les impressionnistes sans jamais se sentir des leurs. Timide, irascible, doutant constamment de son talent, il travaille dans une solitude obstinee.

Cezanne veut "traiter la nature par le cylindre, la sphere, le cone", retrouver une structure sous les apparences. Ses natures mortes, ses portraits, ses paysages de Provence construisent l'espace par la couleur, par des "modulations" plutot que par le modele traditionnel.

La Montagne Sainte-Victoire, peinte des dizaines de fois, devient son motif obsessionnel. Les Grandes Baigneuses, aboutissement de trente ans de recherches, reunissent figures et paysage dans une architecture monumentale. Cezanne renonce au fini au profit de la verite.

Incompris de son vivant, Cezanne est decouvert par la jeune generation au Salon d'Automne de 1907. Picasso, Braque, Matisse reconnaissent en lui le "pere de nous tous". Le cubisme et l'abstraction naissent de sa lecon. Il meurt a Aix d'une pneumonie apres avoir peint sous l'orage.`,
    mainWorks: ["Les Joueurs de cartes", "La Montagne Sainte-Victoire", "Les Grandes Baigneuses", "Pommes et oranges", "Les Baigneurs"],
    keyIdeas: ["Structure", "Modulation", "Nature morte", "Pere de l'art moderne"],
  },
  {
    id: "van-gogh",
    name: "Vincent van Gogh",
    birthYear: 1853,
    deathYear: 1890,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg?width=220",
    nationality: "Neerlandais",
    movement: "Post-impressionnisme",
    summary: `Vincent Willem van Gogh nait a Groot-Zundert, aux Pays-Bas, fils d'un pasteur. Apres des echecs comme marchand d'art et predicateur, il se tourne vers la peinture a vingt-sept ans. Ses premieres oeuvres, sombres et terreuses, montrent les paysans et mineurs du Borinage.

A Paris (1886-1888), il decouvre l'impressionnisme et les estampes japonaises. Sa palette s'eclaircit, sa touche s'accelere. A Arles, il reve d'une communaute d'artistes. L'arrivee de Gauguin tourne au drame : crise de folie, oreille coupée, internement.

A l'asile de Saint-Remy puis a Auvers-sur-Oise, Van Gogh peint frenetiquement : cypres tourmentés, nuits etoilees, champs de ble sous un ciel menaçant. Sa touche en spirales exprime une tension interieure insoutenable. En deux ans, il produit 900 tableaux.

Van Gogh se tire une balle dans la poitrine et meurt deux jours plus tard a trente-sept ans. N'ayant vendu qu'un seul tableau de son vivant, il devient au XXe siecle l'un des peintres les plus chers et les plus populaires au monde. Sa correspondance avec Theo est un monument litteraire.`,
    mainWorks: ["La Nuit etoilee", "Les Tournesols", "Chambre a Arles", "Les Mangeurs de pommes de terre", "Autoportraits"],
    keyIdeas: ["Expression", "Couleur pure", "Tourment", "Correspondance"],
  },
  {
    id: "gauguin",
    name: "Paul Gauguin",
    birthYear: 1848,
    deathYear: 1903,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Paul_Gauguin_1891.png?width=220",
    nationality: "Francais",
    movement: "Post-impressionnisme / Synthetisme",
    summary: `Paul Gauguin nait a Paris mais passe son enfance au Perou. Agent de change prospere, il peint en amateur avant de tout quitter pour l'art a trente-cinq ans. Cette rupture radicale ruine sa vie familiale et le condamne a la misere.

En Bretagne, a Pont-Aven, Gauguin developpe le synthetisme : formes cernees, couleurs aplaties, abandon de la perspective. La Vision apres le sermon (1888) marque la rupture avec l'impressionnisme. La forme doit exprimer l'idee, non imiter la nature.

Fuyant la civilisation, Gauguin s'installe a Tahiti en 1891 puis aux Marquises. D'ou venons-nous ? Que sommes-nous ? Ou allons-nous ? (1897) resume sa quete spirituelle. Ses Vahinés aux couleurs eclatantes inventent un eden primitif, fantasme plus que realite.

Malade, miserable, en conflit avec les autorites coloniales, Gauguin meurt a Atuona. Son influence sur les Nabis, le fauvisme et l'expressionnisme est decisive. Il incarne le mythe de l'artiste maudit, sacrifiant tout a sa vision.`,
    mainWorks: ["D'ou venons-nous ? Que sommes-nous ? Ou allons-nous ?", "La Vision apres le sermon", "Manao Tupapau", "Arearea", "Autoportrait au Christ jaune"],
    keyIdeas: ["Primitivisme", "Synthetisme", "Exotisme", "Fuite de la civilisation"],
  },
  {
    id: "toulouse-lautrec",
    name: "Henri de Toulouse-Lautrec",
    birthYear: 1864,
    deathYear: 1901,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Henri_de_Toulouse-Lautrec_-_Autoportrait_-_1880.jpg?width=220",
    nationality: "Francais",
    movement: "Post-impressionnisme",
    summary: `Henri de Toulouse-Lautrec nait a Albi dans l'une des plus anciennes familles nobles de France. Deux chutes dans l'enfance brisent ses jambes qui cessent de grandir. Ce handicap le marginalise et le pousse vers le monde de la nuit parisienne.

Installe a Montmartre, Lautrec devient le chroniqueur du Moulin Rouge, des cafes-concerts, des maisons closes. La Goulue, Yvette Guilbert, Jane Avril revivent sous son pinceau acere. Ses affiches revolutionnent l'art graphique : aplats, cadrages audacieux, lignes expressives.

Lautrec dessine sans relache, avec une virtuosite cruelle. Ses personnages, dancers, prostituees, clients, ne sont jamais idealises. Son regard est tendre mais lucide, complice mais implacable. L'influence de Degas et des estampes japonaises nourrit son style.

L'alcool mine sa sante. Interne puis libere, il meurt a trente-six ans dans le chateau familial. Son oeuvre, produite en moins de vingt ans, reste l'une des plus vivantes de la fin du XIXe siecle. Ses affiches ont transforme la publicite en art.`,
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
    movement: "Art nouveau / Secession viennoise",
    summary: `Gustav Klimt nait a Baumgarten pres de Vienne, fils d'un orfevre. Forme a l'Ecole des arts decoratifs, il connait un succes precoce comme decorateur officiel. Mais en 1897, il fonde la Secession viennoise, rompant avec l'academisme pour promouvoir un art total.

Les peintures allegoriques pour l'Universite de Vienne provoquent un scandale : leur erotisme et leur pessimisme choquent. Klimt renonce aux commandes officielles et developpe son style caractéristique : figures realistes sur fonds ornementaux abstraits, or et motifs decoratifs.

Le Baiser (1907-1908) et le Portrait d'Adele Bloch-Bauer incarnent sa "periode doree". L'influence de l'art byzantin, des mosaiques de Ravenne et de l'art japonais se fond dans une esthetique unique. Ses femmes, sensuelles et hieratiques, sont devenues des icones.

Klimt meurt de la grippe espagnole, laissant des oeuvres inachevees. Longtemps reduit au decoratif, il est aujourd'hui reconnu comme un maitre, pont entre symbolisme et modernité. Le Baiser est l'une des images les plus reproduites au monde.`,
    mainWorks: ["Le Baiser", "Portrait d'Adele Bloch-Bauer I", "L'Arbre de vie", "Judith et Holopherne", "Danae"],
    keyIdeas: ["Or", "Secession", "Eros et Thanatos", "Ornementation"],
  },
  {
    id: "matisse",
    name: "Henri Matisse",
    birthYear: 1869,
    deathYear: 1954,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_Henri_Matisse_1933_May_20.jpg?width=220",
    nationality: "Francais",
    movement: "Fauvisme",
    summary: `Henri Matisse nait au Cateau-Cambresis, dans le Nord. Clerc de notaire, il decouvre la peinture pendant une convalescence et y trouve sa vocation. Forme chez Gustave Moreau, il evolue rapidement vers une liberte chromatique radicale.

Au Salon d'Automne de 1905, ses toiles aux couleurs pures et violentes provoquent le scandale : un critique parle de "cage aux fauves". La Femme au chapeau et La Joie de vivre affirment une couleur autonome, liberee de la representation. Le fauvisme est ne.

Apres cette explosion, Matisse cherche l'equilibre et l'harmonie. Odalisques, natures mortes, interieurs au Maroc temoignent d'une quete de "luxe, calme et volupte". La couleur reste son moyen d'expression privilegie, mais la composition s'apaise.

Dans ses dernieres annees, immobilise, Matisse invente les gouaches decoupees : formes de papier peint et assemble, aboutissement de sa recherche. La chapelle de Vence, qu'il decore entierement, resume sa vie. Il meurt a Nice, reconnu comme l'un des plus grands coloristes de l'histoire.`,
    mainWorks: ["La Danse", "La Joie de vivre", "L'Atelier rouge", "Nu bleu", "La Chapelle de Vence"],
    keyIdeas: ["Couleur pure", "Fauvisme", "Harmonie", "Decoupage"],
  },
  {
    id: "picasso",
    name: "Pablo Picasso",
    birthYear: 1881,
    deathYear: 1973,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_de_Picasso%2C_1908.jpg?width=220",
    nationality: "Espagnol",
    movement: "Cubisme / Surrealisme",
    summary: `Pablo Ruiz Picasso nait a Malaga, fils d'un professeur de dessin. Enfant prodige, il maitrise tous les styles academiques avant vingt ans. A Paris, ses periodes bleue et rose explorent la melancolie et la tendresse avec une maitrise classique.

Les Demoiselles d'Avignon (1907) rompt avec cinq siecles de representation occidentale. Avec Braque, Picasso invente le cubisme : l'objet est decompose, montre sous plusieurs angles simultanement. Collages, papiers colles poussent l'experimentation plus loin.

Picasso traverse tous les styles du XXe siecle, les inventant ou les reinventant : neoclassicisme, surrealisme, expressionnisme. Guernica (1937), reponse au bombardement de la ville basque, reste le chef-d'oeuvre de l'art engage. Son energie creatrice semble inepuisable.

Picasso meurt a Mougins a quatre-vingt-onze ans, laissant une oeuvre immense : 50 000 pieces. Figure du genie moderne, seducteur legendaire, communiste affiche, il domine l'art du XXe siecle. Son influence sur la peinture, la sculpture, la ceramique reste incommensurable.`,
    mainWorks: ["Les Demoiselles d'Avignon", "Guernica", "Les Menines (variations)", "Le Vieux Guitariste aveugle", "La Femme qui pleure"],
    keyIdeas: ["Cubisme", "Reinvention permanente", "Genie protéiforme", "Engagement"],
  },
  {
    id: "kandinsky",
    name: "Wassily Kandinsky",
    birthYear: 1866,
    deathYear: 1944,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Wassily_Kandinsky_c1913.jpg?width=220",
    nationality: "Russe",
    movement: "Abstraction",
    summary: `Vassily Kandinsky nait a Moscou dans une famille aisee. Juriste et economiste, il abandonne une carriere universitaire a trente ans pour etudier la peinture a Munich. Une revelation devant une meule de Monet et l'ecoute de Wagner declenchent sa vocation.

En 1910, Kandinsky peint ce qui est considere comme la premiere aquarelle abstraite. Du Spirituel dans l'art (1911) theorise cette revolution : l'art doit exprimer la "necessite interieure", non imiter la nature. Formes et couleurs ont une valeur en soi, comme les notes musicales.

Fondateur du Blaue Reiter a Munich, professeur au Bauhaus, Kandinsky developpe un vocabulaire abstrait de plus en plus geometrique. Cercles, triangles, lignes s'organisent selon des lois propres, sans reference au monde visible.

Exile a Paris apres la fermeture du Bauhaus par les nazis, Kandinsky meurt a Neuilly. Avec Mondrian et Malevitch, il est l'un des fondateurs de l'art abstrait. Son influence sur l'expressionnisme abstrait americain et l'art contemporain est fondamentale.`,
    mainWorks: ["Composition VIII", "Jaune-rouge-bleu", "Premiere aquarelle abstraite", "Quelques cercles", "Du Spirituel dans l'art"],
    keyIdeas: ["Abstraction", "Necessite interieure", "Synesthesie", "Spiritualite"],
  },
  {
    id: "mondrian",
    name: "Piet Mondrian",
    birthYear: 1872,
    deathYear: 1944,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Piet_Mondriaan.jpg?width=220",
    nationality: "Neerlandais",
    movement: "De Stijl / Neo-plasticisme",
    summary: `Piet Mondrian nait a Amersfoort, aux Pays-Bas, dans une famille calviniste stricte. Forme a l'Academie d'Amsterdam, il evolue du naturalisme vers une abstraction progressive. Ses series d'arbres montrent ce cheminement vers l'essentiel.

A Paris avant la guerre, Mondrian decouvre le cubisme qui accelere son evolution. De retour aux Pays-Bas, il fonde avec Theo van Doesburg le mouvement De Stijl et elabore le neo-plasticisme : seules les lignes droites et les couleurs primaires peuvent exprimer l'universel.

Ses compositions en grilles noires et rectangles de rouge, jaune et bleu atteignent une rigueur absolue. Mondrian y voit l'expression de l'harmonie universelle, l'equilibre entre les contraires. Son ascetisme n'exclut pas une sensibilite vibrante.

Exile a Londres puis a New York, Mondrian decouvre le jazz et peint ses derniers chefs-d'oeuvre : Broadway Boogie-Woogie pulse d'une energie nouvelle. Il meurt a New York, influence majeure sur l'architecture, le design et l'art minimaliste.`,
    mainWorks: ["Composition avec rouge, jaune et bleu", "Broadway Boogie-Woogie", "Victory Boogie-Woogie", "L'Arbre gris", "Composition en rouge, bleu et jaune"],
    keyIdeas: ["Neo-plasticisme", "Grille", "Couleurs primaires", "Harmonie universelle"],
  },
  {
    id: "dali",
    name: "Salvador Dali",
    birthYear: 1904,
    deathYear: 1989,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Salvador_Dal%C3%AD_1939.jpg?width=220",
    nationality: "Espagnol",
    movement: "Surrealisme",
    summary: `Salvador Domingo Felipe Jacinto Dali i Domenech nait a Figueras, en Catalogne. Enfant prodige narcissique, il etudie a l'Academie de Madrid ou il se lie avec Lorca et Bunuel. Ses premieres oeuvres oscillent entre cubisme, realisme et metaphysique.

En 1929, Dali rejoint le groupe surrealiste et developpe sa "methode paranoiaque-critique" : hallucinations et delires systematises produisent des images doubles, des formes molles, des paysages oniriques. La Persistance de la memoire et ses montres molles deviennent iconiques.

Expulse du groupe par Breton, Dali cultive sa legende : moustaches extravagantes, declarations provocantes, sens aigu de la publicite. Son talent technique, herité des maitres anciens, sert une imagination debridee. Peinture, cinema, mode, design : Dali est partout.

Installe a Port Lligat avec Gala, sa muse et manager, Dali cree un musee-theatre a Figueras ou il est enterre. Figure la plus celebre du surrealisme, artiste le plus mediatique de son temps, il reste controverse : genie ou charlatan ? Son oeuvre fascine toujours.`,
    mainWorks: ["La Persistance de la memoire", "Metamorphose de Narcisse", "Christ de saint Jean de la Croix", "Le Grand Masturbateur", "Les Elephants"],
    keyIdeas: ["Paranoiaque-critique", "Onirique", "Mou et dur", "Auto-mythification"],
  },
  {
    id: "frida-kahlo",
    name: "Frida Kahlo",
    birthYear: 1907,
    deathYear: 1954,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg?width=220",
    nationality: "Mexicaine",
    movement: "Surrealisme / Art mexicain",
    summary: `Magdalena Carmen Frida Kahlo Calderon nait a Coyoacan, pres de Mexico. A six ans, la poliomyelite atrophie sa jambe droite. A dix-huit ans, un terrible accident de bus la laisse brisee, condamnee a des dizaines d'operations et a une souffrance chronique.

Immobilisee, Frida commence a peindre, surtout des autoportraits : "Je me peins moi-meme parce que je suis si souvent seule." Ses tableaux, petits et intenses, melent realisme mexicain, symbolisme precolombien et imagerie populaire. La douleur physique et emotionnelle y est omnipresente.

Son mariage avec Diego Rivera, deux fois celebre et deux fois rompu, est une passion tumultueuse. Communiste engagee, elle accueille Trotski. Andre Breton voit en elle une surrealiste, mais Frida refuse l'etiquette : "Je peins ma propre realite."

Frida meurt a quarante-sept ans, epuisee par la maladie. Longtemps eclipsee par Rivera, elle est redécouverte par le feminisme et la culture mexicaine. Ses autoportraits aux sourcils joints sont devenus des icones, symboles de la souffrance transcendee par l'art.`,
    mainWorks: ["Les Deux Fridas", "La Colonne brisee", "Autoportrait aux singes", "Henry Ford Hospital", "Diego et moi"],
    keyIdeas: ["Autoportrait", "Souffrance", "Mexicanite", "Feminisme"],
  },
  {
    id: "pollock",
    name: "Jackson Pollock",
    birthYear: 1912,
    deathYear: 1956,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jackson-pollock.jpg?width=220",
    nationality: "Americain",
    movement: "Expressionnisme abstrait",
    summary: `Jackson Pollock nait a Cody, dans le Wyoming. Eleve de Thomas Hart Benton a New York, il est marque par les muralistes mexicains et l'art des Indiens Navajos. L'analyse jungienne l'aide a surmonter son alcoolisme tout en nourrissant son imaginaire.

En 1947, Pollock invente le "dripping" : la toile posee au sol, il projette, goutte, fait couler la peinture avec des batons, des truelles. Ce geste libere de tout controle conscient produit des entrelacs rythmiques d'une energie primitive. L'action painting est nee.

Number 1A, Autumn Rhythm, Blue Poles temoignent de cette methode. Pollock elimine le chevalet, le pinceau, la figuration. La peinture devient trace d'une danse, enregistrement d'un corps en mouvement. New York remplace Paris comme capitale de l'art.

Pollock meurt a quarante-quatre ans dans un accident de voiture, ivre, tuant une passagere. Sa vie courte et tragique, son art radical font de lui le heros de l'avant-garde americaine. Son influence sur l'art contemporain, du happening au street art, reste immense.`,
    mainWorks: ["Number 1A", "Autumn Rhythm", "Blue Poles", "Mural", "Lavender Mist"],
    keyIdeas: ["Dripping", "Action painting", "All-over", "Automatisme"],
  },
  {
    id: "warhol",
    name: "Andy Warhol",
    birthYear: 1928,
    deathYear: 1987,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Andy_Warhol_1975.jpg?width=220",
    nationality: "Americain",
    movement: "Pop Art",
    summary: `Andrew Warhola nait a Pittsburgh dans une famille d'immigres slovaques. Illustrateur publicitaire a succes a New York, il se tourne vers l'art en reproduisant des images de la culture de masse : boites de soupe Campbell, bouteilles de Coca-Cola, billets de banque.

La Factory, son atelier, devient le lieu de toutes les experimentations : serigraphies reproduites mecaniquement, films d'avant-garde, musique avec le Velvet Underground. Warhol cultive l'ambiguite entre art et commerce, original et reproduction, surface et profondeur.

Ses portraits de Marilyn, Elvis, Mao utilisent la repetition et les couleurs criardes pour vider l'image de son aura tout en creant une nouvelle icone. "Je voudrais etre une machine", declare-t-il, brouillant la frontiere entre artiste et entrepreneur.

En 1968, Valerie Solanas lui tire dessus ; il survit de justesse. Ce trauma assombrit ses dernieres annees mais n'arrete pas sa production. Warhol meurt a cinquante-huit ans de complications postoperatoires. Son influence sur l'art, la mode, les medias reste omniprésente.`,
    mainWorks: ["Marilyn Diptych", "Campbell's Soup Cans", "Shot Marilyns", "Brillo Boxes", "Electric Chair"],
    keyIdeas: ["Pop Art", "Reproduction mecanique", "Celebrite", "Surface"],
  },
  {
    id: "bacon",
    name: "Francis Bacon",
    birthYear: 1909,
    deathYear: 1992,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Francis_Bacon.jpg?width=220",
    nationality: "Irlandais",
    movement: "Expressionnisme / Art figuratif",
    summary: `Francis Bacon nait a Dublin de parents anglais. Chasse de chez lui a seize ans pour son homosexualite, il vit entre Londres, Berlin et Paris, travaillant comme decorateur. Autodidacte en peinture, il detruit la plupart de ses oeuvres de jeunesse.

Trois etudes de figures au pied d'une Crucifixion (1944) revele une vision cauchemardesque qui choque le Londres d'apres-guerre. Bacon peint des corps déformes, des visages dissous, des figures hurlantes dans des espaces clos, cage de verre ou arene circulaire.

S'inspirant de la photographie, des radiographies, des films, Bacon deforme le reel pour atteindre une verite plus profonde. Ses portraits de papes d'apres Velazquez, ses autoportraits, ses hommages a Van Gogh temoignent d'un dialogue constant avec l'histoire de l'art.

Joueur, buveur, amant de George Dyer dont le suicide le marque profondement, Bacon mene une vie aussi intense que son oeuvre. Il meurt a Madrid a quatre-vingt-deux ans. Dernier grand peintre figuratif du XXe siecle, il prouve que la figure humaine reste un sujet inepuisable.`,
    mainWorks: ["Trois etudes de figures au pied d'une Crucifixion", "Etude d'apres le portrait du pape Innocent X", "Triptyque inspire par l'Orestie d'Eschyle", "Trois etudes de Lucian Freud"],
    keyIdeas: ["Deformation", "Violence", "Figure", "Cri"],
  },
];
