import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsByTagComponent } from './components/analytics-by-tag/analytics-by-tag.component';
import { AnalyticsByUserComponent } from './components/analytics-by-user/analytics-by-user.component';
import { AnalyticsByQuizComponent } from './components/analytics-by-quiz/analytics-by-quiz.component';
import { ReportingUserComponent } from './reporting-user.component';
import { ViewUserDetailsComponent } from './components/analytics-by-user/view-user-details/view-user-details.component';
import { DetailsComponent } from './components/analytics-by-quiz/details/details.component';
import { AuthGuard } from '../../auth.guard';

const routes: Routes = [
    { path: '', component: ReportingUserComponent, canActivate: [AuthGuard] },
    { path: 'ana-by-user', component: AnalyticsByUserComponent, canActivate: [AuthGuard] },
    { path: 'ana-by-tag', component: AnalyticsByTagComponent, canActivate: [AuthGuard] },
    { path: 'ana-by-quiz', component: AnalyticsByQuizComponent, canActivate: [AuthGuard] },
    { path: 'ana-by-user/user-detail', component: ViewUserDetailsComponent, canActivate: [AuthGuard] },
    { path: 'ana-by-user/quiz-detail', component: DetailsComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportingUserRoutingModule { }
