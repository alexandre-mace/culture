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
    summary:
      "Figure legendaire consideree comme le premier musicien de jazz. Son cornet puissant fait danser la Nouvelle-Orleans. Aucun enregistrement n'a survecu, mais sa legende persiste.",
    mainWorks: [
      "Premier 'roi' du jazz a la Nouvelle-Orleans",
      "Style de cornet improvisateur",
      "Influence sur une generation de musiciens",
      "Interne en 1907, jamais enregistre",
    ],
  },
  {
    id: "jelly-roll-morton",
    name: "Jelly Roll Morton",
    birthYear: 1890,
    deathYear: 1941,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Jelly_Roll_Morton_%281926%29.jpg/220px-Jelly_Roll_Morton_%281926%29.jpg",
    nationality: "Americain",
    movement: "Jazz Nouvelle-Orleans",
    summary:
      "Pianiste et compositeur se proclamant inventeur du jazz. Ses Red Hot Peppers fusionnent ragtime et improvisation. Premier grand arrangeur de jazz.",
    mainWorks: [
      "Black Bottom Stomp",
      "King Porter Stomp",
      "Red Hot Peppers sessions",
      "Entretiens avec Alan Lomax",
    ],
  },
  {
    id: "louis-armstrong",
    name: "Louis Armstrong",
    birthYear: 1901,
    deathYear: 1971,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Louis_Armstrong_restored.jpg/220px-Louis_Armstrong_restored.jpg",
    nationality: "Americain",
    movement: "Jazz classique",
    summary:
      "Plus grande figure du jazz, il invente le solo improvise moderne. Sa trompette virtuose et sa voix rauque en font une star mondiale. De la Nouvelle-Orleans a ambassadeur du jazz.",
    mainWorks: [
      "West End Blues",
      "What a Wonderful World",
      "Hot Five et Hot Seven sessions",
      "Hello, Dolly!",
    ],
  },
  {
    id: "duke-ellington",
    name: "Duke Ellington",
    birthYear: 1899,
    deathYear: 1974,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Duke_Ellington_-_publicity.JPG/220px-Duke_Ellington_-_publicity.JPG",
    nationality: "Americain",
    movement: "Big Band / Swing",
    summary:
      "Compositeur et chef d'orchestre, il eleve le jazz au rang d'art majeur. Son orchestre au Cotton Club cree un son unique. Plus de 1000 compositions en 50 ans de carriere.",
    mainWorks: [
      "Take the 'A' Train",
      "Mood Indigo",
      "Black, Brown and Beige",
      "In a Sentimental Mood",
    ],
  },
  {
    id: "count-basie",
    name: "Count Basie",
    birthYear: 1904,
    deathYear: 1984,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Count_Basie_%281955_Kriegsmann_portrait%29.jpg/220px-Count_Basie_%281955_Kriegsmann_portrait%29.jpg",
    nationality: "Americain",
    movement: "Big Band / Swing",
    summary:
      "Pianiste et chef d'orchestre de Kansas City, son style epure et swinguant influence tout le jazz moderne. Son orchestre reste la reference du big band pendant 50 ans.",
    mainWorks: [
      "One O'Clock Jump",
      "April in Paris",
      "Jumpin' at the Woodside",
      "Atomic Basie",
    ],
  },
  {
    id: "billie-holiday",
    name: "Billie Holiday",
    birthYear: 1915,
    deathYear: 1959,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Billie_Holiday_1947.jpg/220px-Billie_Holiday_1947.jpg",
    nationality: "Americaine",
    movement: "Jazz vocal",
    summary:
      "Lady Day revolutionne le chant jazz avec son phrasé unique et son emotion intense. Strange Fruit denonce le lynchage. Vie tragique marquee par les addictions.",
    mainWorks: [
      "Strange Fruit",
      "God Bless the Child",
      "Lady Sings the Blues",
      "Fine and Mellow",
    ],
  },
  {
    id: "ella-fitzgerald",
    name: "Ella Fitzgerald",
    birthYear: 1917,
    deathYear: 1996,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Ella_Fitzgerald_1962.jpg/220px-Ella_Fitzgerald_1962.jpg",
    nationality: "Americaine",
    movement: "Jazz vocal",
    summary:
      "First Lady of Song, sa technique vocale parfaite et son scat virtuose en font la plus grande chanteuse de jazz. Ses Songbooks celebrent les compositeurs americains.",
    mainWorks: [
      "A-Tisket, A-Tasket",
      "Summertime",
      "Great American Songbooks",
      "Mack the Knife (live Berlin)",
    ],
  },
  {
    id: "charlie-parker",
    name: "Charlie Parker",
    birthYear: 1920,
    deathYear: 1955,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Charlie_Parker%2C_Tommy_Potter%2C_Miles_Davis%2C_Max_Roach_%28Gottlieb_06941%29.jpg/220px-Charlie_Parker%2C_Tommy_Potter%2C_Miles_Davis%2C_Max_Roach_%28Gottlieb_06941%29.jpg",
    nationality: "Americain",
    movement: "Bebop",
    summary:
      "Bird revolutionne le jazz avec le bebop dans les annees 40. Sa virtuosite au saxophone alto et ses harmonies complexes creent un nouveau langage. Genie autodestucteur mort a 34 ans.",
    mainWorks: [
      "Ko-Ko",
      "Ornithology",
      "Confirmation",
      "Now's the Time",
    ],
  },
  {
    id: "dizzy-gillespie",
    name: "Dizzy Gillespie",
    birthYear: 1917,
    deathYear: 1993,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Dizzy_Gillespie_playing_horn_1955.jpg/220px-Dizzy_Gillespie_playing_horn_1955.jpg",
    nationality: "Americain",
    movement: "Bebop",
    summary:
      "Co-inventeur du bebop avec Parker, sa trompette coudee et ses joues gonflees sont iconiques. Pionnier du jazz afro-cubain, il integre les percussions latines au jazz.",
    mainWorks: [
      "A Night in Tunisia",
      "Salt Peanuts",
      "Manteca",
      "Groovin' High",
    ],
  },
  {
    id: "thelonious-monk",
    name: "Thelonious Monk",
    birthYear: 1917,
    deathYear: 1982,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Thelonious_Monk%2C_Minton%27s_Playhouse%2C_New_York%2C_N.Y.%2C_ca._Sept._1947_%28William_P._Gottlieb_06191%29.jpg/220px-Thelonious_Monk%2C_Minton%27s_Playhouse%2C_New_York%2C_N.Y.%2C_ca._Sept._1947_%28William_P._Gottlieb_06191%29.jpg",
    nationality: "Americain",
    movement: "Bebop",
    summary:
      "Pianiste et compositeur au style unique, anguleux et dissonant. Ses compositions deviennent des standards incontournables. High priest of bebop au style excentrique.",
    mainWorks: [
      "'Round Midnight",
      "Straight, No Chaser",
      "Blue Monk",
      "Brilliant Corners",
    ],
  },
  {
    id: "miles-davis",
    name: "Miles Davis",
    birthYear: 1926,
    deathYear: 1991,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Miles_Davis_by_Palumbo_cropped.jpg/220px-Miles_Davis_by_Palumbo_cropped.jpg",
    nationality: "Americain",
    movement: "Cool / Modal / Fusion",
    summary:
      "Trompettiste visionnaire, il reinvente le jazz a chaque decennie : cool jazz, hard bop, modal, fusion. Kind of Blue est l'album de jazz le plus vendu. Leader charismatique et provocateur.",
    mainWorks: [
      "Kind of Blue",
      "Bitches Brew",
      "Birth of the Cool",
      "Sketches of Spain",
    ],
  },
  {
    id: "john-coltrane",
    name: "John Coltrane",
    birthYear: 1926,
    deathYear: 1967,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/John_Coltrane_in_1963.jpg/220px-John_Coltrane_in_1963.jpg",
    nationality: "Americain",
    movement: "Hard Bop / Free Jazz",
    summary:
      "Saxophoniste a la quete spirituelle intense, il pousse le jazz vers de nouveaux horizons. Des sheets of sound au free jazz, chaque album est une exploration. Mort a 40 ans.",
    mainWorks: [
      "A Love Supreme",
      "Giant Steps",
      "My Favorite Things",
      "Blue Train",
    ],
  },
  {
    id: "dave-brubeck",
    name: "Dave Brubeck",
    birthYear: 1920,
    deathYear: 2012,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Dave_Brubeck_1954.jpg/220px-Dave_Brubeck_1954.jpg",
    nationality: "Americain",
    movement: "Cool Jazz",
    summary:
      "Pianiste du cool jazz, il popularise les mesures inhabituelles avec Time Out. Take Five en 5/4 devient un tube mondial. Jazz accessible et sophistique.",
    mainWorks: [
      "Take Five",
      "Blue Rondo a la Turk",
      "Time Out",
      "Time Further Out",
    ],
  },
  {
    id: "ornette-coleman",
    name: "Ornette Coleman",
    birthYear: 1930,
    deathYear: 2015,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Ornette_Coleman_%281971%29.jpg/220px-Ornette_Coleman_%281971%29.jpg",
    nationality: "Americain",
    movement: "Free Jazz",
    summary:
      "Saxophoniste revolutionnaire, il abolit les regles harmoniques avec le free jazz. The Shape of Jazz to Come annonce une nouvelle ere. Controverse puis celebre.",
    mainWorks: [
      "The Shape of Jazz to Come",
      "Free Jazz",
      "Lonely Woman",
      "Harmolodie (theorie)",
    ],
  },
  {
    id: "bill-evans",
    name: "Bill Evans",
    birthYear: 1929,
    deathYear: 1980,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Bill_Evans_%281975%29.jpg/220px-Bill_Evans_%281975%29.jpg",
    nationality: "Americain",
    movement: "Piano jazz moderne",
    summary:
      "Pianiste lyrique et introspectif, il redefinit le trio piano. Son jeu impressionniste et ses harmonies raffinées influencent des generations. Collaborateur cle de Kind of Blue.",
    mainWorks: [
      "Waltz for Debby",
      "Sunday at the Village Vanguard",
      "Peace Piece",
      "Kind of Blue (avec Miles Davis)",
    ],
  },
  {
    id: "charles-mingus",
    name: "Charles Mingus",
    birthYear: 1922,
    deathYear: 1979,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Charles_Mingus_1976.jpg/220px-Charles_Mingus_1976.jpg",
    nationality: "Americain",
    movement: "Post-Bop",
    summary:
      "Contrebassiste et compositeur colérique et genial. Ses oeuvres ambitieuses melent jazz, gospel, blues et musique classique. Militant pour les droits civiques.",
    mainWorks: [
      "Goodbye Pork Pie Hat",
      "Moanin'",
      "The Black Saint and the Sinner Lady",
      "Mingus Ah Um",
    ],
  },
  {
    id: "herbie-hancock",
    name: "Herbie Hancock",
    birthYear: 1940,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Herbie_Hancock_-_the_ass-kicker_%287707178994%29.jpg/220px-Herbie_Hancock_-_the_ass-kicker_%287707178994%29.jpg",
    nationality: "Americain",
    movement: "Jazz Fusion",
    summary:
      "Pianiste visionnaire, il passe du quintet de Miles Davis au jazz fusion puis a l'electro. Rockit popularise le scratch. Toujours innovant apres 60 ans de carriere.",
    mainWorks: [
      "Maiden Voyage",
      "Cantaloupe Island",
      "Rockit",
      "Head Hunters",
    ],
  },
  {
    id: "wayne-shorter",
    name: "Wayne Shorter",
    birthYear: 1933,
    deathYear: 2023,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Wayne_Shorter.jpg/220px-Wayne_Shorter.jpg",
    nationality: "Americain",
    movement: "Post-Bop / Fusion",
    summary:
      "Saxophoniste et compositeur majeur, des Jazz Messengers a Weather Report. Ses compositions enigmatiques sont devenues des standards. Influence profonde sur le jazz moderne.",
    mainWorks: [
      "Speak No Evil",
      "Footprints",
      "Juju",
      "Weather Report",
    ],
  },
  {
    id: "keith-jarrett",
    name: "Keith Jarrett",
    birthYear: 1945,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Keith_Jarrett.jpg/220px-Keith_Jarrett.jpg",
    nationality: "Americain",
    movement: "Piano jazz contemporain",
    summary:
      "Pianiste virtuose aux concerts improvises legendaires. Le Koln Concert est l'album de piano solo le plus vendu. Perfectionniste et temperamental.",
    mainWorks: [
      "The Koln Concert",
      "Standards Trio",
      "My Song",
      "La Scala",
    ],
  },
  {
    id: "pat-metheny",
    name: "Pat Metheny",
    birthYear: 1954,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Pat_Metheny_01.jpg/220px-Pat_Metheny_01.jpg",
    nationality: "Americain",
    movement: "Jazz contemporain",
    summary:
      "Guitariste le plus recompense du jazz, son son cristallin et ses compositions melodiques touchent un large public. Du Pat Metheny Group aux projets avant-gardistes.",
    mainWorks: [
      "Bright Size Life",
      "(Cross the) Heartland",
      "Last Train Home",
      "Orchestrion",
    ],
  },
  {
    id: "esperanza-spalding",
    name: "Esperanza Spalding",
    birthYear: 1984,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Esperanza_Spalding_2011.jpg/220px-Esperanza_Spalding_2011.jpg",
    nationality: "Americaine",
    movement: "Jazz contemporain",
    summary:
      "Contrebassiste, chanteuse et compositrice, elle incarne le renouveau du jazz au XXIe siecle. Grammy du meilleur nouvel artiste 2011, battant Justin Bieber. Jazz, soul, R&B fusionnes.",
    mainWorks: [
      "Esperanza",
      "Chamber Music Society",
      "Emily's D+Evolution",
      "Songwrights Apothecary Lab",
    ],
  },
];
