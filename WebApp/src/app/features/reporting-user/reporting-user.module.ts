import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingUserComponent } from './reporting-user.component';
import { AnalyticsByTagComponent } from './components/analytics-by-tag/analytics-by-tag.component';
import { AnalyticsByQuizComponent } from './components/analytics-by-quiz/analytics-by-quiz.component';
import { AnalyticsByUserComponent } from './components/analytics-by-user/analytics-by-user.component';
import { Mainnav4Component } from './components/mainnav4/mainnav4.component';
import { ViewUserDetailsComponent } from './components/analytics-by-user/view-user-details/view-user-details.component';
import { DetailsComponent } from './components/analytics-by-quiz/details/details.component';
import { SharedModule} from '../../services/shared.module';
import { ReportingUserRoutingModule } from './reporting-user-routing.module';
@NgModule({
  declarations: [
    ReportingUserComponent,
    AnalyticsByTagComponent,
    AnalyticsByQuizComponent,
    AnalyticsByUserComponent,
    Mainnav4Component,
    ViewUserDetailsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReportingUserRoutingModule
  ],
  entryComponents: [
    ViewUserDetailsComponent,
    DetailsComponent
  ]
})
export class ReportingUserModule { }
