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

	onUnArchived(id: number) {
		if (confirm('Are you sure you want to un-archive this quiz?')) {
			this.service.unArchiveQuiz(id).subscribe((res: any) => {
				this.dtTrigger.unsubscribe();
				this.loadQuiz();
				this.toastr.success('Un-Archived Successfully', 'Assesment System');
<<<<<<< HEAD
				//this.dtTrigger.next();
=======
				this.dtTrigger.unsubscribe();
				this.dtTrigger.next();
>>>>>>> 34ebcf4dec3134b287a93220a7a0549c6a879d7d
			});
		}
	}

	ngOnDestroy() {
		this.dtTrigger.unsubscribe();
	}

}
