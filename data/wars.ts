export interface WarItem {
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

export const wars: WarItem[] = [
  {
    id: "guerres-mediques",
    name: "Guerres médiques",
    birthYear: -499,
    deathYear: -449,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Map_Greco-Persian_Wars-fr.svg/langfr-330px-Map_Greco-Persian_Wars-fr.svg.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Grec/Perse",
    movement: "Antiquité",
    family: "Antiquité",
    summary:
      "Conflit entre les cités grecques et l'Empire perse. Marathon, Thermopyles, Salamine : les Grecs repoussent l'invasion. Victoire fondatrice de l'identité grecque et de la démocratie athénienne.",
    mainWorks: [
      "Marathon (-490) - victoire athénienne",
      "Thermopyles (-480) - sacrifice de Léonidas",
      "Salamine (-480) - victoire navale décisive",
      "Paix de Callias (-449)",
    ],
  },
  {
    id: "guerre-peloponnese",
    name: "Guerre du Péloponnèse",
    birthYear: -431,
    deathYear: -404,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Carte_de_la_guerre_du_P%C3%A9loponn%C3%A8se_431a.C.svg/langfr-330px-Carte_de_la_guerre_du_P%C3%A9loponn%C3%A8se_431a.C.svg.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Grec",
    movement: "Antiquité",
    family: "Antiquité",
    influences: ["guerres-mediques"],
    summary:
      "Guerre fratricide entre Athènes et Sparte pour l'hégémonie grecque. 27 ans de conflit qui épuise les cités. Défaite d'Athènes, déclin de la Grèce classique.",
    mainWorks: [
      "Ligue de Délos (Athènes) vs Ligue du Péloponnèse (Sparte)",
      "Peste d'Athènes - mort de Périclès",
      "Expédition de Sicile - désastre athénien",
      "Victoire de Sparte (404)",
    ],
  },
  {
    id: "guerres-puniques",
    name: "Guerres puniques",
    birthYear: -264,
    deathYear: -146,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Domain_changes_during_the_Punic_Wars.gif/330px-Domain_changes_during_the_Punic_Wars.gif?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Romain/Carthaginois",
    movement: "Antiquité",
    family: "Antiquité",
    summary:
      "Trois guerres entre Rome et Carthage pour la domination de la Méditerranée. Hannibal franchit les Alpes mais Rome triomphe. Destruction de Carthage en -146.",
    mainWorks: [
      "Première guerre - conquête de la Sicile",
      "Hannibal - traversée des Alpes",
      "Cannes (-216) - pire défaite romaine",
      "Destruction de Carthage (-146)",
    ],
  },
  {
    id: "croisades",
    name: "Croisades",
    birthYear: 1095,
    deathYear: 1291,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Carte_des_croisades_avec_participation_des_Fran%C3%A7ais.png/330px-Carte_des_croisades_avec_participation_des_Fran%C3%A7ais.png",
    nationality: "Européen/Musulman",
    movement: "Moyen Âge",
    family: "Moyen Âge & Renaissance",
    summary:
      "Expéditions militaires chrétiennes pour reprendre la Terre sainte aux musulmans. Huit croisades majeures, création d'États latins, chute finale d'Acre en 1291.",
    mainWorks: [
      "Première croisade - prise de Jérusalem (1099)",
      "Royaumes latins d'Orient",
      "Saladin reprend Jérusalem (1187)",
      "Chute d'Acre (1291) - fin des croisades",
    ],
  },
  {
    id: "guerre-cent-ans",
    name: "Guerre de Cent Ans",
    birthYear: 1337,
    deathYear: 1453,
    nationality: "Français/Anglais",
    movement: "Moyen Âge",
    family: "Moyen Âge & Renaissance",
    summary:
      "Conflit dynastique entre France et Angleterre. Crécy, Azincourt : désastres français. Jeanne d'Arc renverse le cours de la guerre. La France sort victorieuse mais dévastée.",
    mainWorks: [
      "Crécy (1346) et Azincourt (1415) - défaites françaises",
      "Peste noire et dévastation",
      "Jeanne d'Arc - libération d'Orléans (1429)",
      "Fin de la présence anglaise (1453)",
    ],
  },
  {
    id: "guerres-religion",
    name: "Guerres de Religion",
    birthYear: 1562,
    deathYear: 1648,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Bartolomeinatten%2C_scen_fr%C3%A5n%2C_efter_samtida_gravyrer_1%2C_Nordisk_familjebok.png/330px-Bartolomeinatten%2C_scen_fr%C3%A5n%2C_efter_samtida_gravyrer_1%2C_Nordisk_familjebok.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Européen",
    movement: "Renaissance",
    family: "Moyen Âge & Renaissance",
    summary:
      "Conflits entre catholiques et protestants en Europe. En France : 8 guerres, massacre de la Saint-Barthélemy. En Allemagne : guerre de Trente Ans, dévastation du Saint-Empire.",
    mainWorks: [
      "Massacre de la Saint-Barthélemy (1572)",
      "Édit de Nantes (1598) - tolérance en France",
      "Guerre de Trente Ans (1618-1648)",
      "Paix de Westphalie (1648)",
    ],
  },
  {
    id: "guerres-napoleoniennes",
    name: "Guerres napoléoniennes",
    birthYear: 1803,
    deathYear: 1815,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Napoleonic_Wars.jpg/330px-Napoleonic_Wars.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Européen",
    movement: "Moderne",
    family: "Ère moderne",
    summary:
      "Napoléon contre les coalitions européennes. Austerlitz, Iéna, Wagram : victoires éclatantes. Campagne de Russie (1812) et Waterloo (1815) : défaites finales.",
    mainWorks: [
      "Austerlitz (1805) - chef-d'œuvre tactique",
      "Campagne de Russie (1812) - désastre",
      "Waterloo (1815) - défaite finale",
      "5 millions de morts en Europe",
    ],
  },
  {
    id: "guerre-secession-2",
    name: "Guerre de Sécession",
    birthYear: 1861,
    deathYear: 1865,
    nationality: "Américain",
    movement: "Moderne",
    family: "Ère moderne",
    summary:
      "Guerre civile américaine entre le Nord (Union) et le Sud (Confédérés). L'esclavage en est la cause profonde. 620 000 morts, abolition de l'esclavage, reconstruction difficile.",
    mainWorks: [
      "Sécession de 11 États du Sud",
      "Gettysburg (1863) - tournant de la guerre",
      "Sherman - marche vers la mer",
      "Reddition de Lee à Appomattox (1865)",
    ],
  },
  {
    id: "premiere-guerre-mondiale",
    name: "Première Guerre mondiale",
    birthYear: 1914,
    deathYear: 1918,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Montage_photo_1914-1918.png/330px-Montage_photo_1914-1918.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Mondial",
    movement: "Contemporain",
    family: "Guerres mondiales",
    summary:
      "La 'Grande Guerre' oppose les Empires centraux aux Alliés. Tranchées, gaz, chars : 10 millions de morts militaires. Effondrement des empires, naissance de l'URSS, traumatisme générationnel.",
    mainWorks: [
      "Attentat de Sarajevo - déclencheur",
      "Bataille de la Marne, Verdun, la Somme",
      "Entrée en guerre des USA (1917)",
      "Armistice du 11 novembre 1918",
    ],
  },
  {
    id: "guerre-civile-espagnole",
    name: "Guerre civile espagnole",
    birthYear: 1936,
    deathYear: 1939,
    nationality: "Espagnol",
    movement: "Contemporain",
    family: "Guerres mondiales",
    summary:
      "Conflit entre républicains et nationalistes de Franco. Repérage de la Seconde Guerre mondiale : Hitler et Mussolini soutiennent Franco. Guernica bombardée. Victoire franquiste.",
    mainWorks: [
      "Coup d'État de Franco (1936)",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/WW2Montage.PNG/330px-WW2Montage.PNG",
    nationality: "Mondial",
    movement: "Contemporain",
    family: "Guerres mondiales",
    influences: ["premiere-guerre-mondiale", "guerre-civile-espagnole"],
    summary:
      "Le conflit le plus meurtrier de l'histoire : 70-85 millions de morts. Shoah, bombes atomiques. Défaite de l'Axe (Allemagne, Italie, Japon), naissance de l'ONU et de la Guerre froide.",
    mainWorks: [
      "Invasion de la Pologne, Blitzkrieg",
      "Shoah - 6 millions de Juifs assassinés",
      "Stalingrad, Débarquement en Normandie",
      "Hiroshima et Nagasaki (août 1945)",
    ],
  },
  {
    id: "guerre-coree",
    name: "Guerre de Corée",
    birthYear: 1950,
    deathYear: 1953,
    nationality: "International",
    movement: "Guerre froide",
    family: "Guerre froide",
    influences: ["seconde-guerre-mondiale"],
    summary:
      "Premier conflit majeur de la Guerre froide. La Corée du Nord envahit le Sud, intervention américaine sous mandat ONU, puis chinoise. Armistice sans traité de paix, Corée toujours divisée.",
    mainWorks: [
      "Invasion nord-coréenne (1950)",
      "Intervention américaine (ONU)",
      "Intervention chinoise",
      "Armistice de Panmunjom (1953)",
    ],
  },
  {
    id: "guerre-vietnam",
    name: "Guerre du Vietnam",
    birthYear: 1955,
    deathYear: 1975,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/VietnamMural.jpg/330px-VietnamMural.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "International",
    movement: "Guerre froide",
    family: "Guerre froide",
    summary:
      "Conflit opposant le Nord-Vietnam communiste au Sud soutenu par les USA. Guérilla, bombardements massifs, 3 millions de morts vietnamiens. Première défaite américaine, traumatisme national.",
    mainWorks: [
      "Engagement américain croissant (1965)",
      "Offensive du Têt (1968)",
      "Mouvement anti-guerre aux USA",
      "Chute de Saigon (1975)",
    ],
  },
  {
    id: "guerres-israel-arabes",
    name: "Guerres israélo-arabes",
    birthYear: 1948,
    deathYear: 1973,
    nationality: "Moyen-Oriental",
    movement: "Contemporain",
    family: "Guerre froide",
    influences: ["seconde-guerre-mondiale"],
    summary:
      "Série de conflits entre Israël et ses voisins arabes. 1948, 1967 (Six Jours), 1973 (Kippour). Israël agrandit son territoire, question palestinienne non résolue.",
    mainWorks: [
      "Guerre d'indépendance (1948)",
      "Guerre des Six Jours (1967) - conquête des territoires",
      "Guerre du Kippour (1973)",
      "Accords de Camp David (1978)",
    ],
  },
  {
    id: "guerre-afghanistan-sovietique",
    name: "Guerre d'Afghanistan (URSS)",
    birthYear: 1979,
    deathYear: 1989,
    nationality: "International",
    movement: "Guerre froide",
    family: "Guerre froide",
    summary:
      "L'URSS envahit l'Afghanistan pour soutenir le régime communiste. Les moudjahidines, soutenus par les USA, résistent. Retrait soviétique en 1989, facteur de la chute de l'URSS.",
    mainWorks: [
      "Invasion soviétique (1979)",
      "Résistance des moudjahidines",
      "Soutien américain (Opération Cyclone)",
      "Retrait soviétique (1989)",
    ],
  },
  {
    id: "guerre-golfe",
    name: "Guerre du Golfe",
    birthYear: 1990,
    deathYear: 1991,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gulf_War_Photobox.jpg/330px-Gulf_War_Photobox.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "International",
    movement: "Post-Guerre froide",
    family: "Après 1989",
    summary:
      "L'Irak de Saddam Hussein envahit le Koweït. Coalition internationale menée par les USA. Opération Tempête du Désert : victoire rapide, mais Saddam reste au pouvoir.",
    mainWorks: [
      "Invasion du Koweït par l'Irak (1990)",
      "Coalition internationale (ONU)",
      "Opération Tempête du Désert (1991)",
      "Saddam Hussein reste au pouvoir",
    ],
  },
  {
    id: "guerres-yougoslavie",
    name: "Guerres de Yougoslavie",
    birthYear: 1991,
    deathYear: 2001,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Collage_Yugoslav_wars.jpg/330px-Collage_Yugoslav_wars.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Balkanique",
    movement: "Post-Guerre froide",
    family: "Après 1989",
    summary:
      "Éclatement de la Yougoslavie en guerres ethniques. Siège de Sarajevo, génocide de Srebrenica (8000 morts), guerre du Kosovo. Retour de la guerre en Europe.",
    mainWorks: [
      "Indépendances de Slovénie, Croatie, Bosnie",
      "Siège de Sarajevo (1992-1996)",
      "Génocide de Srebrenica (1995)",
      "Guerre du Kosovo (1998-1999)",
    ],
  },
  {
    id: "guerre-afghanistan-usa",
    name: "Guerre d'Afghanistan (USA)",
    birthYear: 2001,
    deathYear: 2021,
    nationality: "International",
    movement: "Contemporain",
    family: "Après 1989",
    influences: ["guerre-afghanistan-sovietique"],
    summary:
      "Après le 11 septembre, les USA envahissent l'Afghanistan pour éliminer Al-Qaïda. 20 ans de guerre, retrait chaotique en 2021, retour des Talibans au pouvoir.",
    mainWorks: [
      "Attentats du 11 septembre 2001",
      "Chute des Talibans (2001)",
      "Ben Laden éliminé (2011)",
      "Retrait américain et retour des Talibans (2021)",
    ],
  },
  {
    id: "guerre-irak",
    name: "Guerre d'Irak",
    birthYear: 2003,
    deathYear: 2011,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Iraq_header_2.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "International",
    movement: "Contemporain",
    family: "Après 1989",
    influences: ["guerre-golfe", "guerre-afghanistan-usa"],
    summary:
      "Les USA envahissent l'Irak, prétextant des armes de destruction massive inexistantes. Chute de Saddam Hussein, chaos, guerre civile, émergence de l'État islamique.",
    mainWorks: [
      "Invasion américaine (2003)",
      "Chute de Saddam Hussein",
      "Guerre civile et insurrection",
      "Émergence de l'État islamique",
    ],
  },
  {
    id: "guerre-ukraine",
    name: "Guerre en Ukraine",
    birthYear: 2022,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/2022_Russian_invasion_of_Ukraine.svg/langfr-330px-2022_Russian_invasion_of_Ukraine.svg.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Européen",
    movement: "Contemporain",
    family: "Après 1989",
    summary:
      "La Russie envahit l'Ukraine le 24 février 2022. Résistance ukrainienne inattendue, soutien occidental. Plus grand conflit en Europe depuis 1945. Issue incertaine.",
    mainWorks: [
      "Invasion russe (24 février 2022)",
      "Résistance ukrainienne",
      "Soutien militaire occidental",
      "Sanctions contre la Russie",
    ],
  },
];
