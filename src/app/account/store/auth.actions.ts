import {createAction, props} from "@ngrx/store";

export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ token: string, user: { id: string, email: string } }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const autoLogin = createAction(
  '[Auth] Auto Login'
);

