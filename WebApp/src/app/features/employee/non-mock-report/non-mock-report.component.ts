import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-non-mock-report',
	templateUrl: './non-mock-report.component.html',
	styleUrls: [ './non-mock-report.component.scss' ]
})
export class NonMockReportComponent implements OnInit {
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject();
	public nonMockReportList: any[];
	public columns: any[];
	private index: number;

	constructor(private service: EmployeeService, private toastr: ToastrService, private router: Router) {}

	ngOnInit() {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10
			//   responsive: true,
			// scrollX: true
		};
		this.columns = [
			{ field: 'SerialNumber', header: 'S NO' },
			{ field: 'QuizName', header: 'Quiz Name' },
			{ field: 'CorrectAnswers', header: 'Correct Answers' },
			{ field: 'WrongAnswers', header: 'Wrong Answers' },
			{ field: 'UnattemptedAnswers', header: 'Not Attempted' },
			{ field: 'MarksScored', header: 'Marks Scored' },
			{ field: 'TotalMarks', header: 'Maximum Marks' },
			{ field: 'Accuracy', header: 'Accuracy' },
			{ field: 'TimeTaken', header: 'Time Taken (hh:mm:ss)' }
		];
		setTimeout(() => {
			this.getNonMockReport();
		}, 0);
	}

	getNonMockReport() {
		this.service.getReportOfNonMockQuiz(localStorage.getItem('uid')).subscribe((res: any) => {
			this.nonMockReportList = res as any[];
			for (this.index = 1; this.index <= this.nonMockReportList.length; this.index++) {
				this.nonMockReportList[this.index - 1].SerialNumber = this.index;
			}
		});
	}

	viewDetailedReport(quizid: number, index: number) {
		this.service.data = this.nonMockReportList[index - 1];
		this.service.QuizId = quizid;
		this.router.navigate([ '/emp-dash/quiz/detailed-report' ]);
		this.dtTrigger.next();
	}
}
