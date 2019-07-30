import { Component, OnInit } from '@angular/core';
import { ContentCreatorServiceService } from '../../../services/content-creator-service.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { QuizModel } from '../../../models/quiz.model';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { UpdateQuizComponent } from './update-quiz/update-quiz.component';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
	selector: 'retrieve-quiz',
	templateUrl: './retrieve-quiz.component.html',
	styleUrls: [ './retrieve-quiz.component.scss' ]
})
export class RetrieveQuizComponent implements OnInit {
	private tag: string = '';
	public QuizList: QuizModel[];
	public QuestionList: any[];
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<QuizModel> = new Subject();
	public columns: any[];
	public index: number;

	constructor(
		private service: ContentCreatorServiceService,
		private router: Router,
		private dialog: MatDialog,
		private toastr: ToastrService
	) {}

	ngOnInit() {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10,
			responsive: true
		};
		this.columns = [
			{ field: 'SerialNumber', header: 'S NO' },
			{ field: 'QuizName', header: 'Quiz Name' },
			{ field: 'Difficulty', header: 'Difficulty' },
			{ field: 'DuplicateTags', header: 'Tags' },
			{ field: 'QuizType', header: 'Quiz Type' },
			{ field: 'TotalQuestions', header: 'Total Questions' },
			{ field: 'TotalMarks', header: 'Total Marks' },
			{ field: 'QuizTime', header: 'Duration (HH:MM)' }
		];
		setTimeout(() => {
			this.loadQuiz();
		}, 0);
	}

	private loadQuiz(): void {
		const subscription = this.service.getQuizzes().subscribe((res: any) => {
			this.QuizList = res as QuizModel[];
			console.log(this.QuizList);
			for (this.index = 1; this.index <= this.QuizList.length; this.index++) {
				this.QuizList[this.index - 1].SerialNumber = this.index;
				this.tag = '';
				for (let tag of this.QuizList[this.index - 1].Tags) {
					this.tag = this.tag + tag.Name + ',';
				}
				this.QuizList[this.index - 1].DuplicateTags = this.tag;
				this.QuizList[this.index - 1].DuplicateTags = this.QuizList[this.index - 1].DuplicateTags.substring(
					0,
					this.QuizList[this.index - 1].DuplicateTags.length - 1
				);
			}
		});
		subscription.unsubscribe();
	}

	public onCreate() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '70%';
		// dialogConfig.height = "90%";
		dialogConfig.disableClose = true;
		let dialogRef = this.dialog.open(CreateQuizComponent, dialogConfig);
		const subscription = dialogRef.afterClosed().subscribe((result) => {
			this.service.Difficulty = null;
			this.service.QuestionType = null;
			this.service.SubjectId = null;
			this.service.quesStat = false;
			this.loadQuiz();
			this.dtTrigger.unsubscribe();
			this.dtTrigger.next();
		});
		subscription.unsubscribe();
	}

	public onArchive(id: number) {
		if (confirm('Are you sure you want to archive this quiz?')) {
			const subscription = this.service.deleteQuiz(id).subscribe((res: any) => {
				this.toastr.success('Archieved Successfully', 'Assesment System');
				this.loadQuiz();
				this.dtTrigger.unsubscribe();
				this.dtTrigger.next();
			});
			subscription.unsubscribe();
		}
	}

	public onEdit(id: number, index: number) {
		localStorage.setItem('quizId', id.toString());
		this.service.Difficulty = this.QuizList[index].Difficulty;
		this.service.SubjectId = this.QuizList[index].SubjectId;
		this.service.QuestionType = this.QuizList[index].QuizType;
		const subscription = this.service.getQuestionsByQuiz(id).subscribe((res: any) => {
			this.QuestionList = res as any[];
			const dialogConfig = new MatDialogConfig();
			dialogConfig.autoFocus = true;
			dialogConfig.width = '70%';
			dialogConfig.disableClose = true;
			dialogConfig.data = this.QuestionList;
			const resubscription = this.dialog
				.open(UpdateQuizComponent, dialogConfig)
				.afterClosed()
				.subscribe((res) => {
					this.loadQuiz();
					this.service.Difficulty = null;
					this.service.QuestionType = null;
					this.service.SubjectId = null;
					this.service.quesStat = false;
					this.dtTrigger.unsubscribe();
					this.dtTrigger.next();
					localStorage.removeItem('quizId');
				});
			resubscription.unsubscribe();
		});
		subscription.unsubscribe();
	}

	ngOnDestroy() {
		this.dtTrigger.unsubscribe();
	}
}
