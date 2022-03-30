<template>
    <div>
        <movies-list :movies="movies" />
    </div>
</template>
<script>
import MoviesList from '@/components/movies/MoviesList.vue'
export default {
    name: "MoviesPage",
    components: {
        MoviesList
    },
    metaInfo: {
        title: "Movies",
    },
    computed: {
        movies() {
            return this.$store.getters.movies
        }
    }
}
</script>
