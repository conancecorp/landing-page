<template>
  <ContentPage
    title="Contrôler l'exhaustivité de ses commissions"
    highlight="commissions"
    badge="Guide"
    icon="pi-book"
    :closing="false"
  >
    <template #lead>
      Une commission non versée n'apparaît dans aucun bordereau. Pour la détecter, il faut rapprocher les commissions perçues des
      commissions attendues. Voici les trois cas à surveiller.
    </template>
    <template #visual>
      <ContractRhythm />
    </template>

    <section class="py-20 bg-page">
      <div class="container">
        <div v-reveal class="content-heading">
          <h2 class="content-h2">Trois cas à surveiller</h2>
        </div>
        <UseCases :items="cases" alert />
        <p v-reveal class="content-note content-narrow mt-10">
          <i class="pi pi-info-circle"></i>
          <span>
            Une absence de versement n'est pas toujours une anomalie : le contrat a pu être racheté, résilié ou transféré, ou le partenaire est en
            retard. Conance signale, vous décidez.
          </span>
        </p>
      </div>
    </section>

    <ConanceBand name="attendues" alt="Aperçu des commissions attendues" tab="Pilotage" path="pilotage">
      La page Commissions attendues réunit les contrats sans versement et les commissions attendues, avec le montant non perçu estimé.
    </ConanceBand>

    <section class="py-20 bg-warm">
      <div class="container">
        <div v-reveal class="content-heading">
          <h2 class="content-h2">À lire aussi</h2>
        </div>
        <GuideCards exclude="/guide-commissions-manquantes" :limit="3" />
      </div>
    </section>
  </ContentPage>
</template>

<script setup lang="ts">
import ConanceBand from '../../components/ConanceBand.vue'
import ContentPage from '../../components/ContentPage.vue'
import GuideCards from '../../components/GuideCards.vue'
import UseCases from '../../components/UseCases.vue'
import ContractRhythm from '../../components/illustrations/ContractRhythm.vue'

const cases = [
  {
    title: 'Un contrat sans versement',
    icon: 'pi-volume-off',
    situation: 'Commissionné chaque trimestre, il n’apparaît plus dans les bordereaux depuis six mois. Sans ligne, aucune alerte.',
    answer: 'Conance compare chaque contrat à sa périodicité de versement et signale ceux qui n’ont rien versé, avec le montant non perçu estimé.'
  },
  {
    title: 'Un droit d’entrée non versé',
    icon: 'pi-clock',
    situation: 'Il est attendu après une souscription, mais n’apparaît dans aucun bordereau.',
    answer: 'Vous enregistrez la commission attendue, et Conance la rapproche des bordereaux à l’import.'
  },
  {
    title: 'Un montant différent de l’attendu',
    icon: 'pi-sort-alt',
    situation: 'La commission est versée, mais pour un autre montant.',
    answer: 'Conance signale l’écart ; vous décidez s’il justifie une réclamation auprès du partenaire.'
  }
]
</script>
