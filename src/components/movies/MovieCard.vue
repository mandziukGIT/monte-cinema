<template>
  <router-link
    :to="{ name: 'movie-detail-page', params: { movieId: movie.id } }"
  >
    <div class="movie__card">
      <h2 class="movie__title">{{ movieTitle }}</h2>
      <div>
        <p class="movie__duration-time">{{ movieLength }}</p>
        <img class="movie__poster" :src="moviePoster" />
        <base-chip class="movie__category">
          {{ movieCategory }}
        </base-chip>
      </div>
    </div>
  </router-link>
</template>

<script>
import { formatMovieLength } from '@/helpers/dateHelper';
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      default: null,
    },
  },
  computed: {
    movieTitle() {
      return this.movie?.title;
    },
    movieLength() {
      return this.movie && formatMovieLength(this.movie.length);
    },
    moviePoster() {
      return this.movie?.poster_url;
    },
    movieCategory() {
      return this.movie?.genre?.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.movie {
  &__card {
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5em;
    box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
  }
  &__title {
    font-size: 36px;
    text-align: left;
    @include xs {
      font-size: 28px;
    }
  }
  &__duration-time {
    font-size: 14px;
    color: $color-jumbo;
    line-height: 170%;
    letter-spacing: 0.04em;
  }
  &__poster {
    object-fit: cover;
    max-height: 200px;
    width: 100%;
    margin: 20px 0;
  }
  &__category {
    align-self: flex-start;
  }
}
</style>
