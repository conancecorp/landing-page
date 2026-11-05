<template>
  <!-- Decorative example from the demo cabinet: the surrounding text says the same thing -->
  <div class="pastille ill-card" aria-hidden="true">
    <div class="pastille-entete">
      <span class="pastille-tuile"><i class="pi pi-file-excel"></i></span>
      <span>
        <span class="pastille-etiquette">Bordereau du trimestre</span>
        <span class="pastille-sous">Colonnes reconnues</span>
      </span>
    </div>
    <ul class="ill-rows">
      <li><span><b>CTR481471</b>Camille Durand</span><i class="pi pi-check-circle"></i></li>
      <li><span><b>A2P444610</b>Julien Mercier</span><i class="pi pi-check-circle"></i></li>
      <li><span><b>Sans numéro</b>Par le client</span><i class="pi pi-check-circle"></i></li>
      <li class="is-alert"><span><b>CTR59113</b>À vérifier</span><i class="pi pi-exclamation-circle"></i></li>
    </ul>
  </div>
</template>

<style>
.ill-card {
  width: 100%;
  max-width: 21rem;
}

.ill-rows {
  display: grid;
  gap: 0.375rem;
  margin-top: 0.75rem;
}

.ill-rows li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.4375rem 0.625rem;
  border-radius: 0.5rem;
  background: var(--carte-alt);
  font-size: 0.8125rem;
  color: var(--texte-3);
}

.ill-rows b {
  margin-right: 0.5rem;
  font-weight: 600;
  color: var(--texte);
}

.ill-rows .pi {
  flex-shrink: 0;
  font-size: 0.875rem;
  color: var(--vert-texte);
}

.ill-rows .is-alert {
  background: var(--alerte-doux);
}

.ill-rows .is-alert .pi {
  color: var(--alerte-texte);
}
</style>
