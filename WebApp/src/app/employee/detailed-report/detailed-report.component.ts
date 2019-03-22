import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { concat, Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ViewAnswerComponent } from '../view-answer/view-answer.component';


@Component({
  selector: 'app-detailed-report',
  templateUrl: './detailed-report.component.html',
  styleUrls: ['./detailed-report.component.css']
})
export class DetailedReportComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;
  public doughnutChartLabels1 = ['Attempted', 'UnAttempted'];
  public doughnutChartData1 = [this.service.data.CorrectAnswers + this.service.data.WrongAnswers, this.service.data.UnattemptedAnswers];
  public doughnutChartType1 = 'doughnut';

  quizname = '';
  public doughnutChartOptions1 = {
    legend: {
      onClick: function (e) {
        e.stopPropagation();
      }
    }
  }


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
  reports: any[];

  constructor(private service: EmployeeService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.loadDetail();
  }
  loadDetail() {
    this.service.getDetailedReport().subscribe((res: any) => {
      this.reports = res as any[];
      console.log(this.reports);
      this.quizname = this.reports[0].QuizName;
      this.calculate();
      this.dtTrigger.next();
    })
  }
  calculate() {
    for (let i = 0; i < this.reports.length; i++) {
      if (this.reports[i].AttemptedAnswer === this.reports[i].CorrectAnswer) {
        this.reports[i].status = "Sahi";
        this.reports[i].color = "background-color: green";
      } else {
        this.reports[i].status = "Galat";
        this.reports[i].color = "background-color: red";
      }
    }
  }
  viewques(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.disableClose = true;
    dialogConfig.data = id;
    this.dialog.open(ViewAnswerComponent, dialogConfig).afterClosed().subscribe((res: any) => {
      this.dtTrigger.unsubscribe();
      this.dtTrigger.next();
    });
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }


}
