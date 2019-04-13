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
	role = "";
	uid = '';
	checkqid: string = null;
	checksid: string = null;

	ngOnInit() {
		this.checkqid = localStorage.getItem('key');
		this.checksid = localStorage.getItem('key1');

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
						this.role = res1.Roles;
						localStorage.setItem('uid', this.uid);
						localStorage.setItem('role', this.role);
						if (this.checkqid == 'null' && this.checksid == 'null') {
							this.redirecttodash(this.role[0]);
						}
						else if (this.checkqid == null && this.checksid == null) {
							this.redirecttodash(this.role[0]);
						}
						else if (this.checkqid != 'null' && this.checksid != 'null') {

							this.service.checkValidUser(+this.checkqid).subscribe((res: any) => {

								this.service.getQuesOfQuiz(+this.checkqid).subscribe((res: any) => {
									this.service.quesOfQuiz = res as any[];
									this.service.QuizScheduleId = +this.checksid;
									this.service.QuizId = +this.checkqid;
									this.router.navigate(['/emp-dash/quiz/take-quiz']);
								});
							})
						} else {
							localStorage.setItem('errorCode', '405');
							localStorage.setItem('errorMsg', 'Not Allowed to enter the specified quiz.');
							this.router.navigate(['/http-error']);
						}
					});
			});
		} else {
			this.router.navigate(['/login']);
		}
	}


	redirecttodash(role: string) {
		
		if (role === 'Test-Administrator') {
			localStorage.setItem('currentRole', '//ta-dash');
			this.router.navigate(['/ta-dash']);
		
		}
		else if (role === 'Content-Creator') {
			localStorage.setItem('currentRole', '//cc-dash');
			this.router.navigate(['/cc-dash']);
		}
		else if (role === 'Employee') {
			localStorage.setItem('currentRole', '//emp-dash');
			this.router.navigate(['/emp-dash']);
		}
		else {
			localStorage.setItem('currentRole', '//ru-dash');
			this.router.navigate(['/ru-dash']);
		}
	}

}
