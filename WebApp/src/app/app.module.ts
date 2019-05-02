import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CreateQuestionsComponent } from './content-creator/create-questions/create-questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
<<<<<<< HEAD
let config = new AuthServiceConfig([
=======
import { DataTablesModule } from 'angular-datatables';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';
import { ArchivedScheduleComponent } from './test-admin/retrieve-schedule/archived-schedule/archived-schedule.component';
import { EmployeeComponent } from './employee/employee.component';
import { DetailedReportComponent } from './employee/detailed-report/detailed-report.component';
import { MockComponent } from './employee/mock/mock.component';
import { MockReportComponent } from './employee/mock-report/mock-report.component';
import { NonMockComponent } from './employee/non-mock/non-mock.component';
import { TakeQuizComponent } from './employee/take-quiz/take-quiz.component';
import { ViewAnswerComponent } from './employee/view-answer/view-answer.component';
import { MainNav3Component } from './employee/main-nav3/main-nav3.component';
import { ResultComponent } from './employee/result/result.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NonMockReportComponent } from './employee/non-mock-report/non-mock-report.component';
import { ChartsModule } from 'ng2-charts';
import { NgxGaugeModule } from 'ngx-gauge';
import { AddUser1Component } from './test-admin/add-user1/add-user1.component';
import { ReportingUserComponent } from './reporting-user/reporting-user.component';
import { AnalyticsByTagComponent } from './reporting-user/analytics-by-tag/analytics-by-tag.component';
import { AnalyticsByQuizComponent } from './reporting-user/analytics-by-quiz/analytics-by-quiz.component';
import { AnalyticsByUserComponent } from './reporting-user/analytics-by-user/analytics-by-user.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpInterceptorComponent } from './http-interceptor/http-interceptor.component';
import { Mainnav4Component } from './reporting-user/mainnav4/mainnav4.component';
import { ViewUserDetailsComponent } from './reporting-user/analytics-by-user/view-user-details/view-user-details.component';
import { DetailsComponent } from './reporting-user/analytics-by-quiz/details/details.component';
import { HttpErrorInterceptor } from './http-error-interceptor';
import { DatePipe } from '@angular/common';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptorService} from '../app/services/loader-interceptor.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderServiceService } from './services/loader-service.service';
import { InstructionsComponent } from './employee/take-quiz/instructions/instructions.component';
import { TableModule } from 'primeng/table'


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
const config = new AuthServiceConfig([
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
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
<<<<<<< HEAD
		ViewScheduleComponent
=======
		ViewScheduleComponent,
		ArchivedScheduleComponent,
		EmployeeComponent,
		DetailedReportComponent,
		MockComponent,
		MockReportComponent,
		NonMockComponent,
		TakeQuizComponent,
		ViewAnswerComponent,
		MainNav3Component,
		ResultComponent,
		NonMockReportComponent,
		AddUser1Component,
		ReportingUserComponent,
		AnalyticsByTagComponent,
		AnalyticsByQuizComponent,
		AnalyticsByUserComponent,
		Mainnav4Component,
		ViewUserDetailsComponent,
		DetailsComponent,
		HttpInterceptorComponent,
		LoaderComponent,
		InstructionsComponent,
		
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
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
<<<<<<< HEAD
		MatListModule
	],
	providers: [
		AuthGuard,
=======
		MatListModule,
		DataTablesModule,
		NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
		MatProgressBarModule,
		ChartsModule,
		NgxGaugeModule,
		MatExpansionModule,
		OwlDateTimeModule,
		OwlNativeDateTimeModule,
		MatProgressSpinnerModule,
		TableModule,
		],
	providers: [
		AuthGuard,
		DatePipe,
		LoaderServiceService,
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
		ContentCreatorServiceService,
		{
			provide: AuthServiceConfig,
			useFactory: provideConfig
<<<<<<< HEAD
		}
	],
	bootstrap: [AppComponent],
	entryComponents: [
		CreatetagComponent,
		UpdateQuestionComponent,
		CreateQuizComponent,
		UpdateQuizComponent,
		AddQuesInQuizComponent,
		AddUserComponent,
		ViewScheduleComponent

	],
=======
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpErrorInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: LoaderInterceptorService,
			multi: true
		}
	],
	bootstrap: [AppComponent],
	entryComponents: [
		CreatetagComponent,
		UpdateQuestionComponent,
		CreateQuizComponent,
		UpdateQuizComponent,
		AddQuesInQuizComponent,
		AddUserComponent,
		ViewScheduleComponent,
		ViewAnswerComponent,
		AddUser1Component,
		ViewUserDetailsComponent,
		CreateQuestionsComponent,
		DetailsComponent
	]
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
})
export class AppModule { }
