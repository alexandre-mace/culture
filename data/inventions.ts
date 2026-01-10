export interface Invention {
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

export const inventions: Invention[] = [
  {
    id: "roue",
    name: "La roue",
    birthYear: -3500,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Roue_primitive.png?width=220",
    nationality: "Mesopotamien",
    movement: "Prehistoire",
    summary: `La roue apparait en Mesopotamie vers 3500 av. J.-C., d'abord comme tour de potier puis comme moyen de transport. C'est l'une des inventions les plus fondamentales de l'histoire humaine, absente des civilisations precolombiennes.

Les premieres roues sont des disques pleins en bois, lourds et fragiles. L'invention de la roue a rayons vers 2000 av. J.-C. les allege considerablement. Le char de guerre devient une arme redoutable dans tout le monde antique.

La roue permet le transport de charges lourdes sur de longues distances, revolutionnant le commerce et la guerre. Elle est aussi a la base de nombreux mecanismes : engrenages, poulies, moulins, horloges.

Associee a l'essieu, la roue reste le fondement de tous les transports terrestres jusqu'a l'invention du moteur. Son principe simple cache une abstraction conceptuelle complexe : transformer un mouvement lineaire en mouvement circulaire.`,
    mainWorks: ["Tour de potier", "Char sumerien", "Roue a rayons", "Chariot"],
    keyIdeas: ["Transport", "Mecanique", "Mouvement circulaire", "Commerce"],
  },
  {
    id: "ecriture",
    name: "L'ecriture",
    birthYear: -3200,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cuneiform_script2.jpg?width=220",
    nationality: "Mesopotamien / Egyptien",
    movement: "Antiquite",
    summary: `L'ecriture apparait independamment en Mesopotamie (cuneiforme, vers 3200 av. J.-C.) et en Egypte (hieroglyphes, vers 3100 av. J.-C.). Elle nait des besoins comptables des premieres cites-Etats et transforme radicalement les societes humaines.

Les premiers signes sont des pictogrammes representant des objets concrets. Progressivement, ils evoluent vers des ideogrammes puis des phonogrammes notant des sons. L'alphabet phenicien (vers 1050 av. J.-C.) simplifie le systeme en une trentaine de signes.

L'ecriture permet la transmission du savoir au-dela de la memoire individuelle, l'administration des empires, la codification des lois, la preservation des mythes et de l'histoire. Elle fonde la civilisation au sens propre.

L'invention de l'ecriture marque traditionnellement la fin de la prehistoire et le debut de l'histoire. Chaque civilisation developpe son systeme : chinois, maya, indien. L'alphabetisation reste un enjeu majeur de developpement.`,
    mainWorks: ["Cuneiforme sumerien", "Hieroglyphes egyptiens", "Alphabet phenicien", "Ecriture chinoise"],
    keyIdeas: ["Memoire", "Administration", "Transmission", "Civilisation"],
  },
  {
    id: "papier",
    name: "Le papier",
    birthYear: 105,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Paper_production.jpg?width=220",
    nationality: "Chinois",
    movement: "Antiquite",
    summary: `Le papier est invente en Chine en 105 ap. J.-C. par Cai Lun, eunuque de la cour imperiale. Il utilise des fibres vegetales (murier, chanvre) reduites en pate et etalees en feuilles. Le secret de fabrication reste chinois pendant des siecles.

Avant le papier, on ecrit sur papyrus (fragile), parchemin (couteux), tablettes d'argile ou de cire, bambou, soie. Le papier est leger, peu couteux, facile a produire. Il revolutionne la diffusion de l'ecrit.

La technique atteint le monde arabe au VIIIe siecle (bataille de Talas, 751), puis l'Europe au XIIe siecle via l'Espagne. Les moulins a papier se multiplient. L'invention de l'imprimerie (Gutenberg, 1450) decuple l'importance du papier.

Le papier reste le support dominant de l'information jusqu'a l'ere numerique. Aujourd'hui encore, malgre les ecrans, la production mondiale de papier atteint 400 millions de tonnes par an.`,
    mainWorks: ["Papier de Cai Lun", "Papier arabe", "Papier europeen", "Papier industriel"],
    keyIdeas: ["Support d'ecriture", "Fibres vegetales", "Diffusion du savoir", "Imprimerie"],
  },
  {
    id: "boussole",
    name: "La boussole",
    birthYear: 1040,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kompas_Sofia.JPG?width=220",
    nationality: "Chinois",
    movement: "Moyen Age",
    summary: `La boussole magnetique apparait en Chine au XIe siecle, d'abord pour la geomancie (feng shui) puis pour la navigation. Elle utilise la propriete de la magnetite ou du fer aimante de s'orienter vers le nord magnetique.

Les Chinois transmettent la boussole aux Arabes qui l'amenent en Europe au XIIe siecle. Elle revolutionne la navigation en permettant de s'orienter par temps couvert ou la nuit, sans reperes celestes visibles.

La boussole, associee a l'astrolabe et aux cartes marines, rend possibles les grandes explorations du XVe siecle. Colomb, Vasco de Gama, Magellan n'auraient pu traverser les oceans sans elle.

La boussole reste l'instrument de navigation fondamental jusqu'a l'invention du GPS au XXe siecle. Elle equipe encore aujourd'hui tous les navires et avions comme instrument de secours.`,
    mainWorks: ["Boussole chinoise", "Boussole marine", "Compas de navigation", "Rose des vents"],
    keyIdeas: ["Navigation", "Magnetisme", "Orientation", "Explorations"],
  },
  {
    id: "imprimerie",
    name: "L'imprimerie",
    birthYear: 1450,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gutenberg_Bible.jpg?width=220",
    nationality: "Allemand",
    movement: "Renaissance",
    summary: `Johannes Gutenberg invente l'imprimerie a caracteres mobiles vers 1450 a Mayence. Il combine plusieurs innovations : caracteres metalliques interchangeables, presse a vis, encre grasse. La Bible de Gutenberg (1455) est le premier livre imprime en Europe.

L'imprimerie existait en Chine depuis le XIe siecle (caracteres mobiles de Bi Sheng), mais les milliers d'ideogrammes limitaient son usage. L'alphabet europeen rend les caracteres mobiles bien plus efficaces.

En cinquante ans, l'imprimerie se repand dans toute l'Europe. Les prix des livres s'effondrent, le nombre de titres explose. La Reforme protestante, la Renaissance, la revolution scientifique sont indissociables de cette revolution technique.

L'imprimerie est consideree comme l'invention la plus importante du deuxieme millenaire. Elle prefigure toutes les revolutions de la communication : presse, radio, television, internet.`,
    mainWorks: ["Bible de Gutenberg", "Presse a bras", "Caracteres mobiles", "Premiers incunables"],
    keyIdeas: ["Reproduction mecanique", "Diffusion du savoir", "Revolution culturelle", "Alphabetisation"],
  },
  {
    id: "telescope",
    name: "Le telescope",
    birthYear: 1608,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Galileo_Galilei01.jpg?width=220",
    nationality: "Neerlandais / Italien",
    movement: "Revolution scientifique",
    summary: `Le telescope est invente en 1608 par le lunetier neerlandais Hans Lippershey. Galilee l'ameliore des 1609 et le tourne vers le ciel, decouvrant les montagnes de la Lune, les satellites de Jupiter, les phases de Venus.

Ces observations confirment le systeme heliocentriquede Copernic et bouleversent la cosmologie. La Terre n'est plus le centre de l'univers. Galilee publie ses decouvertes dans le Sidereus Nuncius (1610), best-seller de l'epoque.

Newton invente le telescope a miroir (1668), evitant les aberrations chromatiques des lentilles. Les telescopes grandissent : de quelques centimetres chez Galilee a des metres au XXe siecle, culminant avec le Hubble spatial.

Le telescope reste l'instrument fondamental de l'astronomie. Les grands observatoires modernes (VLT, Keck, bientot ELT) permettent de voir des galaxies a des milliards d'annees-lumiere.`,
    mainWorks: ["Lunette de Galilee", "Telescope de Newton", "Telescope Hubble", "Grands observatoires"],
    keyIdeas: ["Astronomie", "Optique", "Heliocentrisme", "Exploration du cosmos"],
  },
  {
    id: "microscope",
    name: "Le microscope",
    birthYear: 1676,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Van_Leeuwenhoek%27s_microscopes_by_Henry_Baker.jpg?width=220",
    nationality: "Neerlandais",
    movement: "Revolution scientifique",
    summary: `Le microscope apparait au debut du XVIIe siecle, mais c'est Anton van Leeuwenhoek qui en fait un instrument scientifique. Ses lentilles artisanales (grossissement x270) lui permettent de decouvrir les bacteries, les spermatozoides, les globules rouges.

Le microscope revele un monde invisible a l'oeil nu. Robert Hooke observe les cellules vegetales (1665), ouvrant la voie a la biologie cellulaire. Pasteur et Koch utilisent le microscope pour fonder la microbiologie.

Au XXe siecle, le microscope electronique (1931) permet des grossissements de plusieurs millions. On observe virus, molecules, atomes. Le microscope a effet tunnel (1981) visualise les atomes individuels.

Le microscope a transforme la medecine (diagnostic, histologie), la biologie (cytologie, genetique), la physique (nanotechnologies). Il reste un outil fondamental de la recherche scientifique.`,
    mainWorks: ["Microscopes de Leeuwenhoek", "Micrographia de Hooke", "Microscope electronique", "Microscope a effet tunnel"],
    keyIdeas: ["Invisble", "Bacteries", "Cellules", "Nanotechnologie"],
  },
  {
    id: "machine-vapeur",
    name: "La machine a vapeur",
    birthYear: 1712,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Newcomen_atmospheric_engine_animation.gif?width=220",
    nationality: "Britannique",
    movement: "Revolution industrielle",
    summary: `Thomas Newcomen construit la premiere machine a vapeur pratique en 1712, pour pomper l'eau des mines de charbon. James Watt l'ameliore considerablement a partir de 1769 (condenseur separe, mouvement rotatif), la rendant utilisable pour l'industrie.

La machine a vapeur transforme la chaleur en travail mecanique. Elle libere l'industrie de la force humaine, animale et hydraulique. Les usines peuvent s'implanter n'importe ou, pas seulement pres des cours d'eau.

La machine a vapeur propulse la revolution industrielle : filatures, forges, mines, puis locomotives (Stephenson, 1814) et bateaux (Fulton, 1807). Elle transforme le paysage, l'economie, la societe europeenne.

Remplacee par le moteur a explosion et l'electricite, la machine a vapeur reste le symbole de la premiere revolution industrielle. Elle inaugure l'ere des machines et de la thermodynamique.`,
    mainWorks: ["Machine de Newcomen", "Machine de Watt", "Locomotive Rocket", "Steamboat de Fulton"],
    keyIdeas: ["Energie", "Industrie", "Revolution industrielle", "Thermodynamique"],
  },
  {
    id: "vaccination",
    name: "La vaccination",
    birthYear: 1796,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Edward_Jenner._Oil_painting._Wellcome_V0023503.jpg?width=220",
    nationality: "Britannique",
    movement: "Medecine moderne",
    summary: `Edward Jenner pratique la premiere vaccination en 1796. Il inocule le virus de la vaccine (variole des vaches) a un enfant, qui devient immunise contre la variole humaine, maladie alors mortelle et redoutee.

L'idee de l'inoculation existait en Chine et en Turquie (variolisation), mais elle etait dangereuse. Jenner systematise une methode sure, fondee sur l'observation que les vachers ne contractent pas la variole.

Pasteur generalise le principe au XIXe siecle : attenuer un agent pathogene pour stimuler l'immunite. Vaccins contre la rage, le cholera, la diphterie, le tetanos sauvent des millions de vies.

La variole est eradiquee en 1980, premiere maladie eliminee par l'homme. La vaccination reste l'arme la plus efficace contre les epidemies. Les vaccins ARN (Covid-19) ouvrent une nouvelle ere.`,
    mainWorks: ["Vaccin antivariolique de Jenner", "Vaccins de Pasteur", "Vaccin contre la polio", "Vaccins ARN"],
    keyIdeas: ["Immunite", "Prevention", "Eradication", "Sante publique"],
  },
  {
    id: "pile-electrique",
    name: "La pile electrique",
    birthYear: 1800,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/VoltaBattery.JPG?width=220",
    nationality: "Italien",
    movement: "Revolution scientifique",
    summary: `Alessandro Volta invente la pile electrique en 1800, empilant des disques de cuivre et de zinc separes par du carton imbibe d'eau salee. Pour la premiere fois, on dispose d'une source de courant electrique continu et stable.

La pile de Volta permet des experiences decisives. Humphry Davy isole de nouveaux elements chimiques par electrolyse. Oersted decouvre l'electromagnetisme. Faraday invente le moteur electrique et la dynamo.

Les piles s'ameliorent : pile Daniell, pile Leclanche (la pile seche quotidienne), accumulateurs rechargeables. Elles alimentent les premiers telegraphes, telephones, radios, avant l'electrification des reseaux.

Aujourd'hui, les batteries lithium-ion equipent smartphones, voitures electriques, stockage d'energie renouvelable. La pile de Volta a ouvert l'ere electrique qui definit notre civilisation.`,
    mainWorks: ["Pile de Volta", "Pile Daniell", "Pile Leclanche", "Batterie lithium-ion"],
    keyIdeas: ["Electricite", "Courant continu", "Electrochimie", "Stockage d'energie"],
  },
  {
    id: "photographie",
    name: "La photographie",
    birthYear: 1839,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Boulevard_du_Temple_by_Daguerre.jpg?width=220",
    nationality: "Francais",
    movement: "XIXe siecle",
    summary: `La photographie nait officiellement le 19 aout 1839, quand l'Academie des sciences presente le daguerreotype de Louis Daguerre. Nicephore Niepce avait obtenu la premiere image permanente en 1826, mais son procede etait impraticable.

La photographie fixe mecaniquement la realite, bouleversant l'art du portrait, le journalisme, la science. En quelques decennies, elle devient accessible a tous (Kodak, 1888). Le cinema en decoule directement.

Du daguerreotype au numerique, les techniques evoluent mais le principe reste : capturer la lumiere. La photographie democratise l'image, documente l'histoire, transforme la memoire collective.

Aujourd'hui, des milliards de photos sont prises chaque jour. Du reportage a l'art contemporain, du selfie a l'imagerie satellitaire, la photographie est partout, fondement de notre culture visuelle.`,
    mainWorks: ["Daguerreotype", "Calotype", "Kodak", "Photographie numerique"],
    keyIdeas: ["Image fixe", "Memoire", "Democratisation", "Document"],
  },
  {
    id: "telegraphe",
    name: "Le telegraphe electrique",
    birthYear: 1837,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Morse_telegraph.jpg?width=220",
    nationality: "Americain / Britannique",
    movement: "XIXe siecle",
    summary: `Samuel Morse met au point le telegraphe electrique pratique en 1837, avec son celebre code de points et traits. En 1844, il envoie le premier message public : "What hath God wrought" entre Washington et Baltimore.

Le telegraphe permet pour la premiere fois de communiquer instantanement a distance. Les fils couvrent les continents, les cables sous-marins relient l'Europe a l'Amerique (1866). Le monde se connecte.

Le telegraphe transforme le journalisme (agences de presse), la finance (cours en temps reel), la guerre (coordination des armees). Il inaugure l'ere des telecommunications qui mene au telephone, a la radio, a internet.

Le morse reste utilise jusqu'a la fin du XXe siecle, notamment en mer. Le telegraphe est le premier reseau de communication globale, ancetre de tous nos reseaux numeriques.`,
    mainWorks: ["Telegraphe de Morse", "Code Morse", "Cable transatlantique", "Reseau mondial"],
    keyIdeas: ["Telecommunication", "Instantaneite", "Reseau", "Code"],
  },
  {
    id: "telephone",
    name: "Le telephone",
    birthYear: 1876,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Actor_portraying_Alexander_Graham_Bell_in_an_AT%26T_promotional_film_%281926%29.jpg?width=220",
    nationality: "Americain",
    movement: "XIXe siecle",
    summary: `Alexander Graham Bell brevete le telephone en 1876, quelques heures avant Elisha Gray. "Mr. Watson, come here, I want to see you" : le premier appel telephonique marque une revolution dans la communication humaine.

Le telephone transmet la voix en temps reel sur des fils electriques. En quelques decennies, il connecte les foyers, les entreprises, les nations. Les centrales telephoniques emploient des milliers d'operatrices.

L'automatisation (cadran rotatif), la mondialisation (cables sous-marins, satellites), la numerisation transforment le reseau. Le telephone mobile (annees 1990) puis le smartphone (2007) le rendent ubiquitaire.

Aujourd'hui, le telephone est devenu un ordinateur de poche. La voix n'est plus qu'une fonction parmi d'autres. Mais le principe de Bell - transmettre la parole a distance - reste fondamental.`,
    mainWorks: ["Telephone de Bell", "Central telephonique", "Telephone mobile", "Smartphone"],
    keyIdeas: ["Communication vocale", "Reseau", "Mobilite", "Connexion"],
  },
  {
    id: "ampoule",
    name: "L'ampoule electrique",
    birthYear: 1879,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Thomas_Edison2.jpg?width=220",
    nationality: "Americain",
    movement: "Revolution industrielle",
    summary: `Thomas Edison presente l'ampoule a incandescence pratique en 1879. Apres des milliers d'essais, il trouve un filament de carbone capable de briller des heures dans une ampoule sous vide. L'eclairage electrique devient viable.

Edison ne se contente pas de l'ampoule : il concoit tout le systeme electrique (centrale, reseau, compteur). En 1882, la premiere centrale electrique eclaire un quartier de New York. L'electricite entre dans les foyers.

L'eclairage electrique transforme la vie quotidienne, les villes, le travail. Les usines tournent la nuit, les rues deviennent sures, les loisirs nocturnes se developpent. La "fee electricite" enchante les expositions universelles.

L'ampoule a incandescence cede aujourd'hui la place aux LED, cent fois plus efficaces. Mais le principe d'Edison - l'eclairage electrique pour tous - reste le fondement de notre civilisation urbaine.`,
    mainWorks: ["Ampoule a incandescence", "Centrale de Pearl Street", "Reseau electrique", "LED"],
    keyIdeas: ["Eclairage", "Electrification", "Nuit", "Vie urbaine"],
  },
  {
    id: "moteur-explosion",
    name: "Le moteur a explosion",
    birthYear: 1886,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/1885Benz.jpg?width=220",
    nationality: "Allemand",
    movement: "Revolution industrielle",
    summary: `Karl Benz brevete la premiere automobile a moteur a explosion en 1886. Independamment, Gottlieb Daimler developpe son propre moteur. Le principe : bruler un melange air-essence dans un cylindre pour produire un mouvement.

Le moteur a explosion offre une puissance concentree et mobile, impossible avec la vapeur. L'automobile se developpe rapidement, democratisee par Ford et sa chaine de montage (Model T, 1908). L'avion suit (Wright, 1903).

Le moteur a explosion transforme le XXe siecle : transports individuels, banlieues, commerce mondial, tourisme de masse. Mais aussi pollution, dependance au petrole, rechauffement climatique.

Le moteur thermique cede progressivement la place au moteur electrique pour l'automobile. Mais l'aviation et le transport maritime restent dependants des hydrocarbures. La transition energetique est le defi du XXIe siecle.`,
    mainWorks: ["Benz Patent-Motorwagen", "Ford Model T", "Avion des freres Wright", "Moteur diesel"],
    keyIdeas: ["Mobilite", "Petrole", "Automobile", "Aviation"],
  },
  {
    id: "radio",
    name: "La radio",
    birthYear: 1896,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Guglielmo_Marconi.jpg?width=220",
    nationality: "Italien",
    movement: "XXe siecle",
    summary: `Guglielmo Marconi realise la premiere transmission radio longue distance en 1896, developpant les travaux de Hertz et Tesla. En 1901, il transmet un signal a travers l'Atlantique. La communication sans fil est nee.

La radio libere la communication des cables. Elle equipe les navires (naufrage du Titanic, 1912), les armees, puis les foyers. Les premieres emissions regulieres datent des annees 1920. La radio devient un media de masse.

La radio transforme la politique (Roosevelt, de Gaulle), la culture (musique, feuilletons), l'information. Elle invente le direct, le reportage, la publicite moderne. Elle reste un media majeur malgre la television.

Les ondes radio portent aussi la television, les telecommunications mobiles, le Wi-Fi, le GPS. Le spectre radioelectrique est une ressource strategique, geree internationalement.`,
    mainWorks: ["Transmetteur de Marconi", "Premieres radiodiffusions", "Transistor", "Radio numerique"],
    keyIdeas: ["Sans fil", "Ondes", "Media de masse", "Spectre"],
  },
  {
    id: "avion",
    name: "L'avion",
    birthYear: 1903,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/First_flight2.jpg?width=220",
    nationality: "Americain",
    movement: "XXe siecle",
    summary: `Les freres Wright realisent le premier vol motorise controle le 17 decembre 1903 a Kitty Hawk : 12 secondes, 36 metres. En quelques annees, l'aviation progresse spectaculairement (Bleriot traverse la Manche, 1909).

La Premiere Guerre mondiale accelere le developpement : avions de chasse, bombardiers. L'entre-deux-guerres voit les premiers vols transatlantiques (Lindbergh, 1927). L'aviation commerciale nait (Pan Am, Air France).

Le jet (de Havilland Comet, 1952, Boeing 707, 1958) democratise le voyage aerien. Le monde se retrecit. Le tourisme de masse, la mondialisation economique reposent sur l'avion. Concorde incarne le reve supersonique.

L'aviation represente 2-3% des emissions de CO2 mondiales. La decarbonation du secteur (biocarburants, hydrogene, electrique) est un defi majeur. Mais l'avion reste irremplacable pour les longues distances.`,
    mainWorks: ["Flyer des Wright", "Spirit of St. Louis", "Boeing 747", "Airbus A380"],
    keyIdeas: ["Vol", "Mondialisation", "Tourisme", "Transport rapide"],
  },
  {
    id: "penicilline",
    name: "La penicilline",
    birthYear: 1928,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gruby_plate.svg?width=220",
    nationality: "Britannique",
    movement: "Medecine moderne",
    summary: `Alexander Fleming decouvre la penicilline en 1928 : une moisissure (Penicillium) tue les bacteries sur une boite de Petri oubliee. Florey et Chain la purifient et la produisent industriellement pendant la Seconde Guerre mondiale.

La penicilline inaugure l'ere des antibiotiques. Des maladies autrefois mortelles (pneumonie, septicemie, syphilis) deviennent curables. L'esperance de vie bondit. D'autres antibiotiques suivent (streptomycine, tetracycline).

Les antibiotiques transforment la medecine : chirurgie complexe, transplantations, chimiotherapie deviennent possibles. Ils sauvent des centaines de millions de vies au XXe siecle.

L'abus d'antibiotiques engendre la resistance bacterienne, menace majeure du XXIe siecle. Des "super-bacteries" resistantes emergens. La recherche de nouveaux antibiotiques est urgente.`,
    mainWorks: ["Penicilline G", "Streptomycine", "Antibiotiques a large spectre", "Antibiotiques de synthese"],
    keyIdeas: ["Antibiotique", "Bacteries", "Resistance", "Medecine moderne"],
  },
  {
    id: "ordinateur",
    name: "L'ordinateur",
    birthYear: 1945,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/ENIAC-changing_a_tube.jpg?width=220",
    nationality: "Americain / Britannique",
    movement: "Revolution numerique",
    summary: `L'ENIAC (1945), premier ordinateur electronique programmable, occupe une piece entiere et consomme 150 kW. Il peut faire en quelques heures des calculs qui prendraient des annees a la main. L'ere informatique commence.

Les pionniers (Turing, von Neumann, Shannon) posent les bases theoriques. Le transistor (1947) puis le circuit integre (1958) permettent la miniaturisation. L'ordinateur passe de l'armee et la recherche aux entreprises (IBM) puis aux foyers (Apple, 1977).

L'ordinateur personnel, internet (1990s), le smartphone (2007) transforment tous les aspects de la vie : travail, communication, loisirs, commerce, science. La puissance de calcul double tous les deux ans (loi de Moore).

L'intelligence artificielle, heritiere de ces machines, promet une nouvelle revolution. L'ordinateur n'est plus seulement un outil de calcul mais un partenaire cognitif.`,
    mainWorks: ["ENIAC", "IBM PC", "Macintosh", "Smartphone"],
    keyIdeas: ["Calcul", "Programmation", "Miniaturisation", "Ubiquite"],
  },
  {
    id: "transistor",
    name: "Le transistor",
    birthYear: 1947,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Replica-of-first-transistor.jpg?width=220",
    nationality: "Americain",
    movement: "Revolution numerique",
    summary: `John Bardeen, Walter Brattain et William Shockley inventent le transistor aux Bell Labs en 1947. Ce petit composant semi-conducteur remplace le tube a vide, fragile et energivore. C'est la brique de base de toute l'electronique moderne.

Le transistor permet la miniaturisation de l'electronique. Les radios portables (1954), les premiers ordinateurs a transistors, puis les circuits integres (1958) contenant des milliers puis des milliards de transistors sur une puce.

Aujourd'hui, un processeur de smartphone contient 15 milliards de transistors. La loi de Moore (doublement de la densite tous les deux ans) a tenu pendant soixante ans, permettant la revolution numerique.

Le transistor est peut-etre l'invention la plus importante du XXe siecle. Sans lui, pas d'ordinateurs, de smartphones, d'internet, de voitures modernes, d'appareils medicaux. Notre civilisation repose sur ce composant minuscule.`,
    mainWorks: ["Premier transistor (1947)", "Transistor au silicium", "Circuit integre", "Microprocesseur"],
    keyIdeas: ["Semi-conducteur", "Miniaturisation", "Loi de Moore", "Electronique"],
  },
  {
    id: "internet",
    name: "Internet",
    birthYear: 1969,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/First-arpanet-imp-log.jpg?width=220",
    nationality: "Americain",
    movement: "Revolution numerique",
    summary: `ARPANET, ancetre d'internet, transmet son premier message le 29 octobre 1969 entre UCLA et Stanford. Le reseau militaire evolue vers un reseau academique puis commercial. Le World Wide Web (Tim Berners-Lee, 1989) le rend accessible a tous.

Internet connecte les ordinateurs du monde entier via le protocole TCP/IP. Le web ajoute une couche de documents lies (hypertexte). Les navigateurs (Mosaic, 1993) demandent juste un clic. Le public decouvre internet dans les annees 1990.

Internet transforme tout : commerce (Amazon), information (Google), sociabilite (Facebook), culture (YouTube), politique (revolutions arabes). L'acces a l'information devient quasi-universel.

Les defis d'internet au XXIe siecle : vie privee, desinformation, cybersecurite, fracture numerique, impact environnemental des data centers. Mais le reseau reste l'infrastructure fondamentale de notre epoque.`,
    mainWorks: ["ARPANET", "TCP/IP", "World Wide Web", "Navigateurs web"],
    keyIdeas: ["Reseau mondial", "Information", "Communication", "Numerique"],
  },
  {
    id: "gps",
    name: "Le GPS",
    birthYear: 1978,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/GPS_Satellite_NASA_art-iif.jpg?width=220",
    nationality: "Americain",
    movement: "Revolution numerique",
    summary: `Le GPS (Global Positioning System) debute en 1978 avec le lancement des premiers satellites par l'armee americaine. Ouvert aux civils en 1983, il permet de connaitre sa position n'importe ou sur Terre avec une precision metrique.

Le systeme repose sur 24 satellites emettant des signaux horaires. Un recepteur calcule sa distance a plusieurs satellites et en deduit sa position par triangulation. Des systemes concurrents existent : Galileo (Europe), GLONASS (Russie), BeiDou (Chine).

Le GPS transforme la navigation (automobile, maritime, aerienne), la cartographie, la logistique, l'agriculture de precision. Il est integre a tous les smartphones, permettant la geolocalisation des services.

Le GPS illustre les applications civiles des technologies militaires. Il est devenu une infrastructure critique : transports, finance (horodatage), reseaux electriques dependent de sa precision.`,
    mainWorks: ["Constellation GPS", "Recepteurs civils", "Galileo", "Applications smartphone"],
    keyIdeas: ["Geolocalisation", "Satellites", "Navigation", "Precision"],
  },
  {
    id: "crispr",
    name: "CRISPR-Cas9",
    birthYear: 2012,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jennifer_Doudna_in_2020.jpg?width=220",
    nationality: "Americain / Francais",
    movement: "Biotechnologies",
    summary: `CRISPR-Cas9, decouvert par Jennifer Doudna et Emmanuelle Charpentier en 2012, est un outil d'edition genetique revolutionnaire. Ces "ciseaux moleculaires" permettent de modifier l'ADN avec une precision, une simplicite et un cout sans precedent.

CRISPR vient des bacteries, qui l'utilisent pour se defendre contre les virus. Les chercheuses ont montre qu'on pouvait le programmer pour couper n'importe quelle sequence d'ADN. Le gene cible peut etre inactive, repare ou remplace.

Les applications sont immenses : therapie genique (guerir des maladies hereditaires), agriculture (plantes resistantes), recherche (comprendre les genes). Les premiers essais cliniques sont prometteurs.

CRISPR souleve aussi des questions ethiques majeures : modification d'embryons humains (bebes CRISPR chinois, 2018), enhancement genetique, bioterrorisme. La regulation peine a suivre le rythme de la science.`,
    mainWorks: ["Article Doudna-Charpentier (2012)", "Therapies geniques", "Agriculture CRISPR", "Diagnostics"],
    keyIdeas: ["Edition genetique", "ADN", "Therapie genique", "Ethique"],
  },
];
