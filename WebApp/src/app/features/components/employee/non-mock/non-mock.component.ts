import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { concat, Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Component({
	selector: 'app-non-mock',
	templateUrl: './non-mock.component.html',
	styleUrls: [ './non-mock.component.scss' ]
})
export class NonMockComponent implements OnInit {
	public nonMockScheduleList: any[];
	dtTrigger: Subject<any> = new Subject();
	dtOptions: DataTables.Settings = {};
	private time: any[];
	public columns: any[];
	public nonSortableColumns: any[];
	private index: number;
	private tag: string = '';
	constructor(private service: EmployeeService, private router: Router) {}

	ngOnInit() {
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
			{ field: 'DuplicateTags', header: 'Tags' }
		];
		this.nonSortableColumns = [
			{ field: 'StartDateTime', header: 'Start Time' },
			{ field: 'EndDateTime', header: 'End Time' }
		];
	}
	private loadNonMockSchedules(): void {
		const subscription = this.service.getNonMocks().subscribe((res: any) => {
			this.nonMockScheduleList = res as any[];
			for (this.index = 1; this.index <= this.nonMockScheduleList.length; this.index++) {
				this.nonMockScheduleList[this.index - 1].SerialNumber = this.index;
				this.tag = '';
				for (let tag of this.nonMockScheduleList[this.index - 1].Tags) {
					this.tag = this.tag + tag.Name + ',';
				}
				this.nonMockScheduleList[this.index - 1].DuplicateTags = this.tag;
				this.nonMockScheduleList[this.index - 1].DuplicateTags = this.nonMockScheduleList[
					this.index - 1
				].DuplicateTags.substring(0, this.nonMockScheduleList[this.index - 1].DuplicateTags.length - 1);
			}
		});
		subscription.unsubscribe();
	}
	takeQuiz(QuizId: number, Id: number, QuizName: string, index: number) {
		this.service.QuizId = QuizId;
		const subscription = this.service.getQuesOfQuiz(QuizId).subscribe((res: any) => {
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
			this.router.navigate([ '/emp-dash/quiz/take-quiz' ]);
		});
		subscription.unsubscribe();
	}

	ngOnDestroy() {
		this.dtTrigger.unsubscribe();
	}
}
