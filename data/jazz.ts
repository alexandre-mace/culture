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
  itemType?: "person" | "topic";
  keyIdeas: string[];
}

export const jazz: JazzItem[] = [
  {
    id: "buddy-bolden",
    name: "Buddy Bolden",
    birthYear: 1877,
    deathYear: 1931,
    nationality: "Américain",
    movement: "Origines",
    summary: `Buddy Bolden est considéré comme le premier musicien de jazz, bien qu'aucun enregistrement de lui n'ait survécu. Dans la Nouvelle-Orléans du tournant du siècle, son cornet puissant, audible à des kilomètres selon la légende, fait danser les foules de Storyville et de Lincoln Park.

Son style fusionne les marches militaires, le blues du Delta, les spirituals et le ragtime en quelque chose de nouveau : une musique improvisée, syncopée, vibrante. Il est le premier à « swinguer », à jouer entre les notes, à transformer la musique en conversation collective.

En 1907, à seulement 30 ans, Bolden est interné pour démence à l'hôpital de Jackson, en Louisiane, où il restera jusqu'à sa mort en 1931. Il ne saura jamais que la musique qu'il a inventée conquerra le monde entier.

Sa légende, transmise oralement par les musiciens qui l'ont entendu — King Oliver, Freddie Keppard, Louis Armstrong enfant — fait de lui le fantôme fondateur du jazz, une figure mythique dont l'absence d'enregistrements nourrit le mystère.`,
    mainWorks: [
      "Premier 'roi' du jazz à la Nouvelle-Orléans",
      "Style de cornet improvisateur",
      "Influence sur une génération de musiciens",
      "Interné en 1907, jamais enregistré",
    ],
    keyIdeas: ["Origines du jazz", "Improvisation", "Nouvelle-Orléans", "Légende orale"],
  },
  {
    id: "jelly-roll-morton",
    name: "Jelly Roll Morton",
    birthYear: 1890,
    deathYear: 1941,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/TeenagedJellyRollMorton.jpg/330px-TeenagedJellyRollMorton.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Jazz Nouvelle-Orléans",
    summary: `Jelly Roll Morton, né Ferdinand LaMothe à la Nouvelle-Orléans, se proclamait sans modestie « inventeur du jazz ». Si cette prétention est exagérée, il est indiscutablement le premier grand compositeur et arrangeur de l'histoire du jazz, celui qui a donné une forme écrite à une musique d'abord orale.

Avec ses Red Hot Peppers, il réalise entre 1926 et 1930 des enregistrements qui sont des chefs-d'œuvre d'équilibre entre composition et improvisation. Chaque instrument a un rôle précis, les breaks sont savamment placés, les dynamiques contrôlées — mais le swing et la spontanéité restent intacts.

Pianiste virtuose formé au ragtime, au blues et à l'opéra, Morton synthétise les traditions créoles, afro-américaines et européennes de la Nouvelle-Orléans. Ses compositions comme Black Bottom Stomp ou King Porter Stomp deviennent des standards.

En 1938, ruiné et oublié, il enregistre pour la Library of Congress des heures d'entretiens avec Alan Lomax, racontant l'histoire du jazz depuis ses origines. Ces enregistrements constituent un témoignage inestimable sur la naissance d'une musique.`,
    mainWorks: [
      "Black Bottom Stomp",
      "King Porter Stomp",
      "Red Hot Peppers sessions",
      "Entretiens avec Alan Lomax",
    ],
    keyIdeas: ["Premier arrangeur", "Composition et improvisation", "Ragtime", "Tradition créole"],
  },
  {
    id: "louis-armstrong",
    name: "Louis Armstrong",
    birthYear: 1901,
    deathYear: 1971,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Louis_Armstrong_in_Color_%28restored%29.jpg/330px-Louis_Armstrong_in_Color_%28restored%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Jazz classique",
    summary: `Louis Armstrong est sans doute le musicien le plus important du XXe siècle. Né dans la misère à la Nouvelle-Orléans, formé au cornet dans un orphelinat, il révolutionne la musique en inventant le solo improvisé moderne — l'idée qu'un individu peut s'exprimer seul, avec sa voix propre, au-dessus d'un orchestre.

Ses enregistrements avec les Hot Five et Hot Seven (1925-1928) transforment le jazz d'une musique collective en un art du soliste. West End Blues, avec son introduction à la trompette, reste l'un des moments les plus stupéfiants de l'histoire de la musique enregistrée. Son phrasé, son sens du swing et sa créativité mélodique influencent tous les musiciens qui suivent.

Sa voix rauque et chaleureuse, son sourire généreux et son charisme en font une star mondiale, l'un des premiers artistes noirs à transcender les barrières raciales aux États-Unis. De Hello, Dolly! à What a Wonderful World, il touche un public bien au-delà du jazz.

Armstrong est aussi un pont entre les époques : il accompagne la naissance du jazz à la Nouvelle-Orléans, traverse l'ère du swing, et reste pertinent jusqu'à sa mort en 1971, ambassadeur infatigable d'une musique qu'il a plus que quiconque contribué à créer.`,
    mainWorks: [
      "West End Blues",
      "What a Wonderful World",
      "Hot Five et Hot Seven sessions",
      "Hello, Dolly!",
    ],
    keyIdeas: ["Solo improvisé", "Swing", "Star mondiale", "Ambassadeur du jazz"],
  },
  {
    id: "duke-ellington",
    name: "Duke Ellington",
    birthYear: 1899,
    deathYear: 1974,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Duke_Ellington_1964.jpg/330px-Duke_Ellington_1964.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Big Band / Swing",
    summary: `Edward Kennedy « Duke » Ellington est le plus grand compositeur de l'histoire du jazz et l'un des plus importants de la musique américaine. Pendant cinquante ans, de 1924 à 1974, son orchestre est un laboratoire sonore permanent, un instrument à lui seul dont Ellington joue avec une maîtrise incomparable.

Sa résidence au Cotton Club de Harlem (1927-1931) lui permet de développer un style orchestral unique, le « jungle sound », mêlant growls des cuivres, clarinettes sinueuses et harmonies sophistiquées. Chaque musicien de l'orchestre — Johnny Hodges, Harry Carney, Cootie Williams — est un soliste irremplaçable dont Ellington exploite la personnalité sonore.

Avec plus de mille compositions, Ellington transcende les frontières entre jazz, musique classique et musique populaire. Mood Indigo, Sophisticated Lady, In a Sentimental Mood sont des standards intemporels. Ses suites ambitieuses — Black, Brown and Beige, Such Sweet Thunder — élèvent le jazz au rang de musique de concert.

Billy Strayhorn, son collaborateur intime pendant 28 ans, co-signe nombre de chefs-d'œuvre dont Take the "A" Train, devenu l'indicatif de l'orchestre. Leur partenariat est l'un des plus féconds de l'histoire de la musique.`,
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
    nationality: "Américain",
    movement: "Big Band / Swing",
    summary: `Count Basie forge à Kansas City un style d'orchestre radicalement différent de celui d'Ellington : là où ce dernier compose et orchestre minutieusement, Basie mise sur le swing, le blues et l'économie de moyens. Son piano minimaliste — quelques notes placées avec une précision diabolique — est devenu légendaire.

L'orchestre de Basie, formé à Kansas City dans les années 1930, incarne le swing à l'état pur. La section rythmique — Basie au piano, Freddie Green à la guitare, Walter Page à la contrebasse, Jo Jones à la batterie — est considérée comme la plus swinguante de l'histoire du jazz. Les riffs des cuivres, simples et implacables, propulsent les solistes.

Lester Young, saxophoniste génial au son aérien, est le soliste emblématique de l'orchestre. Son style relâché et mélodique annonce le cool jazz et influence des générations de musiciens, de Stan Getz à Chet Baker.

L'orchestre de Basie traverse les décennies, s'adaptant à chaque époque sans perdre son identité. L'album Atomic Basie (1957), avec les arrangements de Neal Hefti, prouve que le big band peut rester moderne et percutant.`,
    mainWorks: [
      "One O'Clock Jump",
      "April in Paris",
      "Jumpin' at the Woodside",
      "Atomic Basie",
    ],
    keyIdeas: ["Swing pur", "Minimalisme pianistique", "Kansas City", "Section rythmique légendaire"],
  },
  {
    id: "billie-holiday",
    name: "Billie Holiday",
    birthYear: 1915,
    deathYear: 1959,
    nationality: "Américaine",
    movement: "Jazz vocal",
    summary: `Billie Holiday, surnommée Lady Day, possède l'une des voix les plus reconnaissables et les plus émouvantes de l'histoire de la musique. Sans formation technique, elle invente un phrasé qui transforme chaque chanson en confession intime, jouant avec le tempo comme un instrumentiste, en retard ou en avance sur le beat.

Strange Fruit (1939), qui décrit le lynchage des Noirs dans le Sud américain, est sans doute la première chanson de protestation de la musique populaire. L'image des « fruits étranges » pendant aux arbres provoque un choc qui dépasse le cadre du jazz. Le morceau est interdit de radio mais devient un symbole de la lutte pour les droits civiques.

Sa vie tragique — enfance abandonnée, prostitution, drogues, alcool, relations destructrices — nourrit son art d'une intensité douloureuse. Chaque note semble arrachée à l'expérience vécue. Ses derniers enregistrements, la voix abîmée mais l'émotion intacte, sont d'une beauté dévastatrice.

Holiday meurt à 44 ans, sous surveillance policière à l'hôpital, arrêtée pour possession d'héroïne sur son lit de mort. Son autobiographie, Lady Sings the Blues, et ses enregistrements restent parmi les trésors du jazz.`,
    mainWorks: [
      "Strange Fruit",
      "God Bless the Child",
      "Lady Sings the Blues",
      "Fine and Mellow",
    ],
    keyIdeas: ["Phrasé unique", "Chanson de protestation", "Émotion brute", "Vie tragique"],
  },
  {
    id: "ella-fitzgerald",
    name: "Ella Fitzgerald",
    birthYear: 1917,
    deathYear: 1996,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ella_Fitzgerald_in_September_1947_%28cropped%29.jpg/330px-Ella_Fitzgerald_in_September_1947_%28cropped%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américaine",
    movement: "Jazz vocal",
    summary: `Ella Fitzgerald, la « First Lady of Song », possède une voix d'une pureté, d'une justesse et d'une étendue exceptionnelles. Sa technique vocale est si parfaite que les musiciens la considèrent comme un instrument à part entière, capable de rivaliser avec n'importe quel saxophoniste en improvisation scat.

Son scat — l'art d'improviser vocalement avec des syllabes sans signification — atteint des sommets de virtuosité et d'invention. Son Mack the Knife enregistré en concert à Berlin en 1960, où elle oublie les paroles et improvise avec un aplomb éblouissant, est un monument du jazz en live.

Ses Songbooks, enregistrés pour le label Verve de Norman Granz entre 1956 et 1964, célèbrent les grands compositeurs américains : Cole Porter, Rodgers & Hart, Duke Ellington, Gershwin. Ces albums définissent l'interprétation de référence pour des dizaines de standards et préservent le patrimoine de la chanson américaine.

Contrairement à Billie Holiday, Fitzgerald incarne la joie de chanter, la lumière et l'optimisme. Sa carrière de soixante ans, des concours d'amateurs de Harlem en 1934 aux plus grandes salles du monde, est l'une des plus remarquables de l'histoire de la musique.`,
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Portrait_of_Charlie_Parker_in_1947.jpg/330px-Portrait_of_Charlie_Parker_in_1947.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Bebop",
    summary: `Charlie « Bird » Parker est le révolutionnaire du jazz. Au début des années 1940, dans les clubs de la 52e rue à New York — le Minton's Playhouse, le Three Deuces —, il invente avec Dizzy Gillespie un nouveau langage musical : le bebop. Tempos fulgurants, harmonies complexes, phrasés asymétriques : le jazz cesse d'être une musique de danse pour devenir un art.

Son saxophone alto produit un torrent de notes d'une logique mélodique implacable. Ses improvisations sur des grilles d'accords enrichies de substitutions chromatiques créent un vocabulaire que tous les jazzmen qui suivent devront assimiler. Ko-Ko, Ornithology, Confirmation sont des études de virtuosité et d'invention.

Parker est aussi un génie autodestructeur. Héroïnomane dès l'adolescence, alcoolique, instable, il traverse la vie comme un météore. Ses absences, ses crises, ses internements ponctuent une carrière fulgurante. Le graffiti « Bird Lives », apparu sur les murs de New York après sa mort, témoigne de son statut mythique.

Il meurt à 34 ans, le corps usé au point que le médecin légiste lui donne entre 50 et 60 ans. Avec lui disparaît le génie le plus foudroyant et le plus tragique du jazz.`,
    mainWorks: [
      "Ko-Ko",
      "Ornithology",
      "Confirmation",
      "Now's the Time",
    ],
    keyIdeas: ["Bebop", "Virtuosité harmonique", "Génie autodestructeur", "Révolution musicale"],
  },
  {
    id: "dizzy-gillespie",
    name: "Dizzy Gillespie",
    birthYear: 1917,
    deathYear: 1993,
    nationality: "Américain",
    movement: "Bebop",
    summary: `Dizzy Gillespie, avec sa trompette coudée à 45 degrés et ses joues gonflées comme des ballons, est l'image même du jazz. Co-inventeur du bebop avec Charlie Parker, il apporte à la révolution bop ce que Parker ne pouvait pas : la discipline, l'organisation et le sens du spectacle.

Là où Parker improvise dans l'instant, Gillespie compose, arrange et structure. A Night in Tunisia, Salt Peanuts, Groovin' High sont des compositions pensées, avec des introductions élaborées et des harmonies savantes. Il forme des big bands bop, prouvant que le nouveau langage peut fonctionner à grande échelle.

Sa contribution la plus originale est la fusion du jazz avec les rythmes afro-cubains. En engageant le percussionniste cubain Chano Pozo en 1947, il crée le jazz latin. Manteca, avec ses polyrythmies afro-cubaines, ouvre un champ d'exploration qui continue aujourd'hui.

Personnalité généreuse et pédagogue, Gillespie forme des générations de musiciens. Contrairement à Parker, il traverse les décennies avec constance, devenant un ambassadeur du jazz dans le monde entier, y compris lors de tournées organisées par le Département d'État américain pendant la Guerre froide.`,
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Thelonious_Monk%2C_Minton%27s_Playhouse%2C_New_York%2C_N.Y.%2C_ca._Sept._1947_%28William_P._Gottlieb_06191%29.jpg/330px-Thelonious_Monk%2C_Minton%27s_Playhouse%2C_New_York%2C_N.Y.%2C_ca._Sept._1947_%28William_P._Gottlieb_06191%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Bebop",
    summary: `Thelonious Monk est l'un des musiciens les plus singuliers de l'histoire du jazz. Son style pianistique — anguleux, percussif, plein de silences inattendus et de dissonances délibérées — déroute ses contemporains. Pendant des années, il est considéré comme un amateur maladroit. Il faudra du temps pour comprendre que chaque note « fausse » est parfaitement intentionnelle.

Présent aux jam sessions fondatrices du Minton's Playhouse dans les années 1940, il est l'un des architectes du bebop, mais son style n'appartient à aucune école. Ses compositions — 'Round Midnight, Straight No Chaser, Blue Monk, Ruby My Dear — sont des miniatures parfaites, immédiatement reconnaissables par leurs mélodies tordues et leurs harmonies étranges.

Monk est aussi un personnage excentrique : ses chapeaux extravagants, ses danses solitaires sur scène, ses longs silences. Privé de sa carte de cabaret pendant six ans pour possession de drogue, il est interdit de se produire dans les clubs de New York de 1951 à 1957.

Sa réhabilitation, à partir de la fin des années 1950, en fait une icône. La couverture du Time en 1964 consacre sa reconnaissance. Ses compositions sont parmi les plus jouées du répertoire jazz, des énigmes musicales qui révèlent de nouvelles subtilités à chaque écoute.`,
    mainWorks: [
      "'Round Midnight",
      "Straight, No Chaser",
      "Blue Monk",
      "Brilliant Corners",
    ],
    keyIdeas: ["Style anguleux", "Compositions miniatures", "Excentricité", "Dissonance délibérée"],
  },
  {
    id: "miles-davis",
    name: "Miles Davis",
    birthYear: 1926,
    deathYear: 1991,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Miles_Davis_24.jpg/330px-Miles_Davis_24.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Cool / Modal / Fusion",
    summary: `Miles Davis est le musicien qui a réinventé le jazz le plus grand nombre de fois. À chaque décennie, il abandonne ce qu'il maîtrise pour explorer un territoire inconnu, entraînant avec lui les meilleurs musiciens de sa génération.

Dans les années 1940, il joue avec Charlie Parker. En 1949, Birth of the Cool invente le cool jazz — des arrangements feutrés et sophistiqués, à l'opposé du bebop brûlant. Son premier grand quintette avec John Coltrane (1955-1957) définit le hard bop. En 1959, Kind of Blue, enregistré en deux sessions avec une préparation minimale, devient l'album de jazz le plus vendu de l'histoire et invente le jazz modal.

En 1969, Bitches Brew fusionne le jazz avec le rock et le funk électrique, scandalisant les puristes mais ouvrant une voie immense. Les années 1970 le voient plonger dans un funk spatial et abrasif avant un silence de cinq ans.

Personnalité complexe — élégant et brutal, génial et cruel, dandy et rebelle —, Davis refuse tous les compromis. Sa trompette à la sourdine Harmon, intime et fragile, est l'un des sons les plus reconnaissables de la musique du XXe siècle. Il meurt en 1991, laissant une discographie qui est l'histoire même du jazz moderne.`,
    mainWorks: [
      "Kind of Blue",
      "Bitches Brew",
      "Birth of the Cool",
      "Sketches of Spain",
    ],
    keyIdeas: ["Réinvention permanente", "Jazz modal", "Fusion", "Leader visionnaire"],
  },
  {
    id: "john-coltrane",
    name: "John Coltrane",
    birthYear: 1926,
    deathYear: 1967,
    nationality: "Américain",
    movement: "Hard Bop / Free Jazz",
    summary: `John Coltrane incarne la quête spirituelle dans le jazz. En onze ans de carrière en leader (1957-1967), il parcourt un chemin musical immense, du hard bop le plus sophistiqué au free jazz le plus radical, chaque album étant une étape d'une recherche intérieure insatiable.

Ses « sheets of sound » — des cascades de notes d'une densité hallucinante — redéfinissent les possibilités du saxophone ténor. Giant Steps (1960) pousse les substitutions harmoniques à leur limite mathématique, avec des enchaînements d'accords si rapides qu'ils défient la plupart des musiciens. My Favorite Things transforme une mélodie de comédie musicale en transe modale hypnotique au saxophone soprano.

A Love Supreme (1965), suite en quatre mouvements dédiée à Dieu, est son chef-d'œuvre absolu. Cri de gratitude mystique, l'album fusionne discipline formelle et abandon spirituel. Il devient l'un des disques les plus influents de l'histoire de la musique.

Ses derniers enregistrements, de plus en plus libres et violents — Ascension, Meditations —, divisent le public mais ouvrent la voie au free jazz et à l'avant-garde. Coltrane meurt d'un cancer du foie à 40 ans, au sommet de sa quête, laissant une œuvre qui continue d'inspirer musiciens et chercheurs spirituels.`,
    mainWorks: [
      "A Love Supreme",
      "Giant Steps",
      "My Favorite Things",
      "Blue Train",
    ],
    keyIdeas: ["Quête spirituelle", "Sheets of sound", "Jazz modal", "Free jazz"],
  },
  {
    id: "dave-brubeck",
    name: "Dave Brubeck",
    birthYear: 1920,
    deathYear: 2012,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/DaveBrubeckbyPabloSecca2.png/330px-DaveBrubeckbyPabloSecca2.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Cool Jazz",
    summary: `Dave Brubeck est le musicien qui a prouvé que le jazz pouvait être à la fois intellectuellement ambitieux et largement populaire. Formé à la musique classique auprès de Darius Milhaud, il introduit dans le jazz des mesures inhabituelles que personne n'avait osées auparavant.

L'album Time Out (1959), enregistré avec son quartette légendaire incluant le saxophoniste Paul Desmond, est une révolution discrète. Take Five, en mesure 5/4, devient un tube planétaire — le premier single de jazz à dépasser le million d'exemplaires vendus. Blue Rondo à la Turk explore le 9/8 turc. Ces expériences rythmiques, loin d'être cérébrales, swinguent avec une élégance naturelle.

Brubeck est aussi un pionnier de l'engagement social. Il refuse de se produire devant des publics ségrégués et annule des concerts lucratifs plutôt que de remplacer son contrebassiste noir Eugene Wright. Il joue sur les campus universitaires, contribuant à faire du jazz la musique de la jeunesse intellectuelle américaine des années 1950.

Sa carrière, qui s'étend sur six décennies, montre qu'innovation et accessibilité ne sont pas incompatibles. Brubeck meurt en 2012, la veille de son 92e anniversaire.`,
    mainWorks: [
      "Take Five",
      "Blue Rondo à la Turk",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Ornette-Coleman-2008-Heidelberg-schindelbeck.jpg/330px-Ornette-Coleman-2008-Heidelberg-schindelbeck.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Free Jazz",
    summary: `Ornette Coleman est le révolutionnaire le plus radical du jazz. Quand il arrive à New York en 1959 avec son saxophone alto en plastique blanc et son quartette sans piano, il provoque un scandale comparable à celui du Sacre du printemps de Stravinsky. The Shape of Jazz to Come annonce dans son titre même une rupture.

Sa révolution consiste à abolir la grille d'accords, pilier du jazz depuis ses origines. Les musiciens improvisent librement, guidés par la mélodie et l'émotion plutôt que par des enchaînements harmoniques prédéterminés. Lonely Woman, thème d'une beauté déchirante, prouve que cette liberté peut produire une musique profondément émouvante.

L'album Free Jazz (1960), double quartette improvisant simultanément pendant 37 minutes, donne son nom au mouvement. Coleman est insulté par les traditionalistes, célébré par Leonard Bernstein et les avant-gardistes. Le débat fait rage pendant des années.

Sa théorie de l'« harmolodie » — fusion de harmonie, mouvement et mélodie — reste difficile à saisir, mais son influence est immense. Du punk au rock expérimental, de Sonic Youth à Radiohead, Coleman a ouvert un espace de liberté qui dépasse largement le jazz.`,
    mainWorks: [
      "The Shape of Jazz to Come",
      "Free Jazz",
      "Lonely Woman",
      "Harmolodie (théorie)",
    ],
    keyIdeas: ["Abolition des règles harmoniques", "Free jazz", "Harmolodie", "Liberté totale"],
  },
  {
    id: "bill-evans",
    name: "Bill Evans",
    birthYear: 1929,
    deathYear: 1980,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bill_Evans_%281961_publicity_photo_by_Steve_Schapiro%29.jpg/330px-Bill_Evans_%281961_publicity_photo_by_Steve_Schapiro%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Piano jazz moderne",
    summary: `Bill Evans redéfinit le trio piano-contrebasse-batterie en en faisant une conversation entre trois voix égales, là où le format traditionnel subordonnait la rythmique au pianiste. Avec Scott LaFaro à la contrebasse et Paul Motian à la batterie, son premier trio (1959-1961) invente une interaction télépathique qui influence tous les trios qui suivent.

Son jeu pianistique, d'un lyrisme introspectif marqué par Debussy, Ravel et Chopin, introduit dans le jazz une sensibilité harmonique impressionniste. Ses voicings — la manière de répartir les notes d'un accord — deviennent la référence pour des générations de pianistes, de Herbie Hancock à Brad Mehldau.

Miles Davis le recrute pour l'enregistrement de Kind of Blue, où ses harmonies modales sont essentielles à l'atmosphère de l'album. Peace Piece, improvisation hypnotique sur deux accords, anticipe le minimalisme. Sunday at the Village Vanguard et Waltz for Debby, enregistrés en concert dix jours avant la mort de LaFaro dans un accident de voiture, sont des sommets du jazz.

Héroïnomane puis cocaïnomane pendant vingt ans, Evans meurt à 51 ans, le corps détruit. Sa musique, d'une délicatesse presque douloureuse, contraste avec la violence de son autodestruction.`,
    mainWorks: [
      "Waltz for Debby",
      "Sunday at the Village Vanguard",
      "Peace Piece",
      "Kind of Blue (avec Miles Davis)",
    ],
    keyIdeas: ["Trio égalitaire", "Lyrisme impressionniste", "Voicings", "Introspection"],
  },
  {
    id: "charles-mingus",
    name: "Charles Mingus",
    birthYear: 1922,
    deathYear: 1979,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Charles_Mingus_1976_cropped.jpg/330px-Charles_Mingus_1976_cropped.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Post-Bop",
    summary: `Charles Mingus est le compositeur le plus ambitieux du jazz après Ellington, et sa personnalité la plus volcanique. Contrebassiste virtuose et chef d'orchestre tyrannique, il exige de ses musiciens une intensité émotionnelle totale, quitte à les insulter, les frapper ou les renvoyer en plein concert.

Sa musique fusionne tout ce qu'il a absorbé : le blues du holiness church de son enfance, le bebop de Parker, la polyphonie de la Nouvelle-Orléans, la musique classique de Debussy et Stravinsky, le gospel, le flamenco. The Black Saint and the Sinner Lady est une suite orchestrale d'une puissance et d'une complexité rares. Goodbye Pork Pie Hat, hommage à Lester Young, est un blues d'une beauté déchirante.

Militant enragé pour les droits civiques, Mingus écrit Fables of Faubus pour dénoncer le gouverneur ségrégationniste de l'Arkansas. Sa musique est politique — elle crie la colère de l'homme noir en Amérique.

Son autobiographie, Beneath the Underdog, mélange faits et fiction dans un récit picaresque et excessif à l'image du personnage. Mingus meurt en 1979, laissant une œuvre qui reste l'une des plus puissantes et des plus inclassables du jazz.`,
    mainWorks: [
      "Goodbye Pork Pie Hat",
      "Moanin'",
      "The Black Saint and the Sinner Lady",
      "Mingus Ah Um",
    ],
    keyIdeas: ["Fusion des genres", "Engagement politique", "Intensité émotionnelle", "Compositeur ambitieux"],
  },
  {
    id: "herbie-hancock",
    name: "Herbie Hancock",
    birthYear: 1940,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Herbie_Hancock.jpg/330px-Herbie_Hancock.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Jazz Fusion",
    summary: `Herbie Hancock est le musicien de jazz le plus versatile de sa génération. Pianiste prodige formé au classique, il rejoint le quintette de Miles Davis en 1963 à seulement 23 ans. Pendant cinq ans, aux côtés de Wayne Shorter, Ron Carter et Tony Williams, il participe à l'un des groupes les plus créatifs de l'histoire du jazz.

En 1973, Head Hunters marque un virage radical : Hancock plonge dans le funk électrique, les claviers synthétiques et les grooves hypnotiques. L'album se vend à un million d'exemplaires, record pour un disque de jazz. Chameleon, avec son riff de basse Moog, devient un classique du funk-jazz.

Toujours en avance, il embrasse le hip-hop en 1983 avec Rockit, dont le clip avec des robots et du scratching est l'un des premiers succès de MTV. Le morceau popularise le turntablism auprès du grand public.

Hancock ne cesse de se réinventer : acoustique, électrique, collaborations avec Joni Mitchell ou les Headhunters, album d'hommage à Gershwin. En 2008, son album de reprises de Joni Mitchell remporte le Grammy de l'album de l'année, fait rare pour un artiste de jazz. À plus de 80 ans, il continue de se produire et d'explorer.`,
    mainWorks: [
      "Maiden Voyage",
      "Cantaloupe Island",
      "Rockit",
      "Head Hunters",
    ],
    keyIdeas: ["Versatilité", "Funk électrique", "Synthétiseurs", "Réinvention permanente"],
  },
  {
    id: "wayne-shorter",
    name: "Wayne Shorter",
    birthYear: 1933,
    deathYear: 2023,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Wayne_Shorter.jpg/330px-Wayne_Shorter.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Post-Bop / Fusion",
    summary: `Wayne Shorter est l'un des compositeurs et saxophonistes les plus profonds du jazz moderne. Ses compositions — Footprints, Speak No Evil, Nefertiti, Juju — sont des énigmes musicales où chaque note compte, des miniatures d'une densité et d'une beauté saisissantes qui sont devenues des standards incontournables.

Directeur musical des Jazz Messengers d'Art Blakey de 1959 à 1964, il transforme le répertoire du groupe avec des compositions d'une sophistication harmonique nouvelle. Il rejoint ensuite le second grand quintette de Miles Davis (1964-1970), contribuant à l'exploration modale et à la liberté croissante du groupe.

En 1971, il cofonde Weather Report avec le claviériste Joe Zawinul. Le groupe, actif pendant quinze ans, devient le plus grand ensemble de jazz fusion, vendant des millions d'albums. Birdland, Heavy Weather et leurs expérimentations électroniques atteignent un public immense.

Après Weather Report, Shorter mène un quartette acoustique (2001-2018) qui produit une musique d'une liberté et d'une abstraction remarquables. Bouddhiste pratiquant, il considère la musique comme un chemin spirituel. Il meurt en 2023, reconnu par ses pairs comme l'un des plus grands musiciens de l'histoire du jazz.`,
    mainWorks: [
      "Speak No Evil",
      "Footprints",
      "Juju",
      "Weather Report",
    ],
    keyIdeas: ["Compositeur énigmatique", "Jazz Messengers", "Weather Report", "Spiritualité"],
  },
  {
    id: "keith-jarrett",
    name: "Keith Jarrett",
    birthYear: 1945,
    nationality: "Américain",
    movement: "Piano jazz contemporain",
    summary: `Keith Jarrett porte l'improvisation pianistique à un niveau d'ambition sans précédent. Ses concerts solos, où il s'assoit au piano sans aucune préparation et improvise pendant plus d'une heure, sont des événements musicaux uniques, suspendus entre génie et risque absolu.

Le Köln Concert (1975), enregistré sur un piano médiocre que Jarrett avait failli refuser, devient l'album de piano solo le plus vendu de l'histoire — plus de quatre millions d'exemplaires. Sa mélodie d'ouverture, d'une simplicité lumineuse, est devenue iconique bien au-delà du monde du jazz.

Perfectionniste obsessionnel, Jarrett est connu pour ses exigences extrêmes : silence absolu du public, pas de photographies, conditions acoustiques parfaites. Ses grognements et contorsions au piano, signes d'un engagement physique total, divisent — certains y voient de l'affectation, d'autres l'expression d'une communion intense avec la musique.

Son Standards Trio avec Gary Peacock et Jack DeJohnette (1983-2014) est l'un des plus grands groupes de jazz, revisitant le répertoire classique avec une liberté et une écoute mutuelle exceptionnelles. Un accident vasculaire cérébral en 2018 met fin à sa carrière de concertiste.`,
    mainWorks: [
      "The Köln Concert",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Pat_metheny_orch2.jpg/330px-Pat_metheny_orch2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Jazz contemporain",
    summary: `Pat Metheny est le guitariste de jazz le plus récompensé de l'histoire — vingt Grammy Awards dans des catégories différentes, un record qui témoigne de l'étendue de son talent. Son son cristallin, obtenu avec une guitare à cordes nylon et des effets de chorus, est immédiatement reconnaissable.

Avec le Pat Metheny Group, fondé en 1977 avec le claviériste Lyle Mays, il développe un jazz mélodique et lyrique, nourri de folk américain, de musique brésilienne et de rock progressif. Des albums comme Offramp, Still Life (Talking) et Letter from Home touchent un public bien au-delà des amateurs de jazz, sans jamais sacrifier l'exigence musicale.

Mais Metheny est aussi un aventurier. Ses collaborations avec Ornette Coleman (Song X), ses duos avec Charlie Haden, ses projets en solo à la guitare synthétique montrent un musicien constamment en mouvement, refuse de se laisser enfermer dans une seule esthétique.

L'Orchestrion, instrument mécanique qu'il contrôle seul en jouant de la guitare, illustre sa fascination pour la technologie au service de la musique. Metheny est un pont entre le jazz et un public large, prouvant que la beauté mélodique et la complexité musicale peuvent coexister.`,
    mainWorks: [
      "Bright Size Life",
      "(Cross the) Heartland",
      "Last Train Home",
      "Orchestrion",
    ],
    keyIdeas: ["Son cristallin", "Jazz mélodique", "Versatilité", "Technologie musicale"],
  },
  {
    id: "esperanza-spalding",
    name: "Esperanza Spalding",
    birthYear: 1984,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Esperanza_Spalding%2C_2009.jpg/330px-Esperanza_Spalding%2C_2009.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américaine",
    movement: "Jazz contemporain",
    summary: `Esperanza Spalding incarne le renouveau du jazz au XXIe siècle. Contrebassiste, chanteuse et compositrice, elle fusionne jazz, soul, R&B, bossa nova et musique classique avec une aisance qui témoigne d'une formation musicale exceptionnelle — elle enseigne au Berklee College of Music à seulement 20 ans.

En 2011, elle crée la surprise en remportant le Grammy du meilleur nouvel artiste, battant Justin Bieber et Drake. Cette victoire provoque un tollé chez les fans de pop mais place le jazz sous les projecteurs médiatiques, fait rare au XXIe siècle.

Son parcours est marqué par une volonté constante de repousser les frontières. Chamber Music Society mélange jazz et musique de chambre. Emily's D+Evolution est un concept album rock théâtral. Songwrights Apothecary Lab, son projet le plus ambitieux, crée des compositions basées sur des recherches en musicothérapie et en neurosciences.

Spalding représente un jazz qui refuse la nostalgie et l'embaumement. Métisse, femme, politiquement engagée, elle incarne une nouvelle génération qui revendique le jazz comme une musique vivante, ouverte et en perpétuelle transformation, fidèle à l'esprit d'innovation qui a toujours défini cette musique.`,
    mainWorks: [
      "Esperanza",
      "Chamber Music Society",
      "Emily's D+Evolution",
      "Songwrights Apothecary Lab",
    ],
    keyIdeas: ["Renouveau du jazz", "Fusion des genres", "Innovation", "Jazz vivant"],
  },
];
