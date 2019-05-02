<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, Inject, OnInit, SystemJsNgModuleLoader } from '@angular/core';
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
import { NgForm } from '@angular/forms';
import { TestAdminService } from '../../shared/test-admin.service';
import { QuizModel } from '../../../content-creator/shared/quiz.model';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
<<<<<<< HEAD
import { AddUserComponent } from 'src/app/test-admin/retrieve-schedule/add-user/add-user.component';
import { ToastrService } from 'ngx-toastr';
=======
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { invalid } from '@angular/compiler/src/render3/view/util';


>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {
<<<<<<< HEAD
  q1 = "";
  q2 = "";
  q3 = "";
  btndisable = true;
  CCreatedBy = "";
  constructor(private service: TestAdminService, 
    private dialog: MatDialog,
    public toastr: ToastrService) { }
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
    this.service.postSchedule(form.value).subscribe((res:any)=>{
      console.log(res);
    });
    this.toastr.success('Inserted successfully');
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
=======
  date: string;
  q1 = '';
  q2 = '';
  q3 = '';
  stdate;
  btndisable = true;
  startDateValid = false;
  endDateValid = false;
  CCreatedBy = '';
  scheduleUrl = 'localhost:4200//emp-dash/take-quiz/';
  QuizList: QuizModel[];

  constructor(private service: TestAdminService, private dialog: MatDialog, public toastr: ToastrService, private datePipe: DatePipe, ) { }

  ngOnInit() {
    this.resetForm();
    this.date = this.datePipe.transform(new Date(), 'yyyy-MM-ddThh:mm');
    this.CCreatedBy = localStorage.getItem('uid');
    this.service.retriveAllQuizzes().subscribe((res) => {
      this.QuizList = res as QuizModel[];
    });
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.q1 = '';
    this.q2 = '';
    this.q3 = '';
  }

  sub(form: NgForm) {
    this.service.postSchedule(form.value).subscribe((res: any) => {
      this.toastr.success('Inserted successfully');
      this.resetForm(form);
    });
  }
  checkStartDate(date1: NgForm) {
    this.stdate = date1.value;
    this.date = (this.datePipe.transform(Date.now(), 'yyyy-MM-ddThh:mm'));
    if (date1.value < this.date) {
      this.startDateValid = true;
    } else {
      this.startDateValid = false;
    }
  }

  checkEndDate(date2: NgForm) {
    this.date = (this.datePipe.transform(Date.now(), 'yyyy-MM-ddThh:mm'));
    if (date2.value <= this.stdate || date2.value < this.date) {
      this.endDateValid = true;
    } else {
      this.endDateValid = false;
    }
  }

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
}
