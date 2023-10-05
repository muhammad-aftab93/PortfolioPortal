import {createReducer, on} from "@ngrx/store";
import {login, loginFail, loginStart, logout} from "./auth.actions";

export interface AuthState {
  authToken: string | null;
}

const initialState: AuthState = JSON.parse(localStorage.getItem('user')!);

export const authReducer = createReducer(
  initialState,
  on(
    login,
    (state, action) => {
      return {
        ...state,
        authError: null,
        authToken: action.authToken
      };
    }
  ),
  on(
    logout,
    (state) => {
      return {
        ...state,
        authToken: null
      };
    }
  ),
  on(
    loginStart,
    (state) => {
      return {
        ...state,
        authError: null,
      };
    }
  ),
  on(
    loginFail,
    (state, action) => {
      return {
        ...state,
        authToken: null,
        authError: action.error
      };
    }
  )
);
