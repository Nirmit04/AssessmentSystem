import { Component, OnInit } from '@angular/core';
import { ContentCreatorServiceService } from '../../../services/content-creator-service.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styleUrls: [ './user-details.component.scss' ]
})
export class UserDetailsComponent implements OnInit {
	public firstName: string;
	public lastName: string;
	public email: string;
	public quizzes: any;
	public questions: any;
	public tags: any;
	public profileUrl: any;
	public show: boolean = true;

	constructor(private service: ContentCreatorServiceService, private ngxService: NgxUiLoaderService) {}

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
			this.firstName = res.FirstName;
			this.lastName = res.LastName;
			this.email = res.Email;
		});
	}

	loadUserProgress() {
		this.service.getUserProgress().subscribe((res: any) => {
			this.quizzes = res.QuizzesCreated;
			this.questions = res.QuestionsCreated;
			this.tags = res.TagsCreated;
			this.show = false;
		});
	}
}
