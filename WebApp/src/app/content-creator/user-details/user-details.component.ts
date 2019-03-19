import { Component, OnInit } from '@angular/core';
import { ContentCreatorServiceService } from '../shared/content-creator-service.service';
import { Question } from '../shared/question.model';
import { NgxUiLoaderService } from 'ngx-ui-loader';

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
	profileUrl: any;
	constructor(private service: ContentCreatorServiceService, private ngxService: NgxUiLoaderService) {}
	show: boolean = true;
	ngOnInit() {
		this.ngxService.startBackground('do-background-things');
		// Do something here...
		this.ngxService.stopBackground('do-background-things');

		this.ngxService.startLoader('loader-01'); // start foreground spinner of the loader "loader-01" with 'default' taskId
		this.profileUrl = localStorage.getItem('imgurl');
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
			this.show = false;
			// console.log(this.show);

			// console.log(this.Questions);
		});
	}
}
