import { Component, OnInit } from '@angular/core';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service';
<<<<<<< HEAD
import { Question } from '../shared/question.model';
=======
import { NgxUiLoaderService } from 'ngx-ui-loader';
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
<<<<<<< HEAD
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
=======
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
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
		this.loadUserDetails();
		this.loadUserProgress();
	}

	loadUserDetails() {
		this.service.getUserDetails().subscribe((res: any) => {
<<<<<<< HEAD
			// console.log(res);
=======
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
			this.Firstname = res.FirstName;
			this.Lastname = res.LastName;
			this.email = res.Email;
		});
	}

	loadUserProgress() {
		this.service.getUserProgress().subscribe((res: any) => {
<<<<<<< HEAD
			console.log(res);
			this.Quizzes = res[0];
			this.Questions = res[1];
			this.Tags = res[2];
			// console.log(this.Questions);
		});
	}
=======
			this.Quizzes = res.QuizzesCreated;
			this.Questions = res.QuestionsCreated;
			this.Tags = res.TagsCreated;
			this.show = false;
		});
	}

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
}
