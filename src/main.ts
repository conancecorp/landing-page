import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import './style.css'

import App from './App.vue'
import Home from './views/Home.vue'
import CGU from './views/CGU.vue'
import MentionsLegales from './views/MentionsLegales.vue'

// Router configuration
const routes = [
  { path: '/', component: Home },
  { path: '/cgu', component: CGU },
  { path: '/mentions-legales', component: MentionsLegales }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
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
app.use(PrimeVue)

app.mount('#app') 