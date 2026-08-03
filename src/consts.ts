export const SITE = {
  name: 'assurance-immeuble.fr',
  legalName: 'Allianz Frédéric Pegon',
  url: 'https://www.assurance-immeuble.fr',
  email: 'pegon.macon@allianz.fr',
  phone: '03 85 22 99 00',
  address: '26 rue Gambetta, 71000 Mâcon',
  hours: 'Lun–Ven : 9h-12h / 14h-18h',
  orias: '07 021 339',
  siret: '430 209 353 00019',
  rcs: 'RCS Mâcon 430 290 353',
  tagline: "Agence Allianz spécialisée en assurance d'immeuble",
  description:
    "Assurance multirisque immeuble et PNO pour copropriétés, syndics, propriétaires bailleurs, monopropriétés et SCI, partout en France. Devis en ligne, réponse sous 24 h.",
};

export const NAV = [
  { label: 'Accueil', href: '/' },
  { label: 'Multirisque immeuble', href: '/multirisque-immeuble' },
  { label: 'PNO', href: '/pno' },
  { label: 'Garanties', href: '/garanties' },
  { label: 'Sinistres', href: '/sinistres' },
  { label: 'Guides', href: '/blog' },
  { label: 'À propos', href: '/a-propos' },
];

export const QUOTE_HREF = '/demande-devis';

export type Solution = {
  title: string;
  icon: string;
  blurb: string;
  points: string[];
  href?: string;
};

export const SOLUTIONS: Solution[] = [
  {
    title: 'Copropriétés',
    icon: 'ti-building-community',
    blurb: "Assurance multirisque pour les copropriétés gérées par un syndic professionnel ou bénévole.",
    points: [
      "Parties communes, ravalement, ascenseurs",
      "RC propriétaire d'immeuble jusqu'à 6 M€",
      "Défense pénale et recours",
      "Protection juridique en option",
    ],
    href: '/multirisque-immeuble',
  },
  {
    title: 'Propriétaires bailleurs (PNO)',
    icon: 'ti-key',
    blurb: "Assurance PNO propriétaire non occupant pour location vide, meublée, LMNP ou saisonnière.",
    points: [
      "Vacance locative couverte",
      "Défaut d'assurance du locataire",
      "Recours des voisins et des tiers",
      "Contenu propriétaire optionnel",
    ],
    href: '/pno',
  },
  {
    title: 'Monopropriétés',
    icon: 'ti-building-skyscraper',
    blurb: "Immeuble de rapport détenu par un seul propriétaire, en direct ou via une société.",
    points: [
      "Bâtiment, dépendances, aménagements extérieurs",
      "Perte de loyers jusqu'à 2 ans",
      "Effondrement de bâtiment",
      "Activités commerciales en rez-de-chaussée",
    ],
    href: '/multirisque-immeuble',
  },
  {
    title: 'SCI et sociétés immobilières',
    icon: 'ti-briefcase',
    blurb: "SCI familiale, SCI de rendement, holding patrimoniale : contrat au nom de la société.",
    points: [
      "Souscripteur personne morale",
      "Chacun des porteurs de parts assuré",
      "Immeuble unique ou portefeuille",
      "Gestion centralisée des sinistres",
    ],
    href: '/multirisque-immeuble',
  },
];

export const WHY_US = [
  {
    icon: 'ti-user-check',
    title: 'Courtier indépendant',
    text: "Nous mettons en concurrence plusieurs assureurs pour trouver le meilleur rapport garanties / cotisation.",
  },
  {
    icon: 'ti-clock-hour-4',
    title: 'Devis sous 24 h',
    text: 'Un tarif ferme et personnalisé, sans engagement, à partir d\'un formulaire simple.',
  },
  {
    icon: 'ti-shield-half',
    title: 'Spécialistes de l\'immeuble',
    text: 'Copropriétés, PNO, SCI, monopropriétés : nous ne faisons que ça, tous les jours.',
  },
  {
    icon: 'ti-lifebuoy',
    title: 'Sinistres accompagnés',
    text: "Déclaration, relations avec l'expert, indemnisation : nous suivons chaque dossier jusqu'au bout.",
  },
];

export const GUARANTEES = [
  { icon: 'ti-flame', title: 'Incendie et risques annexes', text: "Combustion, explosion, chute de la foudre, choc de véhicule, fumées." },
  { icon: 'ti-droplet', title: 'Dégât des eaux', text: "Fuites, ruptures, gel de canalisations, débordements, recherche de fuite." },
  { icon: 'ti-cloud-storm', title: 'Événement climatique', text: "Vent au-delà de 100 km/h, grêle, poids de la neige, avalanche." },
  { icon: 'ti-alert-triangle', title: 'Catastrophes naturelles et technologiques', text: "Prise en charge dès la publication de l'arrêté interministériel." },
  { icon: 'ti-lock-open', title: 'Vol, vandalisme, émeute', text: "Effraction, actes de sabotage, dégradations dans les parties communes." },
  { icon: 'ti-window', title: 'Bris de glace', text: "Baies vitrées, vérandas, produits verriers des parties communes." },
  { icon: 'ti-bolt', title: 'Dommage électrique et bris de machine', text: "Ascenseurs, chaudières, portes automatiques, panneaux photovoltaïques." },
  { icon: 'ti-scale', title: "Responsabilité civile propriétaire d'immeuble", text: "Jusqu'à 6 M€ par sinistre pour les dommages causés aux tiers." },
  { icon: 'ti-gavel', title: 'Défense pénale et recours', text: "Prise en charge des honoraires d'avocat et d'expert." },
  { icon: 'ti-building-bridge', title: 'Effondrement de bâtiment', text: "Jusqu'à 3 M€ pour les fondations, la structure et les frais de démolition." },
  { icon: 'ti-file-shield', title: 'Protection juridique', text: "Litiges avec entreprises, voisins, administrations, locataires." },
  { icon: 'ti-solar-panel', title: 'Installation d\'énergie renouvelable', text: "Panneaux solaires thermiques et photovoltaïques intégrés à l'immeuble." },
];

export const STATS = [
  { value: '30 ans', label: "d'expérience en assurance d'immeuble" },
  { value: '6 M€', label: 'de plafond RC propriétaire' },
  { value: '24 h', label: 'pour recevoir votre devis' },
  { value: '96 %', label: 'de clients qui nous recommandent' },
];
