<template>
  <div class="min-h-screen bg-page">
    <nav class="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div class="navbar-floating-light max-w-6xl mx-auto">
        <div class="flex justify-between items-center h-14 px-4 sm:px-6">
          <router-link to="/" class="flex items-center">
            <img src="/logo-conance.svg" alt="Conance" class="h-7 w-auto" />
          </router-link>
          <div class="hidden md:flex items-center space-x-8">
            <router-link to="/logiciel-gestion-commissions-cgp" class="text-sm text-gray-600 hover:text-primary-700 transition-colors">Le logiciel</router-link>
            <router-link to="/guides" class="text-sm text-gray-600 hover:text-primary-700 transition-colors">Guides</router-link>
            <router-link to="/#tarifs" class="text-sm text-gray-600 hover:text-primary-700 transition-colors">Tarifs</router-link>
          </div>
          <a href="https://app.conance.io/register?plan=gratuit" class="btn-nav-floating-light">Démarrer gratuitement</a>
        </div>
      </div>
    </nav>

    <main class="content-page container">
      <p class="content-crumb">
        <router-link to="/">Conance</router-link>
        <template v-if="isGuide"> / <router-link to="/guides">Guides</router-link></template>
        / <span>{{ crumb }}</span>
      </p>

      <article class="content-article">
        <h1 class="heading-font">{{ title }}</h1>
        <p v-if="updatedOn" class="content-byline">
          Par <router-link to="/a-propos">Elouan Bessettes</router-link>, fondateur de Conance. Mis à jour le {{ updatedOn }}.
        </p>
        <slot />
      </article>

      <aside class="content-cta">
        <div>
          <h2 class="heading-font">Essayez Conance sur un vrai bordereau</h2>
          <p>Gratuit jusqu'à 5 000 commissions et 3 partenaires.</p>
        </div>
        <div class="content-cta-actions">
          <a href="https://app.conance.io/register?plan=gratuit" class="btn-accent px-6 py-3">Démarrer gratuitement</a>
          <router-link to="/#tarifs" class="btn-secondary px-6 py-3">Voir les tarifs</router-link>
        </div>
      </aside>
    </main>

    <footer class="content-footer">
      <div class="container">
        <router-link to="/logiciel-gestion-commissions-cgp">Le logiciel</router-link>
        <router-link to="/comparatif-gestion-commissions-cgp">Comparer les approches</router-link>
        <router-link to="/guides">Guides</router-link>
        <router-link to="/a-propos">À propos</router-link>
        <a href="https://docs.conance.io">Documentation</a>
        <router-link to="/mentions-legales">Mentions légales</router-link>
        <router-link to="/cgu">CGU</router-link>
        <router-link to="/politique-confidentialite">Confidentialité</router-link>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { findPage } from '../seo/pages'

defineProps<{ title: string }>()

const route = useRoute()
const isGuide = computed(() => route.path.startsWith('/guide-'))
const crumb = computed(() => findPage(route.path)?.crumb ?? '')

// Articles show who wrote them and when, like their schema. UTC on both sides: the date never shifts.
const dateFormat = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long', timeZone: 'UTC' })
const updatedOn = computed(() => {
  const page = findPage(route.path)
  return page?.article ? dateFormat.format(new Date(`${page.updated}T00:00:00Z`)) : ''
})
</script>

<style>
.content-page {
  padding-top: 7rem;
  padding-bottom: 4rem;
}

.content-crumb {
  max-width: 46rem;
  margin: 0 auto 1.5rem;
  font-size: 0.875rem;
  color: var(--texte-3);
}

.content-crumb a:hover {
  color: var(--vert-texte);
}

.content-article {
  max-width: 46rem;
  margin: 0 auto;
  color: var(--texte-2);
  font-size: 1.0625rem;
  line-height: 1.7;
}

.content-article h1 {
  font-size: clamp(1.9rem, 4.5vw, 2.75rem);
  line-height: 1.15;
  font-weight: 700;
  color: var(--texte);
  margin-bottom: 1.5rem;
}

.content-article .content-byline {
  margin: -0.75rem 0 1.5rem;
  font-size: 0.875rem;
  color: var(--texte-3);
}

.content-article h2 {
  font-family: 'Manrope', system-ui, sans-serif;
  letter-spacing: -0.02em;
  font-size: 1.5rem;
  line-height: 1.25;
  font-weight: 700;
  color: var(--texte);
  margin: 2.5rem 0 0.75rem;
}

.content-article h3 {
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--texte);
  margin: 1.5rem 0 0.25rem;
}

.content-article p {
  margin-bottom: 1rem;
}

.content-article .content-lead {
  font-size: 1.1875rem;
  color: var(--texte);
}

.content-article ul,
.content-article ol {
  margin: 0 0 1rem 1.25rem;
}

.content-article ul {
  list-style: disc;
}

.content-article ol {
  list-style: decimal;
}

.content-article li {
  margin-bottom: 0.5rem;
}

.content-article a {
  color: var(--vert-texte);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.content-article strong {
  color: var(--texte);
  font-weight: 600;
}

.content-table {
  overflow-x: auto;
  margin: 1.25rem 0 1.5rem;
  border: 1px solid var(--bordure);
  border-radius: 0.75rem;
}

.content-table table {
  width: 100%;
  min-width: 36rem;
  border-collapse: collapse;
  font-size: 0.9375rem;
  line-height: 1.45;
}

.content-table th,
.content-table td {
  padding: 0.65rem 0.85rem;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid var(--bordure);
}

.content-table tr:last-child td {
  border-bottom: none;
}

.content-table th {
  background: var(--page-alt);
  font-weight: 600;
  color: var(--texte);
}

.content-note {
  font-size: 0.9375rem;
  color: var(--texte-3);
}

.content-cards {
  display: grid;
  gap: 1rem;
  margin: 1.5rem 0;
}

.content-article a.content-card {
  display: block;
  padding: 1.25rem;
  border: 1px solid var(--bordure);
  border-radius: 0.75rem;
  background: var(--carte);
  color: var(--texte-2);
  text-decoration: none;
  transition: border-color 0.15s;
}

.content-article a.content-card:hover {
  border-color: var(--vert-lisere);
}

.content-card strong {
  display: block;
  font-family: 'Manrope', system-ui, sans-serif;
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
}

.content-cta {
  max-width: 46rem;
  margin: 3rem auto 0;
  padding: 1.75rem;
  border-radius: 1rem;
  background: var(--color-deep);
  color: var(--color-blanc);
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  align-items: center;
  justify-content: space-between;
}

.content-cta h2 {
  font-size: 1.375rem;
  line-height: 1.25;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.content-cta p {
  color: var(--color-brume);
  font-size: 0.9375rem;
}

.content-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.content-footer {
  padding: 2rem 0;
  background: var(--color-deep);
  font-size: 0.875rem;
  color: var(--color-brume);
}

.content-footer .container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  justify-content: center;
}

.content-footer a:hover {
  color: var(--color-blanc);
}
</style>
