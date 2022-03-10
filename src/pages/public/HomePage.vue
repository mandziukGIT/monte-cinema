<template>
  <div class="homepage-container">
    <main-banner />
    <premieres-section />
  </div>
</template>

<script>
import MainBanner from '@/components/homepage/MainBanner.vue'
import PremieresSection from '@/components/homepage/PremieresSection.vue'

export default {
  components: { MainBanner, PremieresSection },
  name: 'HomePage',
}
</script>