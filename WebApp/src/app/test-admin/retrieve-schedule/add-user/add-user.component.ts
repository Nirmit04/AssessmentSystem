import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { TestAdminService } from '../../shared/test-admin.service';
import { User } from 'src/app/test-admin/shared/user.model'
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Schedule } from '../../shared/schedule.model';
import { concat, Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { AddUser1Component } from '../../add-user1/add-user1.component'
import { ViewScheduleComponent } from '../view-schedule/view-schedule.component';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  scheduleList: Schedule[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Schedule> = new Subject();
  subscription: Subscription;
  constructor(
    public toastr: ToastrService,
    public dialog: MatDialog,
    private service: TestAdminService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.loadSchedule();
  }

  loadSchedule() {
    this.service.getSchedule(localStorage.getItem('uid')).subscribe((res: any) => {
      this.scheduleList = res as Schedule[];
      this.dtTrigger.next();
    })
  }

  addUserToSchedule(scheduleid: number, arrayindex: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.disableClose = true;
    dialogConfig.data = scheduleid;
    this.dialog.open(AddUser1Component, dialogConfig).afterClosed().subscribe((res: any) => {
      this.loadSchedule();
      this.dtTrigger.unsubscribe();
      this.dtTrigger.next();
    });
  }

  deleteUserfromSchedule(scheduleId: number, arrayIndex: number) {
    console.log('delete user function');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.disableClose = true;
    dialogConfig.data = scheduleId;
    this.service.deleteUserVisibility = true;
    this.dialog.open(ViewScheduleComponent, dialogConfig).afterClosed().subscribe((res: any) => {
      this.loadSchedule();
      this.service.deleteUserVisibility = false;
      this.dtTrigger.unsubscribe();
      this.dtTrigger.next();
    });
  }

}

