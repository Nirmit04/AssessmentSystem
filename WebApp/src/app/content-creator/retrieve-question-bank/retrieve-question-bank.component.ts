import { Component, OnInit, OnDestroy } from '@angular/core';
import { Question } from '../shared/question.model';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { UpdateQuestionComponent } from '../update-question/update-question.component';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';

declare var $: any;

@Component({
	selector: 'app-retrieve-question-bank',
	templateUrl: './retrieve-question-bank.component.html',
	styleUrls: ['./retrieve-question-bank.component.css']
})
export class RetrieveQuestionBankComponent implements OnDestroy, OnInit {

	dtOptions: DataTables.Settings = {};
	questionList: Question[];
	dtTrigger: Subject<Question> = new Subject();
	subscription: Subscription;

	constructor(private service: ContentCreatorServiceService,
		private toastr: ToastrService,
		private dialog: MatDialog) { }

	ngOnInit(): void {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10,
		};
		setTimeout(() => {
			this.getQuesOfUser(localStorage.getItem('uid'));
		}, 0);
	}

	getQuesOfUser(uid: string) {
		this.service.getQuesOfUser(uid).subscribe((data: any) => {
			this.questionList = data as Question[];
			this.dtTrigger.next();
		})
	}

	deleteQues(qid) {
		if (confirm('Are you sure you want to delete this record?')) {
			this.service.deleteQues(qid).subscribe((res: any) => {
				this.toastr.success('Deleted Successfully', 'Assesment System');
				this.dtTrigger.unsubscribe();
				this.dtTrigger.next();
				this.getQuesOfUser(localStorage.getItem('uid'));
			});
		}
	}

	editUserQues(quesid: number, arrayindex: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		this.service.readonlyStatus = false;
		this.service.formData = this.questionList[arrayindex - 1];
		this.dialog.open(UpdateQuestionComponent, dialogConfig).afterClosed().subscribe((res: any) => {
			this.dtTrigger.unsubscribe();
			this.dtTrigger.next();
			this.getQuesOfUser(localStorage.getItem('uid'));
		});
	}
	viewUserQues(quesid: number, arrayindex: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		this.service.readonlyStatus = true;
		this.service.formData = this.questionList[arrayindex - 1];
		this.subscription = this.dialog.open(UpdateQuestionComponent, dialogConfig).afterClosed().subscribe((res: any) => {
		});
	}

	ngOnDestroy() {
		this.dtTrigger.unsubscribe();
	}

}
