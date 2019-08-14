import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAdminComponent } from './test-admin.component';
import { RetrieveScheduleComponent } from './components/retrieve-schedule/retrieve-schedule.component';
import { CreateScheduleComponent } from './components/retrieve-schedule/create-schedule/create-schedule.component';
import { AddUserComponent } from './components/retrieve-schedule/add-user/add-user.component';
import { MainNav2Component } from './components/main-nav2/main-nav2.component';
import { ViewScheduleComponent } from './components/retrieve-schedule/view-schedule/view-schedule.component';
import { ArchivedScheduleComponent } from './components/retrieve-schedule/archived-schedule/archived-schedule.component';
import { AddUser1Component } from './components/add-user1/add-user1.component';
import { SharedModule } from '../../services/shared.module'

@NgModule({
  declarations: [
    TestAdminComponent,
    RetrieveScheduleComponent,
    CreateScheduleComponent,
    AddUserComponent,
    MainNav2Component,
    ViewScheduleComponent,
    ArchivedScheduleComponent,
    AddUser1Component,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [
    AddUserComponent,
    ViewScheduleComponent,
    AddUser1Component,
  ]
})
export class TestAdminModule { }
