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
  public doughnutChartOptions1 = {
    legend: {
      onClick: function (e) {
          e.stopPropagation();
      }
  }
  }

  quizname = this.service.data.QuizName;
  public doughnutChartLabels2 = ['Correct', 'InCorrect'];
  public doughnutChartData2 = [this.service.data.CorrectAnswers, this.service.data.WrongAnswers];
  public doughnutChartType2 = 'doughnut';
  public doughnutChartOptions2 = {
    legend: {
      onClick: function (e) {
          e.stopPropagation();
      }
  }
  }

  gaugeType = 'semi';
  gaugeValue = ((this.service.data.MarksScored / this.service.data.TotalMarks) * 100).toPrecision(2).toString();
  gaugeLabel = 'Performance';
  gaugeAppendText = '%';


  constructor(private service: EmployeeService) { }

  ngOnInit() { }


}
