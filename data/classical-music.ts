export interface Composer {
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

export const composers: Composer[] = [
  {
    id: "monteverdi",
    name: "Claudio Monteverdi",
    birthYear: 1567,
    deathYear: 1643,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Claudio_Monteverdi.jpg?width=220",
    nationality: "Italien",
    movement: "Baroque primitif",
    family: "Baroque",
    summary: `Claudio Monteverdi naît à Crémone et devient maître de chapelle à la basilique Saint-Marc de Venise. Il est le pivot entre la Renaissance et le Baroque, révolutionnant l'expression musicale par l'intensité dramatique.

L'Orfeo (1607) est considéré comme le premier grand opéra de l'histoire. Monteverdi y déploie tous les moyens expressifs pour traduire les émotions du texte. Le Couronnement de Poppée (1643) atteint une modernité psychologique stupéfiante.

Ses madrigaux, en huit livres, montrent l'évolution de la polyphonie Renaissance vers la monodie accompagnée baroque. La "seconda pratica" qu'il défend place l'expression du texte au-dessus des règles contrapuntiques.

Monteverdi pose les fondements du langage musical occidental pour deux siècles. L'opéra, l'aria, le récitatif, l'orchestre moderne naissent avec lui. Sa redécouverte au XXe siècle en fait un compositeur aussi vivant que ses successeurs.`,
    mainWorks: ["L'Orfeo", "Le Couronnement de Poppée", "Vêpres de la Vierge", "Madrigaux (8 livres)", "Il Ritorno d'Ulisse"],
    keyIdeas: ["Opéra", "Seconda pratica", "Expression", "Madrigal"],
  },
  {
    id: "bach",
    name: "Jean-Sébastien Bach",
    birthYear: 1685,
    deathYear: 1750,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Johann_Sebastian_Bach.jpg?width=220",
    nationality: "Allemand",
    movement: "Baroque",
    family: "Baroque",
    summary: `Jean-Sébastien Bach naît à Eisenach dans une famille de musiciens. Organiste, maître de chapelle, Cantor à Leipzig, il mène une carrière provinciale mais produit une œuvre monumentale qui résume et transcende tout le baroque.

Les Passions selon saint Jean et selon saint Matthieu, la Messe en si mineur, les cantates (plus de 200) portent la musique sacrée à son apogée. Le Clavier bien tempéré explore les 24 tonalités en préludes et fugues d'une perfection absolue.

L'Art de la fugue et L'Offrande musicale, œuvres ultimes, poussent le contrepoint à ses limites spéculatives. Bach synthétise les styles français, italien et allemand en un langage universel. Sa maîtrise technique reste inégalée.

Oublié après sa mort, Bach est redécouvert par Mendelssohn au XIXe siècle. Il devient le "père de la musique", référence absolue pour tous les compositeurs. Son influence sur l'harmonie et la composition reste fondamentale.`,
    mainWorks: ["Passion selon saint Matthieu", "Messe en si mineur", "Le Clavier bien tempéré", "Concertos brandebourgeois", "L'Art de la fugue"],
    keyIdeas: ["Contrepoint", "Fugue", "Synthèse baroque", "Sacré"],
  },
  {
    id: "haendel",
    name: "Georg Friedrich Haendel",
    birthYear: 1685,
    deathYear: 1759,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/George_Frideric_Handel_by_Balthasar_Denner.jpg?width=220",
    nationality: "Allemand / Britannique",
    movement: "Baroque",
    family: "Baroque",
    summary: `Georg Friedrich Haendel naît à Halle la même année que Bach. Après des débuts en Allemagne et un séjour formateur en Italie, il s'installe à Londres où il devient le compositeur le plus célèbre de son temps.

Haendel excelle dans l'opéra italien : Rinaldo, Jules César, Alcina fascinent le public londonien. Quand l'opéra décline, il invente l'oratorio anglais : le Messie (1741), avec son "Hallelujah", reste l'œuvre chorale la plus jouée au monde.

Sa musique instrumentale - Water Music, Music for the Royal Fireworks, concertos grossos - témoigne d'une invention mélodique intarissable et d'un sens inné du spectacle. Haendel sait plaire au public sans sacrifier la qualité.

Naturalisé britannique, enterré à Westminster, Haendel incarne le musicien cosmopolite et prospère du XVIIIe siècle. Son style direct et expressif influence Haydn, Mozart et Beethoven qui le vénère comme "le maître de nous tous".`,
    mainWorks: ["Le Messie", "Water Music", "Jules César", "Music for the Royal Fireworks", "Dixit Dominus"],
    keyIdeas: ["Oratorio", "Opéra seria", "Mélodie", "Spectacle"],
  },
  {
    id: "vivaldi",
    name: "Antonio Vivaldi",
    birthYear: 1678,
    deathYear: 1741,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Antonio_Vivaldi_portrait.jpg?width=220",
    nationality: "Italien",
    movement: "Baroque",
    family: "Baroque",
    summary: `Antonio Vivaldi, le "Prêtre roux", naît à Venise. Ordonné prêtre mais dispensé de dire la messe pour raisons de santé, il consacre sa vie à la musique comme maître de violon et compositeur à l'Ospedale della Pietà, orphelinat pour jeunes filles.

Les Quatre Saisons (1725), quatre concertos pour violon illustrant les saisons, restent parmi les œuvres les plus célèbres de la musique classique. Leur virtuosité, leurs effets descriptifs, leur énergie rythmique enchantent toujours.

Vivaldi compose plus de 500 concertos, explorant toutes les combinaisons instrumentales. Il fixe la forme en trois mouvements (vif-lent-vif) et développe le dialogue soliste-orchestre. Bach le transcrit et l'étudie passionnément.

Célèbre dans toute l'Europe de son vivant, Vivaldi meurt pauvre et oublié à Vienne. Sa redécouverte au XXe siècle en fait l'un des compositeurs les plus joués. Son influence sur le concerto baroque est décisive.`,
    mainWorks: ["Les Quatre Saisons", "Gloria", "L'Estro Armonico", "La Stravaganza", "Orlando furioso"],
    keyIdeas: ["Concerto", "Virtuosité", "Descriptif", "Énergie"],
  },
  {
    id: "haydn",
    name: "Joseph Haydn",
    birthYear: 1732,
    deathYear: 1809,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Joseph_Haydn.jpg?width=220",
    nationality: "Autrichien",
    movement: "Classicisme",
    family: "Classicisme",
    summary: `Joseph Haydn naît dans un village autrichien et devient maître de chapelle des princes Esterházy pendant trente ans. Cette stabilité lui permet d'expérimenter sans relâche, inventant les formes classiques que Mozart et Beethoven porteront à leur perfection.

Haydn est le "père de la symphonie" : ses 104 symphonies définissent le genre, des premières œuvres galantes aux grandes symphonies londoniennes. Il est aussi le "père du quatuor à cordes" : ses 68 quatuors inventent la conversation à quatre voix égales.

Ses oratorios tardifs, La Création et Les Saisons, couronnent une carrière de soixante ans. L'humour, l'invention, l'optimisme caractérisent son style. La "Symphonie des Adieux" où les musiciens partent un à un témoigne de son esprit.

Haydn connaît une gloire européenne de son vivant. Ses voyages à Londres sont des triomphes. Il est le premier "compositeur libre", admiré, riche, respecté. Mozart le considère comme son père spirituel.`,
    mainWorks: ["Symphonies londoniennes", "La Création", "Quatuors opus 76", "Les Saisons", "Concerto pour trompette"],
    keyIdeas: ["Symphonie", "Quatuor", "Forme sonate", "Humour"],
  },
  {
    id: "mozart",
    name: "Wolfgang Amadeus Mozart",
    birthYear: 1756,
    deathYear: 1791,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mozart_Portrait_Croce.jpg?width=220",
    nationality: "Autrichien",
    movement: "Classicisme",
    family: "Classicisme",
    summary: `Wolfgang Amadeus Mozart naît à Salzbourg, enfant prodige exhibé dans toutes les cours d'Europe par son père Leopold. À cinq ans, il compose ses premières pièces. À trente-cinq ans, il meurt, laissant plus de 600 œuvres d'une perfection inouïe.

Mozart excelle dans tous les genres : symphonies, concertos, musique de chambre, sonates. Mais c'est l'opéra qui révèle le mieux son génie dramatique : Les Noces de Figaro, Don Giovanni, Così fan tutte, La Flûte enchantée restent au sommet du répertoire.

Son style allie la légèreté galante et la profondeur émotionnelle, la perfection formelle et la spontanéité mélodique. Le Requiem, inachevé à sa mort, résume cette alliance du sombre et du lumineux qui fascine depuis deux siècles.

Mozart meurt pauvre à Vienne, enterré dans une fosse commune. Mais sa légende croît immédiatement. Il incarne le génie pur, l'inspiration divine, la musique même. Son influence sur tous les compositeurs ultérieurs est incommensurable.`,
    mainWorks: ["Don Giovanni", "Les Noces de Figaro", "La Flûte enchantée", "Requiem", "Symphonie n°41 'Jupiter'"],
    keyIdeas: ["Opéra", "Génie", "Perfection", "Mélodie"],
  },
  {
    id: "beethoven",
    name: "Ludwig van Beethoven",
    birthYear: 1770,
    deathYear: 1827,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Beethoven.jpg?width=220",
    nationality: "Allemand",
    movement: "Classicisme / Romantisme",
    family: "Classicisme",
    summary: `Ludwig van Beethoven naît à Bonn et s'installe à Vienne où il s'impose comme pianiste virtuose et compositeur. Vers trente ans, la surdité le frappe. Il surmonte ce désastre pour créer une œuvre titanesque qui ouvre l'ère romantique.

Les neuf symphonies jalonnent son évolution : de l'héritage classique (Première, Deuxième) à l'héroïsme (Troisième "Eroica", Cinquième) puis à la transcendance (Neuvième avec son "Ode à la joie"). Chacune est un monde.

Les 32 sonates pour piano, les 16 quatuors à cordes, les 5 concertos pour piano, Fidelio (unique opéra), la Missa Solemnis : chaque genre est réinventé, poussé à ses limites. Les dernières œuvres atteignent une spiritualité visionnaire.

Beethoven transforme le statut du compositeur : non plus serviteur, mais artiste libre, génie solitaire luttant contre le destin. Son influence sur tout le XIXe siècle est écrasante. Il reste l'image même du compositeur.`,
    mainWorks: ["Symphonie n°9", "Symphonie n°5", "Sonate 'Clair de lune'", "Concerto 'L'Empereur'", "Quatuors tardifs"],
    keyIdeas: ["Héroïsme", "Surdité", "Liberté", "Transcendance"],
  },
  {
    id: "schubert",
    name: "Franz Schubert",
    birthYear: 1797,
    deathYear: 1828,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Franz_Schubert_by_Wilhelm_August_Rieder_1875.jpg?width=220",
    nationality: "Autrichien",
    movement: "Romantisme",
    family: "Romantisme",
    summary: `Franz Schubert naît à Vienne dans une famille modeste. Il vit dans l'ombre de Beethoven, gagnant péniblement sa vie, compose plus de 600 lieder (mélodies), des symphonies, de la musique de chambre d'une beauté poignante.

Le lied schubertien atteint une perfection inégalée : Erlkönig, La Truite, La Belle Meunière, Le Voyage d'hiver. La voix et le piano dialoguent pour exprimer toute la gamme des émotions humaines, de la joie à la désolation.

Sa musique instrumentale - Symphonie "Inachevée", "Grande" Symphonie en do majeur, Quintette à cordes, dernières sonates - allie la forme classique à une sensibilité romantique. Les modulations inattendues, les longueurs "célestes" (Schumann) créent un univers unique.

Schubert meurt à trente et un ans, probablement de la syphilis. Beaucoup de ses œuvres restent inédites. Sa redécouverte progressive en fait l'égal des plus grands. Le lied romantique lui doit tout.`,
    mainWorks: ["Le Voyage d'hiver", "La Truite", "Symphonie 'Inachevée'", "Quintette à cordes", "La Belle Meunière"],
    keyIdeas: ["Lied", "Mélodie", "Intimité", "Mélancolie"],
  },
  {
    id: "chopin",
    name: "Frédéric Chopin",
    birthYear: 1810,
    deathYear: 1849,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Frederic_Chopin_photo.jpeg?width=220",
    nationality: "Polonais",
    movement: "Romantisme",
    family: "Romantisme",
    summary: `Frédéric Chopin naît près de Varsovie, s'installe à Paris à vingt ans et ne revoit jamais sa Pologne natale. Pianiste virtuose au jeu délicat, il se consacre presque exclusivement à son instrument, créant un univers sonore unique.

Les nocturnes, préludes, études, valses, mazurkas, polonaises explorent toutes les possibilités du piano romantique. Chopin invente un rubato subtil, une harmonie raffinée, une ornementation qui chante. Chaque pièce est un joyau.

Sa liaison avec George Sand, ses années à Nohant puis à Majorque (où il compose les Préludes), sa tuberculose qui le mine forment une légende romantique. Chopin incarne l'artiste fragile, exilé, consumé par son art.

Chopin meurt à Paris à trente-neuf ans. Son influence sur la technique pianistique et l'écriture pour piano est décisive. Liszt, Debussy, Scriabine, Rachmaninov lui doivent tous quelque chose. Il reste le poète du piano.`,
    mainWorks: ["Nocturnes", "24 Préludes", "Ballades", "Études", "Polonaises"],
    keyIdeas: ["Piano", "Rubato", "Exil", "Poésie"],
  },
  {
    id: "schumann",
    name: "Robert Schumann",
    birthYear: 1810,
    deathYear: 1856,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Robert_Schumann_1839.jpg?width=220",
    nationality: "Allemand",
    movement: "Romantisme",
    family: "Romantisme",
    summary: `Robert Schumann naît à Zwickau. Destiné au droit, il choisit la musique et se blesse la main en voulant devenir virtuose. Il se consacre alors à la composition et à la critique musicale, défendant Chopin, Berlioz et le jeune Brahms.

Ses cycles pour piano (Carnaval, Kreisleriana, Scènes d'enfants) et ses lieder (Dichterliebe, L'Amour et la vie d'une femme) incarnent le romantisme allemand. Personnages doubles (Florestan et Eusebius), références littéraires, intimité du sentiment caractérisent son style.

Son mariage avec Clara Wieck, pianiste virtuose, est un roman d'amour. Ses symphonies, son concerto pour piano, sa musique de chambre témoignent d'une ambition croissante mais aussi d'une santé mentale fragile.

Schumann sombre dans la folie et meurt dans un asile à quarante-six ans. Son influence sur Brahms, qu'il a révélé, est décisive. Critique visionnaire, il a pressenti le génie de ses contemporains.`,
    mainWorks: ["Carnaval", "Dichterliebe", "Scènes d'enfants", "Concerto pour piano", "Symphonie n°3 'Rhénane'"],
    keyIdeas: ["Dualité", "Littérature", "Folie", "Critique"],
  },
  {
    id: "liszt",
    name: "Franz Liszt",
    birthYear: 1811,
    deathYear: 1886,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Franz_Liszt_1858.jpg?width=220",
    nationality: "Hongrois",
    movement: "Romantisme",
    family: "Romantisme",
    summary: `Franz Liszt naît en Hongrie et devient le plus grand pianiste virtuose du XIXe siècle. Ses tournées triomphales inventent le récital solo et le culte de la star. Les femmes se pâment, on se dispute ses gants et ses mégots.

Liszt repousse les limites techniques du piano : les Études d'exécution transcendante, la Sonate en si mineur, les Rhapsodies hongroises exigent une virtuosité inouïe. Mais derrière le spectacle, une invention harmonique audacieuse annonce Wagner et Debussy.

Installé à Weimar, Liszt devient le champion de la "musique de l'avenir" : poèmes symphoniques, Faust-Symphonie, soutien à Wagner. Il prend les ordres mineurs et compose une musique religieuse austère. Sa générosité envers les jeunes compositeurs est légendaire.

L'influence de Liszt est immense : il invente le poème symphonique, anticipe l'impressionnisme et l'atonalité, forme des générations de pianistes. Ses dernières pièces, radicalement dépouillées, fascinent les compositeurs modernes.`,
    mainWorks: ["Sonate en si mineur", "Rhapsodies hongroises", "Années de pèlerinage", "Faust-Symphonie", "Études d'exécution transcendante"],
    keyIdeas: ["Virtuosité", "Poème symphonique", "Transformation thématique", "Abbé"],
  },
  {
    id: "wagner",
    name: "Richard Wagner",
    birthYear: 1813,
    deathYear: 1883,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/RichardWagner.jpg?width=220",
    nationality: "Allemand",
    movement: "Romantisme tardif",
    family: "Romantisme tardif",
    summary: `Richard Wagner naît à Leipzig et révolutionne l'opéra pour en faire un "drame musical" total. Il écrit ses propres livrets, conçoit les décors, fait construire un théâtre à Bayreuth dédié à ses œuvres. Son ambition est démesurée.

La Tétralogie de l'Anneau du Nibelung (L'Or du Rhin, La Walkyrie, Siegfried, Le Crépuscule des Dieux), Tristan et Isolde, Les Maîtres Chanteurs, Parsifal sont des monuments de plusieurs heures. Le leitmotiv tisse un réseau de significations dans une musique continue.

L'harmonie wagnérienne, avec l'accord de Tristan, pousse le chromatisme à ses limites et ouvre la voie à l'atonalité. L'orchestre atteint des dimensions inédites. L'influence sur toute la musique du XXe siècle, de Mahler à Hollywood, est écrasante.

Wagner est aussi une figure controversée : nationaliste, antisémite, mégalomane. Son appropriation par les nazis ternit sa mémoire. Mais son génie musical reste incontestable, et Bayreuth attire toujours les pèlerins.`,
    mainWorks: ["Tristan et Isolde", "L'Anneau du Nibelung", "Parsifal", "Les Maîtres Chanteurs", "Lohengrin"],
    keyIdeas: ["Drame musical", "Leitmotiv", "Gesamtkunstwerk", "Chromatisme"],
  },
  {
    id: "brahms",
    name: "Johannes Brahms",
    birthYear: 1833,
    deathYear: 1897,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/JohannesBrahms.jpg?width=220",
    nationality: "Allemand",
    movement: "Romantisme",
    family: "Romantisme",
    summary: `Johannes Brahms naît à Hambourg dans un milieu modeste. Révélé par Schumann comme le successeur de Beethoven, il porte ce fardeau toute sa vie, attendant quarante ans avant de publier sa Première Symphonie.

Brahms refuse le théâtralisme wagnérien pour cultiver les formes classiques : symphonies, concertos, musique de chambre. Mais sous l'apparence austère, une passion intense, une mélancolie automnale, un raffinement harmonique uniques.

Ses quatre symphonies, ses deux concertos pour piano, son Concerto pour violon, le Requiem allemand, les lieder sont des sommets du répertoire. Les Variations sur un thème de Haydn, les Danses hongroises révèlent un autre visage, plus populaire.

Brahms vit à Vienne, célibataire bourru, ami de Clara Schumann jusqu'à sa mort. Il représente la résistance classique face aux "progressistes" wagnériens. Schoenberg montrera que Brahms était lui aussi un révolutionnaire, un "progressiste" caché.`,
    mainWorks: ["Symphonie n°4", "Requiem allemand", "Concerto pour violon", "Concerto pour piano n°2", "Danses hongroises"],
    keyIdeas: ["Classicisme", "Mélancolie", "Variation", "Forme"],
  },
  {
    id: "tchaikovsky",
    name: "Piotr Ilitch Tchaïkovsky",
    birthYear: 1840,
    deathYear: 1893,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Portr%C3%A4t_des_Komponisten_Pjotr_I._Tschaikowski_%281840-1893%29.jpg?width=220",
    nationality: "Russe",
    movement: "Romantisme russe",
    family: "Romantisme tardif",
    summary: `Piotr Ilitch Tchaïkovsky naît à Votkinsk et devient le premier compositeur russe à acquérir une renommée mondiale. Formé au Conservatoire de Saint-Pétersbourg, il synthétise l'héritage occidental et la sensibilité slave.

Ses ballets - Le Lac des cygnes, La Belle au bois dormant, Casse-Noisette - sont les plus célèbres du répertoire. Ses symphonies (surtout les trois dernières), ses concertos pour piano et violon, ses opéras (Eugène Onéguine, La Dame de Pique) sont des classiques.

La musique de Tchaïkovsky exprime une émotivité débordante, une mélancolie russe, un sens inné de la mélodie et de l'orchestration. Critiqué comme superficiel par certains, il est adoré du public depuis plus d'un siècle.

Tchaïkovsky meurt mystérieusement à Saint-Pétersbourg, peut-être du choléra, peut-être suicidé. Son homosexualité, sujet de tourment, est longtemps occultée. Sa Sixième Symphonie "Pathétique" semble un adieu bouleversant.`,
    mainWorks: ["Le Lac des cygnes", "Symphonie n°6 'Pathétique'", "Concerto pour piano n°1", "Casse-Noisette", "Eugène Onéguine"],
    keyIdeas: ["Ballet", "Mélodie", "Émotivité", "Russie"],
  },
  {
    id: "dvorak",
    name: "Antonín Dvořák",
    birthYear: 1841,
    deathYear: 1904,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Dvorak.jpg/330px-Dvorak.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Tchèque",
    movement: "Romantisme / Nationalisme",
    family: "Romantisme tardif",
    summary: `Antonín Dvořák naît en Bohême et devient le champion de la musique tchèque. Encouragé par Brahms, il acquiert une renommée européenne puis américaine. Directeur du Conservatoire de New York, il s'inspire des musiques noire et amérindienne.

La Symphonie "Du Nouveau Monde" (1893), composée en Amérique, est l'une des plus jouées au monde. Le Concerto pour violoncelle est le sommet du genre. Les Danses slaves, les opéras (Rusalka) ancrent son art dans le folklore tchèque.

Dvořák allie spontanéité mélodique, maîtrise formelle héritée de Brahms et couleur orchestrale chatoyante. Sa musique respire la joie de vivre, la nature, les danses paysannes, sans exclure une profondeur spirituelle.

De retour en Bohême, Dvořák compose ses derniers opéras et poèmes symphoniques. Il meurt célèbre à Prague. Son influence sur la musique tchèque (Janáček, Martinů) et américaine est considérable.`,
    mainWorks: ["Symphonie 'Du Nouveau Monde'", "Concerto pour violoncelle", "Danses slaves", "Rusalka", "Quatuor 'Américain'"],
    keyIdeas: ["Nationalisme", "Folklore", "Nouveau Monde", "Mélodie"],
  },
  {
    id: "mahler",
    name: "Gustav Mahler",
    birthYear: 1860,
    deathYear: 1911,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Photo_of_Gustav_Mahler_by_Moritz_N%C3%A4hr_01.jpg?width=220",
    nationality: "Autrichien",
    movement: "Post-romantisme",
    family: "Romantisme tardif",
    summary: `Gustav Mahler naît en Bohême dans une famille juive. Il devient le plus grand chef d'orchestre de son temps, dirigeant l'Opéra de Vienne puis le Metropolitan de New York. Il compose l'été, entre deux saisons.

Ses neuf symphonies (plus une inachevée) portent l'orchestre romantique à ses limites : effectifs gigantesques, durées d'une heure ou plus, ambitions cosmiques. "La symphonie doit être comme le monde, elle doit tout embrasser."

L'univers mahlérien mêle marches funèbres et ländler populaires, ironie et transcendance, nature et désespoir. Le Chant de la terre, Das Lied von der Erde, résume cette tension entre vie et mort. Les Kindertotenlieder sont d'une beauté déchirante.

Méconnu comme compositeur de son vivant, Mahler prédit : "Mon temps viendra." La redécouverte des années 1960 (Bernstein) en fait l'un des compositeurs les plus joués. Son influence sur le XXe siècle, de Schoenberg à Berio, est immense.`,
    mainWorks: ["Symphonie n°2 'Résurrection'", "Le Chant de la terre", "Symphonie n°9", "Kindertotenlieder", "Symphonie n°5"],
    keyIdeas: ["Symphonie-monde", "Ironie", "Transcendance", "Adieu"],
  },
  {
    id: "debussy",
    name: "Claude Debussy",
    birthYear: 1862,
    deathYear: 1918,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Claude_Debussy_ca_1908%2C_foto_av_F%C3%A9lix_Nadar.jpg?width=220",
    nationality: "Français",
    movement: "Impressionnisme",
    family: "Modernité",
    summary: `Claude Debussy naît à Saint-Germain-en-Laye. Prix de Rome, il rompt vite avec l'académisme pour créer un langage nouveau : l'impressionnisme musical. La découverte du gamelan javanais à l'Exposition de 1889 le marque profondément.

Prélude à l'après-midi d'un faune (1894) inaugure la musique moderne. Pelléas et Mélisande, unique opéra, refuse tous les effets wagnériens pour une prosodie fluide et des harmonies flottantes. La Mer, les Images, les Préludes pour piano sont des chefs-d'œuvre.

Debussy libère l'harmonie de ses fonctions tonales : gammes par tons, accords parallèles, modes anciens créent des couleurs inédites. L'orchestre devient un nuancier subtil. La forme se dissout au profit de l'instant.

Debussy meurt à Paris pendant les bombardements allemands. Son influence sur toute la musique du XXe siècle, de Ravel à Messiaen et Boulez, est fondamentale. Il ouvre une voie alternative à l'expressionnisme germanique.`,
    mainWorks: ["Prélude à l'après-midi d'un faune", "Pelléas et Mélisande", "La Mer", "Préludes pour piano", "Clair de lune"],
    keyIdeas: ["Impressionnisme", "Couleur", "Liberté harmonique", "Symbolisme"],
  },
  {
    id: "ravel",
    name: "Maurice Ravel",
    birthYear: 1875,
    deathYear: 1937,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Maurice_Ravel_1925.jpg?width=220",
    nationality: "Français",
    movement: "Impressionnisme / Néoclassicisme",
    family: "Modernité",
    summary: `Maurice Ravel naît à Ciboure, au Pays basque. Considéré comme l'héritier de Debussy, il s'en distingue par une rigueur formelle, un sens de l'artisanat, une ironie qui tempère l'émotion.

Le Boléro (1928), crescendo hypnotique sur un thème unique, est l'œuvre française la plus jouée au monde. Ma mère l'Oye, le Concerto en sol, l'orchestration des Tableaux d'une exposition de Moussorgski témoignent d'une maîtrise orchestrale inégalée.

Les deux concertos pour piano, Daphnis et Chloé (ballet), le Quatuor à cordes, les mélodies (Shéhérazade) explorent des univers variés : espagnol, jazz, antique, exotique. "L'horloger suisse" (Stravinsky) cache une sensibilité poignante.

Frappé d'une maladie dégénérative, Ravel passe ses dernières années dans le silence. Son influence sur la musique française et américaine (Gershwin) est considérable. L'élégance et la précision de son écriture restent des modèles.`,
    mainWorks: ["Boléro", "Concerto en sol", "Daphnis et Chloé", "Ma mère l'Oye", "Quatuor à cordes"],
    keyIdeas: ["Artisanat", "Orchestration", "Élégance", "Ironie"],
  },
  {
    id: "stravinsky",
    name: "Igor Stravinsky",
    birthYear: 1882,
    deathYear: 1971,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Igor_Stravinsky_LOC_32392u.jpg?width=220",
    nationality: "Russe / Américain",
    movement: "Modernisme",
    family: "Modernité",
    summary: `Igor Stravinsky naît près de Saint-Pétersbourg. Élève de Rimski-Korsakov, il explose avec les Ballets russes de Diaghilev : L'Oiseau de feu (1910), Petrouchka (1911), Le Sacre du printemps (1913) révolutionnent la musique.

Le Sacre, avec ses rythmes sauvages et ses dissonances brutales, provoque un scandale légendaire à sa création. C'est l'acte de naissance de la musique moderne. Stravinsky ne cessera de se réinventer, refusant tout système.

Période néoclassique (Pulcinella, Symphonie de psaumes), retour au sacré (Messe, Requiem Canticles), adoption tardive du sérialisme : chaque décennie apporte un nouveau Stravinsky. "Je suis l'invention de moi-même", dit-il.

Exilé en France puis aux États-Unis, Stravinsky traverse le siècle comme sa figure dominante. Son influence sur Messiaen, Boulez, les minimalistes est décisive. Il meurt à New York et est enterré à Venise.`,
    mainWorks: ["Le Sacre du printemps", "L'Oiseau de feu", "Petrouchka", "Symphonie de psaumes", "Noces"],
    keyIdeas: ["Rythme", "Réinvention", "Néoclassicisme", "Ballets russes"],
  },
  {
    id: "schoenberg",
    name: "Arnold Schoenberg",
    birthYear: 1874,
    deathYear: 1951,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Arnold_Schoenberg_la_1948.jpg?width=220",
    nationality: "Autrichien / Américain",
    movement: "Expressionnisme / Dodécaphonisme",
    family: "Modernité",
    summary: `Arnold Schoenberg naît à Vienne. Autodidacte, il pousse le chromatisme wagnérien jusqu'à la rupture avec la tonalité. La Nuit transfigurée (1899), Pelléas et Mélisande montrent un post-romantisme exacerbé.

Avec les Trois pièces pour piano op. 11 (1909) et Pierrot lunaire (1912), Schoenberg entre dans l'atonalité libre, où aucune note ne prévaut. L'expressionnisme viennois atteint une intensité psychologique inouïe. C'est une révolution.

Pour organiser ce nouveau langage, Schoenberg invente le dodécaphonisme : les douze notes de la gamme chromatique sont ordonnées en une série qui structure toute l'œuvre. Ses élèves Berg et Webern forment la "Seconde École de Vienne".

Exilé aux États-Unis par le nazisme, Schoenberg enseigne à UCLA et revient parfois à la tonalité. Son influence sur la musique d'après-guerre (sérialisme intégral) est décisive, même si le grand public reste rebuté par son abstraction.`,
    mainWorks: ["Pierrot lunaire", "La Nuit transfigurée", "Moses und Aron", "Variations pour orchestre", "Un survivant de Varsovie"],
    keyIdeas: ["Atonalité", "Dodécaphonisme", "Expressionnisme", "Seconde École de Vienne"],
  },
  {
    id: "bartok",
    name: "Béla Bartók",
    birthYear: 1881,
    deathYear: 1945,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bart%C3%B3k_B%C3%A9la_1927.jpg?width=220",
    nationality: "Hongrois",
    movement: "Modernisme / Nationalisme",
    family: "Modernité",
    summary: `Béla Bartók naît en Hongrie et consacre sa vie à la collecte et l'étude des musiques paysannes d'Europe centrale. Ce travail ethnomusicologique nourrit une œuvre qui synthétise folklore authentique et langage moderniste.

Le Château de Barbe-Bleue (opéra), Le Mandarin merveilleux (ballet), les six Quatuors à cordes, la Musique pour cordes, percussion et célesta, le Concerto pour orchestre sont des sommets du XXe siècle. La violence rythmique, les clusters, les modes populaires caractérisent son style.

Bartók refuse le dodécaphonisme pour une modernité enracinée. Les Mikrokosmos, 153 pièces didactiques pour piano, résument son évolution. Le folklore n'est pas un ornement mais la source même de son langage.

Exilé aux États-Unis en 1940, Bartók y meurt pauvre et méconnu. Sa réhabilitation est rapide. Il incarne une alternative au sérialisme, une modernité qui n'oublie pas les racines populaires et nationales.`,
    mainWorks: ["Concerto pour orchestre", "Quatuors à cordes", "Musique pour cordes, percussion et célesta", "Le Mandarin merveilleux", "Mikrokosmos"],
    keyIdeas: ["Folklore", "Rythme", "Ethnomusicologie", "Clusters"],
  },
  {
    id: "shostakovich",
    name: "Dmitri Chostakovitch",
    birthYear: 1906,
    deathYear: 1975,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dmitri_Shostakovich_credit_Deutsche_Fotothek_adjusted.jpg?width=220",
    nationality: "Russe / Soviétique",
    movement: "Modernisme soviétique",
    family: "XXe siècle",
    summary: `Dmitri Chostakovitch naît à Saint-Pétersbourg et traverse l'ère soviétique, de la révolution à la stagnation brejnévienne. Son œuvre immense porte la marque de cette histoire tragique, entre soumission apparente et résistance intérieure.

Dénoncé par la Pravda en 1936 ("Chaos au lieu de musique"), Chostakovitch frôle la déportation. Il adopte un langage plus accessible mais truffé de références ambiguës. Ses symphonies (quinze), quatuors à cordes (quinze) forment un journal intime codé.

La Cinquième Symphonie (1937), "réponse d'un artiste soviétique à une juste critique", est-elle sincère ou ironique ? Le finale triomphal sonne-t-il vrai ou faux ? Ce double langage fascine et divise les interprètes.

Chostakovitch meurt à Moscou, couvert d'honneurs officiels mais amer. Ses Mémoires posthumes (Testimony) révèlent un opposant intérieur. Son influence sur la musique russe contemporaine et sur la perception de l'art sous dictature reste immense.`,
    mainWorks: ["Symphonie n°5", "Symphonie n°7 'Leningrad'", "Quatuor n°8", "Lady Macbeth de Mtsensk", "Concerto pour violoncelle n°1"],
    keyIdeas: ["Double langage", "Ironie tragique", "URSS", "Résistance"],
  },
  {
    id: "messiaen",
    name: "Olivier Messiaen",
    birthYear: 1908,
    deathYear: 1992,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lezing_Franse_compoist_Olivier_Messiaen_in_Koninklijk_Conservatorium_in_Den_Haa%2C_Bestanddeelnr_933-8263.jpg/330px-Lezing_Franse_compoist_Olivier_Messiaen_in_Koninklijk_Conservatorium_in_Den_Haa%2C_Bestanddeelnr_933-8263.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Modernisme / Musique spectrale",
    family: "XXe siècle",
    summary: `Olivier Messiaen naît à Avignon. Organiste de la Trinité à Paris pendant soixante ans, compositeur et pédagogue, il forme des générations de musiciens : Boulez, Stockhausen, Xenakis passent par sa classe.

Son langage est unique : modes à transpositions limitées, rythmes hindous, chants d'oiseaux (il en transcrit des centaines), couleurs-sons (synesthésie). Sa foi catholique inspire des œuvres monumentales : Vingt Regards sur l'Enfant-Jésus, Quatuor pour la fin du Temps.

Le Quatuor, composé en captivité allemande et créé dans un camp de prisonniers (1941), est un acte de foi et de résistance. Des orgues d'Apparition de l'Église éternelle au gigantesque opéra Saint François d'Assise (1983), l'ambition ne cesse de croître.

Messiaen reste inclassable : ni sérialiste, ni néoclassique, ni minimaliste. Son influence sur la musique spectrale (Murail, Grisey), sur l'écologie sonore, sur la transcendance en musique est profonde. Il incarne une modernité spirituelle.`,
    mainWorks: ["Quatuor pour la fin du Temps", "Turangalîla-Symphonie", "Catalogue d'oiseaux", "Saint François d'Assise", "Vingt Regards sur l'Enfant-Jésus"],
    keyIdeas: ["Foi", "Oiseaux", "Modes", "Couleur sonore"],
  },
  {
    id: "glass",
    name: "Philip Glass",
    birthYear: 1937,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Philip_Glass_in_Florence%2C_Italy_-_1993.jpg?width=220",
    nationality: "Américain",
    movement: "Minimalisme",
    family: "XXe siècle",
    summary: `Philip Glass naît à Baltimore. Formé à Juilliard et avec Nadia Boulanger à Paris, il découvre la musique indienne avec Ravi Shankar. Cette rencontre transforme son langage vers la répétition et les structures additives.

Music in Twelve Parts (1974), Einstein on the Beach (1976, avec Robert Wilson) imposent le minimalisme américain. Les opéras Satyagraha et Akhnaten forment avec Einstein une trilogie sur les hommes qui ont changé le monde par les idées.

Glass compose une œuvre immense : quatuors, symphonies, concertos, musiques de film (Koyaanisqatsi, The Hours). Sa musique, accessible et hypnotique, connaît un succès populaire que le milieu académique lui reproche parfois.

À plus de quatre-vingts ans, Glass continue de composer et de se produire. Son influence sur la musique de film, la musique électronique, la pop est considérable. Le minimalisme qu'il a fondé avec Reich et Riley a transformé le paysage musical.`,
    mainWorks: ["Einstein on the Beach", "Glassworks", "Koyaanisqatsi", "Akhnaten", "Symphonie n°3"],
    keyIdeas: ["Minimalisme", "Répétition", "Opéra", "Musique de film"],
  },
];
