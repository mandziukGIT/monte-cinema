import client from "../client"

const resource = '/halls'

export default {
    getHalls() {
        return client.get(resource);
    },
    getHall(hallId) {
        return client.get(`${resource}/${hallId}`);
    }
}