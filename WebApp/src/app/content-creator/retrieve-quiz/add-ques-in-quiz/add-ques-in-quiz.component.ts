import { Component, OnInit, Inject } from '@angular/core';
import { Subject } from '../../shared/subject.model';
import { ContentCreatorServiceService } from '../../shared/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
<<<<<<< HEAD
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
=======
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { CreateQuestionsComponent } from '../../create-questions/create-questions.component';
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165

@Component({
  selector: 'app-add-ques-in-quiz',
  templateUrl: './add-ques-in-quiz.component.html',
  styleUrls: ['./add-ques-in-quiz.component.css']
})
export class AddQuesInQuizComponent implements OnInit {

  public Subjects: Subject[];
  questions: any[];
<<<<<<< HEAD
  val: Boolean = false;
  count: number = 0;
  CDifficulty = "";
  CSubjectID = null;
  label:'';
  constructor(@Inject(MAT_DIALOG_DATA) public data, 
    public service: ContentCreatorServiceService, 
    public toastr: ToastrService,
    public dialog: MatDialog,
    private dialogref: MatDialogRef<AddQuesInQuizComponent>) { }
=======
  val: boolean = false;
  count: number = 0;
  CDifficulty = "";
  CSubjectID = null;
  label: '';

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public service: ContentCreatorServiceService,
    public toastr: ToastrService,
    public dialog: MatDialog,
    private dialogref: MatDialogRef<AddQuesInQuizComponent>) { }

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
  ngOnInit() {
    this.questions = this.data;
    console.log(this.questions);
    this.resetForm();
  }
<<<<<<< HEAD
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    else {
=======

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    } else {
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
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
<<<<<<< HEAD
        QuizName:''
=======
        QuizName: ''
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
      }
      if (this.questions) {
        this.questions.map(y => y.selected = false);
      }
    }
  }
<<<<<<< HEAD
=======

>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
  updateSelectedQuestions(index) {
    this.questions[index].selected = !this.questions[index].selected;
  }

<<<<<<< HEAD
  onDetailsSubmit(form: NgForm) {
    var QuestionId = this.questions.filter(QuestionId => QuestionId.selected).map(idSelected => idSelected.QuestionId);
    console.log(QuestionId);
    this.service.putQuestionsSelected(QuestionId).subscribe(res => {
      this.toastr.success('Inserted successfully');
    })    
   // this.dialogref.close();
=======
  add_new_ques() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.disableClose = true;
    this.service.quesStat = true;
    let dialogRef = this.dialog.open(CreateQuestionsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.service.quesStat = false;
      this.loadQues();

    });
  }

  loadQues() {
    this.service.getQuizQuestions(+localStorage.getItem('quizId')).subscribe((res: any) => {
      this.questions = res as [];
    });
  }

  onDetailsSubmit(form: NgForm) {
    var QuestionId = this.questions.filter(QuestionId => QuestionId.selected).map(idSelected => idSelected.QuestionId);
    this.service.putQuestionsSelected(QuestionId).subscribe(res => {
      this.toastr.success('Inserted successfully');
      this.dialogref.close('Inserted');
    })
>>>>>>> cc36520b0297d1918419cfc2cce9acb9b3f3a165
  }

}
