import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { concat, Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
	selector: 'app-detailed-report',
	templateUrl: './detailed-report.component.html',
	styleUrls: [ './detailed-report.component.scss' ]
})
export class DetailedReportComponent implements OnInit {
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject();
	subscription: Subscription;
	public doughnutChartLabels1: any[];
	public doughnutChartData1: any[];
	public doughnutChartType1: string;
	public quizName: string = '';
	public doughnutChartColors2: any[] = [ { backgroundColor: [ '#FF713A', '#00B292' ] } ];
	public doughnutChartColors1: any[] = [ { backgroundColor: [ '#3E00B2', '#FFF53A' ] } ];
	public doughnutChartLabels2: any[];
	public doughnutChartData2: any[];
	public doughnutChartType2: string;
	public gaugeType: string = 'semi';
	public gaugeValue: string;
	public gaugeLabel: string = 'Performance';
	public gaugeAppendText = '%';
	public reports: any[];
	public doughnutChartOptions1 = {
		legend: {
			onClick: function(e) {
				e.stopPropagation();
			}
		}
	};

	public doughnutChartOptions2 = {
		legend: {
			onClick: function(e) {
				e.stopPropagation();
			}
		}
	};

	constructor(private service: EmployeeService, private dialog: MatDialog, private route: Router) {}

	ngOnInit() {
		if (this.service.data == null) {
			console.log('he');
			this.route.navigate([ '/emp-dash' ]);
		}

		this.doughnutChartLabels1 = [
			'Attempted:' +
				(parseInt(this.service.data.CorrectAnswers) + parseInt(this.service.data.WrongAnswers)).toString(),
			'UnAttempted: ' + this.service.data.UnattemptedAnswers
		];
		this.doughnutChartData1 = [
			(parseInt(this.service.data.CorrectAnswers) + parseInt(this.service.data.WrongAnswers)).toString(),
			this.service.data.UnattemptedAnswers
		];
		this.doughnutChartType1 = 'doughnut';

		this.doughnutChartLabels2 = [
			'Correct: ' + this.service.data.CorrectAnswers,
			'InCorrect: ' + this.service.data.WrongAnswers
		];
		this.doughnutChartData2 = [ this.service.data.CorrectAnswers, this.service.data.WrongAnswers ];
		this.doughnutChartType2 = 'doughnut';

		this.gaugeValue = (this.service.data.MarksScored / this.service.data.TotalMarks * 100)
			.toPrecision(2)
			.toString();

		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10
		};
		setTimeout(() => {
			this.loadDetail();
		}, 0);
	}

	private loadDetail() {
		const subscription = this.service.getDetailedReport().subscribe((res: any) => {
			this.reports = res as any[];
			this.quizName = this.reports[0].QuizName;
			this.calculate();
			this.dtTrigger.next();
		});
		subscription.unsubscribe();
	}

	private calculate() {
		for (let i = 0; i < this.reports.length; i++) {
			if (this.reports[i].AttemptedAnswer === this.reports[i].CorrectAnswer) {
				this.reports[i].status = 'Correct';
				this.reports[i].color = 'background-color: green';
			} else {
				this.reports[i].status = 'Incorrect';
				this.reports[i].color = 'background-color: red';
			}
		}
	}

	ngOnDestroy() {
		this.dtTrigger.unsubscribe();
	}
}
