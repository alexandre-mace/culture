export interface MoneyBankingItem {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  image?: string;
  nationality: string;
  movement: string;
  family?: string;
  influences?: string[];
  quotes?: string[];
  summary: string;
  mainWorks: string[];
  itemType?: "person" | "topic";
}

export const moneyBanking: MoneyBankingItem[] = [
  {
    id: "monnaie-lydienne",
    name: "Premières monnaies",
    birthYear: -650,
    nationality: "Lydien",
    movement: "Antiquité",
    family: "Monnaies antiques",
    summary:
      "Le royaume de Lydie (actuelle Turquie) frappe les premières pièces de monnaie en électrum (alliage or-argent). L'invention se répand rapidement en Grèce puis dans tout le monde méditerranéen.",
    mainWorks: [
      "Premières pièces en électrum (Lydie, -650)",
      "Standardisation du poids et de la pureté",
      "Diffusion en Grèce et Perse",
      "Crésus - légendaire richesse lydienne",
    ],
  },
  {
    id: "monnaie-grecque",
    name: "Monnaies grecques",
    birthYear: -600,
    deathYear: -30,
    nationality: "Grec",
    movement: "Antiquité",
    family: "Monnaies antiques",
    influences: ["monnaie-lydienne"],
    summary:
      "Chaque cité grecque frappe sa propre monnaie. La drachme athénienne (chouette) et le statère de Corinthe circulent dans toute la Méditerranée. Alexandre unifie les standards.",
    mainWorks: [
      "Drachme athénienne - monnaie de référence",
      "Chouette d'Athéna - symbole reconnu",
      "Autonomie monétaire des cités",
      "Unification sous Alexandre",
    ],
  },
  {
    id: "monnaie-romaine",
    name: "Système monétaire romain",
    birthYear: -300,
    deathYear: 476,
    nationality: "Romain",
    movement: "Antiquité",
    family: "Monnaies antiques",
    influences: ["monnaie-grecque"],
    summary:
      "Rome développe un système monétaire élaboré : as de bronze, denarius d'argent, aureus d'or. Débasement progressif de la monnaie contribue à l'inflation et au déclin de l'Empire.",
    mainWorks: [
      "Denarius - monnaie d'argent standard",
      "Aureus - monnaie d'or",
      "Inflation et débasement au IIIe siècle",
      "Réforme de Dioclétien et Constantin",
    ],
  },
  {
    id: "solidus",
    name: "Solidus byzantin",
    birthYear: 309,
    deathYear: 1453,
    nationality: "Byzantin",
    movement: "Moyen Âge",
    family: "Banque médiévale",
    influences: ["monnaie-romaine"],
    summary:
      "Constantin crée le solidus, monnaie d'or stable pendant 700 ans. 'Dollar du Moyen Âge', il domine le commerce international et influence les systèmes monétaires européens.",
    mainWorks: [
      "Création par Constantin (309)",
      "Stabilité exceptionnelle (700 ans)",
      "Monnaie de référence internationale",
      "Influence sur les monnaies médiévales",
    ],
  },
  {
    id: "banques-italiennes",
    name: "Banques italiennes médiévales",
    birthYear: 1100,
    deathYear: 1500,
    nationality: "Italien",
    movement: "Moyen Âge",
    family: "Banque médiévale",
    summary:
      "Les banquiers italiens (Médicis, Bardi, Peruzzi) inventent la banque moderne : lettres de change, comptabilité en partie double, succursales internationales. Financent papes et rois.",
    mainWorks: [
      "Lettre de change - transfert d'argent",
      "Comptabilité en partie double",
      "Médicis de Florence - banque la plus puissante",
      "Financement du commerce international",
    ],
  },
  {
    id: "florin",
    name: "Florin d'or",
    birthYear: 1252,
    deathYear: 1533,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Fiorino_1347.jpg/330px-Fiorino_1347.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Florentin",
    movement: "Moyen Âge",
    family: "Banque médiévale",
    influences: ["banques-italiennes"],
    summary:
      "Florence frappe le florin, première grande monnaie d'or médiévale. Sa qualité constante en fait la référence du commerce européen pendant trois siècles.",
    mainWorks: [
      "Première monnaie d'or médiévale majeure",
      "Qualité et poids constants",
      "Symbole de la puissance florentine",
      "Modèle pour le ducat vénitien",
    ],
  },
  {
    id: "banque-amsterdam",
    name: "Banque d'Amsterdam",
    birthYear: 1609,
    deathYear: 1820,
    nationality: "Néerlandais",
    movement: "Moderne",
    family: "Banques modernes",
    influences: ["banques-italiennes"],
    summary:
      "Première banque centrale moderne, elle garantit les dépôts et facilite les paiements. Le florin-banco devient une monnaie de compte stable, faisant d'Amsterdam le centre financier mondial.",
    mainWorks: [
      "Première banque centrale (1609)",
      "Florin-banco - monnaie de compte stable",
      "Système de compensation des paiements",
      "Amsterdam - centre financier mondial",
    ],
  },
  {
    id: "banque-angleterre",
    name: "Banque d'Angleterre",
    birthYear: 1694,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/London.bankofengland.arp.jpg/330px-London.bankofengland.arp.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Anglais",
    movement: "Moderne",
    family: "Banques modernes",
    influences: ["banque-amsterdam"],
    summary:
      "Fondée pour financer la guerre contre Louis XIV, elle devient le modèle des banques centrales modernes. Émission de billets, prêteur en dernier ressort, régulation monétaire.",
    mainWorks: [
      "Fondation pour financer la guerre (1694)",
      "Émission de billets de banque",
      "Prêteur en dernier ressort",
      "Modèle pour les banques centrales",
    ],
  },
  {
    id: "law",
    name: "Système de Law",
    birthYear: 1716,
    deathYear: 1720,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Het_Groote_Tafereel_der_Dwaasheid%2C_Wie_redeneeren_wil_is_mis%2C_men_vind_de_Lapis_by_de_gis.jpg/330px-Het_Groote_Tafereel_der_Dwaasheid%2C_Wie_redeneeren_wil_is_mis%2C_men_vind_de_Lapis_by_de_gis.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Moderne",
    family: "Banques modernes",
    influences: ["banque-amsterdam", "banque-angleterre"],
    summary:
      "John Law tente de remplacer l'or par le papier-monnaie en France. Spéculation sur la Compagnie du Mississippi, bulle et effondrement (1720). Traumatisme durable sur le crédit en France.",
    mainWorks: [
      "Banque Générale puis Royale",
      "Papier-monnaie adossé aux colonies",
      "Bulle de la Compagnie du Mississippi",
      "Effondrement et faillite (1720)",
    ],
  },
  {
    id: "etalon-or",
    name: "Étalon-or",
    birthYear: 1821,
    deathYear: 1931,
    nationality: "International",
    movement: "XIXe siècle",
    family: "Système international",
    influences: ["banque-angleterre"],
    summary:
      "La Grande-Bretagne adopte l'étalon-or : chaque livre est convertible en or. Le système se généralise, assurant stabilité des changes et libre circulation des capitaux. Abandonné lors de la Grande Dépression.",
    mainWorks: [
      "Grande-Bretagne adopte l'étalon-or (1821)",
      "Convertibilité des monnaies en or",
      "Stabilité des taux de change",
      "Abandon pendant la Grande Dépression",
    ],
  },
  {
    id: "federal-reserve",
    name: "Réserve fédérale",
    birthYear: 1913,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Marriner_S._Eccles_Federal_Reserve_Board_Building.jpg/330px-Marriner_S._Eccles_Federal_Reserve_Board_Building.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "XXe siècle",
    family: "Système international",
    influences: ["banque-angleterre"],
    summary:
      "Banque centrale des États-Unis, créée après les paniques bancaires de 1907. Système fédéral de 12 banques régionales. Politique monétaire, supervision bancaire, stabilité financière.",
    mainWorks: [
      "Création après la panique de 1907",
      "Système fédéral de 12 banques",
      "Politique monétaire et taux d'intérêt",
      "Prêteur en dernier ressort",
    ],
  },
  {
    id: "bretton-woods",
    name: "Système de Bretton Woods",
    birthYear: 1944,
    deathYear: 1971,
    nationality: "International",
    movement: "XXe siècle",
    family: "Système international",
    influences: ["etalon-or"],
    summary:
      "Conférence qui établit l'ordre monétaire d'après-guerre. Dollar convertible en or, autres monnaies arrimées au dollar. FMI et Banque mondiale. Nixon met fin au système en 1971.",
    mainWorks: [
      "Conférence de Bretton Woods (1944)",
      "Dollar convertible en or (35$/once)",
      "Création du FMI et de la Banque mondiale",
      "Fin de la convertibilité (Nixon, 1971)",
    ],
  },
  {
    id: "euromarche",
    name: "Eurodollars et marchés offshore",
    birthYear: 1957,
    nationality: "International",
    movement: "XXe siècle",
    family: "Système international",
    influences: ["bretton-woods"],
    summary:
      "Les dollars déposés hors des USA (eurodollars) échappent aux régulations. Naissance de la finance offshore, marchés de Londres et paradis fiscaux. Mondialisation financière.",
    mainWorks: [
      "Eurodollars - dollars hors USA",
      "City de Londres - centre offshore",
      "Échappement aux régulations nationales",
      "Début de la mondialisation financière",
    ],
  },
  {
    id: "changes-flottants",
    name: "Changes flottants",
    birthYear: 1971,
    nationality: "International",
    movement: "XXe siècle",
    family: "Système international",
    influences: ["bretton-woods"],
    summary:
      "Fin de Bretton Woods, les monnaies flottent librement. Volatilité des changes, développement des marchés dérivés (futures, options). Spéculation et crises monétaires.",
    mainWorks: [
      "Nixon suspend la convertibilité (1971)",
      "Accords de la Jamaïque (1976)",
      "Flottement des monnaies",
      "Marchés dérivés et spéculation",
    ],
  },
  {
    id: "euro",
    name: "Euro",
    birthYear: 1999,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Euro_Series_Banknotes_%282019%29_-_centered.png/330px-Euro_Series_Banknotes_%282019%29_-_centered.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Européen",
    movement: "XXIe siècle",
    family: "Finance contemporaine",
    influences: ["changes-flottants"],
    summary:
      "Monnaie unique européenne, adoptée par 20 pays. BCE à Francfort. Deuxième monnaie mondiale, mais crises (dette grecque, 2010) révèlent les tensions de la zone euro.",
    mainWorks: [
      "Traité de Maastricht (1992)",
      "Lancement de l'euro (1999/2002)",
      "Banque centrale européenne",
      "Crise de la dette (2010)",
    ],
  },
  {
    id: "crise-2008",
    name: "Crise financière de 2008",
    birthYear: 2008,
    deathYear: 2009,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Lehman_Brothers_Times_Square_by_David_Shankbone.jpg/330px-Lehman_Brothers_Times_Square_by_David_Shankbone.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Mondial",
    movement: "XXIe siècle",
    family: "Finance contemporaine",
    summary:
      "Effondrement des subprimes, faillite de Lehman Brothers, crise bancaire mondiale. Renflouements massifs, austérité, montée des populismes. Plus grande crise depuis 1929.",
    mainWorks: [
      "Bulle immobilière et subprimes",
      "Faillite de Lehman Brothers (septembre 2008)",
      "Renflouement des banques (bailouts)",
      "Récession mondiale et austérité",
    ],
  },
  {
    id: "bitcoin",
    name: "Bitcoin et cryptomonnaies",
    birthYear: 2009,
    nationality: "Mondial",
    movement: "XXIe siècle",
    family: "Finance contemporaine",
    influences: ["crise-2008"],
    summary:
      "Satoshi Nakamoto crée le Bitcoin, première cryptomonnaie décentralisée. Blockchain, spéculation, prolifération des cryptomonnaies. Débat sur l'avenir de la monnaie.",
    mainWorks: [
      "Livre blanc de Satoshi Nakamoto (2008)",
      "Bitcoin - monnaie décentralisée",
      "Technologie blockchain",
      "Prolifération des cryptomonnaies",
    ],
  },
  {
    id: "qe",
    name: "Assouplissement quantitatif",
    birthYear: 2009,
    nationality: "Mondial",
    movement: "XXIe siècle",
    family: "Finance contemporaine",
    influences: ["crise-2008"],
    summary:
      "Les banques centrales (Fed, BCE, BoJ) créent massivement de la monnaie pour racheter des actifs. Taux zéro ou négatifs. Débat sur l'inflation et les inégalités.",
    mainWorks: [
      "Fed lance le QE (2009)",
      "BCE suit (2015)",
      "Taux d'intérêt zéro ou négatifs",
      "Débat sur les effets à long terme",
    ],
  },
];
