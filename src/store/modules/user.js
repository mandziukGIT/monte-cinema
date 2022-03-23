import api from "@/api/FactoryRepository"
import { setAuthorizationToken, removeAuthorizationToken } from "@/api/client"
const authApi = api.get("auth")

export default {
    namespaced: true,
    state: {
        user: null
    },
    getters: {

    },
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        async login({commit}, credentials) {
           const user = await authApi.login(credentials)
           commit("setUser", user.data)
           const token = user.headers.authorization
           sessionStorage.setItem("token", token)
           setAuthorizationToken(token)
        },
        async logout({commit}) {
            await authApi.logout()
            commit("setUser", null)
            removeAuthorizationToken()
        },
        async register({commit}, credentials) {
            const user = await authApi.register(credentials)
            commit("setUser", user.data)
        },
        async restoreUserSession({commit}) {
            const token = sessionStorage.getItem('token')
            if(!token) return
            setAuthorizationToken(token)
            const user = await authApi.getCurrentUser()
            commit('setUser', user.data)
        }
    }
}