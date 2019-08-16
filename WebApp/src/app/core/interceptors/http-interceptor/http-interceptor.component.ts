import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-http-interceptor',
  templateUrl: './http-interceptor.component.html',
  styleUrls: ['./http-interceptor.component.css']
})
export class HttpInterceptorComponent implements OnInit {
  /* this class is used to display error page corresponding the error that has occured with relevant http error code and error message */
  private errorCode: string;
  private errorMsg: string;
  private errorStackTrace: string;
  constructor(
    private router: Router,
    private storageService: StorageService) {
    this.errorCode = '';
    this.errorMsg = '';
    this.errorStackTrace = '';
  }

  private HTTP_CODES = {
    /* list of possible http error status codes */
    0: 'Method Not Found',
    203: 'Non-Authoritative Information',
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Found',
    408: 'Request Timeout',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailabe',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
  };

  public ngOnInit(): void {
    /* sets the errorCode and errorMessage in case of any http error */
    this.errorCode = this.storageService.getStorage('errorCode');
    this.errorMsg = this.HTTP_CODES[this.errorCode];
    if (this.storageService.getStorage('errorMsg')) {
      this.errorStackTrace = this.storageService.getStorage('errorMsg');
    }
  }

  public login(): void {
    /* redirects back tot he login page */
    this.storageService.clearStorage();
    this.router.navigate(['']);
  }

}
