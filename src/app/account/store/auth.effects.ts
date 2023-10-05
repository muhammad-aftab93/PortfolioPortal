import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {login, loginStart} from "./auth.actions";
import {tap} from "rxjs";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../core/services/api.service";

@Injectable()
export class AuthEffects {

  loginStart = createEffect(() =>
    this.actions$.pipe(
      ofType(loginStart),
    ));

  loginSuccess = createEffect(
    () =>
      this.actions$.pipe(
        ofType(login),
        tap(() => {
          this.router.navigate(['/']);
        })
      ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) {
  }
}

