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
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">2. Définitions</h2>
            <ul class="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Service</strong> : La plateforme Conance accessible à l'adresse app.conance.io</li>
              <li><strong>Utilisateur</strong> : Toute personne physique ou morale utilisant le Service</li>
              <li><strong>Client</strong> : Utilisateur ayant souscrit à un abonnement payant</li>
              <li><strong>Données</strong> : Informations saisies, importées ou générées par l'Utilisateur</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">3. Accès au Service</h2>
            <p class="text-gray-600 mb-4">
              L'accès au Service nécessite la création d'un compte utilisateur. L'Utilisateur s'engage à fournir
              des informations exactes et à maintenir la confidentialité de ses identifiants.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">4. Abonnements et facturation</h2>
            <p class="text-gray-600 mb-4">
              Le Service est proposé selon différents plans d'abonnement. Les tarifs sont indiqués sur le site
              et peuvent être modifiés moyennant un préavis de 30 jours.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">5. Protection des données</h2>
            <p class="text-gray-600 mb-4">
              Conance s'engage à protéger les données personnelles conformément au RGPD.
              Les données sont hébergées en Europe et ne sont jamais partagées avec des tiers sans consentement.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">6. Responsabilités</h2>
            <p class="text-gray-600 mb-4">
              L'Utilisateur est seul responsable de l'utilisation qu'il fait du Service et des données qu'il y intègre.
              Conance ne peut être tenu responsable des dommages résultant d'une utilisation inappropriée.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">7. Résiliation</h2>
            <p class="text-gray-600 mb-4">
              L'abonnement peut être résilié à tout moment. En cas de résiliation, l'accès au Service est maintenu
              jusqu'à la fin de la période payée.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">8. Droit applicable</h2>
            <p class="text-gray-600 mb-4">
              Les présentes CGU sont régies par le droit français. En cas de litige, les tribunaux français
              seront seuls compétents.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="heading-font text-xl md:text-2xl font-semibold text-gray-900 mb-4">9. Contact</h2>
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
      lastUpdate: '25 juin 2025'
    }
  }
}
</script>
