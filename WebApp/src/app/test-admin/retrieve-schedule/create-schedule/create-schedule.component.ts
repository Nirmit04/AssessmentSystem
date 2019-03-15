import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestAdminService } from '../../shared/test-admin.service';
import { QuizModel } from '../../../content-creator/shared/quiz.model';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AddUserComponent } from 'src/app/test-admin/retrieve-schedule/add-user/add-user.component';
@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {
  q1 = "";
  q2 = "";
  q3 = "";
  btndisable = true;
  CCreatedBy = "";
  constructor(private service: TestAdminService, private dialog: MatDialog) { }
  QuizList: QuizModel[];
  ngOnInit() {
    this.CCreatedBy = localStorage.getItem('uid');
    this.service.retriveAllQuizzes().subscribe((res) => {
      // console.log(res);
      this.QuizList = res as QuizModel[];
      console.log(this.QuizList);
      this.q1 = "";
      this.q2 = "";
      this.q3 = "";
    }
    )
  }
  sub(form: NgForm) {
    // console.log(form.value);
    this.service.postSchedule(form.value);
  }
  adduser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.disableClose = true;
    let dialogRef = this.dialog.open(AddUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      //console.log(this.service.quiztakerId);
      if (this.service.quiztakerId != null) {
        this.btndisable = false;
      }
    });
  }
}
