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
import { ContentCreatorServiceService } from './content-creator/shared/content-creator-service.service'
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
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


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("819840688710-ljvg9sqe86d08r2hlgv6e9s74i3jmiq0.apps.googleusercontent.com")
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
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    CreatetagComponent,
    TagComponent,
    RetrieveQuizComponent,
    CreateQuizComponent,
    UpdateQuestionComponent,
    UpdateQuizComponent,
    AddQuesInQuizComponent

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
    MatTableModule
  ],
  providers: [ContentCreatorServiceService, {
    provide: AuthServiceConfig,
    useFactory: provideConfig,

  }],
  bootstrap: [AppComponent],
  entryComponents: [CreatetagComponent, UpdateQuestionComponent, CreateQuizComponent, UpdateQuizComponent, AddQuesInQuizComponent]
})
export class AppModule { }
