// Every public page of the site: one entry here is one prerendered file, one sitemap line and the
// head tags of that page. The paths stay flat on purpose: GitHub Pages serves /foo from foo.html
// with a 200, and relative asset URLs keep working.

export const SITE_URL = 'https://conance.io'
export const OG_IMAGE = `${SITE_URL}/og-image.png`

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
    title: 'Conance : logiciel de gestion des commissions pour CGP',
    description:
      'Conance, le back-office des commissions des cabinets de gestion de patrimoine : importez vos bordereaux, repérez ce qui manque, prévoyez ce qui va tomber.',
    updated: '2026-11-05'
  },
  {
    path: '/logiciel-gestion-commissions-cgp',
    title: 'Logiciel de gestion des commissions pour CGP | Conance',
    description:
      'Conance réunit vos bordereaux de commissions : import Excel, CSV et PDF, commissions manquantes, prévisionnel, chiffres de la FRA CIF, export comptable.',
    updated: '2026-11-05',
    crumb: 'Logiciel de gestion des commissions'
  },
  {
    path: '/comparatif-gestion-commissions-cgp',
    title: 'Commissions CGP : Excel, CRM, prestataire ou logiciel ?',
    description:
      'Tableur, CRM patrimonial, prestataire ou logiciel dédié : ce que chaque approche couvre pour gérer les commissions d’un cabinet, et quand elle convient.',
    updated: '2026-11-05',
    article: {
      headline: 'Excel, CRM, prestataire ou logiciel dédié : comment gérer les commissions d’un cabinet',
      published: '2026-11-05'
    },
    crumb: 'Comparer les approches'
  },
  {
    path: '/guides',
    title: 'Guides sur les commissions des cabinets de patrimoine | Conance',
    description:
      'Rapprocher ses bordereaux, repérer les commissions manquantes, prévoir l’année, préparer la FRA CIF : des méthodes concrètes pour les cabinets.',
    updated: '2026-11-05',
    crumb: 'Guides'
  },
  {
    path: '/guide-rapprochement-bordereaux-commissions',
    title: 'Rapprocher ses bordereaux de commissions : la méthode',
    description:
      'Comment rapprocher les bordereaux de commissions d’un cabinet de gestion de patrimoine : réunir, normaliser, rattacher aux contrats, contrôler, archiver.',
    updated: '2026-11-05',
    article: {
      headline: 'Rapprocher ses bordereaux de commissions : la méthode en cinq étapes',
      published: '2026-11-05'
    },
    crumb: 'Rapprocher ses bordereaux'
  },
  {
    path: '/guide-commissions-manquantes',
    title: 'Repérer les commissions manquantes d’un cabinet de CGP',
    description:
      'Un contrat qui ne paie plus, un droit d’entrée jamais versé, un montant qui diffère : comment repérer les commissions manquantes et quoi vérifier ensuite.',
    updated: '2026-11-05',
    article: {
      headline: 'Repérer les commissions qui ne sont pas arrivées',
      published: '2026-11-05'
    },
    crumb: 'Repérer les commissions manquantes'
  },
  {
    path: '/guide-prevision-commissions',
    title: 'Prévoir les commissions d’un cabinet de gestion de patrimoine',
    description:
      'Comment estimer ce qui reste à encaisser d’ici décembre : séparer récurrent et ponctuel, lire le rythme de chaque contrat, isoler les contrats en retard.',
    updated: '2026-11-05',
    article: {
      headline: 'Prévoir ses commissions de l’année, contrat par contrat',
      published: '2026-11-05'
    },
    crumb: 'Prévoir ses commissions'
  },
  {
    path: '/guide-chiffres-fra-cif',
    title: 'FRA CIF : préparer ses chiffres à partir des commissions',
    description:
      'Quels chiffres préparer pour la fiche de renseignements annuelle d’un CIF : rétrocessions, honoraires, courtage, clients, contrats, encours au 31 décembre.',
    updated: '2026-11-05',
    article: {
      headline: 'FRA CIF : préparer ses chiffres à partir de ses commissions',
      published: '2026-11-05'
    },
    crumb: 'Préparer les chiffres de la FRA CIF'
  },
  {
    path: '/a-propos',
    title: 'À propos de Conance et de son fondateur',
    description:
      'Conance est un logiciel français de gestion des commissions pour les cabinets de gestion de patrimoine, développé à Nantes par Elouan Bessettes.',
    updated: '2026-11-05',
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
