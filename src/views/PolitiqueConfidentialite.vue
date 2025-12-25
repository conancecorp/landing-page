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
          <router-link to="/" class="text-gray-600 hover:text-primary-500 transition-colors text-sm">
            Retour à l'accueil
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Contenu Politique de Confidentialité -->
    <div class="container pt-28 pb-12">
      <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-12">
        <h1 class="heading-font text-3xl md:text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>

        <div class="prose prose-lg max-w-none">
          <p class="text-gray-500 mb-8">Dernière mise à jour : {{ lastUpdate }}</p>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p class="text-gray-600 mb-4">
              La présente Politique de Confidentialité décrit comment Conance collecte, utilise et protège
              vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD)
              et à la loi Informatique et Libertés.
            </p>
            <p class="text-gray-600 mb-4">
              En utilisant notre Service, vous acceptez les pratiques décrites dans cette politique.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">2. Responsable du traitement</h2>
            <p class="text-gray-600 mb-4">
              Le responsable du traitement des données personnelles est :
            </p>
            <ul class="list-none text-gray-600 space-y-1 mb-4">
              <li><strong>Conance</strong></li>
              <li>Elouan BESSETTES, Auto-entrepreneur</li>
              <li>SIRET : 991 505 694 00018</li>
              <li>Email : <a href="mailto:contact@conance.io" class="text-primary-500 hover:text-primary-700">contact@conance.io</a></li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">3. Données collectées</h2>
            <p class="text-gray-600 mb-4">
              Nous collectons les catégories de données suivantes :
            </p>

            <h3 class="heading-font text-lg font-semibold text-gray-800 mb-3">3.1. Données d'identification</h3>
            <ul class="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Nom et prénom</li>
              <li>Adresse email professionnelle</li>
              <li>Nom de l'entreprise</li>
              <li>Numéro de téléphone (optionnel)</li>
            </ul>

            <h3 class="heading-font text-lg font-semibold text-gray-800 mb-3">3.2. Données de connexion</h3>
            <ul class="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Adresse IP</li>
              <li>Date et heure de connexion</li>
              <li>Type de navigateur et système d'exploitation</li>
              <li>Pages visitées et actions effectuées</li>
            </ul>

            <h3 class="heading-font text-lg font-semibold text-gray-800 mb-3">3.3. Données métier</h3>
            <ul class="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Données de commissions importées</li>
              <li>Informations sur les contrats et partenaires</li>
              <li>Rapports et exports générés</li>
            </ul>

            <h3 class="heading-font text-lg font-semibold text-gray-800 mb-3">3.4. Données de paiement</h3>
            <ul class="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Historique des transactions</li>
              <li>Les données de carte bancaire sont traitées directement par Stripe et ne sont jamais stockées sur nos serveurs</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">4. Finalités du traitement</h2>
            <p class="text-gray-600 mb-4">
              Vos données sont collectées et traitées pour les finalités suivantes :
            </p>
            <ul class="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li><strong>Fourniture du Service</strong> : gestion de votre compte, accès aux fonctionnalités</li>
              <li><strong>Facturation</strong> : émission des factures, gestion des paiements</li>
              <li><strong>Support client</strong> : réponse à vos demandes, assistance technique</li>
              <li><strong>Amélioration du Service</strong> : analyse d'usage anonymisée, correction de bugs</li>
              <li><strong>Communication</strong> : notifications importantes, mises à jour du Service</li>
              <li><strong>Conformité légale</strong> : respect des obligations légales et fiscales</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">5. Base légale du traitement</h2>
            <p class="text-gray-600 mb-4">
              Le traitement de vos données repose sur les bases légales suivantes :
            </p>
            <ul class="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li><strong>Exécution du contrat</strong> : fourniture du Service auquel vous avez souscrit</li>
              <li><strong>Intérêt légitime</strong> : amélioration du Service, prévention de la fraude</li>
              <li><strong>Obligation légale</strong> : conservation des factures, réponse aux autorités</li>
              <li><strong>Consentement</strong> : pour les communications marketing (si applicable)</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">6. Destinataires des données</h2>
            <p class="text-gray-600 mb-4">
              Vos données peuvent être partagées avec les destinataires suivants :
            </p>
            <ul class="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li><strong>Stripe</strong> : traitement des paiements (certifié PCI-DSS)</li>
              <li><strong>Scaleway</strong> : hébergement des données (serveurs en France)</li>
              <li><strong>Umami</strong> : analyse d'audience anonymisée (hébergé en Europe, sans cookies)</li>
            </ul>
            <p class="text-gray-600 mb-4">
              Nous ne vendons jamais vos données personnelles à des tiers. Nous ne partageons vos données
              qu'avec des prestataires essentiels au fonctionnement du Service, tous soumis à des obligations
              contractuelles de confidentialité.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">7. Transferts hors UE</h2>
            <p class="text-gray-600 mb-4">
              Vos données sont principalement hébergées et traitées au sein de l'Union Européenne (France).
            </p>
            <p class="text-gray-600 mb-4">
              Certains de nos prestataires (notamment Stripe) peuvent traiter des données aux États-Unis.
              Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types,
              Data Privacy Framework).
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">8. Durée de conservation</h2>
            <p class="text-gray-600 mb-4">
              Nous conservons vos données personnelles selon les durées suivantes :
            </p>
            <ul class="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li><strong>Données de compte</strong> : pendant la durée de votre abonnement + 3 ans après résiliation</li>
              <li><strong>Données métier</strong> : 90 jours après résiliation, puis suppression définitive (export possible avant suppression)</li>
              <li><strong>Factures et données comptables</strong> : 10 ans (obligation légale)</li>
              <li><strong>Logs de connexion</strong> : 1 an</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">9. Sécurité des données</h2>
            <p class="text-gray-600 mb-4">
              Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données :
            </p>
            <ul class="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Chiffrement des données en transit (HTTPS/TLS)</li>
              <li>Chiffrement des données au repos</li>
              <li>Authentification sécurisée avec hachage des mots de passe</li>
              <li>Accès limité aux données (principe du moindre privilège)</li>
              <li>Sauvegardes régulières et chiffrées</li>
              <li>Surveillance et alertes de sécurité</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">10. Vos droits</h2>
            <p class="text-gray-600 mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul class="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li><strong>Droit d'accès</strong> : obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes</li>
              <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit à la limitation</strong> : restreindre le traitement de vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
            </ul>
            <p class="text-gray-600 mb-4">
              Pour exercer ces droits, contactez-nous à
              <a href="mailto:contact@conance.io" class="text-primary-500 hover:text-primary-700">contact@conance.io</a>.
              Nous répondrons dans un délai d'un mois.
            </p>
            <p class="text-gray-600 mb-4">
              Vous pouvez également introduire une réclamation auprès de la CNIL :
              <a href="https://www.cnil.fr" target="_blank" rel="noopener" class="text-primary-500 hover:text-primary-700">www.cnil.fr</a>
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">11. Cookies et traceurs</h2>
            <p class="text-gray-600 mb-4">
              Nous utilisons des cookies et traceurs dans le cadre suivant :
            </p>

            <h3 class="heading-font text-lg font-semibold text-gray-800 mb-3">Cookies strictement nécessaires</h3>
            <p class="text-gray-600 mb-4">
              Ces cookies sont indispensables au fonctionnement du Service (authentification, session).
              Ils ne nécessitent pas votre consentement.
            </p>

            <h3 class="heading-font text-lg font-semibold text-gray-800 mb-3">Analyse d'audience</h3>
            <p class="text-gray-600 mb-4">
              Nous utilisons Umami, une solution d'analyse respectueuse de la vie privée :
            </p>
            <ul class="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Aucun cookie déposé sur votre navigateur</li>
              <li>Aucune donnée personnelle collectée</li>
              <li>Données anonymisées et agrégées uniquement</li>
              <li>Hébergement en Europe</li>
              <li>Conforme RGPD sans consentement requis</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">12. Modifications de la politique</h2>
            <p class="text-gray-600 mb-4">
              Nous pouvons mettre à jour cette Politique de Confidentialité. En cas de modification substantielle,
              nous vous en informerons par email et/ou par affichage dans l'application.
            </p>
            <p class="text-gray-600 mb-4">
              Nous vous encourageons à consulter régulièrement cette page pour rester informé.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">13. Contact</h2>
            <p class="text-gray-600">
              Pour toute question concernant cette Politique de Confidentialité ou vos données personnelles,
              contactez-nous à :
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
  name: 'PolitiqueConfidentialite',
  data() {
    return {
      lastUpdate: '25 décembre 2025'
    }
  }
}
</script>
