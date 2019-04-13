import { Component, Inject, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestAdminService } from '../../shared/test-admin.service';
import { QuizModel } from '../../../content-creator/shared/quiz.model';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { invalid } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {
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
    console.log(this.date);
    if (date1.value < this.date) {
      console.log('invalid')
      this.startDateValid = true;
    } else {
      this.startDateValid = false;
      console.log('valid');
    }
  }

  checkEndDate(date2: NgForm) {
    this.date = (this.datePipe.transform(Date.now(), 'yyyy-MM-ddThh:mm'));
    console.log(this.date);
    if (date2.value <= this.stdate || date2.value < this.date) {
      console.log('invalid');
      this.endDateValid = true;
    } else {
      this.endDateValid = false;
      console.log('valid');
    }
  }

}
