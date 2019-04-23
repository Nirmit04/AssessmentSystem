import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-non-mock-report',
  templateUrl: './non-mock-report.component.html',
  styleUrls: ['./non-mock-report.component.css']
})

export class NonMockReportComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;
  bool: false;
  nonMockReportList: any[];
  cols: any[];
	i: number;

  constructor(private service: EmployeeService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
   //   responsive: true,
      // scrollX: true
    };
    this.cols = [
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

  getNonMockReport() {
    this.service.getReportOfNonMockQuiz(localStorage.getItem('uid')).subscribe((res: any) => {
      this.nonMockReportList = res as any[];
      // this.dtTrigger.next();
      for (this.i = 1; this.i <= this.nonMockReportList.length; this.i++) {
				this.nonMockReportList[this.i - 1].SerialNumber = this.i;
			}
    });
  }

  viewDetailedReport(qid: number, index: number) {
    this.service.data = this.nonMockReportList[index-1];
    this.service.QuizId = qid;
    this.router.navigate(['/emp-dash/quiz/detailed-report']);
    this.dtTrigger.next();
  }

}
