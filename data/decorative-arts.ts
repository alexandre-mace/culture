export interface DecorativeStyle {
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

export const decorativeStyles: DecorativeStyle[] = [
  {
    id: "gothique",
    name: "Gothique",
    birthYear: 1140,
    deathYear: 1500,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Armoire_%C3%A0_deux_corps_-_Mus%C3%A9e_d%27art_et_d%27industrie_de_Roubaix.jpg?width=220",
    nationality: "Francais",
    movement: "Moyen Age",
    summary: `Le style gothique nait en Ile-de-France au milieu du XIIe siecle, d'abord en architecture avec la basilique de Saint-Denis. Il se repand ensuite au mobilier et aux arts decoratifs, dominant l'Europe occidentale pendant plus de trois siecles.

Le mobilier gothique se caracterise par ses formes architecturales : arcs brises, pinacles, rosaces et fenestrages decorent coffres, armoires et stalles. Le bois de chene, robuste et sculpte, est le materiau dominant. Les meubles sont souvent polychromes.

Les coffres sont les pieces essentielles, servant au rangement et au transport. Les sieges restent rares et reserves aux puissants : la chaire seigneuriale trone dans la grande salle. Les lits a baldaquin protegent du froid et creent une intimite.

Le gothique flamboyant du XVe siecle porte l'ornementation a son paroxysme. Mais la Renaissance italienne, puis francaise, impose progressivement de nouveaux modeles. Le gothique survit cependant dans les provinces jusqu'au XVIe siecle et sera redecouvert par les romantiques au XIXe.`,
    mainWorks: ["Coffres a panneaux sculptes", "Stalles de chœur", "Armoires a deux corps", "Dressoirs"],
    keyIdeas: ["Arc brise", "Sculpture sur chene", "Formes architecturales", "Polychromie"],
  },
  {
    id: "renaissance",
    name: "Renaissance",
    birthYear: 1450,
    deathYear: 1610,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cabinet_Henri_II_Louvre_OA9511.jpg?width=220",
    nationality: "Italien / Francais",
    movement: "Renaissance",
    summary: `La Renaissance nait en Italie au XVe siecle, redécouvrant l'Antiquite greco-romaine. Les arts decoratifs s'inspirent des motifs antiques : colonnes, frontons, grotesques, rinceaux, arabesques. Le mobilier devient un art a part entiere, signe de richesse et de culture.

En France, les guerres d'Italie introduisent le style Renaissance sous Francois Ier. Le chateau de Fontainebleau devient un laboratoire ou artistes italiens et francais melent leurs influences. Le noyer remplace progressivement le chene, permettant une sculpture plus fine.

Les cabinets, meubles de prestige garnis de tiroirs secrets, atteignent une sophistication extreme. Les lits a colonnes torsadees, les tables a entretoise en H, les sieges caquetoires definissent le vocabulaire Renaissance. La marqueterie et les incrustations de marbre enrichissent les surfaces.

Le style Henri II (1547-1610) developpe un langage proprement francais : cariatides, termes, cartouches cuirs. L'ebene, bois noir et precieux, fait son apparition. La Renaissance francaise prepare les fastes du Grand Siecle et l'avenement du style Louis XIV.`,
    mainWorks: ["Cabinets d'ebene", "Lits a colonnes", "Caquetoires", "Dressoirs a deux corps"],
    keyIdeas: ["Antiquite", "Noyer sculpte", "Grotesques", "Cabinet de curiosites"],
  },
  {
    id: "baroque",
    name: "Baroque / Louis XIV",
    birthYear: 1610,
    deathYear: 1715,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Armoire_Boulle_Louvre_OA5469.jpg?width=220",
    nationality: "Francais",
    movement: "Grand Siecle",
    summary: `Le style Louis XIV, expression francaise du baroque europeen, incarne la grandeur et la puissance de la monarchie absolue. Versailles, chantier de cinquante ans, definit un art officiel ou les arts decoratifs servent la gloire du Roi-Soleil.

La Manufacture des Gobelins, fondee en 1662, reunit sous la direction de Le Brun tous les corps de metiers : ebenistes, bronziers, tapissiers, ornevres. Cette organisation produit un mobilier d'apparat somptueux, destine aux residences royales et aux cadeaux diplomatiques.

Andre-Charles Boulle invente la marqueterie qui porte son nom : ecaille de tortue et laiton decoupes en arabesques, incrustes sur des meubles monumentaux. Les bronzes dores, les marbres polychromes, les velours et brocarts completent ce vocabulaire de la magnificence.

Le mobilier Louis XIV est imposant, symetrique, richement orne. Armoires, commodes, bureaux, gueridons, consoles constituent un repertoire nouveau. Les pieds en gaine, les masques solaires, les trophees guerriers affirment un style qui rayonne sur toute l'Europe.`,
    mainWorks: ["Marqueterie Boulle", "Armoires de Versailles", "Bureaux Mazarin", "Gueridons en bois dore"],
    keyIdeas: ["Magnificence", "Symetrie", "Bronzes dores", "Manufacture royale"],
  },
  {
    id: "rococo",
    name: "Rococo / Louis XV",
    birthYear: 1715,
    deathYear: 1774,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Commode_Louis_XV_Louvre_OA10440.jpg?width=220",
    nationality: "Francais",
    movement: "Siecle des Lumieres",
    summary: `A la mort de Louis XIV en 1715, une reaction contre la pompe versaillaise s'amorce. Le Regent puis Louis XV privilegient l'intimite, le confort, la legerete. Le style rocaille, ou rococo, impose ses courbes, ses asymetries, ses ornements naturels.

Le mobilier s'adapte aux nouveaux modes de vie. Les petits appartements remplacent les grands salons. Les meubles se multiplient et se specialisent : bergeres, duchesses, chiffonniers, bonheurs-du-jour repondent a des usages precis. Le siege devient un art francais par excellence.

Les ebenistes parisiens, organises en corporation, atteignent une virtuosite technique inegalee. Jean-Francois Oeben, Bernard van Risenburgh (BVRB), Charles Cressent creent des commodes galbees, ornees de bronzes rocailles et de marqueteries florales d'une grace exquise.

Les vernis Martin imitent les laques d'Extreme-Orient. La porcelaine de Sevres orne les meubles de luxe. Paris devient la capitale europeenne du meuble, exportant ses creations vers toutes les cours. Le rococo francais influence l'Allemagne, la Russie, l'Italie.`,
    mainWorks: ["Commodes galbees", "Bergeres", "Bureau a cylindre", "Secretaires en marqueterie florale"],
    keyIdeas: ["Courbes", "Asymetrie", "Rocaille", "Intimite"],
  },
  {
    id: "neoclassique",
    name: "Neoclassicisme / Louis XVI",
    birthYear: 1760,
    deathYear: 1792,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Secr%C3%A9taire_%C3%A0_abattant_Riesener_Louvre_OA5298.jpg?width=220",
    nationality: "Francais",
    movement: "Siecle des Lumieres",
    summary: `Des les annees 1760, une reaction contre les exces du rococo s'amorce. Les decouvertes d'Herculanum et Pompei, les ecrits de Winckelmann inspirent un retour a l'antique. Les lignes droites, les formes geometriques, les motifs grecs et romains s'imposent.

Le style Louis XVI, bien que porte par le nom du roi, debute sous Louis XV. Les pieds droits canneles, les frises de perles et rais-de-cœur, les medaillons ovales, les nœuds de ruban definissent un vocabulaire elegant et raffine. L'acajou remplace progressivement les bois clairs.

Jean-Henri Riesener, ebeniste favori de Marie-Antoinette, produit des chefs-d'œuvre de marqueterie pour les residences royales. David Roentgen apporte la mecanique allemande. Adam Weisweiler et Guillaume Beneman completent ce pantheon des grands ebenistes.

Le neoclassicisme Louis XVI atteint une perfection formelle rarement egalee. La Revolution interrompt brutalement cette production de luxe. Mais le vocabulaire neoclassique survit et s'epanouit sous le Directoire et l'Empire, avec une severite accrue.`,
    mainWorks: ["Secretaires a abattant", "Commodes demi-lune", "Meubles de Riesener", "Sieges medaillons"],
    keyIdeas: ["Lignes droites", "Antique", "Acajou", "Raffinement"],
  },
  {
    id: "directoire-empire",
    name: "Empire",
    birthYear: 1799,
    deathYear: 1815,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Commode_Jacob-Desmalter_Fontainebleau.jpg?width=220",
    nationality: "Francais",
    movement: "Epoque napoleonienne",
    summary: `Le style Empire, ne sous le Consulat et epanoui sous Napoleon Ier, traduit en arts decoratifs l'ambition imperiale. Les architectes Percier et Fontaine, decorateurs officiels, definissent un style severe et majestueux, inspire de l'Antiquite romaine et de l'Egypte.

L'acajou massif, les bronzes dores, les marbres composent un mobilier monumental. Les motifs napoleoniens - aigles, abeilles, N couronnes - cotoient les references antiques : sphinges, victoires ailees, griffons, palmettes. La symetrie est absolue, la ligne droite domine.

Jacob-Desmalter, heritier de la dynastie des Jacob, fournit les palais imperiaux. Le lit de camp, la psyche, l'athénienne, la meridienne enrichissent le repertoire. Les tissus somptueux - velours, soies lyonnaises - tapissent murs et sieges dans des harmonies de vert, pourpre et or.

Le style Empire rayonne sur l'Europe conquise, de Madrid a Moscou. Sa rigueur marque durablement le gout francais. Apres la chute de Napoleon, le style Restauration adoucit ses formes, mais le vocabulaire Empire reste influent pendant tout le XIXe siecle.`,
    mainWorks: ["Mobilier de Fontainebleau", "Lit de l'imperatrice Josephine", "Commodes Jacob-Desmalter", "Atheniennes"],
    keyIdeas: ["Antiquite romaine", "Acajou et bronzes", "Aigles et abeilles", "Monumentalite"],
  },
  {
    id: "restauration",
    name: "Restauration / Charles X",
    birthYear: 1815,
    deathYear: 1830,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gu%C3%A9ridon_Charles_X_bois_clair.jpg?width=220",
    nationality: "Francais",
    movement: "XIXe siecle",
    summary: `Apres la chute de Napoleon, la Restauration des Bourbons (1815-1830) impose un style transitoire qui adoucit la rigueur Empire. Louis XVIII puis Charles X favorisent un mobilier plus leger, aux ornements plus discrets, adapte a la vie bourgeoise.

Les bois clairs - erable mouchete, citronnier, frene loupe - remplacent l'acajou sombre. Les incrustations de bois fonces creent des effets decoratifs elegants. Les bronzes se rarefient, les lignes s'assouplissent legerement sans renoncer a la symetrie classique.

Le repertoire ornemental evolue : dauphins, cygnes, lyres, cornes d'abondance remplacent les symboles napoleoniens. Le gothique trouve un premier renouveau romantique, annoncant le gout historiciste du Second Empire. Les sièges gondole definissent une forme emblematique.

Le style Charles X, bref mais coherent, marque une pause elegante entre l'Empire et l'eclectisme Louis-Philippe. Ses teintes claires et ses formes sobres seduisent a nouveau les amateurs contemporains, et ses meubles atteignent des prix eleves en ventes publiques.`,
    mainWorks: ["Gueridons en bois clair", "Sieges gondole", "Secretaires en citronnier", "Psyches"],
    keyIdeas: ["Bois clairs", "Incrustations", "Elegance sobre", "Transition"],
  },
  {
    id: "louis-philippe",
    name: "Louis-Philippe",
    birthYear: 1830,
    deathYear: 1848,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fauteuil_confortable_Louis-Philippe.jpg?width=220",
    nationality: "Francais",
    movement: "XIXe siecle",
    summary: `La Monarchie de Juillet (1830-1848) voit l'avenement d'une bourgeoisie triomphante qui impose ses valeurs : confort, solidite, discretion. Le style Louis-Philippe rompt avec l'elegance aristocratique pour privilegier le pratique et le durable.

Le mobilier s'alourdit, les ornements se simplifient. Le bois de palissandre et l'acajou sombre dominent. Les formes s'arrondissent : dossiers renverses, accoudoirs en crosse, pieds balustres caracterisent les sieges. Le capitonnage profond invite au confort bourgeois.

L'eclectisme pointe : le gout romantique pour le Moyen Age inspire des meubles neogothiques. Les revivals Renaissance, Louis XV, Louis XVI se melent dans les interieurs cossus. Ce melange des styles annonce le Second Empire et l'historicisme triomphant.

Le style Louis-Philippe, longtemps meprise comme fade et bourgeois, est aujourd'hui rehabilite. Ses meubles solides, ses bois nobles, son confort authentique seduisent les amateurs de XIXe siecle. C'est l'age d'or de l'ebenisterie parisienne de qualite courante.`,
    mainWorks: ["Fauteuils Voltaire", "Armoires a glace", "Lits bateaux", "Bureaux ministres"],
    keyIdeas: ["Confort bourgeois", "Palissandre", "Capitonnage", "Eclectisme naissant"],
  },
  {
    id: "napoleon-iii",
    name: "Napoleon III / Second Empire",
    birthYear: 1852,
    deathYear: 1870,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Grand_cabinet_de_l%27imp%C3%A9ratrice_Eug%C3%A9nie.jpg?width=220",
    nationality: "Francais",
    movement: "XIXe siecle",
    summary: `Le Second Empire (1852-1870) porte l'eclectisme a son apogee. L'imperatrice Eugenie, passionnee par Marie-Antoinette, lance la mode du "Louis XVI-Imperatrice". Tous les styles du passe sont pilles, copies, melanges dans un faste exuberant.

Le noir et or domine les interieurs : bois noircis, bronzes dores, soieries capitonnees. La surcharge decorative atteint des sommets. Chaque surface est sculptee, incrustee, garnie. Le confort moderne (ressorts, capitons) se cache sous des formes historicistes.

L'industrie transforme la production. Le meuble de serie, usine a la machine, democratise les styles du passe. Les grands magasins (Le Bon Marche, 1852) diffusent un mobilier eclectique accessible. L'artisanat de luxe survit mais se reduit.

Les expositions universelles (1855, 1867) celebrent cette profusion. Mais deja, des voix critiques s'elevent contre l'imitation sterile. Viollet-le-Duc prone un rationalisme gothique, William Morris fonde le mouvement Arts & Crafts en Angleterre. La reaction moderniste se prepare.`,
    mainWorks: ["Salons Napoleon III", "Meubles en marqueterie Boulle revival", "Poufs capitonnes", "Jardinières"],
    keyIdeas: ["Eclectisme", "Noir et or", "Confort bourgeois", "Production industrielle"],
  },
  {
    id: "arts-crafts",
    name: "Arts & Crafts",
    birthYear: 1860,
    deathYear: 1910,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Morris_and_Company_Sussex_armchair.jpg?width=220",
    nationality: "Britannique",
    movement: "Reaction anti-industrielle",
    summary: `Le mouvement Arts & Crafts nait en Angleterre en reaction contre l'industrialisation et l'eclectisme victorien. William Morris, inspire par Ruskin, prone le retour a l'artisanat medieval, au travail manuel, a la beaute utile dans les objets quotidiens.

Morris fonde sa firme en 1861 : papiers peints, tissus, vitraux, meubles. Le chene massif, la construction visible, les formes simples et fonctionnelles s'opposent au clinquant industriel. "Have nothing in your houses that you do not know to be useful or believe to be beautiful."

Les architectes Philip Webb, Charles Voysey, Charles Rennie Mackintosh developpent un mobilier architectural, integre aux maisons qu'ils construisent. Les guildes d'artisans se multiplient. Le mouvement influence toute l'Europe et prepare l'Art Nouveau.

Arts & Crafts echoue economiquement : l'artisanat de qualite reste cher, inaccessible aux classes populaires qu'il pretendait servir. Mais son ideologie du "bel objet utile" influence profondement le design moderne, du Bauhaus au design scandinave.`,
    mainWorks: ["Sussex Chair (Morris & Co)", "Meubles de Voysey", "Chaise Mackintosh", "Red House (Webb)"],
    keyIdeas: ["Artisanat", "Simplicite", "Anti-industriel", "Beaute utile"],
  },
  {
    id: "art-nouveau",
    name: "Art Nouveau",
    birthYear: 1890,
    deathYear: 1914,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chambre_%C3%A0_coucher_Art_nouveau_%28Mus%C3%A9e_de_l%27%C3%89cole_de_Nancy%29.jpg?width=220",
    nationality: "International",
    movement: "Belle Epoque",
    summary: `L'Art Nouveau eclot simultanement dans toute l'Europe vers 1890, sous des noms divers : Modern Style, Jugendstil, Sezessionstil, Stile Liberty. Il rompt radicalement avec l'historicisme pour creer un style original, inspire par la nature et les formes organiques.

En France, l'Ecole de Nancy, autour d'Emile Galle et Louis Majorelle, developpe un mobilier sculptural ou les motifs vegetaux - nenuphars, orchidees, libellules - envahissent les structures. Les marqueteries precieuses, les bronzes souples, les patines subtiles creent un univers poetique.

A Paris, Hector Guimard concoit les entrees du metro et un mobilier aux lignes coup-de-fouet. A Bruxelles, Victor Horta integre meubles et architecture dans une continuite organique. A Vienne, la Secession (Hoffmann, Moser) prefere la geometrie a la courbe.

L'Art Nouveau s'epuise rapidement, victime de ses exces decoratifs et de la Premiere Guerre mondiale. Mais son ambition d'un art total, integrant architecture, mobilier et objets, influence l'Art Deco puis le design contemporain. Galle et Majorelle restent des icones.`,
    mainWorks: ["Meubles de Galle", "Ensemble Majorelle", "Entrees du metro Guimard", "Mobilier de la Secession viennoise"],
    keyIdeas: ["Formes organiques", "Ligne courbe", "Art total", "Nature"],
  },
  {
    id: "art-deco",
    name: "Art Deco",
    birthYear: 1920,
    deathYear: 1940,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ruhlmann%2C_cabinet%2C_1926.jpg?width=220",
    nationality: "Francais / International",
    movement: "Entre-deux-guerres",
    summary: `L'Art Deco, baptise retrospectivement d'apres l'Exposition des Arts Decoratifs de Paris (1925), domine les annees folles et les annees 1930. Il reagit contre les sinuosites de l'Art Nouveau par un retour a la geometrie, au luxe, a l'ordre.

Les ebenistes francais - Ruhlmann, Leleu, Dunand, Printz - creent un mobilier d'exception. Materiaux precieux (galuchat, ivoire, ebene de Macassar, parchemin), formes epurees, surfaces laquees definissent une elegance racee. C'est le dernier eclat du meuble de luxe francais.

L'Art Deco s'adapte aussi a la production de serie. Les formes geometriques, les motifs stylises (soleils, zigzags, antilopes) se declinent sur tous les supports. Le chrome, le verre, le beton arme modernisent le vocabulaire. Les paquebots Normandie et Ile-de-France incarnent ce style.

La crise de 1929 puis la guerre freinent l'Art Deco. Mais son influence reste visible dans l'architecture, le mobilier, la mode. Les meubles de Ruhlmann atteignent aujourd'hui des prix records en ventes publiques, temoins d'un raffinement disparu.`,
    mainWorks: ["Meubles Ruhlmann", "Laques de Dunand", "Paquebot Normandie", "Chrysler Building"],
    keyIdeas: ["Geometrie", "Luxe", "Materiaux precieux", "Modernite elegante"],
  },
  {
    id: "bauhaus",
    name: "Bauhaus",
    birthYear: 1919,
    deathYear: 1933,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bauhaus-Stahlrohrm%C3%B6bel.jpg?width=220",
    nationality: "Allemand",
    movement: "Modernisme",
    summary: `Le Bauhaus, ecole d'art fondee par Walter Gropius a Weimar en 1919, revolutionne le design du XXe siecle. Son ambition : reunir art et industrie, creer des objets beaux, fonctionnels et accessibles a tous. L'artisanat prepare les modeles que l'industrie produira en masse.

Marcel Breuer invente le meuble en tube d'acier cintré. La chaise Wassily (1925) et la chaise Cesca (1928) utilisent un materiau industriel - le tube de bicyclette - pour creer des formes legeres et elegantes. Mies van der Rohe perfectionne le principe avec la chaise Barcelona (1929).

Le fonctionnalisme guide la conception : la forme suit la fonction, les ornements disparaissent. Les couleurs primaires, les formes geometriques, les materiaux industriels (acier, verre, contreplaque) definissent une esthetique radicalement nouvelle.

Ferme par les nazis en 1933, le Bauhaus essaime aux Etats-Unis ou ses maitres s'exilent. Son influence sur le design moderne est totale : les meubles en tube d'acier, le mobilier de bureau, l'idee meme de design industriel derivent de ses recherches.`,
    mainWorks: ["Chaise Wassily (Breuer)", "Chaise Barcelona (Mies)", "Chaise Cesca (Breuer)", "Mobilier de Dessau"],
    keyIdeas: ["Forme et fonction", "Tube d'acier", "Production industrielle", "Fonctionnalisme"],
  },
  {
    id: "midcentury",
    name: "Mid-century Modern",
    birthYear: 1945,
    deathYear: 1970,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Eames_Lounge_Chair.jpg?width=220",
    nationality: "Americain / Scandinave",
    movement: "Apres-guerre",
    summary: `Le Mid-century Modern, style dominant de l'apres-guerre, synthetise le fonctionnalisme du Bauhaus avec une sensibilite plus organique. Aux Etats-Unis, Charles et Ray Eames, Eero Saarinen, George Nelson creent des icones toujours produites aujourd'hui.

Les techniques de guerre (contreplaque moule, fibre de verre, aluminium) se reconvertissent au mobilier. La Lounge Chair Eames (1956), la chaise Tulip de Saarinen (1956), le Marshmallow Sofa de Nelson definissent un vocabulaire optimiste et accessible. Le design se democratise.

En Scandinavie, Arne Jacobsen, Hans Wegner, Alvar Aalto poursuivent une tradition d'artisanat de qualite. Le bois courbe, les formes organiques, le confort ergonomique caracterisent le "Danish Modern" qui conquiert le monde. La chaise Series 7 de Jacobsen se vend a des millions d'exemplaires.

Le Mid-century incarne l'optimisme des Trente Glorieuses. Ses formes claires, ses couleurs vives, son confort moderne restent desirables. Les originaux atteignent des prix eleves, tandis que les reeditions officielles et les copies inondent le marche.`,
    mainWorks: ["Lounge Chair Eames", "Chaise Tulip (Saarinen)", "Chaise Serie 7 (Jacobsen)", "Chaise Wishbone (Wegner)"],
    keyIdeas: ["Organique", "Contreplaque moule", "Design democratique", "Optimisme"],
  },
  {
    id: "pop-design",
    name: "Pop Design / Space Age",
    birthYear: 1960,
    deathYear: 1975,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Panton_chair.JPG?width=220",
    nationality: "International",
    movement: "Annees 1960-70",
    summary: `Les annees 1960 voient emerger une nouvelle generation qui rejette le bon gout Mid-century. Le Pop Art, la conquete spatiale, la liberation des mœurs inspirent un design exuberant, colore, ephemere. Le plastique, materiau miracle, permet toutes les audaces.

La chaise Panton de Verner Panton (1967), premiere chaise entierement en plastique moule d'une seule piece, devient l'icone de l'ere spatiale. Joe Colombo imagine des habitats modulaires futuristes. Eero Aarnio enferme l'utilisateur dans des bulles (Ball Chair, 1963).

L'Italie domine le design radical : les groupes Memphis, Archizoom, Superstudio contestent le fonctionnalisme par l'ironie et l'exces. Ettore Sottsass, Alessandro Mendini, Gaetano Pesce creent des objets provocateurs, aux couleurs criardes et aux formes inattendues.

Le choc petrolier de 1973 freine cette exuberance plastique. Mais le Pop Design a brise les conventions du "bon design", ouvert la voie au postmodernisme et a la liberte formelle du design contemporain. Ses pieces iconiques sont tres recherchees des collectionneurs.`,
    mainWorks: ["Chaise Panton", "Ball Chair (Aarnio)", "Bocca (Studio 65)", "Valentine (Sottsass)"],
    keyIdeas: ["Plastique", "Couleurs vives", "Space Age", "Anti-fonctionnalisme"],
  },
  {
    id: "postmodernisme",
    name: "Postmodernisme",
    birthYear: 1975,
    deathYear: 1995,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Memphis-Milano_Carlton_Bookcase.jpg?width=220",
    nationality: "Italien / International",
    movement: "Fin du XXe siecle",
    summary: `Le postmodernisme, en design comme en architecture, reagit contre le fonctionnalisme moderniste juge froid et dogmatique. Ironie, citation historique, decoration assumee, couleurs vives caracterisent ce mouvement qui refuse les regles etablies.

Le groupe Memphis, fonde a Milan par Ettore Sottsass en 1981, provoque un choc esthetique. La bibliotheque Carlton, les meubles en stratifie aux motifs "bacteriens", les formes disloquees rejettent le bon gout scandinave. "Less is a bore", replique Robert Venturi a Mies van der Rohe.

Philippe Starck incarne le designer-star des annees 1980-90. Ses interieurs pour le Cafe Costes, la chaise Louis Ghost, le presse-agrumes Juicy Salif transforment les objets quotidiens en icones pop. Le design devient mediatique, spectaculaire, accessible.

Le postmodernisme s'epuise dans les annees 1990, remplace par un minimalisme neo-moderne. Mais son heritage persiste : le design contemporain assume la decoration, l'emotion, l'humour. Memphis, longtemps decrie, est aujourd'hui culte et tres collectionne.`,
    mainWorks: ["Bibliotheque Carlton (Sottsass)", "Chaise Louis Ghost (Starck)", "Fauteuil Proust (Mendini)", "Etagere Bookworm (Arad)"],
    keyIdeas: ["Ironie", "Citation", "Couleur", "Anti-fonctionnalisme"],
  },
  {
    id: "minimalisme",
    name: "Minimalisme contemporain",
    birthYear: 1990,
    deathYear: 2010,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/USM_Haller.jpg?width=220",
    nationality: "International",
    movement: "Fin du XXe / debut du XXIe siecle",
    summary: `Les annees 1990 voient un retour a la simplicite apres les exces postmodernes. Le minimalisme contemporain, influence par le Japon et le design suisse, privilegie les lignes pures, les couleurs neutres, les materiaux nobles et le moins comme plus.

Le systeme de rangement USM Haller, concu en 1963 mais qui triomphe dans les annees 1990, incarne cette esthetique. Les tubes chrome, les panneaux colores, la modularite infinie en font le symbole du bureau contemporain. Vitsoe, Hay, Muji diffusent une elegance discrete.

Les designers japonais - Naoto Fukasawa, Tokujin Yoshioka - et britanniques - Jasper Morrison, Michael Young - definissent un "Super Normal" : des objets si bien dessines qu'ils deviennent invisibles. Dieter Rams et ses dix principes du bon design sont rehabilites.

Le minimalisme contemporain dialogue avec l'ecologie naissante : materiaux durables, objets repensables, production locale. Cette sobriete influence toujours le design actuel, meme si de nouvelles tendances, maximalistes ou artisanales, proposent des alternatives.`,
    mainWorks: ["Systeme USM Haller", "Etagere 606 (Vitsoe)", "Muji", "Collection Super Normal (Morrison/Fukasawa)"],
    keyIdeas: ["Less is more", "Sobriete", "Modularite", "Super Normal"],
  },
  {
    id: "design-contemporain",
    name: "Design contemporain",
    birthYear: 2010,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fauteuil_Prouve.jpg?width=220",
    nationality: "International",
    movement: "XXIe siecle",
    summary: `Le design contemporain refuse les categories. Eclectique, il puise dans tous les styles du passe, de l'artisanat a la haute technologie, du luxe au recycle. Internet democratise la creation et la diffusion, brouillant les frontieres entre amateurs et professionnels.

L'ecologie devient centrale. Les designers repensent les materiaux (bioplastiques, champignons, algues), les processus (impression 3D, economie circulaire) et les usages (partage, reparabilite). Le meuble jetable est conteste au profit du durable et du local.

Parallèlement, le marche du vintage explose. Les icones du XXe siecle - Prouve, Perriand, Eames, Jacobsen - atteignent des prix records. Les galeries de design (Kreo, Carpenters Workshop) elevent le meuble au rang d'œuvre d'art. Le design devient collection et speculation.

Le design contemporain hesite entre production de masse (IKEA) et piece unique (design-art), entre technologie (objets connectes) et artisanat (makers), entre minimalisme et maximalisme. Cette diversite temoigne de la vitalite d'une discipline en constante redefinition.`,
    mainWorks: ["Meubles imprimes 3D", "Design recycle", "Reeditions de classiques", "Limited editions"],
    keyIdeas: ["Eclectisme", "Durabilite", "Vintage", "Design-art"],
  },
];
