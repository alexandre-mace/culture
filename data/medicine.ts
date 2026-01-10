export interface MedicineItem {
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

export const medicine: MedicineItem[] = [
  {
    id: "hippocrate",
    name: "Hippocrate",
    birthYear: -460,
    deathYear: -370,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hippocrates.jpg/220px-Hippocrates.jpg",
    nationality: "Grec",
    movement: "Medecine antique",
    summary:
      "Pere de la medecine occidentale, il etablit la medecine comme discipline rationnelle separee de la magie et de la religion. Son serment reste la base de l'ethique medicale.",
    mainWorks: [
      "Serment d'Hippocrate - fondement de l'ethique medicale",
      "Theorie des quatre humeurs (sang, phlegme, bile jaune, bile noire)",
      "Observation clinique systematique des patients",
      "Corpus hippocratique - 60 traites medicaux",
    ],
  },
  {
    id: "galien",
    name: "Galien",
    birthYear: 129,
    deathYear: 216,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Galen_of_Pergamum.jpg/220px-Galen_of_Pergamum.jpg",
    nationality: "Romain (ne en Grece)",
    movement: "Medecine antique",
    summary:
      "Medecin des gladiateurs puis de l'empereur Marc Aurele, ses travaux sur l'anatomie et la physiologie dominerent la medecine pendant 1500 ans.",
    mainWorks: [
      "Dissections anatomiques (sur animaux)",
      "Theorie du pneuma vital et des esprits animaux",
      "Description du systeme circulatoire (incomplete)",
      "Plus de 500 traites medicaux",
    ],
  },
  {
    id: "avicenne",
    name: "Avicenne (Ibn Sina)",
    birthYear: 980,
    deathYear: 1037,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Avicenna_Portrait_on_Silver_Vase_-_Museum_at_BuAli_Sina_%28Avicenna%29_Mausoleum_-_Hamadan_-_Western_Iran_%287423560860%29.jpg/220px-Avicenna_Portrait_on_Silver_Vase.jpg",
    nationality: "Persan",
    movement: "Medecine islamique",
    summary:
      "Polymathe persan, son Canon de la medecine synthetise les savoirs grecs et arabes. Ouvrage de reference en Europe et au Moyen-Orient pendant des siecles.",
    mainWorks: [
      "Canon de la medecine - encyclopedie medicale en 5 volumes",
      "Description de maladies contagieuses",
      "Methodes de quarantaine",
      "Pharmacologie et preparation des medicaments",
    ],
  },
  {
    id: "vesale",
    name: "Andre Vesale",
    birthYear: 1514,
    deathYear: 1564,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Vesalius_Fabrica_portrait.jpg/220px-Vesalius_Fabrica_portrait.jpg",
    nationality: "Flamand",
    movement: "Renaissance anatomique",
    summary:
      "Fondateur de l'anatomie moderne, il corrige les erreurs de Galien grace a la dissection de cadavres humains. Son atlas anatomique revolutionne la connaissance du corps.",
    mainWorks: [
      "De humani corporis fabrica (1543) - atlas anatomique illustre",
      "Premiere description precise du squelette humain",
      "Correction de plus de 200 erreurs de Galien",
      "Etablissement de la dissection comme methode scientifique",
    ],
  },
  {
    id: "pare",
    name: "Ambroise Pare",
    birthYear: 1510,
    deathYear: 1590,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Ambroise_Par%C3%A9.jpg/220px-Ambroise_Par%C3%A9.jpg",
    nationality: "Francais",
    movement: "Chirurgie de la Renaissance",
    summary:
      "Pere de la chirurgie moderne, il abandonne la cauterisation au fer rouge pour la ligature des vaisseaux. Chirurgien des rois de France, il humanise la pratique chirurgicale.",
    mainWorks: [
      "Ligature des arteres au lieu de la cauterisation",
      "Traitement des plaies par armes a feu sans huile bouillante",
      "Protheses et membres artificiels",
      "Oeuvres completes de chirurgie (1575)",
    ],
  },
  {
    id: "harvey",
    name: "William Harvey",
    birthYear: 1578,
    deathYear: 1657,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/William_Harvey_%281578-1657%29_Venenbild.jpg/220px-William_Harvey_%281578-1657%29_Venenbild.jpg",
    nationality: "Anglais",
    movement: "Revolution scientifique",
    summary:
      "Decouvre la circulation sanguine en demontrant que le coeur est une pompe qui fait circuler le sang en circuit ferme. Bouleverse la physiologie heritee de Galien.",
    mainWorks: [
      "Exercitatio Anatomica de Motu Cordis (1628)",
      "Demonstration de la circulation sanguine",
      "Le coeur comme pompe musculaire",
      "Distinction sang arteriel/veineux",
    ],
  },
  {
    id: "jenner",
    name: "Edward Jenner",
    birthYear: 1749,
    deathYear: 1823,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Edward_Jenner._Oil_painting._Wellcome_V0023503.jpg/220px-Edward_Jenner._Oil_painting._Wellcome_V0023503.jpg",
    nationality: "Anglais",
    movement: "Vaccination",
    summary:
      "Pionnier de la vaccination, il decouvre que l'inoculation de la vaccine (variole bovine) protege contre la variole humaine. Sa methode sauvera des millions de vies.",
    mainWorks: [
      "Premiere vaccination contre la variole (1796)",
      "Inquiry into the Variolae Vaccinae (1798)",
      "Etablissement du principe de l'immunisation",
      "Eradication future de la variole (1980)",
    ],
  },
  {
    id: "laennec",
    name: "Rene Laennec",
    birthYear: 1781,
    deathYear: 1826,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Rene-Theophile-Hyacinthe_Laennec.jpg/220px-Rene-Theophile-Hyacinthe_Laennec.jpg",
    nationality: "Francais",
    movement: "Medecine clinique",
    summary:
      "Inventeur du stethoscope, il revolutionne le diagnostic des maladies thoraciques. Son traite d'auscultation etablit les bases de la semiologie moderne.",
    mainWorks: [
      "Invention du stethoscope (1816)",
      "Traite de l'auscultation mediate (1819)",
      "Description de la cirrhose du foie",
      "Classification des bruits pulmonaires et cardiaques",
    ],
  },
  {
    id: "semmelweis",
    name: "Ignace Semmelweis",
    birthYear: 1818,
    deathYear: 1865,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Ignaz_Semmelweis_1860.jpg/220px-Ignaz_Semmelweis_1860.jpg",
    nationality: "Hongrois",
    movement: "Hygiene medicale",
    summary:
      "Pionnier de l'antisepsie, il demontre que le lavage des mains reduit drastiquement la fievre puerperale. Ignore de son vivant, il est rehabilite apres sa mort.",
    mainWorks: [
      "Decouverte de la transmission manuportee des infections",
      "Protocole de lavage des mains au chlorure de chaux",
      "Reduction de la mortalite maternelle de 18% a 2%",
      "Etiologie de la fievre puerperale (1861)",
    ],
  },
  {
    id: "pasteur",
    name: "Louis Pasteur",
    birthYear: 1822,
    deathYear: 1895,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Louis_Pasteur.jpg/220px-Louis_Pasteur.jpg",
    nationality: "Francais",
    movement: "Microbiologie",
    summary:
      "Fondateur de la microbiologie, il refute la generation spontanee et etablit la theorie des germes. Ses vaccins contre la rage et le charbon ouvrent l'ere de l'immunologie.",
    mainWorks: [
      "Theorie des germes et refutation de la generation spontanee",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Joseph_Lister_1902.jpg/220px-Joseph_Lister_1902.jpg",
    nationality: "Anglais",
    movement: "Chirurgie antiseptique",
    summary:
      "Pere de la chirurgie antiseptique, il applique les decouvertes de Pasteur a la salle d'operation. L'utilisation de l'acide phenique reduit drastiquement les infections post-operatoires.",
    mainWorks: [
      "Introduction de l'antisepsie en chirurgie (1867)",
      "Utilisation de l'acide phenique (phenol)",
      "Reduction de la mortalite chirurgicale de 45% a 15%",
      "Sterilisation des instruments et des mains",
    ],
  },
  {
    id: "koch",
    name: "Robert Koch",
    birthYear: 1843,
    deathYear: 1910,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Robert_Koch_BessW.jpg/220px-Robert_Koch_BeW.jpg",
    nationality: "Allemand",
    movement: "Bacteriologie",
    summary:
      "Fondateur de la bacteriologie medicale, il isole les bacilles de la tuberculose et du cholera. Ses postulats definissent les criteres pour identifier l'agent d'une maladie infectieuse.",
    mainWorks: [
      "Decouverte du bacille de la tuberculose (1882)",
      "Decouverte du vibrion du cholera (1883)",
      "Postulats de Koch - criteres de causalite infectieuse",
      "Prix Nobel de medecine (1905)",
    ],
  },
  {
    id: "roentgen",
    name: "Wilhelm Rontgen",
    birthYear: 1845,
    deathYear: 1923,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Roentgen2.jpg/220px-Roentgen2.jpg",
    nationality: "Allemand",
    movement: "Imagerie medicale",
    summary:
      "Decouvre les rayons X en 1895, revolutionnant le diagnostic medical. Pour la premiere fois, on peut voir l'interieur du corps sans l'ouvrir.",
    mainWorks: [
      "Decouverte des rayons X (1895)",
      "Premiere radiographie (main de sa femme)",
      "Premier Prix Nobel de physique (1901)",
      "Naissance de l'imagerie medicale",
    ],
  },
  {
    id: "freud",
    name: "Sigmund Freud",
    birthYear: 1856,
    deathYear: 1939,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/220px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg",
    nationality: "Autrichien",
    movement: "Psychanalyse",
    summary:
      "Fondateur de la psychanalyse, il explore l'inconscient et developpe une theorie de l'appareil psychique. Influence majeure sur la psychiatrie et la culture du XXe siecle.",
    mainWorks: [
      "L'interpretation des reves (1900)",
      "Theorie de l'inconscient et du refoulement",
      "Structure de la personnalite (ca, moi, surmoi)",
      "Methode de la cure par la parole",
    ],
  },
  {
    id: "fleming",
    name: "Alexander Fleming",
    birthYear: 1881,
    deathYear: 1955,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Alexander_Fleming_1945.jpg/220px-Alexander_Fleming_1945.jpg",
    nationality: "Ecossais",
    movement: "Antibiotherapie",
    summary:
      "Decouvre la penicilline en 1928, premier antibiotique. Cette decouverte fortuite ouvre l'ere des antibiotiques et sauve des millions de vies.",
    mainWorks: [
      "Decouverte de la penicilline (1928)",
      "Observation de l'effet antibacterien du Penicillium",
      "Prix Nobel de medecine (1945)",
      "Debut de l'ere des antibiotiques",
    ],
  },
  {
    id: "crick-watson",
    name: "Watson et Crick",
    birthYear: 1953,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/DNA_Model_Crick-Watson.jpg/220px-DNA_Model_Crick-Watson.jpg",
    nationality: "Americain / Anglais",
    movement: "Genetique moleculaire",
    summary:
      "Decouvrent la structure en double helice de l'ADN en 1953, avec Rosalind Franklin et Maurice Wilkins. Cette decouverte fonde la biologie moleculaire moderne.",
    mainWorks: [
      "Structure en double helice de l'ADN (1953)",
      "Mecanisme de replication genetique",
      "Prix Nobel de medecine (1962)",
      "Fondation de la biologie moleculaire",
    ],
  },
  {
    id: "salk",
    name: "Jonas Salk",
    birthYear: 1914,
    deathYear: 1995,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/SalsVaccine.jpg/220px-SalkVaccine.jpg",
    nationality: "Americain",
    movement: "Vaccination moderne",
    summary:
      "Developpe le premier vaccin efficace contre la poliomyelite en 1955. Refuse de breveter son vaccin pour qu'il soit accessible a tous.",
    mainWorks: [
      "Vaccin inactive contre la polio (1955)",
      "Campagne de vaccination massive aux USA",
      "Refus de breveter le vaccin",
      "Quasi-eradication de la poliomyelite",
    ],
  },
  {
    id: "barnard",
    name: "Christiaan Barnard",
    birthYear: 1922,
    deathYear: 2001,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Christiaan_Barnard_by_Ulrich_Waack.jpg/220px-Christiaan_Barnard_by_Ulrich_Waack.jpg",
    nationality: "Sud-Africain",
    movement: "Chirurgie de transplantation",
    summary:
      "Realise la premiere transplantation cardiaque humaine en 1967 au Cap. Ouvre l'ere de la chirurgie de transplantation d'organes vitaux.",
    mainWorks: [
      "Premiere greffe cardiaque (3 decembre 1967)",
      "Patient Louis Washkansky survecut 18 jours",
      "Developpement des techniques de transplantation",
      "Debats ethiques sur le don d'organes",
    ],
  },
  {
    id: "ivf",
    name: "Edwards et Steptoe",
    birthYear: 1978,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Robert_G._Edwards_in_2010.jpg/220px-Robert_G._Edwards_in_2010.jpg",
    nationality: "Anglais",
    movement: "Procreation assistee",
    summary:
      "Realisent la premiere fecondation in vitro avec la naissance de Louise Brown en 1978. Ouvrent l'ere de la procreation medicalement assistee.",
    mainWorks: [
      "Naissance de Louise Brown (25 juillet 1978)",
      "Premier bebe-eprouvette",
      "Developpement de la FIV",
      "Prix Nobel de medecine pour Edwards (2010)",
    ],
  },
  {
    id: "arn-messager",
    name: "Vaccins ARN messager",
    birthYear: 2020,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Katalin_Karik%C3%B3_Nobel_2023.jpg/220px-Katalin_Karik%C3%B3_Nobel_2023.jpg",
    nationality: "International",
    movement: "Biotechnologie",
    summary:
      "Les vaccins a ARN messager contre le COVID-19 (Pfizer-BioNTech, Moderna) representent une revolution technologique. Developpes en un an, ils ouvrent de nouvelles perspectives therapeutiques.",
    mainWorks: [
      "Vaccins Pfizer-BioNTech et Moderna (2020)",
      "Technologie ARNm pour instruire les cellules",
      "Developpement accelere grace aux decennies de recherche",
      "Katalin Kariko et Drew Weissman, Prix Nobel 2023",
    ],
  },
];
