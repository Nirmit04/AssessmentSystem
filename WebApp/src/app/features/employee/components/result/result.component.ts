import { Component, Inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { HttpService } from '../../../../core/http/http.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  private timeTaken: any;
  public displayCard: boolean = false;
  private questionsWithAnswer: any[];
  public correct: any[];

  constructor(private service: EmployeeService,
    private router: Router,
    private httpService: HttpService,
    @Inject(DOCUMENT) private document: any) { }

  public ngOnInit(): void {
    this.correct = [];
    if (this.service.quizScheduleId === null) {
      this.httpService.getAnswers().subscribe((res: any) => {
        this.questionsWithAnswer = res as any[];
        this.service.correctAnswerCount = 0;
        this.service.questionsOfQuiz.forEach((question, index) => {
          if (question.answer === this.questionsWithAnswer[index].Answer) {
            this.service.correctAnswerCount++;
          }
          this.correct[index] = this.questionsWithAnswer[index].Answer;
        });
        this.displayCard = true;
      });
    }

    const body = this.service.questionsOfQuiz.map(x => x.QuestionId);
    const body1 = this.service.questionsOfQuiz.map(x => x.answer);
    var dict = [];
    const bodyLength = body.length;
    this.closeFullscreen();
    for (let i = 0; i < bodyLength; i++) {
      dict.push(
        {
          QuestionId: body[i],
          MarkedAnswer: body1[i]
        }
      )
    }
    this.timeTaken = this.service.hours.toString() + ':' + this.service.minutes.toString() + ':' + this.service.seconds.toString();
    this.service.body = {
      QuesAnswers: dict,
      TimeTaken: this.timeTaken
    }
  }

  private closeFullscreen(): void {
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

  public goToHome(): void {
    this.service.questionsOfQuiz = null;
    this.service.correctAnswerCount = null;
    this.service.quizId = null;
    this.service.body = null;
    this.service.qnProgress = null;
    this.displayCard = false;
    this.router.navigate(['/emp-dash']);
  }

}
