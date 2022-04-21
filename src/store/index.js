import Vue from 'vue'
import Vuex from 'vuex'

import userModule from "./modules/user"
import api from "@/api/FactoryRepository.js"
const moviesApi = api.get("movies")

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    genres: []
  },
  getters: {
    movies: (state) => state.movies,
    genres: (state) => state.genres,
    premieres: (state) => state.movies.slice(0, 3),
    movie: (state) => (payload) => state.movies.find(movie => movie.id === payload.code)
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies
    },
    setGenres(state, genres) {
      state.genres = genres
    }
  },
  actions: {
    async fetchMovies({commit}) {
      const { data: movies} = await moviesApi.getMovies()
      commit("setMovies", movies)
    },
    async fetchGenres({commit}) {
      const { data: genres} = await moviesApi.getGenres()
      commit("setGenres", genres)
    }
  },
  modules: {
    user: userModule
  }
})
