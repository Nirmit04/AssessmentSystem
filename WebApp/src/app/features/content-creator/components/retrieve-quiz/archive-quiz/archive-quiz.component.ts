import { Component, OnInit } from '@angular/core';
import { QuizModel } from '../../../models/quiz.model';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { HttpService } from '../../../../../core/http/http.service';
@Component({
	selector: 'app-archive-quiz',
	templateUrl: './archive-quiz.component.html',
	styleUrls: ['./archive-quiz.component.css']
})
export class ArchiveQuizComponent implements OnInit {
	/* this class is used to archive a quiz on user`s request, that is, soft delete a quiz */
	private tag: string = '';
	public QuizList: QuizModel[];
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<QuizModel> = new Subject();
	subscription: Subscription;
	public columns: any[];
	private index: number;

	constructor(private toastr: ToastrService,
		private httpService: HttpService) { }

	public ngOnInit(): void {
		/* setting up the component, the headings of the table to be displayed and loading all those quizzes that are currently soft-deleted*/
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10,
		};
		this.columns = [
			{ field: 'SerialNumber', header: 'S NO' },
			{ field: 'QuizName', header: 'Quiz Name' },
			{ field: 'QuizType', header: 'Quiz Type' },
			{ field: 'Difficulty', header: 'Difficulty' },
			{ field: 'TotalQuestions', header: 'Total Questions' },
			{ field: 'TotalMarks', header: 'Total Marks' },
			{ field: 'DuplicateTags', header: 'Tags' },
		];

		this.loadQuiz(); // loading all those quizzes that are currently soft-deleted
		setTimeout(() => {
			this.loadQuiz();
		}, 0);
	}

	public columnsById(index: number) {
		/* trackBy function */
		return index;
	}

	private loadQuiz(): void {
		/* loads all those quizzes that are currently soft-deleted */
		this.httpService.getArchivedQuizzes().subscribe((res: any) => {
			this.QuizList = res as QuizModel[];
			for (this.index = 1; this.index <= this.QuizList.length; this.index++) {
				/* loop to display the multiple subjects in the correct form if a quiz contains it */
				this.QuizList[this.index - 1].SerialNumber = this.index;
				this.tag = ''
				for (let tag of this.QuizList[this.index - 1].Tags) {
					this.tag = this.tag + tag.Name + ',';
					this.QuizList[this.index - 1].DuplicateTags = this.tag;
				}
			}
		});
	}

	public onUnArchived(quizId: number): void {
		/* un-archiving a quiz, and making it to be displayed along with all other non-soft delete quizzes */
		if (confirm('Are you sure you want to un-archive this quiz?')) {
			/* on user confirmation, the un-archiving of the quiz is done */
			this.httpService.unArchiveQuiz(quizId).subscribe((res: any) => {
				this.dtTrigger.unsubscribe();
				this.loadQuiz(); // refreshing the list of the quizzes that are archived 
				this.toastr.success('Un-Archived Successfully', 'Assesment System'); // displaying the toaster on success
				this.dtTrigger.unsubscribe();
				this.dtTrigger.next();
			});
		}
	}

	public ngOnDestroy(): void {
		/* destroying the component, once the user moves away from the component */
		this.dtTrigger.unsubscribe();
	}

}
