export interface MythologyItem {
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

export const mythologies: MythologyItem[] = [
  {
    id: "mythologie-sumerienne",
    name: "Mythologie sumérienne",
    birthYear: -3500,
    deathYear: -2000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Hero_lion_Dur-Sharrukin_Louvre_AO19862.jpg/400px-Hero_lion_Dur-Sharrukin_Louvre_AO19862.jpg",
    nationality: "Mésopotamien",
    movement: "Antiquité",
    family: "Méditerranée antique",
    summary: `La mythologie sumérienne est la plus ancienne mythologie écrite de l'humanité. Née en Mésopotamie au IVe millénaire av. J.-C., elle est gravée sur des tablettes d'argile en écriture cunéiforme, offrant les premiers récits structurés sur l'origine du monde et des dieux.

Le panthéon sumérien est organisé autour de grandes forces cosmiques : An (le ciel), Enlil (l'air et l'autorité), Enki (l'eau et la sagesse), Inanna (l'amour et la guerre). Ces dieux sont capricieux, jaloux et violents — à l'image des forces naturelles qu'ils incarnent dans un pays soumis aux crues imprévisibles du Tigre et de l'Euphrate.

L'Épopée de Gilgamesh, composée vers 2100 av. J.-C., est le premier grand texte littéraire de l'humanité. Gilgamesh, roi d'Uruk, mi-homme mi-dieu, cherche l'immortalité après la mort de son ami Enkidu. Sa quête échoue, mais il découvre que la grandeur humaine réside dans les œuvres qui survivent à la mort.

Le récit sumérien du Déluge — où le dieu Enki prévient Ziusudra de la catastrophe — préfigure directement le Déluge biblique de Noé. La descente d'Inanna aux enfers inspire le mythe de Perséphone. La Mésopotamie est la matrice de l'imaginaire mythologique occidental.`,
    mainWorks: [
      "Épopée de Gilgamesh",
      "Enuma Elish (création)",
      "Descente d'Inanna aux enfers",
      "Récit du Déluge (inspire la Bible)",
    ],
    keyIdeas: ["Plus anciens écrits", "Gilgamesh", "Déluge originel", "Matrice mythologique"],
  },
  {
    id: "mythologie-egyptienne",
    name: "Mythologie égyptienne",
    birthYear: -3000,
    deathYear: -30,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/BD_Hunefer.jpg/500px-BD_Hunefer.jpg",
    nationality: "Égyptien",
    movement: "Antiquité",
    family: "Méditerranée antique",
    summary: `La mythologie égyptienne se déploie pendant trois millénaires autour du Nil, du cycle solaire et de l'obsession de la vie après la mort. Elle produit l'un des systèmes religieux les plus élaborés et les plus durables de l'Antiquité.

Le dieu-soleil Râ traverse le ciel chaque jour dans sa barque et combat chaque nuit le serpent Apophis dans les ténèbres souterraines. Ce cycle quotidien de mort et de renaissance structure toute la pensée égyptienne. Le pharaon, fils de Râ, est le garant de Maât — l'ordre cosmique — sur terre.

Le mythe central est celui d'Osiris : assassiné par son frère Seth, démembré puis reconstitué par son épouse Isis, il devient le roi du monde des morts. Leur fils Horus venge son père et monte sur le trône. Ce récit de mort, résurrection et succession fonde la légitimité royale.

Le Livre des Morts accompagne le défunt dans l'au-delà. Son cœur est pesé contre la plume de Maât : s'il est plus léger, le mort accède à l'éternité ; sinon, il est dévoré par la créature Ammout. La momification, les pyramides et les tombeaux élaborés visent à assurer cette survie éternelle.`,
    mainWorks: [
      "Mythe d'Osiris (mort et résurrection)",
      "Râ - dieu soleil créateur",
      "Livre des Morts",
      "Jugement des âmes par Osiris",
    ],
    keyIdeas: ["Vie après la mort", "Cycle solaire", "Maât", "Momification"],
  },
  {
    id: "mythologie-grecque",
    name: "Mythologie grecque",
    birthYear: -1200,
    deathYear: -300,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Jupiter_Smyrna_Louvre_Ma13.jpg/400px-Jupiter_Smyrna_Louvre_Ma13.jpg",
    nationality: "Grec",
    movement: "Antiquité",
    family: "Méditerranée antique",
    summary: `La mythologie grecque est la plus influente de l'histoire occidentale. Ses dieux, ses héros et ses récits imprègnent l'art, la littérature, la philosophie et même le langage courant depuis presque trois millénaires.

Les dieux de l'Olympe — Zeus, Athéna, Apollon, Aphrodite, Arès, Hermès — sont extraordinairement humains. Ils sont jaloux, amoureux, vindicatifs, vaniteux. Zeus trompe constamment Héra, Aphrodite séduit Arès, Athéna et Poséidon se disputent Athènes. Cette proximité entre dieux et hommes distingue la Grèce de la plupart des autres mythologies.

Les héros — Hercule, Achille, Ulysse, Persée, Thésée — incarnent les vertus et les limites humaines. L'Iliade raconte la colère d'Achille devant Troie, l'Odyssée le retour d'Ulysse à Ithaque. Les tragédies d'Eschyle, Sophocle et Euripide explorent le destin, la faute et la justice divine à travers Œdipe, Antigone, Médée.

La Théogonie d'Hésiode raconte la genèse du monde : du Chaos naissent Gaïa et Ouranos, les Titans, puis les Olympiens qui renversent leurs pères. Cette idée d'un ordre cosmique né de la violence et de la succession des générations influence toute la pensée occidentale sur le pouvoir et la légitimité.`,
    mainWorks: [
      "Théogonie d'Hésiode",
      "Iliade et Odyssée d'Homère",
      "Douze travaux d'Hercule",
      "Tragédies grecques (Œdipe, Antigone)",
    ],
    keyIdeas: ["Dieux humanisés", "Héros épiques", "Tragédie", "Influence universelle"],
  },
  {
    id: "mythologie-romaine",
    name: "Mythologie romaine",
    birthYear: -753,
    deathYear: 476,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/She-wolf_suckles_Romulus_and_Remus.jpg/500px-She-wolf_suckles_Romulus_and_Remus.jpg",
    nationality: "Romain",
    movement: "Antiquité",
    family: "Méditerranée antique",
    summary: `La mythologie romaine emprunte largement au panthéon grec — Jupiter est Zeus, Mars est Arès, Vénus est Aphrodite — mais elle y ajoute une dimension civique et politique proprement romaine. La religion n'est pas affaire de foi personnelle mais de dévotion à l'État.

Les mythes fondateurs de Rome sont essentiels à l'identité romaine. Énée, prince troyen fils de Vénus, fuit Troie en flammes et fonde la lignée qui mènera à Rome. Romulus et Rémus, jumeaux allaités par une louve, fondent la ville en 753 av. J.-C. Romulus tue Rémus : la grandeur de Rome naît dans la violence fraternelle.

L'Énéide de Virgile, écrite sous Auguste, est le grand texte fondateur. Elle fait d'Énée l'ancêtre mythique de la gens Julia, légitimant ainsi le pouvoir d'Auguste. Les Métamorphoses d'Ovide compilent et transforment l'ensemble des mythes gréco-romains en un chef-d'œuvre poétique qui sera la source principale de la mythologie antique pour le Moyen Âge et la Renaissance.

Le culte impérial divinise les empereurs défunts, puis les empereurs vivants. Les vestales gardent le feu sacré de Rome. Cette religion civique est un ciment de l'Empire jusqu'à la victoire du christianisme au IVe siècle.`,
    mainWorks: [
      "Énéide de Virgile",
      "Métamorphoses d'Ovide",
      "Romulus et Rémus - fondation de Rome",
      "Culte impérial",
    ],
    keyIdeas: ["Religion civique", "Mythes fondateurs", "Culte impérial", "Héritage grec transformé"],
  },
  {
    id: "mythologie-nordique",
    name: "Mythologie nordique",
    birthYear: -500,
    deathYear: 1100,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Georg_von_Rosen_-_Oden_som_vandringsman%2C_1886_%28Odin%2C_the_Wanderer%29.jpg/400px-Georg_von_Rosen_-_Oden_som_vandringsman%2C_1886_%28Odin%2C_the_Wanderer%29.jpg",
    nationality: "Scandinave",
    movement: "Moyen Âge",
    family: "Europe du Nord",
    summary: `La mythologie nordique, celle des Vikings et des peuples germaniques, est une cosmogonie tragique où les dieux eux-mêmes sont mortels. Contrairement aux Olympiens grecs, les dieux d'Asgard savent qu'ils mourront au Ragnarök — et ils combattent quand même.

Odin, le père de tout, a sacrifié un œil pour boire à la source de la sagesse et s'est pendu neuf jours à l'arbre-monde Yggdrasil pour découvrir les runes. Thor, son fils, dieu du tonnerre, protège les hommes contre les géants avec son marteau Mjöllnir. Loki, le dieu trickster, mi-ami mi-ennemi des dieux, sème le chaos.

L'univers s'organise autour d'Yggdrasil, le frêne cosmique qui relie neuf mondes : Asgard (les dieux), Midgard (les humains), Jotunheim (les géants), Hel (les morts). Les Valkyries emmènent les guerriers tombés au combat au Valhalla, où ils festoient en attendant le Ragnarök.

Le Ragnarök, la fin du monde, voit les forces du chaos — Loki, le loup Fenrir, le serpent Jörmungandr — affronter les dieux dans une bataille finale. Thor tue le serpent mais meurt de son venin, Odin est dévoré par Fenrir. Mais un monde nouveau renaît des cendres. Redécouvert au XIXe siècle, ce corpus inspire Wagner, Tolkien, Marvel et toute la fantasy contemporaine.`,
    mainWorks: [
      "Edda poétique et Edda en prose",
      "Odin - dieu suprême, sacrifice",
      "Thor - dieu du tonnerre",
      "Ragnarök - fin et renouveau du monde",
    ],
    keyIdeas: ["Dieux mortels", "Ragnarök", "Yggdrasil", "Héroïsme tragique"],
  },
  {
    id: "mythologie-celtique",
    name: "Mythologie celtique",
    birthYear: -500,
    deathYear: 500,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Cernunnos_on_the_Gundestrup_Cauldron.jpg/500px-Cernunnos_on_the_Gundestrup_Cauldron.jpg",
    nationality: "Celte",
    movement: "Antiquité / Moyen Âge",
    family: "Europe du Nord",
    summary: `La mythologie celtique est la grande mythologie perdue de l'Europe occidentale. Les druides, qui en étaient les gardiens, interdisaient de la mettre par écrit. Ce que nous en connaissons vient des moines irlandais qui transcrivirent les récits au Moyen Âge, et des auteurs classiques grecs et romains.

Le monde celtique est peuplé de dieux, de fées et de créatures surnaturelles. Les Tuatha Dé Danann, race divine d'Irlande, possèdent des objets magiques — la lance de Lugh, le chaudron du Dagda. Le Sidh, monde des fées, coexiste avec le monde humain, accessible par des collines creuses ou lors de la nuit de Samhain (ancêtre d'Halloween).

Le cycle d'Ulster raconte les exploits de Cuchulainn, guerrier semi-divin d'une bravoure furieuse, qui défend seul l'Ulster contre une armée. Sa rage de combat le transforme en monstre, et il meurt jeune, attaché à un rocher pour mourir debout face à ses ennemis.

Mais c'est le cycle arthurien qui assure la survie mondiale de l'imaginaire celtique. Le roi Arthur, les chevaliers de la Table ronde, la quête du Graal, Merlin l'enchanteur, Lancelot et Guenièvre — ce corpus, repris par Chrétien de Troyes puis par toute l'Europe, reste l'un des plus puissants de l'imaginaire occidental.`,
    mainWorks: [
      "Cycle d'Ulster (Cuchulainn)",
      "Cycle arthurien (roi Arthur, Graal)",
      "Tuatha Dé Danann - dieux irlandais",
      "Merlin et les fées",
    ],
    keyIdeas: ["Tradition orale", "Sidh", "Cuchulainn", "Cycle arthurien"],
  },
  {
    id: "mythologie-hindoue",
    name: "Mythologie hindoue",
    birthYear: -1500,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Kurukshetra.jpg/330px-Kurukshetra.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Indien",
    movement: "Religions orientales",
    family: "Asie",
    summary: `La mythologie hindoue est la seule grande mythologie antique à être encore pleinement vivante. Plus d'un milliard de personnes prient aujourd'hui les mêmes dieux que ceux des Vedas composés il y a 3 500 ans. Ses récits, d'une richesse inépuisable, continuent d'être chantés, dansés et représentés.

La Trimurti — Brahma le créateur, Vishnou le préservateur, Shiva le destructeur — incarne les trois fonctions cosmiques. Vishnou descend sur terre sous forme d'avatars pour rétablir l'ordre : Rama, le prince idéal, et Krishna, le dieu espiègle et philosophe, sont les plus vénérés. Shiva, ascète et danseur, crée et détruit l'univers dans sa danse cosmique, le Tandava.

Le Mahabharata, avec ses 200 000 vers, est le plus long poème épique de l'humanité — sept fois l'Iliade et l'Odyssée réunies. Il contient la Bhagavad-Gita, dialogue entre Krishna et le guerrier Arjuna sur le champ de bataille, texte fondamental de la philosophie hindoue sur le devoir, l'action et le détachement.

Le Ramayana raconte l'exil du prince Rama, l'enlèvement de son épouse Sita par le démon Ravana, et sa reconquête avec l'aide du dieu-singe Hanuman. Ces deux épopées structurent l'imaginaire, la morale et la vie quotidienne de l'Inde et de l'Asie du Sud-Est depuis des millénaires.`,
    mainWorks: [
      "Mahabharata (Bhagavad-Gita)",
      "Ramayana",
      "Avatars de Vishnou (Krishna, Rama)",
      "Shiva - destruction et création",
    ],
    keyIdeas: ["Mythologie vivante", "Trimurti", "Épopées grandioses", "Avatars"],
  },
  {
    id: "mythologie-chinoise",
    name: "Mythologie chinoise",
    birthYear: -2000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Anonymous-Fuxi_and_N%C3%BCwa3.jpg/330px-Anonymous-Fuxi_and_N%C3%BCwa3.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Chinois",
    movement: "Religions orientales",
    family: "Asie",
    summary: `La mythologie chinoise est un tissu complexe où se mêlent récits cosmogoniques anciens, légendes historiques, taoïsme, bouddhisme et confucianisme. Contrairement aux mythologies gréco-romaines, elle n'a jamais été systématisée en un corpus unifié, ce qui lui donne une richesse foisonnante.

Pangu, le géant primordial, naît dans l'œuf cosmique et sépare le ciel de la terre. À sa mort, son corps devient le monde : ses yeux le soleil et la lune, son sang les rivières, ses cheveux les forêts. Nuwa, déesse à queue de serpent, façonne les humains dans la glaise et répare le ciel brisé.

Les dragons chinois, créatures bienveillantes associées à l'eau, à la pluie et au pouvoir impérial, sont radicalement différents des dragons occidentaux. L'Empereur de Jade préside un panthéon céleste organisé comme une bureaucratie impériale, avec des ministres divins, des rapports et des promotions.

Le Voyage vers l'Ouest, roman du XVIe siècle, raconte le périple du moine Xuanzang vers l'Inde pour rapporter des sutras bouddhistes, accompagné du Roi Singe Sun Wukong, personnage irrévérent et tout-puissant. Ce récit, mêlant aventure, satire et philosophie, est l'œuvre la plus populaire de la littérature chinoise et continue d'irriguer la culture populaire asiatique.`,
    mainWorks: [
      "Pangu et la création",
      "Nuwa crée l'humanité",
      "Dragon chinois - symbole impérial",
      "Voyage vers l'Ouest (Roi Singe)",
    ],
    keyIdeas: ["Syncrétisme religieux", "Dragons bienveillants", "Bureaucratie céleste", "Roi Singe"],
  },
  {
    id: "mythologie-japonaise",
    name: "Mythologie japonaise",
    birthYear: -700,
    nationality: "Japonais",
    movement: "Religions orientales",
    family: "Asie",
    summary: `La mythologie japonaise, fondement du shintoïsme, est intimement liée à la nature et au paysage de l'archipel. Les kami — esprits divins — habitent les montagnes, les rivières, les arbres et les rochers. Chaque élément naturel est potentiellement sacré.

Le Kojiki (712) et le Nihon Shoki (720) racontent la création du Japon. Les dieux Izanagi et Izanami enfantent les îles japonaises et les divinités. De la purification d'Izanagi naissent trois kami suprêmes : Amaterasu (déesse du soleil), Tsukuyomi (dieu de la lune) et Susanoo (dieu des tempêtes).

Amaterasu, offensée par la violence de son frère Susanoo, se cache dans une grotte, plongeant le monde dans les ténèbres. Les autres dieux la font sortir par la ruse et la danse. Ce mythe fondateur explique les éclipses et fonde la lignée impériale : l'empereur du Japon descend directement d'Amaterasu, légitimant ainsi la monarchie la plus ancienne du monde.

Le shintoïsme coexiste harmonieusement avec le bouddhisme depuis le VIe siècle, dans un syncrétisme original. Les temples shinto et les temples bouddhistes voisinent, et de nombreux Japonais pratiquent les deux. Cette cohabitation, unique au monde, imprègne profondément la culture japonaise contemporaine, de la cérémonie du thé aux festivals traditionnels.`,
    mainWorks: [
      "Kojiki et Nihon Shoki",
      "Amaterasu - déesse du soleil",
      "Création des îles du Japon",
      "Kami - esprits de la nature",
    ],
    keyIdeas: ["Kami", "Shinto", "Lien à la nature", "Syncrétisme bouddhiste"],
  },
  {
    id: "mythologie-maya",
    name: "Mythologie maya",
    birthYear: -2000,
    deathYear: 1500,
    nationality: "Mésoaméricain",
    movement: "Amériques",
    family: "Amériques",
    summary: `La mythologie maya est l'une des plus complexes et des plus sophistiquées des Amériques précolombiennes. Développée par une civilisation qui invente l'écriture, l'astronomie mathématique et le concept du zéro, elle est aussi intellectuellement ambitieuse que les mythologies du Vieux Monde.

Le Popol Vuh, « livre du conseil » des Mayas quichés du Guatemala, est le grand texte fondateur. Il raconte la création du monde par les dieux Tepeu et Gucumatz, l'échec des premiers humains (faits de boue puis de bois), et la création réussie des hommes de maïs — le maïs étant la substance sacrée, le sang de la terre.

Les Jumeaux Héros, Hunahpu et Xbalanque, descendent à Xibalba, le monde souterrain des morts, pour affronter les seigneurs de la mort dans des épreuves rituelles. Ils triomphent par la ruse et deviennent le soleil et la lune. Ce récit initiatique est aussi un mythe agraire : la descente aux enfers symbolise la semence enterrée qui renaît en plante.

Le calendrier sacré tzolk'in de 260 jours structure la vie rituelle. Les sacrifices humains — offrandes de sang aux dieux qui ont donné le leur pour créer l'humanité — entretiennent l'équilibre cosmique. L'astronomie maya, d'une précision remarquable, lie l'observation céleste aux cycles mythiques.`,
    mainWorks: [
      "Popol Vuh - livre sacré",
      "Jumeaux héros (Hunahpu et Xbalanque)",
      "Xibalba - monde souterrain",
      "Calendrier sacré",
    ],
    keyIdeas: ["Popol Vuh", "Hommes de maïs", "Xibalba", "Calendrier sacré"],
  },
  {
    id: "mythologie-azteque",
    name: "Mythologie aztèque",
    birthYear: 1300,
    deathYear: 1521,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/She-wolf_suckles_Romulus_and_Remus.jpg/500px-She-wolf_suckles_Romulus_and_Remus.jpg",
    nationality: "Mésoaméricain",
    movement: "Amériques",
    family: "Amériques",
    summary: `La mythologie aztèque est dominée par une vision cosmique dramatique : le monde a déjà été créé et détruit quatre fois, et le cinquième soleil — notre ère — est condamné à périr à son tour. Les dieux se sont sacrifiés pour créer ce soleil ; les humains doivent les nourrir de sang pour retarder sa fin.

Quetzalcoatl, le serpent à plumes, est le dieu de la sagesse, du vent et de l'étoile du matin. Figure civilisatrice, il a donné le maïs et le calendrier aux hommes. Son départ vers l'est et sa promesse de retour auraient facilité la conquête espagnole, Cortés étant initialement pris pour le dieu revenu.

Huitzilopochtli, dieu du soleil et de la guerre, est la divinité tutélaire des Aztèques. Né d'une conception miraculeuse, il tue sa sœur et ses frères à sa naissance — allégorie du soleil qui chasse la lune et les étoiles chaque matin. Les sacrifices humains, pratiqués à grande échelle sur les pyramides de Tenochtitlan, visent à lui fournir le sang nécessaire à sa course quotidienne.

La Pierre du Soleil, disque de basalte de 3,6 mètres, résume la cosmologie aztèque : les quatre soleils passés, le cinquième soleil actuel, les cycles de destruction et de création. Ce monument est devenu l'un des symboles les plus reconnaissables de la civilisation mésoaméricaine.`,
    mainWorks: [
      "Quetzalcoatl - serpent à plumes",
      "Huitzilopochtli - dieu du soleil et de la guerre",
      "Mythe des cinq soleils",
      "Sacrifices humains",
    ],
    keyIdeas: ["Cinq soleils", "Sacrifice cosmique", "Quetzalcoatl", "Pierre du Soleil"],
  },
  {
    id: "mythologie-africaine",
    name: "Mythologies africaines",
    birthYear: -3000,
    nationality: "Africain",
    movement: "Traditions orales",
    family: "Océanie & Afrique",
    summary: `Les mythologies africaines forment un ensemble d'une diversité immense, reflétant les centaines de peuples et de langues du continent. Transmises oralement par les griots, les anciens et les devins, elles partagent néanmoins des thèmes communs : un dieu créateur lointain, des esprits intermédiaires actifs, et un lien profond entre vivants et ancêtres.

Les Orishas de la tradition yoruba (Nigeria) sont parmi les divinités africaines les plus connues. Ogun, dieu du fer et de la guerre, Shango, dieu du tonnerre, Yemoja, déesse de la mer, forment un panthéon vivant. La traite transatlantique exporte ces divinités aux Amériques, où elles survivent et se transforment dans le vaudou haïtien, le candomblé brésilien et la santeria cubaine.

Anansi l'araignée, figure trickster d'Afrique de l'Ouest, est le maître de la ruse et des histoires. Ses contes, qui enseignent la sagesse par l'humour et la subversion, voyagent avec les esclaves aux Caraïbes et en Amérique du Nord, influençant les traditions narratives afro-américaines.

Les mythes de création africains sont d'une variété remarquable : le dieu Bumba des Bakuba vomit le monde, Amma des Dogons crée les étoiles en lançant des boulettes d'argile, le dieu suprême des Fangs descend sur terre par un fil d'araignée. Cette richesse, longtemps sous-estimée par l'Occident, fait l'objet d'un renouveau d'intérêt depuis la décolonisation.`,
    mainWorks: [
      "Orishas yorubas (Nigeria)",
      "Anansi l'araignée (Afrique de l'Ouest)",
      "Mythes de création variés",
      "Influence sur le vaudou et la santeria",
    ],
    keyIdeas: ["Diversité immense", "Tradition orale", "Orishas", "Diaspora religieuse"],
  },
  {
    id: "mythologie-polynesienne",
    name: "Mythologie polynésienne",
    birthYear: -1000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Migraciones_austronesias.png/330px-Migraciones_austronesias.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Polynésien",
    movement: "Océanie",
    family: "Océanie & Afrique",
    summary: `La mythologie polynésienne est celle des peuples navigateurs qui ont colonisé le plus vaste océan du monde. De Hawaii à la Nouvelle-Zélande, de Tahiti à l'île de Pâques, des récits remarquablement cohérents témoignent d'une origine commune et d'un rapport intense avec la mer, les volcans et les étoiles.

Maui, le demi-dieu trickster, est la figure centrale de toute la Polynésie. Selon les traditions, il pêche les îles du fond de l'océan avec un hameçon magique, vole le feu aux dieux pour le donner aux hommes, et ralentit le soleil pour allonger les jours. Malicieux et courageux, il meurt en tentant de vaincre la déesse de la mort.

Pele, déesse hawaïenne des volcans, habite le Kilauea. Passionnée et redoutable, elle incarne la force créatrice et destructrice du feu volcanique. Tangaroa (ou Tagaloa) est le dieu de la mer, omniprésent pour ces peuples de navigateurs.

Le mana, force spirituelle impersonnelle, imprègne les êtres et les objets. Le tapu (tabou) — mot que les Européens empruntent au polynésien — désigne les interdits sacrés qui protègent le mana. Cette cosmologie est inséparable de l'exploit maritime polynésien : la navigation hauturière sans instruments, guidée par les étoiles et les courants, est elle-même un acte sacré.`,
    mainWorks: [
      "Maui - demi-dieu trickster",
      "Pele - déesse des volcans (Hawaii)",
      "Tangaroa - dieu de la mer",
      "Mana et tapu",
    ],
    keyIdeas: ["Navigateurs du Pacifique", "Maui", "Mana et tapu", "Lien à l'océan"],
  },
  {
    id: "mythologie-aborigene",
    name: "Mythologie aborigène",
    birthYear: -50000,
    nationality: "Australien",
    movement: "Traditions anciennes",
    family: "Océanie & Afrique",
    summary: `La mythologie aborigène d'Australie est la plus ancienne tradition spirituelle continue de l'humanité, remontant à au moins 50 000 ans. Le Temps du Rêve (Dreamtime) n'est pas un passé révolu mais une dimension permanente qui coexiste avec le présent.

Dans le Temps du Rêve, les Ancêtres — êtres mi-humains, mi-animaux — parcourent la terre et la créent en la nommant. Le Serpent Arc-en-ciel sculpte les rivières et les vallées dans ses déplacements. Chaque montagne, chaque point d'eau, chaque rocher est la trace visible d'un acte créateur ancestral. Le paysage entier est un texte sacré.

Les Aboriginal songlines (« chemins de chants ») sont des itinéraires mythiques et géographiques qui traversent le continent. En chantant les exploits des Ancêtres dans le bon ordre, les Aborigènes peuvent naviguer sur des milliers de kilomètres à travers le désert. Le chant crée littéralement le territoire.

Les peintures rupestres, certaines vieilles de 40 000 ans, les cérémonies, les danses et les récits transmettent ce savoir sacré de génération en génération. La colonisation européenne a dévasté les cultures aborigènes, mais le Temps du Rêve persiste. Il est aujourd'hui reconnu comme l'une des cosmogonies les plus profondes et les plus originales de l'humanité.`,
    mainWorks: [
      "Temps du Rêve (Dreamtime)",
      "Serpent Arc-en-ciel",
      "Chants et peintures sacrées",
      "Connexion à la terre (pays)",
    ],
    keyIdeas: ["Temps du Rêve", "Songlines", "Serpent Arc-en-ciel", "Plus ancienne tradition"],
  },
  {
    id: "mythologie-comparee",
    name: "Mythologie comparée",
    birthYear: 1850,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Albrecht_D%C3%BCrer_042.jpg/330px-Albrecht_D%C3%BCrer_042.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "International",
    movement: "Étude moderne",
    family: "Regard moderne",
    summary: `La mythologie comparée naît au XIXe siècle de la découverte que les mythes de peuples très différents partagent des structures et des thèmes étonnamment similaires. Déluges universels, héros descendant aux enfers, dieux mourant et renaissant : ces motifs récurrents posent la question d'une grammaire universelle de l'imaginaire humain.

Max Müller, philologue d'Oxford, propose que les mythes sont des métaphores solaires dégradées. James Frazer, dans Le Rameau d'or (1890), compile des milliers de rites et de mythes pour montrer les liens entre magie, religion et science. Son œuvre monumentale, malgré ses faiblesses méthodologiques, ouvre le champ.

Joseph Campbell synthétise ces travaux dans Le Héros aux mille visages (1949). Il identifie le « monomythe » — un schéma narratif universel où le héros reçoit un appel, traverse des épreuves, obtient une révélation et revient transformé. George Lucas s'en inspire directement pour Star Wars. Ce modèle, s'il est critiqué pour son universalisme excessif, reste une grille de lecture populaire.

Claude Lévi-Strauss, avec l'analyse structurale des mythes, et Carl Gustav Jung, avec sa théorie des archétypes (l'inconscient collectif produirait des images universelles), complètent l'approche. La mythologie comparée montre que les mythes ne sont pas des superstitions primitives mais des structures profondes de la pensée humaine.`,
    mainWorks: [
      "Le Rameau d'or (Frazer, 1890)",
      "Le Héros aux mille visages (Campbell, 1949)",
      "Archétypes (Jung)",
      "Structuralisme (Lévi-Strauss)",
    ],
    keyIdeas: ["Monomythe", "Archétypes", "Motifs universels", "Structuralisme"],
  },
];
