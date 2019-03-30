import { Component, Inject, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { postReport } from '../shared/postReport.model';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private service: EmployeeService,
    private router: Router,
    @Inject(DOCUMENT) private document: any) { }
  timeTaken: any;
  dispCard = false;
  QuesWithAns: any[];
  correct: any[];
  ngOnInit() {
    this.correct = [];
    if (this.service.QuizScheduleId == null) {
      this.service.getAnswers().subscribe((res: any) => {
        this.QuesWithAns = res as any[];
        // console.log(this.QuesWithAns);
        this.service.correctAnswerCount = 0;
        this.service.quesOfQuiz.forEach((e, i) => {
          if (e.answer == this.QuesWithAns[i].Answer) {
            this.service.correctAnswerCount++;
          }
          this.correct[i] = this.QuesWithAns[i].Answer;
        });
        // console.log(this.service.quesOfQuiz);
        // console.log(this.correct);
        // console.log(this.service.correctAnswerCount);
        this.dispCard = true;
      })

    }

    var body = this.service.quesOfQuiz.map(x => x.QuestionId);
    var body1 = this.service.quesOfQuiz.map(x => x.answer);
    var dict = [];
    var x = body.length;
    this.closeFullscreen();
    for (let i = 0; i < x; i++) {
      dict.push(
        {
          QuestionId: body[i],
          MarkedAnswer: body1[i]
        }
      )
    }
    this.timeTaken = this.service.displayTimeElapsed();

    this.service.body = {
      QuesAnswers: dict,
      TimeTaken: this.timeTaken
    }

    this.service.postanswers().subscribe(res => {
      // this.dispCard = true;
      if (this.service.QuizScheduleId != null) {
        this.service.QuizScheduleId = null;
        this.service.quesOfQuiz = null;
        this.service.correctAnswerCount = null;
        this.service.QuizId = null;
        this.service.body = null;
        this.service.qnProgress = null;
        this.dispCard = false;
        this.router.navigate([('/emp-dash')]);
      }
    });



  }
  closeFullscreen() {

    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullscreen) {
      this.document.mozCancelFullscreen();
    } else if (this.document.webkitExitFullscreen) {
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      this.document.msExitFullscreen();
    }
  }
  goToHome() {
    this.service.quesOfQuiz = null;
    this.service.correctAnswerCount = null;
    this.service.QuizId = null;
    this.service.body = null;
    this.service.qnProgress = null;
    this.dispCard = false;
    this.router.navigate(['/emp-dash']);
  }

}
