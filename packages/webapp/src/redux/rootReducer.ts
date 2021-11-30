import { combineReducers } from "redux";
import movies from "./movies/moviesReducer";
import series from "./series/seriesReducer";
import homepage from "./homepage/homepageReducer";
import api from "./api/apiReducer";

const rootReducer = combineReducers({
    movies,
    series,
    homepage,
    api
});

export default rootReducer;
