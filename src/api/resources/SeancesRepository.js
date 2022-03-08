import client from "../client"

const resource = '/seances'

export default {
    getSeances() {
        return client.get(resource);
    },
    getSeance(seanceId) {
        return client.get(`${resource}/${seanceId}`);
    }
}