import {createReducer, on} from "@ngrx/store";
import {loginFailure, loginSuccess} from "./auth.actions";

export interface AuthState {
  authToken: string | null;
  error: any;
}

const initialState: AuthState = JSON.parse(localStorage.getItem('user')!);

export const authReducer = createReducer(
  initialState,
  on(loginSuccess,
    (state, action) =>
      ({...state, authToken: action.token})),
  on(loginFailure,
    (state, action) =>
      ({...state, error: action.error}))
);
