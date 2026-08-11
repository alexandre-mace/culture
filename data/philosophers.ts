export interface Philosopher {
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

export const philosophers: Philosopher[] = [
  {
    id: "socrates",
    name: "Socrate",
    birthYear: -470,
    deathYear: -399,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Socrates_Louvre.jpg?width=220",
    nationality: "Grec",
    movement: "Philosophie antique",
    family: "Antiquité",
    summary: `Socrate est considéré comme le père de la philosophie occidentale. Né à Athènes vers 470 av. J.-C., fils d'un sculpteur et d'une sage-femme, il passa sa vie à arpenter les rues de la cité pour questionner ses concitoyens. Contrairement aux sophistes de son époque qui monnayaient leur savoir, il ne prétendait pas détenir la vérité mais cherchait à la découvrir par le dialogue.

Sa méthode, la maïeutique (l'art d'accoucher les esprits), consiste à faire émerger la vérité par un questionnement systématique. En posant des questions apparemment naïves, il amenait ses interlocuteurs à prendre conscience de leurs contradictions et de leur ignorance. Cette ironie socratique visait à les conduire vers une connaissance plus authentique.

Socrate n'a laissé aucun écrit : tout ce que nous savons de lui provient des témoignages de ses disciples, notamment Platon et Xénophon. Sa célèbre formule "Je sais que je ne sais rien" résume son approche : la sagesse commence par la reconnaissance de notre ignorance, ce qui nous distingue de ceux qui croient savoir sans savoir.

Accusé de corrompre la jeunesse et de ne pas reconnaître les dieux de la cité, il fut condamné à mort par un tribunal athénien en 399 av. J.-C. Refusant de s'enfuir par respect pour les lois d'Athènes, il but la ciguë avec sérénité. Sa mort exemplaire fit de lui un martyr de la philosophie et influença profondément toute la pensée occidentale.`,
    mainWorks: ["Aucun écrit direct - Dialogues rapportés par Platon"],
    keyIdeas: ["Maïeutique", "Connais-toi toi-même", "L'ignorance socratique", "L'éthique par la connaissance"]
  },
  {
    id: "platon",
    name: "Platon",
    birthYear: -428,
    deathYear: -348,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Plato_Pio-Clemetino_Inv305.jpg/330px-Plato_Pio-Clemetino_Inv305.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Grec",
    movement: "Philosophie antique",
    family: "Antiquité",
    influences: ["socrates"],
    summary: `Platon, né vers 428 av. J.-C. dans une famille aristocratique athénienne, fut le disciple le plus célèbre de Socrate et le maître d'Aristote. Profondément marqué par la condamnation à mort de son maître, il consacra sa vie à la philosophie et fonda l'Académie à Athènes vers 387 av. J.-C., considérée comme la première université du monde occidental.

Sa philosophie repose sur la théorie des Idées (ou Formes) : le monde sensible que nous percevons n'est qu'une copie imparfaite d'un monde intelligible peuplé d'Idées éternelles et parfaites. L'Idée du Bien, au sommet de cette hiérarchie, illumine toutes les autres. L'allégorie de la caverne, dans "La République", illustre magistralement cette vision : les hommes sont comme des prisonniers enchaînés qui ne voient que des ombres projetées sur un mur, prenant ces apparences pour la réalité.

Platon a également développé une théorie politique complète. Dans "La République", il imagine une cité idéale gouvernée par des philosophes-rois, seuls capables de contempler les Idées et donc de gouverner avec justice. Il divise l'âme en trois parties - raison, cœur et appétits - correspondant aux trois classes de sa cité idéale : gouvernants, gardiens et producteurs.

Son influence sur la philosophie, la théologie et la pensée politique occidentale est incommensurable. Le philosophe Alfred North Whitehead a pu écrire que toute la philosophie occidentale n'est qu'une "série de notes de bas de page à Platon". Ses dialogues, où Socrate est le personnage principal, restent des modèles de réflexion philosophique.`,
    mainWorks: ["La République", "Le Banquet", "Phédon", "Phèdre", "Le Timée"],
    keyIdeas: ["Théorie des Idées", "Allégorie de la caverne", "Tripartition de l'âme", "Le philosophe-roi"]
  },
  {
    id: "aristote",
    name: "Aristote",
    birthYear: -384,
    deathYear: -322,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Aristoteles_Louvre.jpg/330px-Aristoteles_Louvre.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Grec",
    movement: "Philosophie antique",
    family: "Antiquité",
    influences: ["platon"],
    summary: `Aristote naquit en 384 av. J.-C. à Stagire, en Macédoine. Fils du médecin personnel du roi de Macédoine, il entra à l'Académie de Platon à l'âge de dix-sept ans et y resta vingt ans. Après la mort de Platon, il devint le précepteur du jeune Alexandre le Grand, puis fonda sa propre école à Athènes, le Lycée, où il enseignait en se promenant (d'où le nom de "péripatétisme").

Contrairement à Platon, Aristote s'intéresse au monde sensible et développe une approche empirique de la connaissance. Il rejette la théorie des Idées séparées et affirme que la forme est inséparable de la matière (hyléomorphisme). Pour lui, la connaissance commence par l'expérience sensible, et c'est par abstraction que nous parvenons aux concepts universels.

Son œuvre couvre pratiquement tous les domaines du savoir antique : logique, physique, biologie, métaphysique, éthique, politique, rhétorique, poétique. Sa logique formelle, notamment la théorie du syllogisme, restera la référence incontestée pendant deux millénaires. Sa "Métaphysique" pose la question de l'être en tant qu'être et introduit les concepts d'acte et de puissance, de substance et d'accident.

En éthique, son "Éthique à Nicomaque" définit le bonheur (eudaimonia) comme l'activité de l'âme selon la vertu, et préconise la recherche du "juste milieu" entre les extrêmes. Sa "Politique" analyse les différents régimes et défend une forme de gouvernement mixte. L'influence d'Aristote sur la philosophie médiévale, notamment via Thomas d'Aquin, et sur la science jusqu'à la révolution scientifique moderne, fut immense.`,
    mainWorks: ["Éthique à Nicomaque", "Politique", "Métaphysique", "Organon", "Poétique"],
    keyIdeas: ["Logique formelle", "Hyléomorphisme", "Eudémonisme", "Les quatre causes", "Le juste milieu"]
  },
  {
    id: "epicure",
    name: "Épicure",
    birthYear: -341,
    deathYear: -270,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Epikouros_BM_1843.jpg/330px-Epikouros_BM_1843.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Grec",
    movement: "Épicurisme",
    family: "Antiquité",
    summary: `Épicure naquit à Samos en 341 av. J.-C. et fonda à Athènes une école philosophique originale, le Jardin, vers 306 av. J.-C. Contrairement aux autres écoles, le Jardin était ouvert à tous, y compris aux femmes et aux esclaves, ce qui était révolutionnaire pour l'époque. On y pratiquait une vie simple, fondée sur l'amitié et la recherche du bonheur.

Sa philosophie vise le bonheur, défini comme l'ataraxie (absence de trouble de l'âme) et l'aponie (absence de douleur du corps). Contrairement à la caricature qui en est souvent faite, l'épicurisme n'est pas une quête des plaisirs débridés. Épicure distingue soigneusement les désirs naturels et nécessaires (manger, boire, s'abriter) des désirs naturels non nécessaires (manger raffiné) et des désirs vains (gloire, richesse) qu'il faut éliminer.

Sa physique atomiste, héritée de Démocrite, lui permet de libérer les hommes de leurs deux grandes peurs : la peur des dieux et la peur de la mort. Les dieux existent mais, bienheureux et immortels, ils ne s'occupent pas des affaires humaines. Quant à la mort, elle n'est rien pour nous puisque "quand elle est là, nous ne sommes plus, et quand nous sommes là, elle n'est pas".

Le "tétrapharmakon" (quadruple remède) résume sa doctrine : les dieux ne sont pas à craindre, la mort n'est pas à redouter, le bien est facile à atteindre, le mal est facile à supporter. Cette philosophie pratique, orientée vers la vie heureuse ici-bas, connut un grand succès dans l'Antiquité et influence encore aujourd'hui notre conception du bonheur.`,
    mainWorks: ["Lettre à Ménécée", "Lettre à Hérodote", "Maximes capitales"],
    keyIdeas: ["Ataraxie", "Tétrapharmakon", "Atomisme", "Classification des désirs"]
  },
  {
    id: "seneque",
    name: "Sénèque",
    birthYear: -4,
    deathYear: 65,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pseudo-Seneca_MAN_Napoli_Inv5616_n01.jpg?width=220",
    nationality: "Romain",
    movement: "Stoïcisme",
    family: "Antiquité",
    summary: `Sénèque naquit à Cordoue, en Espagne, vers 4 av. J.-C., dans une famille de rang équestre. Formé à la rhétorique et à la philosophie à Rome, il mena d'abord une brillante carrière politique avant d'être exilé en Corse par l'empereur Claude en 41 ap. J.-C. Rappelé huit ans plus tard, il devint le précepteur du jeune Néron puis son conseiller politique.

Philosophe stoïcien, Sénèque enseigne que le bonheur dépend de notre attitude intérieure, non des circonstances extérieures. La distinction fondamentale du stoïcisme est celle entre ce qui dépend de nous (nos jugements, nos désirs, nos actions) et ce qui n'en dépend pas (la fortune, la santé, la réputation, la mort). La sagesse consiste à vouloir ce qui arrive et à accepter sereinement ce qui ne dépend pas de nous.

Ses écrits, d'une grande accessibilité, ont popularisé le stoïcisme auprès d'un large public. Les "Lettres à Lucilius", correspondance philosophique avec un ami, constituent un véritable manuel de sagesse pratique. Ses traités comme "De la brièveté de la vie" ou "De la tranquillité de l'âme" offrent des conseils concrets pour bien vivre et affronter les difficultés de l'existence.

Accusé de conspiration contre Néron en 65 ap. J.-C., Sénèque reçut l'ordre de se suicider. Il se donna la mort avec dignité, entouré de ses amis, mettant en pratique les principes stoïciens qu'il avait enseignés toute sa vie. Sa mort exemplaire, racontée par Tacite, fit de lui une figure emblématique du philosophe antique.`,
    mainWorks: ["Lettres à Lucilius", "De la brièveté de la vie", "De la tranquillité de l'âme", "De la colère"],
    keyIdeas: ["Dichotomie du contrôle", "Memento mori", "Amor fati", "Vertu comme seul bien"]
  },
  {
    id: "marc-aurele",
    name: "Marc Aurèle",
    birthYear: 121,
    deathYear: 180,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/MSR-ra-61-b-1-DM_%28cropped%29.jpg/330px-MSR-ra-61-b-1-DM_%28cropped%29.jpg",
    nationality: "Romain",
    movement: "Stoïcisme",
    family: "Antiquité",
    summary: `Marc Aurèle naquit à Rome en 121 ap. J.-C. dans une famille patricienne. Remarqué par l'empereur Hadrien pour ses qualités morales et intellectuelles, il fut adopté par Antonin le Pieux et lui succéda comme empereur en 161. Son règne fut marqué par des guerres incessantes aux frontières et par une terrible épidémie de peste.

Ses "Pensées pour moi-même", écrites en grec lors de ses campagnes militaires, constituent un document unique : le journal intime philosophique d'un empereur romain. Ces réflexions, qui n'étaient pas destinées à la publication, révèlent un homme en perpétuel combat avec lui-même pour atteindre la sagesse stoïcienne et accomplir son devoir d'empereur avec justice.

Marc Aurèle incarne l'idéal platonicien du philosophe-roi. Malgré les contraintes écrasantes du pouvoir impérial, il cherchait chaque jour à vivre selon les préceptes stoïciens : maîtriser ses passions, accepter le destin avec sérénité, agir avec justice et bienveillance envers tous les hommes. Ses réflexions sur la fugacité de la vie, l'insignifiance de la gloire humaine et l'interdépendance de tous les êtres restent d'une actualité frappante.

Sa philosophie insiste sur l'instant présent comme seule réalité sur laquelle nous avons prise, sur le cosmopolitisme (nous sommes tous citoyens du monde) et sur l'examen de conscience quotidien. "Ne pas agir comme si l'on devait vivre des milliers d'années", écrit-il. Marc Aurèle mourut en 180, probablement de la peste, après un règne de dix-neuf ans.`,
    mainWorks: ["Pensées pour moi-même"],
    keyIdeas: ["L'instant présent", "Cosmopolitisme", "Acceptation du destin", "Examen de conscience"]
  },
  {
    id: "augustin",
    name: "Saint Augustin",
    birthYear: 354,
    deathYear: 430,
    nationality: "Romain d'Afrique",
    movement: "Philosophie médiévale / Patristique",
    family: "Moyen Âge",
    influences: ["platon"],
    summary: `Augustin naquit en 354 à Thagaste, en Numidie (actuelle Algérie), d'un père païen et d'une mère chrétienne fervente, Monique. Après une jeunesse qu'il qualifiera lui-même de dissolue, marquée par une liaison dont naquit un fils, il adhéra au manichéisme, doctrine dualiste qui opposait le Bien et le Mal comme deux principes éternels. Brillant rhéteur, il enseigna à Carthage, Rome puis Milan.

C'est à Milan, sous l'influence de l'évêque Ambroise et après une crise spirituelle intense, qu'il se convertit au christianisme en 386. Il raconte cette conversion dans ses "Confessions", première véritable autobiographie de l'histoire occidentale, où il analyse avec une profondeur inégalée sa vie intérieure et son cheminement vers Dieu. "Tu nous as faits pour toi, Seigneur, et notre cœur est inquiet jusqu'à ce qu'il repose en toi."

Sa philosophie opère une synthèse originale entre le néoplatonisme et le christianisme. Pour Augustin, la vérité est intérieure : c'est en nous-mêmes, par l'illumination divine, que nous pouvons la trouver. Sa réflexion sur le temps, dans le livre XI des Confessions, reste célèbre : le passé n'est plus, l'avenir n'est pas encore, seul existe le présent, mais un présent qui contient la mémoire du passé et l'attente de l'avenir.

"La Cité de Dieu", écrite après le sac de Rome par les Wisigoths en 410, propose une philosophie de l'histoire distinguant la cité terrestre (fondée sur l'amour de soi) de la cité céleste (fondée sur l'amour de Dieu). Sa réflexion sur le péché originel, le libre arbitre et la grâce divine marquera profondément la théologie chrétienne occidentale, tant catholique que protestante.`,
    mainWorks: ["Les Confessions", "La Cité de Dieu", "De la Trinité"],
    keyIdeas: ["Illumination divine", "Péché originel", "Théorie du temps", "Libre arbitre et grâce"]
  },
  {
    id: "thomas-aquin",
    name: "Thomas d'Aquin",
    birthYear: 1225,
    deathYear: 1274,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/St-thomas-aquinasFXD.jpg/330px-St-thomas-aquinasFXD.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Italien",
    movement: "Scolastique",
    family: "Moyen Âge",
    influences: ["aristote", "augustin"],
    summary: `Thomas d'Aquin naquit vers 1225 dans une famille noble du royaume de Naples. Contre la volonté de sa famille qui le destinait à une carrière ecclésiastique prestigieuse, il entra chez les Dominicains, ordre mendiant voué à l'étude et à la prédication. Il étudia à Paris et à Cologne sous la direction d'Albert le Grand, puis enseigna lui-même à Paris et en Italie.

Son œuvre majeure fut de réconcilier la philosophie d'Aristote, récemment redécouverte en Occident via les traductions arabes, avec la foi chrétienne. Cette entreprise était audacieuse car Aristote était alors suspect d'hérésie. Thomas montra que la raison naturelle et la foi révélée sont deux voies complémentaires vers la vérité, la première préparant à la seconde sans pouvoir l'atteindre pleinement.

Sa "Somme théologique", œuvre monumentale restée inachevée, systématise l'ensemble de la doctrine chrétienne en utilisant la méthode aristotélicienne. Il y développe notamment les célèbres "cinq voies" pour démontrer l'existence de Dieu à partir de l'observation du monde : par le mouvement, la causalité efficiente, la contingence, les degrés de perfection et la finalité.

Le thomisme distingue soigneusement l'essence (ce qu'une chose est) de l'existence (le fait qu'elle soit). En Dieu seul, essence et existence coïncident : Dieu est l'Être même subsistant. Thomas développa aussi une théorie de la loi naturelle, fondement de l'éthique, inscrite par Dieu dans la raison humaine. Canonisé en 1323 et proclamé Docteur de l'Église, sa philosophie reste la référence officielle de l'Église catholique.`,
    mainWorks: ["Somme théologique", "Somme contre les Gentils", "De l'être et de l'essence"],
    keyIdeas: ["Les cinq voies", "Distinction essence/existence", "Loi naturelle", "Analogie de l'être"]
  },
  {
    id: "descartes",
    name: "René Descartes",
    birthYear: 1596,
    deathYear: 1650,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/330px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Rationalisme",
    family: "Âge classique",
    summary: `René Descartes naquit en 1596 à La Haye en Touraine dans une famille de petite noblesse. Formé chez les jésuites au collège de La Flèche, il étudia le droit à Poitiers puis s'engagea comme soldat pour parcourir l'Europe. C'est dans un "poêle" en Allemagne, en novembre 1619, qu'il eut la révélation de sa méthode. Il s'installa ensuite aux Pays-Bas pour travailler en paix.

Mathématicien de génie - il inventa la géométrie analytique qui unifie algèbre et géométrie - Descartes chercha à fonder une science certaine sur le modèle des mathématiques. Sa méthode du doute radical l'amène à remettre en question systématiquement toutes ses croyances pour trouver une certitude indubitable, un point fixe à partir duquel reconstruire l'édifice du savoir.

Cette certitude, il la trouve dans le célèbre "Cogito, ergo sum" (Je pense, donc je suis) : même si je doute de tout, y compris de l'existence du monde extérieur et de mon propre corps, je ne peux douter que je doute, donc que je pense, donc que j'existe comme chose pensante. À partir de là, Descartes reconstruit progressivement nos certitudes : l'existence de Dieu, puis celle du monde extérieur.

Le dualisme cartésien sépare radicalement l'âme (res cogitans, substance pensante) du corps (res extensa, substance étendue). Cette distinction pose le célèbre "problème corps-esprit" : comment deux substances si différentes peuvent-elles interagir ? Descartes situa leur point de contact dans la glande pinéale. Son influence sur la philosophie moderne est fondatrice : il est considéré comme le père du rationalisme et de la philosophie moderne.`,
    mainWorks: ["Discours de la méthode", "Méditations métaphysiques", "Les Passions de l'âme"],
    keyIdeas: ["Cogito ergo sum", "Doute méthodique", "Dualisme corps-esprit", "Idées innées"]
  },
  {
    id: "spinoza",
    name: "Baruch Spinoza",
    birthYear: 1632,
    deathYear: 1677,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Spinoza.jpg/330px-Spinoza.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Néerlandais",
    movement: "Rationalisme",
    family: "Âge classique",
    influences: ["descartes"],
    summary: `Baruch Spinoza naquit à Amsterdam en 1632 dans une famille juive d'origine portugaise, réfugiée aux Pays-Bas pour fuir l'Inquisition. Formé dans la tradition juive, il s'ouvrit aussi à la philosophie moderne, notamment cartésienne. En 1656, à vingt-trois ans, il fut excommunié (herem) de la communauté juive d'Amsterdam pour ses idées hétérodoxes, avec une violence inouïe.

Après son excommunication, Spinoza vécut modestement en polissant des lentilles optiques, refusant les postes universitaires pour préserver sa liberté de pensée. Son œuvre majeure, l'"Éthique", rédigée more geometrico (à la manière des géomètres, avec définitions, axiomes et théorèmes), développe un système philosophique d'une cohérence et d'une audace extraordinaires.

Pour Spinoza, il n'existe qu'une seule substance, infinie et éternelle, qu'on peut appeler Dieu ou la Nature ("Deus sive Natura"). Tout ce qui existe est un mode, une modification de cette substance unique. Le panthéisme spinoziste identifie donc Dieu au monde : Dieu n'est pas un créateur transcendant mais la nature naturante elle-même. Cette doctrine lui valut d'être considéré comme athée par ses contemporains.

La liberté, pour Spinoza, n'est pas le libre arbitre, qui est une illusion née de notre ignorance des causes qui nous déterminent. La vraie liberté consiste à comprendre la nécessité qui nous gouverne. Cette compréhension, par le "troisième genre de connaissance", nous libère des passions tristes (crainte, haine, envie) et nous conduit à la béatitude, "amour intellectuel de Dieu". Son influence sur les Lumières, le romantisme allemand et la philosophie contemporaine est immense.`,
    mainWorks: ["Éthique", "Traité théologico-politique", "Traité de la réforme de l'entendement"],
    keyIdeas: ["Panthéisme", "Substance unique", "Conatus", "Trois genres de connaissance"]
  },
  {
    id: "leibniz",
    name: "Gottfried Wilhelm Leibniz",
    birthYear: 1646,
    deathYear: 1716,
    nationality: "Allemand",
    movement: "Rationalisme",
    family: "Âge classique",
    influences: ["descartes", "spinoza"],
    summary: `Gottfried Wilhelm Leibniz naquit à Leipzig en 1646. Génie universel, il fut à la fois philosophe, mathématicien (co-inventeur du calcul infinitésimal, indépendamment de Newton), physicien, juriste, diplomate, historien et théologien. Il correspondit avec les plus grands esprits de son temps et consacra une partie de sa vie à tenter de réconcilier catholiques et protestants.

Sa métaphysique des monades, exposée dans la "Monadologie", décrit l'univers comme composé d'une infinité de substances simples, les monades, qui sont comme des "points métaphysiques" sans parties ni étendue. Chaque monade est unique, "sans fenêtres" (elle ne reçoit rien de l'extérieur), et reflète l'univers entier selon son propre point de vue, comme un miroir vivant.

Comment alors expliquer l'ordre du monde si les monades n'interagissent pas ? Par l'"harmonie préétablie" : Dieu a créé les monades de telle sorte que leurs états internes se correspondent parfaitement, comme des horloges synchronisées. Et pourquoi Dieu a-t-il créé ce monde plutôt qu'un autre ? Parce que c'est "le meilleur des mondes possibles" : Dieu, infiniment bon et sage, a choisi de créer le monde qui réalise le maximum de perfection avec le minimum de moyens.

Cette thèse de l'optimisme leibnizien fut violemment satirisée par Voltaire dans "Candide", après le tremblement de terre de Lisbonne en 1755. Néanmoins, l'influence de Leibniz sur la logique moderne (il rêva d'une "caractéristique universelle", langage formel permettant de résoudre tous les problèmes par le calcul), la métaphysique et les mathématiques reste considérable.`,
    mainWorks: ["Monadologie", "Théodicée", "Discours de métaphysique", "Nouveaux essais sur l'entendement humain"],
    keyIdeas: ["Monades", "Harmonie préétablie", "Meilleur des mondes possibles", "Principe de raison suffisante"]
  },
  {
    id: "locke",
    name: "John Locke",
    birthYear: 1632,
    deathYear: 1704,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/JohnLocke.png/330px-JohnLocke.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Anglais",
    movement: "Empirisme",
    family: "Âge classique",
    influences: ["descartes"],
    summary: `John Locke naquit en 1632 dans le Somerset, en Angleterre, dans une famille puritaine. Formé à Oxford en médecine et en philosophie, il devint le secrétaire et médecin du comte de Shaftesbury, figure de l'opposition libérale. Contraint à l'exil en Hollande après la disgrâce de son protecteur, il revint en Angleterre après la Glorieuse Révolution de 1688.

Contre les rationalistes qui affirmaient l'existence d'idées innées, Locke soutient dans son "Essai sur l'entendement humain" que l'esprit à la naissance est une "table rase" (tabula rasa) : toutes nos idées viennent de l'expérience, soit par sensation (expérience externe), soit par réflexion (expérience interne). Cette thèse fonde l'empirisme moderne et aura une influence décisive sur la philosophie des Lumières.

En philosophie politique, les "Deux traités du gouvernement civil" développent une théorie du contrat social et des droits naturels qui influencera profondément les révolutions américaine et française. Pour Locke, les hommes possèdent des droits naturels inaliénables - vie, liberté, propriété - antérieurs à toute société. L'État naît d'un contrat par lequel les individus acceptent de céder une partie de leur liberté en échange de la protection de leurs droits.

L'État n'est donc légitime que s'il protège ces droits ; s'il les viole, le peuple a le droit de lui résister. Locke défend aussi la séparation des pouvoirs (législatif, exécutif, fédératif) et la tolérance religieuse, l'État n'ayant pas à imposer une religion. Ces idées font de lui l'un des pères du libéralisme politique et des démocraties modernes.`,
    mainWorks: ["Essai sur l'entendement humain", "Deux traités du gouvernement civil", "Lettre sur la tolérance"],
    keyIdeas: ["Tabula rasa", "Droits naturels", "Contrat social", "Tolérance religieuse"]
  },
  {
    id: "hume",
    name: "David Hume",
    birthYear: 1711,
    deathYear: 1776,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Painting_of_David_Hume.jpg/330px-Painting_of_David_Hume.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Écossais",
    movement: "Empirisme",
    family: "Lumières & idéalisme",
    influences: ["locke"],
    summary: `David Hume naquit à Édimbourg en 1711 dans une famille de petite noblesse écossaise. Précocement passionné par la philosophie, il écrivit son œuvre majeure, le "Traité de la nature humaine", à seulement vingt-six ans. L'ouvrage fut un échec commercial ("mort-né", dira-t-il), mais Hume devint plus tard célèbre par ses essais et son "Histoire d'Angleterre".

Hume pousse l'empirisme de Locke à ses conséquences les plus radicales, aboutissant à un scepticisme qui ébranle nos certitudes les plus fondamentales. Sa critique de la causalité est célèbre : nous ne percevons jamais la causalité elle-même, mais seulement des successions régulières d'événements. Notre croyance que le soleil se lèvera demain n'est qu'une habitude psychologique, non une certitude rationnelle.

De même, le "moi" n'est pas une substance permanente mais un simple "faisceau de perceptions" sans unité véritable. Quant à la raison, elle est et doit être "l'esclave des passions" : c'est le désir, non la raison, qui nous pousse à agir. Hume distingue aussi radicalement les faits (ce qui est) des valeurs (ce qui doit être), interdisant de dériver logiquement un "ought" d'un "is" - c'est la célèbre "guillotine de Hume".

Ce scepticisme radical eut un effet décisif sur l'histoire de la philosophie : il "réveilla Kant de son sommeil dogmatique" et l'incita à développer sa philosophie critique. L'influence de Hume sur la philosophie de la connaissance, la philosophie morale et la philosophie des sciences reste considérable. Il mourut en 1776, affrontant la mort avec une sérénité qui impressionna ses contemporains.`,
    mainWorks: ["Traité de la nature humaine", "Enquête sur l'entendement humain", "Dialogues sur la religion naturelle"],
    keyIdeas: ["Critique de la causalité", "Fourche de Hume", "Le moi comme faisceau", "Scepticisme"]
  },
  {
    id: "rousseau",
    name: "Jean-Jacques Rousseau",
    birthYear: 1712,
    deathYear: 1778,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Jean-Jacques_Rousseau_%28painted_portrait%29.jpg/330px-Jean-Jacques_Rousseau_%28painted_portrait%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Genevois",
    movement: "Lumières / Préromantisme",
    family: "Lumières & idéalisme",
    influences: ["locke"],
    summary: `Jean-Jacques Rousseau naquit à Genève en 1712. Sa mère mourut en lui donnant naissance, et son père, horloger fantasque, l'abandonna à dix ans. Autodidacte, il mena une vie errante avant de connaître la célébrité avec son "Discours sur les sciences et les arts" (1750), où il soutenait, contre l'optimisme des Lumières, que le progrès des arts et des sciences avait corrompu les mœurs.

Le "Discours sur l'origine de l'inégalité" (1755) développe cette critique de la civilisation. Pour Rousseau, l'homme est naturellement bon, libre et heureux dans l'état de nature ; c'est la société qui l'a corrompu. "L'homme naît libre et partout il est dans les fers." La propriété privée est à l'origine de l'inégalité et de tous les maux sociaux : "Le premier qui, ayant enclos un terrain, s'avisa de dire : Ceci est à moi, fut le vrai fondateur de la société civile."

"Du Contrat social" (1762) propose une solution politique : fonder une société légitime sur la volonté générale. Le peuple souverain est le seul dépositaire de l'autorité politique ; il exprime sa volonté générale par des lois auxquelles chacun doit se soumettre, car en obéissant à la loi qu'il s'est lui-même prescrite, le citoyen reste libre. Cette théorie de la souveraineté populaire influencera profondément la Révolution française.

"Émile ou De l'éducation" révolutionne la pédagogie en proposant une éducation naturelle, respectueuse du développement de l'enfant. Les "Confessions", autobiographie d'une sincérité sans précédent, annoncent le romantisme par l'importance accordée au sentiment et à l'introspection. Persécuté pour ses idées, Rousseau passa ses dernières années dans la solitude et la paranoïa. Il mourut en 1778.`,
    mainWorks: ["Du Contrat social", "Émile", "Les Confessions", "Discours sur l'origine de l'inégalité"],
    keyIdeas: ["Volonté générale", "État de nature", "Bonté naturelle de l'homme", "Souveraineté populaire"]
  },
  {
    id: "kant",
    name: "Emmanuel Kant",
    birthYear: 1724,
    deathYear: 1804,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Immanuel_Kant_-_Gemaelde_1.jpg/330px-Immanuel_Kant_-_Gemaelde_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Idéalisme transcendantal",
    family: "Lumières & idéalisme",
    influences: ["leibniz", "hume", "rousseau"],
    summary: `Emmanuel Kant naquit à Königsberg en Prusse orientale en 1724 et ne quitta jamais sa ville natale. Issu d'une famille modeste et pieuse, il mena une vie d'une régularité légendaire - on dit que les habitants réglaient leurs montres sur sa promenade quotidienne. Il enseigna à l'université de Königsberg pendant plus de quarante ans, d'abord comme précepteur privé puis comme professeur.

Kant opère une "révolution copernicienne" en philosophie : de même que Copernic avait montré que c'est la Terre qui tourne autour du Soleil et non l'inverse, Kant montre que ce n'est pas notre connaissance qui se règle sur les objets, mais les objets qui se règlent sur notre connaissance. Notre esprit n'est pas passif ; il structure l'expérience selon des formes a priori (l'espace et le temps comme formes de la sensibilité, les catégories comme concepts purs de l'entendement).

La "Critique de la raison pure" (1781) établit ainsi les conditions et les limites de notre connaissance. Nous ne pouvons connaître que les phénomènes, c'est-à-dire les choses telles qu'elles nous apparaissent, structurées par notre esprit. Les choses en soi, les noumènes, nous sont inaccessibles. Mais la raison, par sa nature même, tend à dépasser ces limites et engendre des illusions métaphysiques (l'âme, le monde, Dieu) qu'il faut critiquer sans pour autant les détruire.

La "Critique de la raison pratique" fonde la morale sur l'impératif catégorique : "Agis uniquement d'après la maxime qui fait que tu peux vouloir en même temps qu'elle devienne une loi universelle." La moralité réside dans l'intention, non dans les conséquences de l'action. Kant pose ainsi les fondements d'une éthique déontologique qui reste une référence majeure. Son influence sur toute la philosophie ultérieure est immense.`,
    mainWorks: ["Critique de la raison pure", "Critique de la raison pratique", "Critique de la faculté de juger", "Fondements de la métaphysique des mœurs"],
    keyIdeas: ["Révolution copernicienne", "Phénomène/Noumène", "Impératif catégorique", "Formes a priori"]
  },
  {
    id: "hegel",
    name: "Georg Wilhelm Friedrich Hegel",
    birthYear: 1770,
    deathYear: 1831,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Hegel_by_Schlesinger.jpg/330px-Hegel_by_Schlesinger.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Idéalisme allemand",
    family: "Lumières & idéalisme",
    influences: ["spinoza", "kant"],
    summary: `Georg Wilhelm Friedrich Hegel naquit à Stuttgart en 1770. Après des études de théologie à Tübingen, où il se lia d'amitié avec le poète Hölderlin et le philosophe Schelling, il fut précepteur puis professeur à Iéna, Heidelberg et enfin Berlin, où il devint le philosophe officiel de l'État prussien et régna sur la vie intellectuelle allemande jusqu'à sa mort en 1831.

Hegel développe le système philosophique le plus ambitieux de l'histoire moderne. Pour lui, la réalité est Esprit (Geist), et cet Esprit est un processus dialectique par lequel il prend progressivement conscience de lui-même à travers l'histoire. La dialectique hégélienne procède par négation et dépassement : chaque moment de la pensée (thèse) appelle son contraire (antithèse), et leur confrontation produit un dépassement (synthèse) qui les réconcilie à un niveau supérieur.

La "Phénoménologie de l'esprit" (1807) décrit ce parcours de la conscience depuis la certitude sensible la plus immédiate jusqu'au savoir absolu. On y trouve la célèbre dialectique du maître et de l'esclave : le maître, qui a risqué sa vie, domine l'esclave qui a préféré la servitude à la mort ; mais c'est l'esclave qui, par le travail, transforme le monde et accède à une conscience de soi supérieure.

L'histoire universelle est pour Hegel "le progrès de la conscience de la liberté". Les différents peuples et civilisations incarnent des moments de ce devenir de l'Esprit. L'État moderne, particulièrement l'État prussien selon Hegel, représente la réalisation de la liberté concrète. Cette philosophie de l'histoire influencera profondément Marx, l'existentialisme et toute la philosophie continentale, soit pour la poursuivre, soit pour la critiquer.`,
    mainWorks: ["Phénoménologie de l'esprit", "Science de la logique", "Principes de la philosophie du droit", "Encyclopédie des sciences philosophiques"],
    keyIdeas: ["Dialectique", "Esprit absolu", "Aufhebung (dépassement)", "Dialectique maître-esclave"]
  },
  {
    id: "schopenhauer",
    name: "Arthur Schopenhauer",
    birthYear: 1788,
    deathYear: 1860,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Schopenhauer_by_Jules_Luntesch%C3%BCtz.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "Allemand",
    movement: "Pessimisme philosophique",
    family: "XIXe siècle",
    influences: ["platon", "kant"],
    summary: `Arthur Schopenhauer naquit à Dantzig en 1788 dans une famille de riches négociants. Après la mort de son père, probablement par suicide, il se consacra à la philosophie. Son œuvre majeure, "Le Monde comme volonté et comme représentation" (1818), passa d'abord inaperçue, éclipsée par le succès de Hegel qu'il détestait. Ce n'est qu'à la fin de sa vie qu'il connut enfin la célébrité.

Schopenhauer développe une métaphysique pessimiste influencée par la philosophie indienne, notamment les Upanishads et le bouddhisme. Le monde phénoménal, le monde comme représentation, n'est que le "voile de Maya", une illusion. La réalité ultime, la chose en soi kantienne, c'est la Volonté : une force aveugle, irrationnelle et insatiable qui se manifeste dans tous les êtres sous forme de vouloir-vivre.

Cette Volonté nous condamne au malheur. Désirer, c'est manquer : le désir insatisfait est souffrance. Mais le désir satisfait engendre aussitôt l'ennui, puis un nouveau désir. La vie oscille ainsi "comme un pendule, de droite à gauche, de la souffrance à l'ennui". Le bonheur n'est qu'une illusion négative, la cessation momentanée de la douleur. Face à ce pessimisme radical, Schopenhauer propose des voies de salut.

L'art, particulièrement la musique, nous offre une contemplation désintéressée qui suspend temporairement la volonté. La morale, fondée sur la compassion universelle, nous fait reconnaître dans la souffrance d'autrui notre propre souffrance. L'ascétisme enfin, négation du vouloir-vivre, conduit au nirvana, à l'extinction de la volonté. Premier philosophe occidental à intégrer sérieusement la pensée orientale, Schopenhauer influença profondément Nietzsche, Wagner, Freud, Thomas Mann et Wittgenstein.`,
    mainWorks: ["Le Monde comme volonté et comme représentation", "Parerga et Paralipomena", "L'Art d'avoir toujours raison"],
    keyIdeas: ["Volonté aveugle", "Pessimisme métaphysique", "Négation du vouloir-vivre", "Compassion universelle"]
  },
  {
    id: "kierkegaard",
    name: "Søren Kierkegaard",
    birthYear: 1813,
    deathYear: 1855,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Kierkegaard_1902_by_Luplau_Janssen.jpg/330px-Kierkegaard_1902_by_Luplau_Janssen.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Danois",
    movement: "Existentialisme chrétien",
    family: "XIXe siècle",
    influences: ["socrates", "hegel"],
    summary: `Søren Kierkegaard naquit à Copenhague en 1813 dans une famille marquée par la mélancolie et une religiosité austère. Son père, riche négociant, lui transmit un sentiment de culpabilité et une angoisse qui marquèrent toute son œuvre. Après des études de théologie et une thèse sur l'ironie socratique, il vécut de sa fortune, consacrant sa brève existence à l'écriture philosophique.

Kierkegaard s'oppose violemment aux systèmes abstraits, particulièrement celui de Hegel. Pour lui, la philosophie doit partir non de concepts universels mais de l'existence concrète de l'individu singulier, avec son angoisse, ses choix, sa subjectivité irréductible. "La vérité est la subjectivité", proclame-t-il : ce qui importe n'est pas ce qu'on pense mais comment on le vit, avec quelle passion on s'y engage.

Il distingue trois "stades" ou "sphères" de l'existence. Le stade esthétique est celui de la recherche du plaisir et de l'instant : Don Juan en est la figure. Le stade éthique est celui du devoir, de l'engagement dans le mariage et la vie sociale. Le stade religieux enfin est celui de la relation personnelle à Dieu, incarnée par Abraham sacrifiant son fils Isaac. Le passage d'un stade à l'autre ne se fait pas par la raison mais par un "saut" existentiel.

L'angoisse, concept central de sa pensée, révèle notre liberté vertigineuse : nous sommes condamnés à choisir, sans garantie ni certitude. La foi elle-même est un "saut dans l'absurde", un engagement passionnel qui défie la raison. Kierkegaard mourut à quarante-deux ans, après avoir attaqué violemment l'Église officielle du Danemark. Redécouvert au XXe siècle, il est considéré comme le précurseur de l'existentialisme.`,
    mainWorks: ["Ou bien... Ou bien", "Crainte et Tremblement", "Le Concept de l'angoisse", "Post-scriptum aux Miettes philosophiques"],
    keyIdeas: ["Existence individuelle", "Trois stades de l'existence", "Angoisse et liberté", "Saut de la foi"]
  },
  {
    id: "marx",
    name: "Karl Marx",
    birthYear: 1818,
    deathYear: 1883,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored.png/330px-Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Matérialisme historique",
    family: "XIXe siècle",
    influences: ["hegel"],
    summary: `Karl Marx naquit à Trèves en 1818 dans une famille juive convertie au protestantisme. Après des études de droit et de philosophie, il se tourna vers le journalisme radical et dut s'exiler à Paris, Bruxelles puis Londres, où il passa la majeure partie de sa vie dans la pauvreté, soutenu financièrement par son ami Friedrich Engels. Il y rédigea "Le Capital", son œuvre maîtresse.

Le matérialisme historique affirme que ce sont les conditions matérielles de la vie, et non les idées, qui déterminent l'évolution des sociétés. L'infrastructure économique (forces productives et rapports de production) conditionne la superstructure (institutions politiques, juridiques, religieuses, idéologiques). L'histoire est mue par les contradictions entre les forces productives en développement et les rapports de production existants.

Ces contradictions se manifestent par la lutte des classes : hommes libres et esclaves, patriciens et plébéiens, seigneurs et serfs, bourgeois et prolétaires. Dans le capitalisme, le travailleur est "aliéné" : il est dépossédé du produit de son travail, de son activité elle-même, de son essence humaine et de ses semblables. Le capital extrait la "plus-value", différence entre la valeur produite par le travailleur et le salaire qu'il reçoit.

Marx annonce le dépassement inévitable du capitalisme par ses propres contradictions : la concentration du capital, la paupérisation du prolétariat, les crises de surproduction conduiront à une révolution qui abolira la propriété privée des moyens de production et instaurera une société sans classes, le communisme. L'influence de Marx sur le XXe siècle - révolutions, mouvements ouvriers, pensée critique - est immense, qu'on la célèbre ou qu'on la déplore.`,
    mainWorks: ["Le Capital", "Manifeste du Parti communiste", "L'Idéologie allemande", "Manuscrits de 1844"],
    keyIdeas: ["Lutte des classes", "Plus-value", "Aliénation", "Matérialisme historique"]
  },
  {
    id: "nietzsche",
    name: "Friedrich Nietzsche",
    birthYear: 1844,
    deathYear: 1900,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Portrait_of_Friedrich_Nietzsche.jpg/330px-Portrait_of_Friedrich_Nietzsche.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Philosophie de la vie",
    family: "XIXe siècle",
    influences: ["schopenhauer"],
    summary: `Friedrich Nietzsche naquit en 1844 à Röcken, en Saxe prussienne, dans une famille de pasteurs luthériens. Brillant philologue, il fut nommé professeur à l'université de Bâle à vingt-quatre ans, mais dut démissionner dix ans plus tard pour raisons de santé. Il mena ensuite une vie errante en Suisse et en Italie, minée par la maladie, jusqu'à son effondrement mental en 1889.

Nietzsche annonce "la mort de Dieu" : non pas une thèse sur l'existence divine, mais le constat que les valeurs chrétiennes qui structuraient la civilisation occidentale ont perdu leur crédibilité. Cette mort ouvre l'ère du nihilisme, danger suprême mais aussi opportunité pour une "transvaluation de toutes les valeurs". Il faut créer de nouvelles valeurs, non plus fondées sur l'au-delà mais sur l'affirmation de la vie.

La morale chrétienne est une "morale d'esclaves" née du ressentiment des faibles contre les forts. Elle a inversé les valeurs naturelles, faisant de la faiblesse une vertu et de la force un péché. Nietzsche célèbre au contraire la "volonté de puissance", non pas volonté de dominer autrui mais affirmation créatrice de la vie, dépassement de soi, expansion de ses forces. Le "Surhomme" (Übermensch) est celui qui crée ses propres valeurs et dit "oui" à la vie.

L'Éternel Retour pose une question existentielle décisive : vivrais-tu ta vie exactement à l'identique une infinité de fois ? Cette pensée est un critère d'évaluation : seul celui qui peut désirer le retour éternel de chaque instant de sa vie a vraiment affirmé l'existence. L'influence de Nietzsche sur la philosophie du XXe siècle, la littérature, la psychologie et les arts est immense, malgré les déformations que le nazisme fit subir à sa pensée.`,
    mainWorks: ["Ainsi parlait Zarathoustra", "Par-delà bien et mal", "La Généalogie de la morale", "Le Gai Savoir"],
    keyIdeas: ["Mort de Dieu", "Volonté de puissance", "Surhomme", "Éternel Retour"]
  },
  {
    id: "freud",
    name: "Sigmund Freud",
    birthYear: 1856,
    deathYear: 1939,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/330px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Autrichien",
    movement: "Psychanalyse",
    family: "XIXe siècle",
    influences: ["schopenhauer", "nietzsche"],
    summary: `Sigmund Freud naquit en 1856 à Freiberg, en Moravie, dans une famille juive. Formé en médecine à Vienne, il se spécialisa en neurologie et s'intéressa aux troubles hystériques. C'est en collaboration avec Josef Breuer, puis seul, qu'il développa la psychanalyse, méthode d'investigation de l'inconscient par la parole, l'association libre et l'interprétation des rêves.

La découverte majeure de Freud est l'inconscient : une grande partie de notre vie psychique nous échappe et détermine nos pensées, nos émotions et nos actes à notre insu. L'appareil psychique se divise en trois instances : le Ça (réservoir des pulsions inconscientes), le Moi (instance rationnelle en contact avec la réalité) et le Surmoi (conscience morale intériorisée, héritière du complexe d'Œdipe). Les névroses résultent des conflits entre ces instances.

La sexualité joue un rôle central dans la théorie freudienne. Freud découvre la sexualité infantile et ses stades (oral, anal, phallique), le complexe d'Œdipe (désir pour le parent du sexe opposé, rivalité avec le parent du même sexe), le refoulement des désirs inacceptables dans l'inconscient. Les rêves sont "la voie royale vers l'inconscient" : ils réalisent de manière déguisée des désirs refoulés.

Freud accomplit ainsi une troisième "blessure narcissique" à l'humanité, après Copernic (la Terre n'est pas au centre de l'univers) et Darwin (l'homme descend de l'animal) : l'homme n'est pas maître dans sa propre maison, l'inconscient gouverne. Exilé à Londres après l'Anschluss, Freud mourut en 1939. Son influence sur la psychologie, la philosophie, l'art et la culture du XXe siècle est immense, malgré les critiques adressées à la scientificité de la psychanalyse.`,
    mainWorks: ["L'Interprétation des rêves", "Trois essais sur la théorie sexuelle", "Malaise dans la civilisation", "Introduction à la psychanalyse"],
    keyIdeas: ["Inconscient", "Ça, Moi, Surmoi", "Complexe d'Œdipe", "Refoulement"]
  },
  {
    id: "husserl",
    name: "Edmund Husserl",
    birthYear: 1859,
    deathYear: 1938,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Edmund_Husserl_1910s.jpg/330px-Edmund_Husserl_1910s.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Phénoménologie",
    family: "Phénoménologie & existentialisme",
    influences: ["descartes", "kant"],
    summary: `Edmund Husserl naquit en 1859 à Prossnitz, en Moravie, dans une famille juive. D'abord mathématicien, élève de Weierstrass, il se tourna vers la philosophie sous l'influence de Franz Brentano. Professeur à Göttingen puis à Fribourg, il fut marginalisé à la fin de sa vie en raison de ses origines juives. Il mourut en 1938, ses manuscrits sauvés de la destruction par le père franciscain Herman Leo Van Breda.

Husserl est le fondateur de la phénoménologie, courant majeur de la philosophie du XXe siècle. Son mot d'ordre : "retour aux choses mêmes" (zu den Sachen selbst). Il s'agit d'étudier les phénomènes tels qu'ils apparaissent à la conscience, en suspendant (épochè) toute présupposition sur leur existence réelle ou sur les théories scientifiques qui prétendent les expliquer.

Le concept central de la phénoménologie est l'intentionnalité, hérité de Brentano : toute conscience est "conscience de quelque chose". La conscience n'est pas une boîte où des représentations seraient contenues ; elle est visée, ouverture sur le monde. La réduction phénoménologique permet de décrire les structures essentielles de cette visée intentionnelle, les différentes manières dont les objets se donnent à la conscience.

Dans ses derniers travaux, Husserl développe le concept de "Lebenswelt" (monde de la vie), ce monde pré-scientifique de l'expérience quotidienne que la science présuppose mais oublie. La crise des sciences européennes vient de cet oubli. La phénoménologie husserlienne a profondément influencé Heidegger (son assistant puis successeur), Sartre, Merleau-Ponty et toute la philosophie continentale du XXe siècle.`,
    mainWorks: ["Recherches logiques", "Idées directrices pour une phénoménologie", "Méditations cartésiennes", "La Crise des sciences européennes"],
    keyIdeas: ["Intentionnalité", "Réduction phénoménologique", "Lebenswelt (monde vécu)", "Retour aux choses mêmes"]
  },
  {
    id: "heidegger",
    name: "Martin Heidegger",
    birthYear: 1889,
    deathYear: 1976,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Heidegger_2_%281960%29.jpg/330px-Heidegger_2_%281960%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Phénoménologie / Existentialisme",
    family: "Phénoménologie & existentialisme",
    influences: ["kierkegaard", "nietzsche", "husserl"],
    summary: `Martin Heidegger naquit en 1889 à Messkirch, en Forêt-Noire, dans une famille catholique modeste. Après des études de théologie et de philosophie, il devint l'assistant de Husserl à Fribourg et lui succéda en 1928. Son engagement en faveur du nazisme en 1933, lorsqu'il accepta le rectorat de l'université de Fribourg, reste une tache sur sa biographie que les interprètes n'ont cessé de discuter.

"Être et Temps" (1927), son œuvre majeure restée inachevée, pose la question de l'Être que la métaphysique occidentale aurait oubliée au profit de l'étant. Pour accéder à l'Être, Heidegger analyse l'existence humaine, le Dasein (l'être-là), car c'est le seul étant pour qui son être est en question. Le Dasein est "être-au-monde" : il n'est pas d'abord un sujet isolé qui rencontrerait ensuite le monde, il est toujours déjà engagé dans un monde.

Le Dasein est "jeté" dans un monde qu'il n'a pas choisi, parmi des étants qu'il utilise comme des "outils" (le marteau est pour enfoncer des clous). L'angoisse, à distinguer de la peur, révèle notre finitude et notre "être-pour-la-mort". Face à l'authenticité de cette existence mortelle, le "On" (das Man) représente l'inauthenticité de la vie quotidienne où nous fuyons notre condition en nous perdant dans le bavardage et la curiosité.

Après le "tournant" des années 1930, Heidegger s'éloigne de l'analytique existentiale pour méditer sur l'histoire de l'Être, le danger de la technique moderne qui réduit tout à un "fonds" exploitable, et la possibilité d'un autre commencement. Malgré la controverse liée à son engagement nazi, son influence sur l'existentialisme, l'herméneutique, la déconstruction et la philosophie de la technique reste considérable.`,
    mainWorks: ["Être et Temps", "Introduction à la métaphysique", "Lettre sur l'humanisme", "Chemins qui ne mènent nulle part"],
    keyIdeas: ["Question de l'Être", "Dasein", "Être-pour-la-mort", "Authenticité/Inauthenticité"]
  },
  {
    id: "wittgenstein",
    name: "Ludwig Wittgenstein",
    birthYear: 1889,
    deathYear: 1951,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Ludwig_Wittgenstein_%28cropped%29.jpg/330px-Ludwig_Wittgenstein_%28cropped%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Autrichien",
    movement: "Philosophie analytique",
    family: "Pensée contemporaine",
    influences: ["schopenhauer"],
    summary: `Ludwig Wittgenstein naquit à Vienne en 1889 dans une des familles les plus riches d'Autriche, au carrefour de la haute finance, de la culture et de l'art. Après des études d'ingénieur en aéronautique, il se tourna vers la logique et la philosophie, d'abord à Iéna auprès de Frege, puis à Cambridge auprès de Russell. Il abandonna sa fortune à ses frères et sœurs et mena une vie d'une austérité monacale.

Le "Tractatus logico-philosophicus" (1921), seul livre publié de son vivant, analyse la relation entre le langage et le monde. Le langage est une image logique de la réalité : une proposition a un sens si et seulement si elle représente un état de choses possible. Les propositions de la logique sont des tautologies, vraies quelle que soit la réalité. Quant aux propositions métaphysiques, éthiques ou esthétiques, elles sont des non-sens : "Ce dont on ne peut parler, il faut le taire."

Mais Wittgenstein ne s'est pas arrêté là. Les "Investigations philosophiques", publiées après sa mort, marquent un tournant radical. Il abandonne la théorie picturale du langage pour une conception pragmatique : le sens d'un mot n'est pas l'objet qu'il désigne mais son usage dans un "jeu de langage". Il n'y a pas d'essence commune à tous les jeux (de cartes, de ballon, d'échecs), mais des "ressemblances de famille".

Les problèmes philosophiques naissent quand "le langage part en vacances", quand nous arrachons les mots à leur usage ordinaire. La philosophie n'a pas à construire des théories mais à dissoudre les confusions conceptuelles par une attention au fonctionnement effectif du langage. Wittgenstein mourut à Cambridge en 1951, ayant profondément renouvelé la philosophie du langage et influencé toute la philosophie analytique.`,
    mainWorks: ["Tractatus logico-philosophicus", "Investigations philosophiques", "De la certitude"],
    keyIdeas: ["Théorie picturale du langage", "Jeux de langage", "Ressemblances de famille", "Philosophie comme thérapie"]
  },
  {
    id: "sartre",
    name: "Jean-Paul Sartre",
    birthYear: 1905,
    deathYear: 1980,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jean_Paul_Sartre_1965.jpg/330px-Jean_Paul_Sartre_1965.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Existentialisme",
    family: "Phénoménologie & existentialisme",
    influences: ["hegel", "husserl", "heidegger"],
    summary: `Jean-Paul Sartre naquit à Paris en 1905. Orphelin de père à deux ans, il fut élevé par sa mère et son grand-père, Charles Schweitzer, oncle d'Albert Schweitzer. Brillant élève de l'École normale supérieure, il y rencontra Simone de Beauvoir avec qui il forma un couple légendaire. Professeur de philosophie, il connut la célébrité avec "La Nausée" (1938) et devint après la guerre la figure emblématique de l'existentialisme.

"L'existence précède l'essence" : telle est la formule centrale de l'existentialisme sartrien. Contrairement aux objets fabriqués (un coupe-papier est fait pour couper), l'homme n'a pas de nature prédéterminée, pas d'essence qui précéderait son existence. Il existe d'abord, se trouve "jeté" dans le monde, puis se définit par ses choix, ses actes, ses projets. L'homme est "condamné à être libre".

Cette liberté radicale est source d'angoisse : aucun Dieu, aucune nature humaine, aucun déterminisme ne nous dicte ce que nous devons être. Nous sommes "entièrement responsables" de ce que nous faisons de notre vie. La "mauvaise foi" consiste à fuir cette liberté écrasante en se cachant derrière des excuses (mon caractère, les circonstances, la société), en se faisant chose alors qu'on est liberté. Le garçon de café qui joue au garçon de café est en mauvaise foi.

Sartre en tire les conséquences politiques : si je suis libre, je dois lutter pour la liberté des autres. Il s'engage contre la colonisation, la guerre du Vietnam, aux côtés des mouvements révolutionnaires. Il refuse le prix Nobel de littérature en 1964. Sa pensée évolue vers le marxisme dans la "Critique de la raison dialectique". Il mourut en 1980, suivi par une foule immense lors de ses funérailles.`,
    mainWorks: ["L'Être et le Néant", "L'existentialisme est un humanisme", "La Nausée", "Huis clos"],
    keyIdeas: ["Existence précède essence", "Liberté radicale", "Mauvaise foi", "Engagement"]
  },
  {
    id: "merleau-ponty",
    name: "Maurice Merleau-Ponty",
    birthYear: 1908,
    deathYear: 1961,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Maurice_Merleau-Ponty.jpg/330px-Maurice_Merleau-Ponty.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Phénoménologie",
    family: "Phénoménologie & existentialisme",
    influences: ["husserl", "heidegger"],
    summary: `Maurice Merleau-Ponty naquit à Rochefort-sur-Mer en 1908. Condisciple de Sartre et de Beauvoir à l'École normale supérieure, il fut d'abord proche de l'existentialisme sartrien avant de s'en distancer. Professeur à Lyon puis à la Sorbonne, il fut élu au Collège de France en 1952 où il enseigna jusqu'à sa mort prématurée en 1961, à cinquante-trois ans, d'une crise cardiaque.

La "Phénoménologie de la perception" (1945) développe une philosophie du corps propre qui dépasse le dualisme cartésien. Contre l'idée d'une conscience désincarnée, pure intériorité sans épaisseur, Merleau-Ponty montre que nous sommes d'abord corps percevant, engagé dans le monde. Le corps n'est pas un objet parmi d'autres que je posséderais, mais "le véhicule de l'être au monde", mon ancrage dans les choses.

La perception n'est pas une réception passive d'impressions sensorielles assemblées ensuite par l'entendement. Elle est une relation active, charnelle, avec le monde. Je ne perçois pas des taches de couleur que j'interpréterais ensuite comme un arbre : je perçois d'emblée un arbre. Le "phénomène" n'est pas une apparence trompeuse derrière laquelle se cacherait une réalité ; c'est la chose même telle qu'elle se donne à ma perception incarnée.

Dans ses derniers travaux, restés inachevés, Merleau-Ponty développe le concept de "chair" (Fleisch) : non pas la matière au sens scientifique, mais l'étoffe commune du voyant et du visible, du touchant et du touché. Ma main gauche touchant ma main droite qui touche le monde révèle cette réversibilité fondamentale. Son influence sur la philosophie contemporaine, les sciences cognitives et les réflexions sur l'incarnation reste considérable.`,
    mainWorks: ["Phénoménologie de la perception", "Le Visible et l'Invisible", "Sens et non-sens"],
    keyIdeas: ["Corps propre", "Chair du monde", "Perception incarnée", "Chiasme"]
  },
  {
    id: "beauvoir",
    name: "Simone de Beauvoir",
    birthYear: 1908,
    deathYear: 1986,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Simone_de_Beauvoir2.png/330px-Simone_de_Beauvoir2.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Française",
    movement: "Existentialisme / Féminisme",
    family: "Phénoménologie & existentialisme",
    influences: ["hegel", "sartre"],
    summary: `Simone de Beauvoir naquit à Paris en 1908 dans une famille bourgeoise. Brillante élève, elle fut reçue deuxième à l'agrégation de philosophie en 1929, juste derrière Sartre, avec qui elle forma un couple mythique, fondé sur la liberté et la transparence. Professeure, puis écrivaine à plein temps, elle fut une figure centrale de la vie intellectuelle française, engagée dans tous les combats progressistes.

"Le Deuxième Sexe" (1949) est le texte fondateur du féminisme moderne. "On ne naît pas femme, on le devient" : cette formule célèbre affirme que le genre est une construction sociale, non une essence naturelle. La femme a été historiquement constituée comme "l'Autre" de l'homme, définie non par elle-même mais par rapport au sujet masculin. Enfermée dans l'immanence (la répétition du quotidien, la maternité), elle se voit interdire la transcendance (la création, l'action sur le monde).

Beauvoir analyse minutieusement les mécanismes de cette oppression : mythes masculins (la femme fatale, la femme-enfant, la mère), éducation différentielle, maternité imposée, dépendance économique. Elle appelle les femmes à se libérer par l'autonomie économique, le refus de la maternité obligatoire, l'engagement politique et la solidarité féminine. Le livre fit scandale à sa parution mais influença profondément le mouvement féministe.

Sa philosophie, exposée dans "Pour une morale de l'ambiguïté", développe une éthique existentialiste originale. Nous sommes à la fois liberté et facticité, transcendance et situation. Assumer cette ambiguïté, c'est refuser les fuites : ni divertissement, ni esprit de sérieux qui prétendrait fonder nos valeurs sur un absolu. Beauvoir mourut en 1986, six ans après Sartre, dont elle avait raconté l'agonie dans "La Cérémonie des adieux".`,
    mainWorks: ["Le Deuxième Sexe", "Mémoires d'une jeune fille rangée", "Pour une morale de l'ambiguïté", "Les Mandarins"],
    keyIdeas: ["Construction du genre", "Femme comme Autre", "Immanence/Transcendance", "Liberté féminine"]
  },
  {
    id: "arendt",
    name: "Hannah Arendt",
    birthYear: 1906,
    deathYear: 1975,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hannah_Arendt_auf_dem_1._Kulturkritikerkongress%2C_Barbara_Niggl_Radloff%2C_FM-2019-1-5-9-16_%28cropped%29.jpg/330px-Hannah_Arendt_auf_dem_1._Kulturkritikerkongress%2C_Barbara_Niggl_Radloff%2C_FM-2019-1-5-9-16_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemande-Américaine",
    movement: "Philosophie politique",
    family: "Pensée contemporaine",
    influences: ["augustin", "heidegger"],
    summary: `Hannah Arendt naquit en 1906 à Hanovre dans une famille juive assimilée. Élève de Husserl, Heidegger (avec qui elle eut une liaison) et Jaspers, elle dut fuir l'Allemagne nazie en 1933. Après un séjour en France, où elle fut internée au camp de Gurs, elle émigra aux États-Unis en 1941 et devint citoyenne américaine. Elle enseigna dans plusieurs universités américaines jusqu'à sa mort en 1975.

"Les Origines du totalitarisme" (1951) analyse le nazisme et le stalinisme comme des phénomènes radicalement nouveaux, irréductibles aux formes antérieures de tyrannie. Le totalitarisme vise à rendre les hommes "superflus", à détruire leur spontanéité et leur pluralité par la terreur et l'idéologie. Les camps de concentration et d'extermination en sont la manifestation la plus extrême, où meurent l'individualité juridique, morale et enfin l'individualité tout court.

Son reportage sur le procès d'Adolf Eichmann à Jérusalem (1961) introduit le concept controversé de "banalité du mal" : le mal radical peut être commis par des individus ordinaires, médiocres, qui ne pensent pas. Eichmann n'était pas un monstre démoniaque mais un bureaucrate incapable de penser par lui-même, obéissant aux ordres sans se poser de questions. Cette thèse suscita une polémique violente.

"Condition de l'homme moderne" distingue trois activités humaines fondamentales : le travail (reproduction de la vie biologique), l'œuvre (fabrication d'objets durables), l'action (initiative dans l'espace public, par la parole et l'acte). Seule l'action réalise pleinement notre humanité, notre liberté et notre pluralité. Arendt déplore le triomphe du travail et de la consommation dans les sociétés modernes, qui menace l'espace public et la politique véritable.`,
    mainWorks: ["Les Origines du totalitarisme", "Condition de l'homme moderne", "Eichmann à Jérusalem", "La Crise de la culture"],
    keyIdeas: ["Banalité du mal", "Travail/Œuvre/Action", "Espace public", "Pluralité humaine"]
  },
  {
    id: "camus",
    name: "Albert Camus",
    birthYear: 1913,
    deathYear: 1960,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg/330px-Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Absurdisme",
    family: "Phénoménologie & existentialisme",
    influences: ["nietzsche", "kierkegaard"],
    summary: `Albert Camus naquit en 1913 à Mondovi, en Algérie, dans une famille très pauvre. Son père, ouvrier agricole, mourut à la bataille de la Marne en 1914 ; sa mère, d'origine espagnole, quasi analphabète et à moitié sourde, éleva seule ses deux fils. Grâce à son instituteur Louis Germain, puis à Jean Grenier, Camus put poursuivre des études. Il fut journaliste, résistant, et reçut le prix Nobel de littérature en 1957.

"Le Mythe de Sisyphe" (1942) pose la question fondamentale : "Il n'y a qu'un problème philosophique vraiment sérieux : c'est le suicide. Juger que la vie vaut ou ne vaut pas la peine d'être vécue, c'est répondre à la question fondamentale de la philosophie." L'absurde naît de la confrontation entre l'appel humain au sens et le silence déraisonnable du monde. Mais le suicide n'est pas la réponse : il faut "imaginer Sisyphe heureux", trouvant dans la lutte elle-même une raison de vivre.

"L'Homme révolté" (1951) analyse la révolte comme refus de l'injustice au nom d'une valeur partagée : "Je me révolte, donc nous sommes." Mais Camus critique les révolutions qui, au nom de l'histoire et de fins absolues, justifient le meurtre. Contre Sartre et les communistes, il défend une éthique de la mesure et de la solidarité humaine, qui refuse de sacrifier des hommes réels à des lendemains qui chantent. Cette polémique le brouilla avec Sartre.

Bien qu'ami de Sartre, Camus refusait l'étiquette d'existentialiste. Sa pensée est celle d'un moraliste méditerranéen, attachée à la beauté du monde, à la sensualité, à la solidarité des hommes face à leur condition. Il mourut le 4 janvier 1960 dans un accident de voiture, à quarante-six ans. Dans sa sacoche, on trouva le manuscrit inachevé du "Premier homme", roman autobiographique poignant publié en 1994.`,
    mainWorks: ["Le Mythe de Sisyphe", "L'Étranger", "La Peste", "L'Homme révolté"],
    keyIdeas: ["Absurde", "Révolte", "Solidarité humaine", "Mesure"]
  },
  {
    id: "foucault",
    name: "Michel Foucault",
    birthYear: 1926,
    deathYear: 1984,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Photo_of_Michel_Foucault_on_1970_dustjacket_of_The_Order_of_Things.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "Français",
    movement: "Post-structuralisme",
    family: "Pensée contemporaine",
    influences: ["nietzsche", "heidegger"],
    summary: `Michel Foucault naquit à Poitiers en 1926 dans une famille de médecins. Élève brillant mais tourmenté (il fit plusieurs tentatives de suicide), il intégra l'École normale supérieure où il eut pour professeurs Althusser et Hyppolite. Après des séjours à l'étranger (Suède, Pologne, Allemagne), il fut élu au Collège de France en 1970 à la chaire d'"Histoire des systèmes de pensée".

Son œuvre analyse les rapports entre savoir et pouvoir à travers l'histoire de différentes pratiques : la folie ("Histoire de la folie", 1961), la médecine clinique, les sciences humaines ("Les Mots et les Choses", 1966), la prison ("Surveiller et punir", 1975), la sexualité. Foucault montre comment ce qui nous semble naturel ou universel est en fait historiquement constitué, produit par des dispositifs de savoir-pouvoir.

"Surveiller et punir" analyse comment les sociétés modernes ont remplacé les supplices spectaculaires par des techniques disciplinaires qui quadrillent l'espace, contrôlent le temps, normalisent les conduites. Le "Panoptique" de Bentham, prison où le surveillant voit sans être vu, devient le modèle d'une société de surveillance. Le pouvoir n'est pas seulement répressif : il est productif, il produit des savoirs, des individus, des vérités, des subjectivités.

L'"Histoire de la sexualité" critique l'"hypothèse répressive" : loin d'avoir réprimé la sexualité, les sociétés modernes n'ont cessé d'en parler, de la constituer en savoir, de la faire avouer. La sexualité n'est pas une réalité naturelle que le pouvoir réprime, mais un dispositif historique. Dans ses derniers travaux, Foucault s'intéresse aux "techniques de soi" antiques, arts de l'existence qui permettent de se transformer soi-même. Il mourut du sida en 1984.`,
    mainWorks: ["Histoire de la folie", "Surveiller et punir", "Histoire de la sexualité", "Les Mots et les Choses"],
    keyIdeas: ["Pouvoir-savoir", "Biopolitique", "Généalogie", "Technologies du soi"]
  },
  {
    id: "derrida",
    name: "Jacques Derrida",
    birthYear: 1930,
    deathYear: 2004,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Derrida_EHESS_%28cropped%29.png/330px-Derrida_EHESS_%28cropped%29.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Déconstruction",
    family: "Pensée contemporaine",
    influences: ["husserl", "heidegger", "nietzsche"],
    summary: `Jacques Derrida naquit à El-Biar, près d'Alger, en 1930, dans une famille juive séfarade. Élève de l'École normale supérieure, où il eut pour condisciples Althusser, Foucault et Bourdieu, il enseigna d'abord à la Sorbonne puis à l'École des hautes études en sciences sociales. Sa pensée, d'abord controversée en France, connut un succès considérable aux États-Unis, particulièrement dans les départements de littérature.

La déconstruction, méthode de lecture qu'il développe à partir de 1967, révèle les tensions, les hiérarchies et les présupposés cachés dans les textes philosophiques. La métaphysique occidentale, depuis Platon, repose sur des oppositions binaires (parole/écriture, présence/absence, nature/culture, homme/femme) où un terme est privilégié et l'autre subordonné. La déconstruction montre que le terme subordonné est en fait nécessaire au terme dominant, minant ainsi la hiérarchie.

Derrida critique le "logocentrisme" occidental, qui privilégie la parole (logos) sur l'écriture, la présence sur l'absence. "Il n'y a pas de hors-texte" : notre accès au monde est toujours médiatisé par des signes, des traces, des écritures. La "différance" (avec un 'a', néologisme combinant différence et différement) désigne ce mouvement par lequel le sens est toujours différé, jamais pleinement présent.

L'influence de Derrida sur la philosophie, la théorie littéraire, l'architecture, les études postcoloniales et les études de genre est considérable, malgré les critiques qui lui reprochent son style obscur et son relativisme supposé. Dans ses derniers travaux, il s'est intéressé aux thèmes de l'hospitalité, du pardon, de la justice, du deuil. Il mourut à Paris en 2004, laissant une œuvre immense et encore controversée.`,
    mainWorks: ["De la grammatologie", "L'Écriture et la Différence", "Marges de la philosophie", "Spectres de Marx"],
    keyIdeas: ["Déconstruction", "Différance", "Logocentrisme", "Trace"]
  },
  {
    id: "deleuze",
    name: "Gilles Deleuze",
    birthYear: 1925,
    deathYear: 1995,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/AVT_Gilles-Deleuze_6342.webp/330px-AVT_Gilles-Deleuze_6342.webp.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Post-structuralisme",
    family: "Pensée contemporaine",
    influences: ["spinoza", "hume", "nietzsche"],
    summary: `Gilles Deleuze naquit à Paris en 1925 et y passa toute sa vie, à l'exception des années d'enseignement à Lyon. Formé à la Sorbonne, il consacra d'abord son œuvre à des monographies originales sur des philosophes (Hume, Nietzsche, Bergson, Spinoza) qu'il lisait "à contre-courant", cherchant ce qui dans leur pensée échappait à la tradition. Il enseigna à l'université de Paris VIII-Vincennes de 1969 à 1987.

"Différence et Répétition" (1968) et "Logique du sens" (1969) développent une philosophie de la différence qui rompt avec la tradition platonicienne. Contre la philosophie de l'identité et de la représentation, qui subordonne la différence au même et au semblable, Deleuze pense la différence en elle-même, affirmative et créatrice. Le réel est fait de singularités, d'intensités, de devenirs, non d'essences fixes ou de formes éternelles.

La collaboration avec le psychanalyste Félix Guattari produisit des œuvres majeures : "L'Anti-Œdipe" (1972) et "Mille Plateaux" (1980). Ces livres critiquent la psychanalyse freudienne et son modèle œdipien, et proposent une "schizo-analyse" qui libère le désir des structures familiales et sociales qui le canalisent. Le concept de "rhizome" s'oppose au modèle arborescent de la pensée hiérarchique : le rhizome pousse par le milieu, fait des connexions multiples, n'a ni début ni fin.

Deleuze a aussi écrit sur le cinéma, la peinture (Francis Bacon), la littérature (Proust, Kafka, Melville). "Qu'est-ce que la philosophie ?" (1991), écrit avec Guattari, définit la philosophie comme création de concepts. Atteint d'une grave insuffisance respiratoire qui l'empêchait de travailler, Deleuze se suicida en 1995 en se jetant par la fenêtre de son appartement parisien.`,
    mainWorks: ["Différence et Répétition", "L'Anti-Œdipe (avec Guattari)", "Mille Plateaux", "Qu'est-ce que la philosophie ?"],
    keyIdeas: ["Différence", "Rhizome", "Déterritorialisation", "Corps sans organes"]
  }
];
