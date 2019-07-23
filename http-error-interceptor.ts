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
import { AuthService } from 'angularx-social-login';
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-http-interceptor',
  templateUrl: './http-interceptor.component.html',
  styleUrls: ['./http-interceptor.component.css']
})
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(@Inject(DOCUMENT) private document: Document) {}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          this.document.location.href = "/home/nineleaps/Downloads/AssessmentSystem/WebApp/src/app/http-error-handling.html";
          window.alert("Error has occured. Please reload! " + error.status + ' - ' + error.statusText); 
          this.storageService.clearStorage();
          return throwError(errorMessage);


        })
      )
  }
}
