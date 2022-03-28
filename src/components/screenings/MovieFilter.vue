<template>
  <v-select v-model="movieFilter" placeholder="Choose movie" :options="moviesOptions"/>
</template>

<script>
export default {
    data() {
        return {
            movieFilter: ''
        }
    },
    computed: {
        moviesOptions() {
            return this.movies.map(movie => ({label: movie.title, code: movie.id}));
        },
        movies() {
            return this.$store.getters.movies;
        }
    },
    watch: {
        movieFilter(newVal) {
            this.$emit("movieChange", newVal)
        }
    }
}
</script>

<style lang="scss" scoped>
.v-select {
    --vs-border-width: 0px;
    border-radius: 4px;
    background-color: $color-athens-gray;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    min-width: 200px;
    height: 100%;
    
    @include sm { 
        margin-left: 0;
        max-width: 100%;
        width: 100%;
    }
    &::v-deep .vs__dropdown-toggle {
        height: 100%;
    }
    &::v-deep .vs__dropdown-menu {
        --vs-dropdown-option--active-bg: #EAEAEA;
        --vs-dropdown-option--active-color: #343541;
        background-color: $color-athens-gray;
        border: none;
        border-top: 1px solid $color-whisper;
        box-shadow: none;
    }
}
</style>
