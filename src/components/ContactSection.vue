<template>
  <section id="contact" class="py-20 bg-page">
    <div class="container">
      <div class="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div>
          <h3 class="text-2xl font-semibold mb-6">Informations de contact</h3>
          <div class="space-y-4">
            <div class="flex items-center">
              <i class="pi pi-envelope text-primary-700 mr-4"></i>
              <span>contact@conance.io</span>
            </div>
            <div class="flex items-center">
              <i class="pi pi-phone text-primary-700 mr-4"></i>
              <span>06 99 96 46 97</span>
            </div>
            <div class="flex items-center">
              <i class="pi pi-map-marker text-primary-700 mr-4"></i>
              <span>4 Quai François Mitterrand, 44200 Nantes</span>
            </div>
          </div>
          <div class="mt-8 p-5 rounded-xl bg-warm">
            <p class="font-semibold text-gray-900 mb-1">Qui est derrière Conance ?</p>
            <p class="text-gray-600 mb-3">Un interlocuteur unique : celui qui développe Conance vous répond.</p>
            <router-link to="/a-propos" class="lien-fleche">En savoir plus <i class="pi pi-arrow-right"></i></router-link>
          </div>
        </div>

        <div>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                <input type="text" id="name" v-model="form.name" required 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent">
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input type="email" id="email" v-model="form.email" required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent">
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label for="company" class="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                <input type="text" id="company" v-model="form.company"
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent">
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <input type="tel" id="phone" v-model="form.phone"
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent">
              </div>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
              <textarea id="message" v-model="form.message" rows="5" required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent"
                        placeholder="Décrivez votre projet ou vos besoins..."></textarea>
            </div>

            <div>
              <label for="source" class="block text-sm font-medium text-gray-700 mb-2">Comment avez-vous connu Conance ? *</label>
              <ChoiceSelect id="source" v-model="form.source" :options="sourceOptions" placeholder="Choisir une réponse" required />
            </div>

            <div v-if="sourceNeedsDetail">
              <label for="source-detail" class="block text-sm font-medium text-gray-700 mb-2">{{ sourceDetailLabel }}</label>
              <input type="text" id="source-detail" v-model="form.sourceDetail" maxlength="100"
                     class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent">
            </div>

            <!-- Message de statut -->
            <div v-if="statusMessage" 
                 :class="[
                   'p-4 rounded-lg border',
                   statusType === 'success' ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-300 dark:border-green-900' : 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-900'
                 ]">
              <div v-if="statusType === 'error'" class="whitespace-pre-line">{{ statusMessage }}</div>
              <div v-else>{{ statusMessage }}</div>
            </div>
            
            <button type="submit" class="w-full btn-primary-card" :disabled="isSubmitting">
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { contactService } from '../services/api'
import ChoiceSelect from './ChoiceSelect.vue'

// The keys are checked by the API, which turns them back into these labels in the e-mail
const SOURCE_OPTIONS = [
  { value: 'search_engine', label: 'Recherche sur Google ou Bing' },
  { value: 'ai_assistant', label: 'Assistant IA (ChatGPT, Claude…)' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'our_outreach', label: 'E-mail ou appel de Conance' },
  { value: 'referral', label: 'Recommandation (confrère, partenaire)' },
  { value: 'directory', label: 'Comparatif ou annuaire (Capterra…)' },
  { value: 'press', label: 'Article ou presse' },
  { value: 'event', label: 'Salon ou événement' },
  { value: 'other', label: 'Autre' }
]
const DETAIL_LABELS = {
  referral: 'Qui vous a recommandé Conance ? (facultatif)',
  event: 'Quel événement ? (facultatif)',
  other: 'Précisez (facultatif)'
}

const emptyForm = () => ({ name: '', email: '', message: '', company: '', phone: '', source: '', sourceDetail: '' })

export default {
  name: 'ContactSection',
  components: { ChoiceSelect },
  data() {
    return {
      form: emptyForm(),
      sourceOptions: SOURCE_OPTIONS,
      isSubmitting: false,
      statusMessage: '',
      statusType: 'success' // 'success' or 'error'
    }
  },
  computed: {
    sourceNeedsDetail() {
      return this.form.source in DETAIL_LABELS
    },
    sourceDetailLabel() {
      return DETAIL_LABELS[this.form.source]
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
      
      if (!this.form.source) {
        errors.push('Comment avez-vous connu Conance : Veuillez choisir une réponse')
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
          phone: this.form.phone ? this.form.phone.trim() : undefined,
          source: this.form.source || undefined,
          source_detail: this.sourceNeedsDetail && this.form.sourceDetail.trim() ? this.form.sourceDetail.trim() : undefined
        })
        
        if (response.success) {
          // Reset form
          this.form = emptyForm()
          
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
