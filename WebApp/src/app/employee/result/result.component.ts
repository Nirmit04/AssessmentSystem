import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { postReport } from '../shared/postReport.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private service: EmployeeService,
    private router: Router) { }
  timeTaken: any;
  dispCard = false;
  ngOnInit() {
    var body = this.service.quesOfQuiz.map(x => x.QuestionId);
    var body1 = this.service.quesOfQuiz.map(x => x.answer);
    var dict = [];
    var x = body.length;
    for (let i = 0; i < x; i++) {
      dict.push(
        {
          QuestionId: body[i],
          MarkedAnswers: body1[i]
        }
      )
    }
    this.timeTaken = this.service.displayTimeElapsed();

    this.service.body = {
      QuesAnswers: dict,
      TimeTaken: this.timeTaken
    }
        this.service.postanswers().subscribe(res => {
      setInterval(() => {
        this.router.navigate([('/emp-dash')]);
      }, 3000);
    });
  }

}
