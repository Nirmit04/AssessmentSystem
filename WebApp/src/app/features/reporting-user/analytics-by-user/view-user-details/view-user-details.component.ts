import { Component, OnInit, Inject } from '@angular/core';
import { ReportingUserService } from '../../shared/reporting-user.service';
import { Label } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../employee/shared/employee.service';
import { Subscription, Subject } from 'rxjs';
@Component({
	selector: 'app-view-user-details',
	templateUrl: './view-user-details.component.html',
	styleUrls: [ './view-user-details.component.scss' ]
})
export class ViewUserDetailsComponent implements OnInit {
	private userData: any[];
	public scheduledReports: any[] = null;
	public flag = false;
	public polarAreaChartLabels: Label[] = [ 'Highest-Score', 'Lowest Score', 'Accuracy', 'Average-Score' ];
	public polarAreaChartData: any[];
	public polarAreaLegend: boolean;
	public polarAreaChartType: ChartType = 'polarArea';
	public polarAreaChartOptions: ChartOptions = {
		responsive: true,
		legend: {
			onClick: function(e) {
				e.stopPropagation();
			}
		}
	};

	constructor(public service: ReportingUserService, public router: Router, public empService: EmployeeService) {}
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject();
	public apiResponse: any;

	ngOnInit() {
		this.dtOptions = {
			lengthChange: false,
			paging: false,
			search: false
		};
		if (this.service.data !== null) {
			setTimeout(() => {
				this.fetchAnalytics(this.service.data.Id);
				this.fetchReports(this.service.data.Id);
			}, 0);
		} else {
			this.router.navigate([ '/ru-dash/ana-by-user' ]);
		}
	}

	fetchAnalytics(id: string) {
		const subscription = this.service.getUserAnalytics(id).subscribe((res: any) => {
			this.apiResponse = res;
			this.userData = [];
			this.userData.push(this.apiResponse.HighestScore);
			this.userData.push(this.apiResponse.LowestScore);
			this.userData.push(this.apiResponse.Accuracy);
			this.userData.push(this.apiResponse.AverageScore);
			this.polarAreaChartData = this.userData;
		});
		subscription.unsubscribe();
	}

	fetchReports(id: string) {
		const subscription = this.empService.getReportOfNonMockQuiz(id).subscribe((res: any) => {
			this.scheduledReports = res as any[];
			this.dtTrigger.next();
			if (this.scheduledReports.length > 0) {
				this.flag = true;
			}
		});
		subscription.unsubscribe();
	}

	public chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {}
}
