import { Component, OnInit } from '@angular/core';
import { ReportingUserService } from './shared/reporting-user.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { StorageService } from '../../services/storage.service';

@Component({
	selector: 'app-reporting-user',
	templateUrl: './reporting-user.component.html',
	styleUrls: ['./reporting-user.component.css']
})
export class ReportingUserComponent implements OnInit {
	Firstname: string;
	Lastname: string;
	email: string;
	Quizzes: any;
	Questions: any;
	Tags: any;
	profileUrl: any;
	TotalQuiz: any;
	TotalQues: any;
	TotalUser: any;
	TotalSub: any;
	show = true;
	constructor(private service: ReportingUserService, private ngxService: NgxUiLoaderService, private storageService: StorageService) { }

	ngOnInit() {
		this.ngxService.startBackground('do-background-things');
		this.ngxService.stopBackground('do-background-things');
		this.ngxService.startLoader('loader-01');
		this.profileUrl = this.storageService.getStorage('imgurl');
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
			this.TotalQuiz = res.QuizCount;
			this.TotalQues = res.QuestionCount;
			this.TotalSub = res.SubjectCount;
			this.TotalUser = res.UserCount;
		});
	}
}
