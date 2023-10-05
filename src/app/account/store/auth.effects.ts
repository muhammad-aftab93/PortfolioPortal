import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ApiService} from "../../core/services/api.service";
import {login} from "./auth.actions";

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
    ))


  constructor(private actions$: Actions, private apiService: ApiService) {
  }
}
