import { Component, OnInit } from '@angular/core';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service';
import { Question } from '../shared/question.model';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

	Firstname: string;
	Lastname: string;
	email: string;
	Quizzes: any;
	Questions: any;
	Tags: any;
	profileUrl: any;
	show: boolean = true;

	constructor(private service: ContentCreatorServiceService, private ngxService: NgxUiLoaderService) { }

	ngOnInit() {
		this.ngxService.startBackground('do-background-things');
		this.ngxService.stopBackground('do-background-things');
		this.ngxService.startLoader('loader-01');
		this.profileUrl = localStorage.getItem('imgurl');
		this.loadUserDetails();
		this.loadUserProgress();
	}

	loadUserDetails() {
		this.service.getUserDetails().subscribe((res: any) => {
			this.Firstname = res.FirstName;
			this.Lastname = res.LastName;
			this.email = res.Email;
		});
	}

	loadUserProgress() {
		this.service.getUserProgress().subscribe((res: any) => {
			this.Quizzes = res.QuizzesCreated;
			this.Questions = res.QuestionsCreated;
			this.Tags = res.TagsCreated;
			this.show = false;
		});
	}

}
