import { renderToString } from 'vue/server-renderer'
import { createMemoryHistory } from 'vue-router'

import { createConanceApp } from './app'

export { pages, canonicalUrl } from './seo/pages'
export { headTags } from './seo/head'

// HTML of one page, used by scripts/prerender.mjs: crawlers that do not run JavaScript read this
export async function renderPage(path: string): Promise<string> {
  const { app, router } = createConanceApp(createMemoryHistory())
  await router.push(path)
  await router.isReady()
  return renderToString(app)
}
