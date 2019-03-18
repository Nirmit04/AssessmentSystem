import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContentCreatorServiceService } from '../../shared/content-creator-service.service';
import { Subject } from 'src/app/content-creator/shared/subject.model';
import { ToastrService } from 'ngx-toastr';
import { Question } from 'src/app/content-creator/shared/question.model';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  public Subjects: Subject[];
  questions: any[];
  val: Boolean = false;
  count: number = 0;
  CCreatedBy = "";
  length = 0;
  constructor(private service: ContentCreatorServiceService, public toastr: ToastrService) { }
  ngOnInit() {
    this.resetForm();
    this.CCreatedBy = localStorage.getItem('uid');
    this.service.retrieveSubjects().subscribe(data => {
      this.Subjects = data as Subject[];
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
        QuizName:''
      }
      if (this.questions) {
        this.questions.map(y => y.selected = false);
      }
    }
  }
  fetchReqQues(form: NgForm) {
    console.log(form.value);
    this.service.quizForm = form.value;
    this.service.getQuesOfUserConstraints(form.value).subscribe((data: any) => {
      data.forEach(obj => obj.selected = false);
      this.questions = data;
      this.length = this.questions.length;
      console.log(this.questions);
      this.checkVal();
    });
  }
  checkVal() {
    this.val = true;
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
}