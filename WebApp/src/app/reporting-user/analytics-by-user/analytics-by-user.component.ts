import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ReportingUserService } from '../shared/reporting-user.service';
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
  allUsers: any[];

  ngOnInit() {

    this.dtOptions = {
      lengthChange:false,
      paging:false,
      search:false
    }
    this.loadAllEmployees();
  }

  loadAllEmployees() {
    this.service.getAllUsers().subscribe((res: any) => {
      this.allUsers = res as any[];
      this.dtTrigger.next();
    });
  }

  viewUserDetails(index: string) {
    this.service.data = this.allUsers[index];
    this.router.navigate(['/ru-dash/ana-by-user/user-detail']);
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = "90%";
    // dialogConfig.disableClose = true;
    // dialogConfig.data = this.allUsers[index];
    // this.dialog.open(ViewUserDetailsComponent, dialogConfig).afterClosed().subscribe((res: any) => {
    // });
  }

}
