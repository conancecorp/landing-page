<template>
  <div class="guide-cards" :style="{ '--columns': shown.length === 4 ? 4 : 3 }">
    <router-link
      v-for="(guide, i) in shown"
      :key="guide.path"
      v-reveal="i * 90"
      :to="guide.path"
      class="guide-card hover-lift"
    >
      <GuideThumb :kind="guide.illustration" />
      <span class="guide-card-body">
        <strong class="heading-font">{{ guide.title }}</strong>
        <span>{{ guide.summary }}</span>
        <span class="guide-card-more">Lire le guide <i class="pi pi-arrow-right"></i></span>
      </span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { guides } from '../content/guides'
import GuideThumb from './GuideThumb.vue'

const props = defineProps<{
  // The page we are on, which never links to itself
  exclude?: string
  limit?: number
}>()

const shown = computed(() => guides.filter((guide) => guide.path !== props.exclude).slice(0, props.limit))
</script>

<style>
/* Flex rather than grid: an incomplete last row stays centred */
.guide-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.guide-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--bordure);
  border-radius: 1rem;
  background: var(--carte);
}

.guide-card:focus-visible {
  outline: 2px solid var(--vert-texte);
  outline-offset: 2px;
}

.guide-card-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.375rem;
  padding: 1.25rem;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: var(--texte-3);
}

.guide-card-body strong {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.25;
  color: var(--texte);
}

.guide-card-more {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  margin-top: auto;
  padding-top: 0.5rem;
  font-weight: 600;
  color: var(--vert-texte);
}

.guide-card-more .pi {
  font-size: 0.75rem;
}

@media (min-width: 640px) {
  .guide-card {
    width: calc((100% - 1.5rem) / 2);
  }
}

@media (min-width: 1100px) {
  .guide-card {
    width: calc((100% - (var(--columns) - 1) * 1.5rem) / var(--columns));
  }
}
</style>
