import * as types from "./seriesActionTypes";
import { GetSeriesAction } from './types';

const initialState = {
  series: []
};

function seriesReducer(state = initialState, action: GetSeriesAction) {
  switch (action.type) {
    case types.GET_SERIES_SUCCESS: {
      return {
        ...state,
        series: action.payload
      }
    }

    default:
      return state
  }
}

export default seriesReducer;
