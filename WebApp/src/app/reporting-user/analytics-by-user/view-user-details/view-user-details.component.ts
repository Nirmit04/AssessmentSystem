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
      const data1 = [];
      var polarAreaChartLabels: Label[] = ['Highest-Score', 'Lowest Score', 'Accuracy', 'Average-Score'];
      var polarAreaLegend = true;
      var polarAreaChartType: ChartType = 'polarArea';
      data1.push(this.data2.HighestScore);
      data1.push(this.data2.LowestScore);
      data1.push(this.data2.Accuracy);
      data1.push(this.data2.AverageScore);
      var polarAreaChartData = data1;
      console.log(data1);
      console.log(this.data2);
    })
  }
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
