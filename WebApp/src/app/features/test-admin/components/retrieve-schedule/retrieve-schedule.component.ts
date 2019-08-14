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
import { HttpService } from '../../../../core/http/http.service';
@Component({
	selector: 'app-retrieve-schedule',
	templateUrl: './retrieve-schedule.component.html',
	styleUrls: ['./retrieve-schedule.component.css']
})
export class RetrieveScheduleComponent implements OnInit, OnDestroy {
	public scheduleList: Schedule[];
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<Schedule> = new Subject();
	subscription: Subscription;
	public nonSortableColumn: any[];
	public columns: any[];
	index: number;

	onCreate() {
		this.router.navigate(['/testAdminCreateScheDule']);
	}

	constructor(
		private service: TestAdminService,
		private toastr: ToastrService,
		private dialog: MatDialog,
		private router: Router,
		private storageService: StorageService,
		private httpService: HttpService
	) { }

	public ngOnInit(): void {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10
		};
		this.columns = [
			{ field: 'SerialNumber', header: 'S NO' },
			{ field: 'QuizName', header: 'Quiz Name' },
		];
		this.nonSortableColumn = [
			{ field: 'StartDateTime', header: 'Start Time' },
			{ field: 'EndDateTime', header: 'End Time' },
		];
		setTimeout(() => {
			this.loadSchedule();
		}, 0);
	}

	private loadSchedule():void {
		const subscription = this.httpService.getSchedule(this.storageService.getStorage('uid')).subscribe((res: any) => {
			this.scheduleList = res as Schedule[];
			for (this.index = 1; this.index <= this.scheduleList.length; this.index++) {
				this.scheduleList[this.index - 1].SerialNumber = this.index;
			}
		});
		subscription.unsubscribe();
	}

	public deleteSchedule(scheduleId):void {
		const subscription = this.httpService.deleteSchedule(scheduleId).subscribe((res: any) => {
			if (res === 'Dissimilar Taken Status') {
				this.toastr.error('Cannot Delete this Schedule. Users Exist!');
			} else {
				this.toastr.success('Deleted Successfully', 'Assesment System');
				this.loadSchedule();
			}
		});
		subscription.unsubscribe();
	}

	public viewSchedule(scheduleid: number, arrayindex: number): void {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '70%';
		dialogConfig.disableClose = true;
		dialogConfig.data = scheduleid;
		this.service.readonlyStatus = true;
		this.service.formdata = this.scheduleList[arrayindex - 1];
		const subscription = this.dialog.open(ViewScheduleComponent, dialogConfig).afterClosed().subscribe((res: any) => { });
		subscription.unsubscribe();
	}

	public editSchedule(scheduleid: number, arrayindex: number): void {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '70%';
		dialogConfig.disableClose = true;
		this.service.readonlyStatus = false;
		dialogConfig.data = scheduleid;
		this.service.formdata = this.scheduleList[arrayindex - 1];
		const subscription = this.dialog.open(ViewScheduleComponent, dialogConfig).afterClosed().subscribe((res: any) => {
			this.loadSchedule();
			this.dtTrigger.unsubscribe();
			this.dtTrigger.next();
		});
		subscription.unsubscribe();
	}

	public ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
	}
}
