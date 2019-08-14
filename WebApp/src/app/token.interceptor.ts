import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './services/storage.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private storageService: StorageService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                
                TOKEN:  this.storageService.getStorage('token')
            }
        });
        return next.handle(request);
    }
}
