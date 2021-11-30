import * as types from "./moviesActionTypes";
import { GetMoviesAction } from './types';

const moviesState = {
  movies: [],
};

function moviesReducer(state = moviesState, action: GetMoviesAction) {
  switch (action.type) {
    case types.GET_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: action.payload
      }
    }

    default:
      return state
  }
}

export default moviesReducer;
