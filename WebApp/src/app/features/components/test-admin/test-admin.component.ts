import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { TestAdminService } from '../../services/test-admin.service';
@Component({
	selector: 'app-test-admin',
	templateUrl: './test-admin.component.html',
	styleUrls: [ './test-admin.component.scss' ]
})
export class TestAdminComponent implements OnInit {
	Firstname: string;
	Lastname: string;
	email: string;
	count: any;
	profileUrl: any;
	show = true;

	constructor(private service: TestAdminService, private ngxService: NgxUiLoaderService) {}

	ngOnInit() {
		this.ngxService.startBackground('do-background-things');
		this.ngxService.stopBackground('do-background-things');
		this.ngxService.startLoader('loader-01');
		this.profileUrl = localStorage.getItem('imgurl');
		this.loadUserDetails();
		this.loadcount();
	}

	loadUserDetails() {
		this.service.getUserDetails().subscribe((res: any) => {
			this.Firstname = res.FirstName;
			this.Lastname = res.LastName;
			this.email = res.Email;
		});
	}

	loadcount() {
		this.service.getschedulecount().subscribe((res: any) => {
			this.count = res;
			this.show = false;
		});
	}
}
