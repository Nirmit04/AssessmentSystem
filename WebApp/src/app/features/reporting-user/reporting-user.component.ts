import { Component, OnInit } from '@angular/core';
import { ReportingUserService } from './services/reporting-user.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { StorageService } from '../../services/storage.service';

@Component({
	selector: 'app-reporting-user',
	templateUrl: './reporting-user.component.html',
	styleUrls: ['./reporting-user.component.css']
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
	constructor(private service: ReportingUserService, private ngxService: NgxUiLoaderService, private storageService: StorageService) { }

	public ngOnInit(): void {
		this.ngxService.startBackground('do-background-things');
		this.ngxService.stopBackground('do-background-things');
		this.ngxService.startLoader('loader-01');
		this.profileUrl = this.storageService.getStorage('imgurl');
		this.loadUserDetails();
		this.loadUserProgress();
	}
	private loadUserDetails(): void {
		this.service.getUserDetails().subscribe((res: any) => {
			this.firstName = res.FirstName;
			this.lastName = res.LastName;
			this.email = res.Email;
		});
	}
	private loadUserProgress(): void {
		this.service.getUserProgress().subscribe((res: any) => {
			this.totalQuiz = res.QuizCount;
			this.totalQues = res.QuestionCount;
			this.totalSub = res.SubjectCount;
			this.totalUser = res.UserCount;
		});
	}
}
