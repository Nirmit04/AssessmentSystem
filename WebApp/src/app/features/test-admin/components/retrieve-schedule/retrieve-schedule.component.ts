import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { TestAdminService } from '../../services/test-admin.service';
import { Schedule } from '../../models/schedule.model';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
import { concat, Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { StorageService } from '../../../../services/storage.service';
@Component({
	selector: 'app-retrieve-schedule',
	templateUrl: './retrieve-schedule.component.html',
	styleUrls: [ './retrieve-schedule.component.css' ]
})
export class RetrieveScheduleComponent implements OnInit {
	scheduleList: Schedule[];
	searchText = '';
	difficultyLevel = '';
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<Schedule> = new Subject();
	subscription: Subscription;
	col: any[];
	cols: any[];
  	i: number;

	onCreate() {
		this.router.navigate([ '/testAdminCreateScheDule' ]);
	}

	constructor(
		private service: TestAdminService,
		private toastr: ToastrService,
		private dialog: MatDialog,
		private router: Router,
		private storageService: StorageService
	) {}

	ngOnInit() {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10
		};
		this.cols = [
			{ field: 'SerialNumber', header: 'S NO' },
      		{ field: 'QuizName', header: 'Quiz Name' },
		];
		this.col=[
      		{ field: 'StartDateTime', header: 'Start Time'},
			{ field: 'EndDateTime', header: 'End Time'},
		];
		setTimeout(() => {
			this.loadSchedule();
		}, 0);
	}

	loadSchedule() {
		this.service.getSchedule(this.storageService.getStorage('uid')).subscribe((res: any) => {
			this.scheduleList = res as Schedule[];
			// this.dtTrigger.next();;
			console.log(this.scheduleList)
			for (this.i = 1; this.i <= this.scheduleList.length; this.i++) {
				this.scheduleList[this.i - 1].SerialNumber = this.i;
			}
		});
	}

	deleteSchedule(scheduleId) {
		this.service.deleteSchedule(scheduleId).subscribe((res: any) => {
			if (res === 'Dissimilar Taken Status') {
				this.toastr.error('Cannot Delete this Schedule. Users Exist!');
			} else {
				this.toastr.success('Deleted Successfully', 'Assesment System');
				this.loadSchedule();
				// this.dtTrigger.unsubscribe();
				// this.dtTrigger.next();
			}
		});
	}

	viewSchedule(scheduleid: number, arrayindex: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '70%';
		dialogConfig.disableClose = true;
		dialogConfig.data = scheduleid;
		this.service.readonlyStatus = true;
		this.service.formdata = this.scheduleList[arrayindex - 1];
		this.dialog.open(ViewScheduleComponent, dialogConfig).afterClosed().subscribe((res: any) => {});
	}

	editSchedule(scheduleid: number, arrayindex: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '70%';
		dialogConfig.disableClose = true;
		this.service.readonlyStatus = false;
		dialogConfig.data = scheduleid;
		this.service.formdata = this.scheduleList[arrayindex - 1];
		this.dialog.open(ViewScheduleComponent, dialogConfig).afterClosed().subscribe((res: any) => {
			this.loadSchedule();
			this.dtTrigger.unsubscribe();
			this.dtTrigger.next();
		});
	}

	ngOnDestroy() {
		this.dtTrigger.unsubscribe();
	}
}
