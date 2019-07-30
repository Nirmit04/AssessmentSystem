import { Component, OnInit, Inject } from '@angular/core';
import { Subject } from '../../../../models/subject.model';
import { ContentCreatorServiceService } from '../../../../services/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { CreateQuestionsComponent } from '../../create-questions/create-questions.component';

@Component({
	selector: 'app-add-ques-in-quiz',
	templateUrl: './add-ques-in-quiz.component.html',
	styleUrls: [ './add-ques-in-quiz.component.scss' ]
})
export class AddQuesInQuizComponent implements OnInit {
	public Subjects: Subject[];
	questions: any[];
	val: boolean = false;
	count: number = 0;
	CDifficulty = '';
	CSubjectID = null;
	label: '';

	constructor(
		@Inject(MAT_DIALOG_DATA) public data,
		public service: ContentCreatorServiceService,
		public toastr: ToastrService,
		public dialog: MatDialog,
		private dialogref: MatDialogRef<AddQuesInQuizComponent>
	) {}

	ngOnInit() {
		this.questions = this.data;
		this.resetForm();
	}

	private resetForm(form?: NgForm) {
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
			if (this.questions) {
				this.questions.map((y) => (y.selected = false));
			}
		}
	}

	public updateSelectedQuestions(index) {
		this.questions[index].selected = !this.questions[index].selected;
	}

	public add_new_ques() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '70%';
		dialogConfig.disableClose = true;
		this.service.quesStat = true;
		let dialogRef = this.dialog.open(CreateQuestionsComponent, dialogConfig);
		const subscription = dialogRef.afterClosed().subscribe(() => {
			this.service.quesStat = false;
			this.loadQues();
		});
		subscription.unsubscribe();
	}

	private loadQues() {
		const subscription = this.service.getQuizQuestions(+localStorage.getItem('quizId')).subscribe((res: any) => {
			this.questions = res as [];
		});
		subscription.unsubscribe();
	}

	public onDetailsSubmit(form: NgForm): void {
		var QuestionId = this.questions
			.filter((QuestionId) => QuestionId.selected)
			.map((idSelected) => idSelected.QuestionId);
		const response = this.service.putQuestionsSelected(QuestionId);
		if (response) {
			this.toastr.success('Inserted successfully');
			this.dialogref.close('Inserted');
		}
	}
}
