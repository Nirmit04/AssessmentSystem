import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetrieveQuestionBankComponent } from './content-creator/retrieve-question-bank/retrieve-question-bank.component';
import { DashboardComponent } from './content-creator/dashboard/dashboard.component';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { TagComponent } from './content-creator/tag/retrievetag/tag.component';
import { RetrieveQuizComponent } from './content-creator/retrieve-quiz/retrieve-quiz.component';
import { CreateQuestionsComponent } from './content-creator/create-questions/create-questions.component';


const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: '', component: LoginComponent, pathMatch: 'full' },
	{ path: 'app-root', component: AppComponent },
	{ path: 'cc-dash', component: DashboardComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'tag', component: TagComponent },
	{ path: 'quiz', component: RetrieveQuizComponent },
	{ path: 'rqbank', component: RetrieveQuestionBankComponent },
	{ path: 'create-question', component: CreateQuestionsComponent },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
