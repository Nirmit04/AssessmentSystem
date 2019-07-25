import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from '../../../../core/http/http.service';
import { ReportingUserService } from '../../services/reporting-user.service';
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

  constructor(private router: Router,
    private service: ReportingUserService,
    private httpService: HttpService) { }

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
    this.httpService.getAllQuizzes().subscribe((res: any) => {
      this.quizDetails = res as any[];
      this.dtTrigger.next();
    });
  }

  public onClick(index: any): void {
    this.service.data = this.quizDetails[index];
    this.router.navigate(['/ru-dash/ana-by-user/quiz-detail']);
  }

}
