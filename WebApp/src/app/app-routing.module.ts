import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetrieveQuestionBankComponent } from './content-creator/retrieve-question-bank/retrieve-question-bank.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { TagComponent } from './content-creator/tag/retrievetag/tag.component';
import { RetrieveQuizComponent } from './content-creator/retrieve-quiz/retrieve-quiz.component';
import { CreateQuestionsComponent } from './content-creator/create-questions/create-questions.component';
import { MainNavComponent } from './content-creator/main-nav/main-nav.component';
import { UserDetailsComponent } from './content-creator/user-details/user-details.component';
import { AuthGuard } from './auth.guard';
import { ArchiveQuizComponent } from './content-creator/retrieve-quiz/archive-quiz/archive-quiz.component';
import { CreateScheduleComponent } from './test-admin/retrieve-schedule/create-schedule/create-schedule.component';
import { RetrieveScheduleComponent } from './test-admin/retrieve-schedule/retrieve-schedule.component';
import { MainNav2Component } from './test-admin/main-nav2/main-nav2.component';
import { ArchivedScheduleComponent } from './test-admin/retrieve-schedule/archived-schedule/archived-schedule.component';
import { TestAdminComponent } from './test-admin/test-admin.component';
import { NonMockComponent } from './employee/non-mock/non-mock.component'
import { EmployeeComponent } from './employee/employee.component';
import { TakeQuizComponent } from './employee/take-quiz/take-quiz.component';
import { ResultComponent } from './employee/result/result.component'
import { NonMockReportComponent } from './employee/non-mock-report/non-mock-report.component';
import { DetailedReportComponent } from './employee/detailed-report/detailed-report.component';
import { MockComponent } from './employee/mock/mock.component';
import { MockReportComponent } from './employee/mock-report/mock-report.component';
import { AddUserComponent } from './test-admin/retrieve-schedule/add-user/add-user.component';
import { AnalyticsByTagComponent } from './reporting-user/analytics-by-tag/analytics-by-tag.component';
import { AnalyticsByUserComponent } from './reporting-user/analytics-by-user/analytics-by-user.component';
import { AnalyticsByQuizComponent } from './reporting-user/analytics-by-quiz/analytics-by-quiz.component';
import { Mainnav4Component } from './reporting-user/mainnav4/mainnav4.component';
const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: '', component: LoginComponent, pathMatch: 'full' },
	{ path: 'app-root', component: AppComponent },
	{ path: 'cc-dash', component: UserDetailsComponent, canActivate: [AuthGuard] },
	{ path: 'login', component: LoginComponent },
	{ path: 'cc-dash/tag', component: TagComponent, canActivate: [AuthGuard] },
	{ path: 'cc-dash/quiz', component: RetrieveQuizComponent, canActivate: [AuthGuard] },
	{ path: 'cc-dash/rqbank', component: RetrieveQuestionBankComponent, canActivate: [AuthGuard] },
	{ path: 'cc-dash/create-question', component: CreateQuestionsComponent, canActivate: [AuthGuard] },
	{ path: 'cc-dash/archive-quiz', component: ArchiveQuizComponent, canActivate: [AuthGuard] },
	{ path: 'ta-dash/testAdminCreateScheDule', component: CreateScheduleComponent, canActivate: [AuthGuard] },
	{ path: 'ta-dash/retrieve-schedule', component: RetrieveScheduleComponent, canActivate: [AuthGuard] },
	{ path: 'ta-dash', component: TestAdminComponent, canActivate: [AuthGuard] },
	{ path: 'ta-dash/archive-schedule', component: ArchivedScheduleComponent, canActivate: [AuthGuard] },
	{ path: 'emp-dash/non-mocks', component: NonMockComponent, canActivate: [AuthGuard] },
	{ path: 'emp-dash', component: EmployeeComponent, canActivate: [AuthGuard] },
	{ path: 'emp-dash/quiz/take-quiz', component: TakeQuizComponent, canActivate: [AuthGuard] },
	{ path: 'emp-dash/quiz/result', component: ResultComponent, canActivate: [AuthGuard] },
	{ path: 'emp-dash/quiz/non-mock-report', component: NonMockReportComponent, canActivate: [AuthGuard] },
	{ path: 'qmp-dash/quiz/detailed-report', component: DetailedReportComponent, canActivate: [AuthGuard] },
	{ path: 'emp-dash/mock', component: MockComponent, canActivate: [AuthGuard] },
	{ path: 'emp-dash/quiz/mock-report', component: MockReportComponent, canActivate: [AuthGuard] },
	{ path: 'ta-dash/add-user', component: AddUserComponent, canActivate: [AuthGuard] },
	{ path: 'ru-dash/ana-by-tag', component: AnalyticsByTagComponent, canActivate: [AuthGuard]},
	{ path: 'ru-dash', component:Mainnav4Component, canActivate: [AuthGuard]},
	{ path: 'emp-dash/mock-report', component: MockReportComponent, canActivate: [AuthGuard] },
	{ path: 'ta-dash/add-user', component: AddUserComponent, canActivate: [AuthGuard] },
	{ path: 'ru-dash/ana-by-user', component: AnalyticsByUserComponent, canActivate: [AuthGuard] },
	{ path: 'ru-dash/ana-by-quiz', component: AnalyticsByQuizComponent, canActivate: [AuthGuard] },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
