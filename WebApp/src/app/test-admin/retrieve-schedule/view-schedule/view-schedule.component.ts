import { Component, OnInit, Inject } from '@angular/core';
import { TestAdminService } from '../../shared/test-admin.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material';
import { UpdateQuestionComponent } from 'src/app/content-creator/update-question/update-question.component';
import { ToastrService } from 'ngx-toastr';
import { Schedule } from '../../shared/schedule.model';
import { NgForm } from '@angular/forms';
import { AddUserComponent } from '../add-user/add-user.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class ViewScheduleComponent implements OnInit {
  public Schedule: Schedule[];
  public CCreatedBy = '';
  date: string;
  bool: boolean;
  label: string;
  usersList: any[];
  startDateValid = false;
  endDateValid = false;
  q1;
  stdate;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<UpdateQuestionComponent>,
    public toastr: ToastrService,
    private service: TestAdminService,
    public dialog: MatDialog,
    private datePipe: DatePipe) { }

  ngOnInit() {
    //s\ this.usersList[0].QuizTaken = "false";
    this.date = this.datePipe.transform(new Date(), 'yyyy-MM-ddThh:mm');
    this.bool = this.service.readonlyStatus;
    if (this.bool === true) {
      this.label = "View Schedule";
      this.q1 = this.service.formdata.StartDateTime;
    } else {
      this.label = "Edit Schedule";
    }
    this.CCreatedBy = localStorage.getItem('uid');
    this.loadExistingUsers(+this.data);
  }

  loadExistingUsers(scheduleQuizId: number) {
    console.log(scheduleQuizId);
    this.service.getScheduleQuizUsers(scheduleQuizId).subscribe((res: any) => {
      this.usersList = res as any[];
      console.log(this.usersList);
    });
  }

  deleteUserFromSchedule(UserId: string) {
    this.service.deleteUserFromSchedule(+this.data, UserId).subscribe((res: any) => {
      this.toastr.error('removed successfully');
      this.loadExistingUsers(+this.data);
    });
  }

  onSubmit(form: NgForm) {
    this.service.editSchedule(this.data, form.value).subscribe(res => {
      this.toastr.success('Changes Saved');
      this.dialogRef.close('Saved');
    })
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
      console.log("invalid");
      this.endDateValid = true;
    } else {
      this.endDateValid = false;
      console.log('valid');
    }
  }
}
