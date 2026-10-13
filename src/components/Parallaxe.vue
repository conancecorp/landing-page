<template>
  <!-- Le contenu glisse un peu moins vite que la page : --p est mesuré sur ce conteneur,
       la couche intérieure seule est déplacée (voir motion.ts) -->
  <div v-scroll class="parallaxe" :style="{ '--force': `${force}px` }">
    <div class="parallaxe-couche">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Parallaxe',
  props: {
    // Amplitude totale du glissement pendant la traversée de l'écran
    force: { type: Number, default: 70 }
  }
}
</script>
