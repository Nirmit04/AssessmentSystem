import { Component, OnInit, Inject } from '@angular/core';
import { Subject } from '../../../models/subject.model';
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

  public questions: any[];

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public service: ContentCreatorService,
    public toastr: ToastrService,
    public dialog: MatDialog,
    private storageService: StorageService,
    private httpService: HttpService,
    private dialogref: MatDialogRef<AddQuesInQuizComponent>) { }

  public ngOnInit(): void {
    this.questions = this.data;
    this.resetForm();
  }

  private resetForm(form?: NgForm): void {
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
        this.questions.forEach(y => {
          y.selected = false
        });
      }
    }
  }

  public updateSelectedQuestions(index): void {
    this.questions[index].selected = !this.questions[index].selected;
  }

  public add_new_ques(): void {
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

  private loadQues(): void {
    this.httpService.getQuizQuestions(+this.storageService.getStorage('quizId')).subscribe((res: any) => {
      this.questions = res as [];
    });
  }

  public onDetailsSubmit(form: NgForm): void {
    var QuestionId = this.questions.filter(QuestionId => QuestionId.selected).map(idSelected => idSelected.QuestionId);
    const response = this.service.putQuestionsSelected(QuestionId);
    if (response) {
      this.toastr.success('Inserted successfully');
      this.dialogref.close('Inserted');
    }
  }

}
