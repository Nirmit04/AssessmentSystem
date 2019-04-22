import { Component, OnInit, Inject } from '@angular/core';
import { ReportingUserService } from '../../shared/reporting-user.service';
import { Label } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../employee/shared/employee.service';
import { Subscription, Subject } from 'rxjs';
@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrls: ['./view-user-details.component.css']
})
export class ViewUserDetailsComponent implements OnInit {

  data1: any[];
  scheduledReports: any[] = null;
  bool = false;

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
    public router: Router,
    public empService: EmployeeService) { }
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;

  data2: any;

  ngOnInit() {
    this.dtOptions = {
      lengthChange: false,
      paging: false,
      search: false
    };
    if (this.service.data !== null) {
      setTimeout(() => {
        this.fetchAnalytics(this.service.data.Id);
        this.fetchReports(this.service.data.Id);
      }, 0);
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

  fetchReports(id: string) {
    this.empService.getReportOfNonMockQuiz(id).subscribe((res: any) => {
      this.scheduledReports = res as any[];
      this.dtTrigger.next();
      if (this.scheduledReports.length > 0) {
        this.bool = true;
      }
    })
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }
}
