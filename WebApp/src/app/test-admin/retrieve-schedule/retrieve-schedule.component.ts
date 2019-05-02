import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { TestAdminService } from '../shared/test-admin.service';
import { Schedule } from '../shared/schedule.model';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
<<<<<<< HEAD
=======
import { concat, Subscription } from 'rxjs';
import { Subject } from 'rxjs';
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
@Component({
	selector: 'app-retrieve-schedule',
	templateUrl: './retrieve-schedule.component.html',
	styleUrls: ['./retrieve-schedule.component.css']
})
export class RetrieveScheduleComponent implements OnInit {
<<<<<<< HEAD
=======
	scheduleList: Schedule[];
	searchText = '';
	difficultyLevel = '';
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<Schedule> = new Subject();
	subscription: Subscription;
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165

	onCreate() {
		this.router.navigate(['/testAdminCreateScheDule']);
	}
<<<<<<< HEAD
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
=======

	constructor(private service: TestAdminService, private toastr: ToastrService, private dialog: MatDialog, private router: Router) { }

	ngOnInit() {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10,
		};
		setTimeout(() => {
			this.loadSchedule();
		}, 0);

	}

	loadSchedule() {
		this.service.getSchedule(localStorage.getItem('uid')).subscribe((res: any) => {
			this.scheduleList = res as Schedule[];
			this.dtTrigger.next();
		});
	}

	deleteSchedule(scheduleId) {
		this.service.deleteSchedule(scheduleId).subscribe((res: any) => {
			if (res === 'Dissimilar Taken Status') {
				this.toastr.error('Cannot Delete this Schedule. Users Exist!');
			}
			else {
				this.toastr.success('Deleted Successfully', 'Assesment System');
				this.loadSchedule();
				this.dtTrigger.unsubscribe();
				this.dtTrigger.next();
			}
		});

	}

	viewSchedule(scheduleid: number, arrayindex: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '70%';
		dialogConfig.disableClose = true;
		dialogConfig.data = scheduleid;
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
		this.service.readonlyStatus = true;
		this.service.formdata = this.scheduleList[arrayindex - 1];
		this.dialog.open(ViewScheduleComponent, dialogConfig).afterClosed().subscribe((res: any) => {
		});
<<<<<<< HEAD

	}
	editSchedule(scheduleid: number, arrayindex: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
=======
	}

	editSchedule(scheduleid: number, arrayindex: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '70%';
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
		dialogConfig.disableClose = true;
		this.service.readonlyStatus = false;
		dialogConfig.data = scheduleid;
		this.service.formdata = this.scheduleList[arrayindex - 1];
<<<<<<< HEAD
		// localStorage.setItem('sId', scheduleid.toString());
		this.dialog.open(ViewScheduleComponent, dialogConfig).afterClosed().subscribe((res: any) => {
			// localStorage.removeItem('sId');
		});

	}

=======
		this.dialog.open(ViewScheduleComponent, dialogConfig).afterClosed().subscribe((res: any) => {
		this.loadSchedule();
		this.dtTrigger.unsubscribe();
		this.dtTrigger.next();
	});
	}

ngOnDestroy() {
	this.dtTrigger.unsubscribe();
}

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
}
