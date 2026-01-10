export interface SlaveryItem {
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

export const slavery: SlaveryItem[] = [
  {
    id: "antiquite",
    name: "Esclavage antique",
    birthYear: -3000,
    deathYear: 500,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Spartacus_by_Denis_Foyatier.jpg/220px-Spartacus.jpg",
    nationality: "Mediterraneen",
    movement: "Antiquite",
    summary:
      "L'esclavage est universel dans l'Antiquite : Mesopotamie, Egypte, Grece, Rome. Les esclaves sont prisonniers de guerre, debiteurs ou nes de parents esclaves. A Rome, jusqu'a 30% de la population.",
    mainWorks: [
      "Esclavage domestique, agricole et minier",
      "Prisonniers de guerre et traite",
      "Affranchissement possible (Rome)",
      "Revoltes : Spartacus (-73)",
    ],
  },
  {
    id: "traite-arabe",
    name: "Traite arabo-musulmane",
    birthYear: 650,
    deathYear: 1920,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Slaves_Zadib_Yemen_13th_century_BNF_Paris.jpg/220px-Slaves_Yemen.jpg",
    nationality: "Arabe",
    movement: "Moyen Age / Moderne",
    summary:
      "Pendant 13 siecles, traite d'esclaves africains vers le monde musulman : Maghreb, Egypte, Arabie, Perse, Inde. Estimations de 12-17 millions de personnes deportees. Officiellement abolie au XXe siecle.",
    mainWorks: [
      "Routes transsahariennes et maritimes",
      "12-17 millions d'Africains deportes",
      "Esclaves domestiques, soldats (mamelouks), concubines",
      "Abolition tardive (Arabie Saoudite 1962, Mauritanie 1981)",
    ],
  },
  {
    id: "servage-medieval",
    name: "Servage europeen",
    birthYear: 500,
    deathYear: 1861,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_mars.jpg/220px-Tres_Riches_Heures.jpg",
    nationality: "Europeen",
    movement: "Moyen Age",
    summary:
      "En Europe medievale, le servage remplace l'esclavage antique. Les serfs sont attaches a la terre, non libres mais proteges. Decline a l'Ouest des le XIIe siecle, persiste en Russie jusqu'en 1861.",
    mainWorks: [
      "Serfs attaches a la terre (glebe)",
      "Corvees et redevances au seigneur",
      "Disparition progressive en Europe occidentale",
      "Abolition en Russie (1861)",
    ],
  },
  {
    id: "traite-atlantique",
    name: "Traite atlantique",
    birthYear: 1500,
    deathYear: 1870,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Slaveshipposter.jpg/220px-Slaveshipposter.jpg",
    nationality: "Europeen/Americain",
    movement: "Moderne",
    summary:
      "Commerce triangulaire : produits europeens contre esclaves africains, deportes aux Ameriques pour produire sucre, coton, cafe. 12-15 millions d'Africains deportes, des millions morts en transit.",
    mainWorks: [
      "Commerce triangulaire Europe-Afrique-Ameriques",
      "12-15 millions d'Africains deportes",
      "Plantations sucrieres et cotonnieres",
      "Mortalite massive lors de la traversee",
    ],
  },
  {
    id: "esclavage-portugais",
    name: "Esclavage portugais",
    birthYear: 1441,
    deathYear: 1888,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Slaves_in_Brazil_painting.jpg/220px-Slaves_Brazil.jpg",
    nationality: "Portugais",
    movement: "Moderne",
    summary:
      "Le Portugal initie la traite atlantique des 1441. Bresil : plus grande destination d'esclaves (4-5 millions). Dernier pays occidental a abolir l'esclavage (1888).",
    mainWorks: [
      "Premiers a pratiquer la traite atlantique (1441)",
      "Bresil : 4-5 millions d'Africains deportes",
      "Plantations de canne a sucre et mines d'or",
      "Abolition au Bresil (1888)",
    ],
  },
  {
    id: "esclavage-espagnol",
    name: "Esclavage espagnol",
    birthYear: 1502,
    deathYear: 1886,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Diego_Velazquez%2C_Juan_de_Pareja.jpg/220px-Juan_de_Pareja.jpg",
    nationality: "Espagnol",
    movement: "Moderne",
    summary:
      "L'Espagne introduit l'esclavage africain aux Ameriques apres le declin des populations autochtones. Cuba et Porto Rico sont les derniers bastions. Abolition en 1886.",
    mainWorks: [
      "Remplacement de la main-d'oeuvre indigene decimes",
      "Asiento : monopole de la traite",
      "Mines et plantations coloniales",
      "Abolition a Cuba (1886)",
    ],
  },
  {
    id: "esclavage-britannique",
    name: "Esclavage britannique",
    birthYear: 1562,
    deathYear: 1833,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Official_medallion_of_the_British_Anti-Slavery_Society_%281795%29.jpg/220px-Anti-Slavery_medallion.jpg",
    nationality: "Britannique",
    movement: "Moderne",
    summary:
      "La Grande-Bretagne domine la traite au XVIIIe siecle. Liverpool, Bristol et Londres prosperent du commerce triangulaire. Premier pays a abolir la traite (1807) puis l'esclavage (1833).",
    mainWorks: [
      "Domination de la traite au XVIIIe siecle",
      "Caraibes britanniques : Jamaique, Barbade",
      "Abolition de la traite (1807)",
      "Abolition de l'esclavage (1833)",
    ],
  },
  {
    id: "esclavage-francais",
    name: "Esclavage francais",
    birthYear: 1625,
    deathYear: 1848,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Code_Noir.jpg/220px-Code_Noir.jpg",
    nationality: "Francais",
    movement: "Moderne",
    summary:
      "La France pratique l'esclavage dans ses colonies caribeennes (Saint-Domingue, Martinique, Guadeloupe). Code noir (1685). Premiere abolition en 1794, retabli par Napoleon, aboli definitivement en 1848.",
    mainWorks: [
      "Code noir (1685) - statut juridique des esclaves",
      "Saint-Domingue : premiere colonie sucriere mondiale",
      "Premiere abolition (1794), retablissement (1802)",
      "Abolition definitive (1848)",
    ],
  },
  {
    id: "revolution-haitienne",
    name: "Revolution haitienne",
    birthYear: 1791,
    deathYear: 1804,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Toussaint_L%27Ouverture.jpg/220px-Toussaint_L%27Ouverture.jpg",
    nationality: "Haitien",
    movement: "Abolition",
    summary:
      "Seule revolte d'esclaves reussie de l'histoire. Toussaint Louverture puis Dessalines liberent Saint-Domingue. Haiti, premiere republique noire (1804). Inspire les mouvements abolitionnistes.",
    mainWorks: [
      "Revolte des esclaves (1791)",
      "Toussaint Louverture - leader de la revolution",
      "Independance d'Haiti (1804)",
      "Premiere republique noire libre",
    ],
  },
  {
    id: "mouvement-abolitionniste",
    name: "Mouvement abolitionniste",
    birthYear: 1787,
    deathYear: 1888,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/William_wilberforce.jpg/220px-William_wilberforce.jpg",
    nationality: "International",
    movement: "Abolition",
    summary:
      "Mouvement ne en Grande-Bretagne (Wilberforce, Clarkson) qui obtient l'abolition de la traite puis de l'esclavage. Quakers, evangeliques et liberaux unissent leurs forces.",
    mainWorks: [
      "Society for Effecting the Abolition of the Slave Trade (1787)",
      "William Wilberforce - campagne parlementaire",
      "Petitions et boycotts du sucre esclavagiste",
      "Abolitions successives en Europe et Ameriques",
    ],
  },
  {
    id: "esclavage-americain",
    name: "Esclavage aux Etats-Unis",
    birthYear: 1619,
    deathYear: 1865,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Slave_sale%2C_Charleston%2C_South_Carolina.jpg/220px-Slave_sale_Charleston.jpg",
    nationality: "Americain",
    movement: "Moderne",
    summary:
      "L'esclavage structure l'economie du Sud (coton, tabac). 4 millions d'esclaves en 1860. La question de l'esclavage divise le pays et mene a la guerre civile. Abolition par le 13e amendement.",
    mainWorks: [
      "Premiers esclaves africains a Jamestown (1619)",
      "Economie de plantation (coton, tabac)",
      "Guerre de Secession (1861-1865)",
      "13e amendement - abolition (1865)",
    ],
  },
  {
    id: "underground-railroad",
    name: "Underground Railroad",
    birthYear: 1810,
    deathYear: 1865,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Harriet_Tubman_c1868-69.jpg/220px-Harriet_Tubman.jpg",
    nationality: "Americain",
    movement: "Abolition",
    summary:
      "Reseau clandestin d'evasion pour les esclaves fuyant le Sud vers le Nord et le Canada. Harriet Tubman, ancienne esclave, guide plus de 70 personnes vers la liberte.",
    mainWorks: [
      "Reseau secret de refuges et de guides",
      "Harriet Tubman - 'Moise noire'",
      "Environ 100 000 esclaves aides a fuir",
      "Frederick Douglass - orateur et ecrivain",
    ],
  },
  {
    id: "guerre-secession",
    name: "Guerre de Secession",
    birthYear: 1861,
    deathYear: 1865,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Abraham_Lincoln_head_on_shoulders_photo_portrait.jpg/220px-Abraham_Lincoln.jpg",
    nationality: "Americain",
    movement: "Abolition",
    summary:
      "Guerre civile americaine entre le Nord (Union) et le Sud (Confederes). L'esclavage est la cause profonde. Proclamation d'emancipation (1863) de Lincoln. Victoire du Nord et abolition.",
    mainWorks: [
      "Secession de 11 Etats du Sud",
      "Abraham Lincoln - president de l'Union",
      "Proclamation d'emancipation (1863)",
      "620 000 morts - guerre la plus meurtriere des USA",
    ],
  },
  {
    id: "reconstruction",
    name: "Reconstruction et Jim Crow",
    birthYear: 1865,
    deathYear: 1965,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/JimCrowInDurhamNC.jpg/220px-JimCrowInDurhamNC.jpg",
    nationality: "Americain",
    movement: "Post-esclavage",
    summary:
      "Apres l'abolition, la Reconstruction accorde des droits aux Noirs. Mais les lois Jim Crow (segregation) les privent de liberte reelle. Un siecle de discrimination jusqu'aux droits civiques.",
    mainWorks: [
      "13e, 14e, 15e amendements",
      "Lois Jim Crow - segregation (1877-1965)",
      "Ku Klux Klan - terreur raciste",
      "Un siecle de lutte pour l'egalite",
    ],
  },
  {
    id: "esclavage-colonial-afrique",
    name: "Travail force colonial",
    birthYear: 1885,
    deathYear: 1960,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Nsala_of_Wala_in_Congo_looks_at_the_severed_hand_and_foot_of_his_five-year_old_daughter%2C_1904.jpg/220px-Nsala_Congo.jpg",
    nationality: "Europeen",
    movement: "Contemporain",
    summary:
      "Si l'esclavage est aboli, le colonialisme impose le travail force en Afrique. Congo belge de Leopold II : millions de morts. Travail oblige jusqu'aux independances.",
    mainWorks: [
      "Congo belge - atrocites de Leopold II",
      "Travail force dans les colonies francaises, portugaises",
      "Construction de routes et chemins de fer",
      "Fin avec les independances (1960s)",
    ],
  },
  {
    id: "esclavage-moderne",
    name: "Esclavage moderne",
    birthYear: 1990,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Human_trafficking.jpg/220px-Human_trafficking.jpg",
    nationality: "Global",
    movement: "Contemporain",
    summary:
      "L'esclavage persiste au XXIe siecle sous diverses formes : traite des etres humains, travail force, esclavage domestique, exploitation sexuelle. 50 millions de victimes estimees dans le monde.",
    mainWorks: [
      "Traite des etres humains",
      "Travail force et servitude pour dettes",
      "Exploitation sexuelle",
      "50 millions de victimes estimees (OIT, 2021)",
    ],
  },
  {
    id: "reparations",
    name: "Debats sur les reparations",
    birthYear: 2000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/National_Museum_of_African_American_History_and_Culture_2019.jpg/220px-NMAAHC.jpg",
    nationality: "Global",
    movement: "Contemporain",
    summary:
      "Mouvements demandant reparations pour l'esclavage et la colonisation. La CARICOM reclame des reparations aux anciennes puissances coloniales. Debats sur la memoire et la reconnaissance.",
    mainWorks: [
      "Conference de Durban (2001)",
      "CARICOM - demande de reparations",
      "Loi Taubira (France, 2001) - crime contre l'humanite",
      "Debats sur la memoire coloniale",
    ],
  },
];
