import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetrieveQuestionBankComponent } from './components/retrieve-question-bank/retrieve-question-bank.component';
import { TagComponent } from './components/tag/retrievetag/tag.component';
import { RetrieveQuizComponent } from './components/retrieve-quiz/retrieve-quiz.component';
import { CreateQuestionsComponent } from './components/create-questions/create-questions.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AuthGuard } from '../../auth.guard';
import { ArchiveQuizComponent } from './components/retrieve-quiz/archive-quiz/archive-quiz.component';
const routes: Routes = [
    { path: '', component: UserDetailsComponent, canActivate: [AuthGuard] },
    { path: 'tag', component: TagComponent, canActivate: [AuthGuard] },
    { path: 'quiz', component: RetrieveQuizComponent, canActivate: [AuthGuard] },
    { path: 'rqbank', component: RetrieveQuestionBankComponent, canActivate: [AuthGuard] },
    { path: 'create-question', component: CreateQuestionsComponent, canActivate: [AuthGuard] },
    { path: 'archive-quiz', component: ArchiveQuizComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentCreatorRoutingModule { }
