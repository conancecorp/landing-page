<template>
  <ContentPage
    title="Établir son prévisionnel de commissions"
    highlight="commissions"
    badge="Guide"
    icon="pi-book"
    :closing="false"
  >
    <template #lead>
      Pour estimer le reste à encaisser jusqu'au 31 décembre, la méthode la plus fiable part de la périodicité réelle de chaque contrat. Voici trois
      questions auxquelles un prévisionnel doit répondre.
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
            Les commissions récurrentes, sur encours, se prévoient avec la périodicité de chaque contrat. Les droits d'entrée, ponctuels, dépendent de
            la production à venir. Le résultat reste une estimation.
          </span>
        </p>
      </div>
    </section>

    <ConanceBand name="pilotage" alt="Aperçu du pilotage et du prévisionnel" tab="Pilotage" path="pilotage">
      Conance déduit la périodicité de chaque contrat de vos bordereaux et établit le prévisionnel de l'année, sans saisie de votre part.
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
    situation: 'À l’approche de la fin d’exercice, la question se pose pour la trésorerie et les décisions de fin d’année.',
    answer: 'Conance affiche l’encaissé et le reste à encaisser jusqu’au 31 décembre, mois par mois et contrat par contrat.'
  },
  {
    title: 'Quelle part de ce montant est fiable ?',
    icon: 'pi-exclamation-circle',
    situation: 'Certains contrats sont déjà en retard de versement, ce que le total ne montre pas.',
    answer: 'Conance isole la part du prévisionnel qui repose sur des contrats en retard.'
  },
  {
    title: 'Et si un contrat fausse l’estimation ?',
    icon: 'pi-sliders-h',
    situation: 'Un contrat résilié ou une périodicité inhabituelle modifie l’estimation.',
    answer: 'Une périodicité mal interprétée peut être corrigée, un contrat exclu du prévisionnel.'
  }
]
</script>
