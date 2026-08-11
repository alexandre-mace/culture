export interface DemocracyItem {
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
  keyIdeas: string[];
}

export const democracy: DemocracyItem[] = [
  {
    id: "athenes",
    name: "Démocratie athénienne",
    birthYear: -508,
    deathYear: -322,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/AGMA_St%C3%A8le_de_la_d%C3%A9mocratie.jpg/330px-AGMA_St%C3%A8le_de_la_d%C3%A9mocratie.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Grec",
    movement: "Antiquité",
    family: "Racines anciennes",
    summary: `La démocratie athénienne naît en 508 av. J.-C. avec les réformes de Clisthène, qui réorganise la cité en dix tribus et instaure l'isonomie — l'égalité de tous les citoyens devant la loi. C'est la première expérience de gouvernement du peuple par le peuple dans l'histoire.

Les citoyens — hommes libres, nés de parents athéniens — se réunissent à l'Ecclésia pour voter directement les lois, déclarer la guerre et juger les magistrats. Les fonctions publiques sont attribuées par tirage au sort, garantissant que chacun puisse gouverner à son tour. Seuls les stratèges sont élus.

Sous Périclès, au Ve siècle, Athènes connaît son apogée démocratique. Le misthos (indemnité de fonction) permet aux plus pauvres de participer à la vie politique. Mais cette démocratie reste exclusive : femmes, métèques et esclaves en sont exclus, soit environ 85% de la population.

Ce modèle, bien que limité, pose les fondements de la pensée démocratique occidentale. Le tirage au sort, l'assemblée populaire et la reddition de comptes des magistrats restent des références pour les théoriciens de la démocratie.`,
    mainWorks: [
      "Réformes de Clisthène (-508)",
      "Ecclésia - assemblée des citoyens",
      "Tirage au sort des magistrats",
      "Périclès - apogée de la démocratie",
    ],
    keyIdeas: ["Démocratie directe", "Tirage au sort", "Isonomie", "Citoyenneté restreinte"],
  },
  {
    id: "republique-romaine",
    name: "République romaine",
    birthYear: -509,
    deathYear: -27,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Republica_romana_animada.GIF/330px-Republica_romana_animada.GIF?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Romain",
    movement: "Antiquité",
    family: "Racines anciennes",
    summary: `La République romaine s'installe en 509 av. J.-C. après l'expulsion du dernier roi étrusque. Elle met en place un système politique mixte, mêlant éléments monarchiques (les consuls), aristocratiques (le Sénat) et démocratiques (les assemblées du peuple).

Le Sénat, composé d'anciens magistrats issus de l'aristocratie, domine la politique étrangère et les finances. Les magistratures (consuls, préteurs, questeurs) sont collégiales et annuelles, empêchant la concentration du pouvoir. Deux consuls gouvernent ensemble, chacun pouvant opposer son veto à l'autre.

L'innovation majeure est le tribunat de la plèbe, créé en 494 av. J.-C. Les tribuns, sacro-saints et inviolables, protègent le peuple contre les abus des patriciens. Leur droit de veto peut bloquer toute décision. Les lois Licinio-Sextiennes (367 av. J.-C.) ouvrent le consulat aux plébéiens.

Malgré ces mécanismes, Rome reste une oligarchie de fait : les grandes familles contrôlent les élections par le clientélisme. La République s'effondre au Ier siècle av. J.-C. sous la pression des guerres civiles, mais son modèle d'équilibre des pouvoirs inspirera Montesquieu et les Pères fondateurs américains.`,
    mainWorks: [
      "Sénat et magistratures",
      "Tribuns de la plèbe",
      "SPQR - le peuple et le Sénat",
      "Équilibre des pouvoirs",
    ],
    keyIdeas: ["Constitution mixte", "Équilibre des pouvoirs", "Tribunat de la plèbe", "Oligarchie de fait"],
  },
  {
    id: "magna-carta",
    name: "Magna Carta",
    birthYear: 1215,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Magna_Carta_%28British_Library_Cotton_MS_Augustus_II.106%29.jpg/330px-Magna_Carta_%28British_Library_Cotton_MS_Augustus_II.106%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Anglais",
    movement: "Moyen Âge",
    family: "Racines anciennes",
    summary: `La Magna Carta, signée le 15 juin 1215 à Runnymede, est arrachée au roi Jean sans Terre par une coalition de barons révoltés. Ce document de 63 articles impose pour la première fois des limites écrites au pouvoir royal en Angleterre.

Parmi ses dispositions essentielles : aucun homme libre ne peut être emprisonné, dépossédé ou banni sans un jugement légal de ses pairs. Le roi ne peut lever d'impôt extraordinaire sans le consentement du Grand Conseil. L'Église se voit garantir ses libertés.

Si la charte originelle est annulée par le pape quelques semaines après sa signature, elle est réémise à plusieurs reprises par les successeurs de Jean. Elle acquiert progressivement une dimension symbolique considérable, bien au-delà de son contenu féodal initial.

Au XVIIe siècle, les parlementaires anglais invoquent la Magna Carta contre les Stuart. Les colons américains s'en inspirent. Elle devient le socle mythique du constitutionnalisme anglo-saxon, ancêtre de l'habeas corpus et de l'État de droit.`,
    mainWorks: [
      "Limite du pouvoir royal",
      "Droits des barons",
      "Base de l'habeas corpus",
      "Modèle constitutionnel",
    ],
    keyIdeas: ["Limitation du pouvoir", "Consentement à l'impôt", "Jugement par les pairs", "Constitutionnalisme"],
  },
  {
    id: "parlement-anglais",
    name: "Parlement anglais",
    birthYear: 1265,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Medieval_parliament_edward.Jpg/330px-Medieval_parliament_edward.Jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Anglais",
    movement: "Moyen Âge",
    family: "Racines anciennes",
    influences: ["magna-carta"],
    summary: `En 1265, Simon de Montfort, comte de Leicester, convoque pour la première fois une assemblée incluant des représentants des bourgs et des comtés aux côtés des barons et des prélats. C'est l'acte de naissance du Parlement représentatif anglais.

Sous Édouard Ier, le « Model Parliament » de 1295 institutionnalise cette pratique. Le principe est posé : le roi ne peut lever d'impôt sans le consentement des représentants du royaume. Le Parlement se scinde progressivement en deux chambres — les Lords (noblesse et clergé) et les Communes (représentants des comtés et des villes).

Au fil des siècles, les Communes gagnent en pouvoir. Elles obtiennent l'initiative des lois fiscales, puis le droit de mettre en accusation les ministres du roi (impeachment). Le Parlement devient le lieu central du débat politique anglais.

Ce modèle bicaméral influence directement les institutions de nombreux pays. Le parlementarisme, fondé sur la responsabilité du gouvernement devant les représentants du peuple, naît dans cette lente évolution médiévale anglaise.`,
    mainWorks: [
      "Premier Parlement (1265)",
      "Chambre des Lords et des Communes",
      "Consentement à l'impôt",
      "Modèle du parlementarisme",
    ],
    keyIdeas: ["Représentation", "Bicaméralisme", "Consentement à l'impôt", "Parlementarisme"],
  },
  {
    id: "revolution-anglaise",
    name: "Révolutions anglaises",
    birthYear: 1642,
    deathYear: 1689,
    nationality: "Anglais",
    movement: "Moderne",
    family: "Âge des révolutions",
    influences: ["magna-carta", "parlement-anglais"],
    summary: `Les révolutions anglaises du XVIIe siècle transforment radicalement le rapport entre le roi et le Parlement. La première guerre civile (1642-1649) oppose Charles Ier, partisan du droit divin, aux parlementaires menés par Oliver Cromwell. Le roi est vaincu, jugé et décapité en 1649 — un régicide sans précédent en Europe.

La république du Commonwealth, puis le Protectorat de Cromwell (1653-1658) échouent à établir un régime stable. La monarchie est restaurée en 1660 avec Charles II, mais les tensions reprennent sous Jacques II, catholique et autoritaire.

La Glorieuse Révolution de 1688 résout la crise sans effusion de sang : Jacques II fuit, et Guillaume d'Orange accepte le trône aux conditions du Parlement. Le Bill of Rights de 1689 interdit au roi de suspendre les lois, de lever des impôts ou d'entretenir une armée sans consentement parlementaire.

C'est la naissance de la monarchie constitutionnelle : le roi règne mais ne gouverne pas. Locke théorise cette révolution en affirmant que le pouvoir vient du consentement des gouvernés. Ce modèle inspire directement les révolutionnaires américains et français.`,
    mainWorks: [
      "Guerre civile (1642-1651)",
      "Exécution de Charles Ier (1649)",
      "Glorieuse Révolution (1688)",
      "Bill of Rights (1689)",
    ],
    keyIdeas: ["Monarchie constitutionnelle", "Souveraineté parlementaire", "Bill of Rights", "Consentement des gouvernés"],
  },
  {
    id: "revolution-americaine-demo",
    name: "Révolution américaine",
    birthYear: 1776,
    deathYear: 1791,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg/330px-Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Révolutions",
    family: "Âge des révolutions",
    influences: ["republique-romaine", "magna-carta", "revolution-anglaise"],
    summary: `La Révolution américaine fonde la première république démocratique moderne à grande échelle. La Déclaration d'indépendance du 4 juillet 1776, rédigée par Jefferson, proclame que tous les hommes sont créés égaux et dotés de droits inaliénables — la vie, la liberté et la recherche du bonheur.

La Constitution de 1787, élaborée à Philadelphie, établit une architecture institutionnelle novatrice. Inspirée de Montesquieu, elle organise une stricte séparation des pouvoirs entre l'exécutif (président), le législatif (Congrès bicaméral) et le judiciaire (Cour suprême). Le fédéralisme partage les compétences entre l'État fédéral et les États membres.

Le Bill of Rights (1791), constitué des dix premiers amendements, garantit les libertés fondamentales : liberté d'expression, de religion, de la presse, droit de porter des armes, protection contre les perquisitions arbitraires.

Ce modèle reste cependant incomplet : l'esclavage est maintenu, les femmes et les Amérindiens sont exclus du suffrage. Il faudra une guerre civile et deux siècles de luttes pour élargir la démocratie américaine à tous ses citoyens.`,
    mainWorks: [
      "Déclaration d'indépendance (1776)",
      "Constitution (1787)",
      "Bill of Rights (1791)",
      "Fédéralisme et séparation des pouvoirs",
    ],
    keyIdeas: ["Séparation des pouvoirs", "Fédéralisme", "Droits inaliénables", "République représentative"],
  },
  {
    id: "revolution-francaise-demo",
    name: "Révolution française",
    birthYear: 1789,
    deathYear: 1799,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Prise_de_la_Bastille.jpg/330px-Prise_de_la_Bastille.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Révolutions",
    family: "Âge des révolutions",
    influences: ["revolution-anglaise", "revolution-americaine-demo"],
    summary: `La Révolution française de 1789 abolit l'Ancien Régime et proclame des principes universels qui transforment la pensée politique mondiale. La prise de la Bastille le 14 juillet symbolise la chute de l'arbitraire royal. Dans la nuit du 4 août, les privilèges féodaux sont abolis.

La Déclaration des droits de l'homme et du citoyen (26 août 1789) affirme que les hommes naissent libres et égaux en droits, que la souveraineté réside dans la Nation, et que la loi est l'expression de la volonté générale. Ces principes, hérités des Lumières, deviennent la référence du droit constitutionnel moderne.

La Révolution traverse cependant des phases violentes. La Terreur (1793-1794), menée par Robespierre et le Comité de salut public, montre les dangers de la dictature au nom du peuple. Des milliers de « suspects » sont guillotinés, y compris des révolutionnaires comme Danton.

L'instabilité politique — monarchie constitutionnelle, république, Terreur, Directoire — se conclut par le coup d'État de Bonaparte en 1799. Malgré cet échec à court terme, la Révolution exporte ses idées dans toute l'Europe et inspire les mouvements démocratiques du XIXe siècle.`,
    mainWorks: [
      "Prise de la Bastille (14 juillet 1789)",
      "Déclaration des droits de l'homme et du citoyen",
      "Souveraineté nationale",
      "Abolition des privilèges",
    ],
    keyIdeas: ["Souveraineté nationale", "Droits de l'homme", "Égalité devant la loi", "Volonté générale"],
  },
  {
    id: "suffrage-universel",
    name: "Suffrage universel masculin",
    birthYear: 1848,
    nationality: "Européen",
    movement: "XIXe siècle",
    family: "Conquête du suffrage",
    influences: ["revolution-francaise-demo"],
    summary: `Le suffrage universel masculin marque une rupture fondamentale : le droit de vote cesse d'être lié à la fortune. Jusqu'alors, le suffrage censitaire réservait la participation politique aux propriétaires — en France, seuls 250 000 hommes votaient sous la monarchie de Juillet.

La révolution de février 1848 en France instaure le suffrage universel masculin d'un coup : le corps électoral passe de 250 000 à 9 millions d'électeurs. C'est une expérience fondatrice, même si le Second Empire en détourne le sens par les candidatures officielles et la pression administrative.

D'autres pays suivent : la Suisse en 1848, l'Empire allemand en 1871 (pour le Reichstag), l'Espagne en 1890. Mais partout le suffrage reste exclusivement masculin, et souvent assorti de conditions de résidence ou d'alphabétisation qui excluent les plus pauvres.

L'extension du suffrage transforme la vie politique : naissance des partis de masse, campagnes électorales, presse d'opinion. La démocratie cesse d'être un idéal abstrait pour devenir une pratique de millions de citoyens ordinaires.`,
    mainWorks: [
      "France (1848)",
      "Allemagne (1871)",
      "Fin du suffrage censitaire",
      "Femmes toujours exclues",
    ],
    keyIdeas: ["Fin du cens", "Démocratisation du vote", "Partis de masse", "Exclusion des femmes"],
  },
  {
    id: "abolition-esclavage-demo",
    name: "Abolitions et citoyenneté",
    birthYear: 1865,
    nationality: "International",
    movement: "XIXe siècle",
    family: "Conquête du suffrage",
    influences: ["revolution-americaine-demo"],
    summary: `L'abolition de l'esclavage pose la question fondamentale de l'universalité de la citoyenneté démocratique. Si tous les hommes sont égaux en droits, comment justifier l'exclusion de millions de personnes ? Le XIXe siècle voit les grandes puissances abolir progressivement l'esclavage.

Aux États-Unis, le 13e amendement (1865) abolit l'esclavage après une guerre civile dévastatrice. Les 14e et 15e amendements accordent la citoyenneté et le droit de vote aux anciens esclaves. Au Brésil, la Lei Aurea de 1888 fait du dernier grand pays esclavagiste des Amériques un pays libre.

Mais l'abolition légale ne signifie pas l'égalité réelle. Aux États-Unis, les lois Jim Crow (1877-1964) instaurent la ségrégation et privent les Noirs du Sud de leur droit de vote par des taxes électorales, des tests d'alphabétisation et l'intimidation. Au Brésil, aucune réforme agraire n'accompagne la libération.

L'écart entre citoyenneté formelle et citoyenneté réelle devient un thème central de la démocratie moderne. Il faudra un siècle de luttes supplémentaires pour que les droits civiques deviennent effectifs.`,
    mainWorks: [
      "13e amendement USA (1865)",
      "Abolition au Brésil (1888)",
      "Citoyenneté théorique",
      "Discrimination persistante",
    ],
    keyIdeas: ["Citoyenneté universelle", "Abolition", "Ségrégation", "Droits formels vs réels"],
  },
  {
    id: "vote-femmes",
    name: "Droit de vote des femmes",
    birthYear: 1893,
    deathYear: 1971,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Annie_Kenney_and_Christabel_Pankhurst.jpg/330px-Annie_Kenney_and_Christabel_Pankhurst.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "International",
    movement: "XXe siècle",
    family: "Conquête du suffrage",
    influences: ["suffrage-universel"],
    summary: `Le droit de vote des femmes parachève le suffrage universel promis par les révolutions du XVIIIe siècle. La Nouvelle-Zélande ouvre la voie en 1893, suivie de la Finlande en 1906 — premier pays européen où les femmes peuvent aussi être élues.

Le mouvement des suffragettes, né en Grande-Bretagne, recourt à des méthodes radicales : manifestations, grèves de la faim, enchaînements aux grilles du Parlement. Emmeline Pankhurst et ses filles mènent le combat. Le Royaume-Uni accorde le vote aux femmes de plus de 30 ans en 1918, puis à toutes en 1928.

La Première Guerre mondiale accélère le processus dans de nombreux pays : les femmes, qui ont remplacé les hommes dans les usines, ne peuvent plus être exclues de la citoyenneté. La France n'accorde le vote aux femmes qu'en 1944, la Suisse en 1971 seulement.

L'obtention du droit de vote ne met pas fin aux inégalités politiques. La sous-représentation des femmes dans les parlements et les exécutifs reste un enjeu majeur de la démocratie contemporaine, menant aux débats sur la parité et les quotas.`,
    mainWorks: [
      "Nouvelle-Zélande (1893)",
      "Royaume-Uni (1918/1928)",
      "France (1944)",
      "Suisse (1971)",
    ],
    keyIdeas: ["Suffragettes", "Suffrage universel intégral", "Égalité politique", "Parité"],
  },
  {
    id: "decolonisation-demo",
    name: "Décolonisation et démocratisation",
    birthYear: 1945,
    deathYear: 1975,
    nationality: "Global",
    movement: "XXe siècle",
    family: "Conquête du suffrage",
    summary: `La décolonisation, de 1945 à 1975, voit des dizaines de nouveaux États accéder à l'indépendance et adopter des constitutions démocratiques. L'Inde de Nehru (1947) devient la plus grande démocratie du monde, un exploit sans précédent pour un pays aussi vaste et divers.

Les puissances coloniales avaient exclu les populations autochtones de toute participation politique. L'indépendance promet l'autodétermination et la citoyenneté pour tous. Les constitutions s'inspirent des modèles français ou britannique, avec parlements, élections et droits fondamentaux.

Mais la réalité est plus sombre. En Afrique, la plupart des démocraties naissantes dérivent vers le parti unique ou la dictature militaire dès les années 1960. L'absence d'expérience démocratique, les frontières artificielles héritées de la colonisation, les rivalités ethniques et l'ingérence des grandes puissances durant la Guerre froide minent les institutions.

Seules quelques exceptions — l'Inde, le Botswana, le Costa Rica — maintiennent une démocratie continue. Ce bilan mitigé pose la question des conditions nécessaires à la démocratie : celle-ci peut-elle être imposée ou importée sans un enracinement social et culturel préalable ?`,
    mainWorks: [
      "Indépendances asiatiques (1940s-50s)",
      "Indépendances africaines (1960s)",
      "Constitutions démocratiques",
      "Dérives autoritaires fréquentes",
    ],
    keyIdeas: ["Autodétermination", "Transfert institutionnel", "Parti unique", "Conditions de la démocratie"],
  },
  {
    id: "chute-mur",
    name: "Chute du communisme",
    birthYear: 1989,
    deathYear: 1991,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Fallen_statue_of_Lenin.JPG/330px-Fallen_statue_of_Lenin.JPG?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Européen",
    movement: "Contemporain",
    family: "Enjeux contemporains",
    summary: `La chute du mur de Berlin le 9 novembre 1989 et l'effondrement de l'URSS en 1991 constituent le plus grand élargissement de la démocratie depuis 1945. En quelques mois, les régimes communistes d'Europe de l'Est s'effondrent les uns après les autres, souvent pacifiquement.

La Pologne ouvre la voie avec les élections semi-libres de juin 1989, où Solidarnosc triomphe. La Hongrie ouvre sa frontière avec l'Autriche. La Tchécoslovaquie vit sa « Révolution de velours », la Roumanie une révolution sanglante. L'Allemagne se réunifie en 1990.

Francis Fukuyama proclame la « fin de l'histoire » : la démocratie libérale et l'économie de marché auraient définitivement triomphé. L'Union européenne s'élargit à l'Est, intégrant progressivement les anciennes « démocraties populaires ».

Mais la transition est inégale. Si la Pologne, la République tchèque et les pays baltes consolident leurs démocraties, la Russie de Poutine dérive vers l'autoritarisme dès les années 2000. La Hongrie d'Orban remet en cause l'État de droit depuis 2010. L'euphorie démocratique des années 1990 laisse place à un bilan plus nuancé.`,
    mainWorks: [
      "Chute du mur de Berlin (1989)",
      "Révolutions de velours",
      "Dissolution de l'URSS (1991)",
      "Élargissement de l'UE",
    ],
    keyIdeas: ["Fin de l'histoire", "Transition démocratique", "Élargissement européen", "Régression autoritaire"],
  },
  {
    id: "printemps-arabe",
    name: "Printemps arabe",
    birthYear: 2010,
    deathYear: 2012,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Arab_Spring_map.svg/langfr-330px-Arab_Spring_map.svg.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Arabe",
    movement: "Contemporain",
    family: "Enjeux contemporains",
    summary: `Le Printemps arabe débute en décembre 2010 en Tunisie, lorsque Mohamed Bouazizi, vendeur ambulant humilié par la police, s'immole par le feu. En quelques semaines, des soulèvements populaires massifs renversent le président Ben Ali, au pouvoir depuis 23 ans.

La révolte se propage à l'ensemble du monde arabe. En Égypte, des millions de manifestants occupent la place Tahrir au Caire et forcent Hosni Moubarak à démissionner après 30 ans de pouvoir. En Libye, une insurrection armée, soutenue par l'OTAN, renverse Kadhafi. La Syrie plonge dans une guerre civile dévastatrice.

Les réseaux sociaux jouent un rôle inédit : Facebook et Twitter permettent de coordonner les manifestations, diffuser les images et contourner la censure. La jeunesse urbaine, éduquée et connectée, est le moteur du mouvement.

Mais les espoirs démocratiques sont largement déçus. L'Égypte retourne à la dictature militaire avec Sissi en 2013. La Libye sombre dans le chaos. La Syrie est ravagée. Seule la Tunisie réussit une transition démocratique, avant de reculer à son tour en 2021 sous la présidence de Kaïs Saïed.`,
    mainWorks: [
      "Révolution tunisienne (2010-2011)",
      "Chute de Moubarak en Égypte",
      "Guerres civiles (Libye, Syrie)",
      "Échec sauf en Tunisie (temporaire)",
    ],
    keyIdeas: ["Réseaux sociaux", "Soulèvements populaires", "Transition fragile", "Contre-révolutions"],
  },
  {
    id: "recul-democratique",
    name: "Recul démocratique mondial",
    birthYear: 2006,
    nationality: "Global",
    movement: "Contemporain",
    family: "Enjeux contemporains",
    summary: `Depuis 2006, l'ONG Freedom House enregistre chaque année un recul net de la liberté dans le monde. Après une vague de démocratisation sans précédent (1974-2005), le mouvement s'inverse : on parle de « récession démocratique » ou d'« autocratisation ».

Le phénomène touche toutes les régions. Des démocraties établies voient leurs institutions s'éroder : polarisation extrême aux États-Unis, montée des populismes en Europe, attaques contre la justice indépendante en Pologne et en Hongrie. Viktor Orban théorise ouvertement la « démocratie illibérale ».

Les autocraties se renforcent et exportent leur modèle. La Russie de Poutine, la Chine de Xi Jinping, la Turquie d'Erdogan montrent qu'un régime autoritaire peut assurer croissance économique et stabilité, séduisant les opinions publiques désenchantées.

La désinformation numérique accélère le processus. Les réseaux sociaux, qui avaient porté le Printemps arabe, deviennent des outils de manipulation : trolls russes, deepfakes, bulles algorithmiques fragmentent le débat public. La démocratie fait face à un défi existentiel : comment défendre le pluralisme à l'ère de la post-vérité ?`,
    mainWorks: [
      "Érosion des normes démocratiques",
      "Montée des populismes",
      "Autocratisation (Russie, Turquie, Hongrie)",
      "Désinformation et réseaux sociaux",
    ],
    keyIdeas: ["Récession démocratique", "Démocratie illibérale", "Désinformation", "Polarisation"],
  },
  {
    id: "democratie-participative",
    name: "Démocratie participative",
    birthYear: 1989,
    nationality: "Global",
    movement: "Contemporain",
    family: "Enjeux contemporains",
    influences: ["athenes"],
    summary: `Face à la crise de confiance envers la démocratie représentative — abstention record, défiance envers les élus, sentiment d'impuissance citoyenne — de nouvelles formes de participation émergent depuis la fin du XXe siècle.

Le budget participatif, inventé à Porto Alegre (Brésil) en 1989, permet aux habitants de décider directement de l'allocation d'une partie du budget municipal. L'expérience est reproduite dans des milliers de villes à travers le monde, de Paris à Séoul.

Les conventions citoyennes tirées au sort renouvellent l'idéal athénien. En Irlande, une assemblée citoyenne a permis de débloquer la question du mariage homosexuel (2015) et de l'avortement (2018). En France, la Convention citoyenne pour le climat (2019-2020) réunit 150 citoyens tirés au sort pour proposer des mesures contre le réchauffement climatique.

Ces expériences ouvrent des pistes prometteuses mais posent aussi des questions : les propositions citoyennes sont-elles contraignantes ? Comment articuler délibération citoyenne et décision parlementaire ? La démocratie participative complète-t-elle ou concurrence-t-elle la démocratie représentative ?`,
    mainWorks: [
      "Budget participatif (Porto Alegre, 1989)",
      "Conventions citoyennes",
      "Tirage au sort (comme à Athènes)",
      "Démocratie délibérative",
    ],
    keyIdeas: ["Budget participatif", "Tirage au sort", "Délibération", "Crise de la représentation"],
  },
];
