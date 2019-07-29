import { Component, OnInit } from '@angular/core';
import { ReportingUserService } from './shared/reporting-user.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
	selector: 'app-reporting-user',
	templateUrl: './reporting-user.component.html',
	styleUrls: [ './reporting-user.component.scss' ]
})
export class ReportingUserComponent implements OnInit {
	public firstName: string;
	public lastName: string;
	public email: string;
	public profileUrl: any;
	public totalQuiz: any;
	public totalQues: any;
	public totalUser: any;
	public totalSub: any;
	constructor(private service: ReportingUserService, private ngxService: NgxUiLoaderService) {}

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
			this.totalQuiz = res.QuizCount;
			this.totalQues = res.QuestionCount;
			this.totalSub = res.SubjectCount;
			this.totalUser = res.UserCount;
		});
	}
}
