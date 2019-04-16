import { Component, OnInit, Inject } from '@angular/core';
import { ReportingUserService } from '../../shared/reporting-user.service';
import { Label } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrls: ['./view-user-details.component.css']
})
export class ViewUserDetailsComponent implements OnInit {

  data1: any[];

  public polarAreaChartLabels: Label[] = ['Highest-Score', 'Lowest Score', 'Accuracy', 'Average-Score'];
  public polarAreaChartData: any[];
  public polarAreaLegend: boolean;
  public polarAreaChartType: ChartType = 'polarArea';
  public polarAreaChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      onClick: function (e) {
        e.stopPropagation();
      }
    }
  };

  constructor(
    public service: ReportingUserService,
    public router: Router) { }

  data2: any;

  ngOnInit() {
    if (this.service.data !== null) {
      this.fetchAnalytics(this.service.data.Id);
    } else {
      this.router.navigate(['/ru-dash/ana-by-user']);
    }
  }

  fetchAnalytics(id: string) {
    this.service.getUserAnalytics(id).subscribe((res: any) => {
      this.data2 = res;
      this.data1 = [];
      this.data1.push(this.data2.HighestScore);
      this.data1.push(this.data2.LowestScore);
      this.data1.push(this.data2.Accuracy);
      this.data1.push(this.data2.AverageScore);
      this.polarAreaChartData = this.data1;
    });
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }
}
