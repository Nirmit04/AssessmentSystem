import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ReportingUserService } from '../shared/reporting-user.service';
@Component({
  selector: 'app-analytics-by-user',
  templateUrl: './analytics-by-user.component.html',
  styleUrls: ['./analytics-by-user.component.css']
})
export class AnalyticsByUserComponent implements OnInit {

  constructor(private service: ReportingUserService, ) { }
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;
  dtOptions: DataTables.Settings = {};
  allUsers: any[];
  ngOnInit() {
    this.loadAllEmployees();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
  }
  loadAllEmployees() {
    this.service.getAllUsers().subscribe((res: any) => {
      this.allUsers = res as any[];
      this.dtTrigger.next();
      console.log(this.allUsers);
    });
  }
}
