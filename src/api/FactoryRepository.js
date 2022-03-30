import ReservationsRepository from "./resources/MoviesRepository"
import SeancesRepository from "./resources/SeancesRepository"
import MoviesRepository from "./resources/MoviesRepository"
import HallsRepository from "./resources/HallsRepository"
import AuthRepository from "./resources/AuthRepository"

const repositories = {
    reservations: ReservationsRepository,
    seances: SeancesRepository,
    movies: MoviesRepository,
    halls: HallsRepository,
    auth: AuthRepository
}

export default {
    get: name => repositories[name]
}
