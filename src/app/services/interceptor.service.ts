import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';
import {Config} from '../models/Config';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private authService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //get the token
    let token = Config.getToken();

    // clone the request and add authorization header
    let request = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });

    return next.handle(request).pipe(
      retry(1),
      catchError((err: HttpErrorResponse) => {
        // handle token expiration or unauthenticated messages here
        if (err.status === 401 || err.status === 403) {
          //send user to login page - forced logout
          this.authService.logout();
        }
        return throwError(err);
      })
    );
  }
}
