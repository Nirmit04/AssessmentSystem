import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuestionsComponent } from './components/create-questions/create-questions.component';
import { ContentCreatorComponent } from './content-creator.component';
import { RetrieveQuestionBankComponent } from './components/retrieve-question-bank/retrieve-question-bank.component';
import { ContentCreatorService } from './services/content-creator-service.service';
import { CreatetagComponent } from './components/tag/createtag/createtag.component';
import { TagComponent } from './components/tag/retrievetag/tag.component';
import { RetrieveQuizComponent } from './components/retrieve-quiz/retrieve-quiz.component';
import { CreateQuizComponent } from './components/retrieve-quiz/create-quiz/create-quiz.component';
import { UpdateQuestionComponent } from './components/update-question/update-question.component';
import { UpdateQuizComponent } from './components/retrieve-quiz/update-quiz/update-quiz.component';
import { AddQuesInQuizComponent } from './components/retrieve-quiz/add-ques-in-quiz/add-ques-in-quiz.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ArchiveQuizComponent } from './components/retrieve-quiz/archive-quiz/archive-quiz.component';
import { SharedModule } from '../../services/shared.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CreateQuestionsComponent,
    RetrieveQuestionBankComponent,
    ContentCreatorComponent,
    CreatetagComponent,
    TagComponent,
    RetrieveQuizComponent,
    CreateQuizComponent,
    UpdateQuestionComponent,
    UpdateQuizComponent,
    AddQuesInQuizComponent,
    MainNavComponent,
    UserDetailsComponent,
    ArchiveQuizComponent,],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  providers: [ContentCreatorService,],
  entryComponents: [
    CreatetagComponent,
    UpdateQuestionComponent,
    CreateQuizComponent,
    UpdateQuizComponent,
    AddQuesInQuizComponent,
    CreateQuestionsComponent,
  ]
})
export class ContentCreatorModule { }
