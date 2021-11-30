import * as types from "./homepageActionTypes";
import { GetHomepageDataAction } from './types';

const homepageState = {
  movies: [],
  series: []
};

function homepageReducer(state = homepageState, action: GetHomepageDataAction) {
  switch (action.type) {
    case types.GET_HOMEPAGE_DATA_SUCCESS: {
      return {
        ...state,
        movies: action.payload.movies,
        series: action.payload.series,
      }
    }
    
    case types.SET_HOMEPAGE_DATA: {
      return {
        ...state,
        movies: action.payload.movies,
        series: action.payload.series,
      }
    }

    default:
      return state
  }
}

export default homepageReducer;
