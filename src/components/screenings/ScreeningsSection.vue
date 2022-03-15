<template>
    <div class="screenings">
        <div class="screenings__heading">
            <p class="screenings__heading--caption">Screenings:</p>
            <p class="screenings__heading--date">{{ date }}</p>
        </div>
        <div class="screenings__filtration" >
            <div class="screenings__filtration--date" >
                <p>day</p>
                <date-filter @dateChange="setDate"/>
            </div>
            <div class="screenings__filtration--category">
                <p>category</p>
                <category-filter @categoryChange="setCategory" />
            </div>
        </div>
        <div class="screenings__list">
            <screening-card v-for="movie in moviesList" :key="movie.id" :movie="movie" :filterBy="dateFilter"/>
        </div>
    </div>
</template>

<script>
import DateFilter from '@/components/screenings/DateFilter.vue'
import CategoryFilter from '@/components/screenings/CategoryFilter.vue'
import ScreeningCard from '@/components/screenings/ScreeningCard.vue'
import {getDayName, getFormattedDate} from '@/helpers/dateHelper'
export default {
    components: {
        DateFilter,
        ScreeningCard,
        CategoryFilter
    },
    data() {
        return {
            screeningsDate: '',
            categoryFilter: '',
            dateFilter: ''
        }
    },
    methods: {
        setDate(event) {
            this.dateFilter = event
            this.screeningsDate = event
        },
        setCategory(event) {
            this.categoryFilter = event
        },
        getScreeningsFormatDate(date) {
            const dayName = getDayName(date, 'long')
            const formattedDate = getFormattedDate(date)
            return dayName + " " + formattedDate
        },
    },
    computed: {
        movies() {
            return this.$store.getters.movies
        },
        date() {
            return !this.screeningsDate ? this.getScreeningsFormatDate(new Date()) : getDayName(this.screeningsDate, 'long') + " " + this.screeningsDate
        },
        moviesList() {
            return !this.categoryFilter ? this.movies : this.$store.getters.genreMovies(this.categoryFilter)
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
            @include overflow-scroll;
            margin-right: 15px;
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