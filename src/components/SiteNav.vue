<template>
  <nav class="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
    <div :class="['max-w-6xl mx-auto transition-all duration-300', dark ? 'navbar-floating-dark' : 'navbar-floating-light', { 'site-nav-open': open }]">
      <div class="flex justify-between items-center h-14 px-4 sm:px-6">
        <router-link to="/" class="flex items-center" @click="goHome">
          <img :src="dark || sombre ? '/logo-conance-white.svg' : '/logo-conance.svg'" alt="Conance" class="h-7 w-auto" />
        </router-link>
        <div class="hidden lg:flex items-center space-x-7">
          <router-link v-for="link in links" :key="link.to" :to="link.to" :class="linkClass">{{ link.label }}</router-link>
        </div>
        <div class="flex items-center gap-2">
          <a href="https://app.conance.io/login" :class="dark ? 'btn-nav-floating-dark' : 'btn-nav-floating-light'">Se connecter</a>
          <button
            type="button"
            :class="['site-nav-toggle', dark ? 'text-blanc' : 'text-gray-700']"
            :aria-expanded="open"
            aria-label="Menu"
            @click="open = !open"
          >
            <i :class="['pi', open ? 'pi-times' : 'pi-bars']"></i>
          </button>
        </div>
      </div>
      <div v-if="open" class="site-nav-panel">
        <router-link v-for="link in links" :key="link.to" :to="link.to" :class="linkClass" @click="open = false">{{ link.label }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

import { sombre } from '../theme'

const props = defineProps<{ dark: boolean }>()

// Every entry opens a page: nothing here scrolls within the current one
const links = [
  { label: 'Tarifs', to: '/tarifs' },
  { label: 'Guides', to: '/guides' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Contact', to: '/contact' }
]

const route = useRoute()
const open = ref(false)
const linkClass = computed(() => [
  'transition-colors text-sm',
  props.dark ? 'text-brume hover:text-blanc' : 'text-gray-600 hover:text-primary-700'
])

// The router does not move when the logo points at the current page: scroll back up by hand
function goHome() {
  if (route.path === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style>
.site-nav-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.625rem;
  cursor: pointer;
}

.site-nav-toggle .pi {
  font-size: 1.125rem;
}

.site-nav-panel {
  display: grid;
  gap: 0.25rem;
  padding: 0 1rem 1rem;
}

.site-nav-panel a {
  padding: 0.625rem 0.5rem;
  font-size: 0.9375rem;
}

/* The bar is see-through: once open, the page must not show through the links */
.navbar-floating-dark.site-nav-open {
  background: #0d352c;
}

.navbar-floating-light.site-nav-open {
  background: var(--carte);
}

/* In the stylesheet rather than lg:hidden: these rules are unlayered and would beat the utility */
@media (min-width: 1024px) {
  .site-nav-toggle,
  .site-nav-panel {
    display: none;
  }
}
</style>
