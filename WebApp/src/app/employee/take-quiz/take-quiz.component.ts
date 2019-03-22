import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-take-quiz',
	templateUrl: './take-quiz.component.html',
	styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {
	constructor(private service: EmployeeService, private router: Router) { }
	QuestionList: any[];
	noOfQues: number;
	bar: number;
	ngOnInit() {
		this.service.qnProgress = 0;
		this.service.seconds = 0;
		history.pushState(null, null, location.href);
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
			this.router.navigate(['/result']);
		}
	}
}
