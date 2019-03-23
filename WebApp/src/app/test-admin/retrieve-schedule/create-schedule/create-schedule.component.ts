import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestAdminService } from '../../shared/test-admin.service';
import { QuizModel } from '../../../content-creator/shared/quiz.model';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AddUserComponent } from 'src/app/test-admin/retrieve-schedule/add-user/add-user.component';
import { ToastrService } from 'ngx-toastr';
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
  scheduleUrl = 'localhost:4200//emp-dash/take-quiz/';
  constructor(private service: TestAdminService,
    private dialog: MatDialog,
    public toastr: ToastrService) { }
  QuizList: QuizModel[];
  ngOnInit() {
    this.resetForm();
    this.CCreatedBy = localStorage.getItem('uid');
    this.service.retriveAllQuizzes().subscribe((res) => {
      this.QuizList = res as QuizModel[];
      console.log(this.QuizList);

    }
    )
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.q1 = "";
    this.q2 = "";
    this.q3 = "";
  }

  sub(form: NgForm) {
    this.service.postSchedule(form.value).subscribe((res: any) => {
      this.toastr.success('Inserted successfully');
      this.resetForm(form);
    });
  }
  adduser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.disableClose = true;
    let dialogRef = this.dialog.open(AddUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log(this.service.quiztakerId);
      if (this.service.quiztakerId != null) {
        this.btndisable = false;
      }
    });
  }
}
