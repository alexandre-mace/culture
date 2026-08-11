export interface DecorativeStyle {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  image?: string;
  nationality: string;
  movement: string;
  family?: string;
  influences?: string[];
  summary: string;
  mainWorks: string[];
  itemType?: "person" | "topic";
  keyIdeas: string[];
}

export const decorativeStyles: DecorativeStyle[] = [
  {
    id: "gothique",
    name: "Gothique",
    birthYear: 1140,
    deathYear: 1500,
    nationality: "Français",
    movement: "Moyen Âge",
    family: "Styles anciens",
    summary: `Le style gothique naît en Île-de-France au milieu du XIIe siècle, d'abord en architecture avec la basilique de Saint-Denis. Il se répand ensuite au mobilier et aux arts décoratifs, dominant l'Europe occidentale pendant plus de trois siècles.

Le mobilier gothique se caractérise par ses formes architecturales : arcs brisés, pinacles, rosaces et fenestrages décorent coffres, armoires et stalles. Le bois de chêne, robuste et sculpté, est le matériau dominant. Les meubles sont souvent polychromes.

Les coffres sont les pièces essentielles, servant au rangement et au transport. Les sièges restent rares et réservés aux puissants : la chaire seigneuriale trône dans la grande salle. Les lits à baldaquin protègent du froid et créent une intimité.

Le gothique flamboyant du XVe siècle porte l'ornementation à son paroxysme. Mais la Renaissance italienne, puis française, impose progressivement de nouveaux modèles. Le gothique survit cependant dans les provinces jusqu'au XVIe siècle et sera redécouvert par les romantiques au XIXe.`,
    mainWorks: ["Coffres à panneaux sculptés", "Stalles de chœur", "Armoires à deux corps", "Dressoirs"],
    keyIdeas: ["Arc brisé", "Sculpture sur chêne", "Formes architecturales", "Polychromie"],
  },
  {
    id: "renaissance",
    name: "Renaissance",
    birthYear: 1450,
    deathYear: 1610,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Sandro_Botticelli_046.jpg/330px-Sandro_Botticelli_046.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Italien / Français",
    movement: "Renaissance",
    family: "Styles anciens",
    summary: `La Renaissance naît en Italie au XVe siècle, redécouvrant l'Antiquité gréco-romaine. Les arts décoratifs s'inspirent des motifs antiques : colonnes, frontons, grotesques, rinceaux, arabesques. Le mobilier devient un art à part entière, signe de richesse et de culture.

En France, les guerres d'Italie introduisent le style Renaissance sous François Ier. Le château de Fontainebleau devient un laboratoire où artistes italiens et français mêlent leurs influences. Le noyer remplace progressivement le chêne, permettant une sculpture plus fine.

Les cabinets, meubles de prestige garnis de tiroirs secrets, atteignent une sophistication extrême. Les lits à colonnes torsadées, les tables à entretoise en H, les sièges caquetoires définissent le vocabulaire Renaissance. La marqueterie et les incrustations de marbre enrichissent les surfaces.

Le style Henri II (1547-1610) développe un langage proprement français : cariatides, termes, cartouches cuirs. L'ébène, bois noir et précieux, fait son apparition. La Renaissance française prépare les fastes du Grand Siècle et l'avènement du style Louis XIV.`,
    mainWorks: ["Cabinets d'ébène", "Lits à colonnes", "Caquetoires", "Dressoirs à deux corps"],
    keyIdeas: ["Antiquité", "Noyer sculpté", "Grotesques", "Cabinet de curiosités"],
  },
  {
    id: "baroque",
    name: "Baroque / Louis XIV",
    birthYear: 1610,
    deathYear: 1715,
    nationality: "Français",
    movement: "Grand Siècle",
    family: "Styles anciens",
    influences: ["renaissance"],
    summary: `Le style Louis XIV, expression française du baroque européen, incarne la grandeur et la puissance de la monarchie absolue. Versailles, chantier de cinquante ans, définit un art officiel où les arts décoratifs servent la gloire du Roi-Soleil.

La Manufacture des Gobelins, fondée en 1662, réunit sous la direction de Le Brun tous les corps de métiers : ébénistes, bronziers, tapissiers, orfèvres. Cette organisation produit un mobilier d'apparat somptueux, destiné aux résidences royales et aux cadeaux diplomatiques.

André-Charles Boulle invente la marqueterie qui porte son nom : écaille de tortue et laiton découpés en arabesques, incrustés sur des meubles monumentaux. Les bronzes dorés, les marbres polychromes, les velours et brocarts complètent ce vocabulaire de la magnificence.

Le mobilier Louis XIV est imposant, symétrique, richement orné. Armoires, commodes, bureaux, guéridons, consoles constituent un répertoire nouveau. Les pieds en gaine, les masques solaires, les trophées guerriers affirment un style qui rayonne sur toute l'Europe.`,
    mainWorks: ["Marqueterie Boulle", "Armoires de Versailles", "Bureaux Mazarin", "Guéridons en bois doré"],
    keyIdeas: ["Magnificence", "Symétrie", "Bronzes dorés", "Manufacture royale"],
  },
  {
    id: "rococo",
    name: "Rococo / Louis XV",
    birthYear: 1715,
    deathYear: 1774,
    nationality: "Français",
    movement: "Siècle des Lumières",
    family: "Styles anciens",
    influences: ["baroque"],
    summary: `À la mort de Louis XIV en 1715, une réaction contre la pompe versaillaise s'amorce. Le Régent puis Louis XV privilégient l'intimité, le confort, la légèreté. Le style rocaille, ou rococo, impose ses courbes, ses asymétries, ses ornements naturels.

Le mobilier s'adapte aux nouveaux modes de vie. Les petits appartements remplacent les grands salons. Les meubles se multiplient et se spécialisent : bergères, duchesses, chiffonniers, bonheurs-du-jour répondent à des usages précis. Le siège devient un art français par excellence.

Les ébénistes parisiens, organisés en corporation, atteignent une virtuosité technique inégalée. Jean-François Oeben, Bernard van Risenburgh (BVRB), Charles Cressent créent des commodes galbées, ornées de bronzes rocailles et de marqueteries florales d'une grâce exquise.

Les vernis Martin imitent les laques d'Extrême-Orient. La porcelaine de Sèvres orne les meubles de luxe. Paris devient la capitale européenne du meuble, exportant ses créations vers toutes les cours. Le rococo français influence l'Allemagne, la Russie, l'Italie.`,
    mainWorks: ["Commodes galbées", "Bergères", "Bureau à cylindre", "Secrétaires en marqueterie florale"],
    keyIdeas: ["Courbes", "Asymétrie", "Rocaille", "Intimité"],
  },
  {
    id: "neoclassique",
    name: "Néoclassicisme / Louis XVI",
    birthYear: 1760,
    deathYear: 1792,
    nationality: "Français",
    movement: "Siècle des Lumières",
    family: "Styles anciens",
    influences: ["rococo"],
    summary: `Dès les années 1760, une réaction contre les excès du rococo s'amorce. Les découvertes d'Herculanum et Pompéi, les écrits de Winckelmann inspirent un retour à l'antique. Les lignes droites, les formes géométriques, les motifs grecs et romains s'imposent.

Le style Louis XVI, bien que porté par le nom du roi, débute sous Louis XV. Les pieds droits cannelés, les frises de perles et rais-de-cœur, les médaillons ovales, les nœuds de ruban définissent un vocabulaire élégant et raffiné. L'acajou remplace progressivement les bois clairs.

Jean-Henri Riesener, ébéniste favori de Marie-Antoinette, produit des chefs-d'œuvre de marqueterie pour les résidences royales. David Roentgen apporte la mécanique allemande. Adam Weisweiler et Guillaume Beneman complètent ce panthéon des grands ébénistes.

Le néoclassicisme Louis XVI atteint une perfection formelle rarement égalée. La Révolution interrompt brutalement cette production de luxe. Mais le vocabulaire néoclassique survit et s'épanouit sous le Directoire et l'Empire, avec une sévérité accrue.`,
    mainWorks: ["Secrétaires à abattant", "Commodes demi-lune", "Meubles de Riesener", "Sièges médaillons"],
    keyIdeas: ["Lignes droites", "Antique", "Acajou", "Raffinement"],
  },
  {
    id: "directoire-empire",
    name: "Empire",
    birthYear: 1799,
    deathYear: 1815,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Globe_dor%C3%A9_Pont_Alexandre_III_Paris..jpg/330px-Globe_dor%C3%A9_Pont_Alexandre_III_Paris..jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Époque napoléonienne",
    family: "XIXe siècle",
    influences: ["neoclassique"],
    summary: `Le style Empire, né sous le Consulat et épanoui sous Napoléon Ier, traduit en arts décoratifs l'ambition impériale. Les architectes Percier et Fontaine, décorateurs officiels, définissent un style sévère et majestueux, inspiré de l'Antiquité romaine et de l'Égypte.

L'acajou massif, les bronzes dorés, les marbres composent un mobilier monumental. Les motifs napoléoniens - aigles, abeilles, N couronnés - côtoient les références antiques : sphinges, victoires ailées, griffons, palmettes. La symétrie est absolue, la ligne droite domine.

Jacob-Desmalter, héritier de la dynastie des Jacob, fournit les palais impériaux. Le lit de camp, la psyché, l'athénienne, la méridienne enrichissent le répertoire. Les tissus somptueux - velours, soies lyonnaises - tapissent murs et sièges dans des harmonies de vert, pourpre et or.

Le style Empire rayonne sur l'Europe conquise, de Madrid à Moscou. Sa rigueur marque durablement le goût français. Après la chute de Napoléon, le style Restauration adoucit ses formes, mais le vocabulaire Empire reste influent pendant tout le XIXe siècle.`,
    mainWorks: ["Mobilier de Fontainebleau", "Lit de l'impératrice Joséphine", "Commodes Jacob-Desmalter", "Athéniennes"],
    keyIdeas: ["Antiquité romaine", "Acajou et bronzes", "Aigles et abeilles", "Monumentalité"],
  },
  {
    id: "restauration",
    name: "Restauration / Charles X",
    birthYear: 1815,
    deathYear: 1830,
    nationality: "Français",
    movement: "XIXe siècle",
    family: "XIXe siècle",
    influences: ["directoire-empire"],
    summary: `Après la chute de Napoléon, la Restauration des Bourbons (1815-1830) impose un style transitoire qui adoucit la rigueur Empire. Louis XVIII puis Charles X favorisent un mobilier plus léger, aux ornements plus discrets, adapté à la vie bourgeoise.

Les bois clairs - érable moucheté, citronnier, frêne loupe - remplacent l'acajou sombre. Les incrustations de bois foncés créent des effets décoratifs élégants. Les bronzes se raréfient, les lignes s'assouplissent légèrement sans renoncer à la symétrie classique.

Le répertoire ornemental évolue : dauphins, cygnes, lyres, cornes d'abondance remplacent les symboles napoléoniens. Le gothique trouve un premier renouveau romantique, annonçant le goût historiciste du Second Empire. Les sièges gondole définissent une forme emblématique.

Le style Charles X, bref mais cohérent, marque une pause élégante entre l'Empire et l'éclectisme Louis-Philippe. Ses teintes claires et ses formes sobres séduisent à nouveau les amateurs contemporains, et ses meubles atteignent des prix élevés en ventes publiques.`,
    mainWorks: ["Guéridons en bois clair", "Sièges gondole", "Secrétaires en citronnier", "Psychés"],
    keyIdeas: ["Bois clairs", "Incrustations", "Élégance sobre", "Transition"],
  },
  {
    id: "louis-philippe",
    name: "Louis-Philippe",
    birthYear: 1830,
    deathYear: 1848,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Franz_Xaver_Winterhalter_King_Louis_Philippe.jpg/330px-Franz_Xaver_Winterhalter_King_Louis_Philippe.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "XIXe siècle",
    family: "XIXe siècle",
    influences: ["restauration"],
    summary: `La Monarchie de Juillet (1830-1848) voit l'avènement d'une bourgeoisie triomphante qui impose ses valeurs : confort, solidité, discrétion. Le style Louis-Philippe rompt avec l'élégance aristocratique pour privilégier le pratique et le durable.

Le mobilier s'alourdit, les ornements se simplifient. Le bois de palissandre et l'acajou sombre dominent. Les formes s'arrondissent : dossiers renversés, accoudoirs en crosse, pieds balustres caractérisent les sièges. Le capitonnage profond invite au confort bourgeois.

L'éclectisme pointe : le goût romantique pour le Moyen Âge inspire des meubles néogothiques. Les revivals Renaissance, Louis XV, Louis XVI se mêlent dans les intérieurs cossus. Ce mélange des styles annonce le Second Empire et l'historicisme triomphant.

Le style Louis-Philippe, longtemps méprisé comme fade et bourgeois, est aujourd'hui réhabilité. Ses meubles solides, ses bois nobles, son confort authentique séduisent les amateurs de XIXe siècle. C'est l'âge d'or de l'ébénisterie parisienne de qualité courante.`,
    mainWorks: ["Fauteuils Voltaire", "Armoires à glace", "Lits bateaux", "Bureaux ministres"],
    keyIdeas: ["Confort bourgeois", "Palissandre", "Capitonnage", "Éclectisme naissant"],
  },
  {
    id: "napoleon-iii",
    name: "Napoléon III / Second Empire",
    birthYear: 1852,
    deathYear: 1870,
    nationality: "Français",
    movement: "XIXe siècle",
    family: "XIXe siècle",
    influences: ["louis-philippe"],
    summary: `Le Second Empire (1852-1870) porte l'éclectisme à son apogée. L'impératrice Eugénie, passionnée par Marie-Antoinette, lance la mode du "Louis XVI-Impératrice". Tous les styles du passé sont pillés, copiés, mélangés dans un faste exubérant.

Le noir et or domine les intérieurs : bois noircis, bronzes dorés, soieries capitonnées. La surcharge décorative atteint des sommets. Chaque surface est sculptée, incrustée, garnie. Le confort moderne (ressorts, capitons) se cache sous des formes historicistes.

L'industrie transforme la production. Le meuble de série, usiné à la machine, démocratise les styles du passé. Les grands magasins (Le Bon Marché, 1852) diffusent un mobilier éclectique accessible. L'artisanat de luxe survit mais se réduit.

Les expositions universelles (1855, 1867) célèbrent cette profusion. Mais déjà, des voix critiques s'élèvent contre l'imitation stérile. Viollet-le-Duc prône un rationalisme gothique, William Morris fonde le mouvement Arts & Crafts en Angleterre. La réaction moderniste se prépare.`,
    mainWorks: ["Salons Napoléon III", "Meubles en marqueterie Boulle revival", "Poufs capitonnés", "Jardinières"],
    keyIdeas: ["Éclectisme", "Noir et or", "Confort bourgeois", "Production industrielle"],
  },
  {
    id: "arts-crafts",
    name: "Arts & Crafts",
    birthYear: 1860,
    deathYear: 1910,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Artichoke_wallpaper_Morris_and_Co_J_H_Dearle.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "Britannique",
    movement: "Réaction anti-industrielle",
    family: "Art nouveau & déco",
    influences: ["gothique"],
    summary: `Le mouvement Arts & Crafts naît en Angleterre en réaction contre l'industrialisation et l'éclectisme victorien. William Morris, inspiré par Ruskin, prône le retour à l'artisanat médiéval, au travail manuel, à la beauté utile dans les objets quotidiens.

Morris fonde sa firme en 1861 : papiers peints, tissus, vitraux, meubles. Le chêne massif, la construction visible, les formes simples et fonctionnelles s'opposent au clinquant industriel. "Have nothing in your houses that you do not know to be useful or believe to be beautiful."

Les architectes Philip Webb, Charles Voysey, Charles Rennie Mackintosh développent un mobilier architectural, intégré aux maisons qu'ils construisent. Les guildes d'artisans se multiplient. Le mouvement influence toute l'Europe et prépare l'Art Nouveau.

Arts & Crafts échoue économiquement : l'artisanat de qualité reste cher, inaccessible aux classes populaires qu'il prétendait servir. Mais son idéologie du "bel objet utile" influence profondément le design moderne, du Bauhaus au design scandinave.`,
    mainWorks: ["Sussex Chair (Morris & Co)", "Meubles de Voysey", "Chaise Mackintosh", "Red House (Webb)"],
    keyIdeas: ["Artisanat", "Simplicité", "Anti-industriel", "Beauté utile"],
  },
  {
    id: "art-nouveau",
    name: "Art Nouveau",
    birthYear: 1890,
    deathYear: 1914,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Art_Nouveau_composition.jpg/330px-Art_Nouveau_composition.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "International",
    movement: "Belle Époque",
    family: "Art nouveau & déco",
    influences: ["arts-crafts"],
    summary: `L'Art Nouveau éclôt simultanément dans toute l'Europe vers 1890, sous des noms divers : Modern Style, Jugendstil, Sezessionstil, Stile Liberty. Il rompt radicalement avec l'historicisme pour créer un style original, inspiré par la nature et les formes organiques.

En France, l'École de Nancy, autour d'Émile Gallé et Louis Majorelle, développe un mobilier sculptural où les motifs végétaux - nénuphars, orchidées, libellules - envahissent les structures. Les marqueteries précieuses, les bronzes souples, les patines subtiles créent un univers poétique.

À Paris, Hector Guimard conçoit les entrées du métro et un mobilier aux lignes coup-de-fouet. À Bruxelles, Victor Horta intègre meubles et architecture dans une continuité organique. À Vienne, la Sécession (Hoffmann, Moser) préfère la géométrie à la courbe.

L'Art Nouveau s'épuise rapidement, victime de ses excès décoratifs et de la Première Guerre mondiale. Mais son ambition d'un art total, intégrant architecture, mobilier et objets, influence l'Art Déco puis le design contemporain. Gallé et Majorelle restent des icônes.`,
    mainWorks: ["Meubles de Gallé", "Ensemble Majorelle", "Entrées du métro Guimard", "Mobilier de la Sécession viennoise"],
    keyIdeas: ["Formes organiques", "Ligne courbe", "Art total", "Nature"],
  },
  {
    id: "art-deco",
    name: "Art Déco",
    birthYear: 1920,
    deathYear: 1940,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Folies_Berg%C3%A8re_%40_Paris_%2834194934306%29.jpg/330px-Folies_Berg%C3%A8re_%40_Paris_%2834194934306%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français / International",
    movement: "Entre-deux-guerres",
    family: "Art nouveau & déco",
    influences: ["art-nouveau"],
    summary: `L'Art Déco, baptisé rétrospectivement d'après l'Exposition des Arts Décoratifs de Paris (1925), domine les années folles et les années 1930. Il réagit contre les sinuosités de l'Art Nouveau par un retour à la géométrie, au luxe, à l'ordre.

Les ébénistes français - Ruhlmann, Leleu, Dunand, Printz - créent un mobilier d'exception. Matériaux précieux (galuchat, ivoire, ébène de Macassar, parchemin), formes épurées, surfaces laquées définissent une élégance racée. C'est le dernier éclat du meuble de luxe français.

L'Art Déco s'adapte aussi à la production de série. Les formes géométriques, les motifs stylisés (soleils, zigzags, antilopes) se déclinent sur tous les supports. Le chrome, le verre, le béton armé modernisent le vocabulaire. Les paquebots Normandie et Île-de-France incarnent ce style.

La crise de 1929 puis la guerre freinent l'Art Déco. Mais son influence reste visible dans l'architecture, le mobilier, la mode. Les meubles de Ruhlmann atteignent aujourd'hui des prix records en ventes publiques, témoins d'un raffinement disparu.`,
    mainWorks: ["Meubles Ruhlmann", "Laques de Dunand", "Paquebot Normandie", "Chrysler Building"],
    keyIdeas: ["Géométrie", "Luxe", "Matériaux précieux", "Modernité élégante"],
  },
  {
    id: "bauhaus",
    name: "Bauhaus",
    birthYear: 1919,
    deathYear: 1933,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Bauhaus-Signet.svg/langfr-330px-Bauhaus-Signet.svg.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Modernisme",
    family: "Design moderne",
    influences: ["arts-crafts"],
    summary: `Le Bauhaus, école d'art fondée par Walter Gropius à Weimar en 1919, révolutionne le design du XXe siècle. Son ambition : réunir art et industrie, créer des objets beaux, fonctionnels et accessibles à tous. L'artisanat prépare les modèles que l'industrie produira en masse.

Marcel Breuer invente le meuble en tube d'acier cintré. La chaise Wassily (1925) et la chaise Cesca (1928) utilisent un matériau industriel - le tube de bicyclette - pour créer des formes légères et élégantes. Mies van der Rohe perfectionne le principe avec la chaise Barcelona (1929).

Le fonctionnalisme guide la conception : la forme suit la fonction, les ornements disparaissent. Les couleurs primaires, les formes géométriques, les matériaux industriels (acier, verre, contreplaqué) définissent une esthétique radicalement nouvelle.

Fermé par les nazis en 1933, le Bauhaus essaime aux États-Unis où ses maîtres s'exilent. Son influence sur le design moderne est totale : les meubles en tube d'acier, le mobilier de bureau, l'idée même de design industriel dérivent de ses recherches.`,
    mainWorks: ["Chaise Wassily (Breuer)", "Chaise Barcelona (Mies)", "Chaise Cesca (Breuer)", "Mobilier de Dessau"],
    keyIdeas: ["Forme et fonction", "Tube d'acier", "Production industrielle", "Fonctionnalisme"],
  },
  {
    id: "midcentury",
    name: "Mid-century Modern",
    birthYear: 1945,
    deathYear: 1970,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/California_Mid-Century_Modern_Home_with_open-beam_ceiling_1960.jpg/330px-California_Mid-Century_Modern_Home_with_open-beam_ceiling_1960.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain / Scandinave",
    movement: "Après-guerre",
    family: "Design moderne",
    influences: ["bauhaus"],
    summary: `Le Mid-century Modern, style dominant de l'après-guerre, synthétise le fonctionnalisme du Bauhaus avec une sensibilité plus organique. Aux États-Unis, Charles et Ray Eames, Eero Saarinen, George Nelson créent des icônes toujours produites aujourd'hui.

Les techniques de guerre (contreplaqué moulé, fibre de verre, aluminium) se reconvertissent au mobilier. La Lounge Chair Eames (1956), la chaise Tulip de Saarinen (1956), le Marshmallow Sofa de Nelson définissent un vocabulaire optimiste et accessible. Le design se démocratise.

En Scandinavie, Arne Jacobsen, Hans Wegner, Alvar Aalto poursuivent une tradition d'artisanat de qualité. Le bois courbé, les formes organiques, le confort ergonomique caractérisent le "Danish Modern" qui conquiert le monde. La chaise Series 7 de Jacobsen se vend à des millions d'exemplaires.

Le Mid-century incarne l'optimisme des Trente Glorieuses. Ses formes claires, ses couleurs vives, son confort moderne restent désirables. Les originaux atteignent des prix élevés, tandis que les rééditions officielles et les copies inondent le marché.`,
    mainWorks: ["Lounge Chair Eames", "Chaise Tulip (Saarinen)", "Chaise Série 7 (Jacobsen)", "Chaise Wishbone (Wegner)"],
    keyIdeas: ["Organique", "Contreplaqué moulé", "Design démocratique", "Optimisme"],
  },
  {
    id: "pop-design",
    name: "Pop Design / Space Age",
    birthYear: 1960,
    deathYear: 1975,
    nationality: "International",
    movement: "Années 1960-70",
    family: "Design moderne",
    influences: ["midcentury"],
    summary: `Les années 1960 voient émerger une nouvelle génération qui rejette le bon goût Mid-century. Le Pop Art, la conquête spatiale, la libération des mœurs inspirent un design exubérant, coloré, éphémère. Le plastique, matériau miracle, permet toutes les audaces.

La chaise Panton de Verner Panton (1967), première chaise entièrement en plastique moulé d'une seule pièce, devient l'icône de l'ère spatiale. Joe Colombo imagine des habitats modulaires futuristes. Eero Aarnio enferme l'utilisateur dans des bulles (Ball Chair, 1963).

L'Italie domine le design radical : les groupes Memphis, Archizoom, Superstudio contestent le fonctionnalisme par l'ironie et l'excès. Ettore Sottsass, Alessandro Mendini, Gaetano Pesce créent des objets provocateurs, aux couleurs criardes et aux formes inattendues.

Le choc pétrolier de 1973 freine cette exubérance plastique. Mais le Pop Design a brisé les conventions du "bon design", ouvert la voie au postmodernisme et à la liberté formelle du design contemporain. Ses pièces iconiques sont très recherchées des collectionneurs.`,
    mainWorks: ["Chaise Panton", "Ball Chair (Aarnio)", "Bocca (Studio 65)", "Valentine (Sottsass)"],
    keyIdeas: ["Plastique", "Couleurs vives", "Space Age", "Anti-fonctionnalisme"],
  },
  {
    id: "postmodernisme",
    name: "Postmodernisme",
    birthYear: 1975,
    deathYear: 1995,
    nationality: "Italien / International",
    movement: "Fin du XXe siècle",
    family: "Design contemporain",
    influences: ["pop-design"],
    summary: `Le postmodernisme, en design comme en architecture, réagit contre le fonctionnalisme moderniste jugé froid et dogmatique. Ironie, citation historique, décoration assumée, couleurs vives caractérisent ce mouvement qui refuse les règles établies.

Le groupe Memphis, fondé à Milan par Ettore Sottsass en 1981, provoque un choc esthétique. La bibliothèque Carlton, les meubles en stratifié aux motifs "bactériens", les formes disloquées rejettent le bon goût scandinave. "Less is a bore", réplique Robert Venturi à Mies van der Rohe.

Philippe Starck incarne le designer-star des années 1980-90. Ses intérieurs pour le Café Costes, la chaise Louis Ghost, le presse-agrumes Juicy Salif transforment les objets quotidiens en icônes pop. Le design devient médiatique, spectaculaire, accessible.

Le postmodernisme s'épuise dans les années 1990, remplacé par un minimalisme néo-moderne. Mais son héritage persiste : le design contemporain assume la décoration, l'émotion, l'humour. Memphis, longtemps décrié, est aujourd'hui culte et très collectionné.`,
    mainWorks: ["Bibliothèque Carlton (Sottsass)", "Chaise Louis Ghost (Starck)", "Fauteuil Proust (Mendini)", "Étagère Bookworm (Arad)"],
    keyIdeas: ["Ironie", "Citation", "Couleur", "Anti-fonctionnalisme"],
  },
  {
    id: "minimalisme",
    name: "Minimalisme contemporain",
    birthYear: 1990,
    deathYear: 2010,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/USM_Haller.jpg?width=220",
    nationality: "International",
    movement: "Fin du XXe / début du XXIe siècle",
    family: "Design contemporain",
    influences: ["bauhaus", "postmodernisme"],
    summary: `Les années 1990 voient un retour à la simplicité après les excès postmodernes. Le minimalisme contemporain, influencé par le Japon et le design suisse, privilégie les lignes pures, les couleurs neutres, les matériaux nobles et le moins comme plus.

Le système de rangement USM Haller, conçu en 1963 mais qui triomphe dans les années 1990, incarne cette esthétique. Les tubes chromés, les panneaux colorés, la modularité infinie en font le symbole du bureau contemporain. Vitsoe, Hay, Muji diffusent une élégance discrète.

Les designers japonais - Naoto Fukasawa, Tokujin Yoshioka - et britanniques - Jasper Morrison, Michael Young - définissent un "Super Normal" : des objets si bien dessinés qu'ils deviennent invisibles. Dieter Rams et ses dix principes du bon design sont réhabilités.

Le minimalisme contemporain dialogue avec l'écologie naissante : matériaux durables, objets repensables, production locale. Cette sobriété influence toujours le design actuel, même si de nouvelles tendances, maximalistes ou artisanales, proposent des alternatives.`,
    mainWorks: ["Système USM Haller", "Étagère 606 (Vitsoe)", "Muji", "Collection Super Normal (Morrison/Fukasawa)"],
    keyIdeas: ["Less is more", "Sobriété", "Modularité", "Super Normal"],
  },
  {
    id: "design-contemporain",
    name: "Design contemporain",
    birthYear: 2010,
    nationality: "International",
    movement: "XXIe siècle",
    family: "Design contemporain",
    influences: ["minimalisme"],
    summary: `Le design contemporain refuse les catégories. Éclectique, il puise dans tous les styles du passé, de l'artisanat à la haute technologie, du luxe au recyclé. Internet démocratise la création et la diffusion, brouillant les frontières entre amateurs et professionnels.

L'écologie devient centrale. Les designers repensent les matériaux (bioplastiques, champignons, algues), les processus (impression 3D, économie circulaire) et les usages (partage, réparabilité). Le meuble jetable est contesté au profit du durable et du local.

Parallèlement, le marché du vintage explose. Les icônes du XXe siècle - Prouvé, Perriand, Eames, Jacobsen - atteignent des prix records. Les galeries de design (Kreo, Carpenters Workshop) élèvent le meuble au rang d'œuvre d'art. Le design devient collection et spéculation.

Le design contemporain hésite entre production de masse (IKEA) et pièce unique (design-art), entre technologie (objets connectés) et artisanat (makers), entre minimalisme et maximalisme. Cette diversité témoigne de la vitalité d'une discipline en constante redéfinition.`,
    mainWorks: ["Meubles imprimés 3D", "Design recyclé", "Rééditions de classiques", "Limited editions"],
    keyIdeas: ["Éclectisme", "Durabilité", "Vintage", "Design-art"],
  },
];
