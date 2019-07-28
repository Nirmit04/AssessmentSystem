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
	public nonMockScheduleList: any[];
	dtTrigger: Subject<any> = new Subject();
	subscription: Subscription;
	dtOptions: DataTables.Settings = {};
	private time: any[];
	public columns: any[];
	public nonSortableColumns: any[];
	private index: number;
	private tag: string = '';

	constructor(private service: EmployeeService,
		private router: Router,
		private httpService: HttpService) { }

	public ngOnInit(): void {
		setTimeout(() => {
			this.loadNonMockSchedules();
		}, 0);
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10
		};
		this.columns = [
			{ field: 'SerialNumber', header: 'S NO' },
			{ field: 'QuizName', header: 'Quiz' },
			{ field: 'QuizTime', header: 'Quiz Time' },
			{ field: 'Tags1', header: 'Tags' }
		];
		this.nonSortableColumns = [{ field: 'StartDateTime', header: 'Start Time' }, { field: 'EndDateTime', header: 'End Time' }];
	}

	private loadNonMockSchedules():void {
		const subscription = this.httpService.getNonMocks().subscribe((res: any) => {
			this.nonMockScheduleList = res as any[];
			for (this.index = 1; this.index <= this.nonMockScheduleList.length; this.index++) {
				this.nonMockScheduleList[this.index - 1].SerialNumber = this.index;
				this.tag = '';
				for (let listTag of this.nonMockScheduleList[this.index - 1].Tags) {
					this.tag = this.tag + listTag.Name + ',';
				}
				this.nonMockScheduleList[this.index - 1].Tags1 = this.tag;
				this.nonMockScheduleList[this.index - 1].Tags1 = this.nonMockScheduleList[this.index - 1].Tags1.substring(0, this.nonMockScheduleList[this.index - 1].Tags1.length - 1);
			}
		});
		subscription.unsubscribe();
	}

	public takeQuiz(quizId: number, quizScheduleId: number, quizName: string, index: number):void {
		this.service.quizId = quizId;
		const subscription = this.httpService.getQuesOfQuiz(quizId).subscribe((res: any) => {
			if (res !== 'Quiz Started') {
				this.service.statusMapping = res.GetQuestionBuffers;
				this.time = res.TimeLeft.split(':');
				this.service.seconds = parseInt(this.time[2]);
			} else {
				this.time = this.nonMockScheduleList[index - 1].QuizTime.split(':');
				this.service.seconds = 0;
				this.service.statusMapping = null;
			}
			this.service.quizName = quizName;
			this.service.noOfQuestionsInQuiz = this.nonMockScheduleList[index - 1].TotalQuestions;
			this.service.hours = parseInt(this.time[0]);
			this.service.minutes = parseInt(this.time[1]);
			this.service.quizScheduleId = quizScheduleId;
			this.router.navigate(['/emp-dash/quiz/take-quiz']);
		});
		subscription.unsubscribe();
	}

	public ngOnDestroy():void {
		this.dtTrigger.unsubscribe();
	}
}
