import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { TestAdminService } from '../../services/test-admin.service';
import { Schedule } from '../../models/schedule.model';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { StorageService } from '../../../../services/storage.service';
@Component({
	selector: 'app-retrieve-schedule',
	templateUrl: './retrieve-schedule.component.html',
	styleUrls: ['./retrieve-schedule.component.css']
})
export class RetrieveScheduleComponent implements OnInit,OnDestroy {
	public scheduleList: Schedule[];
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<Schedule> = new Subject();
	subscription: Subscription;
	public col: any[];
	public cols: any[];
	i: number;

	onCreate() {
		this.router.navigate(['/testAdminCreateScheDule']);
	}

	constructor(
		private service: TestAdminService,
		private toastr: ToastrService,
		private dialog: MatDialog,
		private router: Router,
		private storageService: StorageService
	) { }

	public ngOnInit():void {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10
		};
		this.cols = [
			{ field: 'SerialNumber', header: 'S NO' },
			{ field: 'QuizName', header: 'Quiz Name' },
		];
		this.col = [
			{ field: 'StartDateTime', header: 'Start Time' },
			{ field: 'EndDateTime', header: 'End Time' },
		];
		setTimeout(() => {
			this.loadSchedule();
		}, 0);
	}

	private loadSchedule():void {
		this.service.getSchedule(this.storageService.getStorage('uid')).subscribe((res: any) => {
			this.scheduleList = res as Schedule[];
			for (this.i = 1; this.i <= this.scheduleList.length; this.i++) {
				this.scheduleList[this.i - 1].SerialNumber = this.i;
			}
		});
	}

	public deleteSchedule(scheduleId):void {
		this.service.deleteSchedule(scheduleId).subscribe((res: any) => {
			if (res === 'Dissimilar Taken Status') {
				this.toastr.error('Cannot Delete this Schedule. Users Exist!');
			} else {
				this.toastr.success('Deleted Successfully', 'Assesment System');
				this.loadSchedule();
			}
		});
	}

	public viewSchedule(scheduleid: number, arrayindex: number):void {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '70%';
		dialogConfig.disableClose = true;
		dialogConfig.data = scheduleid;
		this.service.readonlyStatus = true;
		this.service.formdata = this.scheduleList[arrayindex - 1];
		this.dialog.open(ViewScheduleComponent, dialogConfig).afterClosed().subscribe((res: any) => { });
	}

	public editSchedule(scheduleid: number, arrayindex: number):void {
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

	public ngOnDestroy():void {
		this.dtTrigger.unsubscribe();
	}
}
