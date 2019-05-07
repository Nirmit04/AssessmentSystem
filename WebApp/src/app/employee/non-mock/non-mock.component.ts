import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { concat, Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Time } from '@angular/common';
@Component({
  selector: 'app-non-mock',
  templateUrl: './non-mock.component.html',
  styleUrls: ['./non-mock.component.css']
})

export class NonMockComponent implements OnInit {

  nonMockScheduleList: any[];
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;
  dtOptions: DataTables.Settings = {};
  time: any[];
  // QuizTime: string;
  // QuizTimeSplit: any[];
  // QuizTimeHour: number;
  // QuizTimeMinutes: number;
  // QuizTimeSeconds: number;
  // timeString: string = "";
  // dateTime = null;
  cols: any[];
  i: number;

  constructor(private service: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.loadNonMockSchedules();
    }, 0);
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.cols = [
      { field: 'SerialNumber', header: 'S NO' },
      { field: 'QuizName', header: 'Quiz' },
      { field: 'StartDateTime', header: 'Start Time' },
      { field: 'EndDateTime', header: 'End Time' },
      { field: 'QuizTime', header: 'Quiz Time' }
    ];
    // this.QuizTime = "00:00:00";
    // this.QuizTimeSeconds = parseInt((this.QuizTime.split(":"))[2]);
  }

  loadNonMockSchedules() {
    this.service.getNonMocks().subscribe((res: any) => {
      this.nonMockScheduleList = res as any[];
      // this.dtTrigger.next();
      for (this.i = 1; this.i <= this.nonMockScheduleList.length; this.i++) {
        this.nonMockScheduleList[this.i - 1].SerialNumber = this.i;
      }
    });
  }
  takeQuiz(QuizId: number, Id: number, QuizName: string, index: number) {
    this.service.QuizId = QuizId;
    this.service.getQuesOfQuiz(QuizId).subscribe((res: any) => {
      console.log(res);
      if (res !== 'Quiz Started') {
        this.service.statusMapping = res.GetQuestionBuffers;
        this.time = res.TimeLeft.split(":");
        this.service.seconds = parseInt(this.time[2]);
      }
      else {
        this.time = this.nonMockScheduleList[index - 1].QuizTime.split(":");
        this.service.seconds = 0;
        this.service.statusMapping = null;
      }
      this.service.quizName = QuizName;
      this.service.noQuesOfQuiz = this.nonMockScheduleList[index - 1].TotalQuestions;
      this.service.hours = parseInt(this.time[0]);
      this.service.minutes = parseInt(this.time[1]);
      this.service.QuizScheduleId = Id;
      this.router.navigate(['/emp-dash/quiz/take-quiz']);
    });
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

}
