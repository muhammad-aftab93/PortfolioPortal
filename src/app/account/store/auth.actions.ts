import {createAction, props} from "@ngrx/store";

export const login = createAction(
  '[Auth] Login',
  props<{ authToken: string }>()
);
export const logout = createAction(
  '[Auth] Logout');
export const loginStart = createAction(
  '[Auth] Login Start',
  props<{ email: string; password: string }>()
);

export const loginFail = createAction(
  '[Auth] Login Fail',
  props<{ error: string }>()
);
