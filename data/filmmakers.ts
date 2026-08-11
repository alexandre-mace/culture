export interface Filmmaker {
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

export const filmmakers: Filmmaker[] = [
  {
    id: "melies",
    name: "Georges Méliès",
    birthYear: 1861,
    deathYear: 1938,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Georges_M%C3%A9li%C3%A8s.jpg?width=220",
    nationality: "Français",
    movement: "Cinéma des premiers temps",
    family: "Pionniers & muet",
    summary: `Georges Méliès naît à Paris dans une famille de fabricants de chaussures. Passionné de magie et d'illusion, il reprend le théâtre Robert-Houdin et devient un prestidigitateur renommé. En 1895, il assiste à la première projection des frères Lumière et comprend immédiatement le potentiel du cinématographe.

Dès 1896, il réalise ses premiers films et découvre par hasard le trucage : une panne de caméra crée une disparition magique. Il développe alors tout un arsenal d'effets spéciaux : surimpressions, fondus, arrêts de caméra, décors peints. Le cinéma devient un art de l'illusion.

Le Voyage dans la Lune (1902), avec son célèbre plan de la fusée dans l'œil de la Lune, est le premier chef-d'œuvre du cinéma de fiction. Méliès produit des centaines de "féeries" dans son studio de Montreuil, inventant le spectacle cinématographique, les costumes, les décors élaborés.

Ruiné par la guerre et le piratage de ses films, Méliès finit vendeur de jouets à la gare Montparnasse. Redécouvert dans les années 1930, il reçoit la Légion d'honneur. Le cinéma lui doit l'invention de la mise en scène, des effets spéciaux et du film comme œuvre d'imagination.`,
    mainWorks: ["Le Voyage dans la Lune", "Le Royaume des fées", "L'Homme à la tête de caoutchouc", "Les Quatre Cents Farces du diable"],
    keyIdeas: ["Trucages", "Féerie", "Spectacle", "Pionnier"],
  },
  {
    id: "griffith",
    name: "D.W. Griffith",
    birthYear: 1875,
    deathYear: 1948,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/David_Wark_Griffith_portrait.jpg/330px-David_Wark_Griffith_portrait.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Cinéma muet",
    family: "Pionniers & muet",
    summary: `David Wark Griffith naît dans le Kentucky, fils d'un colonel confédéré ruiné par la guerre de Sécession. Après une carrière d'acteur itinérant, il rejoint la Biograph Company comme réalisateur et tourne plus de 400 courts métrages entre 1908 et 1913.

Griffith invente le langage cinématographique moderne : gros plan, montage parallèle, travelling, flashback. Il comprend que le plan, et non la scène théâtrale, est l'unité de base du film. Ses innovations techniques sont mises au service d'une narration de plus en plus ambitieuse.

Naissance d'une nation (1915), fresque de trois heures sur la guerre de Sécession, révolutionne le cinéma par son ampleur et sa maîtrise. Mais sa glorification du Ku Klux Klan provoque des émeutes et reste une tache indélébile. Intolérance (1916), son chef-d'œuvre, répond aux critiques par un hymne à la tolérance.

Cofondateur de United Artists avec Chaplin, Pickford et Fairbanks, Griffith décline dans les années 1920, dépassé par de nouveaux talents. Il meurt oublié dans un hôtel d'Hollywood. Père du cinéma narratif, il reste une figure controversée, génie et raciste.`,
    mainWorks: ["Naissance d'une nation", "Intolérance", "Le Lys brisé", "À travers l'orage", "Les Deux Orphelines"],
    keyIdeas: ["Montage", "Gros plan", "Épopée", "Langage cinématographique"],
  },
  {
    id: "chaplin",
    name: "Charlie Chaplin",
    birthYear: 1889,
    deathYear: 1977,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Charlie_Chaplin.jpg?width=220",
    nationality: "Britannique",
    movement: "Cinéma muet / Comédie",
    family: "Pionniers & muet",
    summary: `Charles Spencer Chaplin naît dans la misère des faubourgs londoniens. Sa mère, chanteuse de music-hall, sombre dans la folie ; son père, alcoolique, meurt jeune. Cette enfance dickensienne nourrit son œuvre. Enfant de la balle, il rejoint la troupe de Fred Karno qui l'emmène en tournée aux États-Unis.

En 1914, Chaplin crée le personnage de Charlot : chapeau melon, canne, moustache, démarche dandinante. Ce vagabond poétique, mélancolique et drôle, devient en quelques années le visage le plus célèbre du monde. Chaplin contrôle bientôt tous les aspects de ses films : scénario, réalisation, musique.

Les Temps modernes (1936) et Le Dictateur (1940) témoignent de son engagement social et politique. Charlot affronte la machine industrielle et la barbarie nazie. Le discours final du Dictateur est un appel vibrant à l'humanité. Chaplin résiste au parlant plus longtemps que quiconque.

Accusé de sympathies communistes pendant le maccarthysme, Chaplin s'exile en Suisse en 1952. Il revient à Hollywood en 1972 pour recevoir un Oscar d'honneur. Il meurt à Vevey, légende vivante. Son influence sur le cinéma comique, de Keaton à Woody Allen, est incommensurable.`,
    mainWorks: ["Les Temps modernes", "Le Dictateur", "La Ruée vers l'or", "Les Lumières de la ville", "Le Kid"],
    keyIdeas: ["Charlot", "Pathos et comédie", "Critique sociale", "Auteur total"],
  },
  {
    id: "eisenstein",
    name: "Sergei Eisenstein",
    birthYear: 1898,
    deathYear: 1948,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sergei_Eisenstein_03.jpg?width=220",
    nationality: "Russe",
    movement: "Cinéma soviétique / Montage",
    family: "Pionniers & muet",
    influences: ["griffith"],
    summary: `Sergei Mikhailovich Eisenstein naît à Riga dans une famille bourgeoise. Ingénieur de formation, il rejoint l'Armée rouge pendant la révolution et découvre le théâtre d'avant-garde. Son passage au cinéma est marqué par une réflexion théorique sur le montage.

La Grève (1925) et surtout Le Cuirassé Potemkine (1925) révolutionnent le cinéma mondial. La séquence de l'escalier d'Odessa, avec son montage frénétique et ses images choc, devient le modèle du montage expressif. Eisenstein théorise le "montage des attractions" : le sens naît du choc entre les plans.

Octobre (1928) et La Ligne générale poursuivent ces recherches formelles, mais Eisenstein se heurte de plus en plus à la bureaucratie stalinienne. Un séjour à Hollywood (1930-1932) et au Mexique s'achève sans film achevé. De retour en URSS, il est contraint à l'autocritique.

Alexandre Nevski (1938) et Ivan le Terrible (1944-1946) marquent son retour en grâce, mais la seconde partie d'Ivan est interdite par Staline. Eisenstein meurt d'une crise cardiaque à cinquante ans. Théoricien majeur, cinéaste visionnaire, il influence tout le cinéma moderne, de Hitchcock à Coppola.`,
    mainWorks: ["Le Cuirassé Potemkine", "Octobre", "Alexandre Nevski", "Ivan le Terrible", "La Grève"],
    keyIdeas: ["Montage des attractions", "Cinéma intellectuel", "Formalisme", "Épopée révolutionnaire"],
  },
  {
    id: "murnau",
    name: "Friedrich Wilhelm Murnau",
    birthYear: 1888,
    deathYear: 1931,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/F._W._Murnau_circa_1920-1930.jpg/330px-F._W._Murnau_circa_1920-1930.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Expressionnisme allemand",
    family: "Pionniers & muet",
    summary: `Friedrich Wilhelm Plumpe, dit Murnau, naît à Bielefeld dans une famille aisée. Étudiant en histoire de l'art et littérature, il découvre le théâtre auprès de Max Reinhardt. Pilote pendant la guerre, il échappe plusieurs fois à la mort avant de se tourner vers le cinéma.

Nosferatu (1922), adaptation non autorisée de Dracula, impose une vision du fantastique par la lumière et le cadrage plutôt que par les décors expressionnistes. Le Dernier des hommes (1924) révolutionne la narration en supprimant les intertitres : la caméra raconte tout.

Murnau développe la "caméra déchaînée", montée sur chariot, grue ou ascenseur, qui explore l'espace avec une fluidité inédite. Faust (1926) porte l'expressionnisme à son apogée. Invité par Hollywood, il réalise L'Aurore (1927), souvent considéré comme le plus beau film de l'ère muette.

Son dernier film, Tabou (1931), tourné dans les mers du Sud avec le documentariste Flaherty, célèbre un éden primitif. Une semaine avant la première, Murnau meurt dans un accident de voiture. Il avait quarante-deux ans. Son influence sur le cinéma d'horreur et d'art reste immense.`,
    mainWorks: ["Nosferatu", "L'Aurore", "Le Dernier des hommes", "Faust", "Tabou"],
    keyIdeas: ["Caméra déchaînée", "Expressionnisme", "Lumière", "Poésie visuelle"],
  },
  {
    id: "lang",
    name: "Fritz Lang",
    birthYear: 1890,
    deathYear: 1976,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fritz_Lang_%281969%29.jpg?width=220",
    nationality: "Allemand / Américain",
    movement: "Expressionnisme / Film noir",
    family: "Pionniers & muet",
    summary: `Friedrich Christian Anton Lang naît à Vienne, fils d'un architecte. Après des études d'art et d'architecture, il voyage à travers le monde avant de s'établir à Berlin. Il débute comme scénariste puis réalisateur, associé à sa femme Thea von Harbou.

Metropolis (1927), vision futuriste d'une cité divisée entre maîtres et esclaves, est le film muet le plus ambitieux jamais produit. M le Maudit (1931), premier film parlant de Lang, invente le thriller psychologique avec Peter Lorre en tueur d'enfants traqué par la pègre.

En 1933, Goebbels propose à Lang de diriger le cinéma nazi. Lang fuit l'Allemagne le soir même, abandonnant Thea von Harbou qui reste et collabore. À Hollywood, il réalise une série de films noirs et westerns qui influencent profondément le genre.

De retour en Allemagne dans les années 1960, Lang tourne ses derniers films avant de devenir aveugle. Il meurt à Los Angeles. Son monocle, sa rigueur obsessionnelle et sa vision sombre de la condition humaine en font une figure légendaire du cinéma. La Nouvelle Vague le vénère.`,
    mainWorks: ["Metropolis", "M le Maudit", "Les Nibelungen", "Fury", "Règlement de comptes"],
    keyIdeas: ["Destin", "Paranoïa", "Architecture", "Noirceur"],
  },
  {
    id: "renoir",
    name: "Jean Renoir",
    birthYear: 1894,
    deathYear: 1979,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/JeanRenoir-StudioHarcourt-1955.png/330px-JeanRenoir-StudioHarcourt-1955.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Réalisme poétique",
    family: "Cinéma classique",
    summary: `Jean Renoir naît à Paris, deuxième fils du peintre Auguste Renoir. Élevé dans un milieu d'artistes, modèle pour son père, il découvre le cinéma après la guerre de 1914 où il est blessé. Son admiration pour Stroheim et les films américains guide ses débuts.

Les années 1930 produisent ses chefs-d'œuvre : Boudu sauvé des eaux, Toni, La Grande Illusion, La Bête humaine et surtout La Règle du jeu (1939), chronique d'une société au bord de l'abîme. Échec à sa sortie, ce film est aujourd'hui considéré comme l'un des plus grands de l'histoire.

Renoir développe une mise en scène fondée sur la profondeur de champ et le plan-séquence, respectant l'intégrité de l'espace et du temps. "Chacun a ses raisons", dit Octave dans La Règle du jeu : l'humanisme de Renoir refuse de juger ses personnages.

Exilé aux États-Unis pendant la guerre, Renoir y tourne plusieurs films avant de revenir en France puis en Inde. Il finit sa vie à Beverly Hills, écrivant ses mémoires. La Nouvelle Vague voit en lui le père du cinéma moderne. Truffaut lui consacre un livre ; Godard le cite sans cesse.`,
    mainWorks: ["La Règle du jeu", "La Grande Illusion", "La Bête humaine", "Boudu sauvé des eaux", "French Cancan"],
    keyIdeas: ["Humanisme", "Profondeur de champ", "Plan-séquence", "Réalisme poétique"],
  },
  {
    id: "ford",
    name: "John Ford",
    birthYear: 1894,
    deathYear: 1973,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/John_Ford_1946.jpg?width=220",
    nationality: "Américain",
    movement: "Western / Cinéma classique hollywoodien",
    family: "Cinéma classique",
    influences: ["griffith", "murnau"],
    summary: `John Martin Feeney, dit John Ford, naît dans le Maine de parents irlandais. Il rejoint son frère à Hollywood en 1914 et devient assistant réalisateur. Ses premiers westerns muets révèlent déjà son sens du paysage et de la communauté.

La Chevauchée fantastique (1939) relance le western comme genre majeur et lance la carrière de John Wayne. Ford filme Monument Valley comme un peintre, créant la mythologie visuelle de l'Ouest américain. Mais ses westerns interrogent aussi la violence et le racisme de la conquête.

Les Raisins de la colère (1940), Qu'elle était verte ma vallée (1941), L'Homme tranquille (1952) témoignent de sa versatilité. Ford filme les communautés, les rituels, les liens familiaux avec une tendresse bourrue. Quatre Oscars du meilleur réalisateur, record inégalé.

Ford tourne jusqu'à Frontière chinoise (1966), dirigeant encore Wayne. Caché derrière son cache-œil et sa rudesse de façade, il laisse une œuvre immense : plus de 140 films. Les cinéastes du Nouvel Hollywood, Spielberg et Coppola en tête, le considèrent comme le maître absolu.`,
    mainWorks: ["La Chevauchée fantastique", "La Prisonnière du désert", "L'Homme qui tua Liberty Valance", "Les Raisins de la colère", "L'Homme tranquille"],
    keyIdeas: ["Western", "Communauté", "Monument Valley", "Mythe américain"],
  },
  {
    id: "hawks",
    name: "Howard Hawks",
    birthYear: 1896,
    deathYear: 1977,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Howard_Hawks_head_shot.jpg/330px-Howard_Hawks_head_shot.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Cinéma classique hollywoodien",
    family: "Cinéma classique",
    summary: `Howard Winchester Hawks naît à Goshen, dans l'Indiana, dans une famille aisée. Ingénieur de formation, pilote de course, il entre à Hollywood comme accessoiriste avant de passer à la réalisation. Sa carrière couvre quatre décennies et tous les genres.

Scarface (1932) définit le film de gangsters. Seuls les anges ont des ailes et Le Grand Sommeil incarnent le film noir. Rio Bravo réinvente le western. L'Impossible Monsieur Bébé et Les Hommes préfèrent les blondes sont des comédies parfaites. Hawks excelle partout.

Son style se caractérise par une absence apparente de style : mise en scène fluide, montage invisible au service de l'action et des dialogues. Ses héros sont des professionnels qui font face au danger avec décontraction. Ses héroïnes, de Bacall à Russell, leur tiennent tête.

La Nouvelle Vague, particulièrement Rivette et Godard, révèle Hawks comme un auteur majeur caché derrière sa versatilité. Il reçoit un Oscar d'honneur en 1975. Son influence sur le cinéma d'action et la comédie romantique reste immense.`,
    mainWorks: ["Rio Bravo", "Le Grand Sommeil", "Scarface", "L'Impossible Monsieur Bébé", "Les Hommes préfèrent les blondes"],
    keyIdeas: ["Professionnalisme", "Genres", "Mise en scène invisible", "Rapports hommes-femmes"],
  },
  {
    id: "hitchcock",
    name: "Alfred Hitchcock",
    birthYear: 1899,
    deathYear: 1980,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hitchcock%2C_Alfred_02.jpg?width=220",
    nationality: "Britannique / Américain",
    movement: "Suspense / Thriller",
    family: "Cinéma classique",
    influences: ["griffith", "murnau", "lang"],
    summary: `Alfred Joseph Hitchcock naît à Londres dans une famille catholique modeste. Une enfance solitaire et anxieuse nourrit ses obsessions futures. Il entre dans le cinéma comme graphiste avant de devenir réalisateur. Ses films muets britanniques révèlent déjà son goût pour le suspense.

Les Trente-Neuf Marches (1935) et Une femme disparaît (1938) font de lui le maître du thriller. À Hollywood, il enchaîne les chefs-d'œuvre : Rebecca, Soupçons, L'Ombre d'un doute, La Corde, Fenêtre sur cour, Sueurs froides, La Mort aux trousses, Psychose, Les Oiseaux.

Hitchcock théorise le suspense : le spectateur doit en savoir plus que les personnages. Il invente le "MacGuffin", prétexte sans importance qui lance l'intrigue. Sa mise en scène manipule le spectateur par le montage, le cadrage, la musique. Chaque plan est calculé.

Star médiatique, silhouette rondouillarde, Hitchcock cultive son image avec humour. Mais sa cruauté envers les actrices, notamment Tippi Hedren, ternit sa légende. Il meurt à Los Angeles sans avoir reçu l'Oscar du meilleur réalisateur. Le "maître du suspense" reste le cinéaste le plus étudié au monde.`,
    mainWorks: ["Psychose", "Sueurs froides", "Fenêtre sur cour", "La Mort aux trousses", "Les Oiseaux"],
    keyIdeas: ["Suspense", "MacGuffin", "Voyeurisme", "Manipulation"],
  },
  {
    id: "welles",
    name: "Orson Welles",
    birthYear: 1915,
    deathYear: 1985,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Orson_Welles_1937.jpg?width=220",
    nationality: "Américain",
    movement: "Cinéma moderne",
    family: "Cinéma classique",
    influences: ["ford"],
    summary: `George Orson Welles naît à Kenosha, dans le Wisconsin, dans une famille cultivée. Enfant prodige, il débute au théâtre à seize ans et fonde le Mercury Theatre à vingt-deux ans. Sa radio-adaptation de La Guerre des mondes (1938) provoque une panique nationale et fait de lui une célébrité.

Citizen Kane (1941), son premier film à vingt-cinq ans, est régulièrement élu meilleur film de tous les temps. Récit de la vie d'un magnat de la presse, il révolutionne le langage cinématographique : profondeur de champ, plans-séquences, structure narrative éclatée, plongées et contre-plongées extrêmes.

Mais Hollywood ne pardonne pas à ce génie arrogant. La Splendeur des Amberson est mutilée par le studio. Welles s'exile en Europe, tournant des chefs-d'œuvre dans la précarité : Othello, Le Procès, F for Fake. Ses projets inachevés hantent l'histoire du cinéma.

Welles meurt à Los Angeles, obèse et amer, mais toujours génial. Don Quichotte reste inachevé. Son influence sur le cinéma moderne, de la Nouvelle Vague à Coppola et Spielberg, est immense. Il incarne le génie brisé par le système hollywoodien.`,
    mainWorks: ["Citizen Kane", "La Splendeur des Amberson", "La Dame de Shanghai", "La Soif du mal", "Le Procès"],
    keyIdeas: ["Profondeur de champ", "Plan-séquence", "Narration éclatée", "Génie maudit"],
  },
  {
    id: "de-sica",
    name: "Vittorio De Sica",
    birthYear: 1901,
    deathYear: 1974,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Vittorio_De_Sica_%281962%29.jpg/330px-Vittorio_De_Sica_%281962%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Italien",
    movement: "Néoréalisme italien",
    family: "Auteurs d'après-guerre",
    influences: ["chaplin"],
    summary: `Vittorio De Sica naît à Sora, près de Rome. Acteur de charme très populaire dans les années 1930, il passe à la réalisation pendant la guerre. Sa rencontre avec le scénariste Cesare Zavattini détermine sa carrière : ensemble, ils inventent le néoréalisme.

Sciuscià (1946) et Le Voleur de bicyclette (1948) filment l'Italie d'après-guerre avec des acteurs non professionnels, en décors naturels, racontant les drames des petites gens. Le Voleur de bicyclette, histoire d'un père et son fils cherchant une bicyclette volée, atteint une perfection tragique.

Miracle à Milan (1951) et Umberto D. (1952) poursuivent cette veine humaniste. De Sica montre la dignité des humbles face à l'indifférence sociale. Mais le néoréalisme s'épuise et De Sica revient à l'acting pour financer ses projets.

Le Jardin des Finzi-Contini (1970), sur une famille juive italienne face au fascisme, lui vaut un dernier Oscar. De Sica meurt à Paris, reconnu comme l'un des grands humanistes du cinéma. Son influence sur les cinémas du monde entier, du Free Cinema au cinéma iranien, reste vivante.`,
    mainWorks: ["Le Voleur de bicyclette", "Sciuscià", "Umberto D.", "Miracle à Milan", "Le Jardin des Finzi-Contini"],
    keyIdeas: ["Néoréalisme", "Dignité des humbles", "Décors naturels", "Humanisme"],
  },
  {
    id: "kurosawa",
    name: "Akira Kurosawa",
    birthYear: 1910,
    deathYear: 1998,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Akirakurosawa-onthesetof7samurai-1953-page88.jpg?width=220",
    nationality: "Japonais",
    movement: "Cinéma japonais classique",
    family: "Auteurs d'après-guerre",
    influences: ["ford"],
    summary: `Akira Kurosawa naît à Tokyo dans une famille de samouraï. Peintre et scénariste, il devient assistant réalisateur avant de tourner son premier film en 1943. Rashomon (1950), conte médiéval explorant la relativité de la vérité, remporte le Lion d'or à Venise et révèle le cinéma japonais au monde.

Les Sept Samouraïs (1954), épopée de trois heures et demie, réinvente le film d'action. Son récit de guerriers défendant un village contre des bandits est adapté en western (Les Sept Mercenaires) et influence tout le cinéma d'aventure, de Star Wars aux Avengers.

Kurosawa adapte Shakespeare (Le Château de l'araignée, Ran) et Dostoïevski (L'Idiot) avec une puissance visuelle inégalée. Ses plans larges, ses mouvements de foule, son utilisation des éléments naturels créent un cinéma monumental. Mifune Toshiro est son acteur fétiche.

Une tentative de suicide en 1971 marque une éclipse, mais Kagemusha (1980) et Ran (1985) le ramènent au sommet. Kurosawa meurt à Tokyo, vénéré par Spielberg, Lucas et Coppola qui l'ont aidé à financer ses derniers films. L'"Empereur" reste le plus influent des cinéastes japonais.`,
    mainWorks: ["Les Sept Samouraïs", "Rashomon", "Ran", "Yojimbo", "Vivre"],
    keyIdeas: ["Épopée", "Samouraï", "Relativité", "Monumentalisme"],
  },
  {
    id: "ozu",
    name: "Yasujiro Ozu",
    birthYear: 1903,
    deathYear: 1963,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yasujiro_Ozu.jpg?width=220",
    nationality: "Japonais",
    movement: "Cinéma japonais classique",
    family: "Auteurs d'après-guerre",
    summary: `Yasujiro Ozu naît à Tokyo. Cinéphile passionné, il entre à la Shochiku comme assistant et débute comme réalisateur de comédies muettes. Son style se forme progressivement : plans fixes à hauteur de tatami, faux raccords délibérés, "plans-oreillers" de paysages urbains.

Voyage à Tokyo (1953), où des parents âgés rendent visite à leurs enfants ingrats, est considéré comme l'un des plus beaux films jamais réalisés. Ozu filme la dissolution de la famille traditionnelle japonaise avec une tendresse mélancolique, sans jamais juger.

Sa mise en scène, d'une rigueur absolue, refuse le mouvement de caméra, le champ-contrechamp, le montage expressif. Les acteurs regardent l'objectif, les personnages sont cadrés frontalement. Cette ascèse formelle atteint une sérénité contemplative unique.

Ozu meurt le jour de ses soixante ans, célibataire, vivant encore avec sa mère. Longtemps ignoré en Occident car jugé "trop japonais", il est redécouvert dans les années 1970. Wim Wenders et Jim Jarmusch le citent comme maître. Sa tombe porte un seul caractère : "Mu" (le vide).`,
    mainWorks: ["Voyage à Tokyo", "Printemps tardif", "Fin d'automne", "Le Goût du saké", "Bonjour"],
    keyIdeas: ["Plan fixe", "Famille", "Zen", "Mono no aware"],
  },
  {
    id: "bergman",
    name: "Ingmar Bergman",
    birthYear: 1918,
    deathYear: 2007,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ingmar_Bergman_%281966%29.jpg/330px-Ingmar_Bergman_%281966%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Suédois",
    movement: "Cinéma d'auteur européen",
    family: "Auteurs d'après-guerre",
    summary: `Ernst Ingmar Bergman naît à Uppsala dans une famille de pasteur luthérien. Une enfance austère et culpabilisante marque profondément son œuvre. Il débute au théâtre avant de passer au cinéma en 1946. Sourires d'une nuit d'été (1955) lui apporte une reconnaissance internationale.

Le Septième Sceau (1957) et Les Fraises sauvages (1957) imposent Bergman comme le cinéaste des grandes questions métaphysiques. La mort, Dieu, le sens de l'existence hantent ses films. Sa "trilogie du silence de Dieu" (À travers le miroir, Les Communiants, Le Silence) explore la crise spirituelle moderne.

Persona (1966), Cris et chuchotements (1972), Scènes de la vie conjugale (1973) témoignent d'une maîtrise formelle absolue. Bergman filme les visages en gros plan, sondant l'intimité de ses acteurs, notamment Liv Ullmann et Max von Sydow qui deviennent ses interprètes récurrents.

Installé sur l'île de Faro, Bergman poursuit jusqu'à Saraband (2003) une œuvre obsessionnelle. Fanny et Alexandre (1982), fresque autobiographique, résume ses thèmes. Il meurt à quatre-vingt-neuf ans, considéré comme l'un des plus grands auteurs du cinéma mondial.`,
    mainWorks: ["Le Septième Sceau", "Persona", "Cris et chuchotements", "Fanny et Alexandre", "Scènes de la vie conjugale"],
    keyIdeas: ["Métaphysique", "Visage", "Silence de Dieu", "Intimité"],
  },
  {
    id: "fellini",
    name: "Federico Fellini",
    birthYear: 1920,
    deathYear: 1993,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Federico_Fellini_NYWTS_2.jpg?width=220",
    nationality: "Italien",
    movement: "Cinéma d'auteur italien",
    family: "Auteurs d'après-guerre",
    influences: ["chaplin"],
    summary: `Federico Fellini naît à Rimini, ville de province dont il garde une nostalgie teintée d'ironie. Dessinateur et journaliste, il entre dans le cinéma comme scénariste, collaborant avec Rossellini. Sa femme, Giulietta Masina, devient son actrice fétiche.

La Strada (1954) et Les Nuits de Cabiria (1957), avec Masina en femme-enfant maltraitée par la vie, révèlent son humanisme et son sens du spectacle. La Dolce Vita (1960), fresque de la décadence romaine, fait scandale et triomphe. Mastroianni devient son alter ego masculin.

Huit et demi (1963), où un cinéaste en panne cherche son prochain film, est le chef-d'œuvre de Fellini et peut-être du cinéma moderne. Il abandonne le réalisme pour un univers onirique : souvenirs, fantasmes, visions se mêlent dans un carnaval baroque.

Fellini invente un adjectif : "fellinien" désigne ce mélange de grotesque et de tendresse, de cirque et de poésie. Amarcord, Roma, La Cité des femmes poursuivent cette autobiographie fantasmée. Il meurt à Rome, cinq Oscars au compteur. Ses images continuent de hanter le cinéma mondial.`,
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
    family: "Cinéma moderne",
    influences: ["renoir", "lang", "hitchcock"],
    summary: `Jean-Luc Godard naît à Paris dans une famille de la grande bourgeoisie protestante. Cinéphile fanatique, il écrit aux Cahiers du cinéma avant de passer à la réalisation. À bout de souffle (1960), tourné en deux semaines avec des moyens dérisoires, réinvente le cinéma.

Godard dynamite les conventions : faux raccords, regards caméra, citations, collages sonores. Ses films des années 1960 - Le Mépris, Pierrot le Fou, Masculin Féminin, Week-end - mêlent réflexion politique, amour fou et expérimentation formelle. Anna Karina est sa muse.

Après 1968, Godard rompt avec le cinéma commercial pour le militantisme maoïste (groupe Dziga Vertov). Son retour dans les années 1980 (Sauve qui peut la vie, Passion) puis ses Histoire(s) du cinéma, monument de vidéo-essai, témoignent d'une créativité inépuisable.

Installé à Rolle, en Suisse, Godard reste productif jusqu'à Adieu au langage (2014) en 3D. Il meurt par suicide assisté, cohérent jusqu'au bout. Figure majeure et controversée, il a redéfini ce que le cinéma peut être et influencé des générations de cinéastes.`,
    mainWorks: ["À bout de souffle", "Le Mépris", "Pierrot le Fou", "Histoire(s) du cinéma", "Adieu au langage"],
    keyIdeas: ["Nouvelle Vague", "Déconstruction", "Essai", "Cinéma-pensée"],
  },
  {
    id: "truffaut",
    name: "François Truffaut",
    birthYear: 1932,
    deathYear: 1984,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Fran%C3%A7ois_truffaut.jpg/330px-Fran%C3%A7ois_truffaut.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Nouvelle Vague",
    family: "Cinéma moderne",
    influences: ["renoir", "hitchcock"],
    summary: `François Truffaut naît à Paris, enfant non désiré élevé par sa grand-mère. Adolescent délinquant, il est sauvé par le cinéma et l'amitié d'André Bazin, fondateur des Cahiers du cinéma. Ses critiques virulentes contre le "cinéma de papa" préparent la révolution à venir.

Les Quatre Cents Coups (1959), récit autobiographique d'un enfant mal-aimé, inaugure la Nouvelle Vague. Le personnage d'Antoine Doinel, incarné par Jean-Pierre Léaud, reviendra dans quatre films. Truffaut filme l'enfance, l'amour et le cinéma avec une tendresse lyrique.

Jules et Jim (1962), L'Enfant sauvage (1970), La Nuit américaine (1973), Le Dernier Métro (1980) témoignent d'une versatilité classique qui le distingue de Godard. Truffaut est le plus accessible des auteurs de la Nouvelle Vague, le plus amoureux du cinéma traditionnel.

Truffaut meurt d'une tumeur au cerveau à cinquante-deux ans, laissant une œuvre de vingt-cinq films et des écrits critiques majeurs. Sa correspondance, publiée après sa mort, révèle une personnalité passionnée et généreuse. Il reste l'un des cinéastes français les plus aimés.`,
    mainWorks: ["Les Quatre Cents Coups", "Jules et Jim", "La Nuit américaine", "L'Enfant sauvage", "Le Dernier Métro"],
    keyIdeas: ["Nouvelle Vague", "Enfance", "Amour du cinéma", "Autobiographie"],
  },
  {
    id: "tarkovski",
    name: "Andreï Tarkovski",
    birthYear: 1932,
    deathYear: 1986,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Andrei_tarkovsky_stamp_russia_2007.jpg/330px-Andrei_tarkovsky_stamp_russia_2007.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Russe",
    movement: "Cinéma poétique / Cinéma d'auteur",
    family: "Cinéma moderne",
    influences: ["bergman", "kurosawa"],
    summary: `Andreï Arsenievitch Tarkovski naît à Zavrajie, fils du poète Arseni Tarkovski. Formé au VGIK de Moscou, il réalise L'Enfance d'Ivan (1962), récit onirique d'un enfant-espion pendant la guerre, qui remporte le Lion d'or à Venise et lance sa carrière internationale.

Andreï Roublev (1966), fresque sur le peintre d'icônes médiéval, est censuré pendant cinq ans mais s'impose comme un chef-d'œuvre. Solaris (1972) et Stalker (1979), science-fictions philosophiques, explorent la conscience et la spiritualité avec une lenteur contemplative.

Tarkovski développe une esthétique du "temps scellé" : longs plans-séquences, éléments naturels (eau, feu, brume), espace comme révélation intérieure. Son cinéma, exigeant et mystique, refuse le divertissement pour atteindre une dimension spirituelle.

En conflit avec les autorités soviétiques, Tarkovski s'exile en 1982. Nostalghia et Le Sacrifice, tournés en Italie et en Suède, poursuivent sa quête. Il meurt d'un cancer à Paris à cinquante-quatre ans. Son journal et ses écrits théoriques ("Le temps scellé") éclairent une œuvre unique, référence du cinéma d'art.`,
    mainWorks: ["Stalker", "Le Miroir", "Andreï Roublev", "Solaris", "Le Sacrifice"],
    keyIdeas: ["Temps scellé", "Spiritualité", "Plan-séquence", "Éléments naturels"],
  },
  {
    id: "kubrick",
    name: "Stanley Kubrick",
    birthYear: 1928,
    deathYear: 1999,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Stanley_Kubrick_2.jpg/330px-Stanley_Kubrick_2.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Cinéma d'auteur",
    family: "Cinéma moderne",
    influences: ["welles"],
    summary: `Stanley Kubrick naît dans le Bronx, fils d'un médecin juif. Photographe pour Look Magazine à dix-sept ans, il se tourne vers le cinéma et tourne ses premiers films avec des moyens dérisoires. Les Sentiers de la gloire (1957) et Spartacus (1960) révèlent un perfectionniste obsessionnel.

Installé en Angleterre pour échapper à Hollywood, Kubrick réalise des chefs-d'œuvre dans tous les genres : satire politique (Docteur Folamour), science-fiction (2001, l'Odyssée de l'espace), ultra-violence (Orange mécanique), horreur (Shining), film de guerre (Full Metal Jacket).

Chaque film est le fruit d'années de préparation, de recherches obsessionnelles, de dizaines de prises. Kubrick contrôle tout : image, son, musique, marketing. Sa mise en scène géométrique, ses travellings avant, son usage de la musique classique créent un style immédiatement identifiable.

Reclus dans son manoir anglais, Kubrick meurt après avoir achevé Eyes Wide Shut, laissant de nombreux projets inaboutis. Ses treize films en quarante-six ans témoignent d'une exigence absolue. Son influence sur le cinéma contemporain, de Spielberg à Nolan, est incommensurable.`,
    mainWorks: ["2001, l'Odyssée de l'espace", "Orange mécanique", "Shining", "Full Metal Jacket", "Barry Lyndon"],
    keyIdeas: ["Perfectionnisme", "Géométrie", "Froideur", "Genres transcendés"],
  },
  {
    id: "scorsese",
    name: "Martin Scorsese",
    birthYear: 1942,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Martin_Scorsese_Berlinale_2010_%28cropped2%29.jpg?width=220",
    nationality: "Américain",
    movement: "Nouvel Hollywood",
    family: "Nouvel Hollywood",
    influences: ["ford", "hitchcock", "welles"],
    summary: `Martin Scorsese naît à New York, dans le quartier italo-américain de Little Italy. Enfant asthmatique, il découvre le cinéma dans les salles de quartier et la télévision. Formé à la NYU, il réalise ses premiers films dans l'effervescence du Nouvel Hollywood.

Mean Streets (1973), avec Harvey Keitel et Robert De Niro, inaugure une collaboration légendaire. Taxi Driver (1976) et Raging Bull (1980) imposent Scorsese comme le grand cinéaste de la violence masculine, de la culpabilité catholique et de la rue new-yorkaise.

Les Affranchis (1990) et Casino (1995) renouvellent le film de gangsters. Scorsese explore aussi d'autres territoires : La Dernière Tentation du Christ, Le Temps de l'innocence, Hugo Cabret. Sa culture cinématographique encyclopédique nourrit chaque plan.

Infatigable, Scorsese continue de tourner à plus de quatre-vingts ans : The Irishman, Killers of the Flower Moon. Défenseur passionné du patrimoine cinématographique, il a fondé la Film Foundation. Son influence sur les cinéastes contemporains, de Tarantino à Paul Thomas Anderson, est majeure.`,
    mainWorks: ["Taxi Driver", "Raging Bull", "Les Affranchis", "Goodfellas", "The Irishman"],
    keyIdeas: ["Violence", "Culpabilité catholique", "New York", "Héritage cinématographique"],
  },
  {
    id: "coppola",
    name: "Francis Ford Coppola",
    birthYear: 1939,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Francis_Ford_Coppola_2011_CC.jpg?width=220",
    nationality: "Américain",
    movement: "Nouvel Hollywood",
    family: "Nouvel Hollywood",
    influences: ["eisenstein", "kurosawa"],
    summary: `Francis Ford Coppola naît à Detroit dans une famille d'artistes italo-américains. Son père est compositeur, son frère August scénariste. Formé à l'UCLA, il débute comme assistant de Roger Corman avant de fonder American Zoetrope avec George Lucas.

Le Parrain (1972) et Le Parrain II (1974) réinventent le film de gangsters comme tragédie shakespearienne. La trilogie reste l'une des plus grandes réussites du cinéma américain. Coppola impose sa vision contre le studio, obtenant le montage final et le casting de Brando et Pacino.

Apocalypse Now (1979), adaptation de Conrad au Vietnam, pousse Coppola au bord de la folie. Le tournage aux Philippines devient légendaire par ses excès. Le film, palme d'or à Cannes, reste une expérience sensorielle et politique unique.

Ruiné par des échecs commerciaux (Coup de cœur, Cotton Club), Coppola se relève en tournant des films plus modestes avant de revenir à l'ambition avec Megalopolis (2024). Sa carrière tumultueuse incarne les espoirs et les contradictions du Nouvel Hollywood.`,
    mainWorks: ["Le Parrain", "Apocalypse Now", "Conversation secrète", "Le Parrain II", "Rusty James"],
    keyIdeas: ["Saga familiale", "Démesure", "Nouvel Hollywood", "Opéra"],
  },
  {
    id: "spielberg",
    name: "Steven Spielberg",
    birthYear: 1946,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Steven_Spielberg_by_Gage_Skidmore.jpg?width=220",
    nationality: "Américain",
    movement: "Blockbuster / Cinéma populaire",
    family: "Nouvel Hollywood",
    influences: ["ford", "hitchcock", "kubrick"],
    summary: `Steven Allan Spielberg naît à Cincinnati dans une famille juive. Enfant, il réalise déjà des films en 8mm. Repéré par Universal, il tourne Duel pour la télévision puis Les Dents de la mer (1975) qui invente le blockbuster moderne et bat tous les records.

Rencontres du troisième type, Les Aventuriers de l'arche perdue, E.T. confirment son talent pour le spectacle populaire et l'émotion. Spielberg sait toucher le public comme personne, mêlant effets spéciaux, humour et sentimentalisme. Il domine le box-office mondial.

Mais Spielberg aspire à la reconnaissance critique. La Liste de Schindler (1993) et Il faut sauver le soldat Ryan (1998) lui valent deux Oscars du meilleur réalisateur. Il alterne désormais films sérieux (Munich, Lincoln) et divertissements (Jurassic Park, Ready Player One).

Cofondateur de DreamWorks, producteur prolifique, Spielberg est le cinéaste le plus puissant d'Hollywood. Ses films ont engendré des milliards de dollars et façonné l'imaginaire de générations. Les critiques débattent encore de son héritage : génie populaire ou manipulateur sentimental ?`,
    mainWorks: ["Les Dents de la mer", "E.T.", "La Liste de Schindler", "Jurassic Park", "Il faut sauver le soldat Ryan"],
    keyIdeas: ["Blockbuster", "Émotion", "Spectacle", "Enfance"],
  },
  {
    id: "lynch",
    name: "David Lynch",
    birthYear: 1946,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/David_Lynch_Cannes_2017.jpg/330px-David_Lynch_Cannes_2017.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Cinéma surréaliste / Art et Essai",
    family: "Nouvel Hollywood",
    influences: ["fellini", "bergman", "kubrick"],
    summary: `David Keith Lynch naît à Missoula, Montana. Peintre de formation, il étudie à l'American Film Institute où il réalise Eraserhead, cauchemar en noir et blanc autoproduit sur cinq ans. Ce film culte lui ouvre les portes d'Hollywood.

Elephant Man (1980) révèle son humanisme sous l'étrangeté. Mais c'est Blue Velvet (1986) qui définit son univers : sous la surface idyllique de l'Amérique se cachent violence et perversion. Mulholland Drive (2001), rêve hollywoodien décomposé, est régulièrement élu meilleur film du XXIe siècle.

Twin Peaks (1990), série télévisée sur un meurtre dans une petite ville, révolutionne le format et influence toute la télévision contemporaine. Lynch mélange onirique et trivial, horreur et humour, mystère et émotion, créant un univers immédiatement reconnaissable : le "lynchien".

Peintre, musicien, adepte de la méditation transcendantale, Lynch refuse de s'expliquer sur ses films. Son dernier long métrage, Inland Empire (2006), pousse l'abstraction à l'extrême. Il reste le plus singulier des cinéastes américains, impossible à imiter.`,
    mainWorks: ["Mulholland Drive", "Blue Velvet", "Twin Peaks", "Eraserhead", "Elephant Man"],
    keyIdeas: ["Surréalisme", "Inconscient", "Amérique cachée", "Mystère"],
  },
  {
    id: "wong-kar-wai",
    name: "Wong Kar-wai",
    birthYear: 1958,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Wong_Kar-wai_Berlin_cropped.jpg/330px-Wong_Kar-wai_Berlin_cropped.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Hongkongais",
    movement: "Cinéma d'auteur asiatique",
    family: "Cinéma contemporain",
    influences: ["godard"],
    summary: `Wong Kar-wai naît à Shanghai et émigre à Hong Kong à cinq ans. Scénariste pour la télévision et le cinéma, il passe à la réalisation avec As Tears Go By (1988), film de gangsters stylisé. Ses films suivants imposent une esthétique unique, immédiatement reconnaissable.

Chungking Express (1994) et Fallen Angels (1995), tournés dans les ruelles néon de Hong Kong, capturent la solitude urbaine avec une caméra nerveuse et une bande-son pop. In the Mood for Love (2000), histoire d'amour inassouvie dans le Hong Kong des années 1960, est salué comme un chef-d'œuvre.

Wong Kar-wai filme le désir, le manque, le temps qui passe. Ses personnages se croisent sans se rencontrer, s'aiment sans se le dire. Le chef opérateur Christopher Doyle et le directeur artistique William Chang sont ses collaborateurs essentiels.

2046 (2004) clôt sa trilogie amoureuse. Après The Grand Master (2013), Wong Kar-wai se fait rare. Mais son influence sur le cinéma mondial, des frères Coen à Sofia Coppola, reste immense. Son esthétique du temps suspendu et du désir inaccompli a redéfini le romantisme cinématographique.`,
    mainWorks: ["In the Mood for Love", "Chungking Express", "Fallen Angels", "2046", "Happy Together"],
    keyIdeas: ["Désir", "Solitude urbaine", "Temps suspendu", "Néon"],
  },
  {
    id: "tarantino",
    name: "Quentin Tarantino",
    birthYear: 1963,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Quentin_Tarantino_by_Gage_Skidmore.jpg?width=220",
    nationality: "Américain",
    movement: "Postmodernisme",
    family: "Cinéma contemporain",
    influences: ["hawks", "godard", "scorsese"],
    summary: `Quentin Jerome Tarantino naît à Knoxville, Tennessee. Élevé par sa mère en Californie, il abandonne l'école pour travailler dans un vidéoclub. Cette éducation cinématographique encyclopédique, des classiques aux films d'exploitation, nourrit son œuvre.

Reservoir Dogs (1992), huis clos sanglant, révèle un dialoguiste brillant et un metteur en scène virtuose. Pulp Fiction (1994), récit éclaté de gangsters à Los Angeles, remporte la Palme d'or et redéfinit le cinéma des années 1990 : dialogues pop, violence stylisée, structure non linéaire.

Kill Bill, Inglourious Basterds, Django Unchained poursuivent cette esthétique de la citation et du détournement. Tarantino mélange genres et registres, convoque l'histoire du cinéma dans chaque plan. Ses bandes originales, ses plans-pieds et ses dialogues bavards sont devenus des signatures.

Tarantino annonce sa retraite après dix films. Once Upon a Time in Hollywood (2019) est peut-être son testament, déclaration d'amour au Hollywood de 1969. Adulé et critiqué pour sa violence et son égocentrisme, il reste l'un des cinéastes les plus influents de sa génération.`,
    mainWorks: ["Pulp Fiction", "Kill Bill", "Inglourious Basterds", "Django Unchained", "Once Upon a Time in Hollywood"],
    keyIdeas: ["Postmodernisme", "Dialogue", "Violence stylisée", "Cinéphilie"],
  },
  {
    id: "nolan",
    name: "Christopher Nolan",
    birthYear: 1970,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Christopher_Nolan_Cannes_2018.jpg?width=220",
    nationality: "Britannico-américain",
    movement: "Blockbuster d'auteur",
    family: "Cinéma contemporain",
    influences: ["kubrick"],
    summary: `Christopher Edward Nolan naît à Londres, fils d'un publicitaire anglais et d'une hôtesse de l'air américaine. Cinéphile précoce, il tourne des courts métrages en Super 8 avant de réaliser Following (1998) avec un budget dérisoire. Memento (2000), récit inversé d'un amnésique, le révèle.

Engagé par Warner pour relancer Batman, Nolan livre une trilogie (Batman Begins, The Dark Knight, The Dark Knight Rises) qui redéfinit le film de super-héros comme drame sérieux. Le Joker de Heath Ledger devient iconique. Nolan prouve qu'un blockbuster peut être intelligent.

Inception (2010), Interstellar (2014), Dunkerque (2017), Tenet (2020) confirment son ambition : spectacle IMAX et complexité narrative, effets pratiques et réflexion sur le temps. Oppenheimer (2023), biopic du père de la bombe atomique, lui vaut l'Oscar du meilleur réalisateur.

Défenseur de la pellicule et de l'expérience en salle, Nolan est l'un des rares cinéastes contemporains à remplir les salles sur son seul nom. Ses films, parfois jugés froids ou confus, divisent la critique mais fascinent le public. Il incarne le blockbuster d'auteur du XXIe siècle.`,
    mainWorks: ["Inception", "The Dark Knight", "Interstellar", "Oppenheimer", "Memento"],
    keyIdeas: ["Temps", "Complexité narrative", "IMAX", "Blockbuster d'auteur"],
  },
  {
    id: "bong-joon-ho",
    name: "Bong Joon-ho",
    birthYear: 1969,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Bong_Joon_Ho_-_Okja.jpg/330px-Bong_Joon_Ho_-_Okja.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Sud-coréen",
    movement: "Cinéma coréen contemporain",
    family: "Cinéma contemporain",
    influences: ["hitchcock", "scorsese"],
    summary: `Bong Joon-ho naît à Daegu, en Corée du Sud. Diplômé de sociologie, il étudie le cinéma et réalise des courts métrages remarqués. Memories of Murder (2003), enquête sur un tueur en série non élucidée, impose son sens du mélange des genres : thriller, comédie noire, critique sociale.

The Host (2006), film de monstre écologique, devient le plus grand succès du cinéma coréen. Mother (2009) et Snowpiercer (2013) confirment sa capacité à subvertir les genres. Okja (2017), fable sur l'industrie alimentaire, est produit par Netflix.

Parasite (2019) raconte l'infiltration d'une famille pauvre chez des riches. La métaphore sociale se mue en thriller sanglant. Le film remporte la Palme d'or à Cannes puis quatre Oscars dont meilleur film et meilleur réalisateur, une première pour un film non anglophone.

Bong Joon-ho déclare s'inspirer d'Hitchcock, Chabrol et du cinéma coréen des années 1960. Son mélange de genres, son humour noir et sa conscience sociale en font l'un des cinéastes les plus originaux du cinéma mondial. Son prochain projet est très attendu.`,
    mainWorks: ["Parasite", "Memories of Murder", "The Host", "Mother", "Snowpiercer"],
    keyIdeas: ["Mélange des genres", "Critique sociale", "Humour noir", "Cinéma coréen"],
  },
];
