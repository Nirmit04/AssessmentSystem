import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetrieveQuestionBankComponent } from './content-creator/retrieve-question-bank/retrieve-question-bank.component';

const routes: Routes = [ { path: 'retrieve', component: RetrieveQuestionBankComponent } ];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
