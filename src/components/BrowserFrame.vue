<template>
  <!-- Capture de l'app dans une fenêtre de navigateur ; un clic l'ouvre en grand (lightbox de la page) -->
  <div class="browser-window-small">
    <div class="browser-titlebar-small">
      <div class="window-controls-small">
        <span class="window-control-small close"></span>
        <span class="window-control-small minimize"></span>
        <span class="window-control-small maximize"></span>
      </div>
      <div class="browser-tabs-container-small">
        <div class="browser-tab-small">
          <img src="/favicon/favicon.svg" alt="" class="browser-tab-icon-small" />
          <span class="browser-tab-title-small">Conance - {{ tab }}</span>
        </div>
      </div>
    </div>
    <div class="browser-toolbar-small">
      <div class="browser-nav-small">
        <span class="browser-nav-btn-small disabled">←</span>
        <span class="browser-nav-btn-small disabled">→</span>
        <span class="browser-nav-btn-small">↻</span>
      </div>
      <div class="browser-url-small">
        <span class="browser-url-icon-small">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </span>
        <span class="browser-url-text-small"><span class="url-dimmed">https://</span>app.conance.io/{{ path }}</span>
      </div>
    </div>
    <button type="button" class="browser-content-small" :aria-label="`Agrandir : ${alt}`" @click="$emit('zoom', src, alt)">
      <img :src="src" :alt="alt" loading="lazy" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'BrowserFrame',
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    tab: { type: String, required: true },
    path: { type: String, default: '' }
  },
  emits: ['zoom']
}
</script>
