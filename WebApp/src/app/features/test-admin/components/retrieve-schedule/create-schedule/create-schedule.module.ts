import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateScheduleComponent } from './create-schedule.component';
import { CreateScheduleRoutes } from './create-schedule.routes';
import { FormsModule } from '@angular/forms';
import { MainNav2Component } from '../../main-nav2/main-nav2.component';

@NgModule({
    declarations: [CreateScheduleComponent, MainNav2Component],
    exports: [CreateScheduleComponent],
    imports: [
        RouterModule.forChild(CreateScheduleRoutes),
        CommonModule,
        FormsModule
    ]
})
export class CreateScheduleModule { }
