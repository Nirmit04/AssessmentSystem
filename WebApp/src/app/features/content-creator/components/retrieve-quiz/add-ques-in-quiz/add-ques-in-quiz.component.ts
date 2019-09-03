import { Component, OnInit, Inject } from '@angular/core';
import { ContentCreatorService } from '../../../services/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { CreateQuestionsComponent } from '../../create-questions/create-questions.component';
import { StorageService } from '../../../../../services/storage.service';
import { HttpService } from '../../../../../core/http/http.service';

@Component({
  selector: 'app-add-ques-in-quiz',
  templateUrl: './add-ques-in-quiz.component.html',
  styleUrls: ['./add-ques-in-quiz.component.css']
})
export class AddQuesInQuizComponent implements OnInit {
  /* this class is used to add questions to a particlar quiz by selecting from amongst the question that has the subject and difficulty level similar to that of the quiz*/
  public questions: any[];

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public service: ContentCreatorService,
    public toastr: ToastrService,
    public dialog: MatDialog,
    private storageService: StorageService,
    private httpService: HttpService,
    private dialogref: MatDialogRef<AddQuesInQuizComponent>) { }

  public ngOnInit(): void {
    /* loads all the questions that has the subject and difficulty level similar to that of the quiz */
    this.questions = this.data;
    this.resetForm();
  }

  private resetForm(form?: NgForm): void {
    /* this is used to reset the create questions form once the user presses the reset button, refreshes the page or once the details have been submitted */
    if (form != null) {
      form.resetForm();
    } else {
      this.service.quizForm = {
        QuizId: null,
        Difficulty: '',
        TotalQuestions: null,
        TotalMarks: null,
        Tags: null,
        QuizType: '',
        CreatedBy: '',
        QuestionIds: null,
        SubjectId: null,
        QuizName: '',
        MinCutOff: null
      }
      if (this.questions) {
        /* refreshes the list of the question present in the quiz */
        this.questions.forEach(y => {
          y.selected = false
        });
      }
    }
  }

  public updateSelectedQuestions(index): void {
    /* the table shows the latest questions that are present in that quiz */
    this.questions[index].selected = !this.questions[index].selected;
  }

  public questionsById(index: number) {
    /* trackBy function */
    return index;
  }

  public add_new_ques(): void {
    /* if a user wants to add a fresh question to the quiz, then this function is called when 'Add New Ques' is hit by the user */
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.disableClose = true;
    this.service.quesStat = true;
    let dialogRef = this.dialog.open(CreateQuestionsComponent, dialogConfig); // open the mat dialog and loads the creat question component in it
    dialogRef.afterClosed().subscribe(result => {
      this.service.quesStat = false;
      this.loadQues(); // once the question is added and the mat dialog box is closed, it has to refresh the page showing the newly added question
    });
  }

  private loadQues(): void {
    /* loads all the questions that has the subject and difficulty level similar to that of the quiz */
    this.httpService.getQuizQuestions(+this.storageService.getStorage('quizId')).subscribe((res: any) => {
      this.questions = res as [];
    });
  }

  public onDetailsSubmit(form: NgForm): void {
    /* user selects the question that he wants to add in the quiz and submits his request */
    var QuestionId = this.questions.filter(QuestionId => QuestionId.selected).map(idSelected => idSelected.QuestionId);
    const response = this.service.putQuestionsSelected(QuestionId);
    if (response) {
      this.toastr.success('Inserted successfully');
      this.dialogref.close('Inserted');
    }
  }

}
