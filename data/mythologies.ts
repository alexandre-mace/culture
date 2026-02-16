export interface MythologyItem {
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

export const mythologies: MythologyItem[] = [
  {
    id: "mythologie-sumerienne",
    name: "Mythologie sumerienne",
    birthYear: -3500,
    deathYear: -2000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Hero_lion_Dur-Sharrukin_Louvre_AO19862.jpg/400px-Hero_lion_Dur-Sharrukin_Louvre_AO19862.jpg",
    nationality: "Mesopotamien",
    movement: "Antiquite",
    summary: `La mythologie sumerienne est la plus ancienne mythologie ecrite de l'humanite. Nee en Mesopotamie au IVe millenaire av. J.-C., elle est gravee sur des tablettes d'argile en ecriture cuneiforme, offrant les premiers recits structures sur l'origine du monde et des dieux.

Le pantheon sumerien est organise autour de grandes forces cosmiques : An (le ciel), Enlil (l'air et l'autorite), Enki (l'eau et la sagesse), Inanna (l'amour et la guerre). Ces dieux sont capricieux, jaloux et violents — a l'image des forces naturelles qu'ils incarnent dans un pays soumis aux crues imprevisibles du Tigre et de l'Euphrate.

L'Epopee de Gilgamesh, composee vers 2100 av. J.-C., est le premier grand texte litteraire de l'humanite. Gilgamesh, roi d'Uruk, mi-homme mi-dieu, cherche l'immortalite apres la mort de son ami Enkidu. Sa quete echoue, mais il decouvre que la grandeur humaine reside dans les oeuvres qui survivent a la mort.

Le recit sumerien du Deluge — ou le dieu Enki previent Ziusudra de la catastrophe — prefigure directement le Deluge biblique de Noe. La descente d'Inanna aux enfers inspire le mythe de Persephone. La Mesopotamie est la matrice de l'imaginaire mythologique occidental.`,
    mainWorks: [
      "Epopee de Gilgamesh",
      "Enuma Elish (creation)",
      "Descente d'Inanna aux enfers",
      "Recit du Deluge (inspire la Bible)",
    ],
    keyIdeas: ["Plus anciens ecrits", "Gilgamesh", "Deluge originel", "Matrice mythologique"],
  },
  {
    id: "mythologie-egyptienne",
    name: "Mythologie egyptienne",
    birthYear: -3000,
    deathYear: -30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/BD_Hunefer.jpg/500px-BD_Hunefer.jpg",
    nationality: "Egyptien",
    movement: "Antiquite",
    summary: `La mythologie egyptienne se deploie pendant trois millenaires autour du Nil, du cycle solaire et de l'obsession de la vie apres la mort. Elle produit l'un des systemes religieux les plus elabores et les plus durables de l'Antiquite.

Le dieu-soleil Ra traverse le ciel chaque jour dans sa barque et combat chaque nuit le serpent Apophis dans les tenebres souterraines. Ce cycle quotidien de mort et de renaissance structure toute la pensee egyptienne. Le pharaon, fils de Ra, est le garant de Maat — l'ordre cosmique — sur terre.

Le mythe central est celui d'Osiris : assassine par son frere Seth, demembre puis reconstitue par son epouse Isis, il devient le roi du monde des morts. Leur fils Horus venge son pere et monte sur le trone. Ce recit de mort, resurrection et succession fonde la legitimite royale.

Le Livre des Morts accompagne le defunt dans l'au-dela. Son coeur est pese contre la plume de Maat : s'il est plus leger, le mort accede a l'eternite ; sinon, il est devore par la creature Ammout. La momification, les pyramides et les tombeaux elabores visent a assurer cette survie eternelle.`,
    mainWorks: [
      "Mythe d'Osiris (mort et resurrection)",
      "Ra - dieu soleil createur",
      "Livre des Morts",
      "Jugement des ames par Osiris",
    ],
    keyIdeas: ["Vie apres la mort", "Cycle solaire", "Maat", "Momification"],
  },
  {
    id: "mythologie-grecque",
    name: "Mythologie grecque",
    birthYear: -1200,
    deathYear: -300,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Jupiter_Smyrna_Louvre_Ma13.jpg/400px-Jupiter_Smyrna_Louvre_Ma13.jpg",
    nationality: "Grec",
    movement: "Antiquite",
    summary: `La mythologie grecque est la plus influente de l'histoire occidentale. Ses dieux, ses heros et ses recits impregnent l'art, la litterature, la philosophie et meme le langage courant depuis presque trois millenaires.

Les dieux de l'Olympe — Zeus, Athena, Apollon, Aphrodite, Ares, Hermes — sont extraordinairement humains. Ils sont jaloux, amoureux, vindictifs, vaniteux. Zeus trompe constamment Hera, Aphrodite seduit Ares, Athena et Poseidon se disputent Athenes. Cette proximite entre dieux et hommes distingue la Grece de la plupart des autres mythologies.

Les heros — Hercule, Achille, Ulysse, Persee, Thesee — incarnent les vertus et les limites humaines. L'Iliade raconte la colere d'Achille devant Troie, l'Odyssee le retour d'Ulysse a Ithaque. Les tragedies d'Eschyle, Sophocle et Euripide explorent le destin, la faute et la justice divine a travers Oedipe, Antigone, Medee.

La Theogonie d'Hesiode raconte la genese du monde : du Chaos naissent Gaia et Ouranos, les Titans, puis les Olympiens qui renversent leurs peres. Cette idee d'un ordre cosmique ne de la violence et de la succession des generations influence toute la pensee occidentale sur le pouvoir et la legitimite.`,
    mainWorks: [
      "Theogonie d'Hesiode",
      "Iliade et Odyssee d'Homere",
      "Douze travaux d'Hercule",
      "Tragedies grecques (Oedipe, Antigone)",
    ],
    keyIdeas: ["Dieux humanises", "Heros epiques", "Tragedie", "Influence universelle"],
  },
  {
    id: "mythologie-romaine",
    name: "Mythologie romaine",
    birthYear: -753,
    deathYear: 476,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/She-wolf_suckles_Romulus_and_Remus.jpg/500px-She-wolf_suckles_Romulus_and_Remus.jpg",
    nationality: "Romain",
    movement: "Antiquite",
    summary: `La mythologie romaine emprunte largement au pantheon grec — Jupiter est Zeus, Mars est Ares, Venus est Aphrodite — mais elle y ajoute une dimension civique et politique proprement romaine. La religion n'est pas affaire de foi personnelle mais de devotion a l'Etat.

Les mythes fondateurs de Rome sont essentiels a l'identite romaine. Enee, prince troyen fils de Venus, fuit Troie en flammes et fonde la lignee qui menera a Rome. Romulus et Remus, jumeaux allaites par une louve, fondent la ville en 753 av. J.-C. Romulus tue Remus : la grandeur de Rome nait dans la violence fraternelle.

L'Eneide de Virgile, ecrite sous Auguste, est le grand texte fondateur. Elle fait d'Enee l'ancetre mythique de la gens Julia, legitimant ainsi le pouvoir d'Auguste. Les Metamorphoses d'Ovide compilent et transforment l'ensemble des mythes greco-romains en un chef-d'oeuvre poetique qui sera la source principale de la mythologie antique pour le Moyen Age et la Renaissance.

Le culte imperial divinise les empereurs defunts, puis les empereurs vivants. Les vestales gardent le feu sacre de Rome. Cette religion civique est un ciment de l'Empire jusqu'a la victoire du christianisme au IVe siecle.`,
    mainWorks: [
      "Eneide de Virgile",
      "Metamorphoses d'Ovide",
      "Romulus et Remus - fondation de Rome",
      "Culte imperial",
    ],
    keyIdeas: ["Religion civique", "Mythes fondateurs", "Culte imperial", "Heritage grec transforme"],
  },
  {
    id: "mythologie-nordique",
    name: "Mythologie nordique",
    birthYear: -500,
    deathYear: 1100,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Georg_von_Rosen_-_Oden_som_vandringsman%2C_1886_%28Odin%2C_the_Wanderer%29.jpg/400px-Georg_von_Rosen_-_Oden_som_vandringsman%2C_1886_%28Odin%2C_the_Wanderer%29.jpg",
    nationality: "Scandinave",
    movement: "Moyen Age",
    summary: `La mythologie nordique, celle des Vikings et des peuples germaniques, est une cosmogonie tragique ou les dieux eux-memes sont mortels. Contrairement aux Olympiens grecs, les dieux d'Asgard savent qu'ils mourront au Ragnarok — et ils combattent quand meme.

Odin, le pere de tout, a sacrifie un oeil pour boire a la source de la sagesse et s'est pendu neuf jours a l'arbre-monde Yggdrasil pour decouvrir les runes. Thor, son fils, dieu du tonnerre, protege les hommes contre les geants avec son marteau Mjollnir. Loki, le dieu trickster, mi-ami mi-ennemi des dieux, seme le chaos.

L'univers s'organise autour d'Yggdrasil, le frene cosmique qui relie neuf mondes : Asgard (les dieux), Midgard (les humains), Jotunheim (les geants), Hel (les morts). Les Valkyries emmenent les guerriers tombes au combat au Valhalla, ou ils festoient en attendant le Ragnarok.

Le Ragnarok, la fin du monde, voit les forces du chaos — Loki, le loup Fenrir, le serpent Jormungandr — affronter les dieux dans une bataille finale. Thor tue le serpent mais meurt de son venin, Odin est devore par Fenrir. Mais un monde nouveau renait des cendres. Redecouvert au XIXe siecle, ce corpus inspire Wagner, Tolkien, Marvel et toute la fantasy contemporaine.`,
    mainWorks: [
      "Edda poetique et Edda en prose",
      "Odin - dieu supreme, sacrifice",
      "Thor - dieu du tonnerre",
      "Ragnarok - fin et renouveau du monde",
    ],
    keyIdeas: ["Dieux mortels", "Ragnarok", "Yggdrasil", "Heroisme tragique"],
  },
  {
    id: "mythologie-celtique",
    name: "Mythologie celtique",
    birthYear: -500,
    deathYear: 500,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Cernunnos_on_the_Gundestrup_Cauldron.jpg/500px-Cernunnos_on_the_Gundestrup_Cauldron.jpg",
    nationality: "Celte",
    movement: "Antiquite / Moyen Age",
    summary: `La mythologie celtique est la grande mythologie perdue de l'Europe occidentale. Les druides, qui en etaient les gardiens, interdisaient de la mettre par ecrit. Ce que nous en connaissons vient des moines irlandais qui transcrivirent les recits au Moyen Age, et des auteurs classiques grecs et romains.

Le monde celtique est peuple de dieux, de fees et de creatures surnaturelles. Les Tuatha De Danann, race divine d'Irlande, possedent des objets magiques — la lance de Lugh, le chaudron du Dagda. Le Sidh, monde des fees, coexiste avec le monde humain, accessible par des collines creuses ou lors de la nuit de Samhain (ancetre d'Halloween).

Le cycle d'Ulster raconte les exploits de Cuchulainn, guerrier semi-divin d'une bravoure furieuse, qui defend seul l'Ulster contre une armee. Sa rage de combat le transforme en monstre, et il meurt jeune, attache a un rocher pour mourir debout face a ses ennemis.

Mais c'est le cycle arthurien qui assure la survie mondiale de l'imaginaire celtique. Le roi Arthur, les chevaliers de la Table ronde, la quete du Graal, Merlin l'enchanteur, Lancelot et Gueniere — ce corpus, repris par Chretien de Troyes puis par toute l'Europe, reste l'un des plus puissants de l'imaginaire occidental.`,
    mainWorks: [
      "Cycle d'Ulster (Cuchulainn)",
      "Cycle arthurien (roi Arthur, Graal)",
      "Tuatha De Danann - dieux irlandais",
      "Merlin et les fees",
    ],
    keyIdeas: ["Tradition orale", "Sidh", "Cuchulainn", "Cycle arthurien"],
  },
  {
    id: "mythologie-hindoue",
    name: "Mythologie hindoue",
    birthYear: -1500,
    nationality: "Indien",
    movement: "Religions orientales",
    summary: `La mythologie hindoue est la seule grande mythologie antique a etre encore pleinement vivante. Plus d'un milliard de personnes prient aujourd'hui les memes dieux que ceux des Vedas composes il y a 3 500 ans. Ses recits, d'une richesse inepuisable, continuent d'etre chantes, danses et representes.

La Trimurti — Brahma le createur, Vishnou le preservateur, Shiva le destructeur — incarne les trois fonctions cosmiques. Vishnou descend sur terre sous forme d'avatars pour retablir l'ordre : Rama, le prince ideal, et Krishna, le dieu espiegle et philosophe, sont les plus veneres. Shiva, ascete et danseur, cree et detruit l'univers dans sa danse cosmique, le Tandava.

Le Mahabharata, avec ses 200 000 vers, est le plus long poeme epique de l'humanite — sept fois l'Iliade et l'Odyssee reunies. Il contient la Bhagavad-Gita, dialogue entre Krishna et le guerrier Arjuna sur le champ de bataille, texte fondamental de la philosophie hindoue sur le devoir, l'action et le detachement.

Le Ramayana raconte l'exil du prince Rama, l'enlevement de son epouse Sita par le demon Ravana, et sa reconquete avec l'aide du dieu-singe Hanuman. Ces deux epopees structurent l'imaginaire, la morale et la vie quotidienne de l'Inde et de l'Asie du Sud-Est depuis des millenaires.`,
    mainWorks: [
      "Mahabharata (Bhagavad-Gita)",
      "Ramayana",
      "Avatars de Vishnou (Krishna, Rama)",
      "Shiva - destruction et creation",
    ],
    keyIdeas: ["Mythologie vivante", "Trimurti", "Epopees grandioses", "Avatars"],
  },
  {
    id: "mythologie-chinoise",
    name: "Mythologie chinoise",
    birthYear: -2000,
    nationality: "Chinois",
    movement: "Religions orientales",
    summary: `La mythologie chinoise est un tissu complexe ou se melent recits cosmogoniques anciens, legendes historiques, taoisme, bouddhisme et confucianisme. Contrairement aux mythologies greco-romaines, elle n'a jamais ete systematisee en un corpus unifie, ce qui lui donne une richesse foisonnante.

Pangu, le geant primordial, nait dans l'oeuf cosmique et separe le ciel de la terre. A sa mort, son corps devient le monde : ses yeux le soleil et la lune, son sang les rivieres, ses cheveux les forets. Nuwa, deesse a queue de serpent, faconne les humains dans la glaise et repare le ciel brise.

Les dragons chinois, creatures bienveillantes associees a l'eau, a la pluie et au pouvoir imperial, sont radicalement differents des dragons occidentaux. L'Empereur de Jade preside un pantheon celeste organise comme une bureaucratie imperiale, avec des ministres divins, des rapports et des promotions.

Le Voyage vers l'Ouest, roman du XVIe siecle, raconte le periple du moine Xuanzang vers l'Inde pour rapporter des sutras bouddhistes, accompagne du Roi Singe Sun Wukong, personnage irreverent et tout-puissant. Ce recit, melant aventure, satire et philosophie, est l'oeuvre la plus populaire de la litterature chinoise et continue d'irriguer la culture populaire asiatique.`,
    mainWorks: [
      "Pangu et la creation",
      "Nuwa cree l'humanite",
      "Dragon chinois - symbole imperial",
      "Voyage vers l'Ouest (Roi Singe)",
    ],
    keyIdeas: ["Syncretisme religieux", "Dragons bienveillants", "Bureaucratie celeste", "Roi Singe"],
  },
  {
    id: "mythologie-japonaise",
    name: "Mythologie japonaise",
    birthYear: -700,
    nationality: "Japonais",
    movement: "Religions orientales",
    summary: `La mythologie japonaise, fondement du shintoisme, est intimement liee a la nature et au paysage de l'archipel. Les kami — esprits divins — habitent les montagnes, les rivieres, les arbres et les rochers. Chaque element naturel est potentiellement sacre.

Le Kojiki (712) et le Nihon Shoki (720) racontent la creation du Japon. Les dieux Izanagi et Izanami enfantent les iles japonaises et les divinites. De la purification d'Izanagi naissent trois kami supremes : Amaterasu (deesse du soleil), Tsukuyomi (dieu de la lune) et Susanoo (dieu des tempetes).

Amaterasu, offensee par la violence de son frere Susanoo, se cache dans une grotte, plongeant le monde dans les tenebres. Les autres dieux la font sortir par la ruse et la danse. Ce mythe fondateur explique les eclipses et fonde la lignee imperiale : l'empereur du Japon descend directement d'Amaterasu, legitimant ainsi la monarchie la plus ancienne du monde.

Le shintoisme coexiste harmonieusement avec le bouddhisme depuis le VIe siecle, dans un syncretisme original. Les temples shinto et les temples bouddhistes voisinent, et de nombreux Japonais pratiquent les deux. Cette cohabitation, unique au monde, imprègne profondement la culture japonaise contemporaine, de la ceremonie du the aux festivals traditionnels.`,
    mainWorks: [
      "Kojiki et Nihon Shoki",
      "Amaterasu - deesse du soleil",
      "Creation des iles du Japon",
      "Kami - esprits de la nature",
    ],
    keyIdeas: ["Kami", "Shinto", "Lien a la nature", "Syncretisme bouddhiste"],
  },
  {
    id: "mythologie-maya",
    name: "Mythologie maya",
    birthYear: -2000,
    deathYear: 1500,
    nationality: "Mesoamericain",
    movement: "Ameriques",
    summary: `La mythologie maya est l'une des plus complexes et des plus sophistiquees des Ameriques precolombiennes. Developpee par une civilisation qui invente l'ecriture, l'astronomie mathematique et le concept du zero, elle est aussi intellectuellement ambitieuse que les mythologies du Vieux Monde.

Le Popol Vuh, « livre du conseil » des Mayas quiches du Guatemala, est le grand texte fondateur. Il raconte la creation du monde par les dieux Tepeu et Gucumatz, l'echec des premiers humains (faits de boue puis de bois), et la creation reussie des hommes de mais — le mais etant la substance sacree, le sang de la terre.

Les Jumeaux Heros, Hunahpu et Xbalanque, descendent a Xibalba, le monde souterrain des morts, pour affronter les seigneurs de la mort dans des epreuves rituelles. Ils triomphent par la ruse et deviennent le soleil et la lune. Ce recit initiatique est aussi un mythe agraire : la descente aux enfers symbolise la semence enterree qui renait en plante.

Le calendrier sacre tzolk'in de 260 jours structure la vie rituelle. Les sacrifices humains — offrandes de sang aux dieux qui ont donne le leur pour creer l'humanite — entretiennent l'equilibre cosmique. L'astronomie maya, d'une precision remarquable, lie l'observation celeste aux cycles mythiques.`,
    mainWorks: [
      "Popol Vuh - livre sacre",
      "Jumeaux heros (Hunahpu et Xbalanque)",
      "Xibalba - monde souterrain",
      "Calendrier sacre",
    ],
    keyIdeas: ["Popol Vuh", "Hommes de mais", "Xibalba", "Calendrier sacre"],
  },
  {
    id: "mythologie-azteque",
    name: "Mythologie azteque",
    birthYear: 1300,
    deathYear: 1521,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/She-wolf_suckles_Romulus_and_Remus.jpg/500px-She-wolf_suckles_Romulus_and_Remus.jpg",
    nationality: "Mesoamericain",
    movement: "Ameriques",
    summary: `La mythologie azteque est dominee par une vision cosmique dramatique : le monde a deja ete cree et detruit quatre fois, et le cinquieme soleil — notre ere — est condamne a perir a son tour. Les dieux se sont sacrifies pour creer ce soleil ; les humains doivent les nourrir de sang pour retarder sa fin.

Quetzalcoatl, le serpent a plumes, est le dieu de la sagesse, du vent et de l'etoile du matin. Figure civilisatrice, il a donne le mais et le calendrier aux hommes. Son depart vers l'est et sa promesse de retour auraient facilite la conquete espagnole, Cortes etant initialement pris pour le dieu revenu.

Huitzilopochtli, dieu du soleil et de la guerre, est la divinite tutélaire des Aztèques. Ne d'une conception miraculeuse, il tue sa soeur et ses freres a sa naissance — allegorie du soleil qui chasse la lune et les etoiles chaque matin. Les sacrifices humains, pratiques a grande echelle sur les pyramides de Tenochtitlan, visent a lui fournir le sang necessaire a sa course quotidienne.

La Pierre du Soleil, disque de basalte de 3,6 metres, resume la cosmologie azteque : les quatre soleils passes, le cinquieme soleil actuel, les cycles de destruction et de creation. Ce monument est devenu l'un des symboles les plus reconnaissables de la civilisation mesoamericaine.`,
    mainWorks: [
      "Quetzalcoatl - serpent a plumes",
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
    summary: `Les mythologies africaines forment un ensemble d'une diversite immense, refletant les centaines de peuples et de langues du continent. Transmises oralement par les griots, les anciens et les devins, elles partagent neanmoins des themes communs : un dieu createur lointain, des esprits intermediaires actifs, et un lien profond entre vivants et ancetres.

Les Orishas de la tradition yoruba (Nigeria) sont parmi les divinites africaines les plus connues. Ogun, dieu du fer et de la guerre, Shango, dieu du tonnerre, Yemoja, deesse de la mer, forment un pantheon vivant. La traite transatlantique exporte ces divinites aux Ameriques, ou elles survivent et se transforment dans le vaudou haitien, le candomble bresilien et la santeria cubaine.

Anansi l'araignee, figure trickster d'Afrique de l'Ouest, est le maitre de la ruse et des histoires. Ses contes, qui enseignent la sagesse par l'humour et la subversion, voyagent avec les esclaves aux Caraibes et en Amerique du Nord, influencant les traditions narratives afro-americaines.

Les mythes de creation africains sont d'une variete remarquable : le dieu Bumba des Bakuba vomit le monde, Amma des Dogons cree les etoiles en lançant des boulettes d'argile, le dieu supreme des Fangs descend sur terre par un fil d'araignee. Cette richesse, longtemps sous-estimee par l'Occident, fait l'objet d'un renouveau d'interet depuis la decolonisation.`,
    mainWorks: [
      "Orishas yorubas (Nigeria)",
      "Anansi l'araignee (Afrique de l'Ouest)",
      "Mythes de creation varies",
      "Influence sur le vaudou et la santeria",
    ],
    keyIdeas: ["Diversite immense", "Tradition orale", "Orishas", "Diaspora religieuse"],
  },
  {
    id: "mythologie-polynesienne",
    name: "Mythologie polynesienne",
    birthYear: -1000,
    nationality: "Polynesien",
    movement: "Oceanie",
    summary: `La mythologie polynesienne est celle des peuples navigateurs qui ont colonise le plus vaste ocean du monde. De Hawaii a la Nouvelle-Zelande, de Tahiti a l'ile de Paques, des recits remarquablement coherents temoignent d'une origine commune et d'un rapport intense avec la mer, les volcans et les etoiles.

Maui, le demi-dieu trickster, est la figure centrale de toute la Polynesie. Selon les traditions, il peche les iles du fond de l'ocean avec un hamecon magique, vole le feu aux dieux pour le donner aux hommes, et ralentit le soleil pour allonger les jours. Malicieux et courageux, il meurt en tentant de vaincre la deesse de la mort.

Pele, deesse hawaiienne des volcans, habite le Kilauea. Passionnee et redoutable, elle incarne la force creatrice et destructrice du feu volcanique. Tangaroa (ou Tagaloa) est le dieu de la mer, omnipresent pour ces peuples de navigateurs.

Le mana, force spirituelle impersonnelle, imprègne les etres et les objets. Le tapu (tabou) — mot que les Europeens empruntent au polynesien — designe les interdits sacres qui protegent le mana. Cette cosmologie est inseparable de l'exploit maritime polynesien : la navigation hauturiere sans instruments, guidee par les etoiles et les courants, est elle-meme un acte sacre.`,
    mainWorks: [
      "Maui - demi-dieu trickster",
      "Pele - deesse des volcans (Hawaii)",
      "Tangaroa - dieu de la mer",
      "Mana et tapu",
    ],
    keyIdeas: ["Navigateurs du Pacifique", "Maui", "Mana et tapu", "Lien a l'ocean"],
  },
  {
    id: "mythologie-aborigene",
    name: "Mythologie aborigene",
    birthYear: -50000,
    nationality: "Australien",
    movement: "Traditions anciennes",
    summary: `La mythologie aborigene d'Australie est la plus ancienne tradition spirituelle continue de l'humanite, remontant a au moins 50 000 ans. Le Temps du Reve (Dreamtime) n'est pas un passe revolu mais une dimension permanente qui coexiste avec le present.

Dans le Temps du Reve, les Ancetres — etres mi-humains, mi-animaux — parcourent la terre et la creent en la nommant. Le Serpent Arc-en-ciel sculte les rivieres et les vallees dans ses deplacements. Chaque montagne, chaque point d'eau, chaque rocher est la trace visible d'un acte createur ancestral. Le paysage entier est un texte sacre.

Les Aboriginal songlines (« chemins de chants ») sont des itineraires mythiques et geographiques qui traversent le continent. En chantant les exploits des Ancetres dans le bon ordre, les Aborigenes peuvent naviguer sur des milliers de kilometres a travers le desert. Le chant cree litteralement le territoire.

Les peintures rupestres, certaines vieilles de 40 000 ans, les ceremonies, les danses et les recits transmettent ce savoir sacre de generation en generation. La colonisation europeenne a devaste les cultures aborigenes, mais le Temps du Reve persiste. Il est aujourd'hui reconnu comme l'une des cosmogonies les plus profondes et les plus originales de l'humanite.`,
    mainWorks: [
      "Temps du Reve (Dreamtime)",
      "Serpent Arc-en-ciel",
      "Chants et peintures sacrees",
      "Connexion a la terre (pays)",
    ],
    keyIdeas: ["Temps du Reve", "Songlines", "Serpent Arc-en-ciel", "Plus ancienne tradition"],
  },
  {
    id: "mythologie-comparee",
    name: "Mythologie comparee",
    birthYear: 1850,
    nationality: "International",
    movement: "Etude moderne",
    summary: `La mythologie comparee nait au XIXe siecle de la decouverte que les mythes de peuples tres differents partagent des structures et des themes etonnamment similaires. Deluges universels, heros descendant aux enfers, dieux mourant et renaissant : ces motifs recurrents posent la question d'une grammaire universelle de l'imaginaire humain.

Max Muller, philologue d'Oxford, propose que les mythes sont des metaphores solaires degradees. James Frazer, dans Le Rameau d'or (1890), compile des milliers de rites et de mythes pour montrer les liens entre magie, religion et science. Son oeuvre monumentale, malgre ses faiblesses methodologiques, ouvre le champ.

Joseph Campbell synthetise ces travaux dans Le Heros aux mille visages (1949). Il identifie le « monomythe » — un schema narratif universel ou le heros recoit un appel, traverse des epreuves, obtient une revelation et revient transforme. George Lucas s'en inspire directement pour Star Wars. Ce modele, s'il est critique pour son universalisme excessif, reste une grille de lecture populaire.

Claude Levi-Strauss, avec l'analyse structurale des mythes, et Carl Gustav Jung, avec sa theorie des archetypes (l'inconscient collectif produirait des images universelles), completent l'approche. La mythologie comparee montre que les mythes ne sont pas des superstitions primitives mais des structures profondes de la pensee humaine.`,
    mainWorks: [
      "Le Rameau d'or (Frazer, 1890)",
      "Le Heros aux mille visages (Campbell, 1949)",
      "Archetypes (Jung)",
      "Structuralisme (Levi-Strauss)",
    ],
    keyIdeas: ["Monomythe", "Archetypes", "Motifs universels", "Structuralisme"],
  },
];
