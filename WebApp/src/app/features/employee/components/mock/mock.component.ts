import { Component, OnInit } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { HttpService } from '../../../../core/http/http.service';


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
  tg: string = '';
  mockList: any[];
  cols: any[];
  i: number;

  constructor(private service: EmployeeService,
    private toastr: ToastrService,
    public router: Router,
    private httpService: HttpService) { }

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
    this.httpService.getListOfMockQuizzes().subscribe((res: any) => {
      this.mockList = res as any[];
      for (this.i = 1; this.i <= this.mockList.length; this.i++) {
        this.mockList[this.i - 1].SerialNumber = this.i;
        this.tg = '';
        for (let tag of this.mockList[this.i - 1].Tags) {
          this.tg = this.tg + tag.Name + ',';
        }
        this.mockList[this.i - 1].Tags1 = this.tg;
        this.mockList[this.i - 1].Tags1 = this.mockList[this.i - 1].Tags1.substring(0, this.mockList[this.i - 1].Tags1.length - 1);
      }
      console.log(this.mockList);
    });
  }
  takeMockQuiz(QuizId: number, QuizName: string, index: number) {
    this.service.QuizId = QuizId;
    this.httpService.getMockQuesOfQuiz(QuizId).subscribe((res: any) => {
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
