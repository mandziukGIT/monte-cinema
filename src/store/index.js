import Vue from 'vue'
import Vuex from 'vuex'

import api from "@/api/FactoryRepository.js"
const moviesApi = api.get("movies")

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
  },
  getters: {
    getMovies(state) {
      return state.movies
    },
    getThreePremieres(state) {
      return state.movies.slice(0, 3)
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
    }
  },
  modules: {
  }
})
