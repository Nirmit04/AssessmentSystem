import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { ReportingUserService } from '../shared/reporting-user.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-analytics-by-tag',
  templateUrl: './analytics-by-tag.component.html',
  styleUrls: ['./analytics-by-tag.component.scss']
})
export class AnalyticsByTagComponent implements OnInit {

  tagAnalysisList: any[];
  panelOpenState = false;
  highdata = [];
  lowdata = [];
  label = [];
  accuracy = [];
  name = 'high';

  constructor(private service: ReportingUserService, private router: Router) { }


  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
    legend: {
      onClick: function (e) {
        e.stopPropagation();
      }
    }
  };

  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[];
  public barChartColors: any[] = [
    { 
      backgroundColor:["#FF0000", "#FFFFFF"] 
    }];
  public radarChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      onClick: function (e) {
        e.stopPropagation();
      }
    }
  };
  public radarChartLabels: Label[];
  public radarChartData: ChartDataSets[] = [
    { data: this.accuracy, label: 'Accuracy:' }
  ];
  public radarChartType: ChartType = 'radar';
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;
  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    setTimeout(() => {
      this.loadAnalyticOfTag();
		}, 0);
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
  }

  loadAnalyticOfTag() {
    this.service.getTagAnalytics().subscribe((res: any) => {
      this.tagAnalysisList = res as any[];
      console.log(this.tagAnalysisList);
      for (let i = 0; i < 7; i++) {
        this.highdata.push(
          this.tagAnalysisList[i].Properties.HighestScore
        );
        this.lowdata.push(
          this.tagAnalysisList[i].Properties.LowestScore
        );
        this.label.push(
          this.tagAnalysisList[i].SubjectName
        );
        this.accuracy.push(
          this.tagAnalysisList[i].Properties.Accuracy
        );
      }

      this.barChartLabels = this.label;
      this.radarChartLabels = this.label;
      this.barChartData = [
        { data: this.highdata, label: 'Highest Score' },
        { data: this.lowdata, label: 'Lowest Score' }
      ];
      this.dtTrigger.next();
    });
  }

}
 