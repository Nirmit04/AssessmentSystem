import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { concat, Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ViewAnswerComponent } from '../view-answer/view-answer.component';
import { Router } from '@angular/router'

@Component({
  selector: 'app-detailed-report',
  templateUrl: './detailed-report.component.html',
  styleUrls: ['./detailed-report.component.css']
})

export class DetailedReportComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;
  public doughnutChartLabels1;
  public doughnutChartData1;
  public doughnutChartType1;
  quizname = '';

  public doughnutChartOptions1 = {
    legend: {
      onClick: function (e) {
        e.stopPropagation();
      }
    }
  }

  private doughnutChartColors2: any[] = [{ backgroundColor: ["#FF713A", "#00B292"] }];
  private doughnutChartColors1: any[] = [{ backgroundColor: ["#3E00B2", "#FFF53A"] }];


  public doughnutChartLabels2;
  public doughnutChartData2;
  public doughnutChartType2;

  public doughnutChartOptions2 = {
    legend: {
      onClick: function (e) {
        e.stopPropagation();
      }
    }
  }

  gaugeType = 'semi';
  gaugeValue;
  gaugeLabel = 'Performance';
  gaugeAppendText = '%';
  reports: any[];

  constructor(private service: EmployeeService,
    private dialog: MatDialog,
    private route: Router) { }

  ngOnInit() {
   // console.log(this.service.data.CorrectAnswers);
   console.log(this.service.data);
    if (this.service.data== null) {
      console.log('he');
      this.route.navigate(['/emp-dash']);
    }


    this.doughnutChartLabels1 = ['Attempted:' + ((parseInt(this.service.data.CorrectAnswers)) + (parseInt(this.service.data.WrongAnswers))).toString(), 'UnAttempted: ' + this.service.data.UnattemptedAnswers];
    this.doughnutChartData1 = [(parseInt(this.service.data.CorrectAnswers) + parseInt(this.service.data.WrongAnswers)).toString(), this.service.data.UnattemptedAnswers];
    this.doughnutChartType1 = 'doughnut';

    this.doughnutChartLabels2 = ['Correct: ' + this.service.data.CorrectAnswers, 'InCorrect: ' + this.service.data.WrongAnswers];
    this.doughnutChartData2 = [this.service.data.CorrectAnswers, this.service.data.WrongAnswers];
    this.doughnutChartType2 = 'doughnut';

    this.gaugeValue = ((this.service.data.MarksScored / this.service.data.TotalMarks) * 100).toPrecision(2).toString();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    setTimeout(() => {
      this.loadDetail();
    }, 0);
  }

  loadDetail() {
    this.service.getDetailedReport().subscribe((res: any) => {
      this.reports = res as any[];
      this.quizname = this.reports[0].QuizName;
      this.calculate();
      this.dtTrigger.next();
    })
  }

  calculate() {
    for (let i = 0; i < this.reports.length; i++) {
      if (this.reports[i].AttemptedAnswer === this.reports[i].CorrectAnswer) {
        this.reports[i].status = "Correct";
        this.reports[i].color = "background-color: green";
      } else {
        this.reports[i].status = "Incorrect";
        this.reports[i].color = "background-color: red";
      }
    }
  }

  viewques(id: number, markedanswer: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      id: id,
      markedanswer: markedanswer,
    };
    this.dialog.open(ViewAnswerComponent, dialogConfig).afterClosed().subscribe((res: any) => {
      this.dtTrigger.unsubscribe();
      this.dtTrigger.next();
    });
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

}
