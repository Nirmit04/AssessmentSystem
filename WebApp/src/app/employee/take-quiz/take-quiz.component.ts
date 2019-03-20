import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {

  constructor(private service: EmployeeService,
    private router: Router) { }
  QuestionList: any[];
  noOfQues: number;
  ngOnInit() {
    this.service.qnProgress = 0;
    this.service.seconds = 0;
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
    }, 1000);
  }
  Answer(QuestionId, choice) {
    this.service.quesOfQuiz[this.service.qnProgress].answer = choice;
    this.service.qnProgress++;
    // console.log(QuestionId);
    if (this.service.qnProgress == this.noOfQues) {
      clearInterval(this.service.timer);
      this.router.navigate(['/result']);
    }
  }
}
