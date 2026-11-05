<template>
  <ContentPage title="Tarifs de Conance" highlight="Tarifs" badge="Tarifs" icon="pi-tag" :closing="false">
    <template #lead>
      Gratuit jusqu'à 5 000 commissions et 3 partenaires, puis un abonnement selon votre volume. L'abonnement annuel offre 2 mois.
    </template>

    <PricingSection />

    <section class="py-20 bg-page">
      <div class="container">
        <div v-reveal class="content-heading">
          <h2 class="content-h2">Une question sur les offres ?</h2>
          <p>Vous gérez plusieurs cabinets, ou votre volume sort de ces offres : parlons-en.</p>
        </div>
        <div v-reveal class="flex flex-wrap justify-center gap-3">
          <router-link to="/contact" class="btn-primary px-6 py-3">Nous écrire</router-link>
          <a href="https://cal.com/elouan" rel="noopener" class="btn-secondary-light px-6 py-3">Prendre rendez-vous</a>
        </div>
      </div>
    </section>
  </ContentPage>
</template>

<script setup lang="ts">
import ContentPage from '../../components/ContentPage.vue'
import PricingSection from '../../components/PricingSection.vue'
</script>
