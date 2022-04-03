<template>
  <div class="movie__wrapper" v-if="!!movie">
    <div class="movie__overview">
      <div class="movie__info">
        <h1 class="movie__title">{{ movie.title }}</h1>
        <div class="movie__details">
          <base-chip>{{ movie.genre.name }}</base-chip>
          <p>{{ movieReleaseYear }}</p>
          <p>{{ movieLength }}</p>
        </div>
        <p class="movie__description">{{ movie.description }}</p>
      </div>
      <div class="movie__poster">
        <img :src="movie.poster_url" />
      </div>
    </div>
    <div class="movie__screenings">
      <date-filter @dateChange="setFilter($event)" />
      <screening-card :movie="movie" :filterBy="filterBy" />
    </div>
  </div>
</template>
<script>
import { getFormattedDate, formatMovieLength } from "@/helpers/dateHelper";
import DateFilter from "@/components/screenings/DateFilter.vue";
import ScreeningCard from "@/components/screenings/ScreeningCard.vue";
export default {
  components: { DateFilter, ScreeningCard },
  metaInfo() {
    return {
      title: this.movie?.title,
    };
  },
  data() {
    return {
      filterDate: null,
    };
  },
  methods: {
    setFilter(date) {
      this.filterDate = date;
    },
  },
  computed: {
    movie() {
      return this.$store.getters.movies.find(
        (movie) => movie.id == this.$route.params.movieId
      );
    },
    movieLength() {
      return formatMovieLength(this.movie?.length);
    },
    movieReleaseYear() {
      return this.movie?.release_date.split("-")[0];
    },
    filterBy() {
      const date = !this.filterDate
        ? getFormattedDate(new Date())
        : getFormattedDate(this.filterDate);
      return {
        date,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.movie {
  &__overview {
    display: flex;
    @include md {
      flex-direction: column;
    }
  }
  &__details {
    display: flex;
    & > p {
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      font-size: 14px;
      color: $color-jumbo;
      margin: auto 0;
      &:not(:last-child)::after {
        content: "\00B7";
        padding: 0.5rem;
      }
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    & > p {
      font-family: "RobotoMono", monospace;
      font-weight: 400;
      font-size: 22px;
      line-height: 170%;
      letter-spacing: 0.015em;
      color: $color-tuna;
    }
  }
  &__poster {
    position: relative;
    overflow: hidden;
    width: 100%;
    & > img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      @include md {
        position: static;
      }
    }
  }
}
</style>
