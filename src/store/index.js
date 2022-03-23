import Vue from 'vue'
import Vuex from 'vuex'

import userModule from "./modules/user"
import api from "@/api/FactoryRepository.js"
const moviesApi = api.get("movies")

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
  },
  getters: {
    movies(state) {
      return state.movies
    },
    premieres(state) {
      return state.movies.slice(0, 3)
    },
    movie: (state) => (payload) => {
      return state.movies.find(movie => movie.id === payload.code)
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
    user: userModule
  }
})
