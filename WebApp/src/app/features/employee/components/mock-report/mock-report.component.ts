import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { StorageService } from '../../../../services/storage.service';
import { HttpService } from '../../../../core/http/http.service';

@Component({
  selector: 'app-mock-report',
  templateUrl: './mock-report.component.html'
})
export class MockReportComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;;
  public mockReportList: any[];
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
      { field: 'TotalMarks', header: 'Total Marks' },
      { field: 'Accuracy', header: 'Accuracy' },
      { field: 'TimeTaken', header: 'Time Taken (hh:mm:ss)' }
    ];
    setTimeout(() => {
      this.getMockReport();
    }, 0);

  }

  private getMockReport(): void {
    this.httpService.getReportOfMockQuiz(this.storageService.getStorage('uid')).subscribe((res: any) => {
      this.mockReportList = res as any[];
      for (this.index = 1; this.index <= this.mockReportList.length; this.index++) {
        this.mockReportList[this.index - 1].SerialNumber = this.index;
      }
    });
  }

  public viewDetailedReport(quizId: number, index: number) {
    this.service.data = this.mockReportList[index - 1];
    this.service.quizId = quizId;
    this.router.navigate(['/emp-dash/quiz/detailed-report']);
  }

}
