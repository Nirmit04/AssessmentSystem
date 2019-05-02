import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { TagModel } from '../shared/tags.model';
=======
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
import { ContentCreatorServiceService } from '../shared/content-creator-service.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { QuizModel } from '../shared/quiz.model';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { UpdateQuizComponent } from './update-quiz/update-quiz.component';
<<<<<<< HEAD
=======
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165

@Component({
	selector: 'retrieve-quiz',
	templateUrl: './retrieve-quiz.component.html',
	styleUrls: ['./retrieve-quiz.component.css']
})
<<<<<<< HEAD
export class RetrieveQuizComponent implements OnInit {
=======

export class RetrieveQuizComponent implements OnInit {

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
	QuizList: QuizModel[];
	searchText = '';
	difficultyLevel = '';
	index = 0;
	QuestionList: any[];
<<<<<<< HEAD
=======
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<QuizModel> = new Subject();
	subscription: Subscription;

	cols: any[];
	i: number;

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
	constructor(private service: ContentCreatorServiceService,
		private router: Router,
		private dialog: MatDialog,
		private toastr: ToastrService) { }

	ngOnInit() {
<<<<<<< HEAD
		this.loadQuiz();
	}
	loadQuiz() {
		this.service.getQuizzes().subscribe((res: any) => {
			this.QuizList = res as QuizModel[];
		});
	}
	filter(item: QuizModel) {
		return (
			(item.Subject.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
				|| item.QuizType.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1)
			&& item.Difficulty.toLowerCase().indexOf(this.difficultyLevel.toLowerCase()) > -1
		);
	}
	filterSubject(event: any) {
		this.difficultyLevel = event.target.value;
		console.log(this.difficultyLevel);
	}
=======
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

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
	onCreate() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		let dialogRef = this.dialog.open(CreateQuizComponent, dialogConfig);
		dialogRef.afterClosed().subscribe(result => {
<<<<<<< HEAD
			this.loadQuiz();
=======
			this.service.Difficulty = null;
			this.service.QuestionType = null;
			this.service.SubjectId = null;
			this.service.quesStat = false;
			this.loadQuiz();
			this.dtTrigger.unsubscribe();
			this.dtTrigger.next();
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
		});
	}

	onArchive(id: number) {
<<<<<<< HEAD
		console.log(id);
		if (confirm('Are you sure you want to delete this quiz?')) {
			this.service.deleteQuiz(id).subscribe((res: any) => {
				this.loadQuiz();
				this.toastr.success('Archieved Successfully', 'Assesment System');
			});
		}
	}
	onEdit(id: number) {
		localStorage.setItem('quizId', id.toString());
=======
		if (confirm('Are you sure you want to archive this quiz?')) {
			this.service.deleteQuiz(id).subscribe((res: any) => {
				this.toastr.success('Archieved Successfully', 'Assesment System');
				this.loadQuiz();
				this.dtTrigger.unsubscribe();
				this.dtTrigger.next();
			});
		}
	}

	onEdit(id: number, index: number) {
		localStorage.setItem('quizId', id.toString());
		this.service.Difficulty = this.QuizList[index].Difficulty;
		this.service.SubjectId = this.QuizList[index].SubjectId;
		this.service.QuestionType = this.QuizList[index].QuizType;
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
		this.service.getQuestionsByQuiz(id).subscribe((res: any) => {
			this.QuestionList = res as any[];
			const dialogConfig = new MatDialogConfig();
			dialogConfig.autoFocus = true;
			dialogConfig.width = "70%";
			dialogConfig.disableClose = true;
			dialogConfig.data = this.QuestionList;
<<<<<<< HEAD
			console.log(dialogConfig.data);
			this.dialog.open(UpdateQuizComponent, dialogConfig).afterClosed().subscribe(res => {
				this.loadQuiz();
=======
			this.dialog.open(UpdateQuizComponent, dialogConfig).afterClosed().subscribe(res => {
				this.loadQuiz();
				this.service.Difficulty = null;
				this.service.QuestionType = null;
				this.service.SubjectId = null;
				this.service.quesStat = false;
				this.dtTrigger.unsubscribe();
				this.dtTrigger.next();
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
				localStorage.removeItem('quizId');
			});
		});

	}
<<<<<<< HEAD
=======

	ngOnDestroy() {
		this.dtTrigger.unsubscribe();
	}

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
}
