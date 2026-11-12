<template>
  <ContentPage title="Guides sur les commissions des cabinets de conseil en gestion de patrimoine" highlight="commissions" badge="Guides" icon="pi-book">
    <template #lead>
      Les situations rencontrées par les cabinets avec leurs commissions, et la réponse de Conance.
    </template>

    <section class="py-20 bg-warm">
      <div class="container">
        <GuideCards />
      </div>
    </section>
  </ContentPage>
</template>

<script setup lang="ts">
import ContentPage from '../../components/ContentPage.vue'
import GuideCards from '../../components/GuideCards.vue'
</script>
