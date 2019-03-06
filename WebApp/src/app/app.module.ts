import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCreatorComponent } from './content-creator/content-creator.component';
import { DashboardComponent } from './content-creator/dashboard/dashboard.component';
import { RetrieveQuestionBankComponent } from './content-creator/retrieve-question-bank/retrieve-question-bank.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
	declarations: [ AppComponent, RetrieveQuestionBankComponent, ContentCreatorComponent, DashboardComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatDialogModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
