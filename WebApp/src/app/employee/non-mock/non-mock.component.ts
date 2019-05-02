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

  cols: any[];
	i: number;

  constructor(private service: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.loadNonMockSchedules();
		}, 0);
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10, 
    };
    this.cols = [
			{ field: 'SerialNumber', header: 'S NO' },
			{ field: 'QuizName', header: 'Quiz' },
			{ field: 'StartDateTime', header: 'Start' },
			{ field: 'EndDateTime', header: 'End' },
			{ field: 'QuizTime', header: 'Duration(hh:mm)' }
		];
  }

  loadNonMockSchedules() {
    this.service.getNonMocks().subscribe((res: any) => {
      console.log(res);
          this.nonMockScheduleList = res as any[];
      // this.dtTrigger.next();
      for (this.i = 1; this.i <= this.nonMockScheduleList.length; this.i++) {
				this.nonMockScheduleList[this.i - 1].SerialNumber = this.i;
			}
    });
  }
  takeQuiz(QuizId: number, Id: number, QuizName:string, index: number) {
    this.service.getQuesOfQuiz(QuizId).subscribe((res: any) => {
      this.service.quizName = QuizName;
      this.service.quesOfQuiz = res as any[];
      console.log(index);
      console.log(this.nonMockScheduleList[index-1].QuizTime);
      this.time = this.nonMockScheduleList[index-1].QuizTime.split(":");
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
