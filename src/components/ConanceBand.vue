<template>
  <!-- End of a guide: what the method looks like in the product, on the deep green of the home page -->
  <section class="py-20 bg-deep overflow-hidden">
    <div class="container content-split">
      <div v-reveal.left>
        <span class="section-badge section-badge--sombre"><i class="pi pi-sparkles"></i>Avec Conance</span>
        <h2 class="heading-font text-3xl md:text-4xl font-bold text-blanc mb-6">Le faire avec Conance</h2>
        <p class="text-lg text-brume/90 font-light mb-8"><slot /></p>
        <div class="flex flex-wrap gap-3">
          <a href="https://app.conance.io/register?plan=gratuit" class="btn-accent px-6 py-3">Démarrer gratuitement</a>
          <router-link to="/#fonctionnalites" class="btn-secondary px-6 py-3">Voir les fonctionnalités</router-link>
        </div>
      </div>
      <Parallaxe>
        <ContentCapture v-reveal.right="120" :name="name" :alt="alt" :tab="tab" :path="path" />
      </Parallaxe>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContentCapture from './ContentCapture.vue'
import Parallaxe from './Parallaxe.vue'

defineProps<{ name: string; alt: string; tab: string; path: string }>()
</script>
