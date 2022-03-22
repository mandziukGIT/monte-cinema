import client from "../client"

const resource = '/seances'

export default {
    getSeances(params) {
        return client.get(`${resource}`, { params });
    },
    getSeance(seanceId) {
        return client.get(`${resource}/${seanceId}`);
    }
}