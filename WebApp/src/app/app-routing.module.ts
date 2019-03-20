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

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: '', component: LoginComponent, pathMatch: 'full' },
	{ path: 'app-root', component: AppComponent },
	{ path: 'cc-dash', component: UserDetailsComponent, canActivate: [AuthGuard] },
	{ path: 'login', component: LoginComponent },
	{ path: 'tag', component: TagComponent, canActivate: [AuthGuard] },
	{ path: 'quiz', component: RetrieveQuizComponent, canActivate: [AuthGuard] },
	{ path: 'rqbank', component: RetrieveQuestionBankComponent, canActivate: [AuthGuard] },
	{ path: 'create-question', component: CreateQuestionsComponent, canActivate: [AuthGuard] },
	{ path: 'archive-quiz', component: ArchiveQuizComponent, canActivate: [AuthGuard] },
	{ path: 'testAdminCreateScheDule', component: CreateScheduleComponent, canActivate: [AuthGuard] },
	{ path: 'retrieve-schedule', component: RetrieveScheduleComponent, canActivate: [AuthGuard] },
	{ path: 'ta-dash', component: TestAdminComponent, canActivate: [AuthGuard] },
	{ path: 'archive-schedule', component: ArchivedScheduleComponent, canActivate: [AuthGuard] },
	{ path: 'non-mocks', component: NonMockComponent, canActivate: [AuthGuard] },
	{ path: 'emp-dash', component: EmployeeComponent, canActivate: [AuthGuard] }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
