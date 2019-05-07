import { Component, OnInit } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})

export class MockComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;
  time: any[];

  mockList: any[];
  cols: any[];
  i: number;

  constructor(private service: EmployeeService,
    private toastr: ToastrService,
    public router: Router) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };

    setTimeout(() => {
      this.getMockList();
    }, 0);
    this.cols = [
      { field: 'SerialNumber', header: 'S NO' },
      { field: 'QuizName', header: 'Quiz Name' },
      { field: 'Tags1', header: 'Tags' },
      { field: 'Difficulty', header: 'Difficulty Level' },
      { field: 'TotalQuestions', header: 'Total Questions' },
      { field: 'TotalMarks', header: 'Total Marks' },
      { field: 'QuizTime', header: 'Duration' }
    ];
    this.getMockList();
  }

  getMockList() {
    this.service.getListOfMockQuizzes().subscribe((res: any) => {
      this.mockList = res as any[];
      for (this.i = 1; this.i <= this.mockList.length; this.i++) {
        this.mockList[this.i - 1].SerialNumber = this.i;
        for (let tag of this.mockList[this.i - 1].Tags) {
          this.mockList[this.i - 1].Tags1 += tag.Name + ' ';
        }
      }
    });
  }
  takeMockQuiz(QuizId: number, QuizName: string, index: number) {
    this.service.QuizId = QuizId;
    this.service.getMockQuesOfQuiz(QuizId).subscribe((res: any) => {
      console.log(res);
      if (res !== 'Quiz Started') {
        this.service.statusMapping = res.GetQuestionBuffers;
        this.time = res.TimeLeft.split(":");
        this.service.seconds = parseInt(this.time[2]);
      }
      else {
        this.time = this.mockList[index - 1].QuizTime.split(":");
        this.service.seconds = 0;
        this.service.statusMapping = null;
      }
      this.service.quizName = QuizName;
      this.service.noQuesOfQuiz = this.mockList[index - 1].TotalQuestions;
      this.service.hours = parseInt(this.time[0]);
      this.service.minutes = parseInt(this.time[1]);
      this.service.QuizScheduleId = null;
      this.router.navigate(['/emp-dash/quiz/take-quiz']);
    });
  }

}
