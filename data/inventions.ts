export interface Invention {
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

export const inventions: Invention[] = [
  {
    id: "roue",
    name: "La roue",
    birthYear: -3500,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Roue_primitive.png?width=220",
    nationality: "Mésopotamien",
    movement: "Préhistoire",
    family: "Antiquité & Moyen Âge",
    summary: `La roue apparaît en Mésopotamie vers 3500 av. J.-C., d'abord comme tour de potier puis comme moyen de transport. C'est l'une des inventions les plus fondamentales de l'histoire humaine, absente des civilisations précolombiennes.

Les premières roues sont des disques pleins en bois, lourds et fragiles. L'invention de la roue à rayons vers 2000 av. J.-C. les allège considérablement. Le char de guerre devient une arme redoutable dans tout le monde antique.

La roue permet le transport de charges lourdes sur de longues distances, révolutionnant le commerce et la guerre. Elle est aussi à la base de nombreux mécanismes : engrenages, poulies, moulins, horloges.

Associée à l'essieu, la roue reste le fondement de tous les transports terrestres jusqu'à l'invention du moteur. Son principe simple cache une abstraction conceptuelle complexe : transformer un mouvement linéaire en mouvement circulaire.`,
    mainWorks: ["Tour de potier", "Char sumérien", "Roue à rayons", "Chariot"],
    keyIdeas: ["Transport", "Mécanique", "Mouvement circulaire", "Commerce"],
  },
  {
    id: "ecriture",
    name: "L'écriture",
    birthYear: -3200,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cuneiform_script2.jpg?width=220",
    nationality: "Mésopotamien / Égyptien",
    movement: "Antiquité",
    family: "Antiquité & Moyen Âge",
    summary: `L'écriture apparaît indépendamment en Mésopotamie (cunéiforme, vers 3200 av. J.-C.) et en Égypte (hiéroglyphes, vers 3100 av. J.-C.). Elle naît des besoins comptables des premières cités-États et transforme radicalement les sociétés humaines.

Les premiers signes sont des pictogrammes représentant des objets concrets. Progressivement, ils évoluent vers des idéogrammes puis des phonogrammes notant des sons. L'alphabet phénicien (vers 1050 av. J.-C.) simplifie le système en une trentaine de signes.

L'écriture permet la transmission du savoir au-delà de la mémoire individuelle, l'administration des empires, la codification des lois, la préservation des mythes et de l'histoire. Elle fonde la civilisation au sens propre.

L'invention de l'écriture marque traditionnellement la fin de la préhistoire et le début de l'histoire. Chaque civilisation développe son système : chinois, maya, indien. L'alphabétisation reste un enjeu majeur de développement.`,
    mainWorks: ["Cunéiforme sumérien", "Hiéroglyphes égyptiens", "Alphabet phénicien", "Écriture chinoise"],
    keyIdeas: ["Mémoire", "Administration", "Transmission", "Civilisation"],
  },
  {
    id: "papier",
    name: "Le papier",
    birthYear: 105,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Paper_production.jpg?width=220",
    nationality: "Chinois",
    movement: "Antiquité",
    family: "Antiquité & Moyen Âge",
    influences: ["ecriture"],
    summary: `Le papier est inventé en Chine en 105 ap. J.-C. par Cai Lun, eunuque de la cour impériale. Il utilise des fibres végétales (mûrier, chanvre) réduites en pâte et étalées en feuilles. Le secret de fabrication reste chinois pendant des siècles.

Avant le papier, on écrit sur papyrus (fragile), parchemin (coûteux), tablettes d'argile ou de cire, bambou, soie. Le papier est léger, peu coûteux, facile à produire. Il révolutionne la diffusion de l'écrit.

La technique atteint le monde arabe au VIIIe siècle (bataille de Talas, 751), puis l'Europe au XIIe siècle via l'Espagne. Les moulins à papier se multiplient. L'invention de l'imprimerie (Gutenberg, 1450) décuple l'importance du papier.

Le papier reste le support dominant de l'information jusqu'à l'ère numérique. Aujourd'hui encore, malgré les écrans, la production mondiale de papier atteint 400 millions de tonnes par an.`,
    mainWorks: ["Papier de Cai Lun", "Papier arabe", "Papier européen", "Papier industriel"],
    keyIdeas: ["Support d'écriture", "Fibres végétales", "Diffusion du savoir", "Imprimerie"],
  },
  {
    id: "boussole",
    name: "La boussole",
    birthYear: 1040,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kompas_Sofia.JPG?width=220",
    nationality: "Chinois",
    movement: "Moyen Âge",
    family: "Antiquité & Moyen Âge",
    summary: `La boussole magnétique apparaît en Chine au XIe siècle, d'abord pour la géomancie (feng shui) puis pour la navigation. Elle utilise la propriété de la magnétite ou du fer aimanté de s'orienter vers le nord magnétique.

Les Chinois transmettent la boussole aux Arabes qui l'amènent en Europe au XIIe siècle. Elle révolutionne la navigation en permettant de s'orienter par temps couvert ou la nuit, sans repères célestes visibles.

La boussole, associée à l'astrolabe et aux cartes marines, rend possibles les grandes explorations du XVe siècle. Colomb, Vasco de Gama, Magellan n'auraient pu traverser les océans sans elle.

La boussole reste l'instrument de navigation fondamental jusqu'à l'invention du GPS au XXe siècle. Elle équipe encore aujourd'hui tous les navires et avions comme instrument de secours.`,
    mainWorks: ["Boussole chinoise", "Boussole marine", "Compas de navigation", "Rose des vents"],
    keyIdeas: ["Navigation", "Magnétisme", "Orientation", "Explorations"],
  },
  {
    id: "imprimerie",
    name: "L'imprimerie",
    birthYear: 1450,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gutenberg_Bible.jpg?width=220",
    nationality: "Allemand",
    movement: "Renaissance",
    family: "Renaissance & sciences",
    influences: ["ecriture", "papier"],
    summary: `Johannes Gutenberg invente l'imprimerie à caractères mobiles vers 1450 à Mayence. Il combine plusieurs innovations : caractères métalliques interchangeables, presse à vis, encre grasse. La Bible de Gutenberg (1455) est le premier livre imprimé en Europe.

L'imprimerie existait en Chine depuis le XIe siècle (caractères mobiles de Bi Sheng), mais les milliers d'idéogrammes limitaient son usage. L'alphabet européen rend les caractères mobiles bien plus efficaces.

En cinquante ans, l'imprimerie se répand dans toute l'Europe. Les prix des livres s'effondrent, le nombre de titres explose. La Réforme protestante, la Renaissance, la révolution scientifique sont indissociables de cette révolution technique.

L'imprimerie est considérée comme l'invention la plus importante du deuxième millénaire. Elle préfigure toutes les révolutions de la communication : presse, radio, télévision, internet.`,
    mainWorks: ["Bible de Gutenberg", "Presse à bras", "Caractères mobiles", "Premiers incunables"],
    keyIdeas: ["Reproduction mécanique", "Diffusion du savoir", "Révolution culturelle", "Alphabétisation"],
  },
  {
    id: "telescope",
    name: "Le télescope",
    birthYear: 1608,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Galileo_Galilei01.jpg?width=220",
    nationality: "Néerlandais / Italien",
    movement: "Révolution scientifique",
    family: "Renaissance & sciences",
    summary: `Le télescope est inventé en 1608 par le lunetier néerlandais Hans Lippershey. Galilée l'améliore dès 1609 et le tourne vers le ciel, découvrant les montagnes de la Lune, les satellites de Jupiter, les phases de Vénus.

Ces observations confirment le système héliocentrique de Copernic et bouleversent la cosmologie. La Terre n'est plus le centre de l'univers. Galilée publie ses découvertes dans le Sidereus Nuncius (1610), best-seller de l'époque.

Newton invente le télescope à miroir (1668), évitant les aberrations chromatiques des lentilles. Les télescopes grandissent : de quelques centimètres chez Galilée à des mètres au XXe siècle, culminant avec le Hubble spatial.

Le télescope reste l'instrument fondamental de l'astronomie. Les grands observatoires modernes (VLT, Keck, bientôt ELT) permettent de voir des galaxies à des milliards d'années-lumière.`,
    mainWorks: ["Lunette de Galilée", "Télescope de Newton", "Télescope Hubble", "Grands observatoires"],
    keyIdeas: ["Astronomie", "Optique", "Héliocentrisme", "Exploration du cosmos"],
  },
  {
    id: "microscope",
    name: "Le microscope",
    birthYear: 1676,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Van_Leeuwenhoek%27s_microscopes_by_Henry_Baker.jpg?width=220",
    nationality: "Néerlandais",
    movement: "Révolution scientifique",
    family: "Renaissance & sciences",
    influences: ["telescope"],
    summary: `Le microscope apparaît au début du XVIIe siècle, mais c'est Anton van Leeuwenhoek qui en fait un instrument scientifique. Ses lentilles artisanales (grossissement x270) lui permettent de découvrir les bactéries, les spermatozoïdes, les globules rouges.

Le microscope révèle un monde invisible à l'œil nu. Robert Hooke observe les cellules végétales (1665), ouvrant la voie à la biologie cellulaire. Pasteur et Koch utilisent le microscope pour fonder la microbiologie.

Au XXe siècle, le microscope électronique (1931) permet des grossissements de plusieurs millions. On observe virus, molécules, atomes. Le microscope à effet tunnel (1981) visualise les atomes individuels.

Le microscope a transformé la médecine (diagnostic, histologie), la biologie (cytologie, génétique), la physique (nanotechnologies). Il reste un outil fondamental de la recherche scientifique.`,
    mainWorks: ["Microscopes de Leeuwenhoek", "Micrographia de Hooke", "Microscope électronique", "Microscope à effet tunnel"],
    keyIdeas: ["Invisible", "Bactéries", "Cellules", "Nanotechnologie"],
  },
  {
    id: "machine-vapeur",
    name: "La machine à vapeur",
    birthYear: 1712,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Newcomen_atmospheric_engine_animation.gif?width=220",
    nationality: "Britannique",
    movement: "Révolution industrielle",
    family: "Ère industrielle",
    summary: `Thomas Newcomen construit la première machine à vapeur pratique en 1712, pour pomper l'eau des mines de charbon. James Watt l'améliore considérablement à partir de 1769 (condenseur séparé, mouvement rotatif), la rendant utilisable pour l'industrie.

La machine à vapeur transforme la chaleur en travail mécanique. Elle libère l'industrie de la force humaine, animale et hydraulique. Les usines peuvent s'implanter n'importe où, pas seulement près des cours d'eau.

La machine à vapeur propulse la révolution industrielle : filatures, forges, mines, puis locomotives (Stephenson, 1814) et bateaux (Fulton, 1807). Elle transforme le paysage, l'économie, la société européenne.

Remplacée par le moteur à explosion et l'électricité, la machine à vapeur reste le symbole de la première révolution industrielle. Elle inaugure l'ère des machines et de la thermodynamique.`,
    mainWorks: ["Machine de Newcomen", "Machine de Watt", "Locomotive Rocket", "Steamboat de Fulton"],
    keyIdeas: ["Énergie", "Industrie", "Révolution industrielle", "Thermodynamique"],
  },
  {
    id: "vaccination",
    name: "La vaccination",
    birthYear: 1796,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Edward_Jenner._Oil_painting._Wellcome_V0023503.jpg?width=220",
    nationality: "Britannique",
    movement: "Médecine moderne",
    family: "Médecine & vivant",
    summary: `Edward Jenner pratique la première vaccination en 1796. Il inocule le virus de la vaccine (variole des vaches) à un enfant, qui devient immunisé contre la variole humaine, maladie alors mortelle et redoutée.

L'idée de l'inoculation existait en Chine et en Turquie (variolisation), mais elle était dangereuse. Jenner systématise une méthode sûre, fondée sur l'observation que les vachers ne contractent pas la variole.

Pasteur généralise le principe au XIXe siècle : atténuer un agent pathogène pour stimuler l'immunité. Vaccins contre la rage, le choléra, la diphtérie, le tétanos sauvent des millions de vies.

La variole est éradiquée en 1980, première maladie éliminée par l'homme. La vaccination reste l'arme la plus efficace contre les épidémies. Les vaccins ARN (Covid-19) ouvrent une nouvelle ère.`,
    mainWorks: ["Vaccin antivariolique de Jenner", "Vaccins de Pasteur", "Vaccin contre la polio", "Vaccins ARN"],
    keyIdeas: ["Immunité", "Prévention", "Éradication", "Santé publique"],
  },
  {
    id: "pile-electrique",
    name: "La pile électrique",
    birthYear: 1800,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/VoltaBattery.JPG?width=220",
    nationality: "Italien",
    movement: "Révolution scientifique",
    family: "Ère industrielle",
    summary: `Alessandro Volta invente la pile électrique en 1800, empilant des disques de cuivre et de zinc séparés par du carton imbibé d'eau salée. Pour la première fois, on dispose d'une source de courant électrique continu et stable.

La pile de Volta permet des expériences décisives. Humphry Davy isole de nouveaux éléments chimiques par électrolyse. Oersted découvre l'électromagnétisme. Faraday invente le moteur électrique et la dynamo.

Les piles s'améliorent : pile Daniell, pile Leclanché (la pile sèche quotidienne), accumulateurs rechargeables. Elles alimentent les premiers télégraphes, téléphones, radios, avant l'électrification des réseaux.

Aujourd'hui, les batteries lithium-ion équipent smartphones, voitures électriques, stockage d'énergie renouvelable. La pile de Volta a ouvert l'ère électrique qui définit notre civilisation.`,
    mainWorks: ["Pile de Volta", "Pile Daniell", "Pile Leclanché", "Batterie lithium-ion"],
    keyIdeas: ["Électricité", "Courant continu", "Électrochimie", "Stockage d'énergie"],
  },
  {
    id: "photographie",
    name: "La photographie",
    birthYear: 1839,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Boulevard_du_Temple_by_Daguerre.jpg?width=220",
    nationality: "Français",
    movement: "XIXe siècle",
    family: "Ère industrielle",
    summary: `La photographie naît officiellement le 19 août 1839, quand l'Académie des sciences présente le daguerréotype de Louis Daguerre. Nicéphore Niépce avait obtenu la première image permanente en 1826, mais son procédé était impraticable.

La photographie fixe mécaniquement la réalité, bouleversant l'art du portrait, le journalisme, la science. En quelques décennies, elle devient accessible à tous (Kodak, 1888). Le cinéma en découle directement.

Du daguerréotype au numérique, les techniques évoluent mais le principe reste : capturer la lumière. La photographie démocratise l'image, documente l'histoire, transforme la mémoire collective.

Aujourd'hui, des milliards de photos sont prises chaque jour. Du reportage à l'art contemporain, du selfie à l'imagerie satellitaire, la photographie est partout, fondement de notre culture visuelle.`,
    mainWorks: ["Daguerréotype", "Calotype", "Kodak", "Photographie numérique"],
    keyIdeas: ["Image fixe", "Mémoire", "Démocratisation", "Document"],
  },
  {
    id: "telegraphe",
    name: "Le télégraphe électrique",
    birthYear: 1837,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Morse_telegraph.jpg?width=220",
    nationality: "Américain / Britannique",
    movement: "XIXe siècle",
    family: "Ère industrielle",
    influences: ["pile-electrique"],
    summary: `Samuel Morse met au point le télégraphe électrique pratique en 1837, avec son célèbre code de points et traits. En 1844, il envoie le premier message public : "What hath God wrought" entre Washington et Baltimore.

Le télégraphe permet pour la première fois de communiquer instantanément à distance. Les fils couvrent les continents, les câbles sous-marins relient l'Europe à l'Amérique (1866). Le monde se connecte.

Le télégraphe transforme le journalisme (agences de presse), la finance (cours en temps réel), la guerre (coordination des armées). Il inaugure l'ère des télécommunications qui mène au téléphone, à la radio, à internet.

Le morse reste utilisé jusqu'à la fin du XXe siècle, notamment en mer. Le télégraphe est le premier réseau de communication globale, ancêtre de tous nos réseaux numériques.`,
    mainWorks: ["Télégraphe de Morse", "Code Morse", "Câble transatlantique", "Réseau mondial"],
    keyIdeas: ["Télécommunication", "Instantanéité", "Réseau", "Code"],
  },
  {
    id: "telephone",
    name: "Le téléphone",
    birthYear: 1876,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Actor_portraying_Alexander_Graham_Bell_in_an_AT%26T_promotional_film_%281926%29.jpg?width=220",
    nationality: "Américain",
    movement: "XIXe siècle",
    family: "Ère industrielle",
    influences: ["telegraphe"],
    summary: `Alexander Graham Bell brevète le téléphone en 1876, quelques heures avant Elisha Gray. "Mr. Watson, come here, I want to see you" : le premier appel téléphonique marque une révolution dans la communication humaine.

Le téléphone transmet la voix en temps réel sur des fils électriques. En quelques décennies, il connecte les foyers, les entreprises, les nations. Les centrales téléphoniques emploient des milliers d'opératrices.

L'automatisation (cadran rotatif), la mondialisation (câbles sous-marins, satellites), la numérisation transforment le réseau. Le téléphone mobile (années 1990) puis le smartphone (2007) le rendent ubiquitaire.

Aujourd'hui, le téléphone est devenu un ordinateur de poche. La voix n'est plus qu'une fonction parmi d'autres. Mais le principe de Bell - transmettre la parole à distance - reste fondamental.`,
    mainWorks: ["Téléphone de Bell", "Central téléphonique", "Téléphone mobile", "Smartphone"],
    keyIdeas: ["Communication vocale", "Réseau", "Mobilité", "Connexion"],
  },
  {
    id: "ampoule",
    name: "L'ampoule électrique",
    birthYear: 1879,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Thomas_Edison2.jpg?width=220",
    nationality: "Américain",
    movement: "Révolution industrielle",
    family: "Ère industrielle",
    influences: ["pile-electrique"],
    summary: `Thomas Edison présente l'ampoule à incandescence pratique en 1879. Après des milliers d'essais, il trouve un filament de carbone capable de briller des heures dans une ampoule sous vide. L'éclairage électrique devient viable.

Edison ne se contente pas de l'ampoule : il conçoit tout le système électrique (centrale, réseau, compteur). En 1882, la première centrale électrique éclaire un quartier de New York. L'électricité entre dans les foyers.

L'éclairage électrique transforme la vie quotidienne, les villes, le travail. Les usines tournent la nuit, les rues deviennent sûres, les loisirs nocturnes se développent. La "fée électricité" enchante les expositions universelles.

L'ampoule à incandescence cède aujourd'hui la place aux LED, cent fois plus efficaces. Mais le principe d'Edison - l'éclairage électrique pour tous - reste le fondement de notre civilisation urbaine.`,
    mainWorks: ["Ampoule à incandescence", "Centrale de Pearl Street", "Réseau électrique", "LED"],
    keyIdeas: ["Éclairage", "Électrification", "Nuit", "Vie urbaine"],
  },
  {
    id: "moteur-explosion",
    name: "Le moteur à explosion",
    birthYear: 1886,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/1885Benz.jpg?width=220",
    nationality: "Allemand",
    movement: "Révolution industrielle",
    family: "Moteurs & ondes",
    influences: ["machine-vapeur"],
    summary: `Karl Benz brevète la première automobile à moteur à explosion en 1886. Indépendamment, Gottlieb Daimler développe son propre moteur. Le principe : brûler un mélange air-essence dans un cylindre pour produire un mouvement.

Le moteur à explosion offre une puissance concentrée et mobile, impossible avec la vapeur. L'automobile se développe rapidement, démocratisée par Ford et sa chaîne de montage (Model T, 1908). L'avion suit (Wright, 1903).

Le moteur à explosion transforme le XXe siècle : transports individuels, banlieues, commerce mondial, tourisme de masse. Mais aussi pollution, dépendance au pétrole, réchauffement climatique.

Le moteur thermique cède progressivement la place au moteur électrique pour l'automobile. Mais l'aviation et le transport maritime restent dépendants des hydrocarbures. La transition énergétique est le défi du XXIe siècle.`,
    mainWorks: ["Benz Patent-Motorwagen", "Ford Model T", "Avion des frères Wright", "Moteur diesel"],
    keyIdeas: ["Mobilité", "Pétrole", "Automobile", "Aviation"],
  },
  {
    id: "radio",
    name: "La radio",
    birthYear: 1896,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Guglielmo_Marconi.jpg?width=220",
    nationality: "Italien",
    movement: "XXe siècle",
    family: "Moteurs & ondes",
    influences: ["telegraphe"],
    summary: `Guglielmo Marconi réalise la première transmission radio longue distance en 1896, développant les travaux de Hertz et Tesla. En 1901, il transmet un signal à travers l'Atlantique. La communication sans fil est née.

La radio libère la communication des câbles. Elle équipe les navires (naufrage du Titanic, 1912), les armées, puis les foyers. Les premières émissions régulières datent des années 1920. La radio devient un média de masse.

La radio transforme la politique (Roosevelt, de Gaulle), la culture (musique, feuilletons), l'information. Elle invente le direct, le reportage, la publicité moderne. Elle reste un média majeur malgré la télévision.

Les ondes radio portent aussi la télévision, les télécommunications mobiles, le Wi-Fi, le GPS. Le spectre radioélectrique est une ressource stratégique, gérée internationalement.`,
    mainWorks: ["Transmetteur de Marconi", "Premières radiodiffusions", "Transistor", "Radio numérique"],
    keyIdeas: ["Sans fil", "Ondes", "Média de masse", "Spectre"],
  },
  {
    id: "avion",
    name: "L'avion",
    birthYear: 1903,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/First_flight2.jpg?width=220",
    nationality: "Américain",
    movement: "XXe siècle",
    family: "Moteurs & ondes",
    influences: ["moteur-explosion"],
    summary: `Les frères Wright réalisent le premier vol motorisé contrôlé le 17 décembre 1903 à Kitty Hawk : 12 secondes, 36 mètres. En quelques années, l'aviation progresse spectaculairement (Blériot traverse la Manche, 1909).

La Première Guerre mondiale accélère le développement : avions de chasse, bombardiers. L'entre-deux-guerres voit les premiers vols transatlantiques (Lindbergh, 1927). L'aviation commerciale naît (Pan Am, Air France).

Le jet (de Havilland Comet, 1952, Boeing 707, 1958) démocratise le voyage aérien. Le monde se rétrécit. Le tourisme de masse, la mondialisation économique reposent sur l'avion. Concorde incarne le rêve supersonique.

L'aviation représente 2-3% des émissions de CO2 mondiales. La décarbonation du secteur (biocarburants, hydrogène, électrique) est un défi majeur. Mais l'avion reste irremplaçable pour les longues distances.`,
    mainWorks: ["Flyer des Wright", "Spirit of St. Louis", "Boeing 747", "Airbus A380"],
    keyIdeas: ["Vol", "Mondialisation", "Tourisme", "Transport rapide"],
  },
  {
    id: "penicilline",
    name: "La pénicilline",
    birthYear: 1928,
    nationality: "Britannique",
    movement: "Médecine moderne",
    family: "Médecine & vivant",
    influences: ["microscope"],
    summary: `Alexander Fleming découvre la pénicilline en 1928 : une moisissure (Penicillium) tue les bactéries sur une boîte de Petri oubliée. Florey et Chain la purifient et la produisent industriellement pendant la Seconde Guerre mondiale.

La pénicilline inaugure l'ère des antibiotiques. Des maladies autrefois mortelles (pneumonie, septicémie, syphilis) deviennent curables. L'espérance de vie bondit. D'autres antibiotiques suivent (streptomycine, tétracycline).

Les antibiotiques transforment la médecine : chirurgie complexe, transplantations, chimiothérapie deviennent possibles. Ils sauvent des centaines de millions de vies au XXe siècle.

L'abus d'antibiotiques engendre la résistance bactérienne, menace majeure du XXIe siècle. Des "super-bactéries" résistantes émergent. La recherche de nouveaux antibiotiques est urgente.`,
    mainWorks: ["Pénicilline G", "Streptomycine", "Antibiotiques à large spectre", "Antibiotiques de synthèse"],
    keyIdeas: ["Antibiotique", "Bactéries", "Résistance", "Médecine moderne"],
  },
  {
    id: "ordinateur",
    name: "L'ordinateur",
    birthYear: 1945,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/ENIAC-changing_a_tube.jpg?width=220",
    nationality: "Américain / Britannique",
    movement: "Révolution numérique",
    family: "Révolution numérique",
    summary: `L'ENIAC (1945), premier ordinateur électronique programmable, occupe une pièce entière et consomme 150 kW. Il peut faire en quelques heures des calculs qui prendraient des années à la main. L'ère informatique commence.

Les pionniers (Turing, von Neumann, Shannon) posent les bases théoriques. Le transistor (1947) puis le circuit intégré (1958) permettent la miniaturisation. L'ordinateur passe de l'armée et la recherche aux entreprises (IBM) puis aux foyers (Apple, 1977).

L'ordinateur personnel, internet (1990s), le smartphone (2007) transforment tous les aspects de la vie : travail, communication, loisirs, commerce, science. La puissance de calcul double tous les deux ans (loi de Moore).

L'intelligence artificielle, héritière de ces machines, promet une nouvelle révolution. L'ordinateur n'est plus seulement un outil de calcul mais un partenaire cognitif.`,
    mainWorks: ["ENIAC", "IBM PC", "Macintosh", "Smartphone"],
    keyIdeas: ["Calcul", "Programmation", "Miniaturisation", "Ubiquité"],
  },
  {
    id: "transistor",
    name: "Le transistor",
    birthYear: 1947,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Replica-of-first-transistor.jpg?width=220",
    nationality: "Américain",
    movement: "Révolution numérique",
    family: "Révolution numérique",
    influences: ["telephone", "radio"],
    summary: `John Bardeen, Walter Brattain et William Shockley inventent le transistor aux Bell Labs en 1947. Ce petit composant semi-conducteur remplace le tube à vide, fragile et énergivore. C'est la brique de base de toute l'électronique moderne.

Le transistor permet la miniaturisation de l'électronique. Les radios portables (1954), les premiers ordinateurs à transistors, puis les circuits intégrés (1958) contenant des milliers puis des milliards de transistors sur une puce.

Aujourd'hui, un processeur de smartphone contient 15 milliards de transistors. La loi de Moore (doublement de la densité tous les deux ans) a tenu pendant soixante ans, permettant la révolution numérique.

Le transistor est peut-être l'invention la plus importante du XXe siècle. Sans lui, pas d'ordinateurs, de smartphones, d'internet, de voitures modernes, d'appareils médicaux. Notre civilisation repose sur ce composant minuscule.`,
    mainWorks: ["Premier transistor (1947)", "Transistor au silicium", "Circuit intégré", "Microprocesseur"],
    keyIdeas: ["Semi-conducteur", "Miniaturisation", "Loi de Moore", "Électronique"],
  },
  {
    id: "internet",
    name: "Internet",
    birthYear: 1969,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/First-arpanet-imp-log.jpg?width=220",
    nationality: "Américain",
    movement: "Révolution numérique",
    family: "Révolution numérique",
    influences: ["ordinateur", "transistor"],
    summary: `ARPANET, ancêtre d'internet, transmet son premier message le 29 octobre 1969 entre UCLA et Stanford. Le réseau militaire évolue vers un réseau académique puis commercial. Le World Wide Web (Tim Berners-Lee, 1989) le rend accessible à tous.

Internet connecte les ordinateurs du monde entier via le protocole TCP/IP. Le web ajoute une couche de documents liés (hypertexte). Les navigateurs (Mosaic, 1993) demandent juste un clic. Le public découvre internet dans les années 1990.

Internet transforme tout : commerce (Amazon), information (Google), sociabilité (Facebook), culture (YouTube), politique (révolutions arabes). L'accès à l'information devient quasi-universel.

Les défis d'internet au XXIe siècle : vie privée, désinformation, cybersécurité, fracture numérique, impact environnemental des data centers. Mais le réseau reste l'infrastructure fondamentale de notre époque.`,
    mainWorks: ["ARPANET", "TCP/IP", "World Wide Web", "Navigateurs web"],
    keyIdeas: ["Réseau mondial", "Information", "Communication", "Numérique"],
  },
  {
    id: "gps",
    name: "Le GPS",
    birthYear: 1978,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/GPS_Satellite_NASA_art-iif.jpg?width=220",
    nationality: "Américain",
    movement: "Révolution numérique",
    family: "Révolution numérique",
    influences: ["radio", "ordinateur"],
    summary: `Le GPS (Global Positioning System) débute en 1978 avec le lancement des premiers satellites par l'armée américaine. Ouvert aux civils en 1983, il permet de connaître sa position n'importe où sur Terre avec une précision métrique.

Le système repose sur 24 satellites émettant des signaux horaires. Un récepteur calcule sa distance à plusieurs satellites et en déduit sa position par triangulation. Des systèmes concurrents existent : Galileo (Europe), GLONASS (Russie), BeiDou (Chine).

Le GPS transforme la navigation (automobile, maritime, aérienne), la cartographie, la logistique, l'agriculture de précision. Il est intégré à tous les smartphones, permettant la géolocalisation des services.

Le GPS illustre les applications civiles des technologies militaires. Il est devenu une infrastructure critique : transports, finance (horodatage), réseaux électriques dépendent de sa précision.`,
    mainWorks: ["Constellation GPS", "Récepteurs civils", "Galileo", "Applications smartphone"],
    keyIdeas: ["Géolocalisation", "Satellites", "Navigation", "Précision"],
  },
  {
    id: "crispr",
    name: "CRISPR-Cas9",
    birthYear: 2012,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/CRISPR-Cas9_Editing_of_the_Genome_%2826453307604%29.jpg/330px-CRISPR-Cas9_Editing_of_the_Genome_%2826453307604%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain / Français",
    movement: "Biotechnologies",
    family: "Médecine & vivant",
    summary: `CRISPR-Cas9, découvert par Jennifer Doudna et Emmanuelle Charpentier en 2012, est un outil d'édition génétique révolutionnaire. Ces "ciseaux moléculaires" permettent de modifier l'ADN avec une précision, une simplicité et un coût sans précédent.

CRISPR vient des bactéries, qui l'utilisent pour se défendre contre les virus. Les chercheuses ont montré qu'on pouvait le programmer pour couper n'importe quelle séquence d'ADN. Le gène cible peut être inactivé, réparé ou remplacé.

Les applications sont immenses : thérapie génique (guérir des maladies héréditaires), agriculture (plantes résistantes), recherche (comprendre les gènes). Les premiers essais cliniques sont prometteurs.

CRISPR soulève aussi des questions éthiques majeures : modification d'embryons humains (bébés CRISPR chinois, 2018), enhancement génétique, bioterrorisme. La régulation peine à suivre le rythme de la science.`,
    mainWorks: ["Article Doudna-Charpentier (2012)", "Thérapies géniques", "Agriculture CRISPR", "Diagnostics"],
    keyIdeas: ["Édition génétique", "ADN", "Thérapie génique", "Éthique"],
  },
];
