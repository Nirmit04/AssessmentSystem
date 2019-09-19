import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { StorageService } from '../../services/storage.service';
import { HttpService } from '../../core/http/http.service';

@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

	public firstName: string;
	public lastName: string;
	public email: string;
	public profileUrl: any;
	public mocks: any;
	public nonMocks: any;
	public accuracy: any;
	public recentQuiz: any;
	public show: boolean = true;

	constructor(private ngxLoaderService: NgxUiLoaderService,
		private storageService: StorageService,
		private httpService: HttpService) { }

	public ngOnInit(): void {
		this.ngxLoaderService.startBackground('do-background-things');
		this.ngxLoaderService.stopBackground('do-background-things');
		this.ngxLoaderService.startLoader('loader-01');
		this.profileUrl = this.storageService.getStorage('imgurl');
		this.loadUserDetails();
		this.loadUserProgress();
	}

	private loadUserDetails(): void {
		this.httpService.getUserDetails().subscribe((res: any) => {
			this.firstName = res.FirstName;
			this.lastName = res.LastName;
			this.email = res.Email;
		});
	}

	private loadUserProgress(): void {
		this.httpService.getEmployeeProgress().subscribe((res: any) => {
			this.mocks = res.Mock;
			this.nonMocks = res.Scheduled;
			this.accuracy = res.Accuracy;
			this.recentQuiz = res.RecentActivity
			this.show = false;
		});
	}

}
