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

  constructor(private service: EmployeeService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.getNonMockReport();
  }

  getNonMockReport() {
    this.service.getReportOfNonMockQuiz(localStorage.getItem('uid')).subscribe((res: any) => {
      this.nonMockReportList = res as any[];
      console.log(this.nonMockReportList);
      this.dtTrigger.next();
    });
  }
  viewDetailedReport(qid: number, index: number) {
    this.service.data = this.nonMockReportList[index];
    this.service.QuizId = qid;
    this.router.navigate(['/emp-dash/quiz/detailed-report']);
    this.dtTrigger.next();
  }
}
