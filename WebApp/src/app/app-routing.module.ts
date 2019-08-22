import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { HttpInterceptorComponent } from './core/interceptors/http-interceptor/http-interceptor.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: '', component: LoginComponent, pathMatch: 'full' },
	{ path: 'app-root', component: AppComponent },
	{ path: 'cc-dash', loadChildren: './features/content-creator/content-creator.module#ContentCreatorModule', canActivate: [AuthGuard], data: { roles: ['Content-Creator'] } },
	{ path: 'login', component: LoginComponent },
	{ path: 'ta-dash', loadChildren: './features/test-admin/test-admin.module#TestAdminModule', canActivate: [AuthGuard], data: { roles: ['Test-Administrator'] } },
	{ path: 'emp-dash', loadChildren: './features/employee/employee.module#EmployeeModule', canActivate: [AuthGuard], data: { roles: ['Employee'] } },
	{ path: 'ru-dash', loadChildren: './features/reporting-user/reporting-user.module#ReportingUserModule', canActivate: [AuthGuard], data: { roles: ['Reporting-User'] } },
	{ path: 'http-error', component: HttpInterceptorComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
