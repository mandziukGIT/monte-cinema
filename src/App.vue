<template>
  <div class="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: "App",
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
@import '@/styles/resets';
.app {
  max-width: 1440px;
  padding: 2rem;
  margin: 0 auto;
}
.text-success {
  color: $color-eucalyptus
}
.text-danger {
    color: $color-cherry-red
}

.headline {
    font-family: 'Eczar', serif;
    font-weight: 600;
    font-size: 80px;
    line-height: 102%;
    letter-spacing: -0.01em;
    color: $color-tuna;
    &--accent {
      color: $color-jumbo;
    }
    @include sm {
      font-size: 40px;
      text-align: center;
    }
}
</style>