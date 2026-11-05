import { faq } from '../content/faq'
import { OG_IMAGE, SITE_URL, canonicalUrl, type PageSeo } from './pages'

// Structured data of each page. Everything here must also be visible on the page, and never carries
// a rating or a review: the site has no real customer review to show yet.

const ORGANIZATION_ID = `${SITE_URL}/#organization`
const FOUNDER_ID = `${SITE_URL}/#founder`
// "Conance" is shared with unrelated companies abroad: these links tell engines which one this is
const LINKEDIN_PAGE = 'https://www.linkedin.com/company/110153499/'
const LINKEDIN_FOUNDER = 'https://www.linkedin.com/in/elouanb/'

const organization = {
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: 'Conance',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/favicon/web-app-manifest-512x512.png`,
  description: 'Éditeur français du logiciel de gestion des commissions pour cabinets de gestion de patrimoine.',
  email: 'contact@conance.io',
  telephone: '+33699964697',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4 Quai François Mitterrand',
    postalCode: '44200',
    addressLocality: 'Nantes',
    addressCountry: 'FR'
  },
  identifier: { '@type': 'PropertyValue', propertyID: 'SIRET', value: '99150569400018' },
  founder: { '@id': FOUNDER_ID },
  sameAs: [LINKEDIN_PAGE]
}

const founder = {
  '@type': 'Person',
  '@id': FOUNDER_ID,
  name: 'Elouan Bessettes',
  url: `${SITE_URL}/a-propos`,
  jobTitle: 'Fondateur de Conance',
  worksFor: { '@id': ORGANIZATION_ID },
  sameAs: [LINKEDIN_FOUNDER]
}

function offer(name: string, price: number, description: string) {
  return { '@type': 'Offer', name, price, priceCurrency: 'EUR', description, url: `${SITE_URL}/#tarifs` }
}

const software = {
  '@type': 'SoftwareApplication',
  '@id': `${SITE_URL}/#software`,
  name: 'Conance',
  url: `${SITE_URL}/`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Gestion des commissions',
  operatingSystem: 'Web',
  inLanguage: 'fr',
  image: OG_IMAGE,
  description:
    'Logiciel en ligne de gestion des commissions pour cabinets de gestion de patrimoine : import des bordereaux Excel, CSV et PDF, base consolidée, commissions manquantes, prévisionnel, chiffres de la FRA CIF et export comptable.',
  featureList: [
    'Import des bordereaux de commissions Excel, CSV, OpenDocument et PDF',
    'Détection des commissions manquantes',
    'Prévisionnel des commissions de l’année',
    'Analyse par conseiller, partenaire, produit, client, nature, activité et entité',
    'Préparation des chiffres de la FRA CIF',
    'Export comptable FEC et CSV',
    'Double authentification, rôles et permissions',
    'Données hébergées en France'
  ],
  publisher: { '@id': ORGANIZATION_ID },
  offers: [
    offer('Gratuit', 0, '5 000 commissions, 3 partenaires, 3 utilisateurs, par mois'),
    offer('Starter', 100, '500 000 commissions, 10 partenaires, 3 utilisateurs, par mois'),
    offer('Standard', 200, '2 millions de commissions, 25 partenaires, 10 utilisateurs, par mois'),
    offer('Premium', 400, '8 millions de commissions, 75 partenaires, 25 utilisateurs, par mois'),
    offer('Entreprise', 800, '20 millions de commissions, partenaires illimités, 100 utilisateurs, par mois'),
    offer('Groupe Starter', 180, 'Multi-Cabinets, 3 cabinets inclus, par mois'),
    offer('Groupe Standard', 550, 'Multi-Cabinets, 10 cabinets inclus, par mois'),
    offer('Groupe Premium', 1000, 'Multi-Cabinets, 25 cabinets inclus, par mois')
  ]
}

const faqPage = {
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#faq`,
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
}

function breadcrumb(page: PageSeo) {
  const guide = page.path.startsWith('/guide-')
  const trail = [
    { name: 'Conance', url: `${SITE_URL}/` },
    ...(guide ? [{ name: 'Guides', url: `${SITE_URL}/guides` }] : []),
    { name: page.crumb ?? page.title, url: canonicalUrl(page) }
  ]
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((step, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: step.name,
      item: step.url
    }))
  }
}

function article(page: PageSeo) {
  return {
    '@type': 'Article',
    headline: page.article!.headline,
    description: page.description,
    url: canonicalUrl(page),
    mainEntityOfPage: canonicalUrl(page),
    inLanguage: 'fr',
    image: OG_IMAGE,
    datePublished: page.article!.published,
    dateModified: page.updated,
    author: { '@id': FOUNDER_ID },
    publisher: { '@id': ORGANIZATION_ID }
  }
}

export function pageSchema(page: PageSeo): object {
  const graph: object[] = [organization, founder]
  if (page.path === '/') {
    graph.push(software, faqPage, { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: 'Conance', inLanguage: 'fr', publisher: { '@id': ORGANIZATION_ID } })
  }
  if (page.path === '/logiciel-gestion-commissions-cgp') graph.push(software)
  if (page.path === '/a-propos') {
    graph.push({ '@type': 'AboutPage', url: canonicalUrl(page), name: page.title, inLanguage: 'fr', about: { '@id': ORGANIZATION_ID } })
  }
  if (page.crumb) graph.push(breadcrumb(page))
  if (page.article) graph.push(article(page))
  return { '@context': 'https://schema.org', '@graph': graph }
}
