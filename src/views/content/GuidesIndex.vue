<template>
  <ContentPage title="Guides sur les commissions des cabinets de gestion de patrimoine" highlight="commissions" badge="Guides" icon="pi-book">
    <template #lead>
      Les situations que les cabinets rencontrent avec leurs commissions, et ce que Conance y change.
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
