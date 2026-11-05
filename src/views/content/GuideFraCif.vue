<template>
  <ContentPage title="FRA CIF : préparer ses chiffres à partir de ses commissions">
    <p class="content-lead">
      La FRA est la fiche de renseignements annuelle qu'un conseiller en investissements financiers (CIF) transmet à son
      association professionnelle. Une bonne partie de ses chiffres vient des commissions de l'exercice : si elles sont
      déjà consolidées et bien classées, la préparer revient surtout à relire et à compléter.
    </p>

    <h2>Qu'est-ce que la FRA CIF ?</h2>
    <p>
      Elle rassemble des données d'activité du cabinet sur un exercice : chiffre d'affaires et sa répartition, clients,
      encours, entre autres. L'AMF s'appuie sur ces fiches pour publier chaque année les
      <a href="https://www.amf-france.org/fr/actualites-publications/actualites/conseillers-en-investissements-financiers-cif-chiffres-cles-2024" rel="noopener">chiffres clés des CIF</a>.
      Les CIF relèvent d'associations agréées, parmi lesquelles l'ANACOFI-CIF, la CNCGP, la CNCEF et la Compagnie CIF.
    </p>
    <p class="content-note">
      Le formulaire et son calendrier évoluent et les rubriques peuvent varier : votre association reste la référence pour
      la version en vigueur et la date limite.
    </p>

    <h2>Les chiffres à préparer</h2>
    <div class="content-table">
      <table>
        <thead>
          <tr><th>Donnée</th><th>D'où elle vient</th></tr>
        </thead>
        <tbody>
          <tr><td>Rétrocessions de l'activité CIF</td><td>Commissions de l'exercice, nature et activité</td></tr>
          <tr><td>Honoraires</td><td>Commissions de nature honoraires, si vous les suivez dans le même outil</td></tr>
          <tr><td>Courtage et autres activités</td><td>Commissions de l'exercice, par activité</td></tr>
          <tr><td>Nombre de clients et de contrats</td><td>Base de contrats du cabinet</td></tr>
          <tr><td>Encours au 31 décembre</td><td>Dernier encours connu par contrat</td></tr>
          <tr><td>Réclamations, effectif et autres</td><td>À compléter à la main</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Trois points à régler avant de calculer</h2>
    <ol>
      <li><strong>Classer chaque commission.</strong> Sans nature et sans activité, impossible de séparer rétrocessions, honoraires et courtage. Traitez d'abord les lignes non classées.</li>
      <li><strong>Choisir la bonne période.</strong> Vérifiez si vous raisonnez par date de période ou de versement, et restez cohérent d'une année à l'autre.</li>
      <li><strong>Compléter les bordereaux manquants.</strong> Un bordereau de décembre arrivé en janvier appartient souvent à l'exercice : <router-link to="/guide-commissions-manquantes">vérifiez que rien ne manque</router-link> avant de figer les chiffres.</li>
    </ol>

    <h2>Le faire avec Conance</h2>
    <p>
      Conance prépare les chiffres et ne dépose pas la déclaration à votre place. Rétrocessions, honoraires et courtage de
      l'exercice, clients, contrats et encours au 31 décembre se calculent à partir de vos commissions. Les rubriques se
      règlent selon vos natures de commission, une alerte indique les données manquantes, et le tout s'exporte en Excel.
      <router-link to="/logiciel-gestion-commissions-cgp">Voir le logiciel</router-link>.
    </p>
  </ContentPage>
</template>

<script setup lang="ts">
import ContentPage from '../../components/ContentPage.vue'
</script>
