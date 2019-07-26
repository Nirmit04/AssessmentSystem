import { Component, OnInit, OnDestroy } from '@angular/core';
import { Schedule } from '../../../models/schedule.model';
import { TestAdminService } from '../../../services/test-admin.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { HttpService } from '../../../../../core/http/http.service';
@Component({
  selector: 'app-archived-schedule',
  templateUrl: './archived-schedule.component.html',
  styleUrls: ['./archived-schedule.component.css']
})

export class ArchivedScheduleComponent implements OnInit,OnDestroy {

  public ScheduleList: Schedule[];
  dtTrigger: Subject<Schedule> = new Subject();
  subscription: Subscription;
  dtOptions: DataTables.Settings = {};
  public unSortableColumns: any[];
  public columns: any[];
  index: number;

  constructor(private service: TestAdminService, 
    private toastr: ToastrService,
    private httpService: HttpService) { }

  public ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.columns = [
      { field: 'SerialNumber', header: 'Schedule NO' },
      { field: 'QuizName', header: 'Quiz Name' }

    ];
    this.unSortableColumns = [
      { field: 'StartDateTime', header: 'Start Time' },
      { field: 'EndDateTime', header: 'End Time' },
    ];

    setTimeout(() => {
      this.loadArchivedSchedules();
    }, 0);
  }

  private loadArchivedSchedules(): void {
    this.httpService.getArchivedSchedules().subscribe((res: any) => {
      this.ScheduleList = res as Schedule[];
      // this.dtTrigger.next();
      for (this.index = 1; this.index <= this.ScheduleList.length; this.index++) {
        this.ScheduleList[this.index - 1].SerialNumber = this.index;
      }
    });
  }

  public unarchiveSchedule(id): void {
    if (confirm('Are you sure you want to un-archive this')) {
      this.httpService.unArchiveSchedule(id).subscribe((res: any) => {
        this.toastr.success('Un-Archived Successfully', 'Assesment System');
        // this.dtTrigger.unsubscribe();
        this.loadArchivedSchedules();
      });
    }
  }

  public ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

}
