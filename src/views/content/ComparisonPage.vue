<template>
  <ContentPage title="Excel, CRM, prestataire ou logiciel dédié : comment gérer les commissions d'un cabinet">
    <p class="content-lead">
      Un cabinet de gestion de patrimoine a quatre façons de suivre ses commissions : un tableur, son CRM
      patrimonial, un prestataire ou un logiciel dédié. Le bon choix dépend du nombre de partenaires, du volume
      de lignes et du niveau d'analyse attendu. Beaucoup de cabinets en combinent plusieurs.
    </p>

    <h2>Ce que chaque approche couvre</h2>
    <div class="content-table">
      <table>
        <thead>
          <tr><th></th><th>Tableur</th><th>CRM patrimonial</th><th>Prestataire</th><th>Logiciel dédié</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Rôle principal</strong></td><td>Outil polyvalent</td><td>Clients, placements, conformité</td><td>Traitement confié à un tiers</td><td>Commissions reçues</td></tr>
          <tr><td><strong>Formats de bordereaux</strong></td><td>À reprendre à la main ou par macros</td><td>Selon l'outil, souvent hors périmètre</td><td>Pris en charge par le prestataire</td><td>Import par partenaire, format retenu</td></tr>
          <tr><td><strong>Commissions manquantes</strong></td><td>Formules à construire</td><td>Selon l'outil</td><td>Selon la prestation</td><td>Signalées à l'import et au fil des mois</td></tr>
          <tr><td><strong>Prévisionnel</strong></td><td>À construire</td><td>Selon l'outil</td><td>Selon la prestation</td><td>Selon l'outil ; contrat par contrat dans Conance</td></tr>
          <tr><td><strong>Délai pour avoir un chiffre</strong></td><td>Dépend de la mise à jour</td><td>Dépend de l'outil</td><td>Selon le calendrier de la prestation</td><td>Dès l'import</td></tr>
          <tr><td><strong>Qui fait le travail</strong></td><td>Le cabinet</td><td>Le cabinet</td><td>Le prestataire</td><td>Le cabinet, avec l'outil</td></tr>
          <tr><td><strong>Coût</strong></td><td>Licence faible, temps interne</td><td>Déjà payé, si le poste est couvert</td><td>Le plus souvent sur devis</td><td>Abonnement selon le volume</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Quand chaque approche convient</h2>
    <h3>Le tableur</h3>
    <p>
      Il convient tant que les partenaires sont peu nombreux et que celui qui l'a construit reste là pour le
      tenir. Il devient plus difficile à faire vivre quand les formats changent, quand les conseillers changent
      de contrats ou quand il faut retrouver l'historique. Les cabinets y restent souvent parce qu'aucun outil
      généraliste ne couvrait ce poste, pas par manque de méthode.
    </p>
    <h3>Le CRM patrimonial</h3>
    <p>
      Il reste l'outil de référence pour les clients, l'agrégation des encours et la conformité. Il est à garder :
      la question est de savoir si le vôtre tient aussi une comptabilité analytique des commissions reçues, avec
      vos bordereaux tels qu'ils arrivent. Vérifiez-le sur un fichier réel.
    </p>
    <h3>Le prestataire</h3>
    <p>
      Il convient quand personne dans le cabinet n'a le temps de s'en occuper, ou pour un audit ponctuel. En
      contrepartie, les chiffres arrivent au rythme de la prestation et le savoir-faire reste à l'extérieur.
    </p>
    <h3>Le logiciel dédié</h3>
    <p>
      Il convient quand le cabinet veut garder la main : chiffres disponibles dès l'import, analyse par conseiller
      ou par produit, prévisionnel. En contrepartie, quelqu'un doit déposer les bordereaux dans l'outil.
    </p>

    <h2>Où se situe Conance</h2>
    <p>
      Conance est un logiciel dédié, en libre-service, avec un tarif public et une offre gratuite pour commencer. Il
      existe aussi une offre pour les prestataires qui traitent les commissions de plusieurs cabinets.
    </p>
    <h3>Ce que Conance ne fait pas</h3>
    <ul>
      <li>Ce n'est pas un CRM : pas de suivi de la relation client ni de parcours de conformité.</li>
      <li>Il n'agrège pas les encours de vos clients. Il suit l'encours retenu par les partenaires dans leurs bordereaux.</li>
      <li>Il ne va pas chercher les bordereaux sur les extranets : vous les déposez.</li>
      <li>Il prépare les chiffres de la FRA CIF, il ne dépose pas la déclaration.</li>
    </ul>
    <p>
      <router-link to="/logiciel-gestion-commissions-cgp">Voir ce que fait Conance en détail</router-link>.
    </p>
  </ContentPage>
</template>

<script setup lang="ts">
import ContentPage from '../../components/ContentPage.vue'
</script>
