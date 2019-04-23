import { Component, Inject, OnInit, HostListener } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Router, RouterLinkWithHref } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { SafeHtml } from '@angular/platform-browser';
import { getRenderedText } from '@angular/core/src/render3';
import { environment } from '../../../environments/environment'
@Component({
	selector: 'app-take-quiz',
	templateUrl: './take-quiz.component.html',
	styleUrls: ['./take-quiz.component.css']
})

export class TakeQuizComponent implements OnInit {

	QuestionList: any[];
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

	constructor(private service: EmployeeService, private router: Router,
		@Inject(DOCUMENT) private document: any) { }

	ngOnInit() {
		this.service.qnProgress = 0;
		this.hours = this.service.hours;
		this.minutes = this.service.minutes;
		this.seconds = 0;
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
		this.active = [false];
		this.active[0] = true;
		this.submit = [false];
		this.review = [false];
		this.loadQues();
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

	loadQues() {
		this.QuestionList = this.service.quesOfQuiz;
		for (let item of this.QuestionList) {
			item.answer = 0;

			if (item.ImageName != null) {
				item.ImageName = "http://5bb3b45e.ngrok.io/Images/" + item.ImageName;
			}
		}
		this.noOfQues = this.QuestionList.length;
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

	Answer(QuestionId, choice, options: string) {
		this.checkPrev = true;
		if (choice != null) {
			this.service.quesOfQuiz[this.service.qnProgress].answer = choice;
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
		}
		else if (this.service.qnProgress == this.noOfQues) {
			this.service.qnProgress = 0;
		}
		this.options = this.service.quesOfQuiz[this.service.qnProgress].answer;
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
		this.options = this.service.quesOfQuiz[this.service.qnProgress].answer;
	}
	Clear(Questionid: number) {
		this.submit[Questionid] = false;
		this.options = null;
		this.service.quesOfQuiz[this.service.qnProgress].answer = 0;
	}
	Submit() {
		if (confirm('Do you want to submit the quiz?')) {
			this.totaltime = (this.service.hours * 60 * 60 + this.service.minutes * 60) - (this.hours * 60 * 60 + this.minutes * 60 + this.seconds);
			console.log(this.totaltime);
			this.service.hours = parseInt((this.totaltime / 3600).toPrecision(1));
			console.log(this.service.hours);
			this.totaltime = this.totaltime % 3600;
			this.service.minutes = parseInt((this.totaltime / 60).toPrecision(1));
			console.log(this.service.minutes);
			this.totaltime = this.totaltime % 60;
			this.service.seconds = this.totaltime;
			console.log(this.service.seconds);
			this.router.navigate(['/emp-dash/quiz/result']);
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
		this.options = this.service.quesOfQuiz[this.service.qnProgress].answer;
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
		this.service.quesOfQuiz[this.service.qnProgress].answer = 0;
		this.service.qnProgress++;
		this.active = [false];
		this.active[this.service.qnProgress] = true;
		this.options = this.service.quesOfQuiz[this.service.qnProgress].answer;
		if (this.service.qnProgress + 1 === this.noOfQues) {
			this.checkLast = false;
		}
	}
}
