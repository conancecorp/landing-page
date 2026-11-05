<template>
  <section id="multi-cabinets" class="py-20 bg-warm">
    <div class="container">
      <!-- Sélecteurs tarifs : onglets centrés, toggle périodicité à droite -->
      <div class="relative mb-10">
        <!-- Onglets Cabinet / Multi-Cabinets (centrés) -->
        <div class="flex justify-center">
          <div class="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-xs">
            <button
              :class="['px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200', pricingTab === 'cabinet' ? 'bg-action text-blanc shadow-xs' : 'text-gray-600 hover:text-gray-900']"
              @click="pricingTab = 'cabinet'"
            >
              <i class="pi pi-building mr-2"></i>Cabinet
            </button>
            <button
              :class="['px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200', pricingTab === 'group' ? 'bg-action text-blanc shadow-xs' : 'text-gray-600 hover:text-gray-900']"
              @click="pricingTab = 'group'"
            >
              <i class="pi pi-sitemap mr-2"></i>Multi-Cabinets
            </button>
          </div>
        </div>

        <!-- Toggle coulissant Mensuel / Annuel (à droite sur desktop, centré sous les onglets sur mobile) -->
        <div class="flex justify-center mt-4 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
          <div class="inline-flex items-center gap-3 select-none">
            <span
              :class="['text-sm cursor-pointer transition-colors', billingPeriod === 'monthly' ? 'text-gray-900 font-semibold' : 'text-gray-500']"
              @click="billingPeriod = 'monthly'"
            >Mensuel</span>
            <button
              type="button"
              role="switch"
              :aria-checked="billingPeriod === 'annual'"
              aria-label="Basculer entre facturation mensuelle et annuelle"
              :class="['relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200', billingPeriod === 'annual' ? 'bg-action' : 'bg-gray-300']"
              @click="billingPeriod = billingPeriod === 'annual' ? 'monthly' : 'annual'"
            >
              <span :class="['inline-block h-4 w-4 transform rounded-full bg-blanc shadow-sm transition-transform duration-200', billingPeriod === 'annual' ? 'translate-x-6' : 'translate-x-1']"></span>
            </button>
            <span
              :class="['text-sm cursor-pointer transition-colors', billingPeriod === 'annual' ? 'text-gray-900 font-semibold' : 'text-gray-500']"
              @click="billingPeriod = 'annual'"
            >Annuel</span>
            <span class="px-2 py-0.5 rounded-full text-xs font-medium tuile-douce">2 mois offerts</span>
          </div>
        </div>
      </div>

      <!-- Plans Cabinet -->
      <div v-show="pricingTab === 'cabinet'" class="grid md:grid-cols-5 gap-6 max-w-7xl mx-auto items-stretch">
        <!-- Plan Gratuit -->
        <div v-reveal="0" class="hover-lift bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Gratuit</h3>
            <p class="text-gray-600 mb-4 text-sm">Pour découvrir Conance</p>
            <div class="mb-4">
              <span class="text-3xl font-bold text-gray-900">0€</span>
              <span class="text-gray-600">/mois</span>
            </div>
          </div>
          <ul class="space-y-2 mb-6 grow text-sm">
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>5 000 commissions</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>3 partenaires</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>3 utilisateurs</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>1 Go de stockage</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>Support par e-mail</span>
            </li>
          </ul>
          <a href="https://app.conance.io/register?plan=gratuit" class="w-full btn-secondary-light text-center block mt-auto text-sm">Commencer gratuitement</a>
        </div>

        <!-- Plan Starter -->
        <div v-reveal="80" class="hover-lift bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Starter</h3>
            <p class="text-gray-600 mb-4 text-sm">Pour les petites structures</p>
            <div class="mb-4">
              <span class="text-3xl font-bold text-gray-900">{{ displayPrice(100) }}€</span>
              <span class="text-gray-600">/mois</span>
              <p v-show="billingPeriod === 'annual'" class="text-xs text-gray-500 mt-1">soit {{ annualTotal(100) }}€/an · 2 mois offerts</p>
            </div>
          </div>
          <ul class="space-y-2 mb-6 grow text-sm">
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>500 000 commissions</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>10 partenaires</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>3 utilisateurs</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>10 Go de stockage</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>Support par e-mail</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-sparkles text-primary-700 mr-2"></i>
              <span><strong>Fonctionnalités IA</strong></span>
            </li>
          </ul>
          <a href="https://app.conance.io/register?plan=starter" class="w-full btn-secondary-light text-center block mt-auto text-sm">Choisir ce plan</a>
        </div>

        <!-- Plan Standard -->
        <div v-reveal="160" class="hover-lift bg-white rounded-lg shadow-lg p-6 border-2 border-primary-700 relative flex flex-col">
          <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span class="bg-action text-blanc px-3 py-1 rounded-full text-xs font-medium">Populaire</span>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Standard</h3>
            <p class="text-gray-600 mb-4 text-sm">Pour les cabinets en croissance</p>
            <div class="mb-4">
              <span class="text-3xl font-bold text-gray-900">{{ displayPrice(200) }}€</span>
              <span class="text-gray-600">/mois</span>
              <p v-show="billingPeriod === 'annual'" class="text-xs text-gray-500 mt-1">soit {{ annualTotal(200) }}€/an · 2 mois offerts</p>
            </div>
          </div>
          <ul class="space-y-2 mb-6 grow text-sm">
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>2 millions de commissions</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>25 partenaires</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>10 utilisateurs</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>50 Go de stockage</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>Support par e-mail</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-sparkles text-primary-700 mr-2"></i>
              <span><strong>Fonctionnalités IA</strong></span>
            </li>
          </ul>
          <a href="https://app.conance.io/register?plan=standard" class="w-full btn-primary-card text-center block mt-auto">Choisir ce plan</a>
        </div>

        <!-- Plan Premium -->
        <div v-reveal="240" class="hover-lift bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Premium</h3>
            <p class="text-gray-600 mb-4 text-sm">Pour les grands cabinets</p>
            <div class="mb-4">
              <span class="text-3xl font-bold text-gray-900">{{ displayPrice(400) }}€</span>
              <span class="text-gray-600">/mois</span>
              <p v-show="billingPeriod === 'annual'" class="text-xs text-gray-500 mt-1">soit {{ annualTotal(400) }}€/an · 2 mois offerts</p>
            </div>
          </div>
          <ul class="space-y-2 mb-6 grow text-sm">
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>8 millions de commissions</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>75 partenaires</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>25 utilisateurs</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>100 Go de stockage</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>Support par e-mail</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-sparkles text-primary-700 mr-2"></i>
              <span><strong>Fonctionnalités IA</strong></span>
            </li>
          </ul>
          <a href="https://app.conance.io/register?plan=premium" class="w-full btn-secondary-light text-center block mt-auto text-sm">Choisir ce plan</a>
        </div>

        <!-- Plan Entreprise -->
        <div v-reveal="320" class="hover-lift bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Entreprise</h3>
            <p class="text-gray-600 mb-4 text-sm">Pour les plus exigeants</p>
            <div class="mb-4">
              <span class="text-3xl font-bold text-gray-900">{{ displayPrice(800) }}€</span>
              <span class="text-gray-600">/mois</span>
              <p v-show="billingPeriod === 'annual'" class="text-xs text-gray-500 mt-1">soit {{ annualTotal(800) }}€/an · 2 mois offerts</p>
            </div>
          </div>
          <ul class="space-y-2 mb-6 grow text-sm">
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>20 millions de commissions</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>Partenaires illimités</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>100 utilisateurs</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>300 Go de stockage</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-check text-primary-700 mr-2"></i>
              <span>Support dédié</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-sparkles text-primary-700 mr-2"></i>
              <span><strong>Fonctionnalités IA</strong></span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-star text-primary-700 mr-2"></i>
              <span class="text-primary-700 font-medium">Configuration dédiée</span>
            </li>
          </ul>
          <a href="https://app.conance.io/register?plan=entreprise" class="w-full btn-secondary-light text-center block mt-auto text-sm">Choisir ce plan</a>
        </div>
      </div>

      <!-- Plans Multi-Cabinets -->
      <div v-show="pricingTab === 'group'">
        <p class="text-center text-gray-500 mb-8 max-w-3xl mx-auto">
          Pour les prestataires qui gèrent les commissions de cabinets ayant choisi d'externaliser leur gestion. Chaque cabinet dispose de son propre espace avec des quotas dédiés.
        </p>
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          <!-- Groupe Starter -->
          <div v-reveal="0" class="hover-lift bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Groupe Starter</h3>
              <p class="text-gray-600 mb-4 text-sm">Pour débuter en multi-cabinets</p>
              <div class="mb-4">
                <span class="text-3xl font-bold text-gray-900">{{ displayPrice(180) }}€</span>
                <span class="text-gray-600">/mois</span>
                <p v-show="billingPeriod === 'annual'" class="text-xs text-gray-500 mt-1">soit {{ annualTotal(180) }}€/an · 2 mois offerts</p>
              </div>
            </div>
            <ul class="space-y-2 mb-6 grow text-sm">
              <li class="flex items-center">
                <i class="pi pi-building text-primary-700 mr-2"></i>
                <span><strong>3 cabinets</strong> inclus</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>10 Go de stockage par cabinet</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>3 utilisateurs par cabinet</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>500 000 commissions par cabinet</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>10 partenaires par cabinet</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>Imports, Exports et Rapports</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-sparkles text-primary-700 mr-2"></i>
                <span><strong>Fonctionnalités IA</strong></span>
              </li>
            </ul>
            <a href="https://app.conance.io/register?plan=groupe+starter" class="w-full btn-secondary-light text-center block mt-auto text-sm">Choisir ce plan</a>
          </div>

          <!-- Groupe Standard -->
          <div v-reveal="80" class="hover-lift bg-white rounded-lg shadow-lg p-6 border-2 border-primary-700 relative flex flex-col">
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span class="bg-action text-blanc px-3 py-1 rounded-full text-xs font-medium">Populaire</span>
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Groupe Standard</h3>
              <p class="text-gray-600 mb-4 text-sm">Pour les prestataires en croissance</p>
              <div class="mb-4">
                <span class="text-3xl font-bold text-gray-900">{{ displayPrice(550) }}€</span>
                <span class="text-gray-600">/mois</span>
                <p v-show="billingPeriod === 'annual'" class="text-xs text-gray-500 mt-1">soit {{ annualTotal(550) }}€/an · 2 mois offerts</p>
              </div>
            </div>
            <ul class="space-y-2 mb-6 grow text-sm">
              <li class="flex items-center">
                <i class="pi pi-building text-primary-700 mr-2"></i>
                <span><strong>10 cabinets</strong> inclus</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>10 Go de stockage par cabinet</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>3 utilisateurs par cabinet</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>500 000 commissions par cabinet</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>10 partenaires par cabinet</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>Imports, Exports et Rapports</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-sparkles text-primary-700 mr-2"></i>
                <span><strong>Fonctionnalités IA</strong></span>
              </li>
            </ul>
            <a href="https://app.conance.io/register?plan=groupe+standard" class="w-full btn-primary-card text-center block mt-auto">Choisir ce plan</a>
          </div>

          <!-- Groupe Premium -->
          <div v-reveal="160" class="hover-lift bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Groupe Premium</h3>
              <p class="text-gray-600 mb-4 text-sm">Pour les grands prestataires</p>
              <div class="mb-4">
                <span class="text-3xl font-bold text-gray-900">{{ displayPrice(1000) }}€</span>
                <span class="text-gray-600">/mois</span>
                <p v-show="billingPeriod === 'annual'" class="text-xs text-gray-500 mt-1">soit {{ annualTotal(1000) }}€/an · 2 mois offerts</p>
              </div>
            </div>
            <ul class="space-y-2 mb-6 grow text-sm">
              <li class="flex items-center">
                <i class="pi pi-building text-primary-700 mr-2"></i>
                <span><strong>25 cabinets</strong> inclus</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>10 Go de stockage par cabinet</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>3 utilisateurs par cabinet</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>500 000 commissions par cabinet</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>10 partenaires par cabinet</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-700 mr-2"></i>
                <span>Imports, Exports et Rapports</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-sparkles text-primary-700 mr-2"></i>
                <span><strong>Fonctionnalités IA</strong></span>
              </li>
            </ul>
            <a href="https://app.conance.io/register?plan=groupe+premium" class="w-full btn-secondary-light text-center block mt-auto text-sm">Choisir ce plan</a>
          </div>
        </div>

        <p class="text-center text-gray-400 text-sm mt-6">
          Besoin de plus de cabinets ? <router-link to="/contact" class="text-primary-700 hover:underline">Contactez-nous</router-link> pour une offre sur mesure.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingSection',
  data() {
    return {
      pricingTab: 'cabinet',
      billingPeriod: 'monthly' // 'monthly' | 'annual' — l'annuel offre 2 mois (facturé 10× le mensuel)
    }
  },
  created() {
    // The Multi-Cabinets section of the home page links here with this address
    if (this.$route.hash === '#multi-cabinets') this.pricingTab = 'group'
  },
  methods: {
    // Prix mis en avant : mensuel tel quel, ou équivalent mensuel facturé annuellement (2 mois offerts → 10× le mensuel / 12)
    displayPrice(monthly) {
      const value = (this.billingPeriod === 'annual' && monthly > 0)
        ? Math.round((monthly * 10) / 12)
        : monthly
      return value.toLocaleString('fr-FR')
    },
    // Montant annuel réellement facturé (2 mois offerts)
    annualTotal(monthly) {
      return (monthly * 10).toLocaleString('fr-FR')
    }
  }
}
</script>
