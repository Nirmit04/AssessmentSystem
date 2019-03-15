import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	constructor(private router: Router, private http: HttpClient) {}
	rooturl = 'http://c3e9de58.ngrok.io/api/';
	role = '';
	uid = '';
	ngOnInit() {
		if (localStorage.getItem('id') != null) {
			const body = {
				FirstName: localStorage.getItem('firstname'),
				LastName: localStorage.getItem('lastname'),
				Email: localStorage.getItem('email'),
				ImgURL: localStorage.getItem('imgurl'),
				GoogleId: localStorage.getItem('id')
			};
			// console.log(body);
			this.http.post(this.rooturl + 'User/Register', body).subscribe((res: any) => {
				// console.log(res);
				this.http
					.get(this.rooturl + 'GetUserDetails?email=' + localStorage.getItem('email'))
					.subscribe((res1: any) => {
						console.log(res1);
						this.uid = res1.Id;
						this.role = res1.Roles[0].RoleId;
						console.log(this.uid);
						console.log(this.role);
						localStorage.setItem('uid', this.uid);
						localStorage.setItem('role', this.role);
						this.redirecttodash(this.role);
					});
				// this.role = res.role;
				// this.uid = res.Id
				// localStorage.setItem('userId', this.uid);
				// localStorage.setItem('role', this.role);
				// this.redirecttodash(this.role);
			});
		} else {
			console.log('sigin first');
			this.router.navigate([ '/login' ]);
		}
	}
	redirecttodash(role: string) {
		if (this.role === '2') {
			console.log('i am content creator');
			this.router.navigate([ '/cc-dash' ]);
		}
	}
}
