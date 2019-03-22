import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { TestAdminService } from '../shared/test-admin.service';
import { Schedule } from '../shared/schedule.model';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
import { concat, Subscription } from 'rxjs';
import { Subject } from 'rxjs';
@Component({
	selector: 'app-retrieve-schedule',
	templateUrl: './retrieve-schedule.component.html',
	styleUrls: ['./retrieve-schedule.component.css']
})
export class RetrieveScheduleComponent implements OnInit {

	onCreate() {
		this.router.navigate(['/testAdminCreateScheDule']);
	}
	scheduleList: Schedule[];
	searchText = '';
	difficultyLevel = '';
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<Schedule> = new Subject();
	subscription: Subscription;
	constructor(private service: TestAdminService,
		private toastr: ToastrService,
		private dialog: MatDialog,
		private router: Router) { }

	ngOnInit() {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10,
		};
		this.loadSchedule();
	}
	loadSchedule() {
		this.service.getSchedule(localStorage.getItem('uid')).subscribe((res: any) => {
			this.scheduleList = res as Schedule[];
			console.log(this.scheduleList);
			this.dtTrigger.next();
		});
	}
	deleteSchedule(scheduleId) {
		this.service.deleteSchedule(scheduleId).subscribe((res: any) => {
			this.toastr.success('Deleted Successfully', 'Assesment System');
			this.dtTrigger.unsubscribe();
			this.dtTrigger.next();
			this.loadSchedule();
		});
	}
	viewSchedule(scheduleid: number, arrayindex: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		dialogConfig.data = scheduleid;
		this.service.readonlyStatus = true;
		this.service.formdata = this.scheduleList[arrayindex - 1];
		this.dialog.open(ViewScheduleComponent, dialogConfig).afterClosed().subscribe((res: any) => {
		});

	}
	editSchedule(scheduleid: number, arrayindex: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		this.service.readonlyStatus = false;
		dialogConfig.data = scheduleid;
		this.service.formdata = this.scheduleList[arrayindex - 1];
		this.dialog.open(ViewScheduleComponent, dialogConfig).afterClosed().subscribe((res: any) => {
			this.loadSchedule();
			this.dtTrigger.unsubscribe();
			this.dtTrigger.next();	// localStorage.removeItem('sId');
		});

	}
	ngOnDestroy() {
		this.dtTrigger.unsubscribe();
	}

}
