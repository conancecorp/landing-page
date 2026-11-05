<template>
  <ContentPage
    title="Repérer les commissions qui ne sont pas arrivées"
    highlight="commissions"
    badge="Guide"
    icon="pi-book"
    :closing="false"
  >
    <template #lead>
      Une commission manquante ne se voit pas dans un bordereau, puisqu'elle n'y figure pas. Pour la repérer, il faut comparer ce qui arrive à
      ce qui devrait arriver. Voici les trois cas à surveiller.
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
            Un silence n'est pas toujours une erreur : le contrat a pu être résilié ou transféré, ou le partenaire est simplement en retard. Conance
            signale, vous tranchez.
          </span>
        </p>
      </div>
    </section>

    <ConanceBand name="attendues" alt="Aperçu des commissions attendues" tab="Pilotage" path="pilotage">
      La page Commissions attendues réunit les contrats qui se taisent et les commissions annoncées, avec le manque estimé.
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
    title: 'Un contrat ne verse plus rien',
    icon: 'pi-volume-off',
    situation: 'Il payait tous les trimestres et se tait depuis six mois. Aucune ligne, donc aucune alerte.',
    answer: 'Conance compare chaque contrat à son propre rythme et fait remonter ceux qui se taisent, avec les versements manqués chiffrés.'
  },
  {
    title: 'Un droit d’entrée n’arrive pas',
    icon: 'pi-clock',
    situation: 'Il est attendu après une souscription, mais n’apparaît dans aucun bordereau.',
    answer: 'Vous déclarez la commission annoncée, et Conance la rapproche de ce qui arrive à l’import.'
  },
  {
    title: 'Le montant n’est pas le bon',
    icon: 'pi-sort-alt',
    situation: 'La commission arrive, mais pas pour le montant prévu.',
    answer: 'Conance signale l’écart, et vous décidez s’il mérite une question au partenaire.'
  }
]
</script>
