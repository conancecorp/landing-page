<template>
  <ContentPage title="Guides sur les commissions des cabinets de gestion de patrimoine">
    <p class="content-lead">
      Des méthodes concrètes pour suivre les commissions d'un cabinet, avec ou sans logiciel.
    </p>
    <div class="content-cards">
      <router-link to="/guide-rapprochement-bordereaux-commissions" class="content-card">
        <strong>Rapprocher ses bordereaux de commissions</strong>
        Réunir, normaliser, rattacher aux contrats, contrôler, archiver : la méthode en cinq étapes.
      </router-link>
      <router-link to="/guide-commissions-manquantes" class="content-card">
        <strong>Repérer les commissions qui ne sont pas arrivées</strong>
        Un contrat qui ne paie plus, un droit d'entrée jamais versé, un montant qui diffère.
      </router-link>
      <router-link to="/guide-prevision-commissions" class="content-card">
        <strong>Prévoir ses commissions de l'année</strong>
        Séparer le récurrent du ponctuel et lire le rythme de chaque contrat.
      </router-link>
      <router-link to="/guide-chiffres-fra-cif" class="content-card">
        <strong>Préparer les chiffres de la FRA CIF</strong>
        Ce qu'il faut réunir pour la fiche de renseignements annuelle d'un CIF.
      </router-link>
      <router-link to="/comparatif-gestion-commissions-cgp" class="content-card">
        <strong>Excel, CRM, prestataire ou logiciel dédié</strong>
        Ce que chaque approche couvre, et quand elle convient.
      </router-link>
    </div>
  </ContentPage>
</template>

<script setup lang="ts">
import ContentPage from '../../components/ContentPage.vue'
</script>
