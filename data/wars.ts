export interface WarItem {
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

export const wars: WarItem[] = [
  {
    id: "guerres-mediques",
    name: "Guerres mediques",
    birthYear: -499,
    deathYear: -449,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Greek_Phalanx.jpg/220px-Greek_Phalanx.jpg",
    nationality: "Grec/Perse",
    movement: "Antiquite",
    summary:
      "Conflit entre les cites grecques et l'Empire perse. Marathon, Thermopyles, Salamine : les Grecs repoussent l'invasion. Victoire fondatrice de l'identite grecque et de la democratie athenienne.",
    mainWorks: [
      "Marathon (-490) - victoire athenienne",
      "Thermopyles (-480) - sacrifice de Leonidas",
      "Salamine (-480) - victoire navale decisive",
      "Paix de Callias (-449)",
    ],
  },
  {
    id: "guerre-peloponnese",
    name: "Guerre du Peloponnese",
    birthYear: -431,
    deathYear: -404,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Ac_pelopguerrealiee.png/220px-Ac_pelopguerrealiee.png",
    nationality: "Grec",
    movement: "Antiquite",
    summary:
      "Guerre fratricide entre Athenes et Sparte pour l'hegemonie grecque. 27 ans de conflit qui epuise les cites. Defaite d'Athenes, declin de la Grece classique.",
    mainWorks: [
      "Ligue de Delos (Athenes) vs Ligue du Peloponnese (Sparte)",
      "Peste d'Athenes - mort de Pericles",
      "Expedition de Sicile - desastre athenien",
      "Victoire de Sparte (404)",
    ],
  },
  {
    id: "guerres-puniques",
    name: "Guerres puniques",
    birthYear: -264,
    deathYear: -146,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Hannibal_traverse_les_Alpes_Heinrich_Leutemann.jpg/220px-Hannibal_traverse_les_Alpes.jpg",
    nationality: "Romain/Carthaginois",
    movement: "Antiquite",
    summary:
      "Trois guerres entre Rome et Carthage pour la domination de la Mediterranee. Hannibal franchit les Alpes mais Rome triomphe. Destruction de Carthage en -146.",
    mainWorks: [
      "Premiere guerre - conquete de la Sicile",
      "Hannibal - traversee des Alpes",
      "Cannes (-216) - pire defaite romaine",
      "Destruction de Carthage (-146)",
    ],
  },
  {
    id: "croisades",
    name: "Croisades",
    birthYear: 1095,
    deathYear: 1291,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/CouncilofClermont.jpg/220px-CouncilofClermont.jpg",
    nationality: "Europeen/Musulman",
    movement: "Moyen Age",
    summary:
      "Expeditions militaires chretiennes pour reprendre la Terre sainte aux musulmans. Huit croisades majeures, creation d'Etats latins, chute finale d'Acre en 1291.",
    mainWorks: [
      "Premiere croisade - prise de Jerusalem (1099)",
      "Royaumes latins d'Orient",
      "Saladin reprend Jerusalem (1187)",
      "Chute d'Acre (1291) - fin des croisades",
    ],
  },
  {
    id: "guerre-cent-ans",
    name: "Guerre de Cent Ans",
    birthYear: 1337,
    deathYear: 1453,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Jeanne_d%27Arc_at_the_siege_of_Orleans.jpg/220px-Jeanne_d%27Arc_at_the_siege_of_Orleans.jpg",
    nationality: "Francais/Anglais",
    movement: "Moyen Age",
    summary:
      "Conflit dynastique entre France et Angleterre. Crecy, Azincourt : desastres francais. Jeanne d'Arc renverse le cours de la guerre. La France sort victorieuse mais devastee.",
    mainWorks: [
      "Crecy (1346) et Azincourt (1415) - defaites francaises",
      "Peste noire et devastation",
      "Jeanne d'Arc - liberation d'Orleans (1429)",
      "Fin de la presence anglaise (1453)",
    ],
  },
  {
    id: "guerres-religion",
    name: "Guerres de Religion",
    birthYear: 1562,
    deathYear: 1648,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/La_masacre_de_San_Bartolom%C3%A9%2C_por_Fran%C3%A7ois_Dubois.jpg/220px-La_masacre_de_San_Bartolom%C3%A9.jpg",
    nationality: "Europeen",
    movement: "Renaissance",
    summary:
      "Conflits entre catholiques et protestants en Europe. En France : 8 guerres, massacre de la Saint-Barthelemy. En Allemagne : guerre de Trente Ans, devastation du Saint-Empire.",
    mainWorks: [
      "Massacre de la Saint-Barthelemy (1572)",
      "Edit de Nantes (1598) - tolerance en France",
      "Guerre de Trente Ans (1618-1648)",
      "Paix de Westphalie (1648)",
    ],
  },
  {
    id: "guerres-napoleoniennes",
    name: "Guerres napoleoniennes",
    birthYear: 1803,
    deathYear: 1815,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Austerlitz-baron-Pascal.jpg/220px-Austerlitz-baron-Pascal.jpg",
    nationality: "Europeen",
    movement: "Moderne",
    summary:
      "Napoleon contre les coalitions europeennes. Austerlitz, Iena, Wagram : victoires eclatantes. Campagne de Russie (1812) et Waterloo (1815) : defaites finales.",
    mainWorks: [
      "Austerlitz (1805) - chef-d'oeuvre tactique",
      "Campagne de Russie (1812) - desastre",
      "Waterloo (1815) - defaite finale",
      "5 millions de morts en Europe",
    ],
  },
  {
    id: "guerre-secession-2",
    name: "Guerre de Secession",
    birthYear: 1861,
    deathYear: 1865,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Battle_of_Gettysburg%2C_by_Currier_and_Ives.png/220px-Battle_of_Gettysburg.png",
    nationality: "Americain",
    movement: "Moderne",
    summary:
      "Guerre civile americaine entre le Nord (Union) et le Sud (Confederes). L'esclavage en est la cause profonde. 620 000 morts, abolition de l'esclavage, reconstruction difficile.",
    mainWorks: [
      "Secession de 11 Etats du Sud",
      "Gettysburg (1863) - tournant de la guerre",
      "Sherman - marche vers la mer",
      "Reddition de Lee a Appomattox (1865)",
    ],
  },
  {
    id: "premiere-guerre-mondiale",
    name: "Premiere Guerre mondiale",
    birthYear: 1914,
    deathYear: 1918,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/WWImontage.jpg/220px-WWImontage.jpg",
    nationality: "Mondial",
    movement: "Contemporain",
    summary:
      "La 'Grande Guerre' oppose les Empires centraux aux Allies. Tranchees, gaz, chars : 10 millions de morts militaires. Effondrement des empires, naissance de l'URSS, traumatisme generationnel.",
    mainWorks: [
      "Attentat de Sarajevo - declencheur",
      "Bataille de la Marne, Verdun, la Somme",
      "Entree en guerre des USA (1917)",
      "Armistice du 11 novembre 1918",
    ],
  },
  {
    id: "guerre-civile-espagnole",
    name: "Guerre civile espagnole",
    birthYear: 1936,
    deathYear: 1939,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Guernica_bombing_1937.jpg/220px-Guernica_bombing_1937.jpg",
    nationality: "Espagnol",
    movement: "Contemporain",
    summary:
      "Conflit entre republicains et nationalistes de Franco. Reperage de la Seconde Guerre mondiale : Hitler et Mussolini soutiennent Franco. Guernica bombarde. Victoire franquiste.",
    mainWorks: [
      "Coup d'Etat de Franco (1936)",
      "Brigades internationales",
      "Bombardement de Guernica (1937)",
      "Victoire franquiste, dictature jusqu'en 1975",
    ],
  },
  {
    id: "seconde-guerre-mondiale",
    name: "Seconde Guerre mondiale",
    birthYear: 1939,
    deathYear: 1945,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/WW2Montage.png/220px-WW2Montage.png",
    nationality: "Mondial",
    movement: "Contemporain",
    summary:
      "Le conflit le plus meurtrier de l'histoire : 70-85 millions de morts. Shoah, bombes atomiques. Defaite de l'Axe (Allemagne, Italie, Japon), naissance de l'ONU et de la Guerre froide.",
    mainWorks: [
      "Invasion de la Pologne, Blitzkrieg",
      "Shoah - 6 millions de Juifs assassines",
      "Stalingrad, Debarquement en Normandie",
      "Hiroshima et Nagasaki (aout 1945)",
    ],
  },
  {
    id: "guerre-coree",
    name: "Guerre de Coree",
    birthYear: 1950,
    deathYear: 1953,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Korean_War_Montage_2.png/220px-Korean_War_Montage_2.png",
    nationality: "International",
    movement: "Guerre froide",
    summary:
      "Premier conflit majeur de la Guerre froide. La Coree du Nord envahit le Sud, intervention americaine sous mandat ONU, puis chinoise. Armistice sans traite de paix, Coree toujours divisee.",
    mainWorks: [
      "Invasion nord-coreenne (1950)",
      "Intervention americaine (ONU)",
      "Intervention chinoise",
      "Armistice de Panmunjom (1953)",
    ],
  },
  {
    id: "guerre-vietnam",
    name: "Guerre du Vietnam",
    birthYear: 1955,
    deathYear: 1975,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/VietnamMontage.png/220px-VietnamMontage.png",
    nationality: "International",
    movement: "Guerre froide",
    summary:
      "Conflit opposant le Nord-Vietnam communiste au Sud soutenu par les USA. Guerilla, bombardements massifs, 3 millions de morts vietnamiens. Premiere defaite americaine, traumatisme national.",
    mainWorks: [
      "Engagement americain croissant (1965)",
      "Offensive du Tet (1968)",
      "Mouvement anti-guerre aux USA",
      "Chute de Saigon (1975)",
    ],
  },
  {
    id: "guerres-israel-arabes",
    name: "Guerres israelo-arabes",
    birthYear: 1948,
    deathYear: 1973,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Six_Day_War_Montage.png/220px-Six_Day_War_Montage.png",
    nationality: "Moyen-Oriental",
    movement: "Contemporain",
    summary:
      "Serie de conflits entre Israel et ses voisins arabes. 1948, 1967 (Six Jours), 1973 (Kippour). Israel agrandit son territoire, question palestinienne non resolue.",
    mainWorks: [
      "Guerre d'independance (1948)",
      "Guerre des Six Jours (1967) - conquete des territoires",
      "Guerre du Kippour (1973)",
      "Accords de Camp David (1978)",
    ],
  },
  {
    id: "guerre-afghanistan-sovietique",
    name: "Guerre d'Afghanistan (URSS)",
    birthYear: 1979,
    deathYear: 1989,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Evstafiev-afghan-apc-soldiers-702.jpg/220px-Evstafiev-afghan-apc-soldiers-702.jpg",
    nationality: "International",
    movement: "Guerre froide",
    summary:
      "L'URSS envahit l'Afghanistan pour soutenir le regime communiste. Les moudjahidines, soutenus par les USA, resistent. Retrait sovietique en 1989, facteur de la chute de l'URSS.",
    mainWorks: [
      "Invasion sovietique (1979)",
      "Resistance des moudjahidines",
      "Soutien americain (Operation Cyclone)",
      "Retrait sovietique (1989)",
    ],
  },
  {
    id: "guerre-golfe",
    name: "Guerre du Golfe",
    birthYear: 1990,
    deathYear: 1991,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GulfWar_Photobox.jpg/220px-GulfWar_Photobox.jpg",
    nationality: "International",
    movement: "Post-Guerre froide",
    summary:
      "L'Irak de Saddam Hussein envahit le Koweit. Coalition internationale menee par les USA. Operation Tempete du Desert : victoire rapide, mais Saddam reste au pouvoir.",
    mainWorks: [
      "Invasion du Koweit par l'Irak (1990)",
      "Coalition internationale (ONU)",
      "Operation Tempete du Desert (1991)",
      "Saddam Hussein reste au pouvoir",
    ],
  },
  {
    id: "guerres-yougoslavie",
    name: "Guerres de Yougoslavie",
    birthYear: 1991,
    deathYear: 2001,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Evstafiev-sarajevo-building-burns.jpg/220px-Evstafiev-sarajevo-building-burns.jpg",
    nationality: "Balkanique",
    movement: "Post-Guerre froide",
    summary:
      "Eclatement de la Yougoslavie en guerres ethniques. Siege de Sarajevo, genocide de Srebrenica (8000 morts), guerre du Kosovo. Retour de la guerre en Europe.",
    mainWorks: [
      "Independances de Slovenie, Croatie, Bosnie",
      "Siege de Sarajevo (1992-1996)",
      "Genocide de Srebrenica (1995)",
      "Guerre du Kosovo (1998-1999)",
    ],
  },
  {
    id: "guerre-afghanistan-usa",
    name: "Guerre d'Afghanistan (USA)",
    birthYear: 2001,
    deathYear: 2021,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/War_in_Afghanistan_Collage.jpg/220px-War_in_Afghanistan_Collage.jpg",
    nationality: "International",
    movement: "Contemporain",
    summary:
      "Apres le 11 septembre, les USA envahissent l'Afghanistan pour eliminer Al-Qaida. 20 ans de guerre, retrait chaotique en 2021, retour des Talibans au pouvoir.",
    mainWorks: [
      "Attentats du 11 septembre 2001",
      "Chute des Talibans (2001)",
      "Ben Laden elimine (2011)",
      "Retrait americain et retour des Talibans (2021)",
    ],
  },
  {
    id: "guerre-irak",
    name: "Guerre d'Irak",
    birthYear: 2003,
    deathYear: 2011,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Iraq_War_montage.png/220px-Iraq_War_montage.png",
    nationality: "International",
    movement: "Contemporain",
    summary:
      "Les USA envahissent l'Irak, pretextant des armes de destruction massive inexistantes. Chute de Saddam Hussein, chaos, guerre civile, emergence de l'Etat islamique.",
    mainWorks: [
      "Invasion americaine (2003)",
      "Chute de Saddam Hussein",
      "Guerre civile et insurrection",
      "Emergence de l'Etat islamique",
    ],
  },
  {
    id: "guerre-ukraine",
    name: "Guerre en Ukraine",
    birthYear: 2022,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/2022_Russian_invasion_of_Ukraine.svg/220px-2022_Russian_invasion_of_Ukraine.svg.png",
    nationality: "Europeen",
    movement: "Contemporain",
    summary:
      "La Russie envahit l'Ukraine le 24 fevrier 2022. Resistance ukrainienne inattendue, soutien occidental. Plus grand conflit en Europe depuis 1945. Issue incertaine.",
    mainWorks: [
      "Invasion russe (24 fevrier 2022)",
      "Resistance ukrainienne",
      "Soutien militaire occidental",
      "Sanctions contre la Russie",
    ],
  },
];
