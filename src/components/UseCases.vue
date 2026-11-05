<template>
  <div class="use-cases">
    <div v-for="(item, i) in items" :key="item.title" v-reveal="i * 90" class="use-case">
      <span :class="['etape-tuile', { 'etape-tuile--alerte': alert }]"><i :class="['pi', item.icon]"></i></span>
      <h3 class="heading-font">{{ item.title }}</h3>
      <p class="use-case-situation">{{ item.situation }}</p>
      <p class="use-case-answer"><i class="pi pi-check-circle"></i><span>{{ item.answer }}</span></p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: { title: string; icon: string; situation: string; answer: string }[]
  // Warning tile, for the situations that are a problem in themselves
  alert?: boolean
}>()
</script>

<style>
.use-cases {
  display: grid;
  gap: 1.5rem;
}

.use-case {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid var(--bordure);
  border-radius: 0.875rem;
  background: var(--carte);
}

.use-case .etape-tuile {
  margin-bottom: 1rem;
}

.etape-tuile--alerte {
  background: var(--alerte-doux);
  color: var(--alerte-texte);
}

.use-case h3 {
  margin-bottom: 0.375rem;
  font-size: 1.1875rem;
  font-weight: 700;
  line-height: 1.25;
  color: var(--texte);
}

.use-case-situation {
  margin-bottom: 1rem;
  line-height: 1.55;
  color: var(--texte-3);
}

.use-case-answer {
  display: flex;
  gap: 0.625rem;
  margin-top: auto;
  padding: 0.875rem;
  border-radius: 0.625rem;
  background: var(--vert-doux);
  font-size: 0.9375rem;
  line-height: 1.5;
  color: var(--texte-2);
}

.use-case-answer .pi {
  flex-shrink: 0;
  margin-top: 0.2rem;
  color: var(--vert-texte);
}

@media (min-width: 900px) {
  .use-cases {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
