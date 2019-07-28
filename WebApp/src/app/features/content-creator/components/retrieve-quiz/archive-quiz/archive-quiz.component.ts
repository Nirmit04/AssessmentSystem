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

		this.loadQuiz();
		setTimeout(() => {
			this.loadQuiz();
		}, 0);
	}

	public columnsById(index: number)	{
		return index;
	}

	private loadQuiz(): void {
		const subscription = this.httpService.getArchivedQuizzes().subscribe((res: any) => {
			this.QuizList = res as QuizModel[];
			for (this.index = 1; this.index <= this.QuizList.length; this.index++) {
				this.QuizList[this.index - 1].SerialNumber = this.index;
				this.tag = ''
				for (let tag of this.QuizList[this.index - 1].Tags) {
					this.tag = this.tag + tag.Name + ',';
					this.QuizList[this.index - 1].DuplicateTags = this.tag;
				}
			}
		});
		subscription.unsubscribe();
	}

	public onUnArchived(quizId: number): void {
		if (confirm('Are you sure you want to un-archive this quiz?')) {
			const subscription = this.httpService.unArchiveQuiz(quizId).subscribe((res: any) => {
				this.dtTrigger.unsubscribe();
				this.loadQuiz();
				this.toastr.success('Un-Archived Successfully', 'Assesment System');
				this.dtTrigger.unsubscribe();
				this.dtTrigger.next();
			});
			subscription.unsubscribe();
		}
	}

	public ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
	}

}
