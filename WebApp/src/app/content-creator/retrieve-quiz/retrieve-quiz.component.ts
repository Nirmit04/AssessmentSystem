import { Component, OnInit } from '@angular/core';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { QuizModel } from '../shared/quiz.model';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { UpdateQuizComponent } from './update-quiz/update-quiz.component';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
	selector: 'retrieve-quiz',
	templateUrl: './retrieve-quiz.component.html',
	styleUrls: ['./retrieve-quiz.component.css']
})

export class RetrieveQuizComponent implements OnInit {

	QuizList: QuizModel[];
	searchText = '';
	difficultyLevel = '';
	index = 0;
	QuestionList: any[];
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<QuizModel> = new Subject();
	subscription: Subscription;

	cols: any[];
	i: number;

	constructor(private service: ContentCreatorServiceService,
		private router: Router,
		private dialog: MatDialog,
		private toastr: ToastrService) { }

	ngOnInit() {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10,
			responsive: true,
		};
		this.cols = [
			{ field: 'SerialNumber', header: 'S NO' },
			{ field: 'QuizName', header: 'Quiz Name' },
			{ field: 'Subject', header: 'Subject' },
			{ field: 'Difficulty', header: 'Difficulty' },
			{ field: 'QuizType', header: 'Quiz Type' },
			{ field: 'TotalQuestions', header: 'Total Questions' },
			{ field: 'TotalMarks', header: 'Total Marks' },
			{ field: 'QuizTime', header: 'Duration (HH:MM)' }

		];
		this.loadQuiz();
		setTimeout(() => {
			this.loadQuiz();
		}, 0);
	}

	loadQuiz() {
		this.service.getQuizzes().subscribe((res: any) => {
			this.QuizList = res as QuizModel[];
			// this.dtTrigger.next();
			for (this.i = 1; this.i <= this.QuizList.length; this.i++) {
				this.QuizList[this.i - 1].SerialNumber = this.i;
			}
		});
	}

	onCreate() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		let dialogRef = this.dialog.open(CreateQuizComponent, dialogConfig);
		dialogRef.afterClosed().subscribe(result => {
			this.loadQuiz();
			this.dtTrigger.unsubscribe();
			this.dtTrigger.next();
		});
	}

	onArchive(id: number) {
		if (confirm('Are you sure you want to archive this quiz?')) {
			this.service.deleteQuiz(id).subscribe((res: any) => {
				this.toastr.success('Archieved Successfully', 'Assesment System');
				this.loadQuiz();
				this.dtTrigger.unsubscribe();
				this.dtTrigger.next();
			});
		}
	}

	onEdit(id: number) {
		localStorage.setItem('quizId', id.toString());
		this.service.getQuestionsByQuiz(id).subscribe((res: any) => {
			this.QuestionList = res as any[];
			const dialogConfig = new MatDialogConfig();
			dialogConfig.autoFocus = true;
			dialogConfig.width = "70%";
			dialogConfig.disableClose = true;
			dialogConfig.data = this.QuestionList;
			this.dialog.open(UpdateQuizComponent, dialogConfig).afterClosed().subscribe(res => {
				this.loadQuiz();
				this.dtTrigger.unsubscribe();
				this.dtTrigger.next();
				localStorage.removeItem('quizId');
			});
		});

	}

	ngOnDestroy() {
		this.dtTrigger.unsubscribe();
	}

}
