<template>
        <div class="movies__movies">
            <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
        </div>
</template>

<script>
import MovieCard from '@/components/movies/MovieCard.vue'
export default {
    components: {
        MovieCard
    },
    computed: {
        movies() {
            return this.$store.getters.getMovies
        }
    }
}
</script>

<style lang="scss" scoped>
    .movies__wrapper {
        display: grid;
        grid-gap: 3em;  
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        @include xs {
            grid-template-columns: repeat(auto-fill, 1fr) 
        }
    }
</style>