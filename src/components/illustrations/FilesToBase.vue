<template>
  <!-- Decorative: the surrounding text says the same thing -->
  <div class="ill-files" aria-hidden="true">
    <ul class="ill-files-list">
      <li class="pastille"><i class="pi pi-file-excel"></i>Excel</li>
      <li class="pastille"><i class="pi pi-file"></i>CSV</li>
      <li class="pastille"><i class="pi pi-file-pdf"></i>PDF</li>
    </ul>
    <i class="pi pi-arrow-right ill-files-arrow"></i>
    <div class="pastille ill-files-base">
      <img src="/favicon/favicon-96x96.png" alt="" width="56" height="56" loading="lazy" />
      <strong class="heading-font">Base consolidée</strong>
      <span>Tous vos partenaires, au même endroit</span>
    </div>
  </div>
</template>

<style>
.ill-files {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.ill-files-list {
  display: grid;
  gap: 0.625rem;
}

.ill-files-list li {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  min-width: 7.5rem;
  padding: 0.625rem 0.875rem;
  font-size: 0.9375rem;
  font-weight: 600;
}

.ill-files-list .pi {
  color: var(--vert-texte);
}

.ill-files-arrow {
  flex-shrink: 0;
  font-size: 1.25rem;
  color: var(--vert-texte);
}

.ill-files-base {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12rem;
  padding: 1.25rem 1rem;
  text-align: center;
}

.ill-files-base img {
  width: 3.5rem;
  height: 3.5rem;
  margin-bottom: 0.5rem;
}

.ill-files-base strong {
  font-size: 1.125rem;
  font-weight: 700;
}

.ill-files-base span {
  margin-top: 0.25rem;
  font-size: 0.8125rem;
  line-height: 1.35;
  color: var(--texte-3);
}
</style>
