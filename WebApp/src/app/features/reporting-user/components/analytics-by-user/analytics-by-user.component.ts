import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ReportingUserService } from '../../services/reporting-user.service';
import { Router } from '@angular/router';
import { HttpService } from '../../../../core/http/http.service';
@Component({
	selector: 'app-analytics-by-user',
	templateUrl: './analytics-by-user.component.html'
})
export class AnalyticsByUserComponent implements OnInit {
	constructor(private service: ReportingUserService, private router: Router, private httpService: HttpService) {}

	dtTrigger: Subject<any> = new Subject();
	subscription: Subscription;
	dtOptions: DataTables.Settings = {};
	public allUsers: any[];

	public ngOnInit(): void {
		this.dtOptions = {
			lengthChange: false,
			paging: false,
			search: false
		};
		setTimeout(() => {
			this.loadAllEmployees();
		}, 0);
	}

	private loadAllEmployees(): void {
		this.httpService.getAllUsers().subscribe((res: any) => {
			this.allUsers = res as any[];

			this.dtTrigger.next();
		});
	}

	public viewUserDetails(index: string): void {
		this.service.data = this.allUsers[index];
		this.router.navigate([ '/ru-dash/ana-by-user/user-detail' ]);
	}
}
