interface Genre {
    id: number;
    name: string;
  }
export interface Movie {
    id: number;
    title: string;
    genre: Genre;
    poster_url: string;
    length: number;
    release_date: string;
    description: string;
  }
export interface FilterBy {
    date: string;
  }
export interface Seance {
    id: number,
    datetime: string,
    movie: number,
    hall: number,
    'available_seats': string[],
    'taken_seats': string[]
}
