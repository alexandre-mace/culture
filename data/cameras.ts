export interface Camera {
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

export const cameras: Camera[] = [
  {
    id: "camera-obscura",
    name: "Camera obscura",
    birthYear: 1500,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Camera_obscura_1.jpg?width=220",
    nationality: "International",
    movement: "Prehistoire de la photographie",
    summary: `La camera obscura, ou chambre noire, est le principe optique a l'origine de toute la photographie. Connue depuis l'Antiquite (Aristote, Al-Hazen), elle est perfectionnee a la Renaissance par Leonard de Vinci et utilisee par les peintres pour tracer leurs compositions.

Le principe est simple : la lumiere passant par un petit trou dans une piece sombre projette une image inversee de l'exterieur sur le mur oppose. L'ajout d'une lentille au XVIe siecle ameliore la nettete et la luminosite de l'image projetee.

Au XVIIIe siecle, des versions portables permettent aux artistes de dessiner des paysages avec une precision photographique. Canaletto et Vermeer auraient utilise ce dispositif. La camera obscura devient un instrument scientifique et artistique repandu.

Il ne manquait qu'un moyen de fixer l'image projetee : c'est tout l'enjeu des recherches de Niepce, Daguerre et Talbot au debut du XIXe siecle. La camera obscura est l'ancetre direct de tous les appareils photographiques, du daguerreotype au smartphone.`,
    mainWorks: ["Chambre noire portative", "Camera obscura de Canaletto", "Utilisee par Vermeer"],
    keyIdeas: ["Principe optique", "Projection inversee", "Ancetre de la photo", "Outil de peintre"],
  },
  {
    id: "daguerreotype",
    name: "Daguerreotype",
    birthYear: 1839,
    deathYear: 1860,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Susse_Fr%C3%A8re_Daguerreotype_camera_1839.jpg?width=220",
    nationality: "Francais",
    movement: "Naissance de la photographie",
    summary: `Le daguerreotype, invente par Louis Daguerre et presente a l'Academie des sciences le 19 aout 1839, est le premier procede photographique commercialise. Cette date marque la naissance officielle de la photographie. Le gouvernement francais achete le brevet et l'offre "au monde entier".

Le procede utilise une plaque de cuivre argentee, sensibilisee aux vapeurs d'iode, exposee dans une chambre photographique puis developpee aux vapeurs de mercure. L'image obtenue est d'une precision extraordinaire, unique et non reproductible, comme un miroir gardant le souvenir.

Les temps de pose, initialement de plusieurs dizaines de minutes, sont rapidement reduits a quelques secondes grace aux ameliorations optiques et chimiques. Le portrait devient accessible, democratisant l'image de soi jusque-la reservee aux riches pouvant payer un peintre.

Le daguerreotype connait un immense succes, notamment aux Etats-Unis, avant d'etre supplante par les procedes sur papier dans les annees 1850-1860. Aujourd'hui, ces images uniques, d'une beaute spectrale, sont des tresors pour les collectionneurs et les historiens.`,
    mainWorks: ["Boulevard du Temple (Daguerre, 1838)", "Portraits de Nadar", "Archives de Mathew Brady"],
    keyIdeas: ["Premier procede commercial", "Image unique", "Plaque argentee", "Vapeurs de mercure"],
  },
  {
    id: "calotype",
    name: "Calotype",
    birthYear: 1841,
    deathYear: 1860,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Calotype_of_the_Reverend_Calvert_Richard_Jones.jpg?width=220",
    nationality: "Britannique",
    movement: "Naissance de la photographie",
    summary: `Le calotype, invente par l'Anglais William Henry Fox Talbot et brevete en 1841, introduit un principe revolutionnaire : le negatif-positif. Une image negative sur papier permet de tirer un nombre illimite d'epreuves positives. C'est le fondement de toute la photographie argentique ulterieure.

Le papier est sensibilise a l'iodure d'argent, expose dans la chambre noire, puis developpe au nitrate d'argent et a l'acide gallique. L'image negative obtenue est ensuite placee sur un autre papier sensibilise et exposee au soleil pour creer le positif.

La texture du papier donne aux calotypes une douceur artistique que certains preferent a la precision froide du daguerreotype. Des photographes comme David Octavius Hill et Robert Adamson en tirent des portraits d'une beaute picturale remarquable.

Le brevet de Talbot, contrairement au daguerreotype offert au monde, freine l'adoption du calotype. Mais le principe negatif-positif s'impose avec le collodion humide et reste dominant pendant 150 ans, jusqu'a l'avenement du numerique.`,
    mainWorks: ["The Pencil of Nature (Talbot)", "Portraits de Hill et Adamson", "Vues de Lacock Abbey"],
    keyIdeas: ["Negatif-positif", "Image sur papier", "Reproductible", "Texture artistique"],
  },
  {
    id: "collodion-humide",
    name: "Collodion humide",
    birthYear: 1851,
    deathYear: 1880,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Collodion_Fenton.jpg?width=220",
    nationality: "Britannique",
    movement: "Age d'or du portrait",
    summary: `Le procede au collodion humide, invente par Frederick Scott Archer en 1851, combine les avantages du daguerreotype (nettete) et du calotype (reproductibilite). Il domine la photographie pendant trente ans et produit certaines des images les plus celebres du XIXe siecle.

Le collodion, solution de nitrocellulose dans l'ether, est verse sur une plaque de verre, sensibilise au nitrate d'argent, expose et developpe avant qu'il ne seche - d'ou le nom "humide". Cette contrainte impose de preparer et developper sur place, necessitant une chambre noire mobile.

Malgre cette complexite, le procede permet des temps de pose courts et des negatifs d'une finesse extraordinaire. Les portraits de Nadar, les paysages de Gustave Le Gray, les reportages de guerre de Roger Fenton et Mathew Brady temoignent de sa qualite.

Le collodion humide democratise aussi la photographie avec les ferrotypes (tintypes) et les ambrotypes, portraits bon marche sur metal ou verre. Les photographes itinerants popularisent le portrait aupres des classes populaires.`,
    mainWorks: ["Portraits de Nadar", "Marines de Gustave Le Gray", "Guerre de Crimee (Fenton)", "Guerre de Secession (Brady)"],
    keyIdeas: ["Negatif verre", "Tres grande finesse", "Laboratoire mobile", "Age d'or du portrait"],
  },
  {
    id: "plaque-seche",
    name: "Plaque seche au gelatino-bromure",
    birthYear: 1871,
    deathYear: 1920,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Early_dry_plate_box_camera.jpg?width=220",
    nationality: "Britannique",
    movement: "Democratisation de la photographie",
    summary: `La plaque seche au gelatino-bromure d'argent, mise au point par Richard Leach Maddox en 1871 et perfectionnee dans les annees suivantes, libere enfin la photographie des contraintes du collodion humide. Les plaques peuvent etre preparees a l'avance et conservees des mois.

La gelatine, extraite d'os et de peaux animales, remplace le collodion comme liant pour les sels d'argent. Les plaques sont fabriquees industriellement, standardisees, vendues pretes a l'emploi. Le photographe n'a plus besoin de maitriser la chimie.

Cette simplification revolutionne la pratique. Les temps de pose, reduits a une fraction de seconde, permettent l'instantane. Les appareils deviennent plus petits, plus simples. La photographie amateur nait. Les fabricants comme Ilford et Agfa emergent.

La plaque seche permet aussi les premieres experiences de chronophotographie par Muybridge et Marey, ancetres du cinema. Elle reste le support dominant jusqu'a l'adoption generalisee du film en rouleau au debut du XXe siecle.`,
    mainWorks: ["Chronophotographies de Muybridge", "Etudes de Marey", "Appareils de detectivess"],
    keyIdeas: ["Preparation industrielle", "Conservation longue", "Instantane", "Photographie amateur"],
  },
  {
    id: "kodak-box",
    name: "Kodak n°1",
    birthYear: 1888,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kodak_No_1.jpg?width=220",
    nationality: "Americain",
    movement: "Photographie grand public",
    summary: `En 1888, George Eastman lance le Kodak n°1 avec un slogan revolutionnaire : "You press the button, we do the rest." (Vous appuyez sur le bouton, nous faisons le reste.) L'appareil est vendu charge d'un rouleau de film pour 100 photos. Une fois termine, on renvoie l'appareil entier a l'usine.

Cette approche elimine toute la complexite technique. Plus besoin de plaques, de chambre noire, de connaissances chimiques. La photographie devient accessible a tous. Eastman invente un mot facile a prononcer dans toutes les langues : Kodak.

Le film souple en rouleau, d'abord sur papier puis sur support nitrate de cellulose transparent, remplace progressivement les plaques de verre. Il est plus leger, moins fragile, plus facile a charger. Cette innovation permet aussi la naissance du cinema.

Le succes de Kodak est fulgurant. L'entreprise domine le marche photographique pendant un siecle. La Brownie (1900), encore plus simple et abordable, met l'appareil photo entre les mains de millions de familles. L'album de famille devient une institution.`,
    mainWorks: ["Kodak n°1 (1888)", "Brownie (1900)", "Film en rouleau"],
    keyIdeas: ["You press the button", "Film en rouleau", "Photographie pour tous", "Service de developpement"],
  },
  {
    id: "leica",
    name: "Leica et le 35mm",
    birthYear: 1925,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/LEI0060_186_Leica_I_Sn.5193_1927_Originalzustand_Front-2_FS-15.jpg?width=220",
    nationality: "Allemand",
    movement: "Photographie moderne",
    summary: `En 1925, l'ingenieur allemand Oskar Barnack commercialise le Leica (Leitz Camera), premier appareil compact utilisant le film cinema 35mm. Ce format, standardise a 24x36mm, devient la norme mondiale pour la photographie pendant 75 ans.

La reduction du format, compensee par des objectifs de haute qualite, permet un appareil de poche capable de 36 poses. Le photographe devient mobile, discret, reactif. Henri Cartier-Bresson fera du Leica son instrument de l'"instant decisif".

La precision de fabrication allemande et la qualite optique des objectifs Leitz etablissent une reputation d'excellence. Le Leica devient l'outil des grands photojournalistes : Robert Capa, Werner Bischof, Sebastiao Salgado. C'est l'appareil des moments historiques.

Le systeme Leica, avec ses objectifs interchangeables et son telémètre, influence tous les fabricants. Nikon, Canon, Pentax developpent leurs propres systemes 35mm. Le format reste dominant jusqu'a l'avenement du numerique, et le Leica conserve son aura de legende.`,
    mainWorks: ["Leica I (1925)", "Leica M3 (1954)", "Objectifs Summicron et Summilux"],
    keyIdeas: ["Format 35mm", "Compact et discret", "Telemetrique", "Photojournalisme"],
  },
  {
    id: "rolleiflex",
    name: "Rolleiflex",
    birthYear: 1929,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rolleiflex_camera.jpg?width=220",
    nationality: "Allemand",
    movement: "Moyen format",
    summary: `La Rolleiflex, creee par Franke & Heidecke en 1929, est le reflex bi-objectif (TLR) le plus celebre de l'histoire. Un objectif sert a la visee, l'autre a la prise de vue. Le format 6x6 cm sur film 120 offre une qualite superieure au 35mm.

La visee par le dessus, sur un depoli, permet une discretion appreciee des photographes de rue et des portraitistes. Le format carre elimine le choix entre horizontal et vertical. Diane Arbus, Irving Penn, Richard Avedon feront de la Rolleiflex leur outil de predilection.

La qualite optique des objectifs Zeiss (Planar, Tessar) et la precision mecanique allemande en font un instrument professionnel. Le format moyen format offre un rendu des tons et une profondeur de champ specifiques, tres prises pour le portrait et la mode.

Bien que supplantee par les reflex mono-objectif puis le numerique, la Rolleiflex conserve des adeptes. Des photographes contemporains comme Vivian Maier ont ete redécouverts avec leurs archives Rolleiflex. L'appareil reste un objet iconique du design industriel.`,
    mainWorks: ["Rolleiflex Original (1929)", "Rolleiflex 2.8F", "Format 6x6 sur film 120"],
    keyIdeas: ["Reflex bi-objectif", "Format carre 6x6", "Visee par dessus", "Moyen format"],
  },
  {
    id: "polaroid",
    name: "Polaroid",
    birthYear: 1948,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Polaroid_Land_Camera_Model_95_-_MIT_Museum_-_DSC03766.JPG?width=220",
    nationality: "Americain",
    movement: "Photographie instantanee",
    summary: `En 1948, Edwin Land presente le Polaroid Model 95, premier appareil a developpement instantane. Moins d'une minute apres la prise de vue, une epreuve unique sort de l'appareil. La magie de voir l'image apparaitre fascine immediatement le public.

Le procede repose sur une chimie complexe integree dans le film lui-meme. Des poches de reactifs se repandent sur l'image quand le tirage passe entre des rouleaux. Land, genie visionnaire et perfectionniste, developpe le systeme pendant des decennies.

Le Polaroid SX-70 (1972), pliable et elegant, utilise le film integral qui se developpe a la lumiere du jour. Andy Warhol en fait son outil de predilection. Les couleurs saturees et l'esthetique unique du Polaroid marquent l'imagerie des annees 1970-80.

La revolution numerique semble condamner Polaroid, qui fait faillite en 2001. Mais le format renait sous le nom Impossible Project puis Polaroid Originals. Instagram, avec son format carre et ses filtres, s'inspire directement de l'esthetique Polaroid.`,
    mainWorks: ["Model 95 (1948)", "SX-70 (1972)", "Film integral", "Portraits de Warhol"],
    keyIdeas: ["Developpement instantane", "Image unique", "Chimie integree", "Nostalgie"],
  },
  {
    id: "nikon-f",
    name: "Reflex 35mm (Nikon F)",
    birthYear: 1959,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nikon_F_Photomic_6108.jpg?width=220",
    nationality: "Japonais",
    movement: "Photographie professionnelle",
    summary: `Le Nikon F, lance en 1959, impose le reflex mono-objectif (SLR) comme standard professionnel. La visee a travers l'objectif de prise de vue, via un miroir et un prisme, permet un cadrage precis et l'utilisation de toute une gamme d'optiques interchangeables.

Nikon, fabricant d'optiques militaires reconverti, propose un systeme complet : boitier robuste, moteur, objectifs, accessoires. La fiabilite du Nikon F pendant la guerre du Vietnam le consacre comme l'outil des photojournalistes. Don McCullin, Larry Burrows ne jurent que par lui.

Canon, Pentax, Minolta developpent leurs systemes concurrents. La competition stimule l'innovation : cellule TTL, autofocus, motorisation. Le reflex 35mm devient l'instrument universel, du professionnel a l'amateur eclaire.

Le systeme F evolue pendant des decennies : F2, F3, F4, F5, F6. La monture F, compatible depuis 1959, permet d'utiliser les objectifs anciens sur les boitiers modernes. Cette continuite temoigne de la robustesse de la conception originelle.`,
    mainWorks: ["Nikon F (1959)", "Nikon F2 (1971)", "Canon F-1", "Systeme d'objectifs Nikkor"],
    keyIdeas: ["Reflex mono-objectif", "Visee TTL", "Systeme complet", "Photojournalisme"],
  },
  {
    id: "compact-automatique",
    name: "Compact automatique",
    birthYear: 1977,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Konica_C35_AF.jpg?width=220",
    nationality: "Japonais",
    movement: "Photographie familiale",
    summary: `Le Konica C35 AF de 1977 est le premier appareil photo autofocus commercial. Cette innovation, combinee a l'automatisation de l'exposition, produit des appareils "point and shoot" ou l'utilisateur n'a plus qu'a cadrer et declencher.

Les compacts automatiques des annees 1980-90 (Olympus Stylus, Yashica T4, Contax T2) demontrent que simplicite et qualite peuvent coexister. Certains, equipes d'objectifs Zeiss ou Tessar, produisent des images remarquables et deviennent cultes.

La motorisation du film, le flash integre, la mise au point automatique et l'exposition mesuree eliminent toute competence technique. La photographie devient vraiment universelle. Anniversaires, vacances, evenements familiaux sont documentes sans effort.

L'avenement du numerique puis du smartphone semble condamner le compact argentique. Pourtant, une nouvelle generation redecouvre ces appareils pour leur esthetique film et leur simplicite. Le marche de l'occasion explose, certains modeles atteignant des prix exorbitants.`,
    mainWorks: ["Konica C35 AF (1977)", "Olympus Stylus/mju", "Yashica T4", "Contax T2/T3"],
    keyIdeas: ["Autofocus", "Point and shoot", "Photographie familiale", "Objectifs de qualite"],
  },
  {
    id: "jetable",
    name: "Appareil jetable",
    birthYear: 1986,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Agfaphoto_disposable_camera.jpg?width=220",
    nationality: "Japonais",
    movement: "Photographie democratisee",
    summary: `Le Fujifilm QuickSnap, lance en 1986, est le premier appareil jetable a succes commercial. Pre-charge avec un rouleau de film, il est rendu entier au laboratoire apres utilisation. Simple, bon marche, disponible partout, il dematerialise l'acte d'achat d'un appareil.

L'appareil jetable repond a un besoin : photographier quand on n'a pas son appareil. Touristes, fetards, participants a des mariages l'adoptent massivement. Kodak, Agfa, Konica proposent leurs versions. Des modeles etanches, panoramiques ou avec flash apparaissent.

La qualite optique est minimale, mais suffisante pour des tirages 10x15. Le flash integre permet les photos de soiree. L'absence de reglages elimine les erreurs. Le jetable incarne la photographie sans contrainte, pure memoire instantanee.

Malgre l'avenement du numerique, le jetable survit. Fujifilm continue d'en produire. Les jeunes generations, nostalgiques d'une esthetique film qu'elles n'ont pas connue, redécouvrent le jetable pour ses couleurs, son grain, son imprevisibilite assumee.`,
    mainWorks: ["Fujifilm QuickSnap (1986)", "Kodak FunSaver", "Modeles etanches et panoramiques"],
    keyIdeas: ["Usage unique", "Pas de reglage", "Photographie de masse", "Nostalgie"],
  },
  {
    id: "numerique-debut",
    name: "Appareil numerique",
    birthYear: 1991,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kodak_DCS_100.jpg?width=220",
    nationality: "Americain / Japonais",
    movement: "Revolution numerique",
    summary: `Le Kodak DCS 100 de 1991, base sur un boitier Nikon F3 avec un dos numerique, est le premier appareil numerique professionnel. Avec 1,3 megapixels et un prix de 13 000 dollars, il est reserve aux agences de presse. Mais la revolution est en marche.

Le capteur CCD remplace le film argentique. L'image est stockee sur un support magnetique puis numerique. Plus de pellicule, plus de developpement, plus d'attente. On peut voir l'image immediatement, l'effacer, recommencer. Le cout marginal de chaque photo devient nul.

Dans les annees 1990, les compacts numeriques grand public apparaissent. La resolution augmente, les prix baissent. Les cartes memoire remplacent les disquettes. Le JPEG et le RAW s'imposent comme formats. L'ecran LCD permet la visee et la revue des images.

Kodak, ironiquement inventeur de la technologie qu'il commercialisera trop tard, fait faillite en 2012. Canon, Nikon, Sony dominent le marche professionnel. La photographie argentique devient une niche nostalgique et artistique.`,
    mainWorks: ["Kodak DCS 100 (1991)", "Nikon D1 (1999)", "Canon EOS D30 (2000)", "Premiers compacts numeriques"],
    keyIdeas: ["Capteur CCD/CMOS", "Image immediate", "Cout marginal nul", "Stockage numerique"],
  },
  {
    id: "reflex-numerique",
    name: "Reflex numerique (DSLR)",
    birthYear: 1999,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nikon_D1H_front.jpg?width=220",
    nationality: "Japonais",
    movement: "Photographie numerique professionnelle",
    summary: `Le Nikon D1, lance en 1999, est le premier reflex numerique entierement concu comme tel (et non un boitier argentique modifie). A 5 000 dollars pour 2,7 megapixels, il rend la photographie numerique professionnelle accessible aux photojournalistes et studios.

Le reflex numerique combine les avantages du systeme reflex (visee optique, objectifs interchangeables, ergonomie) avec la flexibilite du numerique (visualisation immediate, sensibilite variable, post-traitement). Canon et Nikon se livrent une guerre technologique intense.

Le Canon EOS 5D (2005) democratise le "plein format" (capteur 24x36mm comme le film). La video HD arrive avec le Canon 5D Mark II (2008), revolutionnant le cinema independant. Les DSLR deviennent des outils multimedias.

Le reflex numerique domine la photographie professionnelle pendant vingt ans. Mais les hybrides (mirrorless), plus compacts et offrant la visee electronique, le supplantent progressivement. Canon, Nikon, Sony abandonnent le developpement de nouveaux reflex pour se concentrer sur l'hybride.`,
    mainWorks: ["Nikon D1 (1999)", "Canon EOS 5D (2005)", "Nikon D3 (2007)", "Canon 5D Mark II (2008)"],
    keyIdeas: ["Capteur plein format", "Objectifs interchangeables", "Video HD", "Professionnalisation"],
  },
  {
    id: "smartphone",
    name: "Smartphone",
    birthYear: 2007,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/IPhone_2G_PSD_Mock.png?width=220",
    nationality: "Americain",
    movement: "Photographie ubiquitaire",
    summary: `L'iPhone original de 2007, avec son appareil photo de 2 megapixels sans autofocus, semble derisoire. Mais Steve Jobs comprend que l'appareil photo sera une fonction cle du smartphone. "The best camera is the one you have with you" : le telephone, toujours present, devient l'appareil photo universel.

L'integration du partage (email, reseaux sociaux) transforme la photographie. Instagram (2010), avec ses filtres et son format carre, cree une nouvelle esthetique. La photo n'est plus un objet a imprimer mais un message a partager. Un milliard d'images sont partagees chaque jour.

La course a la qualite s'accelere : capteurs plus grands, objectifs multiples, traitement computationnel. Le mode portrait simule la profondeur de champ. Le mode nuit assemble des dizaines d'images. L'intelligence artificielle ameliore chaque photo automatiquement.

Le smartphone a tue l'appareil compact et menace le reflex amateur. Mais il a aussi democratise la photographie comme jamais. Chacun est photographe. Les revolutions, les temoignages, les creations artistiques passent par le telephone. La camera est devenue ubiquitaire.`,
    mainWorks: ["iPhone (2007)", "Instagram (2010)", "Mode portrait (2016)", "Photographie computationnelle"],
    keyIdeas: ["Toujours present", "Partage instantane", "Intelligence artificielle", "Ubiquite"],
  },
  {
    id: "hybride-mirrorless",
    name: "Hybride (Mirrorless)",
    birthYear: 2008,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Panasonic_Lumix_DMC-G1_-_oblique_PNr%C2%B00268.jpg?width=220",
    nationality: "Japonais",
    movement: "Photographie numerique actuelle",
    summary: `Le Panasonic Lumix G1 de 2008 inaugure l'ere des appareils hybrides (mirrorless). En supprimant le miroir du reflex, on reduit l'encombrement tout en conservant les objectifs interchangeables. La visee electronique (EVF) affiche l'image telle qu'elle sera capturee.

Sony bouleverse le marche avec la serie Alpha (A7, A7R, A7S) : plein format, compacite, performances video exceptionnelles. Les videographes et createurs de contenu adoptent massivement ces boitiers polyvalents. La frontiere entre photo et video s'estompe.

Canon (serie R) et Nikon (serie Z) abandonnent le reflex pour l'hybride. Les nouvelles montures permettent des objectifs plus compacts et lumineux. L'autofocus a detection de phase sur capteur atteint des performances inegalees, suivant les yeux des sujets en temps reel.

L'hybride est aujourd'hui le standard professionnel et amateur eclaire. Les reflex restent apprecies pour leur ergonomie et leur autonomie. Mais l'avenir de la photographie interchangeable est clairement mirrorless, meme si le smartphone reste le premier appareil photo du monde.`,
    mainWorks: ["Panasonic G1 (2008)", "Sony A7 (2013)", "Canon EOS R5 (2020)", "Nikon Z9 (2021)"],
    keyIdeas: ["Sans miroir", "Visee electronique", "Compacite", "Video 4K/8K"],
  },
];
