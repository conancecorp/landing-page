<template>
  <!-- Decorative example from the demo cabinet: the surrounding text says the same thing -->
  <div class="pastille ill-card" aria-hidden="true">
    <div class="pastille-entete">
      <span class="pastille-tuile pastille-tuile--alerte"><i class="pi pi-bell"></i></span>
      <span>
        <span class="pastille-etiquette">Contrat CTR481471</span>
        <span class="pastille-sous">Versements trimestriels</span>
      </span>
    </div>
    <div class="ill-rhythm">
      <span v-for="(quarter, i) in quarters" :key="i" :class="{ 'is-missing': quarter.missing }" :style="{ height: `${quarter.height}%` }"></span>
    </div>
    <div class="ill-rhythm-labels"><span v-for="(quarter, i) in quarters" :key="i">{{ quarter.label }}</span></div>
    <div class="ill-rhythm-legend"><span>Versé</span><span class="is-missing">Non perçu</span></div>
    <div class="pastille-pied"><strong class="manque">~1 680 €</strong> non perçus (estimation)</div>
  </div>
</template>

<script setup lang="ts">
const quarters = [
  { label: 'T1', height: 84 },
  { label: 'T2', height: 92 },
  { label: 'T3', height: 88 },
  { label: 'T4', height: 96 },
  { label: 'T1', height: 90 },
  { label: 'T2', height: 94 },
  { label: 'T3', height: 92, missing: true },
  { label: 'T4', height: 92, missing: true }
]
</script>

<style>
.ill-rhythm {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 4.5rem;
  margin-top: 0.875rem;
}

.ill-rhythm span {
  flex: 1;
  border-radius: 4px 4px 0 0;
  background: #23b086;
}

.ill-rhythm span.is-missing {
  border: 1.5px dashed var(--alerte-texte);
  border-bottom: none;
  background: var(--alerte-doux);
}

.ill-rhythm-labels {
  display: flex;
  gap: 4px;
  margin-top: 0.25rem;
}

.ill-rhythm-labels span {
  flex: 1;
  font-size: 0.6875rem;
  text-align: center;
  color: var(--texte-3);
}

.ill-rhythm-legend {
  display: flex;
  gap: 0.75rem;
  margin: 0.5rem 0 0.625rem;
  font-size: 0.75rem;
  color: var(--texte-3);
}

.ill-rhythm-legend span::before {
  content: '';
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.3rem;
  border-radius: 2px;
  background: #23b086;
}

.ill-rhythm-legend span.is-missing::before {
  border: 1px dashed var(--alerte-texte);
  background: var(--alerte-doux);
}
</style>
