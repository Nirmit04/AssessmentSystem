<<<<<<< HEAD
import { Component, OnInit, Inject } from '@angular/core';
import { TestAdminService } from '../../shared/test-admin.service';
import { User } from 'src/app/test-admin/shared/user.model'
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
=======
import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { TestAdminService } from '../../shared/test-admin.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Schedule } from '../../shared/schedule.model';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { AddUser1Component } from '../../add-user1/add-user1.component';
import { ViewScheduleComponent } from '../view-schedule/view-schedule.component';
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
<<<<<<< HEAD
export class AddUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddUserComponent>,
=======

export class AddUserComponent implements OnInit {
  scheduleList: Schedule[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Schedule> = new Subject();
  subscription: Subscription;
  constructor(
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
    public toastr: ToastrService,
    public dialog: MatDialog,
    private service: TestAdminService) { }

<<<<<<< HEAD
  quiztakers: any[];

  ngOnInit() {
    if (this.data != null) {
      this.loadSpecificUsers(+this.data);
    }
    else {
      this.loadUsers();
    }
  }

  loadUsers() {
    this.service.retrieveAllEmployees().subscribe((res: any) => {
      res.forEach(obj => obj.selected = false);
      this.quiztakers = res as User[];
    })
  }
  loadSpecificUsers(id: number) {
    this.service.retrieveSpecificEmployees(id).subscribe((res: any) => {
      res.forEach(obj => obj.selected = false);
      this.quiztakers = res as User[];
    })
  }
  updateSelectedUsers(index) {
    this.quiztakers[index].selected = !this.quiztakers[index].selected;
  }
  onSubmit(form: NgForm) {
    var quiztakerId = this.quiztakers.filter(Id => Id.selected).map(idSelected => idSelected.Id);
    console.log(quiztakerId);
    this.service.quiztakerId = quiztakerId;
=======
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    setTimeout(() => {
      this.loadSchedule();
		}, 0);
  }

  loadSchedule() {
    this.service.getSchedule(localStorage.getItem('uid')).subscribe((res: any) => {
      this.scheduleList = res as Schedule[];
      this.dtTrigger.next();
    });
  }

  addUserToSchedule(scheduleid: number, arrayindex: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.disableClose = true;
    dialogConfig.data = scheduleid;
    this.dialog.open(AddUser1Component, dialogConfig).afterClosed().subscribe((res: any) => {
      this.loadSchedule();
      this.dtTrigger.unsubscribe();
      this.dtTrigger.next();
    });
  }

  deleteUserfromSchedule(scheduleId: number, arrayIndex: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.disableClose = true;
    this.service.getScheduleQuizUsers(scheduleId).subscribe((res: any) => {
      if (res.length === 0) {
        this.toastr.error('No user Available to Delete');
      }
      else {
        dialogConfig.data = scheduleId;
        this.service.deleteUserVisibility = true;
        this.dialog.open(ViewScheduleComponent, dialogConfig).afterClosed().subscribe(() => {
          this.loadSchedule();
          this.service.deleteUserVisibility = false;
          this.dtTrigger.unsubscribe();
          this.dtTrigger.next();
        });
      }
    });
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
  }
}

