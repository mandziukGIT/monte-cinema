interface Seance {
  id: number;
  datetime: Date;
  movie: number;
  hall: number;
  available_seats: string[];
  taken_seats: string[];
}
export const getSeatsIds = (seance: Seance) => {
  const { available_seats: availableSeats, taken_seats: takenSeats } = seance;
  const seats = [...availableSeats, ...takenSeats].sort(function (a, b) {
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: "base",
    });
  });
  return seats;
};

export const createRowElement = (row: any) => {
  document.createElement(row);
};
