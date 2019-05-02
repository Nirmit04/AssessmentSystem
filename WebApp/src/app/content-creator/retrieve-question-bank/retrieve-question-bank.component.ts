import { Component, OnInit, OnDestroy } from '@angular/core';
import { Question } from '../shared/question.model';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
<<<<<<< HEAD
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { UpdateQuestionComponent } from '../update-question/update-question.component';
import { concat } from 'rxjs';
=======
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { UpdateQuestionComponent } from '../update-question/update-question.component';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { ViewEncapsulation } from "@angular/core";

declare var $: any;
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165

@Component({
	selector: 'app-retrieve-question-bank',
	styles: [`
		.sample {
			background-color: #000000 !important;
			color: #ffffff !important;
		}
	`],
	templateUrl: './retrieve-question-bank.component.html',
<<<<<<< HEAD
	styleUrls: ['./retrieve-question-bank.component.css']
})
export class RetrieveQuestionBankComponent implements OnInit {
	questionList: Question[];
	searchText = '';
	difficultyLevel = '';

	constructor(private service: ContentCreatorServiceService,
		private toastr: ToastrService,
		private dialog: MatDialog) { }

	ngOnInit() {
		this.getQuesOfUser(localStorage.getItem('uid'));
	}
	filter(ques: Question) {
		console.log(this.difficultyLevel);
		console.log(ques.Difficulty);
		return (
			(ques.QuestionStatement.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
			|| ques.SubjectName.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1)
			&& ques.Difficulty.toLowerCase().indexOf(this.difficultyLevel.toLowerCase()) > -1
		);
	}
	filterSubject(event: any) {
		this.difficultyLevel = event.target.value;
		console.log(this.difficultyLevel);
=======
	styleUrls: ['./retrieve-question-bank.component.css'],
	encapsulation : ViewEncapsulation.None
})
export class RetrieveQuestionBankComponent implements OnDestroy, OnInit {

	dtOptions: DataTables.Settings = {};
	questionList: Question[];
	dtTrigger: Subject<Question> = new Subject();
	subscription: Subscription;

	cols: any[];
	colss: any[];
	i: number;

	constructor(private service: ContentCreatorServiceService,
		private toastr: ToastrService,
		private dialog: MatDialog) { }

	ngOnInit(): void {
		this.dtOptions = {
			lengthChange: false,
			paging: false,
			search: false
		};
		setTimeout(() => {
			this.getQuesOfUser(localStorage.getItem('uid'));
		}, 0);

		this.colss = [
			{ field: 'QuestionStatement', header: 'Question' }
		]
		this.cols = [
			{ field: 'QuestionType', header: 'Question Type' },
			{ field: 'SubjectName', header: 'Subject' },
			{ field: 'Difficulty', header: 'Difficulty Level' }
		];
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
	}

	getQuesOfUser(uid: string) {
		this.service.getQuesOfUser(uid).subscribe((data: any) => {
			this.questionList = data as Question[];
<<<<<<< HEAD
			console.log(this.questionList);
=======
			// this.dtTrigger.next();
			for (this.i = 1; this.i <= this.questionList.length; this.i++) {
				this.questionList[this.i - 1].SerialNumber = this.i;
			}
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
		})
	}
	deleteQues(qid) {
		this.service.deleteQues(qid).subscribe((res: any) => {
			this.toastr.success('Deleted Successfully', 'Assesment System');
			this.getQuesOfUser(localStorage.getItem('uid'));
		});
	}
	editUserQues(quesid: number, arrayindex: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		this.service.readonlyStatus = false;
		this.service.formData = this.questionList[arrayindex - 1];
		this.dialog.open(UpdateQuestionComponent, dialogConfig).afterClosed().subscribe((res: any) => {
			console.log(res);
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
		this.dialog.open(UpdateQuestionComponent, dialogConfig).afterClosed().subscribe((res: any) => {
		});

<<<<<<< HEAD
=======
	deleteQues(qid) {
		if (confirm('Are you sure you want to delete this record?')) {
			this.subscription = this.service.deleteQues(qid).subscribe((res: any) => {
				this.toastr.success('Deleted Successfully', 'Assesment System');
				this.dtTrigger.unsubscribe();
				this.getQuesOfUser(localStorage.getItem('uid'));
				this.subscription.unsubscribe();
			});
		}
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
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
		this.dialog.open(UpdateQuestionComponent, dialogConfig).afterClosed().subscribe((res: any) => {
		});
	}

	ngOnDestroy() {
		this.dtTrigger.unsubscribe();
	}

}
