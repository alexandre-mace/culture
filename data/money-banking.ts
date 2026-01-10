export interface MoneyBankingItem {
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

export const moneyBanking: MoneyBankingItem[] = [
  {
    id: "monnaie-lydienne",
    name: "Premieres monnaies",
    birthYear: -650,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/BMC_06.jpg/220px-BMC_06.jpg",
    nationality: "Lydien",
    movement: "Antiquite",
    summary:
      "Le royaume de Lydie (actuelle Turquie) frappe les premieres pieces de monnaie en electrum (alliage or-argent). L'invention se repand rapidement en Grece puis dans tout le monde mediterraneen.",
    mainWorks: [
      "Premieres pieces en electrum (Lydie, -650)",
      "Standardisation du poids et de la purete",
      "Diffusion en Grece et Perse",
      "Cresus - legendaire richesse lydienne",
    ],
  },
  {
    id: "monnaie-grecque",
    name: "Monnaies grecques",
    birthYear: -600,
    deathYear: -30,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Tetradrachm_Athens_480-420BC_MBA_Lyon.jpg/220px-Tetradrachm_Athens.jpg",
    nationality: "Grec",
    movement: "Antiquite",
    summary:
      "Chaque cite grecque frappe sa propre monnaie. La drachme athenienne (chouette) et le statere de Corinthe circulent dans toute la Mediterranee. Alexandre unifie les standards.",
    mainWorks: [
      "Drachme athenienne - monnaie de reference",
      "Chouette d'Athena - symbole reconnu",
      "Autonomie monetaire des cites",
      "Unification sous Alexandre",
    ],
  },
  {
    id: "monnaie-romaine",
    name: "Systeme monetaire romain",
    birthYear: -300,
    deathYear: 476,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Aureus_of_Augustus%2C_Lugdunum.jpg/220px-Aureus_Augustus.jpg",
    nationality: "Romain",
    movement: "Antiquite",
    summary:
      "Rome developpe un systeme monetaire elabore : as de bronze, denarius d'argent, aureus d'or. Debasement progressif de la monnaie contribue a l'inflation et au declin de l'Empire.",
    mainWorks: [
      "Denarius - monnaie d'argent standard",
      "Aureus - monnaie d'or",
      "Inflation et debasement au IIIe siecle",
      "Reforme de Diocletien et Constantin",
    ],
  },
  {
    id: "solidus",
    name: "Solidus byzantin",
    birthYear: 309,
    deathYear: 1453,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Solidus_Constantine_II-heraclea_RIC_vII_101.jpg/220px-Solidus_Constantine.jpg",
    nationality: "Byzantin",
    movement: "Moyen Age",
    summary:
      "Constantin cree le solidus, monnaie d'or stable pendant 700 ans. 'Dollar du Moyen Age', il domine le commerce international et influence les systemes monetaires europeens.",
    mainWorks: [
      "Creation par Constantin (309)",
      "Stabilite exceptionnelle (700 ans)",
      "Monnaie de reference internationale",
      "Influence sur les monnaies medievales",
    ],
  },
  {
    id: "banques-italiennes",
    name: "Banques italiennes medievales",
    birthYear: 1100,
    deathYear: 1500,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Quentin_Massys_001.jpg/220px-Quentin_Massys_001.jpg",
    nationality: "Italien",
    movement: "Moyen Age",
    summary:
      "Les banquiers italiens (Medicis, Bardi, Peruzzi) inventent la banque moderne : lettres de change, comptabilite en partie double, succursales internationales. Financent papes et rois.",
    mainWorks: [
      "Lettre de change - transfert d'argent",
      "Comptabilite en partie double",
      "Medicis de Florence - banque la plus puissante",
      "Financement du commerce international",
    ],
  },
  {
    id: "florin",
    name: "Florin d'or",
    birthYear: 1252,
    deathYear: 1533,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Fiorino_d%27oro.jpg/220px-Fiorino_d%27oro.jpg",
    nationality: "Florentin",
    movement: "Moyen Age",
    summary:
      "Florence frappe le florin, premiere grande monnaie d'or medievale. Sa qualite constante en fait la reference du commerce europeen pendant trois siecles.",
    mainWorks: [
      "Premiere monnaie d'or medievale majeure",
      "Qualite et poids constants",
      "Symbole de la puissance florentine",
      "Modele pour le ducat venitien",
    ],
  },
  {
    id: "banque-amsterdam",
    name: "Banque d'Amsterdam",
    birthYear: 1609,
    deathYear: 1820,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Amsterdam_-_Dam_1656.jpg/220px-Amsterdam_-_Dam_1656.jpg",
    nationality: "Neerlandais",
    movement: "Moderne",
    summary:
      "Premiere banque centrale moderne, elle garantit les depots et facilite les paiements. Le florin-banco devient une monnaie de compte stable, faisant d'Amsterdam le centre financier mondial.",
    mainWorks: [
      "Premiere banque centrale (1609)",
      "Florin-banco - monnaie de compte stable",
      "Systeme de compensation des paiements",
      "Amsterdam - centre financier mondial",
    ],
  },
  {
    id: "banque-angleterre",
    name: "Banque d'Angleterre",
    birthYear: 1694,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bank_of_England_-_The_Grand_Hall.jpg/220px-Bank_of_England.jpg",
    nationality: "Anglais",
    movement: "Moderne",
    summary:
      "Fondee pour financer la guerre contre Louis XIV, elle devient le modele des banques centrales modernes. Emission de billets, preteur en dernier ressort, regulation monetaire.",
    mainWorks: [
      "Fondation pour financer la guerre (1694)",
      "Emission de billets de banque",
      "Preteur en dernier ressort",
      "Modele pour les banques centrales",
    ],
  },
  {
    id: "law",
    name: "Systeme de Law",
    birthYear: 1716,
    deathYear: 1720,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/John_Law-Portrait.jpg/220px-John_Law-Portrait.jpg",
    nationality: "Francais",
    movement: "Moderne",
    summary:
      "John Law tente de remplacer l'or par le papier-monnaie en France. Speculation sur la Compagnie du Mississippi, bulle et effondrement (1720). Traumatisme durable sur le credit en France.",
    mainWorks: [
      "Banque Generale puis Royale",
      "Papier-monnaie adosse aux colonies",
      "Bulle de la Compagnie du Mississippi",
      "Effondrement et faillite (1720)",
    ],
  },
  {
    id: "etalon-or",
    name: "Etalon-or",
    birthYear: 1821,
    deathYear: 1931,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Gold_bullion_2.jpg/220px-Gold_bullion_2.jpg",
    nationality: "International",
    movement: "XIXe siecle",
    summary:
      "La Grande-Bretagne adopte l'etalon-or : chaque livre est convertible en or. Le systeme se generalise, assurant stabilite des changes et libre circulation des capitaux. Abandonne lors de la Grande Depression.",
    mainWorks: [
      "Grande-Bretagne adopte l'etalon-or (1821)",
      "Convertibilite des monnaies en or",
      "Stabilite des taux de change",
      "Abandon pendant la Grande Depression",
    ],
  },
  {
    id: "federal-reserve",
    name: "Reserve federale",
    birthYear: 1913,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Marriner_S._Eccles_Federal_Reserve_Board_Building.jpg/220px-Federal_Reserve.jpg",
    nationality: "Americain",
    movement: "XXe siecle",
    summary:
      "Banque centrale des Etats-Unis, creee apres les paniques bancaires de 1907. Systeme federal de 12 banques regionales. Politique monetaire, supervision bancaire, stabilite financiere.",
    mainWorks: [
      "Creation apres la panique de 1907",
      "Systeme federal de 12 banques",
      "Politique monetaire et taux d'interet",
      "Preteur en dernier ressort",
    ],
  },
  {
    id: "bretton-woods",
    name: "Systeme de Bretton Woods",
    birthYear: 1944,
    deathYear: 1971,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bretton_Woods.jpg/220px-Bretton_Woods.jpg",
    nationality: "International",
    movement: "XXe siecle",
    summary:
      "Conference qui etablit l'ordre monetaire d'apres-guerre. Dollar convertible en or, autres monnaies arrimees au dollar. FMI et Banque mondiale. Nixon met fin au systeme en 1971.",
    mainWorks: [
      "Conference de Bretton Woods (1944)",
      "Dollar convertible en or (35$/once)",
      "Creation du FMI et de la Banque mondiale",
      "Fin de la convertibilite (Nixon, 1971)",
    ],
  },
  {
    id: "euromarche",
    name: "Eurodollars et marches offshore",
    birthYear: 1957,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/City_of_London_skyline_from_London_City_Hall.jpg/220px-City_of_London.jpg",
    nationality: "International",
    movement: "XXe siecle",
    summary:
      "Les dollars deposes hors des USA (eurodollars) echappent aux regulations. Naissance de la finance offshore, marches de Londres et paradis fiscaux. Mondialisation financiere.",
    mainWorks: [
      "Eurodollars - dollars hors USA",
      "City de Londres - centre offshore",
      "Echappement aux regulations nationales",
      "Debut de la mondialisation financiere",
    ],
  },
  {
    id: "changes-flottants",
    name: "Changes flottants",
    birthYear: 1971,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Richard_Nixon.jpg/220px-Richard_Nixon.jpg",
    nationality: "International",
    movement: "XXe siecle",
    summary:
      "Fin de Bretton Woods, les monnaies flottent librement. Volatilite des changes, developpement des marches derives (futures, options). Speculation et crises monetaires.",
    mainWorks: [
      "Nixon suspend la convertibilite (1971)",
      "Accords de la Jamaique (1976)",
      "Flottement des monnaies",
      "Marches derives et speculation",
    ],
  },
  {
    id: "euro",
    name: "Euro",
    birthYear: 1999,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Euro_banknotes_2002.png/220px-Euro_banknotes_2002.png",
    nationality: "Europeen",
    movement: "XXIe siecle",
    summary:
      "Monnaie unique europeenne, adoptee par 20 pays. BCE a Francfort. Deuxieme monnaie mondiale, mais crises (dette grecque, 2010) revelent les tensions de la zone euro.",
    mainWorks: [
      "Traite de Maastricht (1992)",
      "Lancement de l'euro (1999/2002)",
      "Banque centrale europeenne",
      "Crise de la dette (2010)",
    ],
  },
  {
    id: "crise-2008",
    name: "Crise financiere de 2008",
    birthYear: 2008,
    deathYear: 2009,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Lehman_Brothers_Times_Square_by_David_Shankbone.jpg/220px-Lehman_Brothers.jpg",
    nationality: "Mondial",
    movement: "XXIe siecle",
    summary:
      "Effondrement des subprimes, faillite de Lehman Brothers, crise bancaire mondiale. Renflouements massifs, austerite, montee des populismes. Plus grande crise depuis 1929.",
    mainWorks: [
      "Bulle immobiliere et subprimes",
      "Faillite de Lehman Brothers (septembre 2008)",
      "Renflouement des banques (bailouts)",
      "Recession mondiale et austerite",
    ],
  },
  {
    id: "bitcoin",
    name: "Bitcoin et cryptomonnaies",
    birthYear: 2009,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/220px-Bitcoin.svg.png",
    nationality: "Mondial",
    movement: "XXIe siecle",
    summary:
      "Satoshi Nakamoto cree le Bitcoin, premiere cryptomonnaie decentralisee. Blockchain, speculation, proliferation des cryptomonnaies. Debat sur l'avenir de la monnaie.",
    mainWorks: [
      "Livre blanc de Satoshi Nakamoto (2008)",
      "Bitcoin - monnaie decentralisee",
      "Technologie blockchain",
      "Proliferation des cryptomonnaies",
    ],
  },
  {
    id: "qe",
    name: "Assouplissement quantitatif",
    birthYear: 2009,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/US_Federal_Reserve_Assets.png/220px-US_Federal_Reserve_Assets.png",
    nationality: "Mondial",
    movement: "XXIe siecle",
    summary:
      "Les banques centrales (Fed, BCE, BoJ) creent massivement de la monnaie pour racheter des actifs. Taux zero ou negatifs. Debat sur l'inflation et les inegalites.",
    mainWorks: [
      "Fed lance le QE (2009)",
      "BCE suit (2015)",
      "Taux d'interet zero ou negatifs",
      "Debat sur les effets a long terme",
    ],
  },
];
