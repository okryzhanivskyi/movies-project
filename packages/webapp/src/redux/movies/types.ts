import { MovieInfo } from '@movies/webapp-components/src/types';

export type MoviesData = {
  movies: MovieInfo[];
}

export type MoviesState = {
  movies: MoviesData;
}

export type GetMoviesAction = {
  type: string;
  payload: MovieInfo[];
}
