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
  bool: boolean;
  label: string;
  usersList: any[];
  date = new Date();
  q1 = this.service.formdata.StartDateTime;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<UpdateQuestionComponent>,
    public toastr: ToastrService,
    private service: TestAdminService,
    public dialog: MatDialog,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.bool = this.service.readonlyStatus;
    console.log(this.bool);
    if (this.bool === true) {
      this.label = "View Schedule";
    } else {
      this.label = "Edit Schedule";
    }
    this.CCreatedBy = localStorage.getItem('uid');
    this.loadExistingUsers(+this.data);
  }
  // onAdd() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = "70%";
  //   dialogConfig.data = this.data;
  //   dialogConfig.disableClose = true;
  //   let dialogRef = this.dialog.open(AddUserComponent, dialogConfig);
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.loadExistingUsers(+this.data);
  //   });
  // }
  loadExistingUsers(scheduleQuizId: number) {
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
}
