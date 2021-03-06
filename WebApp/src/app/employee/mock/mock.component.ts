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
      { field: 'Subject', header: 'Subject' },
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
      // this.dtTrigger.next();
      for (this.i = 1; this.i <= this.mockList.length; this.i++) {
        this.mockList[this.i - 1].SerialNumber = this.i;
      }
    });
  }

  takeMockQuiz(QuizId: number, QuizName: string, index: number) {
    this.service.getMockQuesOfQuiz(QuizId).subscribe((res: any) => {
      console.log(res);
      this.service.quizName = QuizName;
      this.time = this.mockList[index].QuizTime.split(":");
      this.service.hours = parseInt(this.time[0]);
      this.service.minutes = parseInt(this.time[1]);
      this.service.quesOfQuiz = res as any[];
      this.service.QuizId = QuizId;
      this.router.navigate(['/emp-dash/quiz/take-quiz']);
    });
  }

}
