import Vue from 'vue'
import Vuex from 'vuex'

import api from "@/api/FactoryRepository.js"
const moviesApi = api.get("movies")

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    genres: [
      {name: "Thriller", id: 1},
      {name: "Comedy", id: 2},
      {name: "Fantasy", id: 3},
      {name: "Sci-Fi", id: 4},
      {name: "Romance", id: 5},
      {name: "Family", id: 6},
      {name: "Horror", id: 7},
      {name: "Documentary", id: 8},
      {name: "Action", id: 9}
    ]
  },
  getters: {
    movies(state) {
      return state.movies
    },
    genres(state) {
      return state.genres
    },
    premieres(state) {
      return state.movies.slice(0, 3)
    },
    genreMovies: (state) => (payload) => {
      return state.movies.filter(movie => movie.genre.id === payload.code)
    }
  },
  mutations: {
    setMovies(state, payload) {
      state.movies = payload
    }
  },
  actions: {
    async fetchMovies({commit}) {
      const movies = await moviesApi.getMovies()
      commit("setMovies", movies.data)
    },
  },
  modules: {
  }
})
