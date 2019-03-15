import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-retrieve-schedule',
  templateUrl: './retrieve-schedule.component.html',
  styleUrls: ['./retrieve-schedule.component.css']
})
export class RetrieveScheduleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCreate() {
    this.router.navigate(['/testAdminCreateScheDule']);
  }
}
