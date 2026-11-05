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
      'Rapprocher ses bordereaux, repérer les commissions manquantes, prévoir l’année, préparer la FRA CIF : les situations des cabinets, cas par cas.',
    updated: '2026-11-05',
    crumb: 'Guides'
  },
  {
    path: '/guide-rapprochement-bordereaux-commissions',
    title: 'Rapprocher ses bordereaux de commissions | Conance',
    description:
      'Rapprocher les bordereaux de commissions d’un cabinet de gestion de patrimoine : un format par partenaire, un bordereau sans numéro, un conseiller qui change.',
    updated: '2026-11-05',
    article: {
      headline: 'Rapprocher ses bordereaux de commissions',
      published: '2026-11-05'
    },
    crumb: 'Rapprocher ses bordereaux'
  },
  {
    path: '/guide-commissions-manquantes',
    title: 'Repérer les commissions manquantes d’un cabinet de CGP',
    description:
      'Un contrat qui ne paie plus, un droit d’entrée jamais versé, un montant qui diffère : trois cas de commissions manquantes et comment Conance les signale.',
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
      'Estimer ce qui reste à encaisser d’ici décembre à partir du rythme de chaque contrat, et savoir quelle part de ce chiffre repose sur des contrats en retard.',
    updated: '2026-11-05',
    article: {
      headline: 'Prévoir ses commissions de l’année',
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
    path: '/tarifs',
    title: 'Tarifs de Conance : gratuit, puis de 100 à 800 € par mois',
    description:
      'Conance est gratuit jusqu’à 5 000 commissions et 3 partenaires, puis de 100 à 800 € par mois selon le volume. Offres Multi-Cabinets à partir de 180 € par mois.',
    updated: '2026-11-05',
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
      'Conance est un logiciel français de gestion des commissions pour les cabinets de gestion de patrimoine, conçu et développé à Nantes.',
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
