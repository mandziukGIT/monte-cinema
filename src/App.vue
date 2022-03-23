<template>
  <div id="app" class="app">
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
  metaInfo: {
    title: null,
    titleTemplate: "%s | Monte Cinema",
  },
  components: {
    AppHeader
  },
  async created() {
    await this.$store.dispatch('fetchMovies')
    await this.$store.dispatch('user/restoreUserSession')
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