export interface Filmmaker {
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

export const filmmakers: Filmmaker[] = [
  {
    id: "melies",
    name: "Georges Melies",
    birthYear: 1861,
    deathYear: 1938,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Georges_M%C3%A9li%C3%A8s.jpg?width=220",
    nationality: "Francais",
    movement: "Cinema des premiers temps",
    summary: `Georges Melies nait a Paris dans une famille de fabricants de chaussures. Passionne de magie et d'illusion, il reprend le theatre Robert-Houdin et devient un prestidigitateur renomme. En 1895, il assiste a la premiere projection des freres Lumiere et comprend immediatement le potentiel du cinematographe.

Des 1896, il realise ses premiers films et decouvre par hasard le trucage : une panne de camera cree une disparition magique. Il developpe alors tout un arsenal d'effets speciaux : surimpressions, fondus, arrets de camera, decors peints. Le cinema devient un art de l'illusion.

Le Voyage dans la Lune (1902), avec son celebre plan de la fusee dans l'oeil de la Lune, est le premier chef-d'oeuvre du cinema de fiction. Melies produit des centaines de "feeries" dans son studio de Montreuil, inventant le spectacle cinematographique, les costumes, les decors elabores.

Ruine par la guerre et le piratage de ses films, Melies finit vendeur de jouets a la gare Montparnasse. Redecouvert dans les annees 1930, il recoit la Legion d'honneur. Le cinema lui doit l'invention de la mise en scene, des effets speciaux et du film comme oeuvre d'imagination.`,
    mainWorks: ["Le Voyage dans la Lune", "Le Royaume des fees", "L'Homme a la tete de caoutchouc", "Les Quatre Cents Farces du diable"],
    keyIdeas: ["Trucages", "Feerie", "Spectacle", "Pionnier"],
  },
  {
    id: "griffith",
    name: "D.W. Griffith",
    birthYear: 1875,
    deathYear: 1948,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/D._W._Griffith_1916.jpg?width=220",
    nationality: "Americain",
    movement: "Cinema muet",
    summary: `David Wark Griffith nait dans le Kentucky, fils d'un colonel confedere ruine par la guerre de Secession. Apres une carriere d'acteur itinerant, il rejoint la Biograph Company comme realisateur et tourne plus de 400 courts metrages entre 1908 et 1913.

Griffith invente le langage cinematographique moderne : gros plan, montage parallele, travelling, flashback. Il comprend que le plan, et non la scene theatrale, est l'unite de base du film. Ses innovations techniques sont mises au service d'une narration de plus en plus ambitieuse.

Naissance d'une nation (1915), fresque de trois heures sur la guerre de Secession, revolutionne le cinema par son ampleur et sa maitrise. Mais sa glorification du Ku Klux Klan provoque des emeutes et reste une tache indelebile. Intolerance (1916), son chef-d'oeuvre, repond aux critiques par un hymne a la tolerance.

Cofondateur de United Artists avec Chaplin, Pickford et Fairbanks, Griffith decline dans les annees 1920, depasse par de nouveaux talents. Il meurt oublie dans un hotel d'Hollywood. Pere du cinema narratif, il reste une figure controversee, genie et raciste.`,
    mainWorks: ["Naissance d'une nation", "Intolerance", "Le Lys brise", "A travers l'orage", "Les Deux Orphelines"],
    keyIdeas: ["Montage", "Gros plan", "Epopee", "Langage cinematographique"],
  },
  {
    id: "chaplin",
    name: "Charlie Chaplin",
    birthYear: 1889,
    deathYear: 1977,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Charlie_Chaplin.jpg?width=220",
    nationality: "Britannique",
    movement: "Cinema muet / Comedie",
    summary: `Charles Spencer Chaplin nait dans la misere des faubourgs londoniens. Sa mere, chanteuse de music-hall, sombre dans la folie ; son pere, alcoolique, meurt jeune. Cette enfance dickensienne nourrit son oeuvre. Enfant de la balle, il rejoint la troupe de Fred Karno qui l'emmene en tournee aux Etats-Unis.

En 1914, Chaplin cree le personnage de Charlot : chapeau melon, canne, moustache, demarche dandinante. Ce vagabond poetique, melancolique et drole, devient en quelques annees le visage le plus celebre du monde. Chaplin controle bientot tous les aspects de ses films : scenario, realisation, musique.

Les Temps modernes (1936) et Le Dictateur (1940) temoignent de son engagement social et politique. Charlot affronte la machine industrielle et la barbarie nazie. Le discours final du Dictateur est un appel vibrant a l'humanite. Chaplin resiste au parlant plus longtemps que quiconque.

Accuse de sympathies communistes pendant le maccarthysme, Chaplin s'exile en Suisse en 1952. Il revient a Hollywood en 1972 pour recevoir un Oscar d'honneur. Il meurt a Vevey, legende vivante. Son influence sur le cinema comique, de Keaton a Woody Allen, est incommensurable.`,
    mainWorks: ["Les Temps modernes", "Le Dictateur", "La Ruee vers l'or", "Les Lumieres de la ville", "Le Kid"],
    keyIdeas: ["Charlot", "Pathos et comedie", "Critique sociale", "Auteur total"],
  },
  {
    id: "eisenstein",
    name: "Sergei Eisenstein",
    birthYear: 1898,
    deathYear: 1948,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sergei_Eisenstein_03.jpg?width=220",
    nationality: "Russe",
    movement: "Cinema sovietique / Montage",
    summary: `Sergei Mikhailovich Eisenstein nait a Riga dans une famille bourgeoise. Ingenieur de formation, il rejoint l'Armee rouge pendant la revolution et decouvre le theatre d'avant-garde. Son passage au cinema est marque par une reflexion theorique sur le montage.

La Greve (1925) et surtout Le Cuirasse Potemkine (1925) revolutionnent le cinema mondial. La sequence de l'escalier d'Odessa, avec son montage frenetique et ses images choc, devient le modele du montage expressif. Eisenstein theorise le "montage des attractions" : le sens nait du choc entre les plans.

Octobre (1928) et La Ligne generale poursuivent ces recherches formelles, mais Eisenstein se heurte de plus en plus a la bureaucratie stalinienne. Un sejour a Hollywood (1930-1932) et au Mexique s'acheve sans film acheve. De retour en URSS, il est contraint a l'autocritique.

Alexandre Nevski (1938) et Ivan le Terrible (1944-1946) marquent son retour en grace, mais la seconde partie d'Ivan est interdite par Staline. Eisenstein meurt d'une crise cardiaque a cinquante ans. Theoricien majeur, cineaste visionnaire, il influence tout le cinema moderne, de Hitchcock a Coppola.`,
    mainWorks: ["Le Cuirasse Potemkine", "Octobre", "Alexandre Nevski", "Ivan le Terrible", "La Greve"],
    keyIdeas: ["Montage des attractions", "Cinema intellectuel", "Formalisme", "Epopee revolutionnaire"],
  },
  {
    id: "murnau",
    name: "Friedrich Wilhelm Murnau",
    birthYear: 1888,
    deathYear: 1931,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Murnau2.jpg?width=220",
    nationality: "Allemand",
    movement: "Expressionnisme allemand",
    summary: `Friedrich Wilhelm Plumpe, dit Murnau, nait a Bielefeld dans une famille aisee. Etudiant en histoire de l'art et litterature, il decouvre le theatre aupres de Max Reinhardt. Pilote pendant la guerre, il echappe plusieurs fois a la mort avant de se tourner vers le cinema.

Nosferatu (1922), adaptation non autorisee de Dracula, impose une vision du fantastique par la lumiere et le cadrage plutot que par les decors expressionnistes. Le Dernier des hommes (1924) revolutionne la narration en supprimant les intertitres : la camera raconte tout.

Murnau developpe la "camera dechainee", montee sur chariot, grue ou ascenseur, qui explore l'espace avec une fluidite inedite. Faust (1926) porte l'expressionnisme a son apogee. Invite par Hollywood, il realise L'Aurore (1927), souvent considere comme le plus beau film de l'ere muette.

Son dernier film, Tabou (1931), tourne dans les mers du Sud avec le documentariste Flaherty, celebre un eden primitif. Une semaine avant la premiere, Murnau meurt dans un accident de voiture. Il avait quarante-deux ans. Son influence sur le cinema d'horreur et d'art reste immense.`,
    mainWorks: ["Nosferatu", "L'Aurore", "Le Dernier des hommes", "Faust", "Tabou"],
    keyIdeas: ["Camera dechainee", "Expressionnisme", "Lumiere", "Poesie visuelle"],
  },
  {
    id: "lang",
    name: "Fritz Lang",
    birthYear: 1890,
    deathYear: 1976,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fritz_Lang_%281969%29.jpg?width=220",
    nationality: "Allemand / Americain",
    movement: "Expressionnisme / Film noir",
    summary: `Friedrich Christian Anton Lang nait a Vienne, fils d'un architecte. Apres des etudes d'art et d'architecture, il voyage a travers le monde avant de s'etablir a Berlin. Il debute comme scenariste puis realisateur, associe a sa femme Thea von Harbou.

Metropolis (1927), vision futuriste d'une cite divisee entre maitres et esclaves, est le film muet le plus ambitieux jamais produit. M le Maudit (1931), premier film parlant de Lang, invente le thriller psychologique avec Peter Lorre en tueur d'enfants traque par la pegre.

En 1933, Goebbels propose a Lang de diriger le cinema nazi. Lang fuit l'Allemagne le soir meme, abandonnant Thea von Harbou qui reste et collabore. A Hollywood, il realise une serie de films noirs et westerns qui influencent profondement le genre.

De retour en Allemagne dans les annees 1960, Lang tourne ses derniers films avant de devenir aveugle. Il meurt a Los Angeles. Son monocle, sa rigueur obsessionnelle et sa vision sombre de la condition humaine en font une figure legendaire du cinema. La Nouvelle Vague le venere.`,
    mainWorks: ["Metropolis", "M le Maudit", "Les Nibelungen", "Fury", "Reglement de comptes"],
    keyIdeas: ["Destin", "Paranoia", "Architecture", "Noirceur"],
  },
  {
    id: "renoir",
    name: "Jean Renoir",
    birthYear: 1894,
    deathYear: 1979,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jean_Renoir_1968.jpg?width=220",
    nationality: "Francais",
    movement: "Realisme poetique",
    summary: `Jean Renoir nait a Paris, deuxieme fils du peintre Auguste Renoir. Eleve dans un milieu d'artistes, modele pour son pere, il decouvre le cinema apres la guerre de 1914 ou il est blesse. Son admiration pour Stroheim et les films americains guide ses debuts.

Les annees 1930 produisent ses chefs-d'oeuvre : Boudu sauve des eaux, Toni, La Grande Illusion, La Bete humaine et surtout La Regle du jeu (1939), chronique d'une societe au bord de l'abime. Echec a sa sortie, ce film est aujourd'hui considere comme l'un des plus grands de l'histoire.

Renoir developpe une mise en scene fondee sur la profondeur de champ et le plan-sequence, respectant l'integrite de l'espace et du temps. "Chacun a ses raisons", dit Octave dans La Regle du jeu : l'humanisme de Renoir refuse de juger ses personnages.

Exile aux Etats-Unis pendant la guerre, Renoir y tourne plusieurs films avant de revenir en France puis en Inde. Il finit sa vie a Beverly Hills, ecrivant ses memoires. La Nouvelle Vague voit en lui le pere du cinema moderne. Truffaut lui consacre un livre ; Godard le cite sans cesse.`,
    mainWorks: ["La Regle du jeu", "La Grande Illusion", "La Bete humaine", "Boudu sauve des eaux", "French Cancan"],
    keyIdeas: ["Humanisme", "Profondeur de champ", "Plan-sequence", "Realisme poetique"],
  },
  {
    id: "ford",
    name: "John Ford",
    birthYear: 1894,
    deathYear: 1973,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/John_Ford_1946.jpg?width=220",
    nationality: "Americain",
    movement: "Western / Cinema classique hollywoodien",
    summary: `John Martin Feeney, dit John Ford, nait dans le Maine de parents irlandais. Il rejoint son frere a Hollywood en 1914 et devient assistant realisateur. Ses premiers westerns muets revelent deja son sens du paysage et de la communaute.

La Chevauchee fantastique (1939) relance le western comme genre majeur et lance la carriere de John Wayne. Ford filme Monument Valley comme un peintre, creant la mythologie visuelle de l'Ouest americain. Mais ses westerns interrogent aussi la violence et le racisme de la conquete.

Les Raisins de la colere (1940), Qu'elle etait verte ma vallee (1941), L'Homme tranquille (1952) temoignent de sa versatilite. Ford filme les communautes, les rituels, les liens familiaux avec une tendresse bourrue. Quatre Oscars du meilleur realisateur, record inegale.

Ford tourne jusqu'a Frontiere chinoise (1966), dirigeant encore Wayne. Cache derriere son cache-oeil et sa rudesse de facade, il laisse une oeuvre immense : plus de 140 films. Les cineastes du Nouvel Hollywood, Spielberg et Coppola en tete, le considerent comme le maitre absolu.`,
    mainWorks: ["La Chevauchee fantastique", "La Prisonniere du desert", "L'Homme qui tua Liberty Valance", "Les Raisins de la colere", "L'Homme tranquille"],
    keyIdeas: ["Western", "Communaute", "Monument Valley", "Mythe americain"],
  },
  {
    id: "hawks",
    name: "Howard Hawks",
    birthYear: 1896,
    deathYear: 1977,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Howard_Hawks.jpg?width=220",
    nationality: "Americain",
    movement: "Cinema classique hollywoodien",
    summary: `Howard Winchester Hawks nait a Goshen, dans l'Indiana, dans une famille aisee. Ingenieur de formation, pilote de course, il entre a Hollywood comme accessoiriste avant de passer a la realisation. Sa carriere couvre quatre decennies et tous les genres.

Scarface (1932) definit le film de gangsters. Seuls les anges ont des ailes et Le Grand Sommeil incarnent le film noir. Rio Bravo reinvente le western. L'Impossible Monsieur Bebe et Les Hommes preferent les blondes sont des comedies parfaites. Hawks excelle partout.

Son style se caracterise par une absence apparente de style : mise en scene fluide, montage invisible au service de l'action et des dialogues. Ses heros sont des professionnels qui font face au danger avec decontraction. Ses heroines, de Bacall a Russell, leur tiennent tete.

La Nouvelle Vague, particulierement Rivette et Godard, revele Hawks comme un auteur majeur cache derriere sa versatilite. Il recoit un Oscar d'honneur en 1975. Son influence sur le cinema d'action et la comedie romantique reste immense.`,
    mainWorks: ["Rio Bravo", "Le Grand Sommeil", "Scarface", "L'Impossible Monsieur Bebe", "Les Hommes preferent les blondes"],
    keyIdeas: ["Professionnalisme", "Genres", "Mise en scene invisible", "Rapports hommes-femmes"],
  },
  {
    id: "hitchcock",
    name: "Alfred Hitchcock",
    birthYear: 1899,
    deathYear: 1980,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hitchcock%2C_Alfred_02.jpg?width=220",
    nationality: "Britannique / Americain",
    movement: "Suspense / Thriller",
    summary: `Alfred Joseph Hitchcock nait a Londres dans une famille catholique modeste. Une enfance solitaire et anxieuse nourrit ses obsessions futures. Il entre dans le cinema comme graphiste avant de devenir realisateur. Ses films muets britanniques revelent deja son gout pour le suspense.

Les Trente-Neuf Marches (1935) et Une femme disparait (1938) font de lui le maitre du thriller. A Hollywood, il enchaine les chefs-d'oeuvre : Rebecca, Soupcons, L'Ombre d'un doute, La Corde, Fenetre sur cour, Sueurs froides, La Mort aux trousses, Psychose, Les Oiseaux.

Hitchcock theorise le suspense : le spectateur doit en savoir plus que les personnages. Il invente le "MacGuffin", pretexte sans importance qui lance l'intrigue. Sa mise en scene manipule le spectateur par le montage, le cadrage, la musique. Chaque plan est calcule.

Star mediatique, silhouette rondouillarde, Hitchcock cultive son image avec humour. Mais sa cruaute envers les actrices, notamment Tippi Hedren, ternit sa legende. Il meurt a Los Angeles sans avoir recu l'Oscar du meilleur realisateur. Le "maitre du suspense" reste le cineaste le plus etudie au monde.`,
    mainWorks: ["Psychose", "Sueurs froides", "Fenetre sur cour", "La Mort aux trousses", "Les Oiseaux"],
    keyIdeas: ["Suspense", "MacGuffin", "Voyeurisme", "Manipulation"],
  },
  {
    id: "welles",
    name: "Orson Welles",
    birthYear: 1915,
    deathYear: 1985,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Orson_Welles_1937.jpg?width=220",
    nationality: "Americain",
    movement: "Cinema moderne",
    summary: `George Orson Welles nait a Kenosha, dans le Wisconsin, dans une famille cultivee. Enfant prodige, il debute au theatre a seize ans et fonde le Mercury Theatre a vingt-deux ans. Sa radio-adaptation de La Guerre des mondes (1938) provoque une panique nationale et fait de lui une celebrite.

Citizen Kane (1941), son premier film a vingt-cinq ans, est regulierement elu meilleur film de tous les temps. Recit de la vie d'un magnat de la presse, il revolutionne le langage cinematographique : profondeur de champ, plans-sequences, structure narrative eclatee, plongees et contre-plongees extremes.

Mais Hollywood ne pardonne pas a ce genie arrogant. La Splendeur des Amberson est mutile par le studio. Welles s'exile en Europe, tournant des chefs-d'oeuvre dans la precarite : Othello, Le Proces, F for Fake. Ses projets inacheves hantent l'histoire du cinema.

Welles meurt a Los Angeles, obese et amer, mais toujours genial. Don Quichotte reste inacheve. Son influence sur le cinema moderne, de la Nouvelle Vague a Coppola et Spielberg, est immense. Il incarne le genie brise par le systeme hollywoodien.`,
    mainWorks: ["Citizen Kane", "La Splendeur des Amberson", "La Dame de Shanghai", "La Soif du mal", "Le Proces"],
    keyIdeas: ["Profondeur de champ", "Plan-sequence", "Narration eclatee", "Genie maudit"],
  },
  {
    id: "de-sica",
    name: "Vittorio De Sica",
    birthYear: 1901,
    deathYear: 1974,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vittorio_De_Sica.jpg?width=220",
    nationality: "Italien",
    movement: "Neorealisme italien",
    summary: `Vittorio De Sica nait a Sora, pres de Rome. Acteur de charme tres populaire dans les annees 1930, il passe a la realisation pendant la guerre. Sa rencontre avec le scenariste Cesare Zavattini determine sa carriere : ensemble, ils inventent le neorealisme.

Sciuscia (1946) et Le Voleur de bicyclette (1948) filment l'Italie d'apres-guerre avec des acteurs non professionnels, en decors naturels, racontant les drames des petites gens. Le Voleur de bicyclette, histoire d'un pere et son fils cherchant une bicyclette volee, atteint une perfection tragique.

Miracle a Milan (1951) et Umberto D. (1952) poursuivent cette veine humaniste. De Sica montre la dignite des humbles face a l'indifference sociale. Mais le neorealisme s'epuise et De Sica revient a l'acting pour financer ses projets.

Le Jardin des Finzi-Contini (1970), sur une famille juive italienne face au fascisme, lui vaut un dernier Oscar. De Sica meurt a Paris, reconnu comme l'un des grands humanistes du cinema. Son influence sur les cinemas du monde entier, du Free Cinema au cinema iranien, reste vivante.`,
    mainWorks: ["Le Voleur de bicyclette", "Sciuscia", "Umberto D.", "Miracle a Milan", "Le Jardin des Finzi-Contini"],
    keyIdeas: ["Neorealisme", "Dignite des humbles", "Decors naturels", "Humanisme"],
  },
  {
    id: "kurosawa",
    name: "Akira Kurosawa",
    birthYear: 1910,
    deathYear: 1998,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Akirakurosawa-onthesetof7samurai-1953-page88.jpg?width=220",
    nationality: "Japonais",
    movement: "Cinema japonais classique",
    summary: `Akira Kurosawa nait a Tokyo dans une famille de samourai. Peintre et scenariste, il devient assistant realisateur avant de tourner son premier film en 1943. Rashomon (1950), conte medieval explorant la relativite de la verite, remporte le Lion d'or a Venise et revele le cinema japonais au monde.

Les Sept Samourais (1954), epopee de trois heures et demie, reinvente le film d'action. Son recit de guerriers defendant un village contre des bandits est adapte en western (Les Sept Mercenaires) et influence tout le cinema d'aventure, de Star Wars aux Avengers.

Kurosawa adapte Shakespeare (Le Chateau de l'araignee, Ran) et Dostoievski (L'Idiot) avec une puissance visuelle inegalee. Ses plans larges, ses mouvements de foule, son utilisation des elements naturels creent un cinema monumental. Mifune Toshiro est son acteur fetiche.

Une tentative de suicide en 1971 marque une eclipse, mais Kagemusha (1980) et Ran (1985) le ramenent au sommet. Kurosawa meurt a Tokyo, venere par Spielberg, Lucas et Coppola qui l'ont aide a financer ses derniers films. L'"Empereur" reste le plus influent des cineastes japonais.`,
    mainWorks: ["Les Sept Samourais", "Rashomon", "Ran", "Yojimbo", "Vivre"],
    keyIdeas: ["Epopee", "Samourai", "Relativite", "Monumentalisme"],
  },
  {
    id: "ozu",
    name: "Yasujiro Ozu",
    birthYear: 1903,
    deathYear: 1963,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yasujiro_Ozu.jpg?width=220",
    nationality: "Japonais",
    movement: "Cinema japonais classique",
    summary: `Yasujiro Ozu nait a Tokyo. Cinephile passionne, il entre a la Shochiku comme assistant et debute comme realisateur de comedies muettes. Son style se forme progressivement : plans fixes a hauteur de tatami, faux raccords deliberes, "plans-oreillers" de paysages urbains.

Voyage a Tokyo (1953), ou des parents ages rendent visite a leurs enfants ingrats, est considere comme l'un des plus beaux films jamais realises. Ozu filme la dissolution de la famille traditionnelle japonaise avec une tendresse melancolique, sans jamais juger.

Sa mise en scene, d'une rigueur absolue, refuse le mouvement de camera, le champ-contrechamp, le montage expressif. Les acteurs regardent l'objectif, les personnages sont cadres frontalement. Cette ascese formelle atteint une serenite contemplative unique.

Ozu meurt le jour de ses soixante ans, celibataire, vivant encore avec sa mere. Longtemps ignore en Occident car juge "trop japonais", il est redecouvert dans les annees 1970. Wim Wenders et Jim Jarmusch le citent comme maitre. Sa tombe porte un seul caractere : "Mu" (le vide).`,
    mainWorks: ["Voyage a Tokyo", "Printemps tardif", "Fin d'automne", "Le Gout du sake", "Bonjour"],
    keyIdeas: ["Plan fixe", "Famille", "Zen", "Mono no aware"],
  },
  {
    id: "bergman",
    name: "Ingmar Bergman",
    birthYear: 1918,
    deathYear: 2007,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ingmar_Bergman_1966.jpg?width=220",
    nationality: "Suedois",
    movement: "Cinema d'auteur europeen",
    summary: `Ernst Ingmar Bergman nait a Uppsala dans une famille de pasteur lutherien. Une enfance austere et culpabilisante marque profondement son oeuvre. Il debute au theatre avant de passer au cinema en 1946. Sourires d'une nuit d'ete (1955) lui apporte une reconnaissance internationale.

Le Septieme Sceau (1957) et Les Fraises sauvages (1957) imposent Bergman comme le cineaste des grandes questions metaphysiques. La mort, Dieu, le sens de l'existence hantent ses films. Sa "trilogie du silence de Dieu" (A travers le miroir, Les Communiants, Le Silence) explore la crise spirituelle moderne.

Persona (1966), Cris et chuchotements (1972), Scenes de la vie conjugale (1973) temoignent d'une maitrise formelle absolue. Bergman filme les visages en gros plan, sondant l'intimite de ses acteurs, notamment Liv Ullmann et Max von Sydow qui deviennent ses interpretes recurrents.

Installe sur l'ile de Faro, Bergman poursuit jusqu'a Saraband (2003) une oeuvre obsessionnelle. Fanny et Alexandre (1982), fresque autobiographique, resume ses themes. Il meurt a quatre-vingt-neuf ans, considere comme l'un des plus grands auteurs du cinema mondial.`,
    mainWorks: ["Le Septieme Sceau", "Persona", "Cris et chuchotements", "Fanny et Alexandre", "Scenes de la vie conjugale"],
    keyIdeas: ["Metaphysique", "Visage", "Silence de Dieu", "Intimite"],
  },
  {
    id: "fellini",
    name: "Federico Fellini",
    birthYear: 1920,
    deathYear: 1993,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Federico_Fellini_NYWTS_2.jpg?width=220",
    nationality: "Italien",
    movement: "Cinema d'auteur italien",
    summary: `Federico Fellini nait a Rimini, ville de province dont il garde une nostalgie teintee d'ironie. Dessinateur et journaliste, il entre dans le cinema comme scenariste, collaborant avec Rossellini. Sa femme, Giulietta Masina, devient son actrice fetiche.

La Strada (1954) et Les Nuits de Cabiria (1957), avec Masina en femme-enfant maltraitee par la vie, revelent son humanisme et son sens du spectacle. La Dolce Vita (1960), fresque de la decadence romaine, fait scandale et triomphe. Mastroianni devient son alter ego masculin.

Huit et demi (1963), ou un cineaste en panne cherche son prochain film, est le chef-d'oeuvre de Fellini et peut-etre du cinema moderne. Il abandonne le realisme pour un univers onirique : souvenirs, fantasmes, visions se melent dans un carnaval baroque.

Fellini invente un adjectif : "fellinien" designe ce melange de grotesque et de tendresse, de cirque et de poesie. Amarcord, Roma, La Cite des femmes poursuivent cette autobiographie fantasmee. Il meurt a Rome, cinq Oscars au compteur. Ses images continuent de hanter le cinema mondial.`,
    mainWorks: ["La Dolce Vita", "Huit et demi", "Amarcord", "La Strada", "Les Nuits de Cabiria"],
    keyIdeas: ["Onirique", "Baroque", "Autobiographie", "Spectacle"],
  },
  {
    id: "godard",
    name: "Jean-Luc Godard",
    birthYear: 1930,
    deathYear: 2022,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jean-Luc_Godard_at_Berkeley%2C_1968.jpg?width=220",
    nationality: "Franco-suisse",
    movement: "Nouvelle Vague",
    summary: `Jean-Luc Godard nait a Paris dans une famille de la grande bourgeoisie protestante. Cinephile fanatique, il ecrit aux Cahiers du cinema avant de passer a la realisation. A bout de souffle (1960), tourne en deux semaines avec des moyens derisoires, reinvente le cinema.

Godard dynamite les conventions : faux raccords, regards camera, citations, collages sonores. Ses films des annees 1960 - Le Mepris, Pierrot le Fou, Masculin Feminin, Week-end - melent reflexion politique, amour fou et experimentation formelle. Anna Karina est sa muse.

Apres 1968, Godard rompt avec le cinema commercial pour le militantisme maoiste (groupe Dziga Vertov). Son retour dans les annees 1980 (Sauve qui peut la vie, Passion) puis ses Histoire(s) du cinema, monument de video-essai, temoignent d'une creativite inepuisable.

Installe a Rolle, en Suisse, Godard reste productif jusqu'a Adieu au langage (2014) en 3D. Il meurt par suicide assiste, coherent jusqu'au bout. Figure majeure et controversee, il a redéfini ce que le cinema peut etre et influence des generations de cineastes.`,
    mainWorks: ["A bout de souffle", "Le Mepris", "Pierrot le Fou", "Histoire(s) du cinema", "Adieu au langage"],
    keyIdeas: ["Nouvelle Vague", "Deconstruction", "Essai", "Cinema-pensee"],
  },
  {
    id: "truffaut",
    name: "Francois Truffaut",
    birthYear: 1932,
    deathYear: 1984,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7ois_Truffaut_-_1965.jpg?width=220",
    nationality: "Francais",
    movement: "Nouvelle Vague",
    summary: `Francois Truffaut nait a Paris, enfant non desire eleve par sa grand-mere. Adolescent delinquant, il est sauve par le cinema et l'amitie d'Andre Bazin, fondateur des Cahiers du cinema. Ses critiques virulentes contre le "cinema de papa" preparent la revolution a venir.

Les Quatre Cents Coups (1959), recit autobiographique d'un enfant mal-aime, inaugure la Nouvelle Vague. Le personnage d'Antoine Doinel, incarne par Jean-Pierre Leaud, reviendra dans quatre films. Truffaut filme l'enfance, l'amour et le cinema avec une tendresse lyrique.

Jules et Jim (1962), L'Enfant sauvage (1970), La Nuit americaine (1973), Le Dernier Metro (1980) temoignent d'une versatilite classique qui le distingue de Godard. Truffaut est le plus accessible des auteurs de la Nouvelle Vague, le plus amoureux du cinema traditionnel.

Truffaut meurt d'une tumeur au cerveau a cinquante-deux ans, laissant une oeuvre de vingt-cinq films et des ecrits critiques majeurs. Sa correspondance, publiee apres sa mort, revele une personnalite passionnee et genereuse. Il reste l'un des cineastes francais les plus aimes.`,
    mainWorks: ["Les Quatre Cents Coups", "Jules et Jim", "La Nuit americaine", "L'Enfant sauvage", "Le Dernier Metro"],
    keyIdeas: ["Nouvelle Vague", "Enfance", "Amour du cinema", "Autobiographie"],
  },
  {
    id: "tarkovski",
    name: "Andrei Tarkovski",
    birthYear: 1932,
    deathYear: 1986,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Andrei_Tarkovsky.jpg?width=220",
    nationality: "Russe",
    movement: "Cinema poetique / Cinema d'auteur",
    summary: `Andrei Arsenievitch Tarkovski nait a Zavrajie, fils du poete Arseni Tarkovski. Forme au VGIK de Moscou, il realise L'Enfance d'Ivan (1962), recit onirique d'un enfant-espion pendant la guerre, qui remporte le Lion d'or a Venise et lance sa carriere internationale.

Andrei Roublev (1966), fresque sur le peintre d'icones medieval, est censure pendant cinq ans mais s'impose comme un chef-d'oeuvre. Solaris (1972) et Stalker (1979), science-fictions philosophiques, explorent la conscience et la spiritualite avec une lenteur contemplative.

Tarkovski developpe une esthetique du "temps scelle" : longs plans-sequences, elements naturels (eau, feu, brume), espace comme revelation interieure. Son cinema, exigeant et mystique, refuse le divertissement pour atteindre une dimension spirituelle.

En conflit avec les autorites sovietiques, Tarkovski s'exile en 1982. Nostalghia et Le Sacrifice, tournes en Italie et en Suede, poursuivent sa quete. Il meurt d'un cancer a Paris a cinquante-quatre ans. Son journal et ses ecrits theoriques ("Le temps scelle") eclairent une oeuvre unique, reference du cinema d'art.`,
    mainWorks: ["Stalker", "Le Miroir", "Andrei Roublev", "Solaris", "Le Sacrifice"],
    keyIdeas: ["Temps scelle", "Spiritualite", "Plan-sequence", "Elements naturels"],
  },
  {
    id: "kubrick",
    name: "Stanley Kubrick",
    birthYear: 1928,
    deathYear: 1999,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kubrick_on_the_set_of_Barry_Lyndon_%281975_publicity_photo%29.jpg?width=220",
    nationality: "Americain",
    movement: "Cinema d'auteur",
    summary: `Stanley Kubrick nait dans le Bronx, fils d'un medecin juif. Photographe pour Look Magazine a dix-sept ans, il se tourne vers le cinema et tourne ses premiers films avec des moyens derisoires. Les Sentiers de la gloire (1957) et Spartacus (1960) revelent un perfectionniste obsessionnel.

Installe en Angleterre pour echapper a Hollywood, Kubrick realise des chefs-d'oeuvre dans tous les genres : satire politique (Docteur Folamour), science-fiction (2001, l'Odyssee de l'espace), ultra-violence (Orange mecanique), horreur (Shining), film de guerre (Full Metal Jacket).

Chaque film est le fruit d'annees de preparation, de recherches obsessionnelles, de dizaines de prises. Kubrick controle tout : image, son, musique, marketing. Sa mise en scene geometrique, ses travellings avant, son usage de la musique classique creent un style immediatement identifiable.

Reclus dans son manoir anglais, Kubrick meurt apres avoir acheve Eyes Wide Shut, laissant de nombreux projets inaboutis. Ses treize films en quarante-six ans temoignent d'une exigence absolue. Son influence sur le cinema contemporain, de Spielberg a Nolan, est incommensurable.`,
    mainWorks: ["2001, l'Odyssee de l'espace", "Orange mecanique", "Shining", "Full Metal Jacket", "Barry Lyndon"],
    keyIdeas: ["Perfectionnisme", "Geometrie", "Froideur", "Genres transcendes"],
  },
  {
    id: "scorsese",
    name: "Martin Scorsese",
    birthYear: 1942,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Martin_Scorsese_Berlinale_2010_%28cropped2%29.jpg?width=220",
    nationality: "Americain",
    movement: "Nouvel Hollywood",
    summary: `Martin Scorsese nait a New York, dans le quartier italo-americain de Little Italy. Enfant asthmatique, il decouvre le cinema dans les salles de quartier et la television. Forme a la NYU, il realise ses premiers films dans l'effervescence du Nouvel Hollywood.

Mean Streets (1973), avec Harvey Keitel et Robert De Niro, inaugure une collaboration legendaire. Taxi Driver (1976) et Raging Bull (1980) imposent Scorsese comme le grand cineaste de la violence masculine, de la culpabilite catholique et de la rue new-yorkaise.

Les Affranchis (1990) et Casino (1995) renouvellent le film de gangsters. Scorsese explore aussi d'autres territoires : La Derniere Tentation du Christ, Le Temps de l'innocence, Hugo Cabret. Sa culture cinematographique encyclopedique nourrit chaque plan.

Infatigable, Scorsese continue de tourner a plus de quatre-vingts ans : The Irishman, Killers of the Flower Moon. Defenseur passionne du patrimoine cinematographique, il a fonde la Film Foundation. Son influence sur les cineastes contemporains, de Tarantino a Paul Thomas Anderson, est majeure.`,
    mainWorks: ["Taxi Driver", "Raging Bull", "Les Affranchis", "Goodfellas", "The Irishman"],
    keyIdeas: ["Violence", "Culpabilite catholique", "New York", "Heritage cinematographique"],
  },
  {
    id: "coppola",
    name: "Francis Ford Coppola",
    birthYear: 1939,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Francis_Ford_Coppola_2011_CC.jpg?width=220",
    nationality: "Americain",
    movement: "Nouvel Hollywood",
    summary: `Francis Ford Coppola nait a Detroit dans une famille d'artistes italo-americains. Son pere est compositeur, son frere August scenariste. Forme a l'UCLA, il debute comme assistant de Roger Corman avant de fonder American Zoetrope avec George Lucas.

Le Parrain (1972) et Le Parrain II (1974) reinventent le film de gangsters comme tragedie shakespearienne. La trilogie reste l'une des plus grandes reussites du cinema americain. Coppola impose sa vision contre le studio, obtenant le montage final et le casting de Brando et Pacino.

Apocalypse Now (1979), adaptation de Conrad au Vietnam, pousse Coppola au bord de la folie. Le tournage aux Philippines devient legendaire par ses exces. Le film, palme d'or a Cannes, reste une experience sensorielle et politique unique.

Ruine par des echecs commerciaux (Coup de coeur, Cotton Club), Coppola se releve en tournant des films plus modestes avant de revenir a l'ambition avec Megalopolis (2024). Sa carriere tumultueuse incarne les espoirs et les contradictions du Nouvel Hollywood.`,
    mainWorks: ["Le Parrain", "Apocalypse Now", "Conversation secrete", "Le Parrain II", "Rusty James"],
    keyIdeas: ["Saga familiale", "Demesure", "Nouvel Hollywood", "Opera"],
  },
  {
    id: "spielberg",
    name: "Steven Spielberg",
    birthYear: 1946,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Steven_Spielberg_by_Gage_Skidmore.jpg?width=220",
    nationality: "Americain",
    movement: "Blockbuster / Cinema populaire",
    summary: `Steven Allan Spielberg nait a Cincinnati dans une famille juive. Enfant, il realise deja des films en 8mm. Repere par Universal, il tourne Duel pour la television puis Les Dents de la mer (1975) qui invente le blockbuster moderne et bat tous les records.

Rencontres du troisieme type, Les Aventuriers de l'arche perdue, E.T. confirment son talent pour le spectacle populaire et l'emotion. Spielberg sait toucher le public comme personne, melant effets speciaux, humour et sentimentalisme. Il domine le box-office mondial.

Mais Spielberg aspire a la reconnaissance critique. La Liste de Schindler (1993) et Il faut sauver le soldat Ryan (1998) lui valent deux Oscars du meilleur realisateur. Il alterne desormais films serieux (Munich, Lincoln) et divertissements (Jurassic Park, Ready Player One).

Cofondateur de DreamWorks, producteur prolifique, Spielberg est le cineaste le plus puissant d'Hollywood. Ses films ont engendre des milliards de dollars et faconne l'imaginaire de generations. Les critiques debattent encore de son heritage : genie populaire ou manipulateur sentimental ?`,
    mainWorks: ["Les Dents de la mer", "E.T.", "La Liste de Schindler", "Jurassic Park", "Il faut sauver le soldat Ryan"],
    keyIdeas: ["Blockbuster", "Emotion", "Spectacle", "Enfance"],
  },
  {
    id: "lynch",
    name: "David Lynch",
    birthYear: 1946,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/David_Lynch_KVIFF_portrait.jpg?width=220",
    nationality: "Americain",
    movement: "Cinema surrealiste / Art et Essai",
    summary: `David Keith Lynch nait a Missoula, Montana. Peintre de formation, il etudie a l'American Film Institute ou il realise Eraserhead, cauchemar en noir et blanc autoproduit sur cinq ans. Ce film culte lui ouvre les portes d'Hollywood.

Elephant Man (1980) revele son humanisme sous l'etrangete. Mais c'est Blue Velvet (1986) qui definit son univers : sous la surface idyllique de l'Amerique se cachent violence et perversion. Mulholland Drive (2001), reve hollywoodien decompose, est regulierement elu meilleur film du XXIe siecle.

Twin Peaks (1990), serie televisee sur un meurtre dans une petite ville, revolutionne le format et influence toute la television contemporaine. Lynch melange onirique et trivial, horreur et humour, mystere et emotion, creant un univers immediatement reconnaissable : le "lynchien".

Peintre, musicien, adepte de la meditation transcendantale, Lynch refuse de s'expliquer sur ses films. Son dernier long metrage, Inland Empire (2006), pousse l'abstraction a l'extreme. Il reste le plus singulier des cineastes americains, impossible a imiter.`,
    mainWorks: ["Mulholland Drive", "Blue Velvet", "Twin Peaks", "Eraserhead", "Elephant Man"],
    keyIdeas: ["Surrealisme", "Inconscient", "Amerique cachee", "Mystere"],
  },
  {
    id: "wong-kar-wai",
    name: "Wong Kar-wai",
    birthYear: 1958,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Wong_kar_wai.jpg?width=220",
    nationality: "Hongkongais",
    movement: "Cinema d'auteur asiatique",
    summary: `Wong Kar-wai nait a Shanghai et emigre a Hong Kong a cinq ans. Scenariste pour la television et le cinema, il passe a la realisation avec As Tears Go By (1988), film de gangsters styrise. Ses films suivants imposent une esthetique unique, immediatement reconnaissable.

Chungking Express (1994) et Fallen Angels (1995), tournes dans les ruelles neon de Hong Kong, capturent la solitude urbaine avec une camera nerveuse et une bande-son pop. In the Mood for Love (2000), histoire d'amour inassouvie dans le Hong Kong des annees 1960, est salue comme un chef-d'oeuvre.

Wong Kar-wai filme le desir, le manque, le temps qui passe. Ses personnages se croisent sans se rencontrer, s'aiment sans se le dire. Le chef operateur Christopher Doyle et le directeur artistique William Chang sont ses collaborateurs essentiels.

2046 (2004) clot sa trilogie amoureuse. Apres The Grand Master (2013), Wong Kar-wai se fait rare. Mais son influence sur le cinema mondial, des freres Coen a Sofia Coppola, reste immense. Son esthetique du temps suspendu et du desir inaccompli a redefini le romantisme cinematographique.`,
    mainWorks: ["In the Mood for Love", "Chungking Express", "Fallen Angels", "2046", "Happy Together"],
    keyIdeas: ["Desir", "Solitude urbaine", "Temps suspendu", "Neon"],
  },
  {
    id: "tarantino",
    name: "Quentin Tarantino",
    birthYear: 1963,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Quentin_Tarantino_by_Gage_Skidmore.jpg?width=220",
    nationality: "Americain",
    movement: "Postmodernisme",
    summary: `Quentin Jerome Tarantino nait a Knoxville, Tennessee. Elevé par sa mere en Californie, il abandonne l'ecole pour travailler dans un videoclub. Cette education cinematographique encyclopedique, des classiques aux films d'exploitation, nourrit son oeuvre.

Reservoir Dogs (1992), huis clos sanglant, revele un dialoguiste brillant et un metteur en scene virtuose. Pulp Fiction (1994), recit eclate de gangsters a Los Angeles, remporte la Palme d'or et redefinit le cinema des annees 1990 : dialogues pop, violence stylisee, structure non lineaire.

Kill Bill, Inglourious Basterds, Django Unchained poursuivent cette esthetique de la citation et du detournement. Tarantino melange genres et registres, convoque l'histoire du cinema dans chaque plan. Ses bandes originales, ses plans-pieds et ses dialogues bavards sont devenus des signatures.

Tarantino annonce sa retraite apres dix films. Once Upon a Time in Hollywood (2019) est peut-etre son testament, declaration d'amour au Hollywood de 1969. Adulé et critique pour sa violence et son egocentrisme, il reste l'un des cineastes les plus influents de sa generation.`,
    mainWorks: ["Pulp Fiction", "Kill Bill", "Inglourious Basterds", "Django Unchained", "Once Upon a Time in Hollywood"],
    keyIdeas: ["Postmodernisme", "Dialogue", "Violence stylisee", "Cinephilie"],
  },
  {
    id: "nolan",
    name: "Christopher Nolan",
    birthYear: 1970,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Christopher_Nolan_Cannes_2018.jpg?width=220",
    nationality: "Britannico-americain",
    movement: "Blockbuster d'auteur",
    summary: `Christopher Edward Nolan nait a Londres, fils d'un publicitaire anglais et d'une hotesse de l'air americaine. Cinephile precoce, il tourne des courts metrages en Super 8 avant de realiser Following (1998) avec un budget derisoire. Memento (2000), recit inverse d'un amnesique, le revele.

Engage par Warner pour relancer Batman, Nolan livre une trilogie (Batman Begins, The Dark Knight, The Dark Knight Rises) qui redefinit le film de super-heros comme drame serieux. Le Joker de Heath Ledger devient iconique. Nolan prouve qu'un blockbuster peut etre intelligent.

Inception (2010), Interstellar (2014), Dunkerque (2017), Tenet (2020) confirment son ambition : spectacle IMAX et complexite narrative, effets pratiques et reflexion sur le temps. Oppenheimer (2023), biopic du pere de la bombe atomique, lui vaut l'Oscar du meilleur realisateur.

Defenseur de la pellicule et de l'experience en salle, Nolan est l'un des rares cineastes contemporains a remplir les salles sur son seul nom. Ses films, parfois juges froids ou confus, divisent la critique mais fascinent le public. Il incarne le blockbuster d'auteur du XXIe siecle.`,
    mainWorks: ["Inception", "The Dark Knight", "Interstellar", "Oppenheimer", "Memento"],
    keyIdeas: ["Temps", "Complexite narrative", "IMAX", "Blockbuster d'auteur"],
  },
  {
    id: "bong-joon-ho",
    name: "Bong Joon-ho",
    birthYear: 1969,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bong_Joon-ho_at_2017_BIFF.jpg?width=220",
    nationality: "Sud-coreen",
    movement: "Cinema coreen contemporain",
    summary: `Bong Joon-ho nait a Daegu, en Coree du Sud. Diplome de sociologie, il etudie le cinema et realise des courts metrages remarques. Memories of Murder (2003), enquete sur un tueur en serie non elucidee, impose son sens du melange des genres : thriller, comedie noire, critique sociale.

The Host (2006), film de monstre ecologique, devient le plus grand succes du cinema coreen. Mother (2009) et Snowpiercer (2013) confirment sa capacite a subvertir les genres. Okja (2017), fable sur l'industrie alimentaire, est produit par Netflix.

Parasite (2019) raconte l'infiltration d'une famille pauvre chez des riches. La metaphore sociale se mue en thriller sanglant. Le film remporte la Palme d'or a Cannes puis quatre Oscars dont meilleur film et meilleur realisateur, une premiere pour un film non anglophone.

Bong Joon-ho declare s'inspirer d'Hitchcock, Chabrol et du cinema coreen des annees 1960. Son melange de genres, son humour noir et sa conscience sociale en font l'un des cineastes les plus originaux du cinema mondial. Son prochain projet est tres attendu.`,
    mainWorks: ["Parasite", "Memories of Murder", "The Host", "Mother", "Snowpiercer"],
    keyIdeas: ["Melange des genres", "Critique sociale", "Humour noir", "Cinema coreen"],
  },
];
