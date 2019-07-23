import { Component, OnInit } from '@angular/core';
import { ContentCreatorServiceService } from '../../services/content-creator-service.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { StorageService } from '../../../../services/storage.service';
import { HttpService } from '../../../../core/http/http.service';

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

	constructor(private service: ContentCreatorServiceService,
		private ngxService: NgxUiLoaderService,
		private storageService: StorageService,
		private httpService: HttpService) { }

	ngOnInit() {
		this.ngxService.startBackground('do-background-things');
		this.ngxService.stopBackground('do-background-things');
		this.ngxService.startLoader('loader-01');
		this.profileUrl = this.storageService.getStorage('imgurl');
		this.loadUserDetails();
		this.loadUserProgress();
	}

	loadUserDetails() {
		this.httpService.getUserDetails().subscribe((res: any) => {
			this.Firstname = res.FirstName;
			this.Lastname = res.LastName;
			this.email = res.Email;
		});
	}

	loadUserProgress() {
		this.httpService.getContentCreatorProgress().subscribe((res: any) => {
			this.Quizzes = res.QuizzesCreated;
			this.Questions = res.QuestionsCreated;
			this.Tags = res.TagsCreated;
			this.show = false;
		});
	}

}
