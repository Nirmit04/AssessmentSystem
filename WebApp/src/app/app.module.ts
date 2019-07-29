import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CreateQuestionsComponent } from './features/content-creator/create-questions/create-questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCreatorComponent } from './features/content-creator/content-creator.component';
import { RetrieveQuestionBankComponent } from './features/content-creator/retrieve-question-bank/retrieve-question-bank.component';
import { ContentCreatorServiceService } from './features/content-creator/shared/content-creator-service.service';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreatetagComponent } from './features/content-creator/tag/createtag/createtag.component';
import { TagComponent } from './features/content-creator/tag/retrievetag/tag.component';
import { RetrieveQuizComponent } from './features/content-creator/retrieve-quiz/retrieve-quiz.component';
import { CreateQuizComponent } from './features/content-creator/retrieve-quiz/create-quiz/create-quiz.component';
import { UpdateQuestionComponent } from './features/content-creator/update-question/update-question.component';
import { UpdateQuizComponent } from './features/content-creator/retrieve-quiz/update-quiz/update-quiz.component';
import { AddQuesInQuizComponent } from './features/content-creator/retrieve-quiz/add-ques-in-quiz/add-ques-in-quiz.component';
import { MainNavComponent } from './features/content-creator/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { UserDetailsComponent } from './features/content-creator/user-details/user-details.component';
import { AuthGuard } from './auth.guard';
import { TestAdminComponent } from './features/test-admin/test-admin.component';
import { RetrieveScheduleComponent } from './features/test-admin/retrieve-schedule/retrieve-schedule.component';
import { CreateScheduleComponent } from './features/test-admin/retrieve-schedule/create-schedule/create-schedule.component';
import { AddUserComponent } from './features/test-admin/retrieve-schedule/add-user/add-user.component';
import { ArchiveQuizComponent } from './features/content-creator/retrieve-quiz/archive-quiz/archive-quiz.component';
import { MainNav2Component } from './features/test-admin/main-nav2/main-nav2.component';
import { ViewScheduleComponent } from './features/test-admin/retrieve-schedule/view-schedule/view-schedule.component';
import { DataTablesModule } from 'angular-datatables';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';
import { ArchivedScheduleComponent } from './features/test-admin/retrieve-schedule/archived-schedule/archived-schedule.component';
import { EmployeeComponent } from './features/employee/employee.component';
import { DetailedReportComponent } from './features/employee/detailed-report/detailed-report.component';
import { MockComponent } from './features/employee/mock/mock.component';
import { MockReportComponent } from './features/employee/mock-report/mock-report.component';
import { NonMockComponent } from './features/employee/non-mock/non-mock.component';
import { TakeQuizComponent } from './features/employee/take-quiz/take-quiz.component';
import { MainNav3Component } from './features/employee/main-nav3/main-nav3.component';
import { ResultComponent } from './features/employee/result/result.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NonMockReportComponent } from './features/employee/non-mock-report/non-mock-report.component';
import { ChartsModule } from 'ng2-charts';
import { NgxGaugeModule } from 'ngx-gauge';
import { AddUser1Component } from './features/test-admin/add-user1/add-user1.component';
import { ReportingUserComponent } from './features/reporting-user/reporting-user.component';
import { AnalyticsByTagComponent } from './features/reporting-user/analytics-by-tag/analytics-by-tag.component';
import { AnalyticsByQuizComponent } from './features/reporting-user/analytics-by-quiz/analytics-by-quiz.component';
import { AnalyticsByUserComponent } from './features/reporting-user/analytics-by-user/analytics-by-user.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpInterceptorComponent } from './core/http-interceptor/http-interceptor.component';
import { Mainnav4Component } from './features/reporting-user/mainnav4/mainnav4.component';
import { ViewUserDetailsComponent } from './features/reporting-user/analytics-by-user/view-user-details/view-user-details.component';
import { DetailsComponent } from './features/reporting-user/analytics-by-quiz/details/details.component';
import { HttpErrorInterceptor } from './http-error-interceptor';
import { DatePipe } from '@angular/common';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { LoaderComponent } from './core/loader/loader.component';
import { LoaderInterceptorService } from '../app/services/loader-interceptor.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderServiceService } from './services/loader-service.service';
import { TableModule } from 'primeng/table';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

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
		ArchivedScheduleComponent,
		EmployeeComponent,
		DetailedReportComponent,
		MockComponent,
		MockReportComponent,
		NonMockComponent,
		TakeQuizComponent,
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
		LoaderComponent
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
		NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
		MatProgressBarModule,
		ChartsModule,
		NgxGaugeModule,
		MatExpansionModule,
		OwlDateTimeModule,
		OwlNativeDateTimeModule,
		MatProgressSpinnerModule,
		TableModule,
		NgMultiSelectDropDownModule.forRoot()
	],
	providers: [
		AuthGuard,
		DatePipe,
		LoaderServiceService,
		ContentCreatorServiceService,
		{
			provide: AuthServiceConfig,
			useFactory: provideConfig
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
	bootstrap: [ AppComponent ],
	entryComponents: [
		CreatetagComponent,
		UpdateQuestionComponent,
		CreateQuizComponent,
		UpdateQuizComponent,
		AddQuesInQuizComponent,
		AddUserComponent,
		ViewScheduleComponent,
		AddUser1Component,
		ViewUserDetailsComponent,
		CreateQuestionsComponent,
		DetailsComponent
	]
})
export class AppModule {}
