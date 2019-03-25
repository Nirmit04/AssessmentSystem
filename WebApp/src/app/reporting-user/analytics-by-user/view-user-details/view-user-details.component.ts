import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReportingUserService } from '../../shared/reporting-user.service';
@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrls: ['./view-user-details.component.css']
})
export class ViewUserDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ViewUserDetailsComponent>,
    public service: ReportingUserService) { }
  data1: any;
  ngOnInit() {
    this.fetchAnalytics(this.data.Id);
  }
  fetchAnalytics(id: string) {
    this.service.getUserAnalytics(id).subscribe((res: any) => {
      this.data1 = res;
      console.log(this.data1);
    })
  }
}
