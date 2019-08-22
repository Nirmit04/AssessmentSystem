import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ContentCreatorService } from '../../../services/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { Question } from '../../../models/question.model';
import { AddQuesInQuizComponent } from '../add-ques-in-quiz/add-ques-in-quiz.component';
import { CreateQuestionsComponent } from '../../create-questions/create-questions.component';
import { StorageService } from '../../../../../services/storage.service';
import { HttpService } from '../../../../../core/http/http.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})

export class UpdateQuizComponent implements OnInit {
  /* this class is used to update the quiz detaiils, such as timing of the quiz, adding or removing questions from the quiz */
  public UpdateQuizQuestionList: Question[];
  public check: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<UpdateQuizComponent>,
    public service: ContentCreatorService,
    public toastr: ToastrService,
    public dialog: MatDialog,
    private storageService: StorageService,
    private httpService: HttpService) { }

  public ngOnInit(): void {
    /* sets up the component and loads the data that has been provided to the mat dialog */
    this.UpdateQuizQuestionList = this.data;
    this.check = false;
  }

  private loadingData(): void {
    /* getting questions of type that of the quiz and of difficulty level and subject ype as that of the quiz */
    this.httpService.getQuestionsByQuiz(Number(this.storageService.getStorage('quizId'))).subscribe((res: any) => {
      this.UpdateQuizQuestionList = res; //updating the local variable with the response from the backend
    });
  }

  public onDelete(quizId: number): void {
    /* removing a particular question that was previosuly added to the quiz */
    if (confirm('Are you sure you want to delete this record?')) {
      /* on user confirmation, the questions is removed from the quiz */
      this.httpService.deleteQuesOfQuiz(quizId).subscribe((res: any) => {
        // the question has been successfully removed
        this.toastr.success('Deleted Successfully', 'Assesment System'); // success toaster displayed
        this.loadingData(); // refreshes the data to show the latest questions in the quiz
      });
    }
  }

  public onCreate(): void {
    // to add new questions to the quiz of the same type as that of the quiz having the same difficulty level and subjects as that of the quiz */
    const dialogConfig = new MatDialogConfig(); // mat--dialog set up
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.disableClose = true;
    this.httpService.getQuizQuestions(this.storageService.getStorage('quizId')).subscribe((res: any) => {
      /* getting all those questions that have the same type that of the quiz */
      dialogConfig.data = res;
      if (dialogConfig.data.length === 0) {
        /* no questions of that type exists in the database */
        this.toastr.error('No Questions Available');
        this.check = true;
      }
      else {
        /* adding the selected questions to the quiz */
        this.dialog.open(AddQuesInQuizComponent, dialogConfig).afterClosed().subscribe(res => {
          this.loadingData(); // refreshing with the latest data of the questions
        });
      }
    });
  }

  public add_new_ques(): void {
    /* adding fresh new questions to the question bank with the same type as that of the quiz */
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.disableClose = true;
    this.service.quesStat = true;
    let dialogRef = this.dialog.open(CreateQuestionsComponent, dialogConfig); // loading the create question component in the mat dialog 
    dialogRef.afterClosed().subscribe(result => {
      this.check = false;
      this.loadingData(); // refreshing with the latest data of the questions
      this.service.formData.subjectId = null;
      this.service.formData.difficulty = null;
      this.service.questionType = null;
    });
  }

  public questionListById(index: number) {
    /* trackBy function */
    return index;
  }

}