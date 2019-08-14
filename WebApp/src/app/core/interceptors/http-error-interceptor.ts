import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { StorageService } from '../../services/storage.service'
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  /* this class is used to intercept all http requests that goes from the front-end to the back-end */

  constructor(
    private router: Router,
    private storageService: StorageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /* intercept all http request */
    return next.handle(request)
      .pipe(
        retry(3), // retry, if an occurs while hitting the api
        catchError((error: HttpErrorResponse) => {
          /* if an error persists even after retrying, then catch that error and redirect the user to the error page */
          let errorMessage: string = '';
          let errorCode: any = null;
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            errorCode = error.status;
            this.storageService.setStorage('errorCode', errorCode);
            this.storageService.setStorage('errorMsg', error.error.Message);
          }
          this.router.navigate(['/http-error']);
          return throwError(errorMessage);
        })
      );
  }
}
