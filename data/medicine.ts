export interface MedicineItem {
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
}

export const medicine: MedicineItem[] = [
  {
    id: "hippocrate",
    name: "Hippocrate",
    birthYear: -460,
    deathYear: -370,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Hippocrates_rubens.jpg/330px-Hippocrates_rubens.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Grec",
    movement: "Médecine antique",
    family: "Médecine ancienne",
    summary:
      "Père de la médecine occidentale, il établit la médecine comme discipline rationnelle séparée de la magie et de la religion. Son serment reste la base de l'éthique médicale.",
    mainWorks: [
      "Serment d'Hippocrate - fondement de l'éthique médicale",
      "Théorie des quatre humeurs (sang, phlegme, bile jaune, bile noire)",
      "Observation clinique systématique des patients",
      "Corpus hippocratique - 60 traités médicaux",
    ],
  },
  {
    id: "galien",
    name: "Galien",
    birthYear: 129,
    deathYear: 216,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Galenus.jpg/330px-Galenus.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Romain (né en Grèce)",
    movement: "Médecine antique",
    family: "Médecine ancienne",
    summary:
      "Médecin des gladiateurs puis de l'empereur Marc Aurèle, ses travaux sur l'anatomie et la physiologie dominèrent la médecine pendant 1500 ans.",
    mainWorks: [
      "Dissections anatomiques (sur animaux)",
      "Théorie du pneuma vital et des esprits animaux",
      "Description du système circulatoire (incomplète)",
      "Plus de 500 traités médicaux",
    ],
  },
  {
    id: "avicenne",
    name: "Avicenne (Ibn Sina)",
    birthYear: 980,
    deathYear: 1037,
    nationality: "Persan",
    movement: "Médecine islamique",
    family: "Médecine ancienne",
    summary:
      "Polymathe persan, son Canon de la médecine synthétise les savoirs grecs et arabes. Ouvrage de référence en Europe et au Moyen-Orient pendant des siècles.",
    mainWorks: [
      "Canon de la médecine - encyclopédie médicale en 5 volumes",
      "Description de maladies contagieuses",
      "Méthodes de quarantaine",
      "Pharmacologie et préparation des médicaments",
    ],
  },
  {
    id: "vesale",
    name: "André Vésale",
    birthYear: 1514,
    deathYear: 1564,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Vesalius_Fabrica_portrait.jpg/330px-Vesalius_Fabrica_portrait.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Flamand",
    movement: "Renaissance anatomique",
    family: "Renaissance & anatomie",
    summary:
      "Fondateur de l'anatomie moderne, il corrige les erreurs de Galien grâce à la dissection de cadavres humains. Son atlas anatomique révolutionne la connaissance du corps.",
    mainWorks: [
      "De humani corporis fabrica (1543) - atlas anatomique illustré",
      "Première description précise du squelette humain",
      "Correction de plus de 200 erreurs de Galien",
      "Établissement de la dissection comme méthode scientifique",
    ],
  },
  {
    id: "pare",
    name: "Ambroise Paré",
    birthYear: 1510,
    deathYear: 1590,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Portrait_of_Ambroise_Par%C3%A9.jpg/330px-Portrait_of_Ambroise_Par%C3%A9.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Chirurgie de la Renaissance",
    family: "Renaissance & anatomie",
    summary:
      "Père de la chirurgie moderne, il abandonne la cautérisation au fer rouge pour la ligature des vaisseaux. Chirurgien des rois de France, il humanise la pratique chirurgicale.",
    mainWorks: [
      "Ligature des artères au lieu de la cautérisation",
      "Traitement des plaies par armes à feu sans huile bouillante",
      "Prothèses et membres artificiels",
      "Œuvres complètes de chirurgie (1575)",
    ],
  },
  {
    id: "harvey",
    name: "William Harvey",
    birthYear: 1578,
    deathYear: 1657,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/William_Harvey_2.jpg/330px-William_Harvey_2.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Anglais",
    movement: "Révolution scientifique",
    family: "Renaissance & anatomie",
    summary:
      "Découvre la circulation sanguine en démontrant que le cœur est une pompe qui fait circuler le sang en circuit fermé. Bouleverse la physiologie héritée de Galien.",
    mainWorks: [
      "Exercitatio Anatomica de Motu Cordis (1628)",
      "Démonstration de la circulation sanguine",
      "Le cœur comme pompe musculaire",
      "Distinction sang artériel/veineux",
    ],
  },
  {
    id: "jenner",
    name: "Edward Jenner",
    birthYear: 1749,
    deathYear: 1823,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Edward_Jenner_by_James_Northcote.jpg/330px-Edward_Jenner_by_James_Northcote.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Anglais",
    movement: "Vaccination",
    family: "Essor clinique",
    summary:
      "Pionnier de la vaccination, il découvre que l'inoculation de la vaccine (variole bovine) protège contre la variole humaine. Sa méthode sauvera des millions de vies.",
    mainWorks: [
      "Première vaccination contre la variole (1796)",
      "Inquiry into the Variolae Vaccinae (1798)",
      "Établissement du principe de l'immunisation",
      "Éradication future de la variole (1980)",
    ],
  },
  {
    id: "laennec",
    name: "René Laennec",
    birthYear: 1781,
    deathYear: 1826,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Rene-Theophile-Hyacinthe_Laennec.jpg/330px-Rene-Theophile-Hyacinthe_Laennec.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Médecine clinique",
    family: "Essor clinique",
    summary:
      "Inventeur du stéthoscope, il révolutionne le diagnostic des maladies thoraciques. Son traité d'auscultation établit les bases de la sémiologie moderne.",
    mainWorks: [
      "Invention du stéthoscope (1816)",
      "Traité de l'auscultation médiate (1819)",
      "Description de la cirrhose du foie",
      "Classification des bruits pulmonaires et cardiaques",
    ],
  },
  {
    id: "semmelweis",
    name: "Ignace Semmelweis",
    birthYear: 1818,
    deathYear: 1865,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Borsos_%26_Doctor_Semmelweis_Ign%C3%A1c_cropped.jpg/330px-Borsos_%26_Doctor_Semmelweis_Ign%C3%A1c_cropped.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Hongrois",
    movement: "Hygiène médicale",
    family: "Essor clinique",
    summary:
      "Pionnier de l'antisepsie, il démontre que le lavage des mains réduit drastiquement la fièvre puerpérale. Ignoré de son vivant, il est réhabilité après sa mort.",
    mainWorks: [
      "Découverte de la transmission manuportée des infections",
      "Protocole de lavage des mains au chlorure de chaux",
      "Réduction de la mortalité maternelle de 18% à 2%",
      "Étiologie de la fièvre puerpérale (1861)",
    ],
  },
  {
    id: "pasteur",
    name: "Louis Pasteur",
    birthYear: 1822,
    deathYear: 1895,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Louis_Pasteur_%281822_-_1895%29%2C_microbiologist_and_chemist_Wellcome_V0026980.jpg/330px-Louis_Pasteur_%281822_-_1895%29%2C_microbiologist_and_chemist_Wellcome_V0026980.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Français",
    movement: "Microbiologie",
    family: "Révolution microbienne",
    summary:
      "Fondateur de la microbiologie, il réfute la génération spontanée et établit la théorie des germes. Ses vaccins contre la rage et le charbon ouvrent l'ère de l'immunologie.",
    mainWorks: [
      "Théorie des germes et réfutation de la génération spontanée",
      "Pasteurisation pour conserver les aliments",
      "Vaccin contre le charbon (1881) et la rage (1885)",
      "Fondation de l'Institut Pasteur (1888)",
    ],
  },
  {
    id: "lister",
    name: "Joseph Lister",
    birthYear: 1827,
    deathYear: 1912,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/JosephLister.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "Anglais",
    movement: "Chirurgie antiseptique",
    family: "Révolution microbienne",
    summary:
      "Père de la chirurgie antiseptique, il applique les découvertes de Pasteur à la salle d'opération. L'utilisation de l'acide phénique réduit drastiquement les infections post-opératoires.",
    mainWorks: [
      "Introduction de l'antisepsie en chirurgie (1867)",
      "Utilisation de l'acide phénique (phénol)",
      "Réduction de la mortalité chirurgicale de 45% à 15%",
      "Stérilisation des instruments et des mains",
    ],
  },
  {
    id: "koch",
    name: "Robert Koch",
    birthYear: 1843,
    deathYear: 1910,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Robert_Koch.jpg/330px-Robert_Koch.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Bactériologie",
    family: "Révolution microbienne",
    summary:
      "Fondateur de la bactériologie médicale, il isole les bacilles de la tuberculose et du choléra. Ses postulats définissent les critères pour identifier l'agent d'une maladie infectieuse.",
    mainWorks: [
      "Découverte du bacille de la tuberculose (1882)",
      "Découverte du vibrion du choléra (1883)",
      "Postulats de Koch - critères de causalité infectieuse",
      "Prix Nobel de médecine (1905)",
    ],
  },
  {
    id: "roentgen",
    name: "Wilhelm Röntgen",
    birthYear: 1845,
    deathYear: 1923,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wilhelm_Conrad_R%C3%B6ntgen_%281888-1900%29%2C_88374_p.jpg/330px-Wilhelm_Conrad_R%C3%B6ntgen_%281888-1900%29%2C_88374_p.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Allemand",
    movement: "Imagerie médicale",
    family: "Médecine moderne",
    summary:
      "Découvre les rayons X en 1895, révolutionnant le diagnostic médical. Pour la première fois, on peut voir l'intérieur du corps sans l'ouvrir.",
    mainWorks: [
      "Découverte des rayons X (1895)",
      "Première radiographie (main de sa femme)",
      "Premier Prix Nobel de physique (1901)",
      "Naissance de l'imagerie médicale",
    ],
  },
  {
    id: "freud",
    name: "Sigmund Freud",
    birthYear: 1856,
    deathYear: 1939,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/330px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Autrichien",
    movement: "Psychanalyse",
    family: "Médecine moderne",
    summary:
      "Fondateur de la psychanalyse, il explore l'inconscient et développe une théorie de l'appareil psychique. Influence majeure sur la psychiatrie et la culture du XXe siècle.",
    mainWorks: [
      "L'interprétation des rêves (1900)",
      "Théorie de l'inconscient et du refoulement",
      "Structure de la personnalité (ça, moi, surmoi)",
      "Méthode de la cure par la parole",
    ],
  },
  {
    id: "fleming",
    name: "Alexander Fleming",
    birthYear: 1881,
    deathYear: 1955,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Alexander_Fleming_1945.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    nationality: "Écossais",
    movement: "Antibiothérapie",
    family: "Médecine moderne",
    summary:
      "Découvre la pénicilline en 1928, premier antibiotique. Cette découverte fortuite ouvre l'ère des antibiotiques et sauve des millions de vies.",
    mainWorks: [
      "Découverte de la pénicilline (1928)",
      "Observation de l'effet antibactérien du Penicillium",
      "Prix Nobel de médecine (1945)",
      "Début de l'ère des antibiotiques",
    ],
  },
  {
    id: "crick-watson",
    name: "Watson et Crick",
    birthYear: 1953,
    nationality: "Américain / Anglais",
    movement: "Génétique moléculaire",
    family: "Ère biomédicale",
    summary:
      "Découvrent la structure en double hélice de l'ADN en 1953, avec Rosalind Franklin et Maurice Wilkins. Cette découverte fonde la biologie moléculaire moderne.",
    mainWorks: [
      "Structure en double hélice de l'ADN (1953)",
      "Mécanisme de réplication génétique",
      "Prix Nobel de médecine (1962)",
      "Fondation de la biologie moléculaire",
    ],
  },
  {
    id: "salk",
    name: "Jonas Salk",
    birthYear: 1914,
    deathYear: 1995,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Jonas_Salk_candid.jpg/330px-Jonas_Salk_candid.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Américain",
    movement: "Vaccination moderne",
    family: "Médecine moderne",
    summary:
      "Développe le premier vaccin efficace contre la poliomyélite en 1955. Refuse de breveter son vaccin pour qu'il soit accessible à tous.",
    mainWorks: [
      "Vaccin inactivé contre la polio (1955)",
      "Campagne de vaccination massive aux USA",
      "Refus de breveter le vaccin",
      "Quasi-éradication de la poliomyélite",
    ],
  },
  {
    id: "barnard",
    name: "Christiaan Barnard",
    birthYear: 1922,
    deathYear: 2001,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Christiaan_Barnard_1969.jpg/330px-Christiaan_Barnard_1969.jpg?utm_source=fr.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    nationality: "Sud-Africain",
    movement: "Chirurgie de transplantation",
    family: "Ère biomédicale",
    summary:
      "Réalise la première transplantation cardiaque humaine en 1967 au Cap. Ouvre l'ère de la chirurgie de transplantation d'organes vitaux.",
    mainWorks: [
      "Première greffe cardiaque (3 décembre 1967)",
      "Patient Louis Washkansky survécut 18 jours",
      "Développement des techniques de transplantation",
      "Débats éthiques sur le don d'organes",
    ],
  },
  {
    id: "ivf",
    name: "Edwards et Steptoe",
    birthYear: 1978,
    nationality: "Anglais",
    movement: "Procréation assistée",
    family: "Ère biomédicale",
    summary:
      "Réalisent la première fécondation in vitro avec la naissance de Louise Brown en 1978. Ouvrent l'ère de la procréation médicalement assistée.",
    mainWorks: [
      "Naissance de Louise Brown (25 juillet 1978)",
      "Premier bébé-éprouvette",
      "Développement de la FIV",
      "Prix Nobel de médecine pour Edwards (2010)",
    ],
  },
  {
    id: "arn-messager",
    name: "Vaccins ARN messager",
    birthYear: 2020,
    nationality: "International",
    movement: "Biotechnologie",
    family: "Ère biomédicale",
    itemType: "topic",
    summary:
      "Les vaccins à ARN messager contre le COVID-19 (Pfizer-BioNTech, Moderna) représentent une révolution technologique. Développés en un an, ils ouvrent de nouvelles perspectives thérapeutiques.",
    mainWorks: [
      "Vaccins Pfizer-BioNTech et Moderna (2020)",
      "Technologie ARNm pour instruire les cellules",
      "Développement accéléré grâce aux décennies de recherche",
      "Katalin Karikó et Drew Weissman, Prix Nobel 2023",
    ],
  },
];
