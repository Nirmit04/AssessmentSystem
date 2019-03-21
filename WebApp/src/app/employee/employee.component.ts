import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { EmployeeService } from './shared/employee.service';

@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrls: [ './employee.component.css' ]
})
export class EmployeeComponent implements OnInit {
	constructor(private ngxService: NgxUiLoaderService, private service: EmployeeService) {}
	Firstname: String;
	Lastname: String;
	email: String;
	profileUrl: any;
	show: boolean = true;
	ngOnInit() {
		// this.ngxService.startBackground('do-background-things');
		// this.ngxService.stopBackground('do-background-things');
		// this.ngxService.startLoader('loader-01');
		this.profileUrl = localStorage.getItem('imgurl');
		this.loadUserDetails();
	}
	loadUserDetails() {
		this.service.getUserDetails().subscribe((res: any) => {
			console.log(res);
			this.Firstname = res.FirstName;
			this.Lastname = res.LastName;
			this.email = res.Email;
		});
	}
}
