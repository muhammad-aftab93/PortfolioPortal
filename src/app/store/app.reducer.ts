import {ActionReducerMap} from "@ngrx/store";
import {authReducer, AuthState} from "../account/store/auth.reducer";

export interface AppState {
  auth: AuthState
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer
}
