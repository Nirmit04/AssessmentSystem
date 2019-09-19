import { Component, Inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { StorageService } from '../../../../services/storage.service';
import { HttpService } from '../../../../core/http/http.service';
@Component({
	selector: 'app-take-quiz',
	templateUrl: './take-quiz.component.html'
})
export class TakeQuizComponent implements OnInit {
	public noOfQuestions: number;
	public progressBar: number;
	private browserElement: any;
	public seconds: number;
	public minutes: number;
	public hours: number;
	private totalTime: number;
	public checkLast: boolean = true;
	public checkPrev: boolean = false;
	public selectedOptions: number;
	private activeQuestion: boolean[];
	private submitQuestion: boolean[];
	private review: boolean[];
	private responseTime: string;
	private startTime: string;
	public questions: any;
	private today = new Date();

	constructor(
		private service: EmployeeService,
		private router: Router,
		private storageService: StorageService,
		private httpService: HttpService,
		@Inject(DOCUMENT) private document: any
	) { }

	public ngOnInit(): void {
		this.service.qnProgress = 0;
		this.hours = this.service.hours;
		this.minutes = this.service.minutes;
		this.seconds = this.service.seconds;
		// this.prohibiting();
		this.noOfQuestions = this.service.noOfQuestionsInQuiz;
		this.activeQuestion = [false];
		this.activeQuestion[0] = true;
		this.submitQuestion = [false];
		this.review = [false];
		if (this.service.statusMapping !== null) {
			for (const item of this.service.statusMapping) {
				if (item.State === 'save') {
					this.submitQuestion[item.Index - 1] = true;
				} else if (item.State === 'review') {
					this.review[item.Index - 1] = true;
				} else if (item.State === 'submit') {
					this.submitQuestion[item.Index - 1] = true;
				}
			}
		}
		this.loadQues(1);
		// 	this.openFullscreen();
	}



	private loadQues(questionIndex: number): void {
		this.startTime = this.today.getHours() + ':' + this.today.getMinutes() + ':' + this.today.getSeconds();
		this.httpService.getQuestions(this.service.quizId, questionIndex).subscribe((res: any) => {
			this.questions = res;
			this.selectedOptions = this.questions.MarkedAnswer;
			this.responseTime = this.questions.ResponseTime;
			if (this.questions.ImageName != null) {
				this.questions.ImageName = 'https://80c4bf11.ngrok.io/Images/' + this.questions.ImageName;
			}
		});
		this.noOfQuestions = this.service.noOfQuestionsInQuiz;
		this.service.size = this.noOfQuestions;
		this.startTimer();
	}

	private startTimer(): void {
		//TODO: Pulkit| timer to be set up instead of manually handling it - 20/04/2019
		this.service.timer = setInterval(() => {
			if (this.hours == 0 && this.minutes == 0 && this.seconds == 0) {
				this.router.navigate(['/emp-dash/quiz/result']);
			} else if (this.seconds == 0) {
				if (this.hours == 1) {
					this.hours = 0;
					this.minutes = 59;
					this.seconds = 60;
				}
				if (this.minutes == 0) {
					this.hours = this.hours - 1;
					this.minutes = 59;
					this.seconds = 60;
				}
				this.minutes = this.minutes - 1;
				this.seconds = 60;
			}
			this.seconds--;
		}, 1000);
	}

	public answer(questionIndex: number, choice: number, options: string): void {
		this.checkPrev = true;
		this.checkLast = true;
		this.today = new Date();
		this.generatingResponseTime();
		if (choice) {
			this.generatingAnswerBody(choice, options);
		}
		this.progressBar = (this.service.qnProgress + 1) / this.noOfQuestions * 100;
		if (options === 'save') {
			if (this.review[this.service.qnProgress]) {
				this.review[this.service.qnProgress] = false;
			}
			this.submitQuestion[this.service.qnProgress] = true;
		}
		if (options === 'review') {
			if (this.submitQuestion[this.service.qnProgress]) {
				this.submitQuestion[this.service.qnProgress] = false;
			}
			this.review[this.service.qnProgress] = true;
		}
		if (options === 'submit') {
			this.submit();
		}
		this.service.qnProgress++;
		this.loadNextQuestion(questionIndex);
	}

	private loadNextQuestion(questionIndex: number): void {
		if (this.service.qnProgress + 1 === this.noOfQuestions) {
			this.checkLast = false;
			this.loadQues(questionIndex + 1);
		} else if (this.service.qnProgress === this.noOfQuestions) {
			this.service.qnProgress = 0;
			this.loadQues(1);
			this.checkPrev = false;
			this.checkLast = true;
		} else {
			this.loadQues(questionIndex + 1);
		}
		this.activeQuestion = [false];
		this.activeQuestion[this.service.qnProgress] = true;
	}

	private generatingResponseTime(): void {
		const time = this.startTime.split(':');
		const time1 = this.questions.ResponseTime.split(':');
		this.responseTime =
			(parseInt(time1[0]) + (this.today.getHours() - parseInt(time[0]))).toString() +
			':' +
			(parseInt(time1[1]) + (this.today.getMinutes() - parseInt(time[1]))).toString() +
			':';
		if (+this.today.getSeconds < parseInt(time[2])) {
			this.responseTime =
				this.responseTime + parseInt(time1[2] + (60 - parseInt(time[2] + this.today.getSeconds()))).toString();
		} else {
			this.responseTime =
				this.responseTime + (parseInt(time1[2]) + (this.today.getSeconds() - parseInt(time[2]))).toString();
		}
	}

	private generatingAnswerBody(choice: number, options: string): void {
		const body = {
			QuizId: this.service.quizId,
			UserId: this.storageService.getStorage('uid'),
			Index: this.service.qnProgress + 1,
			MarkedAnswer: choice,
			ResponseTime: this.responseTime,
			State: options
		};
		this.httpService.postQuesOfQuiz(body).subscribe((res: any) => { });
	}

	public previous(): void {
		this.checkLast = true;
		this.service.qnProgress--;
		if (this.service.qnProgress === 0) {
			this.checkPrev = false;
		}
		this.activeQuestion = [false];
		this.activeQuestion[this.service.qnProgress] = true;
		this.loadQues(this.service.qnProgress + 1);
	}

	public clear(questionid: number): void {
		this.submitQuestion[questionid] = false;
		this.selectedOptions = null;
		this.questions.MarkedAnswer = 0;
	}

	public submit(): void {
		if (confirm('Do you want to submit the quiz?')) {
			let totalResponseTime = '';
			let body: any;
			totalResponseTime = this.generatingTotalResponseTime();
			if (this.service.quizScheduleId) {
				body = this.genratingBody('Scheduled', totalResponseTime);
			} else {
				body = this.genratingBody('Mock', totalResponseTime);
			}
			this.postAnswers(body);
		}
	}

	private generatingTotalResponseTime(): string {
		this.totalTime =
			this.service.hours * 60 * 60 +
			this.service.minutes * 60 -
			(this.hours * 60 * 60 + this.minutes * 60 + this.seconds);
		this.service.hours = parseInt((this.totalTime / 3600).toPrecision(1));
		this.totalTime = this.totalTime % 3600;
		this.service.minutes = parseInt((this.totalTime / 60).toPrecision(1));
		this.totalTime = this.totalTime % 60;
		this.service.seconds = this.totalTime;
		const totalResponseTime =
			this.service.hours.toString() +
			':' +
			this.service.minutes.toString() +
			':' +
			this.service.seconds.toString();
		return totalResponseTime;
	}

	private genratingBody(quizType: string, responseTime: string): object {
		let body: object;
		if (quizType === 'Scheduled') {
			body = {
				QuizId: this.service.quizId,
				UserId: this.storageService.getStorage('uid'),
				QuizScheduleId: this.service.quizScheduleId,
				TotalResponseTime: responseTime
			};
			return body;
		} else {
			body = {
				QuizId: this.service.quizId,
				UserId: this.storageService.getStorage('uid'),
				TotalResponseTime: responseTime
			};
			return body;
		}
	}

	private postAnswers(body: object): void {
		this.httpService.postanswers(body).subscribe((res: any) => {
			if (this.service.quizScheduleId !== null) {
				this.router.navigate(['/emp-dash/non-mocks']);
			} else {
				this.router.navigate(['/emp-dash/quiz/result']);
			}
		});
	}

	public transformingIntoArray(totalQuestions: number): any[] {
		return Array(totalQuestions);
	}

	public navigate(questionIndex: number): void {
		if (questionIndex === 0) {
			this.checkPrev = false;
		} else {
			this.checkPrev = true;
		}
		this.checkLast = true;
		this.activeQuestion = [false];
		this.service.qnProgress = questionIndex;
		if (this.service.qnProgress + 1 === this.noOfQuestions) {
			this.checkLast = false;
		}
		this.loadQues(questionIndex + 1);
		this.activeQuestion[questionIndex] = true;
	}

	public getStatus(index: number): string {
		for (let item = 0; item < this.submitQuestion.length; item++) {
			if (this.submitQuestion[index]) {
				return 'btn-success';
			}
			if (this.review[index]) {
				return 'btn-info';
			}
		}
		if (this.activeQuestion[index]) {
			return 'btn-warning';
		}
	}

	public next(): void {
		this.checkPrev = true;
		this.service.qnProgress++;
		this.activeQuestion = [false];
		this.activeQuestion[this.service.qnProgress] = true;
		this.loadQues(this.service.qnProgress + 1);
		if (this.service.qnProgress + 1 === this.noOfQuestions) {
			this.checkLast = false;
		}
	}
}
