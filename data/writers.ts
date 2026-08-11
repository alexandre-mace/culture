export interface Writer {
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

export const writers: Writer[] = [
  {
    id: "homere",
    name: "Homère",
    birthYear: -800,
    deathYear: -701,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Homer_British_Museum.jpg?width=220",
    nationality: "Grec",
    movement: "Épopée antique",
    family: "Antiquité",
    summary: `Homère est le poète épique grec auquel la tradition attribue la composition de l'Iliade et de l'Odyssée, les deux plus grandes épopées de la littérature occidentale. Son existence historique reste débattue, certains chercheurs suggérant qu'il s'agit d'une figure légendaire représentant une tradition orale collective.

L'Iliade raconte un épisode de la guerre de Troie, centrée sur la colère d'Achille, tandis que l'Odyssée narre le périlleux retour d'Ulysse vers Ithaque après la guerre. Ces deux œuvres fondatrices ont établi les conventions du genre épique et influencé toute la littérature occidentale.

Homère a développé des techniques narratives sophistiquées comme l'invocation à la Muse, les épithètes formulaires et les comparaisons épiques. Son traitement des thèmes universels - l'honneur, la guerre, le destin, l'amour, la ruse - continue de résonner à travers les siècles.

Son influence sur la culture grecque était immense : ses œuvres servaient de base à l'éducation et étaient récitées lors des festivals. Platon et Aristote le citent abondamment, et son héritage se retrouve chez Virgile, Dante, Joyce et d'innombrables autres auteurs.`,
    mainWorks: ["L'Iliade", "L'Odyssée"],
    keyIdeas: ["Épopée", "Héros tragique", "Voyage initiatique", "Tradition orale"],
  },
  {
    id: "sophocle",
    name: "Sophocle",
    birthYear: -496,
    deathYear: -406,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sophocles_pushkin.jpg?width=220",
    nationality: "Grec",
    movement: "Tragédie grecque",
    family: "Antiquité",
    influences: ["homere"],
    summary: `Sophocle, né à Colone près d'Athènes, est l'un des trois grands tragiques grecs avec Eschyle et Euripide. Issu d'une famille aisée, il reçoit une éducation complète et participe activement à la vie politique athénienne, occupant des fonctions militaires et religieuses.

Auteur de plus de 120 pièces, dont seulement 7 nous sont parvenues complètes, il remporte de nombreuses victoires aux concours dramatiques. Ses innovations techniques incluent l'introduction d'un troisième acteur et l'abandon de la trilogie liée au profit de tragédies indépendantes.

Son chef-d'œuvre, Œdipe Roi, explore les thèmes du destin, de la connaissance de soi et de l'aveuglement moral. La figure d'Antigone, dans la pièce éponyme, incarne le conflit entre la loi divine et la loi humaine, entre conscience individuelle et autorité politique.

Sophocle a perfectionné la structure de la tragédie attique et approfondi la psychologie des personnages. Son exploration du héros tragique, pris entre liberté et fatalité, a profondément influencé la philosophie et la littérature, d'Aristote à Freud qui nomma le "complexe d'Œdipe".`,
    mainWorks: ["Œdipe Roi", "Antigone", "Électre", "Œdipe à Colone", "Ajax", "Les Trachiniennes"],
    keyIdeas: ["Tragédie", "Destin", "Hubris", "Conflit moral"],
  },
  {
    id: "virgile",
    name: "Virgile",
    birthYear: -70,
    deathYear: -19,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Virgilio.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "Romain",
    movement: "Poésie latine classique",
    family: "Antiquité",
    influences: ["homere"],
    summary: `Publius Vergilius Maro, dit Virgile, naît près de Mantoue dans une famille modeste. Il étudie la rhétorique et la philosophie à Rome et Naples, se liant avec les cercles intellectuels proches d'Auguste. Sa jeunesse est marquée par les guerres civiles qui dévastent l'Italie.

Les Bucoliques, poèmes pastoraux inspirés de Théocrite, lui valent une première reconnaissance. Les Géorgiques, traité poétique sur l'agriculture, célèbrent le travail de la terre et les valeurs rurales traditionnelles, répondant au programme de restauration morale d'Auguste.

L'Énéide, son œuvre majeure inachevée, raconte les péripéties d'Énée fuyant Troie pour fonder Rome. Cette épopée nationale romaine dialogue avec Homère tout en proposant une vision providentielle de l'histoire, légitimant le pouvoir augustéen.

Virgile meurt à Brindes avant d'avoir pu réviser son chef-d'œuvre, qu'il voulait brûler. Auguste fait publier l'Énéide qui devient immédiatement un classique. Au Moyen Âge, Virgile est vénéré comme un prophète préchrétien, et Dante en fait son guide dans la Divine Comédie.`,
    mainWorks: ["L'Énéide", "Les Bucoliques", "Les Géorgiques"],
    keyIdeas: ["Épopée nationale", "Pietas", "Destin impérial", "Pastorale"],
  },
  {
    id: "ovide",
    name: "Ovide",
    birthYear: -43,
    deathYear: 17,
    nationality: "Romain",
    movement: "Poésie latine classique",
    family: "Antiquité",
    influences: ["virgile"],
    summary: `Publius Ovidius Naso naît à Sulmone dans une famille de chevaliers. Destiné à une carrière juridique, il abandonne le barreau pour se consacrer entièrement à la poésie. Il devient rapidement le poète le plus célèbre de Rome, maître de l'élégie amoureuse.

Les Amours et L'Art d'aimer, poèmes érotiques spirituels et ironiques, font scandale dans la Rome d'Auguste qui prône un retour aux valeurs morales traditionnelles. Ces œuvres témoignent d'une maîtrise virtuose du vers et d'un esprit mordant.

Les Métamorphoses, son chef-d'œuvre, rassemblent 250 récits mythologiques liés par le thème de la transformation. Ce poème épique en quinze livres constitue une somme de la mythologie gréco-romaine, du chaos originel à l'apothéose de Jules César.

En l'an 8, Ovide est exilé par Auguste à Tomes sur la mer Noire, pour des raisons obscures liées à un "poème et une erreur". Il y meurt sans avoir pu revenir à Rome. Son influence sur la littérature et l'art occidentaux est immense, des troubadours à Shakespeare et Picasso.`,
    mainWorks: ["Les Métamorphoses", "L'Art d'aimer", "Les Amours", "Les Héroïdes", "Les Tristes"],
    keyIdeas: ["Métamorphose", "Mythologie", "Élégie amoureuse", "Ironie"],
  },
  {
    id: "dante",
    name: "Dante Alighieri",
    birthYear: 1265,
    deathYear: 1321,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_de_Dante.jpg?width=220",
    nationality: "Italien",
    movement: "Dolce stil novo",
    family: "Moyen Âge & Renaissance",
    influences: ["virgile", "ovide"],
    summary: `Dante Alighieri naît à Florence dans une famille de petite noblesse guelfe. Sa rencontre avec Béatrice Portinari à l'âge de neuf ans marque profondément sa vie et son œuvre. Il reçoit une éducation soignée, étudiant la philosophie, la théologie et la poésie.

La Vita Nuova, recueil de poèmes et de prose, raconte son amour idéalisé pour Béatrice et inaugure le "dolce stil novo". Après la mort de Béatrice en 1290, Dante se tourne vers la philosophie et s'engage dans la politique florentine, devenant prieur.

En 1302, le triomphe des Guelfes noirs le condamne à l'exil. Il ne reviendra jamais à Florence. C'est durant cet exil qu'il compose la Divine Comédie, voyage allégorique à travers l'Enfer, le Purgatoire et le Paradis, guidé successivement par Virgile et Béatrice.

La Divine Comédie, écrite en langue vulgaire toscane plutôt qu'en latin, fonde la littérature italienne moderne. Cette somme théologique et poétique offre une vision complète de l'univers médiéval tout en exprimant une sensibilité profondément humaine. Dante meurt à Ravenne, où il est toujours enterré.`,
    mainWorks: ["La Divine Comédie", "La Vita Nuova", "Le Banquet", "De Monarchia"],
    keyIdeas: ["Voyage allégorique", "Amour spirituel", "Langue vulgaire", "Vision cosmique"],
  },
  {
    id: "rabelais",
    name: "François Rabelais",
    birthYear: 1494,
    deathYear: 1553,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Francois_Rabelais_-_Portrait.jpg?width=220",
    nationality: "Français",
    movement: "Humanisme Renaissance",
    family: "Moyen Âge & Renaissance",
    summary: `François Rabelais naît près de Chinon dans une famille de la bourgeoisie. Moine franciscain puis bénédictin, il étudie le grec et le droit avant de se tourner vers la médecine. Il devient médecin à Lyon, alors centre de l'imprimerie et de l'humanisme.

En 1532, il publie Pantagruel sous le pseudonyme d'Alcofribas Nasier, anagramme de son nom. Le succès est immédiat malgré la condamnation de la Sorbonne. Gargantua suit en 1534, puis les trois autres livres de la geste des géants.

Son œuvre combine culture savante et tradition populaire, érudition humaniste et verve carnavalesque. Derrière la farce rabelaisienne se cache une réflexion sur l'éducation, la guerre, la religion et la nature humaine. L'abbaye de Thélème incarne son idéal humaniste : "Fay ce que vouldras".

Rabelais crée un style unique, mêlant néologismes, jeux de mots, accumulations verbales et références érudites. Son influence sur la langue française est considérable. Protégé par les Du Bellay, il meurt à Paris après une vie mouvementée entre faveur royale et condamnations ecclésiastiques.`,
    mainWorks: ["Gargantua", "Pantagruel", "Tiers Livre", "Quart Livre", "Cinquième Livre"],
    keyIdeas: ["Humanisme", "Gigantisme", "Carnavalesque", "Liberté"],
  },
  {
    id: "shakespeare",
    name: "William Shakespeare",
    birthYear: 1564,
    deathYear: 1616,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shakespeare.jpg?width=220",
    nationality: "Anglais",
    movement: "Théâtre élisabéthain",
    family: "Moyen Âge & Renaissance",
    influences: ["ovide"],
    summary: `William Shakespeare naît à Stratford-upon-Avon dans une famille de commerçants. On sait peu de choses sur sa jeunesse et son éducation. Vers 1590, il s'installe à Londres où il devient acteur et dramaturge, associé à la troupe du Lord Chamberlain puis des King's Men.

Son œuvre théâtrale couvre tous les genres : comédies brillantes (Le Songe d'une nuit d'été, Beaucoup de bruit pour rien), tragédies profondes (Hamlet, Othello, Le Roi Lear, Macbeth), pièces historiques (Richard III, Henri V) et romances tardives (La Tempête).

Shakespeare explore avec une acuité inégalée les passions humaines : l'ambition, la jalousie, l'amour, la folie, le pouvoir. Ses personnages possèdent une complexité psychologique sans précédent. Ses vers iambiques et sa prose ont enrichi la langue anglaise de centaines d'expressions encore utilisées.

Copropriétaire du Globe Theatre, Shakespeare connaît le succès et la fortune de son vivant. Il se retire à Stratford vers 1613 et meurt trois ans plus tard. Son œuvre, jouée sans interruption depuis quatre siècles, a influencé toute la littérature occidentale et demeure universellement célébrée.`,
    mainWorks: ["Hamlet", "Macbeth", "Othello", "Le Roi Lear", "Roméo et Juliette", "Le Songe d'une nuit d'été", "La Tempête"],
    keyIdeas: ["Tragédie humaine", "Complexité psychologique", "Vers blank", "Théâtre total"],
  },
  {
    id: "cervantes",
    name: "Miguel de Cervantes",
    birthYear: 1547,
    deathYear: 1616,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cervantes_J%C3%A1uregui.jpg?width=220",
    nationality: "Espagnol",
    movement: "Siècle d'or espagnol",
    family: "Moyen Âge & Renaissance",
    summary: `Miguel de Cervantes Saavedra naît à Alcalá de Henares dans une famille modeste de chirurgien itinérant. Sa jeunesse aventureuse le mène en Italie où il s'engage comme soldat. À la bataille de Lépante (1571), il perd l'usage de la main gauche, d'où son surnom de "manchot de Lépante".

Capturé par des pirates barbaresques, il passe cinq ans en captivité à Alger, tentant plusieurs fois de s'évader. De retour en Espagne, il mène une existence difficile, travaillant comme commissaire aux vivres. Emprisonné pour irrégularités comptables, c'est peut-être en prison qu'il commence Don Quichotte.

La première partie de Don Quichotte paraît en 1605 et connaît un succès immédiat dans toute l'Europe. Ce roman raconte les aventures d'un hidalgo devenu fou à force de lire des romans de chevalerie, qui part sur les routes avec son écuyer Sancho Panza.

Don Quichotte est considéré comme le premier roman moderne, mêlant parodie et profondeur, comique et mélancolie. Le couple du chevalier idéaliste et du paysan pragmatique incarne les tensions de la condition humaine. Cervantes meurt à Madrid un jour avant Shakespeare, pauvre mais célèbre.`,
    mainWorks: ["Don Quichotte", "Nouvelles exemplaires", "Les Travaux de Persiles et Sigismonde", "Numance"],
    keyIdeas: ["Roman moderne", "Parodie", "Idéalisme et réalisme", "Folie et sagesse"],
  },
  {
    id: "moliere",
    name: "Molière",
    birthYear: 1622,
    deathYear: 1673,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Moli%C3%A8re_-_Nicolas_Mignard_%281658%29.jpg/330px-Moli%C3%A8re_-_Nicolas_Mignard_%281658%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Classicisme",
    family: "Âge classique & Lumières",
    summary: `Jean-Baptiste Poquelin, dit Molière, naît à Paris dans une famille de tapissiers du roi. Après de bonnes études chez les jésuites, il renonce à la charge paternelle pour fonder l'Illustre Théâtre avec Madeleine Béjart. L'échec de cette entreprise l'entraîne en province pour treize ans.

De retour à Paris en 1658, il obtient la protection de Monsieur, frère du roi, puis de Louis XIV lui-même. Installé au Palais-Royal, il devient le maître incontesté de la comédie, alternant farces, comédies-ballets et grandes comédies de caractère.

Ses chefs-d'œuvre - Tartuffe, Dom Juan, Le Misanthrope, L'Avare - provoquent des scandales mais aussi l'admiration. Molière attaque l'hypocrisie religieuse, la prétention nobiliaire, la pédanterie savante. Ses personnages, Harpagon, Alceste, Jourdain, sont devenus des types universels.

Acteur, directeur de troupe et auteur, Molière meurt quelques heures après avoir joué Le Malade imaginaire. L'Église lui refuse d'abord une sépulture chrétienne. Son œuvre, jouée sans discontinuer depuis 350 ans, fait de lui le plus grand auteur comique français et l'un des piliers du répertoire mondial.`,
    mainWorks: ["Tartuffe", "Dom Juan", "Le Misanthrope", "L'Avare", "Le Bourgeois gentilhomme", "Les Femmes savantes", "Le Malade imaginaire"],
    keyIdeas: ["Comédie de caractère", "Satire sociale", "Castigat ridendo mores", "Théâtre classique"],
  },
  {
    id: "racine",
    name: "Jean Racine",
    birthYear: 1639,
    deathYear: 1699,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Portrait_de_Jean_Racine_d%27apr%C3%A8s_Jean-Baptiste_Santerre.jpg/330px-Portrait_de_Jean_Racine_d%27apr%C3%A8s_Jean-Baptiste_Santerre.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Classicisme",
    family: "Âge classique & Lumières",
    influences: ["sophocle"],
    summary: `Jean Racine naît à La Ferté-Milon, orphelin à quatre ans. Élevé par les jansénistes de Port-Royal, il reçoit une formation humaniste exceptionnelle, notamment en grec. Cette éducation austère marquera profondément sa vision tragique du monde et de la passion.

Sa carrière dramatique débute en 1664 et culmine avec une série de chefs-d'œuvre : Andromaque, Britannicus, Bérénice, Bajazet, Mithridate, Iphigénie et surtout Phèdre (1677). Ses tragédies, fondées sur les modèles antiques, portent les passions humaines à une intensité inégalée.

L'alexandrin racinien atteint une perfection musicale absolue. Ses héroïnes - Andromaque, Bérénice, Phèdre - incarnent la fatalité de la passion amoureuse, déchirure entre désir et devoir, liberté et prédestination. La sobriété de l'intrigue concentre toute l'attention sur l'analyse psychologique.

Après l'échec relatif de Phèdre, Racine abandonne le théâtre profane, se réconcilie avec Port-Royal et devient historiographe du roi. Il écrit encore deux tragédies bibliques, Esther et Athalie, pour les demoiselles de Saint-Cyr. Il meurt à Paris et est inhumé à Port-Royal selon ses vœux.`,
    mainWorks: ["Phèdre", "Andromaque", "Britannicus", "Bérénice", "Iphigénie", "Athalie"],
    keyIdeas: ["Tragédie classique", "Fatalité passionnelle", "Jansénisme", "Perfection formelle"],
  },
  {
    id: "la-fontaine",
    name: "Jean de La Fontaine",
    birthYear: 1621,
    deathYear: 1695,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jean_de_La_Fontaine.PNG?width=220",
    nationality: "Français",
    movement: "Classicisme",
    family: "Âge classique & Lumières",
    summary: `Jean de La Fontaine naît à Château-Thierry en Champagne. Après des études de droit et une brève vocation religieuse, il reprend la charge paternelle de maître des Eaux et Forêts. Son mariage avec Marie Héricart sera distant et il vivra surtout à Paris.

Protégé par le surintendant Fouquet dont la disgrâce l'affecte profondément, La Fontaine trouve ensuite refuge auprès de la duchesse d'Orléans puis de Mme de La Sablière. Homme aimable et distrait, il fréquente les salons et se lie avec Molière, Racine et Boileau.

Les Fables, publiées en plusieurs recueils de 1668 à 1694, constituent son chef-d'œuvre. S'inspirant d'Ésope et de Phèdre, il renouvelle complètement le genre par la variété des tons, la finesse psychologique et la perfection poétique. Ses animaux incarnent les travers humains avec une ironie profonde.

Outre les Fables, La Fontaine compose des Contes licencieux, des poèmes divers et le roman Les Amours de Psyché. Élu à l'Académie française en 1684 malgré les réticences de Louis XIV, il se convertit sur le tard et meurt à Paris. Ses Fables restent un trésor de la langue française et sont apprises par tous les écoliers.`,
    mainWorks: ["Fables", "Contes et nouvelles en vers", "Les Amours de Psyché et de Cupidon"],
    keyIdeas: ["Fable", "Morale", "Imitation créatrice", "Art de conter"],
  },
  {
    id: "voltaire",
    name: "Voltaire",
    birthYear: 1694,
    deathYear: 1778,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Nicolas_de_Largilli%C3%A8re_-_Portrait_de_Voltaire_%281694-1778%29_en_1718_-_P208_-_mus%C3%A9e_Carnavalet_-_5_%28cropped%29.jpg/330px-Nicolas_de_Largilli%C3%A8re_-_Portrait_de_Voltaire_%281694-1778%29_en_1718_-_P208_-_mus%C3%A9e_Carnavalet_-_5_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Lumières",
    family: "Âge classique & Lumières",
    influences: ["racine"],
    summary: `François-Marie Arouet, dit Voltaire, naît à Paris dans une famille bourgeoise aisée. Brillant élève des jésuites, il se destine aux lettres malgré l'opposition paternelle. Ses satires lui valent plusieurs séjours à la Bastille et un exil en Angleterre qui le marque profondément.

De retour en France, il s'impose comme le premier écrivain de son temps : tragédies, poèmes épiques, essais historiques et philosophiques. Son Dictionnaire philosophique et ses Lettres philosophiques diffusent les idées des Lumières. Candide, conte philosophique, reste son œuvre la plus lue.

Installé à Ferney près de la frontière suisse, Voltaire mène ses derniers combats : réhabilitation de Calas, défense des Sirven et du chevalier de La Barre, lutte contre "l'Infâme" - le fanatisme religieux. Sa correspondance monumentale le relie à toute l'Europe éclairée.

Son retour triomphal à Paris en 1778 l'épuise et il meurt quelques semaines plus tard. Voltaire incarne l'intellectuel engagé, défendant la tolérance, la liberté de pensée et la justice. Son influence sur le XVIIIe siècle est immense, et son esprit critique continue d'inspirer.`,
    mainWorks: ["Candide", "Lettres philosophiques", "Dictionnaire philosophique", "Zadig", "Micromégas", "Traité sur la tolérance"],
    keyIdeas: ["Tolérance", "Raison", "Combat contre le fanatisme", "Ironie philosophique"],
  },
  {
    id: "goethe",
    name: "Johann Wolfgang von Goethe",
    birthYear: 1749,
    deathYear: 1832,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Goethe_%28Stieler_1828%29.jpg?width=220",
    nationality: "Allemand",
    movement: "Classicisme de Weimar / Sturm und Drang",
    family: "Romantisme",
    influences: ["homere", "shakespeare"],
    summary: `Johann Wolfgang von Goethe naît à Francfort dans une famille patricienne cultivée. Après des études de droit à Leipzig et Strasbourg, il publie Les Souffrances du jeune Werther (1774) qui connaît un succès européen fulgurant et inaugure le mouvement Sturm und Drang.

En 1775, le duc de Saxe-Weimar l'invite à sa cour où Goethe passera le reste de sa vie, occupant diverses fonctions ministérielles. Son voyage en Italie (1786-1788) marque un tournant vers le classicisme. Il dirige le théâtre de Weimar et entretient une amitié féconde avec Schiller.

Son œuvre immense couvre tous les genres : poésie lyrique, romans (Les Années d'apprentissage de Wilhelm Meister), théâtre, essais scientifiques. Faust, drame composé sur soixante ans, représente la quête de l'homme moderne, pactisant avec le diable pour atteindre la connaissance absolue.

Goethe est le dernier homme universel, poète, romancier, dramaturge mais aussi savant, dessinateur, homme d'État. Il incarne le classicisme allemand et reste la figure centrale de la littérature germanique. Ses derniers mots auraient été : "Plus de lumière !".`,
    mainWorks: ["Faust", "Les Souffrances du jeune Werther", "Les Années d'apprentissage de Wilhelm Meister", "Poésie et vérité", "Les Affinités électives"],
    keyIdeas: ["Sturm und Drang", "Classicisme", "Bildungsroman", "Homme faustien"],
  },
  {
    id: "hugo",
    name: "Victor Hugo",
    birthYear: 1802,
    deathYear: 1885,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg?width=220",
    nationality: "Français",
    movement: "Romantisme",
    family: "Romantisme",
    influences: ["virgile", "shakespeare"],
    summary: `Victor Hugo naît à Besançon, fils d'un général napoléonien. Enfant prodige, il affirme à quinze ans vouloir être "Chateaubriand ou rien". La préface de Cromwell (1827) et la bataille d'Hernani (1830) font de lui le chef de file du romantisme français.

Son œuvre poétique, de la maîtrise classique des Odes aux visions cosmiques des Contemplations et de La Légende des siècles, révolutionne la versification. Ses romans - Notre-Dame de Paris, Les Misérables - mêlent fresque historique, critique sociale et personnages inoubliables.

Pair de France puis député, Hugo s'exile à Jersey et Guernesey après le coup d'État de Napoléon III. Pendant dix-neuf ans, il incarne la résistance républicaine, publiant Les Châtiments contre "Napoléon le Petit". Son retour en 1870 est triomphal.

Hugo meurt à Paris en 1885 ; ses funérailles nationales réunissent deux millions de personnes. Il repose au Panthéon. Poète, romancier, dramaturge, dessinateur, homme politique, il reste la figure tutélaire de la littérature française, incarnant le pouvoir de la parole au service de la justice et de la liberté.`,
    mainWorks: ["Les Misérables", "Notre-Dame de Paris", "Les Contemplations", "La Légende des siècles", "Les Châtiments", "Hernani"],
    keyIdeas: ["Romantisme", "Engagement social", "Exil", "Poésie visionnaire"],
  },
  {
    id: "balzac",
    name: "Honoré de Balzac",
    birthYear: 1799,
    deathYear: 1850,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Honor%C3%A9_de_Balzac_%281842%29.jpg?width=220",
    nationality: "Français",
    movement: "Réalisme",
    family: "Réalisme & naturalisme",
    influences: ["rabelais"],
    summary: `Honoré de Balzac naît à Tours dans une famille bourgeoise. Après des études de droit, il renonce à une carrière de notaire pour se consacrer à l'écriture. Ses premiers romans, publiés sous pseudonyme, échouent, tout comme ses entreprises commerciales qui le laissent couvert de dettes.

À partir de 1829, il entreprend la rédaction de La Comédie humaine, vaste fresque romanesque visant à décrire l'ensemble de la société française de son temps. Plus de 90 romans et nouvelles, peuplées de 2 000 personnages récurrents, composent cette somme réaliste sans précédent.

Balzac travaille avec une énergie prodigieuse, écrivant la nuit, corrigeant inlassablement ses épreuves, poussant l'analyse sociale et psychologique à une précision quasi scientifique. Le Père Goriot, Eugénie Grandet, Illusions perdues comptent parmi ses chefs-d'œuvre.

Épuisé par le travail et la maladie, Balzac meurt à Paris peu après avoir épousé Mme Hanska, l'amour de sa vie. Hugo prononce son éloge funèbre. Son influence sur le roman moderne est décisive : il invente le réalisme romanesque et le personnage comme type social. Proust, Dostoïevski, James le reconnaissent comme maître.`,
    mainWorks: ["Le Père Goriot", "Illusions perdues", "Eugénie Grandet", "La Cousine Bette", "Le Lys dans la vallée", "Splendeurs et misères des courtisanes"],
    keyIdeas: ["Réalisme", "Comédie humaine", "Personnages récurrents", "Argent et pouvoir"],
  },
  {
    id: "stendhal",
    name: "Stendhal",
    birthYear: 1783,
    deathYear: 1842,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Stendhal.jpg?width=220",
    nationality: "Français",
    movement: "Réalisme romantique",
    family: "Romantisme",
    influences: ["cervantes", "shakespeare"],
    summary: `Henri Beyle, dit Stendhal, naît à Grenoble dans une famille bourgeoise. Orphelin de mère à sept ans, il déteste son père et sa ville natale. Il suit les armées napoléoniennes à travers l'Europe, découvrant l'Italie dont il tombe amoureux.

Après la chute de l'Empire, il s'installe à Milan puis à Paris. Il publie des essais sur l'art, la musique et l'amour (De l'Amour). Ses deux grands romans, Le Rouge et le Noir et La Chartreuse de Parme, passent relativement inaperçus de son vivant.

L'écriture de Stendhal se caractérise par une sobriété qui tranche avec le lyrisme romantique. Il analyse les mouvements de l'âme avec une précision psychologique nouvelle, inaugurant le monologue intérieur. Julien Sorel et Fabrice del Dongo incarnent l'ambition et la passion dans une société médiocre.

Nommé consul à Civitavecchia, Stendhal meurt d'apoplexie à Paris. Il avait prédit qu'il serait lu en 1880 ou 1935 - prophétie exacte. Balzac salue La Chartreuse comme un chef-d'œuvre, et les écrivains du XXe siècle - Gide, Valéry, Sartre - reconnaissent en lui un précurseur de la modernité littéraire.`,
    mainWorks: ["Le Rouge et le Noir", "La Chartreuse de Parme", "De l'Amour", "Vie de Henry Brulard", "Lucien Leuwen"],
    keyIdeas: ["Beylisme", "Cristallisation", "Égotisme", "Analyse psychologique"],
  },
  {
    id: "flaubert",
    name: "Gustave Flaubert",
    birthYear: 1821,
    deathYear: 1880,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gustave_Flaubert.jpg?width=220",
    nationality: "Français",
    movement: "Réalisme",
    family: "Réalisme & naturalisme",
    influences: ["rabelais", "cervantes", "balzac"],
    summary: `Gustave Flaubert naît à Rouen, fils du chirurgien-chef de l'Hôtel-Dieu. Une crise nerveuse le dispense d'études de droit et lui permet de se consacrer à l'écriture. Installé à Croisset près de Rouen, il mène une vie monastique vouée au travail littéraire.

Madame Bovary (1857), récit des illusions et de la déchéance d'une femme de province, lui vaut un procès pour outrage aux mœurs, dont il est acquitté. Le roman révolutionne la technique narrative par son style impersonnel et sa précision documentaire.

Flaubert travaille avec une lenteur obsessionnelle, cherchant le "mot juste", poussant chaque phrase au "gueuloir" - les lisant à voix haute pour en éprouver le rythme. Salammbô, L'Éducation sentimentale, Trois Contes et l'inachevé Bouvard et Pécuchet témoignent de cette exigence absolue.

Ami de Tourgueniev, Zola, Maupassant qu'il forme, Flaubert incarne l'artiste moderne, sacrifiant tout à son art. Il meurt à Croisset d'une hémorragie cérébrale. Son influence sur le roman moderne est fondamentale : il invente l'impersonnalité du narrateur et fait de la forme l'enjeu suprême de la littérature.`,
    mainWorks: ["Madame Bovary", "L'Éducation sentimentale", "Salammbô", "Trois Contes", "Bouvard et Pécuchet"],
    keyIdeas: ["Style impersonnel", "Mot juste", "Réalisme documentaire", "Art pour l'art"],
  },
  {
    id: "baudelaire",
    name: "Charles Baudelaire",
    birthYear: 1821,
    deathYear: 1867,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%89tienne_Carjat%2C_Portrait_of_Charles_Baudelaire%2C_circa_1862.jpg?width=220",
    nationality: "Français",
    movement: "Symbolisme",
    family: "Symbolisme & esthétisme",
    influences: ["hugo"],
    summary: `Charles Baudelaire naît à Paris. Orphelin de père à six ans, il souffre du remariage de sa mère avec le commandant Aupick. Après une adolescence rebelle et un voyage forcé vers les Indes interrompu à l'île Maurice, il dilapide son héritage et mène une vie de dandy marginal.

Les Fleurs du Mal (1857), son unique recueil, est condamné pour outrage aux bonnes mœurs. Six poèmes sont censurés. Mais ce scandale consacre l'œuvre la plus influente de la poésie moderne, où se mêlent spleen et idéal, beauté et laideur, modernité urbaine et aspirations spirituelles.

Baudelaire renouvelle profondément la poésie par sa théorie des correspondances, son exploration du mal et de la beauté, son attention à la vie moderne. Critique d'art visionnaire, traducteur de Poe, il définit aussi l'esthétique de la modernité dans Le Peintre de la vie moderne.

Ruiné, malade, rongé par la syphilis, Baudelaire s'exile en Belgique où il est frappé d'hémiplégie. Ramené à Paris, il meurt aphasique à quarante-six ans. Mallarmé, Rimbaud, Verlaine, les symbolistes puis les surréalistes le reconnaissent comme leur maître. Il reste le poète central de la modernité.`,
    mainWorks: ["Les Fleurs du Mal", "Petits Poèmes en prose", "Les Paradis artificiels", "Curiosités esthétiques", "L'Art romantique"],
    keyIdeas: ["Spleen et Idéal", "Correspondances", "Modernité", "Beauté du mal"],
  },
  {
    id: "dostoievski",
    name: "Fiodor Dostoïevski",
    birthYear: 1821,
    deathYear: 1881,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg?width=220",
    nationality: "Russe",
    movement: "Réalisme psychologique",
    family: "Réalisme & naturalisme",
    influences: ["balzac", "hugo", "dickens"],
    summary: `Fiodor Mikhaïlovitch Dostoïevski naît à Moscou dans une famille de petite noblesse. Son père, médecin tyrannique, est assassiné par ses serfs. Cette violence originelle marque profondément son œuvre. Après des études d'ingénieur militaire, il se consacre à la littérature.

En 1849, arrêté pour activités révolutionnaires, il est condamné à mort puis gracié au dernier moment sur l'échafaud. Quatre ans de bagne en Sibérie, suivis de cinq ans de service militaire, transforment sa vision du monde. Il en tire Souvenirs de la maison des morts.

De retour à Saint-Pétersbourg, il publie ses grands romans : Crime et Châtiment, L'Idiot, Les Démons, Les Frères Karamazov. Ces œuvres explorent les profondeurs de l'âme humaine, le combat du bien et du mal, la liberté, la foi, la culpabilité. Ses personnages hallucinés préfigurent la psychanalyse.

Joueur compulsif, épileptique, Dostoïevski mène une vie tourmentée. Il meurt à Saint-Pétersbourg, salué comme le plus grand écrivain russe vivant. Son influence sur la littérature du XXe siècle est immense : Freud, Kafka, Camus, Sartre reconnaissent leur dette envers lui.`,
    mainWorks: ["Crime et Châtiment", "Les Frères Karamazov", "L'Idiot", "Les Démons", "Les Nuits blanches", "Le Joueur"],
    keyIdeas: ["Profondeur psychologique", "Dualité du bien et du mal", "Foi et doute", "Liberté et culpabilité"],
  },
  {
    id: "tolstoi",
    name: "Léon Tolstoï",
    birthYear: 1828,
    deathYear: 1910,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/L.N.Tolstoy_Prokudin-Gorsky.jpg?width=220",
    nationality: "Russe",
    movement: "Réalisme",
    family: "Réalisme & naturalisme",
    influences: ["stendhal", "dickens", "hugo"],
    summary: `Léon Nikolaïevitch Tolstoï naît à Iasnaïa Poliana dans une famille de vieille noblesse. Orphelin jeune, il mène une jeunesse dissolue avant de s'engager dans l'armée au Caucase. Ses premiers récits, fondés sur ses expériences militaires, révèlent un talent exceptionnel.

Guerre et Paix (1869) et Anna Karénine (1877) sont considérés comme les sommets du roman réaliste. Le premier reconstitue l'épopée napoléonienne à travers le destin de familles aristocratiques ; le second analyse la passion adultère et les conventions sociales avec une pénétration inégalée.

Après une crise spirituelle vers cinquante ans, Tolstoï rejette l'Église et la civilisation moderne pour prôner un christianisme primitif fondé sur la non-violence et la simplicité. Excommunié, il devient une figure mondiale, correspondant avec Gandhi et influençant le pacifisme moderne.

Vivant en conflit croissant avec sa femme qui refuse ses idées de renoncement à la propriété, Tolstoï s'enfuit de chez lui à quatre-vingt-deux ans et meurt dans une gare. Ses funérailles rassemblent des milliers de personnes. Il reste l'une des consciences morales les plus influentes de l'histoire.`,
    mainWorks: ["Guerre et Paix", "Anna Karénine", "La Mort d'Ivan Ilitch", "Résurrection", "Les Cosaques"],
    keyIdeas: ["Réalisme épique", "Non-violence", "Simplicité", "Quête spirituelle"],
  },
  {
    id: "dickens",
    name: "Charles Dickens",
    birthYear: 1812,
    deathYear: 1870,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dickens_Gurney_head.jpg?width=220",
    nationality: "Anglais",
    movement: "Réalisme victorien",
    family: "Réalisme & naturalisme",
    influences: ["cervantes"],
    summary: `Charles Dickens naît à Portsmouth dans une famille modeste. L'emprisonnement de son père pour dettes le force à travailler enfant dans une fabrique de cirage, expérience traumatisante qui nourrit son œuvre. Devenu journaliste, il publie Les Aventures de M. Pickwick (1836) qui le rendent célèbre à vingt-quatre ans.

Dickens publie ses romans en feuilletons mensuels, créant un suspense qui passionne l'Angleterre entière. Oliver Twist, David Copperfield, Bleak House, Les Grandes Espérances combinent critique sociale et mélodrame, réalisme et sentimentalisme, humour et pathos.

Infatigable réformateur social, Dickens dénonce la pauvreté, l'exploitation des enfants, les prisons pour dettes, la bureaucratie. Ses personnages, souvent caricaturaux mais inoubliables - Scrooge, Fagin, Miss Havisham - sont entrés dans l'imaginaire collectif.

Dickens mène également une carrière d'éditeur de presse et de lecteur public, donnant des tournées triomphales en Angleterre et aux États-Unis. Il meurt d'une attaque cérébrale, laissant Edwin Drood inachevé. Enterré à l'abbaye de Westminster, il reste l'écrivain anglais le plus populaire après Shakespeare.`,
    mainWorks: ["Oliver Twist", "David Copperfield", "Les Grandes Espérances", "Un Conte de deux villes", "Bleak House", "Un Chant de Noël"],
    keyIdeas: ["Critique sociale", "Enfance maltraitée", "Rédemption", "Sentimentalisme"],
  },
  {
    id: "zola",
    name: "Émile Zola",
    birthYear: 1840,
    deathYear: 1902,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Emile_Zola_1902.jpg?width=220",
    nationality: "Français",
    movement: "Naturalisme",
    family: "Réalisme & naturalisme",
    influences: ["balzac", "flaubert"],
    summary: `Émile Zola naît à Paris mais grandit à Aix-en-Provence où son père, ingénieur italien, meurt prématurément. La famille connaît des difficultés financières. Monté à Paris, Zola travaille chez Hachette avant de se lancer dans le journalisme et la littérature.

Il élabore la doctrine naturaliste, appliquant au roman les méthodes des sciences expérimentales. Les Rougon-Macquart, "histoire naturelle et sociale d'une famille sous le Second Empire", comprend vingt romans écrits entre 1871 et 1893, de La Fortune des Rougon à Germinal et à L'Assommoir.

Zola explore méthodiquement tous les milieux sociaux : paysans, mineurs, ouvriers, bourgeois, artistes, prostituées. Son écriture puissante, sa documentation minutieuse, son attention aux forces qui déterminent l'individu fondent le roman naturaliste et influencent toute la littérature occidentale.

En 1898, son article "J'accuse...!" en défense de Dreyfus le contraint à l'exil mais fait de lui l'incarnation de l'intellectuel engagé. Il meurt asphyxié dans des circonstances suspectes. Ses cendres sont transférées au Panthéon en 1908.`,
    mainWorks: ["Germinal", "L'Assommoir", "Nana", "La Bête humaine", "Au Bonheur des Dames", "J'accuse...!"],
    keyIdeas: ["Naturalisme", "Hérédité", "Milieu social", "Engagement intellectuel"],
  },
  {
    id: "maupassant",
    name: "Guy de Maupassant",
    birthYear: 1850,
    deathYear: 1893,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Guy_de_Maupassant_fotograferad_av_F%C3%A9lix_Nadar_1888.jpg?width=220",
    nationality: "Français",
    movement: "Naturalisme / Réalisme",
    family: "Réalisme & naturalisme",
    influences: ["flaubert", "zola"],
    summary: `Guy de Maupassant naît en Normandie dans une famille de petite noblesse. Élève de Flaubert, ami de sa mère, il reçoit une formation littéraire exigeante. Après la guerre de 1870 et dix ans de fonctionnariat, il débute brillamment avec Boule de Suif (1880) dans les Soirées de Médan.

En dix ans, Maupassant produit une œuvre considérable : six romans, dont Une Vie, Bel-Ami et Pierre et Jean, et près de trois cents nouvelles. Maître de la forme brève, il excelle à saisir en quelques pages un caractère, une situation, une chute cruelle.

Ses nouvelles normandes peignent le monde paysan avec un réalisme impitoyable. Ses récits parisiens décrivent l'arrivisme et la médiocrité bourgeoise. Le fantastique - Le Horla - traduit l'angoisse d'un esprit que mine la syphilis héréditaire.

Devenu riche et célèbre, Maupassant s'enfonce dans la folie. Après une tentative de suicide, il est interné et meurt à quarante-deux ans dans une maison de santé. Son art de la nouvelle, sa prose limpide et son pessimisme lucide en font un classique universel, admiré de Tolstoï à Borges.`,
    mainWorks: ["Boule de Suif", "Bel-Ami", "Une Vie", "Le Horla", "Pierre et Jean", "Contes de la bécasse"],
    keyIdeas: ["Nouvelle", "Réalisme normand", "Pessimisme", "Fantastique psychologique"],
  },
  {
    id: "rimbaud",
    name: "Arthur Rimbaud",
    birthYear: 1854,
    deathYear: 1891,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rimbaud.PNG?width=220",
    nationality: "Français",
    movement: "Symbolisme",
    family: "Symbolisme & esthétisme",
    influences: ["baudelaire"],
    summary: `Arthur Rimbaud naît à Charleville dans une famille modeste. Élève brillant, il fugue plusieurs fois et commence à écrire des poèmes d'une maturité stupéfiante. À seize ans, il envoie ses vers à Verlaine qui l'invite à Paris : "Venez, chère grande âme".

La relation tumultueuse entre les deux poètes s'achève par un coup de revolver. Rimbaud compose alors Une Saison en enfer et les Illuminations, poèmes en prose d'une modernité radicale. "Je est un autre", "le dérèglement de tous les sens" : ses formules fondent la poésie moderne.

À dix-neuf ans, Rimbaud abandonne définitivement la littérature. Il parcourt l'Europe à pied, s'engage dans l'armée coloniale hollandaise, travaille dans une carrière à Chypre, puis s'installe en Éthiopie comme négociant. Ce silence littéraire fascine autant que son œuvre fulgurante.

Atteint d'une tumeur au genou, Rimbaud rentre en France où on l'ampute. Il meurt à Marseille à trente-sept ans, peut-être converti sur son lit de mort. Son œuvre, publiée et diffusée après sa mort, influence profondément le surréalisme et toute la poésie du XXe siècle.`,
    mainWorks: ["Une Saison en enfer", "Illuminations", "Poésies", "Lettre du Voyant", "Le Bateau ivre"],
    keyIdeas: ["Voyance poétique", "Dérèglement des sens", "Alchimie du verbe", "Renoncement"],
  },
  {
    id: "wilde",
    name: "Oscar Wilde",
    birthYear: 1854,
    deathYear: 1900,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Oscar_Wilde_portrait.jpg?width=220",
    nationality: "Irlandais",
    movement: "Esthétisme",
    family: "Symbolisme & esthétisme",
    influences: ["baudelaire"],
    summary: `Oscar Wilde naît à Dublin dans une famille intellectuelle. Brillant étudiant à Oxford, il devient l'apôtre de l'esthétisme, prônant que l'art est sa propre fin. Son esprit étincelant, ses bons mots et son élégance provocante en font la célébrité de Londres victorien.

Ses comédies - L'Éventail de Lady Windermere, L'Importance d'être Constant - satirisent avec brio l'hypocrisie de la haute société. Le Portrait de Dorian Gray explore les rapports entre beauté, morale et corruption. Ses contes et son essai Le Déclin du mensonge illustrent son esthétique paradoxale.

Au sommet de sa gloire, Wilde poursuit le marquis de Queensberry pour diffamation, déclenchant un scandale qui le mène en prison pour "gross indecency". Deux ans de travaux forcés le brisent. De Profundis, lettre écrite en prison, témoigne de cette chute.

Libéré et ruiné, Wilde s'exile à Paris sous un faux nom. Il meurt dans un hôtel miteux à quarante-six ans, peut-être converti au catholicisme. Longtemps occulté par le scandale, son œuvre est aujourd'hui célébrée pour son intelligence, son humanité et sa modernité.`,
    mainWorks: ["Le Portrait de Dorian Gray", "L'Importance d'être Constant", "De Profundis", "La Ballade de la geôle de Reading", "Le Fantôme de Canterville"],
    keyIdeas: ["Esthétisme", "Art pour l'art", "Paradoxe", "Dandysme"],
  },
  {
    id: "proust",
    name: "Marcel Proust",
    birthYear: 1871,
    deathYear: 1922,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Marcel_Proust_1900.jpg?width=220",
    nationality: "Français",
    movement: "Modernisme",
    family: "XXe siècle",
    influences: ["balzac", "flaubert", "baudelaire"],
    summary: `Marcel Proust naît à Auteuil dans une famille de la haute bourgeoisie. Son père est médecin, sa mère issue d'une famille juive alsacienne. Asthmatique dès l'enfance, il est profondément attaché à sa mère dont la mort en 1905 le marquera à jamais.

Mondain brillant dans sa jeunesse, chroniqueur pour Le Figaro, Proust se retire progressivement du monde après 1909. Dans sa chambre tapissée de liège, il se consacre entièrement à son œuvre, écrivant la nuit, dormant le jour, corrigeant inlassablement ses épreuves.

À la recherche du temps perdu, publié de 1913 à 1927, est une cathédrale romanesque de sept volumes et plus de 3 000 pages. La mémoire involontaire - la fameuse madeleine - permet de retrouver le temps perdu et de transmuer la vie en œuvre d'art.

Proust révolutionne le roman par sa phrase sinueuse, son analyse psychologique d'une finesse inégalée, sa méditation sur le temps, la mémoire et l'art. Le Prix Goncourt pour À l'ombre des jeunes filles en fleurs (1919) consacre son génie. Il meurt à Paris, laissant les derniers volumes à réviser.`,
    mainWorks: ["Du côté de chez Swann", "À l'ombre des jeunes filles en fleurs", "Le Côté de Guermantes", "Le Temps retrouvé"],
    keyIdeas: ["Mémoire involontaire", "Temps perdu", "Mondanité", "Art rédempteur"],
  },
  {
    id: "kafka",
    name: "Franz Kafka",
    birthYear: 1883,
    deathYear: 1924,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kafka_portrait.jpg?width=220",
    nationality: "Austro-hongrois",
    movement: "Modernisme / Expressionnisme",
    family: "XXe siècle",
    influences: ["flaubert", "dickens", "dostoievski"],
    summary: `Franz Kafka naît à Prague dans une famille juive de langue allemande. Dominé par son père, commerçant autoritaire, il étudie le droit et travaille dans une compagnie d'assurances. Il écrit la nuit, menant une double vie entre bureau et littérature.

La Métamorphose, Le Procès, Le Château développent un univers où l'individu affronte des puissances absurdes et écrasantes. L'écriture de Kafka, d'une clarté trompeuse, décrit des situations cauchemardesques avec une précision bureaucratique qui en renforce l'étrangeté.

Kafka publie peu de son vivant et demande à son ami Max Brod de brûler ses manuscrits après sa mort. Brod désobéit et publie les romans inachevés, révélant au monde une œuvre prophétique qui anticipe les totalitarismes et l'angoisse moderne.

Tuberculeux, Kafka meurt près de Vienne à quarante ans, peu après avoir trouvé l'amour auprès de Dora Diamant. L'adjectif "kafkaïen" est entré dans toutes les langues pour décrire l'absurdité bureaucratique. Ses trois sœurs mourront à Auschwitz.`,
    mainWorks: ["La Métamorphose", "Le Procès", "Le Château", "La Colonie pénitentiaire", "Lettre au père"],
    keyIdeas: ["Absurde", "Aliénation", "Bureaucratie", "Culpabilité"],
  },
  {
    id: "joyce",
    name: "James Joyce",
    birthYear: 1882,
    deathYear: 1941,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Revolutionary_Joyce_Better_Contrast.jpg?width=220",
    nationality: "Irlandais",
    movement: "Modernisme",
    family: "XXe siècle",
    influences: ["homere", "dante", "flaubert"],
    summary: `James Joyce naît à Dublin dans une famille catholique nombreuse dont la situation financière se dégrade. Brillant élève des jésuites, il rompt avec l'Irlande, l'Église et le nationalisme pour s'exiler à Trieste, Zurich puis Paris, ne revenant jamais dans son pays natal.

Dubliners et Portrait de l'artiste en jeune homme établissent sa réputation d'innovateur. Mais c'est Ulysse (1922), récit d'une journée à Dublin calqué sur l'Odyssée, qui révolutionne le roman. Le monologue intérieur de Molly Bloom et les expérimentations formelles de chaque chapitre ouvrent des voies inédites.

Finnegans Wake (1939), œuvre-limite écrite dans une langue inventée mêlant des dizaines d'idiomes, pousse l'expérimentation à son terme. Joyce travaille dans une semi-cécité, soutenu par des mécènes et des amis dévoués.

Mort à Zurich lors de la Seconde Guerre mondiale, Joyce est enterré dans le cimetière de Fluntern. Son influence sur le roman du XXe siècle est immense : Faulkner, Beckett, le nouveau roman lui doivent des techniques essentielles. Dublin célèbre désormais le Bloomsday chaque 16 juin.`,
    mainWorks: ["Ulysse", "Dubliners", "Portrait de l'artiste en jeune homme", "Finnegans Wake"],
    keyIdeas: ["Monologue intérieur", "Mythologie moderne", "Expérimentation formelle", "Exil"],
  },
  {
    id: "hemingway",
    name: "Ernest Hemingway",
    birthYear: 1899,
    deathYear: 1961,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ernest_Hemingway_1923_passport_photo.jpg?width=220",
    nationality: "Américain",
    movement: "Lost Generation",
    family: "XXe siècle",
    influences: ["flaubert", "maupassant", "tolstoi"],
    summary: `Ernest Hemingway naît dans l'Illinois. Ambulancier blessé en Italie pendant la Première Guerre mondiale, il devient journaliste à Paris dans les années 1920, fréquentant Gertrude Stein, Fitzgerald et la "génération perdue". Le Soleil se lève aussi et L'Adieu aux armes le rendent célèbre.

Son style dépouillé, fait de phrases courtes et de dialogues tendus, rompt avec la tradition littéraire. La "théorie de l'iceberg" : l'essentiel reste sous la surface, suggéré plutôt qu'explicité. Cette écriture influence toute la littérature américaine ultérieure.

Hemingway vit intensément : corridas en Espagne, safaris en Afrique, pêche au gros à Cuba, correspondant de guerre en Espagne puis en Europe. Pour qui sonne le glas, Le Vieil Homme et la Mer illustrent ses thèmes : courage, endurance, dignité face à la défaite.

Prix Nobel de littérature en 1954, Hemingway souffre de dépression et de troubles physiques. Il se suicide à Ketchum, Idaho. Son image de virilité masquait une sensibilité profonde. Son œuvre, traduite dans le monde entier, incarne un idéal de prose moderne.`,
    mainWorks: ["Le Vieil Homme et la Mer", "L'Adieu aux armes", "Pour qui sonne le glas", "Le Soleil se lève aussi", "Paris est une fête"],
    keyIdeas: ["Style dépouillé", "Théorie de l'iceberg", "Grâce sous pression", "Lost Generation"],
  },
  {
    id: "camus",
    name: "Albert Camus",
    birthYear: 1913,
    deathYear: 1960,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg?width=220",
    nationality: "Français",
    movement: "Absurde / Existentialisme",
    family: "XXe siècle",
    influences: ["dostoievski", "kafka"],
    summary: `Albert Camus naît à Mondovi en Algérie dans un milieu très pauvre. Son père meurt à la guerre de 1914. Élève boursier brillant, il étudie la philosophie à Alger. La tuberculose l'empêche de passer l'agrégation mais ne freine pas son activité de journaliste et d'homme de théâtre.

L'Étranger (1942) et Le Mythe de Sisyphe fondent sa philosophie de l'absurde : la vie n'a pas de sens donné, mais l'homme peut et doit se révolter contre cette condition. "Il faut imaginer Sisyphe heureux." La Peste, allégorie de l'Occupation, célèbre la solidarité humaine face au mal.

L'Homme révolté (1951) provoque sa rupture avec Sartre et les marxistes. Camus refuse le terrorisme révolutionnaire au nom d'une éthique de la mesure. Déchiré par la guerre d'Algérie, il défend une solution fédérale qui lui vaut l'hostilité de tous les camps.

Prix Nobel de littérature en 1957 à quarante-quatre ans, Camus meurt trois ans plus tard dans un accident de voiture. Intellectuel engagé mais allergique aux idéologies, artiste exigeant, il incarne une morale de l'honnêteté et de la mesure qui continue de résonner.`,
    mainWorks: ["L'Étranger", "La Peste", "Le Mythe de Sisyphe", "L'Homme révolté", "La Chute", "Les Justes"],
    keyIdeas: ["Absurde", "Révolte", "Mesure", "Solidarité humaine"],
  },
  {
    id: "beckett",
    name: "Samuel Beckett",
    birthYear: 1906,
    deathYear: 1989,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Samuel_Beckett%2C_Pic%2C_1.jpg?width=220",
    nationality: "Irlandais",
    movement: "Théâtre de l'absurde",
    family: "XXe siècle",
    influences: ["dante", "proust", "joyce"],
    summary: `Samuel Beckett naît à Dublin dans une famille protestante aisée. Après des études brillantes au Trinity College, il enseigne l'anglais à Paris où il rencontre Joyce dont il devient proche. Après des années d'errance, il s'installe définitivement en France.

Pendant la guerre, Beckett participe à la Résistance. Après 1945, il écrit directement en français, trouvant dans cette langue étrangère une distance propice à son style dépouillé. Molloy, Malone meurt et L'Innommable forment une trilogie romanesque radicale.

En attendant Godot (1953) révolutionne le théâtre. Deux clochards attendent un Godot qui ne vient jamais, dans un espace nu où le langage tourne à vide. Fin de partie, Oh les beaux jours poursuivent cette exploration du vide existentiel avec un humour sombre et une compassion profonde.

Prix Nobel de littérature en 1969, Beckett reste discret, refusant interviews et honneurs. Son œuvre, de plus en plus minimale, tend vers le silence. Il meurt à Paris, peu après sa femme. Son théâtre, joué dans le monde entier, a redéfini les possibilités de la scène moderne.`,
    mainWorks: ["En attendant Godot", "Fin de partie", "Oh les beaux jours", "Molloy", "L'Innommable", "Cap au pire"],
    keyIdeas: ["Absurde", "Attente", "Dépouillement", "Échec"],
  },
  {
    id: "garcia-marquez",
    name: "Gabriel García Márquez",
    birthYear: 1927,
    deathYear: 2014,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gabriel_Garcia_Marquez.jpg?width=220",
    nationality: "Colombien",
    movement: "Réalisme magique",
    family: "XXe siècle",
    influences: ["kafka", "hemingway"],
    summary: `Gabriel García Márquez naît à Aracataca, village de la côte caraïbe colombienne. Élevé par ses grands-parents, il est nourri de légendes et d'histoires fabuleuses. Journaliste à Bogota, Cartagena et Paris, il s'intéresse au cinéma et milite pour les causes de gauche.

Cent ans de solitude (1967) le révèle au monde entier. Cette saga de la famille Buendía dans le village imaginaire de Macondo mêle l'histoire de la Colombie, les mythes bibliques et le merveilleux quotidien. Le "réalisme magique" devient l'emblème de la littérature latino-américaine.

L'Automne du patriarche, Chronique d'une mort annoncée, L'Amour aux temps du choléra confirment sa maîtrise du roman. García Márquez combine une prose lyrique et sensuelle avec une conscience politique aiguë, ami de Fidel Castro et défenseur des causes populaires.

Prix Nobel de littérature en 1982, "Gabo" reste l'écrivain latino-américain le plus célèbre. Ses mémoires, Vivre pour la raconter, évoquent son enfance magique. Il meurt à Mexico, pleuré par un continent entier. Son œuvre a transformé le regard du monde sur l'Amérique latine.`,
    mainWorks: ["Cent ans de solitude", "L'Amour aux temps du choléra", "Chronique d'une mort annoncée", "L'Automne du patriarche", "Vivre pour la raconter"],
    keyIdeas: ["Réalisme magique", "Macondo", "Solitude", "Amérique latine"],
  },
  {
    id: "borges",
    name: "Jorge Luis Borges",
    birthYear: 1899,
    deathYear: 1986,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jorge_Luis_Borges_1951%2C_by_Grete_Stern.jpg?width=220",
    nationality: "Argentin",
    movement: "Postmodernisme",
    family: "XXe siècle",
    influences: ["cervantes", "kafka"],
    summary: `Jorge Luis Borges naît à Buenos Aires dans une famille cultivée, bilingue anglais-espagnol. Il passe son adolescence en Suisse pendant la guerre, découvrant les littératures européennes. De retour en Argentine, il devient une figure centrale de l'avant-garde poétique.

Ses recueils de nouvelles - Fictions, L'Aleph, Le Livre de sable - explorent des labyrinthes métaphysiques : bibliothèques infinies, livres impossibles, temps circulaire, doubles, univers parallèles. Ces fictions brèves, d'une précision intellectuelle vertigineuse, renouvellent le genre.

Bibliothécaire puis directeur de la Bibliothèque nationale, Borges perd progressivement la vue, comme son père avant lui. Cette cécité nourrit son œuvre de références au livre et à la mémoire. Ses conférences et entretiens témoignent d'une érudition encyclopédique et d'un humour discret.

Borges n'a jamais reçu le Nobel, probablement pour des raisons politiques. Il meurt à Genève, ville aimée de sa jeunesse. Son influence sur la littérature mondiale est immense : Eco, Calvino, le postmodernisme lui doivent des thèmes et des procédés essentiels.`,
    mainWorks: ["Fictions", "L'Aleph", "Le Livre de sable", "L'Auteur et autres textes", "Histoire de l'infamie, histoire de l'éternité"],
    keyIdeas: ["Labyrinthe", "Infini", "Bibliothèque", "Doubles et miroirs"],
  },
];
