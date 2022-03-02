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
</style>