<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div class="container">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <a href="/" class="flex items-center">
              <img src="/logo-conance.svg" alt="Conance" class="h-8 w-auto" />
            </a>
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="#fonctionnalites" class="text-gray-600 hover:text-primary-500 transition-colors">Fonctionnalités</a>
            <a href="#tarifs" class="text-gray-600 hover:text-primary-500 transition-colors">Tarifs</a>
            <a href="#contact" class="text-gray-600 hover:text-primary-500 transition-colors">Contact</a>
          </div>
          <div class="flex items-center space-x-4">
            <a href="https://app.conance.io" class="btn-primary">Se connecter</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20" style="background-color: #0F2F2C;">
      <div class="container">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
            Simplifiez la gestion des commissions de votre cabinet
          </h1>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Solution SaaS complète pour les cabinets de gestion de patrimoine. 
            Gérez vos conseillers, clients, contrats et commissions en toute simplicité.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://app.conance.io" class="btn-primary text-lg px-8 py-4">
              Démarrer gratuitement
            </a>
            <a href="#tarifs" class="btn-secondary text-lg px-8 py-4">
              Voir les tarifs
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Fonctionnalités Section -->
    <section id="fonctionnalites" class="py-20 bg-white">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Une solution complète pour optimiser la gestion de votre cabinet
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <i class="pi pi-users text-primary-500 text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Gestion des conseillers et clients</h3>
            <p class="text-gray-600">Centralisez toutes les informations de vos conseillers et clients dans une interface intuitive.</p>
          </div>

          <div class="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <i class="pi pi-file-edit text-primary-500 text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Suivi des contrats et commissions</h3>
            <p class="text-gray-600">Gérez vos contrats et calculez automatiquement les commissions associées.</p>
          </div>

          <div class="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <i class="pi pi-upload text-primary-500 text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Import/export de données</h3>
            <p class="text-gray-600">Importez facilement vos données existantes et exportez vos rapports en quelques clics.</p>
          </div>

          <div class="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <i class="pi pi-chart-line text-primary-500 text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Tableaux de bord et rapports</h3>
            <p class="text-gray-600">Visualisez vos performances avec des tableaux de bord interactifs et des rapports détaillés.</p>
          </div>

          <div class="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <i class="pi pi-building text-primary-500 text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Gestion multi-entreprises</h3>
            <p class="text-gray-600">Gérez plusieurs entreprises avec une séparation stricte des données et des accès.</p>
          </div>

          <div class="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <i class="pi pi-shield text-primary-500 text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Rôles et permissions avancés</h3>
            <p class="text-gray-600">Contrôlez finement les accès avec un système de rôles et permissions personnalisables.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tarifs Section -->
    <section id="tarifs" class="py-20 bg-gray-50">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Tarifs transparents
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez le plan qui correspond à la taille de votre cabinet
          </p>
        </div>

        <div class="grid md:grid-cols-5 gap-6 max-w-7xl mx-auto items-stretch">
          <!-- Plan Gratuit -->
          <div class="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Gratuit</h3>
              <p class="text-gray-600 mb-4 text-sm">Pour découvrir Conance</p>
              <div class="mb-4">
                <span class="text-3xl font-bold text-gray-900">0€</span>
                <span class="text-gray-600">/mois</span>
              </div>
            </div>
            <ul class="space-y-2 mb-6 flex-grow text-sm">
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>5 000 commissions</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>3 partenaires</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>3 utilisateurs</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>1 Go de stockage</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Support communautaire</span>
              </li>
            </ul>
            <a href="https://app.conance.io" class="w-full btn-secondary text-center block mt-auto text-sm">Commencer gratuitement</a>
          </div>

          <!-- Plan Starter -->
          <div class="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <p class="text-gray-600 mb-4 text-sm">Pour les petites structures</p>
              <div class="mb-4">
                <span class="text-3xl font-bold text-gray-900">100€</span>
                <span class="text-gray-600">/mois</span>
              </div>
            </div>
            <ul class="space-y-2 mb-6 flex-grow text-sm">
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>500 000 commissions</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>10 partenaires</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>3 utilisateurs</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>10 Go de stockage</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Support email</span>
              </li>
            </ul>
            <a href="https://app.conance.io" class="w-full btn-secondary text-center block mt-auto text-sm">Choisir ce plan</a>
          </div>

          <!-- Plan Standard -->
          <div class="bg-white rounded-lg shadow-lg p-6 border-2 border-primary-500 relative flex flex-col">
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span class="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">Populaire</span>
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Standard</h3>
              <p class="text-gray-600 mb-4 text-sm">Pour les cabinets en croissance</p>
              <div class="mb-4">
                <span class="text-3xl font-bold text-gray-900">200€</span>
                <span class="text-gray-600">/mois</span>
              </div>
            </div>
            <ul class="space-y-2 mb-6 flex-grow text-sm">
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>2 millions de commissions</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>25 partenaires</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>10 utilisateurs</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>50 Go de stockage</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Support premium</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Accès API</span>
              </li>
            </ul>
            <a href="https://app.conance.io" class="w-full btn-primary text-center block mt-auto text-sm">Choisir ce plan</a>
          </div>

          <!-- Plan Premium -->
          <div class="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Premium</h3>
              <p class="text-gray-600 mb-4 text-sm">Pour les grands cabinets</p>
              <div class="mb-4">
                <span class="text-3xl font-bold text-gray-900">400€</span>
                <span class="text-gray-600">/mois</span>
              </div>
            </div>
            <ul class="space-y-2 mb-6 flex-grow text-sm">
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>10 millions de commissions</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>100 partenaires</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>25 utilisateurs</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>100 Go de stockage</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Support prioritaire</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Intégrations personnalisées</span>
              </li>
            </ul>
            <a href="https://app.conance.io" class="w-full btn-secondary text-center block mt-auto text-sm">Choisir ce plan</a>
          </div>

          <!-- Plan Entreprise -->
          <div class="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col">
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Entreprise</h3>
              <p class="text-gray-600 mb-4 text-sm">Sur mesure</p>
              <div class="mb-4">
                <span class="text-2xl font-bold text-gray-900">Sur devis</span>
              </div>
            </div>
            <ul class="space-y-2 mb-6 flex-grow text-sm">
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Commissions illimitées</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Partenaires illimités</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Utilisateurs illimités</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Stockage sur mesure</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-check text-primary-500 mr-2"></i>
                <span>Support dédié</span>
              </li>
              <li class="flex items-center">
                <i class="pi pi-star text-primary-500 mr-2"></i>
                <span class="text-primary-500 font-medium">Configuration dédiée</span>
              </li>
            </ul>
            <a href="#contact" class="w-full btn-secondary text-center block mt-auto text-sm">Nous contacter</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-white">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Vous avez des questions ? Notre équipe est là pour vous aider.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 class="text-2xl font-semibold mb-6">Informations de contact</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <i class="pi pi-envelope text-primary-500 mr-4"></i>
                <span>contact@conance.io</span>
              </div>
              <div class="flex items-center">
                <i class="pi pi-phone text-primary-500 mr-4"></i>
                <span>06 99 96 46 97</span>
              </div>
              <div class="flex items-center">
                <i class="pi pi-map-marker text-primary-500 mr-4"></i>
                <span>4 Quai François Mitterrand, 44200 Nantes</span>
              </div>
            </div>
          </div>

          <div>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                  <input type="text" id="name" v-model="form.name" required 
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" id="email" v-model="form.email" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label for="company" class="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                  <input type="text" id="company" v-model="form.company"
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input type="tel" id="phone" v-model="form.phone"
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                </div>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea id="message" v-model="form.message" rows="5" required
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Décrivez votre projet ou vos besoins..."></textarea>
              </div>

              <!-- Message de statut -->
              <div v-if="statusMessage" 
                   :class="[
                     'p-4 rounded-lg border',
                     statusType === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'
                   ]">
                <div v-if="statusType === 'error'" class="whitespace-pre-line">{{ statusMessage }}</div>
                <div v-else>{{ statusMessage }}</div>
              </div>
              
              <button type="submit" class="w-full btn-primary" :disabled="isSubmitting">
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-white py-12" style="background-color: #0F2F2C;">
      <div class="container">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center mb-4">
              <img src="/logo-conance-white.svg" alt="Conance" class="h-8 w-auto" />
            </div>
            <p class="text-gray-400">
              Solution SaaS de gestion des commissions pour cabinets de gestion de patrimoine.
            </p>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Produit</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#fonctionnalites" class="hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#tarifs" class="hover:text-white transition-colors">Tarifs</a></li>
              <li><a href="https://app.conance.io" class="hover:text-white transition-colors">Se connecter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Support</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#contact" class="hover:text-white transition-colors">Contact</a></li>
              <li><a href="mailto:contact@conance.io" class="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Légal</h4>
            <ul class="space-y-2 text-gray-400">
              <li><router-link to="/cgu" class="hover:text-white transition-colors">CGU</router-link></li>
              <li><router-link to="/mentions-legales" class="hover:text-white transition-colors">Mentions légales</router-link></li>
            </ul>
          </div>
        </div>
        
        <div class="pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {{ currentYear }} Conance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { contactService } from '../services/api'

export default {
  name: 'Home',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
        company: '',
        phone: ''
      },
      isSubmitting: false,
      statusMessage: '',
      statusType: 'success', // 'success' or 'error'
      currentYear: new Date().getFullYear()
    }
  },
  methods: {
    validateForm() {
      const errors = []
      
      // Validate name
      if (!this.form.name || this.form.name.trim().length < 2) {
        errors.push('Nom: Veuillez saisir un nom d\'au moins 2 caractères')
      }
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.form.email || !emailRegex.test(this.form.email)) {
        errors.push('Email: Veuillez saisir une adresse email valide')
      }
      
      // Validate message
      if (!this.form.message || this.form.message.trim().length < 10) {
        errors.push('Message: Veuillez saisir un message d\'au moins 10 caractères')
      }
      
      // Validate optional fields
      if (this.form.company && this.form.company.length > 100) {
        errors.push('Entreprise: Le nom ne peut pas dépasser 100 caractères')
      }
      
      if (this.form.phone && this.form.phone.length > 20) {
        errors.push('Téléphone: Le numéro ne peut pas dépasser 20 caractères')
      }
      
      return errors
    },

    async submitForm() {
      this.isSubmitting = true
      this.statusMessage = ''
      
      // Validate form client-side first
      const validationErrors = this.validateForm()
      if (validationErrors.length > 0) {
        this.statusMessage = validationErrors.join('\n')
        this.statusType = 'error'
        this.isSubmitting = false
        return
      }
      
      try {
        const response = await contactService.sendContact({
          name: this.form.name.trim(),
          email: this.form.email.trim(),
          message: this.form.message.trim(),
          company: this.form.company ? this.form.company.trim() : undefined,
          phone: this.form.phone ? this.form.phone.trim() : undefined
        })
        
        if (response.success) {
          // Reset form
          this.form = {
            name: '',
            email: '',
            message: '',
            company: '',
            phone: ''
          }
          
          this.statusMessage = response.message
          this.statusType = 'success'
          
          // Scroll to top of form to show success message
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
        }
      } catch (error) {
        this.statusMessage = error.message || 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
        this.statusType = 'error'
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script> 