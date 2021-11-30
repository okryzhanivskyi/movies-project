import { MovieInfo, SerieInfo } from '@movies/webapp-components/src/types';

export const sortByRating = (a: MovieInfo, b: MovieInfo) => Number(b.imDbRating) - Number(a.imDbRating);
