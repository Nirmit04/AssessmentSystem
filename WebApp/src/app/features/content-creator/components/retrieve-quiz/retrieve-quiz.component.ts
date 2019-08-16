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
	/* this class is used to get all the quizzes that have been created by the current user */
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
		/* setting up the component and loading all the quizzes that have been created by the current user */
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
			this.loadQuiz(); // load the user creaated quizzes
		}, 0);
	}

	public columnsById(index: number)	{
		/* trackBy function */
		return index;
	}

	private loadQuiz(): void {
		/* loads the user created quizzes */
		this.httpService.getQuizzes().subscribe((res: any) => {
			this.quizList = res as QuizModel[];
			for (this.index = 1; this.index <= this.quizList.length; this.index++) {
				this.quizList[this.index - 1].SerialNumber = this.index; // prepares serial number for the retrieved quizzes
				this.tag = '';
				for (let tag of this.quizList[this.index - 1].Tags) {
					this.tag = this.tag + tag.Name + ','; // prepares tags of the quizzes by separating them with commas
				}
				this.quizList[this.index - 1].DuplicateTags = this.tag; // assigning the prepared tags to the tag element of the model
				this.quizList[this.index - 1].DuplicateTags = this.quizList[this.index - 1].DuplicateTags.substring(0, this.quizList[this.index - 1].DuplicateTags.length - 1);
			}
		});
	}

	public onCreate(): void {
		/* creating a new quiz by clicking on the 'Create Quiz' button*/
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = "70%";
		dialogConfig.disableClose = true;
		let dialogRef = this.dialog.open(CreateQuizComponent, dialogConfig); // loading the 'CreateQuiz' component in the mat dialog
		dialogRef.afterClosed().subscribe(result => { // after the dialog box is closed, reset the form values
			this.service.difficulty = null;
			this.service.questionType = null;
			this.service.subjectId = null;
			this.service.quesStat = false;
			this.loadQuiz(); // refresh to load the latest data of the newly created quiz
			this.dtTrigger.unsubscribe();
			this.dtTrigger.next();
		});
	}

	public onArchive(quizId: number): void {
		
		if (confirm('Are you sure you want to archive this quiz?')) {
			this.httpService.deleteQuiz(quizId).subscribe((res: any) => {
				this.toastr.success('Archieved Successfully', 'Assesment System');
				this.loadQuiz();
				this.dtTrigger.unsubscribe();
				this.dtTrigger.next();
			});
		}
	}

	public onEdit(quizId: number, index: number): void {
		this.storageService.setStorage('quizId', quizId.toString());
		this.service.difficulty = this.quizList[index].Difficulty;
		this.service.subjectId = this.quizList[index].SubjectId;
		this.service.questionType = this.quizList[index].QuizType;
		this.httpService.getQuestionsByQuiz(quizId).subscribe((res: any) => {
			this.questionList = res as any[];
			const dialogConfig = new MatDialogConfig();
			dialogConfig.autoFocus = true;
			dialogConfig.width = "70%";
			dialogConfig.disableClose = true;
			dialogConfig.data = this.questionList;
			this.dialog.open(UpdateQuizComponent, dialogConfig).afterClosed().subscribe(res => {
				this.loadQuiz();
				this.service.difficulty = null;
				this.service.questionType = null;
				this.service.subjectId = null;
				this.service.quesStat = false;
				this.dtTrigger.unsubscribe();
				this.dtTrigger.next();
				this.storageService.removeStorage('quizId');
			});
		});
	}

	public ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
	}

}
