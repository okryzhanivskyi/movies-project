import { takeLatest, call, put, all } from "redux-saga/effects";
import * as types from "./moviesActionTypes";
import { getMoviesFromApi } from '../../api/movies';
import { setLoading } from '../api/apiActions';

function* getMovies() {
  try {
    yield put(setLoading(true));
    const payload = yield call(getMoviesFromApi);
    yield put(setLoading(false));

    yield put({ type: types.GET_MOVIES_SUCCESS, payload: payload.items });
    
  } catch (e) {
    yield put({ type: types.GET_MOVIES_ERROR });
  }
}

export default function* () {
  yield all([
    yield takeLatest(types.GET_MOVIES_REQUEST, getMovies),
  ])
}
