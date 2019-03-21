import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-non-mock-report',
  templateUrl: './non-mock-report.component.html',
  styleUrls: ['./non-mock-report.component.css']
})
export class NonMockReportComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;

  bool:false;

  nonMockReportList: any[];

  constructor(private service: EmployeeService,
    private toastr: ToastrService) { }

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
      this.dtTrigger.next();
    });
  }
  viewDetailedReport(qid:number)  {
    //localStorage.setItem('qIdReport', qid);
    //this.router.navigate(['/non-mock-report']);
  }
}
