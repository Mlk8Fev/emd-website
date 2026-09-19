export const CONTACT_INFO = {
  address: "01 BP 2000 SAN-PEDRO 01, San Pedro, Côte d'Ivoire",
  phone: "05 66 08 64 96",
  phoneRaw: "0566086496",
  email: "ensemblemondedurable@gmail.com",
  hours: "Disponible 7j/7 pour vos demandes",
};

export const NGO_INFO = {
  name: "Ensemble pour un Monde Durable",
  acronym: "EMD",
  foundedDate: "18 mai 2026",
  tagline: "Agir pour un Monde Durable",
  city: "San Pedro, Côte d'Ivoire",
};

export interface Odd {
  number: number;
  title: string;
  color: string;
}

export const ODD_LIST: Odd[] = [
  { number: 1, title: "Pas de pauvreté", color: "#E5243B" },
  { number: 2, title: "Faim « zéro »", color: "#DDA63A" },
  { number: 3, title: "Bonne santé et bien-être", color: "#4C9F38" },
  { number: 4, title: "Éducation de qualité", color: "#C5192D" },
  { number: 5, title: "Égalité entre les sexes", color: "#FF3A21" },
  { number: 6, title: "Eau propre et assainissement", color: "#26BDE2" },
  { number: 7, title: "Énergie propre et d'un coût abordable", color: "#FCC30B" },
  { number: 8, title: "Travail décent et croissance économique", color: "#A21942" },
  { number: 9, title: "Industrie, innovation et infrastructure", color: "#FD6925" },
  { number: 10, title: "Inégalités réduites", color: "#DD1367" },
  { number: 11, title: "Villes et communautés durables", color: "#FD9D24" },
  { number: 12, title: "Consommation et production responsables", color: "#BF8B2E" },
  { number: 13, title: "Mesures relatives à la lutte contre les changements climatiques", color: "#3F7E44" },
  { number: 14, title: "Vie aquatique", color: "#0A97D9" },
  { number: 15, title: "Vie terrestre", color: "#56C02B" },
  { number: 16, title: "Paix, justice et institutions efficaces", color: "#00689D" },
  { number: 17, title: "Partenariats pour la réalisation des objectifs", color: "#19486A" },
];

export interface Domaine {
  slug: string;
  title: string;
  icon: string;
  short: string;
  description: string;
  odds: number[];
}

export const DOMAINES: Domaine[] = [
  {
    slug: "developpement-economique-rural",
    title: "Développement Économique Rural",
    icon: "Sprout",
    short: "Favoriser l'essor économique des populations rurales.",
    description:
      "Nous œuvrons pour le développement économique et social des populations rurales, en soutenant l'entrepreneuriat local et les activités génératrices de revenus, afin de bâtir des communautés résilientes et prospères.",
    odds: [1, 8, 10],
  },
  {
    slug: "education-formation",
    title: "Éducation & Formation",
    icon: "GraduationCap",
    short: "Promouvoir l'éducation, la formation et l'autonomisation des jeunes et des femmes.",
    description:
      "L'ONG met en place des programmes de formation destinés aux jeunes et aux femmes afin de renforcer leurs compétences et de favoriser leur insertion socio-économique durable.",
    odds: [4, 5, 10],
  },
  {
    slug: "environnement-climat",
    title: "Environnement & Climat",
    icon: "Leaf",
    short: "Protéger l'environnement et lutter contre les changements climatiques.",
    description:
      "Nous menons des actions de sensibilisation et de terrain pour la préservation des écosystèmes locaux et la lutte contre les effets du changement climatique à San Pedro.",
    odds: [13, 15],
  },
  {
    slug: "sante-communautaire",
    title: "Santé Communautaire",
    icon: "HeartPulse",
    short: "Promouvoir la santé communautaire pour les populations vulnérables.",
    description:
      "L'ONG accompagne les communautés dans l'accès aux soins de santé de base et la sensibilisation aux bonnes pratiques d'hygiène et de prévention.",
    odds: [3],
  },
  {
    slug: "agriculture-durable",
    title: "Agriculture Durable",
    icon: "Wheat",
    short: "Développer des projets agricoles durables et responsables.",
    description:
      "Nous soutenons les producteurs locaux dans l'adoption de pratiques agricoles durables, respectueuses de l'environnement et génératrices de revenus stables.",
    odds: [2, 12, 15],
  },
  {
    slug: "droits-humains-inclusion",
    title: "Droits Humains & Inclusion",
    icon: "Scale",
    short: "Promouvoir les droits humains, l'égalité des chances et l'inclusion sociale.",
    description:
      "L'ONG défend l'égalité des chances et l'inclusion sociale de tous, en portant une attention particulière aux populations vulnérables et marginalisées.",
    odds: [5, 10, 16],
  },
  {
    slug: "cohesion-sociale-paix",
    title: "Cohésion Sociale & Paix",
    icon: "HandHeart",
    short: "Soutenir les initiatives de paix, de cohésion sociale et de gouvernance locale.",
    description:
      "Nous encourageons le dialogue communautaire et la gouvernance locale participative afin de renforcer la paix sociale et la cohésion entre les communautés.",
    odds: [16, 17],
  },
  {
    slug: "acces-eau-potable",
    title: "Accès à l'Eau Potable",
    icon: "Droplets",
    short: "Promouvoir la santé communautaire et l'accès à l'eau potable.",
    description:
      "L'accès à l'eau potable est un droit fondamental. Nous œuvrons pour améliorer les infrastructures et l'accès à une eau saine pour les communautés rurales.",
    odds: [6],
  },
  {
    slug: "art-culture",
    title: "Art & Culture",
    icon: "Palette",
    short: "Valoriser le patrimoine culturel et artistique local.",
    description:
      "Nous valorisons les expressions artistiques et culturelles locales comme vecteurs de cohésion sociale, d'identité et de développement durable.",
    odds: [11, 17],
  },
];

export const MISSIONS = [
  "Favoriser le développement économique et social des populations rurales",
  "Promouvoir l'éducation, la formation et l'autonomisation des jeunes et des femmes",
  "Encourager l'entrepreneuriat local et les activités génératrices de revenus",
  "Promouvoir la protection de l'environnement et la lutte contre les changements climatiques",
  "Développer des projets agricoles durables et responsables",
  "Promouvoir la santé communautaire et l'accès à l'eau potable",
  "Soutenir les initiatives de paix, de cohésion sociale et de gouvernance locale",
  "Renforcer les capacités des collectivités et organisations communautaires",
  "Promouvoir les droits humains, l'égalité des chances et l'inclusion sociale",
  "Valoriser le patrimoine culturel et artistique local au service du développement",
];

export const CADRE_LOGIQUE = [
  {
    niveau: "Impact",
    description: "Développement durable des communautés",
    indicateurs: "Taux de développement communautaire",
    sources: "Rapports annuels",
    hypotheses: "Volonté politique",
  },
  {
    niveau: "Outcomes",
    description: "Amélioration des conditions de vie des populations bénéficiaires",
    indicateurs: "Nombre de bénéficiaires",
    sources: "Enquêtes terrain",
    hypotheses: "Financement disponible",
  },
  {
    niveau: "Outputs",
    description: "Projets réalisés sur le terrain",
    indicateurs: "Nombre de projets",
    sources: "PV de réception",
    hypotheses: "Partenariats actifs",
  },
  {
    niveau: "Activités",
    description: "Formations, tombolas et événements communautaires",
    indicateurs: "Nombre d'activités",
    sources: "Feuilles de présence",
    hypotheses: "Mobilisation des membres",
  },
];

export const OBJECTIFS_TIMELINE = [
  {
    year: "2026",
    title: "Fondation de l'ONG",
    text: "Création officielle d'Ensemble pour un Monde Durable le 18 mai 2026, avec une équipe fondatrice engagée pour le développement local.",
  },
  {
    year: "2026",
    title: "Premier grand projet",
    text: "Lancement de la Tombola Solidaire, adossée à une activité sportive communautaire, pour financer des actions alignées sur les ODD.",
  },
  {
    year: "2027",
    title: "Structuration & partenariats",
    text: "Renforcement des capacités organisationnelles et recherche active de partenaires institutionnels et financiers.",
  },
  {
    year: "2027+",
    title: "Déploiement des programmes ODD",
    text: "Mise en œuvre progressive de programmes dans les 9 domaines d'intervention de l'ONG à San Pedro et ses environs.",
  },
];

export interface OrgPerson {
  name: string;
  role: string;
}

export const ORG_CHART = {
  assembleeGenerale: "Assemblée Générale",
  conseilAdministration: {
    president: "EBAKPOLE ANTOINE",
    members: [
      "STEPHANE NIANGARA",
      "WILLIAM ADEYAN JULES",
      "DESIRE COULIBALY",
      "DANGUI JEAN MICHEL",
    ] as string[],
  },
  bureauExecutif: [
    { name: "ERIC KOUASSI", role: "Président du Bureau Exécutif" },
    { name: "À nommer", role: "Vice-Président" },
    { name: "SAHIFO DANIEL", role: "Secrétaire Général" },
    { name: "À nommer", role: "Secrétaire Général Adjoint" },
    { name: "N'GUESSAN ANGELOT", role: "Trésorier Général" },
    { name: "À nommer", role: "Trésorier Général Adjoint" },
    { name: "À nommer", role: "Responsable Genre et Inclusion" },
    { name: "À nommer", role: "Responsable Projets et Partenariats" },
    { name: "N'GUESSAN SERGE ERIC KOUASSI", role: "Responsable Communication" },
  ] as OrgPerson[],
  commissariatComptes: [
    { name: "GUEU YOUH", role: "Représentant" },
    { name: "LOUIS NIANDIO", role: "Membre" },
  ] as OrgPerson[],
  comiteEthique: [
    { name: "LOUIS NIANDIO", role: "Président" },
    { name: "SAHIFO VAKOU GUY DANIEL", role: "Membre" },
  ] as OrgPerson[],
};

export const PCA_MESSAGE = `C'est avec une immense fierté et un profond engagement que je vous souhaite la bienvenue sur le portail digital de l'ONG Ensemble pour un Monde Durable. Notre organisation est née d'une conviction profonde : que le développement durable n'est pas une option, mais une nécessité impérieuse pour les communautés de San Pedro et de toute la Côte d'Ivoire. Ensemble, nous construisons un avenir meilleur, un projet à la fois, une vie transformée après l'autre. Notre engagement en faveur des Objectifs de Développement Durable n'est pas qu'un slogan — c'est l'essence même de chacune de nos actions. Je vous invite à rejoindre notre grande famille et à devenir acteur du changement.`;

export const PBE_MESSAGE = `En tant que Président du Bureau Exécutif, je suis fier de piloter une équipe engagée et compétente au service des communautés de San Pedro. Nos domaines d'intervention sont soigneusement définis pour répondre aux besoins les plus urgents de nos bénéficiaires, tout en restant ancrés dans le cadre global des Objectifs de Développement Durable. Chaque action que nous menons est une brique supplémentaire dans l'édifice d'un développement local inclusif et durable. Notre force, c'est notre collectif — membres, partenaires, bénévoles — tous unis par une même vision : Ensemble pour un Monde Durable.`;

export const TOMBOLA_PROJECT = {
  title: "Tombola Solidaire — Sport & Développement Durable",
  status: "En cours",
  description:
    "Dans le cadre de sa première grande initiative, l'ONG Ensemble pour un Monde Durable a participé à une activité sportive communautaire villageoise de Gabaguhé et de Zakéoua dans la Sous-Préfecture de Grand-Zattry, région de la Nawa. À l'occasion de cet événement, l'ONG a organisé une tombola solidaire dont les bénéfices ont été entièrement reversés à des actions alignées sur les Objectifs de Développement Durable. Ce projet illustre parfaitement l'approche de l'ONG : transformer chaque occasion de rassemblement en opportunité de développement.",
  odds: [1, 2, 3, 4, 8, 10, 11, 17],
  timeline: [
    { step: "Création de l'ONG", detail: "18 mai 2026" },
    { step: "Activité sportive", detail: "Participation communautaire à Gabaguhé et Zakéoua (Grand-Zattry)" },
    { step: "Tombola solidaire", detail: "Organisation et vente des tickets" },
    { step: "Collecte des fonds", detail: "Rassemblement des bénéfices" },
    { step: "Redistribution & impact", detail: "Financement d'actions ODD" },
  ],
};

export const TOMBOLA_ARTICLE_SLUG = "tombola-solidaire-emd-succes-odd";
