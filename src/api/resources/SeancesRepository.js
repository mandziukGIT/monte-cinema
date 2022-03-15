import client from "../client"

const resource = '/seances'

export default {
    getSeances() {
        return client.get(resource);
    },
    getSeance(seanceId) {
        return client.get(`${resource}/${seanceId}`);
    },
    getSeancesByMovieAndDate({movieId, date}) {
        return client.get(`${resource}`, { params: { date, movie_id: movieId} });
    }
}