import { Component, OnInit } from '@angular/core';
import { ContentCreatorService } from '../../services/content-creator-service.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { StorageService } from '../../../../services/storage.service';
import { HttpService } from '../../../../core/http/http.service';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styleUrls: ['./user-details.component.css']
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

	constructor(private ngxService: NgxUiLoaderService,
		private storageService: StorageService,
		private httpService: HttpService) { }

	public ngOnInit(): void {
		this.ngxService.startBackground('do-background-things');
		this.ngxService.stopBackground('do-background-things');
		this.ngxService.startLoader('loader-01');
		this.profileUrl = this.storageService.getStorage('imgurl');
		this.loadUserDetails();
		this.loadUserProgress();
	}

	private loadUserDetails(): void {
		const subscription = this.httpService.getUserDetails().subscribe((res: any) => {
			this.firstName = res.FirstName;
			this.lastName = res.LastName;
			this.email = res.Email;
		});
		subscription.unsubscribe();
	}

	private loadUserProgress(): void {
		const subscription = this.httpService.getContentCreatorProgress().subscribe((res: any) => {
			this.quizzes = res.QuizzesCreated;
			this.questions = res.QuestionsCreated;
			this.tags = res.TagsCreated;
			this.show = false;
		});
		subscription.unsubscribe();
	}

}
