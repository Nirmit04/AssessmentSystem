import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { EmployeeService } from '../../../services/employee.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-mock-report',
	templateUrl: './mock-report.component.html',
	styleUrls: [ './mock-report.component.scss' ]
})
export class MockReportComponent implements OnInit {
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject();
	public mockReportList: any[];
	public columns: any[];
	public index: number;

	constructor(private service: EmployeeService, private router: Router) {}

	ngOnInit() {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10
		};
		this.columns = [
			{ field: 'SerialNumber', header: 'S NO' },
			{ field: 'QuizName', header: 'Quiz Name' },
			{ field: 'CorrectAnswers', header: 'Correct Answers' },
			{ field: 'WrongAnswers', header: 'Wrong Answers' },
			{ field: 'UnattemptedAnswers', header: 'Not Attempted' },
			{ field: 'MarksScored', header: 'Marks Scored' },
			{ field: 'TotalMarks', header: 'Total Marks' },
			{ field: 'Accuracy', header: 'Accuracy' },
			{ field: 'TimeTaken', header: 'Time Taken (hh:mm:ss)' }
		];
		setTimeout(() => {
			this.getMockReport();
		}, 0);
	}

	getMockReport() {
		const subscription = this.service.getReportOfMockQuiz(localStorage.getItem('uid')).subscribe((res: any) => {
			this.mockReportList = res as any[];
			for (this.index = 1; this.index <= this.mockReportList.length; this.index++) {
				this.mockReportList[this.index - 1].SerialNumber = this.index;
			}
		});
		subscription.unsubscribe();
	}

	viewDetailedReport(quizid: number, index: number) {
		this.service.data = this.mockReportList[index - 1];
		this.service.QuizId = quizid;
		this.router.navigate([ '/emp-dash/quiz/detailed-report' ]);
	}
}
