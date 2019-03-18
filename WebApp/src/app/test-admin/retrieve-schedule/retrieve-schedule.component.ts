import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { TestAdminService } from '../shared/test-admin.service';
import { Schedule } from '../shared/schedule.model';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
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

	constructor(private service: TestAdminService,
		private toastr: ToastrService,
		private dialog: MatDialog,
		private router: Router) { }

	ngOnInit() {
		this.service.getSchedule(localStorage.getItem('uid')).subscribe((res: any) => {
			this.scheduleList = res as Schedule[];
			console.log(this.scheduleList);
		});
	}
	deleteSchedule(scheduleId) {
		this.service.deleteSchedule(scheduleId).subscribe((res: any) => {
			this.toastr.success('Deleted Successfully', 'Assesment System');
		});
	}
	viewSchedule(scheduleid: number, arrayindex: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
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
		// localStorage.setItem('sId', scheduleid.toString());
		this.dialog.open(ViewScheduleComponent, dialogConfig).afterClosed().subscribe((res: any) => {
			// localStorage.removeItem('sId');
		});

	}

}
