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

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: '', component: LoginComponent, pathMatch: 'full' },
	{ path: 'app-root', component: AppComponent },
	{ path: 'cc-dash', component: UserDetailsComponent, canActivate: [ AuthGuard ] },
	{ path: 'login', component: LoginComponent },
	{ path: 'tag', component: TagComponent, canActivate: [ AuthGuard ] },
	{ path: 'quiz', component: RetrieveQuizComponent, canActivate: [ AuthGuard ] },
	{ path: 'rqbank', component: RetrieveQuestionBankComponent, canActivate: [ AuthGuard ] },
	{ path: 'create-question', component: CreateQuestionsComponent, canActivate: [ AuthGuard ] }
	// { path: 'dashboard', component: UserDetailsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
