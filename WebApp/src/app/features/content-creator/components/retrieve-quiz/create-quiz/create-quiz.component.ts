import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentCreatorService } from '../../../services/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { CreateQuestionsComponent } from '../../create-questions/create-questions.component';
import { StorageService } from '../../../../../services/storage.service';
import { HttpService } from '../../../../../core/http/http.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  /* this class is used to create a quiz according to the user, be it mock or scheduled, and if mock, then it can be random or user-defined too */
  public subjects: any[];
  public questions: any[];
  private quizzes: any[];
  public quizExists: boolean;
  public val: boolean = false;
  public createdBy: string = '';
  public length: number = 0;
  public quizHour: string;
  public quizMinute: string;
  public mockType: string;
  public totalQuestions: number;
  public dropdownSettings;
  public columns: any[];
  public index: number;

  constructor(
    private service: ContentCreatorService,
    private dialogRef: MatDialogRef<CreateQuizComponent>,
    public toastr: ToastrService,
    private dialog: MatDialog,
    private storageService: StorageService,
    private httpService: HttpService
  ) { }

  public ngOnInit(): void {
    /* sets up the component */
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'SubjectId',
      textField: 'Name',
      enableCheckAll: false,
      itemsShowLimit: 5,
      allowSearchFilter: true,
    };
    this.quizExists = false; // checks whether the quiz name already exists in the database - initially set to false
    this.resetForm();
    this.createdBy = this.storageService.getStorage('uid'); // gets the user id from the stroage service
    this.httpService.retrieveQuizNames().subscribe((res: any) => {
      /* gets all the quiz names that are present in the database */
      this.quizzes = res as any[];
    });
    this.httpService.retrieveSubjects().subscribe((data) => {
      /* gets all the subjects from the database so that the user can select the subjects that states the type to which the quiz is assigned */
      this.subjects = data as any[];
    });
  }

  private resetForm(form?: NgForm): void {
    /* this is used to reset the form of creating the quiz and reseting the select option of adding the questions the quiz */
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
      };
      this.service.quizMinute = null;
      this.service.quizHour = null;
      if (this.questions) {
        /* if there exists questions that have been selected, then reset their select status */
        this.questions.forEach((y) => (y.selected = false));
      }
    }
  }

  public colsById(index: number) {
    /* trackBy function */
    return index;
  }

  public columnsById(index: number) {
    /* trackBy function */
    return index;
  }

  public fetchReqQues(form: NgForm): void {
    /* it is used to fetch all those questions that have the same question type, difficulty and subjects as that of the newly created quiz 
    and preseenting it to the user so that he can select the question from it to be added to the quiz */
    if (form.value.QuizType === 'Scheduled')
    /* whatever be the quiz type, the questions of the same type will be picked from the database*/ {
      this.service.questionType = 'Scheduled';
    } else {
      this.service.questionType = 'Mock';
    }
    this.service.difficulty = this.service.quizForm.Difficulty;
    this.service.subjectId = this.service.quizForm.SubjectId;
    this.service.formDupli = form;
    this.service.quizForm = form.value;
    this.quizHour = this.service.quizHour.toString();
    this.quizMinute = this.service.quizMinute.toString();
    if (this.service.quizHour < 10) {
      this.quizHour = '0' + this.service.quizHour.toString();
    }
    if (this.service.quizMinute < 10) {
      this.quizMinute = '0' + this.service.quizMinute.toString();
    }
    this.service.quizForm.QuizTime = this.quizHour + ':' + this.quizMinute;
    if (this.mockType == 'Random') {
      /* if quiz is of type mock annd the user wishes that the quiz have random questions */
      this.generatingRandomQuiz(form);
    } else {
      /* if quiz is of 'Mock' type and the user wishes to make it persoanlized, that is, insert questions according to his own choice */
      this.generatingPersonalizedQuiz(form);
    }
  }

  private generatingRandomQuiz(form: any): void {
    /* puts random questions into the quiz */
    this.httpService.generateRandom(form.value, this.totalQuestions).subscribe((res: any) => {
      /* a request is send to the backend to put questions randly to the newly created quiz */
      if (res === 0) {
        /* if no questions exists in the database of that particular difficulty level and subject */
        this.toastr.error('No Questions Available!'); // display the information to the user 
      } else {
        /* display the number of questions that have been put to that quiz */
        this.toastr.success('Random Quiz Created successfully with ' + res + ' questions.'); // display the information to the user 
      }
      this.dialogRef.close('Inserted'); // close the mat-dialog
    });
  }

  private generatingPersonalizedQuiz(form: any): void {
    /* allows user to pick questons that he wishes to put in the quiz */
    this.columns = [
      { field: 'serialNumber', header: 'S NO' },
      { field: 'questionStatement', header: 'Questions' }
    ];
    this.gettingQuestionsForQuiz(form.value); // getting questions for the quiz of the same type
  }

  private checkVal(): void {
    /* turns the value of the boolean variable true */
    this.val = true;
  }

  public updateSelectedQuestions(index): void {
    /* resets the selected questions to unselected */
    this.questions[index].selected = !this.questions[index].selected;
  }

  public onDetailsSubmit(form: NgForm): void {
    /* maps the questions that have been selected to be put into the quiz with their id and submits the details */
    var QuestionId = this.questions
      .filter((QuestionId) => QuestionId.selected)
      .map((idSelected) => idSelected.QuestionId);
    const response = this.service.postQuestionsSelected(QuestionId); // posting the response to the backend 
    if (response) {
      /* if the response is 200 Created from the backed */
      this.toastr.success('Inserted successfully');
      this.service.quizForm = null;
      this.dialogRef.close('Inserted');
    }
  }

  private gettingQuestionsForQuiz(data: any): void {
    /* getting questions of type 'Mock' and of difficulty level and subject ype as that of the quiz */
    this.httpService.getQuesOfUserConstraints(data).subscribe((data: any) => {
      data.forEach((obj) => (obj.selected = false));
      this.questions = data;
      this.length = this.questions.length;
      for (this.index = 1; this.index <= this.questions.length; this.index++) {
        /* displaying the list of the questions according with the serial number */
        this.questions[this.index - 1].SerialNumber = this.index;
      }
      this.checkVal(); // checking the availability for the quiz name
    });
  }

  public checkAvail(inputName: NgForm): void {
    /* to check whether the netered quiz name already exists in the database or not */
    for (let name of this.quizzes) {
      /* iterating over all quiz names */
      if (name.QuizName.toString().toLowerCase() === inputName.value.toString().toLowerCase()) //converting all quiz names in the database and the enetered quiz name to lowercase
      {
        this.quizExists = true; // quiz name already exists
        break;
      } else {
        this.quizExists = false; // quiz name does not exists
      }
    }
  }

  public add_new_ques(): void { 
    /* user wishes to add a completely new question than the question that already exists */
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.disableClose = true;
    this.service.quesStat = true;
    let dialogRef = this.dialog.open(CreateQuestionsComponent, dialogConfig); // loading the create question component in the mat dialog 
    dialogRef.afterClosed().subscribe((result) => {
      this.service.quesStat = false;
      this.gettingQuestionsForQuiz(this.service.quizForm); // reloading the page consisting of all questions of the same type that of the quiz
    });
  }

  public toggleEditable(event): void {
    //TODO: Pulkit| handling the states of the quiz - 01/06/2019
    /* toggle to make the state of the quiz as active or inactive */
    if (event.target.checked) {
      // the state of the quiz is active
      this.service.quizState = true;
    }
    if (!event.target.checked) {
      // the state of the quiz is inactive
      this.service.quizState = false;
    }
  }

}
