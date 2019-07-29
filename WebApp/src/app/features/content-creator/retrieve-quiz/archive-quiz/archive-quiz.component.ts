import { Component, OnInit } from '@angular/core';
import { QuizModel } from '../../shared/quiz.model';
import { ContentCreatorServiceService } from '../../shared/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
@Component({
	selector: 'app-archive-quiz',
	templateUrl: './archive-quiz.component.html',
	styleUrls: [ './archive-quiz.component.scss' ]
})
export class ArchiveQuizComponent implements OnInit {
	public tag = '';
	public QuizList: QuizModel[];
	searchText = '';
	difficultyLevel = '';
	QuestionList: any[];
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<QuizModel> = new Subject();
	public columns: any[];
	private index: number;

	constructor(private service: ContentCreatorServiceService, private toastr: ToastrService) {}

	public ngOnInit() {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10
		};
		this.columns = [
			{ field: 'SerialNumber', header: 'S NO' },
			{ field: 'QuizName', header: 'Quiz Name' },
			{ field: 'QuizType', header: 'Quiz Type' },
			{ field: 'Difficulty', header: 'Difficulty' },
			{ field: 'TotalQuestions', header: 'Total Questions' },
			{ field: 'TotalMarks', header: 'Total Marks' },
			{ field: 'DuplicateTags', header: 'Tags' }
		];

		this.loadQuiz();
		setTimeout(() => {
			this.loadQuiz();
		}, 0);
	}

	public columnsById(index: number) {
		return index;
	}

	private loadQuiz() {
		const subscription = this.service.getArchivedQuizzes().subscribe((res: any) => {
			this.QuizList = res as QuizModel[];
			for (this.index = 1; this.index <= this.QuizList.length; this.index++) {
				this.QuizList[this.index - 1].SerialNumber = this.index;
				this.tag = '';
				for (let tag of this.QuizList[this.index - 1].Tags) {
					this.tag = this.tag + tag.Name + ',';
					this.QuizList[this.index - 1].DuplicateTags = this.tag;
				}
			}
		});
		subscription.unsubscribe();
	}

	public onUnArchived(id: number) {
		if (confirm('Are you sure you want to un-archive this quiz?')) {
			this.service.unArchiveQuiz(id).subscribe((res: any) => {
				this.dtTrigger.unsubscribe();
				this.loadQuiz();
				this.toastr.success('Un-Archived Successfully', 'Assesment System');
				this.dtTrigger.unsubscribe();
				this.dtTrigger.next();
			});
		}
	}

	ngOnDestroy() {
		this.dtTrigger.unsubscribe();
	}
}
