<template>
  <!-- Decorative example from the demo cabinet, same figures as the Pilotage capture -->
  <div class="pastille ill-card" aria-hidden="true">
    <div class="pastille-entete">
      <span class="pastille-tuile"><i class="pi pi-chart-bar"></i></span>
      <span class="pastille-etiquette">Prévisionnel de l'année</span>
    </div>
    <strong class="pastille-chiffre">~424 490 €</strong>
    <div class="mini-barres">
      <span v-for="(height, i) in bars" :key="i" :class="{ 'a-venir': i >= 9 }" :style="{ height: `${height}%`, '--i': i }"></span>
    </div>
    <div class="mini-mois"><span v-for="(month, i) in 'JFMAMJJASOND'" :key="i">{{ month }}</span></div>
    <div class="mini-legende"><span>Encaissé</span><span class="a-venir">À venir</span></div>
  </div>
</template>

<script setup lang="ts">
const monthly = [15, 17, 52, 22, 30, 80, 16, 17, 62, 12, 17, 85]
const bars = monthly.map((value) => Math.round((value / Math.max(...monthly)) * 100))
</script>
