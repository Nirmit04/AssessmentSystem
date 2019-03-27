import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeeService } from '../employee/shared/employee.service';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	constructor(private router: Router, private http: HttpClient, private service: EmployeeService) { }
	rooturl = environment.apiURl;
	role = '';
	uid = '';
	checkqid: string = localStorage.getItem('key');
	checksid: string = localStorage.getItem('key1');
	ngOnInit() {
		if (localStorage.getItem('id') != null) {
			const body = {
				FirstName: localStorage.getItem('firstname'),
				LastName: localStorage.getItem('lastname'),
				Email: localStorage.getItem('email'),
				ImageURL: localStorage.getItem('imgurl'),
				GoogleId: localStorage.getItem('id')
			};
			this.http.post(this.rooturl + 'User/Register', body).subscribe((res: any) => {
				this.http.get(this.rooturl + 'GetUserDetails?email=' + localStorage.getItem('email'))
					.subscribe((res1: any) => {
						this.uid = res1.Id;
						this.role = res1.Roles[0].RoleId;
						localStorage.setItem('uid', this.uid);
						localStorage.setItem('role', this.role);
						console.log(this.checkqid);
						if (this.checkqid == 'null' && this.checksid == 'null') {
							this.redirecttodash(this.role);	}
						else if (this.checkqid != 'null' && this.checksid != 'null') {
							console.log("hii");
							this.service.checkValidUser(+this.checkqid).subscribe((res: any) => {
								console.log(res);
								this.service.getQuesOfQuiz(+this.checkqid).subscribe((res: any) => {
									this.service.quesOfQuiz = res as any[];
									this.service.QuizScheduleId = +this.checksid;
									this.service.QuizId = +this.checkqid;
									this.router.navigate(['/emp-dash/quiz/take-quiz']);
								});
							})
						} else {
							localStorage.setItem('errorCode', '405');
							localStorage.setItem('errorMsg', 'Not Allowed to entert he specified quiz.');
							this.router.navigate(['/http-error']);
						}
					});
				console.log(res);
			});
		} else {
			this.router.navigate(['/login']);
		}
	}
	redirecttodash(role: string) {
		if (this.role === '2') {
			console.log('i am content creator');
			this.router.navigate(['/cc-dash']);
		}
	}
}
