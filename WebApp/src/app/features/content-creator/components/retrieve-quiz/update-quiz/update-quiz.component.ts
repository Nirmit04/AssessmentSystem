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
  public UpdateQuizQuestionList: Question[];
  public check: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<UpdateQuizComponent>,
    public service: ContentCreatorService,
    public toastr: ToastrService,
    public dialog: MatDialog,
    private storageService: StorageService,
    private httpService: HttpService) { }

  public ngOnInit(): void {
    this.UpdateQuizQuestionList = this.data;
    this.check = false;
  }

  private loadingData(): void {
    this.httpService.getQuestionsByQuiz(Number(this.storageService.getStorage('quizId'))).subscribe((res: any) => {
      this.UpdateQuizQuestionList = res;
    });
  }

  public onDelete(quizId: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.httpService.deleteQuesOfQuiz(quizId).subscribe((res: any) => {
        this.toastr.success('Deleted Successfully', 'Assesment System');
        this.loadingData();
      });
    }
  }

  public onCreate(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.disableClose = true;
    this.httpService.getQuizQuestions(Number(this.storageService.getStorage('quizId'))).subscribe((res: any) => {
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

  public add_new_ques(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.disableClose = true;
    this.service.quesStat = true;
    let dialogRef = this.dialog.open(CreateQuestionsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.check = false;
      this.loadingData();
      this.service.formData.SubjectId = null;
      this.service.formData.Difficulty = null;
      this.service.questionType = null;
    });
  }

}