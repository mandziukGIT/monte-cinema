<template>
  <div class="homepage-container">
    <main-banner />
    <premieres-section />
    <screenings-section />
    <contact-section />
  </div>
</template>

<script>
import MainBanner from '@/components/homepage/MainBanner.vue'
import PremieresSection from '@/components/homepage/PremieresSection.vue'
import ScreeningsSection from '@/components/screenings/ScreeningsSection.vue'
import ContactSection from '@/components/homepage/ContactSection.vue'

export default {
  components: { MainBanner, PremieresSection, ScreeningsSection, ContactSection },
  name: 'HomePage',
}
</script>