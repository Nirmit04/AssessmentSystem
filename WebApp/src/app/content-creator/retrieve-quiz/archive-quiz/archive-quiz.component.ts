import { Component, OnInit } from '@angular/core';
import { QuizModel } from '../../shared/quiz.model';
import { ContentCreatorServiceService } from '../../shared/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
@Component({
	selector: 'app-archive-quiz',
	templateUrl: './archive-quiz.component.html',
	styleUrls: ['./archive-quiz.component.css']
})
export class ArchiveQuizComponent implements OnInit {

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
		private toastr: ToastrService) { }

	public ngOnInit() {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10,
		};
		this.cols = [
			{ field: 'SerialNumber', header: 'S NO' },
			{ field: 'QuizName', header: 'Quiz Name'},
			{ field: 'QuizType', header: 'Quiz Type' },
			{ field: 'Difficulty', header: 'Difficulty' },
			{ field: 'Subject', header: 'Subject' },
			{ field: 'TotalQuestions', header: 'Total Questions' },
			{ field: 'TotalMarks', header: 'Total Marks' }
		];

		this.loadQuiz();
		setTimeout(() => {
			this.loadQuiz();
		}, 0);
	}

	loadQuiz() {
		this.service.getArchivedQuizzes().subscribe((res: any) => {
			this.QuizList = res as QuizModel[];
			// this.dtTrigger.next();
			for (this.i = 1; this.i <= this.QuizList.length; this.i++) {
				this.QuizList[this.i - 1].SerialNumber = this.i;
			}
		});
	}

	onUnArchived(id: number) {
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
