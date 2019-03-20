import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  rootURL = environment.apiURl;
  constructor(private http: HttpClient) { }

  getNonMocks() {
    return this.http.get(this.rootURL + 'Employee/NonMock/' + localStorage.getItem('uid'));
  }
}
