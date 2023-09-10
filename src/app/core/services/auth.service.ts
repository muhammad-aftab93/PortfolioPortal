import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "./api.service";
import {url} from "../apis";

@Injectable({providedIn: 'root'})

/**
 * Auth-service Component
 */
export class AuthenticationService {

  constructor(
    private router: Router,
    private apiService: ApiService) {
  }

  register(email: string, password: string) {
  }

  login(email: string, password: string) {
    return this.apiService.sendRequest(url.login, 'post', {email: email, password: password});
  }

  /**
   * Returns the current user
   */
  public currentUser(): any {
  }

  /**
   * Logout the user
   */
  logout() {
    // logout the user
    localStorage.removeItem('authToken');
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      // Decode the token to get expiration date
      const tokenPayload = JSON.parse(atob(authToken.split('.')[1]));
      const expirationDate = new Date(tokenPayload.exp * 1000); // Convert to milliseconds

      // Check if token is not expired
      return expirationDate > new Date();
    }

    return false;
  }

}

