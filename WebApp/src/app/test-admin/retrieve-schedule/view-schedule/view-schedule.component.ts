import { Component, OnInit, Inject } from '@angular/core';
import { TestAdminService } from '../../shared/test-admin.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material';
import { UpdateQuestionComponent } from 'src/app/content-creator/update-question/update-question.component';
import { ToastrService } from 'ngx-toastr';
import { Schedule } from '../../shared/schedule.model';
import { NgForm } from '@angular/forms';
import { AddUserComponent } from '../add-user/add-user.component';

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
  usersList : any[];

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<UpdateQuestionComponent>,
    public toastr: ToastrService,
    private service: TestAdminService,
    public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.service.formdata);
    this.bool = this.service.readonlyStatus;
    if (this.bool === true) {
      this.label = "View Schedule";
    } else {
      this.label = "Edit Schedule";
    }
    this.CCreatedBy = localStorage.getItem('uid');
    this.usersList = this.service.scheduleQuizUsers;
  }
  onAdd()  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.disableClose = true;
    let dialogRef = this.dialog.open(AddUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
