import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ContentCreatorServiceService } from '../../shared/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { Question } from '../../shared/question.model';
import { AddQuesInQuizComponent } from '../add-ques-in-quiz/add-ques-in-quiz.component';
import { CreateQuestionsComponent } from '../../create-questions/create-questions.component';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  UpdateQuizQuestionList: Question[];
  check: boolean;
  difficulty = '';
  subjectid: number = null;


  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<UpdateQuizComponent>,
    public service: ContentCreatorServiceService,
    public toastr: ToastrService,
    public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.data);
    this.UpdateQuizQuestionList = this.data;
    this.difficulty = this.UpdateQuizQuestionList[0].Difficulty.toString();
    this.subjectid = +(this.UpdateQuizQuestionList[0].SubjectId.toString());
    this.check = false;
  }

  loadingData() {
    this.service.getQuestionsByQuiz(Number(localStorage.getItem('quizId'))).subscribe((res: any) => {
      this.UpdateQuizQuestionList = res;
    });
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.service.deleteQuesOfQuiz(id).subscribe((res: any) => {
        this.toastr.success('Deleted Successfully', 'Assesment System');
        this.loadingData();
      });
    }
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.disableClose = true;
    this.service.getQuizQuestions(Number(localStorage.getItem('quizId'))).subscribe((res: any) => {
      dialogConfig.data = res;
      if (dialogConfig.data.length === 0) {
        this.toastr.error('No Questions Available');
        this.check = true;
      }
      else {
        this.dialog.open(AddQuesInQuizComponent, dialogConfig).afterClosed().subscribe(res => {
          this.loadingData();
        });
      }
    });
  }

  add_new_ques() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.disableClose = true;
    this.service.quesStat = true;
    console.log(this.difficulty);
    console.log(this.subjectid);
    localStorage.setItem('Difficulty', this.difficulty);
    localStorage.setItem('SubjectId', this.subjectid.toString());
    dialogConfig.data = this.subjectid;
    let dialogRef = this.dialog.open(CreateQuestionsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.check = false;
    });
  }

}
