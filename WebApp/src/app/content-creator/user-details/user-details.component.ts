import { Component, OnInit } from '@angular/core';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service';
import { Question } from '../shared/question.model';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styleUrls: [ './user-details.component.css' ]
})
export class UserDetailsComponent implements OnInit {
	Firstname: String;
	Lastname: String;
	email: String;
	Quizzes: any;
	Questions: any;
	Tags: any;
	constructor(private service: ContentCreatorServiceService) {}

	ngOnInit() {
		this.loadUserDetails();
		this.loadUserProgress();
	}

	loadUserDetails() {
		this.service.getUserDetails().subscribe((res: any) => {
			// console.log(res);
			this.Firstname = res.FirstName;
			this.Lastname = res.LastName;
			this.email = res.Email;
		});
	}

	loadUserProgress() {
		this.service.getUserProgress().subscribe((res: any) => {
			console.log(res);
			this.Quizzes = res[0];
			this.Questions = res[1];
			this.Tags = res[2];
			// console.log(this.Questions);
		});
	}
}
