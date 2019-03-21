import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-detailed-report',
  templateUrl: './detailed-report.component.html',
  styleUrls: ['./detailed-report.component.css']
})
export class DetailedReportComponent implements OnInit {

  public doughnutChartLabels1=['Attempted', 'UnAttempted'];
  public doughnutChartData1=[60,40];
  public doughnutChartType1='doughnut';
  
  quizname = 'Python';
  public doughnutChartLabels2=['Correct', 'InCorrect'];
  public doughnutChartData2=[40,30];
  public doughnutChartType2='doughnut';


  constructor() { }

  ngOnInit() {}


  gaugeType = "semi";
  gaugeValue = 60;
  gaugeLabel = "Marks Scored";
  gaugeAppendText = "/100";

}
