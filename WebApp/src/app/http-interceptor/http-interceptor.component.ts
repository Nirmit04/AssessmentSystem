import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-http-interceptor',
  templateUrl: './http-interceptor.component.html',
  styleUrls: ['./http-interceptor.component.css']
})
export class HttpInterceptorComponent implements OnInit {
  constructor(private router: Router) { }

  HTTP_CODES = {
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


  }

  errorCode: string;
  errorMsg: string;

  ngOnInit() {
    this.errorCode = localStorage.getItem('errorCode');
    this.errorMsg = this.HTTP_CODES[+this.errorCode];
  }

  login() {
    localStorage.clear();
    this.router.navigate([""]);
  }

}
