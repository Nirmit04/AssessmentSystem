import { Component, OnInit } from '@angular/core';
import { ContentCreatorService } from '../../services/content-creator-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { QuizModel } from '../../models/quiz.model';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { UpdateQuizComponent } from './update-quiz/update-quiz.component';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { StorageService } from '../../../../services/storage.service';
import { HttpService } from '../../../../core/http/http.service';

@Component({
	selector: 'retrieve-quiz',
	templateUrl: './retrieve-quiz.component.html',
	styleUrls: ['./retrieve-quiz.component.css']
})

export class RetrieveQuizComponent implements OnInit {
	private tag: string = '';
	public quizList: QuizModel[];
	public questionList: any[];
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<QuizModel> = new Subject();
	subscription: Subscription;
	public columns: any[];
	private index: number;

	constructor(private service: ContentCreatorService,
		private dialog: MatDialog,
		private toastr: ToastrService,
		private storageService: StorageService,
		private httpService: HttpService) { }

	public ngOnInit(): void {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10,
			responsive: true,
		};
		this.columns = [
			{ field: 'SerialNumber', header: 'S NO' },
			{ field: 'QuizName', header: 'Quiz Name' },
			{ field: 'DuplicateTags', header: 'Subject' },
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

	public columnsById(index: number)	{
		return index;
	}

	private loadQuiz(): void {
		const subscription = this.httpService.getQuizzes().subscribe((res: any) => {
			this.quizList = res as QuizModel[];
			for (this.index = 1; this.index <= this.quizList.length; this.index++) {
				this.quizList[this.index - 1].SerialNumber = this.index;
				this.tag = '';
				for (let tag of this.quizList[this.index - 1].Tags) {
					this.tag = this.tag + tag.Name + ',';
				}
				this.quizList[this.index - 1].DuplicateTags = this.tag;
				this.quizList[this.index - 1].DuplicateTags = this.quizList[this.index - 1].DuplicateTags.substring(0, this.quizList[this.index - 1].DuplicateTags.length - 1);
			}
		});
		subscription.unsubscribe();
	}

	public onCreate(): void {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		let dialogRef = this.dialog.open(CreateQuizComponent, dialogConfig);
		const subscription = dialogRef.afterClosed().subscribe(result => {
			this.service.difficulty = null;
			this.service.questionType = null;
			this.service.subjectId = null;
			this.service.quesStat = false;
			this.loadQuiz();
			this.dtTrigger.unsubscribe();
			this.dtTrigger.next();
		});
		subscription.unsubscribe();
	}

	public onArchive(quizId: number): void {
		if (confirm('Are you sure you want to archive this quiz?')) {
			const subscription = this.httpService.deleteQuiz(quizId).subscribe((res: any) => {
				this.toastr.success('Archieved Successfully', 'Assesment System');
				this.loadQuiz();
				this.dtTrigger.unsubscribe();
				this.dtTrigger.next();
			});
			subscription.unsubscribe();
		}
	}

	public onEdit(quizId: number, index: number): void {
		this.storageService.setStorage('quizId', quizId.toString());
		this.service.difficulty = this.quizList[index].Difficulty;
		this.service.subjectId = this.quizList[index].SubjectId;
		this.service.questionType = this.quizList[index].QuizType;
		const subscription = this.httpService.getQuestionsByQuiz(quizId).subscribe((res: any) => {
			this.questionList = res as any[];
			const dialogConfig = new MatDialogConfig();
			dialogConfig.autoFocus = true;
			dialogConfig.width = "70%";
			dialogConfig.disableClose = true;
			dialogConfig.data = this.questionList;
			const resubscription = this.dialog.open(UpdateQuizComponent, dialogConfig).afterClosed().subscribe(res => {
				this.loadQuiz();
				this.service.difficulty = null;
				this.service.questionType = null;
				this.service.subjectId = null;
				this.service.quesStat = false;
				this.dtTrigger.unsubscribe();
				this.dtTrigger.next();
				this.storageService.removeStorage('quizId');
			});
			resubscription.unsubscribe();
		});
		subscription.unsubscribe();
	}

	public ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
	}

}
