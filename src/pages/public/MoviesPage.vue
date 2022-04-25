<template>
  <div class="container">
    <h1 class="headline">All the movies</h1>
    <filtration-bar
      @searchPhraseUpdate="updateSearchFilter"
      @categoryOptionUpdate="updateCategoryFilter"
    />
    <movies-list :movies="filteredMovies" />
  </div>
</template>
<script>
import FiltrationBar from '@/components/movies/FiltationBar.vue';
import MoviesList from '@/components/movies/MoviesList.vue';
export default {
  name: 'MoviesPage',
  components: {
    FiltrationBar,
    MoviesList,
  },
  metaInfo: {
    title: 'Movies',
  },
  data() {
    return {
      searchFilterPhrase: '',
      categoryFilterOption: '',
    };
  },
  methods: {
    updateSearchFilter(event) {
      this.searchFilterPhrase = event;
    },
    updateCategoryFilter(event) {
      this.categoryFilterOption = event?.code;
    },
  },
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
    filteredMovies() {
      let movies = this.movies;
      if (this.searchFilterPhrase) {
        movies = this.movies.filter((movie) =>
          movie.title
            .toLowerCase()
            .includes(this.searchFilterPhrase.toLowerCase())
        );
      }
      if (this.categoryFilterOption) {
        movies = this.movies.filter(
          (movie) => movie.genre.id === this.categoryFilterOption
        );
      }
      if (this.categoryFilterOption && this.searchFilterPhrase) {
        const phraseMovies = this.movies.filter((movie) =>
          movie.title.toLowerCase().includes(this.searchFilterPhrase)
        );
        const phraseAndGenreMovies = phraseMovies.filter(
          (movie) => movie.genre.id === this.categoryFilterOption
        );
        movies = phraseAndGenreMovies;
      }
      return movies;
    },
  },
  async created() {
    await this.$store.dispatch('fetchGenres');
  },
};
</script>
<style lang="scss" scoped>
.container {
  @include xs {
    margin: 20px 2rem 20px 2rem;
  }
}
</style>
