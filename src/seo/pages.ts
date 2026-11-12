// Every public page of the site: one entry here is one prerendered file, one sitemap line and the
// head tags of that page. The paths stay flat on purpose: GitHub Pages serves /foo from foo.html
// with a 200, and relative asset URLs keep working.

export const SITE_URL = 'https://conance.io'
// Bump ?v= when the image changes: LinkedIn and others cache it by its address
export const OG_IMAGE = `${SITE_URL}/og-image.png?v=2`

export interface PageSeo {
  path: string
  title: string
  description: string
  // ISO date of the last content change, used by the sitemap and the article schema
  updated: string
  // Guides and the comparison are articles for search engines
  article?: { headline: string; published: string }
  // Label in the breadcrumb of content pages
  crumb?: string
}

export const pages: PageSeo[] = [
  {
    path: '/',
    title: 'Conance | Simplifiez la gestion de vos commissions',
    description:
      'Logiciel de gestion des commissions pour les cabinets de conseil en gestion de patrimoine (CGP) : importez vos bordereaux, contrôlez l’exhaustivité de vos commissions, maîtrisez votre prévisionnel.',
    updated: '2026-11-12'
  },
  {
    path: '/comparatif-gestion-commissions-cgp',
    title: 'Commissions CGP : Excel, CRM, prestataire ou logiciel ?',
    description:
      'Tableur, CRM patrimonial, prestataire ou logiciel dédié : ce que chaque approche couvre pour gérer les commissions d’un cabinet, et quand elle convient.',
    updated: '2026-11-12',
    article: {
      headline: 'Excel, CRM, prestataire ou logiciel dédié : comment gérer les commissions d’un cabinet',
      published: '2026-11-05'
    },
    crumb: 'Comparer les approches'
  },
  {
    path: '/guides',
    title: 'Guides sur les commissions des CGP | Conance',
    description:
      'Rapprocher ses bordereaux, contrôler l’exhaustivité de ses commissions, établir son prévisionnel, préparer la FRA CIF : les situations des cabinets, cas par cas.',
    updated: '2026-11-12',
    crumb: 'Guides'
  },
  {
    path: '/guide-rapprochement-bordereaux-commissions',
    title: 'Rapprocher ses bordereaux de commissions | Conance',
    description:
      'Rapprocher les bordereaux de commissions d’un cabinet de conseil en gestion de patrimoine : un format par partenaire, un bordereau sans numéro, un conseiller qui change.',
    updated: '2026-11-12',
    article: {
      headline: 'Rapprocher ses bordereaux de commissions',
      published: '2026-11-05'
    },
    crumb: 'Rapprocher ses bordereaux'
  },
  {
    path: '/guide-commissions-manquantes',
    title: 'Contrôler l’exhaustivité des commissions d’un cabinet de CGP',
    description:
      'Un contrat sans versement, un droit d’entrée non perçu, un montant différent de l’attendu : trois cas de commissions non perçues et leur détection avec Conance.',
    updated: '2026-11-12',
    article: {
      headline: 'Contrôler l’exhaustivité de ses commissions',
      published: '2026-11-05'
    },
    crumb: 'Contrôler l’exhaustivité'
  },
  {
    path: '/guide-prevision-commissions',
    title: 'Établir le prévisionnel de commissions d’un cabinet de CGP',
    description:
      'Estimer le reste à encaisser jusqu’au 31 décembre à partir de la périodicité de chaque contrat, et la part exposée à des retards de versement.',
    updated: '2026-11-12',
    article: {
      headline: 'Établir son prévisionnel de commissions',
      published: '2026-11-05'
    },
    crumb: 'Établir son prévisionnel'
  },
  {
    path: '/guide-chiffres-fra-cif',
    title: 'FRA CIF : préparer ses chiffres à partir des commissions',
    description:
      'Quels chiffres préparer pour la fiche de renseignements annuelle d’un CIF : rétrocessions, honoraires, courtage, clients, contrats, encours au 31 décembre.',
    updated: '2026-11-12',
    article: {
      headline: 'FRA CIF : préparer ses chiffres à partir de ses commissions',
      published: '2026-11-05'
    },
    crumb: 'Préparer les données de la FRA CIF'
  },
  {
    path: '/tarifs',
    title: 'Tarifs de Conance : gratuit, puis de 100 à 800 € par mois',
    description:
      'Conance est gratuit jusqu’à 5 000 commissions et 3 partenaires, puis de 100 à 800 € par mois selon le volume. Offres Multi-Cabinets à partir de 180 € par mois.',
    updated: '2026-11-12',
    crumb: 'Tarifs'
  },
  {
    path: '/contact',
    title: 'Contacter Conance | Logiciel de gestion des commissions',
    description:
      'Une question sur Conance ou une démonstration : écrivez-nous, c’est celui qui développe le logiciel de gestion des commissions qui vous répond.',
    updated: '2026-11-05',
    crumb: 'Contact'
  },
  {
    path: '/a-propos',
    title: 'À propos de Conance',
    description:
      'Conance est un logiciel français de gestion des commissions pour les cabinets de conseil en gestion de patrimoine, conçu et développé à Nantes.',
    updated: '2026-11-12',
    crumb: 'À propos'
  },
  {
    path: '/cgu',
    title: 'Conditions générales d’utilisation | Conance',
    description: 'Les conditions générales d’utilisation de Conance, logiciel de gestion des commissions.',
    updated: '2026-10-20'
  },
  {
    path: '/mentions-legales',
    title: 'Mentions légales | Conance',
    description: 'Les mentions légales de Conance : éditeur, directeur de la publication, hébergeurs.',
    updated: '2026-10-20'
  },
  {
    path: '/politique-confidentialite',
    title: 'Politique de confidentialité | Conance',
    description: 'Comment Conance traite et protège vos données personnelles et celles de votre cabinet.',
    updated: '2026-10-20'
  }
]

export function findPage(path: string): PageSeo | undefined {
  return pages.find((page) => page.path === path)
}

export function canonicalUrl(page: PageSeo): string {
  return page.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${page.path}`
}
