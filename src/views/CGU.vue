<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Floating Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div class="navbar-floating-light max-w-6xl mx-auto">
        <div class="flex justify-between items-center h-14 px-4 sm:px-6">
          <div class="flex items-center">
            <router-link to="/" class="flex items-center">
              <img src="/logo-conance.svg" alt="Conance" class="h-7 w-auto" />
            </router-link>
          </div>
          <div class="flex items-center space-x-6">
            <router-link to="/cgu" class="text-sm font-medium text-primary-500">CGU</router-link>
            <router-link to="/mentions-legales" class="text-sm text-gray-600 hover:text-primary-500 transition-colors">Mentions légales</router-link>
            <router-link to="/politique-confidentialite" class="text-sm text-gray-600 hover:text-primary-500 transition-colors">Confidentialité</router-link>
            <router-link to="/" class="text-sm text-gray-600 hover:text-primary-500 transition-colors">Retour à l'accueil</router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Contenu CGU -->
    <div class="container pt-28 pb-12">
      <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-12">
        <h1 class="heading-font text-3xl md:text-4xl font-bold text-gray-900 mb-8">Conditions Générales d'Utilisation</h1>

        <div class="prose prose-lg max-w-none">
          <p class="text-gray-500 mb-8">Dernière mise à jour : {{ lastUpdate }}</p>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">1. Objet</h2>
            <p class="text-gray-600 mb-4">
              Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation de la plateforme Conance,
              solution SaaS de gestion des commissions pour cabinets de gestion de patrimoine, éditée par Conance.
            </p>
            <p class="text-gray-600 mb-4">
              En vous inscrivant sur la plateforme, vous acceptez sans réserve les présentes CGU ainsi que notre
              <router-link to="/politique-confidentialite" class="text-primary-500 hover:text-primary-700">Politique de Confidentialité</router-link>.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">2. Définitions</h2>
            <ul class="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Service</strong> : La plateforme Conance accessible à l'adresse app.conance.io</li>
              <li><strong>Utilisateur</strong> : Toute personne physique ou morale utilisant le Service</li>
              <li><strong>Client</strong> : Utilisateur ayant souscrit à un abonnement payant</li>
              <li><strong>Données</strong> : Informations saisies, importées ou générées par l'Utilisateur</li>
              <li><strong>Abonnement</strong> : Formule d'accès au Service choisie par le Client</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">3. Accès au Service</h2>
            <p class="text-gray-600 mb-4">
              L'accès au Service nécessite la création d'un compte utilisateur. L'Utilisateur s'engage à fournir
              des informations exactes et à maintenir la confidentialité de ses identifiants.
            </p>
            <p class="text-gray-600 mb-4">
              L'Utilisateur est seul responsable de toute activité effectuée depuis son compte. En cas de
              suspicion d'utilisation non autorisée, l'Utilisateur doit immédiatement en informer Conance.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">4. Abonnements et tarification</h2>
            <p class="text-gray-600 mb-4">
              Le Service est proposé selon différents plans d'abonnement dont les tarifs sont indiqués sur le site.
              Les prix sont exprimés en euros hors taxes. TVA non applicable, article 293 B du CGI.
            </p>
            <p class="text-gray-600 mb-4">
              Les abonnements sont disponibles en formule mensuelle ou annuelle. L'abonnement annuel bénéficie
              d'une réduction équivalente à deux mois gratuits.
            </p>
            <p class="text-gray-600 mb-4">
              Conance se réserve le droit de modifier ses tarifs moyennant un préavis de 30 jours.
              Les nouveaux tarifs s'appliqueront au renouvellement de l'abonnement.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">5. Paiement et facturation</h2>
            <p class="text-gray-600 mb-4">
              Les paiements sont effectués par carte bancaire via notre prestataire de paiement sécurisé Stripe.
              Le paiement est dû à la souscription puis à chaque date anniversaire (mensuelle ou annuelle).
            </p>
            <p class="text-gray-600 mb-4">
              En cas d'échec de paiement, Conance procédera à plusieurs tentatives de prélèvement.
              Après trois échecs consécutifs, l'accès au Service sera suspendu jusqu'à régularisation.
            </p>
            <p class="text-gray-600 mb-4">
              Une facture est émise automatiquement après chaque paiement et accessible depuis l'espace client.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">6. Droit de rétractation et remboursement</h2>
            <p class="text-gray-600 mb-4">
              Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique pas
              aux services pleinement exécutés avant la fin du délai de rétractation et dont l'exécution a commencé
              après accord préalable exprès du consommateur.
            </p>
            <p class="text-gray-600 mb-4">
              En acceptant les présentes CGU et en souscrivant à un abonnement, vous reconnaissez que le Service
              est immédiatement accessible et que vous renoncez expressément à votre droit de rétractation.
            </p>
            <p class="text-gray-600 mb-4">
              Aucun remboursement n'est prévu, sauf en cas de dysfonctionnement majeur du Service imputable à Conance.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">7. Litiges et contestations de paiement</h2>
            <p class="text-gray-600 mb-4">
              En cas de contestation concernant un paiement, le Client s'engage à contacter Conance avant d'initier
              toute procédure de chargeback auprès de sa banque.
            </p>
            <p class="text-gray-600 mb-4">
              <strong>Important :</strong> Toute contestation de paiement (chargeback) non justifiée entraînera
              la suspension immédiate du compte. En cas de litige déclaré frauduleux, le compte restera suspendu
              et le Client pourra être redevable des frais bancaires occasionnés.
            </p>
            <p class="text-gray-600 mb-4">
              Pour toute réclamation concernant la facturation, veuillez nous contacter à
              <a href="mailto:contact@conance.io" class="text-primary-500 hover:text-primary-700">contact@conance.io</a>.
              Nous nous engageons à répondre dans un délai de 48 heures ouvrées.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">8. Protection des données</h2>
            <p class="text-gray-600 mb-4">
              Conance s'engage à protéger les données personnelles conformément au Règlement Général sur la Protection
              des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
            <p class="text-gray-600 mb-4">
              Les données sont hébergées en Europe (France) et ne sont jamais partagées avec des tiers sans consentement explicite.
              Pour plus d'informations, consultez notre
              <router-link to="/politique-confidentialite" class="text-primary-500 hover:text-primary-700">Politique de Confidentialité</router-link>.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">9. Propriété des données</h2>
            <p class="text-gray-600 mb-4">
              L'Utilisateur reste propriétaire de toutes les données qu'il importe ou crée dans le Service.
              Conance n'acquiert aucun droit de propriété sur ces données.
            </p>
            <p class="text-gray-600 mb-4">
              L'Utilisateur peut exporter ses données à tout moment depuis son espace client.
              En cas de résiliation, les données restent accessibles pendant 90 jours pour permettre leur export,
              après quoi elles seront définitivement supprimées.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">10. Responsabilités</h2>
            <p class="text-gray-600 mb-4">
              L'Utilisateur est seul responsable de l'utilisation qu'il fait du Service et des données qu'il y intègre.
              Il garantit disposer des droits nécessaires sur les données importées.
            </p>
            <p class="text-gray-600 mb-4">
              Conance s'efforce de fournir un Service disponible et fonctionnel. En cas de dysfonctionnement,
              Conance s'efforcera de rétablir le Service dans les meilleurs délais.
            </p>
            <p class="text-gray-600 mb-4">
              <strong>Absence de garantie de disponibilité :</strong> Conance ne garantit pas un taux de disponibilité
              spécifique du Service (SLA/uptime). Le Service est fourni "en l'état" et peut faire l'objet d'interruptions,
              qu'elles soient planifiées (maintenance) ou non (pannes, incidents techniques, cas de force majeure).
              L'Utilisateur reconnaît et accepte que le Service puisse être temporairement indisponible sans que cela
              n'ouvre droit à indemnisation, réduction de prix ou remboursement.
            </p>
            <p class="text-gray-600 mb-4">
              <strong>Responsabilité pour faute professionnelle :</strong> Conance est responsable des dommages directs
              causés au Client par une faute professionnelle avérée dans le cadre de la fourniture du Service.
              Conance est titulaire d'une assurance Responsabilité Civile Professionnelle souscrite auprès d'AIG Europe SA
              (voir les <router-link to="/mentions-legales" class="text-primary-500 hover:text-primary-700">Mentions Légales</router-link> pour les détails).
            </p>
            <p class="text-gray-600 mb-4">
              <strong>Plafond de responsabilité :</strong> La responsabilité totale de Conance, toutes causes confondues,
              est limitée au montant le plus faible entre : (a) le plafond de garantie de l'assurance RC Professionnelle
              en vigueur (soit 100 000€ à la date des présentes) et (b) le montant total des sommes effectivement versées
              par le Client au titre de son abonnement au cours des douze (12) mois précédant le fait générateur du dommage.
            </p>
            <p class="text-gray-600 mb-4">
              <strong>Exclusion des dommages indirects :</strong> En aucun cas Conance ne pourra être tenu responsable
              des dommages indirects subis par le Client, tels que notamment les pertes de chiffre d'affaires,
              de bénéfices, d'opportunités commerciales, de clientèle, d'économies escomptées, ou tout préjudice
              résultant d'une perte ou d'une altération de données.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">11. Résiliation</h2>
            <p class="text-gray-600 mb-4">
              L'abonnement peut être résilié à tout moment depuis l'espace client. La résiliation prend effet
              à la fin de la période d'abonnement en cours, sans remboursement prorata temporis.
            </p>
            <p class="text-gray-600 mb-4">
              En cas de manquement grave aux présentes CGU, Conance se réserve le droit de suspendre ou résilier
              l'accès au Service sans préavis ni indemnité.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">12. Modification des CGU</h2>
            <p class="text-gray-600 mb-4">
              Conance se réserve le droit de modifier les présentes CGU. Les modifications seront notifiées
              par email et/ou par affichage dans l'application au moins 15 jours avant leur entrée en vigueur.
            </p>
            <p class="text-gray-600 mb-4">
              L'utilisation du Service après l'entrée en vigueur des nouvelles CGU vaut acceptation de celles-ci.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">13. Droit applicable et juridiction</h2>
            <p class="text-gray-600 mb-4">
              Les présentes CGU sont régies par le droit français. En cas de litige, les parties s'engagent
              à rechercher une solution amiable avant toute action judiciaire.
            </p>
            <p class="text-gray-600 mb-4">
              À défaut de résolution amiable, les tribunaux français seront seuls compétents pour connaître
              du litige, nonobstant pluralité de défendeurs ou appel en garantie.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">14. Contact</h2>
            <p class="text-gray-600">
              Pour toute question relative aux présentes CGU, vous pouvez nous contacter à :
              <a href="mailto:contact@conance.io" class="text-primary-500 hover:text-primary-700">contact@conance.io</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CGU',
  data() {
    return {
      lastUpdate: '3 mars 2026'
    }
  }
}
</script>
