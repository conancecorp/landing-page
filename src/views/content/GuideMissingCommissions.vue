<template>
  <ContentPage title="Repérer les commissions qui ne sont pas arrivées">
    <p class="content-lead">
      Une commission manquante ne se voit pas dans un bordereau, puisqu'elle n'y figure pas. Pour la repérer, il faut
      comparer ce qui arrive à ce qui devrait arriver : le rythme habituel de chaque contrat pour les commissions
      récurrentes, et ce qui a été annoncé pour les commissions ponctuelles.
    </p>

    <h2>Les trois cas à surveiller</h2>
    <h3>Le contrat qui se tait</h3>
    <p>
      Un contrat qui payait tous les trimestres ne verse plus rien depuis six mois. C'est le cas le plus discret :
      aucune ligne, donc aucune alerte, si personne ne compare avec le rythme passé.
    </p>
    <h3>La commission annoncée qui n'arrive pas</h3>
    <p>
      Un droit d'entrée est attendu après une souscription, mais il n'apparaît dans aucun bordereau. Il faut l'avoir
      noté au moment de la souscription pour pouvoir le constater ensuite.
    </p>
    <h3>Le montant qui diffère</h3>
    <p>
      La commission arrive, mais pas pour le montant prévu ou habituel. L'écart peut être normal, comme il peut
      mériter une question au partenaire.
    </p>

    <h2>La méthode</h2>
    <ol>
      <li>Pour chaque contrat, relevez la fréquence réelle des versements, à partir de l'historique et non du contrat théorique.</li>
      <li>Comparez la date du dernier versement à ce rythme : un contrat trimestriel sans versement depuis deux trimestres remonte.</li>
      <li>Estimez le manque à partir des derniers versements, pour traiter d'abord ce qui compte le plus.</li>
      <li>Tenez une liste des commissions annoncées, et rayez-les quand elles arrivent.</li>
    </ol>

    <h2>Avant de réclamer, vérifiez</h2>
    <p>Un silence n'est pas toujours une erreur. Les causes les plus courantes :</p>
    <ul>
      <li>le contrat a été résilié, racheté ou arbitré ;</li>
      <li>le contrat a été transféré, ou le code du cabinet a changé chez le partenaire ;</li>
      <li>le partenaire est simplement en retard sur sa période ;</li>
      <li>la commission est bien arrivée, mais rattachée à un autre numéro de contrat ;</li>
      <li>le bordereau de la période n'a pas été récupéré.</li>
    </ul>

    <h2>Le faire avec Conance</h2>
    <p>
      Conance compare chaque contrat à son propre rythme et fait remonter ceux qui se taisent, avec les versements
      manqués chiffrés. Une commission annoncée se déclare et se rapproche de ce qui arrive à l'import, et un écart
      est signalé si le montant diffère. Conance signale, vous tranchez : contrat résilié, attente annulée.
      <router-link to="/logiciel-gestion-commissions-cgp">Voir le logiciel</router-link>.
    </p>
  </ContentPage>
</template>

<script setup lang="ts">
import ContentPage from '../../components/ContentPage.vue'
</script>
