export interface Philosopher {
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

export const philosophers: Philosopher[] = [
  {
    id: "socrates",
    name: "Socrate",
    birthYear: -470,
    deathYear: -399,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Socrates_Louvre.jpg?width=220",
    nationality: "Grec",
    movement: "Philosophie antique",
    summary: `Socrate est considere comme le pere de la philosophie occidentale. Ne a Athenes vers 470 av. J.-C., fils d'un sculpteur et d'une sage-femme, il passa sa vie a arpenter les rues de la cite pour questionner ses concitoyens. Contrairement aux sophistes de son epoque qui monnayaient leur savoir, il ne pretendait pas detenir la verite mais cherchait a la decouvrir par le dialogue.

Sa methode, la maieutique (l'art d'accoucher les esprits), consiste a faire emerger la verite par un questionnement systematique. En posant des questions apparemment naives, il amenait ses interlocuteurs a prendre conscience de leurs contradictions et de leur ignorance. Cette ironie socratique visait a les conduire vers une connaissance plus authentique.

Socrate n'a laisse aucun ecrit : tout ce que nous savons de lui provient des temoignages de ses disciples, notamment Platon et Xenophon. Sa celebre formule "Je sais que je ne sais rien" resume son approche : la sagesse commence par la reconnaissance de notre ignorance, ce qui nous distingue de ceux qui croient savoir sans savoir.

Accuse de corrompre la jeunesse et de ne pas reconnaitre les dieux de la cite, il fut condamne a mort par un tribunal athenien en 399 av. J.-C. Refusant de s'enfuir par respect pour les lois d'Athenes, il but la cigue avec serenite. Sa mort exemplaire fit de lui un martyr de la philosophie et influenca profondement toute la pensee occidentale.`,
    mainWorks: ["Aucun ecrit direct - Dialogues rapportes par Platon"],
    keyIdeas: ["Maieutique", "Connais-toi toi-meme", "L'ignorance socratique", "L'ethique par la connaissance"]
  },
  {
    id: "platon",
    name: "Platon",
    birthYear: -428,
    deathYear: -348,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/220px-Plato_Silanion_Musei_Capitolini_MC1377.jpg",
    nationality: "Grec",
    movement: "Philosophie antique",
    summary: `Platon, ne vers 428 av. J.-C. dans une famille aristocratique athenienne, fut le disciple le plus celebre de Socrate et le maitre d'Aristote. Profondement marque par la condamnation a mort de son maitre, il consacra sa vie a la philosophie et fonda l'Academie a Athenes vers 387 av. J.-C., consideree comme la premiere universite du monde occidental.

Sa philosophie repose sur la theorie des Idees (ou Formes) : le monde sensible que nous percevons n'est qu'une copie imparfaite d'un monde intelligible peuple d'Idees eternelles et parfaites. L'Idee du Bien, au sommet de cette hierarchie, illumine toutes les autres. L'allegorie de la caverne, dans "La Republique", illustre magistralement cette vision : les hommes sont comme des prisonniers enchaines qui ne voient que des ombres projetees sur un mur, prenant ces apparences pour la realite.

Platon a egalement developpe une theorie politique complete. Dans "La Republique", il imagine une cite ideale gouvernee par des philosophes-rois, seuls capables de contempler les Idees et donc de gouverner avec justice. Il divise l'ame en trois parties - raison, coeur et appetits - correspondant aux trois classes de sa cite ideale : gouvernants, gardiens et producteurs.

Son influence sur la philosophie, la theologie et la pensee politique occidentale est incommensurable. Le philosophe Alfred North Whitehead a pu ecrire que toute la philosophie occidentale n'est qu'une "serie de notes de bas de page a Platon". Ses dialogues, ou Socrate est le personnage principal, restent des modeles de reflexion philosophique.`,
    mainWorks: ["La Republique", "Le Banquet", "Phedon", "Phedre", "Le Timee"],
    keyIdeas: ["Theorie des Idees", "Allegorie de la caverne", "Tripartition de l'ame", "Le philosophe-roi"]
  },
  {
    id: "aristote",
    name: "Aristote",
    birthYear: -384,
    deathYear: -322,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/220px-Aristotle_Altemps_Inv8575.jpg",
    nationality: "Grec",
    movement: "Philosophie antique",
    summary: `Aristote naquit en 384 av. J.-C. a Stagire, en Macedoine. Fils du medecin personnel du roi de Macedoine, il entra a l'Academie de Platon a l'age de dix-sept ans et y resta vingt ans. Apres la mort de Platon, il devint le precepteur du jeune Alexandre le Grand, puis fonda sa propre ecole a Athenes, le Lycee, ou il enseignait en se promenant (d'ou le nom de "peripatetisme").

Contrairement a Platon, Aristote s'interesse au monde sensible et developpe une approche empirique de la connaissance. Il rejette la theorie des Idees separees et affirme que la forme est inseparable de la matiere (hyleomorphisme). Pour lui, la connaissance commence par l'experience sensible, et c'est par abstraction que nous parvenons aux concepts universels.

Son oeuvre couvre pratiquement tous les domaines du savoir antique : logique, physique, biologie, metaphysique, ethique, politique, rhetorique, poetique. Sa logique formelle, notamment la theorie du syllogisme, restera la reference incontestee pendant deux millenaires. Sa "Metaphysique" pose la question de l'etre en tant qu'etre et introduit les concepts d'acte et de puissance, de substance et d'accident.

En ethique, son "Ethique a Nicomaque" definit le bonheur (eudaimonia) comme l'activite de l'ame selon la vertu, et preconise la recherche du "juste milieu" entre les extremes. Sa "Politique" analyse les differents regimes et defend une forme de gouvernement mixte. L'influence d'Aristote sur la philosophie medievale, notamment via Thomas d'Aquin, et sur la science jusqu'a la revolution scientifique moderne, fut immense.`,
    mainWorks: ["Ethique a Nicomaque", "Politique", "Metaphysique", "Organon", "Poetique"],
    keyIdeas: ["Logique formelle", "Hyleomorphisme", "Eudemonisme", "Les quatre causes", "Le juste milieu"]
  },
  {
    id: "epicure",
    name: "Epicure",
    birthYear: -341,
    deathYear: -270,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Epikouros_BM_1843.jpg/220px-Epikouros_BM_1843.jpg",
    nationality: "Grec",
    movement: "Epicurisme",
    summary: `Epicure naquit a Samos en 341 av. J.-C. et fonda a Athenes une ecole philosophique originale, le Jardin, vers 306 av. J.-C. Contrairement aux autres ecoles, le Jardin etait ouvert a tous, y compris aux femmes et aux esclaves, ce qui etait revolutionnaire pour l'epoque. On y pratiquait une vie simple, fondee sur l'amitie et la recherche du bonheur.

Sa philosophie vise le bonheur, defini comme l'ataraxie (absence de trouble de l'ame) et l'aponie (absence de douleur du corps). Contrairement a la caricature qui en est souvent faite, l'epicurisme n'est pas une quete des plaisirs debrides. Epicure distingue soigneusement les desirs naturels et necessaires (manger, boire, s'abriter) des desirs naturels non necessaires (manger raffine) et des desirs vains (gloire, richesse) qu'il faut eliminer.

Sa physique atomiste, heritee de Democrite, lui permet de liberer les hommes de leurs deux grandes peurs : la peur des dieux et la peur de la mort. Les dieux existent mais, bienheureux et immortels, ils ne s'occupent pas des affaires humaines. Quant a la mort, elle n'est rien pour nous puisque "quand elle est la, nous ne sommes plus, et quand nous sommes la, elle n'est pas".

Le "tetrapharmakon" (quadruple remede) resume sa doctrine : les dieux ne sont pas a craindre, la mort n'est pas a redouter, le bien est facile a atteindre, le mal est facile a supporter. Cette philosophie pratique, orientee vers la vie heureuse ici-bas, connut un grand succes dans l'Antiquite et influence encore aujourd'hui notre conception du bonheur.`,
    mainWorks: ["Lettre a Menecee", "Lettre a Herodote", "Maximes capitales"],
    keyIdeas: ["Ataraxie", "Tetrapharmakon", "Atomisme", "Classification des desirs"]
  },
  {
    id: "seneque",
    name: "Seneque",
    birthYear: -4,
    deathYear: 65,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pseudo-Seneca_MAN_Napoli_Inv5616_n01.jpg?width=220",
    nationality: "Romain",
    movement: "Stoicisme",
    summary: `Seneque naquit a Cordoue, en Espagne, vers 4 av. J.-C., dans une famille de rang equestre. Forme a la rhetorique et a la philosophie a Rome, il mena d'abord une brillante carriere politique avant d'etre exile en Corse par l'empereur Claude en 41 ap. J.-C. Rappele huit ans plus tard, il devint le precepteur du jeune Neron puis son conseiller politique.

Philosophe stoicien, Seneque enseigne que le bonheur depend de notre attitude interieure, non des circonstances exterieures. La distinction fondamentale du stoicisme est celle entre ce qui depend de nous (nos jugements, nos desirs, nos actions) et ce qui n'en depend pas (la fortune, la sante, la reputation, la mort). La sagesse consiste a vouloir ce qui arrive et a accepter sereinement ce qui ne depend pas de nous.

Ses ecrits, d'une grande accessibilite, ont popularise le stoicisme aupres d'un large public. Les "Lettres a Lucilius", correspondance philosophique avec un ami, constituent un veritable manuel de sagesse pratique. Ses traites comme "De la brievete de la vie" ou "De la tranquillite de l'ame" offrent des conseils concrets pour bien vivre et affronter les difficultes de l'existence.

Accuse de conspiration contre Neron en 65 ap. J.-C., Seneque recut l'ordre de se suicider. Il se donna la mort avec dignite, entouré de ses amis, mettant en pratique les principes stoiciens qu'il avait enseigne toute sa vie. Sa mort exemplaire, racontee par Tacite, fit de lui une figure emblematique du philosophe antique.`,
    mainWorks: ["Lettres a Lucilius", "De la brievete de la vie", "De la tranquillite de l'ame", "De la colere"],
    keyIdeas: ["Dichotomie du controle", "Memento mori", "Amor fati", "Vertu comme seul bien"]
  },
  {
    id: "marc-aurele",
    name: "Marc Aurele",
    birthYear: 121,
    deathYear: 180,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/MSR-ra-61-b-1-DM.jpg/220px-MSR-ra-61-b-1-DM.jpg",
    nationality: "Romain",
    movement: "Stoicisme",
    summary: `Marc Aurele naquit a Rome en 121 ap. J.-C. dans une famille patricienne. Remarque par l'empereur Hadrien pour ses qualites morales et intellectuelles, il fut adopte par Antonin le Pieux et lui succeda comme empereur en 161. Son regne fut marque par des guerres incessantes aux frontieres et par une terrible epidemie de peste.

Ses "Pensees pour moi-meme", ecrites en grec lors de ses campagnes militaires, constituent un document unique : le journal intime philosophique d'un empereur romain. Ces reflexions, qui n'etaient pas destinees a la publication, revelent un homme en perpetuel combat avec lui-meme pour atteindre la sagesse stoicienne et accomplir son devoir d'empereur avec justice.

Marc Aurele incarne l'ideal platonicien du philosophe-roi. Malgre les contraintes ecrasantes du pouvoir imperial, il cherchait chaque jour a vivre selon les preceptes stoiciens : maitriser ses passions, accepter le destin avec serenite, agir avec justice et bienveillance envers tous les hommes. Ses reflexions sur la fugacite de la vie, l'insignifiance de la gloire humaine et l'interdependance de tous les etres restent d'une actualite frappante.

Sa philosophie insiste sur l'instant present comme seule realite sur laquelle nous avons prise, sur le cosmopolitisme (nous sommes tous citoyens du monde) et sur l'examen de conscience quotidien. "Ne pas agir comme si l'on devait vivre des milliers d'annees", ecrit-il. Marc Aurele mourut en 180, probablement de la peste, apres un regne de dix-neuf ans.`,
    mainWorks: ["Pensees pour moi-meme"],
    keyIdeas: ["L'instant present", "Cosmopolitisme", "Acceptation du destin", "Examen de conscience"]
  },
  {
    id: "augustin",
    name: "Saint Augustin",
    birthYear: 354,
    deathYear: 430,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Saint_Augustine_by_Philippe_de_Champaigne.jpg/220px-Saint_Augustine_by_Philippe_de_Champaigne.jpg",
    nationality: "Romain d'Afrique",
    movement: "Philosophie medievale / Patristique",
    summary: `Augustin naquit en 354 a Thagaste, en Numidie (actuelle Algerie), d'un pere paien et d'une mere chretienne fervente, Monique. Apres une jeunesse qu'il qualifiera lui-meme de dissolue, marquee par une liaison dont naquit un fils, il adhera au manicheisme, doctrine dualiste qui opposait le Bien et le Mal comme deux principes eternels. Brillant rheteur, il enseigna a Carthage, Rome puis Milan.

C'est a Milan, sous l'influence de l'eveque Ambroise et apres une crise spirituelle intense, qu'il se convertit au christianisme en 386. Il raconte cette conversion dans ses "Confessions", premiere veritable autobiographie de l'histoire occidentale, ou il analyse avec une profondeur inegalee sa vie interieure et son cheminement vers Dieu. "Tu nous as faits pour toi, Seigneur, et notre coeur est inquiet jusqu'a ce qu'il repose en toi."

Sa philosophie opere une synthese originale entre le neoplatonisme et le christianisme. Pour Augustin, la verite est interieure : c'est en nous-memes, par l'illumination divine, que nous pouvons la trouver. Sa reflexion sur le temps, dans le livre XI des Confessions, reste celebre : le passe n'est plus, l'avenir n'est pas encore, seul existe le present, mais un present qui contient la memoire du passe et l'attente de l'avenir.

"La Cite de Dieu", ecrite apres le sac de Rome par les Wisigoths en 410, propose une philosophie de l'histoire distinguant la cite terrestre (fondee sur l'amour de soi) de la cite celeste (fondee sur l'amour de Dieu). Sa reflexion sur le peche originel, le libre arbitre et la grace divine marquera profondement la theologie chretienne occidentale, tant catholique que protestante.`,
    mainWorks: ["Les Confessions", "La Cite de Dieu", "De la Trinite"],
    keyIdeas: ["Illumination divine", "Peche originel", "Theorie du temps", "Libre arbitre et grace"]
  },
  {
    id: "thomas-aquin",
    name: "Thomas d'Aquin",
    birthYear: 1225,
    deathYear: 1274,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/St-thomas-aquinas.jpg/220px-St-thomas-aquinas.jpg",
    nationality: "Italien",
    movement: "Scolastique",
    summary: `Thomas d'Aquin naquit vers 1225 dans une famille noble du royaume de Naples. Contre la volonte de sa famille qui le destinait a une carriere ecclesiastique prestigieuse, il entra chez les Dominicains, ordre mendiant voue a l'etude et a la predication. Il etudia a Paris et a Cologne sous la direction d'Albert le Grand, puis enseigna lui-meme a Paris et en Italie.

Son oeuvre majeure fut de reconcilier la philosophie d'Aristote, recemment redecouverte en Occident via les traductions arabes, avec la foi chretienne. Cette entreprise etait audacieuse car Aristote etait alors suspect d'heresie. Thomas montra que la raison naturelle et la foi revelee sont deux voies complementaires vers la verite, la premiere preparant a la seconde sans pouvoir l'atteindre pleinement.

Sa "Somme theologique", oeuvre monumentale restee inachevee, systematise l'ensemble de la doctrine chretienne en utilisant la methode aristotelicienne. Il y developpe notamment les celebres "cinq voies" pour demontrer l'existence de Dieu a partir de l'observation du monde : par le mouvement, la causalite efficiente, la contingence, les degres de perfection et la finalite.

Le thomisme distingue soigneusement l'essence (ce qu'une chose est) de l'existence (le fait qu'elle soit). En Dieu seul, essence et existence coincident : Dieu est l'Etre meme subsistant. Thomas developpa aussi une theorie de la loi naturelle, fondement de l'ethique, inscrite par Dieu dans la raison humaine. Canonise en 1323 et proclame Docteur de l'Eglise, sa philosophie reste la reference officielle de l'Eglise catholique.`,
    mainWorks: ["Somme theologique", "Somme contre les Gentils", "De l'etre et de l'essence"],
    keyIdeas: ["Les cinq voies", "Distinction essence/existence", "Loi naturelle", "Analogie de l'etre"]
  },
  {
    id: "descartes",
    name: "Rene Descartes",
    birthYear: 1596,
    deathYear: 1650,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/220px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
    nationality: "Francais",
    movement: "Rationalisme",
    summary: `Rene Descartes naquit en 1596 a La Haye en Touraine dans une famille de petite noblesse. Forme chez les jesuites au college de La Fleche, il etudia le droit a Poitiers puis s'engagea comme soldat pour parcourir l'Europe. C'est dans un "poele" en Allemagne, en novembre 1619, qu'il eut la revelation de sa methode. Il s'installa ensuite aux Pays-Bas pour travailler en paix.

Mathematicien de genie - il inventa la geometrie analytique qui unifie algebre et geometrie - Descartes chercha a fonder une science certaine sur le modele des mathematiques. Sa methode du doute radical l'amene a remettre en question systematiquement toutes ses croyances pour trouver une certitude indubitable, un point fixe a partir duquel reconstruire l'edifice du savoir.

Cette certitude, il la trouve dans le celebre "Cogito, ergo sum" (Je pense, donc je suis) : meme si je doute de tout, y compris de l'existence du monde exterieur et de mon propre corps, je ne peux douter que je doute, donc que je pense, donc que j'existe comme chose pensante. A partir de la, Descartes reconstruit progressivement nos certitudes : l'existence de Dieu, puis celle du monde exterieur.

Le dualisme cartesien separe radicalement l'ame (res cogitans, substance pensante) du corps (res extensa, substance etendue). Cette distinction pose le celebre "probleme corps-esprit" : comment deux substances si differentes peuvent-elles interagir ? Descartes situa leur point de contact dans la glande pineale. Son influence sur la philosophie moderne est fondatrice : il est considere comme le pere du rationalisme et de la philosophie moderne.`,
    mainWorks: ["Discours de la methode", "Meditations metaphysiques", "Les Passions de l'ame"],
    keyIdeas: ["Cogito ergo sum", "Doute methodique", "Dualisme corps-esprit", "Idees innees"]
  },
  {
    id: "spinoza",
    name: "Baruch Spinoza",
    birthYear: 1632,
    deathYear: 1677,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Spinoza.jpg/220px-Spinoza.jpg",
    nationality: "Neerlandais",
    movement: "Rationalisme",
    summary: `Baruch Spinoza naquit a Amsterdam en 1632 dans une famille juive d'origine portugaise, refugiee aux Pays-Bas pour fuir l'Inquisition. Forme dans la tradition juive, il s'ouvrit aussi a la philosophie moderne, notamment cartesienne. En 1656, a vingt-trois ans, il fut excommunie (herem) de la communaute juive d'Amsterdam pour ses idees heterodoxes, avec une violence inouie.

Apres son excommunication, Spinoza vecut modestement en polissant des lentilles optiques, refusant les postes universitaires pour preserver sa liberte de pensee. Son oeuvre majeure, l'"Ethique", redigee more geometrico (a la maniere des geometres, avec definitions, axiomes et theoremes), developpe un systeme philosophique d'une coherence et d'une audace extraordinaires.

Pour Spinoza, il n'existe qu'une seule substance, infinie et eternelle, qu'on peut appeler Dieu ou la Nature ("Deus sive Natura"). Tout ce qui existe est un mode, une modification de cette substance unique. Le pantheisme spinoziste identifie donc Dieu au monde : Dieu n'est pas un createur transcendant mais la nature naturante elle-meme. Cette doctrine lui valut d'etre considere comme athee par ses contemporains.

La liberte, pour Spinoza, n'est pas le libre arbitre, qui est une illusion nee de notre ignorance des causes qui nous determinent. La vraie liberte consiste a comprendre la necessite qui nous gouverne. Cette comprehension, par le "troisieme genre de connaissance", nous libere des passions tristes (crainte, haine, envie) et nous conduit a la beatitude, "amour intellectuel de Dieu". Son influence sur les Lumieres, le romantisme allemand et la philosophie contemporaine est immense.`,
    mainWorks: ["Ethique", "Traite theologico-politique", "Traite de la reforme de l'entendement"],
    keyIdeas: ["Pantheisme", "Substance unique", "Conatus", "Trois genres de connaissance"]
  },
  {
    id: "leibniz",
    name: "Gottfried Wilhelm Leibniz",
    birthYear: 1646,
    deathYear: 1716,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Gottfried_Wilhelm_von_Leibniz.jpg/220px-Gottfried_Wilhelm_von_Leibniz.jpg",
    nationality: "Allemand",
    movement: "Rationalisme",
    summary: `Gottfried Wilhelm Leibniz naquit a Leipzig en 1646. Genie universel, il fut a la fois philosophe, mathematicien (co-inventeur du calcul infinitesimal, independamment de Newton), physicien, juriste, diplomate, historien et theologien. Il correspondit avec les plus grands esprits de son temps et consacra une partie de sa vie a tenter de reconcilier catholiques et protestants.

Sa metaphysique des monades, exposee dans la "Monadologie", decrit l'univers comme compose d'une infinite de substances simples, les monades, qui sont comme des "points metaphysiques" sans parties ni etendue. Chaque monade est unique, "sans fenetres" (elle ne recoit rien de l'exterieur), et reflete l'univers entier selon son propre point de vue, comme un miroir vivant.

Comment alors expliquer l'ordre du monde si les monades n'interagissent pas ? Par l'"harmonie preetablie" : Dieu a cree les monades de telle sorte que leurs etats internes se correspondent parfaitement, comme des horloges synchronisees. Et pourquoi Dieu a-t-il cree ce monde plutot qu'un autre ? Parce que c'est "le meilleur des mondes possibles" : Dieu, infiniment bon et sage, a choisi de creer le monde qui realise le maximum de perfection avec le minimum de moyens.

Cette these de l'optimisme leibnizien fut violemment satirisee par Voltaire dans "Candide", apres le tremblement de terre de Lisbonne en 1755. Neanmoins, l'influence de Leibniz sur la logique moderne (il reva d'une "caracteristique universelle", langage formel permettant de resoudre tous les problemes par le calcul), la metaphysique et les mathematiques reste considerable.`,
    mainWorks: ["Monadologie", "Theodicee", "Discours de metaphysique", "Nouveaux essais sur l'entendement humain"],
    keyIdeas: ["Monades", "Harmonie preetablie", "Meilleur des mondes possibles", "Principe de raison suffisante"]
  },
  {
    id: "locke",
    name: "John Locke",
    birthYear: 1632,
    deathYear: 1704,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/JohnLocke.png/220px-JohnLocke.png",
    nationality: "Anglais",
    movement: "Empirisme",
    summary: `John Locke naquit en 1632 dans le Somerset, en Angleterre, dans une famille puritaine. Forme a Oxford en medecine et en philosophie, il devint le secretaire et medecin du comte de Shaftesbury, figure de l'opposition liberale. Contraint a l'exil en Hollande apres la disgrace de son protecteur, il revint en Angleterre apres la Glorieuse Revolution de 1688.

Contre les rationalistes qui affirmaient l'existence d'idees innees, Locke soutient dans son "Essai sur l'entendement humain" que l'esprit a la naissance est une "table rase" (tabula rasa) : toutes nos idees viennent de l'experience, soit par sensation (experience externe), soit par reflexion (experience interne). Cette these fonde l'empirisme moderne et aura une influence decisive sur la philosophie des Lumieres.

En philosophie politique, les "Deux traites du gouvernement civil" developpent une theorie du contrat social et des droits naturels qui influencera profondement les revolutions americaine et francaise. Pour Locke, les hommes possedent des droits naturels inalienables - vie, liberte, propriete - anterieurs a toute societe. L'Etat nait d'un contrat par lequel les individus acceptent de ceder une partie de leur liberte en echange de la protection de leurs droits.

L'Etat n'est donc legitime que s'il protege ces droits ; s'il les viole, le peuple a le droit de lui resister. Locke defend aussi la separation des pouvoirs (legislatif, executif, federatif) et la tolerance religieuse, l'Etat n'ayant pas a imposer une religion. Ces idees font de lui l'un des peres du liberalisme politique et des democraties modernes.`,
    mainWorks: ["Essai sur l'entendement humain", "Deux traites du gouvernement civil", "Lettre sur la tolerance"],
    keyIdeas: ["Tabula rasa", "Droits naturels", "Contrat social", "Tolerance religieuse"]
  },
  {
    id: "hume",
    name: "David Hume",
    birthYear: 1711,
    deathYear: 1776,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Painting_of_David_Hume.jpg/220px-Painting_of_David_Hume.jpg",
    nationality: "Ecossais",
    movement: "Empirisme",
    summary: `David Hume naquit a Edimbourg en 1711 dans une famille de petite noblesse ecossaise. Precocement passionne par la philosophie, il ecrivit son oeuvre majeure, le "Traite de la nature humaine", a seulement vingt-six ans. L'ouvrage fut un echec commercial ("mort-ne", dira-t-il), mais Hume devint plus tard celebre par ses essais et son "Histoire d'Angleterre".

Hume pousse l'empirisme de Locke a ses consequences les plus radicales, aboutissant a un scepticisme qui ebranle nos certitudes les plus fondamentales. Sa critique de la causalite est celebre : nous ne percevons jamais la causalite elle-meme, mais seulement des successions regulieres d'evenements. Notre croyance que le soleil se levera demain n'est qu'une habitude psychologique, non une certitude rationnelle.

De meme, le "moi" n'est pas une substance permanente mais un simple "faisceau de perceptions" sans unite veritable. Quant a la raison, elle est et doit etre "l'esclave des passions" : c'est le desir, non la raison, qui nous pousse a agir. Hume distingue aussi radicalement les faits (ce qui est) des valeurs (ce qui doit etre), interdisant de deriver logiquement un "ought" d'un "is" - c'est la celebre "guillotine de Hume".

Ce scepticisme radical eut un effet decisif sur l'histoire de la philosophie : il "reveilla Kant de son sommeil dogmatique" et l'incita a developper sa philosophie critique. L'influence de Hume sur la philosophie de la connaissance, la philosophie morale et la philosophie des sciences reste considerable. Il mourut en 1776, affrontant la mort avec une serenite qui impressionna ses contemporains.`,
    mainWorks: ["Traite de la nature humaine", "Enquete sur l'entendement humain", "Dialogues sur la religion naturelle"],
    keyIdeas: ["Critique de la causalite", "Fourche de Hume", "Le moi comme faisceau", "Scepticisme"]
  },
  {
    id: "rousseau",
    name: "Jean-Jacques Rousseau",
    birthYear: 1712,
    deathYear: 1778,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Jean-Jacques_Rousseau_%28painted_portrait%29.jpg/220px-Jean-Jacques_Rousseau_%28painted_portrait%29.jpg",
    nationality: "Genevois",
    movement: "Lumieres / Preromantisme",
    summary: `Jean-Jacques Rousseau naquit a Geneve en 1712. Sa mere mourut en lui donnant naissance, et son pere, horloger fantasque, l'abandonna a dix ans. Autodidacte, il mena une vie errante avant de connaitre la celebrite avec son "Discours sur les sciences et les arts" (1750), ou il soutenait, contre l'optimisme des Lumieres, que le progres des arts et des sciences avait corrompu les moeurs.

Le "Discours sur l'origine de l'inegalite" (1755) developpe cette critique de la civilisation. Pour Rousseau, l'homme est naturellement bon, libre et heureux dans l'etat de nature ; c'est la societe qui l'a corrompu. "L'homme nait libre et partout il est dans les fers." La propriete privee est a l'origine de l'inegalite et de tous les maux sociaux : "Le premier qui, ayant enclos un terrain, s'avisa de dire : Ceci est a moi, fut le vrai fondateur de la societe civile."

"Du Contrat social" (1762) propose une solution politique : fonder une societe legitime sur la volonte generale. Le peuple souverain est le seul depositaire de l'autorite politique ; il exprime sa volonte generale par des lois auxquelles chacun doit se soumettre, car en obeissant a la loi qu'il s'est lui-meme prescrite, le citoyen reste libre. Cette theorie de la souverainete populaire influencera profondement la Revolution francaise.

"Emile ou De l'education" revolutionne la pedagogie en proposant une education naturelle, respectueuse du developpement de l'enfant. Les "Confessions", autobiographie d'une sincerite sans precedent, annoncent le romantisme par l'importance accordee au sentiment et a l'introspection. Persecute pour ses idees, Rousseau passa ses dernieres annees dans la solitude et la paranoia. Il mourut en 1778.`,
    mainWorks: ["Du Contrat social", "Emile", "Les Confessions", "Discours sur l'origine de l'inegalite"],
    keyIdeas: ["Volonte generale", "Etat de nature", "Bonte naturelle de l'homme", "Souverainete populaire"]
  },
  {
    id: "kant",
    name: "Emmanuel Kant",
    birthYear: 1724,
    deathYear: 1804,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Kant_gemaelde_3.jpg/220px-Kant_gemaelde_3.jpg",
    nationality: "Allemand",
    movement: "Idealisme transcendantal",
    summary: `Emmanuel Kant naquit a Konigsberg en Prusse orientale en 1724 et ne quitta jamais sa ville natale. Issu d'une famille modeste et pieuse, il mena une vie d'une regularite legendaire - on dit que les habitants reglaient leurs montres sur sa promenade quotidienne. Il enseigna a l'universite de Konigsberg pendant plus de quarante ans, d'abord comme precepteur prive puis comme professeur.

Kant opere une "revolution copernicienne" en philosophie : de meme que Copernic avait montre que c'est la Terre qui tourne autour du Soleil et non l'inverse, Kant montre que ce n'est pas notre connaissance qui se regle sur les objets, mais les objets qui se reglent sur notre connaissance. Notre esprit n'est pas passif ; il structure l'experience selon des formes a priori (l'espace et le temps comme formes de la sensibilite, les categories comme concepts purs de l'entendement).

La "Critique de la raison pure" (1781) etablit ainsi les conditions et les limites de notre connaissance. Nous ne pouvons connaitre que les phenomenes, c'est-a-dire les choses telles qu'elles nous apparaissent, structurees par notre esprit. Les choses en soi, les noumenes, nous sont inaccessibles. Mais la raison, par sa nature meme, tend a depasser ces limites et engendre des illusions metaphysiques (l'ame, le monde, Dieu) qu'il faut critiquer sans pour autant les detruire.

La "Critique de la raison pratique" fonde la morale sur l'imperatif categorique : "Agis uniquement d'apres la maxime qui fait que tu peux vouloir en meme temps qu'elle devienne une loi universelle." La moralite reside dans l'intention, non dans les consequences de l'action. Kant pose ainsi les fondements d'une ethique deontologique qui reste une reference majeure. Son influence sur toute la philosophie ulterieure est immense.`,
    mainWorks: ["Critique de la raison pure", "Critique de la raison pratique", "Critique de la faculte de juger", "Fondements de la metaphysique des moeurs"],
    keyIdeas: ["Revolution copernicienne", "Phenomene/Noumene", "Imperatif categorique", "Formes a priori"]
  },
  {
    id: "hegel",
    name: "Georg Wilhelm Friedrich Hegel",
    birthYear: 1770,
    deathYear: 1831,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hegel_portrait_by_Schlesinger_1831.jpg/220px-Hegel_portrait_by_Schlesinger_1831.jpg",
    nationality: "Allemand",
    movement: "Idealisme allemand",
    summary: `Georg Wilhelm Friedrich Hegel naquit a Stuttgart en 1770. Apres des etudes de theologie a Tubingen, ou il se lia d'amitie avec le poete Holderlin et le philosophe Schelling, il fut precepteur puis professeur a Iena, Heidelberg et enfin Berlin, ou il devint le philosophe officiel de l'Etat prussien et regna sur la vie intellectuelle allemande jusqu'a sa mort en 1831.

Hegel developpe le systeme philosophique le plus ambitieux de l'histoire moderne. Pour lui, la realite est Esprit (Geist), et cet Esprit est un processus dialectique par lequel il prend progressivement conscience de lui-meme a travers l'histoire. La dialectique hegelienne procede par negation et depassement : chaque moment de la pensee (these) appelle son contraire (antithese), et leur confrontation produit un depassement (synthese) qui les reconcilie a un niveau superieur.

La "Phenomenologie de l'esprit" (1807) decrit ce parcours de la conscience depuis la certitude sensible la plus immediate jusqu'au savoir absolu. On y trouve la celebre dialectique du maitre et de l'esclave : le maitre, qui a risque sa vie, domine l'esclave qui a prefere la servitude a la mort ; mais c'est l'esclave qui, par le travail, transforme le monde et accede a une conscience de soi superieure.

L'histoire universelle est pour Hegel "le progres de la conscience de la liberte". Les differents peuples et civilisations incarnent des moments de ce devenir de l'Esprit. L'Etat moderne, particulierement l'Etat prussien selon Hegel, represente la realisation de la liberte concrete. Cette philosophie de l'histoire influencera profondement Marx, l'existentialisme et toute la philosophie continentale, soit pour la poursuivre, soit pour la critiquer.`,
    mainWorks: ["Phenomenologie de l'esprit", "Science de la logique", "Principes de la philosophie du droit", "Encyclopedie des sciences philosophiques"],
    keyIdeas: ["Dialectique", "Esprit absolu", "Aufhebung (depassement)", "Dialectique maitre-esclave"]
  },
  {
    id: "schopenhauer",
    name: "Arthur Schopenhauer",
    birthYear: 1788,
    deathYear: 1860,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Arthur_Schopenhauer_by_J_Sch%C3%A4fer%2C_1859b.jpg/220px-Arthur_Schopenhauer_by_J_Sch%C3%A4fer%2C_1859b.jpg",
    nationality: "Allemand",
    movement: "Pessimisme philosophique",
    summary: `Arthur Schopenhauer naquit a Dantzig en 1788 dans une famille de riches negociants. Apres la mort de son pere, probablement par suicide, il se consacra a la philosophie. Son oeuvre majeure, "Le Monde comme volonte et comme representation" (1818), passa d'abord inapercue, eclipsee par le succes de Hegel qu'il detestait. Ce n'est qu'a la fin de sa vie qu'il connut enfin la celebrite.

Schopenhauer developpe une metaphysique pessimiste influencee par la philosophie indienne, notamment les Upanishads et le bouddhisme. Le monde phenomenal, le monde comme representation, n'est que le "voile de Maya", une illusion. La realite ultime, la chose en soi kantienne, c'est la Volonte : une force aveugle, irrationnelle et insatiable qui se manifeste dans tous les etres sous forme de vouloir-vivre.

Cette Volonte nous condamne au malheur. Desirer, c'est manquer : le desir insatisfait est souffrance. Mais le desir satisfait engendre aussitot l'ennui, puis un nouveau desir. La vie oscille ainsi "comme un pendule, de droite a gauche, de la souffrance a l'ennui". Le bonheur n'est qu'une illusion negative, la cessation momentanee de la douleur. Face a ce pessimisme radical, Schopenhauer propose des voies de salut.

L'art, particulierement la musique, nous offre une contemplation desinteressee qui suspend temporairement la volonte. La morale, fondee sur la compassion universelle, nous fait reconnaitre dans la souffrance d'autrui notre propre souffrance. L'ascetisme enfin, negation du vouloir-vivre, conduit au nirvana, a l'extinction de la volonte. Premier philosophe occidental a integrer serieusement la pensee orientale, Schopenhauer influenca profondement Nietzsche, Wagner, Freud, Thomas Mann et Wittgenstein.`,
    mainWorks: ["Le Monde comme volonte et comme representation", "Parerga et Paralipomena", "L'Art d'avoir toujours raison"],
    keyIdeas: ["Volonte aveugle", "Pessimisme metaphysique", "Negation du vouloir-vivre", "Compassion universelle"]
  },
  {
    id: "kierkegaard",
    name: "Soren Kierkegaard",
    birthYear: 1813,
    deathYear: 1855,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/S%C3%B8ren_Kierkegaard_%281813-1855%29_-_%28cropped%29.jpg/220px-S%C3%B8ren_Kierkegaard_%281813-1855%29_-_%28cropped%29.jpg",
    nationality: "Danois",
    movement: "Existentialisme chretien",
    summary: `Soren Kierkegaard naquit a Copenhague en 1813 dans une famille marquee par la melancolie et une religiosite austere. Son pere, riche negociant, lui transmit un sentiment de culpabilite et une angoisse qui marquerent toute son oeuvre. Apres des etudes de theologie et une these sur l'ironie socratique, il vecut de sa fortune, consacrant sa breve existence a l'ecriture philosophique.

Kierkegaard s'oppose violemment aux systemes abstraits, particulierement celui de Hegel. Pour lui, la philosophie doit partir non de concepts universels mais de l'existence concrete de l'individu singulier, avec son angoisse, ses choix, sa subjectivite irreductible. "La verite est la subjectivite", proclame-t-il : ce qui importe n'est pas ce qu'on pense mais comment on le vit, avec quelle passion on s'y engage.

Il distingue trois "stades" ou "spheres" de l'existence. Le stade esthetique est celui de la recherche du plaisir et de l'instant : Don Juan en est la figure. Le stade ethique est celui du devoir, de l'engagement dans le mariage et la vie sociale. Le stade religieux enfin est celui de la relation personnelle a Dieu, incarnee par Abraham sacrifiant son fils Isaac. Le passage d'un stade a l'autre ne se fait pas par la raison mais par un "saut" existentiel.

L'angoisse, concept central de sa pensee, revele notre liberte vertigineuse : nous sommes condamnes a choisir, sans garantie ni certitude. La foi elle-meme est un "saut dans l'absurde", un engagement passionnel qui defie la raison. Kierkegaard mourut a quarante-deux ans, apres avoir attaque violemment l'Eglise officielle du Danemark. Redecouvert au XXe siecle, il est considere comme le precurseur de l'existentialisme.`,
    mainWorks: ["Ou bien... Ou bien", "Crainte et Tremblement", "Le Concept de l'angoisse", "Post-scriptum aux Miettes philosophiques"],
    keyIdeas: ["Existence individuelle", "Trois stades de l'existence", "Angoisse et liberte", "Saut de la foi"]
  },
  {
    id: "marx",
    name: "Karl Marx",
    birthYear: 1818,
    deathYear: 1883,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/220px-Karl_Marx_001.jpg",
    nationality: "Allemand",
    movement: "Materialisme historique",
    summary: `Karl Marx naquit a Treves en 1818 dans une famille juive convertie au protestantisme. Apres des etudes de droit et de philosophie, il se tourna vers le journalisme radical et dut s'exiler a Paris, Bruxelles puis Londres, ou il passa la majeure partie de sa vie dans la pauvrete, soutenu financierement par son ami Friedrich Engels. Il y redigea "Le Capital", son oeuvre maitresse.

Le materialisme historique affirme que ce sont les conditions materielles de la vie, et non les idees, qui determinent l'evolution des societes. L'infrastructure economique (forces productives et rapports de production) conditionne la superstructure (institutions politiques, juridiques, religieuses, ideologiques). L'histoire est mue par les contradictions entre les forces productives en developpement et les rapports de production existants.

Ces contradictions se manifestent par la lutte des classes : hommes libres et esclaves, patriciens et plebeiens, seigneurs et serfs, bourgeois et proletaires. Dans le capitalisme, le travailleur est "aliene" : il est depossede du produit de son travail, de son activite elle-meme, de son essence humaine et de ses semblables. Le capital extrait la "plus-value", difference entre la valeur produite par le travailleur et le salaire qu'il recoit.

Marx annonce le depassement inevitable du capitalisme par ses propres contradictions : la concentration du capital, la pauperisation du proletariat, les crises de surproduction conduiront a une revolution qui abolira la propriete privee des moyens de production et instaurera une societe sans classes, le communisme. L'influence de Marx sur le XXe siecle - revolutions, mouvements ouvriers, pensee critique - est immense, qu'on la celebre ou qu'on la deplore.`,
    mainWorks: ["Le Capital", "Manifeste du Parti communiste", "L'Ideologie allemande", "Manuscrits de 1844"],
    keyIdeas: ["Lutte des classes", "Plus-value", "Alienation", "Materialisme historique"]
  },
  {
    id: "nietzsche",
    name: "Friedrich Nietzsche",
    birthYear: 1844,
    deathYear: 1900,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/220px-Nietzsche187a.jpg",
    nationality: "Allemand",
    movement: "Philosophie de la vie",
    summary: `Friedrich Nietzsche naquit en 1844 a Rocken, en Saxe prussienne, dans une famille de pasteurs lutheriens. Brillant philologue, il fut nomme professeur a l'universite de Bale a vingt-quatre ans, mais dut demissionner dix ans plus tard pour raisons de sante. Il mena ensuite une vie errante en Suisse et en Italie, minee par la maladie, jusqu'a son effondrement mental en 1889.

Nietzsche annonce "la mort de Dieu" : non pas une these sur l'existence divine, mais le constat que les valeurs chretiennes qui structuraient la civilisation occidentale ont perdu leur credibilite. Cette mort ouvre l'ere du nihilisme, danger supreme mais aussi opportunite pour une "transvaluation de toutes les valeurs". Il faut creer de nouvelles valeurs, non plus fondees sur l'au-dela mais sur l'affirmation de la vie.

La morale chretienne est une "morale d'esclaves" nee du ressentiment des faibles contre les forts. Elle a inverse les valeurs naturelles, faisant de la faiblesse une vertu et de la force un peche. Nietzsche celebre au contraire la "volonte de puissance", non pas volonte de dominer autrui mais affirmation creatrice de la vie, depassement de soi, expansion de ses forces. Le "Surhomme" (Ubermensch) est celui qui cree ses propres valeurs et dit "oui" a la vie.

L'Eternel Retour pose une question existentielle decisive : vivrais-tu ta vie exactement a l'identique une infinite de fois ? Cette pensee est un critere d'evaluation : seul celui qui peut desirer le retour eternel de chaque instant de sa vie a vraiment affirme l'existence. L'influence de Nietzsche sur la philosophie du XXe siecle, la litterature, la psychologie et les arts est immense, malgre les deformations que le nazisme fit subir a sa pensee.`,
    mainWorks: ["Ainsi parlait Zarathoustra", "Par-dela bien et mal", "La Genealogie de la morale", "Le Gai Savoir"],
    keyIdeas: ["Mort de Dieu", "Volonte de puissance", "Surhomme", "Eternel Retour"]
  },
  {
    id: "freud",
    name: "Sigmund Freud",
    birthYear: 1856,
    deathYear: 1939,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/220px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg",
    nationality: "Autrichien",
    movement: "Psychanalyse",
    summary: `Sigmund Freud naquit en 1856 a Freiberg, en Moravie, dans une famille juive. Forme en medecine a Vienne, il se specialisa en neurologie et s'interessa aux troubles hysteriques. C'est en collaboration avec Josef Breuer, puis seul, qu'il developpa la psychanalyse, methode d'investigation de l'inconscient par la parole, l'association libre et l'interpretation des reves.

La decouverte majeure de Freud est l'inconscient : une grande partie de notre vie psychique nous echappe et determine nos pensees, nos emotions et nos actes a notre insu. L'appareil psychique se divise en trois instances : le Ca (reservoir des pulsions inconscientes), le Moi (instance rationnelle en contact avec la realite) et le Surmoi (conscience morale interiorisee, heritiere du complexe d'Oedipe). Les nevroses resultent des conflits entre ces instances.

La sexualite joue un role central dans la theorie freudienne. Freud decouvre la sexualite infantile et ses stades (oral, anal, phallique), le complexe d'Oedipe (desir pour le parent du sexe oppose, rivalite avec le parent du meme sexe), le refoulement des desirs inacceptables dans l'inconscient. Les reves sont "la voie royale vers l'inconscient" : ils realisent de maniere deguisee des desirs refoules.

Freud accomplit ainsi une troisieme "blessure narcissique" a l'humanite, apres Copernic (la Terre n'est pas au centre de l'univers) et Darwin (l'homme descend de l'animal) : l'homme n'est pas maitre dans sa propre maison, l'inconscient gouverne. Exile a Londres apres l'Anschluss, Freud mourut en 1939. Son influence sur la psychologie, la philosophie, l'art et la culture du XXe siecle est immense, malgre les critiques adressees a la scientificite de la psychanalyse.`,
    mainWorks: ["L'Interpretation des reves", "Trois essais sur la theorie sexuelle", "Malaise dans la civilisation", "Introduction a la psychanalyse"],
    keyIdeas: ["Inconscient", "Ca, Moi, Surmoi", "Complexe d'Oedipe", "Refoulement"]
  },
  {
    id: "husserl",
    name: "Edmund Husserl",
    birthYear: 1859,
    deathYear: 1938,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Edmund_Husserl_1900.jpg/220px-Edmund_Husserl_1900.jpg",
    nationality: "Allemand",
    movement: "Phenomenologie",
    summary: `Edmund Husserl naquit en 1859 a Prossnitz, en Moravie, dans une famille juive. D'abord mathematicien, eleve de Weierstrass, il se tourna vers la philosophie sous l'influence de Franz Brentano. Professeur a Gottingen puis a Fribourg, il fut marginalise a la fin de sa vie en raison de ses origines juives. Il mourut en 1938, ses manuscrits sauves de la destruction par le pere franciscain Herman Leo Van Breda.

Husserl est le fondateur de la phenomenologie, courant majeur de la philosophie du XXe siecle. Son mot d'ordre : "retour aux choses memes" (zu den Sachen selbst). Il s'agit d'etudier les phenomenes tels qu'ils apparaissent a la conscience, en suspendant (epoche) toute presupposition sur leur existence reelle ou sur les theories scientifiques qui pretendent les expliquer.

Le concept central de la phenomenologie est l'intentionnalite, herite de Brentano : toute conscience est "conscience de quelque chose". La conscience n'est pas une boite ou des representations seraient contenues ; elle est visee, ouverture sur le monde. La reduction phenomenologique permet de decrire les structures essentielles de cette visee intentionnelle, les differentes manieres dont les objets se donnent a la conscience.

Dans ses derniers travaux, Husserl developpe le concept de "Lebenswelt" (monde de la vie), ce monde pre-scientifique de l'experience quotidienne que la science presuppose mais oublie. La crise des sciences europeennes vient de cet oubli. La phenomenologie husserlienne a profondement influence Heidegger (son assistant puis successeur), Sartre, Merleau-Ponty et toute la philosophie continentale du XXe siecle.`,
    mainWorks: ["Recherches logiques", "Idees directrices pour une phenomenologie", "Meditations cartesiennes", "La Crise des sciences europeennes"],
    keyIdeas: ["Intentionnalite", "Reduction phenomenologique", "Lebenswelt (monde vecu)", "Retour aux choses memes"]
  },
  {
    id: "heidegger",
    name: "Martin Heidegger",
    birthYear: 1889,
    deathYear: 1976,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Heidegger_4_%281960%29.jpg/220px-Heidegger_4_%281960%29.jpg",
    nationality: "Allemand",
    movement: "Phenomenologie / Existentialisme",
    summary: `Martin Heidegger naquit en 1889 a Messkirch, en Foret-Noire, dans une famille catholique modeste. Apres des etudes de theologie et de philosophie, il devint l'assistant de Husserl a Fribourg et lui succeda en 1928. Son engagement en faveur du nazisme en 1933, lorsqu'il accepta le rectorat de l'universite de Fribourg, reste une tache sur sa biographie que les interpretes n'ont cesse de discuter.

"Etre et Temps" (1927), son oeuvre majeure restee inachevee, pose la question de l'Etre que la metaphysique occidentale aurait oubliee au profit de l'etant. Pour acceder a l'Etre, Heidegger analyse l'existence humaine, le Dasein (l'etre-la), car c'est le seul etant pour qui son etre est en question. Le Dasein est "etre-au-monde" : il n'est pas d'abord un sujet isole qui rencontrerait ensuite le monde, il est toujours deja engage dans un monde.

Le Dasein est "jete" dans un monde qu'il n'a pas choisi, parmi des etants qu'il utilise comme des "outils" (le marteau est pour enfoncer des clous). L'angoisse, a distinguer de la peur, revele notre finitude et notre "etre-pour-la-mort". Face a l'authenticite de cette existence mortelle, le "On" (das Man) represente l'inauthenticite de la vie quotidienne ou nous fuyons notre condition en nous perdant dans le bavardage et la curiosite.

Apres le "tournant" des annees 1930, Heidegger s'eloigne de l'analytique existentiale pour mediter sur l'histoire de l'Etre, le danger de la technique moderne qui reduit tout a un "fonds" exploitable, et la possibilite d'un autre commencement. Malgre la controverse liee a son engagement nazi, son influence sur l'existentialisme, l'hermeneutique, la deconstruction et la philosophie de la technique reste considerable.`,
    mainWorks: ["Etre et Temps", "Introduction a la metaphysique", "Lettre sur l'humanisme", "Chemins qui ne menent nulle part"],
    keyIdeas: ["Question de l'Etre", "Dasein", "Etre-pour-la-mort", "Authenticite/Inauthenticite"]
  },
  {
    id: "wittgenstein",
    name: "Ludwig Wittgenstein",
    birthYear: 1889,
    deathYear: 1951,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Ludwig_Wittgenstein.jpg/220px-Ludwig_Wittgenstein.jpg",
    nationality: "Autrichien",
    movement: "Philosophie analytique",
    summary: `Ludwig Wittgenstein naquit a Vienne en 1889 dans une des familles les plus riches d'Autriche, au carrefour de la haute finance, de la culture et de l'art. Apres des etudes d'ingenieur en aeronautique, il se tourna vers la logique et la philosophie, d'abord a Iena aupres de Frege, puis a Cambridge aupres de Russell. Il abandonna sa fortune a ses freres et soeurs et mena une vie d'une austerite monacale.

Le "Tractatus logico-philosophicus" (1921), seul livre publie de son vivant, analyse la relation entre le langage et le monde. Le langage est une image logique de la realite : une proposition a un sens si et seulement si elle represente un etat de choses possible. Les propositions de la logique sont des tautologies, vraies quelle que soit la realite. Quant aux propositions metaphysiques, ethiques ou esthetiques, elles sont des non-sens : "Ce dont on ne peut parler, il faut le taire."

Mais Wittgenstein ne s'est pas arrete la. Les "Investigations philosophiques", publiees apres sa mort, marquent un tournant radical. Il abandonne la theorie picturale du langage pour une conception pragmatique : le sens d'un mot n'est pas l'objet qu'il designe mais son usage dans un "jeu de langage". Il n'y a pas d'essence commune a tous les jeux (de cartes, de ballon, d'echecs), mais des "ressemblances de famille".

Les problemes philosophiques naissent quand "le langage part en vacances", quand nous arrachons les mots a leur usage ordinaire. La philosophie n'a pas a construire des theories mais a dissoudre les confusions conceptuelles par une attention au fonctionnement effectif du langage. Wittgenstein mourut a Cambridge en 1951, ayant profondement renouvele la philosophie du langage et influence toute la philosophie analytique.`,
    mainWorks: ["Tractatus logico-philosophicus", "Investigations philosophiques", "De la certitude"],
    keyIdeas: ["Theorie picturale du langage", "Jeux de langage", "Ressemblances de famille", "Philosophie comme therapie"]
  },
  {
    id: "sartre",
    name: "Jean-Paul Sartre",
    birthYear: 1905,
    deathYear: 1980,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sartre_1967_crop.jpg/220px-Sartre_1967_crop.jpg",
    nationality: "Francais",
    movement: "Existentialisme",
    summary: `Jean-Paul Sartre naquit a Paris en 1905. Orphelin de pere a deux ans, il fut eleve par sa mere et son grand-pere, Charles Schweitzer, oncle d'Albert Schweitzer. Brillant eleve de l'Ecole normale superieure, il y rencontra Simone de Beauvoir avec qui il forma un couple legendaire. Professeur de philosophie, il connut la celebrite avec "La Nausee" (1938) et devint apres la guerre la figure emblematique de l'existentialisme.

"L'existence precede l'essence" : telle est la formule centrale de l'existentialisme sartrien. Contrairement aux objets fabriques (un coupe-papier est fait pour couper), l'homme n'a pas de nature predeterminee, pas d'essence qui precederait son existence. Il existe d'abord, se trouve "jete" dans le monde, puis se definit par ses choix, ses actes, ses projets. L'homme est "condamne a etre libre".

Cette liberte radicale est source d'angoisse : aucun Dieu, aucune nature humaine, aucun determinisme ne nous dicte ce que nous devons etre. Nous sommes "entierement responsables" de ce que nous faisons de notre vie. La "mauvaise foi" consiste a fuir cette liberte ecrasante en se cachant derriere des excuses (mon caractere, les circonstances, la societe), en se faisant chose alors qu'on est liberte. Le garcon de cafe qui joue au garcon de cafe est en mauvaise foi.

Sartre en tire les consequences politiques : si je suis libre, je dois lutter pour la liberte des autres. Il s'engage contre la colonisation, la guerre du Vietnam, aux cotes des mouvements revolutionnaires. Il refuse le prix Nobel de litterature en 1964. Sa pensee evolue vers le marxisme dans la "Critique de la raison dialectique". Il mourut en 1980, suivi par une foule immense lors de ses funerailles.`,
    mainWorks: ["L'Etre et le Neant", "L'existentialisme est un humanisme", "La Nausee", "Huis clos"],
    keyIdeas: ["Existence precede essence", "Liberte radicale", "Mauvaise foi", "Engagement"]
  },
  {
    id: "merleau-ponty",
    name: "Maurice Merleau-Ponty",
    birthYear: 1908,
    deathYear: 1961,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Maurice_Merleau-Ponty.jpg/220px-Maurice_Merleau-Ponty.jpg",
    nationality: "Francais",
    movement: "Phenomenologie",
    summary: `Maurice Merleau-Ponty naquit a Rochefort-sur-Mer en 1908. Condisciple de Sartre et de Beauvoir a l'Ecole normale superieure, il fut d'abord proche de l'existentialisme sartrien avant de s'en distancer. Professeur a Lyon puis a la Sorbonne, il fut elu au College de France en 1952 ou il enseigna jusqu'a sa mort prematuree en 1961, a cinquante-trois ans, d'une crise cardiaque.

La "Phenomenologie de la perception" (1945) developpe une philosophie du corps propre qui depasse le dualisme cartesien. Contre l'idee d'une conscience desincarnee, pure interiorite sans epaisseur, Merleau-Ponty montre que nous sommes d'abord corps percevant, engage dans le monde. Le corps n'est pas un objet parmi d'autres que je possederais, mais "le vehicule de l'etre au monde", mon ancrage dans les choses.

La perception n'est pas une reception passive d'impressions sensorielles assemblees ensuite par l'entendement. Elle est une relation active, charnelle, avec le monde. Je ne perçois pas des taches de couleur que j'interpreterais ensuite comme un arbre : je perçois d'emblee un arbre. Le "phenomene" n'est pas une apparence trompeuse derriere laquelle se cacherait une realite ; c'est la chose meme telle qu'elle se donne a ma perception incarnee.

Dans ses derniers travaux, restes inacheves, Merleau-Ponty developpe le concept de "chair" (Fleisch) : non pas la matiere au sens scientifique, mais l'etoffe commune du voyant et du visible, du touchant et du touche. Ma main gauche touchant ma main droite qui touche le monde revele cette reversibilite fondamentale. Son influence sur la philosophie contemporaine, les sciences cognitives et les reflexions sur l'incarnation reste considerable.`,
    mainWorks: ["Phenomenologie de la perception", "Le Visible et l'Invisible", "Sens et non-sens"],
    keyIdeas: ["Corps propre", "Chair du monde", "Perception incarnee", "Chiasme"]
  },
  {
    id: "beauvoir",
    name: "Simone de Beauvoir",
    birthYear: 1908,
    deathYear: 1986,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Simone_de_Beauvoir2.png/220px-Simone_de_Beauvoir2.png",
    nationality: "Francaise",
    movement: "Existentialisme / Feminisme",
    summary: `Simone de Beauvoir naquit a Paris en 1908 dans une famille bourgeoise. Brillante eleve, elle fut recue deuxieme a l'agregation de philosophie en 1929, juste derriere Sartre, avec qui elle forma un couple mythique, fonde sur la liberte et la transparence. Professeure, puis ecrivaine a plein temps, elle fut une figure centrale de la vie intellectuelle francaise, engagee dans tous les combats progressistes.

"Le Deuxieme Sexe" (1949) est le texte fondateur du feminisme moderne. "On ne nait pas femme, on le devient" : cette formule celebre affirme que le genre est une construction sociale, non une essence naturelle. La femme a ete historiquement constituee comme "l'Autre" de l'homme, definie non par elle-meme mais par rapport au sujet masculin. Enfermee dans l'immanence (la repetition du quotidien, la maternite), elle se voit interdire la transcendance (la creation, l'action sur le monde).

Beauvoir analyse minutieusement les mecanismes de cette oppression : mythes masculins (la femme fatale, la femme-enfant, la mere), education differentielle, maternite imposee, dependance economique. Elle appelle les femmes a se liberer par l'autonomie economique, le refus de la maternite obligatoire, l'engagement politique et la solidarite feminine. Le livre fit scandale a sa parution mais influenca profondement le mouvement feministe.

Sa philosophie, exposee dans "Pour une morale de l'ambiguite", developpe une ethique existentialiste originale. Nous sommes a la fois liberte et facticite, transcendance et situation. Assumer cette ambiguite, c'est refuser les fuites : ni divertissement, ni esprit de serieux qui pretendrait fonder nos valeurs sur un absolu. Beauvoir mourut en 1986, six ans apres Sartre, dont elle avait raconte l'agonie dans "La Ceremonie des adieux".`,
    mainWorks: ["Le Deuxieme Sexe", "Memoires d'une jeune fille rangee", "Pour une morale de l'ambiguite", "Les Mandarins"],
    keyIdeas: ["Construction du genre", "Femme comme Autre", "Immanence/Transcendance", "Liberte feminine"]
  },
  {
    id: "arendt",
    name: "Hannah Arendt",
    birthYear: 1906,
    deathYear: 1975,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Hannah_Arendt_1975_%28cropped%29.jpg/220px-Hannah_Arendt_1975_%28cropped%29.jpg",
    nationality: "Allemande-Americaine",
    movement: "Philosophie politique",
    summary: `Hannah Arendt naquit en 1906 a Hanovre dans une famille juive assimilee. Eleve de Husserl, Heidegger (avec qui elle eut une liaison) et Jaspers, elle dut fuir l'Allemagne nazie en 1933. Apres un sejour en France, ou elle fut internee au camp de Gurs, elle emigra aux Etats-Unis en 1941 et devint citoyenne americaine. Elle enseigna dans plusieurs universites americaines jusqu'a sa mort en 1975.

"Les Origines du totalitarisme" (1951) analyse le nazisme et le stalinisme comme des phenomenes radicalement nouveaux, irreductibles aux formes anterieures de tyrannie. Le totalitarisme vise a rendre les hommes "superflus", a detruire leur spontaneite et leur pluralite par la terreur et l'ideologie. Les camps de concentration et d'extermination en sont la manifestation la plus extreme, ou meurent l'individualite juridique, morale et enfin l'individualite tout court.

Son reportage sur le proces d'Adolf Eichmann a Jerusalem (1961) introduit le concept controverse de "banalite du mal" : le mal radical peut etre commis par des individus ordinaires, mediocres, qui ne pensent pas. Eichmann n'etait pas un monstre demoniaque mais un bureaucrate incapable de penser par lui-meme, obeissant aux ordres sans se poser de questions. Cette these suscita une polemique violente.

"Condition de l'homme moderne" distingue trois activites humaines fondamentales : le travail (reproduction de la vie biologique), l'oeuvre (fabrication d'objets durables), l'action (initiative dans l'espace public, par la parole et l'acte). Seule l'action realise pleinement notre humanite, notre liberte et notre pluralite. Arendt deplore le triomphe du travail et de la consommation dans les societes modernes, qui menace l'espace public et la politique veritable.`,
    mainWorks: ["Les Origines du totalitarisme", "Condition de l'homme moderne", "Eichmann a Jerusalem", "La Crise de la culture"],
    keyIdeas: ["Banalite du mal", "Travail/Oeuvre/Action", "Espace public", "Pluralite humaine"]
  },
  {
    id: "camus",
    name: "Albert Camus",
    birthYear: 1913,
    deathYear: 1960,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg/220px-Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg",
    nationality: "Francais",
    movement: "Absurdisme",
    summary: `Albert Camus naquit en 1913 a Mondovi, en Algerie, dans une famille tres pauvre. Son pere, ouvrier agricole, mourut a la bataille de la Marne en 1914 ; sa mere, d'origine espagnole, quasi analphabete et a moitie sourde, eleva seule ses deux fils. Grace a son instituteur Louis Germain, puis a Jean Grenier, Camus put poursuivre des etudes. Il fut journaliste, resistant, et recut le prix Nobel de litterature en 1957.

"Le Mythe de Sisyphe" (1942) pose la question fondamentale : "Il n'y a qu'un probleme philosophique vraiment serieux : c'est le suicide. Juger que la vie vaut ou ne vaut pas la peine d'etre vecue, c'est repondre a la question fondamentale de la philosophie." L'absurde nait de la confrontation entre l'appel humain au sens et le silence deraisonnable du monde. Mais le suicide n'est pas la reponse : il faut "imaginer Sisyphe heureux", trouvant dans la lutte elle-meme une raison de vivre.

"L'Homme revolte" (1951) analyse la revolte comme refus de l'injustice au nom d'une valeur partagee : "Je me revolte, donc nous sommes." Mais Camus critique les revolutions qui, au nom de l'histoire et de fins absolues, justifient le meurtre. Contre Sartre et les communistes, il defend une ethique de la mesure et de la solidarite humaine, qui refuse de sacrifier des hommes reels a des lendemains qui chantent. Cette polemique le brouilla avec Sartre.

Bien qu'ami de Sartre, Camus refusait l'etiquette d'existentialiste. Sa pensee est celle d'un moraliste mediterraneen, attachee a la beaute du monde, a la sensualite, a la solidarite des hommes face a leur condition. Il mourut le 4 janvier 1960 dans un accident de voiture, a quarante-six ans. Dans sa sacoche, on trouva le manuscrit inacheve du "Premier homme", roman autobiographique poignant publie en 1994.`,
    mainWorks: ["Le Mythe de Sisyphe", "L'Etranger", "La Peste", "L'Homme revolte"],
    keyIdeas: ["Absurde", "Revolte", "Solidarite humaine", "Mesure"]
  },
  {
    id: "foucault",
    name: "Michel Foucault",
    birthYear: 1926,
    deathYear: 1984,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Foucault5.jpg/220px-Foucault5.jpg",
    nationality: "Francais",
    movement: "Post-structuralisme",
    summary: `Michel Foucault naquit a Poitiers en 1926 dans une famille de medecins. Eleve brillant mais tourmente (il fit plusieurs tentatives de suicide), il integra l'Ecole normale superieure ou il eut pour professeurs Althusser et Hyppolite. Apres des sejours a l'etranger (Suede, Pologne, Allemagne), il fut elu au College de France en 1970 a la chaire d'"Histoire des systemes de pensee".

Son oeuvre analyse les rapports entre savoir et pouvoir a travers l'histoire de differentes pratiques : la folie ("Histoire de la folie", 1961), la medecine clinique, les sciences humaines ("Les Mots et les Choses", 1966), la prison ("Surveiller et punir", 1975), la sexualite. Foucault montre comment ce qui nous semble naturel ou universel est en fait historiquement constitue, produit par des dispositifs de savoir-pouvoir.

"Surveiller et punir" analyse comment les societes modernes ont remplace les supplices spectaculaires par des techniques disciplinaires qui quadrillent l'espace, controlent le temps, normalisent les conduites. Le "Panoptique" de Bentham, prison ou le surveillant voit sans etre vu, devient le modele d'une societe de surveillance. Le pouvoir n'est pas seulement repressif : il est productif, il produit des savoirs, des individus, des verites, des subjectivites.

L'"Histoire de la sexualite" critique l'"hypothese repressive" : loin d'avoir reprime la sexualite, les societes modernes n'ont cesse d'en parler, de la constituer en savoir, de la faire avouer. La sexualite n'est pas une realite naturelle que le pouvoir reprime, mais un dispositif historique. Dans ses derniers travaux, Foucault s'interesse aux "techniques de soi" antiques, arts de l'existence qui permettent de se transformer soi-meme. Il mourut du sida en 1984.`,
    mainWorks: ["Histoire de la folie", "Surveiller et punir", "Histoire de la sexualite", "Les Mots et les Choses"],
    keyIdeas: ["Pouvoir-savoir", "Biopolitique", "Genealogie", "Technologies du soi"]
  },
  {
    id: "derrida",
    name: "Jacques Derrida",
    birthYear: 1930,
    deathYear: 2004,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Jacques_Derrida_%282001%29_cropped.jpg/220px-Jacques_Derrida_%282001%29_cropped.jpg",
    nationality: "Francais",
    movement: "Deconstruction",
    summary: `Jacques Derrida naquit a El-Biar, pres d'Alger, en 1930, dans une famille juive sefarade. Eleve de l'Ecole normale superieure, ou il eut pour condisciples Althusser, Foucault et Bourdieu, il enseigna d'abord a la Sorbonne puis a l'Ecole des hautes etudes en sciences sociales. Sa pensee, d'abord controversee en France, connut un succes considerable aux Etats-Unis, particulierement dans les departements de litterature.

La deconstruction, methode de lecture qu'il developpe a partir de 1967, revele les tensions, les hierarchies et les presupposes caches dans les textes philosophiques. La metaphysique occidentale, depuis Platon, repose sur des oppositions binaires (parole/ecriture, presence/absence, nature/culture, homme/femme) ou un terme est privilegie et l'autre subordonne. La deconstruction montre que le terme subordonne est en fait necessaire au terme dominant, minant ainsi la hierarchie.

Derrida critique le "logocentrisme" occidental, qui privilegie la parole (logos) sur l'ecriture, la presence sur l'absence. "Il n'y a pas de hors-texte" : notre acces au monde est toujours mediatise par des signes, des traces, des ecritures. La "differance" (avec un 'a', neologisme combinant difference et differement) designe ce mouvement par lequel le sens est toujours differe, jamais pleinement present.

L'influence de Derrida sur la philosophie, la theorie litteraire, l'architecture, les etudes postcoloniales et les etudes de genre est considerable, malgre les critiques qui lui reprochent son style obscur et son relativisme suppose. Dans ses derniers travaux, il s'est interesse aux themes de l'hospitalite, du pardon, de la justice, du deuil. Il mourut a Paris en 2004, laissant une oeuvre immense et encore controversee.`,
    mainWorks: ["De la grammatologie", "L'Ecriture et la Difference", "Marges de la philosophie", "Spectres de Marx"],
    keyIdeas: ["Deconstruction", "Differance", "Logocentrisme", "Trace"]
  },
  {
    id: "deleuze",
    name: "Gilles Deleuze",
    birthYear: 1925,
    deathYear: 1995,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Gilles_Deleuze.jpg/220px-Gilles_Deleuze.jpg",
    nationality: "Francais",
    movement: "Post-structuralisme",
    summary: `Gilles Deleuze naquit a Paris en 1925 et y passa toute sa vie, a l'exception des annees d'enseignement a Lyon. Forme a la Sorbonne, il consacra d'abord son oeuvre a des monographies originales sur des philosophes (Hume, Nietzsche, Bergson, Spinoza) qu'il lisait "a contre-courant", cherchant ce qui dans leur pensee echappait a la tradition. Il enseigna a l'universite de Paris VIII-Vincennes de 1969 a 1987.

"Difference et Repetition" (1968) et "Logique du sens" (1969) developpent une philosophie de la difference qui rompt avec la tradition platonicienne. Contre la philosophie de l'identite et de la representation, qui subordonne la difference au meme et au semblable, Deleuze pense la difference en elle-meme, affirmative et creatrice. Le reel est fait de singularites, d'intensites, de devenirs, non d'essences fixes ou de formes eternelles.

La collaboration avec le psychanalyste Felix Guattari produisit des oeuvres majeures : "L'Anti-Oedipe" (1972) et "Mille Plateaux" (1980). Ces livres critiquent la psychanalyse freudienne et son modele oedipien, et proposent une "schizo-analyse" qui libere le desir des structures familiales et sociales qui le canalisent. Le concept de "rhizome" s'oppose au modele arborescent de la pensee hierarchique : le rhizome pousse par le milieu, fait des connexions multiples, n'a ni debut ni fin.

Deleuze a aussi ecrit sur le cinema, la peinture (Francis Bacon), la litterature (Proust, Kafka, Melville). "Qu'est-ce que la philosophie ?" (1991), ecrit avec Guattari, definit la philosophie comme creation de concepts. Atteint d'une grave insuffisance respiratoire qui l'empechait de travailler, Deleuze se suicida en 1995 en se jetant par la fenetre de son appartement parisien.`,
    mainWorks: ["Difference et Repetition", "L'Anti-Oedipe (avec Guattari)", "Mille Plateaux", "Qu'est-ce que la philosophie ?"],
    keyIdeas: ["Difference", "Rhizome", "Deterritorialisation", "Corps sans organes"]
  }
];
