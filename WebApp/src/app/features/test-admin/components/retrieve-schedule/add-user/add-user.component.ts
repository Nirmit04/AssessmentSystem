import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { TestAdminService } from '../../../services/test-admin.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Schedule } from '../../../models/schedule.model';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { AddUser1Component } from '../../add-user1/add-user1.component';
import { ViewScheduleComponent } from '../view-schedule/view-schedule.component';
import { StorageService } from '../../../../../services/storage.service';
import { HttpService } from '../../../../../core/http/http.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  public scheduleList: Schedule[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Schedule> = new Subject();
  subscription: Subscription;
  public unSortableColumn: any[];
  public columns: any[];
  private index: number;

  constructor(
    public toastr: ToastrService,
    public dialog: MatDialog,
    private service: TestAdminService,
    private storageService: StorageService,
    private httpService: HttpService) { }

  public ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.columns = [
      { field: 'SerialNumber', header: 'S NO' },
      { field: 'QuizName', header: 'Quiz Name' }
    ];
    this.unSortableColumn = [
      { field: 'StartDateTime', header: 'Start Time' },
      { field: 'EndDateTime', header: 'End Time' },

    ];
    setTimeout(() => {
      this.loadSchedule();
    }, 0);
  }

  private loadSchedule(): void {
    this.httpService.getSchedule(this.storageService.getStorage('uid')).subscribe((res: any) => {
      this.scheduleList = res as Schedule[];
          for (this.index = 1; this.index <= this.scheduleList.length; this.index++) {
        this.scheduleList[this.index - 1].SerialNumber = this.index;
      }
    });
  }

  public addUserToSchedule(scheduleid: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.disableClose = true;
    dialogConfig.data = scheduleid;
    this.dialog.open(AddUser1Component, dialogConfig).afterClosed().subscribe((res: any) => {
      this.loadSchedule();
    });
  }

  public deleteUserfromSchedule(scheduleId: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.disableClose = true;
    this.httpService.getScheduleQuizUsers(scheduleId).subscribe((res: any) => {
      if (res.length === 0) {
        this.toastr.error('No user Available to Delete');
      }
      else {
        dialogConfig.data = scheduleId;
        this.service.deleteUserVisibility = true;
        this.dialog.open(ViewScheduleComponent, dialogConfig).afterClosed().subscribe(() => {
          this.loadSchedule();
          this.service.deleteUserVisibility = false;
        });
      }
    });
  }
}

