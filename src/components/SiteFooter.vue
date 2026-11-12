<template>
  <footer class="text-blanc py-12 bg-deep">
    <div class="container">
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center mb-4">
            <img src="/logo-conance-white.svg" alt="Conance" class="h-8 w-auto" />
          </div>
          <p class="text-brume-2">
            Logiciel de gestion des commissions pour les cabinets de conseil en gestion de patrimoine.
          </p>
          <ThemeSelector sur-sombre class="mt-6" />
        </div>

        <div>
          <h4 class="font-semibold mb-4">Produit</h4>
          <ul class="space-y-2 text-brume-2">
            <li><router-link to="/#fonctionnalites" class="hover:text-blanc transition-colors">Fonctionnalités</router-link></li>
            <li><router-link to="/comparatif-gestion-commissions-cgp" class="hover:text-blanc transition-colors">Comparer les approches</router-link></li>
            <li><router-link to="/tarifs" class="hover:text-blanc transition-colors">Tarifs</router-link></li>
            <li><a href="https://app.conance.io/login" class="hover:text-blanc transition-colors">Se connecter</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Ressources</h4>
          <ul class="space-y-2 text-brume-2">
            <li><router-link to="/guides" class="hover:text-blanc transition-colors">Guides</router-link></li>
            <li><router-link to="/a-propos" class="hover:text-blanc transition-colors">À propos</router-link></li>
            <li><a href="https://docs.conance.io" target="_blank" class="hover:text-blanc transition-colors">Documentation</a></li>
            <li><a href="https://www.linkedin.com/company/conance-io/" target="_blank" rel="noopener" class="hover:text-blanc transition-colors">LinkedIn</a></li>
            <li><router-link to="/contact" class="hover:text-blanc transition-colors">Contact</router-link></li>
            <li><a href="mailto:contact@conance.io" class="hover:text-blanc transition-colors">Support</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Légal</h4>
          <ul class="space-y-2 text-brume-2">
            <li><router-link to="/cgu" class="hover:text-blanc transition-colors">CGU</router-link></li>
            <li><router-link to="/mentions-legales" class="hover:text-blanc transition-colors">Mentions légales</router-link></li>
            <li><router-link to="/politique-confidentialite" class="hover:text-blanc transition-colors">Politique de confidentialité</router-link></li>
          </ul>
        </div>
      </div>

      <div class="pt-8 mt-8 text-center text-brume-2">
        <p>&copy; {{ currentYear }} Conance. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import ThemeSelector from './ThemeSelector.vue'

const currentYear = new Date().getFullYear()
</script>
