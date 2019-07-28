import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { EmployeeService } from '../../features/employee/services/employee.service';
import { StorageService } from '../../services/storage.service';
import { HttpService } from '../http/http.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private router: Router,
		private http: HttpClient,
		private service: EmployeeService,
		private storageService: StorageService,
		private httpService: HttpService) { }

	rooturl = environment.apiURl;
	role = '';
	uid = '';
	checkqid: string = null;
	checksid: string = null;
	time: any[];

	ngOnInit() {
		this.checkqid = this.storageService.getStorage('key');
		this.checksid = this.storageService.getStorage('key1');

		if (this.storageService.getStorage('id') != null) {
			const body = {
				FirstName: this.storageService.getStorage('firstname'),
				LastName: this.storageService.getStorage('lastname'),
				Email: this.storageService.getStorage('email'),
				ImageURL: this.storageService.getStorage('imgurl'),
				GoogleId: this.storageService.getStorage('id')
			};

			const subscription = this.http.post(this.rooturl + 'User/Register', body).subscribe(() => {
				const resubscription = this.http.get(this.rooturl + 'GetUserDetails?email=' + this.storageService.getStorage('email'))
					.subscribe((res1: any) => {
						this.uid = res1.Id;
						this.role = res1.Roles;
						this.storageService.setStorage('uid', this.uid);
						this.storageService.setStorage('role', this.role);
						if (this.checkqid === 'null' && this.checksid === 'null') {
							this.redirecttodash(this.role[0]);
						}
						else if (this.checkqid == null && this.checksid == null) {
							this.redirecttodash(this.role[0]);
						}
						else if (this.checkqid !== 'null' && this.checksid !== 'null') {

							this.httpService.checkValidUser(+this.checkqid).subscribe(() => {

								this.httpService.getQuesOfQuiz(+this.checkqid).subscribe((res: any) => {
									this.time = this.storageService.getStorage('time').split(":");
									this.service.hours = parseInt(this.time[0]);
									this.service.minutes = parseInt(this.time[1]);
									this.service.noOfQuestionsInQuiz = res.TotalQuestions;
									this.service.quizScheduleId = +this.checksid;
									this.service.quizId = +this.checkqid;
									this.router.navigate(['/emp-dash/quiz/take-quiz']);
								});
							})
						} else {
							this.storageService.setStorage('errorCode', '405');
							this.storageService.setStorage('errorMsg', 'Not Allowed to enter the specified quiz.');
							this.router.navigate(['/http-error']);
						}
					});
					resubscription.unsubscribe();
			});
			subscription.unsubscribe();
			
		} else {
			this.router.navigate(['/login']);
		}
	}


	redirecttodash(role: string) {

		if (role === 'Test-Administrator') {
			this.storageService.setStorage('currentRole', '//ta-dash');
			this.router.navigate(['/ta-dash']);

		}
		else if (role === 'Content-Creator') {
			this.storageService.setStorage('currentRole', '//cc-dash');
			this.router.navigate(['/cc-dash']);
		}
		else if (role === 'Employee') {
			this.storageService.setStorage('currentRole', '//emp-dash');
			this.router.navigate(['/emp-dash']);
		}
		else {
			this.storageService.setStorage('currentRole', '//ru-dash');
			this.router.navigate(['/ru-dash']);
		}
	}

}
