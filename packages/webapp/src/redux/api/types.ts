export type ApiData = {
  loading: boolean;
}

export type ApiState = {
  api: ApiData;
}

export type SetApiLoadingAction = {
  type: string;
  payload: boolean;
}
