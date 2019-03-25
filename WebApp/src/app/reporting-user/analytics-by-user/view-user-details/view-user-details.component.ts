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
  public polarAreaChartLabels: Label[] = ['Highest-Score', 'Lowest Score', 'Accuracy', 'Average-Score'];
  public polarAreaChartData = this.data1;
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

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
      console.log(this.data1);
      console.log(this.data2);
    })
  }
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
