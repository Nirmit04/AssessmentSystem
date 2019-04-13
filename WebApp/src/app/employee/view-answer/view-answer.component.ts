import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Question } from '../../content-creator/shared/question.model';
@Component({
  selector: 'app-view-answer',
  templateUrl: './view-answer.component.html',
  styleUrls: ['./view-answer.component.css']
})
export class ViewAnswerComponent implements OnInit {
  ques: Question;
  flop1 = false;
  flop2 = false;
  flop3 = false;
  flop4 = false;
  zlop1 = false;
  zlop2 = false;
  zlop3 = false;
  zlop4 = false;

  constructor(private service: EmployeeService,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.sda();
  }

  sda() {
    this.service.getQues(this.data.id).subscribe((res: any) => {
      this.ques = res as Question;
      if (this.ques.Answer === 1) {
        this.flop1 = true;
      } else if (this.ques.Answer === 2) {
        this.flop2 = true;
      } else if (this.ques.Answer === 3) {
        this.flop3 = true;
      } else if (this.ques.Answer === 4) {
        this.flop4 = true;
      }
      if (this.data.markedanswer === 1) {
        this.zlop1 = true;
      } else if (this.data.markedanswer === 2) {
        this.zlop2 = true;
      } else if (this.data.markedanswer === 3) {
        this.zlop3 = true;
      } else if (this.data.markedanswer === 4) {
        this.zlop4 = true;
      }
    });
  }

}
