import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})

/**
 * Auth-service Component
 */
export class AuthenticationService {

  constructor(
    private router: Router) {
  }

  register(email: string, password: string) {
  }

  login(username: string, password: string) {
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

