import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ReportingUserService } from '../../../services/reporting-user.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
	selector: 'app-analytics-by-user',
	templateUrl: './analytics-by-user.component.html'
})
export class AnalyticsByUserComponent implements OnInit {
	constructor(private service: ReportingUserService, private dialog: MatDialog, private router: Router) {}
	dtTrigger: Subject<any> = new Subject();
	subscription: Subscription;
	dtOptions: DataTables.Settings = {};
	public allUsers: any[];

	ngOnInit() {
		this.dtOptions = {
			lengthChange: false,
			paging: false,
			search: false
		};
		setTimeout(() => {
			this.loadAllEmployees();
		}, 0);
	}

	private loadAllEmployees() {
		const subscription = this.service.getAllUsers().subscribe((res: any) => {
			this.allUsers = res as any[];
			console.log(this.allUsers);
			this.dtTrigger.next();
		});
		subscription.unsubscribe();
	}

	private viewUserDetails(index: string) {
		this.service.data = this.allUsers[index];
		this.router.navigate([ '/ru-dash/ana-by-user/user-detail' ]);
	}
}
