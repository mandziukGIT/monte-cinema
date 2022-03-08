<template>
  <div class="app">
    <div class="app__header">
      <app-header></app-header>
    </div>
    <div class="app__view">
      <router-view/>
    </div>
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
  &__view {
    padding: 0 2rem;
    @include xs {
      padding: 0;
    }
  }
  &__header {
    padding: 2rem 2rem 0 2rem;
  }
  max-width: 1440px;
  margin: 0 auto;
}
</style>