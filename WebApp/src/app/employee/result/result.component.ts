import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Answer } from '../shared/answer.model';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private service: EmployeeService) { }
  ngOnInit() {
    // var result: Answer[] = [];
    // for (let i = 1; i <= 10; i++) {
    //   result[i].QuestionId =
    //   result[i].Choice = 10;
    // }
    // console.log(result);
    // var body = this.service.quesOfQuiz.map(x => x.QuestionId);
    // var body1 = this.service.quesOfQuiz.map(x => x.answer);
    // var body3 = {
    //   QuestionIds: body,
    //   MarkedAnswers: body1
    // }
    // console.log(body3);
  }

}
