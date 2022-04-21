<template>
  <div class="movie-filter">
    <p>movie</p>
    <v-select
      v-model="movieFilter"
      placeholder="Choose movie"
      :options="moviesOptions"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieFilter: '',
    };
  },
  computed: {
    moviesOptions() {
      return this.movies.map((movie) => ({
        label: movie.title,
        code: movie.id,
      }));
    },
    movies() {
      return this.$store.getters.movies;
    },
  },
  watch: {
    movieFilter(newVal) {
      this.$emit('movieChange', newVal);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-select {
  --vs-border-width: 0px;
  padding: 6px 0;
  border-radius: 4px;
  background-color: $color-athens-gray;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin-left: 0;
  width: 100%;

  &::v-deep .vs__dropdown-toggle {
    height: 100%;
  }
  &::v-deep .vs__dropdown-menu {
    --vs-dropdown-option--active-bg: #eaeaea;
    --vs-dropdown-option--active-color: #343541;
    background-color: $color-athens-gray;
    border: none;
    border-top: 1px solid $color-whisper;
    box-shadow: none;
  }
}
.movie-filter {
  flex-grow: 1;
  align-self: end;
  p {
    padding: 10px 0;
    @include text-label;
  }
  margin-left: 10vw;
  @include md {
    margin-left: 0;
  }
}
</style>
