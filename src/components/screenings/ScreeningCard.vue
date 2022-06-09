<template>
  <div class="screening" v-if="!!movieSeances.length">
    <img class="screening__image" :src="movie.poster_url" />
    <div class="screening__info">
      <h1 class="screening__info--title">{{ movie.title }}</h1>
      <div class="screening__info__details">
        <base-chip class="screening__info__details--genre">
          {{ movie.genre.name }}
        </base-chip>
        <p class="screening__info__details--length">{{ movieLength }}</p>
      </div>
    </div>
    <div class="screening__seances">
      <div v-for="seance in movieSeances" :key="seance.id">
        <router-link
          :to="{ name: 'choose-seats', params: { seanceId: seance.id } }"
          class="screening__seances--seance"
        >
          {{ getFormattedStartHour(seance.datetime) }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { formatMovieLength } from "@/helpers/dateHelper";
import { Movie, FilterBy, Seance } from "@/types";
import api from "@/api/FactoryRepository";
const seances = api.get("seances");

export default Vue.extend({
  props: {
    movie: {
      type: Object as PropType<Movie>,
      default: null,
    },
    filterBy: {
      type: Object as PropType<FilterBy>,
      default: null,
    },
  },
  data() {
    return {
      movieSeances: [] as Seance[],
    };
  },
  methods: {
    async getFilteredSeances() {
      const { data } = await seances.getSeances({
        movie_id: this.movie?.id,
        ...this.filterBy,
      });
      this.movieSeances = data;
    },
    getFormattedStartHour(seanceDate: string) {
      const date = new Date(seanceDate);
      const hour = ("0" + date.getHours()).slice(-2);
      const minutes = ("0" + date.getMinutes()).slice(-2);
      return hour + ":" + minutes;
    },
  },
  computed: {
    movieLength(): string {
      return formatMovieLength(this.movie.length);
    },
  },
  watch: {
    filterBy: {
      immediate: true,
      handler() {
        this.getFilteredSeances();
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.screening {
  display: grid;
  grid-template-columns: min-content minmax(0, 1fr);
  grid-template-rows: minmax(0, min-content) minmax(0, 1fr);
  padding: 2rem 1rem;
  margin: 20px 0;
  background: $color-snow-white;
  box-shadow: $card-box-shadow;
  border-radius: 8px;
  &__image {
    grid-area: 1 / 1 / 3 / 1;
    object-fit: cover;
    max-width: 100px;
    @include sm {
      max-width: 80px;
      grid-row: 1 / 2;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    padding: 0 20px;
    &--title {
      margin: 0 0 10px 0;
      font-size: 24px;
      line-height: 28px;
    }
    &__details {
      display: flex;
      &--genre {
        margin-right: 10px;
      }
      &--length {
        align-self: flex-start;
        line-height: 16px;
        font-size: 14px;
        color: $color-jumbo;
        line-height: 170%;
        letter-spacing: 0.04em;
      }
    }
  }
  &__seances {
    grid-area: 2 / 2 / 2 / 3;
    display: flex;
    align-self: end;
    padding: 0 20px;
    overflow: auto;
    &--seance {
      padding: 10px 30px;
      margin: 0 5px;
      font-family: "RobotoMono", monospace;
      font-weight: 500;
      font-size: 14px;
      line-height: 100%;
      color: $color-cherry-red;
      border: 2px solid $color-cherry-red;
      border-radius: 30px;
      &:first-child {
        margin-left: 0;
      }
      @include xs {
        padding: 5px 20px;
        margin: 0 4px;
      }
    }
    @include sm {
      padding: 20px 0 0 0;
      grid-area: 2 / 1 / 2 / 3;
    }
  }
  @include xs {
    margin: 0;
    box-shadow: none;
    border-bottom: 1px solid $color-iron;
    border-radius: 0;
  }
}
</style>
