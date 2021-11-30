import { SerieInfo } from '@movies/webapp-components/src/types';

export type SeriesData = {
  series: SerieInfo[];
}

export type SeriesState = {
  series: SeriesData;
}

export type GetSeriesAction = {
  type: string;
  payload: SerieInfo[];
}
