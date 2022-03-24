import api from "@/api/FactoryRepository"
import { setAuthorizationHeader, removeAuthorizationHeader } from "@/api/client"
const authApi = api.get("auth")

const TOKEN_STORAGE_KEY = "auth-token";
const USER_STORAGE_KEY = "user";

export default {
    namespaced: true,
    state: {
        user: null,
        authToken: null
    },
    getters: {
        isLoggedIn: state => !!state.authToken
        
    },
    mutations: {
        setAuthParams(state, authToken) {
            state.authToken = authToken
            setAuthorizationHeader(`Bearer ${authToken}`)
            localStorage.setItem(TOKEN_STORAGE_KEY, authToken)
        },
        removeAuthParams(state) {
            state.authToken = null
            removeAuthorizationHeader()
            localStorage.removeItem(TOKEN_STORAGE_KEY)
        },
        setUser(state, user) {
            state.user = user
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
        },
        removeUser(state) {
            state.user = null
            localStorage.removeItem(USER_STORAGE_KEY)
        }
    },
    actions: {
        async login({commit}, credentials) {
           const user = await authApi.login(credentials)
           commit('setAuthParams', user.headers.authorization.slice("Bearer ".length))
           commit('setUser', user.data)
        },
        async register({commit}, credentials) {
            const user = await authApi.register(credentials)
            commit('setAuthParams', user.headers.authorization.slice("Bearer ".length))
            commit('setUser', user.data)
        },
        restoreUserSession({commit}) {
            const token = localStorage.getItem(TOKEN_STORAGE_KEY)
            const user = localStorage.getItem(USER_STORAGE_KEY)
            if(!token || !user) return
            commit('setUser', JSON.parse(user))
            commit('setAuthParams', token)
        },
        logout({commit}) {
            authApi.logout()
            commit("removeUser")
            commit('removeAuthParams')
        },
    }
}