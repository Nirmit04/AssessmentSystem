import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ReportingUserService } from '../../services/reporting-user.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpService } from '../../../../core/http/http.service';

@Component({
	selector: 'app-analytics-by-tag',
	templateUrl: './analytics-by-tag.component.html'
})
export class AnalyticsByTagComponent implements OnInit {
	public tagAnalysisList: any[];
	private highdata = [];
	public lowdata = [];
	public label = [];
	public accuracy = [];
	private name = 'high';

	constructor(private service: ReportingUserService, private httpService: HttpService) {}

	public barChartOptions: ChartOptions = {
		responsive: true,
		scales: { xAxes: [ {} ], yAxes: [ {} ] },
		plugins: {
			datalabels: {
				anchor: 'end',
				align: 'end'
			}
		},
		legend: {
			onClick: function(e) {
				e.stopPropagation();
			}
		}
	};

	public barChartLabels: Label[];
	public barChartType: ChartType = 'bar';
	public barChartLegend = true;
	public barChartData: ChartDataSets[];
	public barChartColors: any[] = [
		{
			backgroundColor: [ '#FF0000', '#FFFFFF' ]
		}
	];
	public radarChartOptions: ChartOptions = {
		responsive: true,
		legend: {
			onClick: function(e) {
				e.stopPropagation();
			}
		}
	};
	public radarChartLabels: Label[];
	public radarChartData: ChartDataSets[] = [ { data: this.accuracy, label: 'Accuracy:' } ];
	public radarChartType: ChartType = 'radar';
	dtTrigger: Subject<any> = new Subject();
	subscription: Subscription;
	dtOptions: DataTables.Settings = {};

	public ngOnInit(): void {
		setTimeout(() => {
			this.loadAnalyticOfTag();
		}, 0);
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10
		};
	}

	private loadAnalyticOfTag(): void {
		const subscription = this.httpService.getTagAnalytics().subscribe((res: any) => {
			this.tagAnalysisList = res as any[];
			for (let i = 0; i < 7; i++) {
				this.highdata.push(this.tagAnalysisList[i].Properties.HighestScore);
				this.lowdata.push(this.tagAnalysisList[i].Properties.LowestScore);
				this.label.push(this.tagAnalysisList[i].SubjectName);
				this.accuracy.push(this.tagAnalysisList[i].Properties.Accuracy);
			}

			this.barChartLabels = this.label;
			this.radarChartLabels = this.label;
			this.barChartData = [
				{ data: this.highdata, label: 'Highest Score' },
				{ data: this.lowdata, label: 'Lowest Score' }
			];
			this.dtTrigger.next();
		});
		subscription.unsubscribe();
	}
}
