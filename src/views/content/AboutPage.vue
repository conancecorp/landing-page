<template>
  <ContentPage title="À propos de Conance">
    <p class="content-lead">
      Conance est un logiciel français en ligne de gestion des commissions pour les cabinets de gestion de patrimoine.
      Il est conçu et développé à Nantes par Elouan Bessettes.
    </p>

    <h2>D'où vient Conance</h2>
    <p>
      Tout est parti d'un cabinet qu'Elouan connaissait : il faisait ce travail à la main et lui en a parlé. Réunir les
      bordereaux de chaque partenaire, rattacher chaque ligne au bon contrat et au bon conseiller, repérer ce qui n'est pas
      arrivé : ce poste restait à couvrir. Conance est né pour ça, et ne fait que ça.
    </p>

    <h2>Un sujet, et un seul</h2>
    <p>
      Les cabinets sont déjà équipés pour suivre leurs clients, agréger les encours et tenir la conformité. Conance ne cherche
      pas à remplacer ces outils : il s'occupe des commissions que le cabinet reçoit, du bordereau à la déclaration.
    </p>

    <h2>Qui est derrière</h2>
    <p>
      <strong>Elouan Bessettes</strong>, fondateur de Conance, est développeur, formé à l'EPSI à Nantes. Il conçoit le produit,
      le développe et répond lui-même aux cabinets : vous avez un interlocuteur unique, qui connaît votre dossier et le code qui
      le traite.
    </p>
    <p>
      Chaque évolution est décrite dans les notes de version, visibles dans l'application. La
      <a href="https://docs.conance.io">documentation</a> est publique.
    </p>

    <h2>Vos données</h2>
    <p>
      L'application, la base de données, les fichiers et les sauvegardes sont hébergés en France. Le détail figure dans la
      <router-link to="/politique-confidentialite">politique de confidentialité</router-link>.
    </p>

    <h2>Nous contacter</h2>
    <ul>
      <li>E-mail : <a href="mailto:elouan@conance.io">elouan@conance.io</a></li>
      <li>Téléphone : <a href="tel:+33699964697">06 99 96 46 97</a></li>
      <li>Rendez-vous : <a href="https://calendar.app.google/FGXDBU3t4C9atAKL7" rel="noopener">choisir un créneau</a></li>
      <li>LinkedIn : <a href="https://www.linkedin.com/in/elouanb/" rel="noopener">Elouan Bessettes</a> et <a href="https://www.linkedin.com/company/110153499/" rel="noopener">la page Conance</a></li>
      <li>Adresse : 4 Quai François Mitterrand, 44200 Nantes</li>
    </ul>
    <p class="content-note">
      Conance (conance.io) n'a aucun lien avec les sociétés portant un nom proche, en France ou à l'étranger. Les informations
      légales sont dans les <router-link to="/mentions-legales">mentions légales</router-link>.
    </p>
  </ContentPage>
</template>

<script setup lang="ts">
import ContentPage from '../../components/ContentPage.vue'
</script>
