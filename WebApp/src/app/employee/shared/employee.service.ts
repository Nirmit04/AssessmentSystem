import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { postReport } from './postReport.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  rootURL = environment.apiURl;
  quesOfQuiz: any[];
  seconds: number;
  timer;
  qnProgress: number;
  size: number;
  QuizScheduleId: number;
  body: postReport;
  QuizId: number;
  data: any;
  constructor(private http: HttpClient) { }
  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }
  getNonMocks() {
    return this.http.get(this.rootURL + 'Employee/NonMock/' + localStorage.getItem('uid'));
  }
  getQuesOfQuiz(QuizId: number) {
    return this.http.get(this.rootURL + 'Quiz/QuizQuestion/' + QuizId);
  }
  getMockQuesOfQuiz(QuizId: number) {
    return this.http.get(this.rootURL + 'Quiz/MockQuizQuestion/' + QuizId);
  }
  checkValidUser(id: number)  {
    return this.http.post(this.rootURL+'UserSchedule/ValidQuizTaker/'+localStorage.getItem('uid'), id);
  }
  postanswers() {
    this.body.QuizScheduleId = this.QuizScheduleId;
    this.body.QuizId = this.QuizId;
    this.body.UserId = localStorage.getItem('uid');
    console.log(this.body);
    return this.http.post(this.rootURL + 'Quiz/EvaluateQuiz', this.body);
  }
  getUserDetails() {
    console.log(localStorage.getItem('email'));
    return this.http.get(this.rootURL + 'GetUserDetails?email=' + localStorage.getItem('email'));
  }
  getListOfMockQuizzes() {
    return this.http.get(this.rootURL + 'Quiz/MockQuiz');
  }
  getReportOfNonMockQuiz(id) {
    return this.http.get(this.rootURL + 'Report/NonMock/' + id);
  }
  getReportOfMockQuiz(id) {
    return this.http.get(this.rootURL + 'Report/Mock/' + id);
  }
  getDetailedReport() {
    console.log(this.QuizId);
    return this.http.get(this.rootURL + '/DetailedReport/' + localStorage.getItem('uid') + '/' + this.QuizId);
  }
  getQues(id: number) {
    return this.http.get(this.rootURL + 'Question/' + id)
  }
  getUserProgress(){
    // console.log(localStorage.getItem('uid'))
    return this.http.get(this.rootURL + '/Employee/Stats/'+ localStorage.getItem('uid'));
  }
}
