export interface PoliticalMovementItem {
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

export const politicalMovements: PoliticalMovementItem[] = [
  {
    id: "republique-romaine",
    name: "Republique romaine",
    birthYear: -509,
    deathYear: -27,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Cato_Volubilis.jpg/220px-Cato_Volubilis.jpg",
    nationality: "Romain",
    movement: "Antiquite",
    summary:
      "Premiere grande republique de l'histoire, Rome developpe des institutions (Senat, consuls, tribuns) qui influenceront durablement la pensee politique occidentale. Modele de gouvernement mixte.",
    mainWorks: [
      "Senat et magistratures electives",
      "Separation des pouvoirs (potestas)",
      "Tribuns de la plebe - representation populaire",
      "Droit romain et citoyennete",
    ],
  },
  {
    id: "protestantisme",
    name: "Reforme protestante",
    birthYear: 1517,
    deathYear: 1648,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Lucas_Cranach_the_Elder_-_Martin_Luther.jpg/220px-Lucas_Cranach_the_Elder_-_Martin_Luther.jpg",
    nationality: "Europeen",
    movement: "Renaissance",
    summary:
      "Mouvement religieux initie par Luther qui bouleverse l'ordre politique europeen. En remettant en cause l'autorite papale, il ouvre la voie a la liberte de conscience et aux guerres de religion.",
    mainWorks: [
      "95 theses de Luther (1517)",
      "Calvinisme et predestination",
      "Guerres de religion en Europe",
      "Paix de Westphalie (1648)",
    ],
  },
  {
    id: "absolutisme",
    name: "Absolutisme",
    birthYear: 1589,
    deathYear: 1789,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Louis_XIV_of_France.jpg/220px-Louis_XIV_of_France.jpg",
    nationality: "Europeen",
    movement: "Ancien Regime",
    summary:
      "Doctrine politique ou le monarque detient tous les pouvoirs de droit divin. Louis XIV en est l'incarnation : 'L'Etat, c'est moi'. Systeme dominant en Europe jusqu'aux revolutions.",
    mainWorks: [
      "Monarchie de droit divin",
      "Centralisation administrative",
      "Louis XIV - modele du roi absolu",
      "Versailles - symbole du pouvoir royal",
    ],
  },
  {
    id: "lumieres",
    name: "Lumieres",
    birthYear: 1715,
    deathYear: 1789,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Voltaire-Houdon.jpg/220px-Voltaire-Houdon.jpg",
    nationality: "Europeen",
    movement: "XVIIIe siecle",
    summary:
      "Mouvement intellectuel qui promeut la raison, la liberte et le progres contre l'obscurantisme. Voltaire, Rousseau, Montesquieu posent les bases philosophiques des revolutions a venir.",
    mainWorks: [
      "Encyclopedie de Diderot et d'Alembert",
      "Separation des pouvoirs (Montesquieu)",
      "Contrat social (Rousseau)",
      "Tolerance et liberte d'expression (Voltaire)",
    ],
  },
  {
    id: "liberalisme",
    name: "Liberalisme",
    birthYear: 1689,
    deathYear: 1900,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/John_Locke.jpg/220px-John_Locke.jpg",
    nationality: "Anglo-saxon",
    movement: "Modernite",
    summary:
      "Philosophie politique fondee sur la liberte individuelle, les droits naturels et le gouvernement limite. De Locke a Mill, il inspire les revolutions americaine et francaise.",
    mainWorks: [
      "Droits naturels et consentement (Locke)",
      "Liberte economique (Adam Smith)",
      "Declaration des droits de l'homme",
      "De la liberte (John Stuart Mill)",
    ],
  },
  {
    id: "revolution-americaine",
    name: "Revolution americaine",
    birthYear: 1765,
    deathYear: 1791,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg/220px-Declaration_of_Independence.jpg",
    nationality: "Americain",
    movement: "Revolutions",
    summary:
      "Premiere revolution moderne, les colonies americaines s'emancipent de la Grande-Bretagne. La Declaration d'independance et la Constitution etablissent une republique federale democratique.",
    mainWorks: [
      "Declaration d'independance (1776)",
      "Constitution federale (1787)",
      "Bill of Rights (1791)",
      "Republique federale et separation des pouvoirs",
    ],
  },
  {
    id: "revolution-francaise",
    name: "Revolution francaise",
    birthYear: 1789,
    deathYear: 1799,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Prise_de_la_Bastille.jpg/220px-Prise_de_la_Bastille.jpg",
    nationality: "Francais",
    movement: "Revolutions",
    summary:
      "Bouleversement radical qui abolit la monarchie absolue et les privileges. Declaration des droits de l'homme, Terreur, Directoire : elle transforme definitivement la politique moderne.",
    mainWorks: [
      "Prise de la Bastille (14 juillet 1789)",
      "Declaration des droits de l'homme et du citoyen",
      "Abolition de la monarchie (1792)",
      "Terreur et thermidor",
    ],
  },
  {
    id: "nationalisme",
    name: "Nationalisme",
    birthYear: 1789,
    deathYear: 1945,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/220px-La_liberte_guidant_le_peuple.jpg",
    nationality: "Europeen",
    movement: "XIXe siecle",
    summary:
      "Ideologie qui fait de la nation le cadre legitime du pouvoir politique. Moteur des unifications italienne et allemande, il degenerera en nationalismes agressifs au XXe siecle.",
    mainWorks: [
      "Printemps des peuples (1848)",
      "Unification italienne (Risorgimento)",
      "Unification allemande (Bismarck)",
      "Nationalismes et guerres mondiales",
    ],
  },
  {
    id: "socialisme",
    name: "Socialisme",
    birthYear: 1825,
    deathYear: 1991,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Robert_Owen_by_John_Cranch%2C_1845.jpg/220px-Robert_Owen.jpg",
    nationality: "Europeen",
    movement: "XIXe-XXe siecles",
    summary:
      "Mouvement ne de la question ouvriere, il critique le capitalisme et prone la propriete collective. Du socialisme utopique a Marx, il inspire syndicats et partis ouvriers.",
    mainWorks: [
      "Socialistes utopiques (Owen, Fourier, Saint-Simon)",
      "Manifeste du Parti communiste (Marx, 1848)",
      "Internationale ouvriere",
      "Social-democratie et Etat-providence",
    ],
  },
  {
    id: "marxisme",
    name: "Marxisme",
    birthYear: 1848,
    deathYear: 1991,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/220px-Karl_Marx_001.jpg",
    nationality: "Allemand",
    movement: "XIXe-XXe siecles",
    summary:
      "Theorie de Marx et Engels analysant l'histoire comme lutte des classes. Le capitalisme doit etre renverse par la revolution proletarienne. Base du communisme au XXe siecle.",
    mainWorks: [
      "Materialisme historique",
      "Le Capital (1867)",
      "Dictature du proletariat",
      "Revolution bolchevique (1917)",
    ],
  },
  {
    id: "anarchisme",
    name: "Anarchisme",
    birthYear: 1840,
    deathYear: 1939,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Pierre_Joseph_Proudhon.jpg/220px-Pierre_Joseph_Proudhon.jpg",
    nationality: "Europeen",
    movement: "XIXe siecle",
    summary:
      "Philosophie politique rejetant toute forme d'autorite coercitive, notamment l'Etat. De Proudhon a Bakounine, il prone l'auto-organisation et influencera le syndicalisme revolutionnaire.",
    mainWorks: [
      "Qu'est-ce que la propriete? (Proudhon, 1840)",
      "Anarcho-collectivisme (Bakounine)",
      "Anarcho-communisme (Kropotkine)",
      "CNT et guerre d'Espagne",
    ],
  },
  {
    id: "imperialisme",
    name: "Imperialisme colonial",
    birthYear: 1880,
    deathYear: 1960,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Scramble_for_Africa_1880_1914.png/220px-Scramble_for_Africa_1880_1914.png",
    nationality: "Europeen",
    movement: "XIXe-XXe siecles",
    summary:
      "Expansion des puissances europeennes sur le monde, justifiee par la 'mission civilisatrice'. Partage de l'Afrique, domination de l'Asie, exploitation des ressources et des peuples.",
    mainWorks: [
      "Conference de Berlin - partage de l'Afrique (1884)",
      "Empires coloniaux britannique, francais, belge",
      "Mission civilisatrice et racisme",
      "Decolonisation apres 1945",
    ],
  },
  {
    id: "fascisme",
    name: "Fascisme",
    birthYear: 1919,
    deathYear: 1945,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Benito_Mussolini_crop.jpg/220px-Benito_Mussolini_crop.jpg",
    nationality: "Italien/Allemand",
    movement: "XXe siecle",
    summary:
      "Ideologie totalitaire, ultranationaliste et antidemocratique. Mussolini en Italie, Hitler en Allemagne etablissent des regimes de terreur qui meneront a la Seconde Guerre mondiale et a la Shoah.",
    mainWorks: [
      "Marche sur Rome (1922)",
      "Nazisme et ideologie raciale",
      "Totalitarisme et culte du chef",
      "Shoah et crimes contre l'humanite",
    ],
  },
  {
    id: "communisme-sovietique",
    name: "Communisme sovietique",
    birthYear: 1917,
    deathYear: 1991,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Bundesarchiv_Bild_183-71043-0003%2C_Wladimir_Iljitsch_Lenin.jpg/220px-Lenin.jpg",
    nationality: "Sovietique",
    movement: "XXe siecle",
    summary:
      "Application du marxisme-leninisme en URSS. Parti unique, economie planifiee, terreur stalinienne. Modele exporte dans le monde entier pendant la Guerre froide, jusqu'a l'effondrement de 1991.",
    mainWorks: [
      "Revolution d'Octobre (1917)",
      "Stalinisme et Goulag",
      "Economie planifiee et collectivisation",
      "Chute du mur de Berlin et dissolution de l'URSS",
    ],
  },
  {
    id: "anticolonialisme",
    name: "Anticolonialisme",
    birthYear: 1945,
    deathYear: 1975,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Mahatma-Gandhi%2C_studio%2C_1931.jpg/220px-Mahatma-Gandhi.jpg",
    nationality: "Global",
    movement: "XXe siecle",
    summary:
      "Mouvements de liberation des peuples colonises apres 1945. De l'Inde a l'Algerie, du Vietnam au Congo, les empires coloniaux s'effondrent. Emergence du tiers-monde et du non-alignement.",
    mainWorks: [
      "Independance de l'Inde (1947)",
      "Guerre d'Algerie (1954-1962)",
      "Conference de Bandung (1955)",
      "Decolonisation de l'Afrique",
    ],
  },
  {
    id: "neoliberalisme",
    name: "Neoliberalisme",
    birthYear: 1979,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Official_Portrait_of_President_Reagan_1981.jpg/220px-Reagan_1981.jpg",
    nationality: "Anglo-saxon",
    movement: "Fin XXe siecle",
    summary:
      "Doctrine economique et politique pronant la deregulation, les privatisations et le libre marche. Thatcher et Reagan l'imposent, il devient dominant apres la chute du communisme.",
    mainWorks: [
      "Revolution conservatrice (Thatcher, Reagan)",
      "Consensus de Washington",
      "Mondialisation et libre-echange",
      "Privatisations et deregulation",
    ],
  },
  {
    id: "ecologisme",
    name: "Ecologisme politique",
    birthYear: 1970,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Earth_Day_Flag.png/220px-Earth_Day_Flag.png",
    nationality: "Global",
    movement: "XXe-XXIe siecles",
    summary:
      "Mouvement politique ne de la prise de conscience environnementale. Des Verts allemands aux accords de Paris, l'ecologie politique devient un enjeu majeur face au changement climatique.",
    mainWorks: [
      "Jour de la Terre (1970)",
      "Rapport Meadows - limites de la croissance (1972)",
      "Partis Verts en Europe",
      "Accords de Paris sur le climat (2015)",
    ],
  },
  {
    id: "populisme",
    name: "Populisme contemporain",
    birthYear: 2008,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Brexit_day_-_geograph.org.uk.jpg/220px-Brexit_day.jpg",
    nationality: "Global",
    movement: "XXIe siecle",
    summary:
      "Resurgence de mouvements opposant le 'peuple' aux 'elites'. De droite ou de gauche, ils contestent la mondialisation et les institutions. Brexit, Trump, montee des extremes en Europe.",
    mainWorks: [
      "Crise financiere de 2008",
      "Brexit (2016)",
      "Election de Trump (2016)",
      "Montee des partis populistes en Europe",
    ],
  },
];
