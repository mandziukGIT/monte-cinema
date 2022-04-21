import client from "../client"

const resource = '/movies'

export default {
    getMovies() {
        return client.get(resource);
    },
    getMovie(movieId) {
        return client.get(`${resource}/${movieId}`);
    },
    getGenres() {
        return client.get('movie_genres')
    }
}
