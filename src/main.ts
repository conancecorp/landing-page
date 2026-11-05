import { createWebHistory } from 'vue-router'
import 'primeicons/primeicons.css'
import './style.css'

import './theme'
import { createConanceApp } from './app'
import { applyPageHead } from './seo/head'

const { app, router } = createConanceApp(createWebHistory())

router.afterEach((to) => applyPageHead(to.path))

// The prerendered text is replaced at mount (no hydration): index.html keeps it hidden until then
// for visitors with JavaScript, so nothing flashes before the entrance animations
app.mount('#app')
