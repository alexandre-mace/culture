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
  itemType?: "person" | "topic";
}

export const economics: EconomicsItem[] = [
  {
    id: "aristote-eco",
    name: "Aristote",
    birthYear: -384,
    deathYear: -322,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Aristoteles_Louvre.jpg/330px-Aristoteles_Louvre.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Grec",
    movement: "Économie antique",
    summary:
      "Premier penseur de l'économie, il distingue l'économie domestique (oikonomia) de la chrématistique (enrichissement). Critique du prêt à intérêt et réflexion sur la valeur.",
    mainWorks: [
      "Politique - réflexion sur l'économie domestique",
      "Distinction valeur d'usage / valeur d'échange",
      "Critique de l'usure",
      "Concept de monnaie comme intermédiaire",
    ],
  },
  {
    id: "thomas-aquin-eco",
    name: "Thomas d'Aquin",
    birthYear: 1225,
    deathYear: 1274,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/St-thomas-aquinasFXD.jpg/330px-St-thomas-aquinasFXD.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Italien",
    movement: "Scolastique",
    summary:
      "Théologien qui élabore la doctrine du 'juste prix' et condamne l'usure. Ses idées dominent la pensée économique médiévale et influencent l'éthique des affaires.",
    mainWorks: [
      "Somme théologique - économie morale",
      "Théorie du juste prix",
      "Condamnation de l'usure",
      "Propriété privée légitime mais subordonnée au bien commun",
    ],
  },
  {
    id: "mercantilistes",
    name: "Mercantilisme",
    birthYear: 1500,
    deathYear: 1750,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/F0087_Louvre_Gellee_port_au_soleil_couchant-_INV4715_rwk.jpg/330px-F0087_Louvre_Gellee_port_au_soleil_couchant-_INV4715_rwk.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Européen",
    movement: "Mercantilisme",
    itemType: "topic",
    summary:
      "Doctrine dominante du XVIe au XVIIIe siècle : la richesse d'une nation se mesure à son stock d'or et d'argent. Favorise les exportations, limite les importations, soutient l'intervention de l'État.",
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
    nationality: "Français",
    movement: "Physiocratie",
    itemType: "topic",
    summary:
      "Première école économique, menée par Quesnay. Seule la terre produit de la richesse, l'industrie et le commerce sont stériles. Précurseurs du libéralisme avec 'laissez faire, laissez passer'.",
    mainWorks: [
      "Tableau économique de Quesnay (1758)",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/AdamSmith.jpg/330px-AdamSmith.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Écossais",
    movement: "Économie classique",
    summary:
      "Père de l'économie politique moderne. La Richesse des nations (1776) fonde le libéralisme économique : la 'main invisible' du marché coordonne les intérêts individuels vers le bien commun.",
    mainWorks: [
      "Recherches sur la richesse des nations (1776)",
      "Main invisible du marché",
      "Division du travail",
      "Théorie de la valeur-travail",
    ],
  },
  {
    id: "malthus",
    name: "Thomas Malthus",
    birthYear: 1766,
    deathYear: 1834,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Thomas_malthus.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "Anglais",
    movement: "Économie classique",
    summary:
      "Son Essai sur le principe de population (1798) prédit que la population croît plus vite que les ressources. Vision pessimiste qui influence Darwin et les débats sur la démographie.",
    mainWorks: [
      "Essai sur le principe de population (1798)",
      "Croissance géométrique de la population",
      "Freins naturels (famines, épidémies)",
      "Influence sur Darwin",
    ],
  },
  {
    id: "ricardo",
    name: "David Ricardo",
    birthYear: 1772,
    deathYear: 1823,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Portrait_of_David_Ricardo_by_Thomas_Phillips.jpg/330px-Portrait_of_David_Ricardo_by_Thomas_Phillips.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Anglais",
    movement: "Économie classique",
    summary:
      "Théoricien de l'avantage comparatif justifiant le libre-échange. Sa théorie de la rente foncière et de la valeur-travail influencera Marx.",
    mainWorks: [
      "Principes de l'économie politique (1817)",
      "Théorie des avantages comparatifs",
      "Théorie de la rente foncière",
      "Valeur-travail",
    ],
  },
  {
    id: "marx-eco",
    name: "Karl Marx",
    birthYear: 1818,
    deathYear: 1883,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored.png/330px-Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Critique de l'économie politique",
    summary:
      "Critique radicale du capitalisme : la plus-value exploite les travailleurs, les crises sont inhérentes au système. Le Capital reste la plus grande analyse du capitalisme.",
    mainWorks: [
      "Le Capital (1867)",
      "Théorie de la plus-value",
      "Critique de l'aliénation",
      "Matérialisme historique",
    ],
  },
  {
    id: "walras",
    name: "Léon Walras",
    birthYear: 1834,
    deathYear: 1910,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Portrait_of_L%C3%A9on_Walras_1862_extract.png/330px-Portrait_of_L%C3%A9on_Walras_1862_extract.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français/Suisse",
    movement: "École néoclassique",
    summary:
      "Fondateur de l'équilibre général : le marché tend vers un équilibre où offre et demande s'ajustent simultanément pour tous les biens. Mathématisation de l'économie.",
    mainWorks: [
      "Éléments d'économie politique pure (1874)",
      "Théorie de l'équilibre général",
      "Tâtonnement walrasien",
      "Mathématisation de l'économie",
    ],
  },
  {
    id: "marshall",
    name: "Alfred Marshall",
    birthYear: 1842,
    deathYear: 1924,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Alfred_Marshall.jpg/330px-Alfred_Marshall.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Anglais",
    movement: "École néoclassique",
    summary:
      "Synthétise l'économie classique et marginaliste. Ses Principes d'économie (1890) dominent l'enseignement pendant 50 ans. Concepts d'élasticité, surplus du consommateur, équilibre partiel.",
    mainWorks: [
      "Principes d'économie (1890)",
      "Équilibre partiel offre/demande",
      "Élasticité-prix",
      "Surplus du consommateur",
    ],
  },
  {
    id: "veblen",
    name: "Thorstein Veblen",
    birthYear: 1857,
    deathYear: 1929,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Veblen3a.jpg/330px-Veblen3a.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Institutionnalisme",
    summary:
      "Critique sociale du capitalisme et de la 'classe de loisir'. La consommation ostentatoire sert à afficher le statut social. Fondateur de l'économie institutionnelle.",
    mainWorks: [
      "Théorie de la classe de loisir (1899)",
      "Consommation ostentatoire",
      "Critique du capitalisme financier",
      "Économie institutionnelle",
    ],
  },
  {
    id: "keynes",
    name: "John Maynard Keynes",
    birthYear: 1883,
    deathYear: 1946,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Keynes_1933.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "Anglais",
    movement: "Keynésianisme",
    summary:
      "Révolutionne l'économie pendant la Grande Dépression. L'État doit intervenir par la dépense publique pour soutenir la demande et l'emploi. Architecte de Bretton Woods.",
    mainWorks: [
      "Théorie générale de l'emploi (1936)",
      "Multiplicateur keynésien",
      "Demande effective et chômage involontaire",
      "Accords de Bretton Woods (1944)",
    ],
  },
  {
    id: "schumpeter",
    name: "Joseph Schumpeter",
    birthYear: 1883,
    deathYear: 1950,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Joseph_Schumpeter_ekonomialaria.jpg/330px-Joseph_Schumpeter_ekonomialaria.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Autrichien/Américain",
    movement: "Économie de l'innovation",
    summary:
      "Théoricien de l'innovation et de l'entrepreneur. La 'destruction créatrice' renouvelle le capitalisme par l'innovation. Analyse des cycles économiques.",
    mainWorks: [
      "Théorie de l'évolution économique (1911)",
      "Destruction créatrice",
      "Rôle de l'entrepreneur innovateur",
      "Capitalisme, socialisme et démocratie",
    ],
  },
  {
    id: "hayek",
    name: "Friedrich Hayek",
    birthYear: 1899,
    deathYear: 1992,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Friedrich_Hayek_portrait.jpg/330px-Friedrich_Hayek_portrait.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Autrichien/Britannique",
    movement: "École autrichienne",
    summary:
      "Champion du libéralisme contre le socialisme et l'interventionnisme. Le marché traite l'information mieux que toute planification centrale. Influence Thatcher et Reagan.",
    mainWorks: [
      "La Route de la servitude (1944)",
      "Prix comme système d'information",
      "Critique de la planification centrale",
      "Prix Nobel d'économie (1974)",
    ],
  },
  {
    id: "friedman",
    name: "Milton Friedman",
    birthYear: 1912,
    deathYear: 2006,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Portrait_of_Milton_Friedman.jpg/330px-Portrait_of_Milton_Friedman.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Monétarisme",
    summary:
      "Chef de file du monétarisme et du libéralisme économique. L'inflation est toujours un phénomène monétaire. Conseiller de Reagan, influence les politiques néolibérales.",
    mainWorks: [
      "Histoire monétaire des États-Unis",
      "Monétarisme - contrôle de la masse monétaire",
      "Critique du keynésianisme",
      "Prix Nobel d'économie (1976)",
    ],
  },
  {
    id: "samuelson",
    name: "Paul Samuelson",
    birthYear: 1915,
    deathYear: 2009,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Paul_A._Samuelson%2C_economist%2C_edited.jpg/330px-Paul_A._Samuelson%2C_economist%2C_edited.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Synthèse néoclassique",
    summary:
      "Premier Américain Prix Nobel d'économie, il synthétise Keynes et les néoclassiques. Son manuel Economics forme des générations d'économistes. Mathématisation de l'économie.",
    mainWorks: [
      "Economics (manuel, 1948)",
      "Fondements de l'analyse économique",
      "Synthèse néoclassique-keynésienne",
      "Premier Prix Nobel américain (1970)",
    ],
  },
  {
    id: "sen",
    name: "Amartya Sen",
    birthYear: 1933,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Amartya_Sen_NIH.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "Indien",
    movement: "Économie du développement",
    summary:
      "Philosophe et économiste, il redéfinit le développement comme expansion des 'capabilités' humaines. Ses travaux sur la pauvreté et les famines humanisent l'économie.",
    mainWorks: [
      "Pauvreté et famines",
      "Théorie des capabilités",
      "Indice de développement humain (IDH)",
      "Prix Nobel d'économie (1998)",
    ],
  },
  {
    id: "stiglitz",
    name: "Joseph Stiglitz",
    birthYear: 1943,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Joseph_E._Stiglitz%2C_2019_%28cropped%29.jpg/330px-Joseph_E._Stiglitz%2C_2019_%28cropped%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Économie de l'information",
    summary:
      "Théoricien de l'information asymétrique qui justifie l'intervention de l'État. Critique de la mondialisation et des institutions financières internationales.",
    mainWorks: [
      "Asymétrie d'information",
      "La Grande Désillusion (critique du FMI)",
      "Économiste en chef de la Banque mondiale",
      "Prix Nobel d'économie (2001)",
    ],
  },
  {
    id: "piketty",
    name: "Thomas Piketty",
    birthYear: 1971,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Thomas_Piketty2.jpg/330px-Thomas_Piketty2.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Économie des inégalités",
    summary:
      "Son Capital au XXIe siècle (2013) documente la montée des inégalités. Quand le rendement du capital dépasse la croissance, les inégalités explosent. Best-seller mondial.",
    mainWorks: [
      "Le Capital au XXIe siècle (2013)",
      "r > g : inégalités croissantes",
      "Impôt progressif sur la fortune",
      "Capital et Idéologie (2019)",
    ],
  },
];
