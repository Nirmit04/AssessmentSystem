import { Component, Inject, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';
import { DOCUMENT, Time } from '@angular/common';
import * as $ from 'jquery';
@Component({
	selector: 'app-take-quiz',
	templateUrl: './take-quiz.component.html',
	styleUrls: ['./take-quiz.component.css']
})

export class TakeQuizComponent implements OnInit {
	noOfQues: number;
	bar: number;
	elem: any;
	seconds: number;
	minutes: number;
	hours: number;
	totaltime: number;
	checkLast = true;
	checkPrev = false;
	options: number;
	active: boolean[];
	submit: boolean[];
	review: boolean[];
	responseTime: string;
	startTime: string;
	time: string[];
	time1: string[];
	questions: any;
	answer: number = 0;
	today = new Date();
	TotalResponseTIme: string;
	constructor(private service: EmployeeService, private router: Router,
		@Inject(DOCUMENT) private document: any) { }

	ngOnInit() {
		this.service.qnProgress = 0;
		this.hours = this.service.hours;
		this.minutes = this.service.minutes;
		this.seconds = this.service.seconds;
		history.pushState(null, null, location.href);
		this.elem = document.documentElement;
		this.openFullscreen();
		window.onpopstate = function () {
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
		window.onload = function () {
			document.onkeydown = function (e) {
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
		this.noOfQues = this.service.noQuesOfQuiz;
		this.active = [false];
		this.active[0] = true;
		this.submit = [false];
		this.review = [false];
		if (this.service.statusMapping !== null) {
			for (let item of this.service.statusMapping) {
				if (item.State === 'save') {
					this.submit[item.Index - 1] = true;
				}
				else if (item.State === 'review') {
					this.review[item.Index - 1] = true;
				}
				else if (item.State === 'submit') {
					this.submit[item.Index - 1] = true;
				}
			}
		}
		this.loadQues(1);
		this.openFullscreen();
	}

	onKeydown(event) {
	}
	openFullscreen() {
		if (this.elem.requestFullscreen) {
			this.elem.requestFullscreen();
		} else if (this.elem.mozRequestFullScreen) {
			this.elem.mozRequestFullScreen();
		} else if (this.elem.webkitRequestFullscreen) {
			this.elem.webkitRequestFullscreen();
		} else if (this.elem.msRequestFullscreen) {
			this.elem.msRequestFullscreen();
		}
	}

	loadQues(index: number) {
		//this.active[index - 1] = true;
		this.startTime = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
		this.service.getQuestions(this.service.QuizId, index).subscribe((res: any) => {
			this.questions = res;
			this.options = this.questions.MarkedAnswer;
			this.responseTime = this.questions.ResponseTime;
			if (this.questions.ImageName != null) {
				this.questions.ImageName = "https://80c4bf11.ngrok.io/Images/" + this.questions.ImageName;
			}
		});
		this.noOfQues = this.service.noQuesOfQuiz;
		this.service.size = this.noOfQues;
		this.startTimer();
	}

	startTimer() {
		this.service.timer = setInterval(() => {
			if (this.hours == 0 && this.minutes == 0 && this.seconds == 0) {

				this.router.navigate(['/emp-dash/quiz/result']);
			}
			else if (this.seconds == 0) {
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

	Answer(index: number, choice: number, options: string) {
		this.checkPrev = true;
		this.checkLast = true;
		this.today = new Date();
		this.time = this.startTime.split(":");
		this.time1 = this.questions.ResponseTime.split(":");
		this.responseTime = (parseInt(this.time1[0]) + (this.today.getHours() - parseInt(this.time[0]))).toString() + ':' +
			(parseInt(this.time1[1]) + (this.today.getMinutes() - parseInt(this.time[1]))).toString() + ':';
		if (+(this.today.getSeconds) < parseInt(this.time[2])) {
			this.responseTime = this.responseTime + (parseInt(this.time1[2] + (60 - parseInt(this.time[2] + this.today.getSeconds())))).toString();
		}
		else {
			this.responseTime = this.responseTime + (parseInt(this.time1[2]) + (this.today.getSeconds() - parseInt(this.time[2]))).toString();
		}
		if (choice !== null) {
			this.answer = choice;
			const body = {
				QuizId: this.service.QuizId,
				UserId: localStorage.getItem('uid'),
				Index: this.service.qnProgress + 1,
				MarkedAnswer: choice,
				ResponseTime: this.responseTime,
				State: options,
			}
			this.service.postQuesOfQuiz(body).subscribe((res: any) => {
			});
		}
		this.bar = (this.service.qnProgress + 1) / this.noOfQues * 100;
		if (options === 'save') {
			if (this.review[this.service.qnProgress]) {
				this.review[this.service.qnProgress] = false;
			}
			this.submit[this.service.qnProgress] = true;
		}
		if (options === 'review') {
			if (this.submit[this.service.qnProgress]) {
				this.submit[this.service.qnProgress] = false;
			}
			this.review[this.service.qnProgress] = true;
		}
		if (options === 'submit') {
			this.Submit();
		}
		this.service.qnProgress++;
		if (this.service.qnProgress + 1 === this.noOfQues) {
			this.checkLast = false;
			this.loadQues(index + 1);
		}
		else if (this.service.qnProgress == this.noOfQues) {
			this.service.qnProgress = 0;
			this.loadQues(1);
			this.checkPrev = false;
			this.checkLast = true;
		}
		else {
			this.loadQues(index + 1);
		}
		this.active = [false];
		this.active[this.service.qnProgress] = true;
	}
	Previous() {
		this.checkLast = true;
		this.service.qnProgress--;
		if (this.service.qnProgress == 0) {
			this.checkPrev = false;
		}
		this.active = [false];
		this.active[this.service.qnProgress] = true;
		this.loadQues(this.service.qnProgress + 1);
	}
	Clear(Questionid: number) {
		this.submit[Questionid] = false;
		this.options = null;
		this.questions.MarkedAnswer = 0;
	}
	Submit() {
		if (confirm('Do you want to submit the quiz?')) {
			this.totaltime = (this.service.hours * 60 * 60 + this.service.minutes * 60) - (this.hours * 60 * 60 + this.minutes * 60 + this.seconds);
			this.service.hours = parseInt((this.totaltime / 3600).toPrecision(1));
			this.totaltime = this.totaltime % 3600;
			this.service.minutes = parseInt((this.totaltime / 60).toPrecision(1));
			this.totaltime = this.totaltime % 60;
			this.service.seconds = this.totaltime;
			this.TotalResponseTIme = this.service.hours.toString() + ':' + this.service.minutes.toString() + ':' + this.service.seconds.toString();
			const body = {
				QuizId: this.service.QuizId,
				UserId: localStorage.getItem('uid'),
				QuizScheduleId: this.service.QuizScheduleId,
				TotalResponseTime: this.TotalResponseTIme,
			}
			this.service.postanswers(body).subscribe((res: any) => {
				if (this.service.QuizScheduleId !== null) {
					this.router.navigate(['/emp-dash/non-mocks']);
				}
				else	{
					this.router.navigate(['/emp-dash/quiz/result']);
				}
			});
		}
	}
	ArrayOne(n: number): any[] {
		return Array(n);
	}
	Navigate(index: number) {
		if (index == 0) {
			this.checkPrev = false;
		}
		else {
			this.checkPrev = true;
		}
		this.checkLast = true;
		this.active = [false];
		this.service.qnProgress = index;
		if (this.service.qnProgress + 1 === this.noOfQues) {
			this.checkLast = false;
		}
		this.loadQues(index + 1);
		this.active[index] = true;
	}
	getStatus(index: number) {
		for (let item = 0; item < this.submit.length; item++) {
			if (this.submit[index]) {
				return 'btn-success';
			}
			if (this.review[index]) {
				return 'btn-info';
			}
		}
		if (this.active[index]) {
			return 'btn-warning';
		}
	}
	Next() {
		this.checkPrev = true;
		this.service.qnProgress++;
		this.active = [false];
		this.active[this.service.qnProgress] = true;
		this.loadQues(this.service.qnProgress + 1);
		if (this.service.qnProgress + 1 === this.noOfQues) {
			this.checkLast = false;
		}
	}
}
