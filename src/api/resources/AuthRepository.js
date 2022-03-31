import client from "../client"

export default {
    getCurrentUser() {
        return client.get('/user')
    },
    login(params) {
        return client.post('/login', { user: params });
    },
    logout() {
        return client.delete('/logout')
    },
    register(params) {
        return client.post('/register', { user: params });
    }
}
