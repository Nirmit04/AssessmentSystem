import { Component, OnInit } from '@angular/core';
import { QuizModel } from '../../shared/quiz.model';
import { ContentCreatorServiceService } from '../../shared/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { concat, Subscription } from 'rxjs';
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
	constructor(private service: ContentCreatorServiceService,
		private toastr: ToastrService) { }

	public ngOnInit() {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10,
		};
		this.loadQuiz();
	}
	loadQuiz() {
		this.service.getArchivedQuizzes().subscribe((res: any) => {
			this.QuizList = res as QuizModel[];
			this.dtTrigger.next();
		});
	}
	// filter(item: QuizModel) {
	// 	return (
	// 		(item.Subject.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
	// 			|| item.QuizType.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1)
	// 		&& item.Difficulty.toLowerCase().indexOf(this.difficultyLevel.toLowerCase()) > -1
	// 	);
	// }

	// filterSubject(event: any) {
	// 	this.difficultyLevel = event.target.value;
	// 	console.log(this.difficultyLevel);
	// }

	onUnArchived(id: number) {
		console.log(id);
		if (confirm('Are you sure you want to un-archive this quiz?')) {
			this.service.unArchiveQuiz(id).subscribe((res: any) => {
				console.log(res);
				this.loadQuiz();
				this.dtTrigger.next();
				this.toastr.success('Un-Archived Successfully', 'Assesment System');
			});
		}
	}
	ngOnDestroy() {
		this.dtTrigger.unsubscribe();
	}

}