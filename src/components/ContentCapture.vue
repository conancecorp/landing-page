<template>
  <BrowserFrame :src="capture(name, sombre)" :alt="alt" :tab="tab" :path="path" @zoom="zoom" />
</template>

<script setup lang="ts">
import { inject } from 'vue'

import { capture, sombre } from '../theme'
import BrowserFrame from './BrowserFrame.vue'

defineProps<{ name: string; alt: string; tab: string; path: string }>()

// Provided by ContentPage, which holds the lightbox
const zoom = inject<(src: string, alt: string) => void>('openLightbox', () => {})
</script>
