import { Component, OnInit } from '@angular/core';
import { ReportingUserService } from './shared/reporting-user.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
	selector: 'app-reporting-user',
	templateUrl: './reporting-user.component.html',
	styleUrls: [ './reporting-user.component.css' ]
})
export class ReportingUserComponent implements OnInit {
	Firstname: String;
	Lastname: String;
	email: String;
	Quizzes: any;
	Questions: any;
	Tags: any;
	profileUrl: any;
	TotalQuiz: any;
	TotalQues: any;
	TotalUser: any;
	TotalSub: any;
	show: boolean = true;
	constructor(private service: ReportingUserService, private ngxService: NgxUiLoaderService) {}

	ngOnInit() {
		this.ngxService.startBackground('do-background-things');
		this.ngxService.stopBackground('do-background-things');
		this.ngxService.startLoader('loader-01');
		this.profileUrl = localStorage.getItem('imgurl');
		console.log(this.profileUrl);
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
	loadUserProgress(){
		this.service.getUserProgress().subscribe((res:any) => {
			console.log(res);
			this.TotalQuiz = res.QuizCount;
			this.TotalQues = res.QuestionCount;
			this.TotalSub = res.SubjectCount;
			this.TotalUser = res.UserCount;
		})
	}
}
