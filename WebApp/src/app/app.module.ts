import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CreateQuestionsComponent } from './content-creator/create-questions/create-questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCreatorComponent } from './content-creator/content-creator.component';
import { DashboardComponent } from './content-creator/dashboard/dashboard.component';
import { RetrieveQuestionBankComponent } from './content-creator/retrieve-question-bank/retrieve-question-bank.component';
import { ContentCreatorServiceService } from './content-creator/shared/content-creator-service.service';
import { TagComponent } from './tag/tag.component';
import { MatTableModule } from '@angular/material/table';
import { DemoComponent } from './demo/demo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [
		AppComponent,
		CreateQuestionsComponent,
		RetrieveQuestionBankComponent,
		ContentCreatorComponent,
		DashboardComponent,
		TagComponent,
		DemoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(),
		MatTableModule,
		MatIconModule,
		MatButtonModule
	],
	providers: [ ContentCreatorServiceService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
