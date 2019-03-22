import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';


@Component({
  selector: 'app-detailed-report',
  templateUrl: './detailed-report.component.html',
  styleUrls: ['./detailed-report.component.css']
})
export class DetailedReportComponent implements OnInit {

  public doughnutChartLabels1 = ['Attempted', 'UnAttempted'];
  public doughnutChartData1 = [this.service.data.CorrectAnswers + this.service.data.WrongAnswers, this.service.data.UnattemptedAnswers];
  public doughnutChartType1 = 'doughnut';

  quizname = 'Python';
  public doughnutChartLabels2 = ['Correct', 'InCorrect'];
  public doughnutChartData2 = [this.service.data.CorrectAnswers, this.service.data.WrongAnswers];
  public doughnutChartType2 = 'doughnut';

  gaugeType = 'semi';
  gaugeValue = this.service.data.MarksScored;
  gaugeLabel = 'Marks Scored';
  gaugeAppendText = '/' + this.service.data.TotalMarks;


  constructor(private service: EmployeeService) { }

  ngOnInit() { }


}
