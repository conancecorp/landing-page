<template>
  <ContentPage title="Prévoir ses commissions de l'année, contrat par contrat">
    <p class="content-lead">
      Pour estimer ce qu'il reste à encaisser d'ici décembre, il faut séparer les commissions récurrentes des
      commissions ponctuelles, puis projeter le récurrent contrat par contrat à partir de son rythme réel. Le résultat
      reste une estimation : il dit ce qui devrait arriver si les contrats continuent comme ils ont payé jusqu'ici.
    </p>

    <h2>Récurrent et ponctuel ne se prévoient pas pareil</h2>
    <div class="content-table">
      <table>
        <thead>
          <tr><th></th><th>Commissions récurrentes</th><th>Commissions ponctuelles</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Exemple</strong></td><td>Commissions sur encours</td><td>Droits d'entrée</td></tr>
          <tr><td><strong>Dépend de</strong></td><td>Ce qui est déjà en portefeuille</td><td>Ce qui sera souscrit</td></tr>
          <tr><td><strong>Se prévoit avec</strong></td><td>Le rythme de chaque contrat</td><td>Les opérations annoncées</td></tr>
        </tbody>
      </table>
    </div>

    <h2>La méthode, contrat par contrat</h2>
    <ol>
      <li>Relevez le rythme observé de chaque contrat : mensuel, trimestriel, semestriel, annuel.</li>
      <li>Projetez les prochaines échéances jusqu'à la fin de l'année, à partir de la date du dernier versement.</li>
      <li>Estimez le montant de chaque échéance à partir des derniers versements.</li>
      <li>Additionnez ce qui est déjà encaissé et ce qui reste à venir, mois par mois.</li>
      <li>Isolez ce qui repose sur des contrats déjà en retard : cette part est la moins sûre.</li>
    </ol>

    <h2>Les limites à garder en tête</h2>
    <ul>
      <li>Un contrat vu une seule fois n'a pas encore de rythme : mieux vaut ne pas le projeter.</li>
      <li>Un encours qui baisse ou qui monte fait varier les prochaines commissions.</li>
      <li>Les versements groupés en fin de trimestre ou d'année créent des pics à ne pas confondre avec une tendance.</li>
    </ul>

    <h2>À quoi sert ce chiffre ?</h2>
    <p>
      À piloter le cabinet : trésorerie, décisions d'embauche, discussion avec l'associé ou l'expert-comptable. Il
      permet aussi de voir plus tôt qu'un partenaire ou un contrat ne verse pas ce qu'il devrait.
    </p>

    <h2>Le faire avec Conance</h2>
    <p>
      Conance lit le rythme de chaque contrat dans vos bordereaux et affiche le prévisionnel de l'année : l'encaissé,
      l'à-venir jusqu'en décembre et la part qui repose sur des contrats en retard. Un rythme mal compris se corrige,
      un contrat se retire du prévisionnel.
      <router-link to="/logiciel-gestion-commissions-cgp">Voir le logiciel</router-link>.
    </p>
  </ContentPage>
</template>

<script setup lang="ts">
import ContentPage from '../../components/ContentPage.vue'
</script>
