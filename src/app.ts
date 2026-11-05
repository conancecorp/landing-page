import { createApp } from 'vue'
import { createRouter, type RouterHistory, type RouteRecordRaw } from 'vue-router'

import motion from './motion'
import App from './App.vue'
import Home from './views/Home.vue'
import CGU from './views/CGU.vue'
import MentionsLegales from './views/MentionsLegales.vue'
import PolitiqueConfidentialite from './views/PolitiqueConfidentialite.vue'
import SoftwarePage from './views/content/SoftwarePage.vue'
import ComparisonPage from './views/content/ComparisonPage.vue'
import GuidesIndex from './views/content/GuidesIndex.vue'
import GuideReconciliation from './views/content/GuideReconciliation.vue'
import GuideMissingCommissions from './views/content/GuideMissingCommissions.vue'
import GuideForecast from './views/content/GuideForecast.vue'
import GuideFraCif from './views/content/GuideFraCif.vue'

// Every path also needs its entry in seo/pages.ts: that list drives prerendering and the sitemap
const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/logiciel-gestion-commissions-cgp', component: SoftwarePage },
  { path: '/comparatif-gestion-commissions-cgp', component: ComparisonPage },
  { path: '/guides', component: GuidesIndex },
  { path: '/guide-rapprochement-bordereaux-commissions', component: GuideReconciliation },
  { path: '/guide-commissions-manquantes', component: GuideMissingCommissions },
  { path: '/guide-prevision-commissions', component: GuideForecast },
  { path: '/guide-chiffres-fra-cif', component: GuideFraCif },
  { path: '/cgu', component: CGU },
  { path: '/mentions-legales', component: MentionsLegales },
  { path: '/politique-confidentialite', component: PolitiqueConfidentialite }
]

// Shared by the browser entry and the prerendering entry, which only differ by their history
export function createConanceApp(history: RouterHistory) {
  const router = createRouter({
    history,
    routes,
    scrollBehavior(to) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth'
        }
      }
      return { top: 0 }
    }
  })

  const app = createApp(App)
  app.use(router)
  app.use(motion)
  return { app, router }
}
