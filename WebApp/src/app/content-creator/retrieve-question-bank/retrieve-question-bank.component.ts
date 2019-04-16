import { Component, OnInit, OnDestroy } from '@angular/core';
import { Question } from '../shared/question.model';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
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

	cols: any[];
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

		this.cols = [
			{ field: 'SerialNumber', header: 'S NO' },
			{ field: 'QuestionStatement', header: 'Question' },
			{ field: 'QuestionType', header: 'Question Type' },
			{ field: 'SubjectName', header: 'Subject' },
			{ field: 'Difficulty', header: 'Difficulty Level' }
		];
	}

	getQuesOfUser(uid: string) {
		this.service.getQuesOfUser(uid).subscribe((data: any) => {
			this.questionList = data as Question[];
			// this.dtTrigger.next();
			for (this.i = 1; this.i <= this.questionList.length; this.i++) {
				this.questionList[this.i - 1].SerialNumber = this.i;
			}
		})
	}

	deleteQues(qid) {
		if (confirm('Are you sure you want to delete this record?')) {
			this.subscription = this.service.deleteQues(qid).subscribe((res: any) => {
				this.toastr.success('Deleted Successfully', 'Assesment System');
				this.dtTrigger.unsubscribe();
				this.getQuesOfUser(localStorage.getItem('uid'));
				this.subscription.unsubscribe();
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
