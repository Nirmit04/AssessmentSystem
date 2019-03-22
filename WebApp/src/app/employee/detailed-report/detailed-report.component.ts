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

  quizname = '';
  public doughnutChartLabels2 = ['Correct', 'InCorrect'];
  public doughnutChartData2 = [this.service.data.CorrectAnswers, this.service.data.WrongAnswers];
  public doughnutChartType2 = 'doughnut';

  gaugeType = 'semi';
  gaugeValue = this.service.data.MarksScored;
  gaugeLabel = 'Marks Scored';
  gaugeAppendText = '/' + this.service.data.TotalMarks;
  reports: any[];

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.loadDetail();
  }
  loadDetail() {
    this.service.getDetailedReport().subscribe((res: any) => {
      this.reports = res as any[];
      console.log(this.reports);
      this.quizname = this.reports[0].QuizName;
    })
  }


}
