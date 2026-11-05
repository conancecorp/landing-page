<template>
  <ContentPage title="Logiciel de gestion des commissions pour cabinets de gestion de patrimoine">
    <p class="content-lead">
      Conance est un logiciel français en ligne qui tient la comptabilité analytique des commissions
      reçues par un cabinet de gestion de patrimoine. Il importe les bordereaux des partenaires quel que
      soit leur format, les réunit dans une base consolidée, signale ce qui manque, prévoit ce qui va
      tomber et prépare les chiffres de la FRA CIF et de la comptabilité.
    </p>

    <h2>À quoi sert un logiciel de gestion des commissions ?</h2>
    <p>
      Un cabinet reçoit des bordereaux de chacun de ses partenaires : assureurs, sociétés de gestion,
      plateformes. Chaque partenaire a son format et son rythme. Le logiciel réunit ces lignes pour répondre
      à des questions simples : combien avons-nous perçu, de qui, sur quel contrat, pour quel conseiller, et
      qu'est-ce qui n'est pas arrivé ?
    </p>
    <p>
      Ce travail se fait encore souvent sur un tableur, et c'est normal : les logiciels patrimoniaux suivent
      le client et ses placements, ce poste-là restait à couvrir.
    </p>

    <h2>Ce que fait Conance, mois après mois</h2>
    <h3>Importer</h3>
    <p>
      Excel, CSV, OpenDocument ou PDF : Conance reconnaît les colonnes, signale les erreurs avant d'écrire
      quoi que ce soit et retient le format de chaque partenaire. Une soixantaine de modèles de bordereaux
      sont prêts à l'emploi. Un import raté s'annule en entier.
    </p>
    <h3>Prévoir</h3>
    <p>
      Conance lit le rythme de chaque contrat et en déduit ce qui reste à encaisser d'ici décembre, mois par
      mois et contrat par contrat, avec la part qui repose sur des contrats en retard.
    </p>
    <h3>Contrôler</h3>
    <p>
      Un contrat qui se tait au regard de son propre rythme remonte seul, avec ce qu'il aurait dû verser. Une
      commission annoncée, un droit d'entrée par exemple, se rapproche de ce qui arrive dans les bordereaux.
    </p>
    <h3>Analyser</h3>
    <p>
      Le chiffre d'affaires se ventile par conseiller, partenaire, produit, client, nature (récurrent ou
      ponctuel), activité (CIF, courtage, IOBSP) et entité comptable, avec l'historique complet.
    </p>
    <h3>Déclarer et comptabiliser</h3>
    <p>
      Les chiffres de la FRA CIF se calculent à partir des commissions, et une alerte indique ce qu'il reste à
      compléter. L'export comptable, en FEC ou en CSV, produit une écriture par commission, à remettre à votre
      expert-comptable ou à importer dans Pennylane.
    </p>

    <h2>Pour quels cabinets ?</h2>
    <ul>
      <li><strong>Cabinets de gestion de patrimoine</strong> (CGP, CIF, courtiers), de l'indépendant au cabinet à plusieurs conseillers et plusieurs entités.</li>
      <li><strong>Prestataires</strong> qui traitent les commissions de plusieurs cabinets : un seul abonnement, un espace isolé par cabinet, une bascule en un clic.</li>
    </ul>

    <h2>Avec vos outils actuels</h2>
    <p>
      Conance ne remplace pas votre CRM ou votre logiciel patrimonial (O2S, Wizio, Majors…) : il prend le relais
      là où ils s'arrêtent. <router-link to="/comparatif-gestion-commissions-cgp">Comparer les approches</router-link>
      permet de voir ce que chacune couvre.
    </p>

    <h2>Sécurité</h2>
    <ul>
      <li>Application, base de données, fichiers et sauvegardes hébergés en France.</li>
      <li>Double authentification par code, clé d'accès ou e-mail, imposable à tout le cabinet.</li>
      <li>Rôles et permissions, fonctionnalité par fonctionnalité.</li>
      <li>L'IA propose, vous validez. Un PDF est d'abord traité sur nos serveurs ; un modèle d'IA externe n'intervient qu'après votre confirmation.</li>
    </ul>

    <h2>Tarifs</h2>
    <div class="content-table">
      <table>
        <thead>
          <tr><th>Offre</th><th>Prix par mois</th><th>Commissions</th><th>Partenaires</th><th>Utilisateurs</th></tr>
        </thead>
        <tbody>
          <tr><td>Gratuit</td><td>0 €</td><td>5 000</td><td>3</td><td>3</td></tr>
          <tr><td>Starter</td><td>100 €</td><td>500 000</td><td>10</td><td>3</td></tr>
          <tr><td>Standard</td><td>200 €</td><td>2 millions</td><td>25</td><td>10</td></tr>
          <tr><td>Premium</td><td>400 €</td><td>8 millions</td><td>75</td><td>25</td></tr>
          <tr><td>Entreprise</td><td>800 €</td><td>20 millions</td><td>Illimités</td><td>100</td></tr>
        </tbody>
      </table>
    </div>
    <p class="content-note">
      L'abonnement annuel offre 2 mois. Les offres Multi-Cabinets coûtent 180, 550 ou 1 000 € par mois pour 3, 10
      ou 25 cabinets inclus. <router-link to="/#tarifs">Voir le détail des offres</router-link>.
    </p>

    <h2>Pour aller plus loin</h2>
    <ul>
      <li><router-link to="/guide-rapprochement-bordereaux-commissions">Rapprocher ses bordereaux de commissions</router-link></li>
      <li><router-link to="/guide-commissions-manquantes">Repérer les commissions manquantes</router-link></li>
      <li><router-link to="/guide-prevision-commissions">Prévoir ses commissions de l'année</router-link></li>
      <li><router-link to="/guide-chiffres-fra-cif">Préparer les chiffres de la FRA CIF</router-link></li>
    </ul>
  </ContentPage>
</template>

<script setup lang="ts">
import ContentPage from '../../components/ContentPage.vue'
</script>
