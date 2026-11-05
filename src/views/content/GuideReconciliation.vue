<template>
  <ContentPage title="Rapprocher ses bordereaux de commissions : la méthode en cinq étapes">
    <p class="content-lead">
      Rapprocher ses bordereaux, c'est vérifier que chaque ligne reçue d'un partenaire correspond à un contrat
      connu du cabinet, à un conseiller et à un montant cohérent. La méthode tient en cinq étapes : réunir les
      fichiers, normaliser les colonnes, rattacher chaque ligne à son contrat, contrôler, puis archiver.
    </p>

    <h2>Qu'est-ce qu'un bordereau de commissions ?</h2>
    <p>
      C'est le document qu'un partenaire (assureur, société de gestion, plateforme) met à disposition du cabinet
      pour détailler, sur une période, les commissions qu'il lui verse : le plus souvent le contrat ou le client,
      le produit, la nature de la commission et le montant. Il sert aussi de justificatif comptable. Il n'existe
      pas de format commun à tous les partenaires, et un même partenaire peut en avoir plusieurs selon la nature
      de la commission.
    </p>

    <h2>1. Réunir les fichiers de la période</h2>
    <p>
      Listez vos partenaires et la fréquence de leurs bordereaux, puis cochez ce qui est arrivé. Cette liste montre
      déjà ce qui manque avant même d'ouvrir un fichier. Gardez chaque fichier source tel quel, sans le retoucher.
    </p>

    <h2>2. Normaliser les colonnes</h2>
    <p>
      Pour comparer, chaque ligne doit dire la même chose dans le même ordre : numéro de contrat, client, produit,
      nature, montant, période. Attention aux pièges classiques : lignes de total, taux à convertir, montants
      négatifs (reprises), en-têtes sur plusieurs lignes, nombres écrits à la française.
    </p>

    <h2>3. Rattacher chaque ligne à son contrat et à son conseiller</h2>
    <p>
      C'est l'étape la plus longue. Un même contrat peut être écrit différemment d'un fichier à l'autre, et certains
      bordereaux n'ont pas de numéro : il faut alors passer par le nom du client chez ce partenaire. Notez les
      correspondances trouvées pour ne pas les refaire au prochain bordereau. Quand un contrat a changé de conseiller,
      décidez à partir de quelle date ses commissions changent de main.
    </p>

    <h2>4. Contrôler</h2>
    <ul>
      <li>Doublons : le même fichier ou la même période importés deux fois.</li>
      <li>Contrats inconnus : à créer, ou mal écrits.</li>
      <li>Montants inhabituels par rapport aux versements précédents du contrat.</li>
      <li>Total du bordereau comparé au virement reçu du partenaire.</li>
      <li><router-link to="/guide-commissions-manquantes">Contrats qui auraient dû payer</router-link> et n'apparaissent pas.</li>
    </ul>

    <h2>5. Archiver et transmettre</h2>
    <p>
      Conservez le fichier source avec la période et la date de traitement : c'est votre justificatif. Transmettez
      ensuite à l'expert-comptable les écritures ou le récapitulatif attendu.
    </p>

    <h2>Le faire avec Conance</h2>
    <p>
      Conance reconnaît les colonnes et retient le format de chaque partenaire, signale les erreurs avant d'écrire
      quoi que ce soit, retrouve un contrat écrit autrement ou par le nom du client, et mémorise vos choix pour les
      prochains bordereaux. Un import raté s'annule en entier, contrats et clients créés compris.
      <router-link to="/logiciel-gestion-commissions-cgp">Voir le logiciel</router-link>.
    </p>
  </ContentPage>
</template>

<script setup lang="ts">
import ContentPage from '../../components/ContentPage.vue'
</script>
