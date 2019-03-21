import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { concat, Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-non-mock',
  templateUrl: './non-mock.component.html',
  styleUrls: ['./non-mock.component.css']
})
export class NonMockComponent implements OnInit {

  constructor(private service: EmployeeService,
    private router: Router) { }
  nonMockScheduleList: any[];
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.loadNonMockSchedules();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
  }
  loadNonMockSchedules() {
    this.service.getNonMocks().subscribe((res: any) => {
      this.nonMockScheduleList = res as any[];
      this.dtTrigger.next();
      console.log(this.nonMockScheduleList);
    });
  }
  takeQuiz(QuizId: number, Id: number) {
    this.service.getQuesOfQuiz(QuizId).subscribe((res: any) => {
      //console.log(res);
      this.service.quesOfQuiz = res as any[];
      this.service.QuizScheduleId = Id;
      this.service.QuizId = QuizId;
      this.router.navigate(['/take-quiz']);
    });

  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
}
