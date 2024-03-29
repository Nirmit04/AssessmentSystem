import { Component, OnInit } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router, RouterModule } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  errorCode: any;
  errorMsg: string;
  show = true;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          console.log(error.error.Message);
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
            console.log(errorMessage);
          } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            this.errorCode = error.status;
            localStorage.setItem('errorCode', this.errorCode);
            localStorage.setItem('errorMsg', error.error.Message);
          }
          this.router.navigate(['/http-error']);
          return throwError(errorMessage);
        })
      );
  }
}
