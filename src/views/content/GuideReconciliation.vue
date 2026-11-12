<template>
  <ContentPage
    title="Rapprocher ses bordereaux de commissions"
    highlight="bordereaux"
    badge="Guide"
    icon="pi-book"
    :closing="false"
  >
    <template #lead>
      Rapprocher ses bordereaux, c'est vérifier que chaque ligne reçue d'un partenaire correspond à un contrat, à un conseiller et à un
      montant cohérent. Voici trois situations que les cabinets rencontrent chaque mois.
    </template>
    <template #visual>
      <MatchLines />
    </template>

    <section class="py-20 bg-page">
      <div class="container content-split">
        <div v-reveal.left class="content-prose">
          <h2 class="content-h2">Qu'est-ce qu'un bordereau de commissions ?</h2>
          <p>
            C'est le document qu'un partenaire (assureur, société de gestion, plateforme) met à disposition du cabinet pour détailler les
            commissions qu'il lui verse sur une période. Il sert aussi de justificatif comptable, et il n'existe pas de format commun à tous
            les partenaires.
          </p>
        </div>
        <div v-reveal.right="120"><FilesToBase /></div>
      </div>
    </section>

    <section class="py-20 bg-warm">
      <div class="container">
        <div v-reveal class="content-heading">
          <h2 class="content-h2">Trois situations fréquentes</h2>
        </div>
        <UseCases :items="cases" />
      </div>
    </section>

    <ConanceBand name="import" alt="Aperçu de l'import de données" tab="Import" path="import">
      Conance contrôle les données avant toute intégration, et un import peut être annulé intégralement, y compris les contrats et clients créés.
    </ConanceBand>

    <section class="py-20 bg-warm">
      <div class="container">
        <div v-reveal class="content-heading">
          <h2 class="content-h2">À lire aussi</h2>
        </div>
        <GuideCards exclude="/guide-rapprochement-bordereaux-commissions" :limit="3" />
      </div>
    </section>
  </ContentPage>
</template>

<script setup lang="ts">
import ConanceBand from '../../components/ConanceBand.vue'
import ContentPage from '../../components/ContentPage.vue'
import GuideCards from '../../components/GuideCards.vue'
import UseCases from '../../components/UseCases.vue'
import FilesToBase from '../../components/illustrations/FilesToBase.vue'
import MatchLines from '../../components/illustrations/MatchLines.vue'

const cases = [
  {
    title: 'Chaque partenaire a son format',
    icon: 'pi-file-excel',
    situation: 'Excel, CSV ou PDF : la structure des bordereaux varie d’un partenaire à l’autre.',
    answer: 'Conance identifie les colonnes et mémorise le format de chaque partenaire. Une soixantaine de modèles sont déjà prêts.'
  },
  {
    title: 'Le bordereau n’indique pas le contrat',
    icon: 'pi-search',
    situation: 'Certains partenaires n’indiquent que le nom du client, sans numéro de contrat.',
    answer: 'Conance retrouve le contrat à partir du nom du client chez ce partenaire, et mémorise votre choix pour les prochains bordereaux.'
  },
  {
    title: 'Un contrat change de conseiller',
    icon: 'pi-user-edit',
    situation: 'Les commissions doivent être affectées au bon conseiller, avant comme après le changement.',
    answer: 'Le contrat conserve l’historique de ses conseillers : vous fixez la date d’effet du changement.'
  }
]
</script>
