import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ReportingUserService } from '../../services/reporting-user.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-analytics-by-user',
  templateUrl: './analytics-by-user.component.html',
  styleUrls: ['./analytics-by-user.component.css']
})
export class AnalyticsByUserComponent implements OnInit {

  constructor(private service: ReportingUserService, private dialog: MatDialog, private router: Router) { }
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;
  dtOptions: DataTables.Settings = {};
  public allUsers: any[];

  public ngOnInit(): void {

    this.dtOptions = {
      lengthChange: false,
      paging: false,
      search: false
    };
    setTimeout(() => {
      this.loadAllEmployees();
    }, 0);
  }

  private loadAllEmployees(): void {
    this.service.getAllUsers().subscribe((res: any) => {
      this.allUsers = res as any[];

      this.dtTrigger.next();
    });
  }

  public viewUserDetails(index: string): void {
    this.service.data = this.allUsers[index];
    this.router.navigate(['/ru-dash/ana-by-user/user-detail']);
  }

}
