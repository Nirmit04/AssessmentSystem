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
import { RetrieveQuestionBankComponent } from './content-creator/retrieve-question-bank/retrieve-question-bank.component';
import { ContentCreatorServiceService } from './content-creator/shared/content-creator-service.service';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreatetagComponent } from './content-creator/tag/createtag/createtag.component';
import { TagComponent } from './content-creator/tag/retrievetag/tag.component';
import { RetrieveQuizComponent } from './content-creator/retrieve-quiz/retrieve-quiz.component';
import { CreateQuizComponent } from './content-creator/retrieve-quiz/create-quiz/create-quiz.component';
import { UpdateQuestionComponent } from './content-creator/update-question/update-question.component';
import { UpdateQuizComponent } from './content-creator/retrieve-quiz/update-quiz/update-quiz.component';
import { AddQuesInQuizComponent } from './content-creator/retrieve-quiz/add-ques-in-quiz/add-ques-in-quiz.component';
import { MainNavComponent } from './content-creator/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { UserDetailsComponent } from './content-creator/user-details/user-details.component';
import { AuthGuard } from './auth.guard';
import { TestAdminComponent } from './test-admin/test-admin.component';
import { RetrieveScheduleComponent } from './test-admin/retrieve-schedule/retrieve-schedule.component';
import { CreateScheduleComponent } from './test-admin/retrieve-schedule/create-schedule/create-schedule.component';
import { AddUserComponent } from './test-admin/retrieve-schedule/add-user/add-user.component';
import { ArchiveQuizComponent } from './content-creator/retrieve-quiz/archive-quiz/archive-quiz.component';
import { MainNav2Component } from './test-admin/main-nav2/main-nav2.component';
import { ViewScheduleComponent } from './test-admin/retrieve-schedule/view-schedule/view-schedule.component';
import { DataTablesModule } from 'angular-datatables';

import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
	bgsColor: '#00ACC1',
	bgsOpacity: 0.7,
	bgsPosition: 'bottom-right',
	bgsSize: 60,
	bgsType: 'rectangle-bounce-pulse-out',
	blur: 16,
	fgsColor: '#00ACC1',
	fgsPosition: 'center-center',
	fgsSize: 60,
	fgsType: 'rectangle-bounce-pulse-out',
	gap: 24,
	logoPosition: 'center-center',
	logoSize: 120,
	logoUrl: '',
	masterLoaderId: 'master',
	overlayBorderRadius: '0',
	overlayColor: 'rgba(40, 40, 40, 0.8)',
	pbColor: '#00ACC1',
	pbDirection: 'ltr',
	pbThickness: 1,
	hasProgressBar: false,
	text: 'LOADING...',
	textColor: '#FFFFFF',
	textPosition: 'center-center',
	threshold: 500
};
let config = new AuthServiceConfig([
	{
		id: GoogleLoginProvider.PROVIDER_ID,
		provider: new GoogleLoginProvider('819840688710-ljvg9sqe86d08r2hlgv6e9s74i3jmiq0.apps.googleusercontent.com')
	}
]);

export function provideConfig() {
	return config;
}

@NgModule({
	declarations: [
		AppComponent,
		CreateQuestionsComponent,
		RetrieveQuestionBankComponent,
		ContentCreatorComponent,
		LoginComponent,
		HomeComponent,
		CreatetagComponent,
		TagComponent,
		RetrieveQuizComponent,
		CreateQuizComponent,
		UpdateQuestionComponent,
		UpdateQuizComponent,
		AddQuesInQuizComponent,
		MainNavComponent,
		UserDetailsComponent,
		TestAdminComponent,
		RetrieveScheduleComponent,
		CreateScheduleComponent,
		AddUserComponent,
		ArchiveQuizComponent,
		MainNav2Component,
		ViewScheduleComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(),
		SocialLoginModule,
		MatDialogModule,
		MatButtonModule,
		MatFormFieldModule,
		MatIconModule,
		MatTableModule,
		LayoutModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		DataTablesModule,
		NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
	],
	providers: [
		AuthGuard,
		ContentCreatorServiceService,
		{
			provide: AuthServiceConfig,
			useFactory: provideConfig
		}
	],
	bootstrap: [ AppComponent ],
	entryComponents: [
		CreatetagComponent,
		UpdateQuestionComponent,
		CreateQuizComponent,
		UpdateQuizComponent,
		AddQuesInQuizComponent,
		AddUserComponent,
		ViewScheduleComponent
	]
})
export class AppModule {}
