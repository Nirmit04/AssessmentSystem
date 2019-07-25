import { Component, Inject, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestAdminService } from '../../../services/test-admin.service';
import { QuizModel } from '../../../../content-creator/models/quiz.model';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { StorageService } from '../../../../../services/storage.service';

@Component({
	selector: 'app-create-schedule',
	templateUrl: './create-schedule.component.html',
	styleUrls: [ './create-schedule.component.css' ]
})
export class CreateScheduleComponent implements OnInit {
	public date: string;
	public checkStart = '';
	public checkEnd = '';
	public quizId = '';
	public startDate;
	public btndisable = true;
	public startDateValid = false;
	public endDateValid = false;
	public createdBy = '';
	public QuizList: QuizModel[];

	constructor(
		private service: TestAdminService,
		private storageService: StorageService,
		public toastr: ToastrService,
		private datePipe: DatePipe
	) {}

	public ngOnInit():void {
		this.resetForm();
		this.date = this.datePipe.transform(new Date().getUTCHours(), 'yyyy-MM-ddThh:mm');
		this.createdBy = this.storageService.getStorage('uid');
		this.service.retriveAllQuizzes().subscribe((res) => {
			this.QuizList = res as QuizModel[];
		});
	}

	private resetForm(form?: NgForm):void {
		if (form != null) {
			form.resetForm();
		}
		this.checkStart = '';
		this.checkEnd = '';
		this.quizId = '';
	}

	public sub(form: NgForm):void {
		this.service.postSchedule(form.value).subscribe((res: any) => {
			this.toastr.success('Inserted successfully');
			this.resetForm(form);
		});
	}
	public checkStartDate(date1: NgForm):void {
		this.startDate = date1.value;
		this.date = this.datePipe.transform(Date.now(), 'yyyy-MM-ddThh:mm');
		if (date1.value < this.date) {
			this.startDateValid = true;
		} else {
			this.startDateValid = false;
		}
	}

	public checkEndDate(date2: NgForm):void {
		this.date = this.datePipe.transform(Date.now(), 'yyyy-MM-ddThh:mm');
		if (date2.value <= this.startDate || date2.value < this.date) {
			this.endDateValid = true;
		} else {
			this.endDateValid = false;
		}
	}
}
