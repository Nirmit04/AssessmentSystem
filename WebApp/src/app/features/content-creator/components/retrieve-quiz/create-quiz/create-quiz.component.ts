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
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'SubjectId',
      textField: 'Name',
      enableCheckAll: false,
      itemsShowLimit: 5,
      allowSearchFilter: true,
    };
    this.quizExists = false;
    this.resetForm();
    this.createdBy = this.storageService.getStorage('uid');
    this.httpService.retrieveQuizNames().subscribe((res: any) => {
      this.quizzes = res as any[];
    });
    this.httpService.retrieveSubjects().subscribe((data) => {
      this.subjects = data as any[];
    });
  }

  private resetForm(form?: NgForm): void {
    if (form != null) {
      form.resetForm();
    } else {
      this.service.quizForm = {
        quizId: null,
        difficulty: '',
        totalQuestions: null,
        totalMarks: null,
        tags: null,
        quizType: '',
        createdBy: '',
        questionIds: null,
        subjectId: null,
        quizName: '',
        minCutOff: null
      };
      this.service.quizMinute = null;
      this.service.quizHour = null;
      if (this.questions) {
        this.questions.forEach((y) => (y.selected = false));
      }
    }
  }

  public fetchReqQues(form: NgForm): void {
    if (form.value.QuizType === 'Scheduled') {
      this.service.questionType = 'Scheduled';
    } else {
      this.service.questionType = 'Mock';
    }
    this.service.difficulty = this.service.quizForm.difficulty;
    this.service.subjectId = this.service.quizForm.subjectId;
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
    this.service.quizForm.quizTime = this.quizHour + ':' + this.quizMinute;
    if (this.mockType == 'Random') {
      this.httpService.generateRandom(form.value, this.totalQuestions).subscribe((res: any) => {
        if (res === 0) {
          this.toastr.error('No Questions Available!');
        } else {
          this.toastr.success('Random Quiz Created successfully with ' + res + ' questions.');
        }
        this.dialogRef.close('Inserted');
      });
    } else {
      this.columns = [
        { field: 'serialNumber', header: 'S NO' },
        { field: 'questionStatement', header: 'Questions' }
      ];
      this.httpService.getQuesOfUserConstraints(form.value).subscribe((data: any) => {
        data.forEach((obj) => (obj.selected = false));
        this.questions = data;
        this.length = this.questions.length;
        for (this.index = 1; this.index <= this.questions.length; this.index++) {
          this.questions[this.index - 1].SerialNumber = this.index;
        }
        this.checkVal();
      });
    }
  }

  private checkVal(): void {
    this.val = true;
  }

  public updateSelectedQuestions(index): void {
    this.questions[index].selected = !this.questions[index].selected;
  }

  public onDetailsSubmit(form: NgForm): void {
    var QuestionId = this.questions
      .filter((QuestionId) => QuestionId.selected)
      .map((idSelected) => idSelected.QuestionId);
    const response = this.service.postQuestionsSelected(QuestionId);
    if (response) {
      this.toastr.success('Inserted successfully');
      this.service.quizForm = null;
      this.dialogRef.close('Inserted');
    }
  }

  private reload(data1: any): void {
    this.httpService.getQuesOfUserConstraints(data1).subscribe((data: any) => {
      data.forEach((obj) => (obj.selected = false));
      this.questions = data;
      this.length = this.questions.length;
      this.checkVal();
    });
  }

  public checkAvail(inputName: NgForm): void {
    for (let name of this.quizzes) {
      if (name.QuizName.toString().toLowerCase() === inputName.value.toString().toLowerCase()) {
        this.quizExists = true;
        break;
      } else {
        this.quizExists = false;
      }
    }
  }

  public add_new_ques(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.disableClose = true;
    this.service.quesStat = true;
    let dialogRef = this.dialog.open(CreateQuestionsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      this.service.quesStat = false;
      this.reload(this.service.quizForm);
    });
  }

  public toggleEditable(event): void {
    if (event.target.checked) {
      this.service.quizState = true;
    }
    if (!event.target.checked) {
      this.service.quizState = false;
    }
  }

}
