<template>
  <div>
    <h1>
      MonteCinema
    </h1>
    <p>
      Best cinema out of this world!
    </p>
    <button>Book a ticket</button>
    <router-link to='/'>See movies</router-link>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>

<style lang="scss">
  h1 {
    color: $color-cherry-red;
    font-family: "Eczar", serif;
  }
</style>