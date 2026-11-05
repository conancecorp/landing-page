<template>
  <!-- A small drawing of the guide's subject, entirely visible: no text to crop, no figures to read -->
  <span class="guide-thumb" aria-hidden="true">
    <span v-if="kind === 'match'" class="thumb-rows">
      <span v-for="row in 3" :key="row" class="thumb-row">
        <i class="pi pi-file"></i>
        <b :style="{ width: `${[72, 56, 64][row - 1]}%` }"></b>
        <i class="pi pi-check-circle"></i>
      </span>
    </span>

    <span v-else-if="kind === 'rhythm'" class="thumb-bars">
      <span v-for="(height, i) in [78, 90, 82, 96, 86, 92]" :key="i" :style="{ height: `${height}%` }"></span>
      <span class="is-missing" style="height: 88%"></span>
      <span class="is-missing" style="height: 88%"></span>
    </span>

    <span v-else-if="kind === 'forecast'" class="thumb-bars">
      <span
        v-for="(height, i) in [22, 24, 62, 30, 40, 94, 24, 26, 72, 18, 24, 100]"
        :key="i"
        :class="{ 'is-coming': i >= 9 }"
        :style="{ height: `${height}%` }"
      ></span>
    </span>

    <span v-else-if="kind === 'fra'" class="thumb-sheet">
      <i class="pi pi-file-check"></i>
      <span class="thumb-sheet-lines">
        <b style="width: 100%"></b>
        <b style="width: 84%"></b>
        <b style="width: 92%"></b>
        <b style="width: 60%"></b>
      </span>
    </span>

    <span v-else class="thumb-tiles">
      <i class="pi pi-table"></i>
      <i class="pi pi-users"></i>
      <i class="pi pi-briefcase"></i>
      <i class="pi pi-check-circle is-ours"></i>
    </span>
  </span>
</template>

<script setup lang="ts">
import type { GuideIllustration } from '../content/guides'

defineProps<{ kind: GuideIllustration }>()
</script>

<style>
/* Fixed colours: these drawings always sit on the deep green, in both themes */
.guide-thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8.5rem;
  padding: 1.5rem;
  background: linear-gradient(112deg, #062924 0%, #0a3029 58%, #163f34 100%);
}

.thumb-rows {
  display: grid;
  gap: 0.5rem;
  width: 100%;
  max-width: 13rem;
}

.thumb-row {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.375rem 0.625rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.08);
  color: #52d2a6;
}

.thumb-row .pi {
  flex-shrink: 0;
  font-size: 0.875rem;
}

.thumb-row b {
  height: 0.375rem;
  margin-right: auto;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.55);
}

.thumb-bars {
  display: flex;
  align-items: flex-end;
  gap: 0.3125rem;
  width: 100%;
  max-width: 13rem;
  height: 100%;
}

.thumb-bars span {
  flex: 1;
  border-radius: 3px 3px 0 0;
  background: #23b086;
}

.thumb-bars .is-coming {
  background: rgba(255, 255, 255, 0.45);
}

.thumb-bars .is-missing {
  border: 1.5px dashed #f59e5b;
  border-bottom: none;
  background: rgba(245, 158, 91, 0.16);
}

.thumb-sheet {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 13rem;
}

.thumb-sheet .pi {
  flex-shrink: 0;
  font-size: 2.5rem;
  color: #52d2a6;
}

.thumb-sheet-lines {
  display: grid;
  flex: 1;
  gap: 0.625rem;
}

.thumb-sheet-lines b {
  height: 0.375rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.55);
}

.thumb-tiles {
  display: grid;
  grid-template-columns: repeat(2, 2.5rem);
  gap: 0.5rem;
}

.thumb-tiles .pi {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  border-radius: 0.625rem;
  background: rgba(255, 255, 255, 0.08);
  font-size: 1.125rem;
  color: #e0ebe7;
}

.thumb-tiles .is-ours {
  background: #1a7d5e;
  color: #ffffff;
}
</style>
