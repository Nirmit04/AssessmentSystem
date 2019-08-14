import { Component, OnInit, OnDestroy } from '@angular/core';
import { Question } from '../../models/question.model';
import { ContentCreatorService } from '../../services/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateQuestionComponent } from '../update-question/update-question.component';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { ViewEncapsulation } from "@angular/core";
import { HttpService } from '../../../../core/http/http.service';

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
	encapsulation: ViewEncapsulation.None
})
export class RetrieveQuestionBankComponent implements OnDestroy, OnInit {
	/* This class is used to display all the questions present in the question bank of the system entered by the current user */
	private tag: string = '';
	public dtOptions: DataTables.Settings = {};
	public questionList: Question[];
	public dtTrigger: Subject<Question> = new Subject();
	public subscription: Subscription;
	public columns: any[];
	public nonSortableColumns: any[];
	private index: number;

	constructor(
		private service: ContentCreatorService,
		private toastr: ToastrService,
		private dialog: MatDialog,
		private httpService: HttpService) {
	}

	public ngOnInit(): void {
		/* setting up the component and the headings of the table to be displayed */
		this.dtOptions = {
			lengthChange: false,
			paging: false,
			search: false
		};
		setTimeout(() => {
			this.getQuesOfUser();
		}, 0);

		this.nonSortableColumns = [ { field: 'QuestionStatement', header: 'Question' } ];
		this.columns = [
			{ field: 'QuestionType', header: 'Question Type' },
			{ field: 'Difficulty', header: 'Difficulty Level' },
			{ field: 'DuplicateTags', header: 'Tags' }
		];
	}

	private getQuesOfUser(): void {
		/* this functions gets all the questions that the current user entered in the question bank and displays it to the user in the form of tables */
		this.httpService.getQuesOfUser().subscribe((data: any) => {
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
	}

	nonSortableColumnsById(index: number) {
		/* trackBy function */
		return index;
	}

	columnsById(index: number) {
		/* trackBy function */
		return index;
	}

	public deleteQues(questionId: number): void {
		/* it is used to delete a question from the question bank on user confirmation */
		if (confirm('Are you sure you want to delete this record?')) {
			/* if user clicks on the 'Yes' button, then the question is deleted from the question bank */
			this.httpService.deleteQues(questionId).subscribe((res: any) => {
				this.toastr.success('Deleted Successfully', 'Assesment System');
				this.dtTrigger.unsubscribe();
				this.getQuesOfUser();
			});
		}
	}

	public editUserQues(arrayindex: number): void {
		/* user wants to edit a particular question by clicking on the 'Edit' icon, a mat dialog is presented to the user from where he can edit the question */
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '70%';
		dialogConfig.disableClose = true;
		this.service.readonlyStatus = false; // user can edit the question
		this.service.formData = this.questionList[arrayindex - 1];
		this.dialog.open(UpdateQuestionComponent, dialogConfig).afterClosed().subscribe((res: any) => {
			this.dtTrigger.unsubscribe();
			this.getQuesOfUser(); // refreshes the question bank table displaying the latest information
		});
	}

	public viewUserQues(arrayindex: number): void {
		/* user wants to view a particular question by clicking on the 'View' icon, a mat dialog is presented to the user from where he can view the detailed information of the question */
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '70%';
		dialogConfig.disableClose = true;
		this.service.readonlyStatus = true; // user can only view the question
		this.service.formData = this.questionList[arrayindex - 1];
		this.dialog.open(UpdateQuestionComponent, dialogConfig).afterClosed().subscribe((res: any) => {
		});
	}

	public ngOnDestroy(): void {
		/* component is destroyed */
		this.dtTrigger.unsubscribe();
	}
}
