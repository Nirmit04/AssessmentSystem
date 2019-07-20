import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mock-report',
  templateUrl: './mock-report.component.html',
  styleUrls: ['./mock-report.component.css']
})
export class MockReportComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;
  bool: false;
  mockReportList: any[];
  cols: any[];
	i: number;

  constructor(private service: EmployeeService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.cols = [
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

  getMockReport() {
    this.service.getReportOfMockQuiz(localStorage.getItem('uid')).subscribe((res: any) => {
      this.mockReportList = res as any[];
      // this.dtTrigger.next();
      for (this.i = 1; this.i <= this.mockReportList.length; this.i++) {
				this.mockReportList[this.i - 1].SerialNumber = this.i;
			}
    });
  }

  viewDetailedReport(qid: number, index: number) {
    this.service.data = this.mockReportList[index-1];
    this.service.QuizId = qid;
    this.router.navigate(['/emp-dash/quiz/detailed-report']);
  }

}
