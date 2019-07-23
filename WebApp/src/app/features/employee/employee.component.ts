import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { EmployeeService } from './services/employee.service';
import { StorageService } from '../../services/storage.service';
import { HttpService } from '../../core/http/http.service';

@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

	Firstname: string;
	Lastname: string;
	email: string;
	profileUrl: any;
	mocks: any;
	nmocks: any;
	accuracy: any;
	recentQuiz: any;
	show: boolean = true;

	constructor(private ngxService: NgxUiLoaderService,
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
	loadUserProgress(){
		this.httpService.getEmployeeProgress().subscribe((res:any) =>{
			this.mocks = res.Mock;
			this.nmocks = res.Scheduled;
			this.accuracy = res.Accuracy;
			this.recentQuiz = res.RecentActivity
			this.show = false;
		})
	}

}
