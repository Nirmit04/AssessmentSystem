import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth.guard';
import { NonMockComponent } from './components/non-mock/non-mock.component';
import { EmployeeComponent } from './employee.component';
import { TakeQuizComponent } from './components/take-quiz/take-quiz.component';
import { ResultComponent } from './components/result/result.component';
import { NonMockReportComponent } from './components/non-mock-report/non-mock-report.component';
import { DetailedReportComponent } from './components/detailed-report/detailed-report.component';
import { MockComponent } from './components/mock/mock.component';
import { MockReportComponent } from './components/mock-report/mock-report.component';

const routes: Routes = [
  { path: 'non-mocks', component: NonMockComponent, canActivate: [AuthGuard] },
  { path: '', component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: 'quiz/take-quiz', component: TakeQuizComponent, canActivate: [AuthGuard] },
  { path: 'quiz/result', component: ResultComponent, canActivate: [AuthGuard] },
  { path: 'quiz/non-mock-report', component: NonMockReportComponent, canActivate: [AuthGuard] },
  { path: 'quiz/detailed-report', component: DetailedReportComponent, canActivate: [AuthGuard] },
  { path: 'mock', component: MockComponent, canActivate: [AuthGuard] },
  { path: 'mock-report', component: MockReportComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
