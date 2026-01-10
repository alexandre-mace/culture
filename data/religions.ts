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
}

export const religions: ReligionItem[] = [
  {
    id: "animisme",
    name: "Animisme et chamanisme",
    birthYear: -100000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Pintura_Rupestre_Cogul.jpg/400px-Pintura_Rupestre_Cogul.jpg",
    nationality: "Mondial",
    movement: "Prehistoire",
    summary:
      "Les plus anciennes formes de spiritualite. Croyance que tous les etres (animaux, plantes, rochers) possedent une ame. Le chaman est l'intermediaire avec le monde des esprits.",
    mainWorks: [
      "Croyance en l'ame de toute chose",
      "Chamanisme - communication avec les esprits",
      "Rituels et transes",
      "Persistance dans de nombreuses cultures",
    ],
  },
  {
    id: "hindouisme",
    name: "Hindouisme",
    birthYear: -1500,
    nationality: "Indien",
    movement: "Religions orientales",
    summary:
      "Plus ancienne religion organisee encore pratiquee. Pas de fondateur unique, emerge des Vedas. Brahma, Vishnou, Shiva. Karma, dharma, samsara, moksha. Un milliard de fideles.",
    mainWorks: [
      "Vedas - textes sacres les plus anciens",
      "Upanishads - philosophie spirituelle",
      "Bhagavad-Gita",
      "Trimurti : Brahma, Vishnou, Shiva",
    ],
  },
  {
    id: "zoroastrisme",
    name: "Zoroastrisme",
    birthYear: -1200,
    nationality: "Perse",
    movement: "Religions antiques",
    summary:
      "Religion de Zoroastre (Zarathoustra), premiere religion monotheiste. Dualisme bien/mal (Ahura Mazda vs Ahriman). Religion officielle des empires perses, influence le judaisme et le christianisme.",
    mainWorks: [
      "Avesta - textes sacres",
      "Ahura Mazda - dieu unique",
      "Dualisme bien/mal",
      "Influence sur les religions abrahamiques",
    ],
  },
  {
    id: "judaisme",
    name: "Judaisme",
    birthYear: -1000,
    nationality: "Hebraique",
    movement: "Religions abrahamiques",
    summary:
      "Premiere religion monotheiste abrahamique. Alliance entre Dieu et le peuple d'Israel. Torah, Talmud, synagogue. Diaspora apres la destruction du Temple (70). 14 millions de fideles.",
    mainWorks: [
      "Torah - cinq livres de Moise",
      "Talmud - commentaires et loi orale",
      "Alliance avec Dieu (Abraham, Moise)",
      "Diaspora et retour en Israel",
    ],
  },
  {
    id: "bouddhisme",
    name: "Bouddhisme",
    birthYear: -500,
    nationality: "Indien",
    movement: "Religions orientales",
    summary:
      "Fonde par Siddhartha Gautama (Bouddha). Quatre nobles verites, Noble Sentier Octuple, nirvana. Se repand en Asie : Theravada, Mahayana, Vajrayana. 500 millions de fideles.",
    mainWorks: [
      "Quatre nobles verites (souffrance)",
      "Noble Sentier Octuple",
      "Nirvana - liberation du cycle des renaissances",
      "Tripitaka - canon bouddhique",
    ],
  },
  {
    id: "confucianisme",
    name: "Confucianisme",
    birthYear: -500,
    nationality: "Chinois",
    movement: "Philosophies orientales",
    summary:
      "Enseignement de Confucius sur l'ethique, la famille et l'harmonie sociale. Piete filiale, rites, etude. Influence profonde sur la Chine, la Coree, le Japon, le Vietnam.",
    mainWorks: [
      "Entretiens de Confucius",
      "Cinq relations (souverain-sujet, pere-fils...)",
      "Piete filiale et rites",
      "Examens imperiaux",
    ],
  },
  {
    id: "taoisme",
    name: "Taoisme",
    birthYear: -400,
    nationality: "Chinois",
    movement: "Philosophies orientales",
    summary:
      "Philosophie et religion fondee sur le Tao (la Voie). Laozi et le Tao Te King. Wu wei (non-agir), harmonie avec la nature, yin et yang. Pratiques alchimiques et immortalite.",
    mainWorks: [
      "Tao Te King de Laozi",
      "Wu wei - non-agir, spontaneite",
      "Yin et yang - equilibre des contraires",
      "Quete de l'immortalite",
    ],
  },
  {
    id: "christianisme",
    name: "Christianisme",
    birthYear: 30,
    nationality: "Judee",
    movement: "Religions abrahamiques",
    summary:
      "Fonde sur la vie et l'enseignement de Jesus de Nazareth, considere comme le Messie. Trinite (Pere, Fils, Esprit). Eglise primitive, schismes (1054, 1517). 2,4 milliards de fideles.",
    mainWorks: [
      "Nouveau Testament - Evangiles et epitres",
      "Crucifixion et resurrection de Jesus",
      "Trinite : Pere, Fils, Saint-Esprit",
      "Catholiques, orthodoxes, protestants",
    ],
  },
  {
    id: "conciles",
    name: "Conciles oecumeniques",
    birthYear: 325,
    deathYear: 787,
    nationality: "Chretien",
    movement: "Christianisme antique",
    summary:
      "Sept conciles definissent la doctrine chretienne. Nicee (325) etablit le Credo, Chalcedoine (451) la double nature du Christ. Fondements de l'orthodoxie chretienne.",
    mainWorks: [
      "Nicee (325) - Credo, Trinite",
      "Constantinople (381) - divinite du Saint-Esprit",
      "Chalcedoine (451) - deux natures du Christ",
      "Nicee II (787) - culte des images",
    ],
  },
  {
    id: "islam",
    name: "Islam",
    birthYear: 610,
    nationality: "Arabe",
    movement: "Religions abrahamiques",
    summary:
      "Fonde par le prophete Mahomet, qui recoit le Coran d'Allah. Cinq piliers : profession de foi, priere, aumone, jeune, pelerinage. Sunnites et chiites. 1,9 milliard de fideles.",
    mainWorks: [
      "Coran - parole de Dieu revelee",
      "Cinq piliers de l'islam",
      "Hadith - dits du Prophete",
      "Charia - loi islamique",
    ],
  },
  {
    id: "schisme-1054",
    name: "Schisme d'Orient (1054)",
    birthYear: 1054,
    nationality: "Chretien",
    movement: "Christianisme medieval",
    summary:
      "Rupture entre l'Eglise de Rome (catholique) et les Eglises d'Orient (orthodoxes). Differences theologiques (Filioque), liturgiques et de pouvoir (primaute papale). Division durable.",
    mainWorks: [
      "Excommunications mutuelles (1054)",
      "Question du Filioque",
      "Primaute du pape contestee",
      "Levee des excommunications (1964)",
    ],
  },
  {
    id: "reforme",
    name: "Reforme protestante",
    birthYear: 1517,
    deathYear: 1648,
    nationality: "Europeen",
    movement: "Christianisme moderne",
    summary:
      "Luther affiche ses 95 theses (1517), contestant les indulgences et l'autorite papale. Calvin, Zwingli developpent le protestantisme. Guerres de religion, paix de Westphalie.",
    mainWorks: [
      "95 theses de Luther (1517)",
      "Sola scriptura, sola fide, sola gratia",
      "Calvinisme et predestination",
      "Contre-Reforme catholique",
    ],
  },
  {
    id: "sikhisme",
    name: "Sikhisme",
    birthYear: 1469,
    nationality: "Indien",
    movement: "Religions orientales",
    summary:
      "Fonde par Guru Nanak au Pendjab, synthetise hindouisme et islam. Monotheisme, egalite, service. Dix gurus, puis le Guru Granth Sahib (livre sacre). 30 millions de fideles.",
    mainWorks: [
      "Guru Nanak - fondateur",
      "Guru Granth Sahib - livre sacre",
      "Temple d'Or d'Amritsar",
      "Egalite et service communautaire",
    ],
  },
  {
    id: "lumieres-religion",
    name: "Lumieres et deisme",
    birthYear: 1650,
    deathYear: 1800,
    nationality: "Europeen",
    movement: "Modernite",
    summary:
      "Les philosophes des Lumieres critiquent la religion revelee. Deisme (Voltaire), atheisme (d'Holbach). Separation de l'Eglise et de l'Etat, liberte de conscience.",
    mainWorks: [
      "Critique de la religion revelee",
      "Deisme - Dieu horloger",
      "Tolerance et liberte de conscience",
      "Separation Eglise-Etat",
    ],
  },
  {
    id: "mormonisme",
    name: "Mormonisme",
    birthYear: 1830,
    nationality: "Americain",
    movement: "Nouveaux mouvements",
    summary:
      "Joseph Smith fonde l'Eglise de Jesus-Christ des saints des derniers jours. Livre de Mormon, migration vers l'Utah. 17 millions de membres, croissance rapide.",
    mainWorks: [
      "Livre de Mormon",
      "Joseph Smith - prophete fondateur",
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
      "Fonde par Baha'u'llah en Perse. Unite de Dieu, des religions et de l'humanite. Paix mondiale, egalite hommes-femmes, education universelle. 5-8 millions de fideles.",
    mainWorks: [
      "Baha'u'llah - fondateur",
      "Unite de toutes les religions",
      "Principes d'unite mondiale",
      "Maisons d'adoration sur tous les continents",
    ],
  },
  {
    id: "fondamentalisme",
    name: "Fondamentalismes religieux",
    birthYear: 1910,
    nationality: "Mondial",
    movement: "XXe siecle",
    summary:
      "Retour aux fondements de la foi face a la modernite. Fondamentalisme protestant americain, islamisme, hindutva. Reaction a la secularisation et a la mondialisation.",
    mainWorks: [
      "Fondamentalisme protestant (USA, 1910s)",
      "Freres musulmans (1928)",
      "Revolution iranienne (1979)",
      "Montee de l'hindutva en Inde",
    ],
  },
  {
    id: "oecumenisme",
    name: "Oecumenisme",
    birthYear: 1910,
    nationality: "Mondial",
    movement: "XXe siecle",
    summary:
      "Mouvement pour l'unite des Eglises chretiennes. Conseil oecumenique des Eglises (1948). Vatican II rapproche catholiques et protestants. Dialogue interreligieux.",
    mainWorks: [
      "Conference d'Edimbourg (1910)",
      "Conseil oecumenique des Eglises (1948)",
      "Vatican II (1962-1965)",
      "Dialogue interreligieux",
    ],
  },
  {
    id: "secularisation",
    name: "Secularisation",
    birthYear: 1960,
    nationality: "Occidental",
    movement: "Contemporain",
    summary:
      "Declin de la pratique religieuse en Occident depuis les annees 1960. Baisse de la frequentation des eglises, montee des 'sans religion'. Mais recomposition plutot que disparition.",
    mainWorks: [
      "Declin de la pratique religieuse",
      "Montee des 'sans religion'",
      "Spiritualites alternatives",
      "Recomposition du religieux",
    ],
  },
];
