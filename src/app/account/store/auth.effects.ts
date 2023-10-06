import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {autoLogin, login, loginFailure, loginSuccess} from "./auth.actions";
import {HttpClient} from "@angular/common/http";
import {map, mergeMap, of, tap} from "rxjs";
import {catchError} from "rxjs/operators";
import {url} from "../../core/apis";
import {Router} from "@angular/router";

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(action => this.httpClient.post<{ user: { id: string, email: string }, token: string }>(
        url.login,
        {email: action.email, password: action.password}
      ).pipe(
        map(response => loginSuccess({token: response.token, user: response.user})),
        catchError(error => of(loginFailure({error})))
      ))
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess),
      tap(action => {
        localStorage.setItem('token', action.token);
        localStorage.setItem('user', JSON.stringify(action.user));
        this.router.navigate(['/']);
      })
    ), {dispatch: false}  // This is important as we're not dispatching another action here.
  );

  autoLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(autoLogin),
      map(() => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user')!);

        if (token && user) {
          return loginSuccess({token, user});
        } else {
          // Optionally handle the case where there's no token/user data.
          // For now, we'll just return a type that doesn't trigger any reducer.
          return {type: 'NO_ACTION'};
        }
      })
    )
  );

  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private router: Router) {
  }
}
