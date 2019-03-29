import { Component, Inject,  OnInit } from '@angular/core';
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
	ngOnInit() {
		this.service.qnProgress = 0;
		this.service.seconds = 0;
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
				// if((e.charCode || e.which || e.key)=='esc') {
				// 	console.log('qewrfeadsjalwihfuaicnxnc ')
				// 	e.preventDefault();
				// 	e.returnValue = false;
				// }
			};
		};
		this.loadQues();
		this.openFullscreen();
	}
	onKeydown(event) {
		console.log('esc works');
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
			this.service.seconds++;
			localStorage.setItem('seconds', this.service.seconds.toString());
		}, 1000);
	}
	Answer(QuestionId, choice) {
		this.bar = (this.service.qnProgress + 1) / this.noOfQues * 100;
		this.service.quesOfQuiz[this.service.qnProgress].answer = choice;
		this.service.qnProgress++;
		if (this.service.qnProgress == this.noOfQues) {
			clearInterval(this.service.timer);
			this.router.navigate(['/emp-dash/quiz/result']);
		}
	}
}
