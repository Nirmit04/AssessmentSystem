import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { DetailedReportComponent } from './components/detailed-report/detailed-report.component';
import { MockComponent } from './components/mock/mock.component';
import { MockReportComponent } from './components/mock-report/mock-report.component';
import { NonMockComponent } from './components/non-mock/non-mock.component';
import { TakeQuizComponent } from './components/take-quiz/take-quiz.component';
import { MainNav3Component } from './components/main-nav3/main-nav3.component';
import { ResultComponent } from './components/result/result.component';
import { NonMockReportComponent } from './components/non-mock-report/non-mock-report.component';
import { InstructionsComponent } from './components/take-quiz/instructions/instructions.component';
import { SharedModule} from '../../services/shared.module'

@NgModule({
  declarations: [
    EmployeeComponent,
    DetailedReportComponent,
    MockComponent,
    MockReportComponent,
    NonMockComponent,
    TakeQuizComponent,
    MainNav3Component,
    ResultComponent,
    NonMockReportComponent,
    InstructionsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EmployeeModule { }
