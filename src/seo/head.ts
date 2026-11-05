import { OG_IMAGE, canonicalUrl, findPage, type PageSeo } from './pages'
import { pageSchema } from './schema'

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// The head of a prerendered page, between the seo markers of index.html
export function headTags(page: PageSeo): string {
  const title = escapeHtml(page.title)
  const description = escapeHtml(page.description)
  const url = canonicalUrl(page)
  // "<" cannot end the script early once escaped; JSON.parse-compatible for any crawler
  const schema = JSON.stringify(pageSchema(page)).replace(/</g, '\\u003c')
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:site_name" content="Conance" />`,
    `<meta property="og:locale" content="fr_FR" />`,
    `<meta property="og:type" content="${page.article ? 'article' : 'website'}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="627" />`,
    `<meta property="og:image:alt" content="Conance : simplifiez la gestion de vos commissions" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<script type="application/ld+json">${schema}</script>`
  ].join('\n  ')
}

function setMeta(selector: string, attribute: string, value: string) {
  document.head.querySelector(selector)?.setAttribute(attribute, value)
}

// In-app navigation keeps the tab title and the shared tags in line with the page shown
export function applyPageHead(path: string) {
  const page = findPage(path)
  if (!page) return
  document.title = page.title
  setMeta('meta[name="description"]', 'content', page.description)
  setMeta('link[rel="canonical"]', 'href', canonicalUrl(page))
  setMeta('meta[property="og:title"]', 'content', page.title)
  setMeta('meta[property="og:description"]', 'content', page.description)
  setMeta('meta[property="og:url"]', 'content', canonicalUrl(page))
}
