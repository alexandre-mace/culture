export interface Camera {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  image?: string;
  nationality: string;
  movement: string;
  family?: string;
  summary: string;
  mainWorks: string[];
  itemType?: "person" | "topic";
  keyIdeas: string[];
}

export const cameras: Camera[] = [
  {
    id: "camera-obscura",
    name: "Camera obscura",
    birthYear: 1500,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Camera_obscura_1.jpg?width=220",
    nationality: "International",
    movement: "Préhistoire de la photographie",
    family: "Origines",
    summary: `La camera obscura, ou chambre noire, est le principe optique à l'origine de toute la photographie. Connue depuis l'Antiquité (Aristote, Al-Hazen), elle est perfectionnée à la Renaissance par Léonard de Vinci et utilisée par les peintres pour tracer leurs compositions.

Le principe est simple : la lumière passant par un petit trou dans une pièce sombre projette une image inversée de l'extérieur sur le mur opposé. L'ajout d'une lentille au XVIe siècle améliore la netteté et la luminosité de l'image projetée.

Au XVIIIe siècle, des versions portables permettent aux artistes de dessiner des paysages avec une précision photographique. Canaletto et Vermeer auraient utilisé ce dispositif. La camera obscura devient un instrument scientifique et artistique répandu.

Il ne manquait qu'un moyen de fixer l'image projetée : c'est tout l'enjeu des recherches de Niépce, Daguerre et Talbot au début du XIXe siècle. La camera obscura est l'ancêtre direct de tous les appareils photographiques, du daguerréotype au smartphone.`,
    mainWorks: ["Chambre noire portative", "Camera obscura de Canaletto", "Utilisée par Vermeer"],
    keyIdeas: ["Principe optique", "Projection inversée", "Ancêtre de la photo", "Outil de peintre"],
  },
  {
    id: "daguerreotype",
    name: "Daguerréotype",
    birthYear: 1839,
    deathYear: 1860,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Susse_Fr%C3%A8res_Daguerreotype_camera_1839.jpg/330px-Susse_Fr%C3%A8res_Daguerreotype_camera_1839.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Naissance de la photographie",
    family: "Origines",
    summary: `Le daguerréotype, inventé par Louis Daguerre et présenté à l'Académie des sciences le 19 août 1839, est le premier procédé photographique commercialisé. Cette date marque la naissance officielle de la photographie. Le gouvernement français achète le brevet et l'offre "au monde entier".

Le procédé utilise une plaque de cuivre argentée, sensibilisée aux vapeurs d'iode, exposée dans une chambre photographique puis développée aux vapeurs de mercure. L'image obtenue est d'une précision extraordinaire, unique et non reproductible, comme un miroir gardant le souvenir.

Les temps de pose, initialement de plusieurs dizaines de minutes, sont rapidement réduits à quelques secondes grâce aux améliorations optiques et chimiques. Le portrait devient accessible, démocratisant l'image de soi jusque-là réservée aux riches pouvant payer un peintre.

Le daguerréotype connaît un immense succès, notamment aux États-Unis, avant d'être supplanté par les procédés sur papier dans les années 1850-1860. Aujourd'hui, ces images uniques, d'une beauté spectrale, sont des trésors pour les collectionneurs et les historiens.`,
    mainWorks: ["Boulevard du Temple (Daguerre, 1838)", "Portraits de Nadar", "Archives de Mathew Brady"],
    keyIdeas: ["Premier procédé commercial", "Image unique", "Plaque argentée", "Vapeurs de mercure"],
  },
  {
    id: "calotype",
    name: "Calotype",
    birthYear: 1841,
    deathYear: 1860,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Talbot_foto.jpg/330px-Talbot_foto.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Britannique",
    movement: "Naissance de la photographie",
    family: "Origines",
    summary: `Le calotype, inventé par l'Anglais William Henry Fox Talbot et breveté en 1841, introduit un principe révolutionnaire : le négatif-positif. Une image négative sur papier permet de tirer un nombre illimité d'épreuves positives. C'est le fondement de toute la photographie argentique ultérieure.

Le papier est sensibilisé à l'iodure d'argent, exposé dans la chambre noire, puis développé au nitrate d'argent et à l'acide gallique. L'image négative obtenue est ensuite placée sur un autre papier sensibilisé et exposée au soleil pour créer le positif.

La texture du papier donne aux calotypes une douceur artistique que certains préfèrent à la précision froide du daguerréotype. Des photographes comme David Octavius Hill et Robert Adamson en tirent des portraits d'une beauté picturale remarquable.

Le brevet de Talbot, contrairement au daguerréotype offert au monde, freine l'adoption du calotype. Mais le principe négatif-positif s'impose avec le collodion humide et reste dominant pendant 150 ans, jusqu'à l'avènement du numérique.`,
    mainWorks: ["The Pencil of Nature (Talbot)", "Portraits de Hill et Adamson", "Vues de Lacock Abbey"],
    keyIdeas: ["Négatif-positif", "Image sur papier", "Reproductible", "Texture artistique"],
  },
  {
    id: "collodion-humide",
    name: "Collodion humide",
    birthYear: 1851,
    deathYear: 1880,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Colodi%C3%B3n_h%C3%BAmedo%2C_collodion_wet_plate_process%2C_el_colodi%C3%B3n_se_vierte_en_una_placa_de_vidrio%2C_IPCE%2C_Madrid%2C_Espa%C3%B1a.jpg/330px-Colodi%C3%B3n_h%C3%BAmedo%2C_collodion_wet_plate_process%2C_el_colodi%C3%B3n_se_vierte_en_una_placa_de_vidrio%2C_IPCE%2C_Madrid%2C_Espa%C3%B1a.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Britannique",
    movement: "Âge d'or du portrait",
    family: "Origines",
    summary: `Le procédé au collodion humide, inventé par Frederick Scott Archer en 1851, combine les avantages du daguerréotype (netteté) et du calotype (reproductibilité). Il domine la photographie pendant trente ans et produit certaines des images les plus célèbres du XIXe siècle.

Le collodion, solution de nitrocellulose dans l'éther, est versé sur une plaque de verre, sensibilisé au nitrate d'argent, exposé et développé avant qu'il ne sèche - d'où le nom "humide". Cette contrainte impose de préparer et développer sur place, nécessitant une chambre noire mobile.

Malgré cette complexité, le procédé permet des temps de pose courts et des négatifs d'une finesse extraordinaire. Les portraits de Nadar, les paysages de Gustave Le Gray, les reportages de guerre de Roger Fenton et Mathew Brady témoignent de sa qualité.

Le collodion humide démocratise aussi la photographie avec les ferrotypes (tintypes) et les ambrotypes, portraits bon marché sur métal ou verre. Les photographes itinérants popularisent le portrait auprès des classes populaires.`,
    mainWorks: ["Portraits de Nadar", "Marines de Gustave Le Gray", "Guerre de Crimée (Fenton)", "Guerre de Sécession (Brady)"],
    keyIdeas: ["Négatif verre", "Très grande finesse", "Laboratoire mobile", "Âge d'or du portrait"],
  },
  {
    id: "plaque-seche",
    name: "Plaque sèche au gélatino-bromure",
    birthYear: 1871,
    deathYear: 1920,
    nationality: "Britannique",
    movement: "Démocratisation de la photographie",
    family: "Argentique",
    summary: `La plaque sèche au gélatino-bromure d'argent, mise au point par Richard Leach Maddox en 1871 et perfectionnée dans les années suivantes, libère enfin la photographie des contraintes du collodion humide. Les plaques peuvent être préparées à l'avance et conservées des mois.

La gélatine, extraite d'os et de peaux animales, remplace le collodion comme liant pour les sels d'argent. Les plaques sont fabriquées industriellement, standardisées, vendues prêtes à l'emploi. Le photographe n'a plus besoin de maîtriser la chimie.

Cette simplification révolutionne la pratique. Les temps de pose, réduits à une fraction de seconde, permettent l'instantané. Les appareils deviennent plus petits, plus simples. La photographie amateur naît. Les fabricants comme Ilford et Agfa émergent.

La plaque sèche permet aussi les premières expériences de chronophotographie par Muybridge et Marey, ancêtres du cinéma. Elle reste le support dominant jusqu'à l'adoption généralisée du film en rouleau au début du XXe siècle.`,
    mainWorks: ["Chronophotographies de Muybridge", "Études de Marey", "Appareils de détectives"],
    keyIdeas: ["Préparation industrielle", "Conservation longue", "Instantané", "Photographie amateur"],
  },
  {
    id: "kodak-box",
    name: "Kodak n°1",
    birthYear: 1888,
    nationality: "Américain",
    movement: "Photographie grand public",
    family: "Argentique",
    summary: `En 1888, George Eastman lance le Kodak n°1 avec un slogan révolutionnaire : "You press the button, we do the rest." (Vous appuyez sur le bouton, nous faisons le reste.) L'appareil est vendu chargé d'un rouleau de film pour 100 photos. Une fois terminé, on renvoie l'appareil entier à l'usine.

Cette approche élimine toute la complexité technique. Plus besoin de plaques, de chambre noire, de connaissances chimiques. La photographie devient accessible à tous. Eastman invente un mot facile à prononcer dans toutes les langues : Kodak.

Le film souple en rouleau, d'abord sur papier puis sur support nitrate de cellulose transparent, remplace progressivement les plaques de verre. Il est plus léger, moins fragile, plus facile à charger. Cette innovation permet aussi la naissance du cinéma.

Le succès de Kodak est fulgurant. L'entreprise domine le marché photographique pendant un siècle. La Brownie (1900), encore plus simple et abordable, met l'appareil photo entre les mains de millions de familles. L'album de famille devient une institution.`,
    mainWorks: ["Kodak n°1 (1888)", "Brownie (1900)", "Film en rouleau"],
    keyIdeas: ["You press the button", "Film en rouleau", "Photographie pour tous", "Service de développement"],
  },
  {
    id: "leica",
    name: "Leica et le 35mm",
    birthYear: 1925,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/LEI0060_186_Leica_I_Sn.5193_1927_Originalzustand_Front-2_FS-15.jpg?width=220",
    nationality: "Allemand",
    movement: "Photographie moderne",
    family: "Argentique",
    summary: `En 1925, l'ingénieur allemand Oskar Barnack commercialise le Leica (Leitz Camera), premier appareil compact utilisant le film cinéma 35mm. Ce format, standardisé à 24x36mm, devient la norme mondiale pour la photographie pendant 75 ans.

La réduction du format, compensée par des objectifs de haute qualité, permet un appareil de poche capable de 36 poses. Le photographe devient mobile, discret, réactif. Henri Cartier-Bresson fera du Leica son instrument de l'"instant décisif".

La précision de fabrication allemande et la qualité optique des objectifs Leitz établissent une réputation d'excellence. Le Leica devient l'outil des grands photojournalistes : Robert Capa, Werner Bischof, Sebastião Salgado. C'est l'appareil des moments historiques.

Le système Leica, avec ses objectifs interchangeables et son télémètre, influence tous les fabricants. Nikon, Canon, Pentax développent leurs propres systèmes 35mm. Le format reste dominant jusqu'à l'avènement du numérique, et le Leica conserve son aura de légende.`,
    mainWorks: ["Leica I (1925)", "Leica M3 (1954)", "Objectifs Summicron et Summilux"],
    keyIdeas: ["Format 35mm", "Compact et discret", "Télémétrique", "Photojournalisme"],
  },
  {
    id: "rolleiflex",
    name: "Rolleiflex",
    birthYear: 1929,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rolleiflex_camera.jpg?width=220",
    nationality: "Allemand",
    movement: "Moyen format",
    family: "Argentique",
    summary: `La Rolleiflex, créée par Franke & Heidecke en 1929, est le reflex bi-objectif (TLR) le plus célèbre de l'histoire. Un objectif sert à la visée, l'autre à la prise de vue. Le format 6x6 cm sur film 120 offre une qualité supérieure au 35mm.

La visée par le dessus, sur un dépoli, permet une discrétion appréciée des photographes de rue et des portraitistes. Le format carré élimine le choix entre horizontal et vertical. Diane Arbus, Irving Penn, Richard Avedon feront de la Rolleiflex leur outil de prédilection.

La qualité optique des objectifs Zeiss (Planar, Tessar) et la précision mécanique allemande en font un instrument professionnel. Le format moyen format offre un rendu des tons et une profondeur de champ spécifiques, très prisés pour le portrait et la mode.

Bien que supplantée par les reflex mono-objectif puis le numérique, la Rolleiflex conserve des adeptes. Des photographes contemporains comme Vivian Maier ont été redécouverts avec leurs archives Rolleiflex. L'appareil reste un objet iconique du design industriel.`,
    mainWorks: ["Rolleiflex Original (1929)", "Rolleiflex 2.8F", "Format 6x6 sur film 120"],
    keyIdeas: ["Reflex bi-objectif", "Format carré 6x6", "Visée par dessus", "Moyen format"],
  },
  {
    id: "polaroid",
    name: "Polaroid",
    birthYear: 1948,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Polaroid_Land_Camera_Model_95_-_MIT_Museum_-_DSC03766.JPG?width=220",
    nationality: "Américain",
    movement: "Photographie instantanée",
    family: "Ère moderne",
    summary: `En 1948, Edwin Land présente le Polaroid Model 95, premier appareil à développement instantané. Moins d'une minute après la prise de vue, une épreuve unique sort de l'appareil. La magie de voir l'image apparaître fascine immédiatement le public.

Le procédé repose sur une chimie complexe intégrée dans le film lui-même. Des poches de réactifs se répandent sur l'image quand le tirage passe entre des rouleaux. Land, génie visionnaire et perfectionniste, développe le système pendant des décennies.

Le Polaroid SX-70 (1972), pliable et élégant, utilise le film intégral qui se développe à la lumière du jour. Andy Warhol en fait son outil de prédilection. Les couleurs saturées et l'esthétique unique du Polaroid marquent l'imagerie des années 1970-80.

La révolution numérique semble condamner Polaroid, qui fait faillite en 2001. Mais le format renaît sous le nom Impossible Project puis Polaroid Originals. Instagram, avec son format carré et ses filtres, s'inspire directement de l'esthétique Polaroid.`,
    mainWorks: ["Model 95 (1948)", "SX-70 (1972)", "Film intégral", "Portraits de Warhol"],
    keyIdeas: ["Développement instantané", "Image unique", "Chimie intégrée", "Nostalgie"],
  },
  {
    id: "nikon-f",
    name: "Reflex 35mm (Nikon F)",
    birthYear: 1959,
    nationality: "Japonais",
    movement: "Photographie professionnelle",
    family: "Ère moderne",
    summary: `Le Nikon F, lancé en 1959, impose le reflex mono-objectif (SLR) comme standard professionnel. La visée à travers l'objectif de prise de vue, via un miroir et un prisme, permet un cadrage précis et l'utilisation de toute une gamme d'optiques interchangeables.

Nikon, fabricant d'optiques militaires reconverti, propose un système complet : boîtier robuste, moteur, objectifs, accessoires. La fiabilité du Nikon F pendant la guerre du Vietnam le consacre comme l'outil des photojournalistes. Don McCullin, Larry Burrows ne jurent que par lui.

Canon, Pentax, Minolta développent leurs systèmes concurrents. La compétition stimule l'innovation : cellule TTL, autofocus, motorisation. Le reflex 35mm devient l'instrument universel, du professionnel à l'amateur éclairé.

Le système F évolue pendant des décennies : F2, F3, F4, F5, F6. La monture F, compatible depuis 1959, permet d'utiliser les objectifs anciens sur les boîtiers modernes. Cette continuité témoigne de la robustesse de la conception originelle.`,
    mainWorks: ["Nikon F (1959)", "Nikon F2 (1971)", "Canon F-1", "Système d'objectifs Nikkor"],
    keyIdeas: ["Reflex mono-objectif", "Visée TTL", "Système complet", "Photojournalisme"],
  },
  {
    id: "compact-automatique",
    name: "Compact automatique",
    birthYear: 1977,
    nationality: "Japonais",
    movement: "Photographie familiale",
    family: "Ère moderne",
    summary: `Le Konica C35 AF de 1977 est le premier appareil photo autofocus commercial. Cette innovation, combinée à l'automatisation de l'exposition, produit des appareils "point and shoot" où l'utilisateur n'a plus qu'à cadrer et déclencher.

Les compacts automatiques des années 1980-90 (Olympus Stylus, Yashica T4, Contax T2) démontrent que simplicité et qualité peuvent coexister. Certains, équipés d'objectifs Zeiss ou Tessar, produisent des images remarquables et deviennent cultes.

La motorisation du film, le flash intégré, la mise au point automatique et l'exposition mesurée éliminent toute compétence technique. La photographie devient vraiment universelle. Anniversaires, vacances, événements familiaux sont documentés sans effort.

L'avènement du numérique puis du smartphone semble condamner le compact argentique. Pourtant, une nouvelle génération redécouvre ces appareils pour leur esthétique film et leur simplicité. Le marché de l'occasion explose, certains modèles atteignant des prix exorbitants.`,
    mainWorks: ["Konica C35 AF (1977)", "Olympus Stylus/mju", "Yashica T4", "Contax T2/T3"],
    keyIdeas: ["Autofocus", "Point and shoot", "Photographie familiale", "Objectifs de qualité"],
  },
  {
    id: "jetable",
    name: "Appareil jetable",
    birthYear: 1986,
    nationality: "Japonais",
    movement: "Photographie démocratisée",
    family: "Ère moderne",
    summary: `Le Fujifilm QuickSnap, lancé en 1986, est le premier appareil jetable à succès commercial. Pré-chargé avec un rouleau de film, il est rendu entier au laboratoire après utilisation. Simple, bon marché, disponible partout, il dématérialise l'acte d'achat d'un appareil.

L'appareil jetable répond à un besoin : photographier quand on n'a pas son appareil. Touristes, fêtards, participants à des mariages l'adoptent massivement. Kodak, Agfa, Konica proposent leurs versions. Des modèles étanches, panoramiques ou avec flash apparaissent.

La qualité optique est minimale, mais suffisante pour des tirages 10x15. Le flash intégré permet les photos de soirée. L'absence de réglages élimine les erreurs. Le jetable incarne la photographie sans contrainte, pure mémoire instantanée.

Malgré l'avènement du numérique, le jetable survit. Fujifilm continue d'en produire. Les jeunes générations, nostalgiques d'une esthétique film qu'elles n'ont pas connue, redécouvrent le jetable pour ses couleurs, son grain, son imprévisibilité assumée.`,
    mainWorks: ["Fujifilm QuickSnap (1986)", "Kodak FunSaver", "Modèles étanches et panoramiques"],
    keyIdeas: ["Usage unique", "Pas de réglage", "Photographie de masse", "Nostalgie"],
  },
  {
    id: "numerique-debut",
    name: "Appareil numérique",
    birthYear: 1991,
    nationality: "Américain / Japonais",
    movement: "Révolution numérique",
    family: "Numérique",
    summary: `Le Kodak DCS 100 de 1991, basé sur un boîtier Nikon F3 avec un dos numérique, est le premier appareil numérique professionnel. Avec 1,3 mégapixels et un prix de 13 000 dollars, il est réservé aux agences de presse. Mais la révolution est en marche.

Le capteur CCD remplace le film argentique. L'image est stockée sur un support magnétique puis numérique. Plus de pellicule, plus de développement, plus d'attente. On peut voir l'image immédiatement, l'effacer, recommencer. Le coût marginal de chaque photo devient nul.

Dans les années 1990, les compacts numériques grand public apparaissent. La résolution augmente, les prix baissent. Les cartes mémoire remplacent les disquettes. Le JPEG et le RAW s'imposent comme formats. L'écran LCD permet la visée et la revue des images.

Kodak, ironiquement inventeur de la technologie qu'il commercialisera trop tard, fait faillite en 2012. Canon, Nikon, Sony dominent le marché professionnel. La photographie argentique devient une niche nostalgique et artistique.`,
    mainWorks: ["Kodak DCS 100 (1991)", "Nikon D1 (1999)", "Canon EOS D30 (2000)", "Premiers compacts numériques"],
    keyIdeas: ["Capteur CCD/CMOS", "Image immédiate", "Coût marginal nul", "Stockage numérique"],
  },
  {
    id: "reflex-numerique",
    name: "Reflex numérique (DSLR)",
    birthYear: 1999,
    nationality: "Japonais",
    movement: "Photographie numérique professionnelle",
    family: "Numérique",
    summary: `Le Nikon D1, lancé en 1999, est le premier reflex numérique entièrement conçu comme tel (et non un boîtier argentique modifié). À 5 000 dollars pour 2,7 mégapixels, il rend la photographie numérique professionnelle accessible aux photojournalistes et studios.

Le reflex numérique combine les avantages du système reflex (visée optique, objectifs interchangeables, ergonomie) avec la flexibilité du numérique (visualisation immédiate, sensibilité variable, post-traitement). Canon et Nikon se livrent une guerre technologique intense.

Le Canon EOS 5D (2005) démocratise le "plein format" (capteur 24x36mm comme le film). La vidéo HD arrive avec le Canon 5D Mark II (2008), révolutionnant le cinéma indépendant. Les DSLR deviennent des outils multimédias.

Le reflex numérique domine la photographie professionnelle pendant vingt ans. Mais les hybrides (mirrorless), plus compacts et offrant la visée électronique, le supplantent progressivement. Canon, Nikon, Sony abandonnent le développement de nouveaux reflex pour se concentrer sur l'hybride.`,
    mainWorks: ["Nikon D1 (1999)", "Canon EOS 5D (2005)", "Nikon D3 (2007)", "Canon 5D Mark II (2008)"],
    keyIdeas: ["Capteur plein format", "Objectifs interchangeables", "Vidéo HD", "Professionnalisation"],
  },
  {
    id: "smartphone",
    name: "Smartphone",
    birthYear: 2007,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/HA0478-006_%286011470974%29.jpg/330px-HA0478-006_%286011470974%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Photographie ubiquitaire",
    family: "Numérique",
    summary: `L'iPhone original de 2007, avec son appareil photo de 2 mégapixels sans autofocus, semble dérisoire. Mais Steve Jobs comprend que l'appareil photo sera une fonction clé du smartphone. "The best camera is the one you have with you" : le téléphone, toujours présent, devient l'appareil photo universel.

L'intégration du partage (email, réseaux sociaux) transforme la photographie. Instagram (2010), avec ses filtres et son format carré, crée une nouvelle esthétique. La photo n'est plus un objet à imprimer mais un message à partager. Un milliard d'images sont partagées chaque jour.

La course à la qualité s'accélère : capteurs plus grands, objectifs multiples, traitement computationnel. Le mode portrait simule la profondeur de champ. Le mode nuit assemble des dizaines d'images. L'intelligence artificielle améliore chaque photo automatiquement.

Le smartphone a tué l'appareil compact et menace le reflex amateur. Mais il a aussi démocratisé la photographie comme jamais. Chacun est photographe. Les révolutions, les témoignages, les créations artistiques passent par le téléphone. La caméra est devenue ubiquitaire.`,
    mainWorks: ["iPhone (2007)", "Instagram (2010)", "Mode portrait (2016)", "Photographie computationnelle"],
    keyIdeas: ["Toujours présent", "Partage instantané", "Intelligence artificielle", "Ubiquité"],
  },
  {
    id: "hybride-mirrorless",
    name: "Hybride (Mirrorless)",
    birthYear: 2008,
    nationality: "Japonais",
    movement: "Photographie numérique actuelle",
    family: "Numérique",
    summary: `Le Panasonic Lumix G1 de 2008 inaugure l'ère des appareils hybrides (mirrorless). En supprimant le miroir du reflex, on réduit l'encombrement tout en conservant les objectifs interchangeables. La visée électronique (EVF) affiche l'image telle qu'elle sera capturée.

Sony bouleverse le marché avec la série Alpha (A7, A7R, A7S) : plein format, compacité, performances vidéo exceptionnelles. Les vidéographes et créateurs de contenu adoptent massivement ces boîtiers polyvalents. La frontière entre photo et vidéo s'estompe.

Canon (série R) et Nikon (série Z) abandonnent le reflex pour l'hybride. Les nouvelles montures permettent des objectifs plus compacts et lumineux. L'autofocus à détection de phase sur capteur atteint des performances inégalées, suivant les yeux des sujets en temps réel.

L'hybride est aujourd'hui le standard professionnel et amateur éclairé. Les reflex restent appréciés pour leur ergonomie et leur autonomie. Mais l'avenir de la photographie interchangeable est clairement mirrorless, même si le smartphone reste le premier appareil photo du monde.`,
    mainWorks: ["Panasonic G1 (2008)", "Sony A7 (2013)", "Canon EOS R5 (2020)", "Nikon Z9 (2021)"],
    keyIdeas: ["Sans miroir", "Visée électronique", "Compacité", "Vidéo 4K/8K"],
  },
];
