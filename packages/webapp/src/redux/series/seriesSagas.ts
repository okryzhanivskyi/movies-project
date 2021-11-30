import { takeLatest, call, put, all } from "redux-saga/effects";
import * as types from "./seriesActionTypes";
import { getSeriesFromApi } from '../../api/series';

function* getSeries() {
  try {
    const payload = yield call(getSeriesFromApi);

    yield put({ type: types.GET_SERIES_SUCCESS, payload: payload.items });
  } catch (e) {
    yield put({ type: types.GET_SERIES_ERROR });
  }
}

export default function* () {
  yield all([
    yield takeLatest(types.GET_SERIES_REQUEST, getSeries),
  ])
}
