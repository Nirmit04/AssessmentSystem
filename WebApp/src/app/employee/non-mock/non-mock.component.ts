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

  nonMockScheduleList: any[];
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;
  dtOptions: DataTables.Settings = {};
  time: any[];

  constructor(private service: EmployeeService,
    private router: Router) { }

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
    });
  }
  takeQuiz(QuizId: number, Id: number, index: number) {
    this.service.getQuesOfQuiz(QuizId).subscribe((res: any) => {
      this.service.quesOfQuiz = res as any[];
      this.time = this.nonMockScheduleList[index].QuizTime.split(":");
      this.service.hours = parseInt(this.time[0]);
      this.service.minutes = parseInt(this.time[1]);
      this.service.QuizScheduleId = Id;
      this.service.QuizId = QuizId;
      this.router.navigate(['/emp-dash/quiz/take-quiz']);
    });
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

}
