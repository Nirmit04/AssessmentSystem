import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
	providedIn: 'root'
})
export class EmployeeService {
	rootURL = environment.apiURl;
	quesOfQuiz: any[];
	seconds: number;
	timer;
	size: number;
	qnProgress: number;
	constructor(private http: HttpClient) {}
	displayTimeElapsed() {
		return (
			Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60)
		);
	}
	getNonMocks() {
		return this.http.get(this.rootURL + 'Employee/NonMock/' + localStorage.getItem('uid'));
	}
	getQuesOfQuiz(QuizId: number) {
		return this.http.get(this.rootURL + 'Quiz/QuizQuestion/' + QuizId);
	}
	getUserDetails() {
		console.log(localStorage.getItem('email'));
		return this.http.get(this.rootURL + 'GetUserDetails?email=' + localStorage.getItem('email'));
	}
}
