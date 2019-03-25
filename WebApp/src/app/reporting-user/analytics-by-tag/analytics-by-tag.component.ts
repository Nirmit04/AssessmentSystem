import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee/shared/employee.service';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { ReportingUserService } from '../shared/reporting-user.service';

@Component({
  selector: 'app-analytics-by-tag',
  templateUrl: './analytics-by-tag.component.html',
  styleUrls: ['./analytics-by-tag.component.css']
})
export class AnalyticsByTagComponent implements OnInit {

  constructor(private service: ReportingUserService,
    private router: Router) { }

    tagAnalysisList: any[];
    dtTrigger: Subject<any> = new Subject();
    subscription: Subscription;
    dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.loadAnalyticOfTag();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
  }

  loadAnalyticOfTag() {
    this.service.getTagAnalytics().subscribe((res: any) => {
      this.tagAnalysisList = res as any[];
      this.dtTrigger.next();
      console.log(this.tagAnalysisList);
    });
  }

}
