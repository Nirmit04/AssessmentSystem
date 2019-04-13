import { Component, OnInit, Inject } from '@angular/core';
import { TestAdminService } from '../../shared/test-admin.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { UpdateQuestionComponent } from 'src/app/content-creator/update-question/update-question.component';
import { ToastrService } from 'ngx-toastr';
import { Schedule } from '../../shared/schedule.model';
import { NgForm } from '@angular/forms';
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
    public dialogRef: MatDialogRef<UpdateQuestionComponent>, public toastr: ToastrService, private service: TestAdminService,
    public dialog: MatDialog, private datePipe: DatePipe) { }

  ngOnInit() {
    this.date = this.datePipe.transform(new Date(), 'yyyy-MM-ddThh:mm');
    this.bool = this.service.readonlyStatus;
    if (this.bool === true) {
      this.label = 'View Schedule';
      this.q1 = this.service.formdata.StartDateTime;
    } else {
      this.label = 'Edit Schedule';
    }
    this.CCreatedBy = localStorage.getItem('uid');
    this.usersList = this.data as any[];
  }

  loadExistingUsers(scheduleQuizId: number) {
    this.service.getScheduleQuizUsers(scheduleQuizId).subscribe((res: any) => {
      this.usersList = res as any[];
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
}
