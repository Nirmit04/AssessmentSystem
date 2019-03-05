import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCreatorComponent } from './content-creator/content-creator.component';
import { DashboardComponent } from './content-creator/dashboard/dashboard.component';

@NgModule({
	declarations: [ AppComponent, ContentCreatorComponent, DashboardComponent ],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
