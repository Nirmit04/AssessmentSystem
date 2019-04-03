import { Component, Inject, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
@Component({
	selector: 'app-take-quiz',
	templateUrl: './take-quiz.component.html',
	styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {
	constructor(private service: EmployeeService, private router: Router,
		@Inject(DOCUMENT) private document: any) { }
	QuestionList: any[];
	noOfQues: number;
	bar: number;
	elem: any;
	seconds: number;
	minutes: number;
	hours: number;
	totaltime:number;
	ngOnInit() {
		this.service.qnProgress = 0;
		this.hours=this.service.hours;
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
		console.log(this.service.quesOfQuiz);
		this.noOfQues = this.QuestionList.length;
		this.service.size = this.noOfQues;
		console.log(this.noOfQues);
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
				if(this.minutes==0)	{
					this.hours = this.hours-1;
					this.minutes = 59;
					this.seconds = 60;
				}
				this.minutes=this.minutes-1;
				this.seconds = 60;	
			}
			this.seconds--;
		}, 1000);
	}
	Answer(QuestionId, choice) {
		this.bar = (this.service.qnProgress + 1) / this.noOfQues * 100;
		this.service.quesOfQuiz[this.service.qnProgress].answer = choice;
		this.service.qnProgress++;
		if (this.service.qnProgress == this.noOfQues) {
			console.log(this.service.hours*60*60 + this.service.minutes*60);
			console.log(this.hours*60*60 + this.minutes*60 + this.seconds);
			this.totaltime = (this.service.hours*60*60 + this.service.minutes*60)-(this.hours*60*60 + this.minutes*60 + this.seconds);
			console.log(this.totaltime);
			this.service.hours = parseInt((this.totaltime/3600).toPrecision(1));
			this.totaltime=this.totaltime%3600;
			this.service.minutes = parseInt((this.totaltime/60).toPrecision(1));
			this.totaltime=this.totaltime%60;
			this.service.seconds = this.totaltime;
			this.router.navigate(['/emp-dash/quiz/result']);
		}
	}
}
