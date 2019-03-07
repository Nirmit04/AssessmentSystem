import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Question } from '../shared/question.model';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-retrieve-question-bank',
	templateUrl: './retrieve-question-bank.component.html',
	styleUrls: [ './retrieve-question-bank.component.css' ]
})
export class RetrieveQuestionBankComponent implements OnInit {
	questionList: any;
	searchText = '';
	difficultyLevel = '';

	constructor(private service: ContentCreatorServiceService, private toastr: ToastrService) {}

	ngOnInit() {
		this.refreshList();
	}

	refreshList() {
		console.log('Hello');
		this.service.getQuestionList().subscribe((res: any) => {
			console.log(res);
			this.questionList = res;
			this.hello();
		});
	}
	filter(item: Question) {
		return (
			item.QuestionStatement.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1 ||
			item.SubjectName.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
		);
	}

	filterSubject(event: any) {
		console.log('helo');
		this.difficultyLevel = event.target.value;
		console.log(this.difficultyLevel);
	}

	hello() {
		console.log(this.questionList);
		console.log(this.questionList.Question_ID);
		if (this.questionList.DifficultyLevel === '1') {
			console.log('mandeep chutiye');
			this.questionList.DifficultyLevel = 'Beginner';
		} else if (this.questionList.DifficultyLevel === '2') {
			this.questionList.DifficultyLevel = 'Intermediate';
		} else if (this.questionList.DifficultyLevel === '3') {
			this.questionList.DifficultyLevel = 'Advanced';
		}
	}

	onOrderDelete(id: number) {
		if (confirm('Are you sure you want to delete this record')) {
			this.service.deleteOrder(id).subscribe((res: any) => {
				this.refreshList();
				this.toastr.success('Deleted Successfully', 'Assesment System');
			});
		}
	}
}
