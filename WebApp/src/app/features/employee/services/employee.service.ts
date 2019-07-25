import { Injectable } from '@angular/core';
import { postReport } from '../models/postReport.model';
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  public quizName: string;
  public noOfQuestionsInQuiz: number;
  public questionsOfQuiz: any[];
  public hours: number;
  public seconds: number;
  public minutes: number;
  timer;
  public qnProgress: number;
  public size: number;
  public quizScheduleId: number;
  public body: postReport;
  public quizId: number;
  public data: any;
  public correctAnswerCount = 0;
  public statusMapping: any[];

  constructor() { }

  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }
}
