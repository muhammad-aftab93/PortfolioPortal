import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if the URL includes 'user' or if the method is a POST request
    if (request.url.includes('user') || request.method === 'POST') {
      const token = localStorage.getItem('token');

      // If a token is found, clone the request to include the authorization header
      if (token) {
        const authRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });

        return next.handle(authRequest);
      }
    }

    // If conditions are not met, pass the request through unchanged
    return next.handle(request);
  }
}
