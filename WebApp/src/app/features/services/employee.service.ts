import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { postReport } from '../models/postReport.model';
@Injectable({
	providedIn: 'root'
})
export class EmployeeService {
	rootURL = environment.apiURl;
	quizName: string;
	noQuesOfQuiz: number;
	quesOfQuiz: any[];
	hours: number;
	seconds: number;
	minutes: number;
	timer;
	qnProgress: number;
	size: number;
	QuizScheduleId: number;
	body: postReport;
	QuizId: number;
	data: any;
	correctAnswerCount = 0;
	statusMapping: any[];

	constructor(private http: HttpClient) {}

	displayTimeElapsed() {
		return (
			Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60)
		);
	}

	getNonMocks() {
		return this.http.get(this.rootURL + 'Employee/Scheduled/' + localStorage.getItem('uid'));
	}

	getQuesOfQuiz(QuizId: number) {
		return this.http.get(
			this.rootURL + 'Quiz/QuizQuestion?QuizId=' + QuizId + '&UserId=' + localStorage.getItem('uid')
		);
	}

	postQuesOfQuiz(body: any) {
		return this.http.put(this.rootURL + 'Quiz/SubmitQuestion', body);
	}

	getMockQuesOfQuiz(QuizId: number) {
		return this.http.get(
			this.rootURL + 'Quiz/QuizQuestion?QuizId=' + QuizId + '&UserId=' + localStorage.getItem('uid')
		);
	}

	checkValidUser(id: number) {
		return this.http.post(this.rootURL + 'UserSchedule/ValidQuizTaker/' + localStorage.getItem('uid'), id);
	}

	getQuestions(qid: number, index: number) {
		return this.http.get(
			this.rootURL +
				'Quiz/GetQuizQuestion?QuizId=' +
				qid +
				'&UserId=' +
				localStorage.getItem('uid') +
				'&Index=' +
				index
		);
	}

	postanswers(body: any) {
		return this.http.post(this.rootURL + 'Quiz/SubmitQuiz', body);
	}

	getUserDetails() {
		return this.http.get(this.rootURL + 'GetUserDetails?email=' + localStorage.getItem('email'));
	}

	getListOfMockQuizzes() {
		return this.http.get(this.rootURL + 'Quiz/MockQuiz');
	}

	getUserProgress() {
		return this.http.get(this.rootURL + '/Employee/Stats/' + localStorage.getItem('uid'));
	}

	getReportOfNonMockQuiz(id) {
		return this.http.get(this.rootURL + 'Report/Scheduled/' + id);
	}

	getReportOfMockQuiz(id) {
		return this.http.get(this.rootURL + 'Report/Mock/' + id);
	}

	getDetailedReport() {
		return this.http.get(this.rootURL + '/DetailedReport/' + localStorage.getItem('uid') + '/' + this.QuizId);
	}

	getQues(id: number) {
		return this.http.get(this.rootURL + 'Question/' + id);
	}

	getAnswers() {
		return this.http.get(this.rootURL + 'Quiz/SubmitMockQuiz/' + this.QuizId);
	}
}
