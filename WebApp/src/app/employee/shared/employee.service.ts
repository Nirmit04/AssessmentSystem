import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { postReport } from './postReport.model';
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  rootURL = environment.apiURl;
  quizName: string;
  quesOfQuiz: any[];
  hours: number;
  seconds: number;
  minutes: number;
  timer;
  qnProgress: number;
  size: number;
  QuizScheduleId: number;
  body: postReport;
  QuizId: number;
  data: any;
  correctAnswerCount = 0;

  constructor(private http: HttpClient) { }

  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  getNonMocks() {
    return this.http.get(this.rootURL + 'Employee/Scheduled/' + localStorage.getItem('uid'));
  }

  getQuesOfQuiz(QuizId: number) {
    return this.http.get(this.rootURL + 'Quiz/QuizQuestion/' + QuizId);
  }

  getMockQuesOfQuiz(QuizId: number) {
    return this.http.get(this.rootURL + 'Quiz/QuizQuestion/' + QuizId);
  }

  checkValidUser(id: number) {
    return this.http.post(this.rootURL + 'UserSchedule/ValidQuizTaker/' + localStorage.getItem('uid'), id);
  }

  postanswers() {
    this.body.QuizScheduleId = this.QuizScheduleId;
    this.body.QuizId = this.QuizId;
    this.body.UserId = localStorage.getItem('uid');
    return this.http.post(this.rootURL + 'Quiz/EvaluateQuiz', this.body);
  }

  getUserDetails() {
    return this.http.get(this.rootURL + 'GetUserDetails?email=' + localStorage.getItem('email'));
  }

  getListOfMockQuizzes() {
    return this.http.get(this.rootURL + 'Quiz/MockQuiz');
  }

  getUserProgress() {
    return this.http.get(this.rootURL + '/Employee/Stats/' + localStorage.getItem('uid'))
  }

  getReportOfNonMockQuiz(id) {
    return this.http.get(this.rootURL + 'Report/Scheduled/' + id);
  }

  getReportOfMockQuiz(id) {
    return this.http.get(this.rootURL + 'Report/Mock/' + id);
  }

  getDetailedReport() {
    return this.http.get(this.rootURL + '/DetailedReport/' + localStorage.getItem('uid') + '/' + this.QuizId);
  }

  getQues(id: number) {
    return this.http.get(this.rootURL + 'Question/' + id)
  }

  getAnswers() {
    return this.http.get(this.rootURL + 'Quiz/EvaluateMockQuiz/' + this.QuizId);
  }

}
