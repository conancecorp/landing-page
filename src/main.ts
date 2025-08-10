import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
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
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.dark-mode'
    }
  }
})

// Restaure l'URL après redirection GitHub Pages
router.isReady().then(() => {
  const pathToRestore = sessionStorage.getItem('pathToRestore')
  if (pathToRestore) {
    sessionStorage.removeItem('pathToRestore')
    // Assure-toi que le path commence par '/'
    const cleanPath = pathToRestore.startsWith('/') ? pathToRestore : '/' + pathToRestore
    router.push(cleanPath)
  }
})

app.mount('#app') 