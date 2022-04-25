<template>
  <div class="screenings">
    <div class="screenings__filtration">
      <date-filter @dateChange="setDate" />
      <movie-filter @movieChange="setMovie" />
    </div>
    <div class="screenings__list">
      <screening-card
        v-for="movie in moviesList"
        :key="movie.id"
        :movie="movie"
        :filterBy="filterBy"
      />
    </div>
  </div>
</template>

<script lang="ts">
import DateFilter from '@/components/screenings/DateFilter.vue';
import MovieFilter from '@/components/screenings/MovieFilter.vue';
import ScreeningCard from '@/components/screenings/ScreeningCard.vue';
import { getDayName, getFormattedDate } from '@/helpers/dateHelper';
import { Movie, FilterBy } from '@/types';
import Vue from 'vue';

export default Vue.extend({
  components: {
    DateFilter,
    ScreeningCard,
    MovieFilter,
  },
  data() {
    return {
      dateFilter: new Date(),
      movieFilter: '',
    };
  },
  methods: {
    setDate(event: Date) {
      this.dateFilter = event;
    },
    setMovie(event: string) {
      this.movieFilter = event;
    },
    getScreeningsFormatDate(date: Date) {
      const dayName = getDayName(date, 'long');
      const formattedDate = getFormattedDate(date);
      return dayName + ' ' + formattedDate;
    },
  },
  computed: {
    filterBy(): FilterBy {
      return {
        date: getFormattedDate(this.dateFilter),
      };
    },
    dateDisplay(): string {
      return this.getScreeningsFormatDate(this.dateFilter);
    },
    moviesList(): Array<Movie> {
      return !this.movieFilter
        ? this.$store.getters.movies
        : [this.$store.getters.movie(this.movieFilter)];
    },
  },
});
</script>

<style lang="scss" scoped>
.screenings {
  font-family: 'Eczar', serif;
  font-weight: 600;
  font-size: 64px;
  line-height: 102%;
  letter-spacing: -0.01em;
  @include sm {
    font-size: 48px;
  }
  &__caption {
    color: $color-tuna;
  }
  &__date {
    color: $color-bombay;
  }
  &__filtration {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    @include md {
      flex-wrap: wrap;
    }
    & > * {
      display: flex;
      flex-direction: column;
      @include sm {
        width: 100%;
      }
    }
    p {
      @include text-label;
      padding: 10px 0;
    }
  }
  &__date {
    overflow: auto;
    margin-right: 15px;
    @include sm {
      margin-right: 0px;
    }
  }
  &__heading,
  &__filtration {
    @include xs {
      margin: 20px 2rem 20px 2rem;
    }
  }
}
</style>
