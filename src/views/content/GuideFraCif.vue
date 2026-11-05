<template>
  <ContentPage
    title="FRA CIF : préparer ses chiffres à partir de ses commissions"
    highlight="FRA CIF"
    badge="Guide"
    icon="pi-book"
    :closing="false"
  >
    <template #lead>
      La FRA est la fiche de renseignements annuelle qu'un conseiller en investissements financiers (CIF) transmet à son association professionnelle.
      Une bonne partie de ses chiffres vient des commissions de l'exercice.
    </template>
    <template #visual>
      <FraFigures />
    </template>

    <section class="py-20 bg-page">
      <div class="container">
        <div v-reveal class="content-heading">
          <h2 class="content-h2">Trois situations au moment de la préparer</h2>
        </div>
        <UseCases :items="cases" />
        <p v-reveal class="content-note content-narrow mt-10">
          <i class="pi pi-info-circle"></i>
          <span>
            L'AMF s'appuie sur ces fiches pour publier les
            <a href="https://www.amf-france.org/fr/actualites-publications/actualites/conseillers-en-investissements-financiers-cif-chiffres-cles-2024" rel="noopener">chiffres clés des CIF</a>.
            Le formulaire et son calendrier évoluent : votre association reste la référence. Conance prépare les chiffres et ne dépose pas la déclaration à
            votre place.
          </span>
        </p>
      </div>
    </section>

    <ConanceBand name="reglementaire" alt="Aperçu de la FRA CIF préparée par Conance" tab="Réglementaire" path="pilotage/reglementaire">
      Vos commissions de l'exercice donnent déjà l'essentiel : il reste à relire, à compléter ce qui manque et à exporter.
    </ConanceBand>

    <section class="py-20 bg-warm">
      <div class="container">
        <div v-reveal class="content-heading">
          <h2 class="content-h2">À lire aussi</h2>
        </div>
        <GuideCards exclude="/guide-chiffres-fra-cif" :limit="3" />
      </div>
    </section>
  </ContentPage>
</template>

<script setup lang="ts">
import ConanceBand from '../../components/ConanceBand.vue'
import ContentPage from '../../components/ContentPage.vue'
import GuideCards from '../../components/GuideCards.vue'
import UseCases from '../../components/UseCases.vue'
import FraFigures from '../../components/illustrations/FraFigures.vue'

const cases = [
  {
    title: 'Retrouver les chiffres de l’exercice',
    icon: 'pi-calculator',
    situation: 'Rétrocessions, honoraires, courtage, clients, contrats, encours au 31 décembre : ils dorment souvent dans plusieurs fichiers.',
    answer: 'Conance les calcule à partir de vos commissions.'
  },
  {
    title: 'Suivre les rubriques de votre association',
    icon: 'pi-sliders-h',
    situation: 'Les rubriques peuvent varier d’une association à l’autre.',
    answer: 'Elles se règlent selon vos natures de commission.'
  },
  {
    title: 'Savoir ce qu’il reste à compléter',
    icon: 'pi-bell',
    situation: 'Une commission non classée ou un bordereau absent fausse le total sans prévenir.',
    answer: 'Une alerte indique les données manquantes, et le tout s’exporte en Excel.'
  }
]
</script>
