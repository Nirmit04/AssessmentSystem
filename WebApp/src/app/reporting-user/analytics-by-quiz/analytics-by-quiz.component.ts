import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ReportingUserService } from '../shared/reporting-user.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-analytics-by-quiz',
  templateUrl: './analytics-by-quiz.component.html',
  styleUrls: ['./analytics-by-quiz.component.css']
})
export class AnalyticsByQuizComponent implements OnInit {
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;
  dtOptions: DataTables.Settings = {};
  quizDetails: any[];

  constructor(private service: ReportingUserService,
    private dialog: MatDialog, ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };

    this.loadQuizDetails();
  }

  loadQuizDetails() {
    this.service.getAllQuizzes().subscribe((res: any) => {

      this.quizDetails = res as any[];
      this.dtTrigger.next();
      console.log(this.quizDetails);
    })
  }

  onClick(index: any) {
    console.log(index);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "90%";
    dialogConfig.disableClose = true;
    dialogConfig.data = this.quizDetails[index];
    console.log(dialogConfig.data);
    this.dialog.open(DetailsComponent, dialogConfig).afterClosed().subscribe((res: any) => {
    });
  }

}