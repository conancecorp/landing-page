<template>
  <!-- Decorative: the table of the comparison page says the same thing -->
  <div class="ill-compare" aria-hidden="true">
    <div class="pastille"><i class="pi pi-table"></i>Tableur</div>
    <div class="pastille"><i class="pi pi-users"></i>CRM patrimonial</div>
    <div class="pastille"><i class="pi pi-briefcase"></i>Prestataire</div>
    <div class="pastille is-ours"><i class="pi pi-check-circle"></i>Logiciel dédié</div>
  </div>
</template>

<style>
.ill-compare {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  width: 100%;
  max-width: 24rem;
}

.ill-compare .pastille {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 1rem;
  font-size: 0.9375rem;
  font-weight: 600;
}

.ill-compare .pi {
  font-size: 1.25rem;
  color: var(--vert-texte);
}

.ill-compare .is-ours {
  border-color: var(--vert-lisere);
  outline: 1px solid var(--vert-lisere);
}
</style>
