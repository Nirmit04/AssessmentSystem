import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { loadQueryList } from '@angular/core/src/render3';
@Component({
  selector: 'app-view-answer',
  templateUrl: './view-answer.component.html',
  styleUrls: ['./view-answer.component.css']
})
export class ViewAnswerComponent implements OnInit {
  ques: any;
  constructor(private service: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    // this.ques = '';
    this.service.getQues(this.data).subscribe((res: any) => {
      //console.log(res);
      this.sda(res);
    });
  }
  sda(aa: any) {
    this.ques = aa;
    console.log(this.ques);
  }
}
