export interface SlaveryItem {
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
}

export const slavery: SlaveryItem[] = [
  {
    id: "antiquite",
    name: "Esclavage antique",
    birthYear: -3000,
    deathYear: 500,
    nationality: "Méditerranéen",
    movement: "Antiquité",
    family: "Mondes anciens",
    summary:
      "L'esclavage est universel dans l'Antiquité : Mésopotamie, Égypte, Grèce, Rome. Les esclaves sont prisonniers de guerre, débiteurs ou nés de parents esclaves. À Rome, jusqu'à 30% de la population.",
    mainWorks: [
      "Esclavage domestique, agricole et minier",
      "Prisonniers de guerre et traite",
      "Affranchissement possible (Rome)",
      "Révoltes : Spartacus (-73)",
    ],
  },
  {
    id: "traite-arabe",
    name: "Traite arabo-musulmane",
    birthYear: 650,
    deathYear: 1920,
    nationality: "Arabe",
    movement: "Moyen Âge / Moderne",
    family: "Mondes anciens",
    influences: ["antiquite"],
    summary:
      "Pendant 13 siècles, traite d'esclaves africains vers le monde musulman : Maghreb, Égypte, Arabie, Perse, Inde. Estimations de 12-17 millions de personnes déportées. Officiellement abolie au XXe siècle.",
    mainWorks: [
      "Routes transsahariennes et maritimes",
      "12-17 millions d'Africains déportés",
      "Esclaves domestiques, soldats (mamelouks), concubines",
      "Abolition tardive (Arabie Saoudite 1962, Mauritanie 1981)",
    ],
  },
  {
    id: "servage-medieval",
    name: "Servage européen",
    birthYear: 500,
    deathYear: 1861,
    nationality: "Européen",
    movement: "Moyen Âge",
    family: "Mondes anciens",
    influences: ["antiquite"],
    summary:
      "En Europe médiévale, le servage remplace l'esclavage antique. Les serfs sont attachés à la terre, non libres mais protégés. Décline à l'Ouest dès le XIIe siècle, persiste en Russie jusqu'en 1861.",
    mainWorks: [
      "Serfs attachés à la terre (glèbe)",
      "Corvées et redevances au seigneur",
      "Disparition progressive en Europe occidentale",
      "Abolition en Russie (1861)",
    ],
  },
  {
    id: "traite-atlantique",
    name: "Traite atlantique",
    birthYear: 1500,
    deathYear: 1870,
    nationality: "Européen/Américain",
    movement: "Moderne",
    family: "Traite atlantique",
    influences: ["esclavage-portugais", "traite-arabe"],
    summary:
      "Commerce triangulaire : produits européens contre esclaves africains, déportés aux Amériques pour produire sucre, coton, café. 12-15 millions d'Africains déportés, des millions morts en transit.",
    mainWorks: [
      "Commerce triangulaire Europe-Afrique-Amériques",
      "12-15 millions d'Africains déportés",
      "Plantations sucrières et cotonnières",
      "Mortalité massive lors de la traversée",
    ],
  },
  {
    id: "esclavage-portugais",
    name: "Esclavage portugais",
    birthYear: 1441,
    deathYear: 1888,
    nationality: "Portugais",
    movement: "Moderne",
    family: "Traite atlantique",
    influences: ["traite-arabe"],
    summary:
      "Le Portugal initie la traite atlantique dès 1441. Brésil : plus grande destination d'esclaves (4-5 millions). Dernier pays occidental à abolir l'esclavage (1888).",
    mainWorks: [
      "Premiers à pratiquer la traite atlantique (1441)",
      "Brésil : 4-5 millions d'Africains déportés",
      "Plantations de canne à sucre et mines d'or",
      "Abolition au Brésil (1888)",
    ],
  },
  {
    id: "esclavage-espagnol",
    name: "Esclavage espagnol",
    birthYear: 1502,
    deathYear: 1886,
    nationality: "Espagnol",
    movement: "Moderne",
    family: "Traite atlantique",
    influences: ["esclavage-portugais"],
    summary:
      "L'Espagne introduit l'esclavage africain aux Amériques après le déclin des populations autochtones. Cuba et Porto Rico sont les derniers bastions. Abolition en 1886.",
    mainWorks: [
      "Remplacement de la main-d'œuvre indigène décimée",
      "Asiento : monopole de la traite",
      "Mines et plantations coloniales",
      "Abolition à Cuba (1886)",
    ],
  },
  {
    id: "esclavage-britannique",
    name: "Esclavage britannique",
    birthYear: 1562,
    deathYear: 1833,
    nationality: "Britannique",
    movement: "Moderne",
    family: "Traite atlantique",
    influences: ["traite-atlantique", "esclavage-espagnol"],
    summary:
      "La Grande-Bretagne domine la traite au XVIIIe siècle. Liverpool, Bristol et Londres prospèrent du commerce triangulaire. Premier pays à abolir la traite (1807) puis l'esclavage (1833).",
    mainWorks: [
      "Domination de la traite au XVIIIe siècle",
      "Caraïbes britanniques : Jamaïque, Barbade",
      "Abolition de la traite (1807)",
      "Abolition de l'esclavage (1833)",
    ],
  },
  {
    id: "esclavage-francais",
    name: "Esclavage français",
    birthYear: 1625,
    deathYear: 1848,
    nationality: "Français",
    movement: "Moderne",
    family: "Traite atlantique",
    influences: ["traite-atlantique"],
    summary:
      "La France pratique l'esclavage dans ses colonies caribéennes (Saint-Domingue, Martinique, Guadeloupe). Code noir (1685). Première abolition en 1794, rétabli par Napoléon, aboli définitivement en 1848.",
    mainWorks: [
      "Code noir (1685) - statut juridique des esclaves",
      "Saint-Domingue : première colonie sucrière mondiale",
      "Première abolition (1794), rétablissement (1802)",
      "Abolition définitive (1848)",
    ],
  },
  {
    id: "revolution-haitienne",
    name: "Révolution haïtienne",
    birthYear: 1791,
    deathYear: 1804,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Battle_for_Palm_Tree_Hill.jpg/330px-Battle_for_Palm_Tree_Hill.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Haïtien",
    movement: "Abolition",
    family: "Abolitions",
    influences: ["esclavage-francais", "mouvement-abolitionniste"],
    summary:
      "Seule révolte d'esclaves réussie de l'histoire. Toussaint Louverture puis Dessalines libèrent Saint-Domingue. Haïti, première république noire (1804). Inspire les mouvements abolitionnistes.",
    mainWorks: [
      "Révolte des esclaves (1791)",
      "Toussaint Louverture - leader de la révolution",
      "Indépendance d'Haïti (1804)",
      "Première république noire libre",
    ],
  },
  {
    id: "mouvement-abolitionniste",
    name: "Mouvement abolitionniste",
    birthYear: 1787,
    deathYear: 1888,
    nationality: "International",
    movement: "Abolition",
    family: "Abolitions",
    influences: ["traite-atlantique", "esclavage-britannique"],
    summary:
      "Mouvement né en Grande-Bretagne (Wilberforce, Clarkson) qui obtient l'abolition de la traite puis de l'esclavage. Quakers, évangéliques et libéraux unissent leurs forces.",
    mainWorks: [
      "Society for Effecting the Abolition of the Slave Trade (1787)",
      "William Wilberforce - campagne parlementaire",
      "Pétitions et boycotts du sucre esclavagiste",
      "Abolitions successives en Europe et Amériques",
    ],
  },
  {
    id: "esclavage-americain",
    name: "Esclavage aux États-Unis",
    birthYear: 1619,
    deathYear: 1865,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/United_States_slave_trade%2C_1830.jpg/330px-United_States_slave_trade%2C_1830.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Moderne",
    family: "États-Unis",
    influences: ["traite-atlantique", "esclavage-britannique"],
    summary:
      "L'esclavage structure l'économie du Sud (coton, tabac). 4 millions d'esclaves en 1860. La question de l'esclavage divise le pays et mène à la guerre civile. Abolition par le 13e amendement.",
    mainWorks: [
      "Premiers esclaves africains à Jamestown (1619)",
      "Économie de plantation (coton, tabac)",
      "Guerre de Sécession (1861-1865)",
      "13e amendement - abolition (1865)",
    ],
  },
  {
    id: "underground-railroad",
    name: "Underground Railroad",
    birthYear: 1810,
    deathYear: 1865,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Undergroundrailroadsmall2.jpg/330px-Undergroundrailroadsmall2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Abolition",
    family: "États-Unis",
    influences: ["esclavage-americain", "mouvement-abolitionniste"],
    summary:
      "Réseau clandestin d'évasion pour les esclaves fuyant le Sud vers le Nord et le Canada. Harriet Tubman, ancienne esclave, guide plus de 70 personnes vers la liberté.",
    mainWorks: [
      "Réseau secret de refuges et de guides",
      "Harriet Tubman - 'Moïse noire'",
      "Environ 100 000 esclaves aidés à fuir",
      "Frederick Douglass - orateur et écrivain",
    ],
  },
  {
    id: "guerre-secession",
    name: "Guerre de Sécession",
    birthYear: 1861,
    deathYear: 1865,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/American_Civil_War_Montage_2.jpg/330px-American_Civil_War_Montage_2.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Abolition",
    family: "États-Unis",
    influences: ["esclavage-americain", "mouvement-abolitionniste"],
    summary:
      "Guerre civile américaine entre le Nord (Union) et le Sud (Confédérés). L'esclavage est la cause profonde. Proclamation d'émancipation (1863) de Lincoln. Victoire du Nord et abolition.",
    mainWorks: [
      "Sécession de 11 États du Sud",
      "Abraham Lincoln - président de l'Union",
      "Proclamation d'émancipation (1863)",
      "620 000 morts - guerre la plus meurtrière des USA",
    ],
  },
  {
    id: "reconstruction",
    name: "Reconstruction et Jim Crow",
    birthYear: 1865,
    deathYear: 1965,
    nationality: "Américain",
    movement: "Post-esclavage",
    family: "États-Unis",
    influences: ["guerre-secession"],
    summary:
      "Après l'abolition, la Reconstruction accorde des droits aux Noirs. Mais les lois Jim Crow (ségrégation) les privent de liberté réelle. Un siècle de discrimination jusqu'aux droits civiques.",
    mainWorks: [
      "13e, 14e, 15e amendements",
      "Lois Jim Crow - ségrégation (1877-1965)",
      "Ku Klux Klan - terreur raciste",
      "Un siècle de lutte pour l'égalité",
    ],
  },
  {
    id: "esclavage-colonial-afrique",
    name: "Travail forcé colonial",
    birthYear: 1885,
    deathYear: 1960,
    nationality: "Européen",
    movement: "Contemporain",
    family: "Héritages contemporains",
    summary:
      "Si l'esclavage est aboli, le colonialisme impose le travail forcé en Afrique. Congo belge de Léopold II : millions de morts. Travail obligé jusqu'aux indépendances.",
    mainWorks: [
      "Congo belge - atrocités de Léopold II",
      "Travail forcé dans les colonies françaises, portugaises",
      "Construction de routes et chemins de fer",
      "Fin avec les indépendances (1960s)",
    ],
  },
  {
    id: "esclavage-moderne",
    name: "Esclavage moderne",
    birthYear: 1990,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Modern_incidence_of_slavery.png/330px-Modern_incidence_of_slavery.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Global",
    movement: "Contemporain",
    family: "Héritages contemporains",
    summary:
      "L'esclavage persiste au XXIe siècle sous diverses formes : traite des êtres humains, travail forcé, esclavage domestique, exploitation sexuelle. 50 millions de victimes estimées dans le monde.",
    mainWorks: [
      "Traite des êtres humains",
      "Travail forcé et servitude pour dettes",
      "Exploitation sexuelle",
      "50 millions de victimes estimées (OIT, 2021)",
    ],
  },
  {
    id: "reparations",
    name: "Débats sur les réparations",
    birthYear: 2000,
    nationality: "Global",
    movement: "Contemporain",
    family: "Héritages contemporains",
    influences: ["traite-atlantique", "esclavage-americain"],
    summary:
      "Mouvements demandant réparations pour l'esclavage et la colonisation. La CARICOM réclame des réparations aux anciennes puissances coloniales. Débats sur la mémoire et la reconnaissance.",
    mainWorks: [
      "Conférence de Durban (2001)",
      "CARICOM - demande de réparations",
      "Loi Taubira (France, 2001) - crime contre l'humanité",
      "Débats sur la mémoire coloniale",
    ],
  },
];
