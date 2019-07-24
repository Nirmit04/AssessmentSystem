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
			{ field: 'serialNumber', header: 'S NO' },
			{ field: 'quizName', header: 'Quiz Name' },
			{ field: 'quizType', header: 'Quiz Type' },
			{ field: 'difficulty', header: 'Difficulty' },
			{ field: 'totalQuestions', header: 'Total Questions' },
			{ field: 'totalMarks', header: 'Total Marks' },
			{ field: 'duplicateTags', header: 'Tags' },
		];

		this.loadQuiz();
		setTimeout(() => {
			this.loadQuiz();
		}, 0);
	}

	private loadQuiz(): void {
		this.httpService.getArchivedQuizzes().subscribe((res: any) => {
			this.QuizList = res as QuizModel[];
			for (this.index = 1; this.index <= this.QuizList.length; this.index++) {
				this.QuizList[this.index - 1].serialNumber = this.index;
				this.tag = ''
				for (let tag of this.QuizList[this.index - 1].tags) {
					this.tag = this.tag + tag.Name + ',';
					this.QuizList[this.index - 1].duplicateTags = this.tag;
				}
			}
		});
	}

	public onUnArchived(quizId: number): void {
		if (confirm('Are you sure you want to un-archive this quiz?')) {
			this.httpService.unArchiveQuiz(quizId).subscribe((res: any) => {
				this.dtTrigger.unsubscribe();
				this.loadQuiz();
				this.toastr.success('Un-Archived Successfully', 'Assesment System');
				this.dtTrigger.unsubscribe();
				this.dtTrigger.next();
			});
		}
	}

	public ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
	}

}
