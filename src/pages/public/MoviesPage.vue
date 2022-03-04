<template>
    <div>
        <h1>This is MoviesPage</h1>
        <pre>{{ movies }}</pre>
    </div>
</template>

<script>
import FactoryRepository from '@/api/FactoryRepository'
const MoviesRepository = FactoryRepository.get('movies')

export default {
    data() {
        return {
            movies: []
        }
    }, 
    async mounted() {
        this.movies = await MoviesRepository.getMovies();
    }
}
</script>