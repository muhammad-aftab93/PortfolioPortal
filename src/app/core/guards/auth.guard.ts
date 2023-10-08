import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {selectAuthToken} from "../../account/store/auth.selector";
import {isTokenValid} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.store.select(selectAuthToken).pipe(
      map(token => {
        if (token && isTokenValid(token)) {
          return true;
        } else {
          return this.router.createUrlTree(['/login']);
        }
      })
    );
  }

}
