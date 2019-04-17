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

  constructor(private service: EmployeeService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    setTimeout(() => {
			this.getMockReport();
		}, 0);
    
  }

  getMockReport() {
    this.service.getReportOfMockQuiz(localStorage.getItem('uid')).subscribe((res: any) => {
      this.mockReportList = res as any[];
      this.dtTrigger.next();
    });
  }

  viewDetailedReport(qid: number, index: number) {
    this.service.data = this.mockReportList[index];
    this.service.QuizId = qid;
    this.router.navigate(['/emp-dash/quiz/detailed-report']);
  }

}
