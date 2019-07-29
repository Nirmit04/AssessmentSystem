import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentCreatorServiceService } from '../../shared/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { CreateQuestionsComponent } from '../../create-questions/create-questions.component';
import * as moment from 'moment';

@Component({
	selector: 'app-create-quiz',
	templateUrl: './create-quiz.component.html',
	styleUrls: [ './create-quiz.component.scss' ]
})
export class CreateQuizComponent implements OnInit {
	public Subjects: any[];
	public questions: any[];
	private quizzes: any[];
	public quizExists: boolean;
	public val: boolean = false;
	public CreatedBy: string = '';
	public length = 0;
	public QuizHour: string;
	public QuizMinute: string;
	public mockType: string;
	public totalQuestions: number;
	public dropdownSettings;
	public columns: any[];
	public index: number;

	constructor(
		private service: ContentCreatorServiceService,
		private dialogRef: MatDialogRef<CreateQuizComponent>,
		public toastr: ToastrService,
		private dialog: MatDialog
	) {}
	ngOnInit() {
		this.dropdownSettings = {
			singleSelection: false,
			idField: 'SubjectId',
			textField: 'Name',
			enableCheckAll: false,
			itemsShowLimit: 5,
			allowSearchFilter: true
		};

		this.quizExists = false;
		this.resetForm();
		this.CreatedBy = localStorage.getItem('uid');
		this.service.retrieveQuizNames().subscribe((res: any) => {
			this.quizzes = res as any[];
		});
		this.service.retrieveSubjects().subscribe((data) => {
			this.Subjects = data as any[];
		});
	}

	resetForm(form?: NgForm) {
		if (form != null) {
			form.resetForm();
		} else {
			this.service.quizForm = {
				QuizId: null,
				Difficulty: '',
				TotalQuestions: null,
				TotalMarks: null,
				Tags: null,
				QuizType: '',
				CreatedBy: '',
				QuestionIds: null,
				SubjectId: null,
				QuizName: '',
				MinCutOff: null
			};
			this.service.QuizMinute = null;
			this.service.QuizHour = null;
			if (this.questions) {
				this.questions.forEach((y) => (y.selected = false));
			}
		}
	}

	fetch(form: NgForm) {
		this.fetchReqQues(form);
	}

	fetchReqQues(form: NgForm) {
		console.log('1');
		if (form.value.QuizType === 'Scheduled') {
			this.service.QuestionType = 'Scheduled';
		} else {
			this.service.QuestionType = 'Mock';
		}
		this.service.Difficulty = this.service.quizForm.Difficulty;
		this.service.SubjectId = this.service.quizForm.SubjectId;
		this.service.formDupli = form;
		this.service.quizForm = form.value;
		this.QuizHour = this.service.QuizHour.toString();
		this.QuizMinute = this.service.QuizMinute.toString();
		if (this.service.QuizHour < 10) {
			this.QuizHour = '0' + this.service.QuizHour.toString();
		}
		if (this.service.QuizMinute < 10) {
			this.QuizMinute = '0' + this.service.QuizMinute.toString();
		}
		this.service.quizForm.QuizTime = this.QuizHour + ':' + this.QuizMinute;
		if (this.mockType == 'Random') {
			this.service.generateRandom(form.value, this.totalQuestions).subscribe((res: any) => {
				if (res === 0) {
					this.toastr.error('No Questions Available!');
				} else {
					this.toastr.success('Random Quiz Created successfully with ' + res + ' questions.');
				}
				this.dialogRef.close('Inserted');
			});
		} else {
			this.columns = [
				{ field: 'SerialNumber', header: 'S NO' },
				{ field: 'QuestionStatement', header: 'Questions' }
			];
			this.service.getQuesOfUserConstraints(form.value).subscribe((data: any) => {
				console.log(data);
				data.forEach((obj) => (obj.selected = false));
				this.questions = data;
				this.length = this.questions.length;
				for (this.index = 1; this.index <= this.questions.length; this.index++) {
					this.questions[this.index - 1].SerialNumber = this.index;
				}
				this.checkVal();
			});
		}
	}

	private checkVal(): void {
		this.val = true;
	}
	public updateSelectedQuestions(index) {
		this.questions[index].selected = !this.questions[index].selected;
	}
	public onDetailsSubmit(form: NgForm) {
		var QuestionId = this.questions
			.filter((QuestionId) => QuestionId.selected)
			.map((idSelected) => idSelected.QuestionId);
		const response = this.service.postQuestionsSelected(QuestionId);
		if (response) {
			this.toastr.success('Inserted successfully');
			this.service.quizForm = null;
			this.dialogRef.close('Inserted');
		}
	}
	private reload(data1: any) {
		const subscription = this.service.getQuesOfUserConstraints(data1).subscribe((data: any) => {
			data.forEach((obj) => (obj.selected = false));
			this.questions = data;
			this.length = this.questions.length;
			this.checkVal();
		});
		subscription.unsubscribe();
	}

	public checkAvail(inputName: NgForm): void {
		for (let name of this.quizzes) {
			if (name.QuizName.toString().toLowerCase() === inputName.value.toString().toLowerCase()) {
				this.quizExists = true;
				break;
			} else {
				this.quizExists = false;
			}
		}
	}

	public add_new_ques(): void {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '70%';
		dialogConfig.disableClose = true;
		this.service.quesStat = true;
		let dialogRef = this.dialog.open(CreateQuestionsComponent, dialogConfig);
		const subscription = dialogRef.afterClosed().subscribe((result) => {
			this.service.quesStat = false;
			this.reload(this.service.quizForm);
		});
		subscription.unsubscribe();
	}
	public toggleEditable(event): void {
		if (event.target.checked) {
			this.service.QuizState = true;
		}
		if (!event.target.checked) {
			this.service.QuizState = false;
		}
	}
}
