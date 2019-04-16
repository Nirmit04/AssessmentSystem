import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReportingUserService } from '../../shared/reporting-user.service';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  quizData: any = null;
  quizName = '';

  public pieChartLabels: Label[] = ['Highest-Score', 'Lowest Score', 'Average-Score', 'Number of Schedules'];
  public pieChartData: any[];
  public pieChartLegend: boolean;
  public pieChartType: ChartType = 'pie';
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      onClick: function (e) {
        e.stopPropagation();
      }
    }
  };
  chartData: any[];

  constructor(
    public service: ReportingUserService,
    public router: Router) { }

  ngOnInit() {
    if (this.service.data !== null) {
      this.getDetails(this.service.data.QuizId);
      this.quizName = this.service.data.QuizName;
      this.service.data = null;
    } else {
      this.router.navigate(['/ru-dash/ana-by-quiz']);
    }
  }

  getDetails(id: string) {
    this.service.getQuizAnalysis(id).subscribe((res: any) => {
      this.quizData = res;
      this.chartData = [];
      this.chartData.push(this.quizData.HighestScore);
      this.chartData.push(this.quizData.LowestScore);
      this.chartData.push(this.quizData.AverageMarks);
      this.chartData.push(this.quizData.NoOfQuiz);
      this.pieChartData = this.chartData;
    });
  }

}
