<template>
  <div class="min-h-screen bg-page">
    <section ref="hero" class="content-hero bg-deep">
      <SiteNav :dark="navDark" />
      <div :class="['container content-hero-inner', { 'has-visual': $slots.visual }]">
        <div>
          <p class="content-crumb">
            <router-link to="/">Conance</router-link>
            <template v-if="isGuide"> / <router-link to="/guides">Guides</router-link></template>
            / <span>{{ crumb }}</span>
          </p>
          <span v-reveal class="section-badge section-badge--sombre"><i :class="['pi', icon]"></i>{{ badge }}</span>
          <h1 v-reveal="80" class="heading-font">{{ titleParts[0] }}<span v-if="highlight" class="texte-degrade">{{ highlight }}</span>{{ titleParts[1] }}</h1>
          <p v-reveal="160" class="content-hero-lead"><slot name="lead" /></p>
          <p v-if="updatedOn" v-reveal="200" class="content-byline">Mis à jour le {{ updatedOn }}.</p>
        </div>
        <div v-if="$slots.visual" v-reveal.right="280" class="content-hero-visual">
          <slot name="visual" />
        </div>
      </div>
    </section>

    <main>
      <slot />

      <section v-if="closing" class="py-16 bg-page">
        <div class="container">
          <aside v-reveal class="content-cta">
            <div>
              <h2 class="heading-font">Essayez Conance sur un vrai bordereau</h2>
              <p>Gratuit jusqu'à 5 000 commissions et 3 partenaires.</p>
            </div>
            <div class="flex flex-wrap gap-3">
              <a href="https://app.conance.io/register?plan=gratuit" class="btn-accent px-6 py-3">Démarrer gratuitement</a>
              <router-link to="/tarifs" class="btn-secondary px-6 py-3">Voir les tarifs</router-link>
            </div>
          </aside>
        </div>
      </section>
    </main>

    <SiteFooter />

    <Transition name="lightbox">
      <div v-if="zoomed" class="lightbox-overlay" @click="closeLightbox">
        <button class="lightbox-close" aria-label="Fermer" @click="closeLightbox">
          <i class="pi pi-times"></i>
        </button>
        <div class="lightbox-content">
          <img :src="zoomed.src" :alt="zoomed.alt" @click="closeLightbox" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, provide, ref } from 'vue'
import { useRoute } from 'vue-router'

import { findPage } from '../seo/pages'
import SiteFooter from './SiteFooter.vue'
import SiteNav from './SiteNav.vue'

const props = withDefaults(
  defineProps<{
    title: string
    // Part of the title shown in the gradient of the home page's hero
    highlight?: string
    badge: string
    icon: string
    // Closing call to action: guides have ConanceBand instead
    closing?: boolean
  }>(),
  { highlight: '', closing: true }
)

const route = useRoute()
const isGuide = computed(() => route.path.startsWith('/guide-'))
const crumb = computed(() => findPage(route.path)?.crumb ?? '')

const titleParts = computed(() => {
  if (!props.highlight) return [props.title, '']
  const at = props.title.indexOf(props.highlight)
  return [props.title.slice(0, at), props.title.slice(at + props.highlight.length)]
})

// Articles show who wrote them and when, like their schema. UTC on both sides: the date never shifts.
const dateFormat = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long', timeZone: 'UTC' })
const updatedOn = computed(() => {
  const page = findPage(route.path)
  return page?.article ? dateFormat.format(new Date(`${page.updated}T00:00:00Z`)) : ''
})

// The floating bar follows the home page: see-through on the hero, solid below it
const hero = ref<HTMLElement | null>(null)
const navDark = ref(true)
function updateNav() {
  if (hero.value) navDark.value = hero.value.getBoundingClientRect().bottom > 70
}
onMounted(() => {
  window.addEventListener('scroll', updateNav, { passive: true })
  updateNav()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateNav)
  document.body.style.overflow = ''
})

const zoomed = ref<{ src: string; alt: string } | null>(null)
provide('openLightbox', (src: string, alt: string) => {
  zoomed.value = { src, alt }
  document.body.style.overflow = 'hidden'
})
function closeLightbox() {
  zoomed.value = null
  document.body.style.overflow = ''
}
</script>

<style>
.content-hero {
  position: relative;
  overflow: hidden;
  padding: 7.5rem 0 4.5rem;
}

.content-hero-inner {
  display: grid;
  gap: 3rem;
  align-items: center;
}

.content-hero-inner > div {
  min-width: 0;
}

.content-hero h1 {
  max-width: 48rem;
  margin-bottom: 1.25rem;
  font-size: clamp(2rem, 4.5vw, 3.25rem);
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-blanc);
}

.content-hero-lead {
  max-width: 44rem;
  font-size: 1.1875rem;
  font-weight: 300;
  line-height: 1.6;
  color: rgba(212, 209, 202, 0.92);
}

.content-crumb {
  margin-bottom: 1.25rem;
  font-size: 0.875rem;
  color: var(--color-brume);
}

.content-crumb a:hover {
  color: var(--color-blanc);
}

.content-byline {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--color-brume);
}

.content-hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

/* The same halo as behind the home page's capture */
.content-hero-visual::before {
  content: '';
  position: absolute;
  inset: -10% 5%;
  background: radial-gradient(closest-side, rgba(35, 176, 134, 0.4), transparent);
  filter: blur(40px);
  pointer-events: none;
}

.content-hero-visual > * {
  position: relative;
}

.content-hero-visual .ill-card {
  max-width: 24rem;
}

@media (min-width: 1024px) {
  .content-hero-inner.has-visual {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
    gap: 4rem;
  }
}

/* Two columns, text and visual, stacked on small screens */
.content-split {
  display: grid;
  gap: 3rem;
  align-items: center;
}

.content-split > * {
  min-width: 0;
}

@media (min-width: 1024px) {
  .content-split {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4rem;
  }

  .content-split--reverse > :first-child {
    order: 2;
  }
}

.content-h2 {
  margin-bottom: 1rem;
  font-family: 'Manrope', system-ui, sans-serif;
  font-size: clamp(1.625rem, 3vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.15;
  color: var(--texte);
}

.content-heading {
  max-width: 44rem;
  margin: 0 auto 2.5rem;
  text-align: center;
}

.content-heading p {
  font-size: 1.125rem;
  color: var(--texte-3);
}

.content-prose {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--texte-2);
}

.content-prose p {
  margin-bottom: 1rem;
}

.content-prose > :last-child {
  margin-bottom: 0;
}

.content-prose ul,
.content-prose ol {
  margin: 0 0 1rem 1.25rem;
}

.content-prose ul {
  list-style: disc;
}

.content-prose ol {
  list-style: decimal;
}

.content-prose li {
  margin-bottom: 0.5rem;
}

.content-prose a {
  color: var(--vert-texte);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.content-prose strong {
  font-weight: 600;
  color: var(--texte);
}

.content-narrow {
  max-width: 46rem;
  margin-inline: auto;
}

/* Numbered steps on a thread, like "Le mois d'un cabinet" */
.content-steps {
  display: grid;
  gap: 1rem;
  max-width: 50rem;
  margin-inline: auto;
}

.content-steps > li {
  position: relative;
  display: flex;
  gap: 1.25rem;
}

.content-steps > li:not(:last-child)::before {
  content: '';
  position: absolute;
  top: 3rem;
  bottom: -1rem;
  left: 1.3125rem;
  width: 2px;
  background: var(--vert-lisere);
}

.content-step-card {
  flex: 1;
  min-width: 0;
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--bordure);
  border-radius: 0.875rem;
  background: var(--carte);
}

.content-step-card h2,
.content-step-card h3 {
  margin: 0.125rem 0 0.5rem;
  font-family: 'Manrope', system-ui, sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: var(--texte);
}

.content-step-card .content-prose {
  font-size: 1rem;
  line-height: 1.6;
}

/* Cards with an icon tile */
.content-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1.5rem;
}

.content-card {
  display: block;
  padding: 1.5rem;
  border: 1px solid var(--bordure);
  border-radius: 0.875rem;
  background: var(--carte);
}

.content-card .etape-tuile {
  margin-bottom: 1rem;
}

.content-card .etape-tuile--alerte {
  background: var(--alerte-doux);
  color: var(--alerte-texte);
}

.content-card h3 {
  margin-bottom: 0.375rem;
  font-family: 'Manrope', system-ui, sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: var(--texte);
}

.content-card p {
  line-height: 1.55;
  color: var(--texte-3);
}

.content-card p a {
  color: var(--vert-texte);
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* What an approach is good at, and what it costs: short lines rather than a block of text */
.content-pros {
  display: grid;
  gap: 0.75rem;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: var(--texte-3);
}

.content-pros li {
  display: flex;
  gap: 0.625rem;
}

.content-pros .pi {
  flex-shrink: 0;
  margin-top: 0.2rem;
  color: var(--vert-texte);
}

.content-pros .pi-minus-circle {
  color: var(--alerte-texte);
}

.content-table {
  overflow-x: auto;
  border: 1px solid var(--bordure);
  border-radius: 0.875rem;
  background: var(--carte);
}

.content-table table {
  width: 100%;
  min-width: 36rem;
  border-collapse: collapse;
  font-size: 0.9375rem;
  line-height: 1.45;
  color: var(--texte-2);
}

.content-table th,
.content-table td {
  padding: 0.75rem 1rem;
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

.content-table strong {
  font-weight: 600;
  color: var(--texte);
}

.content-table .is-ours {
  background: var(--vert-doux);
}

.content-note {
  display: flex;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  background: var(--vert-doux);
  font-size: 0.9375rem;
  line-height: 1.55;
  color: var(--texte-2);
}

.content-note .pi {
  flex-shrink: 0;
  margin-top: 0.2rem;
  color: var(--vert-texte);
}

.content-note a {
  color: var(--vert-texte);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.content-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 1rem;
  background: var(--color-deep);
  color: var(--color-blanc);
}

.content-cta h2 {
  margin-bottom: 0.25rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.25;
}

.content-cta p {
  font-size: 0.9375rem;
  color: var(--color-brume);
}

.lien-fleche {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--vert-texte);
}

.lien-fleche:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.lien-fleche .pi {
  font-size: 0.75rem;
}

.lien-fleche--sombre {
  color: #52d2a6;
}
</style>
