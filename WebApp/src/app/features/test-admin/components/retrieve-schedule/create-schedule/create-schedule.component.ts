import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestAdminService } from '../../../services/test-admin.service';
import { QuizModel } from '../../../../content-creator/models/quiz.model';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { StorageService } from '../../../../../services/storage.service';
import { HttpService } from '../../../../../core/http/http.service';

@Component({
	selector: 'app-create-schedule',
	templateUrl: './create-schedule.component.html',
	styleUrls: [ './create-schedule.component.css' ]
})
export class CreateScheduleComponent implements OnInit {
	public date: string;
	public q1 = '';
	public q2 = '';
	public q3 = '';
	public stdate;
	public btndisable = true;
	public startDateValid = false;
	public endDateValid = false;
	public CCreatedBy = '';
	public QuizList: QuizModel[];

	constructor(
		private service: TestAdminService,
		private storageService: StorageService,
		public toastr: ToastrService,
		private datePipe: DatePipe,
		private httpService: HttpService
	) {}

	public ngOnInit():void {
		this.resetForm();
		this.date = this.datePipe.transform(new Date().getUTCHours(), 'yyyy-MM-ddThh:mm');
		this.CCreatedBy = this.storageService.getStorage('uid');
		this.httpService.retriveAllQuizzes().subscribe((res) => {
			this.QuizList = res as QuizModel[];
		});
	}

	private resetForm(form?: NgForm):void {
		if (form != null) {
			form.resetForm();
		}
		this.q1 = '';
		this.q2 = '';
		this.q3 = '';
	}

	public sub(form: NgForm):void {
		this.httpService.postSchedule(form.value).subscribe((res: any) => {
			this.toastr.success('Inserted successfully');
			this.resetForm(form);
		});
	}
	public checkStartDate(date1: NgForm):void {
		this.stdate = date1.value;
		this.date = this.datePipe.transform(Date.now(), 'yyyy-MM-ddThh:mm');
		if (date1.value < this.date) {
			this.startDateValid = true;
		} else {
			this.startDateValid = false;
		}
	}

	public checkEndDate(date2: NgForm):void {
		this.date = this.datePipe.transform(Date.now(), 'yyyy-MM-ddThh:mm');
		if (date2.value <= this.stdate || date2.value < this.date) {
			this.endDateValid = true;
		} else {
			this.endDateValid = false;
		}
	}
}
