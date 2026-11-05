// Runs after the client and server builds: writes one real HTML file per public page, so that every
// URL answers 200 with its full text, including for AI crawlers that do not execute JavaScript.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const serverDist = resolve(root, 'dist-ssr')

const { pages, canonicalUrl, headTags, renderPage } = await import(
  pathToFileURL(resolve(serverDist, 'entry-server.js')).href
)

const template = readFileSync(resolve(dist, 'index.html'), 'utf8')
const seoBlock = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/
const appBlock = '<div id="app"></div>'
if (!seoBlock.test(template) || !template.includes(appBlock)) {
  throw new Error('index.html no longer has the seo markers or the empty #app element')
}

for (const page of pages) {
  const body = await renderPage(page.path)
  // Function replacers: a "$" in the content must stay literal
  const html = template
    .replace(seoBlock, () => headTags(page))
    .replace(appBlock, () => `<div id="app">${body}</div>`)
  const file = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`
  const target = resolve(dist, file)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, html)
  console.log(`✓ ${file} (${Math.round(html.length / 1024)} Ko)`)
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages.map((page) => `  <url><loc>${canonicalUrl(page)}</loc><lastmod>${page.updated}</lastmod></url>`),
  '</urlset>',
  ''
].join('\n')
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap)
console.log(`✓ sitemap.xml (${pages.length} pages)`)

rmSync(serverDist, { recursive: true, force: true })
