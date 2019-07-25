import { Component, OnInit } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
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
  private time: any[];
  private tag: string = '';
  public mockList: any[];
  public columns: any[];
  private index: number;

  constructor(private service: EmployeeService,
    public router: Router,
    private httpService: HttpService) { }

  public ngOnInit():void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    setTimeout(() => {
      this.getMockList();
    }, 0);
    this.columns = [
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

  private getMockList(): void {
    this.httpService.getListOfMockQuizzes().subscribe((res: any) => {
      this.mockList = res as any[];
      for (this.index = 1; this.index <= this.mockList.length; this.index++) {
        this.mockList[this.index - 1].SerialNumber = this.index;
        this.tag = '';
        for (let tag of this.mockList[this.index - 1].Tags) {
          this.tag = this.tag + tag.Name + ',';
        }
        this.mockList[this.index - 1].Tags1 = this.tag;
        this.mockList[this.index - 1].Tags1 = this.mockList[this.index - 1].Tags1.substring(0, this.mockList[this.index - 1].Tags1.length - 1);
      }
    });
  }

  public takeMockQuiz(QuizId: number, QuizName: string, index: number):void{
    this.service.quizId = QuizId;
    this.httpService.getMockQuesOfQuiz(QuizId).subscribe((res: any) => {
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
      this.service.noOfQuestionsInQuiz = this.mockList[index - 1].TotalQuestions;
      this.service.hours = parseInt(this.time[0]);
      this.service.minutes = parseInt(this.time[1]);
      this.service.quizScheduleId = null;
      this.router.navigate(['/emp-dash/quiz/take-quiz']);
    });
  }

}
