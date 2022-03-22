<template>
    <div class="screenings">
        <div class="screenings__heading">
            <p class="screenings__heading--caption">Screenings:</p>
            <p class="screenings__heading--date">{{ dateDisplay }}</p>
        </div>
        <div class="screenings__filtration" >
            <div class="screenings__filtration--date" >
                <p>day</p>
                <date-filter @dateChange="setDate"/>
            </div>
            <div class="screenings__filtration--category">
                <p>movie</p>
                <movie-filter @movieChange="setMovie" />
            </div>
        </div>
        <div class="screenings__list">
            <screening-card v-for="movie in moviesList" :key="movie.id" :movie="movie" :filterBy="filterBy"/>
        </div>
    </div>
</template>

<script>
import DateFilter from '@/components/screenings/DateFilter.vue'
import MovieFilter from '@/components/screenings/MovieFilter.vue'
import ScreeningCard from '@/components/screenings/ScreeningCard.vue'
import {getDayName, getFormattedDate} from '@/helpers/dateHelper'
export default {
    components: {
        DateFilter,
        ScreeningCard,
        MovieFilter
    },
    data() {
        return {
            dateFilter: new Date(),
            movieFilter: ''
        }
    },
    methods: {
        setDate(event) {
            this.dateFilter = event
        },
        setMovie(event) {
            this.movieFilter = event
        },
        getScreeningsFormatDate(date) {
            const dayName = getDayName(date, 'long')
            const formattedDate = getFormattedDate(date)
            return dayName + " " + formattedDate
        },
    },
    computed: {
        filterBy() {
            return {
                date: getFormattedDate(this.dateFilter)
            }
        },
        dateDisplay() {
            return this.getScreeningsFormatDate(this.dateFilter)
        },
        moviesList() {
            return !this.movieFilter ? this.$store.getters.movies : [this.$store.getters.movie(this.movieFilter)]
        }
    }
}
</script>

<style lang="scss" scoped>

.screenings {
    font-family: "Eczar", serif;
    font-weight: 600;
    font-size: 64px;
    line-height: 102%;
    letter-spacing: -0.01em;
    @include sm {
       font-size: 48px; 
    }
    &__heading {
        &--caption{
            color: $color-tuna;
        }
        &--date {
            color: $color-bombay;
        }
    }
    &__filtration {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        @include md {
            flex-wrap: wrap;
        }
        &--date {
            overflow: auto;
            margin-right: 15px;
            @include sm {
             margin-right: 0px;   
            }
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
    &__heading, &__filtration {
        @include xs {
            margin: 20px 2rem 20px 2rem
        }
    }
}
</style>