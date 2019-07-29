import { Component, OnInit, OnDestroy } from '@angular/core';
import { Question } from '../shared/question.model';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateQuestionComponent } from '../update-question/update-question.component';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { ViewEncapsulation } from '@angular/core';

declare var $: any;

@Component({
	selector: 'app-retrieve-question-bank',
	styles: [
		`
		.sample {
			background-color: #000000 !important;
			color: #ffffff !important;
		}
	`
	],
	templateUrl: './retrieve-question-bank.component.html',
	styleUrls: [ './retrieve-question-bank.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class RetrieveQuestionBankComponent implements OnDestroy, OnInit {
	private tag: string = '';
	public dtOptions: DataTables.Settings = {};
	public questionList: Question[];
	public dtTrigger: Subject<Question> = new Subject();
	public subscription: Subscription;

	public columns: any[];
	public nonSortableColumns: any[];
	public index: number;

	constructor(
		private service: ContentCreatorServiceService,
		private toastr: ToastrService,
		private dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.dtOptions = {
			lengthChange: false,
			paging: false,
			search: false
		};
		setTimeout(() => {
			this.getQuesOfUser(localStorage.getItem('uid'));
		}, 0);

		this.nonSortableColumns = [ { field: 'QuestionStatement', header: 'Question' } ];
		this.columns = [
			{ field: 'QuestionType', header: 'Question Type' },
			{ field: 'Difficulty', header: 'Difficulty Level' },
			{ field: 'DuplicateTags', header: 'Tags' }
		];
	}

	private getQuesOfUser(userid: string): void {
		const subscription = this.service.getQuesOfUser(userid).subscribe((data: any) => {
			this.questionList = data as Question[];
			for (this.index = 1; this.index <= this.questionList.length; this.index++) {
				this.tag = '';
				this.questionList[this.index - 1].SerialNumber = this.index;
				for (let tag of this.questionList[this.index - 1].Tags) {
					this.tag = this.tag + tag.Name + ',';
					this.questionList[this.index - 1].DuplicateTags = this.tag;
				}
				this.questionList[this.index - 1].DuplicateTags = this.questionList[
					this.index - 1
				].DuplicateTags.substring(0, this.questionList[this.index - 1].DuplicateTags.length - 1);
			}
		});
		subscription.unsubscribe();
	}

	public deleteQues(questionid) {
		if (confirm('Are you sure you want to delete this record?')) {
			this.subscription = this.service.deleteQues(questionid).subscribe((res: any) => {
				this.toastr.success('Deleted Successfully', 'Assesment System');
				this.dtTrigger.unsubscribe();
				this.getQuesOfUser(localStorage.getItem('uid'));
				this.subscription.unsubscribe();
			});
		}
	}

	public editUserQues(arrayindex: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '70%';
		dialogConfig.disableClose = true;
		this.service.readonlyStatus = false;
		this.service.formData = this.questionList[arrayindex - 1];
		this.dialog.open(UpdateQuestionComponent, dialogConfig).afterClosed().subscribe((res: any) => {
			this.dtTrigger.unsubscribe();
			this.getQuesOfUser(localStorage.getItem('uid'));
		});
	}
	public viewUserQues(arrayindex: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '70%';
		dialogConfig.disableClose = true;
		this.service.readonlyStatus = true;
		this.service.formData = this.questionList[arrayindex - 1];
		this.dialog.open(UpdateQuestionComponent, dialogConfig).afterClosed().subscribe((res: any) => {});
	}

	ngOnDestroy() {
		this.dtTrigger.unsubscribe();
	}
}
