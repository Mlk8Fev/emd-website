// Contenu issu du document « Statut et règlement intérieur » fourni par l'ONG.
// Pour modifier un texte de l'onglet « Statuts & Règlement », éditer ce fichier.

export type StatutBlock =
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "defs"; items: { term: string; paragraphs: string[] }[] }
  | { type: "steps"; items: string[] };

export interface StatutSection {
  id: string;
  title: string;
  blocks: StatutBlock[];
}

export const STATUTS_TAGLINE = "Agir ensemble aujourd’hui pour un avenir durable demain.";

export const STATUTS_SECTIONS: StatutSection[] = [
  {
    id: "qui-sommes-nous",
    title: "Qui sommes-nous ?",
    blocks: [
      {
        type: "p",
        text: "Ensemble pour un Monde Durable est une Organisation Non Gouvernementale ivoirienne, apolitique, non confessionnelle, non syndicale et à but non lucratif, dont le siège est établi à San Pedro, Côte d’Ivoire.",
      },
      {
        type: "p",
        text: "Créée en 2026, l’ONG est née de la volonté de contribuer au développement durable des territoires et des communautés, en accordant une attention particulière aux populations rurales et aux zones confrontées à des difficultés économiques et sociales.",
      },
      {
        type: "p",
        text: "Son action repose sur une conviction : le développement durable ne peut être véritablement atteint que lorsque les communautés sont pleinement associées à la conception et à la mise en œuvre des solutions qui les concernent.",
      },
      {
        type: "p",
        text: "L’ONG entend ainsi favoriser des initiatives concrètes en faveur du développement économique et social, de l’éducation, de l’autonomisation, de la protection de l’environnement, de la santé, de la cohésion sociale et de la gouvernance locale.",
      },
      {
        type: "p",
        text: "Cette orientation est directement consacrée par ses statuts, qui placent le développement local et durable et la mise en œuvre des Objectifs de Développement Durable au cœur de son objet.",
      },
    ],
  },
  {
    id: "vision",
    title: "Notre vision",
    blocks: [
      {
        type: "quote",
        text: "Des communautés autonomes, inclusives et résilientes, actrices de leur propre développement durable.",
      },
      {
        type: "p",
        text: "Ensemble pour un Monde Durable souhaite contribuer à l’émergence de communautés capables d’identifier leurs besoins, de mobiliser leurs ressources et de construire des réponses durables aux défis auxquels elles sont confrontées.",
      },
      { type: "p", text: "Notre vision repose notamment sur :" },
      {
        type: "list",
        items: [
          "des territoires où les populations disposent de meilleures opportunités économiques et sociales ;",
          "une jeunesse formée, responsabilisée et capable d’entreprendre ;",
          "des femmes davantage autonomisées et représentées dans les processus de décision ;",
          "des communautés engagées dans la protection de leur environnement ;",
          "des populations bénéficiant d’un meilleur accès aux services essentiels ;",
          "des communautés capables de participer aux décisions qui concernent leur avenir.",
        ],
      },
    ],
  },
  {
    id: "mission",
    title: "Notre mission",
    blocks: [
      {
        type: "p",
        text: "La mission d’Ensemble pour un Monde Durable est de concevoir, soutenir et mettre en œuvre des initiatives contribuant au développement local et durable des communautés, particulièrement dans les zones rurales et défavorisées.",
      },
      {
        type: "p",
        text: "L’ONG intervient notamment dans les domaines de l’éducation, de la formation, de l’autonomisation économique, de l’agriculture durable, de l’environnement, de la santé communautaire, de l’accès à l’eau, de la cohésion sociale, de la gouvernance locale, des droits humains et de l’inclusion.",
      },
      {
        type: "p",
        text: "Les statuts identifient dix orientations spécifiques, allant du développement économique rural à la protection de l’environnement, en passant par l’éducation, l’entrepreneuriat, l’agriculture durable, la santé, la paix, le renforcement des capacités, les droits humains et les ODD.",
      },
    ],
  },
  {
    id: "domaines",
    title: "Nos domaines d’action",
    blocks: [
      {
        type: "defs",
        items: [
          {
            term: "Développement économique local",
            paragraphs: [
              "Nous accompagnons les initiatives susceptibles de renforcer les capacités économiques des communautés et de créer des opportunités durables.",
              "L’ONG entend notamment promouvoir l’entrepreneuriat local et les activités génératrices de revenus.",
            ],
          },
          {
            term: "Éducation et formation",
            paragraphs: [
              "L’éducation constitue un levier essentiel de transformation sociale.",
              "Nos interventions peuvent porter sur l’accès à l’éducation, la formation, le renforcement des compétences et l’accompagnement des jeunes et des femmes.",
            ],
          },
          {
            term: "Jeunesse et autonomisation",
            paragraphs: [
              "Nous considérons les jeunes comme des acteurs du développement, et non comme de simples bénéficiaires.",
              "L’ONG entend favoriser leur formation, leur participation aux initiatives communautaires et leur accès à des opportunités économiques.",
            ],
          },
          {
            term: "Femmes, genre et inclusion",
            paragraphs: [
              "L’organisation accorde une attention particulière à l’égalité des chances, à la participation des femmes et à l’inclusion des groupes vulnérables.",
              "Le règlement intérieur consacre notamment l’égalité des chances, la non-discrimination, la promotion du leadership féminin, la participation des jeunes et l’inclusion des personnes vulnérables.",
            ],
          },
          {
            term: "Agriculture et développement rural",
            paragraphs: [
              "L’ONG entend soutenir des initiatives agricoles durables et responsables, susceptibles de contribuer à l’amélioration des conditions de vie des populations rurales.",
            ],
          },
          {
            term: "Environnement et changement climatique",
            paragraphs: [
              "La protection de l’environnement et la lutte contre les changements climatiques constituent un axe important de l’intervention de l’ONG.",
              "Nous souhaitons promouvoir des pratiques permettant de concilier développement économique, préservation des ressources naturelles et résilience des territoires.",
            ],
          },
          {
            term: "Santé et accès à l’eau",
            paragraphs: [
              "L’ONG souhaite contribuer à l’amélioration de la santé communautaire et à l’accès des populations à l’eau potable.",
            ],
          },
          {
            term: "Paix, cohésion sociale et gouvernance locale",
            paragraphs: [
              "Nos interventions peuvent également contribuer au rapprochement des communautés, à la prévention des tensions, au dialogue et au renforcement de la participation citoyenne.",
            ],
          },
          {
            term: "Droits humains et inclusion sociale",
            paragraphs: [
              "L’ONG entend promouvoir les droits humains, l’égalité des chances et l’inclusion sociale dans l’ensemble de ses interventions.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "odd",
    title: "Notre approche : les ODD au service des communautés",
    blocks: [
      {
        type: "p",
        text: "Les Objectifs de Développement Durable constituent un cadre transversal de référence pour l’action de l’ONG.",
      },
      {
        type: "p",
        text: "L’approche retenue consiste à partir des réalités locales pour identifier les objectifs auxquels chaque intervention peut contribuer.",
      },
      {
        type: "p",
        text: "Ainsi, une action destinée à favoriser la scolarisation peut contribuer à l’ODD 4 relatif à l’éducation de qualité ; une initiative d’autonomisation économique peut contribuer aux ODD liés à la pauvreté, au travail décent et à la réduction des inégalités ; tandis qu’un projet environnemental peut contribuer aux objectifs relatifs à la protection des écosystèmes et à la lutte contre les changements climatiques.",
      },
      {
        type: "p",
        text: "Cette approche permet d’éviter de considérer les ODD comme de simples références institutionnelles : ils deviennent un cadre permettant de donner du sens, de mesurer et de valoriser les actions réalisées sur le terrain.",
      },
    ],
  },
  {
    id: "valeurs",
    title: "Nos valeurs",
    blocks: [
      {
        type: "p",
        text: "L’action d’Ensemble pour un Monde Durable repose sur un ensemble de principes qui doivent guider aussi bien ses dirigeants que ses membres et ses partenaires.",
      },
      {
        type: "defs",
        items: [
          { term: "Intégrité", paragraphs: ["Agir avec honnêteté, probité et responsabilité."] },
          { term: "Transparence", paragraphs: ["Assurer une gestion claire et accessible des ressources et des décisions."] },
          { term: "Solidarité", paragraphs: ["Favoriser l’entraide et la mobilisation collective au bénéfice des communautés."] },
          { term: "Responsabilité", paragraphs: ["Assumer les conséquences de ses décisions et de ses actions."] },
          { term: "Équité", paragraphs: ["Garantir un traitement juste et une attention particulière aux personnes et groupes vulnérables."] },
          { term: "Respect", paragraphs: ["Respecter les personnes, les communautés, les institutions et l’environnement."] },
          { term: "Non-discrimination", paragraphs: ["Garantir l’égalité des chances indépendamment des différences individuelles ou sociales."] },
          { term: "Redevabilité", paragraphs: ["Rendre compte de l’utilisation des ressources et des résultats obtenus."] },
        ],
      },
      { type: "p", text: "Ces valeurs sont expressément reprises dans le règlement intérieur de l’organisation." },
    ],
  },
  {
    id: "gouvernance",
    title: "Une gouvernance fondée sur la séparation des responsabilités",
    blocks: [
      {
        type: "p",
        text: "L’ONG a choisi de structurer sa gouvernance autour d’une distinction claire entre orientation stratégique, gestion opérationnelle et contrôle.",
      },
      {
        type: "defs",
        items: [
          {
            term: "L’Assemblée Générale",
            paragraphs: [
              "Elle constitue l’instance collective de décision des membres et intervient notamment dans l’adoption des textes fondamentaux, l’élection des organes et les grandes décisions concernant l’organisation.",
            ],
          },
          {
            term: "Le Conseil d’Administration",
            paragraphs: [
              "Le Conseil d’Administration assure principalement l’orientation stratégique, la supervision et le contrôle de l’organisation.",
              "Il comprend entre cinq et onze administrateurs élus pour cinq ans, renouvelables deux fois, sans possibilité d’exercer plus de trois mandats consécutifs.",
            ],
          },
          {
            term: "Le Bureau Exécutif",
            paragraphs: [
              "Le Bureau Exécutif assure la gestion opérationnelle et quotidienne de l’ONG et met en œuvre les orientations arrêtées par les instances compétentes.",
              "Il comprend notamment un Président, un Vice-président, un Secrétaire Général, un Secrétaire Général Adjoint, un Trésorier Général, un Trésorier Général Adjoint ainsi que des responsables chargés du genre et de l’inclusion, des projets et partenariats et de la communication.",
            ],
          },
          {
            term: "Le Commissariat aux comptes",
            paragraphs: [
              "Le contrôle financier est assuré de manière indépendante par les Commissaires aux comptes.",
              "Ils sont élus pour cinq ans et ont notamment pour mission de vérifier les comptes, contrôler la conformité des dépenses, produire des rapports indépendants et alerter les organes compétents en cas d’irrégularités.",
            ],
          },
          {
            term: "Le Comité d’Éthique et de Gouvernance",
            paragraphs: [
              "L’organisation s’est également dotée d’un mécanisme spécifique consacré à l’éthique et à la gouvernance.",
              "Ce comité intervient notamment sur les questions relatives à l’intégrité, à la prévention des conflits d’intérêts, à la lutte contre la corruption, au blanchiment de capitaux, à l’égalité des chances et au respect des procédures internes.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "gestion",
    title: "Une organisation engagée pour une gestion responsable",
    blocks: [
      {
        type: "p",
        text: "La confiance des communautés et des partenaires constitue un élément essentiel de notre action.",
      },
      {
        type: "p",
        text: "Pour cette raison, les textes de l’ONG prévoient plusieurs mécanismes de sécurisation de sa gouvernance et de ses ressources.",
      },
      {
        type: "p",
        text: "Les ressources doivent être licites, traçables et transparentes et exclusivement consacrées à la réalisation de l’objet de l’organisation. Les dépenses doivent être autorisées et justifiées conformément aux procédures internes.",
      },
      {
        type: "p",
        text: "Le règlement intérieur prévoit également une double signature pour les opérations financières importantes, la tenue régulière de la comptabilité ainsi que la possibilité de contrôles et d’audits.",
      },
      {
        type: "p",
        text: "L’ONG affirme par ailleurs une politique de tolérance zéro à l’égard de la corruption, de la fraude, du détournement et du blanchiment de capitaux.",
      },
    ],
  },
  {
    id: "protection",
    title: "Protéger les bénéficiaires",
    blocks: [
      {
        type: "p",
        text: "Parce que les projets de développement concernent souvent des personnes vulnérables, l’ONG accorde une importance particulière à leur protection.",
      },
      { type: "p", text: "Les textes internes prévoient notamment des dispositions relatives à la protection :" },
      {
        type: "list",
        items: ["des enfants ;", "des femmes ;", "des personnes vulnérables ;", "des communautés bénéficiaires."],
      },
      {
        type: "p",
        text: "Toute forme d’exploitation, d’abus ou de harcèlement est interdite. Cette exigence doit guider la conception, la mise en œuvre et l’évaluation de chaque projet.",
      },
    ],
  },
  {
    id: "apolitique",
    title: "Une ONG apolitique",
    blocks: [
      { type: "p", text: "Ensemble pour un Monde Durable est strictement apolitique." },
      {
        type: "p",
        text: "L’organisation ne peut soutenir un parti politique, financer une activité partisane ou utiliser ses ressources à des fins électorales.",
      },
      {
        type: "p",
        text: "Cette neutralité permet à l’ONG de travailler avec l’ensemble des acteurs du développement dans le respect de ses missions et de ses valeurs.",
      },
      {
        type: "p",
        text: "Les membres demeurent naturellement libres d’exercer leurs droits civiques à titre personnel, sans engager l’organisation.",
      },
    ],
  },
  {
    id: "methode",
    title: "Notre méthode d’intervention",
    blocks: [
      { type: "p", text: "Notre approche repose sur cinq principes :" },
      { type: "steps", items: ["Écouter", "Comprendre", "Co-construire", "Agir", "Mesurer"] },
      {
        type: "p",
        text: "Nous privilégions ainsi une intervention qui part des réalités du terrain et associe les communautés concernées.",
      },
      {
        type: "p",
        text: "L’objectif n’est pas seulement de réaliser une activité, mais de rechercher un changement durable et mesurable.",
      },
      {
        type: "p",
        text: "Chaque projet a vocation à être inscrit dans une logique de résultats, avec des objectifs identifiés, des activités adaptées, des bénéficiaires clairement définis et, lorsque cela est pertinent, des indicateurs permettant d’apprécier les résultats obtenus.",
      },
    ],
  },
  {
    id: "partenaires",
    title: "Nos partenaires",
    blocks: [
      { type: "p", text: "Le développement durable repose sur la collaboration." },
      {
        type: "p",
        text: "Ensemble pour un Monde Durable souhaite construire des partenariats avec :",
      },
      {
        type: "list",
        items: [
          "les collectivités territoriales ;",
          "les administrations publiques ;",
          "les organisations de la société civile ;",
          "les organisations communautaires ;",
          "les entreprises privées ;",
          "les partenaires techniques et financiers ;",
          "les établissements d’enseignement et de recherche ;",
          "les acteurs locaux et communautaires.",
        ],
      },
      {
        type: "p",
        text: "L’ONG peut également créer des coordinations régionales, représentations locales et antennes communales ou villageoises, sous l’autorité du Bureau Exécutif.",
      },
    ],
  },
  {
    id: "engagement",
    title: "Notre engagement",
    blocks: [
      { type: "quote", text: "Nous croyons qu’un monde durable ne se décrète pas : il se construit." },
      {
        type: "p",
        text: "Il se construit avec les communautés, avec les jeunes, avec les femmes, avec les collectivités, avec les entreprises, avec les organisations de la société civile et avec tous ceux qui souhaitent transformer durablement leur environnement.",
      },
      {
        type: "p",
        text: "Ensemble pour un Monde Durable entend apporter sa contribution à cette construction, en privilégiant l’action concrète, la proximité, la transparence, la responsabilité et l’impact.",
      },
    ],
  },
];

export const STATUTS_CTA = {
  title: "Vous souhaitez agir avec nous ?",
  paragraphs: [
    "Vous êtes une entreprise, une institution, une collectivité, une organisation ou un particulier et vous souhaitez soutenir une initiative ?",
    "Nous sommes ouverts aux partenariats, aux appuis techniques, aux contributions financières et aux collaborations permettant de développer des projets au bénéfice des communautés.",
  ],
  closing: "Ensemble, transformons les défis locaux en opportunités durables.",
};
