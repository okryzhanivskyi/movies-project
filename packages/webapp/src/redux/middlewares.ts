import { MiddlewareAPI, Dispatch, AnyAction } from 'redux';
import { GET_HOMEPAGE_DATA_SUCCESS, SET_HOMEPAGE_DATA } from './homepage/homepageActionTypes';
import { MovieInfo, SerieInfo } from '@movies/webapp-components/src/types';
import { sortByRating } from '../helpers/sortHelper';
import { HOMEPAGE_ELEMENTS_NUMBER, RATING_THREESHOLD } from '../config/constants';

const getTopRated = (items: (MovieInfo | SerieInfo)[]) => items.filter(
  el => el.imDbRating > RATING_THREESHOLD
).sort(sortByRating).slice(0, HOMEPAGE_ELEMENTS_NUMBER);

export const topRatingsMiddleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
  if (action.type === GET_HOMEPAGE_DATA_SUCCESS) {
    const movies = getTopRated(action.payload.movies);
    const series = getTopRated(action.payload.series);

    const payload = {
      movies,
      series
    };

    return store.dispatch({ type: SET_HOMEPAGE_DATA, payload })
  }

  return next(action)
}