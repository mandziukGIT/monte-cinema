<template>
    <div class="premieres">
        <div class="premieres__header">
            <p class="premieres__header--caption">SOON <span>IN THE CINEMA</span></p>
            <router-link class="premieres__header--link" :to="{ name: 'movies' }">SEE ALL</router-link>
        </div>
        <div class="premieres__movies">
            <movie-card v-for="premiere in premieres" :key="premiere.id" :movie="premiere"/>
        </div>
    </div>
</template>

<script>
import MovieCard from "@/components/movies/MovieCard.vue"
export default {
    components: {
        MovieCard
    },
    computed: {
        premieres() {
            return this.$store.getters.getThreePremieres
        }
    }
}
</script>

<style lang="scss" scoped>
.premieres {
    margin: 20px 0;
    @include xs {
        margin: 20px 2rem 20px 2rem;
    }
    &__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-family: "RobotoMono", monospace;
        font-weight: 700;
        font-size: 22px;
        padding: 20px 0;
        &--caption {
            color: $color-tuna;
            & > span {
                @include xs {
                    display: none;
                }
            }
        }
        &--link {
            color: $color-cherry-red;
        }
    }
    &__movies {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        @include xs {
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));  
        }
        gap: 2em;
        & > .movie__card:last-child {
            @include rwd(1177px) {
                display: none;
            }
            @include rwd(795px) {
                display: block;
            }
        }
    }
}
</style>