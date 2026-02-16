export interface DemocracyItem {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  image?: string;
  nationality: string;
  movement: string;
  summary: string;
  mainWorks: string[];
  keyIdeas: string[];
}

export const democracy: DemocracyItem[] = [
  {
    id: "athenes",
    name: "Democratie athenienne",
    birthYear: -508,
    deathYear: -322,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Discurso_funebre_pericles.PNG/220px-Discurso_funebre_pericles.PNG",
    nationality: "Grec",
    movement: "Antiquite",
    summary: `La democratie athenienne nait en 508 av. J.-C. avec les reformes de Clisthene, qui reorganise la cite en dix tribus et instaure l'isonomie — l'egalite de tous les citoyens devant la loi. C'est la premiere experience de gouvernement du peuple par le peuple dans l'histoire.

Les citoyens — hommes libres, nes de parents atheniens — se reunissent a l'Ecclesia pour voter directement les lois, declarer la guerre et juger les magistrats. Les fonctions publiques sont attribuees par tirage au sort, garantissant que chacun puisse gouverner a son tour. Seuls les strateges sont elus.

Sous Pericles, au Ve siecle, Athenes connait son apogee democratique. Le misthos (indemnite de fonction) permet aux plus pauvres de participer a la vie politique. Mais cette democratie reste exclusive : femmes, metèques et esclaves en sont exclus, soit environ 85% de la population.

Ce modele, bien que limite, pose les fondements de la pensee democratique occidentale. Le tirage au sort, l'assemblee populaire et la reddition de comptes des magistrats restent des references pour les theoriciens de la democratie.`,
    mainWorks: [
      "Reformes de Clisthene (-508)",
      "Ecclesia - assemblee des citoyens",
      "Tirage au sort des magistrats",
      "Pericles - apogee de la democratie",
    ],
    keyIdeas: ["Democratie directe", "Tirage au sort", "Isonomie", "Citoyennete restreinte"],
  },
  {
    id: "republique-romaine",
    name: "Republique romaine",
    birthYear: -509,
    deathYear: -27,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Maccari-Cicero.jpg/220px-Maccari-Cicero.jpg",
    nationality: "Romain",
    movement: "Antiquite",
    summary: `La Republique romaine s'installe en 509 av. J.-C. apres l'expulsion du dernier roi etrusque. Elle met en place un systeme politique mixte, melant elements monarchiques (les consuls), aristocratiques (le Senat) et democratiques (les assemblees du peuple).

Le Senat, compose d'anciens magistrats issus de l'aristocratie, domine la politique etrangere et les finances. Les magistratures (consuls, preteurs, questeurs) sont collegiales et annuelles, empechant la concentration du pouvoir. Deux consuls gouvernent ensemble, chacun pouvant opposer son veto a l'autre.

L'innovation majeure est le tribunat de la plebe, cree en 494 av. J.-C. Les tribuns, sacro-saints et inviolables, protegent le peuple contre les abus des patriciens. Leur droit de veto peut bloquer toute decision. Les lois Licinio-Sextiennes (367 av. J.-C.) ouvrent le consulat aux plebeiens.

Malgre ces mecanismes, Rome reste une oligarchie de fait : les grandes familles controlent les elections par le clientelisme. La Republique s'effondre au Ier siecle av. J.-C. sous la pression des guerres civiles, mais son modele d'equilibre des pouvoirs inspirera Montesquieu et les Peres fondateurs americains.`,
    mainWorks: [
      "Senat et magistratures",
      "Tribuns de la plebe",
      "SPQR - le peuple et le Senat",
      "Equilibre des pouvoirs",
    ],
    keyIdeas: ["Constitution mixte", "Equilibre des pouvoirs", "Tribunat de la plebe", "Oligarchie de fait"],
  },
  {
    id: "magna-carta",
    name: "Magna Carta",
    birthYear: 1215,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Magna_Carta_%28British_Library_Cotton_MS_Augustus_II.106%29.jpg/220px-Magna_Carta.jpg",
    nationality: "Anglais",
    movement: "Moyen Age",
    summary: `La Magna Carta, signee le 15 juin 1215 a Runnymede, est arrachee au roi Jean sans Terre par une coalition de barons revoltes. Ce document de 63 articles impose pour la premiere fois des limites ecrites au pouvoir royal en Angleterre.

Parmi ses dispositions essentielles : aucun homme libre ne peut etre emprisonne, depossede ou banni sans un jugement legal de ses pairs. Le roi ne peut lever d'impot extraordinaire sans le consentement du Grand Conseil. L'Eglise se voit garantir ses libertes.

Si la charte originelle est annulee par le pape quelques semaines apres sa signature, elle est reemise a plusieurs reprises par les successeurs de Jean. Elle acquiert progressivement une dimension symbolique considerable, bien au-dela de son contenu feodale initial.

Au XVIIe siecle, les parlementaires anglais invoquent la Magna Carta contre les Stuart. Les colons americains s'en inspirent. Elle devient le socle mythique du constitutionnalisme anglo-saxon, ancetre de l'habeas corpus et de l'Etat de droit.`,
    mainWorks: [
      "Limite du pouvoir royal",
      "Droits des barons",
      "Base de l'habeas corpus",
      "Modele constitutionnel",
    ],
    keyIdeas: ["Limitation du pouvoir", "Consentement a l'impot", "Jugement par les pairs", "Constitutionnalisme"],
  },
  {
    id: "parlement-anglais",
    name: "Parlement anglais",
    birthYear: 1265,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/220px-Palace_of_Westminster.jpg",
    nationality: "Anglais",
    movement: "Moyen Age",
    summary: `En 1265, Simon de Montfort, comte de Leicester, convoque pour la premiere fois une assemblee incluant des representants des bourgs et des comtes aux cotes des barons et des prelats. C'est l'acte de naissance du Parlement representatif anglais.

Sous Edouard Ier, le « Model Parliament » de 1295 institutionnalise cette pratique. Le principe est pose : le roi ne peut lever d'impot sans le consentement des representants du royaume. Le Parlement se scinde progressivement en deux chambres — les Lords (noblesse et clerge) et les Communes (representants des comtes et des villes).

Au fil des siecles, les Communes gagnent en pouvoir. Elles obtiennent l'initiative des lois fiscales, puis le droit de mettre en accusation les ministres du roi (impeachment). Le Parlement devient le lieu central du debat politique anglais.

Ce modele bicameral influence directement les institutions de nombreux pays. Le parlementarisme, fonde sur la responsabilite du gouvernement devant les representants du peuple, nait dans cette lente evolution medievale anglaise.`,
    mainWorks: [
      "Premier Parlement (1265)",
      "Chambre des Lords et des Communes",
      "Consentement a l'impot",
      "Modele du parlementarisme",
    ],
    keyIdeas: ["Representation", "Bicameralisme", "Consentement a l'impot", "Parlementarisme"],
  },
  {
    id: "revolution-anglaise",
    name: "Revolutions anglaises",
    birthYear: 1642,
    deathYear: 1689,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Oliver_Cromwell_by_Samuel_Cooper.jpg/220px-Oliver_Cromwell_by_Samuel_Cooper.jpg",
    nationality: "Anglais",
    movement: "Moderne",
    summary: `Les revolutions anglaises du XVIIe siecle transforment radicalement le rapport entre le roi et le Parlement. La premiere guerre civile (1642-1649) oppose Charles Ier, partisan du droit divin, aux parlementaires menes par Oliver Cromwell. Le roi est vaincu, juge et decapite en 1649 — un regicide sans precedent en Europe.

La republique du Commonwealth, puis le Protectorat de Cromwell (1653-1658) echouent a etablir un regime stable. La monarchie est restauree en 1660 avec Charles II, mais les tensions reprennent sous Jacques II, catholique et autoritaire.

La Glorieuse Revolution de 1688 resout la crise sans effusion de sang : Jacques II fuit, et Guillaume d'Orange accepte le trone aux conditions du Parlement. Le Bill of Rights de 1689 interdit au roi de suspendre les lois, de lever des impots ou d'entretenir une armee sans consentement parlementaire.

C'est la naissance de la monarchie constitutionnelle : le roi regne mais ne gouverne pas. Locke theorise cette revolution en affirmant que le pouvoir vient du consentement des gouvernes. Ce modele inspire directement les revolutionnaires americains et francais.`,
    mainWorks: [
      "Guerre civile (1642-1651)",
      "Execution de Charles Ier (1649)",
      "Glorieuse Revolution (1688)",
      "Bill of Rights (1689)",
    ],
    keyIdeas: ["Monarchie constitutionnelle", "Souverainete parlementaire", "Bill of Rights", "Consentement des gouvernes"],
  },
  {
    id: "revolution-americaine-demo",
    name: "Revolution americaine",
    birthYear: 1776,
    deathYear: 1791,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg/220px-Declaration_of_Independence.jpg",
    nationality: "Americain",
    movement: "Revolutions",
    summary: `La Revolution americaine fonde la premiere republique democratique moderne a grande echelle. La Declaration d'independance du 4 juillet 1776, redigee par Jefferson, proclame que tous les hommes sont crees egaux et dotes de droits inalienables — la vie, la liberte et la recherche du bonheur.

La Constitution de 1787, elaboree a Philadelphie, etablit une architecture institutionnelle novatrice. Inspiree de Montesquieu, elle organise une stricte separation des pouvoirs entre l'executif (president), le legislatif (Congres bicameral) et le judiciaire (Cour supreme). Le federalisme partage les competences entre l'Etat federal et les Etats membres.

Le Bill of Rights (1791), constitue des dix premiers amendements, garantit les libertes fondamentales : liberte d'expression, de religion, de la presse, droit de porter des armes, protection contre les perquisitions arbitraires.

Ce modele reste cependant incomplet : l'esclavage est maintenu, les femmes et les Amerindiens sont exclus du suffrage. Il faudra une guerre civile et deux siecles de luttes pour elargir la democratie americaine a tous ses citoyens.`,
    mainWorks: [
      "Declaration d'independance (1776)",
      "Constitution (1787)",
      "Bill of Rights (1791)",
      "Federalisme et separation des pouvoirs",
    ],
    keyIdeas: ["Separation des pouvoirs", "Federalisme", "Droits inalienables", "Republique representative"],
  },
  {
    id: "revolution-francaise-demo",
    name: "Revolution francaise",
    birthYear: 1789,
    deathYear: 1799,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Prise_de_la_Bastille.jpg/220px-Prise_de_la_Bastille.jpg",
    nationality: "Francais",
    movement: "Revolutions",
    summary: `La Revolution francaise de 1789 abolit l'Ancien Regime et proclame des principes universels qui transforment la pensee politique mondiale. La prise de la Bastille le 14 juillet symbolise la chute de l'arbitraire royal. Dans la nuit du 4 aout, les privileges feodaux sont abolis.

La Declaration des droits de l'homme et du citoyen (26 aout 1789) affirme que les hommes naissent libres et egaux en droits, que la souverainete reside dans la Nation, et que la loi est l'expression de la volonte generale. Ces principes, herites des Lumieres, deviennent la reference du droit constitutionnel moderne.

La Revolution traverse cependant des phases violentes. La Terreur (1793-1794), menee par Robespierre et le Comite de salut public, montre les dangers de la dictature au nom du peuple. Des milliers de « suspects » sont guillotines, y compris des revolutionnaires comme Danton.

L'instabilite politique — monarchie constitutionnelle, republique, Terreur, Directoire — se conclut par le coup d'Etat de Bonaparte en 1799. Malgre cet echec a court terme, la Revolution exporte ses idees dans toute l'Europe et inspire les mouvements democratiques du XIXe siecle.`,
    mainWorks: [
      "Prise de la Bastille (14 juillet 1789)",
      "Declaration des droits de l'homme et du citoyen",
      "Souverainete nationale",
      "Abolition des privileges",
    ],
    keyIdeas: ["Souverainete nationale", "Droits de l'homme", "Egalite devant la loi", "Volonte generale"],
  },
  {
    id: "suffrage-universel",
    name: "Suffrage universel masculin",
    birthYear: 1848,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Le_Vote.jpg/220px-Le_Vote.jpg",
    nationality: "Europeen",
    movement: "XIXe siecle",
    summary: `Le suffrage universel masculin marque une rupture fondamentale : le droit de vote cesse d'etre lie a la fortune. Jusqu'alors, le suffrage censitaire reservait la participation politique aux proprietaires — en France, seuls 250 000 hommes votaient sous la monarchie de Juillet.

La revolution de fevrier 1848 en France instaure le suffrage universel masculin d'un coup : le corps electoral passe de 250 000 a 9 millions d'electeurs. C'est une experience fondatrice, meme si le Second Empire en detourne le sens par les candidatures officielles et la pression administrative.

D'autres pays suivent : la Suisse en 1848, l'Empire allemand en 1871 (pour le Reichstag), l'Espagne en 1890. Mais partout le suffrage reste exclusivement masculin, et souvent assorti de conditions de residence ou d'alphabetisation qui excluent les plus pauvres.

L'extension du suffrage transforme la vie politique : naissance des partis de masse, campagnes electorales, presse d'opinion. La democratie cesse d'etre un ideal abstrait pour devenir une pratique de millions de citoyens ordinaires.`,
    mainWorks: [
      "France (1848)",
      "Allemagne (1871)",
      "Fin du suffrage censitaire",
      "Femmes toujours exclues",
    ],
    keyIdeas: ["Fin du cens", "Democratisation du vote", "Partis de masse", "Exclusion des femmes"],
  },
  {
    id: "abolition-esclavage-demo",
    name: "Abolitions et citoyennete",
    birthYear: 1865,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Abraham_Lincoln_head_on_shoulders_photo_portrait.jpg/220px-Abraham_Lincoln.jpg",
    nationality: "International",
    movement: "XIXe siecle",
    summary: `L'abolition de l'esclavage pose la question fondamentale de l'universalite de la citoyennete democratique. Si tous les hommes sont egaux en droits, comment justifier l'exclusion de millions de personnes ? Le XIXe siecle voit les grandes puissances abolir progressivement l'esclavage.

Aux Etats-Unis, le 13e amendement (1865) abolit l'esclavage apres une guerre civile devastatrice. Les 14e et 15e amendements accordent la citoyennete et le droit de vote aux anciens esclaves. Au Bresil, la Lei Aurea de 1888 fait du dernier grand pays esclavagiste des Ameriques un pays libre.

Mais l'abolition legale ne signifie pas l'egalite reelle. Aux Etats-Unis, les lois Jim Crow (1877-1964) instaurent la segregation et privent les Noirs du Sud de leur droit de vote par des taxes electorales, des tests d'alphabetisation et l'intimidation. Au Bresil, aucune reforme agraire n'accompagne la liberation.

L'ecart entre citoyennete formelle et citoyennete reelle devient un theme central de la democratie moderne. Il faudra un siecle de luttes supplementaires pour que les droits civiques deviennent effectifs.`,
    mainWorks: [
      "13e amendement USA (1865)",
      "Abolition au Bresil (1888)",
      "Citoyennete theorique",
      "Discrimination persistante",
    ],
    keyIdeas: ["Citoyennete universelle", "Abolition", "Segregation", "Droits formels vs reels"],
  },
  {
    id: "vote-femmes",
    name: "Droit de vote des femmes",
    birthYear: 1893,
    deathYear: 1971,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Suffragettes%2C_bain_news_service.jpg/220px-Suffragettes%2C_bain_news_service.jpg",
    nationality: "International",
    movement: "XXe siecle",
    summary: `Le droit de vote des femmes paracheve le suffrage universel promis par les revolutions du XVIIIe siecle. La Nouvelle-Zelande ouvre la voie en 1893, suivie de la Finlande en 1906 — premier pays europeen ou les femmes peuvent aussi etre elues.

Le mouvement des suffragettes, ne en Grande-Bretagne, recourt a des methodes radicales : manifestations, greves de la faim, enchainements aux grilles du Parlement. Emmeline Pankhurst et ses filles menent le combat. Le Royaume-Uni accorde le vote aux femmes de plus de 30 ans en 1918, puis a toutes en 1928.

La Premiere Guerre mondiale accelere le processus dans de nombreux pays : les femmes, qui ont remplace les hommes dans les usines, ne peuvent plus etre exclues de la citoyennete. La France n'accorde le vote aux femmes qu'en 1944, la Suisse en 1971 seulement.

L'obtention du droit de vote ne met pas fin aux inegalites politiques. La sous-representation des femmes dans les parlements et les executifs reste un enjeu majeur de la democratie contemporaine, menant aux debats sur la parite et les quotas.`,
    mainWorks: [
      "Nouvelle-Zelande (1893)",
      "Royaume-Uni (1918/1928)",
      "France (1944)",
      "Suisse (1971)",
    ],
    keyIdeas: ["Suffragettes", "Suffrage universel integral", "Egalite politique", "Parite"],
  },
  {
    id: "decolonisation-demo",
    name: "Decolonisation et democratisation",
    birthYear: 1945,
    deathYear: 1975,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Jawaharlal_Nehru_1946.jpg/220px-Jawaharlal_Nehru_1946.jpg",
    nationality: "Global",
    movement: "XXe siecle",
    summary: `La decolonisation, de 1945 a 1975, voit des dizaines de nouveaux Etats acceder a l'independance et adopter des constitutions democratiques. L'Inde de Nehru (1947) devient la plus grande democratie du monde, un exploit sans precedent pour un pays aussi vaste et divers.

Les puissances coloniales avaient exclu les populations autochtones de toute participation politique. L'independance promet l'autodetermination et la citoyennete pour tous. Les constitutions s'inspirent des modeles francais ou britannique, avec parlements, elections et droits fondamentaux.

Mais la realite est plus sombre. En Afrique, la plupart des democraties naissantes derivent vers le parti unique ou la dictature militaire des les annees 1960. L'absence d'experience democratique, les frontieres artificielles heritees de la colonisation, les rivalites ethniques et l'ingerence des grandes puissances durant la Guerre froide minent les institutions.

Seules quelques exceptions — l'Inde, le Botswana, le Costa Rica — maintiennent une democratie continue. Ce bilan mitige pose la question des conditions necessaires a la democratie : celle-ci peut-elle etre imposee ou importee sans un enracinement social et culturel prealable ?`,
    mainWorks: [
      "Independances asiatiques (1940s-50s)",
      "Independances africaines (1960s)",
      "Constitutions democratiques",
      "Derives autoritaires frequentes",
    ],
    keyIdeas: ["Autodetermination", "Transfert institutionnel", "Parti unique", "Conditions de la democratie"],
  },
  {
    id: "chute-mur",
    name: "Chute du communisme",
    birthYear: 1989,
    deathYear: 1991,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Berlin_Wall_Graffiti.jpg/220px-Berlin_Wall_Graffiti.jpg",
    nationality: "Europeen",
    movement: "Contemporain",
    summary: `La chute du mur de Berlin le 9 novembre 1989 et l'effondrement de l'URSS en 1991 constituent le plus grand elargissement de la democratie depuis 1945. En quelques mois, les regimes communistes d'Europe de l'Est s'effondrent les uns apres les autres, souvent pacifiquement.

La Pologne ouvre la voie avec les elections semi-libres de juin 1989, ou Solidarnosc triomphe. La Hongrie ouvre sa frontiere avec l'Autriche. La Tchecoslovaquie vit sa « Revolution de velours », la Roumanie une revolution sanglante. L'Allemagne se reunifie en 1990.

Francis Fukuyama proclame la « fin de l'histoire » : la democratie liberale et l'economie de marche auraient definitivement triomphe. L'Union europeenne s'elargit a l'Est, integrant progressivement les anciennes « democraties populaires ».

Mais la transition est inegale. Si la Pologne, la Republique tcheque et les pays baltes consolident leurs democraties, la Russie de Poutine derive vers l'autoritarisme des les annees 2000. La Hongrie d'Orban remet en cause l'Etat de droit depuis 2010. L'euphorie democratique des annees 1990 laisse place a un bilan plus nuance.`,
    mainWorks: [
      "Chute du mur de Berlin (1989)",
      "Revolutions de velours",
      "Dissolution de l'URSS (1991)",
      "Elargissement de l'UE",
    ],
    keyIdeas: ["Fin de l'histoire", "Transition democratique", "Elargissement europeen", "Regression autoritaire"],
  },
  {
    id: "printemps-arabe",
    name: "Printemps arabe",
    birthYear: 2010,
    deathYear: 2012,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Tahrir_Square_on_February11.png/220px-Tahrir_Square_on_February11.png",
    nationality: "Arabe",
    movement: "Contemporain",
    summary: `Le Printemps arabe debute en decembre 2010 en Tunisie, lorsque Mohamed Bouazizi, vendeur ambulant humilie par la police, s'immole par le feu. En quelques semaines, des soulevements populaires massifs renversent le president Ben Ali, au pouvoir depuis 23 ans.

La revolte se propage a l'ensemble du monde arabe. En Egypte, des millions de manifestants occupent la place Tahrir au Caire et forcent Hosni Moubarak a demissionner apres 30 ans de pouvoir. En Libye, une insurrection armee, soutenue par l'OTAN, renverse Kadhafi. La Syrie plonge dans une guerre civile devastatrice.

Les reseaux sociaux jouent un role inédit : Facebook et Twitter permettent de coordonner les manifestations, diffuser les images et contourner la censure. La jeunesse urbaine, eduquee et connectee, est le moteur du mouvement.

Mais les espoirs democratiques sont largement decus. L'Egypte retourne a la dictature militaire avec Sissi en 2013. La Libye sombre dans le chaos. La Syrie est ravagee. Seule la Tunisie reussit une transition democratique, avant de reculer a son tour en 2021 sous la presidence de Kais Saied.`,
    mainWorks: [
      "Revolution tunisienne (2010-2011)",
      "Chute de Moubarak en Egypte",
      "Guerres civiles (Libye, Syrie)",
      "Echec sauf en Tunisie (temporaire)",
    ],
    keyIdeas: ["Reseaux sociaux", "Soulevements populaires", "Transition fragile", "Contre-revolutions"],
  },
  {
    id: "recul-democratique",
    name: "Recul democratique mondial",
    birthYear: 2006,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Freedom_House_world_map_2022.svg/220px-Freedom_House_world_map_2022.svg.png",
    nationality: "Global",
    movement: "Contemporain",
    summary: `Depuis 2006, l'ONG Freedom House enregistre chaque annee un recul net de la liberte dans le monde. Apres une vague de democratisation sans precedent (1974-2005), le mouvement s'inverse : on parle de « recession democratique » ou d'« autocratisation ».

Le phenomene touche toutes les regions. Des democraties etablies voient leurs institutions s'eroder : polarisation extreme aux Etats-Unis, montee des populismes en Europe, attaques contre la justice independante en Pologne et en Hongrie. Viktor Orban theorise ouvertement la « democratie illiberale ».

Les autocraties se renforcent et exportent leur modele. La Russie de Poutine, la Chine de Xi Jinping, la Turquie d'Erdogan montrent qu'un regime autoritaire peut assurer croissance economique et stabilite, seduisant les opinions publiques desenchantees.

La desinformation numerique accelere le processus. Les reseaux sociaux, qui avaient porte le Printemps arabe, deviennent des outils de manipulation : trolls russes, deepfakes, bulles algorithmiques fragmentent le debat public. La democratie fait face a un defi existentiel : comment defendre le pluralisme a l'ere de la post-verite ?`,
    mainWorks: [
      "Erosion des normes democratiques",
      "Montee des populismes",
      "Autocratisation (Russie, Turquie, Hongrie)",
      "Desinformation et reseaux sociaux",
    ],
    keyIdeas: ["Recession democratique", "Democratie illiberale", "Desinformation", "Polarisation"],
  },
  {
    id: "democratie-participative",
    name: "Democratie participative",
    birthYear: 1989,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Convention_citoyenne_pour_le_climat.jpg/220px-Convention_citoyenne_pour_le_climat.jpg",
    nationality: "Global",
    movement: "Contemporain",
    summary: `Face a la crise de confiance envers la democratie representative — abstention record, defiance envers les elus, sentiment d'impuissance citoyenne — de nouvelles formes de participation emergent depuis la fin du XXe siecle.

Le budget participatif, invente a Porto Alegre (Bresil) en 1989, permet aux habitants de decider directement de l'allocation d'une partie du budget municipal. L'experience est reproduite dans des milliers de villes a travers le monde, de Paris a Seoul.

Les conventions citoyennes tirees au sort renouvellent l'ideal athenien. En Irlande, une assemblee citoyenne a permis de debloquer la question du mariage homosexuel (2015) et de l'avortement (2018). En France, la Convention citoyenne pour le climat (2019-2020) reunit 150 citoyens tires au sort pour proposer des mesures contre le rechauffement climatique.

Ces experiences ouvrent des pistes prometteuses mais posent aussi des questions : les propositions citoyennes sont-elles contraignantes ? Comment articuler deliberation citoyenne et decision parlementaire ? La democratie participative complete-t-elle ou concurrence-t-elle la democratie representative ?`,
    mainWorks: [
      "Budget participatif (Porto Alegre, 1989)",
      "Conventions citoyennes",
      "Tirage au sort (comme a Athenes)",
      "Democratie deliberative",
    ],
    keyIdeas: ["Budget participatif", "Tirage au sort", "Deliberation", "Crise de la representation"],
  },
];
