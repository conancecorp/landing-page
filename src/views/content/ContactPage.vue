<template>
  <ContentPage title="Contactez-nous" highlight="Contactez-nous" badge="Contact" icon="pi-envelope" :closing="false">
    <template #lead>
      Une question sur Conance, une démonstration, un cas particulier : écrivez-nous.
    </template>

    <ContactSection />
  </ContentPage>
</template>

<script setup lang="ts">
import ContactSection from '../../components/ContactSection.vue'
import ContentPage from '../../components/ContentPage.vue'
</script>
