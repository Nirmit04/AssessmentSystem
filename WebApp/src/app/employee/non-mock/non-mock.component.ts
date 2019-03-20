import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { concat, Subscription } from 'rxjs';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-non-mock',
  templateUrl: './non-mock.component.html',
  styleUrls: ['./non-mock.component.css']
})
export class NonMockComponent implements OnInit {

  constructor(private service: EmployeeService) { }
  nonMockScheduleList: any[];
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.loadNonMockSchedules();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
  }
  loadNonMockSchedules() {
    this.service.getNonMocks().subscribe((res: any) => {
      this.nonMockScheduleList = res as any[];
      this.dtTrigger.next();
      console.log(this.nonMockScheduleList);
    });
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
}
