export interface ReligionItem {
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

export const religions: ReligionItem[] = [
  {
    id: "animisme",
    name: "Animisme et chamanisme",
    birthYear: -100000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Pintura_Rupestre_Cogul.jpg/400px-Pintura_Rupestre_Cogul.jpg",
    nationality: "Mondial",
    movement: "Préhistoire",
    summary:
      "Les plus anciennes formes de spiritualité. Croyance que tous les êtres (animaux, plantes, rochers) possèdent une âme. Le chaman est l'intermédiaire avec le monde des esprits.",
    mainWorks: [
      "Croyance en l'âme de toute chose",
      "Chamanisme - communication avec les esprits",
      "Rituels et transes",
      "Persistance dans de nombreuses cultures",
    ],
  },
  {
    id: "hindouisme",
    name: "Hindouisme",
    birthYear: -1500,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Aum_calligraphy.svg/langfr-330px-Aum_calligraphy.svg.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Indien",
    movement: "Religions orientales",
    summary:
      "Plus ancienne religion organisée encore pratiquée. Pas de fondateur unique, émerge des Vedas. Brahma, Vishnou, Shiva. Karma, dharma, samsara, moksha. Un milliard de fidèles.",
    mainWorks: [
      "Vedas - textes sacrés les plus anciens",
      "Upanishads - philosophie spirituelle",
      "Bhagavad-Gita",
      "Trimurti : Brahma, Vishnou, Shiva",
    ],
  },
  {
    id: "zoroastrisme",
    name: "Zoroastrisme",
    birthYear: -1200,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Faravahar_on_Fire_Temple%2C_Yazd.jpg/330px-Faravahar_on_Fire_Temple%2C_Yazd.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Perse",
    movement: "Religions antiques",
    summary:
      "Religion de Zoroastre (Zarathoustra), première religion monothéiste. Dualisme bien/mal (Ahura Mazda vs Ahriman). Religion officielle des empires perses, influence le judaïsme et le christianisme.",
    mainWorks: [
      "Avesta - textes sacrés",
      "Ahura Mazda - dieu unique",
      "Dualisme bien/mal",
      "Influence sur les religions abrahamiques",
    ],
  },
  {
    id: "judaisme",
    name: "Judaïsme",
    birthYear: -1000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Judaismo.jpg/330px-Judaismo.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Hébraïque",
    movement: "Religions abrahamiques",
    summary:
      "Première religion monothéiste abrahamique. Alliance entre Dieu et le peuple d'Israël. Torah, Talmud, synagogue. Diaspora après la destruction du Temple (70). 14 millions de fidèles.",
    mainWorks: [
      "Torah - cinq livres de Moïse",
      "Talmud - commentaires et loi orale",
      "Alliance avec Dieu (Abraham, Moïse)",
      "Diaspora et retour en Israël",
    ],
  },
  {
    id: "bouddhisme",
    name: "Bouddhisme",
    birthYear: -500,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Dharma_Wheel_%282%29.svg/langfr-330px-Dharma_Wheel_%282%29.svg.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Indien",
    movement: "Religions orientales",
    summary:
      "Fondé par Siddhartha Gautama (Bouddha). Quatre nobles vérités, Noble Sentier Octuple, nirvana. Se répand en Asie : Theravada, Mahayana, Vajrayana. 500 millions de fidèles.",
    mainWorks: [
      "Quatre nobles vérités (souffrance)",
      "Noble Sentier Octuple",
      "Nirvana - libération du cycle des renaissances",
      "Tripitaka - canon bouddhique",
    ],
  },
  {
    id: "confucianisme",
    name: "Confucianisme",
    birthYear: -500,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Konfuzius.jpg/330px-Konfuzius.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Chinois",
    movement: "Philosophies orientales",
    summary:
      "Enseignement de Confucius sur l'éthique, la famille et l'harmonie sociale. Piété filiale, rites, étude. Influence profonde sur la Chine, la Corée, le Japon, le Vietnam.",
    mainWorks: [
      "Entretiens de Confucius",
      "Cinq relations (souverain-sujet, père-fils...)",
      "Piété filiale et rites",
      "Examens impériaux",
    ],
  },
  {
    id: "taoisme",
    name: "Taoïsme",
    birthYear: -400,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Dao-caoshu.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "Chinois",
    movement: "Philosophies orientales",
    summary:
      "Philosophie et religion fondée sur le Tao (la Voie). Laozi et le Tao Te King. Wu wei (non-agir), harmonie avec la nature, yin et yang. Pratiques alchimiques et immortalité.",
    mainWorks: [
      "Tao Te King de Laozi",
      "Wu wei - non-agir, spontanéité",
      "Yin et yang - équilibre des contraires",
      "Quête de l'immortalité",
    ],
  },
  {
    id: "christianisme",
    name: "Christianisme",
    birthYear: 30,
    nationality: "Judée",
    movement: "Religions abrahamiques",
    summary:
      "Fondé sur la vie et l'enseignement de Jésus de Nazareth, considéré comme le Messie. Trinité (Père, Fils, Esprit). Église primitive, schismes (1054, 1517). 2,4 milliards de fidèles.",
    mainWorks: [
      "Nouveau Testament - Évangiles et épîtres",
      "Crucifixion et résurrection de Jésus",
      "Trinité : Père, Fils, Saint-Esprit",
      "Catholiques, orthodoxes, protestants",
    ],
  },
  {
    id: "conciles",
    name: "Conciles œcuméniques",
    birthYear: 325,
    deathYear: 787,
    nationality: "Chrétien",
    movement: "Christianisme antique",
    summary:
      "Sept conciles définissent la doctrine chrétienne. Nicée (325) établit le Credo, Chalcédoine (451) la double nature du Christ. Fondements de l'orthodoxie chrétienne.",
    mainWorks: [
      "Nicée (325) - Credo, Trinité",
      "Constantinople (381) - divinité du Saint-Esprit",
      "Chalcédoine (451) - deux natures du Christ",
      "Nicée II (787) - culte des images",
    ],
  },
  {
    id: "islam",
    name: "Islam",
    birthYear: 610,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/The_Kaaba_during_Hajj.jpg/330px-The_Kaaba_during_Hajj.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Arabe",
    movement: "Religions abrahamiques",
    summary:
      "Fondé par le prophète Mahomet, qui reçoit le Coran d'Allah. Cinq piliers : profession de foi, prière, aumône, jeûne, pèlerinage. Sunnites et chiites. 1,9 milliard de fidèles.",
    mainWorks: [
      "Coran - parole de Dieu révélée",
      "Cinq piliers de l'islam",
      "Hadith - dits du Prophète",
      "Charia - loi islamique",
    ],
  },
  {
    id: "schisme-1054",
    name: "Schisme d'Orient (1054)",
    birthYear: 1054,
    nationality: "Chrétien",
    movement: "Christianisme médiéval",
    summary:
      "Rupture entre l'Église de Rome (catholique) et les Églises d'Orient (orthodoxes). Différences théologiques (Filioque), liturgiques et de pouvoir (primauté papale). Division durable.",
    mainWorks: [
      "Excommunications mutuelles (1054)",
      "Question du Filioque",
      "Primauté du pape contestée",
      "Levée des excommunications (1964)",
    ],
  },
  {
    id: "reforme",
    name: "Réforme protestante",
    birthYear: 1517,
    deathYear: 1648,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/95Thesen_facsimile_colour.png/330px-95Thesen_facsimile_colour.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Européen",
    movement: "Christianisme moderne",
    summary:
      "Luther affiche ses 95 thèses (1517), contestant les indulgences et l'autorité papale. Calvin, Zwingli développent le protestantisme. Guerres de religion, paix de Westphalie.",
    mainWorks: [
      "95 thèses de Luther (1517)",
      "Sola scriptura, sola fide, sola gratia",
      "Calvinisme et prédestination",
      "Contre-Réforme catholique",
    ],
  },
  {
    id: "sikhisme",
    name: "Sikhisme",
    birthYear: 1469,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Khanda.svg/langfr-330px-Khanda.svg.png?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Indien",
    movement: "Religions orientales",
    summary:
      "Fondé par Guru Nanak au Pendjab, synthétise hindouisme et islam. Monothéisme, égalité, service. Dix gurus, puis le Guru Granth Sahib (livre sacré). 30 millions de fidèles.",
    mainWorks: [
      "Guru Nanak - fondateur",
      "Guru Granth Sahib - livre sacré",
      "Temple d'Or d'Amritsar",
      "Égalité et service communautaire",
    ],
  },
  {
    id: "lumieres-religion",
    name: "Lumières et déisme",
    birthYear: 1650,
    deathYear: 1800,
    nationality: "Européen",
    movement: "Modernité",
    summary:
      "Les philosophes des Lumières critiquent la religion révélée. Déisme (Voltaire), athéisme (d'Holbach). Séparation de l'Église et de l'État, liberté de conscience.",
    mainWorks: [
      "Critique de la religion révélée",
      "Déisme - Dieu horloger",
      "Tolérance et liberté de conscience",
      "Séparation Église-État",
    ],
  },
  {
    id: "mormonisme",
    name: "Mormonisme",
    birthYear: 1830,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Salt_Lake_Temple_UT1.jpg/330px-Salt_Lake_Temple_UT1.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Nouveaux mouvements",
    summary:
      "Joseph Smith fonde l'Église de Jésus-Christ des saints des derniers jours. Livre de Mormon, migration vers l'Utah. 17 millions de membres, croissance rapide.",
    mainWorks: [
      "Livre de Mormon",
      "Joseph Smith - prophète fondateur",
      "Migration vers l'Utah",
      "Temple de Salt Lake City",
    ],
  },
  {
    id: "bahaisme",
    name: "Foi baha'ie",
    birthYear: 1863,
    nationality: "Persan",
    movement: "Nouveaux mouvements",
    summary:
      "Fondé par Baha'u'llah en Perse. Unité de Dieu, des religions et de l'humanité. Paix mondiale, égalité hommes-femmes, éducation universelle. 5-8 millions de fidèles.",
    mainWorks: [
      "Baha'u'llah - fondateur",
      "Unité de toutes les religions",
      "Principes d'unité mondiale",
      "Maisons d'adoration sur tous les continents",
    ],
  },
  {
    id: "fondamentalisme",
    name: "Fondamentalismes religieux",
    birthYear: 1910,
    nationality: "Mondial",
    movement: "XXe siècle",
    summary:
      "Retour aux fondements de la foi face à la modernité. Fondamentalisme protestant américain, islamisme, hindutva. Réaction à la sécularisation et à la mondialisation.",
    mainWorks: [
      "Fondamentalisme protestant (USA, 1910s)",
      "Frères musulmans (1928)",
      "Révolution iranienne (1979)",
      "Montée de l'hindutva en Inde",
    ],
  },
  {
    id: "oecumenisme",
    name: "Œcuménisme",
    birthYear: 1910,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/John_Raleigh_Mott_et_Nathan_S%C3%B6derblom.jpg/330px-John_Raleigh_Mott_et_Nathan_S%C3%B6derblom.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Mondial",
    movement: "XXe siècle",
    summary:
      "Mouvement pour l'unité des Églises chrétiennes. Conseil œcuménique des Églises (1948). Vatican II rapproche catholiques et protestants. Dialogue interreligieux.",
    mainWorks: [
      "Conférence d'Édimbourg (1910)",
      "Conseil œcuménique des Églises (1948)",
      "Vatican II (1962-1965)",
      "Dialogue interreligieux",
    ],
  },
  {
    id: "secularisation",
    name: "Sécularisation",
    birthYear: 1960,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Secularism.jpg/330px-Secularism.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Occidental",
    movement: "Contemporain",
    summary:
      "Déclin de la pratique religieuse en Occident depuis les années 1960. Baisse de la fréquentation des églises, montée des 'sans religion'. Mais recomposition plutôt que disparition.",
    mainWorks: [
      "Déclin de la pratique religieuse",
      "Montée des 'sans religion'",
      "Spiritualités alternatives",
      "Recomposition du religieux",
    ],
  },
];
