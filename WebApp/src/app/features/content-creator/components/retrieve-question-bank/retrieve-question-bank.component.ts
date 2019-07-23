import { Component, OnInit, OnDestroy } from '@angular/core';
import { Question } from '../../models/question.model';
import { ContentCreatorServiceService } from '../../services/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateQuestionComponent } from '../update-question/update-question.component';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { ViewEncapsulation } from "@angular/core";
import { StorageService } from '../../../../services/storage.service';
import { HttpService } from '../../../../core/http/http.service';

declare var $: any;

@Component({
	selector: 'app-retrieve-question-bank',
	styles: [`
		.sample {
			background-color: #000000 !important;
			color: #ffffff !important;
		}
	`],
	templateUrl: './retrieve-question-bank.component.html',
	styleUrls: ['./retrieve-question-bank.component.css'],
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
	i: number;

	constructor(private service: ContentCreatorServiceService,
		private toastr: ToastrService,
		private dialog: MatDialog,
		private storageService: StorageService,
		private httpService: HttpService) { }

	public ngOnInit(): void {
		this.dtOptions = {
			lengthChange: false,
			paging: false,
			search: false
		};
		setTimeout(() => {
			this.getQuesOfUser(this.storageService.getStorage('uid'));
		}, 0);

		this.nonSortableColumns = [
			{ field: 'QuestionStatement', header: 'Question' }
		]
		this.columns = [
			{ field: 'QuestionType', header: 'Question Type' },
			{ field: 'Difficulty', header: 'Difficulty Level' },
			{ field: 'Tags1', header: 'Tags' }
		];
	}

	private getQuesOfUser(userId: string): void {
		this.httpService.getQuesOfUser(userId).subscribe((data: any) => {
			this.questionList = data as Question[];
			for (this.i = 1; this.i <= this.questionList.length; this.i++) {
				this.tag = '';
				this.questionList[this.i - 1].SerialNumber = this.i;
				for (let tag of this.questionList[this.i - 1].Tags) {
					this.tag = this.tag + tag.Name + ',';
					this.questionList[this.i - 1].Tags1 = this.tag;
				}
				this.questionList[this.i - 1].Tags1 = this.questionList[this.i - 1].Tags1.substring(0, this.questionList[this.i - 1].Tags1.length - 1);
			}
		})
	}

	public deleteQues(questionId): void {
		if (confirm('Are you sure you want to delete this record?')) {
			this.subscription = this.httpService.deleteQues(questionId).subscribe((res: any) => {
				this.toastr.success('Deleted Successfully', 'Assesment System');
				this.dtTrigger.unsubscribe();
				this.getQuesOfUser(this.storageService.getStorage('uid'));
				this.subscription.unsubscribe();
			});
		}
	}

	public editUserQues(arrayindex: number): void {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		this.service.readonlyStatus = false;
		this.service.formData = this.questionList[arrayindex - 1];
		this.dialog.open(UpdateQuestionComponent, dialogConfig).afterClosed().subscribe((res: any) => {
			this.dtTrigger.unsubscribe();
			this.getQuesOfUser(this.storageService.getStorage('uid'));
		});
	}

	public viewUserQues(arrayindex: number): void {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		this.service.readonlyStatus = true;
		this.service.formData = this.questionList[arrayindex - 1];
		this.dialog.open(UpdateQuestionComponent, dialogConfig).afterClosed().subscribe((res: any) => {
		});
	}

	public ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
	}

}