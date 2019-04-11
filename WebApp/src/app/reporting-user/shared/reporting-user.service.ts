import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ReportingUserService {
	rootUrl = environment.apiURl;
	data: any = null;

	constructor(private http: HttpClient) { }

	getTagAnalytics() {
		return this.http.get(this.rootUrl + 'ReportingUser/AnalyticsByTag');
	}

	getAllUsers() {
		return this.http.get(this.rootUrl + 'User/GetUserAll');
	}

	getUserAnalytics(id: string) {
		return this.http.get(this.rootUrl + 'ReportingUser/AnalyticsByUser/' + id);
	}

	getUserDetails() {
		return this.http.get(this.rootUrl + 'GetUserDetails?email=' + localStorage.getItem('email'));
	}

	getAllQuizzes() {
		return this.http.get(this.rootUrl + '/Quiz/GetAllQuiz');
	}

	getQuizAnalysis(qid: string) {
		return this.http.get(this.rootUrl + 'ReportingUser/AnalyticsByQuiz/' + qid)
	}

	getUserProgress() {
		return this.http.get(this.rootUrl + '/ReportingUser/Stats');
	}

}



