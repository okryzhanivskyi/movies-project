import { MovieInfo, SerieInfo } from '@movies/webapp-components/src/types';

export type HomepageData = {
  movies: MovieInfo[];
  series: SerieInfo[];
}

export type HomepageState = {
  homepage: HomepageData;
}

export type GetHomepageDataAction = {
  type: string;
  payload: {
    movies: MovieInfo[];
    series: SerieInfo[];
  };
}
