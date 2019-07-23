import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { postReport } from '../models/postReport.model';
import { StorageService } from '../../../services/storage.service';
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  rootURL = environment.apiURl;
  quizName: string;
  noQuesOfQuiz: number;
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
  statusMapping: any[];

  constructor() { }

  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }
}
