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
  constructor(private service: TestAdminService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.loadArchivedSchedules();
  }

  loadArchivedSchedules() {
    this.service.getArchivedSchedules().subscribe((res: any) => {
      this.ScheduleList = res as Schedule[];
      // this.dtTrigger.unsubscribe();
      this.dtTrigger.next();
      console.log(this.ScheduleList);
    })
  }
  unarchiveSchedule(id) {
    console.log(id);
    if (confirm('Are you sure you want to un-archive this quiz?')) {
      this.service.unArchiveSchedule(id).subscribe((res: any) => {
        // console.log(res);
        this.toastr.success('Un-Archived Successfully', 'Assesment System');
        this.loadArchivedSchedules();
       // this.dtTrigger.unsubscribe();
        this.dtTrigger.next();
      });
    }
  }

}
