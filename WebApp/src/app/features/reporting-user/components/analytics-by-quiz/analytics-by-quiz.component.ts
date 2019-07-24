import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ReportingUserService } from '../../services/reporting-user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-analytics-by-quiz',
  templateUrl: './analytics-by-quiz.component.html',
  styleUrls: ['./analytics-by-quiz.component.css']
})
export class AnalyticsByQuizComponent implements OnInit {
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;
  dtOptions: DataTables.Settings = {};
  public quizDetails: any[];

  constructor(private service: ReportingUserService, private router: Router, ) { }

  public ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    setTimeout(() => {
      this.loadQuizDetails();
    }, 0);
  }

  private loadQuizDetails(): void {
    this.service.getAllQuizzes().subscribe((res: any) => {
      this.quizDetails = res as any[];
      this.dtTrigger.next();
    });
  }

  public onClick(index: any): void {
    this.service.data = this.quizDetails[index];
    this.router.navigate(['/ru-dash/ana-by-user/quiz-detail']);
  }

}
