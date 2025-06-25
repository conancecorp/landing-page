<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation simple -->
    <nav class="bg-white border-b border-gray-200">
      <div class="container">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <router-link to="/" class="flex items-center">
              <img src="/logo-conance.svg" alt="Conance" class="h-8 w-auto" />
            </router-link>
          </div>
          <router-link to="/" class="text-gray-600 hover:text-primary-600 transition-colors">
            Retour à l'accueil
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Contenu Mentions Légales -->
    <div class="container py-12">
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
        
        <div class="prose prose-lg max-w-none">
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Éditeur du site</h2>
            <div class="text-gray-700 space-y-2">
              <p><strong>Raison sociale :</strong> Conance</p>
              <p><strong>Forme juridique :</strong> Auto-entreprise</p>
              <p><strong>SIRET :</strong> [À compléter]</p>
              <p><strong>Adresse :</strong> 4 Quai François Mitterrand, 44200 Nantes, France</p>
              <p><strong>Téléphone :</strong> 06 99 96 46 97</p>
              <p><strong>Email :</strong> <a href="mailto:contact@conance.io" class="text-primary-600">contact@conance.io</a></p>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Directeur de la publication</h2>
            <div class="text-gray-700">
              <p><strong>Nom :</strong> Elouan BESSETTES</p>
              <p><strong>Qualité :</strong> Auto-entrepreneur</p>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Hébergement</h2>
            <div class="text-gray-700 space-y-2">
              <p><strong>Hébergeur de l'application :</strong> Scaleway SAS</p>
              <p><strong>Adresse :</strong> 8 rue de la Ville l'Évêque, 75008 Paris, France</p>
              <p><strong>Site web :</strong> <a href="https://www.scaleway.com" class="text-primary-600" target="_blank">https://www.scaleway.com</a></p>
              <br>
              <p><strong>Hébergeur du site vitrine :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
              <p><strong>Site web :</strong> <a href="https://vercel.com" class="text-primary-600" target="_blank">https://vercel.com</a></p>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Propriété intellectuelle</h2>
            <p class="text-gray-700 mb-4">
              Le site Conance et l'ensemble de son contenu (textes, images, graphismes, logo, icônes, sons, logiciels)
              sont la propriété exclusive de Conance, à l'exception des marques, logos ou contenus
              appartenant à d'autres sociétés partenaires ou tiers.
            </p>
            <p class="text-gray-700">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments
              du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Protection des données personnelles</h2>
            <p class="text-gray-700 mb-4">
              Conance respecte la réglementation en vigueur relative à la protection des données personnelles,
              notamment le Règlement Général sur la Protection des Données (RGPD).
            </p>
            <p class="text-gray-700">
              Pour plus d'informations sur le traitement de vos données personnelles, consultez notre politique
              de confidentialité.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
            <p class="text-gray-700">
              Le site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic.
              Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités
              du site pourraient être altérées.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Responsabilité</h2>
            <p class="text-gray-700">
              Les informations diffusées sur le site sont réputées fiables. Toutefois, Conance ne peut garantir
              l'exactitude ou la pertinence de ces informations. En conséquence, l'utilisation des informations
              et contenus disponibles sur l'ensemble du site ne sauraient en aucun cas engager la responsabilité
              de Conance.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Droit applicable et juridiction</h2>
            <p class="text-gray-700">
              Les présentes mentions légales sont régies par le droit français. En cas de litige,
              et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p class="text-gray-700">
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter à :
              <a href="mailto:contact@conance.io" class="text-primary-600 hover:text-primary-700">contact@conance.io</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MentionsLegales'
}
</script> 