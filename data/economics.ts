export interface EconomicsItem {
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

export const economics: EconomicsItem[] = [
  {
    id: "aristote-eco",
    name: "Aristote",
    birthYear: -384,
    deathYear: -322,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/220px-Aristotle_Altemps_Inv8575.jpg",
    nationality: "Grec",
    movement: "Economie antique",
    summary:
      "Premier penseur de l'economie, il distingue l'economie domestique (oikonomia) de la chrematistique (enrichissement). Critique du pret a interet et reflexion sur la valeur.",
    mainWorks: [
      "Politique - reflexion sur l'economie domestique",
      "Distinction valeur d'usage / valeur d'echange",
      "Critique de l'usure",
      "Concept de monnaie comme intermediaire",
    ],
  },
  {
    id: "thomas-aquin-eco",
    name: "Thomas d'Aquin",
    birthYear: 1225,
    deathYear: 1274,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Thomas_Aquinas_in_Stained_Glass.jpg/220px-Thomas_Aquinas_in_Stained_Glass.jpg",
    nationality: "Italien",
    movement: "Scolastique",
    summary:
      "Theologien qui elabore la doctrine du 'juste prix' et condamne l'usure. Ses idees dominent la pensee economique medievale et influencent l'ethique des affaires.",
    mainWorks: [
      "Somme theologique - economie morale",
      "Theorie du juste prix",
      "Condamnation de l'usure",
      "Propriete privee legitime mais subordonnee au bien commun",
    ],
  },
  {
    id: "mercantilistes",
    name: "Mercantilisme",
    birthYear: 1500,
    deathYear: 1750,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Claude_Lefebvre_-_Portrait_of_Jean-Baptiste_Colbert.jpg/220px-Claude_Lefebvre_-_Portrait_of_Jean-Baptiste_Colbert.jpg",
    nationality: "Europeen",
    movement: "Mercantilisme",
    summary:
      "Doctrine dominante du XVIe au XVIIIe siecle : la richesse d'une nation se mesure a son stock d'or et d'argent. Favorise les exportations, limite les importations, soutient l'intervention de l'Etat.",
    mainWorks: [
      "Colbert en France - manufactures royales",
      "Balance commerciale favorable",
      "Protectionnisme et tarifs douaniers",
      "Colonies comme sources de richesses",
    ],
  },
  {
    id: "physiocrates",
    name: "Physiocrates",
    birthYear: 1756,
    deathYear: 1778,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Francois_Quesnay.jpg/220px-Francois_Quesnay.jpg",
    nationality: "Francais",
    movement: "Physiocratie",
    summary:
      "Premiere ecole economique, menee par Quesnay. Seule la terre produit de la richesse, l'industrie et le commerce sont steriles. Precurseurs du liberalisme avec 'laissez faire, laissez passer'.",
    mainWorks: [
      "Tableau economique de Quesnay (1758)",
      "Terre comme seule source de richesse",
      "Laissez faire, laissez passer",
      "Critique du mercantilisme",
    ],
  },
  {
    id: "adam-smith",
    name: "Adam Smith",
    birthYear: 1723,
    deathYear: 1790,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/AdamSmith.jpg/220px-AdamSmith.jpg",
    nationality: "Ecossais",
    movement: "Economie classique",
    summary:
      "Pere de l'economie politique moderne. La Richesse des nations (1776) fonde le liberalisme economique : la 'main invisible' du marche coordonne les interets individuels vers le bien commun.",
    mainWorks: [
      "Recherches sur la richesse des nations (1776)",
      "Main invisible du marche",
      "Division du travail",
      "Theorie de la valeur-travail",
    ],
  },
  {
    id: "malthus",
    name: "Thomas Malthus",
    birthYear: 1766,
    deathYear: 1834,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Thomas_Robert_Malthus.jpg/220px-Thomas_Robert_Malthus.jpg",
    nationality: "Anglais",
    movement: "Economie classique",
    summary:
      "Son Essai sur le principe de population (1798) predit que la population croit plus vite que les ressources. Vision pessimiste qui influence Darwin et les debats sur la demographie.",
    mainWorks: [
      "Essai sur le principe de population (1798)",
      "Croissance geometrique de la population",
      "Freins naturels (famines, epidemies)",
      "Influence sur Darwin",
    ],
  },
  {
    id: "ricardo",
    name: "David Ricardo",
    birthYear: 1772,
    deathYear: 1823,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/David_Ricardo_Economist.jpg/220px-David_Ricardo_Economist.jpg",
    nationality: "Anglais",
    movement: "Economie classique",
    summary:
      "Theoricien de l'avantage comparatif justifiant le libre-echange. Sa theorie de la rente fonciere et de la valeur-travail influencera Marx.",
    mainWorks: [
      "Principes de l'economie politique (1817)",
      "Theorie des avantages comparatifs",
      "Theorie de la rente fonciere",
      "Valeur-travail",
    ],
  },
  {
    id: "marx-eco",
    name: "Karl Marx",
    birthYear: 1818,
    deathYear: 1883,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/220px-Karl_Marx_001.jpg",
    nationality: "Allemand",
    movement: "Critique de l'economie politique",
    summary:
      "Critique radicale du capitalisme : la plus-value exploite les travailleurs, les crises sont inherentes au systeme. Le Capital reste la plus grande analyse du capitalisme.",
    mainWorks: [
      "Le Capital (1867)",
      "Theorie de la plus-value",
      "Critique de l'alienation",
      "Materialisme historique",
    ],
  },
  {
    id: "walras",
    name: "Leon Walras",
    birthYear: 1834,
    deathYear: 1910,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Walras.jpg/220px-Walras.jpg",
    nationality: "Francais/Suisse",
    movement: "Ecole neoclassique",
    summary:
      "Fondateur de l'equilibre general : le marche tend vers un equilibre ou offre et demande s'ajustent simultanement pour tous les biens. Mathematisation de l'economie.",
    mainWorks: [
      "Elements d'economie politique pure (1874)",
      "Theorie de l'equilibre general",
      "Tatonnement walrasien",
      "Mathematisation de l'economie",
    ],
  },
  {
    id: "marshall",
    name: "Alfred Marshall",
    birthYear: 1842,
    deathYear: 1924,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Alfred_Marshall.jpg/220px-Alfred_Marshall.jpg",
    nationality: "Anglais",
    movement: "Ecole neoclassique",
    summary:
      "Synthetise l'economie classique et marginaliste. Ses Principes d'economie (1890) dominent l'enseignement pendant 50 ans. Concepts d'elasticite, surplus du consommateur, equilibre partiel.",
    mainWorks: [
      "Principes d'economie (1890)",
      "Equilibre partiel offre/demande",
      "Elasticite-prix",
      "Surplus du consommateur",
    ],
  },
  {
    id: "veblen",
    name: "Thorstein Veblen",
    birthYear: 1857,
    deathYear: 1929,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Veblen3a.jpg/220px-Veblen3a.jpg",
    nationality: "Americain",
    movement: "Institutionnalisme",
    summary:
      "Critique sociale du capitalisme et de la 'classe de loisir'. La consommation ostentatoire sert a afficher le statut social. Fondateur de l'economie institutionnelle.",
    mainWorks: [
      "Theorie de la classe de loisir (1899)",
      "Consommation ostentatoire",
      "Critique du capitalisme financier",
      "Economie institutionnelle",
    ],
  },
  {
    id: "keynes",
    name: "John Maynard Keynes",
    birthYear: 1883,
    deathYear: 1946,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/John_Maynard_Keynes.jpg/220px-John_Maynard_Keynes.jpg",
    nationality: "Anglais",
    movement: "Keynesianisme",
    summary:
      "Revolutionne l'economie pendant la Grande Depression. L'Etat doit intervenir par la depense publique pour soutenir la demande et l'emploi. Architecte de Bretton Woods.",
    mainWorks: [
      "Theorie generale de l'emploi (1936)",
      "Multiplicateur keynesien",
      "Demande effective et chomage involontaire",
      "Accords de Bretton Woods (1944)",
    ],
  },
  {
    id: "schumpeter",
    name: "Joseph Schumpeter",
    birthYear: 1883,
    deathYear: 1950,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Joseph_Schumpeter_ekonomist.jpg/220px-Joseph_Schumpeter_ekonomist.jpg",
    nationality: "Autrichien/Americain",
    movement: "Economie de l'innovation",
    summary:
      "Theoricien de l'innovation et de l'entrepreneur. La 'destruction creatrice' renouvelle le capitalisme par l'innovation. Analyse des cycles economiques.",
    mainWorks: [
      "Theorie de l'evolution economique (1911)",
      "Destruction creatrice",
      "Role de l'entrepreneur innovateur",
      "Capitalisme, socialisme et democratie",
    ],
  },
  {
    id: "hayek",
    name: "Friedrich Hayek",
    birthYear: 1899,
    deathYear: 1992,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Friedrich_Hayek_portrait.jpg/220px-Friedrich_Hayek_portrait.jpg",
    nationality: "Autrichien/Britannique",
    movement: "Ecole autrichienne",
    summary:
      "Champion du liberalisme contre le socialisme et l'interventionnisme. Le marche traite l'information mieux que toute planification centrale. Influence Thatcher et Reagan.",
    mainWorks: [
      "La Route de la servitude (1944)",
      "Prix comme systeme d'information",
      "Critique de la planification centrale",
      "Prix Nobel d'economie (1974)",
    ],
  },
  {
    id: "friedman",
    name: "Milton Friedman",
    birthYear: 1912,
    deathYear: 2006,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Portrait_of_Milton_Friedman.jpg/220px-Portrait_of_Milton_Friedman.jpg",
    nationality: "Americain",
    movement: "Monetarisme",
    summary:
      "Chef de file du monetarisme et du liberalisme economique. L'inflation est toujours un phenomene monetaire. Conseiller de Reagan, influence les politiques neoliberales.",
    mainWorks: [
      "Histoire monetaire des Etats-Unis",
      "Monetarisme - controle de la masse monetaire",
      "Critique du keynesianisme",
      "Prix Nobel d'economie (1976)",
    ],
  },
  {
    id: "samuelson",
    name: "Paul Samuelson",
    birthYear: 1915,
    deathYear: 2009,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Paul_Samuelson.jpg/220px-Paul_Samuelson.jpg",
    nationality: "Americain",
    movement: "Synthese neoclassique",
    summary:
      "Premier Americain Prix Nobel d'economie, il synthetise Keynes et les neoclassiques. Son manuel Economics forme des generations d'economistes. Mathematisation de l'economie.",
    mainWorks: [
      "Economics (manuel, 1948)",
      "Fondements de l'analyse economique",
      "Synthese neoclassique-keynesienne",
      "Premier Prix Nobel americain (1970)",
    ],
  },
  {
    id: "sen",
    name: "Amartya Sen",
    birthYear: 1933,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amartya_Sen_20071128_cologne.jpg/220px-Amartya_Sen_20071128_cologne.jpg",
    nationality: "Indien",
    movement: "Economie du developpement",
    summary:
      "Philosophe et economiste, il redefinit le developpement comme expansion des 'capabilites' humaines. Ses travaux sur la pauvrete et les famines humanisent l'economie.",
    mainWorks: [
      "Pauvrete et famines",
      "Theorie des capabilites",
      "Indice de developpement humain (IDH)",
      "Prix Nobel d'economie (1998)",
    ],
  },
  {
    id: "stiglitz",
    name: "Joseph Stiglitz",
    birthYear: 1943,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Jstiglitz20071114.jpg/220px-Jstiglitz20071114.jpg",
    nationality: "Americain",
    movement: "Economie de l'information",
    summary:
      "Theoricien de l'information asymetrique qui justifie l'intervention de l'Etat. Critique de la mondialisation et des institutions financieres internationales.",
    mainWorks: [
      "Asymetrie d'information",
      "La Grande Desillusion (critique du FMI)",
      "Economiste en chef de la Banque mondiale",
      "Prix Nobel d'economie (2001)",
    ],
  },
  {
    id: "piketty",
    name: "Thomas Piketty",
    birthYear: 1971,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Thomas_Piketty%2C_2015_%28cropped%29.jpg/220px-Thomas_Piketty%2C_2015_%28cropped%29.jpg",
    nationality: "Francais",
    movement: "Economie des inegalites",
    summary:
      "Son Capital au XXIe siecle (2013) documente la montee des inegalites. Quand le rendement du capital depasse la croissance, les inegalites explosent. Best-seller mondial.",
    mainWorks: [
      "Le Capital au XXIe siecle (2013)",
      "r > g : inegalites croissantes",
      "Impot progressif sur la fortune",
      "Capital et Ideologie (2019)",
    ],
  },
];
