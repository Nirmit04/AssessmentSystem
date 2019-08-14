import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from '../../../../services/storage.service';
import { HttpService } from '../../../../core/http/http.service';

@Component({
  selector: 'app-non-mock-report',
  templateUrl: './non-mock-report.component.html',
  styleUrls: ['./non-mock-report.component.css']
})

export class NonMockReportComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;
  public nonMockReportList: any[];
  public columns: any[];
  private index: number;

  constructor(private service: EmployeeService,
    private httpService: HttpService,
    private router: Router,
    private storageService: StorageService) { }

  public ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.columns = [
      { field: 'SerialNumber', header: 'S NO' },
      { field: 'QuizName', header: 'Quiz Name' },
      { field: 'CorrectAnswers', header: 'Correct Answers' },
      { field: 'WrongAnswers', header: 'Wrong Answers' },
      { field: 'UnattemptedAnswers', header: 'Not Attempted' },
      { field: 'MarksScored', header: 'Marks Scored' },
      { field: 'TotalMarks', header: 'Maximum Marks' },
      { field: 'Accuracy', header: 'Accuracy' },
      { field: 'TimeTaken', header: 'Time Taken (hh:mm:ss)' }
    ];
    setTimeout(() => {
      this.getNonMockReport();
    }, 0);
  }

  private getNonMockReport(): void {
    const subscription = this.httpService.getReportOfNonMockQuiz(this.storageService.getStorage('uid')).subscribe((res: any) => {
      this.nonMockReportList = res as any[];
      for (this.index = 1; this.index <= this.nonMockReportList.length; this.index++) {
        this.nonMockReportList[this.index - 1].SerialNumber = this.index;
      }
    });
    subscription.unsubscribe();
  }

  public viewDetailedReport(quizId: number, index: number): void {
    this.service.data = this.nonMockReportList[index - 1];
    this.service.quizId = quizId;
    this.router.navigate(['/emp-dash/quiz/detailed-report']);
    this.dtTrigger.next();
  }

}
