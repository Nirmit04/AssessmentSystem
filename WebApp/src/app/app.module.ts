import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './auth.guard';
import { HttpInterceptorComponent } from './core/interceptors/http-interceptor/http-interceptor.component';
import { HttpErrorInterceptor } from './core/interceptors/http-error-interceptor';
import { LoaderInterceptorService } from './services/loader-interceptor.service';
import { SharedModule } from './services/shared.module';
import { EmployeeModule } from './features/employee/employee.module'
import { TestAdminModule } from './features/test-admin/test-admin.module'
import { ReportingUserModule } from './features/reporting-user/reporting-user.module';
import { GlobalErrorHandler } from './core/logs/global-error-handler.service';
import { TokenInterceptor } from './token.interceptor';
// import * as rb from 'rollbar';
import { CommonModule } from '@angular/common';
import {
    Injectable,
    Injector,
    InjectionToken,
    Inject
} from '@angular/core';

const config = new AuthServiceConfig([
    {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('819840688710-ljvg9sqe86d08r2hlgv6e9s74i3jmiq0.apps.googleusercontent.com')
    }
]);

export function provideConfig() {
    return config;
}

const rollbarConfig = {
    accessToken: 'a503665a11e2452f880c398007d18be2',
    captureUncaught: true,
    captureUnhandledRejections: true,
    autoInstrument: {
        network: true,
        log: true,
        dom: true,
        navigation: true,
        connectivity: true,
        networkResponseHeaders: true,
        networkResponseBody: true,
        networkRequestBody: true
    }
};

export const RollbarService = new InjectionToken<rb>('rollbar');
@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
    constructor(@Inject(RollbarService) private rollbar: rb) { }

    handleError(err: any): void {
        this.rollbar.error(err.originalError || err);
    }
}

export function rollbarFactory() {
    return new rb(rollbarConfig);
}
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        HttpInterceptorComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SocialLoginModule,
        SharedModule,
        EmployeeModule,
        TestAdminModule,
        ReportingUserModule,
    ],
    providers: [
        AuthGuard,
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
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor, multi: true
        },
        { provide: RollbarService, useFactory: rollbarFactory },
        { provide: ErrorHandler, useClass: RollbarErrorHandler },
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandler
        }
    ],
    bootstrap: [AppComponent],

})
export class AppModule { }
