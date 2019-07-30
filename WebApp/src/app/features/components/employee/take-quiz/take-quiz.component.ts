import { Component, Inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Router } from '@angular/router';
import { DOCUMENT, Time } from '@angular/common';
@Component({
	selector: 'app-take-quiz',
	templateUrl: './take-quiz.component.html',
	styleUrls: [ './take-quiz.component.scss' ]
})
export class TakeQuizComponent implements OnInit {
	public noOfQuestions: number;
	public progressBar: number;
	private browserElement: any;
	public seconds: number;
	public minutes: number;
	public hours: number;
	private totalTime: number;
	private TotalResponseTime: string;
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
	public options: number;
	public bar: number;
	public body: any;
	public time: string[];
	public time1: string[];
	constructor(private service: EmployeeService, private router: Router, @Inject(DOCUMENT) private document: any) {}

	ngOnInit() {
		this.service.qnProgress = 0;
		this.hours = this.service.hours;
		this.minutes = this.service.minutes;
		this.seconds = this.service.seconds;
		history.pushState(null, null, location.href);
		this.browserElement = document.documentElement;
		this.openFullscreen();
		window.onpopstate = function() {
			history.go(1);
		};
		document.oncontextmenu = preventDefaultAction;
		function preventDefaultAction(event) {
			event = event || window.event;
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
		}
		window.onload = function() {
			document.onkeydown = function(e) {
				if ((e.which || e.keyCode) == 116) {
					e.preventDefault();
					e.returnValue = false;
				}
				if ((e.which || e.keyCode) == 82) {
					e.preventDefault();
					e.returnValue = false;
				}
			};
		};
		this.noOfQuestions = this.service.noQuesOfQuiz;
		this.activeQuestion = [ false ];
		this.activeQuestion[0] = true;
		this.submitQuestion = [ false ];
		this.review = [ false ];
		if (this.service.statusMapping !== null) {
			for (let item of this.service.statusMapping) {
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
		this.openFullscreen();
	}

	onKeydown(event) {}
	openFullscreen() {
		if (this.browserElement.requestFullscreen) {
			this.browserElement.requestFullscreen();
		} else if (this.browserElement.mozRequestFullScreen) {
			this.browserElement.mozRequestFullScreen();
		} else if (this.browserElement.webkitRequestFullscreen) {
			this.browserElement.webkitRequestFullscreen();
		} else if (this.browserElement.msRequestFullscreen) {
			this.browserElement.msRequestFullscreen();
		}
	}

	private loadQues(index: number) {
		this.startTime = this.today.getHours() + ':' + this.today.getMinutes() + ':' + this.today.getSeconds();
		this.service.getQuestions(this.service.QuizId, index).subscribe((res: any) => {
			this.questions = res;
			this.options = this.questions.MarkedAnswer;
			this.responseTime = this.questions.ResponseTime;
			if (this.questions.ImageName != null) {
				this.questions.ImageName = 'https://80c4bf11.ngrok.io/Images/' + this.questions.ImageName;
			}
		});
		this.noOfQuestions = this.service.noQuesOfQuiz;
		this.service.size = this.noOfQuestions;
		this.startTimer();
	}

	private startTimer() {
		this.service.timer = setInterval(() => {
			if (this.hours == 0 && this.minutes == 0 && this.seconds == 0) {
				this.router.navigate([ '/emp-dash/quiz/result' ]);
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

	public answer(index: number, choice: number, options: string) {
		this.checkPrev = true;
		this.checkLast = true;
		this.today = new Date();
		this.time = this.startTime.split(':');
		this.time1 = this.questions.ResponseTime.split(':');
		this.responseTime =
			(parseInt(this.time1[0]) + (this.today.getHours() - parseInt(this.time[0]))).toString() +
			':' +
			(parseInt(this.time1[1]) + (this.today.getMinutes() - parseInt(this.time[1]))).toString() +
			':';
		if (+this.today.getSeconds < parseInt(this.time[2])) {
			this.responseTime =
				this.responseTime +
				parseInt(this.time1[2] + (60 - parseInt(this.time[2] + this.today.getSeconds()))).toString();
		} else {
			this.responseTime =
				this.responseTime +
				(parseInt(this.time1[2]) + (this.today.getSeconds() - parseInt(this.time[2]))).toString();
		}
		if (choice !== null) {
			const body = {
				QuizId: this.service.QuizId,
				UserId: localStorage.getItem('uid'),
				Index: this.service.qnProgress + 1,
				MarkedAnswer: choice,
				ResponseTime: this.responseTime,
				State: options
			};
			const subscription = this.service.postQuesOfQuiz(body).subscribe((res: any) => {});
			subscription.unsubscribe();
		}
		this.bar = (this.service.qnProgress + 1) / this.noOfQuestions * 100;
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
			this.Submit();
		}
		this.service.qnProgress++;
		if (this.service.qnProgress + 1 === this.noOfQuestions) {
			this.checkLast = false;
			this.loadQues(index + 1);
		} else if (this.service.qnProgress == this.noOfQuestions) {
			this.service.qnProgress = 0;
			this.loadQues(1);
			this.checkPrev = false;
			this.checkLast = true;
		} else {
			this.loadQues(index + 1);
		}
		this.activeQuestion = [ false ];
		this.activeQuestion[this.service.qnProgress] = true;
	}

	public Previous() {
		this.checkLast = true;
		this.service.qnProgress--;
		if (this.service.qnProgress == 0) {
			this.checkPrev = false;
		}
		this.activeQuestion = [ false ];
		this.activeQuestion[this.service.qnProgress] = true;
		this.loadQues(this.service.qnProgress + 1);
	}

	public Clear(Questionid: number) {
		this.submitQuestion[Questionid] = false;
		this.options = null;
		this.questions.MarkedAnswer = 0;
	}

	public Submit() {
		if (confirm('Do you want to submit the quiz?')) {
			this.totalTime =
				this.service.hours * 60 * 60 +
				this.service.minutes * 60 -
				(this.hours * 60 * 60 + this.minutes * 60 + this.seconds);
			this.service.hours = parseInt((this.totalTime / 3600).toPrecision(1));
			this.totalTime = this.totalTime % 3600;
			this.service.minutes = parseInt((this.totalTime / 60).toPrecision(1));
			this.totalTime = this.totalTime % 60;
			this.service.seconds = this.totalTime;
			this.TotalResponseTime =
				this.service.hours.toString() +
				':' +
				this.service.minutes.toString() +
				':' +
				this.service.seconds.toString();
			if (this.service.QuizScheduleId !== null) {
				this.body = {
					QuizId: this.service.QuizId,
					UserId: localStorage.getItem('uid'),
					QuizScheduleId: this.service.QuizScheduleId,
					TotalResponseTime: this.TotalResponseTime
				};
			} else {
				this.body = {
					QuizId: this.service.QuizId,
					UserId: localStorage.getItem('uid'),
					TotalResponseTime: this.TotalResponseTime
				};
			}
			this.service.postanswers(this.body).subscribe((res: any) => {
				if (this.service.QuizScheduleId !== null) {
					this.router.navigate([ '/emp-dash/non-mocks' ]);
				} else {
					//	console.log(res);
					this.router.navigate([ '/emp-dash/quiz/result' ]);
				}
			});
		}
	}

	public transformingIntoArray(n: number): any[] {
		return Array(n);
	}

	public navigate(index: number) {
		if (index == 0) {
			this.checkPrev = false;
		} else {
			this.checkPrev = true;
		}
		this.checkLast = true;
		this.activeQuestion = [ false ];
		this.service.qnProgress = index;
		if (this.service.qnProgress + 1 === this.noOfQuestions) {
			this.checkLast = false;
		}
		this.loadQues(index + 1);
		this.activeQuestion[index] = true;
	}

	public getStatus(index: number) {
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
	public next() {
		this.checkPrev = true;
		this.service.qnProgress++;
		this.activeQuestion = [ false ];
		this.activeQuestion[this.service.qnProgress] = true;
		this.loadQues(this.service.qnProgress + 1);
		if (this.service.qnProgress + 1 === this.noOfQuestions) {
			this.checkLast = false;
		}
	}
}
