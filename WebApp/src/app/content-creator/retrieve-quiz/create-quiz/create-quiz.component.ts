import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentCreatorServiceService } from '../../shared/content-creator-service.service';
//import { Subject } from 'src/app/content-creator/shared/subject.model';
import { ToastrService } from 'ngx-toastr';
import { Question } from 'src/app/content-creator/shared/question.model';
import { concat, Subscription } from 'rxjs';
import { Subject } from 'rxjs';
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
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;
  constructor(private service: ContentCreatorServiceService, public toastr: ToastrService) { }
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
      console.log(this.Subjects);
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
    console.log(form.value);
    this.service.quizForm = form.value;
    this.service.getQuesOfUserConstraints(form.value).subscribe((data: any) => {
      data.forEach(obj => obj.selected = false);
      this.questions = data;
      this.length = this.questions.length;
      console.log(this.questions);
      this.dtTrigger.next();
      this.checkVal();
    });
  }
  checkVal() {
    this.val = true;
    this.dtTrigger.next();
  }
  updateSelectedQuestions(index) {
    this.questions[index].selected = !this.questions[index].selected;
  }

  onDetailsSubmit(form: NgForm) {
    var QuestionId = this.questions.filter(QuestionId => QuestionId.selected).map(idSelected => idSelected.QuestionId);
    console.log(QuestionId);
    this.service.postQuestionsSelected(QuestionId).subscribe(res => {
      this.toastr.success('Inserted successfully');
    })
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
}