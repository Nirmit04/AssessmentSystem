import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from '../../../../core/http/http.service';
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
	// QuizTime: string;
	// QuizTimeSplit: any[];
	// QuizTimeHour: number;
	// QuizTimeMinutes: number;
	// QuizTimeSeconds: number;
	// timeString: string = "";
	// dateTime = null;
	cols: any[];
	col: any[];
	i: number;
	tg: string = '';
	constructor(private service: EmployeeService, private router: Router, private httpService: HttpService) { }

	ngOnInit() {
		setTimeout(() => {
			this.loadNonMockSchedules();
		}, 0);
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10
		};
		this.cols = [
			{ field: 'SerialNumber', header: 'S NO' },
			{ field: 'QuizName', header: 'Quiz' },
			{ field: 'QuizTime', header: 'Quiz Time' },
			{ field: 'Tags1', header: 'Tags' }
		];
		this.col = [{ field: 'StartDateTime', header: 'Start Time' }, { field: 'EndDateTime', header: 'End Time' }];
		// this.QuizTime = "00:00:00";
		// this.QuizTimeSeconds = parseInt((this.QuizTime.split(":"))[2]);
	}

	loadNonMockSchedules() {
		this.httpService.getNonMocks().subscribe((res: any) => {
			this.nonMockScheduleList = res as any[];
			// this.dtTrigger.next();
			for (this.i = 1; this.i <= this.nonMockScheduleList.length; this.i++) {
				this.nonMockScheduleList[this.i - 1].SerialNumber = this.i;
				this.tg = '';
				for (let tag of this.nonMockScheduleList[this.i - 1].Tags) {
					this.tg = this.tg + tag.Name + ',';
				}
				this.nonMockScheduleList[this.i - 1].Tags1 = this.tg;
				this.nonMockScheduleList[this.i - 1].Tags1 = this.nonMockScheduleList[this.i - 1].Tags1.substring(0, this.nonMockScheduleList[this.i - 1].Tags1.length - 1);
			}
		});
	}
	takeQuiz(QuizId: number, Id: number, QuizName: string, index: number) {
		this.service.QuizId = QuizId;
		this.httpService.getQuesOfQuiz(QuizId).subscribe((res: any) => {
			if (res !== 'Quiz Started') {
				this.service.statusMapping = res.GetQuestionBuffers;
				this.time = res.TimeLeft.split(':');
				this.service.seconds = parseInt(this.time[2]);
			} else {
				this.time = this.nonMockScheduleList[index - 1].QuizTime.split(':');
				this.service.seconds = 0;
				this.service.statusMapping = null;
			}
			this.service.quizName = QuizName;
			this.service.noQuesOfQuiz = this.nonMockScheduleList[index - 1].TotalQuestions;
			this.service.hours = parseInt(this.time[0]);
			this.service.minutes = parseInt(this.time[1]);
			this.service.QuizScheduleId = Id;
			this.router.navigate(['/emp-dash/quiz/take-quiz']);
		});
	}

	ngOnDestroy() {
		this.dtTrigger.unsubscribe();
	}
}
