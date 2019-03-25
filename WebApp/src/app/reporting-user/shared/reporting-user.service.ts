import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportingUserService {

  rootUrl = environment.apiURl;

  constructor(private http: HttpClient) { }

  getTagAnalytics() {
    return this.http.get(this.rootUrl + "");
  }
  getAllUsers() {
    return this.http.get(this.rootUrl + 'User/GetUserAll');
  }
}
