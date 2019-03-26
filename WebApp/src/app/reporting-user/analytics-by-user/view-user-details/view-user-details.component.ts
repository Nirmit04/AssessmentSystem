import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReportingUserService } from '../../shared/reporting-user.service';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';


@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrls: ['./view-user-details.component.css']
})
export class ViewUserDetailsComponent implements OnInit {

  data1: any[];
  public polarAreaChartLabels: Label[];
  public polarAreaChartData: SingleDataSet;
  public polarAreaLegend = true;










  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ViewUserDetailsComponent>,
    public service: ReportingUserService) { }
  data2: any;
  ngOnInit() {
    this.fetchAnalytics(this.data.Id);
  }
  fetchAnalytics(id: string) {
    this.service.getUserAnalytics(id).subscribe((res: any) => {
      this.data2 = res;
      this.data1 = [];
      this.data1.push(this.data2.HighestScore);
      this.data1.push(this.data2.LowestScore);
      this.data1.push(this.data2.Accuracy);
      this.data1.push(this.data2.AverageScore);
      this.polarAreaChartLabels = ['Highest Score', 'Lowest Score', 'Accuracy', 'Average Score'];
      this.polarAreaChartData = this.data1;
      console.log(this.polarAreaChartData);
      console.log(this.polarAreaChartLabels);
    });

  }
}
