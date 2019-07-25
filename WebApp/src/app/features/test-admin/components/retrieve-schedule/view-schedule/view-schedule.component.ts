import { Component, OnInit, Inject } from '@angular/core';
import { TestAdminService } from '../../../services/test-admin.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { UpdateQuestionComponent } from '../../../../content-creator/components/update-question/update-question.component';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { StorageService } from '../../../../../services/storage.service';
import { HttpService } from '../../../../../core/http/http.service';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class ViewScheduleComponent implements OnInit {
  public createdBy = '';
  public date: string;
  public flag: boolean;
  public label: string;
  public usersList: any[];
  public startDateValid = false;
  public endDateValid = false;
  public startDateTime: Date;
  private startDate: Date;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<UpdateQuestionComponent>,
    public toastr: ToastrService,
    private service: TestAdminService,
    public dialog: MatDialog,
    private datePipe: DatePipe,
    private storageService: StorageService,
    private httpService: HttpService) { }

  public ngOnInit(): void {
    this.date = this.datePipe.transform(new Date(), 'yyyy-MM-ddThh:mm');
    this.flag = this.service.readonlyStatus;
    if (this.flag === true) {
      this.label = 'View Schedule';
      this.startDateTime = this.service.formdata.StartDateTime;
    } else {
      this.label = 'Edit Schedule';
    }
    this.createdBy = this.storageService.getStorage('uid');
    this.loadExistingUsers(+this.data);
  }

  private loadExistingUsers(scheduleQuizId: number): void {
    this.httpService.getScheduleQuizUsers(scheduleQuizId).subscribe((res: any) => {
      this.usersList = res as any[];
    });
  }

  public deleteUserFromSchedule(UserId: string): void {
    this.httpService.deleteUserFromSchedule(+this.data, UserId).subscribe((res: any) => {
      this.toastr.error('removed successfully');
      this.loadExistingUsers(+this.data);
    });
  }

  public onSubmit(form: NgForm): void {
    this.httpService.editSchedule(this.data, form.value).subscribe(res => {
      this.toastr.success('Changes Saved');
      this.dialogRef.close('Saved');
    });
  }

  public checkStartDate(date1: NgForm): void {
    this.startDate = date1.value;
    this.date = (this.datePipe.transform(Date.now(), 'yyyy-MM-ddThh:mm'));
    if (date1.value < this.date) {
      this.startDateValid = true;
    } else {
      this.startDateValid = false;
    }
  }

  public checkEndDate(date2: NgForm): void {
    this.date = (this.datePipe.transform(Date.now(), 'yyyy-MM-ddThh:mm'));
    if (date2.value <= this.startDate || date2.value < this.date) {
      this.endDateValid = true;
    } else {
      this.endDateValid = false;
    }
  }
}
