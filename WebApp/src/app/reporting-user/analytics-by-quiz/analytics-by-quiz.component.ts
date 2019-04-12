import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ReportingUserService } from '../shared/reporting-user.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DetailsComponent } from './details/details.component';
import { Router } from '@angular/router'
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
    private router: Router, ) { }

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
      console.log(this.quizDetails);
      this.dtTrigger.next();
    });
  }

  onClick(index: any) {
    this.service.data = this.quizDetails[index];
    this.router.navigate(['/ru-dash/ana-by-user/quiz-detail']);
  }

}