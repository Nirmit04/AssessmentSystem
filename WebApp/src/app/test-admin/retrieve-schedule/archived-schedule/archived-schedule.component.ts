import { Component, OnInit } from '@angular/core';
import { Schedule } from '../../shared/schedule.model';
import { TestAdminService } from '../../shared/test-admin.service';
import { ToastrService } from 'ngx-toastr';
import { concat, Subscription } from 'rxjs';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-archived-schedule',
  templateUrl: './archived-schedule.component.html',
  styleUrls: ['./archived-schedule.component.css']
})

export class ArchivedScheduleComponent implements OnInit {

  ScheduleList: Schedule[];
  dtTrigger: Subject<Schedule> = new Subject();
  subscription: Subscription;
  dtOptions: DataTables.Settings = {};

  cols: any[];
  i: number;

  constructor(private service: TestAdminService, private toastr: ToastrService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.cols = [
			{ field: 'SerialNumber', header: 'Schedule NO' },
      { field: 'QuizName', header: 'Quiz Name' },
      { field: 'StartDateTime', header: 'Start Time'},
      { field: 'EndDateTime', header: 'End Time'},
      
		];
    setTimeout(() => {
      this.loadArchivedSchedules();
		}, 0);
  }

  loadArchivedSchedules() {
    this.service.getArchivedSchedules().subscribe((res: any) => {
      this.ScheduleList = res as Schedule[];
      // this.dtTrigger.next();
      for (this.i = 1; this.i <= this.ScheduleList.length; this.i++) {
				this.ScheduleList[this.i - 1].SerialNumber = this.i;
			}
    });
  }

  unarchiveSchedule(id) {
    if (confirm('Are you sure you want to un-archive this')) {
      this.service.unArchiveSchedule(id).subscribe((res: any) => {
        this.toastr.success('Un-Archived Successfully', 'Assesment System');
        // this.dtTrigger.unsubscribe();
        this.loadArchivedSchedules();
      });
    }
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

}
