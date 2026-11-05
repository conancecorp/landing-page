<template>
  <ContentPage
    title="Prévoir ses commissions de l'année"
    highlight="commissions"
    badge="Guide"
    icon="pi-book"
    :closing="false"
  >
    <template #lead>
      Pour estimer ce qu'il reste à encaisser d'ici décembre, le plus fiable est de partir du rythme réel de chaque contrat. Voici trois questions
      auxquelles un prévisionnel doit répondre.
    </template>
    <template #visual>
      <ForecastBars />
    </template>

    <section class="py-20 bg-page">
      <div class="container">
        <div v-reveal class="content-heading">
          <h2 class="content-h2">Trois questions, trois réponses</h2>
        </div>
        <UseCases :items="cases" />
        <p v-reveal class="content-note content-narrow mt-10">
          <i class="pi pi-info-circle"></i>
          <span>
            Les commissions récurrentes, sur encours, se prévoient avec le rythme de chaque contrat. Les droits d'entrée, ponctuels, dépendent de ce
            qui sera souscrit. Le résultat reste une estimation.
          </span>
        </p>
      </div>
    </section>

    <ConanceBand name="pilotage" alt="Aperçu du pilotage et du prévisionnel" tab="Pilotage" path="pilotage">
      Conance lit le rythme de chaque contrat dans vos bordereaux et affiche le prévisionnel de l'année, sans saisie de votre part.
    </ConanceBand>

    <section class="py-20 bg-warm">
      <div class="container">
        <div v-reveal class="content-heading">
          <h2 class="content-h2">À lire aussi</h2>
        </div>
        <GuideCards exclude="/guide-prevision-commissions" :limit="3" />
      </div>
    </section>
  </ContentPage>
</template>

<script setup lang="ts">
import ConanceBand from '../../components/ConanceBand.vue'
import ContentPage from '../../components/ContentPage.vue'
import GuideCards from '../../components/GuideCards.vue'
import UseCases from '../../components/UseCases.vue'
import ForecastBars from '../../components/illustrations/ForecastBars.vue'

const cases = [
  {
    title: 'Combien reste-t-il à encaisser ?',
    icon: 'pi-chart-bar',
    situation: 'À l’approche de décembre, la question revient pour la trésorerie ou les décisions à prendre.',
    answer: 'Conance affiche l’encaissé et l’à-venir jusqu’en décembre, mois par mois et contrat par contrat.'
  },
  {
    title: 'Quelle part de ce chiffre est sûre ?',
    icon: 'pi-exclamation-circle',
    situation: 'Certains contrats sont déjà en retard, et le total ne le dit pas.',
    answer: 'Conance isole la part du prévisionnel qui repose sur des contrats en retard.'
  },
  {
    title: 'Et si un contrat fausse le calcul ?',
    icon: 'pi-sliders-h',
    situation: 'Un contrat résilié ou un rythme inhabituel change l’estimation.',
    answer: 'Un rythme mal compris se corrige, et un contrat se retire du prévisionnel.'
  }
]
</script>
