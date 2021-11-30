import { takeLatest, call, put, all } from "redux-saga/effects";
import * as types from "./homepageActionTypes";
import { getMoviesFromApi } from '../../api/movies';
import { getSeriesFromApi } from '../../api/series';

function* getHomepageData() {
  try {
    const movies = yield call(getMoviesFromApi);
    const series = yield call(getSeriesFromApi);
    
    const payload = {
      movies: movies.items,
      series: series.items
    };

    yield put({ type: types.GET_HOMEPAGE_DATA_SUCCESS, payload });
  } catch (e) {
    yield put({ type: types.GET_HOMEPAGE_DATA_ERROR });
  }
}

export default function* () {
  yield all([
    yield takeLatest(types.GET_HOMEPAGE_DATA_REQUEST, getHomepageData),
  ])
}
