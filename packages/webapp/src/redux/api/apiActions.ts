import * as types from "./apiActionTypes";

export const setLoading = (payload: boolean) => ({ type: types.SET_API_LOADING, payload });
