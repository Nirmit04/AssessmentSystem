import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetrieveQuestionBankComponent } from './features/content-creator/components/retrieve-question-bank/retrieve-question-bank.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { AppComponent } from './app.component';
import { TagComponent } from './features/content-creator/components/tag/retrievetag/tag.component';
import { RetrieveQuizComponent } from './features/content-creator/components/retrieve-quiz/retrieve-quiz.component';
import { CreateQuestionsComponent } from './features/content-creator/components/create-questions/create-questions.component';
import { UserDetailsComponent } from './features/content-creator/components/user-details/user-details.component';
import { AuthGuard } from './auth.guard';
import { ArchiveQuizComponent } from './features/content-creator/components/retrieve-quiz/archive-quiz/archive-quiz.component';
import { CreateScheduleComponent } from './features/test-admin/components/retrieve-schedule/create-schedule/create-schedule.component';
import { RetrieveScheduleComponent } from './features/test-admin/components/retrieve-schedule/retrieve-schedule.component';
import { ArchivedScheduleComponent } from './features/test-admin/components/retrieve-schedule/archived-schedule/archived-schedule.component';
import { TestAdminComponent } from './features/test-admin/test-admin.component';
import { NonMockComponent } from './features/employee/components/non-mock/non-mock.component';
import { EmployeeComponent } from './features/employee/employee.component';
import { TakeQuizComponent } from './features/employee/components/take-quiz/take-quiz.component';
import { ResultComponent } from './features/employee/components/result/result.component';
import { NonMockReportComponent } from './features/employee/components/non-mock-report/non-mock-report.component';
import { DetailedReportComponent } from './features/employee/components/detailed-report/detailed-report.component';
import { MockComponent } from './features/employee/components/mock/mock.component';
import { MockReportComponent } from './features/employee/components/mock-report/mock-report.component';
import { AddUserComponent } from './features/test-admin/components/retrieve-schedule/add-user/add-user.component';
import { AnalyticsByTagComponent } from './features/reporting-user/components/analytics-by-tag/analytics-by-tag.component';
import { AnalyticsByUserComponent } from './features/reporting-user/components/analytics-by-user/analytics-by-user.component';
import { AnalyticsByQuizComponent } from './features/reporting-user/components/analytics-by-quiz/analytics-by-quiz.component';
import { ReportingUserComponent } from './features/reporting-user/reporting-user.component';
import { HttpInterceptorComponent } from './core/interceptors/http-interceptor/http-interceptor.component';
import { ViewUserDetailsComponent } from './features/reporting-user/components/analytics-by-user/view-user-details/view-user-details.component';
import { DetailsComponent } from './features/reporting-user/components/analytics-by-quiz/details/details.component';
const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: '', component: LoginComponent, pathMatch: 'full' },
	{ path: 'app-root', component: AppComponent },
	{ path: 'cc-dash', component: UserDetailsComponent, canActivate: [AuthGuard], data: { roles: ['Content-Creator'] } },
	{ path: 'login', component: LoginComponent },
	{ path: 'cc-dash/tag', component: TagComponent, canActivate: [AuthGuard], data: { roles: ['Content-Creator'] } },
	{ path: 'cc-dash/quiz', component: RetrieveQuizComponent, canActivate: [AuthGuard], data: { roles: ['Content-Creator'] } },
	{ path: 'cc-dash/rqbank', component: RetrieveQuestionBankComponent, canActivate: [AuthGuard], data: { roles: ['Content-Creator'] } },
	{ path: 'cc-dash/create-question', component: CreateQuestionsComponent, canActivate: [AuthGuard], data: { roles: ['Content-Creator'] } },
	{ path: 'cc-dash/archive-quiz', component: ArchiveQuizComponent, canActivate: [AuthGuard], data: { roles: ['Content-Creator'] } },
	{ path: 'ta-dash/testAdminCreateScheDule', component: CreateScheduleComponent, canActivate: [AuthGuard], data: { roles: ['Test-Administrator'] } },
	{ path: 'ta-dash/retrieve-schedule', component: RetrieveScheduleComponent, canActivate: [AuthGuard], data: { roles: ['Test-Administrator'] } },
	{ path: 'ta-dash', component: TestAdminComponent, canActivate: [AuthGuard], data: { roles: ['Test-Administrator'] } },
	{ path: 'ta-dash/archive-schedule', component: ArchivedScheduleComponent, canActivate: [AuthGuard], data: { roles: ['Test-Administrator'] } },
	{ path: 'emp-dash/non-mocks', component: NonMockComponent, canActivate: [AuthGuard], data: { roles: ['Employee'] } },
	{ path: 'emp-dash', component: EmployeeComponent, canActivate: [AuthGuard], data: { roles: ['Employee'] } },
	{ path: 'emp-dash/quiz/take-quiz', component: TakeQuizComponent, canActivate: [AuthGuard], data: { roles: ['Employee'] } },
	{ path: 'emp-dash/quiz/result', component: ResultComponent, canActivate: [AuthGuard], data: { roles: ['Employee'] } },
	{ path: 'emp-dash/quiz/non-mock-report', component: NonMockReportComponent, canActivate: [AuthGuard], data: { roles: ['Employee'] } },
	{ path: 'emp-dash/quiz/detailed-report', component: DetailedReportComponent, canActivate: [AuthGuard], data: { roles: ['Employee'] } },
	{ path: 'emp-dash/mock', component: MockComponent, canActivate: [AuthGuard], data: { roles: ['Employee'] } },
	{ path: 'emp-dash/mock-report', component: MockReportComponent, canActivate: [AuthGuard], data: { roles: ['Employee'] } },
	{ path: 'ta-dash/add-user', component: AddUserComponent, canActivate: [AuthGuard], data: { roles: ['Test-Administrator'] } },
	{ path: 'ru-dash', component: ReportingUserComponent, canActivate: [AuthGuard], data: { roles: ['Reporting-User'] } },
	{ path: 'ru-dash/ana-by-user', component: AnalyticsByUserComponent, canActivate: [AuthGuard], data: { roles: ['Reporting-User'] } },
	{ path: 'ru-dash/ana-by-tag', component: AnalyticsByTagComponent, canActivate: [AuthGuard], data: { roles: ['Reporting-User'] } },
	{ path: 'ru-dash/ana-by-quiz', component: AnalyticsByQuizComponent, canActivate: [AuthGuard], data: { roles: ['Reporting-User'] } },
	{ path: 'http-error', component: HttpInterceptorComponent },
	{ path: 'ru-dash/ana-by-user/user-detail', component: ViewUserDetailsComponent, canActivate: [AuthGuard], data: { roles: ['Reporting-User'] } },
	{ path: 'ru-dash/ana-by-user/quiz-detail', component: DetailsComponent, canActivate: [AuthGuard], data: { roles: ['Reporting-User'] } }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
