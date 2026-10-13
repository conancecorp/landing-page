<template>
  <!-- Clair / Sombre / Système, comme dans le menu du profil de l'app : une pastille glisse
       sous l'icône choisie -->
  <div
    class="selecteur-theme"
    :class="{ 'selecteur-theme--sur-sombre': surSombre }"
    role="radiogroup"
    aria-label="Thème"
    :style="{ '--index': index }"
  >
    <span class="selecteur-theme-pastille" aria-hidden="true"></span>
    <button
      v-for="option in options"
      :key="option.valeur"
      type="button"
      role="radio"
      :aria-checked="choixTheme === option.valeur"
      :aria-label="option.libelle"
      :title="option.libelle"
      :class="{ 'is-actif': choixTheme === option.valeur }"
      @click="choisirTheme(option.valeur)"
    >
      <i :class="['pi', option.icone]"></i>
    </button>
  </div>
</template>

<script>
import { choixTheme, choisirTheme } from '../theme'

const OPTIONS = [
  { valeur: 'light', icone: 'pi-sun', libelle: 'Thème clair' },
  { valeur: 'dark', icone: 'pi-moon', libelle: 'Thème sombre' },
  { valeur: 'system', icone: 'pi-desktop', libelle: 'Thème du système' }
]

export default {
  name: 'ThemeSelector',
  props: {
    // Posé sur le vert profond (héros, pied de page) : couleurs claires
    surSombre: { type: Boolean, default: false }
  },
  setup() {
    return { choixTheme, choisirTheme, options: OPTIONS }
  },
  computed: {
    index() {
      return OPTIONS.findIndex((o) => o.valeur === this.choixTheme)
    }
  }
}
</script>

<style scoped>
.selecteur-theme {
  position: relative;
  display: inline-flex;
  padding: 2px;
  border: 1px solid var(--bordure);
  border-radius: 9999px;
  background: var(--carte-alt);
}

.selecteur-theme-pastille {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  background: var(--carte);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  transform: translateX(calc(var(--index) * 28px));
  transition: transform 0.3s cubic-bezier(0.3, 0.7, 0.4, 1);
}

button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  color: var(--texte-4);
  font-size: 0.75rem;
  cursor: pointer;
  transition: color 0.2s ease;
}

button:hover,
button.is-actif {
  color: var(--texte);
}

button:focus-visible {
  outline: 2px solid var(--vert-texte);
  outline-offset: 1px;
}

.selecteur-theme--sur-sombre {
  border-color: rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
}

.selecteur-theme--sur-sombre .selecteur-theme-pastille {
  background: rgba(255, 255, 255, 0.16);
  box-shadow: none;
}

.selecteur-theme--sur-sombre button {
  color: rgba(234, 232, 227, 0.6);
}

.selecteur-theme--sur-sombre button:hover,
.selecteur-theme--sur-sombre button.is-actif {
  color: #ffffff;
}

@media (prefers-reduced-motion: reduce) {
  .selecteur-theme-pastille {
    transition: none;
  }
}
</style>
