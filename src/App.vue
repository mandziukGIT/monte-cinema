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
.label {
  font-family: 'RobotoMono', monospace;
  font-weight: 700;
  color: $color-bittersweet;
  text-transform: uppercase;
  font-size: 14px;
}
.input__field {
  margin: 10px 0;
  padding: 15px 30px;
}

[type=text],[type=password] {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  background-color: #F0F0F0;
  width: 100%;
  &:hover {
    background-color: #E5E5E5;
  }
  &:active, &:focus {
    outline: none;
    background-color: rgba(47, 128, 237, 0.1);
    box-shadow: inset 0px 0px 0px 1px #2F80ED;
  }
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