<template>
    <div class="movie__card" v-if="movie">
        <h1 class="movie__title"> {{ movieTitle }}</h1>
        <div class="movie__info">
            <p class="movie__duration-time">{{ movieLength }}</p>
            <img class="movie__poster" :src="moviePoster" />
            <div class="movie__category">
                {{ movieCategory }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object
        }
    },
    methods: {
        formateTime(movieLength) {
            const hours = Math.floor(movieLength / 60);  
            const minutes = String('0' + (movieLength % 60)).slice(-2) + ' min'
            return hours + ":" + minutes
        }
    },
    computed: {
        movieTitle() {
            return this.movie.title
        },
        movieLength() {
            return this.formateTime(this.movie.length)
        },
        moviePoster() {
            return this.movie.poster_url
        },
        movieCategory() {
            return this.movie.genre.name
        }
    }
}
</script>

<style lang="scss" scoped>
.movie__card {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5em;
    box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
        h1, p {
            font-size: 36px;
            text-align: left;
            @include xs {
               font-size: 28px; 
            }
        }
        p {
            font-size: 14px;
            color: $color-jumbo;
            line-height: 170%;
            letter-spacing: 0.04em;
        }
        img { 
            object-fit: cover;
            max-height: 200px;
            width: 100%;
            margin: 20px 0;
        }
    }
    .movie__category {
        display: inline-block;
        @include chip
    }
    
</style>