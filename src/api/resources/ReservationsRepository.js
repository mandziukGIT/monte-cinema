import client from "../client"

const resource = '/reservations'

export default {
    getReservations() {
        return client.get(resource);
    },
    getReservation(reservationId) {
        return client.get(`${resource}/${reservationId}`);
    },
    postReservationOnline(reservation) {
        return client.post(`${resource}/online`, reservation);
    }
}