import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { EmployeeService } from '../../features/employee/services/employee.service';
import { StorageService } from '../../services/storage.service';
import { HttpService } from '../http/http.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	/* This class is used to register the user to the system if he is not already registered and capture user-specific details from the google sso.*/
	/* If a user enters the system by clicking onto the email link, then this class would redirect him to the particular test link.*/
	/* This class is used to validate the role of the user and redirect him to that particular dashboard.*/

	private rooturl: string;
	private role: string;
	private uid: string;
	private checkQId: string;
	private checkSId: string;
	private time: any[];


	constructor(private router: Router,
		private http: HttpClient,
		private service: EmployeeService,
		private storageService: StorageService,
		private httpService: HttpService) {
		this.rooturl = environment.apiURl;
		this.role = '';
		this.uid = '';
		this.checkQId = '';
		this.checkSId = '';
		this.time = null;
	}

	public ngOnInit(): void {
		/* retrieves the id`s from the storageService */
		this.checkQId = this.storageService.getStorage('key');
		this.checkSId = this.storageService.getStorage('key1');
		if (this.storageService.getStorage('id') !== null) {
			const body = {
				FirstName: this.storageService.getStorage('firstname'),
				LastName: this.storageService.getStorage('lastname'),
				Email: this.storageService.getStorage('email'),
				ImageURL: this.storageService.getStorage('imgurl'),
				GoogleId: this.storageService.getStorage('id')
			};
			this.http.post(this.rooturl + 'User/Register', body).subscribe(() => {
				this.http.get(this.rooturl + 'GetUserDetails?email=' + this.storageService.getStorage('email'))
					.subscribe((res1: any) => {
						this.uid = res1.Id;
						this.role = res1.Roles;
						this.storageService.setStorage('uid', this.uid);
						this.storageService.setStorage('role', this.role);
						if (this.checkQId === 'null' && this.checkSId === 'null') {
							this.redirectToDashboard(this.role[0]);
						}
						else if (this.checkQId === null && this.checkSId === null) {
							this.redirectToDashboard(this.role[0]);
						}
						else if (this.checkQId !== 'null' && this.checkSId !== 'null') {
							/* checks whether the user is allowed to enter that test or not */
							this.httpService.checkValidUser(+this.checkQId).subscribe(() => {
								/* if the user is valid for that ttest, then test-specific details are retrieved and the user is redirected to that particular quiz*/
								this.httpService.getQuesOfQuiz(+this.checkQId).subscribe((res: any) => {
									this.time = this.storageService.getStorage('time').split(":");
									this.service.hours = parseInt(this.time[0]);
									this.service.minutes = parseInt(this.time[1]);
									this.service.noOfQuestionsInQuiz = res.TotalQuestions;
									this.service.quizScheduleId = +this.checkSId;
									this.service.quizId = +this.checkQId;
									this.router.navigate(['/emp-dash/quiz/take-quiz']);
								});
							});
						} else {
							/* user is not allowed to enter that quiz */
							this.storageService.setStorage('errorCode', '405');
							this.storageService.setStorage('errorMsg', 'Not Allowed to enter the specified quiz.');
							this.router.navigate([ '/http-error' ]);
						}
					});
			});
		} else {
			this.router.navigate([ '/login' ]);
		}
	}


	private redirectToDashboard(role: string): void {
		/* it redirects the user to his particular dashboard, that is, the role to which he has been assigned */
		/* if the user is allocated more than one role, then he is redirected to the first role that exists in the database */
		
		if (role === 'Test-Administrator') {
			this.storageService.setStorage('currentRole', '//ta-dash');
			this.router.navigate(['/ta-dash']);
		}
		else if (role === 'Content-Creator') {
			this.storageService.setStorage('currentRole', '//cc-dash');
			this.router.navigate([ '/cc-dash' ]);
		} else if (role === 'Employee') {
			this.storageService.setStorage('currentRole', '//emp-dash');
			this.router.navigate([ '/emp-dash' ]);
		} else {
			this.storageService.setStorage('currentRole', '//ru-dash');
			this.router.navigate([ '/ru-dash' ]);
		}
	}
}
