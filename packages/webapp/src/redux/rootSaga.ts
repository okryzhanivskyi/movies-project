import { all } from "redux-saga/effects";
import moviesSagas from "./movies/moviesSagas";
import seriesSagas from "./series/seriesSagas";
import homePageSagas from "./homepage/homepageSagas";

export default function *rootSaga() {
    yield all([
        moviesSagas(),
        seriesSagas(),
        homePageSagas()
    ]);
}
