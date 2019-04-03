import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentCreatorServiceService } from '../../shared/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { CreateQuestionsComponent } from '../../create-questions/create-questions.component';
import { AmazingTimePickerService } from 'amazing-time-picker';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  public Subjects: any[];
  questions: any[];
  val: Boolean = false;
  count: number = 0;
  CCreatedBy = "";
  length = 0;
  flag = 1;
  form1: NgForm;
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;
  QuizHour: string;
  QuizMinute: string;
  MockType: string;
  TotalQuestions: number;
  RandomQuizTime: number;
  constructor(private service: ContentCreatorServiceService,
    private dialogRef: MatDialogRef<CreateQuizComponent>,
    public toastr: ToastrService,
    private dialog: MatDialog,
    private atp: AmazingTimePickerService) { }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4,
    };
    this.resetForm();
    this.dtTrigger.next();
    this.CCreatedBy = localStorage.getItem('uid');
    this.service.retrieveSubjects().subscribe(data => {
      this.Subjects = data as any[];
    });

  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    else {
      this.service.quizForm = {
        QuizId: null,
        Difficulty: '',
        TotalQuestions: null,
        TotalMarks: null,
        Subject: '',
        QuizType: '',
        CreatedBy: '',
        QuestionIds: null,
        SubjectId: null,
        QuizName: ''
      }
      if (this.questions) {
        this.questions.map(y => y.selected = false);
      }
    }
  }

  fetch(form: NgForm) {
    this.fetchReqQues(form);
    this.dtTrigger.next();
  }

  fetchReqQues(form: NgForm) {
    console.log(form.value.QuizTime);
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
    this.service.quizForm.QuizTime = this.QuizHour + ":" + this.QuizMinute;
    if (this.MockType == 'Random') {
      this.service.generateRandom(form.value,this.TotalQuestions).subscribe((res: any) => {
        this.toastr.success('Random Quiz Created successfully');
        this.dialogRef.close('Inserted');
      })
    }
    else {
      this.service.getQuesOfUserConstraints(form.value).subscribe((data: any) => {
        data.forEach(obj => obj.selected = false);
        this.questions = data;
        this.length = this.questions.length;
        this.dtTrigger.next();
        this.checkVal();
      });
    }
  }
  checkVal() {
    this.val = true;
    this.dtTrigger.unsubscribe();
    this.dtTrigger.next();
  }
  updateSelectedQuestions(index) {
    this.questions[index].selected = !this.questions[index].selected;
  }

  onDetailsSubmit(form: NgForm) {
    var QuestionId = this.questions.filter(QuestionId => QuestionId.selected).map(idSelected => idSelected.QuestionId);
    this.service.postQuestionsSelected(QuestionId).subscribe(res => {

      this.toastr.success('Inserted successfully');
      this.dialogRef.close('Inserted');
    })
  }
  reload(data1: any) {
    this.service.getQuesOfUserConstraints(data1).subscribe((data: any) => {
      data.forEach(obj => obj.selected = false);
      this.questions = data;
      this.length = this.questions.length;
      this.checkVal();
      this.dtTrigger.unsubscribe();
      this.dtTrigger.next();
    });
  }
  add_new_ques() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.disableClose = true;
    this.service.quesStat = true;
    let dialogRef = this.dialog.open(CreateQuestionsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.service.quesStat = false;
      console.log(this.service.quizForm);
      this.reload(this.service.quizForm);
      this.dtTrigger.unsubscribe();
      this.dtTrigger.next();
    });
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
}