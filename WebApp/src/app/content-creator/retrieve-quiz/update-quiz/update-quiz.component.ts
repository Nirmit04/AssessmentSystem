import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ContentCreatorServiceService } from '../../shared/content-creator-service.service';
import { ToastrService } from 'ngx-toastr';
import { Question } from '../../shared/question.model';
import { AddQuesInQuizComponent } from '../add-ques-in-quiz/add-ques-in-quiz.component';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  UpdateQuizQuestionList: Question[];

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<UpdateQuizComponent>,
    public service: ContentCreatorServiceService,
    public toastr: ToastrService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.UpdateQuizQuestionList = this.data;
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
      console.log(dialogConfig.data);
      this.dialog.open(AddQuesInQuizComponent, dialogConfig).afterClosed().subscribe(res => {
        this.loadingData();
      });
    });
  }

}
