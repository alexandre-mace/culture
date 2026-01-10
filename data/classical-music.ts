export interface Composer {
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

export const composers: Composer[] = [
  {
    id: "monteverdi",
    name: "Claudio Monteverdi",
    birthYear: 1567,
    deathYear: 1643,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Claudio_Monteverdi.jpg?width=220",
    nationality: "Italien",
    movement: "Baroque primitif",
    summary: `Claudio Monteverdi nait a Cremone et devient maitre de chapelle a la basilique Saint-Marc de Venise. Il est le pivot entre la Renaissance et le Baroque, revolutionnant l'expression musicale par l'intensite dramatique.

L'Orfeo (1607) est considere comme le premier grand opera de l'histoire. Monteverdi y deploie tous les moyens expressifs pour traduire les emotions du texte. Le Couronnement de Poppee (1643) atteint une modernite psychologique stupéfiante.

Ses madrigaux, en huit livres, montrent l'evolution de la polyphonie Renaissance vers la monodie accompagnee baroque. La "seconda pratica" qu'il defend place l'expression du texte au-dessus des regles contrapuntiques.

Monteverdi pose les fondements du langage musical occidental pour deux siecles. L'opera, l'aria, le recitiatif, l'orchestre moderne naissent avec lui. Sa redécouverte au XXe siecle en fait un compositeur aussi vivant que ses successeurs.`,
    mainWorks: ["L'Orfeo", "Le Couronnement de Poppee", "Vepres de la Vierge", "Madrigaux (8 livres)", "Il Ritorno d'Ulisse"],
    keyIdeas: ["Opera", "Seconda pratica", "Expression", "Madrigal"],
  },
  {
    id: "bach",
    name: "Jean-Sebastien Bach",
    birthYear: 1685,
    deathYear: 1750,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Johann_Sebastian_Bach.jpg?width=220",
    nationality: "Allemand",
    movement: "Baroque",
    summary: `Jean-Sebastien Bach nait a Eisenach dans une famille de musiciens. Organiste, maitre de chapelle, Cantor a Leipzig, il mene une carriere provinciale mais produit une oeuvre monumentale qui resume et transcende tout le baroque.

Les Passions selon saint Jean et selon saint Matthieu, la Messe en si mineur, les cantates (plus de 200) portent la musique sacree a son apogee. Le Clavier bien tempere explore les 24 tonalites en preludes et fugues d'une perfection absolue.

L'Art de la fugue et L'Offrande musicale, oeuvres ultimes, poussent le contrepoint a ses limites speculatives. Bach synthetise les styles francais, italien et allemand en un langage universel. Sa maitrise technique reste inegalee.

Oublie apres sa mort, Bach est redécouvert par Mendelssohn au XIXe siecle. Il devient le "pere de la musique", reference absolue pour tous les compositeurs. Son influence sur l'harmonie et la composition reste fondamentale.`,
    mainWorks: ["Passion selon saint Matthieu", "Messe en si mineur", "Le Clavier bien tempere", "Concertos brandebourgeois", "L'Art de la fugue"],
    keyIdeas: ["Contrepoint", "Fugue", "Synthese baroque", "Sacre"],
  },
  {
    id: "haendel",
    name: "Georg Friedrich Haendel",
    birthYear: 1685,
    deathYear: 1759,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/George_Frideric_Handel_by_Balthasar_Denner.jpg?width=220",
    nationality: "Allemand / Britannique",
    movement: "Baroque",
    summary: `Georg Friedrich Haendel nait a Halle la meme annee que Bach. Apres des debuts en Allemagne et un sejour formateur en Italie, il s'installe a Londres ou il devient le compositeur le plus celebre de son temps.

Haendel excelle dans l'opera italien : Rinaldo, Jules Cesar, Alcina fascinent le public londonien. Quand l'opera decline, il invente l'oratorio anglais : le Messie (1741), avec son "Hallelujah", reste l'oeuvre chorale la plus jouee au monde.

Sa musique instrumentale - Water Music, Music for the Royal Fireworks, concertos grossos - temoigne d'une invention melodique intarissable et d'un sens inne du spectacle. Haendel sait plaire au public sans sacrifier la qualite.

Naturalise britannique, enterre a Westminster, Haendel incarne le musicien cosmopolite et prospere du XVIIIe siecle. Son style direct et expressif influence Haydn, Mozart et Beethoven qui le venere comme "le maitre de nous tous".`,
    mainWorks: ["Le Messie", "Water Music", "Jules Cesar", "Music for the Royal Fireworks", "Dixit Dominus"],
    keyIdeas: ["Oratorio", "Opera seria", "Melodie", "Spectacle"],
  },
  {
    id: "vivaldi",
    name: "Antonio Vivaldi",
    birthYear: 1678,
    deathYear: 1741,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Antonio_Vivaldi_portrait.jpg?width=220",
    nationality: "Italien",
    movement: "Baroque",
    summary: `Antonio Vivaldi, le "Pretre roux", nait a Venise. Ordonne pretre mais dispense de dire la messe pour raisons de sante, il consacre sa vie a la musique comme maitre de violon et compositeur a l'Ospedale della Pieta, orphelinat pour jeunes filles.

Les Quatre Saisons (1725), quatre concertos pour violon illustrant les saisons, restent parmi les oeuvres les plus celebres de la musique classique. Leur virtuosite, leurs effets descriptifs, leur energie rythmique enchantent toujours.

Vivaldi compose plus de 500 concertos, explorant toutes les combinaisons instrumentales. Il fixe la forme en trois mouvements (vif-lent-vif) et developpe le dialogue soliste-orchestre. Bach le transcrit et l'etudie passionnement.

Celebre dans toute l'Europe de son vivant, Vivaldi meurt pauvre et oublie a Vienne. Sa redecouverte au XXe siecle en fait l'un des compositeurs les plus joues. Son influence sur le concerto baroque est decisive.`,
    mainWorks: ["Les Quatre Saisons", "Gloria", "L'Estro Armonico", "La Stravaganza", "Orlando furioso"],
    keyIdeas: ["Concerto", "Virtuosite", "Descriptif", "Energie"],
  },
  {
    id: "haydn",
    name: "Joseph Haydn",
    birthYear: 1732,
    deathYear: 1809,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Joseph_Haydn.jpg?width=220",
    nationality: "Autrichien",
    movement: "Classicisme",
    summary: `Joseph Haydn nait dans un village autrichien et devient maitre de chapelle des princes Esterhazy pendant trente ans. Cette stabilite lui permet d'experimenter sans relache, inventant les formes classiques que Mozart et Beethoven porteront a leur perfection.

Haydn est le "pere de la symphonie" : ses 104 symphonies definissent le genre, des premieres oeuvres galantes aux grandes symphonies londoniennes. Il est aussi le "pere du quatuor a cordes" : ses 68 quatuors inventent la conversation a quatre voix egales.

Ses oratorios tardifs, La Creation et Les Saisons, couronnent une carriere de soixante ans. L'humour, l'invention, l'optimisme caracterisent son style. La "Symphonie des Adieux" ou les musiciens partent un a un temoigne de son esprit.

Haydn connait une gloire europeenne de son vivant. Ses voyages a Londres sont des triomphes. Il est le premier "compositeur libre", admiré, riche, respecte. Mozart le considere comme son pere spirituel.`,
    mainWorks: ["Symphonies londoniennes", "La Creation", "Quatuors opus 76", "Les Saisons", "Concerto pour trompette"],
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
    summary: `Wolfgang Amadeus Mozart nait a Salzbourg, enfant prodige exhibe dans toutes les cours d'Europe par son pere Leopold. A cinq ans, il compose ses premieres pieces. A trente-cinq ans, il meurt, laissant plus de 600 oeuvres d'une perfection inouie.

Mozart excelle dans tous les genres : symphonies, concertos, musique de chambre, sonates. Mais c'est l'opera qui revele le mieux son genie dramatique : Les Noces de Figaro, Don Giovanni, Cosi fan tutte, La Flute enchantee restent au sommet du repertoire.

Son style allie la legerete galante et la profondeur emotionnelle, la perfection formelle et la spontaneite melodique. Le Requiem, inacheve a sa mort, resume cette alliance du sombre et du lumineux qui fascine depuis deux siecles.

Mozart meurt pauvre a Vienne, enterre dans une fosse commune. Mais sa legende croit immediatement. Il incarne le genie pur, l'inspiration divine, la musique meme. Son influence sur tous les compositeurs ulterieurs est incommensurable.`,
    mainWorks: ["Don Giovanni", "Les Noces de Figaro", "La Flute enchantee", "Requiem", "Symphonie n°41 'Jupiter'"],
    keyIdeas: ["Opera", "Genie", "Perfection", "Melodie"],
  },
  {
    id: "beethoven",
    name: "Ludwig van Beethoven",
    birthYear: 1770,
    deathYear: 1827,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Beethoven.jpg?width=220",
    nationality: "Allemand",
    movement: "Classicisme / Romantisme",
    summary: `Ludwig van Beethoven nait a Bonn et s'installe a Vienne ou il s'impose comme pianiste virtuose et compositeur. Vers trente ans, la surdite le frappe. Il surmonte ce desastre pour creer une oeuvre titanesque qui ouvre l'ere romantique.

Les neuf symphonies jalonnent son evolution : de l'heritage classique (Premiere, Deuxieme) a l'heroisme (Troisieme "Eroica", Cinquieme) puis a la transcendance (Neuvieme avec son "Ode a la joie"). Chacune est un monde.

Les 32 sonates pour piano, les 16 quatuors a cordes, les 5 concertos pour piano, Fidelio (unique opera), la Missa Solemnis : chaque genre est reinvente, pousse a ses limites. Les dernieres oeuvres atteignent une spiritualite visionnaire.

Beethoven transforme le statut du compositeur : non plus serviteur, mais artiste libre, genie solitaire luttant contre le destin. Son influence sur tout le XIXe siecle est ecrasante. Il reste l'image meme du compositeur.`,
    mainWorks: ["Symphonie n°9", "Symphonie n°5", "Sonate 'Clair de lune'", "Concerto 'L'Empereur'", "Quatuors tardifs"],
    keyIdeas: ["Heroisme", "Surdite", "Liberte", "Transcendance"],
  },
  {
    id: "schubert",
    name: "Franz Schubert",
    birthYear: 1797,
    deathYear: 1828,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Franz_Schubert_by_Wilhelm_August_Rieder_1875.jpg?width=220",
    nationality: "Autrichien",
    movement: "Romantisme",
    summary: `Franz Schubert nait a Vienne dans une famille modeste. Il vit dans l'ombre de Beethoven, gagnant peniblement sa vie, compose plus de 600 lieder (melodies), des symphonies, de la musique de chambre d'une beaute poignante.

Le lied schubertien atteint une perfection inegalee : Erlkonig, La Truite, La Belle Meuniere, Le Voyage d'hiver. La voix et le piano dialoguent pour exprimer toute la gamme des emotions humaines, de la joie a la desolation.

Sa musique instrumentale - Symphonie "Inachevee", "Grande" Symphonie en do majeur, Quintette a cordes, dernieres sonates - allie la forme classique a une sensibilite romantique. Les modulations inattendues, les longueurs "celestes" (Schumann) creent un univers unique.

Schubert meurt a trente et un ans, probablement de la syphilis. Beaucoup de ses oeuvres restent inedites. Sa redécouverte progressive en fait l'egal des plus grands. Le lied romantique lui doit tout.`,
    mainWorks: ["Le Voyage d'hiver", "La Truite", "Symphonie 'Inachevee'", "Quintette a cordes", "La Belle Meuniere"],
    keyIdeas: ["Lied", "Melodie", "Intimite", "Melancolie"],
  },
  {
    id: "chopin",
    name: "Frederic Chopin",
    birthYear: 1810,
    deathYear: 1849,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Frederic_Chopin_photo.jpeg?width=220",
    nationality: "Polonais",
    movement: "Romantisme",
    summary: `Frederic Chopin nait pres de Varsovie, s'installe a Paris a vingt ans et ne revoit jamais sa Pologne natale. Pianiste virtuose au jeu delicat, il se consacre presque exclusivement a son instrument, creant un univers sonore unique.

Les nocturnes, preludes, etudes, valses, mazurkas, polonaises explorent toutes les possibilites du piano romantique. Chopin invente un rubato subtil, une harmonie raffinee, une ornementation qui chante. Chaque piece est un joyau.

Sa liaison avec George Sand, ses annees a Nohant puis a Majorque (ou il compose les Preludes), sa tuberculose qui le mine forment une legende romantique. Chopin incarne l'artiste fragile, exile, consumé par son art.

Chopin meurt a Paris a trente-neuf ans. Son influence sur la technique pianistique et l'ecriture pour piano est decisive. Liszt, Debussy, Scriabine, Rachmaninov lui doivent tous quelque chose. Il reste le poete du piano.`,
    mainWorks: ["Nocturnes", "24 Preludes", "Ballades", "Etudes", "Polonaises"],
    keyIdeas: ["Piano", "Rubato", "Exil", "Poesie"],
  },
  {
    id: "schumann",
    name: "Robert Schumann",
    birthYear: 1810,
    deathYear: 1856,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Robert_Schumann_1839.jpg?width=220",
    nationality: "Allemand",
    movement: "Romantisme",
    summary: `Robert Schumann nait a Zwickau. Destine au droit, il choisit la musique et se blesse la main en voulant devenir virtuose. Il se consacre alors a la composition et a la critique musicale, defendant Chopin, Berlioz et le jeune Brahms.

Ses cycles pour piano (Carnaval, Kreisleriana, Scenes d'enfants) et ses lieder (Dichterliebe, L'Amour et la vie d'une femme) incarnent le romantisme allemand. Personnages doubles (Florestan et Eusebius), references litteraires, intimite du sentiment caracterisent son style.

Son mariage avec Clara Wieck, pianiste virtuose, est un roman d'amour. Ses symphonies, son concerto pour piano, sa musique de chambre temoignent d'une ambition croissante mais aussi d'une sante mentale fragile.

Schumann sombre dans la folie et meurt dans un asile a quarante-six ans. Son influence sur Brahms, qu'il a revele, est decisive. Critique visionnaire, il a pressenti le genie de ses contemporains.`,
    mainWorks: ["Carnaval", "Dichterliebe", "Scenes d'enfants", "Concerto pour piano", "Symphonie n°3 'Rhenane'"],
    keyIdeas: ["Dualite", "Litterature", "Folie", "Critique"],
  },
  {
    id: "liszt",
    name: "Franz Liszt",
    birthYear: 1811,
    deathYear: 1886,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Franz_Liszt_1858.jpg?width=220",
    nationality: "Hongrois",
    movement: "Romantisme",
    summary: `Franz Liszt nait en Hongrie et devient le plus grand pianiste virtuose du XIXe siecle. Ses tournees triomphales inventent le recital solo et le culte de la star. Les femmes se paměnt, on se dispute ses gants et ses megots.

Liszt repousse les limites techniques du piano : les Etudes d'execution transcendante, la Sonate en si mineur, les Rhapsodies hongroises exigent une virtuosite inouie. Mais derriere le spectacle, une invention harmonique audacieuse annonce Wagner et Debussy.

Installe a Weimar, Liszt devient le champion de la "musique de l'avenir" : poemes symphoniques, Faust-Symphonie, soutien a Wagner. Il prend les ordres mineurs et compose une musique religieuse austere. Sa generosite envers les jeunes compositeurs est legendaire.

L'influence de Liszt est immense : il invente le poeme symphonique, anticipe l'impressionnisme et l'atonalite, forme des generations de pianistes. Ses dernieres pieces, radicalement depouillees, fascinent les compositeurs modernes.`,
    mainWorks: ["Sonate en si mineur", "Rhapsodies hongroises", "Annees de pelerinage", "Faust-Symphonie", "Etudes d'execution transcendante"],
    keyIdeas: ["Virtuosite", "Poeme symphonique", "Transformation thematique", "Abbe"],
  },
  {
    id: "wagner",
    name: "Richard Wagner",
    birthYear: 1813,
    deathYear: 1883,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/RichardWagner.jpg?width=220",
    nationality: "Allemand",
    movement: "Romantisme tardif",
    summary: `Richard Wagner nait a Leipzig et revolutionne l'opera pour en faire un "drame musical" total. Il ecrit ses propres livrets, concoit les decors, fait construire un theatre a Bayreuth dedie a ses oeuvres. Son ambition est demesurée.

La Tetralogie de l'Anneau du Nibelung (L'Or du Rhin, La Walkyrie, Siegfried, Le Crepuscule des Dieux), Tristan et Isolde, Les Maitres Chanteurs, Parsifal sont des monuments de plusieurs heures. Le leitmotiv tisse un reseau de significations dans une musique continue.

L'harmonie wagnerienne, avec l'accord de Tristan, pousse le chromatisme a ses limites et ouvre la voie a l'atonalite. L'orchestre atteint des dimensions inedites. L'influence sur toute la musique du XXe siecle, de Mahler a Hollywood, est ecrasante.

Wagner est aussi une figure controversee : nationaliste, antisemite, megalomane. Son appropriation par les nazis ternit sa memoire. Mais son genie musical reste incontestable, et Bayreuth attire toujours les pelerins.`,
    mainWorks: ["Tristan et Isolde", "L'Anneau du Nibelung", "Parsifal", "Les Maitres Chanteurs", "Lohengrin"],
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
    summary: `Johannes Brahms nait a Hambourg dans un milieu modeste. Revele par Schumann comme le successeur de Beethoven, il porte ce fardeau toute sa vie, attendant quarante ans avant de publier sa Premiere Symphonie.

Brahms refuse le theatralisme wagnerien pour cultiver les formes classiques : symphonies, concertos, musique de chambre. Mais sous l'apparence austere, une passion intense, une melancolie automnale, un raffinement harmonique uniques.

Ses quatre symphonies, ses deux concertos pour piano, son Concerto pour violon, le Requiem allemand, les lieder sont des sommets du repertoire. Les Variations sur un theme de Haydn, les Danses hongroises revelent un autre visage, plus populaire.

Brahms vit a Vienne, celibataire bourru, ami de Clara Schumann jusqu'a sa mort. Il represente la resistance classique face aux "progressistes" wagneriens. Schoenberg montrera que Brahms etait lui aussi un revolutionnaire, un "progressiste" cache.`,
    mainWorks: ["Symphonie n°4", "Requiem allemand", "Concerto pour violon", "Concerto pour piano n°2", "Danses hongroises"],
    keyIdeas: ["Classicisme", "Melancolie", "Variation", "Forme"],
  },
  {
    id: "tchaikovsky",
    name: "Piotr Ilitch Tchaikovsky",
    birthYear: 1840,
    deathYear: 1893,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Portr%C3%A4t_des_Komponisten_Pjotr_I._Tschaikowski_%281840-1893%29.jpg?width=220",
    nationality: "Russe",
    movement: "Romantisme russe",
    summary: `Piotr Ilitch Tchaikovsky nait a Votkinsk et devient le premier compositeur russe a acquerir une renommee mondiale. Forme au Conservatoire de Saint-Petersbourg, il synthetise l'heritage occidental et la sensibilite slave.

Ses ballets - Le Lac des cygnes, La Belle au bois dormant, Casse-Noisette - sont les plus celebres du repertoire. Ses symphonies (surtout les trois dernieres), ses concertos pour piano et violon, ses operas (Eugene Oneguine, La Dame de Pique) sont des classiques.

La musique de Tchaikovsky exprime une emotivite debordante, une melancolie russe, un sens inne de la melodie et de l'orchestration. Critique comme superficiel par certains, il est adore du public depuis plus d'un siecle.

Tchaikovsky meurt mysterieusement a Saint-Petersbourg, peut-etre du cholera, peut-etre suicide. Son homosexualite, sujet de tourment, est longtemps occultee. Sa Sixieme Symphonie "Pathetique" semble un adieu bouleversant.`,
    mainWorks: ["Le Lac des cygnes", "Symphonie n°6 'Pathetique'", "Concerto pour piano n°1", "Casse-Noisette", "Eugene Oneguine"],
    keyIdeas: ["Ballet", "Melodie", "Emotivite", "Russie"],
  },
  {
    id: "dvorak",
    name: "Antonin Dvorak",
    birthYear: 1841,
    deathYear: 1904,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Antonin_Dvorak.jpg?width=220",
    nationality: "Tcheque",
    movement: "Romantisme / Nationalisme",
    summary: `Antonin Dvorak nait en Boheme et devient le champion de la musique tcheque. Encourage par Brahms, il acquiert une renommée europeenne puis americaine. Directeur du Conservatoire de New York, il s'inspire des musiques noire et amerindienne.

La Symphonie "Du Nouveau Monde" (1893), composee en Amerique, est l'une des plus jouees au monde. Le Concerto pour violoncelle est le sommet du genre. Les Danses slaves, les operas (Rusalka) ancrent son art dans le folklore tcheque.

Dvorak allie spontaneite melodique, maitrise formelle heritee de Brahms et couleur orchestrale chatoyante. Sa musique respire la joie de vivre, la nature, les danses paysannes, sans exclure une profondeur spirituelle.

De retour en Boheme, Dvorak compose ses derniers operas et poemes symphoniques. Il meurt celebre a Prague. Son influence sur la musique tcheque (Janacek, Martinu) et americaine est considerable.`,
    mainWorks: ["Symphonie 'Du Nouveau Monde'", "Concerto pour violoncelle", "Danses slaves", "Rusalka", "Quatuor 'Americain'"],
    keyIdeas: ["Nationalisme", "Folklore", "Nouveau Monde", "Melodie"],
  },
  {
    id: "mahler",
    name: "Gustav Mahler",
    birthYear: 1860,
    deathYear: 1911,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Photo_of_Gustav_Mahler_by_Moritz_N%C3%A4hr_01.jpg?width=220",
    nationality: "Autrichien",
    movement: "Post-romantisme",
    summary: `Gustav Mahler nait en Boheme dans une famille juive. Il devient le plus grand chef d'orchestre de son temps, dirigeant l'Opera de Vienne puis le Metropolitan de New York. Il compose l'ete, entre deux saisons.

Ses neuf symphonies (plus une inachevee) portent l'orchestre romantique a ses limites : effectifs gigantesques, durees d'une heure ou plus, ambitions cosmiques. "La symphonie doit etre comme le monde, elle doit tout embrasser."

L'univers mahlerien mele marches funebres et landler populaires, ironie et transcendance, nature et desespoir. Le Chant de la terre, Das Lied von der Erde, resume cette tension entre vie et mort. Les Kindertotenlieder sont d'une beaute dechirante.

Meconnu comme compositeur de son vivant, Mahler predit : "Mon temps viendra." La redecouverte des annees 1960 (Bernstein) en fait l'un des compositeurs les plus joues. Son influence sur le XXe siecle, de Schoenberg a Berio, est immense.`,
    mainWorks: ["Symphonie n°2 'Resurrection'", "Le Chant de la terre", "Symphonie n°9", "Kindertotenlieder", "Symphonie n°5"],
    keyIdeas: ["Symphonie-monde", "Ironie", "Transcendance", "Adieu"],
  },
  {
    id: "debussy",
    name: "Claude Debussy",
    birthYear: 1862,
    deathYear: 1918,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Claude_Debussy_ca_1908%2C_foto_av_F%C3%A9lix_Nadar.jpg?width=220",
    nationality: "Francais",
    movement: "Impressionnisme",
    summary: `Claude Debussy nait a Saint-Germain-en-Laye. Prix de Rome, il rompt vite avec l'academisme pour creer un langage nouveau : l'impressionnisme musical. La decouverte du gamelan javanais a l'Exposition de 1889 le marque profondement.

Prelude a l'apres-midi d'un faune (1894) inaugure la musique moderne. Pelleas et Melisande, unique opera, refuse tous les effets wagneriens pour une prosodie fluide et des harmonies flottantes. La Mer, les Images, les Preludes pour piano sont des chefs-d'oeuvre.

Debussy libere l'harmonie de ses fonctions tonales : gammes par tons, accords paralleles, modes anciens creent des couleurs inedites. L'orchestre devient un nuancier subtil. La forme se dissout au profit de l'instant.

Debussy meurt a Paris pendant les bombardements allemands. Son influence sur toute la musique du XXe siecle, de Ravel a Messiaen et Boulez, est fondamentale. Il ouvre une voie alternative a l'expressionnisme germanique.`,
    mainWorks: ["Prelude a l'apres-midi d'un faune", "Pelleas et Melisande", "La Mer", "Preludes pour piano", "Clair de lune"],
    keyIdeas: ["Impressionnisme", "Couleur", "Liberte harmonique", "Symbolisme"],
  },
  {
    id: "ravel",
    name: "Maurice Ravel",
    birthYear: 1875,
    deathYear: 1937,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Maurice_Ravel_1925.jpg?width=220",
    nationality: "Francais",
    movement: "Impressionnisme / Neoclassicisme",
    summary: `Maurice Ravel nait a Ciboure, au Pays basque. Considere comme l'heritier de Debussy, il s'en distingue par une rigueur formelle, un sens de l'artisanat, une ironie qui tempere l'emotion.

Le Bolero (1928), crescendo hypnotique sur un theme unique, est l'oeuvre francaise la plus jouee au monde. Ma mere l'Oye, le Concerto en sol, l'orchestration des Tableaux d'une exposition de Moussorgski temoignent d'une maitrise orchestrale inegalee.

Les deux concertos pour piano, Daphnis et Chloe (ballet), le Quatuor a cordes, les melodies (Sheherazade) explorent des univers varies : espagnol, jazz, antique, exotique. "L'horloger suisse" (Stravinsky) cache une sensibilite poignante.

Frappe d'une maladie degenerative, Ravel passe ses dernieres annees dans le silence. Son influence sur la musique francaise et americaine (Gershwin) est considerable. L'elegance et la precision de son ecriture restent des modeles.`,
    mainWorks: ["Bolero", "Concerto en sol", "Daphnis et Chloe", "Ma mere l'Oye", "Quatuor a cordes"],
    keyIdeas: ["Artisanat", "Orchestration", "Elegance", "Ironie"],
  },
  {
    id: "stravinsky",
    name: "Igor Stravinsky",
    birthYear: 1882,
    deathYear: 1971,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Igor_Stravinsky_LOC_32392u.jpg?width=220",
    nationality: "Russe / Americain",
    movement: "Modernisme",
    summary: `Igor Stravinsky nait pres de Saint-Petersbourg. Eleve de Rimski-Korsakov, il explose avec les Ballets russes de Diaghilev : L'Oiseau de feu (1910), Petrouchka (1911), Le Sacre du printemps (1913) revolutionnent la musique.

Le Sacre, avec ses rythmes sauvages et ses dissonances brutales, provoque un scandale legendaire a sa creation. C'est l'acte de naissance de la musique moderne. Stravinsky ne cessera de se reinventer, refusant tout systeme.

Periode neoclassique (Pulcinella, Symphonie de psaumes), retour au sacre (Messe, Requiem Canticles), adoption tardive du serialisme : chaque decennie apporte un nouveau Stravinsky. "Je suis l'invention de moi-meme", dit-il.

Exile en France puis aux Etats-Unis, Stravinsky traverse le siecle comme sa figure dominante. Son influence sur Messiaen, Boulez, les minimalistes est decisive. Il meurt a New York et est enterre a Venise.`,
    mainWorks: ["Le Sacre du printemps", "L'Oiseau de feu", "Petrouchka", "Symphonie de psaumes", "Noces"],
    keyIdeas: ["Rythme", "Reinvention", "Neoclassicisme", "Ballets russes"],
  },
  {
    id: "schoenberg",
    name: "Arnold Schoenberg",
    birthYear: 1874,
    deathYear: 1951,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Arnold_Schoenberg_la_1948.jpg?width=220",
    nationality: "Autrichien / Americain",
    movement: "Expressionnisme / Dodecaphonisme",
    summary: `Arnold Schoenberg nait a Vienne. Autodidacte, il pousse le chromatisme wagnerien jusqu'a la rupture avec la tonalite. La Nuit transfiguree (1899), Pelleas et Melisande montrent un post-romantisme exacerbe.

Avec les Trois pieces pour piano op. 11 (1909) et Pierrot lunaire (1912), Schoenberg entre dans l'atonalite libre, ou aucune note ne prevaut. L'expressionnisme viennois atteint une intensite psychologique inouie. C'est une revolution.

Pour organiser ce nouveau langage, Schoenberg invente le dodecaphonisme : les douze notes de la gamme chromatique sont ordonnees en une serie qui structure toute l'oeuvre. Ses eleves Berg et Webern forment la "Seconde Ecole de Vienne".

Exile aux Etats-Unis par le nazisme, Schoenberg enseigne a UCLA et revient parfois a la tonalite. Son influence sur la musique d'apres-guerre (serialisme integral) est decisive, meme si le grand public reste rebute par son abstraction.`,
    mainWorks: ["Pierrot lunaire", "La Nuit transfiguree", "Moses und Aron", "Variations pour orchestre", "Un survivant de Varsovie"],
    keyIdeas: ["Atonalite", "Dodecaphonisme", "Expressionnisme", "Seconde Ecole de Vienne"],
  },
  {
    id: "bartok",
    name: "Bela Bartok",
    birthYear: 1881,
    deathYear: 1945,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bart%C3%B3k_B%C3%A9la_1927.jpg?width=220",
    nationality: "Hongrois",
    movement: "Modernisme / Nationalisme",
    summary: `Bela Bartok nait en Hongrie et consacre sa vie a la collecte et l'etude des musiques paysannes d'Europe centrale. Ce travail ethnomusicologique nourrit une oeuvre qui synthetise folklore authentique et langage moderniste.

Le Chateau de Barbe-Bleue (opera), Le Mandarin merveilleux (ballet), les six Quatuors a cordes, la Musique pour cordes, percussion et celesta, le Concerto pour orchestre sont des sommets du XXe siecle. La violence rythmique, les clusters, les modes populaires caracterisent son style.

Bartok refuse le dodecaphonisme pour une modernite enracinee. Les Mikrokosmos, 153 pieces didactiques pour piano, resument son evolution. Le folklore n'est pas un ornement mais la source meme de son langage.

Exile aux Etats-Unis en 1940, Bartok y meurt pauvre et meconnu. Sa rehabilitation est rapide. Il incarne une alternative au serialisme, une modernite qui n'oublie pas les racines populaires et nationales.`,
    mainWorks: ["Concerto pour orchestre", "Quatuors a cordes", "Musique pour cordes, percussion et celesta", "Le Mandarin merveilleux", "Mikrokosmos"],
    keyIdeas: ["Folklore", "Rythme", "Ethnomusicologie", "Clusters"],
  },
  {
    id: "shostakovich",
    name: "Dmitri Chostakovitch",
    birthYear: 1906,
    deathYear: 1975,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dmitri_Shostakovich_credit_Deutsche_Fotothek_adjusted.jpg?width=220",
    nationality: "Russe / Sovietique",
    movement: "Modernisme sovietique",
    summary: `Dmitri Chostakovitch nait a Saint-Petersbourg et traverse l'ere sovietique, de la revolution a la stagnation brejnevienne. Son oeuvre immense porte la marque de cette histoire tragique, entre soumission apparente et resistance interieure.

Denonce par la Pravda en 1936 ("Chaos au lieu de musique"), Chostakovitch frole la deportation. Il adopte un langage plus accessible mais truffé de references ambigues. Ses symphonies (quinze), quatuors a cordes (quinze) forment un journal intime code.

La Cinquieme Symphonie (1937), "reponse d'un artiste sovietique a une juste critique", est-elle sincere ou ironique ? Le finale triomphal sonne-t-il vrai ou faux ? Ce double langage fascine et divise les interpretes.

Chostakovitch meurt a Moscou, couvert d'honneurs officiels mais amer. Ses Memoires posthumes (Testimony) revelent un opposant interieur. Son influence sur la musique russe contemporaine et sur la perception de l'art sous dictature reste immense.`,
    mainWorks: ["Symphonie n°5", "Symphonie n°7 'Leningrad'", "Quatuor n°8", "Lady Macbeth de Mtsensk", "Concerto pour violoncelle n°1"],
    keyIdeas: ["Double langage", "Ironie tragique", "URSS", "Resistance"],
  },
  {
    id: "messiaen",
    name: "Olivier Messiaen",
    birthYear: 1908,
    deathYear: 1992,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Olivier_Messiaen_1986.jpg?width=220",
    nationality: "Francais",
    movement: "Modernisme / Musique spectrale",
    summary: `Olivier Messiaen nait a Avignon. Organiste de la Trinite a Paris pendant soixante ans, compositeur et pedagogue, il forme des generations de musiciens : Boulez, Stockhausen, Xenakis passent par sa classe.

Son langage est unique : modes a transpositions limitees, rythmes hindous, chants d'oiseaux (il en transcrit des centaines), couleurs-sons (synesthesie). Sa foi catholique inspire des oeuvres monumentales : Vingt Regards sur l'Enfant-Jesus, Quatuor pour la fin du Temps.

Le Quatuor, compose en captivite allemande et cree dans un camp de prisonniers (1941), est un acte de foi et de resistance. Des orgues d'Apparition de l'Eglise eternelle au gigantesque opera Saint Francois d'Assise (1983), l'ambition ne cesse de croitre.

Messiaen reste inclassable : ni serialiste, ni neoclassique, ni minimaliste. Son influence sur la musique spectrale (Murail, Grisey), sur l'ecologie sonore, sur la transcendance en musique est profonde. Il incarne une modernite spirituelle.`,
    mainWorks: ["Quatuor pour la fin du Temps", "Turangalila-Symphonie", "Catalogue d'oiseaux", "Saint Francois d'Assise", "Vingt Regards sur l'Enfant-Jesus"],
    keyIdeas: ["Foi", "Oiseaux", "Modes", "Couleur sonore"],
  },
  {
    id: "glass",
    name: "Philip Glass",
    birthYear: 1937,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Philip_Glass_in_Florence%2C_Italy_-_1993.jpg?width=220",
    nationality: "Americain",
    movement: "Minimalisme",
    summary: `Philip Glass nait a Baltimore. Forme a Juilliard et avec Nadia Boulanger a Paris, il decouvre la musique indienne avec Ravi Shankar. Cette rencontre transforme son langage vers la repetition et les structures additives.

Music in Twelve Parts (1974), Einstein on the Beach (1976, avec Robert Wilson) imposent le minimalisme americain. Les operas Satyagraha et Akhnaten forment avec Einstein une trilogie sur les hommes qui ont change le monde par les idees.

Glass compose une oeuvre immense : quatuors, symphonies, concertos, musiques de film (Koyaanisqatsi, The Hours). Sa musique, accessible et hypnotique, connait un succes populaire que le milieu academique lui reproche parfois.

A plus de quatre-vingts ans, Glass continue de composer et de se produire. Son influence sur la musique de film, la musique electronique, la pop est considerable. Le minimalisme qu'il a fonde avec Reich et Riley a transforme le paysage musical.`,
    mainWorks: ["Einstein on the Beach", "Glassworks", "Koyaanisqatsi", "Akhnaten", "Symphonie n°3"],
    keyIdeas: ["Minimalisme", "Repetition", "Opera", "Musique de film"],
  },
];
