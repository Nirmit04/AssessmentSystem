import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentCreatorServiceService } from '../../../services/content-creator-service.service';
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
  public Subjects: any[];
  questions: any[];
  quizzes: any[];
  quizExists: boolean;
  val: boolean = false;
  count: number = 0;
  CCreatedBy = '';
  length = 0;
  flag = 1;
  form1: NgForm;
  QuizHour: string;
  QuizMinute: string;
  MockType: string;
  TotalQuestions: number;
  RandomQuizTime: number;
  difficulty = '';
  subjectid: number = null;
  question_type = '';
  dropdownSettings;
  cols: any[];
  i: number;

  constructor(
    private service: ContentCreatorServiceService,
    private dialogRef: MatDialogRef<CreateQuizComponent>,
    public toastr: ToastrService,
    private dialog: MatDialog,
    private storageService: StorageService,
    private httpService: HttpService
  ) { }
  ngOnInit() {
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
    this.CCreatedBy = this.storageService.getStorage('uid');
    this.httpService.retrieveQuizNames().subscribe((res: any) => {
      this.quizzes = res as any[];
    });
    this.httpService.retrieveSubjects().subscribe((data) => {
      this.Subjects = data as any[];
    });
  }

  resetForm(form?: NgForm) {
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
      this.service.QuizMinute = null;
      this.service.QuizHour = null;
      if (this.questions) {
        this.questions.forEach((y) => (y.selected = false));
      }
    }
  }

  fetch(form: NgForm) {
    this.fetchReqQues(form);
  }

  fetchReqQues(form: NgForm) {

    console.log('1');
    if (form.value.QuizType === 'Scheduled') {
      this.service.QuestionType = 'Scheduled';
    } else {
      this.service.QuestionType = 'Mock';
    }
    this.service.Difficulty = this.service.quizForm.Difficulty;
    this.service.SubjectId = this.service.quizForm.SubjectId;
    this.service.formDupli = form;
    this.service.quizForm = form.value;
    this.QuizHour = this.service.QuizHour.toString();
    this.QuizMinute = this.service.QuizMinute.toString();
    if (this.service.QuizHour < 10) {
      this.QuizHour = '0' + this.service.QuizHour.toString();
    }
    if (this.service.QuizMinute < 10) {
      this.QuizMinute = '0' + this.service.QuizMinute.toString();
    }
    this.service.quizForm.QuizTime = this.QuizHour + ':' + this.QuizMinute;
    if (this.MockType == 'Random') {
      this.httpService.generateRandom(form.value, this.TotalQuestions).subscribe((res: any) => {
        if (res === 0) {
          this.toastr.error('No Questions Available!');
        } else {
          this.toastr.success('Random Quiz Created successfully with ' + res + ' questions.');
        }
        this.dialogRef.close('Inserted');
      });
    } else {
      console.log('2');

      this.cols = [
        { field: 'SerialNumber', header: 'S NO' },
        { field: 'QuestionStatement', header: 'Questions' }
      ];
      this.httpService.getQuesOfUserConstraints(form.value).subscribe((data: any) => {
        console.log(data);
        data.forEach((obj) => (obj.selected = false));
        this.questions = data;
        this.length = this.questions.length;
        for (this.i = 1; this.i <= this.questions.length; this.i++) {
          this.questions[this.i - 1].SerialNumber = this.i;
        }
        this.checkVal();
      });
    }
  }

  checkVal() {
    this.val = true;
  }
  updateSelectedQuestions(index) {
    this.questions[index].selected = !this.questions[index].selected;
  }
  onDetailsSubmit(form: NgForm) {
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
  reload(data1: any) {
    this.httpService.getQuesOfUserConstraints(data1).subscribe((data: any) => {
      data.forEach((obj) => (obj.selected = false));
      this.questions = data;
      this.length = this.questions.length;
      this.checkVal();
    });
  }

  checkAvail(inputName: NgForm) {
    for (let name of this.quizzes) {
      if (name.QuizName.toString().toLowerCase() === inputName.value.toString().toLowerCase()) {
        this.quizExists = true;
        break;
      } else {
        this.quizExists = false;
      }
    }
  }

  add_new_ques() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.disableClose = true;
    this.service.quesStat = true;
    // this.service.formData = {
    //   QuestionId: null,
    //   QuestionStatement: '',
    //   Option1: '',
    //   Option2: '',
    //   Option3: '',
    //   Option4: '',
    //   Answer: null,
    //   Marks: null,
    //   Difficulty: this.service.quizForm.Difficulty.toString(),
    //   SubjectId: this.service.quizForm.SubjectId.toString()
    // };
    // this.service.formData.Difficulty = this.service.quizForm.Difficulty.toString();
    // this.service.formData.SubjectId = this.service.quizForm.SubjectId.toString();
    // console.log(this.service.formData);
    let dialogRef = this.dialog.open(CreateQuestionsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      this.service.quesStat = false;
      this.reload(this.service.quizForm);
    });
  }
  toggleEditable(event) {
    if (event.target.checked) {
      this.service.QuizState = true;
    }
    if (!event.target.checked) {
      this.service.QuizState = false;
    }
  }
}
