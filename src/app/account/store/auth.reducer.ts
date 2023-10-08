import {createReducer, on} from "@ngrx/store";
import {loginFailure, loginSuccess} from "./auth.actions";

export interface AuthState {
  user: { id: string, email: string } | null;
  authToken: string | null;
  error: any;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem('user')!) || null,
  authToken: JSON.parse(localStorage.getItem('authToken')!) || null,
  error: null
};


export const authReducer = createReducer(
  initialState,
  on(loginSuccess,
    (state, action) =>
      ({...state, authToken: action.token, user: action.user})),
  on(loginFailure,
    (state, action) =>
      ({...state, error: action.error}))
);
