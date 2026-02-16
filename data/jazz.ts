export interface JazzItem {
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

export const jazz: JazzItem[] = [
  {
    id: "buddy-bolden",
    name: "Buddy Bolden",
    birthYear: 1877,
    deathYear: 1931,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Buddy_Bolden_and_his_band.jpg/220px-Buddy_Bolden_and_his_band.jpg",
    nationality: "Americain",
    movement: "Origines",
    summary: `Buddy Bolden est considere comme le premier musicien de jazz, bien qu'aucun enregistrement de lui n'ait survecu. Dans la Nouvelle-Orleans du tournant du siecle, son cornet puissant, audible a des kilometres selon la legende, fait danser les foules de Storyville et de Lincoln Park.

Son style fusionne les marches militaires, le blues du Delta, les spirituals et le ragtime en quelque chose de nouveau : une musique improvisee, syncopee, vibrante. Il est le premier a « swinguer », a jouer entre les notes, a transformer la musique en conversation collective.

En 1907, a seulement 30 ans, Bolden est interne pour demence a l'hopital de Jackson, en Louisiane, ou il restera jusqu'a sa mort en 1931. Il ne saura jamais que la musique qu'il a inventee conquerra le monde entier.

Sa legende, transmise oralement par les musiciens qui l'ont entendu — King Oliver, Freddie Keppard, Louis Armstrong enfant — fait de lui le fantome fondateur du jazz, une figure mythique dont l'absence d'enregistrements nourrit le mystere.`,
    mainWorks: [
      "Premier 'roi' du jazz a la Nouvelle-Orleans",
      "Style de cornet improvisateur",
      "Influence sur une generation de musiciens",
      "Interne en 1907, jamais enregistre",
    ],
    keyIdeas: ["Origines du jazz", "Improvisation", "Nouvelle-Orleans", "Legende orale"],
  },
  {
    id: "jelly-roll-morton",
    name: "Jelly Roll Morton",
    birthYear: 1890,
    deathYear: 1941,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Jelly_Roll_Morton_%281926%29.jpg/220px-Jelly_Roll_Morton_%281926%29.jpg",
    nationality: "Americain",
    movement: "Jazz Nouvelle-Orleans",
    summary: `Jelly Roll Morton, ne Ferdinand LaMothe a la Nouvelle-Orleans, se proclamait sans modestie « inventeur du jazz ». Si cette pretention est exageree, il est indiscutablement le premier grand compositeur et arrangeur de l'histoire du jazz, celui qui a donne une forme ecrite a une musique d'abord orale.

Avec ses Red Hot Peppers, il realise entre 1926 et 1930 des enregistrements qui sont des chefs-d'oeuvre d'equilibre entre composition et improvisation. Chaque instrument a un role precis, les breaks sont savamment places, les dynamiques controlees — mais le swing et la spontaneite restent intacts.

Pianiste virtuose forme au ragtime, au blues et a l'opera, Morton synthetise les traditions creoles, afro-americaines et europeennes de la Nouvelle-Orleans. Ses compositions comme Black Bottom Stomp ou King Porter Stomp deviennent des standards.

En 1938, ruine et oublie, il enregistre pour la Library of Congress des heures d'entretiens avec Alan Lomax, racontant l'histoire du jazz depuis ses origines. Ces enregistrements constituent un temoignage inestimable sur la naissance d'une musique.`,
    mainWorks: [
      "Black Bottom Stomp",
      "King Porter Stomp",
      "Red Hot Peppers sessions",
      "Entretiens avec Alan Lomax",
    ],
    keyIdeas: ["Premier arrangeur", "Composition et improvisation", "Ragtime", "Tradition creole"],
  },
  {
    id: "louis-armstrong",
    name: "Louis Armstrong",
    birthYear: 1901,
    deathYear: 1971,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Louis_Armstrong_restored.jpg/220px-Louis_Armstrong_restored.jpg",
    nationality: "Americain",
    movement: "Jazz classique",
    summary: `Louis Armstrong est sans doute le musicien le plus important du XXe siecle. Ne dans la misere a la Nouvelle-Orleans, forme au cornet dans un orphelinat, il revolutionne la musique en inventant le solo improvise moderne — l'idee qu'un individu peut s'exprimer seul, avec sa voix propre, au-dessus d'un orchestre.

Ses enregistrements avec les Hot Five et Hot Seven (1925-1928) transforment le jazz d'une musique collective en un art du soliste. West End Blues, avec son introduction a la trompette, reste l'un des moments les plus stupefiant de l'histoire de la musique enregistree. Son phrasé, son sens du swing et sa creativite melodique influencent tous les musiciens qui suivent.

Sa voix rauque et chaleureuse, son sourire genereux et son charisme en font une star mondiale, l'un des premiers artistes noirs a transcender les barrieres raciales aux Etats-Unis. De Hello, Dolly! a What a Wonderful World, il touche un public bien au-dela du jazz.

Armstrong est aussi un pont entre les epoques : il accompagne la naissance du jazz a la Nouvelle-Orleans, traverse l'ere du swing, et reste pertinent jusqu'a sa mort en 1971, ambassadeur infatigable d'une musique qu'il a plus que quiconque contribue a creer.`,
    mainWorks: [
      "West End Blues",
      "What a Wonderful World",
      "Hot Five et Hot Seven sessions",
      "Hello, Dolly!",
    ],
    keyIdeas: ["Solo improvise", "Swing", "Star mondiale", "Ambassadeur du jazz"],
  },
  {
    id: "duke-ellington",
    name: "Duke Ellington",
    birthYear: 1899,
    deathYear: 1974,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Duke_Ellington_-_publicity.JPG/220px-Duke_Ellington_-_publicity.JPG",
    nationality: "Americain",
    movement: "Big Band / Swing",
    summary: `Edward Kennedy « Duke » Ellington est le plus grand compositeur de l'histoire du jazz et l'un des plus importants de la musique americaine. Pendant cinquante ans, de 1924 a 1974, son orchestre est un laboratoire sonore permanent, un instrument a lui seul dont Ellington joue avec une maitrise incomparable.

Sa residence au Cotton Club de Harlem (1927-1931) lui permet de developper un style orchestral unique, le « jungle sound », melant growls des cuivres, clarinettes sinueuses et harmonies sophistiquees. Chaque musicien de l'orchestre — Johnny Hodges, Harry Carney, Cootie Williams — est un soliste irremplacable dont Ellington exploite la personnalite sonore.

Avec plus de mille compositions, Ellington transcende les frontieres entre jazz, musique classique et musique populaire. Mood Indigo, Sophisticated Lady, In a Sentimental Mood sont des standards intemporels. Ses suites ambitieuses — Black, Brown and Beige, Such Sweet Thunder — elevent le jazz au rang de musique de concert.

Billy Strayhorn, son collaborateur intime pendant 28 ans, co-signe nombre de chefs-d'oeuvre dont Take the "A" Train, devenu l'indicatif de l'orchestre. Leur partenariat est l'un des plus feconds de l'histoire de la musique.`,
    mainWorks: [
      "Take the 'A' Train",
      "Mood Indigo",
      "Black, Brown and Beige",
      "In a Sentimental Mood",
    ],
    keyIdeas: ["Orchestre comme instrument", "Jungle sound", "Compositeur prolifique", "Billy Strayhorn"],
  },
  {
    id: "count-basie",
    name: "Count Basie",
    birthYear: 1904,
    deathYear: 1984,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Count_Basie_%281955_Kriegsmann_portrait%29.jpg/220px-Count_Basie_%281955_Kriegsmann_portrait%29.jpg",
    nationality: "Americain",
    movement: "Big Band / Swing",
    summary: `Count Basie forge a Kansas City un style d'orchestre radicalement different de celui d'Ellington : la ou ce dernier compose et orchestre minutieusement, Basie mise sur le swing, le blues et l'economie de moyens. Son piano minimaliste — quelques notes placees avec une precision diabolique — est devenu legendaire.

L'orchestre de Basie, forme a Kansas City dans les annees 1930, incarne le swing a l'etat pur. La section rythmique — Basie au piano, Freddie Green a la guitare, Walter Page a la contrebasse, Jo Jones a la batterie — est consideree comme la plus swinguante de l'histoire du jazz. Les riffs des cuivres, simples et implacables, propulsent les solistes.

Lester Young, saxophoniste genial au son aerien, est le soliste emblematique de l'orchestre. Son style relache et melodique annonce le cool jazz et influence des generations de musiciens, de Stan Getz a Chet Baker.

L'orchestre de Basie traverse les decennies, s'adaptant a chaque epoque sans perdre son identite. L'album Atomic Basie (1957), avec les arrangements de Neal Hefti, prouve que le big band peut rester moderne et percutant.`,
    mainWorks: [
      "One O'Clock Jump",
      "April in Paris",
      "Jumpin' at the Woodside",
      "Atomic Basie",
    ],
    keyIdeas: ["Swing pur", "Minimalisme pianistique", "Kansas City", "Section rythmique legendaire"],
  },
  {
    id: "billie-holiday",
    name: "Billie Holiday",
    birthYear: 1915,
    deathYear: 1959,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Billie_Holiday_1947.jpg/220px-Billie_Holiday_1947.jpg",
    nationality: "Americaine",
    movement: "Jazz vocal",
    summary: `Billie Holiday, surnommee Lady Day, possede l'une des voix les plus reconnaissables et les plus emouvantes de l'histoire de la musique. Sans formation technique, elle invente un phrasé qui transforme chaque chanson en confession intime, jouant avec le tempo comme un instrumentiste, en retard ou en avance sur le beat.

Strange Fruit (1939), qui decrit le lynchage des Noirs dans le Sud americain, est sans doute la premiere chanson de protestation de la musique populaire. L'image des « fruits etranges » pendant aux arbres provoque un choc qui depasse le cadre du jazz. Le morceau est interdit de radio mais devient un symbole de la lutte pour les droits civiques.

Sa vie tragique — enfance abandonnee, prostitution, drogues, alcool, relations destructrices — nourrit son art d'une intensite douloureuse. Chaque note semble arrachee a l'experience vecue. Ses derniers enregistrements, la voix abimee mais l'emotion intacte, sont d'une beaute devastatrice.

Holiday meurt a 44 ans, sous surveillance policiere a l'hopital, arretee pour possession d'heroïne sur son lit de mort. Son autobiographie, Lady Sings the Blues, et ses enregistrements restent parmi les tresors du jazz.`,
    mainWorks: [
      "Strange Fruit",
      "God Bless the Child",
      "Lady Sings the Blues",
      "Fine and Mellow",
    ],
    keyIdeas: ["Phrasé unique", "Chanson de protestation", "Emotion brute", "Vie tragique"],
  },
  {
    id: "ella-fitzgerald",
    name: "Ella Fitzgerald",
    birthYear: 1917,
    deathYear: 1996,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Ella_Fitzgerald_1962.jpg/220px-Ella_Fitzgerald_1962.jpg",
    nationality: "Americaine",
    movement: "Jazz vocal",
    summary: `Ella Fitzgerald, la « First Lady of Song », possede une voix d'une purete, d'une justesse et d'une etendue exceptionnelles. Sa technique vocale est si parfaite que les musiciens la considerent comme un instrument a part entiere, capable de rivaliser avec n'importe quel saxophoniste en improvisation scat.

Son scat — l'art d'improviser vocalement avec des syllabes sans signification — atteint des sommets de virtuosite et d'invention. Son Mack the Knife enregistre en concert a Berlin en 1960, ou elle oublie les paroles et improvise avec un aplomb eblouissant, est un monument du jazz en live.

Ses Songbooks, enregistres pour le label Verve de Norman Granz entre 1956 et 1964, celebrent les grands compositeurs americains : Cole Porter, Rodgers & Hart, Duke Ellington, Gershwin. Ces albums definissent l'interpretation de reference pour des dizaines de standards et preservent le patrimoine de la chanson americaine.

Contrairement a Billie Holiday, Fitzgerald incarne la joie de chanter, la lumiere et l'optimisme. Sa carriere de soixante ans, des concours d'amateurs de Harlem en 1934 aux plus grandes salles du monde, est l'une des plus remarquables de l'histoire de la musique.`,
    mainWorks: [
      "A-Tisket, A-Tasket",
      "Summertime",
      "Great American Songbooks",
      "Mack the Knife (live Berlin)",
    ],
    keyIdeas: ["Technique vocale parfaite", "Scat", "Songbooks", "Joie de chanter"],
  },
  {
    id: "charlie-parker",
    name: "Charlie Parker",
    birthYear: 1920,
    deathYear: 1955,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Charlie_Parker%2C_Tommy_Potter%2C_Miles_Davis%2C_Max_Roach_%28Gottlieb_06941%29.jpg/220px-Charlie_Parker%2C_Tommy_Potter%2C_Miles_Davis%2C_Max_Roach_%28Gottlieb_06941%29.jpg",
    nationality: "Americain",
    movement: "Bebop",
    summary: `Charlie « Bird » Parker est le revolutionnaire du jazz. Au debut des annees 1940, dans les clubs de la 52e rue a New York — le Minton's Playhouse, le Three Deuces —, il invente avec Dizzy Gillespie un nouveau langage musical : le bebop. Tempos fulgurants, harmonies complexes, phrasés asymetriques : le jazz cesse d'etre une musique de danse pour devenir un art.

Son saxophone alto produit un torrent de notes d'une logique melodique implacable. Ses improvisations sur des grilles d'accords enrichies de substitutions chromatiques creent un vocabulaire que tous les jazzmen qui suivent devront assimiler. Ko-Ko, Ornithology, Confirmation sont des etudes de virtuosite et d'invention.

Parker est aussi un genie autodestructeur. Heroinomane des l'adolescence, alcoolique, instable, il traverse la vie comme un meteore. Ses absences, ses crises, ses internements ponctuent une carriere fulgurante. Le graffiti « Bird Lives », apparu sur les murs de New York apres sa mort, temoigne de son statut mythique.

Il meurt a 34 ans, le corps use au point que le medecin legiste lui donne entre 50 et 60 ans. Avec lui disparait le genie le plus foudroyant et le plus tragique du jazz.`,
    mainWorks: [
      "Ko-Ko",
      "Ornithology",
      "Confirmation",
      "Now's the Time",
    ],
    keyIdeas: ["Bebop", "Virtuosite harmonique", "Genie autodestructeur", "Revolution musicale"],
  },
  {
    id: "dizzy-gillespie",
    name: "Dizzy Gillespie",
    birthYear: 1917,
    deathYear: 1993,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Dizzy_Gillespie_playing_horn_1955.jpg/220px-Dizzy_Gillespie_playing_horn_1955.jpg",
    nationality: "Americain",
    movement: "Bebop",
    summary: `Dizzy Gillespie, avec sa trompette coudee a 45 degres et ses joues gonflees comme des ballons, est l'image meme du jazz. Co-inventeur du bebop avec Charlie Parker, il apporte a la revolution bop ce que Parker ne pouvait pas : la discipline, l'organisation et le sens du spectacle.

La ou Parker improvise dans l'instant, Gillespie compose, arrange et structure. A Night in Tunisia, Salt Peanuts, Groovin' High sont des compositions pensees, avec des introductions elaborees et des harmonies savantes. Il forme des big bands bop, prouvant que le nouveau langage peut fonctionner a grande echelle.

Sa contribution la plus originale est la fusion du jazz avec les rythmes afro-cubains. En engageant le percussionniste cubain Chano Pozo en 1947, il cree le jazz latin. Manteca, avec ses polyrythmies afro-cubaines, ouvre un champ d'exploration qui continue aujourd'hui.

Personnalite genereuse et pedagogue, Gillespie forme des generations de musiciens. Contrairement a Parker, il traverse les decennies avec constance, devenant un ambassadeur du jazz dans le monde entier, y compris lors de tournees organisees par le Departement d'Etat americain pendant la Guerre froide.`,
    mainWorks: [
      "A Night in Tunisia",
      "Salt Peanuts",
      "Manteca",
      "Groovin' High",
    ],
    keyIdeas: ["Co-inventeur du bebop", "Jazz afro-cubain", "Big band bop", "Ambassadeur"],
  },
  {
    id: "thelonious-monk",
    name: "Thelonious Monk",
    birthYear: 1917,
    deathYear: 1982,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Thelonious_Monk%2C_Minton%27s_Playhouse%2C_New_York%2C_N.Y.%2C_ca._Sept._1947_%28William_P._Gottlieb_06191%29.jpg/220px-Thelonious_Monk%2C_Minton%27s_Playhouse%2C_New_York%2C_N.Y.%2C_ca._Sept._1947_%28William_P._Gottlieb_06191%29.jpg",
    nationality: "Americain",
    movement: "Bebop",
    summary: `Thelonious Monk est l'un des musiciens les plus singuliers de l'histoire du jazz. Son style pianistique — anguleux, percussif, plein de silences inattendus et de dissonances deliberees — deroute ses contemporains. Pendant des annees, il est considere comme un amateur maladroit. Il faudra du temps pour comprendre que chaque note « fausse » est parfaitement intentionnelle.

Present aux jam sessions fondatrices du Minton's Playhouse dans les annees 1940, il est l'un des architectes du bebop, mais son style n'appartient a aucune ecole. Ses compositions — 'Round Midnight, Straight No Chaser, Blue Monk, Ruby My Dear — sont des miniatures parfaites, immediatement reconnaissables par leurs melodies tordues et leurs harmonies etranges.

Monk est aussi un personnage excentrique : ses chapeaux extravagants, ses danses solitaires sur scene, ses longs silences. Prive de sa carte de cabaret pendant six ans pour possession de drogue, il est interdit de se produire dans les clubs de New York de 1951 a 1957.

Sa rehabilitation, a partir de la fin des annees 1950, en fait une icone. La couverture du Time en 1964 consacre sa reconnaissance. Ses compositions sont parmi les plus jouees du repertoire jazz, des enigmes musicales qui revelent de nouvelles subtilites a chaque ecoute.`,
    mainWorks: [
      "'Round Midnight",
      "Straight, No Chaser",
      "Blue Monk",
      "Brilliant Corners",
    ],
    keyIdeas: ["Style anguleux", "Compositions miniatures", "Excentricite", "Dissonance deliberee"],
  },
  {
    id: "miles-davis",
    name: "Miles Davis",
    birthYear: 1926,
    deathYear: 1991,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Miles_Davis_by_Palumbo_cropped.jpg/220px-Miles_Davis_by_Palumbo_cropped.jpg",
    nationality: "Americain",
    movement: "Cool / Modal / Fusion",
    summary: `Miles Davis est le musicien qui a reinvente le jazz le plus grand nombre de fois. A chaque decennie, il abandonne ce qu'il maitrise pour explorer un territoire inconnu, entrainant avec lui les meilleurs musiciens de sa generation.

Dans les annees 1940, il joue avec Charlie Parker. En 1949, Birth of the Cool invente le cool jazz — des arrangements feutres et sophistiques, a l'oppose du bebop brulant. Son premier grand quintette avec John Coltrane (1955-1957) definit le hard bop. En 1959, Kind of Blue, enregistre en deux sessions avec une preparation minimale, devient l'album de jazz le plus vendu de l'histoire et invente le jazz modal.

En 1969, Bitches Brew fusionne le jazz avec le rock et le funk electrique, scandant les puristes mais ouvrant une voie immense. Les annees 1970 le voient plonger dans un funk spatial et abrasif avant un silence de cinq ans.

Personnalite complexe — elegant et brutal, genial et cruel, dandy et rebelle —, Davis refuse tous les compromis. Sa trompette a la sourdine Harmon, intime et fragile, est l'un des sons les plus reconnaissables de la musique du XXe siecle. Il meurt en 1991, laissant une discographie qui est l'histoire meme du jazz moderne.`,
    mainWorks: [
      "Kind of Blue",
      "Bitches Brew",
      "Birth of the Cool",
      "Sketches of Spain",
    ],
    keyIdeas: ["Reinvention permanente", "Jazz modal", "Fusion", "Leader visionnaire"],
  },
  {
    id: "john-coltrane",
    name: "John Coltrane",
    birthYear: 1926,
    deathYear: 1967,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/John_Coltrane_in_1963.jpg/220px-John_Coltrane_in_1963.jpg",
    nationality: "Americain",
    movement: "Hard Bop / Free Jazz",
    summary: `John Coltrane incarne la quete spirituelle dans le jazz. En onze ans de carriere en leader (1957-1967), il parcourt un chemin musical immense, du hard bop le plus sophistique au free jazz le plus radical, chaque album etant une etape d'une recherche interieure insatiable.

Ses « sheets of sound » — des cascades de notes d'une densite hallucinante — redefinissent les possibilites du saxophone tenor. Giant Steps (1960) pousse les substitutions harmoniques a leur limite mathematique, avec des enchainements d'accords si rapides qu'ils defient la plupart des musiciens. My Favorite Things transforme une melodie de comedie musicale en transe modale hypnotique au saxophone soprano.

A Love Supreme (1965), suite en quatre mouvements dediee a Dieu, est son chef-d'oeuvre absolu. Cri de gratitude mystique, l'album fusionne discipline formelle et abandon spirituel. Il devient l'un des disques les plus influents de l'histoire de la musique.

Ses derniers enregistrements, de plus en plus libres et violents — Ascension, Meditations —, divisent le public mais ouvrent la voie au free jazz et a l'avant-garde. Coltrane meurt d'un cancer du foie a 40 ans, au sommet de sa quete, laissant une oeuvre qui continue d'inspirer musiciens et chercheurs spirituels.`,
    mainWorks: [
      "A Love Supreme",
      "Giant Steps",
      "My Favorite Things",
      "Blue Train",
    ],
    keyIdeas: ["Quete spirituelle", "Sheets of sound", "Jazz modal", "Free jazz"],
  },
  {
    id: "dave-brubeck",
    name: "Dave Brubeck",
    birthYear: 1920,
    deathYear: 2012,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Dave_Brubeck_1954.jpg/220px-Dave_Brubeck_1954.jpg",
    nationality: "Americain",
    movement: "Cool Jazz",
    summary: `Dave Brubeck est le musicien qui a prouve que le jazz pouvait etre a la fois intellectuellement ambitieux et largement populaire. Forme a la musique classique aupres de Darius Milhaud, il introduit dans le jazz des mesures inhabituelles que personne n'avait osees auparavant.

L'album Time Out (1959), enregistre avec son quartette legendaire incluant le saxophoniste Paul Desmond, est une revolution discrete. Take Five, en mesure 5/4, devient un tube planetaire — le premier single de jazz a depasser le million d'exemplaires vendus. Blue Rondo a la Turk explore le 9/8 turc. Ces experiences rythmiques, loin d'etre cerebrales, swinguent avec une elegance naturelle.

Brubeck est aussi un pionnier de l'engagement social. Il refuse de se produire devant des publics segregues et annule des concerts lucratifs plutot que de remplacer son contrebassiste noir Eugene Wright. Il joue sur les campus universitaires, contribuant a faire du jazz la musique de la jeunesse intellectuelle americaine des annees 1950.

Sa carriere, qui s'etend sur six decennies, montre qu'innovation et accessibilite ne sont pas incompatibles. Brubeck meurt en 2012, la veille de son 92e anniversaire.`,
    mainWorks: [
      "Take Five",
      "Blue Rondo a la Turk",
      "Time Out",
      "Time Further Out",
    ],
    keyIdeas: ["Mesures inhabituelles", "Jazz accessible", "Engagement social", "Cool jazz"],
  },
  {
    id: "ornette-coleman",
    name: "Ornette Coleman",
    birthYear: 1930,
    deathYear: 2015,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Ornette_Coleman_%281971%29.jpg/220px-Ornette_Coleman_%281971%29.jpg",
    nationality: "Americain",
    movement: "Free Jazz",
    summary: `Ornette Coleman est le revolutionnaire le plus radical du jazz. Quand il arrive a New York en 1959 avec son saxophone alto en plastique blanc et son quartette sans piano, il provoque un scandale comparable a celui du Sacre du printemps de Stravinsky. The Shape of Jazz to Come annonce dans son titre meme une rupture.

Sa revolution consiste a abolir la grille d'accords, pilier du jazz depuis ses origines. Les musiciens improvisent librement, guides par la melodie et l'emotion plutot que par des enchainements harmoniques predetermines. Lonely Woman, theme d'une beaute dechirante, prouve que cette liberte peut produire une musique profondement emouvante.

L'album Free Jazz (1960), double quartette improvisant simultanement pendant 37 minutes, donne son nom au mouvement. Coleman est insulte par les traditionalistes, celebre par Leonard Bernstein et les avant-gardistes. Le debat fait rage pendant des annees.

Sa theorie de l'« harmolodie » — fusion de harmonie, mouvement et melodie — reste difficile a saisir, mais son influence est immense. Du punk au rock experimental, de Sonic Youth a Radiohead, Coleman a ouvert un espace de liberte qui depasse largement le jazz.`,
    mainWorks: [
      "The Shape of Jazz to Come",
      "Free Jazz",
      "Lonely Woman",
      "Harmolodie (theorie)",
    ],
    keyIdeas: ["Abolition des regles harmoniques", "Free jazz", "Harmolodie", "Liberte totale"],
  },
  {
    id: "bill-evans",
    name: "Bill Evans",
    birthYear: 1929,
    deathYear: 1980,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Bill_Evans_%281975%29.jpg/220px-Bill_Evans_%281975%29.jpg",
    nationality: "Americain",
    movement: "Piano jazz moderne",
    summary: `Bill Evans redefinit le trio piano-contrebasse-batterie en en faisant une conversation entre trois voix egales, la ou le format traditionnel subordonnait la rythmique au pianiste. Avec Scott LaFaro a la contrebasse et Paul Motian a la batterie, son premier trio (1959-1961) invente une interaction telepathique qui influence tous les trios qui suivent.

Son jeu pianistique, d'un lyrisme introspectif marque par Debussy, Ravel et Chopin, introduit dans le jazz une sensibilite harmonique impressionniste. Ses voicings — la maniere de repartir les notes d'un accord — deviennent la reference pour des generations de pianistes, de Herbie Hancock a Brad Mehldau.

Miles Davis le recrute pour l'enregistrement de Kind of Blue, ou ses harmonies modales sont essentielles a l'atmosphere de l'album. Peace Piece, improvisation hypnotique sur deux accords, anticipe le minimalisme. Sunday at the Village Vanguard et Waltz for Debby, enregistres en concert dix jours avant la mort de LaFaro dans un accident de voiture, sont des sommets du jazz.

Heroinomane puis cocainomane pendant vingt ans, Evans meurt a 51 ans, le corps detruit. Sa musique, d'une delicatesse presque douloureuse, contraste avec la violence de son autodestruction.`,
    mainWorks: [
      "Waltz for Debby",
      "Sunday at the Village Vanguard",
      "Peace Piece",
      "Kind of Blue (avec Miles Davis)",
    ],
    keyIdeas: ["Trio egalitaire", "Lyrisme impressionniste", "Voicings", "Introspection"],
  },
  {
    id: "charles-mingus",
    name: "Charles Mingus",
    birthYear: 1922,
    deathYear: 1979,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Charles_Mingus_1976.jpg/220px-Charles_Mingus_1976.jpg",
    nationality: "Americain",
    movement: "Post-Bop",
    summary: `Charles Mingus est le compositeur le plus ambitieux du jazz apres Ellington, et sa personnalite la plus volcanique. Contrebassiste virtuose et chef d'orchestre tyrannique, il exige de ses musiciens une intensite emotionnelle totale, quitte a les insulter, les frapper ou les renvoyer en plein concert.

Sa musique fusionne tout ce qu'il a absorbe : le blues du holiness church de son enfance, le bebop de Parker, la polyphonie de la Nouvelle-Orleans, la musique classique de Debussy et Stravinsky, le gospel, le flamenco. The Black Saint and the Sinner Lady est une suite orchestrale d'une puissance et d'une complexite rares. Goodbye Pork Pie Hat, hommage a Lester Young, est un blues d'une beaute dechirante.

Militant enrage pour les droits civiques, Mingus ecrit Fables of Faubus pour denoncer le gouverneur segregationniste de l'Arkansas. Sa musique est politique — elle crie la colere de l'homme noir en Amerique.

Son autobiographie, Beneath the Underdog, melange faits et fiction dans un recit picaresque et excessif a l'image du personnage. Mingus meurt en 1979, laissant une oeuvre qui reste l'une des plus puissantes et des plus inclassables du jazz.`,
    mainWorks: [
      "Goodbye Pork Pie Hat",
      "Moanin'",
      "The Black Saint and the Sinner Lady",
      "Mingus Ah Um",
    ],
    keyIdeas: ["Fusion des genres", "Engagement politique", "Intensite emotionnelle", "Compositeur ambitieux"],
  },
  {
    id: "herbie-hancock",
    name: "Herbie Hancock",
    birthYear: 1940,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Herbie_Hancock_-_the_ass-kicker_%287707178994%29.jpg/220px-Herbie_Hancock_-_the_ass-kicker_%287707178994%29.jpg",
    nationality: "Americain",
    movement: "Jazz Fusion",
    summary: `Herbie Hancock est le musicien de jazz le plus versatile de sa generation. Pianiste prodige forme au classique, il rejoint le quintette de Miles Davis en 1963 a seulement 23 ans. Pendant cinq ans, aux cotes de Wayne Shorter, Ron Carter et Tony Williams, il participe a l'un des groupes les plus creatifs de l'histoire du jazz.

En 1973, Head Hunters marque un virage radical : Hancock plonge dans le funk electrique, les claviers synthetiques et les grooves hypnotiques. L'album se vend a un million d'exemplaires, record pour un disque de jazz. Chameleon, avec son riff de basse Moog, devient un classique du funk-jazz.

Toujours en avance, il embrasse le hip-hop en 1983 avec Rockit, dont le clip avec des robots et du scratching est l'un des premiers succes de MTV. Le morceau popularise le turntablism aupres du grand public.

Hancock ne cesse de se reinventer : acoustique, electrique, collaborations avec Joni Mitchell ou les Headhunters, album d'hommage a Gershwin. En 2008, son album de reprises de Joni Mitchell remporte le Grammy de l'album de l'annee, fait rare pour un artiste de jazz. A plus de 80 ans, il continue de se produire et d'explorer.`,
    mainWorks: [
      "Maiden Voyage",
      "Cantaloupe Island",
      "Rockit",
      "Head Hunters",
    ],
    keyIdeas: ["Versatilite", "Funk electrique", "Synthétiseurs", "Reinvention permanente"],
  },
  {
    id: "wayne-shorter",
    name: "Wayne Shorter",
    birthYear: 1933,
    deathYear: 2023,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Wayne_Shorter.jpg/220px-Wayne_Shorter.jpg",
    nationality: "Americain",
    movement: "Post-Bop / Fusion",
    summary: `Wayne Shorter est l'un des compositeurs et saxophonistes les plus profonds du jazz moderne. Ses compositions — Footprints, Speak No Evil, Nefertiti, Juju — sont des enigmes musicales ou chaque note compte, des miniatures d'une densite et d'une beaute saisissantes qui sont devenues des standards incontournables.

Directeur musical des Jazz Messengers d'Art Blakey de 1959 a 1964, il transforme le repertoire du groupe avec des compositions d'une sophistication harmonique nouvelle. Il rejoint ensuite le second grand quintette de Miles Davis (1964-1970), contribuant a l'exploration modale et a la liberte croissante du groupe.

En 1971, il cofonde Weather Report avec le claviériste Joe Zawinul. Le groupe, actif pendant quinze ans, devient le plus grand ensemble de jazz fusion, vendant des millions d'albums. Birdland, Heavy Weather et leurs experimentations electroniques atteignent un public immense.

Apres Weather Report, Shorter mene un quartette acoustique (2001-2018) qui produit une musique d'une liberte et d'une abstraction remarquables. Bouddhiste pratiquant, il considere la musique comme un chemin spirituel. Il meurt en 2023, reconnu par ses pairs comme l'un des plus grands musiciens de l'histoire du jazz.`,
    mainWorks: [
      "Speak No Evil",
      "Footprints",
      "Juju",
      "Weather Report",
    ],
    keyIdeas: ["Compositeur enigmatique", "Jazz Messengers", "Weather Report", "Spiritualite"],
  },
  {
    id: "keith-jarrett",
    name: "Keith Jarrett",
    birthYear: 1945,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Keith_Jarrett.jpg/220px-Keith_Jarrett.jpg",
    nationality: "Americain",
    movement: "Piano jazz contemporain",
    summary: `Keith Jarrett porte l'improvisation pianistique a un niveau d'ambition sans precedent. Ses concerts solos, ou il s'assoit au piano sans aucune preparation et improvise pendant plus d'une heure, sont des evenements musicaux uniques, suspendus entre genie et risque absolu.

Le Koln Concert (1975), enregistre sur un piano mediocre que Jarrett avait failli refuser, devient l'album de piano solo le plus vendu de l'histoire — plus de quatre millions d'exemplaires. Sa melodie d'ouverture, d'une simplicite lumineuse, est devenue iconique bien au-dela du monde du jazz.

Perfectionniste obsessionnel, Jarrett est connu pour ses exigences extremes : silence absolu du public, pas de photographies, conditions acoustiques parfaites. Ses grognements et contorsions au piano, signes d'un engagement physique total, divisent — certains y voient de l'affectation, d'autres l'expression d'une communion intense avec la musique.

Son Standards Trio avec Gary Peacock et Jack DeJohnette (1983-2014) est l'un des plus grands groupes de jazz, revisitant le repertoire classique avec une liberte et une ecoute mutuelle exceptionnelles. Un accident vasculaire cerebral en 2018 met fin a sa carriere de concertiste.`,
    mainWorks: [
      "The Koln Concert",
      "Standards Trio",
      "My Song",
      "La Scala",
    ],
    keyIdeas: ["Improvisation totale", "Concerts solos", "Perfectionnisme", "Standards Trio"],
  },
  {
    id: "pat-metheny",
    name: "Pat Metheny",
    birthYear: 1954,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Pat_Metheny_01.jpg/220px-Pat_Metheny_01.jpg",
    nationality: "Americain",
    movement: "Jazz contemporain",
    summary: `Pat Metheny est le guitariste de jazz le plus recompense de l'histoire — vingt Grammy Awards dans des categories differentes, un record qui temoigne de l'etendue de son talent. Son son cristallin, obtenu avec une guitare a cordes nylon et des effets de chorus, est immediatement reconnaissable.

Avec le Pat Metheny Group, fonde en 1977 avec le claviériste Lyle Mays, il developpe un jazz melodique et lyrique, nourri de folk americain, de musique bresilienne et de rock progressif. Des albums comme Offramp, Still Life (Talking) et Letter from Home touchent un public bien au-dela des amateurs de jazz, sans jamais sacrifier l'exigence musicale.

Mais Metheny est aussi un aventurier. Ses collaborations avec Ornette Coleman (Song X), ses duos avec Charlie Haden, ses projets en solo a la guitare synthetique montrent un musicien constamment en mouvement, refuse de se laisser enfermer dans une seule esthetique.

L'Orchestrion, instrument mecanique qu'il controle seul en jouant de la guitare, illustre sa fascination pour la technologie au service de la musique. Metheny est un pont entre le jazz et un public large, prouvant que la beaute melodique et la complexite musicale peuvent coexister.`,
    mainWorks: [
      "Bright Size Life",
      "(Cross the) Heartland",
      "Last Train Home",
      "Orchestrion",
    ],
    keyIdeas: ["Son cristallin", "Jazz melodique", "Versatilite", "Technologie musicale"],
  },
  {
    id: "esperanza-spalding",
    name: "Esperanza Spalding",
    birthYear: 1984,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Esperanza_Spalding_2011.jpg/220px-Esperanza_Spalding_2011.jpg",
    nationality: "Americaine",
    movement: "Jazz contemporain",
    summary: `Esperanza Spalding incarne le renouveau du jazz au XXIe siecle. Contrebassiste, chanteuse et compositrice, elle fusionne jazz, soul, R&B, bossa nova et musique classique avec une aisance qui temoigne d'une formation musicale exceptionnelle — elle enseigne au Berklee College of Music a seulement 20 ans.

En 2011, elle cree la surprise en remportant le Grammy du meilleur nouvel artiste, battant Justin Bieber et Drake. Cette victoire provoque un tolle chez les fans de pop mais place le jazz sous les projecteurs mediatiques, fait rare au XXIe siecle.

Son parcours est marque par une volonte constante de repousser les frontieres. Chamber Music Society melange jazz et musique de chambre. Emily's D+Evolution est un concept album rock theatral. Songwrights Apothecary Lab, son projet le plus ambitieux, cree des compositions basees sur des recherches en musicotherapie et en neurosciences.

Spalding represente un jazz qui refuse la nostalgie et l'embaumement. Metisse, femme, politiquement engagee, elle incarne une nouvelle generation qui revendique le jazz comme une musique vivante, ouverte et en perpetuelle transformation, fidele a l'esprit d'innovation qui a toujours defini cette musique.`,
    mainWorks: [
      "Esperanza",
      "Chamber Music Society",
      "Emily's D+Evolution",
      "Songwrights Apothecary Lab",
    ],
    keyIdeas: ["Renouveau du jazz", "Fusion des genres", "Innovation", "Jazz vivant"],
  },
];