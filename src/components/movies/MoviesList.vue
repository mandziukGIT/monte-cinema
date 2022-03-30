<template>
  <div class="movies-list">
      <movie-card v-for="movie in movies" :key="movie.id" :movie="movie" class="movies-list__movie" />
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue"
export default {
    name: "MoviesList",
    props: {
        movies: {
            type: Object,
            required: true
        }
    },
    components: {
        MovieCard
    }
}
</script>

<style lang="scss" scoped>
.movies-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
    @include md {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @include sm {
        grid-template-columns: repeat(1, minmax(0, 1fr)); 
    }
}
</style>
