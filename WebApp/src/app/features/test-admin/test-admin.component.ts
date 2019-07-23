import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { TestAdminService } from './shared/test-admin.service';
import { StorageService } from '../../services/storage.service';
@Component({
	selector: 'app-test-admin',
	templateUrl: './test-admin.component.html',
	styleUrls: ['./test-admin.component.css']
})
export class TestAdminComponent implements OnInit {
	Firstname: string;
	Lastname: string;
	email: string;
	count: any;
	profileUrl: any;
	show = true;

	constructor(private service: TestAdminService, private ngxService: NgxUiLoaderService, private storageService: StorageService) { }

	ngOnInit() {
		this.ngxService.startBackground('do-background-things');
		this.ngxService.stopBackground('do-background-things');
		this.ngxService.startLoader('loader-01');
		this.profileUrl = this.storageService.getStorage('imgurl');
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
