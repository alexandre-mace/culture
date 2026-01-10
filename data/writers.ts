export interface Writer {
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

export const writers: Writer[] = [
  {
    id: "homere",
    name: "Homere",
    birthYear: -800,
    deathYear: -701,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Homer_British_Museum.jpg?width=220",
    nationality: "Grec",
    movement: "Epopee antique",
    summary: `Homere est le poete epique grec auquel la tradition attribue la composition de l'Iliade et de l'Odyssee, les deux plus grandes epopees de la litterature occidentale. Son existence historique reste debattue, certains chercheurs suggerant qu'il s'agit d'une figure legendaire representant une tradition orale collective.

L'Iliade raconte un episode de la guerre de Troie, centree sur la colere d'Achille, tandis que l'Odyssee narre le perilleux retour d'Ulysse vers Ithaque apres la guerre. Ces deux oeuvres fondatrices ont etabli les conventions du genre epique et influence toute la litterature occidentale.

Homere a developpe des techniques narratives sophistiquees comme l'invocation a la Muse, les epithetes formulaires et les comparaisons epiques. Son traitement des themes universels - l'honneur, la guerre, le destin, l'amour, la ruse - continue de resonner a travers les siecles.

Son influence sur la culture grecque etait immense : ses oeuvres servaient de base a l'education et etaient recitees lors des festivals. Platon et Aristote le citent abondamment, et son heritage se retrouve chez Virgile, Dante, Joyce et d'innombrables autres auteurs.`,
    mainWorks: ["L'Iliade", "L'Odyssee"],
    keyIdeas: ["Epopee", "Heros tragique", "Voyage initiatique", "Tradition orale"],
  },
  {
    id: "sophocle",
    name: "Sophocle",
    birthYear: -496,
    deathYear: -406,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sophocles_pushkin.jpg?width=220",
    nationality: "Grec",
    movement: "Tragedie grecque",
    summary: `Sophocle, ne a Colone pres d'Athenes, est l'un des trois grands tragiques grecs avec Eschyle et Euripide. Issu d'une famille aisee, il recoit une education complete et participe activement a la vie politique athenienne, occupant des fonctions militaires et religieuses.

Auteur de plus de 120 pieces, dont seulement 7 nous sont parvenues completes, il remporte de nombreuses victoires aux concours dramatiques. Ses innovations techniques incluent l'introduction d'un troisieme acteur et l'abandon de la trilogie liee au profit de tragedies independantes.

Son chef-d'oeuvre, Oedipe Roi, explore les themes du destin, de la connaissance de soi et de l'aveuglement moral. La figure d'Antigone, dans la piece eponyme, incarne le conflit entre la loi divine et la loi humaine, entre conscience individuelle et autorite politique.

Sophocle a perfectionne la structure de la tragedie attique et approfondi la psychologie des personnages. Son exploration du heros tragique, pris entre liberte et fatalite, a profondement influence la philosophie et la litterature, d'Aristote a Freud qui nomma le "complexe d'Oedipe".`,
    mainWorks: ["Oedipe Roi", "Antigone", "Electre", "Oedipe a Colone", "Ajax", "Les Trachiniennes"],
    keyIdeas: ["Tragedie", "Destin", "Hubris", "Conflit moral"],
  },
  {
    id: "virgile",
    name: "Virgile",
    birthYear: -70,
    deathYear: -19,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vergil.mosaic.jpg?width=220",
    nationality: "Romain",
    movement: "Poesie latine classique",
    summary: `Publius Vergilius Maro, dit Virgile, nait pres de Mantoue dans une famille modeste. Il etudie la rhetorique et la philosophie a Rome et Naples, se liant avec les cercles intellectuels proches d'Auguste. Sa jeunesse est marquee par les guerres civiles qui devastent l'Italie.

Les Bucoliques, poemes pastoraux inspires de Theocrite, lui valent une premiere reconnaissance. Les Georgiques, traite poetique sur l'agriculture, celebrent le travail de la terre et les valeurs rurales traditionnelles, repondant au programme de restauration morale d'Auguste.

L'Eneide, son oeuvre majeure inachevee, raconte les peripeties d'Enee fuyant Troie pour fonder Rome. Cette epopee nationale romaine dialogue avec Homere tout en proposant une vision providentielle de l'histoire, legitimant le pouvoir augusteen.

Virgile meurt a Brindes avant d'avoir pu reviser son chef-d'oeuvre, qu'il voulait bruler. Auguste fait publier l'Eneide qui devient immediatement un classique. Au Moyen Age, Virgile est venere comme un prophete prechretien, et Dante en fait son guide dans la Divine Comedie.`,
    mainWorks: ["L'Eneide", "Les Bucoliques", "Les Georgiques"],
    keyIdeas: ["Epopee nationale", "Pietas", "Destin imperial", "Pastorale"],
  },
  {
    id: "ovide",
    name: "Ovide",
    birthYear: -43,
    deathYear: 17,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ovid_by_Anton_von_Werner.jpg?width=220",
    nationality: "Romain",
    movement: "Poesie latine classique",
    summary: `Publius Ovidius Naso nait a Sulmone dans une famille de chevaliers. Destine a une carriere juridique, il abandonne le barreau pour se consacrer entierement a la poesie. Il devient rapidement le poete le plus celebre de Rome, maitre de l'elegie amoureuse.

Les Amours et L'Art d'aimer, poemes erotiques spirituels et ironiques, font scandale dans la Rome d'Auguste qui prone un retour aux valeurs morales traditionnelles. Ces oeuvres temoignent d'une maitrise virtuose du vers et d'un esprit mordant.

Les Metamorphoses, son chef-d'oeuvre, rassemblent 250 recits mythologiques lies par le theme de la transformation. Ce poeme epique en quinze livres constitue une somme de la mythologie greco-romaine, du chaos originel a l'apotheose de Jules Cesar.

En l'an 8, Ovide est exile par Auguste a Tomes sur la mer Noire, pour des raisons obscures liees a un "poeme et une erreur". Il y meurt sans avoir pu revenir a Rome. Son influence sur la litterature et l'art occidentaux est immense, des troubadours a Shakespeare et Picasso.`,
    mainWorks: ["Les Metamorphoses", "L'Art d'aimer", "Les Amours", "Les Heroides", "Les Tristes"],
    keyIdeas: ["Metamorphose", "Mythologie", "Elegie amoureuse", "Ironie"],
  },
  {
    id: "dante",
    name: "Dante Alighieri",
    birthYear: 1265,
    deathYear: 1321,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_de_Dante.jpg?width=220",
    nationality: "Italien",
    movement: "Dolce stil novo",
    summary: `Dante Alighieri nait a Florence dans une famille de petite noblesse guelfe. Sa rencontre avec Beatrice Portinari a l'age de neuf ans marque profondement sa vie et son oeuvre. Il recoit une education soignee, etudiant la philosophie, la theologie et la poesie.

La Vita Nuova, recueil de poemes et de prose, raconte son amour idealise pour Beatrice et inaugure le "dolce stil novo". Apres la mort de Beatrice en 1290, Dante se tourne vers la philosophie et s'engage dans la politique florentine, devenant prieur.

En 1302, le triomphe des Guelfes noirs le condamne a l'exil. Il ne reviendra jamais a Florence. C'est durant cet exil qu'il compose la Divine Comedie, voyage allegorique a travers l'Enfer, le Purgatoire et le Paradis, guide successivement par Virgile et Beatrice.

La Divine Comedie, ecrite en langue vulgaire toscane plutot qu'en latin, fonde la litterature italienne moderne. Cette somme theologique et poetique offre une vision complete de l'univers medieval tout en exprimant une sensibilite profondement humaine. Dante meurt a Ravenne, ou il est toujours enterre.`,
    mainWorks: ["La Divine Comedie", "La Vita Nuova", "Le Banquet", "De Monarchia"],
    keyIdeas: ["Voyage allegorique", "Amour spirituel", "Langue vulgaire", "Vision cosmique"],
  },
  {
    id: "rabelais",
    name: "Francois Rabelais",
    birthYear: 1494,
    deathYear: 1553,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Francois_Rabelais_-_Portrait.jpg?width=220",
    nationality: "Francais",
    movement: "Humanisme Renaissance",
    summary: `Francois Rabelais nait pres de Chinon dans une famille de la bourgeoisie. Moine franciscain puis benedictin, il etudie le grec et le droit avant de se tourner vers la medecine. Il devient medecin a Lyon, alors centre de l'imprimerie et de l'humanisme.

En 1532, il publie Pantagruel sous le pseudonyme d'Alcofribas Nasier, anagramme de son nom. Le succes est immediat malgre la condamnation de la Sorbonne. Gargantua suit en 1534, puis les trois autres livres de la geste des geants.

Son oeuvre combine culture savante et tradition populaire, erudition humaniste et verve carnavalesque. Derriere la farce rabelaisienne se cache une reflexion sur l'education, la guerre, la religion et la nature humaine. L'abbaye de Theleme incarne son ideal humaniste : "Fay ce que vouldras".

Rabelais cree un style unique, melant neologismes, jeux de mots, accumulations verbales et references erudites. Son influence sur la langue francaise est considerable. Protege par les Du Bellay, il meurt a Paris apres une vie mouvementee entre faveur royale et condamnations ecclesiastiques.`,
    mainWorks: ["Gargantua", "Pantagruel", "Tiers Livre", "Quart Livre", "Cinquieme Livre"],
    keyIdeas: ["Humanisme", "Gigantisme", "Carnavalesque", "Liberte"],
  },
  {
    id: "shakespeare",
    name: "William Shakespeare",
    birthYear: 1564,
    deathYear: 1616,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shakespeare.jpg?width=220",
    nationality: "Anglais",
    movement: "Theatre elisabethain",
    summary: `William Shakespeare nait a Stratford-upon-Avon dans une famille de commercants. On sait peu de choses sur sa jeunesse et son education. Vers 1590, il s'installe a Londres ou il devient acteur et dramaturge, associe a la troupe du Lord Chamberlain puis des King's Men.

Son oeuvre theatrale couvre tous les genres : comedies brillantes (Le Songe d'une nuit d'ete, Beaucoup de bruit pour rien), tragedies profondes (Hamlet, Othello, Le Roi Lear, Macbeth), pieces historiques (Richard III, Henri V) et romances tardives (La Tempete).

Shakespeare explore avec une acuite inegalee les passions humaines : l'ambition, la jalousie, l'amour, la folie, le pouvoir. Ses personnages possedent une complexite psychologique sans precedent. Ses vers iambiques et sa prose ont enrichi la langue anglaise de centaines d'expressions encore utilisees.

Copropriétaire du Globe Theatre, Shakespeare connait le succes et la fortune de son vivant. Il se retire a Stratford vers 1613 et meurt trois ans plus tard. Son oeuvre, jouee sans interruption depuis quatre siecles, a influence toute la litterature occidentale et demeure universellement celebree.`,
    mainWorks: ["Hamlet", "Macbeth", "Othello", "Le Roi Lear", "Romeo et Juliette", "Le Songe d'une nuit d'ete", "La Tempete"],
    keyIdeas: ["Tragedie humaine", "Complexite psychologique", "Vers blank", "Theatre total"],
  },
  {
    id: "cervantes",
    name: "Miguel de Cervantes",
    birthYear: 1547,
    deathYear: 1616,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cervantes_J%C3%A1uregui.jpg?width=220",
    nationality: "Espagnol",
    movement: "Siecle d'or espagnol",
    summary: `Miguel de Cervantes Saavedra nait a Alcala de Henares dans une famille modeste de chirurgien itinerant. Sa jeunesse aventureuse le mene en Italie ou il s'engage comme soldat. A la bataille de Lepante (1571), il perd l'usage de la main gauche, d'ou son surnom de "manchot de Lepante".

Capture par des pirates barbaresques, il passe cinq ans en captivite a Alger, tentant plusieurs fois de s'evader. De retour en Espagne, il mene une existence difficile, travaillant comme commissaire aux vivres. Emprisonne pour irregularites comptables, c'est peut-etre en prison qu'il commence Don Quichotte.

La premiere partie de Don Quichotte parait en 1605 et connait un succes immediat dans toute l'Europe. Ce roman raconte les aventures d'un hidalgo devenu fou a force de lire des romans de chevalerie, qui part sur les routes avec son ecuyer Sancho Panza.

Don Quichotte est considere comme le premier roman moderne, melant parodie et profondeur, comique et melancolie. Le couple du chevalier idealiste et du paysan pragmatique incarne les tensions de la condition humaine. Cervantes meurt a Madrid un jour avant Shakespeare, pauvre mais celebre.`,
    mainWorks: ["Don Quichotte", "Nouvelles exemplaires", "Les Travaux de Persiles et Sigismonde", "Numance"],
    keyIdeas: ["Roman moderne", "Parodie", "Idealisme et realisme", "Folie et sagesse"],
  },
  {
    id: "moliere",
    name: "Moliere",
    birthYear: 1622,
    deathYear: 1673,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Moliere_-_Nicolas_Mignard_%281658%29.jpg?width=220",
    nationality: "Francais",
    movement: "Classicisme",
    summary: `Jean-Baptiste Poquelin, dit Moliere, nait a Paris dans une famille de tapissiers du roi. Apres de bonnes etudes chez les jesuites, il renonce a la charge paternelle pour fonder l'Illustre Theatre avec Madeleine Bejart. L'echec de cette entreprise l'entraine en province pour treize ans.

De retour a Paris en 1658, il obtient la protection de Monsieur, frere du roi, puis de Louis XIV lui-meme. Installe au Palais-Royal, il devient le maitre inconteste de la comedie, alternant farces, comedies-ballets et grandes comedies de caractere.

Ses chefs-d'oeuvre - Tartuffe, Dom Juan, Le Misanthrope, L'Avare - provoquent des scandales mais aussi l'admiration. Moliere attaque l'hypocrisie religieuse, la pretention nobiliaire, la pedanterie savante. Ses personnages, Harpagon, Alceste, Jourdain, sont devenus des types universels.

Acteur, directeur de troupe et auteur, Moliere meurt quelques heures apres avoir joue Le Malade imaginaire. L'Eglise lui refuse d'abord une sepulture chretienne. Son oeuvre, jouee sans discontinuer depuis 350 ans, fait de lui le plus grand auteur comique francais et l'un des piliers du repertoire mondial.`,
    mainWorks: ["Tartuffe", "Dom Juan", "Le Misanthrope", "L'Avare", "Le Bourgeois gentilhomme", "Les Femmes savantes", "Le Malade imaginaire"],
    keyIdeas: ["Comedie de caractere", "Satire sociale", "Castigat ridendo mores", "Theatre classique"],
  },
  {
    id: "racine",
    name: "Jean Racine",
    birthYear: 1639,
    deathYear: 1699,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jean_Racine.PNG?width=220",
    nationality: "Francais",
    movement: "Classicisme",
    summary: `Jean Racine nait a La Ferte-Milon, orphelin a quatre ans. Eleve par les jansenistes de Port-Royal, il recoit une formation humaniste exceptionnelle, notamment en grec. Cette education austere marquera profondement sa vision tragique du monde et de la passion.

Sa carriere dramatique debute en 1664 et culmine avec une serie de chefs-d'oeuvre : Andromaque, Britannicus, Berenice, Bajazet, Mithridate, Iphigenie et surtout Phedre (1677). Ses tragedies, fondees sur les modeles antiques, portent les passions humaines a une intensite inegalee.

L'alexandrin racinien atteint une perfection musicale absolue. Ses heroines - Andromaque, Berenice, Phedre - incarnent la fatalite de la passion amoureuse, dechirure entre desir et devoir, liberte et predestination. La sobriete de l'intrigue concentre toute l'attention sur l'analyse psychologique.

Apres l'echec relatif de Phedre, Racine abandonne le theatre profane, se reconcilie avec Port-Royal et devient historiographe du roi. Il ecrit encore deux tragedies bibliques, Esther et Athalie, pour les demoiselles de Saint-Cyr. Il meurt a Paris et est inhume a Port-Royal selon ses voeux.`,
    mainWorks: ["Phedre", "Andromaque", "Britannicus", "Berenice", "Iphigenie", "Athalie"],
    keyIdeas: ["Tragedie classique", "Fatalite passionnelle", "Jansenisme", "Perfection formelle"],
  },
  {
    id: "la-fontaine",
    name: "Jean de La Fontaine",
    birthYear: 1621,
    deathYear: 1695,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jean_de_La_Fontaine.PNG?width=220",
    nationality: "Francais",
    movement: "Classicisme",
    summary: `Jean de La Fontaine nait a Chateau-Thierry en Champagne. Apres des etudes de droit et une breve vocation religieuse, il reprend la charge paternelle de maitre des Eaux et Forets. Son mariage avec Marie Hericart sera distant et il vivra surtout a Paris.

Protege par le surintendant Fouquet dont la disgrace l'affecte profondement, La Fontaine trouve ensuite refuge aupres de la duchesse d'Orleans puis de Mme de La Sabliere. Homme aimable et distrait, il frequente les salons et se lie avec Moliere, Racine et Boileau.

Les Fables, publiees en plusieurs recueils de 1668 a 1694, constituent son chef-d'oeuvre. S'inspirant d'Esope et de Phedre, il renouvelle completement le genre par la variete des tons, la finesse psychologique et la perfection poetique. Ses animaux incarnent les travers humains avec une ironie profonde.

Outre les Fables, La Fontaine compose des Contes licencieux, des poemes divers et le roman Les Amours de Psyche. Elu a l'Academie francaise en 1684 malgre les reticences de Louis XIV, il se convertit sur le tard et meurt a Paris. Ses Fables restent un tresor de la langue francaise et sont apprises par tous les ecoliers.`,
    mainWorks: ["Fables", "Contes et nouvelles en vers", "Les Amours de Psyche et de Cupidon"],
    keyIdeas: ["Fable", "Morale", "Imitation creatrice", "Art de conter"],
  },
  {
    id: "voltaire",
    name: "Voltaire",
    birthYear: 1694,
    deathYear: 1778,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nicolas_de_Largilli%C3%A8re%2C_Fran%C3%A7ois-Marie_Arouet_dit_Voltaire.jpg?width=220",
    nationality: "Francais",
    movement: "Lumieres",
    summary: `Francois-Marie Arouet, dit Voltaire, nait a Paris dans une famille bourgeoise aisee. Brillant eleve des jesuites, il se destine aux lettres malgre l'opposition paternelle. Ses satires lui valent plusieurs sejours a la Bastille et un exil en Angleterre qui le marque profondement.

De retour en France, il s'impose comme le premier ecrivain de son temps : tragedies, poemes epiques, essais historiques et philosophiques. Son Dictionnaire philosophique et ses Lettres philosophiques diffusent les idees des Lumieres. Candide, conte philosophique, reste son oeuvre la plus lue.

Installe a Ferney pres de la frontiere suisse, Voltaire mene ses derniers combats : rehabilitation de Calas, defense des Sirven et du chevalier de La Barre, lutte contre "l'Infame" - le fanatisme religieux. Sa correspondance monumentale le relie a toute l'Europe eclairee.

Son retour triomphal a Paris en 1778 l'epuise et il meurt quelques semaines plus tard. Voltaire incarne l'intellectuel engage, defendant la tolerance, la liberte de pensee et la justice. Son influence sur le XVIIIe siecle est immense, et son esprit critique continue d'inspirer.`,
    mainWorks: ["Candide", "Lettres philosophiques", "Dictionnaire philosophique", "Zadig", "Micromegas", "Traite sur la tolerance"],
    keyIdeas: ["Tolerance", "Raison", "Combat contre le fanatisme", "Ironie philosophique"],
  },
  {
    id: "goethe",
    name: "Johann Wolfgang von Goethe",
    birthYear: 1749,
    deathYear: 1832,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Goethe_%28Stieler_1828%29.jpg?width=220",
    nationality: "Allemand",
    movement: "Classicisme de Weimar / Sturm und Drang",
    summary: `Johann Wolfgang von Goethe nait a Francfort dans une famille patricienne cultivee. Apres des etudes de droit a Leipzig et Strasbourg, il publie Les Souffrances du jeune Werther (1774) qui connait un succes europeen fulgurant et inaugure le mouvement Sturm und Drang.

En 1775, le duc de Saxe-Weimar l'invite a sa cour ou Goethe passera le reste de sa vie, occupant diverses fonctions ministerielles. Son voyage en Italie (1786-1788) marque un tournant vers le classicisme. Il dirige le theatre de Weimar et entretient une amitie feconde avec Schiller.

Son oeuvre immense couvre tous les genres : poesie lyrique, romans (Les Annees d'apprentissage de Wilhelm Meister), theatre, essais scientifiques. Faust, drame compose sur soixante ans, represente la quete de l'homme moderne, pactisant avec le diable pour atteindre la connaissance absolue.

Goethe est le dernier homme universel, poete, romancier, dramaturge mais aussi savant, dessinateur, homme d'Etat. Il incarne le classicisme allemand et reste la figure centrale de la litterature germanique. Ses derniers mots auraient ete : "Plus de lumiere !".`,
    mainWorks: ["Faust", "Les Souffrances du jeune Werther", "Les Annees d'apprentissage de Wilhelm Meister", "Poesie et verite", "Les Affinites electives"],
    keyIdeas: ["Sturm und Drang", "Classicisme", "Bildungsroman", "Homme faustien"],
  },
  {
    id: "hugo",
    name: "Victor Hugo",
    birthYear: 1802,
    deathYear: 1885,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg?width=220",
    nationality: "Francais",
    movement: "Romantisme",
    summary: `Victor Hugo nait a Besancon, fils d'un general napoleonien. Enfant prodige, il affirme a quinze ans vouloir etre "Chateaubriand ou rien". La preface de Cromwell (1827) et la bataille d'Hernani (1830) font de lui le chef de file du romantisme francais.

Son oeuvre poetique, de la maitrise classique des Odes aux visions cosmiques des Contemplations et de La Legende des siecles, revolutionne la versification. Ses romans - Notre-Dame de Paris, Les Miserables - melent fresque historique, critique sociale et personnages inoubliables.

Pair de France puis depute, Hugo s'exile a Jersey et Guernesey apres le coup d'Etat de Napoleon III. Pendant dix-neuf ans, il incarne la resistance republicaine, publiant Les Chatiments contre "Napoleon le Petit". Son retour en 1870 est triomphal.

Hugo meurt a Paris en 1885 ; ses funerailles nationales reunissent deux millions de personnes. Il repose au Pantheon. Poete, romancier, dramaturge, dessinateur, homme politique, il reste la figure tutelaire de la litterature francaise, incarnant le pouvoir de la parole au service de la justice et de la liberte.`,
    mainWorks: ["Les Miserables", "Notre-Dame de Paris", "Les Contemplations", "La Legende des siecles", "Les Chatiments", "Hernani"],
    keyIdeas: ["Romantisme", "Engagement social", "Exile", "Poesie visionnaire"],
  },
  {
    id: "balzac",
    name: "Honore de Balzac",
    birthYear: 1799,
    deathYear: 1850,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Honor%C3%A9_de_Balzac_%281842%29.jpg?width=220",
    nationality: "Francais",
    movement: "Realisme",
    summary: `Honore de Balzac nait a Tours dans une famille bourgeoise. Apres des etudes de droit, il renonce a une carriere de notaire pour se consacrer a l'ecriture. Ses premiers romans, publies sous pseudonyme, echouent, tout comme ses entreprises commerciales qui le laissent couvert de dettes.

A partir de 1829, il entreprend la redaction de La Comedie humaine, vaste fresque romanesque visant a decrire l'ensemble de la societe francaise de son temps. Plus de 90 romans et nouvelles, peuplees de 2 000 personnages recurrents, composent cette somme realiste sans precedent.

Balzac travaille avec une energie prodigieuse, ecrivant la nuit, corrigeant inlassablement ses epreuves, poussant l'analyse sociale et psychologique a une precision quasi scientifique. Le Pere Goriot, Eugenie Grandet, Illusions perdues comptent parmi ses chefs-d'oeuvre.

Epuise par le travail et la maladie, Balzac meurt a Paris peu apres avoir epouse Mme Hanska, l'amour de sa vie. Hugo prononce son eloge funebre. Son influence sur le roman moderne est decisive : il invente le realisme romanesque et le personnage comme type social. Proust, Dostoievski, James le reconnaissent comme maitre.`,
    mainWorks: ["Le Pere Goriot", "Illusions perdues", "Eugenie Grandet", "La Cousine Bette", "Le Lys dans la vallee", "Splendeurs et miseres des courtisanes"],
    keyIdeas: ["Realisme", "Comedie humaine", "Personnages recurrents", "Argent et pouvoir"],
  },
  {
    id: "stendhal",
    name: "Stendhal",
    birthYear: 1783,
    deathYear: 1842,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Stendhal.jpg?width=220",
    nationality: "Francais",
    movement: "Realisme romantique",
    summary: `Henri Beyle, dit Stendhal, nait a Grenoble dans une famille bourgeoise. Orphelin de mere a sept ans, il deteste son pere et sa ville natale. Il suit les armees napoleoniennes a travers l'Europe, decouvrant l'Italie dont il tombe amoureux.

Apres la chute de l'Empire, il s'installe a Milan puis a Paris. Il publie des essais sur l'art, la musique et l'amour (De l'Amour). Ses deux grands romans, Le Rouge et le Noir et La Chartreuse de Parme, passent relativement inapercus de son vivant.

L'ecriture de Stendhal se caracterise par une sobriete qui tranche avec le lyrisme romantique. Il analyse les mouvements de l'ame avec une precision psychologique nouvelle, inaugurant le monologue interieur. Julien Sorel et Fabrice del Dongo incarnent l'ambition et la passion dans une societe mediocre.

Nomme consul a Civitavecchia, Stendhal meurt d'apoplexie a Paris. Il avait predit qu'il serait lu en 1880 ou 1935 - prophetie exacte. Balzac salue La Chartreuse comme un chef-d'oeuvre, et les ecrivains du XXe siecle - Gide, Valery, Sartre - reconnaissent en lui un precurseur de la modernite litteraire.`,
    mainWorks: ["Le Rouge et le Noir", "La Chartreuse de Parme", "De l'Amour", "Vie de Henry Brulard", "Lucien Leuwen"],
    keyIdeas: ["Beylisme", "Cristallisation", "Egotisme", "Analyse psychologique"],
  },
  {
    id: "flaubert",
    name: "Gustave Flaubert",
    birthYear: 1821,
    deathYear: 1880,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gustave_Flaubert.jpg?width=220",
    nationality: "Francais",
    movement: "Realisme",
    summary: `Gustave Flaubert nait a Rouen, fils du chirurgien-chef de l'Hotel-Dieu. Une crise nerveuse le dispense d'etudes de droit et lui permet de se consacrer a l'ecriture. Installe a Croisset pres de Rouen, il mene une vie monastique vouee au travail litteraire.

Madame Bovary (1857), recit des illusions et de la dechéance d'une femme de province, lui vaut un proces pour outrage aux moeurs, dont il est acquitte. Le roman revolutionne la technique narrative par son style impersonnel et sa precision documentaire.

Flaubert travaille avec une lenteur obsessionnelle, cherchant le "mot juste", poussant chaque phrase au "gueuloir" - les lisant a voix haute pour en eprouver le rythme. Salammbo, L'Education sentimentale, Trois Contes et l'inacheve Bouvard et Pecuchet temoignent de cette exigence absolue.

Ami de Tourgueniev, Zola, Maupassant qu'il forme, Flaubert incarne l'artiste moderne, sacrifiant tout a son art. Il meurt a Croisset d'une hemorragie cerebrale. Son influence sur le roman moderne est fondamentale : il invente l'impersonnalite du narrateur et fait de la forme l'enjeu supreme de la litterature.`,
    mainWorks: ["Madame Bovary", "L'Education sentimentale", "Salammbo", "Trois Contes", "Bouvard et Pecuchet"],
    keyIdeas: ["Style impersonnel", "Mot juste", "Realisme documentaire", "Art pour l'art"],
  },
  {
    id: "baudelaire",
    name: "Charles Baudelaire",
    birthYear: 1821,
    deathYear: 1867,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%89tienne_Carjat%2C_Portrait_of_Charles_Baudelaire%2C_circa_1862.jpg?width=220",
    nationality: "Francais",
    movement: "Symbolisme",
    summary: `Charles Baudelaire nait a Paris. Orphelin de pere a six ans, il souffre du remariage de sa mere avec le commandant Aupick. Apres une adolescence rebelle et un voyage force vers les Indes interrompu a l'ile Maurice, il dilapide son heritage et mene une vie de dandy marginal.

Les Fleurs du Mal (1857), son unique recueil, est condamne pour outrage aux bonnes moeurs. Six poemes sont censures. Mais ce scandale consacre l'oeuvre la plus influente de la poesie moderne, ou se melent spleen et ideal, beaute et laideur, modernite urbaine et aspirations spirituelles.

Baudelaire renouvelle profondement la poesie par sa theorie des correspondances, son exploration du mal et de la beaute, son attention a la vie moderne. Critique d'art visionnaire, traducteur de Poe, il definit aussi l'esthetique de la modernite dans Le Peintre de la vie moderne.

Ruine, malade, ronge par la syphilis, Baudelaire s'exile en Belgique ou il est frappe d'hemiplegie. Ramene a Paris, il meurt aphasique a quarante-six ans. Mallarmé, Rimbaud, Verlaine, les symbolistes puis les surrealistes le reconnaissent comme leur maitre. Il reste le poete central de la modernite.`,
    mainWorks: ["Les Fleurs du Mal", "Petits Poemes en prose", "Les Paradis artificiels", "Curiosites esthetiques", "L'Art romantique"],
    keyIdeas: ["Spleen et Ideal", "Correspondances", "Modernite", "Beaute du mal"],
  },
  {
    id: "dostoievski",
    name: "Fiodor Dostoievski",
    birthYear: 1821,
    deathYear: 1881,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg?width=220",
    nationality: "Russe",
    movement: "Realisme psychologique",
    summary: `Fiodor Mikhailovitch Dostoievski nait a Moscou dans une famille de petite noblesse. Son pere, medecin tyrannique, est assassine par ses serfs. Cette violence originelle marque profondement son oeuvre. Apres des etudes d'ingenieur militaire, il se consacre a la litterature.

En 1849, arrete pour activites revolutionnaires, il est condamne a mort puis gracie au dernier moment sur l'echafaud. Quatre ans de bagne en Siberie, suivis de cinq ans de service militaire, transforment sa vision du monde. Il en tire Souvenirs de la maison des morts.

De retour a Saint-Petersbourg, il publie ses grands romans : Crime et Chatiment, L'Idiot, Les Demons, Les Freres Karamazov. Ces oeuvres explorent les profondeurs de l'ame humaine, le combat du bien et du mal, la liberte, la foi, la culpabilite. Ses personnages hallucinés prefigurent la psychanalyse.

Joueur compulsif, epileptique, Dostoievski mene une vie tourmentee. Il meurt a Saint-Petersbourg, salue comme le plus grand ecrivain russe vivant. Son influence sur la litterature du XXe siecle est immense : Freud, Kafka, Camus, Sartre reconnaissent leur dette envers lui.`,
    mainWorks: ["Crime et Chatiment", "Les Freres Karamazov", "L'Idiot", "Les Demons", "Les Nuits blanches", "Le Joueur"],
    keyIdeas: ["Profondeur psychologique", "Dualite du bien et du mal", "Foi et doute", "Liberte et culpabilite"],
  },
  {
    id: "tolstoi",
    name: "Leon Tolstoi",
    birthYear: 1828,
    deathYear: 1910,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/L.N.Tolstoy_Prokudin-Gorsky.jpg?width=220",
    nationality: "Russe",
    movement: "Realisme",
    summary: `Leon Nikolaievitch Tolstoi nait a Iasnaïa Poliana dans une famille de vieille noblesse. Orphelin jeune, il mene une jeunesse dissolue avant de s'engager dans l'armee au Caucase. Ses premiers recits, fondes sur ses experiences militaires, revelent un talent exceptionnel.

Guerre et Paix (1869) et Anna Karenine (1877) sont consideres comme les sommets du roman realiste. Le premier reconstitue l'epopee napoleonienne a travers le destin de familles aristocratiques ; le second analyse la passion adultere et les conventions sociales avec une penetration inegalee.

Apres une crise spirituelle vers cinquante ans, Tolstoi rejette l'Eglise et la civilisation moderne pour proner un christianisme primitif fonde sur la non-violence et la simplicité. Excommunie, il devient une figure mondiale, correspondant avec Gandhi et influencant le pacifisme moderne.

Vivant en conflit croissant avec sa femme qui refuse ses idees de renoncement a la propriete, Tolstoi s'enfuit de chez lui a quatre-vingt-deux ans et meurt dans une gare. Ses funerailles rassemblent des milliers de personnes. Il reste l'une des consciences morales les plus influentes de l'histoire.`,
    mainWorks: ["Guerre et Paix", "Anna Karenine", "La Mort d'Ivan Ilitch", "Resurrection", "Les Cosaques"],
    keyIdeas: ["Realisme epique", "Non-violence", "Simplicite", "Quete spirituelle"],
  },
  {
    id: "dickens",
    name: "Charles Dickens",
    birthYear: 1812,
    deathYear: 1870,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dickens_Gurney_head.jpg?width=220",
    nationality: "Anglais",
    movement: "Realisme victorien",
    summary: `Charles Dickens nait a Portsmouth dans une famille modeste. L'emprisonnement de son pere pour dettes le force a travailler enfant dans une fabrique de cirage, experience traumatisante qui nourrit son oeuvre. Devenu journaliste, il publie Les Aventures de M. Pickwick (1836) qui le rendent celebre a vingt-quatre ans.

Dickens publie ses romans en feuilletons mensuels, creant un suspense qui passionne l'Angleterre entière. Oliver Twist, David Copperfield, Bleak House, Les Grandes Esperances combinent critique sociale et melodrame, realisme et sentimentalisme, humour et pathos.

Infatigable reformateur social, Dickens denonce la pauvrete, l'exploitation des enfants, les prisons pour dettes, la bureaucratie. Ses personnages, souvent caricaturaux mais inoubliables - Scrooge, Fagin, Miss Havisham - sont entres dans l'imaginaire collectif.

Dickens mene egalement une carriere d'editeur de presse et de lecteur public, donnant des tournees triomphales en Angleterre et aux Etats-Unis. Il meurt d'une attaque cerebrale, laissant Edwin Drood inacheve. Enterre a l'abbaye de Westminster, il reste l'ecrivain anglais le plus populaire apres Shakespeare.`,
    mainWorks: ["Oliver Twist", "David Copperfield", "Les Grandes Esperances", "Un Conte de deux villes", "Bleak House", "Un Chant de Noel"],
    keyIdeas: ["Critique sociale", "Enfance maltraitee", "Redemption", "Sentimentalisme"],
  },
  {
    id: "zola",
    name: "Emile Zola",
    birthYear: 1840,
    deathYear: 1902,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Emile_Zola_1902.jpg?width=220",
    nationality: "Francais",
    movement: "Naturalisme",
    summary: `Emile Zola nait a Paris mais grandit a Aix-en-Provence ou son pere, ingenieur italien, meurt prema­ture­ment. La famille connait des difficultes financieres. Monte a Paris, Zola travaille chez Hachette avant de se lancer dans le journalisme et la litterature.

Il elabore la doctrine naturaliste, appliquant au roman les methodes des sciences experimentales. Les Rougon-Macquart, "histoire naturelle et sociale d'une famille sous le Second Empire", comprend vingt romans ecrits entre 1871 et 1893, de La Fortune des Rougon a Germinal et a L'Assommoir.

Zola explore methodiquement tous les milieux sociaux : paysans, mineurs, ouvriers, bourgeois, artistes, prostituees. Son ecriture puissante, sa documentation minutieuse, son attention aux forces qui determinent l'individu fondent le roman naturaliste et influencent toute la litterature occidentale.

En 1898, son article "J'accuse...!" en defense de Dreyfus le contraint a l'exil mais fait de lui l'incarnation de l'intellectuel engage. Il meurt asphyxie dans des circonstances suspectes. Ses cendres sont transferees au Pantheon en 1908.`,
    mainWorks: ["Germinal", "L'Assommoir", "Nana", "La Bete humaine", "Au Bonheur des Dames", "J'accuse...!"],
    keyIdeas: ["Naturalisme", "Heredite", "Milieu social", "Engagement intellectuel"],
  },
  {
    id: "maupassant",
    name: "Guy de Maupassant",
    birthYear: 1850,
    deathYear: 1893,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Guy_de_Maupassant_fotograferad_av_F%C3%A9lix_Nadar_1888.jpg?width=220",
    nationality: "Francais",
    movement: "Naturalisme / Realisme",
    summary: `Guy de Maupassant nait en Normandie dans une famille de petite noblesse. Eleve de Flaubert, ami de sa mere, il recoit une formation litteraire exigeante. Apres la guerre de 1870 et dix ans de fonctionnariat, il debute brillamment avec Boule de Suif (1880) dans les Soirees de Medan.

En dix ans, Maupassant produit une oeuvre considerable : six romans, dont Une Vie, Bel-Ami et Pierre et Jean, et pres de trois cents nouvelles. Maitre de la forme breve, il excelle a saisir en quelques pages un caractere, une situation, une chute cruelle.

Ses nouvelles normandes peignent le monde paysan avec un realisme impitoyable. Ses recits parisiens decrivent l'arrivisme et la mediocrite bourgeoise. Le fantastique - Le Horla - traduit l'angoisse d'un esprit que mine la syphilis hereditaire.

Devenu riche et celebre, Maupassant s'enfonce dans la folie. Apres une tentative de suicide, il est interne et meurt a quarante-deux ans dans une maison de sante. Son art de la nouvelle, sa prose limpide et son pessimisme lucide en font un classique universel, admire de Tolstoi a Borges.`,
    mainWorks: ["Boule de Suif", "Bel-Ami", "Une Vie", "Le Horla", "Pierre et Jean", "Contes de la becasse"],
    keyIdeas: ["Nouvelle", "Realisme normand", "Pessimisme", "Fantastique psychologique"],
  },
  {
    id: "rimbaud",
    name: "Arthur Rimbaud",
    birthYear: 1854,
    deathYear: 1891,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rimbaud.PNG?width=220",
    nationality: "Francais",
    movement: "Symbolisme",
    summary: `Arthur Rimbaud nait a Charleville dans une famille modeste. Eleve brillant, il fugue plusieurs fois et commence a ecrire des poemes d'une maturite stupéfiante. A seize ans, il envoie ses vers a Verlaine qui l'invite a Paris : "Venez, chere grande ame".

La relation tumultueuse entre les deux poetes s'acheve par un coup de revolver. Rimbaud compose alors Une Saison en enfer et les Illuminations, poemes en prose d'une modernite radicale. "Je est un autre", "le dereglement de tous les sens" : ses formules fondent la poesie moderne.

A dix-neuf ans, Rimbaud abandonne definitivement la litterature. Il parcourt l'Europe a pied, s'engage dans l'armee coloniale hollandaise, travaille dans une carriere a Chypre, puis s'installe en Ethiopie comme negociant. Ce silence litteraire fascine autant que son oeuvre fulgurante.

Atteint d'une tumeur au genou, Rimbaud rentre en France ou on l'ampute. Il meurt a Marseille a trente-sept ans, peut-etre converti sur son lit de mort. Son oeuvre, publiee et diffusee apres sa mort, influence profondement le surréalisme et toute la poesie du XXe siecle.`,
    mainWorks: ["Une Saison en enfer", "Illuminations", "Poesies", "Lettre du Voyant", "Le Bateau ivre"],
    keyIdeas: ["Voyance poetique", "Dereglement des sens", "Alchimie du verbe", "Renoncement"],
  },
  {
    id: "wilde",
    name: "Oscar Wilde",
    birthYear: 1854,
    deathYear: 1900,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Oscar_Wilde_portrait.jpg?width=220",
    nationality: "Irlandais",
    movement: "Esthetisme",
    summary: `Oscar Wilde nait a Dublin dans une famille intellectuelle. Brillant etudiant a Oxford, il devient l'apotre de l'esthetisme, prônant que l'art est sa propre fin. Son esprit etincelant, ses bons mots et son elegance provocante en font la celebrite de Londres victorien.

Ses comedies - L'Eventail de Lady Windermere, L'Importance d'etre Constant - satirisent avec brio l'hypocrisie de la haute societe. Le Portrait de Dorian Gray explore les rapports entre beaute, morale et corruption. Ses contes et son essai Le Declin du mensonge illustrent son esthetique paradoxale.

Au sommet de sa gloire, Wilde poursuit le marquis de Queensberry pour diffamation, declenchant un scandale qui le mene en prison pour "gross indecency". Deux ans de travaux forces le brisent. De Profundis, lettre ecrite en prison, temoigne de cette chute.

Libéré et ruine, Wilde s'exile a Paris sous un faux nom. Il meurt dans un hotel miteux a quarante-six ans, peut-etre converti au catholicisme. Longtemps occulte par le scandale, son oeuvre est aujourd'hui celebree pour son intelligence, son humanité et sa modernite.`,
    mainWorks: ["Le Portrait de Dorian Gray", "L'Importance d'etre Constant", "De Profundis", "La Ballade de la geole de Reading", "Le Fantome de Canterville"],
    keyIdeas: ["Esthetisme", "Art pour l'art", "Paradoxe", "Dandysme"],
  },
  {
    id: "proust",
    name: "Marcel Proust",
    birthYear: 1871,
    deathYear: 1922,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Marcel_Proust_1900.jpg?width=220",
    nationality: "Francais",
    movement: "Modernisme",
    summary: `Marcel Proust nait a Auteuil dans une famille de la haute bourgeoisie. Son pere est medecin, sa mere issue d'une famille juive alsacienne. Asthmatique des l'enfance, il est profondement attache a sa mere dont la mort en 1905 le marquera a jamais.

Mondain brillant dans sa jeunesse, chroniqueur pour Le Figaro, Proust se retire progressivement du monde apres 1909. Dans sa chambre tapissee de liege, il se consacre entierement a son oeuvre, ecrivant la nuit, dormant le jour, corrigeant inlassablement ses epreuves.

A la recherche du temps perdu, publie de 1913 a 1927, est une cathedrale romanesque de sept volumes et plus de 3 000 pages. La memoire involontaire - la fameuse madeleine - permet de retrouver le temps perdu et de transmuer la vie en oeuvre d'art.

Proust revolutionne le roman par sa phrase sinueuse, son analyse psychologique d'une finesse inegalee, sa meditation sur le temps, la memoire et l'art. Le Prix Goncourt pour A l'ombre des jeunes filles en fleurs (1919) consacre son genie. Il meurt a Paris, laissant les derniers volumes a reviser.`,
    mainWorks: ["Du cote de chez Swann", "A l'ombre des jeunes filles en fleurs", "Le Cote de Guermantes", "Le Temps retrouve"],
    keyIdeas: ["Memoire involontaire", "Temps perdu", "Mondanite", "Art redempteur"],
  },
  {
    id: "kafka",
    name: "Franz Kafka",
    birthYear: 1883,
    deathYear: 1924,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kafka_portrait.jpg?width=220",
    nationality: "Austro-hongrois",
    movement: "Modernisme / Expressionnisme",
    summary: `Franz Kafka nait a Prague dans une famille juive de langue allemande. Domine par son pere, commercant autoritaire, il etudie le droit et travaille dans une compagnie d'assurances. Il ecrit la nuit, menant une double vie entre bureau et litterature.

La Metamorphose, Le Proces, Le Chateau developpent un univers ou l'individu affronte des puissances absurdes et ecrasantes. L'ecriture de Kafka, d'une clarte trompeuse, decrit des situations cauchemardesque avec une precision bureaucratique qui en renforce l'etrangete.

Kafka publie peu de son vivant et demande a son ami Max Brod de bruler ses manuscrits apres sa mort. Brod desobeit et publie les romans inacheves, revelant au monde une oeuvre prophetique qui anticipe les totalitarismes et l'angoisse moderne.

Tuberculeux, Kafka meurt pres de Vienne a quarante ans, peu apres avoir trouve l'amour aupres de Dora Diamant. L'adjectif "kafkaien" est entre dans toutes les langues pour decrire l'absurdite bureaucratique. Ses trois soeurs mourront a Auschwitz.`,
    mainWorks: ["La Metamorphose", "Le Proces", "Le Chateau", "La Colonie penitentiaire", "Lettre au pere"],
    keyIdeas: ["Absurde", "Alienation", "Bureaucratie", "Culpabilite"],
  },
  {
    id: "joyce",
    name: "James Joyce",
    birthYear: 1882,
    deathYear: 1941,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Revolutionary_Joyce_Better_Contrast.jpg?width=220",
    nationality: "Irlandais",
    movement: "Modernisme",
    summary: `James Joyce nait a Dublin dans une famille catholique nombreuse dont la situation financiere se degrade. Brillant eleve des jesuites, il rompt avec l'Irlande, l'Eglise et le nationalisme pour s'exiler a Trieste, Zurich puis Paris, ne revenant jamais dans son pays natal.

Dubliners et Portrait de l'artiste en jeune homme etablissent sa reputation d'innovateur. Mais c'est Ulysse (1922), recit d'une journee a Dublin calque sur l'Odyssee, qui revolutionne le roman. Le monologue interieur de Molly Bloom et les experimentations formelles de chaque chapitre ouvrent des voies inedites.

Finnegans Wake (1939), oeuvre-limite ecrite dans une langue inventee melant des dizaines d'idiomes, pousse l'experimentation a son terme. Joyce travaille dans une semi-cecite, soutenu par des mecenes et des amis devoues.

Mort a Zurich lors de la Seconde Guerre mondiale, Joyce est enterre dans le cimetiere de Fluntern. Son influence sur le roman du XXe siecle est immense : Faulkner, Beckett, le nouveau roman lui doivent des techniques essentielles. Dublin celebre desormais le Bloomsday chaque 16 juin.`,
    mainWorks: ["Ulysse", "Dubliners", "Portrait de l'artiste en jeune homme", "Finnegans Wake"],
    keyIdeas: ["Monologue interieur", "Mythologie moderne", "Experimentation formelle", "Exil"],
  },
  {
    id: "hemingway",
    name: "Ernest Hemingway",
    birthYear: 1899,
    deathYear: 1961,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ernest_Hemingway_1923_passport_photo.jpg?width=220",
    nationality: "Americain",
    movement: "Lost Generation",
    summary: `Ernest Hemingway nait dans l'Illinois. Ambulancier blesse en Italie pendant la Premiere Guerre mondiale, il devient journaliste a Paris dans les annees 1920, frequentant Gertrude Stein, Fitzgerald et la "generation perdue". Le Soleil se leve aussi et L'Adieu aux armes le rendent celebre.

Son style depouille, fait de phrases courtes et de dialogues tendus, rompt avec la tradition litteraire. La "theorie de l'iceberg" : l'essentiel reste sous la surface, suggere plutot qu'explicite. Cette ecriture influence toute la litterature americaine ulterieure.

Hemingway vit intensement : corridas en Espagne, safaris en Afrique, peche au gros a Cuba, correspondant de guerre en Espagne puis en Europe. Pour qui sonne le glas, Le Vieil Homme et la Mer illustrent ses themes : courage, endurance, dignite face a la defaite.

Prix Nobel de litterature en 1954, Hemingway souffre de depression et de troubles physiques. Il se suicide a Ketchum, Idaho. Son image de virilite masquait une sensibilite profonde. Son oeuvre, traduite dans le monde entier, incarne un ideal de prose moderne.`,
    mainWorks: ["Le Vieil Homme et la Mer", "L'Adieu aux armes", "Pour qui sonne le glas", "Le Soleil se leve aussi", "Paris est une fete"],
    keyIdeas: ["Style depouille", "Theorie de l'iceberg", "Grace sous pression", "Lost Generation"],
  },
  {
    id: "camus",
    name: "Albert Camus",
    birthYear: 1913,
    deathYear: 1960,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg?width=220",
    nationality: "Francais",
    movement: "Absurde / Existentialisme",
    summary: `Albert Camus nait a Mondovi en Algerie dans un milieu tres pauvre. Son pere meurt a la guerre de 1914. Eleve boursier brillant, il etudie la philosophie a Alger. La tuberculose l'empeche de passer l'agregation mais ne freine pas son activite de journaliste et d'homme de theatre.

L'Etranger (1942) et Le Mythe de Sisyphe fondent sa philosophie de l'absurde : la vie n'a pas de sens donne, mais l'homme peut et doit se revolter contre cette condition. "Il faut imaginer Sisyphe heureux." La Peste, allegorie de l'Occupation, celebre la solidarite humaine face au mal.

L'Homme revolte (1951) provoque sa rupture avec Sartre et les marxistes. Camus refuse le terrorisme revolutionnaire au nom d'une ethique de la mesure. Dechiré par la guerre d'Algerie, il defend une solution federale qui lui vaut l'hostilite de tous les camps.

Prix Nobel de litterature en 1957 a quarante-quatre ans, Camus meurt trois ans plus tard dans un accident de voiture. Intellectuel engage mais allergique aux ideologies, artiste exigeant, il incarne une morale de l'honnetete et de la mesure qui continue de resonner.`,
    mainWorks: ["L'Etranger", "La Peste", "Le Mythe de Sisyphe", "L'Homme revolte", "La Chute", "Les Justes"],
    keyIdeas: ["Absurde", "Revolte", "Mesure", "Solidarite humaine"],
  },
  {
    id: "beckett",
    name: "Samuel Beckett",
    birthYear: 1906,
    deathYear: 1989,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Samuel_Beckett%2C_Pic%2C_1.jpg?width=220",
    nationality: "Irlandais",
    movement: "Theatre de l'absurde",
    summary: `Samuel Beckett nait a Dublin dans une famille protestante aisee. Apres des etudes brillantes au Trinity College, il enseigne l'anglais a Paris ou il rencontre Joyce dont il devient proche. Apres des annees d'errance, il s'installe definitivement en France.

Pendant la guerre, Beckett participe a la Resistance. Apres 1945, il ecrit directement en francais, trouvant dans cette langue etrangere une distance propice a son style depouille. Molloy, Malone meurt et L'Innommable forment une trilogie romanesque radicale.

En attendant Godot (1953) revolutionne le theatre. Deux clochards attendent un Godot qui ne vient jamais, dans un espace nu ou le langage tourne a vide. Fin de partie, Oh les beaux jours poursuivent cette exploration du vide existentiel avec un humour sombre et une compassion profonde.

Prix Nobel de litterature en 1969, Beckett reste discret, refusant interviews et honneurs. Son oeuvre, de plus en plus minimale, tend vers le silence. Il meurt a Paris, peu apres sa femme. Son theatre, joue dans le monde entier, a redéfini les possibilites de la scene moderne.`,
    mainWorks: ["En attendant Godot", "Fin de partie", "Oh les beaux jours", "Molloy", "L'Innommable", "Cap au pire"],
    keyIdeas: ["Absurde", "Attente", "Depouillement", "Echec"],
  },
  {
    id: "garcia-marquez",
    name: "Gabriel Garcia Marquez",
    birthYear: 1927,
    deathYear: 2014,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gabriel_Garcia_Marquez.jpg?width=220",
    nationality: "Colombien",
    movement: "Realisme magique",
    summary: `Gabriel Garcia Marquez nait a Aracataca, village de la cote caraibe colombienne. Eleve par ses grands-parents, il est nourri de legendes et d'histoires fabuleuses. Journaliste a Bogota, Cartagena et Paris, il s'interesse au cinema et milite pour les causes de gauche.

Cent ans de solitude (1967) le revele au monde entier. Cette saga de la famille Buendia dans le village imaginaire de Macondo mele l'histoire de la Colombie, les mythes bibliques et le merveilleux quotidien. Le "realisme magique" devient l'embleme de la litterature latino-americaine.

L'Automne du patriarche, Chronique d'une mort annoncee, L'Amour aux temps du cholera confirment sa maitrise du roman. Garcia Marquez combine une prose lyrique et sensuelle avec une conscience politique aigue, ami de Fidel Castro et defenseur des causes populaires.

Prix Nobel de litterature en 1982, "Gabo" reste l'ecrivain latino-americain le plus celebre. Ses memoires, Vivre pour la raconter, evoquent son enfance magique. Il meurt a Mexico, pleure par un continent entier. Son oeuvre a transforme le regard du monde sur l'Amerique latine.`,
    mainWorks: ["Cent ans de solitude", "L'Amour aux temps du cholera", "Chronique d'une mort annoncee", "L'Automne du patriarche", "Vivre pour la raconter"],
    keyIdeas: ["Realisme magique", "Macondo", "Solitude", "Amerique latine"],
  },
  {
    id: "borges",
    name: "Jorge Luis Borges",
    birthYear: 1899,
    deathYear: 1986,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jorge_Luis_Borges_1951%2C_by_Grete_Stern.jpg?width=220",
    nationality: "Argentin",
    movement: "Postmodernisme",
    summary: `Jorge Luis Borges nait a Buenos Aires dans une famille cultivee, bilingue anglais-espagnol. Il passe son adolescence en Suisse pendant la guerre, decouvrant les litteratures europeennes. De retour en Argentine, il devient une figure centrale de l'avant-garde poetique.

Ses recueils de nouvelles - Fictions, L'Aleph, Le Livre de sable - explorent des labyrinthes metaphysiques : bibliotheques infinies, livres impossibles, temps circulaire, doubles, univers parallèles. Ces fictions breves, d'une precision intellectuelle vertigineuse, renouvellent le genre.

Bibliothecaire puis directeur de la Bibliotheque nationale, Borges perd progressivement la vue, comme son pere avant lui. Cette cecite nourrit son oeuvre de references au livre et a la memoire. Ses conferences et entretiens temoignent d'une erudition encyclopedique et d'un humour discret.

Borges n'a jamais recu le Nobel, probablement pour des raisons politiques. Il meurt a Geneve, ville aimee de sa jeunesse. Son influence sur la litterature mondiale est immense : Eco, Calvino, le postmodernisme lui doivent des themes et des procedes essentiels.`,
    mainWorks: ["Fictions", "L'Aleph", "Le Livre de sable", "L'Auteur et autres textes", "Histoire de l'infamie, histoire de l'eternite"],
    keyIdeas: ["Labyrinthe", "Infini", "Bibliotheque", "Doubles et miroirs"],
  },
];
