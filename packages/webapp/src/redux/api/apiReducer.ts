import * as types from "./apiActionTypes";
import { SetApiLoadingAction } from './types';

const apiState = {
  loading: false
};

function apiReducer(state = apiState, action: SetApiLoadingAction) {
  switch (action.type) {
    case types.SET_API_LOADING: {
      return {
        ...state,
        loading: action.payload
      }
    }

    default:
      return state
  }
}

export default apiReducer;
