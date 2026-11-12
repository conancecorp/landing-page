<template>
  <ContentPage
    title="Excel, CRM, prestataire ou logiciel dédié : comment gérer les commissions d'un cabinet"
    highlight="commissions"
    badge="Comparer les approches"
    icon="pi-sliders-h"
  >
    <template #lead>
      Un cabinet de conseil en gestion de patrimoine dispose de quatre approches pour suivre ses commissions : un tableur, son CRM
      patrimonial, un prestataire ou un logiciel dédié. Le bon choix dépend du nombre de partenaires, du volume de lignes et du niveau d'analyse attendu. Beaucoup
      de cabinets en combinent plusieurs.
    </template>
    <template #visual>
      <CompareTiles />
    </template>

    <section class="py-20 bg-page">
      <div class="container">
        <div v-reveal class="content-heading">
          <h2 class="content-h2">Ce que chaque approche couvre</h2>
        </div>
        <div v-reveal class="content-table">
          <table>
            <thead>
              <tr><th></th><th>Tableur</th><th>CRM patrimonial</th><th>Prestataire</th><th class="is-ours">Logiciel dédié</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Rôle principal</strong></td><td>Outil polyvalent</td><td>Clients, placements, conformité</td><td>Traitement confié à un tiers</td><td class="is-ours">Commissions perçues</td></tr>
              <tr><td><strong>Formats de bordereaux</strong></td><td>À reprendre à la main ou par macros</td><td>Selon l'outil, souvent hors périmètre</td><td>Pris en charge par le prestataire</td><td class="is-ours">Import par partenaire, format mémorisé</td></tr>
              <tr><td><strong>Commissions non perçues</strong></td><td>Formules à construire</td><td>Selon l'outil</td><td>Selon la prestation</td><td class="is-ours">Signalées à l'import et au fil des mois</td></tr>
              <tr><td><strong>Prévisionnel</strong></td><td>À construire</td><td>Selon l'outil</td><td>Selon la prestation</td><td class="is-ours">Selon l'outil ; contrat par contrat dans Conance</td></tr>
              <tr><td><strong>Délai pour avoir un chiffre</strong></td><td>Dépend de la mise à jour</td><td>Dépend de l'outil</td><td>Selon le calendrier de la prestation</td><td class="is-ours">Dès l'import</td></tr>
              <tr><td><strong>Qui assure le traitement</strong></td><td>Le cabinet</td><td>Le cabinet</td><td>Le prestataire</td><td class="is-ours">Le cabinet, avec l'outil</td></tr>
              <tr><td><strong>Coût</strong></td><td>Licence peu coûteuse, temps interne important</td><td>Inclus dans l'abonnement, si la fonction est couverte</td><td>Le plus souvent sur devis</td><td class="is-ours">Abonnement selon le volume</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="py-20 bg-warm">
      <div class="container">
        <div v-reveal class="content-heading">
          <h2 class="content-h2">Quand chaque approche convient</h2>
        </div>
        <div class="content-cards">
          <div v-reveal class="content-card">
            <span class="etape-tuile"><i class="pi pi-table"></i></span>
            <h3>Le tableur</h3>
            <ul class="content-pros">
              <li><i class="pi pi-check-circle"></i><span>Il convient tant que les partenaires sont peu nombreux et que la personne qui l'a conçu en assure la maintenance.</span></li>
              <li><i class="pi pi-minus-circle"></i><span>Il devient difficile à maintenir quand les formats évoluent, quand des contrats changent de conseiller ou quand il faut reconstituer l'historique.</span></li>
            </ul>
          </div>
          <div v-reveal="90" class="content-card">
            <span class="etape-tuile"><i class="pi pi-users"></i></span>
            <h3>Le CRM patrimonial</h3>
            <ul class="content-pros">
              <li><i class="pi pi-check-circle"></i><span>Il reste l'outil de référence pour la relation client, l'agrégation des encours et la conformité. Il doit être conservé.</span></li>
              <li><i class="pi pi-minus-circle"></i><span>Le vôtre permet-il aussi d'importer vos bordereaux dans leur format d'origine et d'analyser les commissions perçues ? Vérifiez-le sur un bordereau réel.</span></li>
            </ul>
          </div>
          <div v-reveal="180" class="content-card">
            <span class="etape-tuile"><i class="pi pi-briefcase"></i></span>
            <h3>Le prestataire</h3>
            <ul class="content-pros">
              <li><i class="pi pi-check-circle"></i><span>Il convient quand le cabinet ne dispose pas de ressource interne pour ce traitement, ou pour un audit ponctuel.</span></li>
              <li><i class="pi pi-minus-circle"></i><span>Les données sont disponibles au rythme de la prestation, et le savoir-faire reste externe.</span></li>
            </ul>
          </div>
          <div v-reveal="270" class="content-card">
            <span class="etape-tuile"><i class="pi pi-check-circle"></i></span>
            <h3>Le logiciel dédié</h3>
            <ul class="content-pros">
              <li><i class="pi pi-check-circle"></i><span>Il convient quand le cabinet veut conserver la maîtrise : données disponibles dès l'import, analyse par conseiller ou par produit, prévisionnel.</span></li>
              <li><i class="pi pi-minus-circle"></i><span>Le cabinet dépose lui-même les bordereaux dans l'outil.</span></li>
            </ul>
          </div>
        </div>
        <p v-reveal class="content-note content-narrow mt-10">
          <i class="pi pi-info-circle"></i>
          <span>Si les cabinets restent souvent sur un tableur, c'est qu'aucun outil généraliste ne couvrait ce besoin, non par manque de méthode.</span>
        </p>
      </div>
    </section>

    <section class="py-20 bg-page">
      <div class="container content-split">
        <div v-reveal.left class="content-prose">
          <h2 class="content-h2">Où se situe Conance</h2>
          <p>
            Conance est un logiciel dédié, en libre-service, avec un tarif public et une offre gratuite pour commencer. Il existe aussi une
            offre pour les prestataires qui traitent les commissions de plusieurs cabinets.
          </p>
          <p>
            <router-link to="/#fonctionnalites">Voir ce que fait Conance en détail</router-link>.
          </p>
        </div>
        <div v-reveal.right="120" class="content-card">
          <h3>Ce que Conance ne fait pas</h3>
          <ul class="liste-points mt-4">
            <li><i class="pi pi-minus-circle"></i><span>Ce n'est pas un CRM : pas de suivi de la relation client ni de parcours de conformité.</span></li>
            <li><i class="pi pi-minus-circle"></i><span>Il n'agrège pas les encours de vos clients. Il suit l'encours communiqué par les partenaires dans leurs bordereaux.</span></li>
            <li><i class="pi pi-minus-circle"></i><span>Il ne récupère pas les bordereaux sur les extranets des partenaires : vous les déposez.</span></li>
            <li><i class="pi pi-minus-circle"></i><span>Il prépare les chiffres de la FRA CIF, il ne dépose pas la déclaration.</span></li>
          </ul>
        </div>
      </div>
    </section>
  </ContentPage>
</template>

<script setup lang="ts">
import ContentPage from '../../components/ContentPage.vue'
import CompareTiles from '../../components/illustrations/CompareTiles.vue'
</script>
